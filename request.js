// const { url } = require("inspector")
// const { get } = require("request");
// const { json } = require("stream/consumers");

function p(date)
{
    console.log(date)
}

//=======================================test=============================================================================

PersonalAccessToken = "token"

//========================================================================================================================



//github認証

// const github_data = fetch('https://api.github.com/authorizations',get,date= '{"note","test"}');

const url_github = 'https://api.github.com/authorizations'

async function OAthGithub(){
    
    let response = await fetch(
        url_github,
        {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${PersonalAccessToken}`,
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }

    );

    try{
        if (response.ok) 
        {
            let json = await response.json();
            console.log(json);
        } 

        else 
        {
            console.error("HTTP-ERROR:" + response.status)
        }
    }

    catch(error) {
        console.error(error);
    }
}



OAthGithub();


// githubREST-API/Request