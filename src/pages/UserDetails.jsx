import { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Card, Image} from 'semantic-ui-react'
import { getUserById } from '../redux/selectors/usersSelectors'
import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
  // const user = {
  //   avatar: 'https://reqres.in/img/faces/1-image.jpg',
  //   email: 'george.bluth@reqres.in',
  //   first_name: 'George',
  //   id: 1,
  //   last_name: 'Bluth',
  // }
  const params = useParams()

  const userDetails = useSelector((state) =>
    getUserById(state, parseInt(params.id))
  )

  useEffect(() => {})
  return (
    <Card>
      <Image src={userDetails.avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {userDetails.first_name + ' ' + userDetails.last_name}{' '}
        </Card.Header>
        <Card.Meta>{userDetails.email}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default UserDetailsPage
