

export default function Toggle(){
    return(<>
    <div>
    <div className="mb-3">
        <div className="relative inline-block w-10 mr-2 mt-3 align-middle select-none">
            <input type="checkbox" name="toggle" id="Blue" className="checked:bg-sky-600 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label htmlFor="Blue" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                </label>
            </div>
            
        </div>
        </div>
    </>)
}