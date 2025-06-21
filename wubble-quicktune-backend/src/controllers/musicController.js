const { responseManager, musicService } = require("../services");

const get = async(request,response) => {
    console.log("Added")
    try{
        const result = await musicService.fetchMusic(request.body)
        return responseManager.sendSuccessResponse(response,result,'Track fetched successfully')
    }catch(err){
        return responseManager.sendErrorResponse(response,err,'Cannot fetch Track')
    }
}

module.exports = {get};