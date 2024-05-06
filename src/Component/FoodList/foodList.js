import { useState } from "react";

const FoodList = () => {
 
    const [isfirstCardEnable, setisFirstcardEnable] = useState(false);
    const [isSeconCardEnable, setSecondCardEnable] = useState(false);
    const [isformEnabled, setFormEnable] = useState(false);
    
    const handleAddFood = () => {
        setisFirstcardEnable(true);
        setSecondCardEnable(true);
    };
    
    const handleFormClick = () => {
        setFormEnable(true);
    };
    
    return (
        <>
            <div>
                <button style={{ display: "flex", justifyContent: "center" }}
                        onClick={handleAddFood}>Add Food</button>
                {isfirstCardEnable && (
                    <div className="card-container">
                        <form onClick={handleFormClick}
                              style={{ opacity: isformEnabled ? 1 : 0.5 }}>
                            <input type="text" name="itemName" placeholder="ItemName"/>
                            <input type="text" name="foodName" placeholder="foodName"/>
                            <div>
                                <label>Spiciness Level:</label>
                                <input type="number" name="spicinessLevel" min="0" max="10"/>
                            </div>
                        </form>
                        {isSeconCardEnable && <button >Save</button>}
                    </div>
                )}
                <ul className="list"></ul>
            </div>
        </>
    );
}

export default FoodList;
