const transformUser = (userData) => {
  let userArr = [
    {name: '1', uv: userData[1], amt: userData[1]},
    {name: '2', uv: userData[2], amt: userData[2]},
    {name: '3', uv: userData[3], amt: userData[3]},
    {name: '4', uv: userData[4], amt: userData[4]},
    {name: '5', uv: userData[5], amt: userData[5]},
    {name: '6', uv: userData[6], amt: userData[6]},
    {name: '7', uv: userData[7], amt: userData[7]},
    {name: '8', uv: userData[8], amt: userData[8]},
    {name: 'Bust', uv: userData.Bust, amt: userData.Bust},
  ]
  return userArr
}

export default transformUser