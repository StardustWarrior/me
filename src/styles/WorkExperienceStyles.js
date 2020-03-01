export default{
    WorkExperience:{
        width: "100%",
        padding: "2% 0",
        transition: "all 400ms ease-in-out",
        background: "rgba(17, 35, 228, 0.60)",
        color: "#FFFFFF",
        "& h2":{
            margin: "0 0 10px 0"
        },
    },
    WorkExperienceHeaderTitle: {
        width: "90%",
        margin: "0 auto",
    },
    WorkExperiencesGroup: {
        width: "50%",
        display: "inline-block",
        verticalAlign: "top",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
        }
    },
    WorkExperiencesContainer: {
        width: "90%",
        margin: "0 auto",
        paddingBottom: "20px",
        textAlign: "left",
        "& p":{
            margin: "0"
        }
    },
    KeyTasksContainer: {
        width: "90%",
        margin: "0 auto",
        textAlign: "left",
        "& p":{
            margin: "0"
        }
    },
    WorkExperienceList: {
        
    }
};