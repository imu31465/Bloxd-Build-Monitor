/*! For license information please see qsji88.257.460bfae0.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
    39311: (TT, oT, IT) => {
        IT.r(oT), IT.d(oT, {
          ActionCodeOperation: () => LT,
          ActionCodeURL: () => Vo,
          AuthCredential: () => Ho,
          AuthErrorCodes: () => rT,
          EmailAuthCredential: () => po,
          EmailAuthProvider: () => oI,
          FacebookAuthProvider: () => kI,
          FactorId: () => BT,
          GithubAuthProvider: () => XI,
          GoogleAuthProvider: () => WI,
          OAuthCredential: () => yo,
          OAuthProvider: () => zI,
          OperationType: () => DT,
          PhoneAuthCredential: () => Po,
          PhoneAuthProvider: () => kz,
          PhoneMultiFactorGenerator: () => kk,
          ProviderId: () => FT,
          RecaptchaVerifier: () => di,
          SAMLAuthProvider: () => FI,
          SignInMethod: () => ST,
          TotpMultiFactorGenerator: () => Wk,
          TotpSecret: () => Bk,
          TwitterAuthProvider: () => SI,
          applyActionCode: () => aI,
          beforeAuthStateChanged: () => Wi,
          browserLocalPersistence: () => mi,
          browserPopupRedirectResolver: () => Ik,
          browserSessionPersistence: () => Ri,
          checkActionCode: () => YI,
          confirmPasswordReset: () => UI,
          connectAuthEmulator: () => Yo,
          createUserWithEmailAndPassword: () => OI,
          debugErrorMap: () => cT,
          deleteUser: () => Di,
          fetchSignInMethodsForEmail: () => lI,
          getAdditionalUserInfo: () => Ii,
          getAuth: () => Mk,
          getIdToken: () => GT,
          getIdTokenResult: () => pT,
          getMultiFactorResolver: () => ci,
          getRedirectResult: () => Ez,
          inMemoryPersistence: () => Xo,
          indexedDBLocalPersistence: () => qi,
          initializeAuth: () => ao,
          initializeRecaptchaConfig: () => zi,
          isSignInWithEmailLink: () => qI,
          linkWithCredential: () => RI,
          linkWithPhoneNumber: () => oz,
          linkWithPopup: () => Kz,
          linkWithRedirect: () => vz,
          multiFactor: () => ri,
          onAuthStateChanged: () => Xi,
          onIdTokenChanged: () => ki,
          parseActionCodeURL: () => TI,
          prodErrorMap: () => KT,
          reauthenticateWithCredential: () => uI,
          reauthenticateWithPhoneNumber: () => Iz,
          reauthenticateWithPopup: () => cz,
          reauthenticateWithRedirect: () => uz,
          reload: () => To,
          sendEmailVerification: () => sI,
          sendPasswordResetEmail: () => JI,
          sendSignInLinkToEmail: () => nI,
          setPersistence: () => ii,
          signInAnonymously: () => cI,
          signInWithCredential: () => eI,
          signInWithCustomToken: () => vI,
          signInWithEmailAndPassword: () => HI,
          signInWithEmailLink: () => ZI,
          signInWithPhoneNumber: () => Tz,
          signInWithPopup: () => xz,
          signInWithRedirect: () => Rz,
          signOut: () => Si,
          unlink: () => AI,
          updateCurrentUser: () => Fi,
          updateEmail: () => pI,
          updatePassword: () => bI,
          updatePhoneNumber: () => zz,
          updateProfile: () => GI,
          useDeviceLanguage: () => Bi,
          verifyBeforeUpdateEmail: () => tI,
          verifyPasswordResetCode: () => QI
        });
        var iT = IT(39301),
          zT = IT(39287);

        function kT(TT, oT) {
          var IT = {};
          for (var iT in TT) Object.prototype.hasOwnProperty.call(TT, iT) && oT.indexOf(iT) < 0 && (IT[iT] = TT[iT]);
          if (null != TT && "function" === typeof Object.getOwnPropertySymbols) {
            var zT = 0;
            for (iT = Object.getOwnPropertySymbols(TT); zT < iT.length; zT++) oT.indexOf(iT[zT]) < 0 && Object.prototype.propertyIsEnumerable.call(TT, iT[zT]) && (IT[iT[zT]] = TT[iT[zT]])
          }
          return IT
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var WT = IT(39305),
          XT = IT(39295);
        const BT = {
            PHONE: "phone",
            TOTP: "totp"
          },
          FT = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          ST = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          DT = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          LT = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function xT() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const cT = function() {
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
          KT = xT,
          MT = new iT.f("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          rT = {
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
          AT = new WT.d("@firebase/auth");

        function gT(TT) {
          if (AT.logLevel <= WT.b.ERROR) {
            for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
            AT.error(`Auth (${zT.d}): ${TT}`, ...IT)
          }
        }

        function hT(TT) {
          for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
          throw RT(TT, ...IT)
        }

        function wT(TT) {
          for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
          return RT(TT, ...IT)
        }

        function mT(TT, oT, IT) {
          const zT = Object.assign(Object.assign({}, KT()), {
            [oT]: IT
          });
          return new iT.f("auth", "Firebase", zT).create(oT, {
            appName: TT.name
          })
        }

        function eT(TT, oT, IT) {
          if (!(oT instanceof IT)) throw IT.name !== oT.constructor.name && hT(TT, "argument-error"), mT(TT, "argument-error", `Type of ${oT.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function RT(TT) {
          for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
          if ("string" !== typeof TT) {
            const oT = IT[0],
              iT = [...IT.slice(1)];
            return iT[0] && (iT[0].appName = TT.name), TT._errorFactory.create(oT, ...iT)
          }
          return MT.create(TT, ...IT)
        }

        function uT(TT, oT) {
          if (!TT) {
            for (var IT = arguments.length, iT = new Array(IT > 2 ? IT - 2 : 0), zT = 2; zT < IT; zT++) iT[zT - 2] = arguments[zT];
            throw RT(oT, ...iT)
          }
        }

        function vT(TT) {
          const oT = "INTERNAL ASSERTION FAILED: " + TT;
          throw gT(oT), new Error(oT)
        }

        function ET(TT, oT) {
          TT || vT(oT)
        }

        function fT() {
          var TT;
          return "undefined" !== typeof self && (null === (TT = self.location) || void 0 === TT ? void 0 : TT.href) || ""
        }

        function CT() {
          return "http:" === jT() || "https:" === jT()
        }

        function jT() {
          var TT;
          return "undefined" !== typeof self && (null === (TT = self.location) || void 0 === TT ? void 0 : TT.protocol) || null
        }
        class JT {
          constructor(TT, oT) {
            this.shortDelay = TT, this.longDelay = oT, ET(oT > TT, "Short delay should be less than long delay!"), this.isMobile = (0, iT.bb)() || (0, iT.eb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (CT() || (0, iT.T)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function UT(TT, oT) {
          ET(TT.emulator, "Emulator should always be set here");
          const {
            url: IT
          } = TT.emulator;
          return oT ? `${IT}${oT.startsWith("/")?oT.slice(1):oT}` : IT
        }
        class aT {
          static initialize(TT, oT, IT) {
            this.fetchImpl = TT, oT && (this.headersImpl = oT), IT && (this.responseImpl = IT)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void vT("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void vT("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void vT("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const YT = {
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
          QT = new JT(3e4, 6e4);

        function OT(TT, oT) {
          return TT.tenantId && !oT.tenantId ? Object.assign(Object.assign({}, oT), {
            tenantId: TT.tenantId
          }) : oT
        }
        async function HT(TT, oT, IT, zT) {
          return nT(TT, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let kT = {},
              WT = {};
            zT && ("GET" === oT ? WT = zT : kT = {
              body: JSON.stringify(zT)
            });
            const XT = (0, iT.ib)(Object.assign({
                key: TT.config.apiKey
              }, WT)).slice(1),
              BT = await TT._getAdditionalHeaders();
            return BT["Content-Type"] = "application/json", TT.languageCode && (BT["X-Firebase-Locale"] = TT.languageCode), aT.fetch()(ZT(TT, TT.config.apiHost, IT, XT), Object.assign({
              method: oT,
              headers: BT,
              referrerPolicy: "no-referrer"
            }, kT))
          }))
        }
        async function nT(TT, oT, IT) {
          TT._canInitEmulator = !1;
          const zT = Object.assign(Object.assign({}, YT), oT);
          try {
            const oT = new lT(TT),
              iT = await Promise.race([IT(), oT.promise]);
            oT.clearNetworkTimeout();
            const kT = await iT.json();
            if ("needConfirmation" in kT) throw sT(TT, "account-exists-with-different-credential", kT);
            if (iT.ok && !("errorMessage" in kT)) return kT;
            {
              const oT = iT.ok ? kT.errorMessage : kT.error.message,
                [IT, WT] = oT.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === IT) throw sT(TT, "credential-already-in-use", kT);
              if ("EMAIL_EXISTS" === IT) throw sT(TT, "email-already-in-use", kT);
              if ("USER_DISABLED" === IT) throw sT(TT, "user-disabled", kT);
              const XT = zT[IT] || IT.toLowerCase().replace(/[_\s]+/g, "-");
              if (WT) throw mT(TT, XT, WT);
              hT(TT, XT)
            }
          } catch (kT) {
            if (kT instanceof iT.h) throw kT;
            hT(TT, "network-request-failed", {
              message: String(kT)
            })
          }
        }
        async function qT(TT, oT, IT, iT) {
          let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const kT = await HT(TT, oT, IT, iT, zT);
          return "mfaPendingCredential" in kT && hT(TT, "multi-factor-auth-required", {
            _serverResponse: kT
          }), kT
        }

        function ZT(TT, oT, IT, iT) {
          const zT = `${oT}${IT}?${iT}`;
          return TT.config.emulator ? UT(TT.config, zT) : `${TT.config.apiScheme}://${zT}`
        }
        class lT {
          constructor(TT) {
            this.auth = TT, this.timer = null, this.promise = new Promise(((TT, oT) => {
              this.timer = setTimeout((() => oT(wT(this.auth, "network-request-failed"))), QT.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function sT(TT, oT, IT) {
          const iT = {
            appName: TT.name
          };
          IT.email && (iT.email = IT.email), IT.phoneNumber && (iT.phoneNumber = IT.phoneNumber);
          const zT = wT(TT, oT, iT);
          return zT.customData._tokenResponse = IT, zT
        }

        function tT(TT) {
          if (TT) try {
            const oT = new Date(Number(TT));
            if (!isNaN(oT.getTime())) return oT.toUTCString()
          } catch (oT) {}
        }

        function GT(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, iT.L)(TT).getIdToken(oT)
        }
        async function pT(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const IT = (0, iT.L)(TT),
            zT = await IT.getIdToken(oT),
            kT = yT(zT);
          uT(kT && kT.exp && kT.auth_time && kT.iat, IT.auth, "internal-error");
          const WT = "object" === typeof kT.firebase ? kT.firebase : void 0,
            XT = null === WT || void 0 === WT ? void 0 : WT.sign_in_provider;
          return {
            claims: kT,
            token: zT,
            authTime: tT(bT(kT.auth_time)),
            issuedAtTime: tT(bT(kT.iat)),
            expirationTime: tT(bT(kT.exp)),
            signInProvider: XT || null,
            signInSecondFactor: (null === WT || void 0 === WT ? void 0 : WT.sign_in_second_factor) || null
          }
        }

        function bT(TT) {
          return 1e3 * Number(TT)
        }

        function yT(TT) {
          const [oT, IT, zT] = TT.split(".");
          if (void 0 === oT || void 0 === IT || void 0 === zT) return gT("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const TT = (0, iT.n)(IT);
            return TT ? JSON.parse(TT) : (gT("Failed to decode base64 JWT payload"), null)
          } catch (kT) {
            return gT("Caught error parsing JWT payload as JSON", null === kT || void 0 === kT ? void 0 : kT.toString()), null
          }
        }
        async function NT(TT, oT) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return oT;
          try {
            return await oT
          } catch (IT) {
            throw IT instanceof iT.h && function(TT) {
              let {
                code: oT
              } = TT;
              return "auth/user-disabled" === oT || "auth/user-token-expired" === oT
            }(IT) && TT.auth.currentUser === TT && await TT.auth.signOut(), IT
          }
        }
        class PT {
          constructor(TT) {
            this.user = TT, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(TT) {
            var oT;
            if (TT) {
              const TT = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), TT
            } {
              this.errorBackoff = 3e4;
              const TT = (null !== (oT = this.user.stsTokenManager.expirationTime) && void 0 !== oT ? oT : 0) - Date.now() - 3e5;
              return Math.max(0, TT)
            }
          }
          schedule() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const oT = this.getInterval(TT);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), oT)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (TT) {
              return void("auth/network-request-failed" === (null === TT || void 0 === TT ? void 0 : TT.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class dT {
          constructor(TT, oT) {
            this.createdAt = TT, this.lastLoginAt = oT, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = tT(this.lastLoginAt), this.creationTime = tT(this.createdAt)
          }
          _copy(TT) {
            this.createdAt = TT.createdAt, this.lastLoginAt = TT.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function VT(TT) {
          var oT;
          const IT = TT.auth,
            iT = await TT.getIdToken(),
            zT = await NT(TT, async function(TT, oT) {
              return HT(TT, "POST", "/v1/accounts:lookup", oT)
            }(IT, {
              idToken: iT
            }));
          uT(null === zT || void 0 === zT ? void 0 : zT.users.length, IT, "internal-error");
          const WT = zT.users[0];
          TT._notifyReloadListener(WT);
          const XT = (null === (oT = WT.providerUserInfo) || void 0 === oT ? void 0 : oT.length) ? WT.providerUserInfo.map((TT => {
            var {
              providerId: oT
            } = TT, IT = kT(TT, ["providerId"]);
            return {
              providerId: oT,
              uid: IT.rawId || "",
              displayName: IT.displayName || null,
              email: IT.email || null,
              phoneNumber: IT.phoneNumber || null,
              photoURL: IT.photoUrl || null
            }
          })) : [];
          const BT = (FT = TT.providerData, ST = XT, [...FT.filter((TT => !ST.some((oT => oT.providerId === TT.providerId)))), ...ST]);
          var FT, ST;
          const DT = TT.isAnonymous,
            LT = !(TT.email && WT.passwordHash) && !(null === BT || void 0 === BT ? void 0 : BT.length),
            xT = !!DT && LT,
            cT = {
              uid: WT.localId,
              displayName: WT.displayName || null,
              photoURL: WT.photoUrl || null,
              email: WT.email || null,
              emailVerified: WT.emailVerified || !1,
              phoneNumber: WT.phoneNumber || null,
              tenantId: WT.tenantId || null,
              providerData: BT,
              metadata: new dT(WT.createdAt, WT.lastLoginAt),
              isAnonymous: xT
            };
          Object.assign(TT, cT)
        }
        async function To(TT) {
          const oT = (0, iT.L)(TT);
          await VT(oT), await oT.auth._persistUserIfCurrent(oT), oT.auth._notifyListenersIfCurrent(oT)
        }
        class oo {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(TT) {
            uT(TT.idToken, "internal-error"), uT("undefined" !== typeof TT.idToken, "internal-error"), uT("undefined" !== typeof TT.refreshToken, "internal-error");
            const oT = "expiresIn" in TT && "undefined" !== typeof TT.expiresIn ? Number(TT.expiresIn) : function(TT) {
              const oT = yT(TT);
              return uT(oT, "internal-error"), uT("undefined" !== typeof oT.exp, "internal-error"), uT("undefined" !== typeof oT.iat, "internal-error"), Number(oT.exp) - Number(oT.iat)
            }(TT.idToken);
            this.updateTokensAndExpiration(TT.idToken, TT.refreshToken, oT)
          }
          async getToken(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return uT(!this.accessToken || this.refreshToken, TT, "user-token-expired"), oT || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(TT, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(TT, oT) {
            const {
              accessToken: IT,
              refreshToken: zT,
              expiresIn: kT
            } = await async function(TT, oT) {
              const IT = await nT(TT, {}, (async () => {
                const IT = (0, iT.ib)({
                    grant_type: "refresh_token",
                    refresh_token: oT
                  }).slice(1),
                  {
                    tokenApiHost: zT,
                    apiKey: kT
                  } = TT.config,
                  WT = ZT(TT, zT, "/v1/token", `key=${kT}`),
                  XT = await TT._getAdditionalHeaders();
                return XT["Content-Type"] = "application/x-www-form-urlencoded", aT.fetch()(WT, {
                  method: "POST",
                  headers: XT,
                  body: IT
                })
              }));
              return {
                accessToken: IT.access_token,
                expiresIn: IT.expires_in,
                refreshToken: IT.refresh_token
              }
            }(TT, oT);
            this.updateTokensAndExpiration(IT, zT, Number(kT))
          }
          updateTokensAndExpiration(TT, oT, IT) {
            this.refreshToken = oT || null, this.accessToken = TT || null, this.expirationTime = Date.now() + 1e3 * IT
          }
          static fromJSON(TT, oT) {
            const {
              refreshToken: IT,
              accessToken: iT,
              expirationTime: zT
            } = oT, kT = new oo;
            return IT && (uT("string" === typeof IT, "internal-error", {
              appName: TT
            }), kT.refreshToken = IT), iT && (uT("string" === typeof iT, "internal-error", {
              appName: TT
            }), kT.accessToken = iT), zT && (uT("number" === typeof zT, "internal-error", {
              appName: TT
            }), kT.expirationTime = zT), kT
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(TT) {
            this.accessToken = TT.accessToken, this.refreshToken = TT.refreshToken, this.expirationTime = TT.expirationTime
          }
          _clone() {
            return Object.assign(new oo, this.toJSON())
          }
          _performRefresh() {
            return vT("not implemented")
          }
        }

        function Io(TT, oT) {
          uT("string" === typeof TT || "undefined" === typeof TT, "internal-error", {
            appName: oT
          })
        }
        class io {
          constructor(TT) {
            var {
              uid: oT,
              auth: IT,
              stsTokenManager: iT
            } = TT, zT = kT(TT, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new PT(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = oT, this.auth = IT, this.stsTokenManager = iT, this.accessToken = iT.accessToken, this.displayName = zT.displayName || null, this.email = zT.email || null, this.emailVerified = zT.emailVerified || !1, this.phoneNumber = zT.phoneNumber || null, this.photoURL = zT.photoURL || null, this.isAnonymous = zT.isAnonymous || !1, this.tenantId = zT.tenantId || null, this.providerData = zT.providerData ? [...zT.providerData] : [], this.metadata = new dT(zT.createdAt || void 0, zT.lastLoginAt || void 0)
          }
          async getIdToken(TT) {
            const oT = await NT(this, this.stsTokenManager.getToken(this.auth, TT));
            return uT(oT, this.auth, "internal-error"), this.accessToken !== oT && (this.accessToken = oT, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), oT
          }
          getIdTokenResult(TT) {
            return pT(this, TT)
          }
          reload() {
            return To(this)
          }
          _assign(TT) {
            this !== TT && (uT(this.uid === TT.uid, this.auth, "internal-error"), this.displayName = TT.displayName, this.photoURL = TT.photoURL, this.email = TT.email, this.emailVerified = TT.emailVerified, this.phoneNumber = TT.phoneNumber, this.isAnonymous = TT.isAnonymous, this.tenantId = TT.tenantId, this.providerData = TT.providerData.map((TT => Object.assign({}, TT))), this.metadata._copy(TT.metadata), this.stsTokenManager._assign(TT.stsTokenManager))
          }
          _clone(TT) {
            const oT = new io(Object.assign(Object.assign({}, this), {
              auth: TT,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return oT.metadata._copy(this.metadata), oT
          }
          _onReload(TT) {
            uT(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = TT, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(TT) {
            this.reloadListener ? this.reloadListener(TT) : this.reloadUserInfo = TT
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              IT = !1;
            TT.idToken && TT.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(TT), IT = !0), oT && await VT(this), await this.auth._persistUserIfCurrent(this), IT && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const TT = await this.getIdToken();
            return await NT(this, async function(TT, oT) {
              return HT(TT, "POST", "/v1/accounts:delete", oT)
            }(this.auth, {
              idToken: TT
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
              providerData: this.providerData.map((TT => Object.assign({}, TT))),
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
          static _fromJSON(TT, oT) {
            var IT, iT, zT, kT, WT, XT, BT, FT;
            const ST = null !== (IT = oT.displayName) && void 0 !== IT ? IT : void 0,
              DT = null !== (iT = oT.email) && void 0 !== iT ? iT : void 0,
              LT = null !== (zT = oT.phoneNumber) && void 0 !== zT ? zT : void 0,
              xT = null !== (kT = oT.photoURL) && void 0 !== kT ? kT : void 0,
              cT = null !== (WT = oT.tenantId) && void 0 !== WT ? WT : void 0,
              KT = null !== (XT = oT._redirectEventId) && void 0 !== XT ? XT : void 0,
              MT = null !== (BT = oT.createdAt) && void 0 !== BT ? BT : void 0,
              rT = null !== (FT = oT.lastLoginAt) && void 0 !== FT ? FT : void 0,
              {
                uid: AT,
                emailVerified: gT,
                isAnonymous: hT,
                providerData: wT,
                stsTokenManager: mT
              } = oT;
            uT(AT && mT, TT, "internal-error");
            const eT = oo.fromJSON(this.name, mT);
            uT("string" === typeof AT, TT, "internal-error"), Io(ST, TT.name), Io(DT, TT.name), uT("boolean" === typeof gT, TT, "internal-error"), uT("boolean" === typeof hT, TT, "internal-error"), Io(LT, TT.name), Io(xT, TT.name), Io(cT, TT.name), Io(KT, TT.name), Io(MT, TT.name), Io(rT, TT.name);
            const RT = new io({
              uid: AT,
              auth: TT,
              email: DT,
              emailVerified: gT,
              displayName: ST,
              isAnonymous: hT,
              photoURL: xT,
              phoneNumber: LT,
              tenantId: cT,
              stsTokenManager: eT,
              createdAt: MT,
              lastLoginAt: rT
            });
            return wT && Array.isArray(wT) && (RT.providerData = wT.map((TT => Object.assign({}, TT)))), KT && (RT._redirectEventId = KT), RT
          }
          static async _fromIdTokenResponse(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const iT = new oo;
            iT.updateFromServerResponse(oT);
            const zT = new io({
              uid: oT.localId,
              auth: TT,
              stsTokenManager: iT,
              isAnonymous: IT
            });
            return await VT(zT), zT
          }
        }
        const zo = new Map;

        function ko(TT) {
          ET(TT instanceof Function, "Expected a class definition");
          let oT = zo.get(TT);
          return oT ? (ET(oT instanceof TT, "Instance stored in cache mismatched with class"), oT) : (oT = new TT, zo.set(TT, oT), oT)
        }
        class Wo {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(TT, oT) {
            this.storage[TT] = oT
          }
          async _get(TT) {
            const oT = this.storage[TT];
            return void 0 === oT ? null : oT
          }
          async _remove(TT) {
            delete this.storage[TT]
          }
          _addListener(TT, oT) {}
          _removeListener(TT, oT) {}
        }
        Wo.type = "NONE";
        const Xo = Wo;

        function Bo(TT, oT, IT) {
          return `firebase:${TT}:${oT}:${IT}`
        }
        class Fo {
          constructor(TT, oT, IT) {
            this.persistence = TT, this.auth = oT, this.userKey = IT;
            const {
              config: iT,
              name: zT
            } = this.auth;
            this.fullUserKey = Bo(this.userKey, iT.apiKey, zT), this.fullPersistenceKey = Bo("persistence", iT.apiKey, zT), this.boundEventHandler = oT._onStorageEvent.bind(oT), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(TT) {
            return this.persistence._set(this.fullUserKey, TT.toJSON())
          }
          async getCurrentUser() {
            const TT = await this.persistence._get(this.fullUserKey);
            return TT ? io._fromJSON(this.auth, TT) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(TT) {
            if (this.persistence === TT) return;
            const oT = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = TT, oT ? this.setCurrentUser(oT) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!oT.length) return new Fo(ko(Xo), TT, IT);
            const iT = (await Promise.all(oT.map((async TT => {
              if (await TT._isAvailable()) return TT
            })))).filter((TT => TT));
            let zT = iT[0] || ko(Xo);
            const kT = Bo(IT, TT.config.apiKey, TT.name);
            let WT = null;
            for (const FT of oT) try {
              const oT = await FT._get(kT);
              if (oT) {
                const IT = io._fromJSON(TT, oT);
                FT !== zT && (WT = IT), zT = FT;
                break
              }
            } catch (BT) {}
            const XT = iT.filter((TT => TT._shouldAllowMigration));
            return zT._shouldAllowMigration && XT.length ? (zT = XT[0], WT && await zT._set(kT, WT.toJSON()), await Promise.all(oT.map((async TT => {
              if (TT !== zT) try {
                await TT._remove(kT)
              } catch (BT) {}
            }))), new Fo(zT, TT, IT)) : new Fo(zT, TT, IT)
          }
        }

        function So(TT) {
          const oT = TT.toLowerCase();
          if (oT.includes("opera/") || oT.includes("opr/") || oT.includes("opios/")) return "Opera";
          if (co(oT)) return "IEMobile";
          if (oT.includes("msie") || oT.includes("trident/")) return "IE";
          if (oT.includes("edge/")) return "Edge";
          if (Do(oT)) return "Firefox";
          if (oT.includes("silk/")) return "Silk";
          if (Mo(oT)) return "Blackberry";
          if (ro(oT)) return "Webos";
          if (Lo(oT)) return "Safari";
          if ((oT.includes("chrome/") || xo(oT)) && !oT.includes("edge/")) return "Chrome";
          if (Ko(oT)) return "Android";
          {
            const oT = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              IT = TT.match(oT);
            if (2 === (null === IT || void 0 === IT ? void 0 : IT.length)) return IT[1]
          }
          return "Other"
        }

        function Do() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)();
          return /firefox\//i.test(TT)
        }

        function Lo() {
          const TT = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)()).toLowerCase();
          return TT.includes("safari/") && !TT.includes("chrome/") && !TT.includes("crios/") && !TT.includes("android")
        }

        function xo() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)();
          return /crios\//i.test(TT)
        }

        function co() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)();
          return /iemobile/i.test(TT)
        }

        function Ko() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)();
          return /android/i.test(TT)
        }

        function Mo() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)();
          return /blackberry/i.test(TT)
        }

        function ro() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)();
          return /webos/i.test(TT)
        }

        function Ao() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)();
          return /iphone|ipad|ipod/i.test(TT) || /macintosh/i.test(TT) && /mobile/i.test(TT)
        }

        function go() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)();
          return Ao(TT) || Ko(TT) || ro(TT) || Mo(TT) || /windows phone/i.test(TT) || co(TT)
        }

        function ho(TT) {
          let oT, IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (TT) {
            case "Browser":
              oT = So((0, iT.P)());
              break;
            case "Worker":
              oT = `${So((0,iT.P)())}-${TT}`;
              break;
            default:
              oT = TT
          }
          const kT = IT.length ? IT.join(",") : "FirebaseCore-web";
          return `${oT}/JsCore/${zT.d}/${kT}`
        }
        async function wo(TT, oT) {
          return HT(TT, "GET", "/v2/recaptchaConfig", OT(TT, oT))
        }

        function mo(TT) {
          return void 0 !== TT && void 0 !== TT.getResponse
        }

        function eo(TT) {
          return void 0 !== TT && void 0 !== TT.enterprise
        }
        class Ro {
          constructor(TT) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === TT.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = TT.recaptchaKey.split("/")[3], this.emailPasswordEnabled = TT.recaptchaEnforcementState.some((TT => "EMAIL_PASSWORD_PROVIDER" === TT.provider && "OFF" !== TT.enforcementState))
          }
        }

        function uo(TT) {
          return new Promise(((oT, IT) => {
            const iT = document.createElement("script");
            iT.setAttribute("src", TT), iT.onload = oT, iT.onerror = TT => {
                const oT = wT("internal-error");
                oT.customData = TT, IT(oT)
              }, iT.type = "text/javascript", iT.charset = "UTF-8",
              function() {
                var TT, oT;
                return null !== (oT = null === (TT = document.getElementsByTagName("head")) || void 0 === TT ? void 0 : TT[0]) && void 0 !== oT ? oT : document
              }().appendChild(iT)
          }))
        }

        function vo(TT) {
          return `__${TT}${Math.floor(1e6*Math.random())}`
        }
        class Eo {
          constructor(TT) {
            this.type = "recaptcha-enterprise", this.auth = Jo(TT)
          }
          async verify() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function IT(oT, IT, iT) {
              const zT = window.grecaptcha;
              eo(zT) ? zT.enterprise.ready((() => {
                zT.enterprise.execute(oT, {
                  action: TT
                }).then((TT => {
                  IT(TT)
                })).catch((() => {
                  IT("NO_RECAPTCHA")
                }))
              })) : iT(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((TT, iT) => {
              (async function(TT) {
                if (!oT) {
                  if (null == TT.tenantId && null != TT._agentRecaptchaConfig) return TT._agentRecaptchaConfig.siteKey;
                  if (null != TT.tenantId && void 0 !== TT._tenantRecaptchaConfigs[TT.tenantId]) return TT._tenantRecaptchaConfigs[TT.tenantId].siteKey
                }
                return new Promise((async (oT, IT) => {
                  wo(TT, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((iT => {
                    if (void 0 !== iT.recaptchaKey) {
                      const IT = new Ro(iT);
                      return null == TT.tenantId ? TT._agentRecaptchaConfig = IT : TT._tenantRecaptchaConfigs[TT.tenantId] = IT, oT(IT.siteKey)
                    }
                    IT(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((TT => {
                    IT(TT)
                  }))
                }))
              })(this.auth).then((zT => {
                if (!oT && eo(window.grecaptcha)) IT(zT, TT, iT);
                else {
                  if ("undefined" === typeof window) return void iT(new Error("RecaptchaVerifier is only supported in browser"));
                  uo("https://www.google.com/recaptcha/enterprise.js?render=" + zT).then((() => {
                    IT(zT, TT, iT)
                  })).catch((TT => {
                    iT(TT)
                  }))
                }
              })).catch((TT => {
                iT(TT)
              }))
            }))
          }
        }
        async function fo(TT, oT, IT) {
          let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const zT = new Eo(TT);
          let kT;
          try {
            kT = await zT.verify(IT)
          } catch (XT) {
            kT = await zT.verify(IT, !0)
          }
          const WT = Object.assign({}, oT);
          return iT ? Object.assign(WT, {
            captchaResp: kT
          }) : Object.assign(WT, {
            captchaResponse: kT
          }), Object.assign(WT, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(WT, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), WT
        }
        class Co {
          constructor(TT) {
            this.auth = TT, this.queue = []
          }
          pushCallback(TT, oT) {
            const IT = oT => new Promise(((IT, iT) => {
              try {
                IT(TT(oT))
              } catch (zT) {
                iT(zT)
              }
            }));
            IT.onAbort = oT, this.queue.push(IT);
            const iT = this.queue.length - 1;
            return () => {
              this.queue[iT] = () => Promise.resolve()
            }
          }
          async runMiddleware(TT) {
            if (this.auth.currentUser === TT) return;
            const oT = [];
            try {
              for (const IT of this.queue) await IT(TT), IT.onAbort && oT.push(IT.onAbort)
            } catch (IT) {
              oT.reverse();
              for (const TT of oT) try {
                TT()
              } catch (iT) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === IT || void 0 === IT ? void 0 : IT.message
              })
            }
          }
        }
        class jo {
          constructor(TT, oT, IT, iT) {
            this.app = TT, this.heartbeatServiceProvider = oT, this.appCheckServiceProvider = IT, this.config = iT, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Uo(this), this.idTokenSubscription = new Uo(this), this.beforeStateQueue = new Co(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = MT, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = TT.name, this.clientVersion = iT.sdkClientVersion
          }
          _initializeWithPersistence(TT, oT) {
            return oT && (this._popupRedirectResolver = ko(oT)), this._initializationPromise = this.queue((async () => {
              var IT, iT;
              if (!this._deleted && (this.persistenceManager = await Fo.create(this, TT), !this._deleted)) {
                if (null === (IT = this._popupRedirectResolver) || void 0 === IT ? void 0 : IT._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (zT) {}
                await this.initializeCurrentUser(oT), this.lastNotifiedUid = (null === (iT = this.currentUser) || void 0 === iT ? void 0 : iT.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const TT = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || TT ? this.currentUser && TT && this.currentUser.uid === TT.uid ? (this._currentUser._assign(TT), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(TT, !0) : void 0
          }
          async initializeCurrentUser(TT) {
            var oT;
            const IT = await this.assertedPersistence.getCurrentUser();
            let iT = IT,
              zT = !1;
            if (TT && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const IT = null === (oT = this.redirectUser) || void 0 === oT ? void 0 : oT._redirectEventId,
                kT = null === iT || void 0 === iT ? void 0 : iT._redirectEventId,
                WT = await this.tryRedirectSignIn(TT);
              IT && IT !== kT || !(null === WT || void 0 === WT ? void 0 : WT.user) || (iT = WT.user, zT = !0)
            }
            if (!iT) return this.directlySetCurrentUser(null);
            if (!iT._redirectEventId) {
              if (zT) try {
                await this.beforeStateQueue.runMiddleware(iT)
              } catch (kT) {
                iT = IT, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(kT)))
              }
              return iT ? this.reloadAndSetCurrentUserOrClear(iT) : this.directlySetCurrentUser(null)
            }
            return uT(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === iT._redirectEventId ? this.directlySetCurrentUser(iT) : this.reloadAndSetCurrentUserOrClear(iT)
          }
          async tryRedirectSignIn(TT) {
            let oT = null;
            try {
              oT = await this._popupRedirectResolver._completeRedirectFn(this, TT, !0)
            } catch (IT) {
              await this._setRedirectUser(null)
            }
            return oT
          }
          async reloadAndSetCurrentUserOrClear(TT) {
            try {
              await VT(TT)
            } catch (oT) {
              if ("auth/network-request-failed" !== (null === oT || void 0 === oT ? void 0 : oT.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(TT)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const TT = navigator;
              return TT.languages && TT.languages[0] || TT.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(TT) {
            const oT = TT ? (0, iT.L)(TT) : null;
            return oT && uT(oT.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(oT && oT._clone(this))
          }
          async _updateCurrentUser(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return TT && uT(this.tenantId === TT.tenantId, this, "tenant-id-mismatch"), oT || await this.beforeStateQueue.runMiddleware(TT), this.queue((async () => {
              await this.directlySetCurrentUser(TT), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(TT) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(ko(TT))
            }))
          }
          async initializeRecaptchaConfig() {
            const TT = await wo(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              oT = new Ro(TT);
            if (null == this.tenantId ? this._agentRecaptchaConfig = oT : this._tenantRecaptchaConfigs[this.tenantId] = oT, oT.emailPasswordEnabled) {
              new Eo(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(TT) {
            this._errorFactory = new iT.f("auth", "Firebase", TT())
          }
          onAuthStateChanged(TT, oT, IT) {
            return this.registerStateListener(this.authStateSubscription, TT, oT, IT)
          }
          beforeAuthStateChanged(TT, oT) {
            return this.beforeStateQueue.pushCallback(TT, oT)
          }
          onIdTokenChanged(TT, oT, IT) {
            return this.registerStateListener(this.idTokenSubscription, TT, oT, IT)
          }
          toJSON() {
            var TT;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (TT = this._currentUser) || void 0 === TT ? void 0 : TT.toJSON()
            }
          }
          async _setRedirectUser(TT, oT) {
            const IT = await this.getOrInitRedirectPersistenceManager(oT);
            return null === TT ? IT.removeCurrentUser() : IT.setCurrentUser(TT)
          }
          async getOrInitRedirectPersistenceManager(TT) {
            if (!this.redirectPersistenceManager) {
              const oT = TT && ko(TT) || this._popupRedirectResolver;
              uT(oT, this, "argument-error"), this.redirectPersistenceManager = await Fo.create(this, [ko(oT._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(TT) {
            var oT, IT;
            return this._isInitialized && await this.queue((async () => {})), (null === (oT = this._currentUser) || void 0 === oT ? void 0 : oT._redirectEventId) === TT ? this._currentUser : (null === (IT = this.redirectUser) || void 0 === IT ? void 0 : IT._redirectEventId) === TT ? this.redirectUser : null
          }
          async _persistUserIfCurrent(TT) {
            if (TT === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(TT)))
          }
          _notifyListenersIfCurrent(TT) {
            TT === this.currentUser && this.notifyAuthListeners()
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
            var TT, oT;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const IT = null !== (oT = null === (TT = this.currentUser) || void 0 === TT ? void 0 : TT.uid) && void 0 !== oT ? oT : null;
            this.lastNotifiedUid !== IT && (this.lastNotifiedUid = IT, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(TT, oT, IT, iT) {
            if (this._deleted) return () => {};
            const zT = "function" === typeof oT ? oT : oT.next.bind(oT),
              kT = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return uT(kT, this, "internal-error"), kT.then((() => zT(this.currentUser))), "function" === typeof oT ? TT.addObserver(oT, IT, iT) : TT.addObserver(oT)
          }
          async directlySetCurrentUser(TT) {
            this.currentUser && this.currentUser !== TT && this._currentUser._stopProactiveRefresh(), TT && this.isProactiveRefreshEnabled && TT._startProactiveRefresh(), this.currentUser = TT, TT ? await this.assertedPersistence.setCurrentUser(TT) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(TT) {
            return this.operations = this.operations.then(TT, TT), this.operations
          }
          get assertedPersistence() {
            return uT(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(TT) {
            TT && !this.frameworks.includes(TT) && (this.frameworks.push(TT), this.frameworks.sort(), this.clientVersion = ho(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var TT;
            const oT = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (oT["X-Firebase-gmpid"] = this.app.options.appId);
            const IT = await (null === (TT = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === TT ? void 0 : TT.getHeartbeatsHeader());
            IT && (oT["X-Firebase-Client"] = IT);
            const iT = await this._getAppCheckToken();
            return iT && (oT["X-Firebase-AppCheck"] = iT), oT
          }
          async _getAppCheckToken() {
            var TT;
            const oT = await (null === (TT = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === TT ? void 0 : TT.getToken());
            return (null === oT || void 0 === oT ? void 0 : oT.error) && function(TT) {
              if (AT.logLevel <= WT.b.WARN) {
                for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
                AT.warn(`Auth (${zT.d}): ${TT}`, ...IT)
              }
            }(`Error while retrieving App Check token: ${oT.error}`), null === oT || void 0 === oT ? void 0 : oT.token
          }
        }

        function Jo(TT) {
          return (0, iT.L)(TT)
        }
        class Uo {
          constructor(TT) {
            this.auth = TT, this.observer = null, this.addObserver = (0, iT.w)((TT => this.observer = TT))
          }
          get next() {
            return uT(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function ao(TT, oT) {
          const IT = (0, zT.t)(TT, "auth");
          if (IT.isInitialized()) {
            const TT = IT.getImmediate(),
              zT = IT.getOptions();
            if ((0, iT.x)(zT, null !== oT && void 0 !== oT ? oT : {})) return TT;
            hT(TT, "already-initialized")
          }
          return IT.initialize({
            options: oT
          })
        }

        function Yo(TT, oT, IT) {
          const iT = Jo(TT);
          uT(iT._canInitEmulator, iT, "emulator-config-failed"), uT(/^https?:\/\//.test(oT), iT, "invalid-emulator-scheme");
          const zT = !!(null === IT || void 0 === IT ? void 0 : IT.disableWarnings),
            kT = Qo(oT),
            {
              host: WT,
              port: XT
            } = function(TT) {
              const oT = Qo(TT),
                IT = /(\/\/)?([^?#/]+)/.exec(TT.substr(oT.length));
              if (!IT) return {
                host: "",
                port: null
              };
              const iT = IT[2].split("@").pop() || "",
                zT = /^(\[[^\]]+\])(:|$)/.exec(iT);
              if (zT) {
                const TT = zT[1];
                return {
                  host: TT,
                  port: Oo(iT.substr(TT.length + 1))
                }
              } {
                const [TT, oT] = iT.split(":");
                return {
                  host: TT,
                  port: Oo(oT)
                }
              }
            }(oT),
            BT = null === XT ? "" : `:${XT}`;
          iT.config.emulator = {
            url: `${kT}//${WT}${BT}/`
          }, iT.settings.appVerificationDisabledForTesting = !0, iT.emulatorConfig = Object.freeze({
            host: WT,
            port: XT,
            protocol: kT.replace(":", ""),
            options: Object.freeze({
              disableWarnings: zT
            })
          }), zT || function() {
            function TT() {
              const TT = document.createElement("p"),
                oT = TT.style;
              TT.innerText = "Running in emulator mode. Do not use with production credentials.", oT.position = "fixed", oT.width = "100%", oT.backgroundColor = "#ffffff", oT.border = ".1em solid #000000", oT.color = "#b50000", oT.bottom = "0px", oT.left = "0px", oT.margin = "0px", oT.zIndex = "10000", oT.textAlign = "center", TT.classList.add("firebase-emulator-warning"), document.body.appendChild(TT)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", TT) : TT())
          }()
        }

        function Qo(TT) {
          const oT = TT.indexOf(":");
          return oT < 0 ? "" : TT.substr(0, oT + 1)
        }

        function Oo(TT) {
          if (!TT) return null;
          const oT = Number(TT);
          return isNaN(oT) ? null : oT
        }
        class Ho {
          constructor(TT, oT) {
            this.providerId = TT, this.signInMethod = oT
          }
          toJSON() {
            return vT("not implemented")
          }
          _getIdTokenResponse(TT) {
            return vT("not implemented")
          }
          _linkToIdToken(TT, oT) {
            return vT("not implemented")
          }
          _getReauthenticationResolver(TT) {
            return vT("not implemented")
          }
        }
        async function no(TT, oT) {
          return HT(TT, "POST", "/v1/accounts:resetPassword", OT(TT, oT))
        }
        async function qo(TT, oT) {
          return HT(TT, "POST", "/v1/accounts:update", oT)
        }
        async function Zo(TT, oT) {
          return qT(TT, "POST", "/v1/accounts:signInWithPassword", OT(TT, oT))
        }
        async function so(TT, oT) {
          return HT(TT, "POST", "/v1/accounts:sendOobCode", OT(TT, oT))
        }
        async function to(TT, oT) {
          return so(TT, oT)
        }
        async function Go(TT, oT) {
          return so(TT, oT)
        }
        class po extends Ho {
          constructor(TT, oT, IT) {
            let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", IT), this._email = TT, this._password = oT, this._tenantId = iT
          }
          static _fromEmailAndPassword(TT, oT) {
            return new po(TT, oT, "password")
          }
          static _fromEmailAndCode(TT, oT) {
            return new po(TT, oT, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(TT) {
            const oT = "string" === typeof TT ? JSON.parse(TT) : TT;
            if ((null === oT || void 0 === oT ? void 0 : oT.email) && (null === oT || void 0 === oT ? void 0 : oT.password)) {
              if ("password" === oT.signInMethod) return this._fromEmailAndPassword(oT.email, oT.password);
              if ("emailLink" === oT.signInMethod) return this._fromEmailAndCode(oT.email, oT.password, oT.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(TT) {
            var oT;
            switch (this.signInMethod) {
              case "password":
                const IT = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (oT = TT._getRecaptchaConfig()) || void 0 === oT ? void 0 : oT.emailPasswordEnabled) {
                  const oT = await fo(TT, IT, "signInWithPassword");
                  return Zo(TT, oT)
                }
                return Zo(TT, IT).catch((async oT => {
                  if ("auth/missing-recaptcha-token" === oT.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const oT = await fo(TT, IT, "signInWithPassword");
                    return Zo(TT, oT)
                  }
                  return Promise.reject(oT)
                }));
              case "emailLink":
                return async function(TT, oT) {
                  return qT(TT, "POST", "/v1/accounts:signInWithEmailLink", OT(TT, oT))
                }(TT, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                hT(TT, "internal-error")
            }
          }
          async _linkToIdToken(TT, oT) {
            switch (this.signInMethod) {
              case "password":
                return qo(TT, {
                  idToken: oT,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(TT, oT) {
                  return qT(TT, "POST", "/v1/accounts:signInWithEmailLink", OT(TT, oT))
                }(TT, {
                  idToken: oT,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                hT(TT, "internal-error")
            }
          }
          _getReauthenticationResolver(TT) {
            return this._getIdTokenResponse(TT)
          }
        }
        async function bo(TT, oT) {
          return qT(TT, "POST", "/v1/accounts:signInWithIdp", OT(TT, oT))
        }
        class yo extends Ho {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(TT) {
            const oT = new yo(TT.providerId, TT.signInMethod);
            return TT.idToken || TT.accessToken ? (TT.idToken && (oT.idToken = TT.idToken), TT.accessToken && (oT.accessToken = TT.accessToken), TT.nonce && !TT.pendingToken && (oT.nonce = TT.nonce), TT.pendingToken && (oT.pendingToken = TT.pendingToken)) : TT.oauthToken && TT.oauthTokenSecret ? (oT.accessToken = TT.oauthToken, oT.secret = TT.oauthTokenSecret) : hT("argument-error"), oT
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
          static fromJSON(TT) {
            const oT = "string" === typeof TT ? JSON.parse(TT) : TT,
              {
                providerId: IT,
                signInMethod: iT
              } = oT,
              zT = kT(oT, ["providerId", "signInMethod"]);
            if (!IT || !iT) return null;
            const WT = new yo(IT, iT);
            return WT.idToken = zT.idToken || void 0, WT.accessToken = zT.accessToken || void 0, WT.secret = zT.secret, WT.nonce = zT.nonce, WT.pendingToken = zT.pendingToken || null, WT
          }
          _getIdTokenResponse(TT) {
            return bo(TT, this.buildRequest())
          }
          _linkToIdToken(TT, oT) {
            const IT = this.buildRequest();
            return IT.idToken = oT, bo(TT, IT)
          }
          _getReauthenticationResolver(TT) {
            const oT = this.buildRequest();
            return oT.autoCreate = !1, bo(TT, oT)
          }
          buildRequest() {
            const TT = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) TT.pendingToken = this.pendingToken;
            else {
              const oT = {};
              this.idToken && (oT.id_token = this.idToken), this.accessToken && (oT.access_token = this.accessToken), this.secret && (oT.oauth_token_secret = this.secret), oT.providerId = this.providerId, this.nonce && !this.pendingToken && (oT.nonce = this.nonce), TT.postBody = (0, iT.ib)(oT)
            }
            return TT
          }
        }
        const No = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Po extends Ho {
          constructor(TT) {
            super("phone", "phone"), this.params = TT
          }
          static _fromVerification(TT, oT) {
            return new Po({
              verificationId: TT,
              verificationCode: oT
            })
          }
          static _fromTokenResponse(TT, oT) {
            return new Po({
              phoneNumber: TT,
              temporaryProof: oT
            })
          }
          _getIdTokenResponse(TT) {
            return async function(TT, oT) {
              return qT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", OT(TT, oT))
            }(TT, this._makeVerificationRequest())
          }
          _linkToIdToken(TT, oT) {
            return async function(TT, oT) {
              const IT = await qT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", OT(TT, oT));
              if (IT.temporaryProof) throw sT(TT, "account-exists-with-different-credential", IT);
              return IT
            }(TT, Object.assign({
              idToken: oT
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(TT) {
            return async function(TT, oT) {
              return qT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", OT(TT, Object.assign(Object.assign({}, oT), {
                operation: "REAUTH"
              })), No)
            }(TT, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: TT,
              phoneNumber: oT,
              verificationId: IT,
              verificationCode: iT
            } = this.params;
            return TT && oT ? {
              temporaryProof: TT,
              phoneNumber: oT
            } : {
              sessionInfo: IT,
              code: iT
            }
          }
          toJSON() {
            const TT = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (TT.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (TT.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (TT.verificationCode = this.params.verificationCode), this.params.verificationId && (TT.verificationId = this.params.verificationId), TT
          }
          static fromJSON(TT) {
            "string" === typeof TT && (TT = JSON.parse(TT));
            const {
              verificationId: oT,
              verificationCode: IT,
              phoneNumber: iT,
              temporaryProof: zT
            } = TT;
            return IT || oT || iT || zT ? new Po({
              verificationId: oT,
              verificationCode: IT,
              phoneNumber: iT,
              temporaryProof: zT
            }) : null
          }
        }
        class Vo {
          constructor(TT) {
            var oT, IT, zT, kT, WT, XT;
            const BT = (0, iT.gb)((0, iT.z)(TT)),
              FT = null !== (oT = BT.apiKey) && void 0 !== oT ? oT : null,
              ST = null !== (IT = BT.oobCode) && void 0 !== IT ? IT : null,
              DT = function(TT) {
                switch (TT) {
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
              }(null !== (zT = BT.mode) && void 0 !== zT ? zT : null);
            uT(FT && ST && DT, "argument-error"), this.apiKey = FT, this.operation = DT, this.code = ST, this.continueUrl = null !== (kT = BT.continueUrl) && void 0 !== kT ? kT : null, this.languageCode = null !== (WT = BT.languageCode) && void 0 !== WT ? WT : null, this.tenantId = null !== (XT = BT.tenantId) && void 0 !== XT ? XT : null
          }
          static parseLink(TT) {
            const oT = function(TT) {
              const oT = (0, iT.gb)((0, iT.z)(TT)).link,
                IT = oT ? (0, iT.gb)((0, iT.z)(oT)).deep_link_id : null,
                zT = (0, iT.gb)((0, iT.z)(TT)).deep_link_id;
              return (zT ? (0, iT.gb)((0, iT.z)(zT)).link : null) || zT || IT || oT || TT
            }(TT);
            try {
              return new Vo(oT)
            } catch (IT) {
              return null
            }
          }
        }

        function TI(TT) {
          return Vo.parseLink(TT)
        }
        class oI {
          constructor() {
            this.providerId = oI.PROVIDER_ID
          }
          static credential(TT, oT) {
            return po._fromEmailAndPassword(TT, oT)
          }
          static credentialWithLink(TT, oT) {
            const IT = Vo.parseLink(oT);
            return uT(IT, "argument-error"), po._fromEmailAndCode(TT, IT.code, IT.tenantId)
          }
        }
        oI.PROVIDER_ID = "password", oI.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", oI.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class II {
          constructor(TT) {
            this.providerId = TT, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(TT) {
            this.defaultLanguageCode = TT
          }
          setCustomParameters(TT) {
            return this.customParameters = TT, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class iI extends II {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(TT) {
            return this.scopes.includes(TT) || this.scopes.push(TT), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class zI extends iI {
          static credentialFromJSON(TT) {
            const oT = "string" === typeof TT ? JSON.parse(TT) : TT;
            return uT("providerId" in oT && "signInMethod" in oT, "argument-error"), yo._fromParams(oT)
          }
          credential(TT) {
            return this._credential(Object.assign(Object.assign({}, TT), {
              nonce: TT.rawNonce
            }))
          }
          _credential(TT) {
            return uT(TT.idToken || TT.accessToken, "argument-error"), yo._fromParams(Object.assign(Object.assign({}, TT), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(TT) {
            return zI.oauthCredentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return zI.oauthCredentialFromTaggedObject(TT.customData || {})
          }
          static oauthCredentialFromTaggedObject(TT) {
            let {
              _tokenResponse: oT
            } = TT;
            if (!oT) return null;
            const {
              oauthIdToken: IT,
              oauthAccessToken: iT,
              oauthTokenSecret: zT,
              pendingToken: kT,
              nonce: WT,
              providerId: XT
            } = oT;
            if (!iT && !zT && !IT && !kT) return null;
            if (!XT) return null;
            try {
              return new zI(XT)._credential({
                idToken: IT,
                accessToken: iT,
                nonce: WT,
                pendingToken: kT
              })
            } catch (BT) {
              return null
            }
          }
        }
        class kI extends iI {
          constructor() {
            super("facebook.com")
          }
          static credential(TT) {
            return yo._fromParams({
              providerId: kI.PROVIDER_ID,
              signInMethod: kI.FACEBOOK_SIGN_IN_METHOD,
              accessToken: TT
            })
          }
          static credentialFromResult(TT) {
            return kI.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return kI.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: oT
            } = TT;
            if (!oT || !("oauthAccessToken" in oT)) return null;
            if (!oT.oauthAccessToken) return null;
            try {
              return kI.credential(oT.oauthAccessToken)
            } catch (IT) {
              return null
            }
          }
        }
        kI.FACEBOOK_SIGN_IN_METHOD = "facebook.com", kI.PROVIDER_ID = "facebook.com";
        class WI extends iI {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(TT, oT) {
            return yo._fromParams({
              providerId: WI.PROVIDER_ID,
              signInMethod: WI.GOOGLE_SIGN_IN_METHOD,
              idToken: TT,
              accessToken: oT
            })
          }
          static credentialFromResult(TT) {
            return WI.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return WI.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: oT
            } = TT;
            if (!oT) return null;
            const {
              oauthIdToken: IT,
              oauthAccessToken: iT
            } = oT;
            if (!IT && !iT) return null;
            try {
              return WI.credential(IT, iT)
            } catch (zT) {
              return null
            }
          }
        }
        WI.GOOGLE_SIGN_IN_METHOD = "google.com", WI.PROVIDER_ID = "google.com";
        class XI extends iI {
          constructor() {
            super("github.com")
          }
          static credential(TT) {
            return yo._fromParams({
              providerId: XI.PROVIDER_ID,
              signInMethod: XI.GITHUB_SIGN_IN_METHOD,
              accessToken: TT
            })
          }
          static credentialFromResult(TT) {
            return XI.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return XI.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: oT
            } = TT;
            if (!oT || !("oauthAccessToken" in oT)) return null;
            if (!oT.oauthAccessToken) return null;
            try {
              return XI.credential(oT.oauthAccessToken)
            } catch (IT) {
              return null
            }
          }
        }
        XI.GITHUB_SIGN_IN_METHOD = "github.com", XI.PROVIDER_ID = "github.com";
        class BI extends Ho {
          constructor(TT, oT) {
            super(TT, TT), this.pendingToken = oT
          }
          _getIdTokenResponse(TT) {
            return bo(TT, this.buildRequest())
          }
          _linkToIdToken(TT, oT) {
            const IT = this.buildRequest();
            return IT.idToken = oT, bo(TT, IT)
          }
          _getReauthenticationResolver(TT) {
            const oT = this.buildRequest();
            return oT.autoCreate = !1, bo(TT, oT)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(TT) {
            const oT = "string" === typeof TT ? JSON.parse(TT) : TT,
              {
                providerId: IT,
                signInMethod: iT,
                pendingToken: zT
              } = oT;
            return IT && iT && zT && IT === iT ? new BI(IT, zT) : null
          }
          static _create(TT, oT) {
            return new BI(TT, oT)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class FI extends II {
          constructor(TT) {
            uT(TT.startsWith("saml."), "argument-error"), super(TT)
          }
          static credentialFromResult(TT) {
            return FI.samlCredentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return FI.samlCredentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromJSON(TT) {
            const oT = BI.fromJSON(TT);
            return uT(oT, "argument-error"), oT
          }
          static samlCredentialFromTaggedObject(TT) {
            let {
              _tokenResponse: oT
            } = TT;
            if (!oT) return null;
            const {
              pendingToken: IT,
              providerId: iT
            } = oT;
            if (!IT || !iT) return null;
            try {
              return BI._create(iT, IT)
            } catch (zT) {
              return null
            }
          }
        }
        class SI extends iI {
          constructor() {
            super("twitter.com")
          }
          static credential(TT, oT) {
            return yo._fromParams({
              providerId: SI.PROVIDER_ID,
              signInMethod: SI.TWITTER_SIGN_IN_METHOD,
              oauthToken: TT,
              oauthTokenSecret: oT
            })
          }
          static credentialFromResult(TT) {
            return SI.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return SI.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: oT
            } = TT;
            if (!oT) return null;
            const {
              oauthAccessToken: IT,
              oauthTokenSecret: iT
            } = oT;
            if (!IT || !iT) return null;
            try {
              return SI.credential(IT, iT)
            } catch (zT) {
              return null
            }
          }
        }
        async function DI(TT, oT) {
          return qT(TT, "POST", "/v1/accounts:signUp", OT(TT, oT))
        }
        SI.TWITTER_SIGN_IN_METHOD = "twitter.com", SI.PROVIDER_ID = "twitter.com";
        class LI {
          constructor(TT) {
            this.user = TT.user, this.providerId = TT.providerId, this._tokenResponse = TT._tokenResponse, this.operationType = TT.operationType
          }
          static async _fromIdTokenResponse(TT, oT, IT) {
            let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const zT = await io._fromIdTokenResponse(TT, IT, iT),
              kT = xI(IT);
            return new LI({
              user: zT,
              providerId: kT,
              _tokenResponse: IT,
              operationType: oT
            })
          }
          static async _forOperation(TT, oT, IT) {
            await TT._updateTokensIfNecessary(IT, !0);
            const iT = xI(IT);
            return new LI({
              user: TT,
              providerId: iT,
              _tokenResponse: IT,
              operationType: oT
            })
          }
        }

        function xI(TT) {
          return TT.providerId ? TT.providerId : "phoneNumber" in TT ? "phone" : null
        }
        async function cI(TT) {
          var oT;
          const IT = Jo(TT);
          if (await IT._initializationPromise, null === (oT = IT.currentUser) || void 0 === oT ? void 0 : oT.isAnonymous) return new LI({
            user: IT.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const iT = await DI(IT, {
              returnSecureToken: !0
            }),
            zT = await LI._fromIdTokenResponse(IT, "signIn", iT, !0);
          return await IT._updateCurrentUser(zT.user), zT
        }
        class KI extends iT.h {
          constructor(TT, oT, IT, iT) {
            var zT;
            super(oT.code, oT.message), this.operationType = IT, this.user = iT, Object.setPrototypeOf(this, KI.prototype), this.customData = {
              appName: TT.name,
              tenantId: null !== (zT = TT.tenantId) && void 0 !== zT ? zT : void 0,
              _serverResponse: oT.customData._serverResponse,
              operationType: IT
            }
          }
          static _fromErrorAndOperation(TT, oT, IT, iT) {
            return new KI(TT, oT, IT, iT)
          }
        }

        function MI(TT, oT, IT, iT) {
          return ("reauthenticate" === oT ? IT._getReauthenticationResolver(TT) : IT._getIdTokenResponse(TT)).catch((IT => {
            if ("auth/multi-factor-auth-required" === IT.code) throw KI._fromErrorAndOperation(TT, IT, oT, iT);
            throw IT
          }))
        }

        function rI(TT) {
          return new Set(TT.map((TT => {
            let {
              providerId: oT
            } = TT;
            return oT
          })).filter((TT => !!TT)))
        }
        async function AI(TT, oT) {
          const IT = (0, iT.L)(TT);
          await hI(!0, IT, oT);
          const {
            providerUserInfo: zT
          } = await async function(TT, oT) {
            return HT(TT, "POST", "/v1/accounts:update", oT)
          }(IT.auth, {
            idToken: await IT.getIdToken(),
            deleteProvider: [oT]
          }), kT = rI(zT || []);
          return IT.providerData = IT.providerData.filter((TT => kT.has(TT.providerId))), kT.has("phone") || (IT.phoneNumber = null), await IT.auth._persistUserIfCurrent(IT), IT
        }
        async function gI(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const iT = await NT(TT, oT._linkToIdToken(TT.auth, await TT.getIdToken()), IT);
          return LI._forOperation(TT, "link", iT)
        }
        async function hI(TT, oT, IT) {
          await VT(oT);
          const iT = !1 === TT ? "provider-already-linked" : "no-such-provider";
          uT(rI(oT.providerData).has(IT) === TT, oT.auth, iT)
        }
        async function wI(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: iT
          } = TT, zT = "reauthenticate";
          try {
            const kT = await NT(TT, MI(iT, zT, oT, TT), IT);
            uT(kT.idToken, iT, "internal-error");
            const WT = yT(kT.idToken);
            uT(WT, iT, "internal-error");
            const {
              sub: XT
            } = WT;
            return uT(TT.uid === XT, iT, "user-mismatch"), LI._forOperation(TT, zT, kT)
          } catch (kT) {
            throw "auth/user-not-found" === (null === kT || void 0 === kT ? void 0 : kT.code) && hT(iT, "user-mismatch"), kT
          }
        }
        async function mI(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const iT = "signIn",
            zT = await MI(TT, iT, oT),
            kT = await LI._fromIdTokenResponse(TT, iT, zT);
          return IT || await TT._updateCurrentUser(kT.user), kT
        }
        async function eI(TT, oT) {
          return mI(Jo(TT), oT)
        }
        async function RI(TT, oT) {
          const IT = (0, iT.L)(TT);
          return await hI(!1, IT, oT.providerId), gI(IT, oT)
        }
        async function uI(TT, oT) {
          return wI((0, iT.L)(TT), oT)
        }
        async function vI(TT, oT) {
          const IT = Jo(TT),
            iT = await async function(TT, oT) {
              return qT(TT, "POST", "/v1/accounts:signInWithCustomToken", OT(TT, oT))
            }(IT, {
              token: oT,
              returnSecureToken: !0
            }), zT = await LI._fromIdTokenResponse(IT, "signIn", iT);
          return await IT._updateCurrentUser(zT.user), zT
        }
        class EI {
          constructor(TT, oT) {
            this.factorId = TT, this.uid = oT.mfaEnrollmentId, this.enrollmentTime = new Date(oT.enrolledAt).toUTCString(), this.displayName = oT.displayName
          }
          static _fromServerResponse(TT, oT) {
            return "phoneInfo" in oT ? fI._fromServerResponse(TT, oT) : "totpInfo" in oT ? CI._fromServerResponse(TT, oT) : hT(TT, "internal-error")
          }
        }
        class fI extends EI {
          constructor(TT) {
            super("phone", TT), this.phoneNumber = TT.phoneInfo
          }
          static _fromServerResponse(TT, oT) {
            return new fI(oT)
          }
        }
        class CI extends EI {
          constructor(TT) {
            super("totp", TT)
          }
          static _fromServerResponse(TT, oT) {
            return new CI(oT)
          }
        }

        function jI(TT, oT, IT) {
          var iT;
          uT((null === (iT = IT.url) || void 0 === iT ? void 0 : iT.length) > 0, TT, "invalid-continue-uri"), uT("undefined" === typeof IT.dynamicLinkDomain || IT.dynamicLinkDomain.length > 0, TT, "invalid-dynamic-link-domain"), oT.continueUrl = IT.url, oT.dynamicLinkDomain = IT.dynamicLinkDomain, oT.canHandleCodeInApp = IT.handleCodeInApp, IT.iOS && (uT(IT.iOS.bundleId.length > 0, TT, "missing-ios-bundle-id"), oT.iOSBundleId = IT.iOS.bundleId), IT.android && (uT(IT.android.packageName.length > 0, TT, "missing-android-pkg-name"), oT.androidInstallApp = IT.android.installApp, oT.androidMinimumVersionCode = IT.android.minimumVersion, oT.androidPackageName = IT.android.packageName)
        }
        async function JI(TT, oT, IT) {
          var iT;
          const zT = Jo(TT),
            kT = {
              requestType: "PASSWORD_RESET",
              email: oT,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (iT = zT._getRecaptchaConfig()) || void 0 === iT ? void 0 : iT.emailPasswordEnabled) {
            const TT = await fo(zT, kT, "getOobCode", !0);
            IT && jI(zT, TT, IT), await to(zT, TT)
          } else IT && jI(zT, kT, IT), await to(zT, kT).catch((async TT => {
            if ("auth/missing-recaptcha-token" !== TT.code) return Promise.reject(TT);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const TT = await fo(zT, kT, "getOobCode", !0);
              IT && jI(zT, TT, IT), await to(zT, TT)
            }
          }))
        }
        async function UI(TT, oT, IT) {
          await no((0, iT.L)(TT), {
            oobCode: oT,
            newPassword: IT
          })
        }
        async function aI(TT, oT) {
          await async function(TT, oT) {
            return HT(TT, "POST", "/v1/accounts:update", OT(TT, oT))
          }((0, iT.L)(TT), {
            oobCode: oT
          })
        }
        async function YI(TT, oT) {
          const IT = (0, iT.L)(TT),
            zT = await no(IT, {
              oobCode: oT
            }),
            kT = zT.requestType;
          switch (uT(kT, IT, "internal-error"), kT) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              uT(zT.newEmail, IT, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              uT(zT.mfaInfo, IT, "internal-error");
            default:
              uT(zT.email, IT, "internal-error")
          }
          let WT = null;
          return zT.mfaInfo && (WT = EI._fromServerResponse(Jo(IT), zT.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === zT.requestType ? zT.newEmail : zT.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === zT.requestType ? zT.email : zT.newEmail) || null,
              multiFactorInfo: WT
            },
            operation: kT
          }
        }
        async function QI(TT, oT) {
          const {
            data: IT
          } = await YI((0, iT.L)(TT), oT);
          return IT.email
        }
        async function OI(TT, oT, IT) {
          var iT;
          const zT = Jo(TT),
            kT = {
              returnSecureToken: !0,
              email: oT,
              password: IT,
              clientType: "CLIENT_TYPE_WEB"
            };
          let WT;
          if (null === (iT = zT._getRecaptchaConfig()) || void 0 === iT ? void 0 : iT.emailPasswordEnabled) {
            const TT = await fo(zT, kT, "signUpPassword");
            WT = DI(zT, TT)
          } else WT = DI(zT, kT).catch((async TT => {
            if ("auth/missing-recaptcha-token" === TT.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const TT = await fo(zT, kT, "signUpPassword");
              return DI(zT, TT)
            }
            return Promise.reject(TT)
          }));
          const XT = await WT.catch((TT => Promise.reject(TT))),
            BT = await LI._fromIdTokenResponse(zT, "signIn", XT);
          return await zT._updateCurrentUser(BT.user), BT
        }

        function HI(TT, oT, IT) {
          return eI((0, iT.L)(TT), oI.credential(oT, IT))
        }
        async function nI(TT, oT, IT) {
          var iT;
          const zT = Jo(TT),
            kT = {
              requestType: "EMAIL_SIGNIN",
              email: oT,
              clientType: "CLIENT_TYPE_WEB"
            };

          function WT(TT, oT) {
            uT(oT.handleCodeInApp, zT, "argument-error"), oT && jI(zT, TT, oT)
          }
          if (null === (iT = zT._getRecaptchaConfig()) || void 0 === iT ? void 0 : iT.emailPasswordEnabled) {
            const TT = await fo(zT, kT, "getOobCode", !0);
            WT(TT, IT), await Go(zT, TT)
          } else WT(kT, IT), await Go(zT, kT).catch((async TT => {
            if ("auth/missing-recaptcha-token" !== TT.code) return Promise.reject(TT);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const TT = await fo(zT, kT, "getOobCode", !0);
              WT(TT, IT), await Go(zT, TT)
            }
          }))
        }

        function qI(TT, oT) {
          const IT = Vo.parseLink(oT);
          return "EMAIL_SIGNIN" === (null === IT || void 0 === IT ? void 0 : IT.operation)
        }
        async function ZI(TT, oT, IT) {
          const zT = (0, iT.L)(TT),
            kT = oI.credentialWithLink(oT, IT || fT());
          return uT(kT._tenantId === (zT.tenantId || null), zT, "tenant-id-mismatch"), eI(zT, kT)
        }
        async function lI(TT, oT) {
          const IT = {
              identifier: oT,
              continueUri: CT() ? fT() : "http://localhost"
            },
            {
              signinMethods: zT
            } = await async function(TT, oT) {
              return HT(TT, "POST", "/v1/accounts:createAuthUri", OT(TT, oT))
            }((0, iT.L)(TT), IT);
          return zT || []
        }
        async function sI(TT, oT) {
          const IT = (0, iT.L)(TT),
            zT = {
              requestType: "VERIFY_EMAIL",
              idToken: await TT.getIdToken()
            };
          oT && jI(IT.auth, zT, oT);
          const {
            email: kT
          } = await async function(TT, oT) {
            return so(TT, oT)
          }(IT.auth, zT);
          kT !== TT.email && await TT.reload()
        }
        async function tI(TT, oT, IT) {
          const zT = (0, iT.L)(TT),
            kT = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await TT.getIdToken(),
              newEmail: oT
            };
          IT && jI(zT.auth, kT, IT);
          const {
            email: WT
          } = await async function(TT, oT) {
            return so(TT, oT)
          }(zT.auth, kT);
          WT !== TT.email && await TT.reload()
        }
        async function GI(TT, oT) {
          let {
            displayName: IT,
            photoURL: zT
          } = oT;
          if (void 0 === IT && void 0 === zT) return;
          const kT = (0, iT.L)(TT),
            WT = {
              idToken: await kT.getIdToken(),
              displayName: IT,
              photoUrl: zT,
              returnSecureToken: !0
            },
            XT = await NT(kT, async function(TT, oT) {
              return HT(TT, "POST", "/v1/accounts:update", oT)
            }(kT.auth, WT));
          kT.displayName = XT.displayName || null, kT.photoURL = XT.photoUrl || null;
          const BT = kT.providerData.find((TT => {
            let {
              providerId: oT
            } = TT;
            return "password" === oT
          }));
          BT && (BT.displayName = kT.displayName, BT.photoURL = kT.photoURL), await kT._updateTokensIfNecessary(XT)
        }

        function pI(TT, oT) {
          return yI((0, iT.L)(TT), oT, null)
        }

        function bI(TT, oT) {
          return yI((0, iT.L)(TT), null, oT)
        }
        async function yI(TT, oT, IT) {
          const {
            auth: iT
          } = TT, zT = {
            idToken: await TT.getIdToken(),
            returnSecureToken: !0
          };
          oT && (zT.email = oT), IT && (zT.password = IT);
          const kT = await NT(TT, qo(iT, zT));
          await TT._updateTokensIfNecessary(kT, !0)
        }
        class NI {
          constructor(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = TT, this.providerId = oT, this.profile = IT
          }
        }
        class PI extends NI {
          constructor(TT, oT, IT, iT) {
            super(TT, oT, IT), this.username = iT
          }
        }
        class dI extends NI {
          constructor(TT, oT) {
            super(TT, "facebook.com", oT)
          }
        }
        class VI extends PI {
          constructor(TT, oT) {
            super(TT, "github.com", oT, "string" === typeof(null === oT || void 0 === oT ? void 0 : oT.login) ? null === oT || void 0 === oT ? void 0 : oT.login : null)
          }
        }
        class Ti extends NI {
          constructor(TT, oT) {
            super(TT, "google.com", oT)
          }
        }
        class oi extends PI {
          constructor(TT, oT, IT) {
            super(TT, "twitter.com", oT, IT)
          }
        }

        function Ii(TT) {
          const {
            user: oT,
            _tokenResponse: IT
          } = TT;
          return oT.isAnonymous && !IT ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(TT) {
            var oT, IT;
            if (!TT) return null;
            const {
              providerId: iT
            } = TT, zT = TT.rawUserInfo ? JSON.parse(TT.rawUserInfo) : {}, kT = TT.isNewUser || "identitytoolkit#SignupNewUserResponse" === TT.kind;
            if (!iT && (null === TT || void 0 === TT ? void 0 : TT.idToken)) {
              const iT = null === (IT = null === (oT = yT(TT.idToken)) || void 0 === oT ? void 0 : oT.firebase) || void 0 === IT ? void 0 : IT.sign_in_provider;
              if (iT) return new NI(kT, "anonymous" !== iT && "custom" !== iT ? iT : null)
            }
            if (!iT) return null;
            switch (iT) {
              case "facebook.com":
                return new dI(kT, zT);
              case "github.com":
                return new VI(kT, zT);
              case "google.com":
                return new Ti(kT, zT);
              case "twitter.com":
                return new oi(kT, zT, TT.screenName || null);
              case "custom":
              case "anonymous":
                return new NI(kT, null);
              default:
                return new NI(kT, iT, zT)
            }
          }(IT)
        }

        function ii(TT, oT) {
          return (0, iT.L)(TT).setPersistence(oT)
        }

        function zi(TT) {
          return Jo(TT).initializeRecaptchaConfig()
        }

        function ki(TT, oT, IT, zT) {
          return (0, iT.L)(TT).onIdTokenChanged(oT, IT, zT)
        }

        function Wi(TT, oT, IT) {
          return (0, iT.L)(TT).beforeAuthStateChanged(oT, IT)
        }

        function Xi(TT, oT, IT, zT) {
          return (0, iT.L)(TT).onAuthStateChanged(oT, IT, zT)
        }

        function Bi(TT) {
          (0, iT.L)(TT).useDeviceLanguage()
        }

        function Fi(TT, oT) {
          return (0, iT.L)(TT).updateCurrentUser(oT)
        }

        function Si(TT) {
          return (0, iT.L)(TT).signOut()
        }
        async function Di(TT) {
          return (0, iT.L)(TT).delete()
        }
        class Li {
          constructor(TT, oT, IT) {
            this.type = TT, this.credential = oT, this.auth = IT
          }
          static _fromIdtoken(TT, oT) {
            return new Li("enroll", TT, oT)
          }
          static _fromMfaPendingCredential(TT) {
            return new Li("signin", TT)
          }
          toJSON() {
            const TT = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [TT]: this.credential
              }
            }
          }
          static fromJSON(TT) {
            var oT, IT;
            if (null === TT || void 0 === TT ? void 0 : TT.multiFactorSession) {
              if (null === (oT = TT.multiFactorSession) || void 0 === oT ? void 0 : oT.pendingCredential) return Li._fromMfaPendingCredential(TT.multiFactorSession.pendingCredential);
              if (null === (IT = TT.multiFactorSession) || void 0 === IT ? void 0 : IT.idToken) return Li._fromIdtoken(TT.multiFactorSession.idToken)
            }
            return null
          }
        }
        class xi {
          constructor(TT, oT, IT) {
            this.session = TT, this.hints = oT, this.signInResolver = IT
          }
          static _fromError(TT, oT) {
            const IT = Jo(TT),
              iT = oT.customData._serverResponse,
              zT = (iT.mfaInfo || []).map((TT => EI._fromServerResponse(IT, TT)));
            uT(iT.mfaPendingCredential, IT, "internal-error");
            const kT = Li._fromMfaPendingCredential(iT.mfaPendingCredential);
            return new xi(kT, zT, (async TT => {
              const zT = await TT._process(IT, kT);
              delete iT.mfaInfo, delete iT.mfaPendingCredential;
              const WT = Object.assign(Object.assign({}, iT), {
                idToken: zT.idToken,
                refreshToken: zT.refreshToken
              });
              switch (oT.operationType) {
                case "signIn":
                  const TT = await LI._fromIdTokenResponse(IT, oT.operationType, WT);
                  return await IT._updateCurrentUser(TT.user), TT;
                case "reauthenticate":
                  return uT(oT.user, IT, "internal-error"), LI._forOperation(oT.user, oT.operationType, WT);
                default:
                  hT(IT, "internal-error")
              }
            }))
          }
          async resolveSignIn(TT) {
            const oT = TT;
            return this.signInResolver(oT)
          }
        }

        function ci(TT, oT) {
          var IT;
          const zT = (0, iT.L)(TT),
            kT = oT;
          return uT(oT.customData.operationType, zT, "argument-error"), uT(null === (IT = kT.customData._serverResponse) || void 0 === IT ? void 0 : IT.mfaPendingCredential, zT, "argument-error"), xi._fromError(zT, kT)
        }
        class Ki {
          constructor(TT) {
            this.user = TT, this.enrolledFactors = [], TT._onReload((oT => {
              oT.mfaInfo && (this.enrolledFactors = oT.mfaInfo.map((oT => EI._fromServerResponse(TT.auth, oT))))
            }))
          }
          static _fromUser(TT) {
            return new Ki(TT)
          }
          async getSession() {
            return Li._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(TT, oT) {
            const IT = TT,
              iT = await this.getSession(),
              zT = await NT(this.user, IT._process(this.user.auth, iT, oT));
            return await this.user._updateTokensIfNecessary(zT), this.user.reload()
          }
          async unenroll(TT) {
            const oT = "string" === typeof TT ? TT : TT.uid,
              IT = await this.user.getIdToken();
            try {
              const TT = await NT(this.user, (iT = this.user.auth, zT = {
                idToken: IT,
                mfaEnrollmentId: oT
              }, HT(iT, "POST", "/v2/accounts/mfaEnrollment:withdraw", OT(iT, zT))));
              this.enrolledFactors = this.enrolledFactors.filter((TT => {
                let {
                  uid: IT
                } = TT;
                return IT !== oT
              })), await this.user._updateTokensIfNecessary(TT), await this.user.reload()
            } catch (kT) {
              throw kT
            }
            var iT, zT
          }
        }
        const Mi = new WeakMap;

        function ri(TT) {
          const oT = (0, iT.L)(TT);
          return Mi.has(oT) || Mi.set(oT, Ki._fromUser(oT)), Mi.get(oT)
        }
        const Ai = "__sak";
        class gi {
          constructor(TT, oT) {
            this.storageRetriever = TT, this.type = oT
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Ai, "1"), this.storage.removeItem(Ai), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (TT) {
              return Promise.resolve(!1)
            }
          }
          _set(TT, oT) {
            return this.storage.setItem(TT, JSON.stringify(oT)), Promise.resolve()
          }
          _get(TT) {
            const oT = this.storage.getItem(TT);
            return Promise.resolve(oT ? JSON.parse(oT) : null)
          }
          _remove(TT) {
            return this.storage.removeItem(TT), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class wi extends gi {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (TT, oT) => this.onStorageEvent(TT, oT), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const TT = (0, iT.P)();
              return Lo(TT) || Ao(TT)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (TT) {
                return !1
              }
            }(), this.fallbackToPolling = go(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(TT) {
            for (const oT of Object.keys(this.listeners)) {
              const IT = this.storage.getItem(oT),
                iT = this.localCache[oT];
              IT !== iT && TT(oT, iT, IT)
            }
          }
          onStorageEvent(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!TT.key) return void this.forAllChangedKeys(((TT, oT, IT) => {
              this.notifyListeners(TT, IT)
            }));
            const IT = TT.key;
            if (oT ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const iT = this.storage.getItem(IT);
              if (TT.newValue !== iT) null !== TT.newValue ? this.storage.setItem(IT, TT.newValue) : this.storage.removeItem(IT);
              else if (this.localCache[IT] === TT.newValue && !oT) return
            }
            const zT = () => {
                const TT = this.storage.getItem(IT);
                (oT || this.localCache[IT] !== TT) && this.notifyListeners(IT, TT)
              },
              kT = this.storage.getItem(IT);
            (0, iT.X)() && 10 === document.documentMode && kT !== TT.newValue && TT.newValue !== TT.oldValue ? setTimeout(zT, 10) : zT()
          }
          notifyListeners(TT, oT) {
            this.localCache[TT] = oT;
            const IT = this.listeners[TT];
            if (IT)
              for (const iT of Array.from(IT)) iT(oT ? JSON.parse(oT) : oT)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((TT, oT, IT) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: TT,
                  oldValue: oT,
                  newValue: IT
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
          _addListener(TT, oT) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[TT] || (this.listeners[TT] = new Set, this.localCache[TT] = this.storage.getItem(TT)), this.listeners[TT].add(oT)
          }
          _removeListener(TT, oT) {
            this.listeners[TT] && (this.listeners[TT].delete(oT), 0 === this.listeners[TT].size && delete this.listeners[TT]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(TT, oT) {
            await super._set(TT, oT), this.localCache[TT] = JSON.stringify(oT)
          }
          async _get(TT) {
            const oT = await super._get(TT);
            return this.localCache[TT] = JSON.stringify(oT), oT
          }
          async _remove(TT) {
            await super._remove(TT), delete this.localCache[TT]
          }
        }
        wi.type = "LOCAL";
        const mi = wi;
        class ei extends gi {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(TT, oT) {}
          _removeListener(TT, oT) {}
        }
        ei.type = "SESSION";
        const Ri = ei;
        class ui {
          constructor(TT) {
            this.eventTarget = TT, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(TT) {
            const oT = this.receivers.find((oT => oT.isListeningto(TT)));
            if (oT) return oT;
            const IT = new ui(TT);
            return this.receivers.push(IT), IT
          }
          isListeningto(TT) {
            return this.eventTarget === TT
          }
          async handleEvent(TT) {
            const oT = TT,
              {
                eventId: IT,
                eventType: iT,
                data: zT
              } = oT.data,
              kT = this.handlersMap[iT];
            if (!(null === kT || void 0 === kT ? void 0 : kT.size)) return;
            oT.ports[0].postMessage({
              status: "ack",
              eventId: IT,
              eventType: iT
            });
            const WT = Array.from(kT).map((async TT => TT(oT.origin, zT))),
              XT = await
            function(TT) {
              return Promise.all(TT.map((async TT => {
                try {
                  return {
                    fulfilled: !0,
                    value: await TT
                  }
                } catch (oT) {
                  return {
                    fulfilled: !1,
                    reason: oT
                  }
                }
              })))
            }(WT);
            oT.ports[0].postMessage({
              status: "done",
              eventId: IT,
              eventType: iT,
              response: XT
            })
          }
          _subscribe(TT, oT) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[TT] || (this.handlersMap[TT] = new Set), this.handlersMap[TT].add(oT)
          }
          _unsubscribe(TT, oT) {
            this.handlersMap[TT] && oT && this.handlersMap[TT].delete(oT), oT && 0 !== this.handlersMap[TT].size || delete this.handlersMap[TT], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function vi() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            IT = "";
          for (let iT = 0; iT < oT; iT++) IT += Math.floor(10 * Math.random());
          return TT + IT
        }
        ui.receivers = [];
        class Ei {
          constructor(TT) {
            this.target = TT, this.handlers = new Set
          }
          removeMessageHandler(TT) {
            TT.messageChannel && (TT.messageChannel.port1.removeEventListener("message", TT.Am), TT.messageChannel.port1.close()), this.handlers.delete(TT)
          }
          async _send(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const iT = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!iT) throw new Error("connection_unavailable");
            let zT, kT;
            return new Promise(((WT, XT) => {
              const BT = vi("", 20);
              iT.port1.start();
              const FT = setTimeout((() => {
                XT(new Error("unsupported_event"))
              }), IT);
              kT = {
                messageChannel: iT,
                Am(TT) {
                  const oT = TT;
                  if (oT.data.eventId === BT) switch (oT.data.status) {
                    case "ack":
                      clearTimeout(FT), zT = setTimeout((() => {
                        XT(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(zT), WT(oT.data.response);
                      break;
                    default:
                      clearTimeout(FT), clearTimeout(zT), XT(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(kT), iT.port1.addEventListener("message", kT.Am), this.target.postMessage({
                eventType: TT,
                eventId: BT,
                data: oT
              }, [iT.port2])
            })).finally((() => {
              kT && this.removeMessageHandler(kT)
            }))
          }
        }

        function fi() {
          return window
        }

        function Ci() {
          return "undefined" !== typeof fi().WorkerGlobalScope && "function" === typeof fi().importScripts
        }
        const ji = "firebaseLocalStorageDb",
          Ji = "firebaseLocalStorage",
          Ui = "fbase_key";
        class ai {
          constructor(TT) {
            this.request = TT
          }
          toPromise() {
            return new Promise(((TT, oT) => {
              this.request.addEventListener("success", (() => {
                TT(this.request.result)
              })), this.request.addEventListener("error", (() => {
                oT(this.request.error)
              }))
            }))
          }
        }

        function Yi(TT, oT) {
          return TT.transaction([Ji], oT ? "readwrite" : "readonly").objectStore(Ji)
        }

        function Qi() {
          const TT = indexedDB.open(ji, 1);
          return new Promise(((oT, IT) => {
            TT.addEventListener("error", (() => {
              IT(TT.error)
            })), TT.addEventListener("upgradeneeded", (() => {
              const oT = TT.result;
              try {
                oT.createObjectStore(Ji, {
                  keyPath: Ui
                })
              } catch (iT) {
                IT(iT)
              }
            })), TT.addEventListener("success", (async () => {
              const IT = TT.result;
              IT.objectStoreNames.contains(Ji) ? oT(IT) : (IT.close(), await
                function() {
                  const TT = indexedDB.deleteDatabase(ji);
                  return new ai(TT).toPromise()
                }(), oT(await Qi()))
            }))
          }))
        }
        async function Oi(TT, oT, IT) {
          const iT = Yi(TT, !0).put({
            [Ui]: oT,
            value: IT
          });
          return new ai(iT).toPromise()
        }

        function Hi(TT, oT) {
          const IT = Yi(TT, !0).delete(oT);
          return new ai(IT).toPromise()
        }
        class ni {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Qi()), this.db
          }
          async _withRetries(TT) {
            let oT = 0;
            for (;;) try {
              const oT = await this._openDb();
              return await TT(oT)
            } catch (IT) {
              if (oT++ > 3) throw IT;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Ci() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = ui._getInstance(Ci() ? self : null), this.receiver._subscribe("keyChanged", (async (TT, oT) => ({
              keyProcessed: (await this._poll()).includes(oT.key)
            }))), this.receiver._subscribe("ping", (async (TT, oT) => ["keyChanged"]))
          }
          async initializeSender() {
            var TT, oT;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (TT) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Ei(this.activeServiceWorker);
            const IT = await this.sender._send("ping", {}, 800);
            IT && (null === (TT = IT[0]) || void 0 === TT ? void 0 : TT.fulfilled) && (null === (oT = IT[0]) || void 0 === oT ? void 0 : oT.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(TT) {
            if (this.sender && this.activeServiceWorker && function() {
                var TT;
                return (null === (TT = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === TT ? void 0 : TT.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: TT
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (oT) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const TT = await Qi();
              return await Oi(TT, Ai, "1"), await Hi(TT, Ai), !0
            } catch (TT) {}
            return !1
          }
          async _withPendingWrite(TT) {
            this.pendingWrites++;
            try {
              await TT()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(TT, oT) {
            return this._withPendingWrite((async () => (await this._withRetries((IT => Oi(IT, TT, oT))), this.localCache[TT] = oT, this.notifyServiceWorker(TT))))
          }
          async _get(TT) {
            const oT = await this._withRetries((oT => async function(TT, oT) {
              const IT = Yi(TT, !1).get(oT),
                iT = await new ai(IT).toPromise();
              return void 0 === iT ? null : iT.value
            }(oT, TT)));
            return this.localCache[TT] = oT, oT
          }
          async _remove(TT) {
            return this._withPendingWrite((async () => (await this._withRetries((oT => Hi(oT, TT))), delete this.localCache[TT], this.notifyServiceWorker(TT))))
          }
          async _poll() {
            const TT = await this._withRetries((TT => {
              const oT = Yi(TT, !1).getAll();
              return new ai(oT).toPromise()
            }));
            if (!TT) return [];
            if (0 !== this.pendingWrites) return [];
            const oT = [],
              IT = new Set;
            for (const {
                fbase_key: iT,
                value: zT
              }
              of TT) IT.add(iT), JSON.stringify(this.localCache[iT]) !== JSON.stringify(zT) && (this.notifyListeners(iT, zT), oT.push(iT));
            for (const iT of Object.keys(this.localCache)) this.localCache[iT] && !IT.has(iT) && (this.notifyListeners(iT, null), oT.push(iT));
            return oT
          }
          notifyListeners(TT, oT) {
            this.localCache[TT] = oT;
            const IT = this.listeners[TT];
            if (IT)
              for (const iT of Array.from(IT)) iT(oT)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(TT, oT) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[TT] || (this.listeners[TT] = new Set, this._get(TT)), this.listeners[TT].add(oT)
          }
          _removeListener(TT, oT) {
            this.listeners[TT] && (this.listeners[TT].delete(oT), 0 === this.listeners[TT].size && delete this.listeners[TT]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        ni.type = "LOCAL";
        const qi = ni;
        const Zi = 1e12;
        class li {
          constructor(TT) {
            this.auth = TT, this.counter = Zi, this._widgets = new Map
          }
          render(TT, oT) {
            const IT = this.counter;
            return this._widgets.set(IT, new si(TT, this.auth.name, oT || {})), this.counter++, IT
          }
          reset(TT) {
            var oT;
            const IT = TT || Zi;
            null === (oT = this._widgets.get(IT)) || void 0 === oT || oT.delete(), this._widgets.delete(IT)
          }
          getResponse(TT) {
            var oT;
            const IT = TT || Zi;
            return (null === (oT = this._widgets.get(IT)) || void 0 === oT ? void 0 : oT.getResponse()) || ""
          }
          async execute(TT) {
            var oT;
            const IT = TT || Zi;
            return null === (oT = this._widgets.get(IT)) || void 0 === oT || oT.execute(), ""
          }
        }
        class si {
          constructor(TT, oT, IT) {
            this.params = IT, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const iT = "string" === typeof TT ? document.getElementById(TT) : TT;
            uT(iT, "argument-error", {
              appName: oT
            }), this.container = iT, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(TT) {
                const oT = [],
                  IT = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let iT = 0; iT < TT; iT++) oT.push(IT.charAt(Math.floor(Math.random() * IT.length)));
                return oT.join("")
              }(50);
              const {
                callback: TT,
                "expired-callback": oT
              } = this.params;
              if (TT) try {
                TT(this.responseToken)
              } catch (IT) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, oT) try {
                  oT()
                } catch (IT) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const ti = vo("rcb"),
          Gi = new JT(3e4, 6e4);
        class bi {
          constructor() {
            var TT;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (TT = fi().grecaptcha) || void 0 === TT ? void 0 : TT.render)
          }
          load(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return uT(function(TT) {
              return TT.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(TT)
            }(oT), TT, "argument-error"), this.shouldResolveImmediately(oT) && mo(fi().grecaptcha) ? Promise.resolve(fi().grecaptcha) : new Promise(((IT, zT) => {
              const kT = fi().setTimeout((() => {
                zT(wT(TT, "network-request-failed"))
              }), Gi.get());
              fi()[ti] = () => {
                fi().clearTimeout(kT), delete fi()[ti];
                const iT = fi().grecaptcha;
                if (!iT || !mo(iT)) return void zT(wT(TT, "internal-error"));
                const WT = iT.render;
                iT.render = (TT, oT) => {
                  const IT = WT(TT, oT);
                  return this.counter++, IT
                }, this.hostLanguage = oT, IT(iT)
              };
              uo(`https://www.google.com/recaptcha/api.js??${(0,iT.ib)({onload:ti,render:"explicit",hl:oT})}`).catch((() => {
                clearTimeout(kT), zT(wT(TT, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(TT) {
            var oT;
            return !!(null === (oT = fi().grecaptcha) || void 0 === oT ? void 0 : oT.render) && (TT === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class yi {
          async load(TT) {
            return new li(TT)
          }
          clearedOneInstance() {}
        }
        const Ni = "recaptcha",
          Pi = {
            theme: "light",
            type: "image"
          };
        class di {
          constructor(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Pi),
              IT = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = oT, this.type = Ni, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Jo(IT), this.isInvisible = "invisible" === this.parameters.size, uT("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const iT = "string" === typeof TT ? document.getElementById(TT) : TT;
            uT(iT, this.auth, "argument-error"), this.container = iT, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new yi : new bi, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const TT = await this.render(),
              oT = this.getAssertedRecaptcha(),
              IT = oT.getResponse(TT);
            return IT || new Promise((IT => {
              const iT = TT => {
                TT && (this.tokenChangeListeners.delete(iT), IT(TT))
              };
              this.tokenChangeListeners.add(iT), this.isInvisible && oT.execute(TT)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (TT) {
              return Promise.reject(TT)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((TT => {
              throw this.renderPromise = null, TT
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((TT => {
              this.container.removeChild(TT)
            }))
          }
          validateStartingState() {
            uT(!this.parameters.sitekey, this.auth, "argument-error"), uT(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), uT("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(TT) {
            return oT => {
              if (this.tokenChangeListeners.forEach((TT => TT(oT))), "function" === typeof TT) TT(oT);
              else if ("string" === typeof TT) {
                const IT = fi()[TT];
                "function" === typeof IT && IT(oT)
              }
            }
          }
          assertNotDestroyed() {
            uT(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let TT = this.container;
              if (!this.isInvisible) {
                const oT = document.createElement("div");
                TT.appendChild(oT), TT = oT
              }
              this.widgetId = this.getAssertedRecaptcha().render(TT, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            uT(CT() && !Ci(), this.auth, "internal-error"), await
            function() {
              let TT = null;
              return new Promise((oT => {
                "complete" !== document.readyState ? (TT = () => oT(), window.addEventListener("load", TT)) : oT()
              })).catch((oT => {
                throw TT && window.removeEventListener("load", TT), oT
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const TT = await async function(TT) {
              return (await HT(TT, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            uT(TT, this.auth, "internal-error"), this.parameters.sitekey = TT
          }
          getAssertedRecaptcha() {
            return uT(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Vi {
          constructor(TT, oT) {
            this.verificationId = TT, this.onConfirmation = oT
          }
          confirm(TT) {
            const oT = Po._fromVerification(this.verificationId, TT);
            return this.onConfirmation(oT)
          }
        }
        async function Tz(TT, oT, IT) {
          const zT = Jo(TT),
            kT = await iz(zT, oT, (0, iT.L)(IT));
          return new Vi(kT, (TT => eI(zT, TT)))
        }
        async function oz(TT, oT, IT) {
          const zT = (0, iT.L)(TT);
          await hI(!1, zT, "phone");
          const kT = await iz(zT.auth, oT, (0, iT.L)(IT));
          return new Vi(kT, (TT => RI(zT, TT)))
        }
        async function Iz(TT, oT, IT) {
          const zT = (0, iT.L)(TT),
            kT = await iz(zT.auth, oT, (0, iT.L)(IT));
          return new Vi(kT, (TT => uI(zT, TT)))
        }
        async function iz(TT, oT, IT) {
          var iT;
          const zT = await IT.verify();
          try {
            let kT;
            if (uT("string" === typeof zT, TT, "argument-error"), uT(IT.type === Ni, TT, "argument-error"), kT = "string" === typeof oT ? {
                phoneNumber: oT
              } : oT, "session" in kT) {
              const oT = kT.session;
              if ("phoneNumber" in kT) {
                uT("enroll" === oT.type, TT, "internal-error");
                const IT = await
                function(TT, oT) {
                  return HT(TT, "POST", "/v2/accounts/mfaEnrollment:start", OT(TT, oT))
                }(TT, {
                  idToken: oT.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: kT.phoneNumber,
                    recaptchaToken: zT
                  }
                });
                return IT.phoneSessionInfo.sessionInfo
              } {
                uT("signin" === oT.type, TT, "internal-error");
                const IT = (null === (iT = kT.multiFactorHint) || void 0 === iT ? void 0 : iT.uid) || kT.multiFactorUid;
                uT(IT, TT, "missing-multi-factor-info");
                const WT = await
                function(TT, oT) {
                  return HT(TT, "POST", "/v2/accounts/mfaSignIn:start", OT(TT, oT))
                }(TT, {
                  mfaPendingCredential: oT.credential,
                  mfaEnrollmentId: IT,
                  phoneSignInInfo: {
                    recaptchaToken: zT
                  }
                });
                return WT.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: oT
              } = await async function(TT, oT) {
                return HT(TT, "POST", "/v1/accounts:sendVerificationCode", OT(TT, oT))
              }(TT, {
                phoneNumber: kT.phoneNumber,
                recaptchaToken: zT
              });
              return oT
            }
          } finally {
            IT._reset()
          }
        }
        async function zz(TT, oT) {
          await gI((0, iT.L)(TT), oT)
        }
        class kz {
          constructor(TT) {
            this.providerId = kz.PROVIDER_ID, this.auth = Jo(TT)
          }
          verifyPhoneNumber(TT, oT) {
            return iz(this.auth, TT, (0, iT.L)(oT))
          }
          static credential(TT, oT) {
            return Po._fromVerification(TT, oT)
          }
          static credentialFromResult(TT) {
            const oT = TT;
            return kz.credentialFromTaggedObject(oT)
          }
          static credentialFromError(TT) {
            return kz.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: oT
            } = TT;
            if (!oT) return null;
            const {
              phoneNumber: IT,
              temporaryProof: iT
            } = oT;
            return IT && iT ? Po._fromTokenResponse(IT, iT) : null
          }
        }

        function Wz(TT, oT) {
          return oT ? ko(oT) : (uT(TT._popupRedirectResolver, TT, "argument-error"), TT._popupRedirectResolver)
        }
        kz.PROVIDER_ID = "phone", kz.PHONE_SIGN_IN_METHOD = "phone";
        class Xz extends Ho {
          constructor(TT) {
            super("custom", "custom"), this.params = TT
          }
          _getIdTokenResponse(TT) {
            return bo(TT, this._buildIdpRequest())
          }
          _linkToIdToken(TT, oT) {
            return bo(TT, this._buildIdpRequest(oT))
          }
          _getReauthenticationResolver(TT) {
            return bo(TT, this._buildIdpRequest())
          }
          _buildIdpRequest(TT) {
            const oT = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return TT && (oT.idToken = TT), oT
          }
        }

        function Bz(TT) {
          return mI(TT.auth, new Xz(TT), TT.bypassAuthState)
        }

        function Fz(TT) {
          const {
            auth: oT,
            user: IT
          } = TT;
          return uT(IT, oT, "internal-error"), wI(IT, new Xz(TT), TT.bypassAuthState)
        }
        async function Sz(TT) {
          const {
            auth: oT,
            user: IT
          } = TT;
          return uT(IT, oT, "internal-error"), gI(IT, new Xz(TT), TT.bypassAuthState)
        }
        class Dz {
          constructor(TT, oT, IT, iT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = TT, this.resolver = IT, this.user = iT, this.bypassAuthState = zT, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(oT) ? oT : [oT]
          }
          execute() {
            return new Promise((async (TT, oT) => {
              this.pendingPromise = {
                resolve: TT,
                reject: oT
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (IT) {
                this.reject(IT)
              }
            }))
          }
          async onAuthEvent(TT) {
            const {
              urlResponse: oT,
              sessionId: IT,
              postBody: iT,
              tenantId: zT,
              error: kT,
              type: WT
            } = TT;
            if (kT) return void this.reject(kT);
            const XT = {
              auth: this.auth,
              requestUri: oT,
              sessionId: IT,
              tenantId: zT || void 0,
              postBody: iT || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(WT)(XT))
            } catch (BT) {
              this.reject(BT)
            }
          }
          onError(TT) {
            this.reject(TT)
          }
          getIdpTask(TT) {
            switch (TT) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Bz;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Sz;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Fz;
              default:
                hT(this.auth, "internal-error")
            }
          }
          resolve(TT) {
            ET(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(TT), this.unregisterAndCleanUp()
          }
          reject(TT) {
            ET(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(TT), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Lz = new JT(2e3, 1e4);
        async function xz(TT, oT, IT) {
          const iT = Jo(TT);
          eT(TT, oT, II);
          const zT = Wz(iT, IT);
          return new Mz(iT, "signInViaPopup", oT, zT).executeNotNull()
        }
        async function cz(TT, oT, IT) {
          const zT = (0, iT.L)(TT);
          eT(zT.auth, oT, II);
          const kT = Wz(zT.auth, IT);
          return new Mz(zT.auth, "reauthViaPopup", oT, kT, zT).executeNotNull()
        }
        async function Kz(TT, oT, IT) {
          const zT = (0, iT.L)(TT);
          eT(zT.auth, oT, II);
          const kT = Wz(zT.auth, IT);
          return new Mz(zT.auth, "linkViaPopup", oT, kT, zT).executeNotNull()
        }
        class Mz extends Dz {
          constructor(TT, oT, IT, iT, zT) {
            super(TT, oT, iT, zT), this.provider = IT, this.authWindow = null, this.pollId = null, Mz.currentPopupAction && Mz.currentPopupAction.cancel(), Mz.currentPopupAction = this
          }
          async executeNotNull() {
            const TT = await this.execute();
            return uT(TT, this.auth, "internal-error"), TT
          }
          async onExecution() {
            ET(1 === this.filter.length, "Popup operations only handle one event");
            const TT = vi();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], TT), this.authWindow.associatedEvent = TT, this.resolver._originValidation(this.auth).catch((TT => {
              this.reject(TT)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (TT => {
              TT || this.reject(wT(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var TT;
            return (null === (TT = this.authWindow) || void 0 === TT ? void 0 : TT.associatedEvent) || null
          }
          cancel() {
            this.reject(wT(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Mz.currentPopupAction = null
          }
          pollUserCancellation() {
            const TT = () => {
              var oT, IT;
              (null === (IT = null === (oT = this.authWindow) || void 0 === oT ? void 0 : oT.window) || void 0 === IT ? void 0 : IT.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(wT(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(TT, Lz.get())
            };
            TT()
          }
        }
        Mz.currentPopupAction = null;
        const rz = "pendingRedirect",
          Az = new Map;
        class gz extends Dz {
          constructor(TT, oT) {
            super(TT, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], oT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let TT = Az.get(this.auth._key());
            if (!TT) {
              try {
                const oT = await async function(TT, oT) {
                  const IT = ez(oT),
                    iT = mz(TT);
                  if (!await iT._isAvailable()) return !1;
                  const zT = "true" === await iT._get(IT);
                  return await iT._remove(IT), zT
                }(this.resolver, this.auth) ? await super.execute() : null;
                TT = () => Promise.resolve(oT)
              } catch (oT) {
                TT = () => Promise.reject(oT)
              }
              Az.set(this.auth._key(), TT)
            }
            return this.bypassAuthState || Az.set(this.auth._key(), (() => Promise.resolve(null))), TT()
          }
          async onAuthEvent(TT) {
            if ("signInViaRedirect" === TT.type) return super.onAuthEvent(TT);
            if ("unknown" !== TT.type) {
              if (TT.eventId) {
                const oT = await this.auth._redirectUserForId(TT.eventId);
                if (oT) return this.user = oT, super.onAuthEvent(TT);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function hz(TT, oT) {
          return mz(TT)._set(ez(oT), "true")
        }

        function wz(TT, oT) {
          Az.set(TT._key(), oT)
        }

        function mz(TT) {
          return ko(TT._redirectPersistence)
        }

        function ez(TT) {
          return Bo(rz, TT.config.apiKey, TT.name)
        }

        function Rz(TT, oT, IT) {
          return async function(TT, oT, IT) {
            const iT = Jo(TT);
            eT(TT, oT, II), await iT._initializationPromise;
            const zT = Wz(iT, IT);
            return await hz(zT, iT), zT._openRedirect(iT, oT, "signInViaRedirect")
          }(TT, oT, IT)
        }

        function uz(TT, oT, IT) {
          return async function(TT, oT, IT) {
            const zT = (0, iT.L)(TT);
            eT(zT.auth, oT, II), await zT.auth._initializationPromise;
            const kT = Wz(zT.auth, IT);
            await hz(kT, zT.auth);
            const WT = await Cz(zT);
            return kT._openRedirect(zT.auth, oT, "reauthViaRedirect", WT)
          }(TT, oT, IT)
        }

        function vz(TT, oT, IT) {
          return async function(TT, oT, IT) {
            const zT = (0, iT.L)(TT);
            eT(zT.auth, oT, II), await zT.auth._initializationPromise;
            const kT = Wz(zT.auth, IT);
            await hI(!1, zT, oT.providerId), await hz(kT, zT.auth);
            const WT = await Cz(zT);
            return kT._openRedirect(zT.auth, oT, "linkViaRedirect", WT)
          }(TT, oT, IT)
        }
        async function Ez(TT, oT) {
          return await Jo(TT)._initializationPromise, fz(TT, oT, !1)
        }
        async function fz(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const iT = Jo(TT),
            zT = Wz(iT, oT),
            kT = new gz(iT, zT, IT),
            WT = await kT.execute();
          return WT && !IT && (delete WT.user._redirectEventId, await iT._persistUserIfCurrent(WT.user), await iT._setRedirectUser(null, oT)), WT
        }
        async function Cz(TT) {
          const oT = vi(`${TT.uid}:::`);
          return TT._redirectEventId = oT, await TT.auth._setRedirectUser(TT), await TT.auth._persistUserIfCurrent(TT), oT
        }
        class jz {
          constructor(TT) {
            this.auth = TT, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(TT) {
            this.consumers.add(TT), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, TT) && (this.sendToConsumer(this.queuedRedirectEvent, TT), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(TT) {
            this.consumers.delete(TT)
          }
          onEvent(TT) {
            if (this.hasEventBeenHandled(TT)) return !1;
            let oT = !1;
            return this.consumers.forEach((IT => {
              this.isEventForConsumer(TT, IT) && (oT = !0, this.sendToConsumer(TT, IT), this.saveEventToCache(TT))
            })), this.hasHandledPotentialRedirect || ! function(TT) {
              switch (TT.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Uz(TT);
                default:
                  return !1
              }
            }(TT) || (this.hasHandledPotentialRedirect = !0, oT || (this.queuedRedirectEvent = TT, oT = !0)), oT
          }
          sendToConsumer(TT, oT) {
            var IT;
            if (TT.error && !Uz(TT)) {
              const iT = (null === (IT = TT.error.code) || void 0 === IT ? void 0 : IT.split("auth/")[1]) || "internal-error";
              oT.onError(wT(this.auth, iT))
            } else oT.onAuthEvent(TT)
          }
          isEventForConsumer(TT, oT) {
            const IT = null === oT.eventId || !!TT.eventId && TT.eventId === oT.eventId;
            return oT.filter.includes(TT.type) && IT
          }
          hasEventBeenHandled(TT) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Jz(TT))
          }
          saveEventToCache(TT) {
            this.cachedEventUids.add(Jz(TT)), this.lastProcessedEventTime = Date.now()
          }
        }

        function Jz(TT) {
          return [TT.type, TT.eventId, TT.sessionId, TT.tenantId].filter((TT => TT)).join("-")
        }

        function Uz(TT) {
          let {
            type: oT,
            error: IT
          } = TT;
          return "unknown" === oT && "auth/no-auth-event" === (null === IT || void 0 === IT ? void 0 : IT.code)
        }
        const az = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Yz = /^https?/;
        async function Qz(TT) {
          if (TT.config.emulator) return;
          const {
            authorizedDomains: oT
          } = await async function(TT) {
            return HT(TT, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(TT);
          for (const iT of oT) try {
            if (Oz(iT)) return
          } catch (IT) {}
          hT(TT, "unauthorized-domain")
        }

        function Oz(TT) {
          const oT = fT(),
            {
              protocol: IT,
              hostname: iT
            } = new URL(oT);
          if (TT.startsWith("chrome-extension://")) {
            const zT = new URL(TT);
            return "" === zT.hostname && "" === iT ? "chrome-extension:" === IT && TT.replace("chrome-extension://", "") === oT.replace("chrome-extension://", "") : "chrome-extension:" === IT && zT.hostname === iT
          }
          if (!Yz.test(IT)) return !1;
          if (az.test(TT)) return iT === TT;
          const zT = TT.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + zT + "|" + zT + ")$", "i").test(iT)
        }
        const Hz = new JT(3e4, 6e4);

        function nz() {
          const TT = fi().___jsl;
          if (null === TT || void 0 === TT ? void 0 : TT.H)
            for (const oT of Object.keys(TT.H))
              if (TT.H[oT].r = TT.H[oT].r || [], TT.H[oT].L = TT.H[oT].L || [], TT.H[oT].r = [...TT.H[oT].L], TT.CP)
                for (let IT = 0; IT < TT.CP.length; IT++) TT.CP[IT] = null
        }
        let qz = null;

        function Zz(TT) {
          return qz = qz || function(TT) {
            return new Promise(((oT, IT) => {
              var iT, zT, kT;

              function WT() {
                nz(), gapi.load("gapi.iframes", {
                  callback: () => {
                    oT(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    nz(), IT(wT(TT, "network-request-failed"))
                  },
                  timeout: Hz.get()
                })
              }
              if (null === (zT = null === (iT = fi().gapi) || void 0 === iT ? void 0 : iT.iframes) || void 0 === zT ? void 0 : zT.Iframe) oT(gapi.iframes.getContext());
              else {
                if (!(null === (kT = fi().gapi) || void 0 === kT ? void 0 : kT.load)) {
                  const oT = vo("iframefcb");
                  return fi()[oT] = () => {
                    gapi.load ? WT() : IT(wT(TT, "network-request-failed"))
                  }, uo(`https://apis.google.com/js/api.js?onload=${oT}`).catch((TT => IT(TT)))
                }
                WT()
              }
            })).catch((TT => {
              throw qz = null, TT
            }))
          }(TT), qz
        }
        const lz = new JT(5e3, 15e3),
          sz = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          tz = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Gz(TT) {
          const oT = TT.config;
          uT(oT.authDomain, TT, "auth-domain-config-required");
          const IT = oT.emulator ? UT(oT, "emulator/auth/iframe") : `https://${TT.config.authDomain}/__/auth/iframe`,
            kT = {
              apiKey: oT.apiKey,
              appName: TT.name,
              v: zT.d
            },
            WT = tz.get(TT.config.apiHost);
          WT && (kT.eid = WT);
          const XT = TT._getFrameworks();
          return XT.length && (kT.fw = XT.join(",")), `${IT}?${(0,iT.ib)(kT).slice(1)}`
        }
        const pz = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class bz {
          constructor(TT) {
            this.window = TT, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (TT) {}
          }
        }

        function yz(TT, oT, IT) {
          let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const WT = Math.max((window.screen.availHeight - kT) / 2, 0).toString(),
            XT = Math.max((window.screen.availWidth - zT) / 2, 0).toString();
          let BT = "";
          const FT = Object.assign(Object.assign({}, pz), {
              width: zT.toString(),
              height: kT.toString(),
              top: WT,
              left: XT
            }),
            ST = (0, iT.P)().toLowerCase();
          IT && (BT = xo(ST) ? "_blank" : IT), Do(ST) && (oT = oT || "http://localhost", FT.scrollbars = "yes");
          const DT = Object.entries(FT).reduce(((TT, oT) => {
            let [IT, iT] = oT;
            return `${TT}${IT}=${iT},`
          }), "");
          if (function() {
              var TT;
              return Ao(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.P)()) && !!(null === (TT = window.navigator) || void 0 === TT ? void 0 : TT.standalone)
            }(ST) && "_self" !== BT) return function(TT, oT) {
            const IT = document.createElement("a");
            IT.href = TT, IT.target = oT;
            const iT = document.createEvent("MouseEvent");
            iT.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), IT.dispatchEvent(iT)
          }(oT || "", BT), new bz(null);
          const LT = window.open(oT || "", BT, DT);
          uT(LT, TT, "popup-blocked");
          try {
            LT.focus()
          } catch (xT) {}
          return new bz(LT)
        }
        const Nz = "__/auth/handler",
          Pz = "emulator/auth/handler",
          dz = encodeURIComponent("fac");
        async function Vz(TT, oT, IT, kT, WT, XT) {
            uT(TT.config.authDomain, TT, "auth-domain-config-required"), uT(TT.config.apiKey, TT, "invalid-api-key");
            const BT = {
              apiKey: TT.config.apiKey,
              appName: TT.name,
              authType: IT,
              redirectUrl: kT,
              v: zT.d,
              eventId: WT
            };
            if (oT instanceof II) {
              oT.setDefaultLanguage(TT.languageCode), BT.providerId = oT.providerId || "", (0, iT.V)(oT.getCustomParameters()) || (BT.customParameters = JSON.stringify(oT.getCustomParameters()));
              for (const [TT, oT] of Object.entries(XT || {})) BT[TT] = oT
            }
            if (oT instanceof iI) {
              const TT = oT.getScopes().filter((TT => "" !== TT));
              TT.length > 0 && (BT.scopes = TT.join(","))
            }
            TT.tenantId && (BT.tid = TT.tenantId);
            const FT = BT;
            for (const iT of Object.keys(FT)) void 0 === FT[iT] && delete FT[iT];
            const ST = await TT._getAppCheckToken(),
              DT = ST ? `#${dz}=${encodeURIComponent(ST)}` : "";
            return `${function(TT){let{config:oT}=TT;if(!oT.emulator)return`
            https: //${oT.authDomain}/${Nz}`;return UT(oT,Pz)}(TT)}?${(0,iT.ib)(FT).slice(1)}${DT}`}const Tk="webStorageSupport";const Ik=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ri,this._completeRedirectFn=fz,this._overrideRedirectResult=wz}async _openPopup(TT,oT,IT,iT){var zT;ET(null===(zT=this.eventManagers[TT._key()])||void 0===zT?void 0:zT.manager,"_initialize() not called before _openPopup()");return yz(TT,await Vz(TT,oT,IT,fT(),iT),vi())}async _openRedirect(TT,oT,IT,iT){await this._originValidation(TT);return function(TT){fi().location.href=TT}(await Vz(TT,oT,IT,fT(),iT)),new Promise((()=>{}))}_initialize(TT){const oT=TT._key();if(this.eventManagers[oT]){const{manager:TT,promise:IT}=this.eventManagers[oT];return TT?Promise.resolve(TT):(ET(IT,"If manager is not set, promise should be"),IT)}const IT=this.initAndGetManager(TT);return this.eventManagers[oT]={promise:IT},IT.catch((()=>{delete this.eventManagers[oT]})),IT}async initAndGetManager(TT){const oT=await async function(TT){const oT=await Zz(TT),IT=fi().gapi;return uT(IT,TT,"internal-error"),oT.open({where:document.body,url:Gz(TT),messageHandlersFilter:IT.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sz,dontclear:!0},(oT=>new Promise((async(IT,iT)=>{await oT.restyle({setHideOnLeave:!1});const zT=wT(TT,"network-request-failed"),kT=fi().setTimeout((()=>{iT(zT)}),lz.get());function WT(){fi().clearTimeout(kT),IT(oT)}oT.ping(WT).then(WT,(()=>{iT(zT)}))}))))}(TT),IT=new jz(TT);return oT.register("authEvent",(oT=>{uT(null===oT||void 0===oT?void 0:oT.authEvent,TT,"invalid-auth-event");return{status:IT.onEvent(oT.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[TT._key()]={manager:IT},this.iframes[TT._key()]=oT,IT}_isIframeWebStorageSupported(TT,oT){this.iframes[TT._key()].send(Tk,{type:Tk},(IT=>{var iT;const zT=null===(iT=null===IT||void 0===IT?void 0:IT[0])||void 0===iT?void 0:iT[Tk];void 0!==zT&&oT(!!zT),hT(TT,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(TT){const oT=TT._key();return this.originValidationPromises[oT]||(this.originValidationPromises[oT]=Qz(TT)),this.originValidationPromises[oT]}get _shouldInitProactively(){return go()||Lo()||Ao()}};class ik{constructor(TT){this.factorId=TT}_process(TT,oT,IT){switch(oT.type){case"enroll":return this._finalizeEnroll(TT,oT.credential,IT);case"signin":return this._finalizeSignIn(TT,oT.credential);default:return vT("unexpected MultiFactorSessionType")}}}class zk extends ik{constructor(TT){super("phone"),this.credential=TT}static _fromCredential(TT){return new zk(TT)}_finalizeEnroll(TT,oT,IT){return function(TT,oT){return HT(TT,"POST","/v2/accounts/mfaEnrollment:finalize",OT(TT,oT))}(TT,{idToken:oT,displayName:IT,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(TT,oT){return function(TT,oT){return HT(TT,"POST","/v2/accounts/mfaSignIn:finalize",OT(TT,oT))}(TT,{mfaPendingCredential:oT,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kk{constructor(){}static assertion(TT){return zk._fromCredential(TT)}}kk.FACTOR_ID="phone";class Wk{static assertionForEnrollment(TT,oT){return Xk._fromSecret(TT,oT)}static assertionForSignIn(TT,oT){return Xk._fromEnrollmentId(TT,oT)}static async generateSecret(TT){const oT=TT;uT("undefined"!==typeof oT.auth,"internal-error");const IT=await(iT=oT.auth,zT={idToken:oT.credential,totpEnrollmentInfo:{}},HT(iT,"POST","/v2/accounts/mfaEnrollment:start",OT(iT,zT)));var iT,zT;return Bk._fromStartTotpMfaEnrollmentResponse(IT,oT.auth)}}Wk.FACTOR_ID="totp";class Xk extends ik{constructor(TT,oT,IT){super("totp"),this.otp=TT,this.enrollmentId=oT,this.secret=IT}static _fromSecret(TT,oT){return new Xk(oT,void 0,TT)}static _fromEnrollmentId(TT,oT){return new Xk(oT,TT)}async _finalizeEnroll(TT,oT,IT){return uT("undefined"!==typeof this.secret,TT,"argument-error"),function(TT,oT){return HT(TT,"POST","/v2/accounts/mfaEnrollment:finalize",OT(TT,oT))}(TT,{idToken:oT,displayName:IT,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(TT,oT){uT(void 0!==this.enrollmentId&&void 0!==this.otp,TT,"argument-error");const IT={verificationCode:this.otp};return function(TT,oT){return HT(TT,"POST","/v2/accounts/mfaSignIn:finalize",OT(TT,oT))}(TT,{mfaPendingCredential:oT,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:IT})}}class Bk{constructor(TT,oT,IT,iT,zT,kT,WT){this.sessionInfo=kT,this.auth=WT,this.secretKey=TT,this.hashingAlgorithm=oT,this.codeLength=IT,this.codeIntervalSeconds=iT,this.enrollmentCompletionDeadline=zT}static _fromStartTotpMfaEnrollmentResponse(TT,oT){return new Bk(TT.totpSessionInfo.sharedSecretKey,TT.totpSessionInfo.hashingAlgorithm,TT.totpSessionInfo.verificationCodeLength,TT.totpSessionInfo.periodSec,new Date(TT.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),TT.totpSessionInfo.sessionInfo,oT)}_makeTotpVerificationInfo(TT){return{sessionInfo:this.sessionInfo,verificationCode:TT}}generateQrCodeUrl(TT,oT){var IT;let iT=!1;return(Fk(TT)||Fk(oT))&&(iT=!0),iT&&(Fk(TT)&&(TT=(null===(IT=this.auth.currentUser)||void 0===IT?void 0:IT.email)||"unknownuser"),Fk(oT)&&(oT=this.auth.name)),`otpauth://totp/${oT}:${TT}?secret=${this.secretKey}&issuer=${oT}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Fk(TT){return"undefined"===typeof TT||0===(null===TT||void 0===TT?void 0:TT.length)}var Sk="@firebase/auth",Dk="0.23.2";class Lk{constructor(TT){this.auth=TT,this.internalListeners=new Map}getUid(){var TT;return this.assertAuthConfigured(),(null===(TT=this.auth.currentUser)||void 0===TT?void 0:TT.uid)||null}async getToken(TT){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(TT)}}addAuthTokenListener(TT){if(this.assertAuthConfigured(),this.internalListeners.has(TT))return;const oT=this.auth.onIdTokenChanged((oT=>{TT((null===oT||void 0===oT?void 0:oT.stsTokenManager.accessToken)||null)}));this.internalListeners.set(TT,oT),this.updateProactiveRefresh()}removeAuthTokenListener(TT){this.assertAuthConfigured();const oT=this.internalListeners.get(TT);oT&&(this.internalListeners.delete(TT),oT(),this.updateProactiveRefresh())}assertAuthConfigured(){uT(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const xk=(0,iT.H)("authIdTokenMaxAge")||300;let ck=null;const Kk=TT=>async oT=>{const IT=oT&&await oT.getIdTokenResult(),iT=IT&&((new Date).getTime()-Date.parse(IT.issuedAtTime))/1e3;if(iT&&iT>xk)return;const zT=null===IT||void 0===IT?void 0:IT.token;ck!==zT&&(ck=zT,await fetch(TT,{method:zT?"POST":"DELETE",headers:zT?{Authorization:`Bearer ${zT}`}:{}}))};function Mk(){let TT=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,zT.E)();const oT=(0,zT.t)(TT,"auth");if(oT.isInitialized())return oT.getImmediate();const IT=ao(TT,{popupRedirectResolver:Ik,persistence:[qi,mi,Ri]}),kT=(0,iT.H)("authTokenSyncURL");if(kT){const TT=Kk(kT);Wi(IT,TT,(()=>TT(IT.currentUser))),ki(IT,(oT=>TT(oT)))}const WT=(0,iT.E)("auth");return WT&&Yo(IT,`http://${WT}`),IT}var rk;rk="Browser",(0,zT.u)(new XT.d("auth",((TT,oT)=>{let{options:IT}=oT;const iT=TT.getProvider("app").getImmediate(),zT=TT.getProvider("heartbeat"),kT=TT.getProvider("app-check-internal"),{apiKey:WT,authDomain:XT}=iT.options;uT(WT&&!WT.includes(":"),"invalid-api-key",{appName:iT.name});const BT={apiKey:WT,authDomain:XT,clientPlatform:rk,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ho(rk)},FT=new jo(iT,zT,kT,BT);return function(TT,oT){const IT=(null===oT||void 0===oT?void 0:oT.persistence)||[],iT=(Array.isArray(IT)?IT:[IT]).map(ko);(null===oT||void 0===oT?void 0:oT.errorMap)&&TT._updateErrorMap(oT.errorMap),TT._initializeWithPersistence(iT,null===oT||void 0===oT?void 0:oT.popupRedirectResolver)}(FT,IT),FT}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((TT,oT,IT)=>{TT.getProvider("auth-internal").initialize()}))),(0,zT.u)(new XT.d("auth-internal",(TT=>(TT=>new Lk(TT))(Jo(TT.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,zT.J)(Sk,Dk,function(TT){switch(TT){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(rk)),(0,zT.J)(Sk,Dk,"esm2017")}};Object.freeze(modules);for(const TT in modules)Object.freeze(modules[TT]);