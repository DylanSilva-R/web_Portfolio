
const scenes = document.querySelectorAll('.scene');

function screenTransition(index)
{
    // Applying 
    const sceneSize = scenes.length;

    for(let i = 0; i < sceneSize; i++)
    {

        if(scenes[i].classList.contains('active'))
        {
            scenes[i].classList.remove('active');
            scenes[index].classList.add('active');
        }
    }
}