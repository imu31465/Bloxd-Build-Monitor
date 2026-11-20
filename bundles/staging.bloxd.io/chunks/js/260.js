/*! For license information please see bcgkc.260.73937a4e.chunk.js.LICENSE.txt */
export const id = 260;
export const ids = [260];
export const modules = {
    40160: (TT, kT, cT) => {
        cT.r(kT), cT.d(kT, {
          ActionCodeOperation: () => CT,
          ActionCodeURL: () => qk,
          AuthCredential: () => Xk,
          AuthErrorCodes: () => NT,
          EmailAuthCredential: () => Bk,
          EmailAuthProvider: () => Tc,
          FacebookAuthProvider: () => Mc,
          FactorId: () => fT,
          GithubAuthProvider: () => Oc,
          GoogleAuthProvider: () => Kc,
          OAuthCredential: () => nk,
          OAuthProvider: () => lc,
          OperationType: () => AT,
          PhoneAuthCredential: () => ik,
          PhoneAuthProvider: () => cM,
          PhoneMultiFactorGenerator: () => kK,
          ProviderId: () => xT,
          RecaptchaVerifier: () => nl,
          SAMLAuthProvider: () => fc,
          SignInMethod: () => IT,
          TotpMultiFactorGenerator: () => cK,
          TotpSecret: () => MK,
          TwitterAuthProvider: () => xc,
          applyActionCode: () => ec,
          beforeAuthStateChanged: () => Kl,
          browserLocalPersistence: () => Dl,
          browserPopupRedirectResolver: () => qM,
          browserSessionPersistence: () => Fl,
          checkActionCode: () => Gc,
          confirmPasswordReset: () => Hc,
          connectAuthEmulator: () => Ek,
          createUserWithEmailAndPassword: () => Ec,
          debugErrorMap: () => vT,
          deleteUser: () => Il,
          fetchSignInMethodsForEmail: () => Lc,
          getAdditionalUserInfo: () => kl,
          getAuth: () => CK,
          getIdToken: () => YT,
          getIdTokenResult: () => BT,
          getMultiFactorResolver: () => jl,
          getRedirectResult: () => PM,
          inMemoryPersistence: () => yk,
          indexedDBLocalPersistence: () => ul,
          initializeAuth: () => Vk,
          initializeRecaptchaConfig: () => ll,
          isSignInWithEmailLink: () => Xc,
          linkWithCredential: () => rc,
          linkWithPhoneNumber: () => ql,
          linkWithPopup: () => CM,
          linkWithRedirect: () => rM,
          multiFactor: () => hl,
          onAuthStateChanged: () => Ol,
          onIdTokenChanged: () => Ml,
          parseActionCodeURL: () => sk,
          prodErrorMap: () => tT,
          reauthenticateWithCredential: () => Pc,
          reauthenticateWithPhoneNumber: () => sl,
          reauthenticateWithPopup: () => AM,
          reauthenticateWithRedirect: () => FM,
          reload: () => Tk,
          sendEmailVerification: () => Rc,
          sendPasswordResetEmail: () => oc,
          sendSignInLinkToEmail: () => uc,
          setPersistence: () => cl,
          signInAnonymously: () => jc,
          signInWithCredential: () => Fc,
          signInWithCustomToken: () => wc,
          signInWithEmailAndPassword: () => Zc,
          signInWithEmailLink: () => dc,
          signInWithPhoneNumber: () => il,
          signInWithPopup: () => IM,
          signInWithRedirect: () => aM,
          signOut: () => xl,
          unlink: () => Nc,
          updateCurrentUser: () => fl,
          updateEmail: () => Yc,
          updatePassword: () => Bc,
          updatePhoneNumber: () => kM,
          updateProfile: () => Uc,
          useDeviceLanguage: () => yl,
          verifyBeforeUpdateEmail: () => gc,
          verifyPasswordResetCode: () => Vc
        });
        var lT = cT(40144),
          MT = cT(40137);

        function KT(TT, kT) {
          var cT = {};
          for (var lT in TT) Object.prototype.hasOwnProperty.call(TT, lT) && kT.indexOf(lT) < 0 && (cT[lT] = TT[lT]);
          if (null != TT && "function" === typeof Object.getOwnPropertySymbols) {
            var MT = 0;
            for (lT = Object.getOwnPropertySymbols(TT); MT < lT.length; MT++) kT.indexOf(lT[MT]) < 0 && Object.prototype.propertyIsEnumerable.call(TT, lT[MT]) && (cT[lT[MT]] = TT[lT[MT]])
          }
          return cT
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var OT = cT(40149),
          yT = cT(40140);
        const fT = {
            PHONE: "phone",
            TOTP: "totp"
          },
          xT = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          IT = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          AT = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          CT = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function jT() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const vT = function() {
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
          tT = jT,
          hT = new lT.f("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          NT = {
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
          QT = new OT.f("@firebase/auth");

        function ST(TT) {
          if (QT.logLevel <= OT.e.ERROR) {
            for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
            QT.error(`Auth (${MT.e}): ${TT}`, ...cT)
          }
        }

        function DT(TT) {
          for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
          throw PT(TT, ...cT)
        }

        function aT(TT) {
          for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
          return PT(TT, ...cT)
        }

        function FT(TT, kT, cT) {
          const MT = Object.assign(Object.assign({}, tT()), {
            [kT]: cT
          });
          return new lT.f("auth", "Firebase", MT).create(kT, {
            appName: TT.name
          })
        }

        function rT(TT, kT, cT) {
          if (!(kT instanceof cT)) throw cT.name !== kT.constructor.name && DT(TT, "argument-error"), FT(TT, "argument-error", `Type of ${kT.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function PT(TT) {
          for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
          if ("string" !== typeof TT) {
            const kT = cT[0],
              lT = [...cT.slice(1)];
            return lT[0] && (lT[0].appName = TT.name), TT._errorFactory.create(kT, ...lT)
          }
          return hT.create(TT, ...cT)
        }

        function wT(TT, kT) {
          if (!TT) {
            for (var cT = arguments.length, lT = new Array(cT > 2 ? cT - 2 : 0), MT = 2; MT < cT; MT++) lT[MT - 2] = arguments[MT];
            throw PT(kT, ...lT)
          }
        }

        function mT(TT) {
          const kT = "INTERNAL ASSERTION FAILED: " + TT;
          throw ST(kT), new Error(kT)
        }

        function bT(TT, kT) {
          TT || mT(kT)
        }

        function zT() {
          var TT;
          return "undefined" !== typeof self && (null === (TT = self.location) || void 0 === TT ? void 0 : TT.href) || ""
        }

        function JT() {
          return "http:" === oT() || "https:" === oT()
        }

        function oT() {
          var TT;
          return "undefined" !== typeof self && (null === (TT = self.location) || void 0 === TT ? void 0 : TT.protocol) || null
        }
        class HT {
          constructor(TT, kT) {
            this.shortDelay = TT, this.longDelay = kT, bT(kT > TT, "Short delay should be less than long delay!"), this.isMobile = (0, lT.Y)() || (0, lT.ab)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (JT() || (0, lT.O)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function eT(TT, kT) {
          bT(TT.emulator, "Emulator should always be set here");
          const {
            url: cT
          } = TT.emulator;
          return kT ? `${cT}${kT.startsWith("/")?kT.slice(1):kT}` : cT
        }
        class GT {
          static initialize(TT, kT, cT) {
            this.fetchImpl = TT, kT && (this.headersImpl = kT), cT && (this.responseImpl = cT)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void mT("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void mT("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void mT("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const VT = {
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
          ET = new HT(3e4, 6e4);

        function ZT(TT, kT) {
          return TT.tenantId && !kT.tenantId ? Object.assign(Object.assign({}, kT), {
            tenantId: TT.tenantId
          }) : kT
        }
        async function uT(TT, kT, cT, MT) {
          return XT(TT, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let KT = {},
              OT = {};
            MT && ("GET" === kT ? OT = MT : KT = {
              body: JSON.stringify(MT)
            });
            const yT = (0, lT.fb)(Object.assign({
                key: TT.config.apiKey
              }, OT)).slice(1),
              fT = await TT._getAdditionalHeaders();
            return fT["Content-Type"] = "application/json", TT.languageCode && (fT["X-Firebase-Locale"] = TT.languageCode), GT.fetch()(LT(TT, TT.config.apiHost, cT, yT), Object.assign({
              method: kT,
              headers: fT,
              referrerPolicy: "no-referrer"
            }, KT))
          }))
        }
        async function XT(TT, kT, cT) {
          TT._canInitEmulator = !1;
          const MT = Object.assign(Object.assign({}, VT), kT);
          try {
            const kT = new RT(TT),
              lT = await Promise.race([cT(), kT.promise]);
            kT.clearNetworkTimeout();
            const KT = await lT.json();
            if ("needConfirmation" in KT) throw gT(TT, "account-exists-with-different-credential", KT);
            if (lT.ok && !("errorMessage" in KT)) return KT;
            {
              const kT = lT.ok ? KT.errorMessage : KT.error.message,
                [cT, OT] = kT.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === cT) throw gT(TT, "credential-already-in-use", KT);
              if ("EMAIL_EXISTS" === cT) throw gT(TT, "email-already-in-use", KT);
              if ("USER_DISABLED" === cT) throw gT(TT, "user-disabled", KT);
              const yT = MT[cT] || cT.toLowerCase().replace(/[_\s]+/g, "-");
              if (OT) throw FT(TT, yT, OT);
              DT(TT, yT)
            }
          } catch (KT) {
            if (KT instanceof lT.j) throw KT;
            DT(TT, "network-request-failed", {
              message: String(KT)
            })
          }
        }
        async function dT(TT, kT, cT, lT) {
          let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const KT = await uT(TT, kT, cT, lT, MT);
          return "mfaPendingCredential" in KT && DT(TT, "multi-factor-auth-required", {
            _serverResponse: KT
          }), KT
        }

        function LT(TT, kT, cT, lT) {
          const MT = `${kT}${cT}?${lT}`;
          return TT.config.emulator ? eT(TT.config, MT) : `${TT.config.apiScheme}://${MT}`
        }
        class RT {
          constructor(TT) {
            this.auth = TT, this.timer = null, this.promise = new Promise(((TT, kT) => {
              this.timer = setTimeout((() => kT(aT(this.auth, "network-request-failed"))), ET.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function gT(TT, kT, cT) {
          const lT = {
            appName: TT.name
          };
          cT.email && (lT.email = cT.email), cT.phoneNumber && (lT.phoneNumber = cT.phoneNumber);
          const MT = aT(TT, kT, lT);
          return MT.customData._tokenResponse = cT, MT
        }

        function UT(TT) {
          if (TT) try {
            const kT = new Date(Number(TT));
            if (!isNaN(kT.getTime())) return kT.toUTCString()
          } catch (kT) {}
        }

        function YT(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, lT.L)(TT).getIdToken(kT)
        }
        async function BT(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const cT = (0, lT.L)(TT),
            MT = await cT.getIdToken(kT),
            KT = nT(MT);
          wT(KT && KT.exp && KT.auth_time && KT.iat, cT.auth, "internal-error");
          const OT = "object" === typeof KT.firebase ? KT.firebase : void 0,
            yT = null === OT || void 0 === OT ? void 0 : OT.sign_in_provider;
          return {
            claims: KT,
            token: MT,
            authTime: UT(WT(KT.auth_time)),
            issuedAtTime: UT(WT(KT.iat)),
            expirationTime: UT(WT(KT.exp)),
            signInProvider: yT || null,
            signInSecondFactor: (null === OT || void 0 === OT ? void 0 : OT.sign_in_second_factor) || null
          }
        }

        function WT(TT) {
          return 1e3 * Number(TT)
        }

        function nT(TT) {
          const [kT, cT, MT] = TT.split(".");
          if (void 0 === kT || void 0 === cT || void 0 === MT) return ST("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const TT = (0, lT.o)(cT);
            return TT ? JSON.parse(TT) : (ST("Failed to decode base64 JWT payload"), null)
          } catch (KT) {
            return ST("Caught error parsing JWT payload as JSON", null === KT || void 0 === KT ? void 0 : KT.toString()), null
          }
        }
        async function pT(TT, kT) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return kT;
          try {
            return await kT
          } catch (cT) {
            throw cT instanceof lT.j && function(TT) {
              let {
                code: kT
              } = TT;
              return "auth/user-disabled" === kT || "auth/user-token-expired" === kT
            }(cT) && TT.auth.currentUser === TT && await TT.auth.signOut(), cT
          }
        }
        class iT {
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
            var kT;
            if (TT) {
              const TT = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), TT
            } {
              this.errorBackoff = 3e4;
              const TT = (null !== (kT = this.user.stsTokenManager.expirationTime) && void 0 !== kT ? kT : 0) - Date.now() - 3e5;
              return Math.max(0, TT)
            }
          }
          schedule() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const kT = this.getInterval(TT);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), kT)
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
        class qT {
          constructor(TT, kT) {
            this.createdAt = TT, this.lastLoginAt = kT, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = UT(this.lastLoginAt), this.creationTime = UT(this.createdAt)
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
        async function sT(TT) {
          var kT;
          const cT = TT.auth,
            lT = await TT.getIdToken(),
            MT = await pT(TT, async function(TT, kT) {
              return uT(TT, "POST", "/v1/accounts:lookup", kT)
            }(cT, {
              idToken: lT
            }));
          wT(null === MT || void 0 === MT ? void 0 : MT.users.length, cT, "internal-error");
          const OT = MT.users[0];
          TT._notifyReloadListener(OT);
          const yT = (null === (kT = OT.providerUserInfo) || void 0 === kT ? void 0 : kT.length) ? OT.providerUserInfo.map((TT => {
            var {
              providerId: kT
            } = TT, cT = KT(TT, ["providerId"]);
            return {
              providerId: kT,
              uid: cT.rawId || "",
              displayName: cT.displayName || null,
              email: cT.email || null,
              phoneNumber: cT.phoneNumber || null,
              photoURL: cT.photoUrl || null
            }
          })) : [];
          const fT = (xT = TT.providerData, IT = yT, [...xT.filter((TT => !IT.some((kT => kT.providerId === TT.providerId)))), ...IT]);
          var xT, IT;
          const AT = TT.isAnonymous,
            CT = !(TT.email && OT.passwordHash) && !(null === fT || void 0 === fT ? void 0 : fT.length),
            jT = !!AT && CT,
            vT = {
              uid: OT.localId,
              displayName: OT.displayName || null,
              photoURL: OT.photoUrl || null,
              email: OT.email || null,
              emailVerified: OT.emailVerified || !1,
              phoneNumber: OT.phoneNumber || null,
              tenantId: OT.tenantId || null,
              providerData: fT,
              metadata: new qT(OT.createdAt, OT.lastLoginAt),
              isAnonymous: jT
            };
          Object.assign(TT, vT)
        }
        async function Tk(TT) {
          const kT = (0, lT.L)(TT);
          await sT(kT), await kT.auth._persistUserIfCurrent(kT), kT.auth._notifyListenersIfCurrent(kT)
        }
        class kk {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(TT) {
            wT(TT.idToken, "internal-error"), wT("undefined" !== typeof TT.idToken, "internal-error"), wT("undefined" !== typeof TT.refreshToken, "internal-error");
            const kT = "expiresIn" in TT && "undefined" !== typeof TT.expiresIn ? Number(TT.expiresIn) : function(TT) {
              const kT = nT(TT);
              return wT(kT, "internal-error"), wT("undefined" !== typeof kT.exp, "internal-error"), wT("undefined" !== typeof kT.iat, "internal-error"), Number(kT.exp) - Number(kT.iat)
            }(TT.idToken);
            this.updateTokensAndExpiration(TT.idToken, TT.refreshToken, kT)
          }
          async getToken(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return wT(!this.accessToken || this.refreshToken, TT, "user-token-expired"), kT || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(TT, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(TT, kT) {
            const {
              accessToken: cT,
              refreshToken: MT,
              expiresIn: KT
            } = await async function(TT, kT) {
              const cT = await XT(TT, {}, (async () => {
                const cT = (0, lT.fb)({
                    grant_type: "refresh_token",
                    refresh_token: kT
                  }).slice(1),
                  {
                    tokenApiHost: MT,
                    apiKey: KT
                  } = TT.config,
                  OT = LT(TT, MT, "/v1/token", `key=${KT}`),
                  yT = await TT._getAdditionalHeaders();
                return yT["Content-Type"] = "application/x-www-form-urlencoded", GT.fetch()(OT, {
                  method: "POST",
                  headers: yT,
                  body: cT
                })
              }));
              return {
                accessToken: cT.access_token,
                expiresIn: cT.expires_in,
                refreshToken: cT.refresh_token
              }
            }(TT, kT);
            this.updateTokensAndExpiration(cT, MT, Number(KT))
          }
          updateTokensAndExpiration(TT, kT, cT) {
            this.refreshToken = kT || null, this.accessToken = TT || null, this.expirationTime = Date.now() + 1e3 * cT
          }
          static fromJSON(TT, kT) {
            const {
              refreshToken: cT,
              accessToken: lT,
              expirationTime: MT
            } = kT, KT = new kk;
            return cT && (wT("string" === typeof cT, "internal-error", {
              appName: TT
            }), KT.refreshToken = cT), lT && (wT("string" === typeof lT, "internal-error", {
              appName: TT
            }), KT.accessToken = lT), MT && (wT("number" === typeof MT, "internal-error", {
              appName: TT
            }), KT.expirationTime = MT), KT
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
            return Object.assign(new kk, this.toJSON())
          }
          _performRefresh() {
            return mT("not implemented")
          }
        }

        function ck(TT, kT) {
          wT("string" === typeof TT || "undefined" === typeof TT, "internal-error", {
            appName: kT
          })
        }
        class lk {
          constructor(TT) {
            var {
              uid: kT,
              auth: cT,
              stsTokenManager: lT
            } = TT, MT = KT(TT, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new iT(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = kT, this.auth = cT, this.stsTokenManager = lT, this.accessToken = lT.accessToken, this.displayName = MT.displayName || null, this.email = MT.email || null, this.emailVerified = MT.emailVerified || !1, this.phoneNumber = MT.phoneNumber || null, this.photoURL = MT.photoURL || null, this.isAnonymous = MT.isAnonymous || !1, this.tenantId = MT.tenantId || null, this.providerData = MT.providerData ? [...MT.providerData] : [], this.metadata = new qT(MT.createdAt || void 0, MT.lastLoginAt || void 0)
          }
          async getIdToken(TT) {
            const kT = await pT(this, this.stsTokenManager.getToken(this.auth, TT));
            return wT(kT, this.auth, "internal-error"), this.accessToken !== kT && (this.accessToken = kT, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), kT
          }
          getIdTokenResult(TT) {
            return BT(this, TT)
          }
          reload() {
            return Tk(this)
          }
          _assign(TT) {
            this !== TT && (wT(this.uid === TT.uid, this.auth, "internal-error"), this.displayName = TT.displayName, this.photoURL = TT.photoURL, this.email = TT.email, this.emailVerified = TT.emailVerified, this.phoneNumber = TT.phoneNumber, this.isAnonymous = TT.isAnonymous, this.tenantId = TT.tenantId, this.providerData = TT.providerData.map((TT => Object.assign({}, TT))), this.metadata._copy(TT.metadata), this.stsTokenManager._assign(TT.stsTokenManager))
          }
          _clone(TT) {
            const kT = new lk(Object.assign(Object.assign({}, this), {
              auth: TT,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return kT.metadata._copy(this.metadata), kT
          }
          _onReload(TT) {
            wT(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = TT, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cT = !1;
            TT.idToken && TT.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(TT), cT = !0), kT && await sT(this), await this.auth._persistUserIfCurrent(this), cT && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const TT = await this.getIdToken();
            return await pT(this, async function(TT, kT) {
              return uT(TT, "POST", "/v1/accounts:delete", kT)
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
          static _fromJSON(TT, kT) {
            var cT, lT, MT, KT, OT, yT, fT, xT;
            const IT = null !== (cT = kT.displayName) && void 0 !== cT ? cT : void 0,
              AT = null !== (lT = kT.email) && void 0 !== lT ? lT : void 0,
              CT = null !== (MT = kT.phoneNumber) && void 0 !== MT ? MT : void 0,
              jT = null !== (KT = kT.photoURL) && void 0 !== KT ? KT : void 0,
              vT = null !== (OT = kT.tenantId) && void 0 !== OT ? OT : void 0,
              tT = null !== (yT = kT._redirectEventId) && void 0 !== yT ? yT : void 0,
              hT = null !== (fT = kT.createdAt) && void 0 !== fT ? fT : void 0,
              NT = null !== (xT = kT.lastLoginAt) && void 0 !== xT ? xT : void 0,
              {
                uid: QT,
                emailVerified: ST,
                isAnonymous: DT,
                providerData: aT,
                stsTokenManager: FT
              } = kT;
            wT(QT && FT, TT, "internal-error");
            const rT = kk.fromJSON(this.name, FT);
            wT("string" === typeof QT, TT, "internal-error"), ck(IT, TT.name), ck(AT, TT.name), wT("boolean" === typeof ST, TT, "internal-error"), wT("boolean" === typeof DT, TT, "internal-error"), ck(CT, TT.name), ck(jT, TT.name), ck(vT, TT.name), ck(tT, TT.name), ck(hT, TT.name), ck(NT, TT.name);
            const PT = new lk({
              uid: QT,
              auth: TT,
              email: AT,
              emailVerified: ST,
              displayName: IT,
              isAnonymous: DT,
              photoURL: jT,
              phoneNumber: CT,
              tenantId: vT,
              stsTokenManager: rT,
              createdAt: hT,
              lastLoginAt: NT
            });
            return aT && Array.isArray(aT) && (PT.providerData = aT.map((TT => Object.assign({}, TT)))), tT && (PT._redirectEventId = tT), PT
          }
          static async _fromIdTokenResponse(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const lT = new kk;
            lT.updateFromServerResponse(kT);
            const MT = new lk({
              uid: kT.localId,
              auth: TT,
              stsTokenManager: lT,
              isAnonymous: cT
            });
            return await sT(MT), MT
          }
        }
        const Mk = new Map;

        function Kk(TT) {
          bT(TT instanceof Function, "Expected a class definition");
          let kT = Mk.get(TT);
          return kT ? (bT(kT instanceof TT, "Instance stored in cache mismatched with class"), kT) : (kT = new TT, Mk.set(TT, kT), kT)
        }
        class Ok {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(TT, kT) {
            this.storage[TT] = kT
          }
          async _get(TT) {
            const kT = this.storage[TT];
            return void 0 === kT ? null : kT
          }
          async _remove(TT) {
            delete this.storage[TT]
          }
          _addListener(TT, kT) {}
          _removeListener(TT, kT) {}
        }
        Ok.type = "NONE";
        const yk = Ok;

        function fk(TT, kT, cT) {
          return `firebase:${TT}:${kT}:${cT}`
        }
        class xk {
          constructor(TT, kT, cT) {
            this.persistence = TT, this.auth = kT, this.userKey = cT;
            const {
              config: lT,
              name: MT
            } = this.auth;
            this.fullUserKey = fk(this.userKey, lT.apiKey, MT), this.fullPersistenceKey = fk("persistence", lT.apiKey, MT), this.boundEventHandler = kT._onStorageEvent.bind(kT), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(TT) {
            return this.persistence._set(this.fullUserKey, TT.toJSON())
          }
          async getCurrentUser() {
            const TT = await this.persistence._get(this.fullUserKey);
            return TT ? lk._fromJSON(this.auth, TT) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(TT) {
            if (this.persistence === TT) return;
            const kT = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = TT, kT ? this.setCurrentUser(kT) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!kT.length) return new xk(Kk(yk), TT, cT);
            const lT = (await Promise.all(kT.map((async TT => {
              if (await TT._isAvailable()) return TT
            })))).filter((TT => TT));
            let MT = lT[0] || Kk(yk);
            const KT = fk(cT, TT.config.apiKey, TT.name);
            let OT = null;
            for (const xT of kT) try {
              const kT = await xT._get(KT);
              if (kT) {
                const cT = lk._fromJSON(TT, kT);
                xT !== MT && (OT = cT), MT = xT;
                break
              }
            } catch (fT) {}
            const yT = lT.filter((TT => TT._shouldAllowMigration));
            return MT._shouldAllowMigration && yT.length ? (MT = yT[0], OT && await MT._set(KT, OT.toJSON()), await Promise.all(kT.map((async TT => {
              if (TT !== MT) try {
                await TT._remove(KT)
              } catch (fT) {}
            }))), new xk(MT, TT, cT)) : new xk(MT, TT, cT)
          }
        }

        function Ik(TT) {
          const kT = TT.toLowerCase();
          if (kT.includes("opera/") || kT.includes("opr/") || kT.includes("opios/")) return "Opera";
          if (vk(kT)) return "IEMobile";
          if (kT.includes("msie") || kT.includes("trident/")) return "IE";
          if (kT.includes("edge/")) return "Edge";
          if (Ak(kT)) return "Firefox";
          if (kT.includes("silk/")) return "Silk";
          if (hk(kT)) return "Blackberry";
          if (Nk(kT)) return "Webos";
          if (Ck(kT)) return "Safari";
          if ((kT.includes("chrome/") || jk(kT)) && !kT.includes("edge/")) return "Chrome";
          if (tk(kT)) return "Android";
          {
            const kT = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              cT = TT.match(kT);
            if (2 === (null === cT || void 0 === cT ? void 0 : cT.length)) return cT[1]
          }
          return "Other"
        }

        function Ak() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)();
          return /firefox\//i.test(TT)
        }

        function Ck() {
          const TT = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)()).toLowerCase();
          return TT.includes("safari/") && !TT.includes("chrome/") && !TT.includes("crios/") && !TT.includes("android")
        }

        function jk() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)();
          return /crios\//i.test(TT)
        }

        function vk() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)();
          return /iemobile/i.test(TT)
        }

        function tk() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)();
          return /android/i.test(TT)
        }

        function hk() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)();
          return /blackberry/i.test(TT)
        }

        function Nk() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)();
          return /webos/i.test(TT)
        }

        function Qk() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)();
          return /iphone|ipad|ipod/i.test(TT) || /macintosh/i.test(TT) && /mobile/i.test(TT)
        }

        function Sk() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)();
          return Qk(TT) || tk(TT) || Nk(TT) || hk(TT) || /windows phone/i.test(TT) || vk(TT)
        }

        function Dk(TT) {
          let kT, cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (TT) {
            case "Browser":
              kT = Ik((0, lT.M)());
              break;
            case "Worker":
              kT = `${Ik((0,lT.M)())}-${TT}`;
              break;
            default:
              kT = TT
          }
          const KT = cT.length ? cT.join(",") : "FirebaseCore-web";
          return `${kT}/JsCore/${MT.e}/${KT}`
        }
        async function ak(TT, kT) {
          return uT(TT, "GET", "/v2/recaptchaConfig", ZT(TT, kT))
        }

        function Fk(TT) {
          return void 0 !== TT && void 0 !== TT.getResponse
        }

        function rk(TT) {
          return void 0 !== TT && void 0 !== TT.enterprise
        }
        class Pk {
          constructor(TT) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === TT.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = TT.recaptchaKey.split("/")[3], this.emailPasswordEnabled = TT.recaptchaEnforcementState.some((TT => "EMAIL_PASSWORD_PROVIDER" === TT.provider && "OFF" !== TT.enforcementState))
          }
        }

        function wk(TT) {
          return new Promise(((kT, cT) => {
            const lT = document.createElement("script");
            lT.setAttribute("src", TT), lT.onload = kT, lT.onerror = TT => {
                const kT = aT("internal-error");
                kT.customData = TT, cT(kT)
              }, lT.type = "text/javascript", lT.charset = "UTF-8",
              function() {
                var TT, kT;
                return null !== (kT = null === (TT = document.getElementsByTagName("head")) || void 0 === TT ? void 0 : TT[0]) && void 0 !== kT ? kT : document
              }().appendChild(lT)
          }))
        }

        function mk(TT) {
          return `__${TT}${Math.floor(1e6*Math.random())}`
        }
        class bk {
          constructor(TT) {
            this.type = "recaptcha-enterprise", this.auth = ek(TT)
          }
          async verify() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function cT(kT, cT, lT) {
              const MT = window.grecaptcha;
              rk(MT) ? MT.enterprise.ready((() => {
                MT.enterprise.execute(kT, {
                  action: TT
                }).then((TT => {
                  cT(TT)
                })).catch((() => {
                  cT("NO_RECAPTCHA")
                }))
              })) : lT(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((TT, lT) => {
              (async function(TT) {
                if (!kT) {
                  if (null == TT.tenantId && null != TT._agentRecaptchaConfig) return TT._agentRecaptchaConfig.siteKey;
                  if (null != TT.tenantId && void 0 !== TT._tenantRecaptchaConfigs[TT.tenantId]) return TT._tenantRecaptchaConfigs[TT.tenantId].siteKey
                }
                return new Promise((async (kT, cT) => {
                  ak(TT, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((lT => {
                    if (void 0 !== lT.recaptchaKey) {
                      const cT = new Pk(lT);
                      return null == TT.tenantId ? TT._agentRecaptchaConfig = cT : TT._tenantRecaptchaConfigs[TT.tenantId] = cT, kT(cT.siteKey)
                    }
                    cT(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((TT => {
                    cT(TT)
                  }))
                }))
              })(this.auth).then((MT => {
                if (!kT && rk(window.grecaptcha)) cT(MT, TT, lT);
                else {
                  if ("undefined" === typeof window) return void lT(new Error("RecaptchaVerifier is only supported in browser"));
                  wk("https://www.google.com/recaptcha/enterprise.js?render=" + MT).then((() => {
                    cT(MT, TT, lT)
                  })).catch((TT => {
                    lT(TT)
                  }))
                }
              })).catch((TT => {
                lT(TT)
              }))
            }))
          }
        }
        async function zk(TT, kT, cT) {
          let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const MT = new bk(TT);
          let KT;
          try {
            KT = await MT.verify(cT)
          } catch (yT) {
            KT = await MT.verify(cT, !0)
          }
          const OT = Object.assign({}, kT);
          return lT ? Object.assign(OT, {
            captchaResp: KT
          }) : Object.assign(OT, {
            captchaResponse: KT
          }), Object.assign(OT, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(OT, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), OT
        }
        class Jk {
          constructor(TT) {
            this.auth = TT, this.queue = []
          }
          pushCallback(TT, kT) {
            const cT = kT => new Promise(((cT, lT) => {
              try {
                cT(TT(kT))
              } catch (MT) {
                lT(MT)
              }
            }));
            cT.onAbort = kT, this.queue.push(cT);
            const lT = this.queue.length - 1;
            return () => {
              this.queue[lT] = () => Promise.resolve()
            }
          }
          async runMiddleware(TT) {
            if (this.auth.currentUser === TT) return;
            const kT = [];
            try {
              for (const cT of this.queue) await cT(TT), cT.onAbort && kT.push(cT.onAbort)
            } catch (cT) {
              kT.reverse();
              for (const TT of kT) try {
                TT()
              } catch (lT) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === cT || void 0 === cT ? void 0 : cT.message
              })
            }
          }
        }
        class Hk {
          constructor(TT, kT, cT, lT) {
            this.app = TT, this.heartbeatServiceProvider = kT, this.appCheckServiceProvider = cT, this.config = lT, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Gk(this), this.idTokenSubscription = new Gk(this), this.beforeStateQueue = new Jk(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = hT, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = TT.name, this.clientVersion = lT.sdkClientVersion
          }
          _initializeWithPersistence(TT, kT) {
            return kT && (this._popupRedirectResolver = Kk(kT)), this._initializationPromise = this.queue((async () => {
              var cT, lT;
              if (!this._deleted && (this.persistenceManager = await xk.create(this, TT), !this._deleted)) {
                if (null === (cT = this._popupRedirectResolver) || void 0 === cT ? void 0 : cT._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (MT) {}
                await this.initializeCurrentUser(kT), this.lastNotifiedUid = (null === (lT = this.currentUser) || void 0 === lT ? void 0 : lT.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const TT = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || TT ? this.currentUser && TT && this.currentUser.uid === TT.uid ? (this._currentUser._assign(TT), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(TT, !0) : void 0
          }
          async initializeCurrentUser(TT) {
            var kT;
            const cT = await this.assertedPersistence.getCurrentUser();
            let lT = cT,
              MT = !1;
            if (TT && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const cT = null === (kT = this.redirectUser) || void 0 === kT ? void 0 : kT._redirectEventId,
                KT = null === lT || void 0 === lT ? void 0 : lT._redirectEventId,
                OT = await this.tryRedirectSignIn(TT);
              cT && cT !== KT || !(null === OT || void 0 === OT ? void 0 : OT.user) || (lT = OT.user, MT = !0)
            }
            if (!lT) return this.directlySetCurrentUser(null);
            if (!lT._redirectEventId) {
              if (MT) try {
                await this.beforeStateQueue.runMiddleware(lT)
              } catch (KT) {
                lT = cT, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(KT)))
              }
              return lT ? this.reloadAndSetCurrentUserOrClear(lT) : this.directlySetCurrentUser(null)
            }
            return wT(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === lT._redirectEventId ? this.directlySetCurrentUser(lT) : this.reloadAndSetCurrentUserOrClear(lT)
          }
          async tryRedirectSignIn(TT) {
            let kT = null;
            try {
              kT = await this._popupRedirectResolver._completeRedirectFn(this, TT, !0)
            } catch (cT) {
              await this._setRedirectUser(null)
            }
            return kT
          }
          async reloadAndSetCurrentUserOrClear(TT) {
            try {
              await sT(TT)
            } catch (kT) {
              if ("auth/network-request-failed" !== (null === kT || void 0 === kT ? void 0 : kT.code)) return this.directlySetCurrentUser(null)
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
            const kT = TT ? (0, lT.L)(TT) : null;
            return kT && wT(kT.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(kT && kT._clone(this))
          }
          async _updateCurrentUser(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return TT && wT(this.tenantId === TT.tenantId, this, "tenant-id-mismatch"), kT || await this.beforeStateQueue.runMiddleware(TT), this.queue((async () => {
              await this.directlySetCurrentUser(TT), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(TT) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Kk(TT))
            }))
          }
          async initializeRecaptchaConfig() {
            const TT = await ak(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              kT = new Pk(TT);
            if (null == this.tenantId ? this._agentRecaptchaConfig = kT : this._tenantRecaptchaConfigs[this.tenantId] = kT, kT.emailPasswordEnabled) {
              new bk(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(TT) {
            this._errorFactory = new lT.f("auth", "Firebase", TT())
          }
          onAuthStateChanged(TT, kT, cT) {
            return this.registerStateListener(this.authStateSubscription, TT, kT, cT)
          }
          beforeAuthStateChanged(TT, kT) {
            return this.beforeStateQueue.pushCallback(TT, kT)
          }
          onIdTokenChanged(TT, kT, cT) {
            return this.registerStateListener(this.idTokenSubscription, TT, kT, cT)
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
          async _setRedirectUser(TT, kT) {
            const cT = await this.getOrInitRedirectPersistenceManager(kT);
            return null === TT ? cT.removeCurrentUser() : cT.setCurrentUser(TT)
          }
          async getOrInitRedirectPersistenceManager(TT) {
            if (!this.redirectPersistenceManager) {
              const kT = TT && Kk(TT) || this._popupRedirectResolver;
              wT(kT, this, "argument-error"), this.redirectPersistenceManager = await xk.create(this, [Kk(kT._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(TT) {
            var kT, cT;
            return this._isInitialized && await this.queue((async () => {})), (null === (kT = this._currentUser) || void 0 === kT ? void 0 : kT._redirectEventId) === TT ? this._currentUser : (null === (cT = this.redirectUser) || void 0 === cT ? void 0 : cT._redirectEventId) === TT ? this.redirectUser : null
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
            var TT, kT;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const cT = null !== (kT = null === (TT = this.currentUser) || void 0 === TT ? void 0 : TT.uid) && void 0 !== kT ? kT : null;
            this.lastNotifiedUid !== cT && (this.lastNotifiedUid = cT, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(TT, kT, cT, lT) {
            if (this._deleted) return () => {};
            const MT = "function" === typeof kT ? kT : kT.next.bind(kT),
              KT = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return wT(KT, this, "internal-error"), KT.then((() => MT(this.currentUser))), "function" === typeof kT ? TT.addObserver(kT, cT, lT) : TT.addObserver(kT)
          }
          async directlySetCurrentUser(TT) {
            this.currentUser && this.currentUser !== TT && this._currentUser._stopProactiveRefresh(), TT && this.isProactiveRefreshEnabled && TT._startProactiveRefresh(), this.currentUser = TT, TT ? await this.assertedPersistence.setCurrentUser(TT) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(TT) {
            return this.operations = this.operations.then(TT, TT), this.operations
          }
          get assertedPersistence() {
            return wT(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(TT) {
            TT && !this.frameworks.includes(TT) && (this.frameworks.push(TT), this.frameworks.sort(), this.clientVersion = Dk(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var TT;
            const kT = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (kT["X-Firebase-gmpid"] = this.app.options.appId);
            const cT = await (null === (TT = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === TT ? void 0 : TT.getHeartbeatsHeader());
            cT && (kT["X-Firebase-Client"] = cT);
            const lT = await this._getAppCheckToken();
            return lT && (kT["X-Firebase-AppCheck"] = lT), kT
          }
          async _getAppCheckToken() {
            var TT;
            const kT = await (null === (TT = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === TT ? void 0 : TT.getToken());
            return (null === kT || void 0 === kT ? void 0 : kT.error) && function(TT) {
              if (QT.logLevel <= OT.e.WARN) {
                for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
                QT.warn(`Auth (${MT.e}): ${TT}`, ...cT)
              }
            }(`Error while retrieving App Check token: ${kT.error}`), null === kT || void 0 === kT ? void 0 : kT.token
          }
        }

        function ek(TT) {
          return (0, lT.L)(TT)
        }
        class Gk {
          constructor(TT) {
            this.auth = TT, this.observer = null, this.addObserver = (0, lT.w)((TT => this.observer = TT))
          }
          get next() {
            return wT(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Vk(TT, kT) {
          const cT = (0, MT.s)(TT, "auth");
          if (cT.isInitialized()) {
            const TT = cT.getImmediate(),
              MT = cT.getOptions();
            if ((0, lT.A)(MT, null !== kT && void 0 !== kT ? kT : {})) return TT;
            DT(TT, "already-initialized")
          }
          return cT.initialize({
            options: kT
          })
        }

        function Ek(TT, kT, cT) {
          const lT = ek(TT);
          wT(lT._canInitEmulator, lT, "emulator-config-failed"), wT(/^https?:\/\//.test(kT), lT, "invalid-emulator-scheme");
          const MT = !!(null === cT || void 0 === cT ? void 0 : cT.disableWarnings),
            KT = Zk(kT),
            {
              host: OT,
              port: yT
            } = function(TT) {
              const kT = Zk(TT),
                cT = /(\/\/)?([^?#/]+)/.exec(TT.substr(kT.length));
              if (!cT) return {
                host: "",
                port: null
              };
              const lT = cT[2].split("@").pop() || "",
                MT = /^(\[[^\]]+\])(:|$)/.exec(lT);
              if (MT) {
                const TT = MT[1];
                return {
                  host: TT,
                  port: uk(lT.substr(TT.length + 1))
                }
              } {
                const [TT, kT] = lT.split(":");
                return {
                  host: TT,
                  port: uk(kT)
                }
              }
            }(kT),
            fT = null === yT ? "" : `:${yT}`;
          lT.config.emulator = {
            url: `${KT}//${OT}${fT}/`
          }, lT.settings.appVerificationDisabledForTesting = !0, lT.emulatorConfig = Object.freeze({
            host: OT,
            port: yT,
            protocol: KT.replace(":", ""),
            options: Object.freeze({
              disableWarnings: MT
            })
          }), MT || function() {
            function TT() {
              const TT = document.createElement("p"),
                kT = TT.style;
              TT.innerText = "Running in emulator mode. Do not use with production credentials.", kT.position = "fixed", kT.width = "100%", kT.backgroundColor = "#ffffff", kT.border = ".1em solid #000000", kT.color = "#b50000", kT.bottom = "0px", kT.left = "0px", kT.margin = "0px", kT.zIndex = "10000", kT.textAlign = "center", TT.classList.add("firebase-emulator-warning"), document.body.appendChild(TT)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", TT) : TT())
          }()
        }

        function Zk(TT) {
          const kT = TT.indexOf(":");
          return kT < 0 ? "" : TT.substr(0, kT + 1)
        }

        function uk(TT) {
          if (!TT) return null;
          const kT = Number(TT);
          return isNaN(kT) ? null : kT
        }
        class Xk {
          constructor(TT, kT) {
            this.providerId = TT, this.signInMethod = kT
          }
          toJSON() {
            return mT("not implemented")
          }
          _getIdTokenResponse(TT) {
            return mT("not implemented")
          }
          _linkToIdToken(TT, kT) {
            return mT("not implemented")
          }
          _getReauthenticationResolver(TT) {
            return mT("not implemented")
          }
        }
        async function dk(TT, kT) {
          return uT(TT, "POST", "/v1/accounts:resetPassword", ZT(TT, kT))
        }
        async function Lk(TT, kT) {
          return uT(TT, "POST", "/v1/accounts:update", kT)
        }
        async function Rk(TT, kT) {
          return dT(TT, "POST", "/v1/accounts:signInWithPassword", ZT(TT, kT))
        }
        async function gk(TT, kT) {
          return uT(TT, "POST", "/v1/accounts:sendOobCode", ZT(TT, kT))
        }
        async function Uk(TT, kT) {
          return gk(TT, kT)
        }
        async function Yk(TT, kT) {
          return gk(TT, kT)
        }
        class Bk extends Xk {
          constructor(TT, kT, cT) {
            let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", cT), this._email = TT, this._password = kT, this._tenantId = lT
          }
          static _fromEmailAndPassword(TT, kT) {
            return new Bk(TT, kT, "password")
          }
          static _fromEmailAndCode(TT, kT) {
            return new Bk(TT, kT, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const kT = "string" === typeof TT ? JSON.parse(TT) : TT;
            if ((null === kT || void 0 === kT ? void 0 : kT.email) && (null === kT || void 0 === kT ? void 0 : kT.password)) {
              if ("password" === kT.signInMethod) return this._fromEmailAndPassword(kT.email, kT.password);
              if ("emailLink" === kT.signInMethod) return this._fromEmailAndCode(kT.email, kT.password, kT.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(TT) {
            var kT;
            switch (this.signInMethod) {
              case "password":
                const cT = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (kT = TT._getRecaptchaConfig()) || void 0 === kT ? void 0 : kT.emailPasswordEnabled) {
                  const kT = await zk(TT, cT, "signInWithPassword");
                  return Rk(TT, kT)
                }
                return Rk(TT, cT).catch((async kT => {
                  if ("auth/missing-recaptcha-token" === kT.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const kT = await zk(TT, cT, "signInWithPassword");
                    return Rk(TT, kT)
                  }
                  return Promise.reject(kT)
                }));
              case "emailLink":
                return async function(TT, kT) {
                  return dT(TT, "POST", "/v1/accounts:signInWithEmailLink", ZT(TT, kT))
                }(TT, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                DT(TT, "internal-error")
            }
          }
          async _linkToIdToken(TT, kT) {
            switch (this.signInMethod) {
              case "password":
                return Lk(TT, {
                  idToken: kT,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(TT, kT) {
                  return dT(TT, "POST", "/v1/accounts:signInWithEmailLink", ZT(TT, kT))
                }(TT, {
                  idToken: kT,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                DT(TT, "internal-error")
            }
          }
          _getReauthenticationResolver(TT) {
            return this._getIdTokenResponse(TT)
          }
        }
        async function Wk(TT, kT) {
          return dT(TT, "POST", "/v1/accounts:signInWithIdp", ZT(TT, kT))
        }
        class nk extends Xk {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(TT) {
            const kT = new nk(TT.providerId, TT.signInMethod);
            return TT.idToken || TT.accessToken ? (TT.idToken && (kT.idToken = TT.idToken), TT.accessToken && (kT.accessToken = TT.accessToken), TT.nonce && !TT.pendingToken && (kT.nonce = TT.nonce), TT.pendingToken && (kT.pendingToken = TT.pendingToken)) : TT.oauthToken && TT.oauthTokenSecret ? (kT.accessToken = TT.oauthToken, kT.secret = TT.oauthTokenSecret) : DT("argument-error"), kT
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
            const kT = "string" === typeof TT ? JSON.parse(TT) : TT,
              {
                providerId: cT,
                signInMethod: lT
              } = kT,
              MT = KT(kT, ["providerId", "signInMethod"]);
            if (!cT || !lT) return null;
            const OT = new nk(cT, lT);
            return OT.idToken = MT.idToken || void 0, OT.accessToken = MT.accessToken || void 0, OT.secret = MT.secret, OT.nonce = MT.nonce, OT.pendingToken = MT.pendingToken || null, OT
          }
          _getIdTokenResponse(TT) {
            return Wk(TT, this.buildRequest())
          }
          _linkToIdToken(TT, kT) {
            const cT = this.buildRequest();
            return cT.idToken = kT, Wk(TT, cT)
          }
          _getReauthenticationResolver(TT) {
            const kT = this.buildRequest();
            return kT.autoCreate = !1, Wk(TT, kT)
          }
          buildRequest() {
            const TT = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) TT.pendingToken = this.pendingToken;
            else {
              const kT = {};
              this.idToken && (kT.id_token = this.idToken), this.accessToken && (kT.access_token = this.accessToken), this.secret && (kT.oauth_token_secret = this.secret), kT.providerId = this.providerId, this.nonce && !this.pendingToken && (kT.nonce = this.nonce), TT.postBody = (0, lT.fb)(kT)
            }
            return TT
          }
        }
        const pk = {
          USER_NOT_FOUND: "user-not-found"
        };
        class ik extends Xk {
          constructor(TT) {
            super("phone", "phone"), this.params = TT
          }
          static _fromVerification(TT, kT) {
            return new ik({
              verificationId: TT,
              verificationCode: kT
            })
          }
          static _fromTokenResponse(TT, kT) {
            return new ik({
              phoneNumber: TT,
              temporaryProof: kT
            })
          }
          _getIdTokenResponse(TT) {
            return async function(TT, kT) {
              return dT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", ZT(TT, kT))
            }(TT, this._makeVerificationRequest())
          }
          _linkToIdToken(TT, kT) {
            return async function(TT, kT) {
              const cT = await dT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", ZT(TT, kT));
              if (cT.temporaryProof) throw gT(TT, "account-exists-with-different-credential", cT);
              return cT
            }(TT, Object.assign({
              idToken: kT
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(TT) {
            return async function(TT, kT) {
              return dT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", ZT(TT, Object.assign(Object.assign({}, kT), {
                operation: "REAUTH"
              })), pk)
            }(TT, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: TT,
              phoneNumber: kT,
              verificationId: cT,
              verificationCode: lT
            } = this.params;
            return TT && kT ? {
              temporaryProof: TT,
              phoneNumber: kT
            } : {
              sessionInfo: cT,
              code: lT
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
              verificationId: kT,
              verificationCode: cT,
              phoneNumber: lT,
              temporaryProof: MT
            } = TT;
            return cT || kT || lT || MT ? new ik({
              verificationId: kT,
              verificationCode: cT,
              phoneNumber: lT,
              temporaryProof: MT
            }) : null
          }
        }
        class qk {
          constructor(TT) {
            var kT, cT, MT, KT, OT, yT;
            const fT = (0, lT.cb)((0, lT.C)(TT)),
              xT = null !== (kT = fT.apiKey) && void 0 !== kT ? kT : null,
              IT = null !== (cT = fT.oobCode) && void 0 !== cT ? cT : null,
              AT = function(TT) {
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
              }(null !== (MT = fT.mode) && void 0 !== MT ? MT : null);
            wT(xT && IT && AT, "argument-error"), this.apiKey = xT, this.operation = AT, this.code = IT, this.continueUrl = null !== (KT = fT.continueUrl) && void 0 !== KT ? KT : null, this.languageCode = null !== (OT = fT.languageCode) && void 0 !== OT ? OT : null, this.tenantId = null !== (yT = fT.tenantId) && void 0 !== yT ? yT : null
          }
          static parseLink(TT) {
            const kT = function(TT) {
              const kT = (0, lT.cb)((0, lT.C)(TT)).link,
                cT = kT ? (0, lT.cb)((0, lT.C)(kT)).deep_link_id : null,
                MT = (0, lT.cb)((0, lT.C)(TT)).deep_link_id;
              return (MT ? (0, lT.cb)((0, lT.C)(MT)).link : null) || MT || cT || kT || TT
            }(TT);
            try {
              return new qk(kT)
            } catch (cT) {
              return null
            }
          }
        }

        function sk(TT) {
          return qk.parseLink(TT)
        }
        class Tc {
          constructor() {
            this.providerId = Tc.PROVIDER_ID
          }
          static credential(TT, kT) {
            return Bk._fromEmailAndPassword(TT, kT)
          }
          static credentialWithLink(TT, kT) {
            const cT = qk.parseLink(kT);
            return wT(cT, "argument-error"), Bk._fromEmailAndCode(TT, cT.code, cT.tenantId)
          }
        }
        Tc.PROVIDER_ID = "password", Tc.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Tc.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class kc {
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
        class cc extends kc {
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
        class lc extends cc {
          static credentialFromJSON(TT) {
            const kT = "string" === typeof TT ? JSON.parse(TT) : TT;
            return wT("providerId" in kT && "signInMethod" in kT, "argument-error"), nk._fromParams(kT)
          }
          credential(TT) {
            return this._credential(Object.assign(Object.assign({}, TT), {
              nonce: TT.rawNonce
            }))
          }
          _credential(TT) {
            return wT(TT.idToken || TT.accessToken, "argument-error"), nk._fromParams(Object.assign(Object.assign({}, TT), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(TT) {
            return lc.oauthCredentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return lc.oauthCredentialFromTaggedObject(TT.customData || {})
          }
          static oauthCredentialFromTaggedObject(TT) {
            let {
              _tokenResponse: kT
            } = TT;
            if (!kT) return null;
            const {
              oauthIdToken: cT,
              oauthAccessToken: lT,
              oauthTokenSecret: MT,
              pendingToken: KT,
              nonce: OT,
              providerId: yT
            } = kT;
            if (!lT && !MT && !cT && !KT) return null;
            if (!yT) return null;
            try {
              return new lc(yT)._credential({
                idToken: cT,
                accessToken: lT,
                nonce: OT,
                pendingToken: KT
              })
            } catch (fT) {
              return null
            }
          }
        }
        class Mc extends cc {
          constructor() {
            super("facebook.com")
          }
          static credential(TT) {
            return nk._fromParams({
              providerId: Mc.PROVIDER_ID,
              signInMethod: Mc.FACEBOOK_SIGN_IN_METHOD,
              accessToken: TT
            })
          }
          static credentialFromResult(TT) {
            return Mc.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return Mc.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: kT
            } = TT;
            if (!kT || !("oauthAccessToken" in kT)) return null;
            if (!kT.oauthAccessToken) return null;
            try {
              return Mc.credential(kT.oauthAccessToken)
            } catch (cT) {
              return null
            }
          }
        }
        Mc.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Mc.PROVIDER_ID = "facebook.com";
        class Kc extends cc {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(TT, kT) {
            return nk._fromParams({
              providerId: Kc.PROVIDER_ID,
              signInMethod: Kc.GOOGLE_SIGN_IN_METHOD,
              idToken: TT,
              accessToken: kT
            })
          }
          static credentialFromResult(TT) {
            return Kc.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return Kc.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: kT
            } = TT;
            if (!kT) return null;
            const {
              oauthIdToken: cT,
              oauthAccessToken: lT
            } = kT;
            if (!cT && !lT) return null;
            try {
              return Kc.credential(cT, lT)
            } catch (MT) {
              return null
            }
          }
        }
        Kc.GOOGLE_SIGN_IN_METHOD = "google.com", Kc.PROVIDER_ID = "google.com";
        class Oc extends cc {
          constructor() {
            super("github.com")
          }
          static credential(TT) {
            return nk._fromParams({
              providerId: Oc.PROVIDER_ID,
              signInMethod: Oc.GITHUB_SIGN_IN_METHOD,
              accessToken: TT
            })
          }
          static credentialFromResult(TT) {
            return Oc.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return Oc.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: kT
            } = TT;
            if (!kT || !("oauthAccessToken" in kT)) return null;
            if (!kT.oauthAccessToken) return null;
            try {
              return Oc.credential(kT.oauthAccessToken)
            } catch (cT) {
              return null
            }
          }
        }
        Oc.GITHUB_SIGN_IN_METHOD = "github.com", Oc.PROVIDER_ID = "github.com";
        class yc extends Xk {
          constructor(TT, kT) {
            super(TT, TT), this.pendingToken = kT
          }
          _getIdTokenResponse(TT) {
            return Wk(TT, this.buildRequest())
          }
          _linkToIdToken(TT, kT) {
            const cT = this.buildRequest();
            return cT.idToken = kT, Wk(TT, cT)
          }
          _getReauthenticationResolver(TT) {
            const kT = this.buildRequest();
            return kT.autoCreate = !1, Wk(TT, kT)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(TT) {
            const kT = "string" === typeof TT ? JSON.parse(TT) : TT,
              {
                providerId: cT,
                signInMethod: lT,
                pendingToken: MT
              } = kT;
            return cT && lT && MT && cT === lT ? new yc(cT, MT) : null
          }
          static _create(TT, kT) {
            return new yc(TT, kT)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class fc extends kc {
          constructor(TT) {
            wT(TT.startsWith("saml."), "argument-error"), super(TT)
          }
          static credentialFromResult(TT) {
            return fc.samlCredentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return fc.samlCredentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromJSON(TT) {
            const kT = yc.fromJSON(TT);
            return wT(kT, "argument-error"), kT
          }
          static samlCredentialFromTaggedObject(TT) {
            let {
              _tokenResponse: kT
            } = TT;
            if (!kT) return null;
            const {
              pendingToken: cT,
              providerId: lT
            } = kT;
            if (!cT || !lT) return null;
            try {
              return yc._create(lT, cT)
            } catch (MT) {
              return null
            }
          }
        }
        class xc extends cc {
          constructor() {
            super("twitter.com")
          }
          static credential(TT, kT) {
            return nk._fromParams({
              providerId: xc.PROVIDER_ID,
              signInMethod: xc.TWITTER_SIGN_IN_METHOD,
              oauthToken: TT,
              oauthTokenSecret: kT
            })
          }
          static credentialFromResult(TT) {
            return xc.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return xc.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: kT
            } = TT;
            if (!kT) return null;
            const {
              oauthAccessToken: cT,
              oauthTokenSecret: lT
            } = kT;
            if (!cT || !lT) return null;
            try {
              return xc.credential(cT, lT)
            } catch (MT) {
              return null
            }
          }
        }
        async function Ic(TT, kT) {
          return dT(TT, "POST", "/v1/accounts:signUp", ZT(TT, kT))
        }
        xc.TWITTER_SIGN_IN_METHOD = "twitter.com", xc.PROVIDER_ID = "twitter.com";
        class Ac {
          constructor(TT) {
            this.user = TT.user, this.providerId = TT.providerId, this._tokenResponse = TT._tokenResponse, this.operationType = TT.operationType
          }
          static async _fromIdTokenResponse(TT, kT, cT) {
            let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const MT = await lk._fromIdTokenResponse(TT, cT, lT),
              KT = Cc(cT);
            return new Ac({
              user: MT,
              providerId: KT,
              _tokenResponse: cT,
              operationType: kT
            })
          }
          static async _forOperation(TT, kT, cT) {
            await TT._updateTokensIfNecessary(cT, !0);
            const lT = Cc(cT);
            return new Ac({
              user: TT,
              providerId: lT,
              _tokenResponse: cT,
              operationType: kT
            })
          }
        }

        function Cc(TT) {
          return TT.providerId ? TT.providerId : "phoneNumber" in TT ? "phone" : null
        }
        async function jc(TT) {
          var kT;
          const cT = ek(TT);
          if (await cT._initializationPromise, null === (kT = cT.currentUser) || void 0 === kT ? void 0 : kT.isAnonymous) return new Ac({
            user: cT.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const lT = await Ic(cT, {
              returnSecureToken: !0
            }),
            MT = await Ac._fromIdTokenResponse(cT, "signIn", lT, !0);
          return await cT._updateCurrentUser(MT.user), MT
        }
        class vc extends lT.j {
          constructor(TT, kT, cT, lT) {
            var MT;
            super(kT.code, kT.message), this.operationType = cT, this.user = lT, Object.setPrototypeOf(this, vc.prototype), this.customData = {
              appName: TT.name,
              tenantId: null !== (MT = TT.tenantId) && void 0 !== MT ? MT : void 0,
              _serverResponse: kT.customData._serverResponse,
              operationType: cT
            }
          }
          static _fromErrorAndOperation(TT, kT, cT, lT) {
            return new vc(TT, kT, cT, lT)
          }
        }

        function tc(TT, kT, cT, lT) {
          return ("reauthenticate" === kT ? cT._getReauthenticationResolver(TT) : cT._getIdTokenResponse(TT)).catch((cT => {
            if ("auth/multi-factor-auth-required" === cT.code) throw vc._fromErrorAndOperation(TT, cT, kT, lT);
            throw cT
          }))
        }

        function hc(TT) {
          return new Set(TT.map((TT => {
            let {
              providerId: kT
            } = TT;
            return kT
          })).filter((TT => !!TT)))
        }
        async function Nc(TT, kT) {
          const cT = (0, lT.L)(TT);
          await Sc(!0, cT, kT);
          const {
            providerUserInfo: MT
          } = await async function(TT, kT) {
            return uT(TT, "POST", "/v1/accounts:update", kT)
          }(cT.auth, {
            idToken: await cT.getIdToken(),
            deleteProvider: [kT]
          }), KT = hc(MT || []);
          return cT.providerData = cT.providerData.filter((TT => KT.has(TT.providerId))), KT.has("phone") || (cT.phoneNumber = null), await cT.auth._persistUserIfCurrent(cT), cT
        }
        async function Qc(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const lT = await pT(TT, kT._linkToIdToken(TT.auth, await TT.getIdToken()), cT);
          return Ac._forOperation(TT, "link", lT)
        }
        async function Sc(TT, kT, cT) {
          await sT(kT);
          const lT = !1 === TT ? "provider-already-linked" : "no-such-provider";
          wT(hc(kT.providerData).has(cT) === TT, kT.auth, lT)
        }
        async function Dc(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: lT
          } = TT, MT = "reauthenticate";
          try {
            const KT = await pT(TT, tc(lT, MT, kT, TT), cT);
            wT(KT.idToken, lT, "internal-error");
            const OT = nT(KT.idToken);
            wT(OT, lT, "internal-error");
            const {
              sub: yT
            } = OT;
            return wT(TT.uid === yT, lT, "user-mismatch"), Ac._forOperation(TT, MT, KT)
          } catch (KT) {
            throw "auth/user-not-found" === (null === KT || void 0 === KT ? void 0 : KT.code) && DT(lT, "user-mismatch"), KT
          }
        }
        async function ac(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const lT = "signIn",
            MT = await tc(TT, lT, kT),
            KT = await Ac._fromIdTokenResponse(TT, lT, MT);
          return cT || await TT._updateCurrentUser(KT.user), KT
        }
        async function Fc(TT, kT) {
          return ac(ek(TT), kT)
        }
        async function rc(TT, kT) {
          const cT = (0, lT.L)(TT);
          return await Sc(!1, cT, kT.providerId), Qc(cT, kT)
        }
        async function Pc(TT, kT) {
          return Dc((0, lT.L)(TT), kT)
        }
        async function wc(TT, kT) {
          const cT = ek(TT),
            lT = await async function(TT, kT) {
              return dT(TT, "POST", "/v1/accounts:signInWithCustomToken", ZT(TT, kT))
            }(cT, {
              token: kT,
              returnSecureToken: !0
            }), MT = await Ac._fromIdTokenResponse(cT, "signIn", lT);
          return await cT._updateCurrentUser(MT.user), MT
        }
        class mc {
          constructor(TT, kT) {
            this.factorId = TT, this.uid = kT.mfaEnrollmentId, this.enrollmentTime = new Date(kT.enrolledAt).toUTCString(), this.displayName = kT.displayName
          }
          static _fromServerResponse(TT, kT) {
            return "phoneInfo" in kT ? bc._fromServerResponse(TT, kT) : "totpInfo" in kT ? zc._fromServerResponse(TT, kT) : DT(TT, "internal-error")
          }
        }
        class bc extends mc {
          constructor(TT) {
            super("phone", TT), this.phoneNumber = TT.phoneInfo
          }
          static _fromServerResponse(TT, kT) {
            return new bc(kT)
          }
        }
        class zc extends mc {
          constructor(TT) {
            super("totp", TT)
          }
          static _fromServerResponse(TT, kT) {
            return new zc(kT)
          }
        }

        function Jc(TT, kT, cT) {
          var lT;
          wT((null === (lT = cT.url) || void 0 === lT ? void 0 : lT.length) > 0, TT, "invalid-continue-uri"), wT("undefined" === typeof cT.dynamicLinkDomain || cT.dynamicLinkDomain.length > 0, TT, "invalid-dynamic-link-domain"), kT.continueUrl = cT.url, kT.dynamicLinkDomain = cT.dynamicLinkDomain, kT.canHandleCodeInApp = cT.handleCodeInApp, cT.iOS && (wT(cT.iOS.bundleId.length > 0, TT, "missing-ios-bundle-id"), kT.iOSBundleId = cT.iOS.bundleId), cT.android && (wT(cT.android.packageName.length > 0, TT, "missing-android-pkg-name"), kT.androidInstallApp = cT.android.installApp, kT.androidMinimumVersionCode = cT.android.minimumVersion, kT.androidPackageName = cT.android.packageName)
        }
        async function oc(TT, kT, cT) {
          var lT;
          const MT = ek(TT),
            KT = {
              requestType: "PASSWORD_RESET",
              email: kT,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (lT = MT._getRecaptchaConfig()) || void 0 === lT ? void 0 : lT.emailPasswordEnabled) {
            const TT = await zk(MT, KT, "getOobCode", !0);
            cT && Jc(MT, TT, cT), await Uk(MT, TT)
          } else cT && Jc(MT, KT, cT), await Uk(MT, KT).catch((async TT => {
            if ("auth/missing-recaptcha-token" !== TT.code) return Promise.reject(TT);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const TT = await zk(MT, KT, "getOobCode", !0);
              cT && Jc(MT, TT, cT), await Uk(MT, TT)
            }
          }))
        }
        async function Hc(TT, kT, cT) {
          await dk((0, lT.L)(TT), {
            oobCode: kT,
            newPassword: cT
          })
        }
        async function ec(TT, kT) {
          await async function(TT, kT) {
            return uT(TT, "POST", "/v1/accounts:update", ZT(TT, kT))
          }((0, lT.L)(TT), {
            oobCode: kT
          })
        }
        async function Gc(TT, kT) {
          const cT = (0, lT.L)(TT),
            MT = await dk(cT, {
              oobCode: kT
            }),
            KT = MT.requestType;
          switch (wT(KT, cT, "internal-error"), KT) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              wT(MT.newEmail, cT, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              wT(MT.mfaInfo, cT, "internal-error");
            default:
              wT(MT.email, cT, "internal-error")
          }
          let OT = null;
          return MT.mfaInfo && (OT = mc._fromServerResponse(ek(cT), MT.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === MT.requestType ? MT.newEmail : MT.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === MT.requestType ? MT.email : MT.newEmail) || null,
              multiFactorInfo: OT
            },
            operation: KT
          }
        }
        async function Vc(TT, kT) {
          const {
            data: cT
          } = await Gc((0, lT.L)(TT), kT);
          return cT.email
        }
        async function Ec(TT, kT, cT) {
          var lT;
          const MT = ek(TT),
            KT = {
              returnSecureToken: !0,
              email: kT,
              password: cT,
              clientType: "CLIENT_TYPE_WEB"
            };
          let OT;
          if (null === (lT = MT._getRecaptchaConfig()) || void 0 === lT ? void 0 : lT.emailPasswordEnabled) {
            const TT = await zk(MT, KT, "signUpPassword");
            OT = Ic(MT, TT)
          } else OT = Ic(MT, KT).catch((async TT => {
            if ("auth/missing-recaptcha-token" === TT.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const TT = await zk(MT, KT, "signUpPassword");
              return Ic(MT, TT)
            }
            return Promise.reject(TT)
          }));
          const yT = await OT.catch((TT => Promise.reject(TT))),
            fT = await Ac._fromIdTokenResponse(MT, "signIn", yT);
          return await MT._updateCurrentUser(fT.user), fT
        }

        function Zc(TT, kT, cT) {
          return Fc((0, lT.L)(TT), Tc.credential(kT, cT))
        }
        async function uc(TT, kT, cT) {
          var lT;
          const MT = ek(TT),
            KT = {
              requestType: "EMAIL_SIGNIN",
              email: kT,
              clientType: "CLIENT_TYPE_WEB"
            };

          function OT(TT, kT) {
            wT(kT.handleCodeInApp, MT, "argument-error"), kT && Jc(MT, TT, kT)
          }
          if (null === (lT = MT._getRecaptchaConfig()) || void 0 === lT ? void 0 : lT.emailPasswordEnabled) {
            const TT = await zk(MT, KT, "getOobCode", !0);
            OT(TT, cT), await Yk(MT, TT)
          } else OT(KT, cT), await Yk(MT, KT).catch((async TT => {
            if ("auth/missing-recaptcha-token" !== TT.code) return Promise.reject(TT);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const TT = await zk(MT, KT, "getOobCode", !0);
              OT(TT, cT), await Yk(MT, TT)
            }
          }))
        }

        function Xc(TT, kT) {
          const cT = qk.parseLink(kT);
          return "EMAIL_SIGNIN" === (null === cT || void 0 === cT ? void 0 : cT.operation)
        }
        async function dc(TT, kT, cT) {
          const MT = (0, lT.L)(TT),
            KT = Tc.credentialWithLink(kT, cT || zT());
          return wT(KT._tenantId === (MT.tenantId || null), MT, "tenant-id-mismatch"), Fc(MT, KT)
        }
        async function Lc(TT, kT) {
          const cT = {
              identifier: kT,
              continueUri: JT() ? zT() : "http://localhost"
            },
            {
              signinMethods: MT
            } = await async function(TT, kT) {
              return uT(TT, "POST", "/v1/accounts:createAuthUri", ZT(TT, kT))
            }((0, lT.L)(TT), cT);
          return MT || []
        }
        async function Rc(TT, kT) {
          const cT = (0, lT.L)(TT),
            MT = {
              requestType: "VERIFY_EMAIL",
              idToken: await TT.getIdToken()
            };
          kT && Jc(cT.auth, MT, kT);
          const {
            email: KT
          } = await async function(TT, kT) {
            return gk(TT, kT)
          }(cT.auth, MT);
          KT !== TT.email && await TT.reload()
        }
        async function gc(TT, kT, cT) {
          const MT = (0, lT.L)(TT),
            KT = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await TT.getIdToken(),
              newEmail: kT
            };
          cT && Jc(MT.auth, KT, cT);
          const {
            email: OT
          } = await async function(TT, kT) {
            return gk(TT, kT)
          }(MT.auth, KT);
          OT !== TT.email && await TT.reload()
        }
        async function Uc(TT, kT) {
          let {
            displayName: cT,
            photoURL: MT
          } = kT;
          if (void 0 === cT && void 0 === MT) return;
          const KT = (0, lT.L)(TT),
            OT = {
              idToken: await KT.getIdToken(),
              displayName: cT,
              photoUrl: MT,
              returnSecureToken: !0
            },
            yT = await pT(KT, async function(TT, kT) {
              return uT(TT, "POST", "/v1/accounts:update", kT)
            }(KT.auth, OT));
          KT.displayName = yT.displayName || null, KT.photoURL = yT.photoUrl || null;
          const fT = KT.providerData.find((TT => {
            let {
              providerId: kT
            } = TT;
            return "password" === kT
          }));
          fT && (fT.displayName = KT.displayName, fT.photoURL = KT.photoURL), await KT._updateTokensIfNecessary(yT)
        }

        function Yc(TT, kT) {
          return Wc((0, lT.L)(TT), kT, null)
        }

        function Bc(TT, kT) {
          return Wc((0, lT.L)(TT), null, kT)
        }
        async function Wc(TT, kT, cT) {
          const {
            auth: lT
          } = TT, MT = {
            idToken: await TT.getIdToken(),
            returnSecureToken: !0
          };
          kT && (MT.email = kT), cT && (MT.password = cT);
          const KT = await pT(TT, Lk(lT, MT));
          await TT._updateTokensIfNecessary(KT, !0)
        }
        class nc {
          constructor(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = TT, this.providerId = kT, this.profile = cT
          }
        }
        class pc extends nc {
          constructor(TT, kT, cT, lT) {
            super(TT, kT, cT), this.username = lT
          }
        }
        class ic extends nc {
          constructor(TT, kT) {
            super(TT, "facebook.com", kT)
          }
        }
        class qc extends pc {
          constructor(TT, kT) {
            super(TT, "github.com", kT, "string" === typeof(null === kT || void 0 === kT ? void 0 : kT.login) ? null === kT || void 0 === kT ? void 0 : kT.login : null)
          }
        }
        class sc extends nc {
          constructor(TT, kT) {
            super(TT, "google.com", kT)
          }
        }
        class Tl extends pc {
          constructor(TT, kT, cT) {
            super(TT, "twitter.com", kT, cT)
          }
        }

        function kl(TT) {
          const {
            user: kT,
            _tokenResponse: cT
          } = TT;
          return kT.isAnonymous && !cT ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(TT) {
            var kT, cT;
            if (!TT) return null;
            const {
              providerId: lT
            } = TT, MT = TT.rawUserInfo ? JSON.parse(TT.rawUserInfo) : {}, KT = TT.isNewUser || "identitytoolkit#SignupNewUserResponse" === TT.kind;
            if (!lT && (null === TT || void 0 === TT ? void 0 : TT.idToken)) {
              const lT = null === (cT = null === (kT = nT(TT.idToken)) || void 0 === kT ? void 0 : kT.firebase) || void 0 === cT ? void 0 : cT.sign_in_provider;
              if (lT) return new nc(KT, "anonymous" !== lT && "custom" !== lT ? lT : null)
            }
            if (!lT) return null;
            switch (lT) {
              case "facebook.com":
                return new ic(KT, MT);
              case "github.com":
                return new qc(KT, MT);
              case "google.com":
                return new sc(KT, MT);
              case "twitter.com":
                return new Tl(KT, MT, TT.screenName || null);
              case "custom":
              case "anonymous":
                return new nc(KT, null);
              default:
                return new nc(KT, lT, MT)
            }
          }(cT)
        }

        function cl(TT, kT) {
          return (0, lT.L)(TT).setPersistence(kT)
        }

        function ll(TT) {
          return ek(TT).initializeRecaptchaConfig()
        }

        function Ml(TT, kT, cT, MT) {
          return (0, lT.L)(TT).onIdTokenChanged(kT, cT, MT)
        }

        function Kl(TT, kT, cT) {
          return (0, lT.L)(TT).beforeAuthStateChanged(kT, cT)
        }

        function Ol(TT, kT, cT, MT) {
          return (0, lT.L)(TT).onAuthStateChanged(kT, cT, MT)
        }

        function yl(TT) {
          (0, lT.L)(TT).useDeviceLanguage()
        }

        function fl(TT, kT) {
          return (0, lT.L)(TT).updateCurrentUser(kT)
        }

        function xl(TT) {
          return (0, lT.L)(TT).signOut()
        }
        async function Il(TT) {
          return (0, lT.L)(TT).delete()
        }
        class Al {
          constructor(TT, kT, cT) {
            this.type = TT, this.credential = kT, this.auth = cT
          }
          static _fromIdtoken(TT, kT) {
            return new Al("enroll", TT, kT)
          }
          static _fromMfaPendingCredential(TT) {
            return new Al("signin", TT)
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
            var kT, cT;
            if (null === TT || void 0 === TT ? void 0 : TT.multiFactorSession) {
              if (null === (kT = TT.multiFactorSession) || void 0 === kT ? void 0 : kT.pendingCredential) return Al._fromMfaPendingCredential(TT.multiFactorSession.pendingCredential);
              if (null === (cT = TT.multiFactorSession) || void 0 === cT ? void 0 : cT.idToken) return Al._fromIdtoken(TT.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Cl {
          constructor(TT, kT, cT) {
            this.session = TT, this.hints = kT, this.signInResolver = cT
          }
          static _fromError(TT, kT) {
            const cT = ek(TT),
              lT = kT.customData._serverResponse,
              MT = (lT.mfaInfo || []).map((TT => mc._fromServerResponse(cT, TT)));
            wT(lT.mfaPendingCredential, cT, "internal-error");
            const KT = Al._fromMfaPendingCredential(lT.mfaPendingCredential);
            return new Cl(KT, MT, (async TT => {
              const MT = await TT._process(cT, KT);
              delete lT.mfaInfo, delete lT.mfaPendingCredential;
              const OT = Object.assign(Object.assign({}, lT), {
                idToken: MT.idToken,
                refreshToken: MT.refreshToken
              });
              switch (kT.operationType) {
                case "signIn":
                  const TT = await Ac._fromIdTokenResponse(cT, kT.operationType, OT);
                  return await cT._updateCurrentUser(TT.user), TT;
                case "reauthenticate":
                  return wT(kT.user, cT, "internal-error"), Ac._forOperation(kT.user, kT.operationType, OT);
                default:
                  DT(cT, "internal-error")
              }
            }))
          }
          async resolveSignIn(TT) {
            const kT = TT;
            return this.signInResolver(kT)
          }
        }

        function jl(TT, kT) {
          var cT;
          const MT = (0, lT.L)(TT),
            KT = kT;
          return wT(kT.customData.operationType, MT, "argument-error"), wT(null === (cT = KT.customData._serverResponse) || void 0 === cT ? void 0 : cT.mfaPendingCredential, MT, "argument-error"), Cl._fromError(MT, KT)
        }
        class vl {
          constructor(TT) {
            this.user = TT, this.enrolledFactors = [], TT._onReload((kT => {
              kT.mfaInfo && (this.enrolledFactors = kT.mfaInfo.map((kT => mc._fromServerResponse(TT.auth, kT))))
            }))
          }
          static _fromUser(TT) {
            return new vl(TT)
          }
          async getSession() {
            return Al._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(TT, kT) {
            const cT = TT,
              lT = await this.getSession(),
              MT = await pT(this.user, cT._process(this.user.auth, lT, kT));
            return await this.user._updateTokensIfNecessary(MT), this.user.reload()
          }
          async unenroll(TT) {
            const kT = "string" === typeof TT ? TT : TT.uid,
              cT = await this.user.getIdToken();
            try {
              const TT = await pT(this.user, (lT = this.user.auth, MT = {
                idToken: cT,
                mfaEnrollmentId: kT
              }, uT(lT, "POST", "/v2/accounts/mfaEnrollment:withdraw", ZT(lT, MT))));
              this.enrolledFactors = this.enrolledFactors.filter((TT => {
                let {
                  uid: cT
                } = TT;
                return cT !== kT
              })), await this.user._updateTokensIfNecessary(TT), await this.user.reload()
            } catch (KT) {
              throw KT
            }
            var lT, MT
          }
        }
        const tl = new WeakMap;

        function hl(TT) {
          const kT = (0, lT.L)(TT);
          return tl.has(kT) || tl.set(kT, vl._fromUser(kT)), tl.get(kT)
        }
        const Nl = "__sak";
        class Ql {
          constructor(TT, kT) {
            this.storageRetriever = TT, this.type = kT
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Nl, "1"), this.storage.removeItem(Nl), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (TT) {
              return Promise.resolve(!1)
            }
          }
          _set(TT, kT) {
            return this.storage.setItem(TT, JSON.stringify(kT)), Promise.resolve()
          }
          _get(TT) {
            const kT = this.storage.getItem(TT);
            return Promise.resolve(kT ? JSON.parse(kT) : null)
          }
          _remove(TT) {
            return this.storage.removeItem(TT), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Sl extends Ql {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (TT, kT) => this.onStorageEvent(TT, kT), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const TT = (0, lT.M)();
              return Ck(TT) || Qk(TT)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (TT) {
                return !1
              }
            }(), this.fallbackToPolling = Sk(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(TT) {
            for (const kT of Object.keys(this.listeners)) {
              const cT = this.storage.getItem(kT),
                lT = this.localCache[kT];
              cT !== lT && TT(kT, lT, cT)
            }
          }
          onStorageEvent(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!TT.key) return void this.forAllChangedKeys(((TT, kT, cT) => {
              this.notifyListeners(TT, cT)
            }));
            const cT = TT.key;
            if (kT ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const lT = this.storage.getItem(cT);
              if (TT.newValue !== lT) null !== TT.newValue ? this.storage.setItem(cT, TT.newValue) : this.storage.removeItem(cT);
              else if (this.localCache[cT] === TT.newValue && !kT) return
            }
            const MT = () => {
                const TT = this.storage.getItem(cT);
                (kT || this.localCache[cT] !== TT) && this.notifyListeners(cT, TT)
              },
              KT = this.storage.getItem(cT);
            (0, lT.T)() && 10 === document.documentMode && KT !== TT.newValue && TT.newValue !== TT.oldValue ? setTimeout(MT, 10) : MT()
          }
          notifyListeners(TT, kT) {
            this.localCache[TT] = kT;
            const cT = this.listeners[TT];
            if (cT)
              for (const lT of Array.from(cT)) lT(kT ? JSON.parse(kT) : kT)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((TT, kT, cT) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: TT,
                  oldValue: kT,
                  newValue: cT
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
          _addListener(TT, kT) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[TT] || (this.listeners[TT] = new Set, this.localCache[TT] = this.storage.getItem(TT)), this.listeners[TT].add(kT)
          }
          _removeListener(TT, kT) {
            this.listeners[TT] && (this.listeners[TT].delete(kT), 0 === this.listeners[TT].size && delete this.listeners[TT]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(TT, kT) {
            await super._set(TT, kT), this.localCache[TT] = JSON.stringify(kT)
          }
          async _get(TT) {
            const kT = await super._get(TT);
            return this.localCache[TT] = JSON.stringify(kT), kT
          }
          async _remove(TT) {
            await super._remove(TT), delete this.localCache[TT]
          }
        }
        Sl.type = "LOCAL";
        const Dl = Sl;
        class al extends Ql {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(TT, kT) {}
          _removeListener(TT, kT) {}
        }
        al.type = "SESSION";
        const Fl = al;
        class rl {
          constructor(TT) {
            this.eventTarget = TT, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(TT) {
            const kT = this.receivers.find((kT => kT.isListeningto(TT)));
            if (kT) return kT;
            const cT = new rl(TT);
            return this.receivers.push(cT), cT
          }
          isListeningto(TT) {
            return this.eventTarget === TT
          }
          async handleEvent(TT) {
            const kT = TT,
              {
                eventId: cT,
                eventType: lT,
                data: MT
              } = kT.data,
              KT = this.handlersMap[lT];
            if (!(null === KT || void 0 === KT ? void 0 : KT.size)) return;
            kT.ports[0].postMessage({
              status: "ack",
              eventId: cT,
              eventType: lT
            });
            const OT = Array.from(KT).map((async TT => TT(kT.origin, MT))),
              yT = await
            function(TT) {
              return Promise.all(TT.map((async TT => {
                try {
                  return {
                    fulfilled: !0,
                    value: await TT
                  }
                } catch (kT) {
                  return {
                    fulfilled: !1,
                    reason: kT
                  }
                }
              })))
            }(OT);
            kT.ports[0].postMessage({
              status: "done",
              eventId: cT,
              eventType: lT,
              response: yT
            })
          }
          _subscribe(TT, kT) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[TT] || (this.handlersMap[TT] = new Set), this.handlersMap[TT].add(kT)
          }
          _unsubscribe(TT, kT) {
            this.handlersMap[TT] && kT && this.handlersMap[TT].delete(kT), kT && 0 !== this.handlersMap[TT].size || delete this.handlersMap[TT], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Pl() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            cT = "";
          for (let lT = 0; lT < kT; lT++) cT += Math.floor(10 * Math.random());
          return TT + cT
        }
        rl.receivers = [];
        class wl {
          constructor(TT) {
            this.target = TT, this.handlers = new Set
          }
          removeMessageHandler(TT) {
            TT.messageChannel && (TT.messageChannel.port1.removeEventListener("message", TT.yN), TT.messageChannel.port1.close()), this.handlers.delete(TT)
          }
          async _send(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const lT = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!lT) throw new Error("connection_unavailable");
            let MT, KT;
            return new Promise(((OT, yT) => {
              const fT = Pl("", 20);
              lT.port1.start();
              const xT = setTimeout((() => {
                yT(new Error("unsupported_event"))
              }), cT);
              KT = {
                messageChannel: lT,
                yN(TT) {
                  const kT = TT;
                  if (kT.data.eventId === fT) switch (kT.data.status) {
                    case "ack":
                      clearTimeout(xT), MT = setTimeout((() => {
                        yT(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(MT), OT(kT.data.response);
                      break;
                    default:
                      clearTimeout(xT), clearTimeout(MT), yT(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(KT), lT.port1.addEventListener("message", KT.yN), this.target.postMessage({
                eventType: TT,
                eventId: fT,
                data: kT
              }, [lT.port2])
            })).finally((() => {
              KT && this.removeMessageHandler(KT)
            }))
          }
        }

        function ml() {
          return window
        }

        function bl() {
          return "undefined" !== typeof ml().WorkerGlobalScope && "function" === typeof ml().importScripts
        }
        const zl = "firebaseLocalStorageDb",
          Jl = "firebaseLocalStorage",
          ol = "fbase_key";
        class Hl {
          constructor(TT) {
            this.request = TT
          }
          toPromise() {
            return new Promise(((TT, kT) => {
              this.request.addEventListener("success", (() => {
                TT(this.request.result)
              })), this.request.addEventListener("error", (() => {
                kT(this.request.error)
              }))
            }))
          }
        }

        function el(TT, kT) {
          return TT.transaction([Jl], kT ? "readwrite" : "readonly").objectStore(Jl)
        }

        function Gl() {
          const TT = indexedDB.open(zl, 1);
          return new Promise(((kT, cT) => {
            TT.addEventListener("error", (() => {
              cT(TT.error)
            })), TT.addEventListener("upgradeneeded", (() => {
              const kT = TT.result;
              try {
                kT.createObjectStore(Jl, {
                  keyPath: ol
                })
              } catch (lT) {
                cT(lT)
              }
            })), TT.addEventListener("success", (async () => {
              const cT = TT.result;
              cT.objectStoreNames.contains(Jl) ? kT(cT) : (cT.close(), await
                function() {
                  const TT = indexedDB.deleteDatabase(zl);
                  return new Hl(TT).toPromise()
                }(), kT(await Gl()))
            }))
          }))
        }
        async function Vl(TT, kT, cT) {
          const lT = el(TT, !0).put({
            [ol]: kT,
            value: cT
          });
          return new Hl(lT).toPromise()
        }

        function El(TT, kT) {
          const cT = el(TT, !0).delete(kT);
          return new Hl(cT).toPromise()
        }
        class Zl {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Gl()), this.db
          }
          async _withRetries(TT) {
            let kT = 0;
            for (;;) try {
              const kT = await this._openDb();
              return await TT(kT)
            } catch (cT) {
              if (kT++ > 3) throw cT;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return bl() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = rl._getInstance(bl() ? self : null), this.receiver._subscribe("keyChanged", (async (TT, kT) => ({
              keyProcessed: (await this._poll()).includes(kT.key)
            }))), this.receiver._subscribe("ping", (async (TT, kT) => ["keyChanged"]))
          }
          async initializeSender() {
            var TT, kT;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (TT) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new wl(this.activeServiceWorker);
            const cT = await this.sender._send("ping", {}, 800);
            cT && (null === (TT = cT[0]) || void 0 === TT ? void 0 : TT.fulfilled) && (null === (kT = cT[0]) || void 0 === kT ? void 0 : kT.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(TT) {
            if (this.sender && this.activeServiceWorker && function() {
                var TT;
                return (null === (TT = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === TT ? void 0 : TT.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: TT
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (kT) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const TT = await Gl();
              return await Vl(TT, Nl, "1"), await El(TT, Nl), !0
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
          async _set(TT, kT) {
            return this._withPendingWrite((async () => (await this._withRetries((cT => Vl(cT, TT, kT))), this.localCache[TT] = kT, this.notifyServiceWorker(TT))))
          }
          async _get(TT) {
            const kT = await this._withRetries((kT => async function(TT, kT) {
              const cT = el(TT, !1).get(kT),
                lT = await new Hl(cT).toPromise();
              return void 0 === lT ? null : lT.value
            }(kT, TT)));
            return this.localCache[TT] = kT, kT
          }
          async _remove(TT) {
            return this._withPendingWrite((async () => (await this._withRetries((kT => El(kT, TT))), delete this.localCache[TT], this.notifyServiceWorker(TT))))
          }
          async _poll() {
            const TT = await this._withRetries((TT => {
              const kT = el(TT, !1).getAll();
              return new Hl(kT).toPromise()
            }));
            if (!TT) return [];
            if (0 !== this.pendingWrites) return [];
            const kT = [],
              cT = new Set;
            for (const {
                fbase_key: lT,
                value: MT
              }
              of TT) cT.add(lT), JSON.stringify(this.localCache[lT]) !== JSON.stringify(MT) && (this.notifyListeners(lT, MT), kT.push(lT));
            for (const lT of Object.keys(this.localCache)) this.localCache[lT] && !cT.has(lT) && (this.notifyListeners(lT, null), kT.push(lT));
            return kT
          }
          notifyListeners(TT, kT) {
            this.localCache[TT] = kT;
            const cT = this.listeners[TT];
            if (cT)
              for (const lT of Array.from(cT)) lT(kT)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(TT, kT) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[TT] || (this.listeners[TT] = new Set, this._get(TT)), this.listeners[TT].add(kT)
          }
          _removeListener(TT, kT) {
            this.listeners[TT] && (this.listeners[TT].delete(kT), 0 === this.listeners[TT].size && delete this.listeners[TT]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Zl.type = "LOCAL";
        const ul = Zl;
        const Xl = 1e12;
        class dl {
          constructor(TT) {
            this.auth = TT, this.counter = Xl, this._widgets = new Map
          }
          render(TT, kT) {
            const cT = this.counter;
            return this._widgets.set(cT, new Ll(TT, this.auth.name, kT || {})), this.counter++, cT
          }
          reset(TT) {
            var kT;
            const cT = TT || Xl;
            null === (kT = this._widgets.get(cT)) || void 0 === kT || kT.delete(), this._widgets.delete(cT)
          }
          getResponse(TT) {
            var kT;
            const cT = TT || Xl;
            return (null === (kT = this._widgets.get(cT)) || void 0 === kT ? void 0 : kT.getResponse()) || ""
          }
          async execute(TT) {
            var kT;
            const cT = TT || Xl;
            return null === (kT = this._widgets.get(cT)) || void 0 === kT || kT.execute(), ""
          }
        }
        class Ll {
          constructor(TT, kT, cT) {
            this.params = cT, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const lT = "string" === typeof TT ? document.getElementById(TT) : TT;
            wT(lT, "argument-error", {
              appName: kT
            }), this.container = lT, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const kT = [],
                  cT = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let lT = 0; lT < TT; lT++) kT.push(cT.charAt(Math.floor(Math.random() * cT.length)));
                return kT.join("")
              }(50);
              const {
                callback: TT,
                "expired-callback": kT
              } = this.params;
              if (TT) try {
                TT(this.responseToken)
              } catch (cT) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, kT) try {
                  kT()
                } catch (cT) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const Rl = mk("rcb"),
          gl = new HT(3e4, 6e4);
        class Ul {
          constructor() {
            var TT;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (TT = ml().grecaptcha) || void 0 === TT ? void 0 : TT.render)
          }
          load(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return wT(function(TT) {
              return TT.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(TT)
            }(kT), TT, "argument-error"), this.shouldResolveImmediately(kT) && Fk(ml().grecaptcha) ? Promise.resolve(ml().grecaptcha) : new Promise(((cT, MT) => {
              const KT = ml().setTimeout((() => {
                MT(aT(TT, "network-request-failed"))
              }), gl.get());
              ml()[Rl] = () => {
                ml().clearTimeout(KT), delete ml()[Rl];
                const lT = ml().grecaptcha;
                if (!lT || !Fk(lT)) return void MT(aT(TT, "internal-error"));
                const OT = lT.render;
                lT.render = (TT, kT) => {
                  const cT = OT(TT, kT);
                  return this.counter++, cT
                }, this.hostLanguage = kT, cT(lT)
              };
              wk(`https://www.google.com/recaptcha/api.js??${(0,lT.fb)({onload:Rl,render:"explicit",hl:kT})}`).catch((() => {
                clearTimeout(KT), MT(aT(TT, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(TT) {
            var kT;
            return !!(null === (kT = ml().grecaptcha) || void 0 === kT ? void 0 : kT.render) && (TT === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class Yl {
          async load(TT) {
            return new dl(TT)
          }
          clearedOneInstance() {}
        }
        const Bl = "recaptcha",
          Wl = {
            theme: "light",
            type: "image"
          };
        class nl {
          constructor(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Wl),
              cT = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = kT, this.type = Bl, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = ek(cT), this.isInvisible = "invisible" === this.parameters.size, wT("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const lT = "string" === typeof TT ? document.getElementById(TT) : TT;
            wT(lT, this.auth, "argument-error"), this.container = lT, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Yl : new Ul, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const TT = await this.render(),
              kT = this.getAssertedRecaptcha(),
              cT = kT.getResponse(TT);
            return cT || new Promise((cT => {
              const lT = TT => {
                TT && (this.tokenChangeListeners.delete(lT), cT(TT))
              };
              this.tokenChangeListeners.add(lT), this.isInvisible && kT.execute(TT)
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
            wT(!this.parameters.sitekey, this.auth, "argument-error"), wT(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), wT("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(TT) {
            return kT => {
              if (this.tokenChangeListeners.forEach((TT => TT(kT))), "function" === typeof TT) TT(kT);
              else if ("string" === typeof TT) {
                const cT = ml()[TT];
                "function" === typeof cT && cT(kT)
              }
            }
          }
          assertNotDestroyed() {
            wT(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let TT = this.container;
              if (!this.isInvisible) {
                const kT = document.createElement("div");
                TT.appendChild(kT), TT = kT
              }
              this.widgetId = this.getAssertedRecaptcha().render(TT, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            wT(JT() && !bl(), this.auth, "internal-error"), await
            function() {
              let TT = null;
              return new Promise((kT => {
                "complete" !== document.readyState ? (TT = () => kT(), window.addEventListener("load", TT)) : kT()
              })).catch((kT => {
                throw TT && window.removeEventListener("load", TT), kT
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const TT = await async function(TT) {
              return (await uT(TT, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            wT(TT, this.auth, "internal-error"), this.parameters.sitekey = TT
          }
          getAssertedRecaptcha() {
            return wT(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class pl {
          constructor(TT, kT) {
            this.verificationId = TT, this.onConfirmation = kT
          }
          confirm(TT) {
            const kT = ik._fromVerification(this.verificationId, TT);
            return this.onConfirmation(kT)
          }
        }
        async function il(TT, kT, cT) {
          const MT = ek(TT),
            KT = await TM(MT, kT, (0, lT.L)(cT));
          return new pl(KT, (TT => Fc(MT, TT)))
        }
        async function ql(TT, kT, cT) {
          const MT = (0, lT.L)(TT);
          await Sc(!1, MT, "phone");
          const KT = await TM(MT.auth, kT, (0, lT.L)(cT));
          return new pl(KT, (TT => rc(MT, TT)))
        }
        async function sl(TT, kT, cT) {
          const MT = (0, lT.L)(TT),
            KT = await TM(MT.auth, kT, (0, lT.L)(cT));
          return new pl(KT, (TT => Pc(MT, TT)))
        }
        async function TM(TT, kT, cT) {
          var lT;
          const MT = await cT.verify();
          try {
            let KT;
            if (wT("string" === typeof MT, TT, "argument-error"), wT(cT.type === Bl, TT, "argument-error"), KT = "string" === typeof kT ? {
                phoneNumber: kT
              } : kT, "session" in KT) {
              const kT = KT.session;
              if ("phoneNumber" in KT) {
                wT("enroll" === kT.type, TT, "internal-error");
                const cT = await
                function(TT, kT) {
                  return uT(TT, "POST", "/v2/accounts/mfaEnrollment:start", ZT(TT, kT))
                }(TT, {
                  idToken: kT.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: KT.phoneNumber,
                    recaptchaToken: MT
                  }
                });
                return cT.phoneSessionInfo.sessionInfo
              } {
                wT("signin" === kT.type, TT, "internal-error");
                const cT = (null === (lT = KT.multiFactorHint) || void 0 === lT ? void 0 : lT.uid) || KT.multiFactorUid;
                wT(cT, TT, "missing-multi-factor-info");
                const OT = await
                function(TT, kT) {
                  return uT(TT, "POST", "/v2/accounts/mfaSignIn:start", ZT(TT, kT))
                }(TT, {
                  mfaPendingCredential: kT.credential,
                  mfaEnrollmentId: cT,
                  phoneSignInInfo: {
                    recaptchaToken: MT
                  }
                });
                return OT.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: kT
              } = await async function(TT, kT) {
                return uT(TT, "POST", "/v1/accounts:sendVerificationCode", ZT(TT, kT))
              }(TT, {
                phoneNumber: KT.phoneNumber,
                recaptchaToken: MT
              });
              return kT
            }
          } finally {
            cT._reset()
          }
        }
        async function kM(TT, kT) {
          await Qc((0, lT.L)(TT), kT)
        }
        class cM {
          constructor(TT) {
            this.providerId = cM.PROVIDER_ID, this.auth = ek(TT)
          }
          verifyPhoneNumber(TT, kT) {
            return TM(this.auth, TT, (0, lT.L)(kT))
          }
          static credential(TT, kT) {
            return ik._fromVerification(TT, kT)
          }
          static credentialFromResult(TT) {
            const kT = TT;
            return cM.credentialFromTaggedObject(kT)
          }
          static credentialFromError(TT) {
            return cM.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: kT
            } = TT;
            if (!kT) return null;
            const {
              phoneNumber: cT,
              temporaryProof: lT
            } = kT;
            return cT && lT ? ik._fromTokenResponse(cT, lT) : null
          }
        }

        function lM(TT, kT) {
          return kT ? Kk(kT) : (wT(TT._popupRedirectResolver, TT, "argument-error"), TT._popupRedirectResolver)
        }
        cM.PROVIDER_ID = "phone", cM.PHONE_SIGN_IN_METHOD = "phone";
        class MM extends Xk {
          constructor(TT) {
            super("custom", "custom"), this.params = TT
          }
          _getIdTokenResponse(TT) {
            return Wk(TT, this._buildIdpRequest())
          }
          _linkToIdToken(TT, kT) {
            return Wk(TT, this._buildIdpRequest(kT))
          }
          _getReauthenticationResolver(TT) {
            return Wk(TT, this._buildIdpRequest())
          }
          _buildIdpRequest(TT) {
            const kT = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return TT && (kT.idToken = TT), kT
          }
        }

        function KM(TT) {
          return ac(TT.auth, new MM(TT), TT.bypassAuthState)
        }

        function OM(TT) {
          const {
            auth: kT,
            user: cT
          } = TT;
          return wT(cT, kT, "internal-error"), Dc(cT, new MM(TT), TT.bypassAuthState)
        }
        async function yM(TT) {
          const {
            auth: kT,
            user: cT
          } = TT;
          return wT(cT, kT, "internal-error"), Qc(cT, new MM(TT), TT.bypassAuthState)
        }
        class fM {
          constructor(TT, kT, cT, lT) {
            let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = TT, this.resolver = cT, this.user = lT, this.bypassAuthState = MT, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(kT) ? kT : [kT]
          }
          execute() {
            return new Promise((async (TT, kT) => {
              this.pendingPromise = {
                resolve: TT,
                reject: kT
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (cT) {
                this.reject(cT)
              }
            }))
          }
          async onAuthEvent(TT) {
            const {
              urlResponse: kT,
              sessionId: cT,
              postBody: lT,
              tenantId: MT,
              error: KT,
              type: OT
            } = TT;
            if (KT) return void this.reject(KT);
            const yT = {
              auth: this.auth,
              requestUri: kT,
              sessionId: cT,
              tenantId: MT || void 0,
              postBody: lT || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(OT)(yT))
            } catch (fT) {
              this.reject(fT)
            }
          }
          onError(TT) {
            this.reject(TT)
          }
          getIdpTask(TT) {
            switch (TT) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return KM;
              case "linkViaPopup":
              case "linkViaRedirect":
                return yM;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return OM;
              default:
                DT(this.auth, "internal-error")
            }
          }
          resolve(TT) {
            bT(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(TT), this.unregisterAndCleanUp()
          }
          reject(TT) {
            bT(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(TT), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const xM = new HT(2e3, 1e4);
        async function IM(TT, kT, cT) {
          const lT = ek(TT);
          rT(TT, kT, kc);
          const MT = lM(lT, cT);
          return new jM(lT, "signInViaPopup", kT, MT).executeNotNull()
        }
        async function AM(TT, kT, cT) {
          const MT = (0, lT.L)(TT);
          rT(MT.auth, kT, kc);
          const KT = lM(MT.auth, cT);
          return new jM(MT.auth, "reauthViaPopup", kT, KT, MT).executeNotNull()
        }
        async function CM(TT, kT, cT) {
          const MT = (0, lT.L)(TT);
          rT(MT.auth, kT, kc);
          const KT = lM(MT.auth, cT);
          return new jM(MT.auth, "linkViaPopup", kT, KT, MT).executeNotNull()
        }
        class jM extends fM {
          constructor(TT, kT, cT, lT, MT) {
            super(TT, kT, lT, MT), this.provider = cT, this.authWindow = null, this.pollId = null, jM.currentPopupAction && jM.currentPopupAction.cancel(), jM.currentPopupAction = this
          }
          async executeNotNull() {
            const TT = await this.execute();
            return wT(TT, this.auth, "internal-error"), TT
          }
          async onExecution() {
            bT(1 === this.filter.length, "Popup operations only handle one event");
            const TT = Pl();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], TT), this.authWindow.associatedEvent = TT, this.resolver._originValidation(this.auth).catch((TT => {
              this.reject(TT)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (TT => {
              TT || this.reject(aT(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var TT;
            return (null === (TT = this.authWindow) || void 0 === TT ? void 0 : TT.associatedEvent) || null
          }
          cancel() {
            this.reject(aT(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, jM.currentPopupAction = null
          }
          pollUserCancellation() {
            const TT = () => {
              var kT, cT;
              (null === (cT = null === (kT = this.authWindow) || void 0 === kT ? void 0 : kT.window) || void 0 === cT ? void 0 : cT.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(aT(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(TT, xM.get())
            };
            TT()
          }
        }
        jM.currentPopupAction = null;
        const vM = "pendingRedirect",
          tM = new Map;
        class hM extends fM {
          constructor(TT, kT) {
            super(TT, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], kT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let TT = tM.get(this.auth._key());
            if (!TT) {
              try {
                const kT = await async function(TT, kT) {
                  const cT = DM(kT),
                    lT = SM(TT);
                  if (!await lT._isAvailable()) return !1;
                  const MT = "true" === await lT._get(cT);
                  return await lT._remove(cT), MT
                }(this.resolver, this.auth) ? await super.execute() : null;
                TT = () => Promise.resolve(kT)
              } catch (kT) {
                TT = () => Promise.reject(kT)
              }
              tM.set(this.auth._key(), TT)
            }
            return this.bypassAuthState || tM.set(this.auth._key(), (() => Promise.resolve(null))), TT()
          }
          async onAuthEvent(TT) {
            if ("signInViaRedirect" === TT.type) return super.onAuthEvent(TT);
            if ("unknown" !== TT.type) {
              if (TT.eventId) {
                const kT = await this.auth._redirectUserForId(TT.eventId);
                if (kT) return this.user = kT, super.onAuthEvent(TT);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function NM(TT, kT) {
          return SM(TT)._set(DM(kT), "true")
        }

        function QM(TT, kT) {
          tM.set(TT._key(), kT)
        }

        function SM(TT) {
          return Kk(TT._redirectPersistence)
        }

        function DM(TT) {
          return fk(vM, TT.config.apiKey, TT.name)
        }

        function aM(TT, kT, cT) {
          return async function(TT, kT, cT) {
            const lT = ek(TT);
            rT(TT, kT, kc), await lT._initializationPromise;
            const MT = lM(lT, cT);
            return await NM(MT, lT), MT._openRedirect(lT, kT, "signInViaRedirect")
          }(TT, kT, cT)
        }

        function FM(TT, kT, cT) {
          return async function(TT, kT, cT) {
            const MT = (0, lT.L)(TT);
            rT(MT.auth, kT, kc), await MT.auth._initializationPromise;
            const KT = lM(MT.auth, cT);
            await NM(KT, MT.auth);
            const OT = await mM(MT);
            return KT._openRedirect(MT.auth, kT, "reauthViaRedirect", OT)
          }(TT, kT, cT)
        }

        function rM(TT, kT, cT) {
          return async function(TT, kT, cT) {
            const MT = (0, lT.L)(TT);
            rT(MT.auth, kT, kc), await MT.auth._initializationPromise;
            const KT = lM(MT.auth, cT);
            await Sc(!1, MT, kT.providerId), await NM(KT, MT.auth);
            const OT = await mM(MT);
            return KT._openRedirect(MT.auth, kT, "linkViaRedirect", OT)
          }(TT, kT, cT)
        }
        async function PM(TT, kT) {
          return await ek(TT)._initializationPromise, wM(TT, kT, !1)
        }
        async function wM(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const lT = ek(TT),
            MT = lM(lT, kT),
            KT = new hM(lT, MT, cT),
            OT = await KT.execute();
          return OT && !cT && (delete OT.user._redirectEventId, await lT._persistUserIfCurrent(OT.user), await lT._setRedirectUser(null, kT)), OT
        }
        async function mM(TT) {
          const kT = Pl(`${TT.uid}:::`);
          return TT._redirectEventId = kT, await TT.auth._setRedirectUser(TT), await TT.auth._persistUserIfCurrent(TT), kT
        }
        class bM {
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
            let kT = !1;
            return this.consumers.forEach((cT => {
              this.isEventForConsumer(TT, cT) && (kT = !0, this.sendToConsumer(TT, cT), this.saveEventToCache(TT))
            })), this.hasHandledPotentialRedirect || ! function(TT) {
              switch (TT.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return JM(TT);
                default:
                  return !1
              }
            }(TT) || (this.hasHandledPotentialRedirect = !0, kT || (this.queuedRedirectEvent = TT, kT = !0)), kT
          }
          sendToConsumer(TT, kT) {
            var cT;
            if (TT.error && !JM(TT)) {
              const lT = (null === (cT = TT.error.code) || void 0 === cT ? void 0 : cT.split("auth/")[1]) || "internal-error";
              kT.onError(aT(this.auth, lT))
            } else kT.onAuthEvent(TT)
          }
          isEventForConsumer(TT, kT) {
            const cT = null === kT.eventId || !!TT.eventId && TT.eventId === kT.eventId;
            return kT.filter.includes(TT.type) && cT
          }
          hasEventBeenHandled(TT) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(zM(TT))
          }
          saveEventToCache(TT) {
            this.cachedEventUids.add(zM(TT)), this.lastProcessedEventTime = Date.now()
          }
        }

        function zM(TT) {
          return [TT.type, TT.eventId, TT.sessionId, TT.tenantId].filter((TT => TT)).join("-")
        }

        function JM(TT) {
          let {
            type: kT,
            error: cT
          } = TT;
          return "unknown" === kT && "auth/no-auth-event" === (null === cT || void 0 === cT ? void 0 : cT.code)
        }
        const oM = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          HM = /^https?/;
        async function eM(TT) {
          if (TT.config.emulator) return;
          const {
            authorizedDomains: kT
          } = await async function(TT) {
            return uT(TT, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(TT);
          for (const lT of kT) try {
            if (GM(lT)) return
          } catch (cT) {}
          DT(TT, "unauthorized-domain")
        }

        function GM(TT) {
          const kT = zT(),
            {
              protocol: cT,
              hostname: lT
            } = new URL(kT);
          if (TT.startsWith("chrome-extension://")) {
            const MT = new URL(TT);
            return "" === MT.hostname && "" === lT ? "chrome-extension:" === cT && TT.replace("chrome-extension://", "") === kT.replace("chrome-extension://", "") : "chrome-extension:" === cT && MT.hostname === lT
          }
          if (!HM.test(cT)) return !1;
          if (oM.test(TT)) return lT === TT;
          const MT = TT.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + MT + "|" + MT + ")$", "i").test(lT)
        }
        const VM = new HT(3e4, 6e4);

        function EM() {
          const TT = ml().___jsl;
          if (null === TT || void 0 === TT ? void 0 : TT.H)
            for (const kT of Object.keys(TT.H))
              if (TT.H[kT].r = TT.H[kT].r || [], TT.H[kT].L = TT.H[kT].L || [], TT.H[kT].r = [...TT.H[kT].L], TT.CP)
                for (let cT = 0; cT < TT.CP.length; cT++) TT.CP[cT] = null
        }
        let ZM = null;

        function uM(TT) {
          return ZM = ZM || function(TT) {
            return new Promise(((kT, cT) => {
              var lT, MT, KT;

              function OT() {
                EM(), gapi.load("gapi.iframes", {
                  callback: () => {
                    kT(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    EM(), cT(aT(TT, "network-request-failed"))
                  },
                  timeout: VM.get()
                })
              }
              if (null === (MT = null === (lT = ml().gapi) || void 0 === lT ? void 0 : lT.iframes) || void 0 === MT ? void 0 : MT.Iframe) kT(gapi.iframes.getContext());
              else {
                if (!(null === (KT = ml().gapi) || void 0 === KT ? void 0 : KT.load)) {
                  const kT = mk("iframefcb");
                  return ml()[kT] = () => {
                    gapi.load ? OT() : cT(aT(TT, "network-request-failed"))
                  }, wk(`https://apis.google.com/js/api.js?onload=${kT}`).catch((TT => cT(TT)))
                }
                OT()
              }
            })).catch((TT => {
              throw ZM = null, TT
            }))
          }(TT), ZM
        }
        const XM = new HT(5e3, 15e3),
          dM = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          LM = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function RM(TT) {
          const kT = TT.config;
          wT(kT.authDomain, TT, "auth-domain-config-required");
          const cT = kT.emulator ? eT(kT, "emulator/auth/iframe") : `https://${TT.config.authDomain}/__/auth/iframe`,
            KT = {
              apiKey: kT.apiKey,
              appName: TT.name,
              v: MT.e
            },
            OT = LM.get(TT.config.apiHost);
          OT && (KT.eid = OT);
          const yT = TT._getFrameworks();
          return yT.length && (KT.fw = yT.join(",")), `${cT}?${(0,lT.fb)(KT).slice(1)}`
        }
        const gM = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class UM {
          constructor(TT) {
            this.window = TT, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (TT) {}
          }
        }

        function YM(TT, kT, cT) {
          let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const OT = Math.max((window.screen.availHeight - KT) / 2, 0).toString(),
            yT = Math.max((window.screen.availWidth - MT) / 2, 0).toString();
          let fT = "";
          const xT = Object.assign(Object.assign({}, gM), {
              width: MT.toString(),
              height: KT.toString(),
              top: OT,
              left: yT
            }),
            IT = (0, lT.M)().toLowerCase();
          cT && (fT = jk(IT) ? "_blank" : cT), Ak(IT) && (kT = kT || "http://localhost", xT.scrollbars = "yes");
          const AT = Object.entries(xT).reduce(((TT, kT) => {
            let [cT, lT] = kT;
            return `${TT}${cT}=${lT},`
          }), "");
          if (function() {
              var TT;
              return Qk(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.M)()) && !!(null === (TT = window.navigator) || void 0 === TT ? void 0 : TT.standalone)
            }(IT) && "_self" !== fT) return function(TT, kT) {
            const cT = document.createElement("a");
            cT.href = TT, cT.target = kT;
            const lT = document.createEvent("MouseEvent");
            lT.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), cT.dispatchEvent(lT)
          }(kT || "", fT), new UM(null);
          const CT = window.open(kT || "", fT, AT);
          wT(CT, TT, "popup-blocked");
          try {
            CT.focus()
          } catch (jT) {}
          return new UM(CT)
        }
        const BM = "__/auth/handler",
          WM = "emulator/auth/handler",
          nM = encodeURIComponent("fac");
        async function pM(TT, kT, cT, KT, OT, yT) {
            wT(TT.config.authDomain, TT, "auth-domain-config-required"), wT(TT.config.apiKey, TT, "invalid-api-key");
            const fT = {
              apiKey: TT.config.apiKey,
              appName: TT.name,
              authType: cT,
              redirectUrl: KT,
              v: MT.e,
              eventId: OT
            };
            if (kT instanceof kc) {
              kT.setDefaultLanguage(TT.languageCode), fT.providerId = kT.providerId || "", (0, lT.P)(kT.getCustomParameters()) || (fT.customParameters = JSON.stringify(kT.getCustomParameters()));
              for (const [TT, kT] of Object.entries(yT || {})) fT[TT] = kT
            }
            if (kT instanceof cc) {
              const TT = kT.getScopes().filter((TT => "" !== TT));
              TT.length > 0 && (fT.scopes = TT.join(","))
            }
            TT.tenantId && (fT.tid = TT.tenantId);
            const xT = fT;
            for (const lT of Object.keys(xT)) void 0 === xT[lT] && delete xT[lT];
            const IT = await TT._getAppCheckToken(),
              AT = IT ? `#${nM}=${encodeURIComponent(IT)}` : "";
            return `${function(TT){let{config:kT}=TT;if(!kT.emulator)return`
            https: //${kT.authDomain}/${BM}`;return eT(kT,WM)}(TT)}?${(0,lT.fb)(xT).slice(1)}${AT}`}const iM="webStorageSupport";const qM=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fl,this._completeRedirectFn=wM,this._overrideRedirectResult=QM}async _openPopup(TT,kT,cT,lT){var MT;bT(null===(MT=this.eventManagers[TT._key()])||void 0===MT?void 0:MT.manager,"_initialize() not called before _openPopup()");return YM(TT,await pM(TT,kT,cT,zT(),lT),Pl())}async _openRedirect(TT,kT,cT,lT){await this._originValidation(TT);return function(TT){ml().location.href=TT}(await pM(TT,kT,cT,zT(),lT)),new Promise((()=>{}))}_initialize(TT){const kT=TT._key();if(this.eventManagers[kT]){const{manager:TT,promise:cT}=this.eventManagers[kT];return TT?Promise.resolve(TT):(bT(cT,"If manager is not set, promise should be"),cT)}const cT=this.initAndGetManager(TT);return this.eventManagers[kT]={promise:cT},cT.catch((()=>{delete this.eventManagers[kT]})),cT}async initAndGetManager(TT){const kT=await async function(TT){const kT=await uM(TT),cT=ml().gapi;return wT(cT,TT,"internal-error"),kT.open({where:document.body,url:RM(TT),messageHandlersFilter:cT.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dM,dontclear:!0},(kT=>new Promise((async(cT,lT)=>{await kT.restyle({setHideOnLeave:!1});const MT=aT(TT,"network-request-failed"),KT=ml().setTimeout((()=>{lT(MT)}),XM.get());function OT(){ml().clearTimeout(KT),cT(kT)}kT.ping(OT).then(OT,(()=>{lT(MT)}))}))))}(TT),cT=new bM(TT);return kT.register("authEvent",(kT=>{wT(null===kT||void 0===kT?void 0:kT.authEvent,TT,"invalid-auth-event");return{status:cT.onEvent(kT.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[TT._key()]={manager:cT},this.iframes[TT._key()]=kT,cT}_isIframeWebStorageSupported(TT,kT){this.iframes[TT._key()].send(iM,{type:iM},(cT=>{var lT;const MT=null===(lT=null===cT||void 0===cT?void 0:cT[0])||void 0===lT?void 0:lT[iM];void 0!==MT&&kT(!!MT),DT(TT,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(TT){const kT=TT._key();return this.originValidationPromises[kT]||(this.originValidationPromises[kT]=eM(TT)),this.originValidationPromises[kT]}get _shouldInitProactively(){return Sk()||Ck()||Qk()}};class sM{constructor(TT){this.factorId=TT}_process(TT,kT,cT){switch(kT.type){case"enroll":return this._finalizeEnroll(TT,kT.credential,cT);case"signin":return this._finalizeSignIn(TT,kT.credential);default:return mT("unexpected MultiFactorSessionType")}}}class TK extends sM{constructor(TT){super("phone"),this.credential=TT}static _fromCredential(TT){return new TK(TT)}_finalizeEnroll(TT,kT,cT){return function(TT,kT){return uT(TT,"POST","/v2/accounts/mfaEnrollment:finalize",ZT(TT,kT))}(TT,{idToken:kT,displayName:cT,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(TT,kT){return function(TT,kT){return uT(TT,"POST","/v2/accounts/mfaSignIn:finalize",ZT(TT,kT))}(TT,{mfaPendingCredential:kT,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kK{constructor(){}static assertion(TT){return TK._fromCredential(TT)}}kK.FACTOR_ID="phone";class cK{static assertionForEnrollment(TT,kT){return lK._fromSecret(TT,kT)}static assertionForSignIn(TT,kT){return lK._fromEnrollmentId(TT,kT)}static async generateSecret(TT){const kT=TT;wT("undefined"!==typeof kT.auth,"internal-error");const cT=await(lT=kT.auth,MT={idToken:kT.credential,totpEnrollmentInfo:{}},uT(lT,"POST","/v2/accounts/mfaEnrollment:start",ZT(lT,MT)));var lT,MT;return MK._fromStartTotpMfaEnrollmentResponse(cT,kT.auth)}}cK.FACTOR_ID="totp";class lK extends sM{constructor(TT,kT,cT){super("totp"),this.otp=TT,this.enrollmentId=kT,this.secret=cT}static _fromSecret(TT,kT){return new lK(kT,void 0,TT)}static _fromEnrollmentId(TT,kT){return new lK(kT,TT)}async _finalizeEnroll(TT,kT,cT){return wT("undefined"!==typeof this.secret,TT,"argument-error"),function(TT,kT){return uT(TT,"POST","/v2/accounts/mfaEnrollment:finalize",ZT(TT,kT))}(TT,{idToken:kT,displayName:cT,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(TT,kT){wT(void 0!==this.enrollmentId&&void 0!==this.otp,TT,"argument-error");const cT={verificationCode:this.otp};return function(TT,kT){return uT(TT,"POST","/v2/accounts/mfaSignIn:finalize",ZT(TT,kT))}(TT,{mfaPendingCredential:kT,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:cT})}}class MK{constructor(TT,kT,cT,lT,MT,KT,OT){this.sessionInfo=KT,this.auth=OT,this.secretKey=TT,this.hashingAlgorithm=kT,this.codeLength=cT,this.codeIntervalSeconds=lT,this.enrollmentCompletionDeadline=MT}static _fromStartTotpMfaEnrollmentResponse(TT,kT){return new MK(TT.totpSessionInfo.sharedSecretKey,TT.totpSessionInfo.hashingAlgorithm,TT.totpSessionInfo.verificationCodeLength,TT.totpSessionInfo.periodSec,new Date(TT.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),TT.totpSessionInfo.sessionInfo,kT)}_makeTotpVerificationInfo(TT){return{sessionInfo:this.sessionInfo,verificationCode:TT}}generateQrCodeUrl(TT,kT){var cT;let lT=!1;return(KK(TT)||KK(kT))&&(lT=!0),lT&&(KK(TT)&&(TT=(null===(cT=this.auth.currentUser)||void 0===cT?void 0:cT.email)||"unknownuser"),KK(kT)&&(kT=this.auth.name)),`otpauth://totp/${kT}:${TT}?secret=${this.secretKey}&issuer=${kT}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function KK(TT){return"undefined"===typeof TT||0===(null===TT||void 0===TT?void 0:TT.length)}var OK="@firebase/auth",yK="0.23.2";class fK{constructor(TT){this.auth=TT,this.internalListeners=new Map}getUid(){var TT;return this.assertAuthConfigured(),(null===(TT=this.auth.currentUser)||void 0===TT?void 0:TT.uid)||null}async getToken(TT){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(TT)}}addAuthTokenListener(TT){if(this.assertAuthConfigured(),this.internalListeners.has(TT))return;const kT=this.auth.onIdTokenChanged((kT=>{TT((null===kT||void 0===kT?void 0:kT.stsTokenManager.accessToken)||null)}));this.internalListeners.set(TT,kT),this.updateProactiveRefresh()}removeAuthTokenListener(TT){this.assertAuthConfigured();const kT=this.internalListeners.get(TT);kT&&(this.internalListeners.delete(TT),kT(),this.updateProactiveRefresh())}assertAuthConfigured(){wT(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const xK=(0,lT.I)("authIdTokenMaxAge")||300;let IK=null;const AK=TT=>async kT=>{const cT=kT&&await kT.getIdTokenResult(),lT=cT&&((new Date).getTime()-Date.parse(cT.issuedAtTime))/1e3;if(lT&&lT>xK)return;const MT=null===cT||void 0===cT?void 0:cT.token;IK!==MT&&(IK=MT,await fetch(TT,{method:MT?"POST":"DELETE",headers:MT?{Authorization:`Bearer ${MT}`}:{}}))};function CK(){let TT=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,MT.G)();const kT=(0,MT.s)(TT,"auth");if(kT.isInitialized())return kT.getImmediate();const cT=Vk(TT,{popupRedirectResolver:qM,persistence:[ul,Dl,Fl]}),KT=(0,lT.I)("authTokenSyncURL");if(KT){const TT=AK(KT);Kl(cT,TT,(()=>TT(cT.currentUser))),Ml(cT,(kT=>TT(kT)))}const OT=(0,lT.G)("auth");return OT&&Ek(cT,`http://${OT}`),cT}var jK;jK="Browser",(0,MT.v)(new yT.h("auth",((TT,kT)=>{let{options:cT}=kT;const lT=TT.getProvider("app").getImmediate(),MT=TT.getProvider("heartbeat"),KT=TT.getProvider("app-check-internal"),{apiKey:OT,authDomain:yT}=lT.options;wT(OT&&!OT.includes(":"),"invalid-api-key",{appName:lT.name});const fT={apiKey:OT,authDomain:yT,clientPlatform:jK,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dk(jK)},xT=new Hk(lT,MT,KT,fT);return function(TT,kT){const cT=(null===kT||void 0===kT?void 0:kT.persistence)||[],lT=(Array.isArray(cT)?cT:[cT]).map(Kk);(null===kT||void 0===kT?void 0:kT.errorMap)&&TT._updateErrorMap(kT.errorMap),TT._initializeWithPersistence(lT,null===kT||void 0===kT?void 0:kT.popupRedirectResolver)}(xT,cT),xT}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((TT,kT,cT)=>{TT.getProvider("auth-internal").initialize()}))),(0,MT.v)(new yT.h("auth-internal",(TT=>(TT=>new fK(TT))(ek(TT.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,MT.N)(OK,yK,function(TT){switch(TT){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(jK)),(0,MT.N)(OK,yK,"esm2017")}};Object.freeze(modules);for(const TT in modules)Object.freeze(modules[TT]);