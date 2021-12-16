import { useSelector } from 'react-redux'
import { Card, Image} from 'semantic-ui-react'
import { getUserById } from '../redux/selectors/usersSelectors'
import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
  const params = useParams()
  const userDetails = useSelector((state) =>
    getUserById(state, parseInt(params.id))
  )
  
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
