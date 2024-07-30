import s from './signIn.module.scss'

export const SignIn = () => {
  return (
    <div className={s.root}>
      <form>
        <div className={s.container}>
          <label className={s.label} htmlFor={'user'}>
            UserName
          </label>
          <input id={'user'} name={'user'} />
        </div>

        <div className={s.container}>
          <label className={s.label} htmlFor={'password'}>
            Password
          </label>
          <input id={'password'} name={'password'} />
        </div>
      </form>
    </div>
  )
}
