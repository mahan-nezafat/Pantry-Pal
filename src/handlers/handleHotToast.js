import toast from "react-hot-toast"

export const handleHotToast = (type, message, promiseData) => {
    switch (type) {
        case 'blank':
            return toast(message, {
                // duration,
                position: 'bottom-center'
            })        
        case 'success':
            return toast.success(message, {
                // duration,
                position: 'bottom-center'
            })                
        
        case 'error':
            return toast.error(message, {
                // duration,
                position: 'bottom-center'
            })                
    
        case 'loading':
            return toast.loading(message, {
                // duration,
                position: 'bottom-center'
            })
        case 'promise':
            // console.log(promiseData)
            return toast.promise(promiseData, {
                loading: message.loading,
                success: message.success,
                error: message.error,
                position: 'bottom-center'
            })                

        default:
            break;
    }
}