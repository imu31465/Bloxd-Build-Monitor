/*! For license information please see dz8ef.272.6b543cb0.chunk.js.LICENSE.txt */
export const id = 272;
export const ids = [272];
export const modules = {
    40789: (uu, Eu, ju) => {
        ju.r(Eu), ju.d(Eu, {
          ActionCodeOperation: () => cu,
          ActionCodeURL: () => yE,
          AuthCredential: () => WE,
          AuthErrorCodes: () => Du,
          EmailAuthCredential: () => xE,
          EmailAuthProvider: () => RE,
          FacebookAuthProvider: () => sj,
          FactorId: () => qu,
          GithubAuthProvider: () => Zj,
          GoogleAuthProvider: () => Uj,
          OAuthCredential: () => HE,
          OAuthProvider: () => jj,
          OperationType: () => bu,
          PhoneAuthCredential: () => nE,
          PhoneAuthProvider: () => sU,
          PhoneMultiFactorGenerator: () => jZ,
          ProviderId: () => fu,
          RecaptchaVerifier: () => ns,
          SAMLAuthProvider: () => lj,
          SignInMethod: () => Cu,
          TotpMultiFactorGenerator: () => sZ,
          TotpSecret: () => ZZ,
          TwitterAuthProvider: () => qj,
          applyActionCode: () => vj,
          beforeAuthStateChanged: () => Zs,
          browserLocalPersistence: () => es,
          browserPopupRedirectResolver: () => RU,
          browserSessionPersistence: () => ps,
          checkActionCode: () => Kj,
          confirmPasswordReset: () => mj,
          connectAuthEmulator: () => rE,
          createUserWithEmailAndPassword: () => rj,
          debugErrorMap: () => Ou,
          deleteUser: () => Cs,
          fetchSignInMethodsForEmail: () => Ij,
          getAdditionalUserInfo: () => us,
          getAuth: () => NZ,
          getIdToken: () => xu,
          getIdTokenResult: () => Tu,
          getMultiFactorResolver: () => Ns,
          getRedirectResult: () => dU,
          inMemoryPersistence: () => lE,
          indexedDBLocalPersistence: () => Ss,
          initializeAuth: () => VE,
          initializeRecaptchaConfig: () => ss,
          isSignInWithEmailLink: () => Wj,
          linkWithCredential: () => pj,
          linkWithPhoneNumber: () => Rs,
          linkWithPopup: () => NU,
          linkWithRedirect: () => JU,
          multiFactor: () => hs,
          onAuthStateChanged: () => Xs,
          onIdTokenChanged: () => Us,
          parseActionCodeURL: () => zE,
          prodErrorMap: () => Yu,
          reauthenticateWithCredential: () => wj,
          reauthenticateWithPhoneNumber: () => uU,
          reauthenticateWithPopup: () => cU,
          reauthenticateWithRedirect: () => wU,
          reload: () => uE,
          sendEmailVerification: () => Fj,
          sendPasswordResetEmail: () => kj,
          sendSignInLinkToEmail: () => ij,
          setPersistence: () => Es,
          signInAnonymously: () => cj,
          signInWithCredential: () => Gj,
          signInWithCustomToken: () => Jj,
          signInWithEmailAndPassword: () => Qj,
          signInWithEmailLink: () => Sj,
          signInWithPhoneNumber: () => zs,
          signInWithPopup: () => bU,
          signInWithRedirect: () => pU,
          signOut: () => fs,
          unlink: () => hj,
          updateCurrentUser: () => qs,
          updateEmail: () => tj,
          updatePassword: () => xj,
          updatePhoneNumber: () => jU,
          updateProfile: () => Lj,
          useDeviceLanguage: () => ls,
          verifyBeforeUpdateEmail: () => Bj,
          verifyPasswordResetCode: () => Vj
        });
        var su = ju(40771),
          Uu = ju(40764);

        function Zu(uu, Eu) {
          var ju = {};
          for (var su in uu) Object.prototype.hasOwnProperty.call(uu, su) && Eu.indexOf(su) < 0 && (ju[su] = uu[su]);
          if (null != uu && "function" === typeof Object.getOwnPropertySymbols) {
            var Uu = 0;
            for (su = Object.getOwnPropertySymbols(uu); Uu < su.length; Uu++) Eu.indexOf(su[Uu]) < 0 && Object.prototype.propertyIsEnumerable.call(uu, su[Uu]) && (ju[su[Uu]] = uu[su[Uu]])
          }
          return ju
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Xu = ju(40776),
          lu = ju(40766);
        const qu = {
            PHONE: "phone",
            TOTP: "totp"
          },
          fu = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Cu = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          bu = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          cu = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Nu() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Ou = function() {
            return {
              "admin-restricted-operation": "This operation is restricted to administrators only.",
              "argument-error": "",
              "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
              "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
              "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
              "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
              "cordova-not-ready": "Cordova framework is not ready.",
              "cors-unsupported": "This browser is not supported.",
              "credential-already-in-use": "This credential is already associated with a different user account.",
              "custom-token-mismatch": "The custom token corresponds to a different audience.",
              "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
              "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
              "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
              "email-change-needs-verification": "Multi-factor users must always have a verified email.",
              "email-already-in-use": "The email address is already in use by another account.",
              "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
              "expired-action-code": "The action code has expired.",
              "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
              "internal-error": "An internal AuthError has occurred.",
              "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
              "invalid-app-id": "The mobile app identifier is not registed for the current project.",
              "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
              "invalid-auth-event": "An internal AuthError has occurred.",
              "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
              "invalid-continue-uri": "The continue URL provided in the request is invalid.",
              "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
              "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
              "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
              "invalid-email": "The email address is badly formatted.",
              "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
              "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
              "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
              "invalid-credential": "The supplied auth credential is malformed or has expired.",
              "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
              "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
              "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
              "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
              "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
              "wrong-password": "The password is invalid or the user does not have a password.",
              "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
              "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
              "invalid-provider-id": "The specified provider ID is invalid.",
              "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
              "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
              "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
              "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
              "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
              "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
              "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
              "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
              "missing-continue-uri": "A continue URL must be provided in the request.",
              "missing-iframe-start": "An internal AuthError has occurred.",
              "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
              "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
              "missing-password": "A non-empty password must be provided",
              "missing-multi-factor-info": "No second factor identifier is provided.",
              "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
              "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
              "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
              "app-deleted": "This instance of FirebaseApp has been deleted.",
              "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
              "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
              "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
              "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
              "no-auth-event": "An internal AuthError has occurred.",
              "no-such-provider": "User was not linked to an account with the given provider.",
              "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
              "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
              "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
              "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
              "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
              "provider-already-linked": "User can only be linked to one identity for the given provider.",
              "quota-exceeded": "The project's quota for this operation has been exceeded.",
              "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
              "redirect-operation-pending": "A redirect sign-in operation is already pending.",
              "rejected-credential": "The request contains malformed or mismatching credentials.",
              "second-factor-already-in-use": "The second factor is already enrolled on this account.",
              "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
              "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
              timeout: "The operation has timed out.",
              "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
              "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
              "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
              "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
              "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
              "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
              "unverified-email": "The operation requires a verified email.",
              "user-cancelled": "The user did not grant your application the permissions it requested.",
              "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
              "user-disabled": "The user account has been disabled by an administrator.",
              "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
              "user-signed-out": "",
              "weak-password": "The password must be 6 characters long or more.",
              "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
              "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
              "missing-recaptcha-token": "The reCAPTCHA token is missing when sending request to the backend.",
              "invalid-recaptcha-token": "The reCAPTCHA token is invalid when sending request to the backend.",
              "invalid-recaptcha-action": "The reCAPTCHA action is invalid when sending request to the backend.",
              "recaptcha-not-enabled": "reCAPTCHA Enterprise integration is not enabled for this project.",
              "missing-client-type": "The reCAPTCHA client type is missing when sending request to the backend.",
              "missing-recaptcha-version": "The reCAPTCHA version is missing when sending request to the backend.",
              "invalid-req-type": "Invalid request parameters.",
              "invalid-recaptcha-version": "The reCAPTCHA version is invalid when sending request to the backend."
            }
          },
          Yu = Nu,
          hu = new su.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Du = {
            ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
            ARGUMENT_ERROR: "auth/argument-error",
            APP_NOT_AUTHORIZED: "auth/app-not-authorized",
            APP_NOT_INSTALLED: "auth/app-not-installed",
            CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
            CODE_EXPIRED: "auth/code-expired",
            CORDOVA_NOT_READY: "auth/cordova-not-ready",
            CORS_UNSUPPORTED: "auth/cors-unsupported",
            CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
            CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
            DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
            DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
            EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
            EMAIL_EXISTS: "auth/email-already-in-use",
            EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
            EXPIRED_OOB_CODE: "auth/expired-action-code",
            EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
            INTERNAL_ERROR: "auth/internal-error",
            INVALID_API_KEY: "auth/invalid-api-key",
            INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
            INVALID_APP_ID: "auth/invalid-app-id",
            INVALID_AUTH: "auth/invalid-user-token",
            INVALID_AUTH_EVENT: "auth/invalid-auth-event",
            INVALID_CERT_HASH: "auth/invalid-cert-hash",
            INVALID_CODE: "auth/invalid-verification-code",
            INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
            INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
            INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
            INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
            INVALID_EMAIL: "auth/invalid-email",
            INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
            INVALID_IDP_RESPONSE: "auth/invalid-credential",
            INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
            INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
            INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
            INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
            INVALID_OOB_CODE: "auth/invalid-action-code",
            INVALID_ORIGIN: "auth/unauthorized-domain",
            INVALID_PASSWORD: "auth/wrong-password",
            INVALID_PERSISTENCE: "auth/invalid-persistence-type",
            INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
            INVALID_PROVIDER_ID: "auth/invalid-provider-id",
            INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
            INVALID_SENDER: "auth/invalid-sender",
            INVALID_SESSION_INFO: "auth/invalid-verification-id",
            INVALID_TENANT_ID: "auth/invalid-tenant-id",
            MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
            MFA_REQUIRED: "auth/multi-factor-auth-required",
            MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
            MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
            MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
            MISSING_CODE: "auth/missing-verification-code",
            MISSING_CONTINUE_URI: "auth/missing-continue-uri",
            MISSING_IFRAME_START: "auth/missing-iframe-start",
            MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
            MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
            MISSING_MFA_INFO: "auth/missing-multi-factor-info",
            MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
            MISSING_PHONE_NUMBER: "auth/missing-phone-number",
            MISSING_SESSION_INFO: "auth/missing-verification-id",
            MODULE_DESTROYED: "auth/app-deleted",
            NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
            NETWORK_REQUEST_FAILED: "auth/network-request-failed",
            NULL_USER: "auth/null-user",
            NO_AUTH_EVENT: "auth/no-auth-event",
            NO_SUCH_PROVIDER: "auth/no-such-provider",
            OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
            OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
            POPUP_BLOCKED: "auth/popup-blocked",
            POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
            PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
            QUOTA_EXCEEDED: "auth/quota-exceeded",
            REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
            REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
            REJECTED_CREDENTIAL: "auth/rejected-credential",
            SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
            TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
            TIMEOUT: "auth/timeout",
            TOKEN_EXPIRED: "auth/user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
            UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
            UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
            UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
            UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
            UNVERIFIED_EMAIL: "auth/unverified-email",
            USER_CANCELLED: "auth/user-cancelled",
            USER_DELETED: "auth/user-not-found",
            USER_DISABLED: "auth/user-disabled",
            USER_MISMATCH: "auth/user-mismatch",
            USER_SIGNED_OUT: "auth/user-signed-out",
            WEAK_PASSWORD: "auth/weak-password",
            WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
            ALREADY_INITIALIZED: "auth/already-initialized",
            RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
            MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
            INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
            INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
            MISSING_CLIENT_TYPE: "auth/missing-client-type",
            MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
            INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
            INVALID_REQ_TYPE: "auth/invalid-req-type"
          },
          gu = new Xu.f("@firebase/auth");

        function Mu(uu) {
          if (gu.logLevel <= Xu.c.ERROR) {
            for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
            gu.error(`Auth (${Uu.f}): ${uu}`, ...ju)
          }
        }

        function eu(uu) {
          for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
          throw Ju(uu, ...ju)
        }

        function Gu(uu) {
          for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
          return Ju(uu, ...ju)
        }

        function pu(uu, Eu, ju) {
          const Uu = Object.assign(Object.assign({}, Yu()), {
            [Eu]: ju
          });
          return new su.h("auth", "Firebase", Uu).create(Eu, {
            appName: uu.name
          })
        }

        function wu(uu, Eu, ju) {
          if (!(Eu instanceof ju)) throw ju.name !== Eu.constructor.name && eu(uu, "argument-error"), pu(uu, "argument-error", `Type of ${Eu.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function Ju(uu) {
          for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
          if ("string" !== typeof uu) {
            const Eu = ju[0],
              su = [...ju.slice(1)];
            return su[0] && (su[0].appName = uu.name), uu._errorFactory.create(Eu, ...su)
          }
          return hu.create(uu, ...ju)
        }

        function du(uu, Eu) {
          if (!uu) {
            for (var ju = arguments.length, su = new Array(ju > 2 ? ju - 2 : 0), Uu = 2; Uu < ju; Uu++) su[Uu - 2] = arguments[Uu];
            throw Ju(Eu, ...su)
          }
        }

        function au(uu) {
          const Eu = "INTERNAL ASSERTION FAILED: " + uu;
          throw Mu(Eu), new Error(Eu)
        }

        function Pu(uu, Eu) {
          uu || au(Eu)
        }

        function ou() {
          var uu;
          return "undefined" !== typeof self && (null === (uu = self.location) || void 0 === uu ? void 0 : uu.href) || ""
        }

        function ku() {
          return "http:" === mu() || "https:" === mu()
        }

        function mu() {
          var uu;
          return "undefined" !== typeof self && (null === (uu = self.location) || void 0 === uu ? void 0 : uu.protocol) || null
        }
        class vu {
          constructor(uu, Eu) {
            this.shortDelay = uu, this.longDelay = Eu, Pu(Eu > uu, "Short delay should be less than long delay!"), this.isMobile = (0, su.cb)() || (0, su.fb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (ku() || (0, su.T)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function Ku(uu, Eu) {
          Pu(uu.emulator, "Emulator should always be set here");
          const {
            url: ju
          } = uu.emulator;
          return Eu ? `${ju}${Eu.startsWith("/")?Eu.slice(1):Eu}` : ju
        }
        class Vu {
          static initialize(uu, Eu, ju) {
            this.fetchImpl = uu, Eu && (this.headersImpl = Eu), ju && (this.responseImpl = ju)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void au("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void au("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void au("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const ru = {
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_PASSWORD: "wrong-password",
            MISSING_PASSWORD: "missing-password",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_REQ_TYPE: "internal-error",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            INVALID_CODE: "invalid-verification-code",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_SESSION_INFO: "missing-verification-id",
            SESSION_EXPIRED: "code-expired",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
            RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
            MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
            INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
            INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
            MISSING_CLIENT_TYPE: "missing-client-type",
            MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
            INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
            INVALID_REQ_TYPE: "invalid-req-type"
          },
          Qu = new vu(3e4, 6e4);

        function iu(uu, Eu) {
          return uu.tenantId && !Eu.tenantId ? Object.assign(Object.assign({}, Eu), {
            tenantId: uu.tenantId
          }) : Eu
        }
        async function Wu(uu, Eu, ju, Uu) {
          return Su(uu, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Zu = {},
              Xu = {};
            Uu && ("GET" === Eu ? Xu = Uu : Zu = {
              body: JSON.stringify(Uu)
            });
            const lu = (0, su.kb)(Object.assign({
                key: uu.config.apiKey
              }, Xu)).slice(1),
              qu = await uu._getAdditionalHeaders();
            return qu["Content-Type"] = "application/json", uu.languageCode && (qu["X-Firebase-Locale"] = uu.languageCode), Vu.fetch()(Fu(uu, uu.config.apiHost, ju, lu), Object.assign({
              method: Eu,
              headers: qu,
              referrerPolicy: "no-referrer"
            }, Zu))
          }))
        }
        async function Su(uu, Eu, ju) {
          uu._canInitEmulator = !1;
          const Uu = Object.assign(Object.assign({}, ru), Eu);
          try {
            const Eu = new Bu(uu),
              su = await Promise.race([ju(), Eu.promise]);
            Eu.clearNetworkTimeout();
            const Zu = await su.json();
            if ("needConfirmation" in Zu) throw Lu(uu, "account-exists-with-different-credential", Zu);
            if (su.ok && !("errorMessage" in Zu)) return Zu;
            {
              const Eu = su.ok ? Zu.errorMessage : Zu.error.message,
                [ju, Xu] = Eu.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === ju) throw Lu(uu, "credential-already-in-use", Zu);
              if ("EMAIL_EXISTS" === ju) throw Lu(uu, "email-already-in-use", Zu);
              if ("USER_DISABLED" === ju) throw Lu(uu, "user-disabled", Zu);
              const lu = Uu[ju] || ju.toLowerCase().replace(/[_\s]+/g, "-");
              if (Xu) throw pu(uu, lu, Xu);
              eu(uu, lu)
            }
          } catch (Zu) {
            if (Zu instanceof su.k) throw Zu;
            eu(uu, "network-request-failed", {
              message: String(Zu)
            })
          }
        }
        async function Iu(uu, Eu, ju, su) {
          let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Zu = await Wu(uu, Eu, ju, su, Uu);
          return "mfaPendingCredential" in Zu && eu(uu, "multi-factor-auth-required", {
            _serverResponse: Zu
          }), Zu
        }

        function Fu(uu, Eu, ju, su) {
          const Uu = `${Eu}${ju}?${su}`;
          return uu.config.emulator ? Ku(uu.config, Uu) : `${uu.config.apiScheme}://${Uu}`
        }
        class Bu {
          constructor(uu) {
            this.auth = uu, this.timer = null, this.promise = new Promise(((uu, Eu) => {
              this.timer = setTimeout((() => Eu(Gu(this.auth, "network-request-failed"))), Qu.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Lu(uu, Eu, ju) {
          const su = {
            appName: uu.name
          };
          ju.email && (su.email = ju.email), ju.phoneNumber && (su.phoneNumber = ju.phoneNumber);
          const Uu = Gu(uu, Eu, su);
          return Uu.customData._tokenResponse = ju, Uu
        }

        function tu(uu) {
          if (uu) try {
            const Eu = new Date(Number(uu));
            if (!isNaN(Eu.getTime())) return Eu.toUTCString()
          } catch (Eu) {}
        }

        function xu(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, su.Q)(uu).getIdToken(Eu)
        }
        async function Tu(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const ju = (0, su.Q)(uu),
            Uu = await ju.getIdToken(Eu),
            Zu = Au(Uu);
          du(Zu && Zu.exp && Zu.auth_time && Zu.iat, ju.auth, "internal-error");
          const Xu = "object" === typeof Zu.firebase ? Zu.firebase : void 0,
            lu = null === Xu || void 0 === Xu ? void 0 : Xu.sign_in_provider;
          return {
            claims: Zu,
            token: Uu,
            authTime: tu(Hu(Zu.auth_time)),
            issuedAtTime: tu(Hu(Zu.iat)),
            expirationTime: tu(Hu(Zu.exp)),
            signInProvider: lu || null,
            signInSecondFactor: (null === Xu || void 0 === Xu ? void 0 : Xu.sign_in_second_factor) || null
          }
        }

        function Hu(uu) {
          return 1e3 * Number(uu)
        }

        function Au(uu) {
          const [Eu, ju, Uu] = uu.split(".");
          if (void 0 === Eu || void 0 === ju || void 0 === Uu) return Mu("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const uu = (0, su.p)(ju);
            return uu ? JSON.parse(uu) : (Mu("Failed to decode base64 JWT payload"), null)
          } catch (Zu) {
            return Mu("Caught error parsing JWT payload as JSON", null === Zu || void 0 === Zu ? void 0 : Zu.toString()), null
          }
        }
        async function nu(uu, Eu) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Eu;
          try {
            return await Eu
          } catch (ju) {
            throw ju instanceof su.k && function(uu) {
              let {
                code: Eu
              } = uu;
              return "auth/user-disabled" === Eu || "auth/user-token-expired" === Eu
            }(ju) && uu.auth.currentUser === uu && await uu.auth.signOut(), ju
          }
        }
        class yu {
          constructor(uu) {
            this.user = uu, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(uu) {
            var Eu;
            if (uu) {
              const uu = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), uu
            } {
              this.errorBackoff = 3e4;
              const uu = (null !== (Eu = this.user.stsTokenManager.expirationTime) && void 0 !== Eu ? Eu : 0) - Date.now() - 3e5;
              return Math.max(0, uu)
            }
          }
          schedule() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Eu = this.getInterval(uu);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Eu)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (uu) {
              return void("auth/network-request-failed" === (null === uu || void 0 === uu ? void 0 : uu.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class zu {
          constructor(uu, Eu) {
            this.createdAt = uu, this.lastLoginAt = Eu, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = tu(this.lastLoginAt), this.creationTime = tu(this.createdAt)
          }
          _copy(uu) {
            this.createdAt = uu.createdAt, this.lastLoginAt = uu.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function Ru(uu) {
          var Eu;
          const ju = uu.auth,
            su = await uu.getIdToken(),
            Uu = await nu(uu, async function(uu, Eu) {
              return Wu(uu, "POST", "/v1/accounts:lookup", Eu)
            }(ju, {
              idToken: su
            }));
          du(null === Uu || void 0 === Uu ? void 0 : Uu.users.length, ju, "internal-error");
          const Xu = Uu.users[0];
          uu._notifyReloadListener(Xu);
          const lu = (null === (Eu = Xu.providerUserInfo) || void 0 === Eu ? void 0 : Eu.length) ? Xu.providerUserInfo.map((uu => {
            var {
              providerId: Eu
            } = uu, ju = Zu(uu, ["providerId"]);
            return {
              providerId: Eu,
              uid: ju.rawId || "",
              displayName: ju.displayName || null,
              email: ju.email || null,
              phoneNumber: ju.phoneNumber || null,
              photoURL: ju.photoUrl || null
            }
          })) : [];
          const qu = (fu = uu.providerData, Cu = lu, [...fu.filter((uu => !Cu.some((Eu => Eu.providerId === uu.providerId)))), ...Cu]);
          var fu, Cu;
          const bu = uu.isAnonymous,
            cu = !(uu.email && Xu.passwordHash) && !(null === qu || void 0 === qu ? void 0 : qu.length),
            Nu = !!bu && cu,
            Ou = {
              uid: Xu.localId,
              displayName: Xu.displayName || null,
              photoURL: Xu.photoUrl || null,
              email: Xu.email || null,
              emailVerified: Xu.emailVerified || !1,
              phoneNumber: Xu.phoneNumber || null,
              tenantId: Xu.tenantId || null,
              providerData: qu,
              metadata: new zu(Xu.createdAt, Xu.lastLoginAt),
              isAnonymous: Nu
            };
          Object.assign(uu, Ou)
        }
        async function uE(uu) {
          const Eu = (0, su.Q)(uu);
          await Ru(Eu), await Eu.auth._persistUserIfCurrent(Eu), Eu.auth._notifyListenersIfCurrent(Eu)
        }
        class EE {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(uu) {
            du(uu.idToken, "internal-error"), du("undefined" !== typeof uu.idToken, "internal-error"), du("undefined" !== typeof uu.refreshToken, "internal-error");
            const Eu = "expiresIn" in uu && "undefined" !== typeof uu.expiresIn ? Number(uu.expiresIn) : function(uu) {
              const Eu = Au(uu);
              return du(Eu, "internal-error"), du("undefined" !== typeof Eu.exp, "internal-error"), du("undefined" !== typeof Eu.iat, "internal-error"), Number(Eu.exp) - Number(Eu.iat)
            }(uu.idToken);
            this.updateTokensAndExpiration(uu.idToken, uu.refreshToken, Eu)
          }
          async getToken(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return du(!this.accessToken || this.refreshToken, uu, "user-token-expired"), Eu || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(uu, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(uu, Eu) {
            const {
              accessToken: ju,
              refreshToken: Uu,
              expiresIn: Zu
            } = await async function(uu, Eu) {
              const ju = await Su(uu, {}, (async () => {
                const ju = (0, su.kb)({
                    grant_type: "refresh_token",
                    refresh_token: Eu
                  }).slice(1),
                  {
                    tokenApiHost: Uu,
                    apiKey: Zu
                  } = uu.config,
                  Xu = Fu(uu, Uu, "/v1/token", `key=${Zu}`),
                  lu = await uu._getAdditionalHeaders();
                return lu["Content-Type"] = "application/x-www-form-urlencoded", Vu.fetch()(Xu, {
                  method: "POST",
                  headers: lu,
                  body: ju
                })
              }));
              return {
                accessToken: ju.access_token,
                expiresIn: ju.expires_in,
                refreshToken: ju.refresh_token
              }
            }(uu, Eu);
            this.updateTokensAndExpiration(ju, Uu, Number(Zu))
          }
          updateTokensAndExpiration(uu, Eu, ju) {
            this.refreshToken = Eu || null, this.accessToken = uu || null, this.expirationTime = Date.now() + 1e3 * ju
          }
          static fromJSON(uu, Eu) {
            const {
              refreshToken: ju,
              accessToken: su,
              expirationTime: Uu
            } = Eu, Zu = new EE;
            return ju && (du("string" === typeof ju, "internal-error", {
              appName: uu
            }), Zu.refreshToken = ju), su && (du("string" === typeof su, "internal-error", {
              appName: uu
            }), Zu.accessToken = su), Uu && (du("number" === typeof Uu, "internal-error", {
              appName: uu
            }), Zu.expirationTime = Uu), Zu
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(uu) {
            this.accessToken = uu.accessToken, this.refreshToken = uu.refreshToken, this.expirationTime = uu.expirationTime
          }
          _clone() {
            return Object.assign(new EE, this.toJSON())
          }
          _performRefresh() {
            return au("not implemented")
          }
        }

        function jE(uu, Eu) {
          du("string" === typeof uu || "undefined" === typeof uu, "internal-error", {
            appName: Eu
          })
        }
        class sE {
          constructor(uu) {
            var {
              uid: Eu,
              auth: ju,
              stsTokenManager: su
            } = uu, Uu = Zu(uu, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new yu(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Eu, this.auth = ju, this.stsTokenManager = su, this.accessToken = su.accessToken, this.displayName = Uu.displayName || null, this.email = Uu.email || null, this.emailVerified = Uu.emailVerified || !1, this.phoneNumber = Uu.phoneNumber || null, this.photoURL = Uu.photoURL || null, this.isAnonymous = Uu.isAnonymous || !1, this.tenantId = Uu.tenantId || null, this.providerData = Uu.providerData ? [...Uu.providerData] : [], this.metadata = new zu(Uu.createdAt || void 0, Uu.lastLoginAt || void 0)
          }
          async getIdToken(uu) {
            const Eu = await nu(this, this.stsTokenManager.getToken(this.auth, uu));
            return du(Eu, this.auth, "internal-error"), this.accessToken !== Eu && (this.accessToken = Eu, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Eu
          }
          getIdTokenResult(uu) {
            return Tu(this, uu)
          }
          reload() {
            return uE(this)
          }
          _assign(uu) {
            this !== uu && (du(this.uid === uu.uid, this.auth, "internal-error"), this.displayName = uu.displayName, this.photoURL = uu.photoURL, this.email = uu.email, this.emailVerified = uu.emailVerified, this.phoneNumber = uu.phoneNumber, this.isAnonymous = uu.isAnonymous, this.tenantId = uu.tenantId, this.providerData = uu.providerData.map((uu => Object.assign({}, uu))), this.metadata._copy(uu.metadata), this.stsTokenManager._assign(uu.stsTokenManager))
          }
          _clone(uu) {
            const Eu = new sE(Object.assign(Object.assign({}, this), {
              auth: uu,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Eu.metadata._copy(this.metadata), Eu
          }
          _onReload(uu) {
            du(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = uu, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(uu) {
            this.reloadListener ? this.reloadListener(uu) : this.reloadUserInfo = uu
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ju = !1;
            uu.idToken && uu.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(uu), ju = !0), Eu && await Ru(this), await this.auth._persistUserIfCurrent(this), ju && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const uu = await this.getIdToken();
            return await nu(this, async function(uu, Eu) {
              return Wu(uu, "POST", "/v1/accounts:delete", Eu)
            }(this.auth, {
              idToken: uu
            })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
          }
          toJSON() {
            return Object.assign(Object.assign({
              uid: this.uid,
              email: this.email || void 0,
              emailVerified: this.emailVerified,
              displayName: this.displayName || void 0,
              isAnonymous: this.isAnonymous,
              photoURL: this.photoURL || void 0,
              phoneNumber: this.phoneNumber || void 0,
              tenantId: this.tenantId || void 0,
              providerData: this.providerData.map((uu => Object.assign({}, uu))),
              stsTokenManager: this.stsTokenManager.toJSON(),
              _redirectEventId: this._redirectEventId
            }, this.metadata.toJSON()), {
              apiKey: this.auth.config.apiKey,
              appName: this.auth.name
            })
          }
          get refreshToken() {
            return this.stsTokenManager.refreshToken || ""
          }
          static _fromJSON(uu, Eu) {
            var ju, su, Uu, Zu, Xu, lu, qu, fu;
            const Cu = null !== (ju = Eu.displayName) && void 0 !== ju ? ju : void 0,
              bu = null !== (su = Eu.email) && void 0 !== su ? su : void 0,
              cu = null !== (Uu = Eu.phoneNumber) && void 0 !== Uu ? Uu : void 0,
              Nu = null !== (Zu = Eu.photoURL) && void 0 !== Zu ? Zu : void 0,
              Ou = null !== (Xu = Eu.tenantId) && void 0 !== Xu ? Xu : void 0,
              Yu = null !== (lu = Eu._redirectEventId) && void 0 !== lu ? lu : void 0,
              hu = null !== (qu = Eu.createdAt) && void 0 !== qu ? qu : void 0,
              Du = null !== (fu = Eu.lastLoginAt) && void 0 !== fu ? fu : void 0,
              {
                uid: gu,
                emailVerified: Mu,
                isAnonymous: eu,
                providerData: Gu,
                stsTokenManager: pu
              } = Eu;
            du(gu && pu, uu, "internal-error");
            const wu = EE.fromJSON(this.name, pu);
            du("string" === typeof gu, uu, "internal-error"), jE(Cu, uu.name), jE(bu, uu.name), du("boolean" === typeof Mu, uu, "internal-error"), du("boolean" === typeof eu, uu, "internal-error"), jE(cu, uu.name), jE(Nu, uu.name), jE(Ou, uu.name), jE(Yu, uu.name), jE(hu, uu.name), jE(Du, uu.name);
            const Ju = new sE({
              uid: gu,
              auth: uu,
              email: bu,
              emailVerified: Mu,
              displayName: Cu,
              isAnonymous: eu,
              photoURL: Nu,
              phoneNumber: cu,
              tenantId: Ou,
              stsTokenManager: wu,
              createdAt: hu,
              lastLoginAt: Du
            });
            return Gu && Array.isArray(Gu) && (Ju.providerData = Gu.map((uu => Object.assign({}, uu)))), Yu && (Ju._redirectEventId = Yu), Ju
          }
          static async _fromIdTokenResponse(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const su = new EE;
            su.updateFromServerResponse(Eu);
            const Uu = new sE({
              uid: Eu.localId,
              auth: uu,
              stsTokenManager: su,
              isAnonymous: ju
            });
            return await Ru(Uu), Uu
          }
        }
        const UE = new Map;

        function ZE(uu) {
          Pu(uu instanceof Function, "Expected a class definition");
          let Eu = UE.get(uu);
          return Eu ? (Pu(Eu instanceof uu, "Instance stored in cache mismatched with class"), Eu) : (Eu = new uu, UE.set(uu, Eu), Eu)
        }
        class XE {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(uu, Eu) {
            this.storage[uu] = Eu
          }
          async _get(uu) {
            const Eu = this.storage[uu];
            return void 0 === Eu ? null : Eu
          }
          async _remove(uu) {
            delete this.storage[uu]
          }
          _addListener(uu, Eu) {}
          _removeListener(uu, Eu) {}
        }
        XE.type = "NONE";
        const lE = XE;

        function qE(uu, Eu, ju) {
          return `firebase:${uu}:${Eu}:${ju}`
        }
        class fE {
          constructor(uu, Eu, ju) {
            this.persistence = uu, this.auth = Eu, this.userKey = ju;
            const {
              config: su,
              name: Uu
            } = this.auth;
            this.fullUserKey = qE(this.userKey, su.apiKey, Uu), this.fullPersistenceKey = qE("persistence", su.apiKey, Uu), this.boundEventHandler = Eu._onStorageEvent.bind(Eu), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(uu) {
            return this.persistence._set(this.fullUserKey, uu.toJSON())
          }
          async getCurrentUser() {
            const uu = await this.persistence._get(this.fullUserKey);
            return uu ? sE._fromJSON(this.auth, uu) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(uu) {
            if (this.persistence === uu) return;
            const Eu = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = uu, Eu ? this.setCurrentUser(Eu) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Eu.length) return new fE(ZE(lE), uu, ju);
            const su = (await Promise.all(Eu.map((async uu => {
              if (await uu._isAvailable()) return uu
            })))).filter((uu => uu));
            let Uu = su[0] || ZE(lE);
            const Zu = qE(ju, uu.config.apiKey, uu.name);
            let Xu = null;
            for (const fu of Eu) try {
              const Eu = await fu._get(Zu);
              if (Eu) {
                const ju = sE._fromJSON(uu, Eu);
                fu !== Uu && (Xu = ju), Uu = fu;
                break
              }
            } catch (qu) {}
            const lu = su.filter((uu => uu._shouldAllowMigration));
            return Uu._shouldAllowMigration && lu.length ? (Uu = lu[0], Xu && await Uu._set(Zu, Xu.toJSON()), await Promise.all(Eu.map((async uu => {
              if (uu !== Uu) try {
                await uu._remove(Zu)
              } catch (qu) {}
            }))), new fE(Uu, uu, ju)) : new fE(Uu, uu, ju)
          }
        }

        function CE(uu) {
          const Eu = uu.toLowerCase();
          if (Eu.includes("opera/") || Eu.includes("opr/") || Eu.includes("opios/")) return "Opera";
          if (OE(Eu)) return "IEMobile";
          if (Eu.includes("msie") || Eu.includes("trident/")) return "IE";
          if (Eu.includes("edge/")) return "Edge";
          if (bE(Eu)) return "Firefox";
          if (Eu.includes("silk/")) return "Silk";
          if (hE(Eu)) return "Blackberry";
          if (DE(Eu)) return "Webos";
          if (cE(Eu)) return "Safari";
          if ((Eu.includes("chrome/") || NE(Eu)) && !Eu.includes("edge/")) return "Chrome";
          if (YE(Eu)) return "Android";
          {
            const Eu = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              ju = uu.match(Eu);
            if (2 === (null === ju || void 0 === ju ? void 0 : ju.length)) return ju[1]
          }
          return "Other"
        }

        function bE() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)();
          return /firefox\//i.test(uu)
        }

        function cE() {
          const uu = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)()).toLowerCase();
          return uu.includes("safari/") && !uu.includes("chrome/") && !uu.includes("crios/") && !uu.includes("android")
        }

        function NE() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)();
          return /crios\//i.test(uu)
        }

        function OE() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)();
          return /iemobile/i.test(uu)
        }

        function YE() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)();
          return /android/i.test(uu)
        }

        function hE() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)();
          return /blackberry/i.test(uu)
        }

        function DE() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)();
          return /webos/i.test(uu)
        }

        function gE() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)();
          return /iphone|ipad|ipod/i.test(uu) || /macintosh/i.test(uu) && /mobile/i.test(uu)
        }

        function ME() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)();
          return gE(uu) || YE(uu) || DE(uu) || hE(uu) || /windows phone/i.test(uu) || OE(uu)
        }

        function eE(uu) {
          let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (uu) {
            case "Browser":
              Eu = CE((0, su.S)());
              break;
            case "Worker":
              Eu = `${CE((0,su.S)())}-${uu}`;
              break;
            default:
              Eu = uu
          }
          const Zu = ju.length ? ju.join(",") : "FirebaseCore-web";
          return `${Eu}/JsCore/${Uu.f}/${Zu}`
        }
        async function GE(uu, Eu) {
          return Wu(uu, "GET", "/v2/recaptchaConfig", iu(uu, Eu))
        }

        function pE(uu) {
          return void 0 !== uu && void 0 !== uu.getResponse
        }

        function wE(uu) {
          return void 0 !== uu && void 0 !== uu.enterprise
        }
        class JE {
          constructor(uu) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === uu.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = uu.recaptchaKey.split("/")[3], this.emailPasswordEnabled = uu.recaptchaEnforcementState.some((uu => "EMAIL_PASSWORD_PROVIDER" === uu.provider && "OFF" !== uu.enforcementState))
          }
        }

        function dE(uu) {
          return new Promise(((Eu, ju) => {
            const su = document.createElement("script");
            su.setAttribute("src", uu), su.onload = Eu, su.onerror = uu => {
                const Eu = Gu("internal-error");
                Eu.customData = uu, ju(Eu)
              }, su.type = "text/javascript", su.charset = "UTF-8",
              function() {
                var uu, Eu;
                return null !== (Eu = null === (uu = document.getElementsByTagName("head")) || void 0 === uu ? void 0 : uu[0]) && void 0 !== Eu ? Eu : document
              }().appendChild(su)
          }))
        }

        function aE(uu) {
          return `__${uu}${Math.floor(1e6*Math.random())}`
        }
        class PE {
          constructor(uu) {
            this.type = "recaptcha-enterprise", this.auth = vE(uu)
          }
          async verify() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function ju(Eu, ju, su) {
              const Uu = window.grecaptcha;
              wE(Uu) ? Uu.enterprise.ready((() => {
                Uu.enterprise.execute(Eu, {
                  action: uu
                }).then((uu => {
                  ju(uu)
                })).catch((() => {
                  ju("NO_RECAPTCHA")
                }))
              })) : su(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((uu, su) => {
              (async function(uu) {
                if (!Eu) {
                  if (null == uu.tenantId && null != uu._agentRecaptchaConfig) return uu._agentRecaptchaConfig.siteKey;
                  if (null != uu.tenantId && void 0 !== uu._tenantRecaptchaConfigs[uu.tenantId]) return uu._tenantRecaptchaConfigs[uu.tenantId].siteKey
                }
                return new Promise((async (Eu, ju) => {
                  GE(uu, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((su => {
                    if (void 0 !== su.recaptchaKey) {
                      const ju = new JE(su);
                      return null == uu.tenantId ? uu._agentRecaptchaConfig = ju : uu._tenantRecaptchaConfigs[uu.tenantId] = ju, Eu(ju.siteKey)
                    }
                    ju(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((uu => {
                    ju(uu)
                  }))
                }))
              })(this.auth).then((Uu => {
                if (!Eu && wE(window.grecaptcha)) ju(Uu, uu, su);
                else {
                  if ("undefined" === typeof window) return void su(new Error("RecaptchaVerifier is only supported in browser"));
                  dE("https://www.google.com/recaptcha/enterprise.js?render=" + Uu).then((() => {
                    ju(Uu, uu, su)
                  })).catch((uu => {
                    su(uu)
                  }))
                }
              })).catch((uu => {
                su(uu)
              }))
            }))
          }
        }
        async function oE(uu, Eu, ju) {
          let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Uu = new PE(uu);
          let Zu;
          try {
            Zu = await Uu.verify(ju)
          } catch (lu) {
            Zu = await Uu.verify(ju, !0)
          }
          const Xu = Object.assign({}, Eu);
          return su ? Object.assign(Xu, {
            captchaResp: Zu
          }) : Object.assign(Xu, {
            captchaResponse: Zu
          }), Object.assign(Xu, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Xu, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Xu
        }
        class kE {
          constructor(uu) {
            this.auth = uu, this.queue = []
          }
          pushCallback(uu, Eu) {
            const ju = Eu => new Promise(((ju, su) => {
              try {
                ju(uu(Eu))
              } catch (Uu) {
                su(Uu)
              }
            }));
            ju.onAbort = Eu, this.queue.push(ju);
            const su = this.queue.length - 1;
            return () => {
              this.queue[su] = () => Promise.resolve()
            }
          }
          async runMiddleware(uu) {
            if (this.auth.currentUser === uu) return;
            const Eu = [];
            try {
              for (const ju of this.queue) await ju(uu), ju.onAbort && Eu.push(ju.onAbort)
            } catch (ju) {
              Eu.reverse();
              for (const uu of Eu) try {
                uu()
              } catch (su) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === ju || void 0 === ju ? void 0 : ju.message
              })
            }
          }
        }
        class mE {
          constructor(uu, Eu, ju, su) {
            this.app = uu, this.heartbeatServiceProvider = Eu, this.appCheckServiceProvider = ju, this.config = su, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new KE(this), this.idTokenSubscription = new KE(this), this.beforeStateQueue = new kE(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = hu, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = uu.name, this.clientVersion = su.sdkClientVersion
          }
          _initializeWithPersistence(uu, Eu) {
            return Eu && (this._popupRedirectResolver = ZE(Eu)), this._initializationPromise = this.queue((async () => {
              var ju, su;
              if (!this._deleted && (this.persistenceManager = await fE.create(this, uu), !this._deleted)) {
                if (null === (ju = this._popupRedirectResolver) || void 0 === ju ? void 0 : ju._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Uu) {}
                await this.initializeCurrentUser(Eu), this.lastNotifiedUid = (null === (su = this.currentUser) || void 0 === su ? void 0 : su.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const uu = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || uu ? this.currentUser && uu && this.currentUser.uid === uu.uid ? (this._currentUser._assign(uu), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(uu, !0) : void 0
          }
          async initializeCurrentUser(uu) {
            var Eu;
            const ju = await this.assertedPersistence.getCurrentUser();
            let su = ju,
              Uu = !1;
            if (uu && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const ju = null === (Eu = this.redirectUser) || void 0 === Eu ? void 0 : Eu._redirectEventId,
                Zu = null === su || void 0 === su ? void 0 : su._redirectEventId,
                Xu = await this.tryRedirectSignIn(uu);
              ju && ju !== Zu || !(null === Xu || void 0 === Xu ? void 0 : Xu.user) || (su = Xu.user, Uu = !0)
            }
            if (!su) return this.directlySetCurrentUser(null);
            if (!su._redirectEventId) {
              if (Uu) try {
                await this.beforeStateQueue.runMiddleware(su)
              } catch (Zu) {
                su = ju, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Zu)))
              }
              return su ? this.reloadAndSetCurrentUserOrClear(su) : this.directlySetCurrentUser(null)
            }
            return du(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === su._redirectEventId ? this.directlySetCurrentUser(su) : this.reloadAndSetCurrentUserOrClear(su)
          }
          async tryRedirectSignIn(uu) {
            let Eu = null;
            try {
              Eu = await this._popupRedirectResolver._completeRedirectFn(this, uu, !0)
            } catch (ju) {
              await this._setRedirectUser(null)
            }
            return Eu
          }
          async reloadAndSetCurrentUserOrClear(uu) {
            try {
              await Ru(uu)
            } catch (Eu) {
              if ("auth/network-request-failed" !== (null === Eu || void 0 === Eu ? void 0 : Eu.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(uu)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const uu = navigator;
              return uu.languages && uu.languages[0] || uu.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(uu) {
            const Eu = uu ? (0, su.Q)(uu) : null;
            return Eu && du(Eu.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Eu && Eu._clone(this))
          }
          async _updateCurrentUser(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return uu && du(this.tenantId === uu.tenantId, this, "tenant-id-mismatch"), Eu || await this.beforeStateQueue.runMiddleware(uu), this.queue((async () => {
              await this.directlySetCurrentUser(uu), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(uu) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(ZE(uu))
            }))
          }
          async initializeRecaptchaConfig() {
            const uu = await GE(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Eu = new JE(uu);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Eu : this._tenantRecaptchaConfigs[this.tenantId] = Eu, Eu.emailPasswordEnabled) {
              new PE(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(uu) {
            this._errorFactory = new su.h("auth", "Firebase", uu())
          }
          onAuthStateChanged(uu, Eu, ju) {
            return this.registerStateListener(this.authStateSubscription, uu, Eu, ju)
          }
          beforeAuthStateChanged(uu, Eu) {
            return this.beforeStateQueue.pushCallback(uu, Eu)
          }
          onIdTokenChanged(uu, Eu, ju) {
            return this.registerStateListener(this.idTokenSubscription, uu, Eu, ju)
          }
          toJSON() {
            var uu;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (uu = this._currentUser) || void 0 === uu ? void 0 : uu.toJSON()
            }
          }
          async _setRedirectUser(uu, Eu) {
            const ju = await this.getOrInitRedirectPersistenceManager(Eu);
            return null === uu ? ju.removeCurrentUser() : ju.setCurrentUser(uu)
          }
          async getOrInitRedirectPersistenceManager(uu) {
            if (!this.redirectPersistenceManager) {
              const Eu = uu && ZE(uu) || this._popupRedirectResolver;
              du(Eu, this, "argument-error"), this.redirectPersistenceManager = await fE.create(this, [ZE(Eu._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(uu) {
            var Eu, ju;
            return this._isInitialized && await this.queue((async () => {})), (null === (Eu = this._currentUser) || void 0 === Eu ? void 0 : Eu._redirectEventId) === uu ? this._currentUser : (null === (ju = this.redirectUser) || void 0 === ju ? void 0 : ju._redirectEventId) === uu ? this.redirectUser : null
          }
          async _persistUserIfCurrent(uu) {
            if (uu === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(uu)))
          }
          _notifyListenersIfCurrent(uu) {
            uu === this.currentUser && this.notifyAuthListeners()
          }
          _key() {
            return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
          }
          _startProactiveRefresh() {
            this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
          }
          _stopProactiveRefresh() {
            this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
          }
          get _currentUser() {
            return this.currentUser
          }
          notifyAuthListeners() {
            var uu, Eu;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const ju = null !== (Eu = null === (uu = this.currentUser) || void 0 === uu ? void 0 : uu.uid) && void 0 !== Eu ? Eu : null;
            this.lastNotifiedUid !== ju && (this.lastNotifiedUid = ju, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(uu, Eu, ju, su) {
            if (this._deleted) return () => {};
            const Uu = "function" === typeof Eu ? Eu : Eu.next.bind(Eu),
              Zu = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return du(Zu, this, "internal-error"), Zu.then((() => Uu(this.currentUser))), "function" === typeof Eu ? uu.addObserver(Eu, ju, su) : uu.addObserver(Eu)
          }
          async directlySetCurrentUser(uu) {
            this.currentUser && this.currentUser !== uu && this._currentUser._stopProactiveRefresh(), uu && this.isProactiveRefreshEnabled && uu._startProactiveRefresh(), this.currentUser = uu, uu ? await this.assertedPersistence.setCurrentUser(uu) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(uu) {
            return this.operations = this.operations.then(uu, uu), this.operations
          }
          get assertedPersistence() {
            return du(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(uu) {
            uu && !this.frameworks.includes(uu) && (this.frameworks.push(uu), this.frameworks.sort(), this.clientVersion = eE(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var uu;
            const Eu = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Eu["X-Firebase-gmpid"] = this.app.options.appId);
            const ju = await (null === (uu = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === uu ? void 0 : uu.getHeartbeatsHeader());
            ju && (Eu["X-Firebase-Client"] = ju);
            const su = await this._getAppCheckToken();
            return su && (Eu["X-Firebase-AppCheck"] = su), Eu
          }
          async _getAppCheckToken() {
            var uu;
            const Eu = await (null === (uu = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === uu ? void 0 : uu.getToken());
            return (null === Eu || void 0 === Eu ? void 0 : Eu.error) && function(uu) {
              if (gu.logLevel <= Xu.c.WARN) {
                for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
                gu.warn(`Auth (${Uu.f}): ${uu}`, ...ju)
              }
            }(`Error while retrieving App Check token: ${Eu.error}`), null === Eu || void 0 === Eu ? void 0 : Eu.token
          }
        }

        function vE(uu) {
          return (0, su.Q)(uu)
        }
        class KE {
          constructor(uu) {
            this.auth = uu, this.observer = null, this.addObserver = (0, su.y)((uu => this.observer = uu))
          }
          get next() {
            return du(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function VE(uu, Eu) {
          const ju = (0, Uu.w)(uu, "auth");
          if (ju.isInitialized()) {
            const uu = ju.getImmediate(),
              Uu = ju.getOptions();
            if ((0, su.B)(Uu, null !== Eu && void 0 !== Eu ? Eu : {})) return uu;
            eu(uu, "already-initialized")
          }
          return ju.initialize({
            options: Eu
          })
        }

        function rE(uu, Eu, ju) {
          const su = vE(uu);
          du(su._canInitEmulator, su, "emulator-config-failed"), du(/^https?:\/\//.test(Eu), su, "invalid-emulator-scheme");
          const Uu = !!(null === ju || void 0 === ju ? void 0 : ju.disableWarnings),
            Zu = QE(Eu),
            {
              host: Xu,
              port: lu
            } = function(uu) {
              const Eu = QE(uu),
                ju = /(\/\/)?([^?#/]+)/.exec(uu.substr(Eu.length));
              if (!ju) return {
                host: "",
                port: null
              };
              const su = ju[2].split("@").pop() || "",
                Uu = /^(\[[^\]]+\])(:|$)/.exec(su);
              if (Uu) {
                const uu = Uu[1];
                return {
                  host: uu,
                  port: iE(su.substr(uu.length + 1))
                }
              } {
                const [uu, Eu] = su.split(":");
                return {
                  host: uu,
                  port: iE(Eu)
                }
              }
            }(Eu),
            qu = null === lu ? "" : `:${lu}`;
          su.config.emulator = {
            url: `${Zu}//${Xu}${qu}/`
          }, su.settings.appVerificationDisabledForTesting = !0, su.emulatorConfig = Object.freeze({
            host: Xu,
            port: lu,
            protocol: Zu.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Uu
            })
          }), Uu || function() {
            function uu() {
              const uu = document.createElement("p"),
                Eu = uu.style;
              uu.innerText = "Running in emulator mode. Do not use with production credentials.", Eu.position = "fixed", Eu.width = "100%", Eu.backgroundColor = "#ffffff", Eu.border = ".1em solid #000000", Eu.color = "#b50000", Eu.bottom = "0px", Eu.left = "0px", Eu.margin = "0px", Eu.zIndex = "10000", Eu.textAlign = "center", uu.classList.add("firebase-emulator-warning"), document.body.appendChild(uu)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", uu) : uu())
          }()
        }

        function QE(uu) {
          const Eu = uu.indexOf(":");
          return Eu < 0 ? "" : uu.substr(0, Eu + 1)
        }

        function iE(uu) {
          if (!uu) return null;
          const Eu = Number(uu);
          return isNaN(Eu) ? null : Eu
        }
        class WE {
          constructor(uu, Eu) {
            this.providerId = uu, this.signInMethod = Eu
          }
          toJSON() {
            return au("not implemented")
          }
          _getIdTokenResponse(uu) {
            return au("not implemented")
          }
          _linkToIdToken(uu, Eu) {
            return au("not implemented")
          }
          _getReauthenticationResolver(uu) {
            return au("not implemented")
          }
        }
        async function SE(uu, Eu) {
          return Wu(uu, "POST", "/v1/accounts:resetPassword", iu(uu, Eu))
        }
        async function IE(uu, Eu) {
          return Wu(uu, "POST", "/v1/accounts:update", Eu)
        }
        async function FE(uu, Eu) {
          return Iu(uu, "POST", "/v1/accounts:signInWithPassword", iu(uu, Eu))
        }
        async function BE(uu, Eu) {
          return Wu(uu, "POST", "/v1/accounts:sendOobCode", iu(uu, Eu))
        }
        async function LE(uu, Eu) {
          return BE(uu, Eu)
        }
        async function tE(uu, Eu) {
          return BE(uu, Eu)
        }
        class xE extends WE {
          constructor(uu, Eu, ju) {
            let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", ju), this._email = uu, this._password = Eu, this._tenantId = su
          }
          static _fromEmailAndPassword(uu, Eu) {
            return new xE(uu, Eu, "password")
          }
          static _fromEmailAndCode(uu, Eu) {
            return new xE(uu, Eu, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(uu) {
            const Eu = "string" === typeof uu ? JSON.parse(uu) : uu;
            if ((null === Eu || void 0 === Eu ? void 0 : Eu.email) && (null === Eu || void 0 === Eu ? void 0 : Eu.password)) {
              if ("password" === Eu.signInMethod) return this._fromEmailAndPassword(Eu.email, Eu.password);
              if ("emailLink" === Eu.signInMethod) return this._fromEmailAndCode(Eu.email, Eu.password, Eu.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(uu) {
            var Eu;
            switch (this.signInMethod) {
              case "password":
                const ju = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Eu = uu._getRecaptchaConfig()) || void 0 === Eu ? void 0 : Eu.emailPasswordEnabled) {
                  const Eu = await oE(uu, ju, "signInWithPassword");
                  return FE(uu, Eu)
                }
                return FE(uu, ju).catch((async Eu => {
                  if ("auth/missing-recaptcha-token" === Eu.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Eu = await oE(uu, ju, "signInWithPassword");
                    return FE(uu, Eu)
                  }
                  return Promise.reject(Eu)
                }));
              case "emailLink":
                return async function(uu, Eu) {
                  return Iu(uu, "POST", "/v1/accounts:signInWithEmailLink", iu(uu, Eu))
                }(uu, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                eu(uu, "internal-error")
            }
          }
          async _linkToIdToken(uu, Eu) {
            switch (this.signInMethod) {
              case "password":
                return IE(uu, {
                  idToken: Eu,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(uu, Eu) {
                  return Iu(uu, "POST", "/v1/accounts:signInWithEmailLink", iu(uu, Eu))
                }(uu, {
                  idToken: Eu,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                eu(uu, "internal-error")
            }
          }
          _getReauthenticationResolver(uu) {
            return this._getIdTokenResponse(uu)
          }
        }
        async function TE(uu, Eu) {
          return Iu(uu, "POST", "/v1/accounts:signInWithIdp", iu(uu, Eu))
        }
        class HE extends WE {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(uu) {
            const Eu = new HE(uu.providerId, uu.signInMethod);
            return uu.idToken || uu.accessToken ? (uu.idToken && (Eu.idToken = uu.idToken), uu.accessToken && (Eu.accessToken = uu.accessToken), uu.nonce && !uu.pendingToken && (Eu.nonce = uu.nonce), uu.pendingToken && (Eu.pendingToken = uu.pendingToken)) : uu.oauthToken && uu.oauthTokenSecret ? (Eu.accessToken = uu.oauthToken, Eu.secret = uu.oauthTokenSecret) : eu("argument-error"), Eu
          }
          toJSON() {
            return {
              idToken: this.idToken,
              accessToken: this.accessToken,
              secret: this.secret,
              nonce: this.nonce,
              pendingToken: this.pendingToken,
              providerId: this.providerId,
              signInMethod: this.signInMethod
            }
          }
          static fromJSON(uu) {
            const Eu = "string" === typeof uu ? JSON.parse(uu) : uu,
              {
                providerId: ju,
                signInMethod: su
              } = Eu,
              Uu = Zu(Eu, ["providerId", "signInMethod"]);
            if (!ju || !su) return null;
            const Xu = new HE(ju, su);
            return Xu.idToken = Uu.idToken || void 0, Xu.accessToken = Uu.accessToken || void 0, Xu.secret = Uu.secret, Xu.nonce = Uu.nonce, Xu.pendingToken = Uu.pendingToken || null, Xu
          }
          _getIdTokenResponse(uu) {
            return TE(uu, this.buildRequest())
          }
          _linkToIdToken(uu, Eu) {
            const ju = this.buildRequest();
            return ju.idToken = Eu, TE(uu, ju)
          }
          _getReauthenticationResolver(uu) {
            const Eu = this.buildRequest();
            return Eu.autoCreate = !1, TE(uu, Eu)
          }
          buildRequest() {
            const uu = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) uu.pendingToken = this.pendingToken;
            else {
              const Eu = {};
              this.idToken && (Eu.id_token = this.idToken), this.accessToken && (Eu.access_token = this.accessToken), this.secret && (Eu.oauth_token_secret = this.secret), Eu.providerId = this.providerId, this.nonce && !this.pendingToken && (Eu.nonce = this.nonce), uu.postBody = (0, su.kb)(Eu)
            }
            return uu
          }
        }
        const AE = {
          USER_NOT_FOUND: "user-not-found"
        };
        class nE extends WE {
          constructor(uu) {
            super("phone", "phone"), this.params = uu
          }
          static _fromVerification(uu, Eu) {
            return new nE({
              verificationId: uu,
              verificationCode: Eu
            })
          }
          static _fromTokenResponse(uu, Eu) {
            return new nE({
              phoneNumber: uu,
              temporaryProof: Eu
            })
          }
          _getIdTokenResponse(uu) {
            return async function(uu, Eu) {
              return Iu(uu, "POST", "/v1/accounts:signInWithPhoneNumber", iu(uu, Eu))
            }(uu, this._makeVerificationRequest())
          }
          _linkToIdToken(uu, Eu) {
            return async function(uu, Eu) {
              const ju = await Iu(uu, "POST", "/v1/accounts:signInWithPhoneNumber", iu(uu, Eu));
              if (ju.temporaryProof) throw Lu(uu, "account-exists-with-different-credential", ju);
              return ju
            }(uu, Object.assign({
              idToken: Eu
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(uu) {
            return async function(uu, Eu) {
              return Iu(uu, "POST", "/v1/accounts:signInWithPhoneNumber", iu(uu, Object.assign(Object.assign({}, Eu), {
                operation: "REAUTH"
              })), AE)
            }(uu, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: uu,
              phoneNumber: Eu,
              verificationId: ju,
              verificationCode: su
            } = this.params;
            return uu && Eu ? {
              temporaryProof: uu,
              phoneNumber: Eu
            } : {
              sessionInfo: ju,
              code: su
            }
          }
          toJSON() {
            const uu = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (uu.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (uu.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (uu.verificationCode = this.params.verificationCode), this.params.verificationId && (uu.verificationId = this.params.verificationId), uu
          }
          static fromJSON(uu) {
            "string" === typeof uu && (uu = JSON.parse(uu));
            const {
              verificationId: Eu,
              verificationCode: ju,
              phoneNumber: su,
              temporaryProof: Uu
            } = uu;
            return ju || Eu || su || Uu ? new nE({
              verificationId: Eu,
              verificationCode: ju,
              phoneNumber: su,
              temporaryProof: Uu
            }) : null
          }
        }
        class yE {
          constructor(uu) {
            var Eu, ju, Uu, Zu, Xu, lu;
            const qu = (0, su.ib)((0, su.F)(uu)),
              fu = null !== (Eu = qu.apiKey) && void 0 !== Eu ? Eu : null,
              Cu = null !== (ju = qu.oobCode) && void 0 !== ju ? ju : null,
              bu = function(uu) {
                switch (uu) {
                  case "recoverEmail":
                    return "RECOVER_EMAIL";
                  case "resetPassword":
                    return "PASSWORD_RESET";
                  case "signIn":
                    return "EMAIL_SIGNIN";
                  case "verifyEmail":
                    return "VERIFY_EMAIL";
                  case "verifyAndChangeEmail":
                    return "VERIFY_AND_CHANGE_EMAIL";
                  case "revertSecondFactorAddition":
                    return "REVERT_SECOND_FACTOR_ADDITION";
                  default:
                    return null
                }
              }(null !== (Uu = qu.mode) && void 0 !== Uu ? Uu : null);
            du(fu && Cu && bu, "argument-error"), this.apiKey = fu, this.operation = bu, this.code = Cu, this.continueUrl = null !== (Zu = qu.continueUrl) && void 0 !== Zu ? Zu : null, this.languageCode = null !== (Xu = qu.languageCode) && void 0 !== Xu ? Xu : null, this.tenantId = null !== (lu = qu.tenantId) && void 0 !== lu ? lu : null
          }
          static parseLink(uu) {
            const Eu = function(uu) {
              const Eu = (0, su.ib)((0, su.F)(uu)).link,
                ju = Eu ? (0, su.ib)((0, su.F)(Eu)).deep_link_id : null,
                Uu = (0, su.ib)((0, su.F)(uu)).deep_link_id;
              return (Uu ? (0, su.ib)((0, su.F)(Uu)).link : null) || Uu || ju || Eu || uu
            }(uu);
            try {
              return new yE(Eu)
            } catch (ju) {
              return null
            }
          }
        }

        function zE(uu) {
          return yE.parseLink(uu)
        }
        class RE {
          constructor() {
            this.providerId = RE.PROVIDER_ID
          }
          static credential(uu, Eu) {
            return xE._fromEmailAndPassword(uu, Eu)
          }
          static credentialWithLink(uu, Eu) {
            const ju = yE.parseLink(Eu);
            return du(ju, "argument-error"), xE._fromEmailAndCode(uu, ju.code, ju.tenantId)
          }
        }
        RE.PROVIDER_ID = "password", RE.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", RE.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class uj {
          constructor(uu) {
            this.providerId = uu, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(uu) {
            this.defaultLanguageCode = uu
          }
          setCustomParameters(uu) {
            return this.customParameters = uu, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class Ej extends uj {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(uu) {
            return this.scopes.includes(uu) || this.scopes.push(uu), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class jj extends Ej {
          static credentialFromJSON(uu) {
            const Eu = "string" === typeof uu ? JSON.parse(uu) : uu;
            return du("providerId" in Eu && "signInMethod" in Eu, "argument-error"), HE._fromParams(Eu)
          }
          credential(uu) {
            return this._credential(Object.assign(Object.assign({}, uu), {
              nonce: uu.rawNonce
            }))
          }
          _credential(uu) {
            return du(uu.idToken || uu.accessToken, "argument-error"), HE._fromParams(Object.assign(Object.assign({}, uu), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(uu) {
            return jj.oauthCredentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return jj.oauthCredentialFromTaggedObject(uu.customData || {})
          }
          static oauthCredentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Eu
            } = uu;
            if (!Eu) return null;
            const {
              oauthIdToken: ju,
              oauthAccessToken: su,
              oauthTokenSecret: Uu,
              pendingToken: Zu,
              nonce: Xu,
              providerId: lu
            } = Eu;
            if (!su && !Uu && !ju && !Zu) return null;
            if (!lu) return null;
            try {
              return new jj(lu)._credential({
                idToken: ju,
                accessToken: su,
                nonce: Xu,
                pendingToken: Zu
              })
            } catch (qu) {
              return null
            }
          }
        }
        class sj extends Ej {
          constructor() {
            super("facebook.com")
          }
          static credential(uu) {
            return HE._fromParams({
              providerId: sj.PROVIDER_ID,
              signInMethod: sj.FACEBOOK_SIGN_IN_METHOD,
              accessToken: uu
            })
          }
          static credentialFromResult(uu) {
            return sj.credentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return sj.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Eu
            } = uu;
            if (!Eu || !("oauthAccessToken" in Eu)) return null;
            if (!Eu.oauthAccessToken) return null;
            try {
              return sj.credential(Eu.oauthAccessToken)
            } catch (ju) {
              return null
            }
          }
        }
        sj.FACEBOOK_SIGN_IN_METHOD = "facebook.com", sj.PROVIDER_ID = "facebook.com";
        class Uj extends Ej {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(uu, Eu) {
            return HE._fromParams({
              providerId: Uj.PROVIDER_ID,
              signInMethod: Uj.GOOGLE_SIGN_IN_METHOD,
              idToken: uu,
              accessToken: Eu
            })
          }
          static credentialFromResult(uu) {
            return Uj.credentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return Uj.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Eu
            } = uu;
            if (!Eu) return null;
            const {
              oauthIdToken: ju,
              oauthAccessToken: su
            } = Eu;
            if (!ju && !su) return null;
            try {
              return Uj.credential(ju, su)
            } catch (Uu) {
              return null
            }
          }
        }
        Uj.GOOGLE_SIGN_IN_METHOD = "google.com", Uj.PROVIDER_ID = "google.com";
        class Zj extends Ej {
          constructor() {
            super("github.com")
          }
          static credential(uu) {
            return HE._fromParams({
              providerId: Zj.PROVIDER_ID,
              signInMethod: Zj.GITHUB_SIGN_IN_METHOD,
              accessToken: uu
            })
          }
          static credentialFromResult(uu) {
            return Zj.credentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return Zj.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Eu
            } = uu;
            if (!Eu || !("oauthAccessToken" in Eu)) return null;
            if (!Eu.oauthAccessToken) return null;
            try {
              return Zj.credential(Eu.oauthAccessToken)
            } catch (ju) {
              return null
            }
          }
        }
        Zj.GITHUB_SIGN_IN_METHOD = "github.com", Zj.PROVIDER_ID = "github.com";
        class Xj extends WE {
          constructor(uu, Eu) {
            super(uu, uu), this.pendingToken = Eu
          }
          _getIdTokenResponse(uu) {
            return TE(uu, this.buildRequest())
          }
          _linkToIdToken(uu, Eu) {
            const ju = this.buildRequest();
            return ju.idToken = Eu, TE(uu, ju)
          }
          _getReauthenticationResolver(uu) {
            const Eu = this.buildRequest();
            return Eu.autoCreate = !1, TE(uu, Eu)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(uu) {
            const Eu = "string" === typeof uu ? JSON.parse(uu) : uu,
              {
                providerId: ju,
                signInMethod: su,
                pendingToken: Uu
              } = Eu;
            return ju && su && Uu && ju === su ? new Xj(ju, Uu) : null
          }
          static _create(uu, Eu) {
            return new Xj(uu, Eu)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class lj extends uj {
          constructor(uu) {
            du(uu.startsWith("saml."), "argument-error"), super(uu)
          }
          static credentialFromResult(uu) {
            return lj.samlCredentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return lj.samlCredentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromJSON(uu) {
            const Eu = Xj.fromJSON(uu);
            return du(Eu, "argument-error"), Eu
          }
          static samlCredentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Eu
            } = uu;
            if (!Eu) return null;
            const {
              pendingToken: ju,
              providerId: su
            } = Eu;
            if (!ju || !su) return null;
            try {
              return Xj._create(su, ju)
            } catch (Uu) {
              return null
            }
          }
        }
        class qj extends Ej {
          constructor() {
            super("twitter.com")
          }
          static credential(uu, Eu) {
            return HE._fromParams({
              providerId: qj.PROVIDER_ID,
              signInMethod: qj.TWITTER_SIGN_IN_METHOD,
              oauthToken: uu,
              oauthTokenSecret: Eu
            })
          }
          static credentialFromResult(uu) {
            return qj.credentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return qj.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Eu
            } = uu;
            if (!Eu) return null;
            const {
              oauthAccessToken: ju,
              oauthTokenSecret: su
            } = Eu;
            if (!ju || !su) return null;
            try {
              return qj.credential(ju, su)
            } catch (Uu) {
              return null
            }
          }
        }
        async function fj(uu, Eu) {
          return Iu(uu, "POST", "/v1/accounts:signUp", iu(uu, Eu))
        }
        qj.TWITTER_SIGN_IN_METHOD = "twitter.com", qj.PROVIDER_ID = "twitter.com";
        class Cj {
          constructor(uu) {
            this.user = uu.user, this.providerId = uu.providerId, this._tokenResponse = uu._tokenResponse, this.operationType = uu.operationType
          }
          static async _fromIdTokenResponse(uu, Eu, ju) {
            let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Uu = await sE._fromIdTokenResponse(uu, ju, su),
              Zu = bj(ju);
            return new Cj({
              user: Uu,
              providerId: Zu,
              _tokenResponse: ju,
              operationType: Eu
            })
          }
          static async _forOperation(uu, Eu, ju) {
            await uu._updateTokensIfNecessary(ju, !0);
            const su = bj(ju);
            return new Cj({
              user: uu,
              providerId: su,
              _tokenResponse: ju,
              operationType: Eu
            })
          }
        }

        function bj(uu) {
          return uu.providerId ? uu.providerId : "phoneNumber" in uu ? "phone" : null
        }
        async function cj(uu) {
          var Eu;
          const ju = vE(uu);
          if (await ju._initializationPromise, null === (Eu = ju.currentUser) || void 0 === Eu ? void 0 : Eu.isAnonymous) return new Cj({
            user: ju.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const su = await fj(ju, {
              returnSecureToken: !0
            }),
            Uu = await Cj._fromIdTokenResponse(ju, "signIn", su, !0);
          return await ju._updateCurrentUser(Uu.user), Uu
        }
        class Nj extends su.k {
          constructor(uu, Eu, ju, su) {
            var Uu;
            super(Eu.code, Eu.message), this.operationType = ju, this.user = su, Object.setPrototypeOf(this, Nj.prototype), this.customData = {
              appName: uu.name,
              tenantId: null !== (Uu = uu.tenantId) && void 0 !== Uu ? Uu : void 0,
              _serverResponse: Eu.customData._serverResponse,
              operationType: ju
            }
          }
          static _fromErrorAndOperation(uu, Eu, ju, su) {
            return new Nj(uu, Eu, ju, su)
          }
        }

        function Oj(uu, Eu, ju, su) {
          return ("reauthenticate" === Eu ? ju._getReauthenticationResolver(uu) : ju._getIdTokenResponse(uu)).catch((ju => {
            if ("auth/multi-factor-auth-required" === ju.code) throw Nj._fromErrorAndOperation(uu, ju, Eu, su);
            throw ju
          }))
        }

        function Yj(uu) {
          return new Set(uu.map((uu => {
            let {
              providerId: Eu
            } = uu;
            return Eu
          })).filter((uu => !!uu)))
        }
        async function hj(uu, Eu) {
          const ju = (0, su.Q)(uu);
          await gj(!0, ju, Eu);
          const {
            providerUserInfo: Uu
          } = await async function(uu, Eu) {
            return Wu(uu, "POST", "/v1/accounts:update", Eu)
          }(ju.auth, {
            idToken: await ju.getIdToken(),
            deleteProvider: [Eu]
          }), Zu = Yj(Uu || []);
          return ju.providerData = ju.providerData.filter((uu => Zu.has(uu.providerId))), Zu.has("phone") || (ju.phoneNumber = null), await ju.auth._persistUserIfCurrent(ju), ju
        }
        async function Dj(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const su = await nu(uu, Eu._linkToIdToken(uu.auth, await uu.getIdToken()), ju);
          return Cj._forOperation(uu, "link", su)
        }
        async function gj(uu, Eu, ju) {
          await Ru(Eu);
          const su = !1 === uu ? "provider-already-linked" : "no-such-provider";
          du(Yj(Eu.providerData).has(ju) === uu, Eu.auth, su)
        }
        async function Mj(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: su
          } = uu, Uu = "reauthenticate";
          try {
            const Zu = await nu(uu, Oj(su, Uu, Eu, uu), ju);
            du(Zu.idToken, su, "internal-error");
            const Xu = Au(Zu.idToken);
            du(Xu, su, "internal-error");
            const {
              sub: lu
            } = Xu;
            return du(uu.uid === lu, su, "user-mismatch"), Cj._forOperation(uu, Uu, Zu)
          } catch (Zu) {
            throw "auth/user-not-found" === (null === Zu || void 0 === Zu ? void 0 : Zu.code) && eu(su, "user-mismatch"), Zu
          }
        }
        async function ej(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const su = "signIn",
            Uu = await Oj(uu, su, Eu),
            Zu = await Cj._fromIdTokenResponse(uu, su, Uu);
          return ju || await uu._updateCurrentUser(Zu.user), Zu
        }
        async function Gj(uu, Eu) {
          return ej(vE(uu), Eu)
        }
        async function pj(uu, Eu) {
          const ju = (0, su.Q)(uu);
          return await gj(!1, ju, Eu.providerId), Dj(ju, Eu)
        }
        async function wj(uu, Eu) {
          return Mj((0, su.Q)(uu), Eu)
        }
        async function Jj(uu, Eu) {
          const ju = vE(uu),
            su = await async function(uu, Eu) {
              return Iu(uu, "POST", "/v1/accounts:signInWithCustomToken", iu(uu, Eu))
            }(ju, {
              token: Eu,
              returnSecureToken: !0
            }), Uu = await Cj._fromIdTokenResponse(ju, "signIn", su);
          return await ju._updateCurrentUser(Uu.user), Uu
        }
        class dj {
          constructor(uu, Eu) {
            this.factorId = uu, this.uid = Eu.mfaEnrollmentId, this.enrollmentTime = new Date(Eu.enrolledAt).toUTCString(), this.displayName = Eu.displayName
          }
          static _fromServerResponse(uu, Eu) {
            return "phoneInfo" in Eu ? aj._fromServerResponse(uu, Eu) : "totpInfo" in Eu ? Pj._fromServerResponse(uu, Eu) : eu(uu, "internal-error")
          }
        }
        class aj extends dj {
          constructor(uu) {
            super("phone", uu), this.phoneNumber = uu.phoneInfo
          }
          static _fromServerResponse(uu, Eu) {
            return new aj(Eu)
          }
        }
        class Pj extends dj {
          constructor(uu) {
            super("totp", uu)
          }
          static _fromServerResponse(uu, Eu) {
            return new Pj(Eu)
          }
        }

        function oj(uu, Eu, ju) {
          var su;
          du((null === (su = ju.url) || void 0 === su ? void 0 : su.length) > 0, uu, "invalid-continue-uri"), du("undefined" === typeof ju.dynamicLinkDomain || ju.dynamicLinkDomain.length > 0, uu, "invalid-dynamic-link-domain"), Eu.continueUrl = ju.url, Eu.dynamicLinkDomain = ju.dynamicLinkDomain, Eu.canHandleCodeInApp = ju.handleCodeInApp, ju.iOS && (du(ju.iOS.bundleId.length > 0, uu, "missing-ios-bundle-id"), Eu.iOSBundleId = ju.iOS.bundleId), ju.android && (du(ju.android.packageName.length > 0, uu, "missing-android-pkg-name"), Eu.androidInstallApp = ju.android.installApp, Eu.androidMinimumVersionCode = ju.android.minimumVersion, Eu.androidPackageName = ju.android.packageName)
        }
        async function kj(uu, Eu, ju) {
          var su;
          const Uu = vE(uu),
            Zu = {
              requestType: "PASSWORD_RESET",
              email: Eu,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (su = Uu._getRecaptchaConfig()) || void 0 === su ? void 0 : su.emailPasswordEnabled) {
            const uu = await oE(Uu, Zu, "getOobCode", !0);
            ju && oj(Uu, uu, ju), await LE(Uu, uu)
          } else ju && oj(Uu, Zu, ju), await LE(Uu, Zu).catch((async uu => {
            if ("auth/missing-recaptcha-token" !== uu.code) return Promise.reject(uu);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const uu = await oE(Uu, Zu, "getOobCode", !0);
              ju && oj(Uu, uu, ju), await LE(Uu, uu)
            }
          }))
        }
        async function mj(uu, Eu, ju) {
          await SE((0, su.Q)(uu), {
            oobCode: Eu,
            newPassword: ju
          })
        }
        async function vj(uu, Eu) {
          await async function(uu, Eu) {
            return Wu(uu, "POST", "/v1/accounts:update", iu(uu, Eu))
          }((0, su.Q)(uu), {
            oobCode: Eu
          })
        }
        async function Kj(uu, Eu) {
          const ju = (0, su.Q)(uu),
            Uu = await SE(ju, {
              oobCode: Eu
            }),
            Zu = Uu.requestType;
          switch (du(Zu, ju, "internal-error"), Zu) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              du(Uu.newEmail, ju, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              du(Uu.mfaInfo, ju, "internal-error");
            default:
              du(Uu.email, ju, "internal-error")
          }
          let Xu = null;
          return Uu.mfaInfo && (Xu = dj._fromServerResponse(vE(ju), Uu.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Uu.requestType ? Uu.newEmail : Uu.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Uu.requestType ? Uu.email : Uu.newEmail) || null,
              multiFactorInfo: Xu
            },
            operation: Zu
          }
        }
        async function Vj(uu, Eu) {
          const {
            data: ju
          } = await Kj((0, su.Q)(uu), Eu);
          return ju.email
        }
        async function rj(uu, Eu, ju) {
          var su;
          const Uu = vE(uu),
            Zu = {
              returnSecureToken: !0,
              email: Eu,
              password: ju,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Xu;
          if (null === (su = Uu._getRecaptchaConfig()) || void 0 === su ? void 0 : su.emailPasswordEnabled) {
            const uu = await oE(Uu, Zu, "signUpPassword");
            Xu = fj(Uu, uu)
          } else Xu = fj(Uu, Zu).catch((async uu => {
            if ("auth/missing-recaptcha-token" === uu.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const uu = await oE(Uu, Zu, "signUpPassword");
              return fj(Uu, uu)
            }
            return Promise.reject(uu)
          }));
          const lu = await Xu.catch((uu => Promise.reject(uu))),
            qu = await Cj._fromIdTokenResponse(Uu, "signIn", lu);
          return await Uu._updateCurrentUser(qu.user), qu
        }

        function Qj(uu, Eu, ju) {
          return Gj((0, su.Q)(uu), RE.credential(Eu, ju))
        }
        async function ij(uu, Eu, ju) {
          var su;
          const Uu = vE(uu),
            Zu = {
              requestType: "EMAIL_SIGNIN",
              email: Eu,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Xu(uu, Eu) {
            du(Eu.handleCodeInApp, Uu, "argument-error"), Eu && oj(Uu, uu, Eu)
          }
          if (null === (su = Uu._getRecaptchaConfig()) || void 0 === su ? void 0 : su.emailPasswordEnabled) {
            const uu = await oE(Uu, Zu, "getOobCode", !0);
            Xu(uu, ju), await tE(Uu, uu)
          } else Xu(Zu, ju), await tE(Uu, Zu).catch((async uu => {
            if ("auth/missing-recaptcha-token" !== uu.code) return Promise.reject(uu);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const uu = await oE(Uu, Zu, "getOobCode", !0);
              Xu(uu, ju), await tE(Uu, uu)
            }
          }))
        }

        function Wj(uu, Eu) {
          const ju = yE.parseLink(Eu);
          return "EMAIL_SIGNIN" === (null === ju || void 0 === ju ? void 0 : ju.operation)
        }
        async function Sj(uu, Eu, ju) {
          const Uu = (0, su.Q)(uu),
            Zu = RE.credentialWithLink(Eu, ju || ou());
          return du(Zu._tenantId === (Uu.tenantId || null), Uu, "tenant-id-mismatch"), Gj(Uu, Zu)
        }
        async function Ij(uu, Eu) {
          const ju = {
              identifier: Eu,
              continueUri: ku() ? ou() : "http://localhost"
            },
            {
              signinMethods: Uu
            } = await async function(uu, Eu) {
              return Wu(uu, "POST", "/v1/accounts:createAuthUri", iu(uu, Eu))
            }((0, su.Q)(uu), ju);
          return Uu || []
        }
        async function Fj(uu, Eu) {
          const ju = (0, su.Q)(uu),
            Uu = {
              requestType: "VERIFY_EMAIL",
              idToken: await uu.getIdToken()
            };
          Eu && oj(ju.auth, Uu, Eu);
          const {
            email: Zu
          } = await async function(uu, Eu) {
            return BE(uu, Eu)
          }(ju.auth, Uu);
          Zu !== uu.email && await uu.reload()
        }
        async function Bj(uu, Eu, ju) {
          const Uu = (0, su.Q)(uu),
            Zu = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await uu.getIdToken(),
              newEmail: Eu
            };
          ju && oj(Uu.auth, Zu, ju);
          const {
            email: Xu
          } = await async function(uu, Eu) {
            return BE(uu, Eu)
          }(Uu.auth, Zu);
          Xu !== uu.email && await uu.reload()
        }
        async function Lj(uu, Eu) {
          let {
            displayName: ju,
            photoURL: Uu
          } = Eu;
          if (void 0 === ju && void 0 === Uu) return;
          const Zu = (0, su.Q)(uu),
            Xu = {
              idToken: await Zu.getIdToken(),
              displayName: ju,
              photoUrl: Uu,
              returnSecureToken: !0
            },
            lu = await nu(Zu, async function(uu, Eu) {
              return Wu(uu, "POST", "/v1/accounts:update", Eu)
            }(Zu.auth, Xu));
          Zu.displayName = lu.displayName || null, Zu.photoURL = lu.photoUrl || null;
          const qu = Zu.providerData.find((uu => {
            let {
              providerId: Eu
            } = uu;
            return "password" === Eu
          }));
          qu && (qu.displayName = Zu.displayName, qu.photoURL = Zu.photoURL), await Zu._updateTokensIfNecessary(lu)
        }

        function tj(uu, Eu) {
          return Tj((0, su.Q)(uu), Eu, null)
        }

        function xj(uu, Eu) {
          return Tj((0, su.Q)(uu), null, Eu)
        }
        async function Tj(uu, Eu, ju) {
          const {
            auth: su
          } = uu, Uu = {
            idToken: await uu.getIdToken(),
            returnSecureToken: !0
          };
          Eu && (Uu.email = Eu), ju && (Uu.password = ju);
          const Zu = await nu(uu, IE(su, Uu));
          await uu._updateTokensIfNecessary(Zu, !0)
        }
        class Hj {
          constructor(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = uu, this.providerId = Eu, this.profile = ju
          }
        }
        class Aj extends Hj {
          constructor(uu, Eu, ju, su) {
            super(uu, Eu, ju), this.username = su
          }
        }
        class nj extends Hj {
          constructor(uu, Eu) {
            super(uu, "facebook.com", Eu)
          }
        }
        class yj extends Aj {
          constructor(uu, Eu) {
            super(uu, "github.com", Eu, "string" === typeof(null === Eu || void 0 === Eu ? void 0 : Eu.login) ? null === Eu || void 0 === Eu ? void 0 : Eu.login : null)
          }
        }
        class zj extends Hj {
          constructor(uu, Eu) {
            super(uu, "google.com", Eu)
          }
        }
        class Rj extends Aj {
          constructor(uu, Eu, ju) {
            super(uu, "twitter.com", Eu, ju)
          }
        }

        function us(uu) {
          const {
            user: Eu,
            _tokenResponse: ju
          } = uu;
          return Eu.isAnonymous && !ju ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(uu) {
            var Eu, ju;
            if (!uu) return null;
            const {
              providerId: su
            } = uu, Uu = uu.rawUserInfo ? JSON.parse(uu.rawUserInfo) : {}, Zu = uu.isNewUser || "identitytoolkit#SignupNewUserResponse" === uu.kind;
            if (!su && (null === uu || void 0 === uu ? void 0 : uu.idToken)) {
              const su = null === (ju = null === (Eu = Au(uu.idToken)) || void 0 === Eu ? void 0 : Eu.firebase) || void 0 === ju ? void 0 : ju.sign_in_provider;
              if (su) return new Hj(Zu, "anonymous" !== su && "custom" !== su ? su : null)
            }
            if (!su) return null;
            switch (su) {
              case "facebook.com":
                return new nj(Zu, Uu);
              case "github.com":
                return new yj(Zu, Uu);
              case "google.com":
                return new zj(Zu, Uu);
              case "twitter.com":
                return new Rj(Zu, Uu, uu.screenName || null);
              case "custom":
              case "anonymous":
                return new Hj(Zu, null);
              default:
                return new Hj(Zu, su, Uu)
            }
          }(ju)
        }

        function Es(uu, Eu) {
          return (0, su.Q)(uu).setPersistence(Eu)
        }

        function ss(uu) {
          return vE(uu).initializeRecaptchaConfig()
        }

        function Us(uu, Eu, ju, Uu) {
          return (0, su.Q)(uu).onIdTokenChanged(Eu, ju, Uu)
        }

        function Zs(uu, Eu, ju) {
          return (0, su.Q)(uu).beforeAuthStateChanged(Eu, ju)
        }

        function Xs(uu, Eu, ju, Uu) {
          return (0, su.Q)(uu).onAuthStateChanged(Eu, ju, Uu)
        }

        function ls(uu) {
          (0, su.Q)(uu).useDeviceLanguage()
        }

        function qs(uu, Eu) {
          return (0, su.Q)(uu).updateCurrentUser(Eu)
        }

        function fs(uu) {
          return (0, su.Q)(uu).signOut()
        }
        async function Cs(uu) {
          return (0, su.Q)(uu).delete()
        }
        class bs {
          constructor(uu, Eu, ju) {
            this.type = uu, this.credential = Eu, this.auth = ju
          }
          static _fromIdtoken(uu, Eu) {
            return new bs("enroll", uu, Eu)
          }
          static _fromMfaPendingCredential(uu) {
            return new bs("signin", uu)
          }
          toJSON() {
            const uu = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [uu]: this.credential
              }
            }
          }
          static fromJSON(uu) {
            var Eu, ju;
            if (null === uu || void 0 === uu ? void 0 : uu.multiFactorSession) {
              if (null === (Eu = uu.multiFactorSession) || void 0 === Eu ? void 0 : Eu.pendingCredential) return bs._fromMfaPendingCredential(uu.multiFactorSession.pendingCredential);
              if (null === (ju = uu.multiFactorSession) || void 0 === ju ? void 0 : ju.idToken) return bs._fromIdtoken(uu.multiFactorSession.idToken)
            }
            return null
          }
        }
        class cs {
          constructor(uu, Eu, ju) {
            this.session = uu, this.hints = Eu, this.signInResolver = ju
          }
          static _fromError(uu, Eu) {
            const ju = vE(uu),
              su = Eu.customData._serverResponse,
              Uu = (su.mfaInfo || []).map((uu => dj._fromServerResponse(ju, uu)));
            du(su.mfaPendingCredential, ju, "internal-error");
            const Zu = bs._fromMfaPendingCredential(su.mfaPendingCredential);
            return new cs(Zu, Uu, (async uu => {
              const Uu = await uu._process(ju, Zu);
              delete su.mfaInfo, delete su.mfaPendingCredential;
              const Xu = Object.assign(Object.assign({}, su), {
                idToken: Uu.idToken,
                refreshToken: Uu.refreshToken
              });
              switch (Eu.operationType) {
                case "signIn":
                  const uu = await Cj._fromIdTokenResponse(ju, Eu.operationType, Xu);
                  return await ju._updateCurrentUser(uu.user), uu;
                case "reauthenticate":
                  return du(Eu.user, ju, "internal-error"), Cj._forOperation(Eu.user, Eu.operationType, Xu);
                default:
                  eu(ju, "internal-error")
              }
            }))
          }
          async resolveSignIn(uu) {
            const Eu = uu;
            return this.signInResolver(Eu)
          }
        }

        function Ns(uu, Eu) {
          var ju;
          const Uu = (0, su.Q)(uu),
            Zu = Eu;
          return du(Eu.customData.operationType, Uu, "argument-error"), du(null === (ju = Zu.customData._serverResponse) || void 0 === ju ? void 0 : ju.mfaPendingCredential, Uu, "argument-error"), cs._fromError(Uu, Zu)
        }
        class Os {
          constructor(uu) {
            this.user = uu, this.enrolledFactors = [], uu._onReload((Eu => {
              Eu.mfaInfo && (this.enrolledFactors = Eu.mfaInfo.map((Eu => dj._fromServerResponse(uu.auth, Eu))))
            }))
          }
          static _fromUser(uu) {
            return new Os(uu)
          }
          async getSession() {
            return bs._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(uu, Eu) {
            const ju = uu,
              su = await this.getSession(),
              Uu = await nu(this.user, ju._process(this.user.auth, su, Eu));
            return await this.user._updateTokensIfNecessary(Uu), this.user.reload()
          }
          async unenroll(uu) {
            const Eu = "string" === typeof uu ? uu : uu.uid,
              ju = await this.user.getIdToken();
            try {
              const uu = await nu(this.user, (su = this.user.auth, Uu = {
                idToken: ju,
                mfaEnrollmentId: Eu
              }, Wu(su, "POST", "/v2/accounts/mfaEnrollment:withdraw", iu(su, Uu))));
              this.enrolledFactors = this.enrolledFactors.filter((uu => {
                let {
                  uid: ju
                } = uu;
                return ju !== Eu
              })), await this.user._updateTokensIfNecessary(uu), await this.user.reload()
            } catch (Zu) {
              throw Zu
            }
            var su, Uu
          }
        }
        const Ys = new WeakMap;

        function hs(uu) {
          const Eu = (0, su.Q)(uu);
          return Ys.has(Eu) || Ys.set(Eu, Os._fromUser(Eu)), Ys.get(Eu)
        }
        const Ds = "__sak";
        class gs {
          constructor(uu, Eu) {
            this.storageRetriever = uu, this.type = Eu
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Ds, "1"), this.storage.removeItem(Ds), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (uu) {
              return Promise.resolve(!1)
            }
          }
          _set(uu, Eu) {
            return this.storage.setItem(uu, JSON.stringify(Eu)), Promise.resolve()
          }
          _get(uu) {
            const Eu = this.storage.getItem(uu);
            return Promise.resolve(Eu ? JSON.parse(Eu) : null)
          }
          _remove(uu) {
            return this.storage.removeItem(uu), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Ms extends gs {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (uu, Eu) => this.onStorageEvent(uu, Eu), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const uu = (0, su.S)();
              return cE(uu) || gE(uu)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (uu) {
                return !1
              }
            }(), this.fallbackToPolling = ME(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(uu) {
            for (const Eu of Object.keys(this.listeners)) {
              const ju = this.storage.getItem(Eu),
                su = this.localCache[Eu];
              ju !== su && uu(Eu, su, ju)
            }
          }
          onStorageEvent(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!uu.key) return void this.forAllChangedKeys(((uu, Eu, ju) => {
              this.notifyListeners(uu, ju)
            }));
            const ju = uu.key;
            if (Eu ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const su = this.storage.getItem(ju);
              if (uu.newValue !== su) null !== uu.newValue ? this.storage.setItem(ju, uu.newValue) : this.storage.removeItem(ju);
              else if (this.localCache[ju] === uu.newValue && !Eu) return
            }
            const Uu = () => {
                const uu = this.storage.getItem(ju);
                (Eu || this.localCache[ju] !== uu) && this.notifyListeners(ju, uu)
              },
              Zu = this.storage.getItem(ju);
            (0, su.Z)() && 10 === document.documentMode && Zu !== uu.newValue && uu.newValue !== uu.oldValue ? setTimeout(Uu, 10) : Uu()
          }
          notifyListeners(uu, Eu) {
            this.localCache[uu] = Eu;
            const ju = this.listeners[uu];
            if (ju)
              for (const su of Array.from(ju)) su(Eu ? JSON.parse(Eu) : Eu)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((uu, Eu, ju) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: uu,
                  oldValue: Eu,
                  newValue: ju
                }), !0)
              }))
            }), 1e3)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          attachListener() {
            window.addEventListener("storage", this.boundEventHandler)
          }
          detachListener() {
            window.removeEventListener("storage", this.boundEventHandler)
          }
          _addListener(uu, Eu) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[uu] || (this.listeners[uu] = new Set, this.localCache[uu] = this.storage.getItem(uu)), this.listeners[uu].add(Eu)
          }
          _removeListener(uu, Eu) {
            this.listeners[uu] && (this.listeners[uu].delete(Eu), 0 === this.listeners[uu].size && delete this.listeners[uu]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(uu, Eu) {
            await super._set(uu, Eu), this.localCache[uu] = JSON.stringify(Eu)
          }
          async _get(uu) {
            const Eu = await super._get(uu);
            return this.localCache[uu] = JSON.stringify(Eu), Eu
          }
          async _remove(uu) {
            await super._remove(uu), delete this.localCache[uu]
          }
        }
        Ms.type = "LOCAL";
        const es = Ms;
        class Gs extends gs {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(uu, Eu) {}
          _removeListener(uu, Eu) {}
        }
        Gs.type = "SESSION";
        const ps = Gs;
        class ws {
          constructor(uu) {
            this.eventTarget = uu, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(uu) {
            const Eu = this.receivers.find((Eu => Eu.isListeningto(uu)));
            if (Eu) return Eu;
            const ju = new ws(uu);
            return this.receivers.push(ju), ju
          }
          isListeningto(uu) {
            return this.eventTarget === uu
          }
          async handleEvent(uu) {
            const Eu = uu,
              {
                eventId: ju,
                eventType: su,
                data: Uu
              } = Eu.data,
              Zu = this.handlersMap[su];
            if (!(null === Zu || void 0 === Zu ? void 0 : Zu.size)) return;
            Eu.ports[0].postMessage({
              status: "ack",
              eventId: ju,
              eventType: su
            });
            const Xu = Array.from(Zu).map((async uu => uu(Eu.origin, Uu))),
              lu = await
            function(uu) {
              return Promise.all(uu.map((async uu => {
                try {
                  return {
                    fulfilled: !0,
                    value: await uu
                  }
                } catch (Eu) {
                  return {
                    fulfilled: !1,
                    reason: Eu
                  }
                }
              })))
            }(Xu);
            Eu.ports[0].postMessage({
              status: "done",
              eventId: ju,
              eventType: su,
              response: lu
            })
          }
          _subscribe(uu, Eu) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[uu] || (this.handlersMap[uu] = new Set), this.handlersMap[uu].add(Eu)
          }
          _unsubscribe(uu, Eu) {
            this.handlersMap[uu] && Eu && this.handlersMap[uu].delete(Eu), Eu && 0 !== this.handlersMap[uu].size || delete this.handlersMap[uu], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function ds() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            ju = "";
          for (let su = 0; su < Eu; su++) ju += Math.floor(10 * Math.random());
          return uu + ju
        }
        ws.receivers = [];
        class as {
          constructor(uu) {
            this.target = uu, this.handlers = new Set
          }
          removeMessageHandler(uu) {
            uu.messageChannel && (uu.messageChannel.port1.removeEventListener("message", uu.gM), uu.messageChannel.port1.close()), this.handlers.delete(uu)
          }
          async _send(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const su = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!su) throw new Error("connection_unavailable");
            let Uu, Zu;
            return new Promise(((Xu, lu) => {
              const qu = ds("", 20);
              su.port1.start();
              const fu = setTimeout((() => {
                lu(new Error("unsupported_event"))
              }), ju);
              Zu = {
                messageChannel: su,
                gM(uu) {
                  const Eu = uu;
                  if (Eu.data.eventId === qu) switch (Eu.data.status) {
                    case "ack":
                      clearTimeout(fu), Uu = setTimeout((() => {
                        lu(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Uu), Xu(Eu.data.response);
                      break;
                    default:
                      clearTimeout(fu), clearTimeout(Uu), lu(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Zu), su.port1.addEventListener("message", Zu.gM), this.target.postMessage({
                eventType: uu,
                eventId: qu,
                data: Eu
              }, [su.port2])
            })).finally((() => {
              Zu && this.removeMessageHandler(Zu)
            }))
          }
        }

        function Ps() {
          return window
        }

        function os() {
          return "undefined" !== typeof Ps().WorkerGlobalScope && "function" === typeof Ps().importScripts
        }
        const ks = "firebaseLocalStorageDb",
          ms = "firebaseLocalStorage",
          vs = "fbase_key";
        class Ks {
          constructor(uu) {
            this.request = uu
          }
          toPromise() {
            return new Promise(((uu, Eu) => {
              this.request.addEventListener("success", (() => {
                uu(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Eu(this.request.error)
              }))
            }))
          }
        }

        function Vs(uu, Eu) {
          return uu.transaction([ms], Eu ? "readwrite" : "readonly").objectStore(ms)
        }

        function rs() {
          const uu = indexedDB.open(ks, 1);
          return new Promise(((Eu, ju) => {
            uu.addEventListener("error", (() => {
              ju(uu.error)
            })), uu.addEventListener("upgradeneeded", (() => {
              const Eu = uu.result;
              try {
                Eu.createObjectStore(ms, {
                  keyPath: vs
                })
              } catch (su) {
                ju(su)
              }
            })), uu.addEventListener("success", (async () => {
              const ju = uu.result;
              ju.objectStoreNames.contains(ms) ? Eu(ju) : (ju.close(), await
                function() {
                  const uu = indexedDB.deleteDatabase(ks);
                  return new Ks(uu).toPromise()
                }(), Eu(await rs()))
            }))
          }))
        }
        async function Qs(uu, Eu, ju) {
          const su = Vs(uu, !0).put({
            [vs]: Eu,
            value: ju
          });
          return new Ks(su).toPromise()
        }

        function is(uu, Eu) {
          const ju = Vs(uu, !0).delete(Eu);
          return new Ks(ju).toPromise()
        }
        class Ws {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await rs()), this.db
          }
          async _withRetries(uu) {
            let Eu = 0;
            for (;;) try {
              const Eu = await this._openDb();
              return await uu(Eu)
            } catch (ju) {
              if (Eu++ > 3) throw ju;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return os() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = ws._getInstance(os() ? self : null), this.receiver._subscribe("keyChanged", (async (uu, Eu) => ({
              keyProcessed: (await this._poll()).includes(Eu.key)
            }))), this.receiver._subscribe("ping", (async (uu, Eu) => ["keyChanged"]))
          }
          async initializeSender() {
            var uu, Eu;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (uu) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new as(this.activeServiceWorker);
            const ju = await this.sender._send("ping", {}, 800);
            ju && (null === (uu = ju[0]) || void 0 === uu ? void 0 : uu.fulfilled) && (null === (Eu = ju[0]) || void 0 === Eu ? void 0 : Eu.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(uu) {
            if (this.sender && this.activeServiceWorker && function() {
                var uu;
                return (null === (uu = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === uu ? void 0 : uu.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: uu
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Eu) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const uu = await rs();
              return await Qs(uu, Ds, "1"), await is(uu, Ds), !0
            } catch (uu) {}
            return !1
          }
          async _withPendingWrite(uu) {
            this.pendingWrites++;
            try {
              await uu()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(uu, Eu) {
            return this._withPendingWrite((async () => (await this._withRetries((ju => Qs(ju, uu, Eu))), this.localCache[uu] = Eu, this.notifyServiceWorker(uu))))
          }
          async _get(uu) {
            const Eu = await this._withRetries((Eu => async function(uu, Eu) {
              const ju = Vs(uu, !1).get(Eu),
                su = await new Ks(ju).toPromise();
              return void 0 === su ? null : su.value
            }(Eu, uu)));
            return this.localCache[uu] = Eu, Eu
          }
          async _remove(uu) {
            return this._withPendingWrite((async () => (await this._withRetries((Eu => is(Eu, uu))), delete this.localCache[uu], this.notifyServiceWorker(uu))))
          }
          async _poll() {
            const uu = await this._withRetries((uu => {
              const Eu = Vs(uu, !1).getAll();
              return new Ks(Eu).toPromise()
            }));
            if (!uu) return [];
            if (0 !== this.pendingWrites) return [];
            const Eu = [],
              ju = new Set;
            for (const {
                fbase_key: su,
                value: Uu
              }
              of uu) ju.add(su), JSON.stringify(this.localCache[su]) !== JSON.stringify(Uu) && (this.notifyListeners(su, Uu), Eu.push(su));
            for (const su of Object.keys(this.localCache)) this.localCache[su] && !ju.has(su) && (this.notifyListeners(su, null), Eu.push(su));
            return Eu
          }
          notifyListeners(uu, Eu) {
            this.localCache[uu] = Eu;
            const ju = this.listeners[uu];
            if (ju)
              for (const su of Array.from(ju)) su(Eu)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(uu, Eu) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[uu] || (this.listeners[uu] = new Set, this._get(uu)), this.listeners[uu].add(Eu)
          }
          _removeListener(uu, Eu) {
            this.listeners[uu] && (this.listeners[uu].delete(Eu), 0 === this.listeners[uu].size && delete this.listeners[uu]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Ws.type = "LOCAL";
        const Ss = Ws;
        const Is = 1e12;
        class Fs {
          constructor(uu) {
            this.auth = uu, this.counter = Is, this._widgets = new Map
          }
          render(uu, Eu) {
            const ju = this.counter;
            return this._widgets.set(ju, new Bs(uu, this.auth.name, Eu || {})), this.counter++, ju
          }
          reset(uu) {
            var Eu;
            const ju = uu || Is;
            null === (Eu = this._widgets.get(ju)) || void 0 === Eu || Eu.delete(), this._widgets.delete(ju)
          }
          getResponse(uu) {
            var Eu;
            const ju = uu || Is;
            return (null === (Eu = this._widgets.get(ju)) || void 0 === Eu ? void 0 : Eu.getResponse()) || ""
          }
          async execute(uu) {
            var Eu;
            const ju = uu || Is;
            return null === (Eu = this._widgets.get(ju)) || void 0 === Eu || Eu.execute(), ""
          }
        }
        class Bs {
          constructor(uu, Eu, ju) {
            this.params = ju, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const su = "string" === typeof uu ? document.getElementById(uu) : uu;
            du(su, "argument-error", {
              appName: Eu
            }), this.container = su, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(uu) {
                const Eu = [],
                  ju = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let su = 0; su < uu; su++) Eu.push(ju.charAt(Math.floor(Math.random() * ju.length)));
                return Eu.join("")
              }(50);
              const {
                callback: uu,
                "expired-callback": Eu
              } = this.params;
              if (uu) try {
                uu(this.responseToken)
              } catch (ju) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Eu) try {
                  Eu()
                } catch (ju) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const Ls = aE("rcb"),
          ts = new vu(3e4, 6e4);
        class xs {
          constructor() {
            var uu;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (uu = Ps().grecaptcha) || void 0 === uu ? void 0 : uu.render)
          }
          load(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return du(function(uu) {
              return uu.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(uu)
            }(Eu), uu, "argument-error"), this.shouldResolveImmediately(Eu) && pE(Ps().grecaptcha) ? Promise.resolve(Ps().grecaptcha) : new Promise(((ju, Uu) => {
              const Zu = Ps().setTimeout((() => {
                Uu(Gu(uu, "network-request-failed"))
              }), ts.get());
              Ps()[Ls] = () => {
                Ps().clearTimeout(Zu), delete Ps()[Ls];
                const su = Ps().grecaptcha;
                if (!su || !pE(su)) return void Uu(Gu(uu, "internal-error"));
                const Xu = su.render;
                su.render = (uu, Eu) => {
                  const ju = Xu(uu, Eu);
                  return this.counter++, ju
                }, this.hostLanguage = Eu, ju(su)
              };
              dE(`https://www.google.com/recaptcha/api.js??${(0,su.kb)({onload:Ls,render:"explicit",hl:Eu})}`).catch((() => {
                clearTimeout(Zu), Uu(Gu(uu, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(uu) {
            var Eu;
            return !!(null === (Eu = Ps().grecaptcha) || void 0 === Eu ? void 0 : Eu.render) && (uu === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class Ts {
          async load(uu) {
            return new Fs(uu)
          }
          clearedOneInstance() {}
        }
        const Hs = "recaptcha",
          As = {
            theme: "light",
            type: "image"
          };
        class ns {
          constructor(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, As),
              ju = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Eu, this.type = Hs, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = vE(ju), this.isInvisible = "invisible" === this.parameters.size, du("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const su = "string" === typeof uu ? document.getElementById(uu) : uu;
            du(su, this.auth, "argument-error"), this.container = su, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Ts : new xs, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const uu = await this.render(),
              Eu = this.getAssertedRecaptcha(),
              ju = Eu.getResponse(uu);
            return ju || new Promise((ju => {
              const su = uu => {
                uu && (this.tokenChangeListeners.delete(su), ju(uu))
              };
              this.tokenChangeListeners.add(su), this.isInvisible && Eu.execute(uu)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (uu) {
              return Promise.reject(uu)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((uu => {
              throw this.renderPromise = null, uu
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((uu => {
              this.container.removeChild(uu)
            }))
          }
          validateStartingState() {
            du(!this.parameters.sitekey, this.auth, "argument-error"), du(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), du("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(uu) {
            return Eu => {
              if (this.tokenChangeListeners.forEach((uu => uu(Eu))), "function" === typeof uu) uu(Eu);
              else if ("string" === typeof uu) {
                const ju = Ps()[uu];
                "function" === typeof ju && ju(Eu)
              }
            }
          }
          assertNotDestroyed() {
            du(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let uu = this.container;
              if (!this.isInvisible) {
                const Eu = document.createElement("div");
                uu.appendChild(Eu), uu = Eu
              }
              this.widgetId = this.getAssertedRecaptcha().render(uu, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            du(ku() && !os(), this.auth, "internal-error"), await
            function() {
              let uu = null;
              return new Promise((Eu => {
                "complete" !== document.readyState ? (uu = () => Eu(), window.addEventListener("load", uu)) : Eu()
              })).catch((Eu => {
                throw uu && window.removeEventListener("load", uu), Eu
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const uu = await async function(uu) {
              return (await Wu(uu, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            du(uu, this.auth, "internal-error"), this.parameters.sitekey = uu
          }
          getAssertedRecaptcha() {
            return du(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class ys {
          constructor(uu, Eu) {
            this.verificationId = uu, this.onConfirmation = Eu
          }
          confirm(uu) {
            const Eu = nE._fromVerification(this.verificationId, uu);
            return this.onConfirmation(Eu)
          }
        }
        async function zs(uu, Eu, ju) {
          const Uu = vE(uu),
            Zu = await EU(Uu, Eu, (0, su.Q)(ju));
          return new ys(Zu, (uu => Gj(Uu, uu)))
        }
        async function Rs(uu, Eu, ju) {
          const Uu = (0, su.Q)(uu);
          await gj(!1, Uu, "phone");
          const Zu = await EU(Uu.auth, Eu, (0, su.Q)(ju));
          return new ys(Zu, (uu => pj(Uu, uu)))
        }
        async function uU(uu, Eu, ju) {
          const Uu = (0, su.Q)(uu),
            Zu = await EU(Uu.auth, Eu, (0, su.Q)(ju));
          return new ys(Zu, (uu => wj(Uu, uu)))
        }
        async function EU(uu, Eu, ju) {
          var su;
          const Uu = await ju.verify();
          try {
            let Zu;
            if (du("string" === typeof Uu, uu, "argument-error"), du(ju.type === Hs, uu, "argument-error"), Zu = "string" === typeof Eu ? {
                phoneNumber: Eu
              } : Eu, "session" in Zu) {
              const Eu = Zu.session;
              if ("phoneNumber" in Zu) {
                du("enroll" === Eu.type, uu, "internal-error");
                const ju = await
                function(uu, Eu) {
                  return Wu(uu, "POST", "/v2/accounts/mfaEnrollment:start", iu(uu, Eu))
                }(uu, {
                  idToken: Eu.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Zu.phoneNumber,
                    recaptchaToken: Uu
                  }
                });
                return ju.phoneSessionInfo.sessionInfo
              } {
                du("signin" === Eu.type, uu, "internal-error");
                const ju = (null === (su = Zu.multiFactorHint) || void 0 === su ? void 0 : su.uid) || Zu.multiFactorUid;
                du(ju, uu, "missing-multi-factor-info");
                const Xu = await
                function(uu, Eu) {
                  return Wu(uu, "POST", "/v2/accounts/mfaSignIn:start", iu(uu, Eu))
                }(uu, {
                  mfaPendingCredential: Eu.credential,
                  mfaEnrollmentId: ju,
                  phoneSignInInfo: {
                    recaptchaToken: Uu
                  }
                });
                return Xu.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Eu
              } = await async function(uu, Eu) {
                return Wu(uu, "POST", "/v1/accounts:sendVerificationCode", iu(uu, Eu))
              }(uu, {
                phoneNumber: Zu.phoneNumber,
                recaptchaToken: Uu
              });
              return Eu
            }
          } finally {
            ju._reset()
          }
        }
        async function jU(uu, Eu) {
          await Dj((0, su.Q)(uu), Eu)
        }
        class sU {
          constructor(uu) {
            this.providerId = sU.PROVIDER_ID, this.auth = vE(uu)
          }
          verifyPhoneNumber(uu, Eu) {
            return EU(this.auth, uu, (0, su.Q)(Eu))
          }
          static credential(uu, Eu) {
            return nE._fromVerification(uu, Eu)
          }
          static credentialFromResult(uu) {
            const Eu = uu;
            return sU.credentialFromTaggedObject(Eu)
          }
          static credentialFromError(uu) {
            return sU.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Eu
            } = uu;
            if (!Eu) return null;
            const {
              phoneNumber: ju,
              temporaryProof: su
            } = Eu;
            return ju && su ? nE._fromTokenResponse(ju, su) : null
          }
        }

        function UU(uu, Eu) {
          return Eu ? ZE(Eu) : (du(uu._popupRedirectResolver, uu, "argument-error"), uu._popupRedirectResolver)
        }
        sU.PROVIDER_ID = "phone", sU.PHONE_SIGN_IN_METHOD = "phone";
        class ZU extends WE {
          constructor(uu) {
            super("custom", "custom"), this.params = uu
          }
          _getIdTokenResponse(uu) {
            return TE(uu, this._buildIdpRequest())
          }
          _linkToIdToken(uu, Eu) {
            return TE(uu, this._buildIdpRequest(Eu))
          }
          _getReauthenticationResolver(uu) {
            return TE(uu, this._buildIdpRequest())
          }
          _buildIdpRequest(uu) {
            const Eu = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return uu && (Eu.idToken = uu), Eu
          }
        }

        function XU(uu) {
          return ej(uu.auth, new ZU(uu), uu.bypassAuthState)
        }

        function lU(uu) {
          const {
            auth: Eu,
            user: ju
          } = uu;
          return du(ju, Eu, "internal-error"), Mj(ju, new ZU(uu), uu.bypassAuthState)
        }
        async function qU(uu) {
          const {
            auth: Eu,
            user: ju
          } = uu;
          return du(ju, Eu, "internal-error"), Dj(ju, new ZU(uu), uu.bypassAuthState)
        }
        class fU {
          constructor(uu, Eu, ju, su) {
            let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = uu, this.resolver = ju, this.user = su, this.bypassAuthState = Uu, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Eu) ? Eu : [Eu]
          }
          execute() {
            return new Promise((async (uu, Eu) => {
              this.pendingPromise = {
                resolve: uu,
                reject: Eu
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (ju) {
                this.reject(ju)
              }
            }))
          }
          async onAuthEvent(uu) {
            const {
              urlResponse: Eu,
              sessionId: ju,
              postBody: su,
              tenantId: Uu,
              error: Zu,
              type: Xu
            } = uu;
            if (Zu) return void this.reject(Zu);
            const lu = {
              auth: this.auth,
              requestUri: Eu,
              sessionId: ju,
              tenantId: Uu || void 0,
              postBody: su || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Xu)(lu))
            } catch (qu) {
              this.reject(qu)
            }
          }
          onError(uu) {
            this.reject(uu)
          }
          getIdpTask(uu) {
            switch (uu) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return XU;
              case "linkViaPopup":
              case "linkViaRedirect":
                return qU;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return lU;
              default:
                eu(this.auth, "internal-error")
            }
          }
          resolve(uu) {
            Pu(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(uu), this.unregisterAndCleanUp()
          }
          reject(uu) {
            Pu(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(uu), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const CU = new vu(2e3, 1e4);
        async function bU(uu, Eu, ju) {
          const su = vE(uu);
          wu(uu, Eu, uj);
          const Uu = UU(su, ju);
          return new OU(su, "signInViaPopup", Eu, Uu).executeNotNull()
        }
        async function cU(uu, Eu, ju) {
          const Uu = (0, su.Q)(uu);
          wu(Uu.auth, Eu, uj);
          const Zu = UU(Uu.auth, ju);
          return new OU(Uu.auth, "reauthViaPopup", Eu, Zu, Uu).executeNotNull()
        }
        async function NU(uu, Eu, ju) {
          const Uu = (0, su.Q)(uu);
          wu(Uu.auth, Eu, uj);
          const Zu = UU(Uu.auth, ju);
          return new OU(Uu.auth, "linkViaPopup", Eu, Zu, Uu).executeNotNull()
        }
        class OU extends fU {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, su, Uu), this.provider = ju, this.authWindow = null, this.pollId = null, OU.currentPopupAction && OU.currentPopupAction.cancel(), OU.currentPopupAction = this
          }
          async executeNotNull() {
            const uu = await this.execute();
            return du(uu, this.auth, "internal-error"), uu
          }
          async onExecution() {
            Pu(1 === this.filter.length, "Popup operations only handle one event");
            const uu = ds();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], uu), this.authWindow.associatedEvent = uu, this.resolver._originValidation(this.auth).catch((uu => {
              this.reject(uu)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (uu => {
              uu || this.reject(Gu(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var uu;
            return (null === (uu = this.authWindow) || void 0 === uu ? void 0 : uu.associatedEvent) || null
          }
          cancel() {
            this.reject(Gu(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, OU.currentPopupAction = null
          }
          pollUserCancellation() {
            const uu = () => {
              var Eu, ju;
              (null === (ju = null === (Eu = this.authWindow) || void 0 === Eu ? void 0 : Eu.window) || void 0 === ju ? void 0 : ju.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Gu(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(uu, CU.get())
            };
            uu()
          }
        }
        OU.currentPopupAction = null;
        const YU = "pendingRedirect",
          hU = new Map;
        class DU extends fU {
          constructor(uu, Eu) {
            super(uu, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Eu, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let uu = hU.get(this.auth._key());
            if (!uu) {
              try {
                const Eu = await async function(uu, Eu) {
                  const ju = GU(Eu),
                    su = eU(uu);
                  if (!await su._isAvailable()) return !1;
                  const Uu = "true" === await su._get(ju);
                  return await su._remove(ju), Uu
                }(this.resolver, this.auth) ? await super.execute() : null;
                uu = () => Promise.resolve(Eu)
              } catch (Eu) {
                uu = () => Promise.reject(Eu)
              }
              hU.set(this.auth._key(), uu)
            }
            return this.bypassAuthState || hU.set(this.auth._key(), (() => Promise.resolve(null))), uu()
          }
          async onAuthEvent(uu) {
            if ("signInViaRedirect" === uu.type) return super.onAuthEvent(uu);
            if ("unknown" !== uu.type) {
              if (uu.eventId) {
                const Eu = await this.auth._redirectUserForId(uu.eventId);
                if (Eu) return this.user = Eu, super.onAuthEvent(uu);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function gU(uu, Eu) {
          return eU(uu)._set(GU(Eu), "true")
        }

        function MU(uu, Eu) {
          hU.set(uu._key(), Eu)
        }

        function eU(uu) {
          return ZE(uu._redirectPersistence)
        }

        function GU(uu) {
          return qE(YU, uu.config.apiKey, uu.name)
        }

        function pU(uu, Eu, ju) {
          return async function(uu, Eu, ju) {
            const su = vE(uu);
            wu(uu, Eu, uj), await su._initializationPromise;
            const Uu = UU(su, ju);
            return await gU(Uu, su), Uu._openRedirect(su, Eu, "signInViaRedirect")
          }(uu, Eu, ju)
        }

        function wU(uu, Eu, ju) {
          return async function(uu, Eu, ju) {
            const Uu = (0, su.Q)(uu);
            wu(Uu.auth, Eu, uj), await Uu.auth._initializationPromise;
            const Zu = UU(Uu.auth, ju);
            await gU(Zu, Uu.auth);
            const Xu = await PU(Uu);
            return Zu._openRedirect(Uu.auth, Eu, "reauthViaRedirect", Xu)
          }(uu, Eu, ju)
        }

        function JU(uu, Eu, ju) {
          return async function(uu, Eu, ju) {
            const Uu = (0, su.Q)(uu);
            wu(Uu.auth, Eu, uj), await Uu.auth._initializationPromise;
            const Zu = UU(Uu.auth, ju);
            await gj(!1, Uu, Eu.providerId), await gU(Zu, Uu.auth);
            const Xu = await PU(Uu);
            return Zu._openRedirect(Uu.auth, Eu, "linkViaRedirect", Xu)
          }(uu, Eu, ju)
        }
        async function dU(uu, Eu) {
          return await vE(uu)._initializationPromise, aU(uu, Eu, !1)
        }
        async function aU(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const su = vE(uu),
            Uu = UU(su, Eu),
            Zu = new DU(su, Uu, ju),
            Xu = await Zu.execute();
          return Xu && !ju && (delete Xu.user._redirectEventId, await su._persistUserIfCurrent(Xu.user), await su._setRedirectUser(null, Eu)), Xu
        }
        async function PU(uu) {
          const Eu = ds(`${uu.uid}:::`);
          return uu._redirectEventId = Eu, await uu.auth._setRedirectUser(uu), await uu.auth._persistUserIfCurrent(uu), Eu
        }
        class oU {
          constructor(uu) {
            this.auth = uu, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(uu) {
            this.consumers.add(uu), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, uu) && (this.sendToConsumer(this.queuedRedirectEvent, uu), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(uu) {
            this.consumers.delete(uu)
          }
          onEvent(uu) {
            if (this.hasEventBeenHandled(uu)) return !1;
            let Eu = !1;
            return this.consumers.forEach((ju => {
              this.isEventForConsumer(uu, ju) && (Eu = !0, this.sendToConsumer(uu, ju), this.saveEventToCache(uu))
            })), this.hasHandledPotentialRedirect || ! function(uu) {
              switch (uu.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return mU(uu);
                default:
                  return !1
              }
            }(uu) || (this.hasHandledPotentialRedirect = !0, Eu || (this.queuedRedirectEvent = uu, Eu = !0)), Eu
          }
          sendToConsumer(uu, Eu) {
            var ju;
            if (uu.error && !mU(uu)) {
              const su = (null === (ju = uu.error.code) || void 0 === ju ? void 0 : ju.split("auth/")[1]) || "internal-error";
              Eu.onError(Gu(this.auth, su))
            } else Eu.onAuthEvent(uu)
          }
          isEventForConsumer(uu, Eu) {
            const ju = null === Eu.eventId || !!uu.eventId && uu.eventId === Eu.eventId;
            return Eu.filter.includes(uu.type) && ju
          }
          hasEventBeenHandled(uu) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(kU(uu))
          }
          saveEventToCache(uu) {
            this.cachedEventUids.add(kU(uu)), this.lastProcessedEventTime = Date.now()
          }
        }

        function kU(uu) {
          return [uu.type, uu.eventId, uu.sessionId, uu.tenantId].filter((uu => uu)).join("-")
        }

        function mU(uu) {
          let {
            type: Eu,
            error: ju
          } = uu;
          return "unknown" === Eu && "auth/no-auth-event" === (null === ju || void 0 === ju ? void 0 : ju.code)
        }
        const vU = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          KU = /^https?/;
        async function VU(uu) {
          if (uu.config.emulator) return;
          const {
            authorizedDomains: Eu
          } = await async function(uu) {
            return Wu(uu, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(uu);
          for (const su of Eu) try {
            if (rU(su)) return
          } catch (ju) {}
          eu(uu, "unauthorized-domain")
        }

        function rU(uu) {
          const Eu = ou(),
            {
              protocol: ju,
              hostname: su
            } = new URL(Eu);
          if (uu.startsWith("chrome-extension://")) {
            const Uu = new URL(uu);
            return "" === Uu.hostname && "" === su ? "chrome-extension:" === ju && uu.replace("chrome-extension://", "") === Eu.replace("chrome-extension://", "") : "chrome-extension:" === ju && Uu.hostname === su
          }
          if (!KU.test(ju)) return !1;
          if (vU.test(uu)) return su === uu;
          const Uu = uu.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Uu + "|" + Uu + ")$", "i").test(su)
        }
        const QU = new vu(3e4, 6e4);

        function iU() {
          const uu = Ps().___jsl;
          if (null === uu || void 0 === uu ? void 0 : uu.H)
            for (const Eu of Object.keys(uu.H))
              if (uu.H[Eu].r = uu.H[Eu].r || [], uu.H[Eu].L = uu.H[Eu].L || [], uu.H[Eu].r = [...uu.H[Eu].L], uu.CP)
                for (let ju = 0; ju < uu.CP.length; ju++) uu.CP[ju] = null
        }
        let WU = null;

        function SU(uu) {
          return WU = WU || function(uu) {
            return new Promise(((Eu, ju) => {
              var su, Uu, Zu;

              function Xu() {
                iU(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Eu(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    iU(), ju(Gu(uu, "network-request-failed"))
                  },
                  timeout: QU.get()
                })
              }
              if (null === (Uu = null === (su = Ps().gapi) || void 0 === su ? void 0 : su.iframes) || void 0 === Uu ? void 0 : Uu.Iframe) Eu(gapi.iframes.getContext());
              else {
                if (!(null === (Zu = Ps().gapi) || void 0 === Zu ? void 0 : Zu.load)) {
                  const Eu = aE("iframefcb");
                  return Ps()[Eu] = () => {
                    gapi.load ? Xu() : ju(Gu(uu, "network-request-failed"))
                  }, dE(`https://apis.google.com/js/api.js?onload=${Eu}`).catch((uu => ju(uu)))
                }
                Xu()
              }
            })).catch((uu => {
              throw WU = null, uu
            }))
          }(uu), WU
        }
        const IU = new vu(5e3, 15e3),
          FU = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          BU = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function LU(uu) {
          const Eu = uu.config;
          du(Eu.authDomain, uu, "auth-domain-config-required");
          const ju = Eu.emulator ? Ku(Eu, "emulator/auth/iframe") : `https://${uu.config.authDomain}/__/auth/iframe`,
            Zu = {
              apiKey: Eu.apiKey,
              appName: uu.name,
              v: Uu.f
            },
            Xu = BU.get(uu.config.apiHost);
          Xu && (Zu.eid = Xu);
          const lu = uu._getFrameworks();
          return lu.length && (Zu.fw = lu.join(",")), `${ju}?${(0,su.kb)(Zu).slice(1)}`
        }
        const tU = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class xU {
          constructor(uu) {
            this.window = uu, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (uu) {}
          }
        }

        function TU(uu, Eu, ju) {
          let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Xu = Math.max((window.screen.availHeight - Zu) / 2, 0).toString(),
            lu = Math.max((window.screen.availWidth - Uu) / 2, 0).toString();
          let qu = "";
          const fu = Object.assign(Object.assign({}, tU), {
              width: Uu.toString(),
              height: Zu.toString(),
              top: Xu,
              left: lu
            }),
            Cu = (0, su.S)().toLowerCase();
          ju && (qu = NE(Cu) ? "_blank" : ju), bE(Cu) && (Eu = Eu || "http://localhost", fu.scrollbars = "yes");
          const bu = Object.entries(fu).reduce(((uu, Eu) => {
            let [ju, su] = Eu;
            return `${uu}${ju}=${su},`
          }), "");
          if (function() {
              var uu;
              return gE(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.S)()) && !!(null === (uu = window.navigator) || void 0 === uu ? void 0 : uu.standalone)
            }(Cu) && "_self" !== qu) return function(uu, Eu) {
            const ju = document.createElement("a");
            ju.href = uu, ju.target = Eu;
            const su = document.createEvent("MouseEvent");
            su.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), ju.dispatchEvent(su)
          }(Eu || "", qu), new xU(null);
          const cu = window.open(Eu || "", qu, bu);
          du(cu, uu, "popup-blocked");
          try {
            cu.focus()
          } catch (Nu) {}
          return new xU(cu)
        }
        const HU = "__/auth/handler",
          AU = "emulator/auth/handler",
          nU = encodeURIComponent("fac");
        async function yU(uu, Eu, ju, Zu, Xu, lu) {
            du(uu.config.authDomain, uu, "auth-domain-config-required"), du(uu.config.apiKey, uu, "invalid-api-key");
            const qu = {
              apiKey: uu.config.apiKey,
              appName: uu.name,
              authType: ju,
              redirectUrl: Zu,
              v: Uu.f,
              eventId: Xu
            };
            if (Eu instanceof uj) {
              Eu.setDefaultLanguage(uu.languageCode), qu.providerId = Eu.providerId || "", (0, su.V)(Eu.getCustomParameters()) || (qu.customParameters = JSON.stringify(Eu.getCustomParameters()));
              for (const [uu, Eu] of Object.entries(lu || {})) qu[uu] = Eu
            }
            if (Eu instanceof Ej) {
              const uu = Eu.getScopes().filter((uu => "" !== uu));
              uu.length > 0 && (qu.scopes = uu.join(","))
            }
            uu.tenantId && (qu.tid = uu.tenantId);
            const fu = qu;
            for (const su of Object.keys(fu)) void 0 === fu[su] && delete fu[su];
            const Cu = await uu._getAppCheckToken(),
              bu = Cu ? `#${nU}=${encodeURIComponent(Cu)}` : "";
            return `${function(uu){let{config:Eu}=uu;if(!Eu.emulator)return`
            https: //${Eu.authDomain}/${HU}`;return Ku(Eu,AU)}(uu)}?${(0,su.kb)(fu).slice(1)}${bu}`}const zU="webStorageSupport";const RU=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ps,this._completeRedirectFn=aU,this._overrideRedirectResult=MU}async _openPopup(uu,Eu,ju,su){var Uu;Pu(null===(Uu=this.eventManagers[uu._key()])||void 0===Uu?void 0:Uu.manager,"_initialize() not called before _openPopup()");return TU(uu,await yU(uu,Eu,ju,ou(),su),ds())}async _openRedirect(uu,Eu,ju,su){await this._originValidation(uu);return function(uu){Ps().location.href=uu}(await yU(uu,Eu,ju,ou(),su)),new Promise((()=>{}))}_initialize(uu){const Eu=uu._key();if(this.eventManagers[Eu]){const{manager:uu,promise:ju}=this.eventManagers[Eu];return uu?Promise.resolve(uu):(Pu(ju,"If manager is not set, promise should be"),ju)}const ju=this.initAndGetManager(uu);return this.eventManagers[Eu]={promise:ju},ju.catch((()=>{delete this.eventManagers[Eu]})),ju}async initAndGetManager(uu){const Eu=await async function(uu){const Eu=await SU(uu),ju=Ps().gapi;return du(ju,uu,"internal-error"),Eu.open({where:document.body,url:LU(uu),messageHandlersFilter:ju.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FU,dontclear:!0},(Eu=>new Promise((async(ju,su)=>{await Eu.restyle({setHideOnLeave:!1});const Uu=Gu(uu,"network-request-failed"),Zu=Ps().setTimeout((()=>{su(Uu)}),IU.get());function Xu(){Ps().clearTimeout(Zu),ju(Eu)}Eu.ping(Xu).then(Xu,(()=>{su(Uu)}))}))))}(uu),ju=new oU(uu);return Eu.register("authEvent",(Eu=>{du(null===Eu||void 0===Eu?void 0:Eu.authEvent,uu,"invalid-auth-event");return{status:ju.onEvent(Eu.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[uu._key()]={manager:ju},this.iframes[uu._key()]=Eu,ju}_isIframeWebStorageSupported(uu,Eu){this.iframes[uu._key()].send(zU,{type:zU},(ju=>{var su;const Uu=null===(su=null===ju||void 0===ju?void 0:ju[0])||void 0===su?void 0:su[zU];void 0!==Uu&&Eu(!!Uu),eu(uu,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(uu){const Eu=uu._key();return this.originValidationPromises[Eu]||(this.originValidationPromises[Eu]=VU(uu)),this.originValidationPromises[Eu]}get _shouldInitProactively(){return ME()||cE()||gE()}};class uZ{constructor(uu){this.factorId=uu}_process(uu,Eu,ju){switch(Eu.type){case"enroll":return this._finalizeEnroll(uu,Eu.credential,ju);case"signin":return this._finalizeSignIn(uu,Eu.credential);default:return au("unexpected MultiFactorSessionType")}}}class EZ extends uZ{constructor(uu){super("phone"),this.credential=uu}static _fromCredential(uu){return new EZ(uu)}_finalizeEnroll(uu,Eu,ju){return function(uu,Eu){return Wu(uu,"POST","/v2/accounts/mfaEnrollment:finalize",iu(uu,Eu))}(uu,{idToken:Eu,displayName:ju,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(uu,Eu){return function(uu,Eu){return Wu(uu,"POST","/v2/accounts/mfaSignIn:finalize",iu(uu,Eu))}(uu,{mfaPendingCredential:Eu,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class jZ{constructor(){}static assertion(uu){return EZ._fromCredential(uu)}}jZ.FACTOR_ID="phone";class sZ{static assertionForEnrollment(uu,Eu){return UZ._fromSecret(uu,Eu)}static assertionForSignIn(uu,Eu){return UZ._fromEnrollmentId(uu,Eu)}static async generateSecret(uu){const Eu=uu;du("undefined"!==typeof Eu.auth,"internal-error");const ju=await(su=Eu.auth,Uu={idToken:Eu.credential,totpEnrollmentInfo:{}},Wu(su,"POST","/v2/accounts/mfaEnrollment:start",iu(su,Uu)));var su,Uu;return ZZ._fromStartTotpMfaEnrollmentResponse(ju,Eu.auth)}}sZ.FACTOR_ID="totp";class UZ extends uZ{constructor(uu,Eu,ju){super("totp"),this.otp=uu,this.enrollmentId=Eu,this.secret=ju}static _fromSecret(uu,Eu){return new UZ(Eu,void 0,uu)}static _fromEnrollmentId(uu,Eu){return new UZ(Eu,uu)}async _finalizeEnroll(uu,Eu,ju){return du("undefined"!==typeof this.secret,uu,"argument-error"),function(uu,Eu){return Wu(uu,"POST","/v2/accounts/mfaEnrollment:finalize",iu(uu,Eu))}(uu,{idToken:Eu,displayName:ju,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(uu,Eu){du(void 0!==this.enrollmentId&&void 0!==this.otp,uu,"argument-error");const ju={verificationCode:this.otp};return function(uu,Eu){return Wu(uu,"POST","/v2/accounts/mfaSignIn:finalize",iu(uu,Eu))}(uu,{mfaPendingCredential:Eu,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:ju})}}class ZZ{constructor(uu,Eu,ju,su,Uu,Zu,Xu){this.sessionInfo=Zu,this.auth=Xu,this.secretKey=uu,this.hashingAlgorithm=Eu,this.codeLength=ju,this.codeIntervalSeconds=su,this.enrollmentCompletionDeadline=Uu}static _fromStartTotpMfaEnrollmentResponse(uu,Eu){return new ZZ(uu.totpSessionInfo.sharedSecretKey,uu.totpSessionInfo.hashingAlgorithm,uu.totpSessionInfo.verificationCodeLength,uu.totpSessionInfo.periodSec,new Date(uu.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),uu.totpSessionInfo.sessionInfo,Eu)}_makeTotpVerificationInfo(uu){return{sessionInfo:this.sessionInfo,verificationCode:uu}}generateQrCodeUrl(uu,Eu){var ju;let su=!1;return(XZ(uu)||XZ(Eu))&&(su=!0),su&&(XZ(uu)&&(uu=(null===(ju=this.auth.currentUser)||void 0===ju?void 0:ju.email)||"unknownuser"),XZ(Eu)&&(Eu=this.auth.name)),`otpauth://totp/${Eu}:${uu}?secret=${this.secretKey}&issuer=${Eu}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function XZ(uu){return"undefined"===typeof uu||0===(null===uu||void 0===uu?void 0:uu.length)}var lZ="@firebase/auth",qZ="0.23.2";class fZ{constructor(uu){this.auth=uu,this.internalListeners=new Map}getUid(){var uu;return this.assertAuthConfigured(),(null===(uu=this.auth.currentUser)||void 0===uu?void 0:uu.uid)||null}async getToken(uu){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(uu)}}addAuthTokenListener(uu){if(this.assertAuthConfigured(),this.internalListeners.has(uu))return;const Eu=this.auth.onIdTokenChanged((Eu=>{uu((null===Eu||void 0===Eu?void 0:Eu.stsTokenManager.accessToken)||null)}));this.internalListeners.set(uu,Eu),this.updateProactiveRefresh()}removeAuthTokenListener(uu){this.assertAuthConfigured();const Eu=this.internalListeners.get(uu);Eu&&(this.internalListeners.delete(uu),Eu(),this.updateProactiveRefresh())}assertAuthConfigured(){du(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const CZ=(0,su.P)("authIdTokenMaxAge")||300;let bZ=null;const cZ=uu=>async Eu=>{const ju=Eu&&await Eu.getIdTokenResult(),su=ju&&((new Date).getTime()-Date.parse(ju.issuedAtTime))/1e3;if(su&&su>CZ)return;const Uu=null===ju||void 0===ju?void 0:ju.token;bZ!==Uu&&(bZ=Uu,await fetch(uu,{method:Uu?"POST":"DELETE",headers:Uu?{Authorization:`Bearer ${Uu}`}:{}}))};function NZ(){let uu=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Uu.J)();const Eu=(0,Uu.w)(uu,"auth");if(Eu.isInitialized())return Eu.getImmediate();const ju=VE(uu,{popupRedirectResolver:RU,persistence:[Ss,es,ps]}),Zu=(0,su.P)("authTokenSyncURL");if(Zu){const uu=cZ(Zu);Zs(ju,uu,(()=>uu(ju.currentUser))),Us(ju,(Eu=>uu(Eu)))}const Xu=(0,su.L)("auth");return Xu&&rE(ju,`http://${Xu}`),ju}var OZ;OZ="Browser",(0,Uu.x)(new lu.d("auth",((uu,Eu)=>{let{options:ju}=Eu;const su=uu.getProvider("app").getImmediate(),Uu=uu.getProvider("heartbeat"),Zu=uu.getProvider("app-check-internal"),{apiKey:Xu,authDomain:lu}=su.options;du(Xu&&!Xu.includes(":"),"invalid-api-key",{appName:su.name});const qu={apiKey:Xu,authDomain:lu,clientPlatform:OZ,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eE(OZ)},fu=new mE(su,Uu,Zu,qu);return function(uu,Eu){const ju=(null===Eu||void 0===Eu?void 0:Eu.persistence)||[],su=(Array.isArray(ju)?ju:[ju]).map(ZE);(null===Eu||void 0===Eu?void 0:Eu.errorMap)&&uu._updateErrorMap(Eu.errorMap),uu._initializeWithPersistence(su,null===Eu||void 0===Eu?void 0:Eu.popupRedirectResolver)}(fu,ju),fu}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((uu,Eu,ju)=>{uu.getProvider("auth-internal").initialize()}))),(0,Uu.x)(new lu.d("auth-internal",(uu=>(uu=>new fZ(uu))(vE(uu.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Uu.T)(lZ,qZ,function(uu){switch(uu){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(OZ)),(0,Uu.T)(lZ,qZ,"esm2017")}};Object.freeze(modules);for(const uu in modules)Object.freeze(modules[uu]);