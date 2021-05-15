import React from 'react';

const Signin = () => {
	return (
		<article className='br3 ba  b--black-10 mv4 w-80 w-50-m w-25-l mw6 shadow-5 center'>
			<main className='pa4 black-80'>
				<form className='measure center'>
					<fieldset
						id='sign_up'
						className='ba b--transparent ph0 mh0'>
						<legend className='f2 fw6 ph0 mh0 center'>
							Sign In
						</legend>
						<div className='mt3'>
							<label
								className='db fw6 lh-copy f6'
								for='email-address'>
								Email
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80'
								type='email'
								name='email-address'
								id='email-address'
							/>
						</div>
						<div className='mv3'>
							<label
								className='db fw6 lh-copy f6'
								for='password'>
								Password
							</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80'
								type='password'
								name='password'
								id='password'
							/>
						</div>
						{/* <label className='pa0 ma0 lh-copy f6 pointer'>
							<input type='checkbox' /> Remember
							me
						</label> */}
					</fieldset>
					<div className=''>
						<input
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
							value='Sign in'
						/>
					</div>
					<div className='lh-copy mt3'>
						<a
							href='#0'
							className='f6 link dim black db'>
							Register
						</a>
						{/* <a
							href='#0'
							className='f6 link dim black db'>
							Forgot your password?
						</a> */}
					</div>
				</form>
			</main>
		</article>
	);
};

export default Signin;