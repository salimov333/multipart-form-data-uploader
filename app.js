const getElById = id => document.getElementById(id);
const createEl = el => document.createElement(el);

const profileForm = getElById("profile_form");
const profileSubmitter = getElById("submit");
const profileSection = getElById("profile_Section");

profileSection.style.display = "none";


profileForm.addEventListener("submit", handleSubmit);


async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(profileForm, profileSubmitter);
    try {
        const response = await fetch("http://localhost:3000/profile", {
            method: "POST",
            body: formData,

        });
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        createProfile(data);
        profileForm.reset();
    } catch (error) {
        console.error(error);

    }
}


function createProfile(profileObject) {
    const { name, email, country, bio, avatarURI, galleryURIs } = profileObject

    const greet = createEl("h2");
    const info = createEl("div");
    const avatarContainer = createEl("div");
    avatarContainer.classList.add("avatar_container")
    const galleryContainer = createEl("div");
    galleryContainer.classList.add("gallery_container")

    greet.textContent = `${name}'s Profile`;


    if (avatarURI) {
        const avatarImg = createEl("img");
        avatarImg.setAttribute("src", avatarURI)
        avatarImg.setAttribute("alt", "Avatar");
        avatarImg.classList.add("avatar_img");
        avatarContainer.appendChild(avatarImg);
    }

    if (galleryURIs) {
        galleryURIs.forEach((uri, i) => {
            const galleryImgContainer = createEl("div");
            const galleryImg = createEl("img");
            galleryImg.setAttribute("src", uri);
            galleryImg.setAttribute("alt", `Gallery-image-${i}`);
            galleryImg.classList.add("gallery_img");
            galleryImgContainer.appendChild(galleryImg);
            galleryContainer.appendChild(galleryImgContainer);
        });
    }

    info.classList.add("info")
    info.innerHTML = `
        <span> Email: ${email} </span> | <span> Country: ${country} </span> 
        <p> Bio: ${bio} </p>
    `;

    profileSection.innerHTML = "";
    profileSection.append(greet, avatarContainer, info, galleryContainer);
    profileSection.style.display = "flex";
}