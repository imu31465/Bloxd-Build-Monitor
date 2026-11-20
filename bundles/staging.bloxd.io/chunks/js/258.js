/*! For license information please see q3ynmh.258.24f26bd1.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
    40111: (uu, Ru, yu) => {
        yu.r(Ru), yu.d(Ru, {
          ActionCodeOperation: () => Bu,
          ActionCodeURL: () => vR,
          AuthCredential: () => LR,
          AuthErrorCodes: () => Wu,
          EmailAuthCredential: () => iR,
          EmailAuthProvider: () => fR,
          FacebookAuthProvider: () => Ey,
          FactorId: () => Nu,
          GithubAuthProvider: () => Qy,
          GoogleAuthProvider: () => Ky,
          OAuthCredential: () => oR,
          OAuthProvider: () => yy,
          OperationType: () => ru,
          PhoneAuthCredential: () => OR,
          PhoneAuthProvider: () => RK,
          PhoneMultiFactorGenerator: () => uQ,
          ProviderId: () => Xu,
          RecaptchaVerifier: () => oE,
          SAMLAuthProvider: () => Jy,
          SignInMethod: () => Vu,
          TotpMultiFactorGenerator: () => RQ,
          TotpSecret: () => EQ,
          TwitterAuthProvider: () => Ny,
          applyActionCode: () => ny,
          beforeAuthStateChanged: () => KE,
          browserLocalPersistence: () => HE,
          browserPopupRedirectResolver: () => vK,
          browserSessionPersistence: () => bE,
          checkActionCode: () => sy,
          confirmPasswordReset: () => Uy,
          connectAuthEmulator: () => lR,
          createUserWithEmailAndPassword: () => ly,
          debugErrorMap: () => Su,
          deleteUser: () => XE,
          fetchSignInMethodsForEmail: () => Fy,
          getAdditionalUserInfo: () => uE,
          getAuth: () => rQ,
          getIdToken: () => iu,
          getIdTokenResult: () => Yu,
          getMultiFactorResolver: () => BE,
          getRedirectResult: () => kK,
          inMemoryPersistence: () => JR,
          indexedDBLocalPersistence: () => cE,
          initializeAuth: () => tR,
          initializeRecaptchaConfig: () => yE,
          isSignInWithEmailLink: () => Ly,
          linkWithCredential: () => Cy,
          linkWithPhoneNumber: () => vE,
          linkWithPopup: () => rK,
          linkWithRedirect: () => CK,
          multiFactor: () => pE,
          onAuthStateChanged: () => QE,
          onIdTokenChanged: () => EE,
          parseActionCodeURL: () => aR,
          prodErrorMap: () => pu,
          reauthenticateWithCredential: () => ky,
          reauthenticateWithPhoneNumber: () => aE,
          reauthenticateWithPopup: () => VK,
          reauthenticateWithRedirect: () => bK,
          reload: () => uR,
          sendEmailVerification: () => wy,
          sendPasswordResetEmail: () => Gy,
          sendSignInLinkToEmail: () => cy,
          setPersistence: () => RE,
          signInAnonymously: () => By,
          signInWithCredential: () => by,
          signInWithCustomToken: () => ey,
          signInWithEmailAndPassword: () => gy,
          signInWithEmailLink: () => zy,
          signInWithPhoneNumber: () => OE,
          signInWithPopup: () => XK,
          signInWithRedirect: () => dK,
          signOut: () => NE,
          unlink: () => Ty,
          updateCurrentUser: () => JE,
          updateEmail: () => Py,
          updatePassword: () => iy,
          updatePhoneNumber: () => uK,
          updateProfile: () => hy,
          useDeviceLanguage: () => mE,
          verifyBeforeUpdateEmail: () => Zy,
          verifyPasswordResetCode: () => ty
        });
        var Eu = yu(40094),
          Ku = yu(40083);

        function Qu(uu, Ru) {
          var yu = {};
          for (var Eu in uu) Object.prototype.hasOwnProperty.call(uu, Eu) && Ru.indexOf(Eu) < 0 && (yu[Eu] = uu[Eu]);
          if (null != uu && "function" === typeof Object.getOwnPropertySymbols) {
            var Ku = 0;
            for (Eu = Object.getOwnPropertySymbols(uu); Ku < Eu.length; Ku++) Ru.indexOf(Eu[Ku]) < 0 && Object.prototype.propertyIsEnumerable.call(uu, Eu[Ku]) && (yu[Eu[Ku]] = uu[Eu[Ku]])
          }
          return yu
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var mu = yu(40099),
          Ju = yu(40085);
        const Nu = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Xu = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Vu = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          ru = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Bu = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function xu() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Su = function() {
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
          pu = xu,
          Tu = new Eu.d("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Wu = {
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
          ju = new mu.h("@firebase/auth");

        function Hu(uu) {
          if (ju.logLevel <= mu.e.ERROR) {
            for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
            ju.error(`Auth (${Ku.g}): ${uu}`, ...yu)
          }
        }

        function du(uu) {
          for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
          throw eu(uu, ...yu)
        }

        function bu(uu) {
          for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
          return eu(uu, ...yu)
        }

        function Cu(uu, Ru, yu) {
          const Ku = Object.assign(Object.assign({}, pu()), {
            [Ru]: yu
          });
          return new Eu.d("auth", "Firebase", Ku).create(Ru, {
            appName: uu.name
          })
        }

        function ku(uu, Ru, yu) {
          if (!(Ru instanceof yu)) throw yu.name !== Ru.constructor.name && du(uu, "argument-error"), Cu(uu, "argument-error", `Type of ${Ru.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function eu(uu) {
          for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
          if ("string" !== typeof uu) {
            const Ru = yu[0],
              Eu = [...yu.slice(1)];
            return Eu[0] && (Eu[0].appName = uu.name), uu._errorFactory.create(Ru, ...Eu)
          }
          return Tu.create(uu, ...yu)
        }

        function Au(uu, Ru) {
          if (!uu) {
            for (var yu = arguments.length, Eu = new Array(yu > 2 ? yu - 2 : 0), Ku = 2; Ku < yu; Ku++) Eu[Ku - 2] = arguments[Ku];
            throw eu(Ru, ...Eu)
          }
        }

        function Du(uu) {
          const Ru = "INTERNAL ASSERTION FAILED: " + uu;
          throw Hu(Ru), new Error(Ru)
        }

        function Mu(uu, Ru) {
          uu || Du(Ru)
        }

        function Iu() {
          var uu;
          return "undefined" !== typeof self && (null === (uu = self.location) || void 0 === uu ? void 0 : uu.href) || ""
        }

        function Gu() {
          return "http:" === Uu() || "https:" === Uu()
        }

        function Uu() {
          var uu;
          return "undefined" !== typeof self && (null === (uu = self.location) || void 0 === uu ? void 0 : uu.protocol) || null
        }
        class nu {
          constructor(uu, Ru) {
            this.shortDelay = uu, this.longDelay = Ru, Mu(Ru > uu, "Short delay should be less than long delay!"), this.isMobile = (0, Eu.V)() || (0, Eu.Z)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Gu() || (0, Eu.J)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function su(uu, Ru) {
          Mu(uu.emulator, "Emulator should always be set here");
          const {
            url: yu
          } = uu.emulator;
          return Ru ? `${yu}${Ru.startsWith("/")?Ru.slice(1):Ru}` : yu
        }
        class tu {
          static initialize(uu, Ru, yu) {
            this.fetchImpl = uu, Ru && (this.headersImpl = Ru), yu && (this.responseImpl = yu)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Du("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Du("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Du("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const lu = {
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
          gu = new nu(3e4, 6e4);

        function cu(uu, Ru) {
          return uu.tenantId && !Ru.tenantId ? Object.assign(Object.assign({}, Ru), {
            tenantId: uu.tenantId
          }) : Ru
        }
        async function Lu(uu, Ru, yu, Ku) {
          return zu(uu, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Qu = {},
              mu = {};
            Ku && ("GET" === Ru ? mu = Ku : Qu = {
              body: JSON.stringify(Ku)
            });
            const Ju = (0, Eu.$)(Object.assign({
                key: uu.config.apiKey
              }, mu)).slice(1),
              Nu = await uu._getAdditionalHeaders();
            return Nu["Content-Type"] = "application/json", uu.languageCode && (Nu["X-Firebase-Locale"] = uu.languageCode), tu.fetch()(wu(uu, uu.config.apiHost, yu, Ju), Object.assign({
              method: Ru,
              headers: Nu,
              referrerPolicy: "no-referrer"
            }, Qu))
          }))
        }
        async function zu(uu, Ru, yu) {
          uu._canInitEmulator = !1;
          const Ku = Object.assign(Object.assign({}, lu), Ru);
          try {
            const Ru = new Zu(uu),
              Eu = await Promise.race([yu(), Ru.promise]);
            Ru.clearNetworkTimeout();
            const Qu = await Eu.json();
            if ("needConfirmation" in Qu) throw hu(uu, "account-exists-with-different-credential", Qu);
            if (Eu.ok && !("errorMessage" in Qu)) return Qu;
            {
              const Ru = Eu.ok ? Qu.errorMessage : Qu.error.message,
                [yu, mu] = Ru.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === yu) throw hu(uu, "credential-already-in-use", Qu);
              if ("EMAIL_EXISTS" === yu) throw hu(uu, "email-already-in-use", Qu);
              if ("USER_DISABLED" === yu) throw hu(uu, "user-disabled", Qu);
              const Ju = Ku[yu] || yu.toLowerCase().replace(/[_\s]+/g, "-");
              if (mu) throw Cu(uu, Ju, mu);
              du(uu, Ju)
            }
          } catch (Qu) {
            if (Qu instanceof Eu.e) throw Qu;
            du(uu, "network-request-failed", {
              message: String(Qu)
            })
          }
        }
        async function Fu(uu, Ru, yu, Eu) {
          let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Qu = await Lu(uu, Ru, yu, Eu, Ku);
          return "mfaPendingCredential" in Qu && du(uu, "multi-factor-auth-required", {
            _serverResponse: Qu
          }), Qu
        }

        function wu(uu, Ru, yu, Eu) {
          const Ku = `${Ru}${yu}?${Eu}`;
          return uu.config.emulator ? su(uu.config, Ku) : `${uu.config.apiScheme}://${Ku}`
        }
        class Zu {
          constructor(uu) {
            this.auth = uu, this.timer = null, this.promise = new Promise(((uu, Ru) => {
              this.timer = setTimeout((() => Ru(bu(this.auth, "network-request-failed"))), gu.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function hu(uu, Ru, yu) {
          const Eu = {
            appName: uu.name
          };
          yu.email && (Eu.email = yu.email), yu.phoneNumber && (Eu.phoneNumber = yu.phoneNumber);
          const Ku = bu(uu, Ru, Eu);
          return Ku.customData._tokenResponse = yu, Ku
        }

        function Pu(uu) {
          if (uu) try {
            const Ru = new Date(Number(uu));
            if (!isNaN(Ru.getTime())) return Ru.toUTCString()
          } catch (Ru) {}
        }

        function iu(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Eu.D)(uu).getIdToken(Ru)
        }
        async function Yu(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const yu = (0, Eu.D)(uu),
            Ku = await yu.getIdToken(Ru),
            Qu = qu(Ku);
          Au(Qu && Qu.exp && Qu.auth_time && Qu.iat, yu.auth, "internal-error");
          const mu = "object" === typeof Qu.firebase ? Qu.firebase : void 0,
            Ju = null === mu || void 0 === mu ? void 0 : mu.sign_in_provider;
          return {
            claims: Qu,
            token: Ku,
            authTime: Pu(ou(Qu.auth_time)),
            issuedAtTime: Pu(ou(Qu.iat)),
            expirationTime: Pu(ou(Qu.exp)),
            signInProvider: Ju || null,
            signInSecondFactor: (null === mu || void 0 === mu ? void 0 : mu.sign_in_second_factor) || null
          }
        }

        function ou(uu) {
          return 1e3 * Number(uu)
        }

        function qu(uu) {
          const [Ru, yu, Ku] = uu.split(".");
          if (void 0 === Ru || void 0 === yu || void 0 === Ku) return Hu("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const uu = (0, Eu.j)(yu);
            return uu ? JSON.parse(uu) : (Hu("Failed to decode base64 JWT payload"), null)
          } catch (Qu) {
            return Hu("Caught error parsing JWT payload as JSON", null === Qu || void 0 === Qu ? void 0 : Qu.toString()), null
          }
        }
        async function Ou(uu, Ru) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Ru;
          try {
            return await Ru
          } catch (yu) {
            throw yu instanceof Eu.e && function(uu) {
              let {
                code: Ru
              } = uu;
              return "auth/user-disabled" === Ru || "auth/user-token-expired" === Ru
            }(yu) && uu.auth.currentUser === uu && await uu.auth.signOut(), yu
          }
        }
        class vu {
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
            var Ru;
            if (uu) {
              const uu = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), uu
            } {
              this.errorBackoff = 3e4;
              const uu = (null !== (Ru = this.user.stsTokenManager.expirationTime) && void 0 !== Ru ? Ru : 0) - Date.now() - 3e5;
              return Math.max(0, uu)
            }
          }
          schedule() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Ru = this.getInterval(uu);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Ru)
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
        class au {
          constructor(uu, Ru) {
            this.createdAt = uu, this.lastLoginAt = Ru, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Pu(this.lastLoginAt), this.creationTime = Pu(this.createdAt)
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
        async function fu(uu) {
          var Ru;
          const yu = uu.auth,
            Eu = await uu.getIdToken(),
            Ku = await Ou(uu, async function(uu, Ru) {
              return Lu(uu, "POST", "/v1/accounts:lookup", Ru)
            }(yu, {
              idToken: Eu
            }));
          Au(null === Ku || void 0 === Ku ? void 0 : Ku.users.length, yu, "internal-error");
          const mu = Ku.users[0];
          uu._notifyReloadListener(mu);
          const Ju = (null === (Ru = mu.providerUserInfo) || void 0 === Ru ? void 0 : Ru.length) ? mu.providerUserInfo.map((uu => {
            var {
              providerId: Ru
            } = uu, yu = Qu(uu, ["providerId"]);
            return {
              providerId: Ru,
              uid: yu.rawId || "",
              displayName: yu.displayName || null,
              email: yu.email || null,
              phoneNumber: yu.phoneNumber || null,
              photoURL: yu.photoUrl || null
            }
          })) : [];
          const Nu = (Xu = uu.providerData, Vu = Ju, [...Xu.filter((uu => !Vu.some((Ru => Ru.providerId === uu.providerId)))), ...Vu]);
          var Xu, Vu;
          const ru = uu.isAnonymous,
            Bu = !(uu.email && mu.passwordHash) && !(null === Nu || void 0 === Nu ? void 0 : Nu.length),
            xu = !!ru && Bu,
            Su = {
              uid: mu.localId,
              displayName: mu.displayName || null,
              photoURL: mu.photoUrl || null,
              email: mu.email || null,
              emailVerified: mu.emailVerified || !1,
              phoneNumber: mu.phoneNumber || null,
              tenantId: mu.tenantId || null,
              providerData: Nu,
              metadata: new au(mu.createdAt, mu.lastLoginAt),
              isAnonymous: xu
            };
          Object.assign(uu, Su)
        }
        async function uR(uu) {
          const Ru = (0, Eu.D)(uu);
          await fu(Ru), await Ru.auth._persistUserIfCurrent(Ru), Ru.auth._notifyListenersIfCurrent(Ru)
        }
        class RR {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(uu) {
            Au(uu.idToken, "internal-error"), Au("undefined" !== typeof uu.idToken, "internal-error"), Au("undefined" !== typeof uu.refreshToken, "internal-error");
            const Ru = "expiresIn" in uu && "undefined" !== typeof uu.expiresIn ? Number(uu.expiresIn) : function(uu) {
              const Ru = qu(uu);
              return Au(Ru, "internal-error"), Au("undefined" !== typeof Ru.exp, "internal-error"), Au("undefined" !== typeof Ru.iat, "internal-error"), Number(Ru.exp) - Number(Ru.iat)
            }(uu.idToken);
            this.updateTokensAndExpiration(uu.idToken, uu.refreshToken, Ru)
          }
          async getToken(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Au(!this.accessToken || this.refreshToken, uu, "user-token-expired"), Ru || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(uu, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(uu, Ru) {
            const {
              accessToken: yu,
              refreshToken: Ku,
              expiresIn: Qu
            } = await async function(uu, Ru) {
              const yu = await zu(uu, {}, (async () => {
                const yu = (0, Eu.$)({
                    grant_type: "refresh_token",
                    refresh_token: Ru
                  }).slice(1),
                  {
                    tokenApiHost: Ku,
                    apiKey: Qu
                  } = uu.config,
                  mu = wu(uu, Ku, "/v1/token", `key=${Qu}`),
                  Ju = await uu._getAdditionalHeaders();
                return Ju["Content-Type"] = "application/x-www-form-urlencoded", tu.fetch()(mu, {
                  method: "POST",
                  headers: Ju,
                  body: yu
                })
              }));
              return {
                accessToken: yu.access_token,
                expiresIn: yu.expires_in,
                refreshToken: yu.refresh_token
              }
            }(uu, Ru);
            this.updateTokensAndExpiration(yu, Ku, Number(Qu))
          }
          updateTokensAndExpiration(uu, Ru, yu) {
            this.refreshToken = Ru || null, this.accessToken = uu || null, this.expirationTime = Date.now() + 1e3 * yu
          }
          static fromJSON(uu, Ru) {
            const {
              refreshToken: yu,
              accessToken: Eu,
              expirationTime: Ku
            } = Ru, Qu = new RR;
            return yu && (Au("string" === typeof yu, "internal-error", {
              appName: uu
            }), Qu.refreshToken = yu), Eu && (Au("string" === typeof Eu, "internal-error", {
              appName: uu
            }), Qu.accessToken = Eu), Ku && (Au("number" === typeof Ku, "internal-error", {
              appName: uu
            }), Qu.expirationTime = Ku), Qu
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
            return Object.assign(new RR, this.toJSON())
          }
          _performRefresh() {
            return Du("not implemented")
          }
        }

        function yR(uu, Ru) {
          Au("string" === typeof uu || "undefined" === typeof uu, "internal-error", {
            appName: Ru
          })
        }
        class ER {
          constructor(uu) {
            var {
              uid: Ru,
              auth: yu,
              stsTokenManager: Eu
            } = uu, Ku = Qu(uu, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new vu(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Ru, this.auth = yu, this.stsTokenManager = Eu, this.accessToken = Eu.accessToken, this.displayName = Ku.displayName || null, this.email = Ku.email || null, this.emailVerified = Ku.emailVerified || !1, this.phoneNumber = Ku.phoneNumber || null, this.photoURL = Ku.photoURL || null, this.isAnonymous = Ku.isAnonymous || !1, this.tenantId = Ku.tenantId || null, this.providerData = Ku.providerData ? [...Ku.providerData] : [], this.metadata = new au(Ku.createdAt || void 0, Ku.lastLoginAt || void 0)
          }
          async getIdToken(uu) {
            const Ru = await Ou(this, this.stsTokenManager.getToken(this.auth, uu));
            return Au(Ru, this.auth, "internal-error"), this.accessToken !== Ru && (this.accessToken = Ru, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Ru
          }
          getIdTokenResult(uu) {
            return Yu(this, uu)
          }
          reload() {
            return uR(this)
          }
          _assign(uu) {
            this !== uu && (Au(this.uid === uu.uid, this.auth, "internal-error"), this.displayName = uu.displayName, this.photoURL = uu.photoURL, this.email = uu.email, this.emailVerified = uu.emailVerified, this.phoneNumber = uu.phoneNumber, this.isAnonymous = uu.isAnonymous, this.tenantId = uu.tenantId, this.providerData = uu.providerData.map((uu => Object.assign({}, uu))), this.metadata._copy(uu.metadata), this.stsTokenManager._assign(uu.stsTokenManager))
          }
          _clone(uu) {
            const Ru = new ER(Object.assign(Object.assign({}, this), {
              auth: uu,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Ru.metadata._copy(this.metadata), Ru
          }
          _onReload(uu) {
            Au(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = uu, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              yu = !1;
            uu.idToken && uu.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(uu), yu = !0), Ru && await fu(this), await this.auth._persistUserIfCurrent(this), yu && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const uu = await this.getIdToken();
            return await Ou(this, async function(uu, Ru) {
              return Lu(uu, "POST", "/v1/accounts:delete", Ru)
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
          static _fromJSON(uu, Ru) {
            var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu;
            const Vu = null !== (yu = Ru.displayName) && void 0 !== yu ? yu : void 0,
              ru = null !== (Eu = Ru.email) && void 0 !== Eu ? Eu : void 0,
              Bu = null !== (Ku = Ru.phoneNumber) && void 0 !== Ku ? Ku : void 0,
              xu = null !== (Qu = Ru.photoURL) && void 0 !== Qu ? Qu : void 0,
              Su = null !== (mu = Ru.tenantId) && void 0 !== mu ? mu : void 0,
              pu = null !== (Ju = Ru._redirectEventId) && void 0 !== Ju ? Ju : void 0,
              Tu = null !== (Nu = Ru.createdAt) && void 0 !== Nu ? Nu : void 0,
              Wu = null !== (Xu = Ru.lastLoginAt) && void 0 !== Xu ? Xu : void 0,
              {
                uid: ju,
                emailVerified: Hu,
                isAnonymous: du,
                providerData: bu,
                stsTokenManager: Cu
              } = Ru;
            Au(ju && Cu, uu, "internal-error");
            const ku = RR.fromJSON(this.name, Cu);
            Au("string" === typeof ju, uu, "internal-error"), yR(Vu, uu.name), yR(ru, uu.name), Au("boolean" === typeof Hu, uu, "internal-error"), Au("boolean" === typeof du, uu, "internal-error"), yR(Bu, uu.name), yR(xu, uu.name), yR(Su, uu.name), yR(pu, uu.name), yR(Tu, uu.name), yR(Wu, uu.name);
            const eu = new ER({
              uid: ju,
              auth: uu,
              email: ru,
              emailVerified: Hu,
              displayName: Vu,
              isAnonymous: du,
              photoURL: xu,
              phoneNumber: Bu,
              tenantId: Su,
              stsTokenManager: ku,
              createdAt: Tu,
              lastLoginAt: Wu
            });
            return bu && Array.isArray(bu) && (eu.providerData = bu.map((uu => Object.assign({}, uu)))), pu && (eu._redirectEventId = pu), eu
          }
          static async _fromIdTokenResponse(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Eu = new RR;
            Eu.updateFromServerResponse(Ru);
            const Ku = new ER({
              uid: Ru.localId,
              auth: uu,
              stsTokenManager: Eu,
              isAnonymous: yu
            });
            return await fu(Ku), Ku
          }
        }
        const KR = new Map;

        function QR(uu) {
          Mu(uu instanceof Function, "Expected a class definition");
          let Ru = KR.get(uu);
          return Ru ? (Mu(Ru instanceof uu, "Instance stored in cache mismatched with class"), Ru) : (Ru = new uu, KR.set(uu, Ru), Ru)
        }
        class mR {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(uu, Ru) {
            this.storage[uu] = Ru
          }
          async _get(uu) {
            const Ru = this.storage[uu];
            return void 0 === Ru ? null : Ru
          }
          async _remove(uu) {
            delete this.storage[uu]
          }
          _addListener(uu, Ru) {}
          _removeListener(uu, Ru) {}
        }
        mR.type = "NONE";
        const JR = mR;

        function NR(uu, Ru, yu) {
          return `firebase:${uu}:${Ru}:${yu}`
        }
        class XR {
          constructor(uu, Ru, yu) {
            this.persistence = uu, this.auth = Ru, this.userKey = yu;
            const {
              config: Eu,
              name: Ku
            } = this.auth;
            this.fullUserKey = NR(this.userKey, Eu.apiKey, Ku), this.fullPersistenceKey = NR("persistence", Eu.apiKey, Ku), this.boundEventHandler = Ru._onStorageEvent.bind(Ru), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(uu) {
            return this.persistence._set(this.fullUserKey, uu.toJSON())
          }
          async getCurrentUser() {
            const uu = await this.persistence._get(this.fullUserKey);
            return uu ? ER._fromJSON(this.auth, uu) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(uu) {
            if (this.persistence === uu) return;
            const Ru = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = uu, Ru ? this.setCurrentUser(Ru) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Ru.length) return new XR(QR(JR), uu, yu);
            const Eu = (await Promise.all(Ru.map((async uu => {
              if (await uu._isAvailable()) return uu
            })))).filter((uu => uu));
            let Ku = Eu[0] || QR(JR);
            const Qu = NR(yu, uu.config.apiKey, uu.name);
            let mu = null;
            for (const Xu of Ru) try {
              const Ru = await Xu._get(Qu);
              if (Ru) {
                const yu = ER._fromJSON(uu, Ru);
                Xu !== Ku && (mu = yu), Ku = Xu;
                break
              }
            } catch (Nu) {}
            const Ju = Eu.filter((uu => uu._shouldAllowMigration));
            return Ku._shouldAllowMigration && Ju.length ? (Ku = Ju[0], mu && await Ku._set(Qu, mu.toJSON()), await Promise.all(Ru.map((async uu => {
              if (uu !== Ku) try {
                await uu._remove(Qu)
              } catch (Nu) {}
            }))), new XR(Ku, uu, yu)) : new XR(Ku, uu, yu)
          }
        }

        function VR(uu) {
          const Ru = uu.toLowerCase();
          if (Ru.includes("opera/") || Ru.includes("opr/") || Ru.includes("opios/")) return "Opera";
          if (SR(Ru)) return "IEMobile";
          if (Ru.includes("msie") || Ru.includes("trident/")) return "IE";
          if (Ru.includes("edge/")) return "Edge";
          if (rR(Ru)) return "Firefox";
          if (Ru.includes("silk/")) return "Silk";
          if (TR(Ru)) return "Blackberry";
          if (WR(Ru)) return "Webos";
          if (BR(Ru)) return "Safari";
          if ((Ru.includes("chrome/") || xR(Ru)) && !Ru.includes("edge/")) return "Chrome";
          if (pR(Ru)) return "Android";
          {
            const Ru = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              yu = uu.match(Ru);
            if (2 === (null === yu || void 0 === yu ? void 0 : yu.length)) return yu[1]
          }
          return "Other"
        }

        function rR() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)();
          return /firefox\//i.test(uu)
        }

        function BR() {
          const uu = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)()).toLowerCase();
          return uu.includes("safari/") && !uu.includes("chrome/") && !uu.includes("crios/") && !uu.includes("android")
        }

        function xR() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)();
          return /crios\//i.test(uu)
        }

        function SR() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)();
          return /iemobile/i.test(uu)
        }

        function pR() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)();
          return /android/i.test(uu)
        }

        function TR() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)();
          return /blackberry/i.test(uu)
        }

        function WR() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)();
          return /webos/i.test(uu)
        }

        function jR() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)();
          return /iphone|ipad|ipod/i.test(uu) || /macintosh/i.test(uu) && /mobile/i.test(uu)
        }

        function HR() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)();
          return jR(uu) || pR(uu) || WR(uu) || TR(uu) || /windows phone/i.test(uu) || SR(uu)
        }

        function dR(uu) {
          let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (uu) {
            case "Browser":
              Ru = VR((0, Eu.F)());
              break;
            case "Worker":
              Ru = `${VR((0,Eu.F)())}-${uu}`;
              break;
            default:
              Ru = uu
          }
          const Qu = yu.length ? yu.join(",") : "FirebaseCore-web";
          return `${Ru}/JsCore/${Ku.g}/${Qu}`
        }
        async function bR(uu, Ru) {
          return Lu(uu, "GET", "/v2/recaptchaConfig", cu(uu, Ru))
        }

        function CR(uu) {
          return void 0 !== uu && void 0 !== uu.getResponse
        }

        function kR(uu) {
          return void 0 !== uu && void 0 !== uu.enterprise
        }
        class eR {
          constructor(uu) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === uu.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = uu.recaptchaKey.split("/")[3], this.emailPasswordEnabled = uu.recaptchaEnforcementState.some((uu => "EMAIL_PASSWORD_PROVIDER" === uu.provider && "OFF" !== uu.enforcementState))
          }
        }

        function AR(uu) {
          return new Promise(((Ru, yu) => {
            const Eu = document.createElement("script");
            Eu.setAttribute("src", uu), Eu.onload = Ru, Eu.onerror = uu => {
                const Ru = bu("internal-error");
                Ru.customData = uu, yu(Ru)
              }, Eu.type = "text/javascript", Eu.charset = "UTF-8",
              function() {
                var uu, Ru;
                return null !== (Ru = null === (uu = document.getElementsByTagName("head")) || void 0 === uu ? void 0 : uu[0]) && void 0 !== Ru ? Ru : document
              }().appendChild(Eu)
          }))
        }

        function DR(uu) {
          return `__${uu}${Math.floor(1e6*Math.random())}`
        }
        class MR {
          constructor(uu) {
            this.type = "recaptcha-enterprise", this.auth = nR(uu)
          }
          async verify() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function yu(Ru, yu, Eu) {
              const Ku = window.grecaptcha;
              kR(Ku) ? Ku.enterprise.ready((() => {
                Ku.enterprise.execute(Ru, {
                  action: uu
                }).then((uu => {
                  yu(uu)
                })).catch((() => {
                  yu("NO_RECAPTCHA")
                }))
              })) : Eu(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((uu, Eu) => {
              (async function(uu) {
                if (!Ru) {
                  if (null == uu.tenantId && null != uu._agentRecaptchaConfig) return uu._agentRecaptchaConfig.siteKey;
                  if (null != uu.tenantId && void 0 !== uu._tenantRecaptchaConfigs[uu.tenantId]) return uu._tenantRecaptchaConfigs[uu.tenantId].siteKey
                }
                return new Promise((async (Ru, yu) => {
                  bR(uu, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Eu => {
                    if (void 0 !== Eu.recaptchaKey) {
                      const yu = new eR(Eu);
                      return null == uu.tenantId ? uu._agentRecaptchaConfig = yu : uu._tenantRecaptchaConfigs[uu.tenantId] = yu, Ru(yu.siteKey)
                    }
                    yu(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((uu => {
                    yu(uu)
                  }))
                }))
              })(this.auth).then((Ku => {
                if (!Ru && kR(window.grecaptcha)) yu(Ku, uu, Eu);
                else {
                  if ("undefined" === typeof window) return void Eu(new Error("RecaptchaVerifier is only supported in browser"));
                  AR("https://www.google.com/recaptcha/enterprise.js?render=" + Ku).then((() => {
                    yu(Ku, uu, Eu)
                  })).catch((uu => {
                    Eu(uu)
                  }))
                }
              })).catch((uu => {
                Eu(uu)
              }))
            }))
          }
        }
        async function IR(uu, Ru, yu) {
          let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Ku = new MR(uu);
          let Qu;
          try {
            Qu = await Ku.verify(yu)
          } catch (Ju) {
            Qu = await Ku.verify(yu, !0)
          }
          const mu = Object.assign({}, Ru);
          return Eu ? Object.assign(mu, {
            captchaResp: Qu
          }) : Object.assign(mu, {
            captchaResponse: Qu
          }), Object.assign(mu, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(mu, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), mu
        }
        class GR {
          constructor(uu) {
            this.auth = uu, this.queue = []
          }
          pushCallback(uu, Ru) {
            const yu = Ru => new Promise(((yu, Eu) => {
              try {
                yu(uu(Ru))
              } catch (Ku) {
                Eu(Ku)
              }
            }));
            yu.onAbort = Ru, this.queue.push(yu);
            const Eu = this.queue.length - 1;
            return () => {
              this.queue[Eu] = () => Promise.resolve()
            }
          }
          async runMiddleware(uu) {
            if (this.auth.currentUser === uu) return;
            const Ru = [];
            try {
              for (const yu of this.queue) await yu(uu), yu.onAbort && Ru.push(yu.onAbort)
            } catch (yu) {
              Ru.reverse();
              for (const uu of Ru) try {
                uu()
              } catch (Eu) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === yu || void 0 === yu ? void 0 : yu.message
              })
            }
          }
        }
        class UR {
          constructor(uu, Ru, yu, Eu) {
            this.app = uu, this.heartbeatServiceProvider = Ru, this.appCheckServiceProvider = yu, this.config = Eu, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new sR(this), this.idTokenSubscription = new sR(this), this.beforeStateQueue = new GR(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Tu, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = uu.name, this.clientVersion = Eu.sdkClientVersion
          }
          _initializeWithPersistence(uu, Ru) {
            return Ru && (this._popupRedirectResolver = QR(Ru)), this._initializationPromise = this.queue((async () => {
              var yu, Eu;
              if (!this._deleted && (this.persistenceManager = await XR.create(this, uu), !this._deleted)) {
                if (null === (yu = this._popupRedirectResolver) || void 0 === yu ? void 0 : yu._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Ku) {}
                await this.initializeCurrentUser(Ru), this.lastNotifiedUid = (null === (Eu = this.currentUser) || void 0 === Eu ? void 0 : Eu.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const uu = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || uu ? this.currentUser && uu && this.currentUser.uid === uu.uid ? (this._currentUser._assign(uu), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(uu, !0) : void 0
          }
          async initializeCurrentUser(uu) {
            var Ru;
            const yu = await this.assertedPersistence.getCurrentUser();
            let Eu = yu,
              Ku = !1;
            if (uu && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const yu = null === (Ru = this.redirectUser) || void 0 === Ru ? void 0 : Ru._redirectEventId,
                Qu = null === Eu || void 0 === Eu ? void 0 : Eu._redirectEventId,
                mu = await this.tryRedirectSignIn(uu);
              yu && yu !== Qu || !(null === mu || void 0 === mu ? void 0 : mu.user) || (Eu = mu.user, Ku = !0)
            }
            if (!Eu) return this.directlySetCurrentUser(null);
            if (!Eu._redirectEventId) {
              if (Ku) try {
                await this.beforeStateQueue.runMiddleware(Eu)
              } catch (Qu) {
                Eu = yu, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Qu)))
              }
              return Eu ? this.reloadAndSetCurrentUserOrClear(Eu) : this.directlySetCurrentUser(null)
            }
            return Au(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Eu._redirectEventId ? this.directlySetCurrentUser(Eu) : this.reloadAndSetCurrentUserOrClear(Eu)
          }
          async tryRedirectSignIn(uu) {
            let Ru = null;
            try {
              Ru = await this._popupRedirectResolver._completeRedirectFn(this, uu, !0)
            } catch (yu) {
              await this._setRedirectUser(null)
            }
            return Ru
          }
          async reloadAndSetCurrentUserOrClear(uu) {
            try {
              await fu(uu)
            } catch (Ru) {
              if ("auth/network-request-failed" !== (null === Ru || void 0 === Ru ? void 0 : Ru.code)) return this.directlySetCurrentUser(null)
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
            const Ru = uu ? (0, Eu.D)(uu) : null;
            return Ru && Au(Ru.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Ru && Ru._clone(this))
          }
          async _updateCurrentUser(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return uu && Au(this.tenantId === uu.tenantId, this, "tenant-id-mismatch"), Ru || await this.beforeStateQueue.runMiddleware(uu), this.queue((async () => {
              await this.directlySetCurrentUser(uu), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(uu) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(QR(uu))
            }))
          }
          async initializeRecaptchaConfig() {
            const uu = await bR(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Ru = new eR(uu);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Ru : this._tenantRecaptchaConfigs[this.tenantId] = Ru, Ru.emailPasswordEnabled) {
              new MR(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(uu) {
            this._errorFactory = new Eu.d("auth", "Firebase", uu())
          }
          onAuthStateChanged(uu, Ru, yu) {
            return this.registerStateListener(this.authStateSubscription, uu, Ru, yu)
          }
          beforeAuthStateChanged(uu, Ru) {
            return this.beforeStateQueue.pushCallback(uu, Ru)
          }
          onIdTokenChanged(uu, Ru, yu) {
            return this.registerStateListener(this.idTokenSubscription, uu, Ru, yu)
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
          async _setRedirectUser(uu, Ru) {
            const yu = await this.getOrInitRedirectPersistenceManager(Ru);
            return null === uu ? yu.removeCurrentUser() : yu.setCurrentUser(uu)
          }
          async getOrInitRedirectPersistenceManager(uu) {
            if (!this.redirectPersistenceManager) {
              const Ru = uu && QR(uu) || this._popupRedirectResolver;
              Au(Ru, this, "argument-error"), this.redirectPersistenceManager = await XR.create(this, [QR(Ru._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(uu) {
            var Ru, yu;
            return this._isInitialized && await this.queue((async () => {})), (null === (Ru = this._currentUser) || void 0 === Ru ? void 0 : Ru._redirectEventId) === uu ? this._currentUser : (null === (yu = this.redirectUser) || void 0 === yu ? void 0 : yu._redirectEventId) === uu ? this.redirectUser : null
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
            var uu, Ru;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const yu = null !== (Ru = null === (uu = this.currentUser) || void 0 === uu ? void 0 : uu.uid) && void 0 !== Ru ? Ru : null;
            this.lastNotifiedUid !== yu && (this.lastNotifiedUid = yu, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(uu, Ru, yu, Eu) {
            if (this._deleted) return () => {};
            const Ku = "function" === typeof Ru ? Ru : Ru.next.bind(Ru),
              Qu = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Au(Qu, this, "internal-error"), Qu.then((() => Ku(this.currentUser))), "function" === typeof Ru ? uu.addObserver(Ru, yu, Eu) : uu.addObserver(Ru)
          }
          async directlySetCurrentUser(uu) {
            this.currentUser && this.currentUser !== uu && this._currentUser._stopProactiveRefresh(), uu && this.isProactiveRefreshEnabled && uu._startProactiveRefresh(), this.currentUser = uu, uu ? await this.assertedPersistence.setCurrentUser(uu) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(uu) {
            return this.operations = this.operations.then(uu, uu), this.operations
          }
          get assertedPersistence() {
            return Au(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(uu) {
            uu && !this.frameworks.includes(uu) && (this.frameworks.push(uu), this.frameworks.sort(), this.clientVersion = dR(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var uu;
            const Ru = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Ru["X-Firebase-gmpid"] = this.app.options.appId);
            const yu = await (null === (uu = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === uu ? void 0 : uu.getHeartbeatsHeader());
            yu && (Ru["X-Firebase-Client"] = yu);
            const Eu = await this._getAppCheckToken();
            return Eu && (Ru["X-Firebase-AppCheck"] = Eu), Ru
          }
          async _getAppCheckToken() {
            var uu;
            const Ru = await (null === (uu = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === uu ? void 0 : uu.getToken());
            return (null === Ru || void 0 === Ru ? void 0 : Ru.error) && function(uu) {
              if (ju.logLevel <= mu.e.WARN) {
                for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
                ju.warn(`Auth (${Ku.g}): ${uu}`, ...yu)
              }
            }(`Error while retrieving App Check token: ${Ru.error}`), null === Ru || void 0 === Ru ? void 0 : Ru.token
          }
        }

        function nR(uu) {
          return (0, Eu.D)(uu)
        }
        class sR {
          constructor(uu) {
            this.auth = uu, this.observer = null, this.addObserver = (0, Eu.n)((uu => this.observer = uu))
          }
          get next() {
            return Au(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function tR(uu, Ru) {
          const yu = (0, Ku.z)(uu, "auth");
          if (yu.isInitialized()) {
            const uu = yu.getImmediate(),
              Ku = yu.getOptions();
            if ((0, Eu.r)(Ku, null !== Ru && void 0 !== Ru ? Ru : {})) return uu;
            du(uu, "already-initialized")
          }
          return yu.initialize({
            options: Ru
          })
        }

        function lR(uu, Ru, yu) {
          const Eu = nR(uu);
          Au(Eu._canInitEmulator, Eu, "emulator-config-failed"), Au(/^https?:\/\//.test(Ru), Eu, "invalid-emulator-scheme");
          const Ku = !!(null === yu || void 0 === yu ? void 0 : yu.disableWarnings),
            Qu = gR(Ru),
            {
              host: mu,
              port: Ju
            } = function(uu) {
              const Ru = gR(uu),
                yu = /(\/\/)?([^?#/]+)/.exec(uu.substr(Ru.length));
              if (!yu) return {
                host: "",
                port: null
              };
              const Eu = yu[2].split("@").pop() || "",
                Ku = /^(\[[^\]]+\])(:|$)/.exec(Eu);
              if (Ku) {
                const uu = Ku[1];
                return {
                  host: uu,
                  port: cR(Eu.substr(uu.length + 1))
                }
              } {
                const [uu, Ru] = Eu.split(":");
                return {
                  host: uu,
                  port: cR(Ru)
                }
              }
            }(Ru),
            Nu = null === Ju ? "" : `:${Ju}`;
          Eu.config.emulator = {
            url: `${Qu}//${mu}${Nu}/`
          }, Eu.settings.appVerificationDisabledForTesting = !0, Eu.emulatorConfig = Object.freeze({
            host: mu,
            port: Ju,
            protocol: Qu.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Ku
            })
          }), Ku || function() {
            function uu() {
              const uu = document.createElement("p"),
                Ru = uu.style;
              uu.innerText = "Running in emulator mode. Do not use with production credentials.", Ru.position = "fixed", Ru.width = "100%", Ru.backgroundColor = "#ffffff", Ru.border = ".1em solid #000000", Ru.color = "#b50000", Ru.bottom = "0px", Ru.left = "0px", Ru.margin = "0px", Ru.zIndex = "10000", Ru.textAlign = "center", uu.classList.add("firebase-emulator-warning"), document.body.appendChild(uu)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", uu) : uu())
          }()
        }

        function gR(uu) {
          const Ru = uu.indexOf(":");
          return Ru < 0 ? "" : uu.substr(0, Ru + 1)
        }

        function cR(uu) {
          if (!uu) return null;
          const Ru = Number(uu);
          return isNaN(Ru) ? null : Ru
        }
        class LR {
          constructor(uu, Ru) {
            this.providerId = uu, this.signInMethod = Ru
          }
          toJSON() {
            return Du("not implemented")
          }
          _getIdTokenResponse(uu) {
            return Du("not implemented")
          }
          _linkToIdToken(uu, Ru) {
            return Du("not implemented")
          }
          _getReauthenticationResolver(uu) {
            return Du("not implemented")
          }
        }
        async function zR(uu, Ru) {
          return Lu(uu, "POST", "/v1/accounts:resetPassword", cu(uu, Ru))
        }
        async function FR(uu, Ru) {
          return Lu(uu, "POST", "/v1/accounts:update", Ru)
        }
        async function wR(uu, Ru) {
          return Fu(uu, "POST", "/v1/accounts:signInWithPassword", cu(uu, Ru))
        }
        async function ZR(uu, Ru) {
          return Lu(uu, "POST", "/v1/accounts:sendOobCode", cu(uu, Ru))
        }
        async function hR(uu, Ru) {
          return ZR(uu, Ru)
        }
        async function PR(uu, Ru) {
          return ZR(uu, Ru)
        }
        class iR extends LR {
          constructor(uu, Ru, yu) {
            let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", yu), this._email = uu, this._password = Ru, this._tenantId = Eu
          }
          static _fromEmailAndPassword(uu, Ru) {
            return new iR(uu, Ru, "password")
          }
          static _fromEmailAndCode(uu, Ru) {
            return new iR(uu, Ru, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const Ru = "string" === typeof uu ? JSON.parse(uu) : uu;
            if ((null === Ru || void 0 === Ru ? void 0 : Ru.email) && (null === Ru || void 0 === Ru ? void 0 : Ru.password)) {
              if ("password" === Ru.signInMethod) return this._fromEmailAndPassword(Ru.email, Ru.password);
              if ("emailLink" === Ru.signInMethod) return this._fromEmailAndCode(Ru.email, Ru.password, Ru.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(uu) {
            var Ru;
            switch (this.signInMethod) {
              case "password":
                const yu = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Ru = uu._getRecaptchaConfig()) || void 0 === Ru ? void 0 : Ru.emailPasswordEnabled) {
                  const Ru = await IR(uu, yu, "signInWithPassword");
                  return wR(uu, Ru)
                }
                return wR(uu, yu).catch((async Ru => {
                  if ("auth/missing-recaptcha-token" === Ru.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Ru = await IR(uu, yu, "signInWithPassword");
                    return wR(uu, Ru)
                  }
                  return Promise.reject(Ru)
                }));
              case "emailLink":
                return async function(uu, Ru) {
                  return Fu(uu, "POST", "/v1/accounts:signInWithEmailLink", cu(uu, Ru))
                }(uu, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                du(uu, "internal-error")
            }
          }
          async _linkToIdToken(uu, Ru) {
            switch (this.signInMethod) {
              case "password":
                return FR(uu, {
                  idToken: Ru,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(uu, Ru) {
                  return Fu(uu, "POST", "/v1/accounts:signInWithEmailLink", cu(uu, Ru))
                }(uu, {
                  idToken: Ru,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                du(uu, "internal-error")
            }
          }
          _getReauthenticationResolver(uu) {
            return this._getIdTokenResponse(uu)
          }
        }
        async function YR(uu, Ru) {
          return Fu(uu, "POST", "/v1/accounts:signInWithIdp", cu(uu, Ru))
        }
        class oR extends LR {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(uu) {
            const Ru = new oR(uu.providerId, uu.signInMethod);
            return uu.idToken || uu.accessToken ? (uu.idToken && (Ru.idToken = uu.idToken), uu.accessToken && (Ru.accessToken = uu.accessToken), uu.nonce && !uu.pendingToken && (Ru.nonce = uu.nonce), uu.pendingToken && (Ru.pendingToken = uu.pendingToken)) : uu.oauthToken && uu.oauthTokenSecret ? (Ru.accessToken = uu.oauthToken, Ru.secret = uu.oauthTokenSecret) : du("argument-error"), Ru
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
            const Ru = "string" === typeof uu ? JSON.parse(uu) : uu,
              {
                providerId: yu,
                signInMethod: Eu
              } = Ru,
              Ku = Qu(Ru, ["providerId", "signInMethod"]);
            if (!yu || !Eu) return null;
            const mu = new oR(yu, Eu);
            return mu.idToken = Ku.idToken || void 0, mu.accessToken = Ku.accessToken || void 0, mu.secret = Ku.secret, mu.nonce = Ku.nonce, mu.pendingToken = Ku.pendingToken || null, mu
          }
          _getIdTokenResponse(uu) {
            return YR(uu, this.buildRequest())
          }
          _linkToIdToken(uu, Ru) {
            const yu = this.buildRequest();
            return yu.idToken = Ru, YR(uu, yu)
          }
          _getReauthenticationResolver(uu) {
            const Ru = this.buildRequest();
            return Ru.autoCreate = !1, YR(uu, Ru)
          }
          buildRequest() {
            const uu = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) uu.pendingToken = this.pendingToken;
            else {
              const Ru = {};
              this.idToken && (Ru.id_token = this.idToken), this.accessToken && (Ru.access_token = this.accessToken), this.secret && (Ru.oauth_token_secret = this.secret), Ru.providerId = this.providerId, this.nonce && !this.pendingToken && (Ru.nonce = this.nonce), uu.postBody = (0, Eu.$)(Ru)
            }
            return uu
          }
        }
        const qR = {
          USER_NOT_FOUND: "user-not-found"
        };
        class OR extends LR {
          constructor(uu) {
            super("phone", "phone"), this.params = uu
          }
          static _fromVerification(uu, Ru) {
            return new OR({
              verificationId: uu,
              verificationCode: Ru
            })
          }
          static _fromTokenResponse(uu, Ru) {
            return new OR({
              phoneNumber: uu,
              temporaryProof: Ru
            })
          }
          _getIdTokenResponse(uu) {
            return async function(uu, Ru) {
              return Fu(uu, "POST", "/v1/accounts:signInWithPhoneNumber", cu(uu, Ru))
            }(uu, this._makeVerificationRequest())
          }
          _linkToIdToken(uu, Ru) {
            return async function(uu, Ru) {
              const yu = await Fu(uu, "POST", "/v1/accounts:signInWithPhoneNumber", cu(uu, Ru));
              if (yu.temporaryProof) throw hu(uu, "account-exists-with-different-credential", yu);
              return yu
            }(uu, Object.assign({
              idToken: Ru
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(uu) {
            return async function(uu, Ru) {
              return Fu(uu, "POST", "/v1/accounts:signInWithPhoneNumber", cu(uu, Object.assign(Object.assign({}, Ru), {
                operation: "REAUTH"
              })), qR)
            }(uu, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: uu,
              phoneNumber: Ru,
              verificationId: yu,
              verificationCode: Eu
            } = this.params;
            return uu && Ru ? {
              temporaryProof: uu,
              phoneNumber: Ru
            } : {
              sessionInfo: yu,
              code: Eu
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
              verificationId: Ru,
              verificationCode: yu,
              phoneNumber: Eu,
              temporaryProof: Ku
            } = uu;
            return yu || Ru || Eu || Ku ? new OR({
              verificationId: Ru,
              verificationCode: yu,
              phoneNumber: Eu,
              temporaryProof: Ku
            }) : null
          }
        }
        class vR {
          constructor(uu) {
            var Ru, yu, Ku, Qu, mu, Ju;
            const Nu = (0, Eu._)((0, Eu.v)(uu)),
              Xu = null !== (Ru = Nu.apiKey) && void 0 !== Ru ? Ru : null,
              Vu = null !== (yu = Nu.oobCode) && void 0 !== yu ? yu : null,
              ru = function(uu) {
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
              }(null !== (Ku = Nu.mode) && void 0 !== Ku ? Ku : null);
            Au(Xu && Vu && ru, "argument-error"), this.apiKey = Xu, this.operation = ru, this.code = Vu, this.continueUrl = null !== (Qu = Nu.continueUrl) && void 0 !== Qu ? Qu : null, this.languageCode = null !== (mu = Nu.languageCode) && void 0 !== mu ? mu : null, this.tenantId = null !== (Ju = Nu.tenantId) && void 0 !== Ju ? Ju : null
          }
          static parseLink(uu) {
            const Ru = function(uu) {
              const Ru = (0, Eu._)((0, Eu.v)(uu)).link,
                yu = Ru ? (0, Eu._)((0, Eu.v)(Ru)).deep_link_id : null,
                Ku = (0, Eu._)((0, Eu.v)(uu)).deep_link_id;
              return (Ku ? (0, Eu._)((0, Eu.v)(Ku)).link : null) || Ku || yu || Ru || uu
            }(uu);
            try {
              return new vR(Ru)
            } catch (yu) {
              return null
            }
          }
        }

        function aR(uu) {
          return vR.parseLink(uu)
        }
        class fR {
          constructor() {
            this.providerId = fR.PROVIDER_ID
          }
          static credential(uu, Ru) {
            return iR._fromEmailAndPassword(uu, Ru)
          }
          static credentialWithLink(uu, Ru) {
            const yu = vR.parseLink(Ru);
            return Au(yu, "argument-error"), iR._fromEmailAndCode(uu, yu.code, yu.tenantId)
          }
        }
        fR.PROVIDER_ID = "password", fR.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", fR.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class uy {
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
        class Ry extends uy {
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
        class yy extends Ry {
          static credentialFromJSON(uu) {
            const Ru = "string" === typeof uu ? JSON.parse(uu) : uu;
            return Au("providerId" in Ru && "signInMethod" in Ru, "argument-error"), oR._fromParams(Ru)
          }
          credential(uu) {
            return this._credential(Object.assign(Object.assign({}, uu), {
              nonce: uu.rawNonce
            }))
          }
          _credential(uu) {
            return Au(uu.idToken || uu.accessToken, "argument-error"), oR._fromParams(Object.assign(Object.assign({}, uu), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(uu) {
            return yy.oauthCredentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return yy.oauthCredentialFromTaggedObject(uu.customData || {})
          }
          static oauthCredentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Ru
            } = uu;
            if (!Ru) return null;
            const {
              oauthIdToken: yu,
              oauthAccessToken: Eu,
              oauthTokenSecret: Ku,
              pendingToken: Qu,
              nonce: mu,
              providerId: Ju
            } = Ru;
            if (!Eu && !Ku && !yu && !Qu) return null;
            if (!Ju) return null;
            try {
              return new yy(Ju)._credential({
                idToken: yu,
                accessToken: Eu,
                nonce: mu,
                pendingToken: Qu
              })
            } catch (Nu) {
              return null
            }
          }
        }
        class Ey extends Ry {
          constructor() {
            super("facebook.com")
          }
          static credential(uu) {
            return oR._fromParams({
              providerId: Ey.PROVIDER_ID,
              signInMethod: Ey.FACEBOOK_SIGN_IN_METHOD,
              accessToken: uu
            })
          }
          static credentialFromResult(uu) {
            return Ey.credentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return Ey.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Ru
            } = uu;
            if (!Ru || !("oauthAccessToken" in Ru)) return null;
            if (!Ru.oauthAccessToken) return null;
            try {
              return Ey.credential(Ru.oauthAccessToken)
            } catch (yu) {
              return null
            }
          }
        }
        Ey.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Ey.PROVIDER_ID = "facebook.com";
        class Ky extends Ry {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(uu, Ru) {
            return oR._fromParams({
              providerId: Ky.PROVIDER_ID,
              signInMethod: Ky.GOOGLE_SIGN_IN_METHOD,
              idToken: uu,
              accessToken: Ru
            })
          }
          static credentialFromResult(uu) {
            return Ky.credentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return Ky.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Ru
            } = uu;
            if (!Ru) return null;
            const {
              oauthIdToken: yu,
              oauthAccessToken: Eu
            } = Ru;
            if (!yu && !Eu) return null;
            try {
              return Ky.credential(yu, Eu)
            } catch (Ku) {
              return null
            }
          }
        }
        Ky.GOOGLE_SIGN_IN_METHOD = "google.com", Ky.PROVIDER_ID = "google.com";
        class Qy extends Ry {
          constructor() {
            super("github.com")
          }
          static credential(uu) {
            return oR._fromParams({
              providerId: Qy.PROVIDER_ID,
              signInMethod: Qy.GITHUB_SIGN_IN_METHOD,
              accessToken: uu
            })
          }
          static credentialFromResult(uu) {
            return Qy.credentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return Qy.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Ru
            } = uu;
            if (!Ru || !("oauthAccessToken" in Ru)) return null;
            if (!Ru.oauthAccessToken) return null;
            try {
              return Qy.credential(Ru.oauthAccessToken)
            } catch (yu) {
              return null
            }
          }
        }
        Qy.GITHUB_SIGN_IN_METHOD = "github.com", Qy.PROVIDER_ID = "github.com";
        class my extends LR {
          constructor(uu, Ru) {
            super(uu, uu), this.pendingToken = Ru
          }
          _getIdTokenResponse(uu) {
            return YR(uu, this.buildRequest())
          }
          _linkToIdToken(uu, Ru) {
            const yu = this.buildRequest();
            return yu.idToken = Ru, YR(uu, yu)
          }
          _getReauthenticationResolver(uu) {
            const Ru = this.buildRequest();
            return Ru.autoCreate = !1, YR(uu, Ru)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(uu) {
            const Ru = "string" === typeof uu ? JSON.parse(uu) : uu,
              {
                providerId: yu,
                signInMethod: Eu,
                pendingToken: Ku
              } = Ru;
            return yu && Eu && Ku && yu === Eu ? new my(yu, Ku) : null
          }
          static _create(uu, Ru) {
            return new my(uu, Ru)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Jy extends uy {
          constructor(uu) {
            Au(uu.startsWith("saml."), "argument-error"), super(uu)
          }
          static credentialFromResult(uu) {
            return Jy.samlCredentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return Jy.samlCredentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromJSON(uu) {
            const Ru = my.fromJSON(uu);
            return Au(Ru, "argument-error"), Ru
          }
          static samlCredentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Ru
            } = uu;
            if (!Ru) return null;
            const {
              pendingToken: yu,
              providerId: Eu
            } = Ru;
            if (!yu || !Eu) return null;
            try {
              return my._create(Eu, yu)
            } catch (Ku) {
              return null
            }
          }
        }
        class Ny extends Ry {
          constructor() {
            super("twitter.com")
          }
          static credential(uu, Ru) {
            return oR._fromParams({
              providerId: Ny.PROVIDER_ID,
              signInMethod: Ny.TWITTER_SIGN_IN_METHOD,
              oauthToken: uu,
              oauthTokenSecret: Ru
            })
          }
          static credentialFromResult(uu) {
            return Ny.credentialFromTaggedObject(uu)
          }
          static credentialFromError(uu) {
            return Ny.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Ru
            } = uu;
            if (!Ru) return null;
            const {
              oauthAccessToken: yu,
              oauthTokenSecret: Eu
            } = Ru;
            if (!yu || !Eu) return null;
            try {
              return Ny.credential(yu, Eu)
            } catch (Ku) {
              return null
            }
          }
        }
        async function Xy(uu, Ru) {
          return Fu(uu, "POST", "/v1/accounts:signUp", cu(uu, Ru))
        }
        Ny.TWITTER_SIGN_IN_METHOD = "twitter.com", Ny.PROVIDER_ID = "twitter.com";
        class Vy {
          constructor(uu) {
            this.user = uu.user, this.providerId = uu.providerId, this._tokenResponse = uu._tokenResponse, this.operationType = uu.operationType
          }
          static async _fromIdTokenResponse(uu, Ru, yu) {
            let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Ku = await ER._fromIdTokenResponse(uu, yu, Eu),
              Qu = ry(yu);
            return new Vy({
              user: Ku,
              providerId: Qu,
              _tokenResponse: yu,
              operationType: Ru
            })
          }
          static async _forOperation(uu, Ru, yu) {
            await uu._updateTokensIfNecessary(yu, !0);
            const Eu = ry(yu);
            return new Vy({
              user: uu,
              providerId: Eu,
              _tokenResponse: yu,
              operationType: Ru
            })
          }
        }

        function ry(uu) {
          return uu.providerId ? uu.providerId : "phoneNumber" in uu ? "phone" : null
        }
        async function By(uu) {
          var Ru;
          const yu = nR(uu);
          if (await yu._initializationPromise, null === (Ru = yu.currentUser) || void 0 === Ru ? void 0 : Ru.isAnonymous) return new Vy({
            user: yu.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Eu = await Xy(yu, {
              returnSecureToken: !0
            }),
            Ku = await Vy._fromIdTokenResponse(yu, "signIn", Eu, !0);
          return await yu._updateCurrentUser(Ku.user), Ku
        }
        class xy extends Eu.e {
          constructor(uu, Ru, yu, Eu) {
            var Ku;
            super(Ru.code, Ru.message), this.operationType = yu, this.user = Eu, Object.setPrototypeOf(this, xy.prototype), this.customData = {
              appName: uu.name,
              tenantId: null !== (Ku = uu.tenantId) && void 0 !== Ku ? Ku : void 0,
              _serverResponse: Ru.customData._serverResponse,
              operationType: yu
            }
          }
          static _fromErrorAndOperation(uu, Ru, yu, Eu) {
            return new xy(uu, Ru, yu, Eu)
          }
        }

        function Sy(uu, Ru, yu, Eu) {
          return ("reauthenticate" === Ru ? yu._getReauthenticationResolver(uu) : yu._getIdTokenResponse(uu)).catch((yu => {
            if ("auth/multi-factor-auth-required" === yu.code) throw xy._fromErrorAndOperation(uu, yu, Ru, Eu);
            throw yu
          }))
        }

        function py(uu) {
          return new Set(uu.map((uu => {
            let {
              providerId: Ru
            } = uu;
            return Ru
          })).filter((uu => !!uu)))
        }
        async function Ty(uu, Ru) {
          const yu = (0, Eu.D)(uu);
          await jy(!0, yu, Ru);
          const {
            providerUserInfo: Ku
          } = await async function(uu, Ru) {
            return Lu(uu, "POST", "/v1/accounts:update", Ru)
          }(yu.auth, {
            idToken: await yu.getIdToken(),
            deleteProvider: [Ru]
          }), Qu = py(Ku || []);
          return yu.providerData = yu.providerData.filter((uu => Qu.has(uu.providerId))), Qu.has("phone") || (yu.phoneNumber = null), await yu.auth._persistUserIfCurrent(yu), yu
        }
        async function Wy(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Eu = await Ou(uu, Ru._linkToIdToken(uu.auth, await uu.getIdToken()), yu);
          return Vy._forOperation(uu, "link", Eu)
        }
        async function jy(uu, Ru, yu) {
          await fu(Ru);
          const Eu = !1 === uu ? "provider-already-linked" : "no-such-provider";
          Au(py(Ru.providerData).has(yu) === uu, Ru.auth, Eu)
        }
        async function Hy(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Eu
          } = uu, Ku = "reauthenticate";
          try {
            const Qu = await Ou(uu, Sy(Eu, Ku, Ru, uu), yu);
            Au(Qu.idToken, Eu, "internal-error");
            const mu = qu(Qu.idToken);
            Au(mu, Eu, "internal-error");
            const {
              sub: Ju
            } = mu;
            return Au(uu.uid === Ju, Eu, "user-mismatch"), Vy._forOperation(uu, Ku, Qu)
          } catch (Qu) {
            throw "auth/user-not-found" === (null === Qu || void 0 === Qu ? void 0 : Qu.code) && du(Eu, "user-mismatch"), Qu
          }
        }
        async function dy(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Eu = "signIn",
            Ku = await Sy(uu, Eu, Ru),
            Qu = await Vy._fromIdTokenResponse(uu, Eu, Ku);
          return yu || await uu._updateCurrentUser(Qu.user), Qu
        }
        async function by(uu, Ru) {
          return dy(nR(uu), Ru)
        }
        async function Cy(uu, Ru) {
          const yu = (0, Eu.D)(uu);
          return await jy(!1, yu, Ru.providerId), Wy(yu, Ru)
        }
        async function ky(uu, Ru) {
          return Hy((0, Eu.D)(uu), Ru)
        }
        async function ey(uu, Ru) {
          const yu = nR(uu),
            Eu = await async function(uu, Ru) {
              return Fu(uu, "POST", "/v1/accounts:signInWithCustomToken", cu(uu, Ru))
            }(yu, {
              token: Ru,
              returnSecureToken: !0
            }), Ku = await Vy._fromIdTokenResponse(yu, "signIn", Eu);
          return await yu._updateCurrentUser(Ku.user), Ku
        }
        class Ay {
          constructor(uu, Ru) {
            this.factorId = uu, this.uid = Ru.mfaEnrollmentId, this.enrollmentTime = new Date(Ru.enrolledAt).toUTCString(), this.displayName = Ru.displayName
          }
          static _fromServerResponse(uu, Ru) {
            return "phoneInfo" in Ru ? Dy._fromServerResponse(uu, Ru) : "totpInfo" in Ru ? My._fromServerResponse(uu, Ru) : du(uu, "internal-error")
          }
        }
        class Dy extends Ay {
          constructor(uu) {
            super("phone", uu), this.phoneNumber = uu.phoneInfo
          }
          static _fromServerResponse(uu, Ru) {
            return new Dy(Ru)
          }
        }
        class My extends Ay {
          constructor(uu) {
            super("totp", uu)
          }
          static _fromServerResponse(uu, Ru) {
            return new My(Ru)
          }
        }

        function Iy(uu, Ru, yu) {
          var Eu;
          Au((null === (Eu = yu.url) || void 0 === Eu ? void 0 : Eu.length) > 0, uu, "invalid-continue-uri"), Au("undefined" === typeof yu.dynamicLinkDomain || yu.dynamicLinkDomain.length > 0, uu, "invalid-dynamic-link-domain"), Ru.continueUrl = yu.url, Ru.dynamicLinkDomain = yu.dynamicLinkDomain, Ru.canHandleCodeInApp = yu.handleCodeInApp, yu.iOS && (Au(yu.iOS.bundleId.length > 0, uu, "missing-ios-bundle-id"), Ru.iOSBundleId = yu.iOS.bundleId), yu.android && (Au(yu.android.packageName.length > 0, uu, "missing-android-pkg-name"), Ru.androidInstallApp = yu.android.installApp, Ru.androidMinimumVersionCode = yu.android.minimumVersion, Ru.androidPackageName = yu.android.packageName)
        }
        async function Gy(uu, Ru, yu) {
          var Eu;
          const Ku = nR(uu),
            Qu = {
              requestType: "PASSWORD_RESET",
              email: Ru,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Eu = Ku._getRecaptchaConfig()) || void 0 === Eu ? void 0 : Eu.emailPasswordEnabled) {
            const uu = await IR(Ku, Qu, "getOobCode", !0);
            yu && Iy(Ku, uu, yu), await hR(Ku, uu)
          } else yu && Iy(Ku, Qu, yu), await hR(Ku, Qu).catch((async uu => {
            if ("auth/missing-recaptcha-token" !== uu.code) return Promise.reject(uu);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const uu = await IR(Ku, Qu, "getOobCode", !0);
              yu && Iy(Ku, uu, yu), await hR(Ku, uu)
            }
          }))
        }
        async function Uy(uu, Ru, yu) {
          await zR((0, Eu.D)(uu), {
            oobCode: Ru,
            newPassword: yu
          })
        }
        async function ny(uu, Ru) {
          await async function(uu, Ru) {
            return Lu(uu, "POST", "/v1/accounts:update", cu(uu, Ru))
          }((0, Eu.D)(uu), {
            oobCode: Ru
          })
        }
        async function sy(uu, Ru) {
          const yu = (0, Eu.D)(uu),
            Ku = await zR(yu, {
              oobCode: Ru
            }),
            Qu = Ku.requestType;
          switch (Au(Qu, yu, "internal-error"), Qu) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Au(Ku.newEmail, yu, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Au(Ku.mfaInfo, yu, "internal-error");
            default:
              Au(Ku.email, yu, "internal-error")
          }
          let mu = null;
          return Ku.mfaInfo && (mu = Ay._fromServerResponse(nR(yu), Ku.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Ku.requestType ? Ku.newEmail : Ku.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Ku.requestType ? Ku.email : Ku.newEmail) || null,
              multiFactorInfo: mu
            },
            operation: Qu
          }
        }
        async function ty(uu, Ru) {
          const {
            data: yu
          } = await sy((0, Eu.D)(uu), Ru);
          return yu.email
        }
        async function ly(uu, Ru, yu) {
          var Eu;
          const Ku = nR(uu),
            Qu = {
              returnSecureToken: !0,
              email: Ru,
              password: yu,
              clientType: "CLIENT_TYPE_WEB"
            };
          let mu;
          if (null === (Eu = Ku._getRecaptchaConfig()) || void 0 === Eu ? void 0 : Eu.emailPasswordEnabled) {
            const uu = await IR(Ku, Qu, "signUpPassword");
            mu = Xy(Ku, uu)
          } else mu = Xy(Ku, Qu).catch((async uu => {
            if ("auth/missing-recaptcha-token" === uu.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const uu = await IR(Ku, Qu, "signUpPassword");
              return Xy(Ku, uu)
            }
            return Promise.reject(uu)
          }));
          const Ju = await mu.catch((uu => Promise.reject(uu))),
            Nu = await Vy._fromIdTokenResponse(Ku, "signIn", Ju);
          return await Ku._updateCurrentUser(Nu.user), Nu
        }

        function gy(uu, Ru, yu) {
          return by((0, Eu.D)(uu), fR.credential(Ru, yu))
        }
        async function cy(uu, Ru, yu) {
          var Eu;
          const Ku = nR(uu),
            Qu = {
              requestType: "EMAIL_SIGNIN",
              email: Ru,
              clientType: "CLIENT_TYPE_WEB"
            };

          function mu(uu, Ru) {
            Au(Ru.handleCodeInApp, Ku, "argument-error"), Ru && Iy(Ku, uu, Ru)
          }
          if (null === (Eu = Ku._getRecaptchaConfig()) || void 0 === Eu ? void 0 : Eu.emailPasswordEnabled) {
            const uu = await IR(Ku, Qu, "getOobCode", !0);
            mu(uu, yu), await PR(Ku, uu)
          } else mu(Qu, yu), await PR(Ku, Qu).catch((async uu => {
            if ("auth/missing-recaptcha-token" !== uu.code) return Promise.reject(uu);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const uu = await IR(Ku, Qu, "getOobCode", !0);
              mu(uu, yu), await PR(Ku, uu)
            }
          }))
        }

        function Ly(uu, Ru) {
          const yu = vR.parseLink(Ru);
          return "EMAIL_SIGNIN" === (null === yu || void 0 === yu ? void 0 : yu.operation)
        }
        async function zy(uu, Ru, yu) {
          const Ku = (0, Eu.D)(uu),
            Qu = fR.credentialWithLink(Ru, yu || Iu());
          return Au(Qu._tenantId === (Ku.tenantId || null), Ku, "tenant-id-mismatch"), by(Ku, Qu)
        }
        async function Fy(uu, Ru) {
          const yu = {
              identifier: Ru,
              continueUri: Gu() ? Iu() : "http://localhost"
            },
            {
              signinMethods: Ku
            } = await async function(uu, Ru) {
              return Lu(uu, "POST", "/v1/accounts:createAuthUri", cu(uu, Ru))
            }((0, Eu.D)(uu), yu);
          return Ku || []
        }
        async function wy(uu, Ru) {
          const yu = (0, Eu.D)(uu),
            Ku = {
              requestType: "VERIFY_EMAIL",
              idToken: await uu.getIdToken()
            };
          Ru && Iy(yu.auth, Ku, Ru);
          const {
            email: Qu
          } = await async function(uu, Ru) {
            return ZR(uu, Ru)
          }(yu.auth, Ku);
          Qu !== uu.email && await uu.reload()
        }
        async function Zy(uu, Ru, yu) {
          const Ku = (0, Eu.D)(uu),
            Qu = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await uu.getIdToken(),
              newEmail: Ru
            };
          yu && Iy(Ku.auth, Qu, yu);
          const {
            email: mu
          } = await async function(uu, Ru) {
            return ZR(uu, Ru)
          }(Ku.auth, Qu);
          mu !== uu.email && await uu.reload()
        }
        async function hy(uu, Ru) {
          let {
            displayName: yu,
            photoURL: Ku
          } = Ru;
          if (void 0 === yu && void 0 === Ku) return;
          const Qu = (0, Eu.D)(uu),
            mu = {
              idToken: await Qu.getIdToken(),
              displayName: yu,
              photoUrl: Ku,
              returnSecureToken: !0
            },
            Ju = await Ou(Qu, async function(uu, Ru) {
              return Lu(uu, "POST", "/v1/accounts:update", Ru)
            }(Qu.auth, mu));
          Qu.displayName = Ju.displayName || null, Qu.photoURL = Ju.photoUrl || null;
          const Nu = Qu.providerData.find((uu => {
            let {
              providerId: Ru
            } = uu;
            return "password" === Ru
          }));
          Nu && (Nu.displayName = Qu.displayName, Nu.photoURL = Qu.photoURL), await Qu._updateTokensIfNecessary(Ju)
        }

        function Py(uu, Ru) {
          return Yy((0, Eu.D)(uu), Ru, null)
        }

        function iy(uu, Ru) {
          return Yy((0, Eu.D)(uu), null, Ru)
        }
        async function Yy(uu, Ru, yu) {
          const {
            auth: Eu
          } = uu, Ku = {
            idToken: await uu.getIdToken(),
            returnSecureToken: !0
          };
          Ru && (Ku.email = Ru), yu && (Ku.password = yu);
          const Qu = await Ou(uu, FR(Eu, Ku));
          await uu._updateTokensIfNecessary(Qu, !0)
        }
        class oy {
          constructor(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = uu, this.providerId = Ru, this.profile = yu
          }
        }
        class qy extends oy {
          constructor(uu, Ru, yu, Eu) {
            super(uu, Ru, yu), this.username = Eu
          }
        }
        class Oy extends oy {
          constructor(uu, Ru) {
            super(uu, "facebook.com", Ru)
          }
        }
        class vy extends qy {
          constructor(uu, Ru) {
            super(uu, "github.com", Ru, "string" === typeof(null === Ru || void 0 === Ru ? void 0 : Ru.login) ? null === Ru || void 0 === Ru ? void 0 : Ru.login : null)
          }
        }
        class ay extends oy {
          constructor(uu, Ru) {
            super(uu, "google.com", Ru)
          }
        }
        class fy extends qy {
          constructor(uu, Ru, yu) {
            super(uu, "twitter.com", Ru, yu)
          }
        }

        function uE(uu) {
          const {
            user: Ru,
            _tokenResponse: yu
          } = uu;
          return Ru.isAnonymous && !yu ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(uu) {
            var Ru, yu;
            if (!uu) return null;
            const {
              providerId: Eu
            } = uu, Ku = uu.rawUserInfo ? JSON.parse(uu.rawUserInfo) : {}, Qu = uu.isNewUser || "identitytoolkit#SignupNewUserResponse" === uu.kind;
            if (!Eu && (null === uu || void 0 === uu ? void 0 : uu.idToken)) {
              const Eu = null === (yu = null === (Ru = qu(uu.idToken)) || void 0 === Ru ? void 0 : Ru.firebase) || void 0 === yu ? void 0 : yu.sign_in_provider;
              if (Eu) return new oy(Qu, "anonymous" !== Eu && "custom" !== Eu ? Eu : null)
            }
            if (!Eu) return null;
            switch (Eu) {
              case "facebook.com":
                return new Oy(Qu, Ku);
              case "github.com":
                return new vy(Qu, Ku);
              case "google.com":
                return new ay(Qu, Ku);
              case "twitter.com":
                return new fy(Qu, Ku, uu.screenName || null);
              case "custom":
              case "anonymous":
                return new oy(Qu, null);
              default:
                return new oy(Qu, Eu, Ku)
            }
          }(yu)
        }

        function RE(uu, Ru) {
          return (0, Eu.D)(uu).setPersistence(Ru)
        }

        function yE(uu) {
          return nR(uu).initializeRecaptchaConfig()
        }

        function EE(uu, Ru, yu, Ku) {
          return (0, Eu.D)(uu).onIdTokenChanged(Ru, yu, Ku)
        }

        function KE(uu, Ru, yu) {
          return (0, Eu.D)(uu).beforeAuthStateChanged(Ru, yu)
        }

        function QE(uu, Ru, yu, Ku) {
          return (0, Eu.D)(uu).onAuthStateChanged(Ru, yu, Ku)
        }

        function mE(uu) {
          (0, Eu.D)(uu).useDeviceLanguage()
        }

        function JE(uu, Ru) {
          return (0, Eu.D)(uu).updateCurrentUser(Ru)
        }

        function NE(uu) {
          return (0, Eu.D)(uu).signOut()
        }
        async function XE(uu) {
          return (0, Eu.D)(uu).delete()
        }
        class VE {
          constructor(uu, Ru, yu) {
            this.type = uu, this.credential = Ru, this.auth = yu
          }
          static _fromIdtoken(uu, Ru) {
            return new VE("enroll", uu, Ru)
          }
          static _fromMfaPendingCredential(uu) {
            return new VE("signin", uu)
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
            var Ru, yu;
            if (null === uu || void 0 === uu ? void 0 : uu.multiFactorSession) {
              if (null === (Ru = uu.multiFactorSession) || void 0 === Ru ? void 0 : Ru.pendingCredential) return VE._fromMfaPendingCredential(uu.multiFactorSession.pendingCredential);
              if (null === (yu = uu.multiFactorSession) || void 0 === yu ? void 0 : yu.idToken) return VE._fromIdtoken(uu.multiFactorSession.idToken)
            }
            return null
          }
        }
        class rE {
          constructor(uu, Ru, yu) {
            this.session = uu, this.hints = Ru, this.signInResolver = yu
          }
          static _fromError(uu, Ru) {
            const yu = nR(uu),
              Eu = Ru.customData._serverResponse,
              Ku = (Eu.mfaInfo || []).map((uu => Ay._fromServerResponse(yu, uu)));
            Au(Eu.mfaPendingCredential, yu, "internal-error");
            const Qu = VE._fromMfaPendingCredential(Eu.mfaPendingCredential);
            return new rE(Qu, Ku, (async uu => {
              const Ku = await uu._process(yu, Qu);
              delete Eu.mfaInfo, delete Eu.mfaPendingCredential;
              const mu = Object.assign(Object.assign({}, Eu), {
                idToken: Ku.idToken,
                refreshToken: Ku.refreshToken
              });
              switch (Ru.operationType) {
                case "signIn":
                  const uu = await Vy._fromIdTokenResponse(yu, Ru.operationType, mu);
                  return await yu._updateCurrentUser(uu.user), uu;
                case "reauthenticate":
                  return Au(Ru.user, yu, "internal-error"), Vy._forOperation(Ru.user, Ru.operationType, mu);
                default:
                  du(yu, "internal-error")
              }
            }))
          }
          async resolveSignIn(uu) {
            const Ru = uu;
            return this.signInResolver(Ru)
          }
        }

        function BE(uu, Ru) {
          var yu;
          const Ku = (0, Eu.D)(uu),
            Qu = Ru;
          return Au(Ru.customData.operationType, Ku, "argument-error"), Au(null === (yu = Qu.customData._serverResponse) || void 0 === yu ? void 0 : yu.mfaPendingCredential, Ku, "argument-error"), rE._fromError(Ku, Qu)
        }
        class xE {
          constructor(uu) {
            this.user = uu, this.enrolledFactors = [], uu._onReload((Ru => {
              Ru.mfaInfo && (this.enrolledFactors = Ru.mfaInfo.map((Ru => Ay._fromServerResponse(uu.auth, Ru))))
            }))
          }
          static _fromUser(uu) {
            return new xE(uu)
          }
          async getSession() {
            return VE._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(uu, Ru) {
            const yu = uu,
              Eu = await this.getSession(),
              Ku = await Ou(this.user, yu._process(this.user.auth, Eu, Ru));
            return await this.user._updateTokensIfNecessary(Ku), this.user.reload()
          }
          async unenroll(uu) {
            const Ru = "string" === typeof uu ? uu : uu.uid,
              yu = await this.user.getIdToken();
            try {
              const uu = await Ou(this.user, (Eu = this.user.auth, Ku = {
                idToken: yu,
                mfaEnrollmentId: Ru
              }, Lu(Eu, "POST", "/v2/accounts/mfaEnrollment:withdraw", cu(Eu, Ku))));
              this.enrolledFactors = this.enrolledFactors.filter((uu => {
                let {
                  uid: yu
                } = uu;
                return yu !== Ru
              })), await this.user._updateTokensIfNecessary(uu), await this.user.reload()
            } catch (Qu) {
              throw Qu
            }
            var Eu, Ku
          }
        }
        const SE = new WeakMap;

        function pE(uu) {
          const Ru = (0, Eu.D)(uu);
          return SE.has(Ru) || SE.set(Ru, xE._fromUser(Ru)), SE.get(Ru)
        }
        const TE = "__sak";
        class WE {
          constructor(uu, Ru) {
            this.storageRetriever = uu, this.type = Ru
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(TE, "1"), this.storage.removeItem(TE), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (uu) {
              return Promise.resolve(!1)
            }
          }
          _set(uu, Ru) {
            return this.storage.setItem(uu, JSON.stringify(Ru)), Promise.resolve()
          }
          _get(uu) {
            const Ru = this.storage.getItem(uu);
            return Promise.resolve(Ru ? JSON.parse(Ru) : null)
          }
          _remove(uu) {
            return this.storage.removeItem(uu), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class jE extends WE {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (uu, Ru) => this.onStorageEvent(uu, Ru), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const uu = (0, Eu.F)();
              return BR(uu) || jR(uu)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (uu) {
                return !1
              }
            }(), this.fallbackToPolling = HR(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(uu) {
            for (const Ru of Object.keys(this.listeners)) {
              const yu = this.storage.getItem(Ru),
                Eu = this.localCache[Ru];
              yu !== Eu && uu(Ru, Eu, yu)
            }
          }
          onStorageEvent(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!uu.key) return void this.forAllChangedKeys(((uu, Ru, yu) => {
              this.notifyListeners(uu, yu)
            }));
            const yu = uu.key;
            if (Ru ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Eu = this.storage.getItem(yu);
              if (uu.newValue !== Eu) null !== uu.newValue ? this.storage.setItem(yu, uu.newValue) : this.storage.removeItem(yu);
              else if (this.localCache[yu] === uu.newValue && !Ru) return
            }
            const Ku = () => {
                const uu = this.storage.getItem(yu);
                (Ru || this.localCache[yu] !== uu) && this.notifyListeners(yu, uu)
              },
              Qu = this.storage.getItem(yu);
            (0, Eu.Q)() && 10 === document.documentMode && Qu !== uu.newValue && uu.newValue !== uu.oldValue ? setTimeout(Ku, 10) : Ku()
          }
          notifyListeners(uu, Ru) {
            this.localCache[uu] = Ru;
            const yu = this.listeners[uu];
            if (yu)
              for (const Eu of Array.from(yu)) Eu(Ru ? JSON.parse(Ru) : Ru)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((uu, Ru, yu) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: uu,
                  oldValue: Ru,
                  newValue: yu
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
          _addListener(uu, Ru) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[uu] || (this.listeners[uu] = new Set, this.localCache[uu] = this.storage.getItem(uu)), this.listeners[uu].add(Ru)
          }
          _removeListener(uu, Ru) {
            this.listeners[uu] && (this.listeners[uu].delete(Ru), 0 === this.listeners[uu].size && delete this.listeners[uu]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(uu, Ru) {
            await super._set(uu, Ru), this.localCache[uu] = JSON.stringify(Ru)
          }
          async _get(uu) {
            const Ru = await super._get(uu);
            return this.localCache[uu] = JSON.stringify(Ru), Ru
          }
          async _remove(uu) {
            await super._remove(uu), delete this.localCache[uu]
          }
        }
        jE.type = "LOCAL";
        const HE = jE;
        class dE extends WE {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(uu, Ru) {}
          _removeListener(uu, Ru) {}
        }
        dE.type = "SESSION";
        const bE = dE;
        class CE {
          constructor(uu) {
            this.eventTarget = uu, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(uu) {
            const Ru = this.receivers.find((Ru => Ru.isListeningto(uu)));
            if (Ru) return Ru;
            const yu = new CE(uu);
            return this.receivers.push(yu), yu
          }
          isListeningto(uu) {
            return this.eventTarget === uu
          }
          async handleEvent(uu) {
            const Ru = uu,
              {
                eventId: yu,
                eventType: Eu,
                data: Ku
              } = Ru.data,
              Qu = this.handlersMap[Eu];
            if (!(null === Qu || void 0 === Qu ? void 0 : Qu.size)) return;
            Ru.ports[0].postMessage({
              status: "ack",
              eventId: yu,
              eventType: Eu
            });
            const mu = Array.from(Qu).map((async uu => uu(Ru.origin, Ku))),
              Ju = await
            function(uu) {
              return Promise.all(uu.map((async uu => {
                try {
                  return {
                    fulfilled: !0,
                    value: await uu
                  }
                } catch (Ru) {
                  return {
                    fulfilled: !1,
                    reason: Ru
                  }
                }
              })))
            }(mu);
            Ru.ports[0].postMessage({
              status: "done",
              eventId: yu,
              eventType: Eu,
              response: Ju
            })
          }
          _subscribe(uu, Ru) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[uu] || (this.handlersMap[uu] = new Set), this.handlersMap[uu].add(Ru)
          }
          _unsubscribe(uu, Ru) {
            this.handlersMap[uu] && Ru && this.handlersMap[uu].delete(Ru), Ru && 0 !== this.handlersMap[uu].size || delete this.handlersMap[uu], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function kE() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            yu = "";
          for (let Eu = 0; Eu < Ru; Eu++) yu += Math.floor(10 * Math.random());
          return uu + yu
        }
        CE.receivers = [];
        class eE {
          constructor(uu) {
            this.target = uu, this.handlers = new Set
          }
          removeMessageHandler(uu) {
            uu.messageChannel && (uu.messageChannel.port1.removeEventListener("message", uu.WH), uu.messageChannel.port1.close()), this.handlers.delete(uu)
          }
          async _send(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Eu = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Eu) throw new Error("connection_unavailable");
            let Ku, Qu;
            return new Promise(((mu, Ju) => {
              const Nu = kE("", 20);
              Eu.port1.start();
              const Xu = setTimeout((() => {
                Ju(new Error("unsupported_event"))
              }), yu);
              Qu = {
                messageChannel: Eu,
                WH(uu) {
                  const Ru = uu;
                  if (Ru.data.eventId === Nu) switch (Ru.data.status) {
                    case "ack":
                      clearTimeout(Xu), Ku = setTimeout((() => {
                        Ju(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Ku), mu(Ru.data.response);
                      break;
                    default:
                      clearTimeout(Xu), clearTimeout(Ku), Ju(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Qu), Eu.port1.addEventListener("message", Qu.WH), this.target.postMessage({
                eventType: uu,
                eventId: Nu,
                data: Ru
              }, [Eu.port2])
            })).finally((() => {
              Qu && this.removeMessageHandler(Qu)
            }))
          }
        }

        function AE() {
          return window
        }

        function DE() {
          return "undefined" !== typeof AE().WorkerGlobalScope && "function" === typeof AE().importScripts
        }
        const ME = "firebaseLocalStorageDb",
          IE = "firebaseLocalStorage",
          GE = "fbase_key";
        class UE {
          constructor(uu) {
            this.request = uu
          }
          toPromise() {
            return new Promise(((uu, Ru) => {
              this.request.addEventListener("success", (() => {
                uu(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Ru(this.request.error)
              }))
            }))
          }
        }

        function nE(uu, Ru) {
          return uu.transaction([IE], Ru ? "readwrite" : "readonly").objectStore(IE)
        }

        function sE() {
          const uu = indexedDB.open(ME, 1);
          return new Promise(((Ru, yu) => {
            uu.addEventListener("error", (() => {
              yu(uu.error)
            })), uu.addEventListener("upgradeneeded", (() => {
              const Ru = uu.result;
              try {
                Ru.createObjectStore(IE, {
                  keyPath: GE
                })
              } catch (Eu) {
                yu(Eu)
              }
            })), uu.addEventListener("success", (async () => {
              const yu = uu.result;
              yu.objectStoreNames.contains(IE) ? Ru(yu) : (yu.close(), await
                function() {
                  const uu = indexedDB.deleteDatabase(ME);
                  return new UE(uu).toPromise()
                }(), Ru(await sE()))
            }))
          }))
        }
        async function tE(uu, Ru, yu) {
          const Eu = nE(uu, !0).put({
            [GE]: Ru,
            value: yu
          });
          return new UE(Eu).toPromise()
        }

        function lE(uu, Ru) {
          const yu = nE(uu, !0).delete(Ru);
          return new UE(yu).toPromise()
        }
        class gE {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await sE()), this.db
          }
          async _withRetries(uu) {
            let Ru = 0;
            for (;;) try {
              const Ru = await this._openDb();
              return await uu(Ru)
            } catch (yu) {
              if (Ru++ > 3) throw yu;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return DE() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = CE._getInstance(DE() ? self : null), this.receiver._subscribe("keyChanged", (async (uu, Ru) => ({
              keyProcessed: (await this._poll()).includes(Ru.key)
            }))), this.receiver._subscribe("ping", (async (uu, Ru) => ["keyChanged"]))
          }
          async initializeSender() {
            var uu, Ru;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (uu) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new eE(this.activeServiceWorker);
            const yu = await this.sender._send("ping", {}, 800);
            yu && (null === (uu = yu[0]) || void 0 === uu ? void 0 : uu.fulfilled) && (null === (Ru = yu[0]) || void 0 === Ru ? void 0 : Ru.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(uu) {
            if (this.sender && this.activeServiceWorker && function() {
                var uu;
                return (null === (uu = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === uu ? void 0 : uu.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: uu
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Ru) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const uu = await sE();
              return await tE(uu, TE, "1"), await lE(uu, TE), !0
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
          async _set(uu, Ru) {
            return this._withPendingWrite((async () => (await this._withRetries((yu => tE(yu, uu, Ru))), this.localCache[uu] = Ru, this.notifyServiceWorker(uu))))
          }
          async _get(uu) {
            const Ru = await this._withRetries((Ru => async function(uu, Ru) {
              const yu = nE(uu, !1).get(Ru),
                Eu = await new UE(yu).toPromise();
              return void 0 === Eu ? null : Eu.value
            }(Ru, uu)));
            return this.localCache[uu] = Ru, Ru
          }
          async _remove(uu) {
            return this._withPendingWrite((async () => (await this._withRetries((Ru => lE(Ru, uu))), delete this.localCache[uu], this.notifyServiceWorker(uu))))
          }
          async _poll() {
            const uu = await this._withRetries((uu => {
              const Ru = nE(uu, !1).getAll();
              return new UE(Ru).toPromise()
            }));
            if (!uu) return [];
            if (0 !== this.pendingWrites) return [];
            const Ru = [],
              yu = new Set;
            for (const {
                fbase_key: Eu,
                value: Ku
              }
              of uu) yu.add(Eu), JSON.stringify(this.localCache[Eu]) !== JSON.stringify(Ku) && (this.notifyListeners(Eu, Ku), Ru.push(Eu));
            for (const Eu of Object.keys(this.localCache)) this.localCache[Eu] && !yu.has(Eu) && (this.notifyListeners(Eu, null), Ru.push(Eu));
            return Ru
          }
          notifyListeners(uu, Ru) {
            this.localCache[uu] = Ru;
            const yu = this.listeners[uu];
            if (yu)
              for (const Eu of Array.from(yu)) Eu(Ru)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(uu, Ru) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[uu] || (this.listeners[uu] = new Set, this._get(uu)), this.listeners[uu].add(Ru)
          }
          _removeListener(uu, Ru) {
            this.listeners[uu] && (this.listeners[uu].delete(Ru), 0 === this.listeners[uu].size && delete this.listeners[uu]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        gE.type = "LOCAL";
        const cE = gE;
        const LE = 1e12;
        class zE {
          constructor(uu) {
            this.auth = uu, this.counter = LE, this._widgets = new Map
          }
          render(uu, Ru) {
            const yu = this.counter;
            return this._widgets.set(yu, new FE(uu, this.auth.name, Ru || {})), this.counter++, yu
          }
          reset(uu) {
            var Ru;
            const yu = uu || LE;
            null === (Ru = this._widgets.get(yu)) || void 0 === Ru || Ru.delete(), this._widgets.delete(yu)
          }
          getResponse(uu) {
            var Ru;
            const yu = uu || LE;
            return (null === (Ru = this._widgets.get(yu)) || void 0 === Ru ? void 0 : Ru.getResponse()) || ""
          }
          async execute(uu) {
            var Ru;
            const yu = uu || LE;
            return null === (Ru = this._widgets.get(yu)) || void 0 === Ru || Ru.execute(), ""
          }
        }
        class FE {
          constructor(uu, Ru, yu) {
            this.params = yu, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Eu = "string" === typeof uu ? document.getElementById(uu) : uu;
            Au(Eu, "argument-error", {
              appName: Ru
            }), this.container = Eu, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const Ru = [],
                  yu = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Eu = 0; Eu < uu; Eu++) Ru.push(yu.charAt(Math.floor(Math.random() * yu.length)));
                return Ru.join("")
              }(50);
              const {
                callback: uu,
                "expired-callback": Ru
              } = this.params;
              if (uu) try {
                uu(this.responseToken)
              } catch (yu) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Ru) try {
                  Ru()
                } catch (yu) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const wE = DR("rcb"),
          ZE = new nu(3e4, 6e4);
        class hE {
          constructor() {
            var uu;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (uu = AE().grecaptcha) || void 0 === uu ? void 0 : uu.render)
          }
          load(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Au(function(uu) {
              return uu.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(uu)
            }(Ru), uu, "argument-error"), this.shouldResolveImmediately(Ru) && CR(AE().grecaptcha) ? Promise.resolve(AE().grecaptcha) : new Promise(((yu, Ku) => {
              const Qu = AE().setTimeout((() => {
                Ku(bu(uu, "network-request-failed"))
              }), ZE.get());
              AE()[wE] = () => {
                AE().clearTimeout(Qu), delete AE()[wE];
                const Eu = AE().grecaptcha;
                if (!Eu || !CR(Eu)) return void Ku(bu(uu, "internal-error"));
                const mu = Eu.render;
                Eu.render = (uu, Ru) => {
                  const yu = mu(uu, Ru);
                  return this.counter++, yu
                }, this.hostLanguage = Ru, yu(Eu)
              };
              AR(`https://www.google.com/recaptcha/api.js??${(0,Eu.$)({onload:wE,render:"explicit",hl:Ru})}`).catch((() => {
                clearTimeout(Qu), Ku(bu(uu, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(uu) {
            var Ru;
            return !!(null === (Ru = AE().grecaptcha) || void 0 === Ru ? void 0 : Ru.render) && (uu === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class PE {
          async load(uu) {
            return new zE(uu)
          }
          clearedOneInstance() {}
        }
        const iE = "recaptcha",
          YE = {
            theme: "light",
            type: "image"
          };
        class oE {
          constructor(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, YE),
              yu = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Ru, this.type = iE, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = nR(yu), this.isInvisible = "invisible" === this.parameters.size, Au("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Eu = "string" === typeof uu ? document.getElementById(uu) : uu;
            Au(Eu, this.auth, "argument-error"), this.container = Eu, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new PE : new hE, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const uu = await this.render(),
              Ru = this.getAssertedRecaptcha(),
              yu = Ru.getResponse(uu);
            return yu || new Promise((yu => {
              const Eu = uu => {
                uu && (this.tokenChangeListeners.delete(Eu), yu(uu))
              };
              this.tokenChangeListeners.add(Eu), this.isInvisible && Ru.execute(uu)
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
            Au(!this.parameters.sitekey, this.auth, "argument-error"), Au(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Au("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(uu) {
            return Ru => {
              if (this.tokenChangeListeners.forEach((uu => uu(Ru))), "function" === typeof uu) uu(Ru);
              else if ("string" === typeof uu) {
                const yu = AE()[uu];
                "function" === typeof yu && yu(Ru)
              }
            }
          }
          assertNotDestroyed() {
            Au(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let uu = this.container;
              if (!this.isInvisible) {
                const Ru = document.createElement("div");
                uu.appendChild(Ru), uu = Ru
              }
              this.widgetId = this.getAssertedRecaptcha().render(uu, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Au(Gu() && !DE(), this.auth, "internal-error"), await
            function() {
              let uu = null;
              return new Promise((Ru => {
                "complete" !== document.readyState ? (uu = () => Ru(), window.addEventListener("load", uu)) : Ru()
              })).catch((Ru => {
                throw uu && window.removeEventListener("load", uu), Ru
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const uu = await async function(uu) {
              return (await Lu(uu, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Au(uu, this.auth, "internal-error"), this.parameters.sitekey = uu
          }
          getAssertedRecaptcha() {
            return Au(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class qE {
          constructor(uu, Ru) {
            this.verificationId = uu, this.onConfirmation = Ru
          }
          confirm(uu) {
            const Ru = OR._fromVerification(this.verificationId, uu);
            return this.onConfirmation(Ru)
          }
        }
        async function OE(uu, Ru, yu) {
          const Ku = nR(uu),
            Qu = await fE(Ku, Ru, (0, Eu.D)(yu));
          return new qE(Qu, (uu => by(Ku, uu)))
        }
        async function vE(uu, Ru, yu) {
          const Ku = (0, Eu.D)(uu);
          await jy(!1, Ku, "phone");
          const Qu = await fE(Ku.auth, Ru, (0, Eu.D)(yu));
          return new qE(Qu, (uu => Cy(Ku, uu)))
        }
        async function aE(uu, Ru, yu) {
          const Ku = (0, Eu.D)(uu),
            Qu = await fE(Ku.auth, Ru, (0, Eu.D)(yu));
          return new qE(Qu, (uu => ky(Ku, uu)))
        }
        async function fE(uu, Ru, yu) {
          var Eu;
          const Ku = await yu.verify();
          try {
            let Qu;
            if (Au("string" === typeof Ku, uu, "argument-error"), Au(yu.type === iE, uu, "argument-error"), Qu = "string" === typeof Ru ? {
                phoneNumber: Ru
              } : Ru, "session" in Qu) {
              const Ru = Qu.session;
              if ("phoneNumber" in Qu) {
                Au("enroll" === Ru.type, uu, "internal-error");
                const yu = await
                function(uu, Ru) {
                  return Lu(uu, "POST", "/v2/accounts/mfaEnrollment:start", cu(uu, Ru))
                }(uu, {
                  idToken: Ru.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Qu.phoneNumber,
                    recaptchaToken: Ku
                  }
                });
                return yu.phoneSessionInfo.sessionInfo
              } {
                Au("signin" === Ru.type, uu, "internal-error");
                const yu = (null === (Eu = Qu.multiFactorHint) || void 0 === Eu ? void 0 : Eu.uid) || Qu.multiFactorUid;
                Au(yu, uu, "missing-multi-factor-info");
                const mu = await
                function(uu, Ru) {
                  return Lu(uu, "POST", "/v2/accounts/mfaSignIn:start", cu(uu, Ru))
                }(uu, {
                  mfaPendingCredential: Ru.credential,
                  mfaEnrollmentId: yu,
                  phoneSignInInfo: {
                    recaptchaToken: Ku
                  }
                });
                return mu.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Ru
              } = await async function(uu, Ru) {
                return Lu(uu, "POST", "/v1/accounts:sendVerificationCode", cu(uu, Ru))
              }(uu, {
                phoneNumber: Qu.phoneNumber,
                recaptchaToken: Ku
              });
              return Ru
            }
          } finally {
            yu._reset()
          }
        }
        async function uK(uu, Ru) {
          await Wy((0, Eu.D)(uu), Ru)
        }
        class RK {
          constructor(uu) {
            this.providerId = RK.PROVIDER_ID, this.auth = nR(uu)
          }
          verifyPhoneNumber(uu, Ru) {
            return fE(this.auth, uu, (0, Eu.D)(Ru))
          }
          static credential(uu, Ru) {
            return OR._fromVerification(uu, Ru)
          }
          static credentialFromResult(uu) {
            const Ru = uu;
            return RK.credentialFromTaggedObject(Ru)
          }
          static credentialFromError(uu) {
            return RK.credentialFromTaggedObject(uu.customData || {})
          }
          static credentialFromTaggedObject(uu) {
            let {
              _tokenResponse: Ru
            } = uu;
            if (!Ru) return null;
            const {
              phoneNumber: yu,
              temporaryProof: Eu
            } = Ru;
            return yu && Eu ? OR._fromTokenResponse(yu, Eu) : null
          }
        }

        function yK(uu, Ru) {
          return Ru ? QR(Ru) : (Au(uu._popupRedirectResolver, uu, "argument-error"), uu._popupRedirectResolver)
        }
        RK.PROVIDER_ID = "phone", RK.PHONE_SIGN_IN_METHOD = "phone";
        class EK extends LR {
          constructor(uu) {
            super("custom", "custom"), this.params = uu
          }
          _getIdTokenResponse(uu) {
            return YR(uu, this._buildIdpRequest())
          }
          _linkToIdToken(uu, Ru) {
            return YR(uu, this._buildIdpRequest(Ru))
          }
          _getReauthenticationResolver(uu) {
            return YR(uu, this._buildIdpRequest())
          }
          _buildIdpRequest(uu) {
            const Ru = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return uu && (Ru.idToken = uu), Ru
          }
        }

        function KK(uu) {
          return dy(uu.auth, new EK(uu), uu.bypassAuthState)
        }

        function QK(uu) {
          const {
            auth: Ru,
            user: yu
          } = uu;
          return Au(yu, Ru, "internal-error"), Hy(yu, new EK(uu), uu.bypassAuthState)
        }
        async function mK(uu) {
          const {
            auth: Ru,
            user: yu
          } = uu;
          return Au(yu, Ru, "internal-error"), Wy(yu, new EK(uu), uu.bypassAuthState)
        }
        class JK {
          constructor(uu, Ru, yu, Eu) {
            let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = uu, this.resolver = yu, this.user = Eu, this.bypassAuthState = Ku, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Ru) ? Ru : [Ru]
          }
          execute() {
            return new Promise((async (uu, Ru) => {
              this.pendingPromise = {
                resolve: uu,
                reject: Ru
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (yu) {
                this.reject(yu)
              }
            }))
          }
          async onAuthEvent(uu) {
            const {
              urlResponse: Ru,
              sessionId: yu,
              postBody: Eu,
              tenantId: Ku,
              error: Qu,
              type: mu
            } = uu;
            if (Qu) return void this.reject(Qu);
            const Ju = {
              auth: this.auth,
              requestUri: Ru,
              sessionId: yu,
              tenantId: Ku || void 0,
              postBody: Eu || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(mu)(Ju))
            } catch (Nu) {
              this.reject(Nu)
            }
          }
          onError(uu) {
            this.reject(uu)
          }
          getIdpTask(uu) {
            switch (uu) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return KK;
              case "linkViaPopup":
              case "linkViaRedirect":
                return mK;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return QK;
              default:
                du(this.auth, "internal-error")
            }
          }
          resolve(uu) {
            Mu(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(uu), this.unregisterAndCleanUp()
          }
          reject(uu) {
            Mu(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(uu), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const NK = new nu(2e3, 1e4);
        async function XK(uu, Ru, yu) {
          const Eu = nR(uu);
          ku(uu, Ru, uy);
          const Ku = yK(Eu, yu);
          return new BK(Eu, "signInViaPopup", Ru, Ku).executeNotNull()
        }
        async function VK(uu, Ru, yu) {
          const Ku = (0, Eu.D)(uu);
          ku(Ku.auth, Ru, uy);
          const Qu = yK(Ku.auth, yu);
          return new BK(Ku.auth, "reauthViaPopup", Ru, Qu, Ku).executeNotNull()
        }
        async function rK(uu, Ru, yu) {
          const Ku = (0, Eu.D)(uu);
          ku(Ku.auth, Ru, uy);
          const Qu = yK(Ku.auth, yu);
          return new BK(Ku.auth, "linkViaPopup", Ru, Qu, Ku).executeNotNull()
        }
        class BK extends JK {
          constructor(uu, Ru, yu, Eu, Ku) {
            super(uu, Ru, Eu, Ku), this.provider = yu, this.authWindow = null, this.pollId = null, BK.currentPopupAction && BK.currentPopupAction.cancel(), BK.currentPopupAction = this
          }
          async executeNotNull() {
            const uu = await this.execute();
            return Au(uu, this.auth, "internal-error"), uu
          }
          async onExecution() {
            Mu(1 === this.filter.length, "Popup operations only handle one event");
            const uu = kE();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], uu), this.authWindow.associatedEvent = uu, this.resolver._originValidation(this.auth).catch((uu => {
              this.reject(uu)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (uu => {
              uu || this.reject(bu(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var uu;
            return (null === (uu = this.authWindow) || void 0 === uu ? void 0 : uu.associatedEvent) || null
          }
          cancel() {
            this.reject(bu(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, BK.currentPopupAction = null
          }
          pollUserCancellation() {
            const uu = () => {
              var Ru, yu;
              (null === (yu = null === (Ru = this.authWindow) || void 0 === Ru ? void 0 : Ru.window) || void 0 === yu ? void 0 : yu.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(bu(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(uu, NK.get())
            };
            uu()
          }
        }
        BK.currentPopupAction = null;
        const xK = "pendingRedirect",
          SK = new Map;
        class pK extends JK {
          constructor(uu, Ru) {
            super(uu, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Ru, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let uu = SK.get(this.auth._key());
            if (!uu) {
              try {
                const Ru = await async function(uu, Ru) {
                  const yu = HK(Ru),
                    Eu = jK(uu);
                  if (!await Eu._isAvailable()) return !1;
                  const Ku = "true" === await Eu._get(yu);
                  return await Eu._remove(yu), Ku
                }(this.resolver, this.auth) ? await super.execute() : null;
                uu = () => Promise.resolve(Ru)
              } catch (Ru) {
                uu = () => Promise.reject(Ru)
              }
              SK.set(this.auth._key(), uu)
            }
            return this.bypassAuthState || SK.set(this.auth._key(), (() => Promise.resolve(null))), uu()
          }
          async onAuthEvent(uu) {
            if ("signInViaRedirect" === uu.type) return super.onAuthEvent(uu);
            if ("unknown" !== uu.type) {
              if (uu.eventId) {
                const Ru = await this.auth._redirectUserForId(uu.eventId);
                if (Ru) return this.user = Ru, super.onAuthEvent(uu);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function TK(uu, Ru) {
          return jK(uu)._set(HK(Ru), "true")
        }

        function WK(uu, Ru) {
          SK.set(uu._key(), Ru)
        }

        function jK(uu) {
          return QR(uu._redirectPersistence)
        }

        function HK(uu) {
          return NR(xK, uu.config.apiKey, uu.name)
        }

        function dK(uu, Ru, yu) {
          return async function(uu, Ru, yu) {
            const Eu = nR(uu);
            ku(uu, Ru, uy), await Eu._initializationPromise;
            const Ku = yK(Eu, yu);
            return await TK(Ku, Eu), Ku._openRedirect(Eu, Ru, "signInViaRedirect")
          }(uu, Ru, yu)
        }

        function bK(uu, Ru, yu) {
          return async function(uu, Ru, yu) {
            const Ku = (0, Eu.D)(uu);
            ku(Ku.auth, Ru, uy), await Ku.auth._initializationPromise;
            const Qu = yK(Ku.auth, yu);
            await TK(Qu, Ku.auth);
            const mu = await AK(Ku);
            return Qu._openRedirect(Ku.auth, Ru, "reauthViaRedirect", mu)
          }(uu, Ru, yu)
        }

        function CK(uu, Ru, yu) {
          return async function(uu, Ru, yu) {
            const Ku = (0, Eu.D)(uu);
            ku(Ku.auth, Ru, uy), await Ku.auth._initializationPromise;
            const Qu = yK(Ku.auth, yu);
            await jy(!1, Ku, Ru.providerId), await TK(Qu, Ku.auth);
            const mu = await AK(Ku);
            return Qu._openRedirect(Ku.auth, Ru, "linkViaRedirect", mu)
          }(uu, Ru, yu)
        }
        async function kK(uu, Ru) {
          return await nR(uu)._initializationPromise, eK(uu, Ru, !1)
        }
        async function eK(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Eu = nR(uu),
            Ku = yK(Eu, Ru),
            Qu = new pK(Eu, Ku, yu),
            mu = await Qu.execute();
          return mu && !yu && (delete mu.user._redirectEventId, await Eu._persistUserIfCurrent(mu.user), await Eu._setRedirectUser(null, Ru)), mu
        }
        async function AK(uu) {
          const Ru = kE(`${uu.uid}:::`);
          return uu._redirectEventId = Ru, await uu.auth._setRedirectUser(uu), await uu.auth._persistUserIfCurrent(uu), Ru
        }
        class DK {
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
            let Ru = !1;
            return this.consumers.forEach((yu => {
              this.isEventForConsumer(uu, yu) && (Ru = !0, this.sendToConsumer(uu, yu), this.saveEventToCache(uu))
            })), this.hasHandledPotentialRedirect || ! function(uu) {
              switch (uu.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return IK(uu);
                default:
                  return !1
              }
            }(uu) || (this.hasHandledPotentialRedirect = !0, Ru || (this.queuedRedirectEvent = uu, Ru = !0)), Ru
          }
          sendToConsumer(uu, Ru) {
            var yu;
            if (uu.error && !IK(uu)) {
              const Eu = (null === (yu = uu.error.code) || void 0 === yu ? void 0 : yu.split("auth/")[1]) || "internal-error";
              Ru.onError(bu(this.auth, Eu))
            } else Ru.onAuthEvent(uu)
          }
          isEventForConsumer(uu, Ru) {
            const yu = null === Ru.eventId || !!uu.eventId && uu.eventId === Ru.eventId;
            return Ru.filter.includes(uu.type) && yu
          }
          hasEventBeenHandled(uu) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(MK(uu))
          }
          saveEventToCache(uu) {
            this.cachedEventUids.add(MK(uu)), this.lastProcessedEventTime = Date.now()
          }
        }

        function MK(uu) {
          return [uu.type, uu.eventId, uu.sessionId, uu.tenantId].filter((uu => uu)).join("-")
        }

        function IK(uu) {
          let {
            type: Ru,
            error: yu
          } = uu;
          return "unknown" === Ru && "auth/no-auth-event" === (null === yu || void 0 === yu ? void 0 : yu.code)
        }
        const GK = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          UK = /^https?/;
        async function nK(uu) {
          if (uu.config.emulator) return;
          const {
            authorizedDomains: Ru
          } = await async function(uu) {
            return Lu(uu, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(uu);
          for (const Eu of Ru) try {
            if (sK(Eu)) return
          } catch (yu) {}
          du(uu, "unauthorized-domain")
        }

        function sK(uu) {
          const Ru = Iu(),
            {
              protocol: yu,
              hostname: Eu
            } = new URL(Ru);
          if (uu.startsWith("chrome-extension://")) {
            const Ku = new URL(uu);
            return "" === Ku.hostname && "" === Eu ? "chrome-extension:" === yu && uu.replace("chrome-extension://", "") === Ru.replace("chrome-extension://", "") : "chrome-extension:" === yu && Ku.hostname === Eu
          }
          if (!UK.test(yu)) return !1;
          if (GK.test(uu)) return Eu === uu;
          const Ku = uu.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Ku + "|" + Ku + ")$", "i").test(Eu)
        }
        const tK = new nu(3e4, 6e4);

        function lK() {
          const uu = AE().___jsl;
          if (null === uu || void 0 === uu ? void 0 : uu.H)
            for (const Ru of Object.keys(uu.H))
              if (uu.H[Ru].r = uu.H[Ru].r || [], uu.H[Ru].L = uu.H[Ru].L || [], uu.H[Ru].r = [...uu.H[Ru].L], uu.CP)
                for (let yu = 0; yu < uu.CP.length; yu++) uu.CP[yu] = null
        }
        let gK = null;

        function cK(uu) {
          return gK = gK || function(uu) {
            return new Promise(((Ru, yu) => {
              var Eu, Ku, Qu;

              function mu() {
                lK(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Ru(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    lK(), yu(bu(uu, "network-request-failed"))
                  },
                  timeout: tK.get()
                })
              }
              if (null === (Ku = null === (Eu = AE().gapi) || void 0 === Eu ? void 0 : Eu.iframes) || void 0 === Ku ? void 0 : Ku.Iframe) Ru(gapi.iframes.getContext());
              else {
                if (!(null === (Qu = AE().gapi) || void 0 === Qu ? void 0 : Qu.load)) {
                  const Ru = DR("iframefcb");
                  return AE()[Ru] = () => {
                    gapi.load ? mu() : yu(bu(uu, "network-request-failed"))
                  }, AR(`https://apis.google.com/js/api.js?onload=${Ru}`).catch((uu => yu(uu)))
                }
                mu()
              }
            })).catch((uu => {
              throw gK = null, uu
            }))
          }(uu), gK
        }
        const LK = new nu(5e3, 15e3),
          zK = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          FK = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function wK(uu) {
          const Ru = uu.config;
          Au(Ru.authDomain, uu, "auth-domain-config-required");
          const yu = Ru.emulator ? su(Ru, "emulator/auth/iframe") : `https://${uu.config.authDomain}/__/auth/iframe`,
            Qu = {
              apiKey: Ru.apiKey,
              appName: uu.name,
              v: Ku.g
            },
            mu = FK.get(uu.config.apiHost);
          mu && (Qu.eid = mu);
          const Ju = uu._getFrameworks();
          return Ju.length && (Qu.fw = Ju.join(",")), `${yu}?${(0,Eu.$)(Qu).slice(1)}`
        }
        const ZK = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class hK {
          constructor(uu) {
            this.window = uu, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (uu) {}
          }
        }

        function PK(uu, Ru, yu) {
          let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const mu = Math.max((window.screen.availHeight - Qu) / 2, 0).toString(),
            Ju = Math.max((window.screen.availWidth - Ku) / 2, 0).toString();
          let Nu = "";
          const Xu = Object.assign(Object.assign({}, ZK), {
              width: Ku.toString(),
              height: Qu.toString(),
              top: mu,
              left: Ju
            }),
            Vu = (0, Eu.F)().toLowerCase();
          yu && (Nu = xR(Vu) ? "_blank" : yu), rR(Vu) && (Ru = Ru || "http://localhost", Xu.scrollbars = "yes");
          const ru = Object.entries(Xu).reduce(((uu, Ru) => {
            let [yu, Eu] = Ru;
            return `${uu}${yu}=${Eu},`
          }), "");
          if (function() {
              var uu;
              return jR(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.F)()) && !!(null === (uu = window.navigator) || void 0 === uu ? void 0 : uu.standalone)
            }(Vu) && "_self" !== Nu) return function(uu, Ru) {
            const yu = document.createElement("a");
            yu.href = uu, yu.target = Ru;
            const Eu = document.createEvent("MouseEvent");
            Eu.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), yu.dispatchEvent(Eu)
          }(Ru || "", Nu), new hK(null);
          const Bu = window.open(Ru || "", Nu, ru);
          Au(Bu, uu, "popup-blocked");
          try {
            Bu.focus()
          } catch (xu) {}
          return new hK(Bu)
        }
        const iK = "__/auth/handler",
          YK = "emulator/auth/handler",
          oK = encodeURIComponent("fac");
        async function qK(uu, Ru, yu, Qu, mu, Ju) {
            Au(uu.config.authDomain, uu, "auth-domain-config-required"), Au(uu.config.apiKey, uu, "invalid-api-key");
            const Nu = {
              apiKey: uu.config.apiKey,
              appName: uu.name,
              authType: yu,
              redirectUrl: Qu,
              v: Ku.g,
              eventId: mu
            };
            if (Ru instanceof uy) {
              Ru.setDefaultLanguage(uu.languageCode), Nu.providerId = Ru.providerId || "", (0, Eu.M)(Ru.getCustomParameters()) || (Nu.customParameters = JSON.stringify(Ru.getCustomParameters()));
              for (const [uu, Ru] of Object.entries(Ju || {})) Nu[uu] = Ru
            }
            if (Ru instanceof Ry) {
              const uu = Ru.getScopes().filter((uu => "" !== uu));
              uu.length > 0 && (Nu.scopes = uu.join(","))
            }
            uu.tenantId && (Nu.tid = uu.tenantId);
            const Xu = Nu;
            for (const Eu of Object.keys(Xu)) void 0 === Xu[Eu] && delete Xu[Eu];
            const Vu = await uu._getAppCheckToken(),
              ru = Vu ? `#${oK}=${encodeURIComponent(Vu)}` : "";
            return `${function(uu){let{config:Ru}=uu;if(!Ru.emulator)return`
            https: //${Ru.authDomain}/${iK}`;return su(Ru,YK)}(uu)}?${(0,Eu.$)(Xu).slice(1)}${ru}`}const OK="webStorageSupport";const vK=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bE,this._completeRedirectFn=eK,this._overrideRedirectResult=WK}async _openPopup(uu,Ru,yu,Eu){var Ku;Mu(null===(Ku=this.eventManagers[uu._key()])||void 0===Ku?void 0:Ku.manager,"_initialize() not called before _openPopup()");return PK(uu,await qK(uu,Ru,yu,Iu(),Eu),kE())}async _openRedirect(uu,Ru,yu,Eu){await this._originValidation(uu);return function(uu){AE().location.href=uu}(await qK(uu,Ru,yu,Iu(),Eu)),new Promise((()=>{}))}_initialize(uu){const Ru=uu._key();if(this.eventManagers[Ru]){const{manager:uu,promise:yu}=this.eventManagers[Ru];return uu?Promise.resolve(uu):(Mu(yu,"If manager is not set, promise should be"),yu)}const yu=this.initAndGetManager(uu);return this.eventManagers[Ru]={promise:yu},yu.catch((()=>{delete this.eventManagers[Ru]})),yu}async initAndGetManager(uu){const Ru=await async function(uu){const Ru=await cK(uu),yu=AE().gapi;return Au(yu,uu,"internal-error"),Ru.open({where:document.body,url:wK(uu),messageHandlersFilter:yu.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zK,dontclear:!0},(Ru=>new Promise((async(yu,Eu)=>{await Ru.restyle({setHideOnLeave:!1});const Ku=bu(uu,"network-request-failed"),Qu=AE().setTimeout((()=>{Eu(Ku)}),LK.get());function mu(){AE().clearTimeout(Qu),yu(Ru)}Ru.ping(mu).then(mu,(()=>{Eu(Ku)}))}))))}(uu),yu=new DK(uu);return Ru.register("authEvent",(Ru=>{Au(null===Ru||void 0===Ru?void 0:Ru.authEvent,uu,"invalid-auth-event");return{status:yu.onEvent(Ru.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[uu._key()]={manager:yu},this.iframes[uu._key()]=Ru,yu}_isIframeWebStorageSupported(uu,Ru){this.iframes[uu._key()].send(OK,{type:OK},(yu=>{var Eu;const Ku=null===(Eu=null===yu||void 0===yu?void 0:yu[0])||void 0===Eu?void 0:Eu[OK];void 0!==Ku&&Ru(!!Ku),du(uu,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(uu){const Ru=uu._key();return this.originValidationPromises[Ru]||(this.originValidationPromises[Ru]=nK(uu)),this.originValidationPromises[Ru]}get _shouldInitProactively(){return HR()||BR()||jR()}};class aK{constructor(uu){this.factorId=uu}_process(uu,Ru,yu){switch(Ru.type){case"enroll":return this._finalizeEnroll(uu,Ru.credential,yu);case"signin":return this._finalizeSignIn(uu,Ru.credential);default:return Du("unexpected MultiFactorSessionType")}}}class fK extends aK{constructor(uu){super("phone"),this.credential=uu}static _fromCredential(uu){return new fK(uu)}_finalizeEnroll(uu,Ru,yu){return function(uu,Ru){return Lu(uu,"POST","/v2/accounts/mfaEnrollment:finalize",cu(uu,Ru))}(uu,{idToken:Ru,displayName:yu,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(uu,Ru){return function(uu,Ru){return Lu(uu,"POST","/v2/accounts/mfaSignIn:finalize",cu(uu,Ru))}(uu,{mfaPendingCredential:Ru,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class uQ{constructor(){}static assertion(uu){return fK._fromCredential(uu)}}uQ.FACTOR_ID="phone";class RQ{static assertionForEnrollment(uu,Ru){return yQ._fromSecret(uu,Ru)}static assertionForSignIn(uu,Ru){return yQ._fromEnrollmentId(uu,Ru)}static async generateSecret(uu){const Ru=uu;Au("undefined"!==typeof Ru.auth,"internal-error");const yu=await(Eu=Ru.auth,Ku={idToken:Ru.credential,totpEnrollmentInfo:{}},Lu(Eu,"POST","/v2/accounts/mfaEnrollment:start",cu(Eu,Ku)));var Eu,Ku;return EQ._fromStartTotpMfaEnrollmentResponse(yu,Ru.auth)}}RQ.FACTOR_ID="totp";class yQ extends aK{constructor(uu,Ru,yu){super("totp"),this.otp=uu,this.enrollmentId=Ru,this.secret=yu}static _fromSecret(uu,Ru){return new yQ(Ru,void 0,uu)}static _fromEnrollmentId(uu,Ru){return new yQ(Ru,uu)}async _finalizeEnroll(uu,Ru,yu){return Au("undefined"!==typeof this.secret,uu,"argument-error"),function(uu,Ru){return Lu(uu,"POST","/v2/accounts/mfaEnrollment:finalize",cu(uu,Ru))}(uu,{idToken:Ru,displayName:yu,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(uu,Ru){Au(void 0!==this.enrollmentId&&void 0!==this.otp,uu,"argument-error");const yu={verificationCode:this.otp};return function(uu,Ru){return Lu(uu,"POST","/v2/accounts/mfaSignIn:finalize",cu(uu,Ru))}(uu,{mfaPendingCredential:Ru,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:yu})}}class EQ{constructor(uu,Ru,yu,Eu,Ku,Qu,mu){this.sessionInfo=Qu,this.auth=mu,this.secretKey=uu,this.hashingAlgorithm=Ru,this.codeLength=yu,this.codeIntervalSeconds=Eu,this.enrollmentCompletionDeadline=Ku}static _fromStartTotpMfaEnrollmentResponse(uu,Ru){return new EQ(uu.totpSessionInfo.sharedSecretKey,uu.totpSessionInfo.hashingAlgorithm,uu.totpSessionInfo.verificationCodeLength,uu.totpSessionInfo.periodSec,new Date(uu.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),uu.totpSessionInfo.sessionInfo,Ru)}_makeTotpVerificationInfo(uu){return{sessionInfo:this.sessionInfo,verificationCode:uu}}generateQrCodeUrl(uu,Ru){var yu;let Eu=!1;return(KQ(uu)||KQ(Ru))&&(Eu=!0),Eu&&(KQ(uu)&&(uu=(null===(yu=this.auth.currentUser)||void 0===yu?void 0:yu.email)||"unknownuser"),KQ(Ru)&&(Ru=this.auth.name)),`otpauth://totp/${Ru}:${uu}?secret=${this.secretKey}&issuer=${Ru}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function KQ(uu){return"undefined"===typeof uu||0===(null===uu||void 0===uu?void 0:uu.length)}var QQ="@firebase/auth",mQ="0.23.2";class JQ{constructor(uu){this.auth=uu,this.internalListeners=new Map}getUid(){var uu;return this.assertAuthConfigured(),(null===(uu=this.auth.currentUser)||void 0===uu?void 0:uu.uid)||null}async getToken(uu){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(uu)}}addAuthTokenListener(uu){if(this.assertAuthConfigured(),this.internalListeners.has(uu))return;const Ru=this.auth.onIdTokenChanged((Ru=>{uu((null===Ru||void 0===Ru?void 0:Ru.stsTokenManager.accessToken)||null)}));this.internalListeners.set(uu,Ru),this.updateProactiveRefresh()}removeAuthTokenListener(uu){this.assertAuthConfigured();const Ru=this.internalListeners.get(uu);Ru&&(this.internalListeners.delete(uu),Ru(),this.updateProactiveRefresh())}assertAuthConfigured(){Au(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const NQ=(0,Eu.A)("authIdTokenMaxAge")||300;let XQ=null;const VQ=uu=>async Ru=>{const yu=Ru&&await Ru.getIdTokenResult(),Eu=yu&&((new Date).getTime()-Date.parse(yu.issuedAtTime))/1e3;if(Eu&&Eu>NQ)return;const Ku=null===yu||void 0===yu?void 0:yu.token;XQ!==Ku&&(XQ=Ku,await fetch(uu,{method:Ku?"POST":"DELETE",headers:Ku?{Authorization:`Bearer ${Ku}`}:{}}))};function rQ(){let uu=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Ku.M)();const Ru=(0,Ku.z)(uu,"auth");if(Ru.isInitialized())return Ru.getImmediate();const yu=tR(uu,{popupRedirectResolver:vK,persistence:[cE,HE,bE]}),Qu=(0,Eu.A)("authTokenSyncURL");if(Qu){const uu=VQ(Qu);KE(yu,uu,(()=>uu(yu.currentUser))),EE(yu,(Ru=>uu(Ru)))}const mu=(0,Eu.z)("auth");return mu&&lR(yu,`http://${mu}`),yu}var BQ;BQ="Browser",(0,Ku.B)(new Ju.e("auth",((uu,Ru)=>{let{options:yu}=Ru;const Eu=uu.getProvider("app").getImmediate(),Ku=uu.getProvider("heartbeat"),Qu=uu.getProvider("app-check-internal"),{apiKey:mu,authDomain:Ju}=Eu.options;Au(mu&&!mu.includes(":"),"invalid-api-key",{appName:Eu.name});const Nu={apiKey:mu,authDomain:Ju,clientPlatform:BQ,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dR(BQ)},Xu=new UR(Eu,Ku,Qu,Nu);return function(uu,Ru){const yu=(null===Ru||void 0===Ru?void 0:Ru.persistence)||[],Eu=(Array.isArray(yu)?yu:[yu]).map(QR);(null===Ru||void 0===Ru?void 0:Ru.errorMap)&&uu._updateErrorMap(Ru.errorMap),uu._initializeWithPersistence(Eu,null===Ru||void 0===Ru?void 0:Ru.popupRedirectResolver)}(Xu,yu),Xu}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((uu,Ru,yu)=>{uu.getProvider("auth-internal").initialize()}))),(0,Ku.B)(new Ju.e("auth-internal",(uu=>(uu=>new JQ(uu))(nR(uu.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Ku.T)(QQ,mQ,function(uu){switch(uu){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(BQ)),(0,Ku.T)(QQ,mQ,"esm2017")}};Object.freeze(modules);for(const uu in modules)Object.freeze(modules[uu]);