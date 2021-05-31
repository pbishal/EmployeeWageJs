//UC1
{
    //constants
    const IS_ABSENT=0;

    //using random function to identify employee is present or absent
    let empCheck=Math.floor(Math.random()*10)%2;

    //using programming constructs that is selection statement
    if(empCheck==IS_ABSENT)
    {
        console.log("UC1: Employee is absent");
    }
    else 
    {
        console.log("UC1: Employee is present");
    }
}

{
    //UC2
    //constants
    const IS_FULL_TIME=1;
    const IS_PART_TIME=2;
    const PART_TIME_HRS=4;
    const FULL_TIME_HRS=8;
    const WAGE_PER_HR=20;

    let empHrs=0;
    let empCheck=Math.floor(Math.random()*10)%3;
    switch(empCheck)
    {
        case IS_PART_TIME:
            empHrs=PART_TIME_HRS;
            break
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HRS;
            break;
        default:
    }
    let empWage=empHrs*WAGE_PER_HR;
    console.log("UC2: DailyWage is:" +empWage);
}
//UC3
{
    const IS_FULL_TIME=1;
    const IS_PART_TIME=2;
    const PART_TIME_HRS=4;
    const FULL_TIME_HRS=8;
    const WAGE_PER_HR=20;

    let empCheck=Math.floor(Math.random()*10)%3;

    function getWorkingHrs(empCheck)
    {
        switch(empCheck)
        {
            case IS_PART_TIME:
                return PART_TIME_HRS;
            
            case IS_FULL_TIME:
                return FULL_TIME_HRS;

            default:
                return 0;
        }
    }
    let empHrs=getWorkingHrs(empCheck);
    let empWages=empHrs*WAGE_PER_HR;
    console.log("UC3: implemented functions: Daily Wage is :"+empWages);

    //UC4
    //constants
    const NUM_OF_WORKING_DAYS=20;
    let totalEmpWage=0;

    for(let i=0; i<NUM_OF_WORKING_DAYS; i++)
    {
        let empCheck=Math.floor(Math.random()*10)%3;
        let empHrs=getWorkingHrs(empCheck);
        let empWages=empHrs*WAGE_PER_HR;
        totalEmpWage+=empWages;
    }
    console.log("UC4: for loop: TotalEmpWage for "+NUM_OF_WORKING_DAYS+" Days:"+totalEmpWage);

    //UC5
    const MAX_HRS_IN_MONTH=100;
    const MAX_DAYS=10
    let totalWorkingHrs=0;
    let totalDays=1;

    let empWageArray=new Array();

    function GetDailyWage(empHrs)
    {
        return empHrs*WAGE_PER_HR;
    }
    while(totalWorkingHrs<MAX_HRS_IN_MONTH && totalDays<MAX_DAYS)
    {
        let empCheck=Math.floor(Math.random(10)*10)%3;
        let empHrs=getWorkingHrs(empCheck);
        empWageArray.push(GetDailyWage(empHrs));
        totalWorkingHrs+=empHrs;
        totalDays++;
    }
    let totalWages=totalWorkingHrs*WAGE_PER_HR;
    console.log("UC5: While loop: TotalEmpWage:"+totalWages);
    console.log("UC6: Array Concept: TotalEmpWage:"+totalWages);

    for(let wage of empWageArray)
    {
        console.log(wage);
    }
    //UC 7A using for each helper method to find totalEmpWage
    let totalWage=0;
    function sum(DailyWage)
    {
        totalWage+=DailyWage;
    }
    empWageArray.forEach(sum);
    console.log("UC-7A-using foreach helper method "+totalWage);

    ////UC 7A usingreduce helper method to find totalEmpWage
    function getTotalWage(total, DailyWage)
    {
        return total+DailyWage;
    }
    console.log("UC-7A-using reduce helper method "+empWageArray.reduce(getTotalWage,0));

    //UC 7B using map help function - storing day and also daily wage in map
    let dailyCount=0;
    function mapForEmpWage(DailyWage)
    {
        dailyCount++;
        return dailyCount+"="+DailyWage;
    }
    let mapResult=empWageArray.map(mapForEmpWage);
    console.log("UC 7B using map help function- storing day and also daily wage");
    console.log(mapResult);

    //UC 7C using filter function- display fulltime employee wage
    function mapForEmp(DailyWage)
    {
        return DailyWage.includes("160");
    }
    let fullTimeMap=mapResult.filter(mapForEmp);
    console.log("UC 7C using filter function- display full time employee wage ");
    console.log(fullTimeMap);

    //UC 7D using find function- looking for first occurance of fulltime employee result
    console.log("UC 7D using find function- looking for first occurance of fulltime employee result");
    console.log(fullTimeMap.find(mapForEmp))

    //UC 7E using every helper function- checking whether all elements are fulltime or not 
    console.log("UC 7D every helper function- checking whether all elements are fulltime or not");
    console.log(fullTimeMap.every(mapForEmp));

    //UC 7F using some helper function- checking whether parttime element present or not
    function mapForPartTimeEmp(DailyWage)
    {
        return DailyWage.includes("80");
    }
    console.log("UC 7F using some helper function- checking whether parttime element present or not");
    console.log(mapResult.some(mapForPartTimeEmp));

    //UC 7G using reduce helper function- finding out number of working days
    let numberOfDays=0;
    function findNumbnerOfDays(numberOfDays, DailyWage)
    {
        if(DailyWage>0)
        return numberOfDays++;

        return numberOfDays;
    }
    console.log("UC 7G using reduce helper function- finding out number of working days")
    let result=empWageArray.reduce(findNumbnerOfDays);
    console.log(result);
}


