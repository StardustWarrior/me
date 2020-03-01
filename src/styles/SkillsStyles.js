export default{
    Skills:{
        width: "100%",
        padding: "2% 0",
        transition: "all 400ms ease-in-out",
        "& h2":{
            margin: "0 0 10px 0"
        },
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            padding: "5% 0",
        }
    },
    SkillsHeaderTitle: {
        width: "90%",
        margin: "0 auto",
    },
    SkillsGroup: {
        width: "50%",
        display: "inline-block",
        verticalAlign: "top",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
        }
    },
    SkillIconContainer: {
        color: "black",
        "& svg": {
            fontSize: "60px",
        }
    },
    SkillsContainer: {
        width: "90%",
        margin: "0 auto",
        textAlign: "left",
        paddingBottom: "20px",
        "& p":{
            margin: "0"
        }
    },
    skillsList: {
        
    }
};