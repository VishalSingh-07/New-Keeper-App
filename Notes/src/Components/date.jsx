import React from "react"
function date() {
	const now = new Date().toLocaleDateString()
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [time, setTime] = React.useState(now)
      function updateTime() {
            const newTime = new Date().toLocaleTimeString();
            setTime(newTime);
      }
      setInterval(updateTime,1000)
	return (
            <div>
			<h1 className="DateStyle">
				<i class="fas fa-clock clockicon"></i>
				{time}
			</h1>
		</div>
	)
}
export default date;
