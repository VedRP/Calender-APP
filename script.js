let months = ["January", "February", "March","April","May", "June", "July", "August", "September", "October", "November", "December"];

function isleap(year)
{
    return (year%4==0 && year%100!=0) || (year%400==0);
}

function display()
{

  let out=document.getElementById("output");
  out.innerHTML="";

    let year = +document.getElementById("year").value;

    if(!year)
    {
        out.innerText="Enter valid year";
        return;
    }

    let dates = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(isleap(year))
    {
        dates[1] = 29;
    }

    let start = 6;

    if(year >= 2000)
    {
        for(let z = 2000; z < year; z++)
        {
            if(isleap(z))
                start = (start + 2) % 7;
            else
                start = (start + 1) % 7;
        }
    }
    else
    {
        for(let z = 1999; z >= year; z--)
        {
            if(isleap(z))
                start = (start - 2 + 7) % 7;
            else
                start = (start - 1 + 7) % 7;
        }
    }

    let tempStart = start;

    for(let i=0; i<12; i++)
    {
        out.innerText+=months[i]+"\n";
        // Match the 3-character-wide date cells printed below.
        out.innerText+="S  M  T  W  T  F  S\n";
       

        let total = dates[i];
        let output = "";

        output += "   ".repeat(tempStart);

        for(let j=1; j<=total; j++)
        {
            output += (j < 10 ? j + "  " : j + " ");

            if((j + tempStart) % 7 === 0)
            {
                output += "\n";
            }
        }

       out.innerText += output +"\n\n";
        tempStart = (tempStart + total) % 7;
    }
}