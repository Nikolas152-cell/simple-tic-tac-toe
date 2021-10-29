window.onload = function ()
{
    for(var i = 0; i<9; i++)
    {
        document.getElementById('game').innerHTML+='<div class="block"></div>'
    }

    var turn = 0;
    document.getElementById('game').onclick = function (event)
    {
        console.log(event);
        if(event.target.className == 'block')
        {
            if(turn%2==0)
            {
                event.target.innerHTML = 'X';
            }
            else{
                event.target.innerHTML = '0';
            }
            turn++;
        }
        checkWinner();
    }

}

function checkWinner()
{
    var allBlocks = document.getElementsByClassName('block');
    if((allBlocks[0].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' &&  allBlocks[8].innerHTML == 'X')
        || allBlocks[0].innerHTML == 'X' && allBlocks[3].innerHTML == 'X' &&  allBlocks[6].innerHTML == 'X' ||
        allBlocks[1].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' &&  allBlocks[7].innerHTML == 'X' ||
        allBlocks[2].innerHTML == 'X' && allBlocks[5].innerHTML == 'X' &&  allBlocks[8].innerHTML == 'X'
        || allBlocks[2].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' &&  allBlocks[6].innerHTML == 'X')
    {
        alert("Победили крестики");
        return;
    }
    else if((allBlocks[0].innerHTML == '0' && allBlocks[4].innerHTML == '0' &&  allBlocks[8].innerHTML == '0')
        || allBlocks[0].innerHTML == '0' && allBlocks[3].innerHTML == '0' &&  allBlocks[6].innerHTML == '0' ||
        allBlocks[1].innerHTML == '0' && allBlocks[4].innerHTML == '0' &&  allBlocks[7].innerHTML == '0' ||
        allBlocks[2].innerHTML == '0' && allBlocks[5].innerHTML == '0' &&  allBlocks[8].innerHTML == '0'
        || allBlocks[2].innerHTML == '0' && allBlocks[4].innerHTML == '0' &&  allBlocks[6].innerHTML == '0')
    {
        alert("Победили нолики");
        return;
    }

}