// import styles 
import "./BasicInfo.css"

export function BasicInfo({ fullName, setFullName, email, setEmail, phoneNumber, setPhoneNumber, location, setLocation}) {
    
    const handleFullName = (event) => {
        setFullName(event.target.value);
    };

    const handleEmail = (event) => { 
        setEmail(event.target.value);
    }

    const handlePhoneNumber = (event) => { 
        setPhoneNumber(event.target.value);
    }

    const handleLocation = (event) => { 
        setLocation(event.target.value);
    }

    return (
        <div className="BasicInfo">

            <h2> Basic Info </h2>

            <input
                type="text"
                value={fullName}
                onChange={handleFullName}
                placeholder="Full Name"
            />

            <input
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Email"
            />

            <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                placeholder="Phone Number"
            />

            <input
                type="text"
                value={location}
                onChange={handleLocation}
                placeholder="City"
            />

        </div>
    );
}