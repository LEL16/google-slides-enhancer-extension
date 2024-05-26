async function expandSlides() {
    const presentationId = window.location.pathname.split('/')[3];
    console.log(presentationId);
    const googleAPIKey = "AIzaSyA9zw8cCdIl-viHesXuA8oeUU-opAjVcc0";
    console.log(googleAPIKey);
    const googleSlidesApiURL = "https://slides.googleapis.com/v1/presentations/${presentationId}?key=${apiKey}";

    const response = await fetch(googleSlidesApiURL, {
        method: "GET",
        headers: {
            "Authorization": "Bearer ${gapi.auth.getToken().access_token}"
        }
    });

    const requests = slides.map(slide => ({
        createSlide: {
            slideLayoutReference: {
                predefinedLayout: "TITLE_AND_BODY"
            },
            objectId: "new_slide_${slide.objectId}"
        }   
    }));

    const batchUpdateApi = "https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate?key=${apiKey}";
    await fetch(batchUpdateApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer ${gapi.auth.getToken().access_token}"
        },
        body: JSON.stringify({ requests })
    });

    alert("Slides expanded!")
}

expandSlides();