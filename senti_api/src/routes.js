export const routes = [
    {
    method: 'GET',
    path: '/',
    handler: function (request, h){
        return 'This is home'
    }
    },
    {
    method: 'POST',
    path: '/sentilize',
    handler: function (request, h){
        const payload = request.payload
        return payload
    }
    }
]