/*! For license information please see zyyatq.257.da83483b.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
    39647: (YY, rY, DY) => {
        DY.r(rY), DY.d(rY, {
          ActionCodeOperation: () => sY,
          ActionCodeURL: () => Ur,
          AuthCredential: () => Jr,
          AuthErrorCodes: () => WY,
          EmailAuthCredential: () => kr,
          EmailAuthProvider: () => tr,
          FacebookAuthProvider: () => FD,
          FactorId: () => gY,
          GithubAuthProvider: () => ID,
          GoogleAuthProvider: () => AD,
          OAuthCredential: () => xr,
          OAuthProvider: () => DD,
          OperationType: () => uY,
          PhoneAuthCredential: () => Pr,
          PhoneAuthProvider: () => rA,
          PhoneMultiFactorGenerator: () => YI,
          ProviderId: () => aY,
          RecaptchaVerifier: () => xF,
          SAMLAuthProvider: () => OD,
          SignInMethod: () => vY,
          TotpMultiFactorGenerator: () => rI,
          TotpSecret: () => FI,
          TwitterAuthProvider: () => gD,
          applyActionCode: () => ZD,
          beforeAuthStateChanged: () => AF,
          browserLocalPersistence: () => mF,
          browserPopupRedirectResolver: () => UA,
          browserSessionPersistence: () => SF,
          checkActionCode: () => CD,
          confirmPasswordReset: () => zD,
          connectAuthEmulator: () => jr,
          createUserWithEmailAndPassword: () => jD,
          debugErrorMap: () => yY,
          deleteUser: () => aF,
          fetchSignInMethodsForEmail: () => wD,
          getAdditionalUserInfo: () => YF,
          getAuth: () => uI,
          getIdToken: () => kY,
          getIdTokenResult: () => GY,
          getMultiFactorResolver: () => sF,
          getRedirectResult: () => TA,
          inMemoryPersistence: () => Or,
          indexedDBLocalPersistence: () => dF,
          initializeAuth: () => fr,
          initializeRecaptchaConfig: () => DF,
          isSignInWithEmailLink: () => JD,
          linkWithCredential: () => lD,
          linkWithPhoneNumber: () => UF,
          linkWithPopup: () => uA,
          linkWithRedirect: () => lA,
          multiFactor: () => QF,
          onAuthStateChanged: () => IF,
          onIdTokenChanged: () => FF,
          parseActionCodeURL: () => Lr,
          prodErrorMap: () => QY,
          reauthenticateWithCredential: () => TD,
          reauthenticateWithPhoneNumber: () => LF,
          reauthenticateWithPopup: () => vA,
          reauthenticateWithRedirect: () => SA,
          reload: () => Yr,
          sendEmailVerification: () => bD,
          sendPasswordResetEmail: () => HD,
          sendSignInLinkToEmail: () => dD,
          setPersistence: () => rF,
          signInAnonymously: () => sD,
          signInWithCredential: () => SD,
          signInWithCustomToken: () => eD,
          signInWithEmailAndPassword: () => hD,
          signInWithEmailLink: () => MD,
          signInWithPhoneNumber: () => PF,
          signInWithPopup: () => aA,
          signInWithRedirect: () => VA,
          signOut: () => gF,
          unlink: () => oD,
          updateCurrentUser: () => OF,
          updateEmail: () => pD,
          updatePassword: () => kD,
          updatePhoneNumber: () => YA,
          updateProfile: () => qD,
          useDeviceLanguage: () => RF,
          verifyBeforeUpdateEmail: () => XD,
          verifyPasswordResetCode: () => fD
        });
        var FY = DY(39635),
          AY = DY(39625);

        function IY(YY, rY) {
          var DY = {};
          for (var FY in YY) Object.prototype.hasOwnProperty.call(YY, FY) && rY.indexOf(FY) < 0 && (DY[FY] = YY[FY]);
          if (null != YY && "function" === typeof Object.getOwnPropertySymbols) {
            var AY = 0;
            for (FY = Object.getOwnPropertySymbols(YY); AY < FY.length; AY++) rY.indexOf(FY[AY]) < 0 && Object.prototype.propertyIsEnumerable.call(YY, FY[AY]) && (DY[FY[AY]] = YY[FY[AY]])
          }
          return DY
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var RY = DY(39640),
          OY = DY(39632);
        const gY = {
            PHONE: "phone",
            TOTP: "totp"
          },
          aY = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          vY = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          uY = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          sY = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function iY() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const yY = function() {
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
          QY = iY,
          oY = new FY.f("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          WY = {
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
          EY = new RY.f("@firebase/auth");

        function mY(YY) {
          if (EY.logLevel <= RY.e.ERROR) {
            for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
            EY.error(`Auth (${AY.i}): ${YY}`, ...DY)
          }
        }

        function VY(YY) {
          for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
          throw eY(YY, ...DY)
        }

        function SY(YY) {
          for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
          return eY(YY, ...DY)
        }

        function lY(YY, rY, DY) {
          const AY = Object.assign(Object.assign({}, QY()), {
            [rY]: DY
          });
          return new FY.f("auth", "Firebase", AY).create(rY, {
            appName: YY.name
          })
        }

        function TY(YY, rY, DY) {
          if (!(rY instanceof DY)) throw DY.name !== rY.constructor.name && VY(YY, "argument-error"), lY(YY, "argument-error", `Type of ${rY.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function eY(YY) {
          for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
          if ("string" !== typeof YY) {
            const rY = DY[0],
              FY = [...DY.slice(1)];
            return FY[0] && (FY[0].appName = YY.name), YY._errorFactory.create(rY, ...FY)
          }
          return oY.create(YY, ...DY)
        }

        function NY(YY, rY) {
          if (!YY) {
            for (var DY = arguments.length, FY = new Array(DY > 2 ? DY - 2 : 0), AY = 2; AY < DY; AY++) FY[AY - 2] = arguments[AY];
            throw eY(rY, ...FY)
          }
        }

        function BY(YY) {
          const rY = "INTERNAL ASSERTION FAILED: " + YY;
          throw mY(rY), new Error(rY)
        }

        function cY(YY, rY) {
          YY || BY(rY)
        }

        function KY() {
          var YY;
          return "undefined" !== typeof self && (null === (YY = self.location) || void 0 === YY ? void 0 : YY.href) || ""
        }

        function HY() {
          return "http:" === zY() || "https:" === zY()
        }

        function zY() {
          var YY;
          return "undefined" !== typeof self && (null === (YY = self.location) || void 0 === YY ? void 0 : YY.protocol) || null
        }
        class ZY {
          constructor(YY, rY) {
            this.shortDelay = YY, this.longDelay = rY, cY(rY > YY, "Short delay should be less than long delay!"), this.isMobile = (0, FY.T)() || (0, FY.X)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (HY() || (0, FY.L)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function CY(YY, rY) {
          cY(YY.emulator, "Emulator should always be set here");
          const {
            url: DY
          } = YY.emulator;
          return rY ? `${DY}${rY.startsWith("/")?rY.slice(1):rY}` : DY
        }
        class fY {
          static initialize(YY, rY, DY) {
            this.fetchImpl = YY, rY && (this.headersImpl = rY), DY && (this.responseImpl = DY)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void BY("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void BY("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void BY("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const jY = {
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
          hY = new ZY(3e4, 6e4);

        function dY(YY, rY) {
          return YY.tenantId && !rY.tenantId ? Object.assign(Object.assign({}, rY), {
            tenantId: YY.tenantId
          }) : rY
        }
        async function JY(YY, rY, DY, AY) {
          return MY(YY, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let IY = {},
              RY = {};
            AY && ("GET" === rY ? RY = AY : IY = {
              body: JSON.stringify(AY)
            });
            const OY = (0, FY.db)(Object.assign({
                key: YY.config.apiKey
              }, RY)).slice(1),
              gY = await YY._getAdditionalHeaders();
            return gY["Content-Type"] = "application/json", YY.languageCode && (gY["X-Firebase-Locale"] = YY.languageCode), fY.fetch()(bY(YY, YY.config.apiHost, DY, OY), Object.assign({
              method: rY,
              headers: gY,
              referrerPolicy: "no-referrer"
            }, IY))
          }))
        }
        async function MY(YY, rY, DY) {
          YY._canInitEmulator = !1;
          const AY = Object.assign(Object.assign({}, jY), rY);
          try {
            const rY = new XY(YY),
              FY = await Promise.race([DY(), rY.promise]);
            rY.clearNetworkTimeout();
            const IY = await FY.json();
            if ("needConfirmation" in IY) throw qY(YY, "account-exists-with-different-credential", IY);
            if (FY.ok && !("errorMessage" in IY)) return IY;
            {
              const rY = FY.ok ? IY.errorMessage : IY.error.message,
                [DY, RY] = rY.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === DY) throw qY(YY, "credential-already-in-use", IY);
              if ("EMAIL_EXISTS" === DY) throw qY(YY, "email-already-in-use", IY);
              if ("USER_DISABLED" === DY) throw qY(YY, "user-disabled", IY);
              const OY = AY[DY] || DY.toLowerCase().replace(/[_\s]+/g, "-");
              if (RY) throw lY(YY, OY, RY);
              VY(YY, OY)
            }
          } catch (IY) {
            if (IY instanceof FY.g) throw IY;
            VY(YY, "network-request-failed", {
              message: String(IY)
            })
          }
        }
        async function wY(YY, rY, DY, FY) {
          let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const IY = await JY(YY, rY, DY, FY, AY);
          return "mfaPendingCredential" in IY && VY(YY, "multi-factor-auth-required", {
            _serverResponse: IY
          }), IY
        }

        function bY(YY, rY, DY, FY) {
          const AY = `${rY}${DY}?${FY}`;
          return YY.config.emulator ? CY(YY.config, AY) : `${YY.config.apiScheme}://${AY}`
        }
        class XY {
          constructor(YY) {
            this.auth = YY, this.timer = null, this.promise = new Promise(((YY, rY) => {
              this.timer = setTimeout((() => rY(SY(this.auth, "network-request-failed"))), hY.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function qY(YY, rY, DY) {
          const FY = {
            appName: YY.name
          };
          DY.email && (FY.email = DY.email), DY.phoneNumber && (FY.phoneNumber = DY.phoneNumber);
          const AY = SY(YY, rY, FY);
          return AY.customData._tokenResponse = DY, AY
        }

        function pY(YY) {
          if (YY) try {
            const rY = new Date(Number(YY));
            if (!isNaN(rY.getTime())) return rY.toUTCString()
          } catch (rY) {}
        }

        function kY(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, FY.G)(YY).getIdToken(rY)
        }
        async function GY(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const DY = (0, FY.G)(YY),
            AY = await DY.getIdToken(rY),
            IY = nY(AY);
          NY(IY && IY.exp && IY.auth_time && IY.iat, DY.auth, "internal-error");
          const RY = "object" === typeof IY.firebase ? IY.firebase : void 0,
            OY = null === RY || void 0 === RY ? void 0 : RY.sign_in_provider;
          return {
            claims: IY,
            token: AY,
            authTime: pY(xY(IY.auth_time)),
            issuedAtTime: pY(xY(IY.iat)),
            expirationTime: pY(xY(IY.exp)),
            signInProvider: OY || null,
            signInSecondFactor: (null === RY || void 0 === RY ? void 0 : RY.sign_in_second_factor) || null
          }
        }

        function xY(YY) {
          return 1e3 * Number(YY)
        }

        function nY(YY) {
          const [rY, DY, AY] = YY.split(".");
          if (void 0 === rY || void 0 === DY || void 0 === AY) return mY("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const YY = (0, FY.k)(DY);
            return YY ? JSON.parse(YY) : (mY("Failed to decode base64 JWT payload"), null)
          } catch (IY) {
            return mY("Caught error parsing JWT payload as JSON", null === IY || void 0 === IY ? void 0 : IY.toString()), null
          }
        }
        async function PY(YY, rY) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return rY;
          try {
            return await rY
          } catch (DY) {
            throw DY instanceof FY.g && function(YY) {
              let {
                code: rY
              } = YY;
              return "auth/user-disabled" === rY || "auth/user-token-expired" === rY
            }(DY) && YY.auth.currentUser === YY && await YY.auth.signOut(), DY
          }
        }
        class UY {
          constructor(YY) {
            this.user = YY, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(YY) {
            var rY;
            if (YY) {
              const YY = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), YY
            } {
              this.errorBackoff = 3e4;
              const YY = (null !== (rY = this.user.stsTokenManager.expirationTime) && void 0 !== rY ? rY : 0) - Date.now() - 3e5;
              return Math.max(0, YY)
            }
          }
          schedule() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const rY = this.getInterval(YY);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), rY)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (YY) {
              return void("auth/network-request-failed" === (null === YY || void 0 === YY ? void 0 : YY.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class LY {
          constructor(YY, rY) {
            this.createdAt = YY, this.lastLoginAt = rY, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = pY(this.lastLoginAt), this.creationTime = pY(this.createdAt)
          }
          _copy(YY) {
            this.createdAt = YY.createdAt, this.lastLoginAt = YY.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function tY(YY) {
          var rY;
          const DY = YY.auth,
            FY = await YY.getIdToken(),
            AY = await PY(YY, async function(YY, rY) {
              return JY(YY, "POST", "/v1/accounts:lookup", rY)
            }(DY, {
              idToken: FY
            }));
          NY(null === AY || void 0 === AY ? void 0 : AY.users.length, DY, "internal-error");
          const RY = AY.users[0];
          YY._notifyReloadListener(RY);
          const OY = (null === (rY = RY.providerUserInfo) || void 0 === rY ? void 0 : rY.length) ? RY.providerUserInfo.map((YY => {
            var {
              providerId: rY
            } = YY, DY = IY(YY, ["providerId"]);
            return {
              providerId: rY,
              uid: DY.rawId || "",
              displayName: DY.displayName || null,
              email: DY.email || null,
              phoneNumber: DY.phoneNumber || null,
              photoURL: DY.photoUrl || null
            }
          })) : [];
          const gY = (aY = YY.providerData, vY = OY, [...aY.filter((YY => !vY.some((rY => rY.providerId === YY.providerId)))), ...vY]);
          var aY, vY;
          const uY = YY.isAnonymous,
            sY = !(YY.email && RY.passwordHash) && !(null === gY || void 0 === gY ? void 0 : gY.length),
            iY = !!uY && sY,
            yY = {
              uid: RY.localId,
              displayName: RY.displayName || null,
              photoURL: RY.photoUrl || null,
              email: RY.email || null,
              emailVerified: RY.emailVerified || !1,
              phoneNumber: RY.phoneNumber || null,
              tenantId: RY.tenantId || null,
              providerData: gY,
              metadata: new LY(RY.createdAt, RY.lastLoginAt),
              isAnonymous: iY
            };
          Object.assign(YY, yY)
        }
        async function Yr(YY) {
          const rY = (0, FY.G)(YY);
          await tY(rY), await rY.auth._persistUserIfCurrent(rY), rY.auth._notifyListenersIfCurrent(rY)
        }
        class rr {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(YY) {
            NY(YY.idToken, "internal-error"), NY("undefined" !== typeof YY.idToken, "internal-error"), NY("undefined" !== typeof YY.refreshToken, "internal-error");
            const rY = "expiresIn" in YY && "undefined" !== typeof YY.expiresIn ? Number(YY.expiresIn) : function(YY) {
              const rY = nY(YY);
              return NY(rY, "internal-error"), NY("undefined" !== typeof rY.exp, "internal-error"), NY("undefined" !== typeof rY.iat, "internal-error"), Number(rY.exp) - Number(rY.iat)
            }(YY.idToken);
            this.updateTokensAndExpiration(YY.idToken, YY.refreshToken, rY)
          }
          async getToken(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return NY(!this.accessToken || this.refreshToken, YY, "user-token-expired"), rY || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(YY, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(YY, rY) {
            const {
              accessToken: DY,
              refreshToken: AY,
              expiresIn: IY
            } = await async function(YY, rY) {
              const DY = await MY(YY, {}, (async () => {
                const DY = (0, FY.db)({
                    grant_type: "refresh_token",
                    refresh_token: rY
                  }).slice(1),
                  {
                    tokenApiHost: AY,
                    apiKey: IY
                  } = YY.config,
                  RY = bY(YY, AY, "/v1/token", `key=${IY}`),
                  OY = await YY._getAdditionalHeaders();
                return OY["Content-Type"] = "application/x-www-form-urlencoded", fY.fetch()(RY, {
                  method: "POST",
                  headers: OY,
                  body: DY
                })
              }));
              return {
                accessToken: DY.access_token,
                expiresIn: DY.expires_in,
                refreshToken: DY.refresh_token
              }
            }(YY, rY);
            this.updateTokensAndExpiration(DY, AY, Number(IY))
          }
          updateTokensAndExpiration(YY, rY, DY) {
            this.refreshToken = rY || null, this.accessToken = YY || null, this.expirationTime = Date.now() + 1e3 * DY
          }
          static fromJSON(YY, rY) {
            const {
              refreshToken: DY,
              accessToken: FY,
              expirationTime: AY
            } = rY, IY = new rr;
            return DY && (NY("string" === typeof DY, "internal-error", {
              appName: YY
            }), IY.refreshToken = DY), FY && (NY("string" === typeof FY, "internal-error", {
              appName: YY
            }), IY.accessToken = FY), AY && (NY("number" === typeof AY, "internal-error", {
              appName: YY
            }), IY.expirationTime = AY), IY
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(YY) {
            this.accessToken = YY.accessToken, this.refreshToken = YY.refreshToken, this.expirationTime = YY.expirationTime
          }
          _clone() {
            return Object.assign(new rr, this.toJSON())
          }
          _performRefresh() {
            return BY("not implemented")
          }
        }

        function Dr(YY, rY) {
          NY("string" === typeof YY || "undefined" === typeof YY, "internal-error", {
            appName: rY
          })
        }
        class Fr {
          constructor(YY) {
            var {
              uid: rY,
              auth: DY,
              stsTokenManager: FY
            } = YY, AY = IY(YY, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new UY(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = rY, this.auth = DY, this.stsTokenManager = FY, this.accessToken = FY.accessToken, this.displayName = AY.displayName || null, this.email = AY.email || null, this.emailVerified = AY.emailVerified || !1, this.phoneNumber = AY.phoneNumber || null, this.photoURL = AY.photoURL || null, this.isAnonymous = AY.isAnonymous || !1, this.tenantId = AY.tenantId || null, this.providerData = AY.providerData ? [...AY.providerData] : [], this.metadata = new LY(AY.createdAt || void 0, AY.lastLoginAt || void 0)
          }
          async getIdToken(YY) {
            const rY = await PY(this, this.stsTokenManager.getToken(this.auth, YY));
            return NY(rY, this.auth, "internal-error"), this.accessToken !== rY && (this.accessToken = rY, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), rY
          }
          getIdTokenResult(YY) {
            return GY(this, YY)
          }
          reload() {
            return Yr(this)
          }
          _assign(YY) {
            this !== YY && (NY(this.uid === YY.uid, this.auth, "internal-error"), this.displayName = YY.displayName, this.photoURL = YY.photoURL, this.email = YY.email, this.emailVerified = YY.emailVerified, this.phoneNumber = YY.phoneNumber, this.isAnonymous = YY.isAnonymous, this.tenantId = YY.tenantId, this.providerData = YY.providerData.map((YY => Object.assign({}, YY))), this.metadata._copy(YY.metadata), this.stsTokenManager._assign(YY.stsTokenManager))
          }
          _clone(YY) {
            const rY = new Fr(Object.assign(Object.assign({}, this), {
              auth: YY,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return rY.metadata._copy(this.metadata), rY
          }
          _onReload(YY) {
            NY(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = YY, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(YY) {
            this.reloadListener ? this.reloadListener(YY) : this.reloadUserInfo = YY
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              DY = !1;
            YY.idToken && YY.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(YY), DY = !0), rY && await tY(this), await this.auth._persistUserIfCurrent(this), DY && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const YY = await this.getIdToken();
            return await PY(this, async function(YY, rY) {
              return JY(YY, "POST", "/v1/accounts:delete", rY)
            }(this.auth, {
              idToken: YY
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
              providerData: this.providerData.map((YY => Object.assign({}, YY))),
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
          static _fromJSON(YY, rY) {
            var DY, FY, AY, IY, RY, OY, gY, aY;
            const vY = null !== (DY = rY.displayName) && void 0 !== DY ? DY : void 0,
              uY = null !== (FY = rY.email) && void 0 !== FY ? FY : void 0,
              sY = null !== (AY = rY.phoneNumber) && void 0 !== AY ? AY : void 0,
              iY = null !== (IY = rY.photoURL) && void 0 !== IY ? IY : void 0,
              yY = null !== (RY = rY.tenantId) && void 0 !== RY ? RY : void 0,
              QY = null !== (OY = rY._redirectEventId) && void 0 !== OY ? OY : void 0,
              oY = null !== (gY = rY.createdAt) && void 0 !== gY ? gY : void 0,
              WY = null !== (aY = rY.lastLoginAt) && void 0 !== aY ? aY : void 0,
              {
                uid: EY,
                emailVerified: mY,
                isAnonymous: VY,
                providerData: SY,
                stsTokenManager: lY
              } = rY;
            NY(EY && lY, YY, "internal-error");
            const TY = rr.fromJSON(this.name, lY);
            NY("string" === typeof EY, YY, "internal-error"), Dr(vY, YY.name), Dr(uY, YY.name), NY("boolean" === typeof mY, YY, "internal-error"), NY("boolean" === typeof VY, YY, "internal-error"), Dr(sY, YY.name), Dr(iY, YY.name), Dr(yY, YY.name), Dr(QY, YY.name), Dr(oY, YY.name), Dr(WY, YY.name);
            const eY = new Fr({
              uid: EY,
              auth: YY,
              email: uY,
              emailVerified: mY,
              displayName: vY,
              isAnonymous: VY,
              photoURL: iY,
              phoneNumber: sY,
              tenantId: yY,
              stsTokenManager: TY,
              createdAt: oY,
              lastLoginAt: WY
            });
            return SY && Array.isArray(SY) && (eY.providerData = SY.map((YY => Object.assign({}, YY)))), QY && (eY._redirectEventId = QY), eY
          }
          static async _fromIdTokenResponse(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const FY = new rr;
            FY.updateFromServerResponse(rY);
            const AY = new Fr({
              uid: rY.localId,
              auth: YY,
              stsTokenManager: FY,
              isAnonymous: DY
            });
            return await tY(AY), AY
          }
        }
        const Ar = new Map;

        function Ir(YY) {
          cY(YY instanceof Function, "Expected a class definition");
          let rY = Ar.get(YY);
          return rY ? (cY(rY instanceof YY, "Instance stored in cache mismatched with class"), rY) : (rY = new YY, Ar.set(YY, rY), rY)
        }
        class Rr {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(YY, rY) {
            this.storage[YY] = rY
          }
          async _get(YY) {
            const rY = this.storage[YY];
            return void 0 === rY ? null : rY
          }
          async _remove(YY) {
            delete this.storage[YY]
          }
          _addListener(YY, rY) {}
          _removeListener(YY, rY) {}
        }
        Rr.type = "NONE";
        const Or = Rr;

        function gr(YY, rY, DY) {
          return `firebase:${YY}:${rY}:${DY}`
        }
        class ar {
          constructor(YY, rY, DY) {
            this.persistence = YY, this.auth = rY, this.userKey = DY;
            const {
              config: FY,
              name: AY
            } = this.auth;
            this.fullUserKey = gr(this.userKey, FY.apiKey, AY), this.fullPersistenceKey = gr("persistence", FY.apiKey, AY), this.boundEventHandler = rY._onStorageEvent.bind(rY), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(YY) {
            return this.persistence._set(this.fullUserKey, YY.toJSON())
          }
          async getCurrentUser() {
            const YY = await this.persistence._get(this.fullUserKey);
            return YY ? Fr._fromJSON(this.auth, YY) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(YY) {
            if (this.persistence === YY) return;
            const rY = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = YY, rY ? this.setCurrentUser(rY) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!rY.length) return new ar(Ir(Or), YY, DY);
            const FY = (await Promise.all(rY.map((async YY => {
              if (await YY._isAvailable()) return YY
            })))).filter((YY => YY));
            let AY = FY[0] || Ir(Or);
            const IY = gr(DY, YY.config.apiKey, YY.name);
            let RY = null;
            for (const aY of rY) try {
              const rY = await aY._get(IY);
              if (rY) {
                const DY = Fr._fromJSON(YY, rY);
                aY !== AY && (RY = DY), AY = aY;
                break
              }
            } catch (gY) {}
            const OY = FY.filter((YY => YY._shouldAllowMigration));
            return AY._shouldAllowMigration && OY.length ? (AY = OY[0], RY && await AY._set(IY, RY.toJSON()), await Promise.all(rY.map((async YY => {
              if (YY !== AY) try {
                await YY._remove(IY)
              } catch (gY) {}
            }))), new ar(AY, YY, DY)) : new ar(AY, YY, DY)
          }
        }

        function vr(YY) {
          const rY = YY.toLowerCase();
          if (rY.includes("opera/") || rY.includes("opr/") || rY.includes("opios/")) return "Opera";
          if (yr(rY)) return "IEMobile";
          if (rY.includes("msie") || rY.includes("trident/")) return "IE";
          if (rY.includes("edge/")) return "Edge";
          if (ur(rY)) return "Firefox";
          if (rY.includes("silk/")) return "Silk";
          if (or(rY)) return "Blackberry";
          if (Wr(rY)) return "Webos";
          if (sr(rY)) return "Safari";
          if ((rY.includes("chrome/") || ir(rY)) && !rY.includes("edge/")) return "Chrome";
          if (Qr(rY)) return "Android";
          {
            const rY = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              DY = YY.match(rY);
            if (2 === (null === DY || void 0 === DY ? void 0 : DY.length)) return DY[1]
          }
          return "Other"
        }

        function ur() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)();
          return /firefox\//i.test(YY)
        }

        function sr() {
          const YY = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)()).toLowerCase();
          return YY.includes("safari/") && !YY.includes("chrome/") && !YY.includes("crios/") && !YY.includes("android")
        }

        function ir() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)();
          return /crios\//i.test(YY)
        }

        function yr() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)();
          return /iemobile/i.test(YY)
        }

        function Qr() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)();
          return /android/i.test(YY)
        }

        function or() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)();
          return /blackberry/i.test(YY)
        }

        function Wr() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)();
          return /webos/i.test(YY)
        }

        function Er() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)();
          return /iphone|ipad|ipod/i.test(YY) || /macintosh/i.test(YY) && /mobile/i.test(YY)
        }

        function mr() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)();
          return Er(YY) || Qr(YY) || Wr(YY) || or(YY) || /windows phone/i.test(YY) || yr(YY)
        }

        function Vr(YY) {
          let rY, DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (YY) {
            case "Browser":
              rY = vr((0, FY.I)());
              break;
            case "Worker":
              rY = `${vr((0,FY.I)())}-${YY}`;
              break;
            default:
              rY = YY
          }
          const IY = DY.length ? DY.join(",") : "FirebaseCore-web";
          return `${rY}/JsCore/${AY.i}/${IY}`
        }
        async function Sr(YY, rY) {
          return JY(YY, "GET", "/v2/recaptchaConfig", dY(YY, rY))
        }

        function lr(YY) {
          return void 0 !== YY && void 0 !== YY.getResponse
        }

        function Tr(YY) {
          return void 0 !== YY && void 0 !== YY.enterprise
        }
        class er {
          constructor(YY) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === YY.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = YY.recaptchaKey.split("/")[3], this.emailPasswordEnabled = YY.recaptchaEnforcementState.some((YY => "EMAIL_PASSWORD_PROVIDER" === YY.provider && "OFF" !== YY.enforcementState))
          }
        }

        function Nr(YY) {
          return new Promise(((rY, DY) => {
            const FY = document.createElement("script");
            FY.setAttribute("src", YY), FY.onload = rY, FY.onerror = YY => {
                const rY = SY("internal-error");
                rY.customData = YY, DY(rY)
              }, FY.type = "text/javascript", FY.charset = "UTF-8",
              function() {
                var YY, rY;
                return null !== (rY = null === (YY = document.getElementsByTagName("head")) || void 0 === YY ? void 0 : YY[0]) && void 0 !== rY ? rY : document
              }().appendChild(FY)
          }))
        }

        function Br(YY) {
          return `__${YY}${Math.floor(1e6*Math.random())}`
        }
        class cr {
          constructor(YY) {
            this.type = "recaptcha-enterprise", this.auth = Zr(YY)
          }
          async verify() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function DY(rY, DY, FY) {
              const AY = window.grecaptcha;
              Tr(AY) ? AY.enterprise.ready((() => {
                AY.enterprise.execute(rY, {
                  action: YY
                }).then((YY => {
                  DY(YY)
                })).catch((() => {
                  DY("NO_RECAPTCHA")
                }))
              })) : FY(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((YY, FY) => {
              (async function(YY) {
                if (!rY) {
                  if (null == YY.tenantId && null != YY._agentRecaptchaConfig) return YY._agentRecaptchaConfig.siteKey;
                  if (null != YY.tenantId && void 0 !== YY._tenantRecaptchaConfigs[YY.tenantId]) return YY._tenantRecaptchaConfigs[YY.tenantId].siteKey
                }
                return new Promise((async (rY, DY) => {
                  Sr(YY, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((FY => {
                    if (void 0 !== FY.recaptchaKey) {
                      const DY = new er(FY);
                      return null == YY.tenantId ? YY._agentRecaptchaConfig = DY : YY._tenantRecaptchaConfigs[YY.tenantId] = DY, rY(DY.siteKey)
                    }
                    DY(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((YY => {
                    DY(YY)
                  }))
                }))
              })(this.auth).then((AY => {
                if (!rY && Tr(window.grecaptcha)) DY(AY, YY, FY);
                else {
                  if ("undefined" === typeof window) return void FY(new Error("RecaptchaVerifier is only supported in browser"));
                  Nr("https://www.google.com/recaptcha/enterprise.js?render=" + AY).then((() => {
                    DY(AY, YY, FY)
                  })).catch((YY => {
                    FY(YY)
                  }))
                }
              })).catch((YY => {
                FY(YY)
              }))
            }))
          }
        }
        async function Kr(YY, rY, DY) {
          let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const AY = new cr(YY);
          let IY;
          try {
            IY = await AY.verify(DY)
          } catch (OY) {
            IY = await AY.verify(DY, !0)
          }
          const RY = Object.assign({}, rY);
          return FY ? Object.assign(RY, {
            captchaResp: IY
          }) : Object.assign(RY, {
            captchaResponse: IY
          }), Object.assign(RY, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(RY, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), RY
        }
        class Hr {
          constructor(YY) {
            this.auth = YY, this.queue = []
          }
          pushCallback(YY, rY) {
            const DY = rY => new Promise(((DY, FY) => {
              try {
                DY(YY(rY))
              } catch (AY) {
                FY(AY)
              }
            }));
            DY.onAbort = rY, this.queue.push(DY);
            const FY = this.queue.length - 1;
            return () => {
              this.queue[FY] = () => Promise.resolve()
            }
          }
          async runMiddleware(YY) {
            if (this.auth.currentUser === YY) return;
            const rY = [];
            try {
              for (const DY of this.queue) await DY(YY), DY.onAbort && rY.push(DY.onAbort)
            } catch (DY) {
              rY.reverse();
              for (const YY of rY) try {
                YY()
              } catch (FY) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === DY || void 0 === DY ? void 0 : DY.message
              })
            }
          }
        }
        class zr {
          constructor(YY, rY, DY, FY) {
            this.app = YY, this.heartbeatServiceProvider = rY, this.appCheckServiceProvider = DY, this.config = FY, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Cr(this), this.idTokenSubscription = new Cr(this), this.beforeStateQueue = new Hr(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = oY, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = YY.name, this.clientVersion = FY.sdkClientVersion
          }
          _initializeWithPersistence(YY, rY) {
            return rY && (this._popupRedirectResolver = Ir(rY)), this._initializationPromise = this.queue((async () => {
              var DY, FY;
              if (!this._deleted && (this.persistenceManager = await ar.create(this, YY), !this._deleted)) {
                if (null === (DY = this._popupRedirectResolver) || void 0 === DY ? void 0 : DY._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (AY) {}
                await this.initializeCurrentUser(rY), this.lastNotifiedUid = (null === (FY = this.currentUser) || void 0 === FY ? void 0 : FY.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const YY = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || YY ? this.currentUser && YY && this.currentUser.uid === YY.uid ? (this._currentUser._assign(YY), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(YY, !0) : void 0
          }
          async initializeCurrentUser(YY) {
            var rY;
            const DY = await this.assertedPersistence.getCurrentUser();
            let FY = DY,
              AY = !1;
            if (YY && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const DY = null === (rY = this.redirectUser) || void 0 === rY ? void 0 : rY._redirectEventId,
                IY = null === FY || void 0 === FY ? void 0 : FY._redirectEventId,
                RY = await this.tryRedirectSignIn(YY);
              DY && DY !== IY || !(null === RY || void 0 === RY ? void 0 : RY.user) || (FY = RY.user, AY = !0)
            }
            if (!FY) return this.directlySetCurrentUser(null);
            if (!FY._redirectEventId) {
              if (AY) try {
                await this.beforeStateQueue.runMiddleware(FY)
              } catch (IY) {
                FY = DY, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(IY)))
              }
              return FY ? this.reloadAndSetCurrentUserOrClear(FY) : this.directlySetCurrentUser(null)
            }
            return NY(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === FY._redirectEventId ? this.directlySetCurrentUser(FY) : this.reloadAndSetCurrentUserOrClear(FY)
          }
          async tryRedirectSignIn(YY) {
            let rY = null;
            try {
              rY = await this._popupRedirectResolver._completeRedirectFn(this, YY, !0)
            } catch (DY) {
              await this._setRedirectUser(null)
            }
            return rY
          }
          async reloadAndSetCurrentUserOrClear(YY) {
            try {
              await tY(YY)
            } catch (rY) {
              if ("auth/network-request-failed" !== (null === rY || void 0 === rY ? void 0 : rY.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(YY)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const YY = navigator;
              return YY.languages && YY.languages[0] || YY.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(YY) {
            const rY = YY ? (0, FY.G)(YY) : null;
            return rY && NY(rY.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(rY && rY._clone(this))
          }
          async _updateCurrentUser(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return YY && NY(this.tenantId === YY.tenantId, this, "tenant-id-mismatch"), rY || await this.beforeStateQueue.runMiddleware(YY), this.queue((async () => {
              await this.directlySetCurrentUser(YY), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(YY) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Ir(YY))
            }))
          }
          async initializeRecaptchaConfig() {
            const YY = await Sr(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              rY = new er(YY);
            if (null == this.tenantId ? this._agentRecaptchaConfig = rY : this._tenantRecaptchaConfigs[this.tenantId] = rY, rY.emailPasswordEnabled) {
              new cr(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(YY) {
            this._errorFactory = new FY.f("auth", "Firebase", YY())
          }
          onAuthStateChanged(YY, rY, DY) {
            return this.registerStateListener(this.authStateSubscription, YY, rY, DY)
          }
          beforeAuthStateChanged(YY, rY) {
            return this.beforeStateQueue.pushCallback(YY, rY)
          }
          onIdTokenChanged(YY, rY, DY) {
            return this.registerStateListener(this.idTokenSubscription, YY, rY, DY)
          }
          toJSON() {
            var YY;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (YY = this._currentUser) || void 0 === YY ? void 0 : YY.toJSON()
            }
          }
          async _setRedirectUser(YY, rY) {
            const DY = await this.getOrInitRedirectPersistenceManager(rY);
            return null === YY ? DY.removeCurrentUser() : DY.setCurrentUser(YY)
          }
          async getOrInitRedirectPersistenceManager(YY) {
            if (!this.redirectPersistenceManager) {
              const rY = YY && Ir(YY) || this._popupRedirectResolver;
              NY(rY, this, "argument-error"), this.redirectPersistenceManager = await ar.create(this, [Ir(rY._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(YY) {
            var rY, DY;
            return this._isInitialized && await this.queue((async () => {})), (null === (rY = this._currentUser) || void 0 === rY ? void 0 : rY._redirectEventId) === YY ? this._currentUser : (null === (DY = this.redirectUser) || void 0 === DY ? void 0 : DY._redirectEventId) === YY ? this.redirectUser : null
          }
          async _persistUserIfCurrent(YY) {
            if (YY === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(YY)))
          }
          _notifyListenersIfCurrent(YY) {
            YY === this.currentUser && this.notifyAuthListeners()
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
            var YY, rY;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const DY = null !== (rY = null === (YY = this.currentUser) || void 0 === YY ? void 0 : YY.uid) && void 0 !== rY ? rY : null;
            this.lastNotifiedUid !== DY && (this.lastNotifiedUid = DY, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(YY, rY, DY, FY) {
            if (this._deleted) return () => {};
            const AY = "function" === typeof rY ? rY : rY.next.bind(rY),
              IY = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return NY(IY, this, "internal-error"), IY.then((() => AY(this.currentUser))), "function" === typeof rY ? YY.addObserver(rY, DY, FY) : YY.addObserver(rY)
          }
          async directlySetCurrentUser(YY) {
            this.currentUser && this.currentUser !== YY && this._currentUser._stopProactiveRefresh(), YY && this.isProactiveRefreshEnabled && YY._startProactiveRefresh(), this.currentUser = YY, YY ? await this.assertedPersistence.setCurrentUser(YY) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(YY) {
            return this.operations = this.operations.then(YY, YY), this.operations
          }
          get assertedPersistence() {
            return NY(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(YY) {
            YY && !this.frameworks.includes(YY) && (this.frameworks.push(YY), this.frameworks.sort(), this.clientVersion = Vr(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var YY;
            const rY = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (rY["X-Firebase-gmpid"] = this.app.options.appId);
            const DY = await (null === (YY = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === YY ? void 0 : YY.getHeartbeatsHeader());
            DY && (rY["X-Firebase-Client"] = DY);
            const FY = await this._getAppCheckToken();
            return FY && (rY["X-Firebase-AppCheck"] = FY), rY
          }
          async _getAppCheckToken() {
            var YY;
            const rY = await (null === (YY = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === YY ? void 0 : YY.getToken());
            return (null === rY || void 0 === rY ? void 0 : rY.error) && function(YY) {
              if (EY.logLevel <= RY.e.WARN) {
                for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
                EY.warn(`Auth (${AY.i}): ${YY}`, ...DY)
              }
            }(`Error while retrieving App Check token: ${rY.error}`), null === rY || void 0 === rY ? void 0 : rY.token
          }
        }

        function Zr(YY) {
          return (0, FY.G)(YY)
        }
        class Cr {
          constructor(YY) {
            this.auth = YY, this.observer = null, this.addObserver = (0, FY.r)((YY => this.observer = YY))
          }
          get next() {
            return NY(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function fr(YY, rY) {
          const DY = (0, AY.s)(YY, "auth");
          if (DY.isInitialized()) {
            const YY = DY.getImmediate(),
              AY = DY.getOptions();
            if ((0, FY.u)(AY, null !== rY && void 0 !== rY ? rY : {})) return YY;
            VY(YY, "already-initialized")
          }
          return DY.initialize({
            options: rY
          })
        }

        function jr(YY, rY, DY) {
          const FY = Zr(YY);
          NY(FY._canInitEmulator, FY, "emulator-config-failed"), NY(/^https?:\/\//.test(rY), FY, "invalid-emulator-scheme");
          const AY = !!(null === DY || void 0 === DY ? void 0 : DY.disableWarnings),
            IY = hr(rY),
            {
              host: RY,
              port: OY
            } = function(YY) {
              const rY = hr(YY),
                DY = /(\/\/)?([^?#/]+)/.exec(YY.substr(rY.length));
              if (!DY) return {
                host: "",
                port: null
              };
              const FY = DY[2].split("@").pop() || "",
                AY = /^(\[[^\]]+\])(:|$)/.exec(FY);
              if (AY) {
                const YY = AY[1];
                return {
                  host: YY,
                  port: dr(FY.substr(YY.length + 1))
                }
              } {
                const [YY, rY] = FY.split(":");
                return {
                  host: YY,
                  port: dr(rY)
                }
              }
            }(rY),
            gY = null === OY ? "" : `:${OY}`;
          FY.config.emulator = {
            url: `${IY}//${RY}${gY}/`
          }, FY.settings.appVerificationDisabledForTesting = !0, FY.emulatorConfig = Object.freeze({
            host: RY,
            port: OY,
            protocol: IY.replace(":", ""),
            options: Object.freeze({
              disableWarnings: AY
            })
          }), AY || function() {
            function YY() {
              const YY = document.createElement("p"),
                rY = YY.style;
              YY.innerText = "Running in emulator mode. Do not use with production credentials.", rY.position = "fixed", rY.width = "100%", rY.backgroundColor = "#ffffff", rY.border = ".1em solid #000000", rY.color = "#b50000", rY.bottom = "0px", rY.left = "0px", rY.margin = "0px", rY.zIndex = "10000", rY.textAlign = "center", YY.classList.add("firebase-emulator-warning"), document.body.appendChild(YY)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", YY) : YY())
          }()
        }

        function hr(YY) {
          const rY = YY.indexOf(":");
          return rY < 0 ? "" : YY.substr(0, rY + 1)
        }

        function dr(YY) {
          if (!YY) return null;
          const rY = Number(YY);
          return isNaN(rY) ? null : rY
        }
        class Jr {
          constructor(YY, rY) {
            this.providerId = YY, this.signInMethod = rY
          }
          toJSON() {
            return BY("not implemented")
          }
          _getIdTokenResponse(YY) {
            return BY("not implemented")
          }
          _linkToIdToken(YY, rY) {
            return BY("not implemented")
          }
          _getReauthenticationResolver(YY) {
            return BY("not implemented")
          }
        }
        async function Mr(YY, rY) {
          return JY(YY, "POST", "/v1/accounts:resetPassword", dY(YY, rY))
        }
        async function wr(YY, rY) {
          return JY(YY, "POST", "/v1/accounts:update", rY)
        }
        async function br(YY, rY) {
          return wY(YY, "POST", "/v1/accounts:signInWithPassword", dY(YY, rY))
        }
        async function Xr(YY, rY) {
          return JY(YY, "POST", "/v1/accounts:sendOobCode", dY(YY, rY))
        }
        async function qr(YY, rY) {
          return Xr(YY, rY)
        }
        async function pr(YY, rY) {
          return Xr(YY, rY)
        }
        class kr extends Jr {
          constructor(YY, rY, DY) {
            let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", DY), this._email = YY, this._password = rY, this._tenantId = FY
          }
          static _fromEmailAndPassword(YY, rY) {
            return new kr(YY, rY, "password")
          }
          static _fromEmailAndCode(YY, rY) {
            return new kr(YY, rY, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(YY) {
            const rY = "string" === typeof YY ? JSON.parse(YY) : YY;
            if ((null === rY || void 0 === rY ? void 0 : rY.email) && (null === rY || void 0 === rY ? void 0 : rY.password)) {
              if ("password" === rY.signInMethod) return this._fromEmailAndPassword(rY.email, rY.password);
              if ("emailLink" === rY.signInMethod) return this._fromEmailAndCode(rY.email, rY.password, rY.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(YY) {
            var rY;
            switch (this.signInMethod) {
              case "password":
                const DY = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (rY = YY._getRecaptchaConfig()) || void 0 === rY ? void 0 : rY.emailPasswordEnabled) {
                  const rY = await Kr(YY, DY, "signInWithPassword");
                  return br(YY, rY)
                }
                return br(YY, DY).catch((async rY => {
                  if ("auth/missing-recaptcha-token" === rY.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const rY = await Kr(YY, DY, "signInWithPassword");
                    return br(YY, rY)
                  }
                  return Promise.reject(rY)
                }));
              case "emailLink":
                return async function(YY, rY) {
                  return wY(YY, "POST", "/v1/accounts:signInWithEmailLink", dY(YY, rY))
                }(YY, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                VY(YY, "internal-error")
            }
          }
          async _linkToIdToken(YY, rY) {
            switch (this.signInMethod) {
              case "password":
                return wr(YY, {
                  idToken: rY,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(YY, rY) {
                  return wY(YY, "POST", "/v1/accounts:signInWithEmailLink", dY(YY, rY))
                }(YY, {
                  idToken: rY,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                VY(YY, "internal-error")
            }
          }
          _getReauthenticationResolver(YY) {
            return this._getIdTokenResponse(YY)
          }
        }
        async function Gr(YY, rY) {
          return wY(YY, "POST", "/v1/accounts:signInWithIdp", dY(YY, rY))
        }
        class xr extends Jr {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(YY) {
            const rY = new xr(YY.providerId, YY.signInMethod);
            return YY.idToken || YY.accessToken ? (YY.idToken && (rY.idToken = YY.idToken), YY.accessToken && (rY.accessToken = YY.accessToken), YY.nonce && !YY.pendingToken && (rY.nonce = YY.nonce), YY.pendingToken && (rY.pendingToken = YY.pendingToken)) : YY.oauthToken && YY.oauthTokenSecret ? (rY.accessToken = YY.oauthToken, rY.secret = YY.oauthTokenSecret) : VY("argument-error"), rY
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
          static fromJSON(YY) {
            const rY = "string" === typeof YY ? JSON.parse(YY) : YY,
              {
                providerId: DY,
                signInMethod: FY
              } = rY,
              AY = IY(rY, ["providerId", "signInMethod"]);
            if (!DY || !FY) return null;
            const RY = new xr(DY, FY);
            return RY.idToken = AY.idToken || void 0, RY.accessToken = AY.accessToken || void 0, RY.secret = AY.secret, RY.nonce = AY.nonce, RY.pendingToken = AY.pendingToken || null, RY
          }
          _getIdTokenResponse(YY) {
            return Gr(YY, this.buildRequest())
          }
          _linkToIdToken(YY, rY) {
            const DY = this.buildRequest();
            return DY.idToken = rY, Gr(YY, DY)
          }
          _getReauthenticationResolver(YY) {
            const rY = this.buildRequest();
            return rY.autoCreate = !1, Gr(YY, rY)
          }
          buildRequest() {
            const YY = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) YY.pendingToken = this.pendingToken;
            else {
              const rY = {};
              this.idToken && (rY.id_token = this.idToken), this.accessToken && (rY.access_token = this.accessToken), this.secret && (rY.oauth_token_secret = this.secret), rY.providerId = this.providerId, this.nonce && !this.pendingToken && (rY.nonce = this.nonce), YY.postBody = (0, FY.db)(rY)
            }
            return YY
          }
        }
        const nr = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Pr extends Jr {
          constructor(YY) {
            super("phone", "phone"), this.params = YY
          }
          static _fromVerification(YY, rY) {
            return new Pr({
              verificationId: YY,
              verificationCode: rY
            })
          }
          static _fromTokenResponse(YY, rY) {
            return new Pr({
              phoneNumber: YY,
              temporaryProof: rY
            })
          }
          _getIdTokenResponse(YY) {
            return async function(YY, rY) {
              return wY(YY, "POST", "/v1/accounts:signInWithPhoneNumber", dY(YY, rY))
            }(YY, this._makeVerificationRequest())
          }
          _linkToIdToken(YY, rY) {
            return async function(YY, rY) {
              const DY = await wY(YY, "POST", "/v1/accounts:signInWithPhoneNumber", dY(YY, rY));
              if (DY.temporaryProof) throw qY(YY, "account-exists-with-different-credential", DY);
              return DY
            }(YY, Object.assign({
              idToken: rY
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(YY) {
            return async function(YY, rY) {
              return wY(YY, "POST", "/v1/accounts:signInWithPhoneNumber", dY(YY, Object.assign(Object.assign({}, rY), {
                operation: "REAUTH"
              })), nr)
            }(YY, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: YY,
              phoneNumber: rY,
              verificationId: DY,
              verificationCode: FY
            } = this.params;
            return YY && rY ? {
              temporaryProof: YY,
              phoneNumber: rY
            } : {
              sessionInfo: DY,
              code: FY
            }
          }
          toJSON() {
            const YY = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (YY.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (YY.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (YY.verificationCode = this.params.verificationCode), this.params.verificationId && (YY.verificationId = this.params.verificationId), YY
          }
          static fromJSON(YY) {
            "string" === typeof YY && (YY = JSON.parse(YY));
            const {
              verificationId: rY,
              verificationCode: DY,
              phoneNumber: FY,
              temporaryProof: AY
            } = YY;
            return DY || rY || FY || AY ? new Pr({
              verificationId: rY,
              verificationCode: DY,
              phoneNumber: FY,
              temporaryProof: AY
            }) : null
          }
        }
        class Ur {
          constructor(YY) {
            var rY, DY, AY, IY, RY, OY;
            const gY = (0, FY.$)((0, FY.v)(YY)),
              aY = null !== (rY = gY.apiKey) && void 0 !== rY ? rY : null,
              vY = null !== (DY = gY.oobCode) && void 0 !== DY ? DY : null,
              uY = function(YY) {
                switch (YY) {
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
              }(null !== (AY = gY.mode) && void 0 !== AY ? AY : null);
            NY(aY && vY && uY, "argument-error"), this.apiKey = aY, this.operation = uY, this.code = vY, this.continueUrl = null !== (IY = gY.continueUrl) && void 0 !== IY ? IY : null, this.languageCode = null !== (RY = gY.languageCode) && void 0 !== RY ? RY : null, this.tenantId = null !== (OY = gY.tenantId) && void 0 !== OY ? OY : null
          }
          static parseLink(YY) {
            const rY = function(YY) {
              const rY = (0, FY.$)((0, FY.v)(YY)).link,
                DY = rY ? (0, FY.$)((0, FY.v)(rY)).deep_link_id : null,
                AY = (0, FY.$)((0, FY.v)(YY)).deep_link_id;
              return (AY ? (0, FY.$)((0, FY.v)(AY)).link : null) || AY || DY || rY || YY
            }(YY);
            try {
              return new Ur(rY)
            } catch (DY) {
              return null
            }
          }
        }

        function Lr(YY) {
          return Ur.parseLink(YY)
        }
        class tr {
          constructor() {
            this.providerId = tr.PROVIDER_ID
          }
          static credential(YY, rY) {
            return kr._fromEmailAndPassword(YY, rY)
          }
          static credentialWithLink(YY, rY) {
            const DY = Ur.parseLink(rY);
            return NY(DY, "argument-error"), kr._fromEmailAndCode(YY, DY.code, DY.tenantId)
          }
        }
        tr.PROVIDER_ID = "password", tr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", tr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class YD {
          constructor(YY) {
            this.providerId = YY, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(YY) {
            this.defaultLanguageCode = YY
          }
          setCustomParameters(YY) {
            return this.customParameters = YY, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class rD extends YD {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(YY) {
            return this.scopes.includes(YY) || this.scopes.push(YY), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class DD extends rD {
          static credentialFromJSON(YY) {
            const rY = "string" === typeof YY ? JSON.parse(YY) : YY;
            return NY("providerId" in rY && "signInMethod" in rY, "argument-error"), xr._fromParams(rY)
          }
          credential(YY) {
            return this._credential(Object.assign(Object.assign({}, YY), {
              nonce: YY.rawNonce
            }))
          }
          _credential(YY) {
            return NY(YY.idToken || YY.accessToken, "argument-error"), xr._fromParams(Object.assign(Object.assign({}, YY), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(YY) {
            return DD.oauthCredentialFromTaggedObject(YY)
          }
          static credentialFromError(YY) {
            return DD.oauthCredentialFromTaggedObject(YY.customData || {})
          }
          static oauthCredentialFromTaggedObject(YY) {
            let {
              _tokenResponse: rY
            } = YY;
            if (!rY) return null;
            const {
              oauthIdToken: DY,
              oauthAccessToken: FY,
              oauthTokenSecret: AY,
              pendingToken: IY,
              nonce: RY,
              providerId: OY
            } = rY;
            if (!FY && !AY && !DY && !IY) return null;
            if (!OY) return null;
            try {
              return new DD(OY)._credential({
                idToken: DY,
                accessToken: FY,
                nonce: RY,
                pendingToken: IY
              })
            } catch (gY) {
              return null
            }
          }
        }
        class FD extends rD {
          constructor() {
            super("facebook.com")
          }
          static credential(YY) {
            return xr._fromParams({
              providerId: FD.PROVIDER_ID,
              signInMethod: FD.FACEBOOK_SIGN_IN_METHOD,
              accessToken: YY
            })
          }
          static credentialFromResult(YY) {
            return FD.credentialFromTaggedObject(YY)
          }
          static credentialFromError(YY) {
            return FD.credentialFromTaggedObject(YY.customData || {})
          }
          static credentialFromTaggedObject(YY) {
            let {
              _tokenResponse: rY
            } = YY;
            if (!rY || !("oauthAccessToken" in rY)) return null;
            if (!rY.oauthAccessToken) return null;
            try {
              return FD.credential(rY.oauthAccessToken)
            } catch (DY) {
              return null
            }
          }
        }
        FD.FACEBOOK_SIGN_IN_METHOD = "facebook.com", FD.PROVIDER_ID = "facebook.com";
        class AD extends rD {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(YY, rY) {
            return xr._fromParams({
              providerId: AD.PROVIDER_ID,
              signInMethod: AD.GOOGLE_SIGN_IN_METHOD,
              idToken: YY,
              accessToken: rY
            })
          }
          static credentialFromResult(YY) {
            return AD.credentialFromTaggedObject(YY)
          }
          static credentialFromError(YY) {
            return AD.credentialFromTaggedObject(YY.customData || {})
          }
          static credentialFromTaggedObject(YY) {
            let {
              _tokenResponse: rY
            } = YY;
            if (!rY) return null;
            const {
              oauthIdToken: DY,
              oauthAccessToken: FY
            } = rY;
            if (!DY && !FY) return null;
            try {
              return AD.credential(DY, FY)
            } catch (AY) {
              return null
            }
          }
        }
        AD.GOOGLE_SIGN_IN_METHOD = "google.com", AD.PROVIDER_ID = "google.com";
        class ID extends rD {
          constructor() {
            super("github.com")
          }
          static credential(YY) {
            return xr._fromParams({
              providerId: ID.PROVIDER_ID,
              signInMethod: ID.GITHUB_SIGN_IN_METHOD,
              accessToken: YY
            })
          }
          static credentialFromResult(YY) {
            return ID.credentialFromTaggedObject(YY)
          }
          static credentialFromError(YY) {
            return ID.credentialFromTaggedObject(YY.customData || {})
          }
          static credentialFromTaggedObject(YY) {
            let {
              _tokenResponse: rY
            } = YY;
            if (!rY || !("oauthAccessToken" in rY)) return null;
            if (!rY.oauthAccessToken) return null;
            try {
              return ID.credential(rY.oauthAccessToken)
            } catch (DY) {
              return null
            }
          }
        }
        ID.GITHUB_SIGN_IN_METHOD = "github.com", ID.PROVIDER_ID = "github.com";
        class RD extends Jr {
          constructor(YY, rY) {
            super(YY, YY), this.pendingToken = rY
          }
          _getIdTokenResponse(YY) {
            return Gr(YY, this.buildRequest())
          }
          _linkToIdToken(YY, rY) {
            const DY = this.buildRequest();
            return DY.idToken = rY, Gr(YY, DY)
          }
          _getReauthenticationResolver(YY) {
            const rY = this.buildRequest();
            return rY.autoCreate = !1, Gr(YY, rY)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(YY) {
            const rY = "string" === typeof YY ? JSON.parse(YY) : YY,
              {
                providerId: DY,
                signInMethod: FY,
                pendingToken: AY
              } = rY;
            return DY && FY && AY && DY === FY ? new RD(DY, AY) : null
          }
          static _create(YY, rY) {
            return new RD(YY, rY)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class OD extends YD {
          constructor(YY) {
            NY(YY.startsWith("saml."), "argument-error"), super(YY)
          }
          static credentialFromResult(YY) {
            return OD.samlCredentialFromTaggedObject(YY)
          }
          static credentialFromError(YY) {
            return OD.samlCredentialFromTaggedObject(YY.customData || {})
          }
          static credentialFromJSON(YY) {
            const rY = RD.fromJSON(YY);
            return NY(rY, "argument-error"), rY
          }
          static samlCredentialFromTaggedObject(YY) {
            let {
              _tokenResponse: rY
            } = YY;
            if (!rY) return null;
            const {
              pendingToken: DY,
              providerId: FY
            } = rY;
            if (!DY || !FY) return null;
            try {
              return RD._create(FY, DY)
            } catch (AY) {
              return null
            }
          }
        }
        class gD extends rD {
          constructor() {
            super("twitter.com")
          }
          static credential(YY, rY) {
            return xr._fromParams({
              providerId: gD.PROVIDER_ID,
              signInMethod: gD.TWITTER_SIGN_IN_METHOD,
              oauthToken: YY,
              oauthTokenSecret: rY
            })
          }
          static credentialFromResult(YY) {
            return gD.credentialFromTaggedObject(YY)
          }
          static credentialFromError(YY) {
            return gD.credentialFromTaggedObject(YY.customData || {})
          }
          static credentialFromTaggedObject(YY) {
            let {
              _tokenResponse: rY
            } = YY;
            if (!rY) return null;
            const {
              oauthAccessToken: DY,
              oauthTokenSecret: FY
            } = rY;
            if (!DY || !FY) return null;
            try {
              return gD.credential(DY, FY)
            } catch (AY) {
              return null
            }
          }
        }
        async function aD(YY, rY) {
          return wY(YY, "POST", "/v1/accounts:signUp", dY(YY, rY))
        }
        gD.TWITTER_SIGN_IN_METHOD = "twitter.com", gD.PROVIDER_ID = "twitter.com";
        class vD {
          constructor(YY) {
            this.user = YY.user, this.providerId = YY.providerId, this._tokenResponse = YY._tokenResponse, this.operationType = YY.operationType
          }
          static async _fromIdTokenResponse(YY, rY, DY) {
            let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const AY = await Fr._fromIdTokenResponse(YY, DY, FY),
              IY = uD(DY);
            return new vD({
              user: AY,
              providerId: IY,
              _tokenResponse: DY,
              operationType: rY
            })
          }
          static async _forOperation(YY, rY, DY) {
            await YY._updateTokensIfNecessary(DY, !0);
            const FY = uD(DY);
            return new vD({
              user: YY,
              providerId: FY,
              _tokenResponse: DY,
              operationType: rY
            })
          }
        }

        function uD(YY) {
          return YY.providerId ? YY.providerId : "phoneNumber" in YY ? "phone" : null
        }
        async function sD(YY) {
          var rY;
          const DY = Zr(YY);
          if (await DY._initializationPromise, null === (rY = DY.currentUser) || void 0 === rY ? void 0 : rY.isAnonymous) return new vD({
            user: DY.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const FY = await aD(DY, {
              returnSecureToken: !0
            }),
            AY = await vD._fromIdTokenResponse(DY, "signIn", FY, !0);
          return await DY._updateCurrentUser(AY.user), AY
        }
        class iD extends FY.g {
          constructor(YY, rY, DY, FY) {
            var AY;
            super(rY.code, rY.message), this.operationType = DY, this.user = FY, Object.setPrototypeOf(this, iD.prototype), this.customData = {
              appName: YY.name,
              tenantId: null !== (AY = YY.tenantId) && void 0 !== AY ? AY : void 0,
              _serverResponse: rY.customData._serverResponse,
              operationType: DY
            }
          }
          static _fromErrorAndOperation(YY, rY, DY, FY) {
            return new iD(YY, rY, DY, FY)
          }
        }

        function yD(YY, rY, DY, FY) {
          return ("reauthenticate" === rY ? DY._getReauthenticationResolver(YY) : DY._getIdTokenResponse(YY)).catch((DY => {
            if ("auth/multi-factor-auth-required" === DY.code) throw iD._fromErrorAndOperation(YY, DY, rY, FY);
            throw DY
          }))
        }

        function QD(YY) {
          return new Set(YY.map((YY => {
            let {
              providerId: rY
            } = YY;
            return rY
          })).filter((YY => !!YY)))
        }
        async function oD(YY, rY) {
          const DY = (0, FY.G)(YY);
          await ED(!0, DY, rY);
          const {
            providerUserInfo: AY
          } = await async function(YY, rY) {
            return JY(YY, "POST", "/v1/accounts:update", rY)
          }(DY.auth, {
            idToken: await DY.getIdToken(),
            deleteProvider: [rY]
          }), IY = QD(AY || []);
          return DY.providerData = DY.providerData.filter((YY => IY.has(YY.providerId))), IY.has("phone") || (DY.phoneNumber = null), await DY.auth._persistUserIfCurrent(DY), DY
        }
        async function WD(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const FY = await PY(YY, rY._linkToIdToken(YY.auth, await YY.getIdToken()), DY);
          return vD._forOperation(YY, "link", FY)
        }
        async function ED(YY, rY, DY) {
          await tY(rY);
          const FY = !1 === YY ? "provider-already-linked" : "no-such-provider";
          NY(QD(rY.providerData).has(DY) === YY, rY.auth, FY)
        }
        async function mD(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: FY
          } = YY, AY = "reauthenticate";
          try {
            const IY = await PY(YY, yD(FY, AY, rY, YY), DY);
            NY(IY.idToken, FY, "internal-error");
            const RY = nY(IY.idToken);
            NY(RY, FY, "internal-error");
            const {
              sub: OY
            } = RY;
            return NY(YY.uid === OY, FY, "user-mismatch"), vD._forOperation(YY, AY, IY)
          } catch (IY) {
            throw "auth/user-not-found" === (null === IY || void 0 === IY ? void 0 : IY.code) && VY(FY, "user-mismatch"), IY
          }
        }
        async function VD(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const FY = "signIn",
            AY = await yD(YY, FY, rY),
            IY = await vD._fromIdTokenResponse(YY, FY, AY);
          return DY || await YY._updateCurrentUser(IY.user), IY
        }
        async function SD(YY, rY) {
          return VD(Zr(YY), rY)
        }
        async function lD(YY, rY) {
          const DY = (0, FY.G)(YY);
          return await ED(!1, DY, rY.providerId), WD(DY, rY)
        }
        async function TD(YY, rY) {
          return mD((0, FY.G)(YY), rY)
        }
        async function eD(YY, rY) {
          const DY = Zr(YY),
            FY = await async function(YY, rY) {
              return wY(YY, "POST", "/v1/accounts:signInWithCustomToken", dY(YY, rY))
            }(DY, {
              token: rY,
              returnSecureToken: !0
            }), AY = await vD._fromIdTokenResponse(DY, "signIn", FY);
          return await DY._updateCurrentUser(AY.user), AY
        }
        class ND {
          constructor(YY, rY) {
            this.factorId = YY, this.uid = rY.mfaEnrollmentId, this.enrollmentTime = new Date(rY.enrolledAt).toUTCString(), this.displayName = rY.displayName
          }
          static _fromServerResponse(YY, rY) {
            return "phoneInfo" in rY ? BD._fromServerResponse(YY, rY) : "totpInfo" in rY ? cD._fromServerResponse(YY, rY) : VY(YY, "internal-error")
          }
        }
        class BD extends ND {
          constructor(YY) {
            super("phone", YY), this.phoneNumber = YY.phoneInfo
          }
          static _fromServerResponse(YY, rY) {
            return new BD(rY)
          }
        }
        class cD extends ND {
          constructor(YY) {
            super("totp", YY)
          }
          static _fromServerResponse(YY, rY) {
            return new cD(rY)
          }
        }

        function KD(YY, rY, DY) {
          var FY;
          NY((null === (FY = DY.url) || void 0 === FY ? void 0 : FY.length) > 0, YY, "invalid-continue-uri"), NY("undefined" === typeof DY.dynamicLinkDomain || DY.dynamicLinkDomain.length > 0, YY, "invalid-dynamic-link-domain"), rY.continueUrl = DY.url, rY.dynamicLinkDomain = DY.dynamicLinkDomain, rY.canHandleCodeInApp = DY.handleCodeInApp, DY.iOS && (NY(DY.iOS.bundleId.length > 0, YY, "missing-ios-bundle-id"), rY.iOSBundleId = DY.iOS.bundleId), DY.android && (NY(DY.android.packageName.length > 0, YY, "missing-android-pkg-name"), rY.androidInstallApp = DY.android.installApp, rY.androidMinimumVersionCode = DY.android.minimumVersion, rY.androidPackageName = DY.android.packageName)
        }
        async function HD(YY, rY, DY) {
          var FY;
          const AY = Zr(YY),
            IY = {
              requestType: "PASSWORD_RESET",
              email: rY,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (FY = AY._getRecaptchaConfig()) || void 0 === FY ? void 0 : FY.emailPasswordEnabled) {
            const YY = await Kr(AY, IY, "getOobCode", !0);
            DY && KD(AY, YY, DY), await qr(AY, YY)
          } else DY && KD(AY, IY, DY), await qr(AY, IY).catch((async YY => {
            if ("auth/missing-recaptcha-token" !== YY.code) return Promise.reject(YY);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const YY = await Kr(AY, IY, "getOobCode", !0);
              DY && KD(AY, YY, DY), await qr(AY, YY)
            }
          }))
        }
        async function zD(YY, rY, DY) {
          await Mr((0, FY.G)(YY), {
            oobCode: rY,
            newPassword: DY
          })
        }
        async function ZD(YY, rY) {
          await async function(YY, rY) {
            return JY(YY, "POST", "/v1/accounts:update", dY(YY, rY))
          }((0, FY.G)(YY), {
            oobCode: rY
          })
        }
        async function CD(YY, rY) {
          const DY = (0, FY.G)(YY),
            AY = await Mr(DY, {
              oobCode: rY
            }),
            IY = AY.requestType;
          switch (NY(IY, DY, "internal-error"), IY) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              NY(AY.newEmail, DY, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              NY(AY.mfaInfo, DY, "internal-error");
            default:
              NY(AY.email, DY, "internal-error")
          }
          let RY = null;
          return AY.mfaInfo && (RY = ND._fromServerResponse(Zr(DY), AY.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === AY.requestType ? AY.newEmail : AY.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === AY.requestType ? AY.email : AY.newEmail) || null,
              multiFactorInfo: RY
            },
            operation: IY
          }
        }
        async function fD(YY, rY) {
          const {
            data: DY
          } = await CD((0, FY.G)(YY), rY);
          return DY.email
        }
        async function jD(YY, rY, DY) {
          var FY;
          const AY = Zr(YY),
            IY = {
              returnSecureToken: !0,
              email: rY,
              password: DY,
              clientType: "CLIENT_TYPE_WEB"
            };
          let RY;
          if (null === (FY = AY._getRecaptchaConfig()) || void 0 === FY ? void 0 : FY.emailPasswordEnabled) {
            const YY = await Kr(AY, IY, "signUpPassword");
            RY = aD(AY, YY)
          } else RY = aD(AY, IY).catch((async YY => {
            if ("auth/missing-recaptcha-token" === YY.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const YY = await Kr(AY, IY, "signUpPassword");
              return aD(AY, YY)
            }
            return Promise.reject(YY)
          }));
          const OY = await RY.catch((YY => Promise.reject(YY))),
            gY = await vD._fromIdTokenResponse(AY, "signIn", OY);
          return await AY._updateCurrentUser(gY.user), gY
        }

        function hD(YY, rY, DY) {
          return SD((0, FY.G)(YY), tr.credential(rY, DY))
        }
        async function dD(YY, rY, DY) {
          var FY;
          const AY = Zr(YY),
            IY = {
              requestType: "EMAIL_SIGNIN",
              email: rY,
              clientType: "CLIENT_TYPE_WEB"
            };

          function RY(YY, rY) {
            NY(rY.handleCodeInApp, AY, "argument-error"), rY && KD(AY, YY, rY)
          }
          if (null === (FY = AY._getRecaptchaConfig()) || void 0 === FY ? void 0 : FY.emailPasswordEnabled) {
            const YY = await Kr(AY, IY, "getOobCode", !0);
            RY(YY, DY), await pr(AY, YY)
          } else RY(IY, DY), await pr(AY, IY).catch((async YY => {
            if ("auth/missing-recaptcha-token" !== YY.code) return Promise.reject(YY);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const YY = await Kr(AY, IY, "getOobCode", !0);
              RY(YY, DY), await pr(AY, YY)
            }
          }))
        }

        function JD(YY, rY) {
          const DY = Ur.parseLink(rY);
          return "EMAIL_SIGNIN" === (null === DY || void 0 === DY ? void 0 : DY.operation)
        }
        async function MD(YY, rY, DY) {
          const AY = (0, FY.G)(YY),
            IY = tr.credentialWithLink(rY, DY || KY());
          return NY(IY._tenantId === (AY.tenantId || null), AY, "tenant-id-mismatch"), SD(AY, IY)
        }
        async function wD(YY, rY) {
          const DY = {
              identifier: rY,
              continueUri: HY() ? KY() : "http://localhost"
            },
            {
              signinMethods: AY
            } = await async function(YY, rY) {
              return JY(YY, "POST", "/v1/accounts:createAuthUri", dY(YY, rY))
            }((0, FY.G)(YY), DY);
          return AY || []
        }
        async function bD(YY, rY) {
          const DY = (0, FY.G)(YY),
            AY = {
              requestType: "VERIFY_EMAIL",
              idToken: await YY.getIdToken()
            };
          rY && KD(DY.auth, AY, rY);
          const {
            email: IY
          } = await async function(YY, rY) {
            return Xr(YY, rY)
          }(DY.auth, AY);
          IY !== YY.email && await YY.reload()
        }
        async function XD(YY, rY, DY) {
          const AY = (0, FY.G)(YY),
            IY = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await YY.getIdToken(),
              newEmail: rY
            };
          DY && KD(AY.auth, IY, DY);
          const {
            email: RY
          } = await async function(YY, rY) {
            return Xr(YY, rY)
          }(AY.auth, IY);
          RY !== YY.email && await YY.reload()
        }
        async function qD(YY, rY) {
          let {
            displayName: DY,
            photoURL: AY
          } = rY;
          if (void 0 === DY && void 0 === AY) return;
          const IY = (0, FY.G)(YY),
            RY = {
              idToken: await IY.getIdToken(),
              displayName: DY,
              photoUrl: AY,
              returnSecureToken: !0
            },
            OY = await PY(IY, async function(YY, rY) {
              return JY(YY, "POST", "/v1/accounts:update", rY)
            }(IY.auth, RY));
          IY.displayName = OY.displayName || null, IY.photoURL = OY.photoUrl || null;
          const gY = IY.providerData.find((YY => {
            let {
              providerId: rY
            } = YY;
            return "password" === rY
          }));
          gY && (gY.displayName = IY.displayName, gY.photoURL = IY.photoURL), await IY._updateTokensIfNecessary(OY)
        }

        function pD(YY, rY) {
          return GD((0, FY.G)(YY), rY, null)
        }

        function kD(YY, rY) {
          return GD((0, FY.G)(YY), null, rY)
        }
        async function GD(YY, rY, DY) {
          const {
            auth: FY
          } = YY, AY = {
            idToken: await YY.getIdToken(),
            returnSecureToken: !0
          };
          rY && (AY.email = rY), DY && (AY.password = DY);
          const IY = await PY(YY, wr(FY, AY));
          await YY._updateTokensIfNecessary(IY, !0)
        }
        class xD {
          constructor(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = YY, this.providerId = rY, this.profile = DY
          }
        }
        class nD extends xD {
          constructor(YY, rY, DY, FY) {
            super(YY, rY, DY), this.username = FY
          }
        }
        class PD extends xD {
          constructor(YY, rY) {
            super(YY, "facebook.com", rY)
          }
        }
        class UD extends nD {
          constructor(YY, rY) {
            super(YY, "github.com", rY, "string" === typeof(null === rY || void 0 === rY ? void 0 : rY.login) ? null === rY || void 0 === rY ? void 0 : rY.login : null)
          }
        }
        class LD extends xD {
          constructor(YY, rY) {
            super(YY, "google.com", rY)
          }
        }
        class tD extends nD {
          constructor(YY, rY, DY) {
            super(YY, "twitter.com", rY, DY)
          }
        }

        function YF(YY) {
          const {
            user: rY,
            _tokenResponse: DY
          } = YY;
          return rY.isAnonymous && !DY ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(YY) {
            var rY, DY;
            if (!YY) return null;
            const {
              providerId: FY
            } = YY, AY = YY.rawUserInfo ? JSON.parse(YY.rawUserInfo) : {}, IY = YY.isNewUser || "identitytoolkit#SignupNewUserResponse" === YY.kind;
            if (!FY && (null === YY || void 0 === YY ? void 0 : YY.idToken)) {
              const FY = null === (DY = null === (rY = nY(YY.idToken)) || void 0 === rY ? void 0 : rY.firebase) || void 0 === DY ? void 0 : DY.sign_in_provider;
              if (FY) return new xD(IY, "anonymous" !== FY && "custom" !== FY ? FY : null)
            }
            if (!FY) return null;
            switch (FY) {
              case "facebook.com":
                return new PD(IY, AY);
              case "github.com":
                return new UD(IY, AY);
              case "google.com":
                return new LD(IY, AY);
              case "twitter.com":
                return new tD(IY, AY, YY.screenName || null);
              case "custom":
              case "anonymous":
                return new xD(IY, null);
              default:
                return new xD(IY, FY, AY)
            }
          }(DY)
        }

        function rF(YY, rY) {
          return (0, FY.G)(YY).setPersistence(rY)
        }

        function DF(YY) {
          return Zr(YY).initializeRecaptchaConfig()
        }

        function FF(YY, rY, DY, AY) {
          return (0, FY.G)(YY).onIdTokenChanged(rY, DY, AY)
        }

        function AF(YY, rY, DY) {
          return (0, FY.G)(YY).beforeAuthStateChanged(rY, DY)
        }

        function IF(YY, rY, DY, AY) {
          return (0, FY.G)(YY).onAuthStateChanged(rY, DY, AY)
        }

        function RF(YY) {
          (0, FY.G)(YY).useDeviceLanguage()
        }

        function OF(YY, rY) {
          return (0, FY.G)(YY).updateCurrentUser(rY)
        }

        function gF(YY) {
          return (0, FY.G)(YY).signOut()
        }
        async function aF(YY) {
          return (0, FY.G)(YY).delete()
        }
        class vF {
          constructor(YY, rY, DY) {
            this.type = YY, this.credential = rY, this.auth = DY
          }
          static _fromIdtoken(YY, rY) {
            return new vF("enroll", YY, rY)
          }
          static _fromMfaPendingCredential(YY) {
            return new vF("signin", YY)
          }
          toJSON() {
            const YY = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [YY]: this.credential
              }
            }
          }
          static fromJSON(YY) {
            var rY, DY;
            if (null === YY || void 0 === YY ? void 0 : YY.multiFactorSession) {
              if (null === (rY = YY.multiFactorSession) || void 0 === rY ? void 0 : rY.pendingCredential) return vF._fromMfaPendingCredential(YY.multiFactorSession.pendingCredential);
              if (null === (DY = YY.multiFactorSession) || void 0 === DY ? void 0 : DY.idToken) return vF._fromIdtoken(YY.multiFactorSession.idToken)
            }
            return null
          }
        }
        class uF {
          constructor(YY, rY, DY) {
            this.session = YY, this.hints = rY, this.signInResolver = DY
          }
          static _fromError(YY, rY) {
            const DY = Zr(YY),
              FY = rY.customData._serverResponse,
              AY = (FY.mfaInfo || []).map((YY => ND._fromServerResponse(DY, YY)));
            NY(FY.mfaPendingCredential, DY, "internal-error");
            const IY = vF._fromMfaPendingCredential(FY.mfaPendingCredential);
            return new uF(IY, AY, (async YY => {
              const AY = await YY._process(DY, IY);
              delete FY.mfaInfo, delete FY.mfaPendingCredential;
              const RY = Object.assign(Object.assign({}, FY), {
                idToken: AY.idToken,
                refreshToken: AY.refreshToken
              });
              switch (rY.operationType) {
                case "signIn":
                  const YY = await vD._fromIdTokenResponse(DY, rY.operationType, RY);
                  return await DY._updateCurrentUser(YY.user), YY;
                case "reauthenticate":
                  return NY(rY.user, DY, "internal-error"), vD._forOperation(rY.user, rY.operationType, RY);
                default:
                  VY(DY, "internal-error")
              }
            }))
          }
          async resolveSignIn(YY) {
            const rY = YY;
            return this.signInResolver(rY)
          }
        }

        function sF(YY, rY) {
          var DY;
          const AY = (0, FY.G)(YY),
            IY = rY;
          return NY(rY.customData.operationType, AY, "argument-error"), NY(null === (DY = IY.customData._serverResponse) || void 0 === DY ? void 0 : DY.mfaPendingCredential, AY, "argument-error"), uF._fromError(AY, IY)
        }
        class iF {
          constructor(YY) {
            this.user = YY, this.enrolledFactors = [], YY._onReload((rY => {
              rY.mfaInfo && (this.enrolledFactors = rY.mfaInfo.map((rY => ND._fromServerResponse(YY.auth, rY))))
            }))
          }
          static _fromUser(YY) {
            return new iF(YY)
          }
          async getSession() {
            return vF._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(YY, rY) {
            const DY = YY,
              FY = await this.getSession(),
              AY = await PY(this.user, DY._process(this.user.auth, FY, rY));
            return await this.user._updateTokensIfNecessary(AY), this.user.reload()
          }
          async unenroll(YY) {
            const rY = "string" === typeof YY ? YY : YY.uid,
              DY = await this.user.getIdToken();
            try {
              const YY = await PY(this.user, (FY = this.user.auth, AY = {
                idToken: DY,
                mfaEnrollmentId: rY
              }, JY(FY, "POST", "/v2/accounts/mfaEnrollment:withdraw", dY(FY, AY))));
              this.enrolledFactors = this.enrolledFactors.filter((YY => {
                let {
                  uid: DY
                } = YY;
                return DY !== rY
              })), await this.user._updateTokensIfNecessary(YY), await this.user.reload()
            } catch (IY) {
              throw IY
            }
            var FY, AY
          }
        }
        const yF = new WeakMap;

        function QF(YY) {
          const rY = (0, FY.G)(YY);
          return yF.has(rY) || yF.set(rY, iF._fromUser(rY)), yF.get(rY)
        }
        const oF = "__sak";
        class WF {
          constructor(YY, rY) {
            this.storageRetriever = YY, this.type = rY
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(oF, "1"), this.storage.removeItem(oF), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (YY) {
              return Promise.resolve(!1)
            }
          }
          _set(YY, rY) {
            return this.storage.setItem(YY, JSON.stringify(rY)), Promise.resolve()
          }
          _get(YY) {
            const rY = this.storage.getItem(YY);
            return Promise.resolve(rY ? JSON.parse(rY) : null)
          }
          _remove(YY) {
            return this.storage.removeItem(YY), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class EF extends WF {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (YY, rY) => this.onStorageEvent(YY, rY), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const YY = (0, FY.I)();
              return sr(YY) || Er(YY)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (YY) {
                return !1
              }
            }(), this.fallbackToPolling = mr(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(YY) {
            for (const rY of Object.keys(this.listeners)) {
              const DY = this.storage.getItem(rY),
                FY = this.localCache[rY];
              DY !== FY && YY(rY, FY, DY)
            }
          }
          onStorageEvent(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!YY.key) return void this.forAllChangedKeys(((YY, rY, DY) => {
              this.notifyListeners(YY, DY)
            }));
            const DY = YY.key;
            if (rY ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const FY = this.storage.getItem(DY);
              if (YY.newValue !== FY) null !== YY.newValue ? this.storage.setItem(DY, YY.newValue) : this.storage.removeItem(DY);
              else if (this.localCache[DY] === YY.newValue && !rY) return
            }
            const AY = () => {
                const YY = this.storage.getItem(DY);
                (rY || this.localCache[DY] !== YY) && this.notifyListeners(DY, YY)
              },
              IY = this.storage.getItem(DY);
            (0, FY.R)() && 10 === document.documentMode && IY !== YY.newValue && YY.newValue !== YY.oldValue ? setTimeout(AY, 10) : AY()
          }
          notifyListeners(YY, rY) {
            this.localCache[YY] = rY;
            const DY = this.listeners[YY];
            if (DY)
              for (const FY of Array.from(DY)) FY(rY ? JSON.parse(rY) : rY)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((YY, rY, DY) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: YY,
                  oldValue: rY,
                  newValue: DY
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
          _addListener(YY, rY) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[YY] || (this.listeners[YY] = new Set, this.localCache[YY] = this.storage.getItem(YY)), this.listeners[YY].add(rY)
          }
          _removeListener(YY, rY) {
            this.listeners[YY] && (this.listeners[YY].delete(rY), 0 === this.listeners[YY].size && delete this.listeners[YY]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(YY, rY) {
            await super._set(YY, rY), this.localCache[YY] = JSON.stringify(rY)
          }
          async _get(YY) {
            const rY = await super._get(YY);
            return this.localCache[YY] = JSON.stringify(rY), rY
          }
          async _remove(YY) {
            await super._remove(YY), delete this.localCache[YY]
          }
        }
        EF.type = "LOCAL";
        const mF = EF;
        class VF extends WF {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(YY, rY) {}
          _removeListener(YY, rY) {}
        }
        VF.type = "SESSION";
        const SF = VF;
        class lF {
          constructor(YY) {
            this.eventTarget = YY, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(YY) {
            const rY = this.receivers.find((rY => rY.isListeningto(YY)));
            if (rY) return rY;
            const DY = new lF(YY);
            return this.receivers.push(DY), DY
          }
          isListeningto(YY) {
            return this.eventTarget === YY
          }
          async handleEvent(YY) {
            const rY = YY,
              {
                eventId: DY,
                eventType: FY,
                data: AY
              } = rY.data,
              IY = this.handlersMap[FY];
            if (!(null === IY || void 0 === IY ? void 0 : IY.size)) return;
            rY.ports[0].postMessage({
              status: "ack",
              eventId: DY,
              eventType: FY
            });
            const RY = Array.from(IY).map((async YY => YY(rY.origin, AY))),
              OY = await
            function(YY) {
              return Promise.all(YY.map((async YY => {
                try {
                  return {
                    fulfilled: !0,
                    value: await YY
                  }
                } catch (rY) {
                  return {
                    fulfilled: !1,
                    reason: rY
                  }
                }
              })))
            }(RY);
            rY.ports[0].postMessage({
              status: "done",
              eventId: DY,
              eventType: FY,
              response: OY
            })
          }
          _subscribe(YY, rY) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[YY] || (this.handlersMap[YY] = new Set), this.handlersMap[YY].add(rY)
          }
          _unsubscribe(YY, rY) {
            this.handlersMap[YY] && rY && this.handlersMap[YY].delete(rY), rY && 0 !== this.handlersMap[YY].size || delete this.handlersMap[YY], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function TF() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            DY = "";
          for (let FY = 0; FY < rY; FY++) DY += Math.floor(10 * Math.random());
          return YY + DY
        }
        lF.receivers = [];
        class eF {
          constructor(YY) {
            this.target = YY, this.handlers = new Set
          }
          removeMessageHandler(YY) {
            YY.messageChannel && (YY.messageChannel.port1.removeEventListener("message", YY.ZE), YY.messageChannel.port1.close()), this.handlers.delete(YY)
          }
          async _send(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const FY = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!FY) throw new Error("connection_unavailable");
            let AY, IY;
            return new Promise(((RY, OY) => {
              const gY = TF("", 20);
              FY.port1.start();
              const aY = setTimeout((() => {
                OY(new Error("unsupported_event"))
              }), DY);
              IY = {
                messageChannel: FY,
                ZE(YY) {
                  const rY = YY;
                  if (rY.data.eventId === gY) switch (rY.data.status) {
                    case "ack":
                      clearTimeout(aY), AY = setTimeout((() => {
                        OY(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(AY), RY(rY.data.response);
                      break;
                    default:
                      clearTimeout(aY), clearTimeout(AY), OY(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(IY), FY.port1.addEventListener("message", IY.ZE), this.target.postMessage({
                eventType: YY,
                eventId: gY,
                data: rY
              }, [FY.port2])
            })).finally((() => {
              IY && this.removeMessageHandler(IY)
            }))
          }
        }

        function NF() {
          return window
        }

        function BF() {
          return "undefined" !== typeof NF().WorkerGlobalScope && "function" === typeof NF().importScripts
        }
        const cF = "firebaseLocalStorageDb",
          KF = "firebaseLocalStorage",
          HF = "fbase_key";
        class zF {
          constructor(YY) {
            this.request = YY
          }
          toPromise() {
            return new Promise(((YY, rY) => {
              this.request.addEventListener("success", (() => {
                YY(this.request.result)
              })), this.request.addEventListener("error", (() => {
                rY(this.request.error)
              }))
            }))
          }
        }

        function ZF(YY, rY) {
          return YY.transaction([KF], rY ? "readwrite" : "readonly").objectStore(KF)
        }

        function CF() {
          const YY = indexedDB.open(cF, 1);
          return new Promise(((rY, DY) => {
            YY.addEventListener("error", (() => {
              DY(YY.error)
            })), YY.addEventListener("upgradeneeded", (() => {
              const rY = YY.result;
              try {
                rY.createObjectStore(KF, {
                  keyPath: HF
                })
              } catch (FY) {
                DY(FY)
              }
            })), YY.addEventListener("success", (async () => {
              const DY = YY.result;
              DY.objectStoreNames.contains(KF) ? rY(DY) : (DY.close(), await
                function() {
                  const YY = indexedDB.deleteDatabase(cF);
                  return new zF(YY).toPromise()
                }(), rY(await CF()))
            }))
          }))
        }
        async function fF(YY, rY, DY) {
          const FY = ZF(YY, !0).put({
            [HF]: rY,
            value: DY
          });
          return new zF(FY).toPromise()
        }

        function jF(YY, rY) {
          const DY = ZF(YY, !0).delete(rY);
          return new zF(DY).toPromise()
        }
        class hF {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await CF()), this.db
          }
          async _withRetries(YY) {
            let rY = 0;
            for (;;) try {
              const rY = await this._openDb();
              return await YY(rY)
            } catch (DY) {
              if (rY++ > 3) throw DY;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return BF() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = lF._getInstance(BF() ? self : null), this.receiver._subscribe("keyChanged", (async (YY, rY) => ({
              keyProcessed: (await this._poll()).includes(rY.key)
            }))), this.receiver._subscribe("ping", (async (YY, rY) => ["keyChanged"]))
          }
          async initializeSender() {
            var YY, rY;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (YY) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new eF(this.activeServiceWorker);
            const DY = await this.sender._send("ping", {}, 800);
            DY && (null === (YY = DY[0]) || void 0 === YY ? void 0 : YY.fulfilled) && (null === (rY = DY[0]) || void 0 === rY ? void 0 : rY.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(YY) {
            if (this.sender && this.activeServiceWorker && function() {
                var YY;
                return (null === (YY = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === YY ? void 0 : YY.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: YY
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (rY) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const YY = await CF();
              return await fF(YY, oF, "1"), await jF(YY, oF), !0
            } catch (YY) {}
            return !1
          }
          async _withPendingWrite(YY) {
            this.pendingWrites++;
            try {
              await YY()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(YY, rY) {
            return this._withPendingWrite((async () => (await this._withRetries((DY => fF(DY, YY, rY))), this.localCache[YY] = rY, this.notifyServiceWorker(YY))))
          }
          async _get(YY) {
            const rY = await this._withRetries((rY => async function(YY, rY) {
              const DY = ZF(YY, !1).get(rY),
                FY = await new zF(DY).toPromise();
              return void 0 === FY ? null : FY.value
            }(rY, YY)));
            return this.localCache[YY] = rY, rY
          }
          async _remove(YY) {
            return this._withPendingWrite((async () => (await this._withRetries((rY => jF(rY, YY))), delete this.localCache[YY], this.notifyServiceWorker(YY))))
          }
          async _poll() {
            const YY = await this._withRetries((YY => {
              const rY = ZF(YY, !1).getAll();
              return new zF(rY).toPromise()
            }));
            if (!YY) return [];
            if (0 !== this.pendingWrites) return [];
            const rY = [],
              DY = new Set;
            for (const {
                fbase_key: FY,
                value: AY
              }
              of YY) DY.add(FY), JSON.stringify(this.localCache[FY]) !== JSON.stringify(AY) && (this.notifyListeners(FY, AY), rY.push(FY));
            for (const FY of Object.keys(this.localCache)) this.localCache[FY] && !DY.has(FY) && (this.notifyListeners(FY, null), rY.push(FY));
            return rY
          }
          notifyListeners(YY, rY) {
            this.localCache[YY] = rY;
            const DY = this.listeners[YY];
            if (DY)
              for (const FY of Array.from(DY)) FY(rY)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(YY, rY) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[YY] || (this.listeners[YY] = new Set, this._get(YY)), this.listeners[YY].add(rY)
          }
          _removeListener(YY, rY) {
            this.listeners[YY] && (this.listeners[YY].delete(rY), 0 === this.listeners[YY].size && delete this.listeners[YY]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        hF.type = "LOCAL";
        const dF = hF;
        const JF = 1e12;
        class MF {
          constructor(YY) {
            this.auth = YY, this.counter = JF, this._widgets = new Map
          }
          render(YY, rY) {
            const DY = this.counter;
            return this._widgets.set(DY, new wF(YY, this.auth.name, rY || {})), this.counter++, DY
          }
          reset(YY) {
            var rY;
            const DY = YY || JF;
            null === (rY = this._widgets.get(DY)) || void 0 === rY || rY.delete(), this._widgets.delete(DY)
          }
          getResponse(YY) {
            var rY;
            const DY = YY || JF;
            return (null === (rY = this._widgets.get(DY)) || void 0 === rY ? void 0 : rY.getResponse()) || ""
          }
          async execute(YY) {
            var rY;
            const DY = YY || JF;
            return null === (rY = this._widgets.get(DY)) || void 0 === rY || rY.execute(), ""
          }
        }
        class wF {
          constructor(YY, rY, DY) {
            this.params = DY, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const FY = "string" === typeof YY ? document.getElementById(YY) : YY;
            NY(FY, "argument-error", {
              appName: rY
            }), this.container = FY, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(YY) {
                const rY = [],
                  DY = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let FY = 0; FY < YY; FY++) rY.push(DY.charAt(Math.floor(Math.random() * DY.length)));
                return rY.join("")
              }(50);
              const {
                callback: YY,
                "expired-callback": rY
              } = this.params;
              if (YY) try {
                YY(this.responseToken)
              } catch (DY) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, rY) try {
                  rY()
                } catch (DY) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const bF = Br("rcb"),
          XF = new ZY(3e4, 6e4);
        class qF {
          constructor() {
            var YY;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (YY = NF().grecaptcha) || void 0 === YY ? void 0 : YY.render)
          }
          load(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return NY(function(YY) {
              return YY.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(YY)
            }(rY), YY, "argument-error"), this.shouldResolveImmediately(rY) && lr(NF().grecaptcha) ? Promise.resolve(NF().grecaptcha) : new Promise(((DY, AY) => {
              const IY = NF().setTimeout((() => {
                AY(SY(YY, "network-request-failed"))
              }), XF.get());
              NF()[bF] = () => {
                NF().clearTimeout(IY), delete NF()[bF];
                const FY = NF().grecaptcha;
                if (!FY || !lr(FY)) return void AY(SY(YY, "internal-error"));
                const RY = FY.render;
                FY.render = (YY, rY) => {
                  const DY = RY(YY, rY);
                  return this.counter++, DY
                }, this.hostLanguage = rY, DY(FY)
              };
              Nr(`https://www.google.com/recaptcha/api.js??${(0,FY.db)({onload:bF,render:"explicit",hl:rY})}`).catch((() => {
                clearTimeout(IY), AY(SY(YY, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(YY) {
            var rY;
            return !!(null === (rY = NF().grecaptcha) || void 0 === rY ? void 0 : rY.render) && (YY === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class pF {
          async load(YY) {
            return new MF(YY)
          }
          clearedOneInstance() {}
        }
        const kF = "recaptcha",
          GF = {
            theme: "light",
            type: "image"
          };
        class xF {
          constructor(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, GF),
              DY = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = rY, this.type = kF, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Zr(DY), this.isInvisible = "invisible" === this.parameters.size, NY("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const FY = "string" === typeof YY ? document.getElementById(YY) : YY;
            NY(FY, this.auth, "argument-error"), this.container = FY, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new pF : new qF, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const YY = await this.render(),
              rY = this.getAssertedRecaptcha(),
              DY = rY.getResponse(YY);
            return DY || new Promise((DY => {
              const FY = YY => {
                YY && (this.tokenChangeListeners.delete(FY), DY(YY))
              };
              this.tokenChangeListeners.add(FY), this.isInvisible && rY.execute(YY)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (YY) {
              return Promise.reject(YY)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((YY => {
              throw this.renderPromise = null, YY
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((YY => {
              this.container.removeChild(YY)
            }))
          }
          validateStartingState() {
            NY(!this.parameters.sitekey, this.auth, "argument-error"), NY(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), NY("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(YY) {
            return rY => {
              if (this.tokenChangeListeners.forEach((YY => YY(rY))), "function" === typeof YY) YY(rY);
              else if ("string" === typeof YY) {
                const DY = NF()[YY];
                "function" === typeof DY && DY(rY)
              }
            }
          }
          assertNotDestroyed() {
            NY(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let YY = this.container;
              if (!this.isInvisible) {
                const rY = document.createElement("div");
                YY.appendChild(rY), YY = rY
              }
              this.widgetId = this.getAssertedRecaptcha().render(YY, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            NY(HY() && !BF(), this.auth, "internal-error"), await
            function() {
              let YY = null;
              return new Promise((rY => {
                "complete" !== document.readyState ? (YY = () => rY(), window.addEventListener("load", YY)) : rY()
              })).catch((rY => {
                throw YY && window.removeEventListener("load", YY), rY
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const YY = await async function(YY) {
              return (await JY(YY, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            NY(YY, this.auth, "internal-error"), this.parameters.sitekey = YY
          }
          getAssertedRecaptcha() {
            return NY(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class nF {
          constructor(YY, rY) {
            this.verificationId = YY, this.onConfirmation = rY
          }
          confirm(YY) {
            const rY = Pr._fromVerification(this.verificationId, YY);
            return this.onConfirmation(rY)
          }
        }
        async function PF(YY, rY, DY) {
          const AY = Zr(YY),
            IY = await tF(AY, rY, (0, FY.G)(DY));
          return new nF(IY, (YY => SD(AY, YY)))
        }
        async function UF(YY, rY, DY) {
          const AY = (0, FY.G)(YY);
          await ED(!1, AY, "phone");
          const IY = await tF(AY.auth, rY, (0, FY.G)(DY));
          return new nF(IY, (YY => lD(AY, YY)))
        }
        async function LF(YY, rY, DY) {
          const AY = (0, FY.G)(YY),
            IY = await tF(AY.auth, rY, (0, FY.G)(DY));
          return new nF(IY, (YY => TD(AY, YY)))
        }
        async function tF(YY, rY, DY) {
          var FY;
          const AY = await DY.verify();
          try {
            let IY;
            if (NY("string" === typeof AY, YY, "argument-error"), NY(DY.type === kF, YY, "argument-error"), IY = "string" === typeof rY ? {
                phoneNumber: rY
              } : rY, "session" in IY) {
              const rY = IY.session;
              if ("phoneNumber" in IY) {
                NY("enroll" === rY.type, YY, "internal-error");
                const DY = await
                function(YY, rY) {
                  return JY(YY, "POST", "/v2/accounts/mfaEnrollment:start", dY(YY, rY))
                }(YY, {
                  idToken: rY.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: IY.phoneNumber,
                    recaptchaToken: AY
                  }
                });
                return DY.phoneSessionInfo.sessionInfo
              } {
                NY("signin" === rY.type, YY, "internal-error");
                const DY = (null === (FY = IY.multiFactorHint) || void 0 === FY ? void 0 : FY.uid) || IY.multiFactorUid;
                NY(DY, YY, "missing-multi-factor-info");
                const RY = await
                function(YY, rY) {
                  return JY(YY, "POST", "/v2/accounts/mfaSignIn:start", dY(YY, rY))
                }(YY, {
                  mfaPendingCredential: rY.credential,
                  mfaEnrollmentId: DY,
                  phoneSignInInfo: {
                    recaptchaToken: AY
                  }
                });
                return RY.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: rY
              } = await async function(YY, rY) {
                return JY(YY, "POST", "/v1/accounts:sendVerificationCode", dY(YY, rY))
              }(YY, {
                phoneNumber: IY.phoneNumber,
                recaptchaToken: AY
              });
              return rY
            }
          } finally {
            DY._reset()
          }
        }
        async function YA(YY, rY) {
          await WD((0, FY.G)(YY), rY)
        }
        class rA {
          constructor(YY) {
            this.providerId = rA.PROVIDER_ID, this.auth = Zr(YY)
          }
          verifyPhoneNumber(YY, rY) {
            return tF(this.auth, YY, (0, FY.G)(rY))
          }
          static credential(YY, rY) {
            return Pr._fromVerification(YY, rY)
          }
          static credentialFromResult(YY) {
            const rY = YY;
            return rA.credentialFromTaggedObject(rY)
          }
          static credentialFromError(YY) {
            return rA.credentialFromTaggedObject(YY.customData || {})
          }
          static credentialFromTaggedObject(YY) {
            let {
              _tokenResponse: rY
            } = YY;
            if (!rY) return null;
            const {
              phoneNumber: DY,
              temporaryProof: FY
            } = rY;
            return DY && FY ? Pr._fromTokenResponse(DY, FY) : null
          }
        }

        function DA(YY, rY) {
          return rY ? Ir(rY) : (NY(YY._popupRedirectResolver, YY, "argument-error"), YY._popupRedirectResolver)
        }
        rA.PROVIDER_ID = "phone", rA.PHONE_SIGN_IN_METHOD = "phone";
        class FA extends Jr {
          constructor(YY) {
            super("custom", "custom"), this.params = YY
          }
          _getIdTokenResponse(YY) {
            return Gr(YY, this._buildIdpRequest())
          }
          _linkToIdToken(YY, rY) {
            return Gr(YY, this._buildIdpRequest(rY))
          }
          _getReauthenticationResolver(YY) {
            return Gr(YY, this._buildIdpRequest())
          }
          _buildIdpRequest(YY) {
            const rY = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return YY && (rY.idToken = YY), rY
          }
        }

        function AA(YY) {
          return VD(YY.auth, new FA(YY), YY.bypassAuthState)
        }

        function IA(YY) {
          const {
            auth: rY,
            user: DY
          } = YY;
          return NY(DY, rY, "internal-error"), mD(DY, new FA(YY), YY.bypassAuthState)
        }
        async function RA(YY) {
          const {
            auth: rY,
            user: DY
          } = YY;
          return NY(DY, rY, "internal-error"), WD(DY, new FA(YY), YY.bypassAuthState)
        }
        class OA {
          constructor(YY, rY, DY, FY) {
            let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = YY, this.resolver = DY, this.user = FY, this.bypassAuthState = AY, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(rY) ? rY : [rY]
          }
          execute() {
            return new Promise((async (YY, rY) => {
              this.pendingPromise = {
                resolve: YY,
                reject: rY
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (DY) {
                this.reject(DY)
              }
            }))
          }
          async onAuthEvent(YY) {
            const {
              urlResponse: rY,
              sessionId: DY,
              postBody: FY,
              tenantId: AY,
              error: IY,
              type: RY
            } = YY;
            if (IY) return void this.reject(IY);
            const OY = {
              auth: this.auth,
              requestUri: rY,
              sessionId: DY,
              tenantId: AY || void 0,
              postBody: FY || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(RY)(OY))
            } catch (gY) {
              this.reject(gY)
            }
          }
          onError(YY) {
            this.reject(YY)
          }
          getIdpTask(YY) {
            switch (YY) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return AA;
              case "linkViaPopup":
              case "linkViaRedirect":
                return RA;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return IA;
              default:
                VY(this.auth, "internal-error")
            }
          }
          resolve(YY) {
            cY(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(YY), this.unregisterAndCleanUp()
          }
          reject(YY) {
            cY(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(YY), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const gA = new ZY(2e3, 1e4);
        async function aA(YY, rY, DY) {
          const FY = Zr(YY);
          TY(YY, rY, YD);
          const AY = DA(FY, DY);
          return new sA(FY, "signInViaPopup", rY, AY).executeNotNull()
        }
        async function vA(YY, rY, DY) {
          const AY = (0, FY.G)(YY);
          TY(AY.auth, rY, YD);
          const IY = DA(AY.auth, DY);
          return new sA(AY.auth, "reauthViaPopup", rY, IY, AY).executeNotNull()
        }
        async function uA(YY, rY, DY) {
          const AY = (0, FY.G)(YY);
          TY(AY.auth, rY, YD);
          const IY = DA(AY.auth, DY);
          return new sA(AY.auth, "linkViaPopup", rY, IY, AY).executeNotNull()
        }
        class sA extends OA {
          constructor(YY, rY, DY, FY, AY) {
            super(YY, rY, FY, AY), this.provider = DY, this.authWindow = null, this.pollId = null, sA.currentPopupAction && sA.currentPopupAction.cancel(), sA.currentPopupAction = this
          }
          async executeNotNull() {
            const YY = await this.execute();
            return NY(YY, this.auth, "internal-error"), YY
          }
          async onExecution() {
            cY(1 === this.filter.length, "Popup operations only handle one event");
            const YY = TF();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], YY), this.authWindow.associatedEvent = YY, this.resolver._originValidation(this.auth).catch((YY => {
              this.reject(YY)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (YY => {
              YY || this.reject(SY(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var YY;
            return (null === (YY = this.authWindow) || void 0 === YY ? void 0 : YY.associatedEvent) || null
          }
          cancel() {
            this.reject(SY(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, sA.currentPopupAction = null
          }
          pollUserCancellation() {
            const YY = () => {
              var rY, DY;
              (null === (DY = null === (rY = this.authWindow) || void 0 === rY ? void 0 : rY.window) || void 0 === DY ? void 0 : DY.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(SY(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(YY, gA.get())
            };
            YY()
          }
        }
        sA.currentPopupAction = null;
        const iA = "pendingRedirect",
          yA = new Map;
        class QA extends OA {
          constructor(YY, rY) {
            super(YY, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], rY, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let YY = yA.get(this.auth._key());
            if (!YY) {
              try {
                const rY = await async function(YY, rY) {
                  const DY = mA(rY),
                    FY = EA(YY);
                  if (!await FY._isAvailable()) return !1;
                  const AY = "true" === await FY._get(DY);
                  return await FY._remove(DY), AY
                }(this.resolver, this.auth) ? await super.execute() : null;
                YY = () => Promise.resolve(rY)
              } catch (rY) {
                YY = () => Promise.reject(rY)
              }
              yA.set(this.auth._key(), YY)
            }
            return this.bypassAuthState || yA.set(this.auth._key(), (() => Promise.resolve(null))), YY()
          }
          async onAuthEvent(YY) {
            if ("signInViaRedirect" === YY.type) return super.onAuthEvent(YY);
            if ("unknown" !== YY.type) {
              if (YY.eventId) {
                const rY = await this.auth._redirectUserForId(YY.eventId);
                if (rY) return this.user = rY, super.onAuthEvent(YY);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function oA(YY, rY) {
          return EA(YY)._set(mA(rY), "true")
        }

        function WA(YY, rY) {
          yA.set(YY._key(), rY)
        }

        function EA(YY) {
          return Ir(YY._redirectPersistence)
        }

        function mA(YY) {
          return gr(iA, YY.config.apiKey, YY.name)
        }

        function VA(YY, rY, DY) {
          return async function(YY, rY, DY) {
            const FY = Zr(YY);
            TY(YY, rY, YD), await FY._initializationPromise;
            const AY = DA(FY, DY);
            return await oA(AY, FY), AY._openRedirect(FY, rY, "signInViaRedirect")
          }(YY, rY, DY)
        }

        function SA(YY, rY, DY) {
          return async function(YY, rY, DY) {
            const AY = (0, FY.G)(YY);
            TY(AY.auth, rY, YD), await AY.auth._initializationPromise;
            const IY = DA(AY.auth, DY);
            await oA(IY, AY.auth);
            const RY = await NA(AY);
            return IY._openRedirect(AY.auth, rY, "reauthViaRedirect", RY)
          }(YY, rY, DY)
        }

        function lA(YY, rY, DY) {
          return async function(YY, rY, DY) {
            const AY = (0, FY.G)(YY);
            TY(AY.auth, rY, YD), await AY.auth._initializationPromise;
            const IY = DA(AY.auth, DY);
            await ED(!1, AY, rY.providerId), await oA(IY, AY.auth);
            const RY = await NA(AY);
            return IY._openRedirect(AY.auth, rY, "linkViaRedirect", RY)
          }(YY, rY, DY)
        }
        async function TA(YY, rY) {
          return await Zr(YY)._initializationPromise, eA(YY, rY, !1)
        }
        async function eA(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const FY = Zr(YY),
            AY = DA(FY, rY),
            IY = new QA(FY, AY, DY),
            RY = await IY.execute();
          return RY && !DY && (delete RY.user._redirectEventId, await FY._persistUserIfCurrent(RY.user), await FY._setRedirectUser(null, rY)), RY
        }
        async function NA(YY) {
          const rY = TF(`${YY.uid}:::`);
          return YY._redirectEventId = rY, await YY.auth._setRedirectUser(YY), await YY.auth._persistUserIfCurrent(YY), rY
        }
        class BA {
          constructor(YY) {
            this.auth = YY, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(YY) {
            this.consumers.add(YY), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, YY) && (this.sendToConsumer(this.queuedRedirectEvent, YY), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(YY) {
            this.consumers.delete(YY)
          }
          onEvent(YY) {
            if (this.hasEventBeenHandled(YY)) return !1;
            let rY = !1;
            return this.consumers.forEach((DY => {
              this.isEventForConsumer(YY, DY) && (rY = !0, this.sendToConsumer(YY, DY), this.saveEventToCache(YY))
            })), this.hasHandledPotentialRedirect || ! function(YY) {
              switch (YY.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return KA(YY);
                default:
                  return !1
              }
            }(YY) || (this.hasHandledPotentialRedirect = !0, rY || (this.queuedRedirectEvent = YY, rY = !0)), rY
          }
          sendToConsumer(YY, rY) {
            var DY;
            if (YY.error && !KA(YY)) {
              const FY = (null === (DY = YY.error.code) || void 0 === DY ? void 0 : DY.split("auth/")[1]) || "internal-error";
              rY.onError(SY(this.auth, FY))
            } else rY.onAuthEvent(YY)
          }
          isEventForConsumer(YY, rY) {
            const DY = null === rY.eventId || !!YY.eventId && YY.eventId === rY.eventId;
            return rY.filter.includes(YY.type) && DY
          }
          hasEventBeenHandled(YY) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(cA(YY))
          }
          saveEventToCache(YY) {
            this.cachedEventUids.add(cA(YY)), this.lastProcessedEventTime = Date.now()
          }
        }

        function cA(YY) {
          return [YY.type, YY.eventId, YY.sessionId, YY.tenantId].filter((YY => YY)).join("-")
        }

        function KA(YY) {
          let {
            type: rY,
            error: DY
          } = YY;
          return "unknown" === rY && "auth/no-auth-event" === (null === DY || void 0 === DY ? void 0 : DY.code)
        }
        const HA = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          zA = /^https?/;
        async function ZA(YY) {
          if (YY.config.emulator) return;
          const {
            authorizedDomains: rY
          } = await async function(YY) {
            return JY(YY, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(YY);
          for (const FY of rY) try {
            if (CA(FY)) return
          } catch (DY) {}
          VY(YY, "unauthorized-domain")
        }

        function CA(YY) {
          const rY = KY(),
            {
              protocol: DY,
              hostname: FY
            } = new URL(rY);
          if (YY.startsWith("chrome-extension://")) {
            const AY = new URL(YY);
            return "" === AY.hostname && "" === FY ? "chrome-extension:" === DY && YY.replace("chrome-extension://", "") === rY.replace("chrome-extension://", "") : "chrome-extension:" === DY && AY.hostname === FY
          }
          if (!zA.test(DY)) return !1;
          if (HA.test(YY)) return FY === YY;
          const AY = YY.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + AY + "|" + AY + ")$", "i").test(FY)
        }
        const fA = new ZY(3e4, 6e4);

        function jA() {
          const YY = NF().___jsl;
          if (null === YY || void 0 === YY ? void 0 : YY.H)
            for (const rY of Object.keys(YY.H))
              if (YY.H[rY].r = YY.H[rY].r || [], YY.H[rY].L = YY.H[rY].L || [], YY.H[rY].r = [...YY.H[rY].L], YY.CP)
                for (let DY = 0; DY < YY.CP.length; DY++) YY.CP[DY] = null
        }
        let hA = null;

        function dA(YY) {
          return hA = hA || function(YY) {
            return new Promise(((rY, DY) => {
              var FY, AY, IY;

              function RY() {
                jA(), gapi.load("gapi.iframes", {
                  callback: () => {
                    rY(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    jA(), DY(SY(YY, "network-request-failed"))
                  },
                  timeout: fA.get()
                })
              }
              if (null === (AY = null === (FY = NF().gapi) || void 0 === FY ? void 0 : FY.iframes) || void 0 === AY ? void 0 : AY.Iframe) rY(gapi.iframes.getContext());
              else {
                if (!(null === (IY = NF().gapi) || void 0 === IY ? void 0 : IY.load)) {
                  const rY = Br("iframefcb");
                  return NF()[rY] = () => {
                    gapi.load ? RY() : DY(SY(YY, "network-request-failed"))
                  }, Nr(`https://apis.google.com/js/api.js?onload=${rY}`).catch((YY => DY(YY)))
                }
                RY()
              }
            })).catch((YY => {
              throw hA = null, YY
            }))
          }(YY), hA
        }
        const JA = new ZY(5e3, 15e3),
          MA = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          wA = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function bA(YY) {
          const rY = YY.config;
          NY(rY.authDomain, YY, "auth-domain-config-required");
          const DY = rY.emulator ? CY(rY, "emulator/auth/iframe") : `https://${YY.config.authDomain}/__/auth/iframe`,
            IY = {
              apiKey: rY.apiKey,
              appName: YY.name,
              v: AY.i
            },
            RY = wA.get(YY.config.apiHost);
          RY && (IY.eid = RY);
          const OY = YY._getFrameworks();
          return OY.length && (IY.fw = OY.join(",")), `${DY}?${(0,FY.db)(IY).slice(1)}`
        }
        const XA = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class qA {
          constructor(YY) {
            this.window = YY, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (YY) {}
          }
        }

        function pA(YY, rY, DY) {
          let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const RY = Math.max((window.screen.availHeight - IY) / 2, 0).toString(),
            OY = Math.max((window.screen.availWidth - AY) / 2, 0).toString();
          let gY = "";
          const aY = Object.assign(Object.assign({}, XA), {
              width: AY.toString(),
              height: IY.toString(),
              top: RY,
              left: OY
            }),
            vY = (0, FY.I)().toLowerCase();
          DY && (gY = ir(vY) ? "_blank" : DY), ur(vY) && (rY = rY || "http://localhost", aY.scrollbars = "yes");
          const uY = Object.entries(aY).reduce(((YY, rY) => {
            let [DY, FY] = rY;
            return `${YY}${DY}=${FY},`
          }), "");
          if (function() {
              var YY;
              return Er(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.I)()) && !!(null === (YY = window.navigator) || void 0 === YY ? void 0 : YY.standalone)
            }(vY) && "_self" !== gY) return function(YY, rY) {
            const DY = document.createElement("a");
            DY.href = YY, DY.target = rY;
            const FY = document.createEvent("MouseEvent");
            FY.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), DY.dispatchEvent(FY)
          }(rY || "", gY), new qA(null);
          const sY = window.open(rY || "", gY, uY);
          NY(sY, YY, "popup-blocked");
          try {
            sY.focus()
          } catch (iY) {}
          return new qA(sY)
        }
        const kA = "__/auth/handler",
          GA = "emulator/auth/handler",
          xA = encodeURIComponent("fac");
        async function nA(YY, rY, DY, IY, RY, OY) {
            NY(YY.config.authDomain, YY, "auth-domain-config-required"), NY(YY.config.apiKey, YY, "invalid-api-key");
            const gY = {
              apiKey: YY.config.apiKey,
              appName: YY.name,
              authType: DY,
              redirectUrl: IY,
              v: AY.i,
              eventId: RY
            };
            if (rY instanceof YD) {
              rY.setDefaultLanguage(YY.languageCode), gY.providerId = rY.providerId || "", (0, FY.P)(rY.getCustomParameters()) || (gY.customParameters = JSON.stringify(rY.getCustomParameters()));
              for (const [YY, rY] of Object.entries(OY || {})) gY[YY] = rY
            }
            if (rY instanceof rD) {
              const YY = rY.getScopes().filter((YY => "" !== YY));
              YY.length > 0 && (gY.scopes = YY.join(","))
            }
            YY.tenantId && (gY.tid = YY.tenantId);
            const aY = gY;
            for (const FY of Object.keys(aY)) void 0 === aY[FY] && delete aY[FY];
            const vY = await YY._getAppCheckToken(),
              uY = vY ? `#${xA}=${encodeURIComponent(vY)}` : "";
            return `${function(YY){let{config:rY}=YY;if(!rY.emulator)return`
            https: //${rY.authDomain}/${kA}`;return CY(rY,GA)}(YY)}?${(0,FY.db)(aY).slice(1)}${uY}`}const PA="webStorageSupport";const UA=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SF,this._completeRedirectFn=eA,this._overrideRedirectResult=WA}async _openPopup(YY,rY,DY,FY){var AY;cY(null===(AY=this.eventManagers[YY._key()])||void 0===AY?void 0:AY.manager,"_initialize() not called before _openPopup()");return pA(YY,await nA(YY,rY,DY,KY(),FY),TF())}async _openRedirect(YY,rY,DY,FY){await this._originValidation(YY);return function(YY){NF().location.href=YY}(await nA(YY,rY,DY,KY(),FY)),new Promise((()=>{}))}_initialize(YY){const rY=YY._key();if(this.eventManagers[rY]){const{manager:YY,promise:DY}=this.eventManagers[rY];return YY?Promise.resolve(YY):(cY(DY,"If manager is not set, promise should be"),DY)}const DY=this.initAndGetManager(YY);return this.eventManagers[rY]={promise:DY},DY.catch((()=>{delete this.eventManagers[rY]})),DY}async initAndGetManager(YY){const rY=await async function(YY){const rY=await dA(YY),DY=NF().gapi;return NY(DY,YY,"internal-error"),rY.open({where:document.body,url:bA(YY),messageHandlersFilter:DY.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MA,dontclear:!0},(rY=>new Promise((async(DY,FY)=>{await rY.restyle({setHideOnLeave:!1});const AY=SY(YY,"network-request-failed"),IY=NF().setTimeout((()=>{FY(AY)}),JA.get());function RY(){NF().clearTimeout(IY),DY(rY)}rY.ping(RY).then(RY,(()=>{FY(AY)}))}))))}(YY),DY=new BA(YY);return rY.register("authEvent",(rY=>{NY(null===rY||void 0===rY?void 0:rY.authEvent,YY,"invalid-auth-event");return{status:DY.onEvent(rY.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[YY._key()]={manager:DY},this.iframes[YY._key()]=rY,DY}_isIframeWebStorageSupported(YY,rY){this.iframes[YY._key()].send(PA,{type:PA},(DY=>{var FY;const AY=null===(FY=null===DY||void 0===DY?void 0:DY[0])||void 0===FY?void 0:FY[PA];void 0!==AY&&rY(!!AY),VY(YY,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(YY){const rY=YY._key();return this.originValidationPromises[rY]||(this.originValidationPromises[rY]=ZA(YY)),this.originValidationPromises[rY]}get _shouldInitProactively(){return mr()||sr()||Er()}};class LA{constructor(YY){this.factorId=YY}_process(YY,rY,DY){switch(rY.type){case"enroll":return this._finalizeEnroll(YY,rY.credential,DY);case"signin":return this._finalizeSignIn(YY,rY.credential);default:return BY("unexpected MultiFactorSessionType")}}}class tA extends LA{constructor(YY){super("phone"),this.credential=YY}static _fromCredential(YY){return new tA(YY)}_finalizeEnroll(YY,rY,DY){return function(YY,rY){return JY(YY,"POST","/v2/accounts/mfaEnrollment:finalize",dY(YY,rY))}(YY,{idToken:rY,displayName:DY,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(YY,rY){return function(YY,rY){return JY(YY,"POST","/v2/accounts/mfaSignIn:finalize",dY(YY,rY))}(YY,{mfaPendingCredential:rY,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class YI{constructor(){}static assertion(YY){return tA._fromCredential(YY)}}YI.FACTOR_ID="phone";class rI{static assertionForEnrollment(YY,rY){return DI._fromSecret(YY,rY)}static assertionForSignIn(YY,rY){return DI._fromEnrollmentId(YY,rY)}static async generateSecret(YY){const rY=YY;NY("undefined"!==typeof rY.auth,"internal-error");const DY=await(FY=rY.auth,AY={idToken:rY.credential,totpEnrollmentInfo:{}},JY(FY,"POST","/v2/accounts/mfaEnrollment:start",dY(FY,AY)));var FY,AY;return FI._fromStartTotpMfaEnrollmentResponse(DY,rY.auth)}}rI.FACTOR_ID="totp";class DI extends LA{constructor(YY,rY,DY){super("totp"),this.otp=YY,this.enrollmentId=rY,this.secret=DY}static _fromSecret(YY,rY){return new DI(rY,void 0,YY)}static _fromEnrollmentId(YY,rY){return new DI(rY,YY)}async _finalizeEnroll(YY,rY,DY){return NY("undefined"!==typeof this.secret,YY,"argument-error"),function(YY,rY){return JY(YY,"POST","/v2/accounts/mfaEnrollment:finalize",dY(YY,rY))}(YY,{idToken:rY,displayName:DY,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(YY,rY){NY(void 0!==this.enrollmentId&&void 0!==this.otp,YY,"argument-error");const DY={verificationCode:this.otp};return function(YY,rY){return JY(YY,"POST","/v2/accounts/mfaSignIn:finalize",dY(YY,rY))}(YY,{mfaPendingCredential:rY,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:DY})}}class FI{constructor(YY,rY,DY,FY,AY,IY,RY){this.sessionInfo=IY,this.auth=RY,this.secretKey=YY,this.hashingAlgorithm=rY,this.codeLength=DY,this.codeIntervalSeconds=FY,this.enrollmentCompletionDeadline=AY}static _fromStartTotpMfaEnrollmentResponse(YY,rY){return new FI(YY.totpSessionInfo.sharedSecretKey,YY.totpSessionInfo.hashingAlgorithm,YY.totpSessionInfo.verificationCodeLength,YY.totpSessionInfo.periodSec,new Date(YY.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),YY.totpSessionInfo.sessionInfo,rY)}_makeTotpVerificationInfo(YY){return{sessionInfo:this.sessionInfo,verificationCode:YY}}generateQrCodeUrl(YY,rY){var DY;let FY=!1;return(AI(YY)||AI(rY))&&(FY=!0),FY&&(AI(YY)&&(YY=(null===(DY=this.auth.currentUser)||void 0===DY?void 0:DY.email)||"unknownuser"),AI(rY)&&(rY=this.auth.name)),`otpauth://totp/${rY}:${YY}?secret=${this.secretKey}&issuer=${rY}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function AI(YY){return"undefined"===typeof YY||0===(null===YY||void 0===YY?void 0:YY.length)}var II="@firebase/auth",RI="0.23.2";class OI{constructor(YY){this.auth=YY,this.internalListeners=new Map}getUid(){var YY;return this.assertAuthConfigured(),(null===(YY=this.auth.currentUser)||void 0===YY?void 0:YY.uid)||null}async getToken(YY){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(YY)}}addAuthTokenListener(YY){if(this.assertAuthConfigured(),this.internalListeners.has(YY))return;const rY=this.auth.onIdTokenChanged((rY=>{YY((null===rY||void 0===rY?void 0:rY.stsTokenManager.accessToken)||null)}));this.internalListeners.set(YY,rY),this.updateProactiveRefresh()}removeAuthTokenListener(YY){this.assertAuthConfigured();const rY=this.internalListeners.get(YY);rY&&(this.internalListeners.delete(YY),rY(),this.updateProactiveRefresh())}assertAuthConfigured(){NY(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const gI=(0,FY.F)("authIdTokenMaxAge")||300;let aI=null;const vI=YY=>async rY=>{const DY=rY&&await rY.getIdTokenResult(),FY=DY&&((new Date).getTime()-Date.parse(DY.issuedAtTime))/1e3;if(FY&&FY>gI)return;const AY=null===DY||void 0===DY?void 0:DY.token;aI!==AY&&(aI=AY,await fetch(YY,{method:AY?"POST":"DELETE",headers:AY?{Authorization:`Bearer ${AY}`}:{}}))};function uI(){let YY=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,AY.K)();const rY=(0,AY.s)(YY,"auth");if(rY.isInitialized())return rY.getImmediate();const DY=fr(YY,{popupRedirectResolver:UA,persistence:[dF,mF,SF]}),IY=(0,FY.F)("authTokenSyncURL");if(IY){const YY=vI(IY);AF(DY,YY,(()=>YY(DY.currentUser))),FF(DY,(rY=>YY(rY)))}const RY=(0,FY.C)("auth");return RY&&jr(DY,`http://${RY}`),DY}var sI;sI="Browser",(0,AY.u)(new OY.e("auth",((YY,rY)=>{let{options:DY}=rY;const FY=YY.getProvider("app").getImmediate(),AY=YY.getProvider("heartbeat"),IY=YY.getProvider("app-check-internal"),{apiKey:RY,authDomain:OY}=FY.options;NY(RY&&!RY.includes(":"),"invalid-api-key",{appName:FY.name});const gY={apiKey:RY,authDomain:OY,clientPlatform:sI,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vr(sI)},aY=new zr(FY,AY,IY,gY);return function(YY,rY){const DY=(null===rY||void 0===rY?void 0:rY.persistence)||[],FY=(Array.isArray(DY)?DY:[DY]).map(Ir);(null===rY||void 0===rY?void 0:rY.errorMap)&&YY._updateErrorMap(rY.errorMap),YY._initializeWithPersistence(FY,null===rY||void 0===rY?void 0:rY.popupRedirectResolver)}(aY,DY),aY}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((YY,rY,DY)=>{YY.getProvider("auth-internal").initialize()}))),(0,AY.u)(new OY.e("auth-internal",(YY=>(YY=>new OI(YY))(Zr(YY.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,AY.R)(II,RI,function(YY){switch(YY){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(sI)),(0,AY.R)(II,RI,"esm2017")}};Object.freeze(modules);for(const YY in modules)Object.freeze(modules[YY]);