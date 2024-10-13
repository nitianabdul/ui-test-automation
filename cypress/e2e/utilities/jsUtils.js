class jsUtils {

    static randomNumber() {
        return (new Date()).toISOString().replace(/[^0-9]/g, "").slice(5, -3)+""+Math.floor((Math.random() * 1000) + 1)
    }
}

export default jsUtils
