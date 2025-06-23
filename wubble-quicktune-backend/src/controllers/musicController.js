const { responseManager, musicService } = require("../services");

const get = async(request,response) => {
    try{
        const result = await musicService.fetchMusic(request.body)
        return responseManager.sendSuccessResponse(response,result,'Track fetched successfully')
    }catch(err){
        return responseManager.sendErrorResponse(response,err,'Cannot fetch Track')
    }
}

module.exports = {get};