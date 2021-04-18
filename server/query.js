const queryList = (eID) => {
    
    const weeklyNormalHours =`(SELECT 
        (5 - COUNT(a.Date)) * 8
    FROM
        absences a
    WHERE
        a.EmpID = w.EmpID
            AND (a.Date BETWEEN w.Dateprior AND w.Date))`;

    const weeklyOvertime = `(SELECT 
        COALESCE(SUM(o.overtime), 0)
    FROM
        overtime o
    WHERE
        o.EmpID = w.EmpID
            AND (o.Date BETWEEN w.Dateprior AND w.Date))`;
    
    const getCurrentScore = `SELECT 
    final_score
FROM
    weekly_score
WHERE
    EmpID = ${eID}
        AND weekNo = (SELECT 
            MAX(weekNo)
        FROM
            weekly_score
        WHERE
            EmpID = ${eID})`; 

    const getProjectinfo = `SELECT 
    P.projectID, P.ProjectName, P.ProjDesc, D.DeptName
FROM
    employee E,
    project P,
    department D
WHERE
    E.empID = ${eID}
        AND E.ProjectID = P.ProjectID
        AND E.DeptID = D.DeptID`;
        
    const getScoreHistory = `SELECT Date, final_score, 
    ${weeklyNormalHours} AS normalTime,
    ${weeklyOvertime} AS overTime
    FROM
        weekly_score w
    WHERE
        EmpID = ${eID}
    ORDER BY WeekNo DESC limit 10`;

    const getAbsentDays =`SELECT 
    COUNT(Date) as absent
        FROM
            absences
        WHERE
            EmpID = ${eID}`;

    const getPresentDays =`SELECT 
        COUNT(weekNo) * 5 - (SELECT 
                COUNT(Date)
            FROM
                absences
            WHERE
                EmpID = ${eID}) AS present
        FROM
            weekly_score
        WHERE
            EmpID = ${eID}`;

    const getTeamMates=`SELECT 
        CONCAT(e.Fname, ' ', e.LName) AS name,
        (SELECT 
                p.Number
            FROM
                phone_number p
            WHERE
                p.empID = e.empID limit 1) AS phno,
        e.emailID AS email,
        roleEmployee(e.empID) AS role,
        (SELECT 
                COALESCE(SUM(w.final_score), 0)
            FROM
                weekly_score w
            WHERE
                w.EmpID = e.EmpID) AS mate_score
    FROM
        employee e
    WHERE
        e.ProjectID = (SELECT 
                projectID
            FROM
                employee
            WHERE
                empid = ${eID}) and e.EmpID <> ${eID}
    ORDER BY role `;
    
    const getTotalScore = `SELECT 
        COALESCE(SUM(final_score), 0) as total_score
    FROM
        weekly_score 
    WHERE
        EmpID = ${eID}`;
    
    const getPersonalInfo=`SELECT 
        concat(FName,' ',LName) as fullName,
        empID,
        emailID,
        DateOfBirth,
        Sex,
        address,
        (SELECT 
                p.ProjectName
            FROM
                project p
            WHERE
                p.projectID = e.ProjectID) AS projectName,
        (SELECT 
                d.DeptName
            FROM
                department d
            WHERE
                d.DeptID = e.DeptID) AS DeptName
    FROM
        employee e
    WHERE
        e.EmpID =  ${eID}`;
    
    const getPhoneNumers = `select Number as phoneNumber from phone_number where empID=${eID}`;

    const getStats= `SELECT COALESCE(SUM(final_score),0) as totalscore, 
    COALESCE(SUM(${weeklyNormalHours}),0) AS totalNormalHours,
    COALESCE(SUM(${weeklyOvertime}),0) AS totalOvertime
    FROM
        weekly_score w
    WHERE
        EmpID = ${eID}`;

    const getLeaderboard = `SELECT 
    (SELECT 
            CONCAT(e.FName, ' ', e.LName)
        FROM
            employee e
        WHERE
            e.empid = w.empid) AS fullname,
    (SELECT 
        roleEmployee(e.empID)
        FROM
            employee e
        WHERE
            e.empid = w.empid) AS role,
    COALESCE(SUM(final_score), 0) AS totalscore,
    COALESCE(SUM((SELECT 
                    (5 - COUNT(a.Date)) * 8
                FROM
                    absences a
                WHERE
                    a.EmpID = w.EmpID
                        AND (a.Date BETWEEN w.Dateprior AND w.Date))),
            0) AS totaltime,
    COALESCE(SUM((SELECT 
                    COALESCE(SUM(o.overtime), 0)
                FROM
                    overtime o
                WHERE
                    o.EmpID = w.EmpID
                        AND (o.Date BETWEEN w.Dateprior AND w.Date))),
            0) AS totalovertime
FROM
    weekly_score w
GROUP BY w.EmpID
HAVING w.empID IN (SELECT 
        e.empid
    FROM
        employee e
    WHERE
        e.deptID = (SELECT 
                deptID
            FROM
                employee
            WHERE
                empID = ${eID})
            AND e.ProjectID IS NOT NULL)
ORDER BY totalscore DESC , totaltime DESC , totalovertime DESC`;

    const getFullName = `SELECT 
        CONCAT(FName, ' ', LName) as FullName
    FROM
        employee
    WHERE
        empid = ${eID}`;  
    
    const getDepartment = `select deptname from department where DeptID =(select DeptID from employee where EmpID = ${eID})`;

    const getCurrentRecordMembers = `SELECT empID,
        (SELECT 
                CONCAT(e.FName, ' ', e.LName)
            FROM
                employee e
            WHERE
                e.empid = w.empid) AS fullname,
        final_score AS score,
        (SELECT 
                        (5 - COUNT(a.Date)) * 8
                    FROM
                        absences a
                    WHERE
                        a.EmpID = w.EmpID
                            AND (a.Date BETWEEN w.Dateprior AND w.Date))
                AS normalhours,
        (SELECT 
                        COALESCE(SUM(o.overtime), 0)
                    FROM
                        overtime o
                    WHERE
                        o.EmpID = w.EmpID
                            AND (o.Date BETWEEN w.Dateprior AND w.Date)) AS overtime
    FROM
        weekly_score w
        WHERE
            weekNo = (SELECT 
                MAX(weekNo)
            FROM
                weekly_score
            WHERE
                EmpID =  ${eID}) and empid in (select e.empID FROM employee e where e.ProjectID = (SELECT projectID FROM employee WHERE empid =  ${eID})  and e.EmpID <>  ${eID})`;
    
    const getCurrentRecordLeaders =`SELECT empID,
    (SELECT 
            CONCAT(e.FName, ' ', e.LName)
        FROM
            employee e
        WHERE
            e.empid = w.empid) AS fullname,
    final_score AS score,
    (SELECT 
                    (5 - COUNT(a.Date)) * 8
                FROM
                    absences a
                WHERE
                    a.EmpID = w.EmpID
                        AND (a.Date BETWEEN w.Dateprior AND w.Date))
            AS normalhours,
    (SELECT 
                    COALESCE(SUM(o.overtime), 0)
                FROM
                    overtime o
                WHERE
                    o.EmpID = w.EmpID
                        AND (o.Date BETWEEN w.Dateprior AND w.Date)) AS overtime
FROM
    weekly_score w
    WHERE
        weekNo = (SELECT 
            currentweekNo
        FROM
            department
        WHERE
            managerid =  ${eID}) and empid in (select p.leaderid FROM project p where p.deptid = (SELECT deptid FROM department WHERE managerid =  ${eID}) );`


    const getDateLeader = `select max(date) as date from weekly_score where empid =${eID}`;
    const getLUWeekNoLeader = `select max(WeekNo) as weekno from weekly_score where empid = ${eID}`;
    const getLUWeekNoManager =`select currentweekno as weekno from department where managerid = ${eID}`;
    const getDateManager = `select distinct date from weekly_score where weekno = (select currentweekno from department where managerid = ${eID}) `
    
    const getDeptInfo = `SELECT 
            (select concat(fname,' ',lname) from employee where empid = ${eID}) as name,d.deptname as deptName,
            d.deptid as deptId,
            d.location,
            (SELECT 
                    SUM(p.revenue)
                FROM
                    project p
                WHERE
                    p.DeptID = d.deptid) AS totalRevenue,
            (SELECT 
                    COUNT(e.empid)
                FROM
                    employee e
                WHERE
                    e.deptid = d.deptid) AS totalemployees,
            (SELECT 
                    COUNT(p.projectid)
                FROM
                    project p
                WHERE
                    p.DeptID = d.deptid) AS totalProjects
        FROM
            department d
        WHERE
            d.managerid = ${eID}`;
    
    const getProjDept = `SELECT 
    projectname,
    (SELECT 
            CONCAT(fname, ' ', lname)
        FROM
            employee
        WHERE
            empid = leaderid) AS fullName,
    (SELECT 
            number
        FROM
            phone_number
        WHERE
            empid = leaderid
        LIMIT 1) AS phonuNumber,
    (SELECT 
            emailid
        FROM
            employee
        WHERE
            empid = leaderid) AS email,
    revenue
FROM
    project
WHERE
    DeptID = (SELECT 
            deptid
        FROM
            department
        WHERE
            managerid = ${eID})`;

    
    
    return [getProjectinfo,getCurrentScore,getScoreHistory,getAbsentDays,getPresentDays,getTeamMates,getTotalScore,getPersonalInfo,getStats,getPhoneNumers,getLeaderboard,getFullName,getDepartment,getCurrentRecordMembers,getCurrentRecordLeaders,getDateLeader,getLUWeekNoLeader,getLUWeekNoManager,getDateManager,getDeptInfo,getProjDept];
}
 module.exports= queryList;