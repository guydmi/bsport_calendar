import axios from 'axios'

const api = "https://api.staging.bsport.io/api/v1"
const headers = {Authorization: "Token f18688960a8942c83d238b04e88389ac126bf55c"}

const getCardData = async (date) => {
    async function getOffers() {
        const res = await axios.get(api+'/offer', {params: { company: 6, min_date: date, max_date: date }, headers})
        return res.data.results
    }
    const offer = await getOffers()

    let activityList = offer.map(obj => obj.meta_activity)
    activityList = [...new Set(activityList)]

    async function getActivities() {
        const res = await axios.get(api+'/meta-activity/?company=6&id__in='+ activityList.join(","), {headers})
        return res.data.results
    }
    const activities = await getActivities()

    let coachList = offer.map(obj => obj.coach)
    coachList = [...new Set(coachList)]

    async function getCoach() {
        const res = await axios.get(api+'/coach/?company=6&id__in='+ coachList.join(","), {headers})
        return res.data.results
    }

    const coach = await getCoach()

    let cards = []
    offer.forEach(off => {
        console.log(coach)
        let obj = {}
        obj.id = off.id
        obj.hour_start = new Date(off.date_start).getHours()
        obj.min_start = new Date(off.date_start).getMinutes()
        obj.duration = off.duration_minute
        obj.coach = coach.find(c => c.id === off.coach).user
        obj.name = activities.find(a => a.id === off.meta_activity).name
        obj.color = off.meta_activity_color
        cards.push(obj)
    })

    return cards
}

export default getCardData  