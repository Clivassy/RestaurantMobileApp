import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ZFGoxELh7DQyYqIQXdWU-c_JrvUeLgXO7g2ffkPlQRz1T4SKoV2cEmyMyKBkjnXc8OmD4uOzO7KcBfPB41yIbBMU74dnauXHXZlL23YvxZNykIncY-E3VFKSTt25Y3Yx'
    }
});