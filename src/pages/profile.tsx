import React, { FC, useEffect } from 'react'
import { navigate } from 'gatsby'

import { ProfileContainer, UserViewContainer } from '../components/Profile/profile.styles'
import ProfileMenu from '../components/Profile/ProfileMenu/ProfileMenu.component'
import UserSettings from '../components/Profile/UserSettings/UserSettings.component'
import { useAuthContext } from '../hooks/useAuthHook'
import SEO from '../components/Gatsby/SEO'

const Profile: FC = () => {
	const { user } = useAuthContext()

	useEffect(
		() => {
			if (!user) navigate('/', { replace: true })
		},
		[ user ],
	)

	return (
		<ProfileContainer>
			<SEO title='Profile' />
			<UserViewContainer>
				<ProfileMenu user={user} />
				<UserSettings />
			</UserViewContainer>
		</ProfileContainer>
	)
}

export default Profile
