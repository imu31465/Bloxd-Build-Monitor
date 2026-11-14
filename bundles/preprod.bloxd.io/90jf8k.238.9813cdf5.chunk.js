/*! For license information please see 90jf8k.238.9813cdf5.chunk.js.LICENSE.txt */
export const id = 238;
export const ids = [238];
export const modules = {
    38503: (FF, WF, SF) => {
        SF.r(WF), SF.d(WF, {
          ActionCodeOperation: () => eF,
          ActionCodeURL: () => JW,
          AuthCredential: () => fW,
          AuthErrorCodes: () => tW,
          EmailAuthCredential: () => XW,
          EmailAuthProvider: () => lW,
          FacebookAuthProvider: () => CS,
          FactorId: () => dF,
          GithubAuthProvider: () => uS,
          GoogleAuthProvider: () => AS,
          OAuthCredential: () => BW,
          OAuthProvider: () => SS,
          OperationType: () => iW,
          PhoneAuthCredential: () => vS,
          PhoneAuthProvider: () => WA,
          PhoneMultiFactorGenerator: () => Fu,
          ProviderId: () => PF,
          RecaptchaVerifier: () => BC,
          SAMLAuthProvider: () => bC,
          SignInMethod: () => RF,
          TotpMultiFactorGenerator: () => Wu,
          TotpSecret: () => Cu,
          TwitterAuthProvider: () => dS,
          applyActionCode: () => YS,
          beforeAuthStateChanged: () => AC,
          browserLocalPersistence: () => aA,
          browserPopupRedirectResolver: () => JA,
          browserSessionPersistence: () => qA,
          checkActionCode: () => MS,
          confirmPasswordReset: () => oS,
          connectAuthEmulator: () => GW,
          createUserWithEmailAndPassword: () => GS,
          debugErrorMap: () => QF,
          deleteUser: () => PC,
          fetchSignInMethodsForEmail: () => sS,
          getAdditionalUserInfo: () => FC,
          getAuth: () => ih,
          getIdToken: () => XF,
          getIdTokenResult: () => UF,
          getMultiFactorResolver: () => eC,
          getRedirectResult: () => NA,
          inMemoryPersistence: () => bS,
          indexedDBLocalPersistence: () => IC,
          initializeAuth: () => cS,
          initializeRecaptchaConfig: () => SC,
          isSignInWithEmailLink: () => fS,
          linkWithCredential: () => VS,
          linkWithPhoneNumber: () => JC,
          linkWithPopup: () => iu,
          linkWithRedirect: () => VA,
          multiFactor: () => rA,
          onAuthStateChanged: () => uC,
          onIdTokenChanged: () => CC,
          parseActionCodeURL: () => pW,
          prodErrorMap: () => rW,
          reauthenticateWithCredential: () => NS,
          reauthenticateWithPhoneNumber: () => pC,
          reauthenticateWithPopup: () => RA,
          reauthenticateWithRedirect: () => qu,
          reload: () => FW,
          sendEmailVerification: () => nS,
          sendPasswordResetEmail: () => ZS,
          sendSignInLinkToEmail: () => IS,
          setPersistence: () => WC,
          signInAnonymously: () => eS,
          signInWithCredential: () => qC,
          signInWithCustomToken: () => DS,
          signInWithEmailAndPassword: () => zC,
          signInWithEmailLink: () => yC,
          signInWithPhoneNumber: () => vA,
          signInWithPopup: () => PA,
          signInWithRedirect: () => ku,
          signOut: () => dC,
          unlink: () => gC,
          updateCurrentUser: () => bA,
          updateEmail: () => wS,
          updatePassword: () => XS,
          updatePhoneNumber: () => FA,
          updateProfile: () => KS,
          useDeviceLanguage: () => hC,
          verifyBeforeUpdateEmail: () => HS,
          verifyPasswordResetCode: () => cC
        });
        var CF = SF(38488),
          AF = SF(38475);

        function uF(FF, WF) {
          var SF = {};
          for (var CF in FF) Object.prototype.hasOwnProperty.call(FF, CF) && WF.indexOf(CF) < 0 && (SF[CF] = FF[CF]);
          if (null != FF && "function" === typeof Object.getOwnPropertySymbols) {
            var AF = 0;
            for (CF = Object.getOwnPropertySymbols(FF); AF < CF.length; AF++) WF.indexOf(CF[AF]) < 0 && Object.prototype.propertyIsEnumerable.call(FF, CF[AF]) && (SF[CF[AF]] = FF[CF[AF]])
          }
          return SF
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var hF = SF(38496),
          bW = SF(38479);
        const dF = {
            PHONE: "phone",
            TOTP: "totp"
          },
          PF = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          RF = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          iW = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          eF = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function EF() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const QF = function() {
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
          rW = EF,
          gW = new CF.e("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          tW = {
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
          TF = new hF.d("@firebase/auth");

        function aW(FF) {
          if (TF.logLevel <= hF.b.ERROR) {
            for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
            TF.error(`Auth (${AF.h}): ${FF}`, ...SF)
          }
        }

        function kW(FF) {
          for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
          throw DF(FF, ...SF)
        }

        function qW(FF) {
          for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
          return DF(FF, ...SF)
        }

        function VF(FF, WF, SF) {
          const AF = Object.assign(Object.assign({}, rW()), {
            [WF]: SF
          });
          return new CF.e("auth", "Firebase", AF).create(WF, {
            appName: FF.name
          })
        }

        function NF(FF, WF, SF) {
          if (!(WF instanceof SF)) throw SF.name !== WF.constructor.name && kW(FF, "argument-error"), VF(FF, "argument-error", `Type of ${WF.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function DF(FF) {
          for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
          if ("string" !== typeof FF) {
            const WF = SF[0],
              CF = [...SF.slice(1)];
            return CF[0] && (CF[0].appName = FF.name), FF._errorFactory.create(WF, ...CF)
          }
          return gW.create(FF, ...SF)
        }

        function LF(FF, WF) {
          if (!FF) {
            for (var SF = arguments.length, CF = new Array(SF > 2 ? SF - 2 : 0), AF = 2; AF < SF; AF++) CF[AF - 2] = arguments[AF];
            throw DF(WF, ...CF)
          }
        }

        function mW(FF) {
          const WF = "INTERNAL ASSERTION FAILED: " + FF;
          throw aW(WF), new Error(WF)
        }

        function OF(FF, WF) {
          FF || mW(WF)
        }

        function xW() {
          var FF;
          return "undefined" !== typeof self && (null === (FF = self.location) || void 0 === FF ? void 0 : FF.href) || ""
        }

        function ZF() {
          return "http:" === oF() || "https:" === oF()
        }

        function oF() {
          var FF;
          return "undefined" !== typeof self && (null === (FF = self.location) || void 0 === FF ? void 0 : FF.protocol) || null
        }
        class YF {
          constructor(FF, WF) {
            this.shortDelay = FF, this.longDelay = WF, OF(WF > FF, "Short delay should be less than long delay!"), this.isMobile = (0, CF.V)() || (0, CF.X)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (ZF() || (0, CF.N)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function MF(FF, WF) {
          OF(FF.emulator, "Emulator should always be set here");
          const {
            url: SF
          } = FF.emulator;
          return WF ? `${SF}${WF.startsWith("/")?WF.slice(1):WF}` : SF
        }
        class cW {
          static initialize(FF, WF, SF) {
            this.fetchImpl = FF, WF && (this.headersImpl = WF), SF && (this.responseImpl = SF)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void mW("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void mW("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void mW("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const GF = {
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
          zW = new YF(3e4, 6e4);

        function IF(FF, WF) {
          return FF.tenantId && !WF.tenantId ? Object.assign(Object.assign({}, WF), {
            tenantId: FF.tenantId
          }) : WF
        }
        async function fF(FF, WF, SF, AF) {
          return yW(FF, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let uF = {},
              hF = {};
            AF && ("GET" === WF ? hF = AF : uF = {
              body: JSON.stringify(AF)
            });
            const bW = (0, CF.ab)(Object.assign({
                key: FF.config.apiKey
              }, hF)).slice(1),
              dF = await FF._getAdditionalHeaders();
            return dF["Content-Type"] = "application/json", FF.languageCode && (dF["X-Firebase-Locale"] = FF.languageCode), cW.fetch()(nF(FF, FF.config.apiHost, SF, bW), Object.assign({
              method: WF,
              headers: dF,
              referrerPolicy: "no-referrer"
            }, uF))
          }))
        }
        async function yW(FF, WF, SF) {
          FF._canInitEmulator = !1;
          const AF = Object.assign(Object.assign({}, GF), WF);
          try {
            const WF = new HF(FF),
              CF = await Promise.race([SF(), WF.promise]);
            WF.clearNetworkTimeout();
            const uF = await CF.json();
            if ("needConfirmation" in uF) throw KF(FF, "account-exists-with-different-credential", uF);
            if (CF.ok && !("errorMessage" in uF)) return uF;
            {
              const WF = CF.ok ? uF.errorMessage : uF.error.message,
                [SF, hF] = WF.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === SF) throw KF(FF, "credential-already-in-use", uF);
              if ("EMAIL_EXISTS" === SF) throw KF(FF, "email-already-in-use", uF);
              if ("USER_DISABLED" === SF) throw KF(FF, "user-disabled", uF);
              const bW = AF[SF] || SF.toLowerCase().replace(/[_\s]+/g, "-");
              if (hF) throw VF(FF, bW, hF);
              kW(FF, bW)
            }
          } catch (uF) {
            if (uF instanceof CF.f) throw uF;
            kW(FF, "network-request-failed", {
              message: String(uF)
            })
          }
        }
        async function sF(FF, WF, SF, CF) {
          let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const uF = await fF(FF, WF, SF, CF, AF);
          return "mfaPendingCredential" in uF && kW(FF, "multi-factor-auth-required", {
            _serverResponse: uF
          }), uF
        }

        function nF(FF, WF, SF, CF) {
          const AF = `${WF}${SF}?${CF}`;
          return FF.config.emulator ? MF(FF.config, AF) : `${FF.config.apiScheme}://${AF}`
        }
        class HF {
          constructor(FF) {
            this.auth = FF, this.timer = null, this.promise = new Promise(((FF, WF) => {
              this.timer = setTimeout((() => WF(qW(this.auth, "network-request-failed"))), zW.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function KF(FF, WF, SF) {
          const CF = {
            appName: FF.name
          };
          SF.email && (CF.email = SF.email), SF.phoneNumber && (CF.phoneNumber = SF.phoneNumber);
          const AF = qW(FF, WF, CF);
          return AF.customData._tokenResponse = SF, AF
        }

        function wF(FF) {
          if (FF) try {
            const WF = new Date(Number(FF));
            if (!isNaN(WF.getTime())) return WF.toUTCString()
          } catch (WF) {}
        }

        function XF(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, CF.J)(FF).getIdToken(WF)
        }
        async function UF(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const SF = (0, CF.J)(FF),
            AF = await SF.getIdToken(WF),
            uF = jW(AF);
          LF(uF && uF.exp && uF.auth_time && uF.iat, SF.auth, "internal-error");
          const hF = "object" === typeof uF.firebase ? uF.firebase : void 0,
            bW = null === hF || void 0 === hF ? void 0 : hF.sign_in_provider;
          return {
            claims: uF,
            token: AF,
            authTime: wF(BF(uF.auth_time)),
            issuedAtTime: wF(BF(uF.iat)),
            expirationTime: wF(BF(uF.exp)),
            signInProvider: bW || null,
            signInSecondFactor: (null === hF || void 0 === hF ? void 0 : hF.sign_in_second_factor) || null
          }
        }

        function BF(FF) {
          return 1e3 * Number(FF)
        }

        function jW(FF) {
          const [WF, SF, AF] = FF.split(".");
          if (void 0 === WF || void 0 === SF || void 0 === AF) return aW("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const FF = (0, CF.k)(SF);
            return FF ? JSON.parse(FF) : (aW("Failed to decode base64 JWT payload"), null)
          } catch (uF) {
            return aW("Caught error parsing JWT payload as JSON", null === uF || void 0 === uF ? void 0 : uF.toString()), null
          }
        }
        async function vW(FF, WF) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return WF;
          try {
            return await WF
          } catch (SF) {
            throw SF instanceof CF.f && function(FF) {
              let {
                code: WF
              } = FF;
              return "auth/user-disabled" === WF || "auth/user-token-expired" === WF
            }(SF) && FF.auth.currentUser === FF && await FF.auth.signOut(), SF
          }
        }
        class JF {
          constructor(FF) {
            this.user = FF, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(FF) {
            var WF;
            if (FF) {
              const FF = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), FF
            } {
              this.errorBackoff = 3e4;
              const FF = (null !== (WF = this.user.stsTokenManager.expirationTime) && void 0 !== WF ? WF : 0) - Date.now() - 3e5;
              return Math.max(0, FF)
            }
          }
          schedule() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const WF = this.getInterval(FF);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), WF)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (FF) {
              return void("auth/network-request-failed" === (null === FF || void 0 === FF ? void 0 : FF.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class pF {
          constructor(FF, WF) {
            this.createdAt = FF, this.lastLoginAt = WF, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = wF(this.lastLoginAt), this.creationTime = wF(this.createdAt)
          }
          _copy(FF) {
            this.createdAt = FF.createdAt, this.lastLoginAt = FF.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function lF(FF) {
          var WF;
          const SF = FF.auth,
            CF = await FF.getIdToken(),
            AF = await vW(FF, async function(FF, WF) {
              return fF(FF, "POST", "/v1/accounts:lookup", WF)
            }(SF, {
              idToken: CF
            }));
          LF(null === AF || void 0 === AF ? void 0 : AF.users.length, SF, "internal-error");
          const hF = AF.users[0];
          FF._notifyReloadListener(hF);
          const bW = (null === (WF = hF.providerUserInfo) || void 0 === WF ? void 0 : WF.length) ? hF.providerUserInfo.map((FF => {
            var {
              providerId: WF
            } = FF, SF = uF(FF, ["providerId"]);
            return {
              providerId: WF,
              uid: SF.rawId || "",
              displayName: SF.displayName || null,
              email: SF.email || null,
              phoneNumber: SF.phoneNumber || null,
              photoURL: SF.photoUrl || null
            }
          })) : [];
          const dF = (PF = FF.providerData, RF = bW, [...PF.filter((FF => !RF.some((WF => WF.providerId === FF.providerId)))), ...RF]);
          var PF, RF;
          const iW = FF.isAnonymous,
            eF = !(FF.email && hF.passwordHash) && !(null === dF || void 0 === dF ? void 0 : dF.length),
            EF = !!iW && eF,
            QF = {
              uid: hF.localId,
              displayName: hF.displayName || null,
              photoURL: hF.photoUrl || null,
              email: hF.email || null,
              emailVerified: hF.emailVerified || !1,
              phoneNumber: hF.phoneNumber || null,
              tenantId: hF.tenantId || null,
              providerData: dF,
              metadata: new pF(hF.createdAt, hF.lastLoginAt),
              isAnonymous: EF
            };
          Object.assign(FF, QF)
        }
        async function FW(FF) {
          const WF = (0, CF.J)(FF);
          await lF(WF), await WF.auth._persistUserIfCurrent(WF), WF.auth._notifyListenersIfCurrent(WF)
        }
        class WW {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(FF) {
            LF(FF.idToken, "internal-error"), LF("undefined" !== typeof FF.idToken, "internal-error"), LF("undefined" !== typeof FF.refreshToken, "internal-error");
            const WF = "expiresIn" in FF && "undefined" !== typeof FF.expiresIn ? Number(FF.expiresIn) : function(FF) {
              const WF = jW(FF);
              return LF(WF, "internal-error"), LF("undefined" !== typeof WF.exp, "internal-error"), LF("undefined" !== typeof WF.iat, "internal-error"), Number(WF.exp) - Number(WF.iat)
            }(FF.idToken);
            this.updateTokensAndExpiration(FF.idToken, FF.refreshToken, WF)
          }
          async getToken(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return LF(!this.accessToken || this.refreshToken, FF, "user-token-expired"), WF || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(FF, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(FF, WF) {
            const {
              accessToken: SF,
              refreshToken: AF,
              expiresIn: uF
            } = await async function(FF, WF) {
              const SF = await yW(FF, {}, (async () => {
                const SF = (0, CF.ab)({
                    grant_type: "refresh_token",
                    refresh_token: WF
                  }).slice(1),
                  {
                    tokenApiHost: AF,
                    apiKey: uF
                  } = FF.config,
                  hF = nF(FF, AF, "/v1/token", `key=${uF}`),
                  bW = await FF._getAdditionalHeaders();
                return bW["Content-Type"] = "application/x-www-form-urlencoded", cW.fetch()(hF, {
                  method: "POST",
                  headers: bW,
                  body: SF
                })
              }));
              return {
                accessToken: SF.access_token,
                expiresIn: SF.expires_in,
                refreshToken: SF.refresh_token
              }
            }(FF, WF);
            this.updateTokensAndExpiration(SF, AF, Number(uF))
          }
          updateTokensAndExpiration(FF, WF, SF) {
            this.refreshToken = WF || null, this.accessToken = FF || null, this.expirationTime = Date.now() + 1e3 * SF
          }
          static fromJSON(FF, WF) {
            const {
              refreshToken: SF,
              accessToken: CF,
              expirationTime: AF
            } = WF, uF = new WW;
            return SF && (LF("string" === typeof SF, "internal-error", {
              appName: FF
            }), uF.refreshToken = SF), CF && (LF("string" === typeof CF, "internal-error", {
              appName: FF
            }), uF.accessToken = CF), AF && (LF("number" === typeof AF, "internal-error", {
              appName: FF
            }), uF.expirationTime = AF), uF
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(FF) {
            this.accessToken = FF.accessToken, this.refreshToken = FF.refreshToken, this.expirationTime = FF.expirationTime
          }
          _clone() {
            return Object.assign(new WW, this.toJSON())
          }
          _performRefresh() {
            return mW("not implemented")
          }
        }

        function SW(FF, WF) {
          LF("string" === typeof FF || "undefined" === typeof FF, "internal-error", {
            appName: WF
          })
        }
        class CW {
          constructor(FF) {
            var {
              uid: WF,
              auth: SF,
              stsTokenManager: CF
            } = FF, AF = uF(FF, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new JF(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = WF, this.auth = SF, this.stsTokenManager = CF, this.accessToken = CF.accessToken, this.displayName = AF.displayName || null, this.email = AF.email || null, this.emailVerified = AF.emailVerified || !1, this.phoneNumber = AF.phoneNumber || null, this.photoURL = AF.photoURL || null, this.isAnonymous = AF.isAnonymous || !1, this.tenantId = AF.tenantId || null, this.providerData = AF.providerData ? [...AF.providerData] : [], this.metadata = new pF(AF.createdAt || void 0, AF.lastLoginAt || void 0)
          }
          async getIdToken(FF) {
            const WF = await vW(this, this.stsTokenManager.getToken(this.auth, FF));
            return LF(WF, this.auth, "internal-error"), this.accessToken !== WF && (this.accessToken = WF, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), WF
          }
          getIdTokenResult(FF) {
            return UF(this, FF)
          }
          reload() {
            return FW(this)
          }
          _assign(FF) {
            this !== FF && (LF(this.uid === FF.uid, this.auth, "internal-error"), this.displayName = FF.displayName, this.photoURL = FF.photoURL, this.email = FF.email, this.emailVerified = FF.emailVerified, this.phoneNumber = FF.phoneNumber, this.isAnonymous = FF.isAnonymous, this.tenantId = FF.tenantId, this.providerData = FF.providerData.map((FF => Object.assign({}, FF))), this.metadata._copy(FF.metadata), this.stsTokenManager._assign(FF.stsTokenManager))
          }
          _clone(FF) {
            const WF = new CW(Object.assign(Object.assign({}, this), {
              auth: FF,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return WF.metadata._copy(this.metadata), WF
          }
          _onReload(FF) {
            LF(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = FF, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(FF) {
            this.reloadListener ? this.reloadListener(FF) : this.reloadUserInfo = FF
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              SF = !1;
            FF.idToken && FF.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(FF), SF = !0), WF && await lF(this), await this.auth._persistUserIfCurrent(this), SF && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const FF = await this.getIdToken();
            return await vW(this, async function(FF, WF) {
              return fF(FF, "POST", "/v1/accounts:delete", WF)
            }(this.auth, {
              idToken: FF
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
              providerData: this.providerData.map((FF => Object.assign({}, FF))),
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
          static _fromJSON(FF, WF) {
            var SF, CF, AF, uF, hF, bW, dF, PF;
            const RF = null !== (SF = WF.displayName) && void 0 !== SF ? SF : void 0,
              iW = null !== (CF = WF.email) && void 0 !== CF ? CF : void 0,
              eF = null !== (AF = WF.phoneNumber) && void 0 !== AF ? AF : void 0,
              EF = null !== (uF = WF.photoURL) && void 0 !== uF ? uF : void 0,
              QF = null !== (hF = WF.tenantId) && void 0 !== hF ? hF : void 0,
              rW = null !== (bW = WF._redirectEventId) && void 0 !== bW ? bW : void 0,
              gW = null !== (dF = WF.createdAt) && void 0 !== dF ? dF : void 0,
              tW = null !== (PF = WF.lastLoginAt) && void 0 !== PF ? PF : void 0,
              {
                uid: TF,
                emailVerified: aW,
                isAnonymous: kW,
                providerData: qW,
                stsTokenManager: VF
              } = WF;
            LF(TF && VF, FF, "internal-error");
            const NF = WW.fromJSON(this.name, VF);
            LF("string" === typeof TF, FF, "internal-error"), SW(RF, FF.name), SW(iW, FF.name), LF("boolean" === typeof aW, FF, "internal-error"), LF("boolean" === typeof kW, FF, "internal-error"), SW(eF, FF.name), SW(EF, FF.name), SW(QF, FF.name), SW(rW, FF.name), SW(gW, FF.name), SW(tW, FF.name);
            const DF = new CW({
              uid: TF,
              auth: FF,
              email: iW,
              emailVerified: aW,
              displayName: RF,
              isAnonymous: kW,
              photoURL: EF,
              phoneNumber: eF,
              tenantId: QF,
              stsTokenManager: NF,
              createdAt: gW,
              lastLoginAt: tW
            });
            return qW && Array.isArray(qW) && (DF.providerData = qW.map((FF => Object.assign({}, FF)))), rW && (DF._redirectEventId = rW), DF
          }
          static async _fromIdTokenResponse(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const CF = new WW;
            CF.updateFromServerResponse(WF);
            const AF = new CW({
              uid: WF.localId,
              auth: FF,
              stsTokenManager: CF,
              isAnonymous: SF
            });
            return await lF(AF), AF
          }
        }
        const AW = new Map;

        function uW(FF) {
          OF(FF instanceof Function, "Expected a class definition");
          let WF = AW.get(FF);
          return WF ? (OF(WF instanceof FF, "Instance stored in cache mismatched with class"), WF) : (WF = new FF, AW.set(FF, WF), WF)
        }
        class hW {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(FF, WF) {
            this.storage[FF] = WF
          }
          async _get(FF) {
            const WF = this.storage[FF];
            return void 0 === WF ? null : WF
          }
          async _remove(FF) {
            delete this.storage[FF]
          }
          _addListener(FF, WF) {}
          _removeListener(FF, WF) {}
        }
        hW.type = "NONE";
        const bS = hW;

        function dW(FF, WF, SF) {
          return `firebase:${FF}:${WF}:${SF}`
        }
        class PW {
          constructor(FF, WF, SF) {
            this.persistence = FF, this.auth = WF, this.userKey = SF;
            const {
              config: CF,
              name: AF
            } = this.auth;
            this.fullUserKey = dW(this.userKey, CF.apiKey, AF), this.fullPersistenceKey = dW("persistence", CF.apiKey, AF), this.boundEventHandler = WF._onStorageEvent.bind(WF), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(FF) {
            return this.persistence._set(this.fullUserKey, FF.toJSON())
          }
          async getCurrentUser() {
            const FF = await this.persistence._get(this.fullUserKey);
            return FF ? CW._fromJSON(this.auth, FF) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(FF) {
            if (this.persistence === FF) return;
            const WF = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = FF, WF ? this.setCurrentUser(WF) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!WF.length) return new PW(uW(bS), FF, SF);
            const CF = (await Promise.all(WF.map((async FF => {
              if (await FF._isAvailable()) return FF
            })))).filter((FF => FF));
            let AF = CF[0] || uW(bS);
            const uF = dW(SF, FF.config.apiKey, FF.name);
            let hF = null;
            for (const PF of WF) try {
              const WF = await PF._get(uF);
              if (WF) {
                const SF = CW._fromJSON(FF, WF);
                PF !== AF && (hF = SF), AF = PF;
                break
              }
            } catch (dF) {}
            const bW = CF.filter((FF => FF._shouldAllowMigration));
            return AF._shouldAllowMigration && bW.length ? (AF = bW[0], hF && await AF._set(uF, hF.toJSON()), await Promise.all(WF.map((async FF => {
              if (FF !== AF) try {
                await FF._remove(uF)
              } catch (dF) {}
            }))), new PW(AF, FF, SF)) : new PW(AF, FF, SF)
          }
        }

        function RW(FF) {
          const WF = FF.toLowerCase();
          if (WF.includes("opera/") || WF.includes("opr/") || WF.includes("opios/")) return "Opera";
          if (QW(WF)) return "IEMobile";
          if (WF.includes("msie") || WF.includes("trident/")) return "IE";
          if (WF.includes("edge/")) return "Edge";
          if (iS(WF)) return "Firefox";
          if (WF.includes("silk/")) return "Silk";
          if (gS(WF)) return "Blackberry";
          if (tS(WF)) return "Webos";
          if (eW(WF)) return "Safari";
          if ((WF.includes("chrome/") || EW(WF)) && !WF.includes("edge/")) return "Chrome";
          if (rS(WF)) return "Android";
          {
            const WF = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              SF = FF.match(WF);
            if (2 === (null === SF || void 0 === SF ? void 0 : SF.length)) return SF[1]
          }
          return "Other"
        }

        function iS() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)();
          return /firefox\//i.test(FF)
        }

        function eW() {
          const FF = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)()).toLowerCase();
          return FF.includes("safari/") && !FF.includes("chrome/") && !FF.includes("crios/") && !FF.includes("android")
        }

        function EW() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)();
          return /crios\//i.test(FF)
        }

        function QW() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)();
          return /iemobile/i.test(FF)
        }

        function rS() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)();
          return /android/i.test(FF)
        }

        function gS() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)();
          return /blackberry/i.test(FF)
        }

        function tS() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)();
          return /webos/i.test(FF)
        }

        function TW() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)();
          return /iphone|ipad|ipod/i.test(FF) || /macintosh/i.test(FF) && /mobile/i.test(FF)
        }

        function aS() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)();
          return TW(FF) || rS(FF) || tS(FF) || gS(FF) || /windows phone/i.test(FF) || QW(FF)
        }

        function kS(FF) {
          let WF, SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (FF) {
            case "Browser":
              WF = RW((0, CF.K)());
              break;
            case "Worker":
              WF = `${RW((0,CF.K)())}-${FF}`;
              break;
            default:
              WF = FF
          }
          const uF = SF.length ? SF.join(",") : "FirebaseCore-web";
          return `${WF}/JsCore/${AF.h}/${uF}`
        }
        async function qS(FF, WF) {
          return fF(FF, "GET", "/v2/recaptchaConfig", IF(FF, WF))
        }

        function VW(FF) {
          return void 0 !== FF && void 0 !== FF.getResponse
        }

        function NW(FF) {
          return void 0 !== FF && void 0 !== FF.enterprise
        }
        class DW {
          constructor(FF) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === FF.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = FF.recaptchaKey.split("/")[3], this.emailPasswordEnabled = FF.recaptchaEnforcementState.some((FF => "EMAIL_PASSWORD_PROVIDER" === FF.provider && "OFF" !== FF.enforcementState))
          }
        }

        function LW(FF) {
          return new Promise(((WF, SF) => {
            const CF = document.createElement("script");
            CF.setAttribute("src", FF), CF.onload = WF, CF.onerror = FF => {
                const WF = qW("internal-error");
                WF.customData = FF, SF(WF)
              }, CF.type = "text/javascript", CF.charset = "UTF-8",
              function() {
                var FF, WF;
                return null !== (WF = null === (FF = document.getElementsByTagName("head")) || void 0 === FF ? void 0 : FF[0]) && void 0 !== WF ? WF : document
              }().appendChild(CF)
          }))
        }

        function mS(FF) {
          return `__${FF}${Math.floor(1e6*Math.random())}`
        }
        class OW {
          constructor(FF) {
            this.type = "recaptcha-enterprise", this.auth = YW(FF)
          }
          async verify() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function SF(WF, SF, CF) {
              const AF = window.grecaptcha;
              NW(AF) ? AF.enterprise.ready((() => {
                AF.enterprise.execute(WF, {
                  action: FF
                }).then((FF => {
                  SF(FF)
                })).catch((() => {
                  SF("NO_RECAPTCHA")
                }))
              })) : CF(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((FF, CF) => {
              (async function(FF) {
                if (!WF) {
                  if (null == FF.tenantId && null != FF._agentRecaptchaConfig) return FF._agentRecaptchaConfig.siteKey;
                  if (null != FF.tenantId && void 0 !== FF._tenantRecaptchaConfigs[FF.tenantId]) return FF._tenantRecaptchaConfigs[FF.tenantId].siteKey
                }
                return new Promise((async (WF, SF) => {
                  qS(FF, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((CF => {
                    if (void 0 !== CF.recaptchaKey) {
                      const SF = new DW(CF);
                      return null == FF.tenantId ? FF._agentRecaptchaConfig = SF : FF._tenantRecaptchaConfigs[FF.tenantId] = SF, WF(SF.siteKey)
                    }
                    SF(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((FF => {
                    SF(FF)
                  }))
                }))
              })(this.auth).then((AF => {
                if (!WF && NW(window.grecaptcha)) SF(AF, FF, CF);
                else {
                  if ("undefined" === typeof window) return void CF(new Error("RecaptchaVerifier is only supported in browser"));
                  LW("https://www.google.com/recaptcha/enterprise.js?render=" + AF).then((() => {
                    SF(AF, FF, CF)
                  })).catch((FF => {
                    CF(FF)
                  }))
                }
              })).catch((FF => {
                CF(FF)
              }))
            }))
          }
        }
        async function xS(FF, WF, SF) {
          let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const AF = new OW(FF);
          let uF;
          try {
            uF = await AF.verify(SF)
          } catch (bW) {
            uF = await AF.verify(SF, !0)
          }
          const hF = Object.assign({}, WF);
          return CF ? Object.assign(hF, {
            captchaResp: uF
          }) : Object.assign(hF, {
            captchaResponse: uF
          }), Object.assign(hF, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(hF, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), hF
        }
        class ZW {
          constructor(FF) {
            this.auth = FF, this.queue = []
          }
          pushCallback(FF, WF) {
            const SF = WF => new Promise(((SF, CF) => {
              try {
                SF(FF(WF))
              } catch (AF) {
                CF(AF)
              }
            }));
            SF.onAbort = WF, this.queue.push(SF);
            const CF = this.queue.length - 1;
            return () => {
              this.queue[CF] = () => Promise.resolve()
            }
          }
          async runMiddleware(FF) {
            if (this.auth.currentUser === FF) return;
            const WF = [];
            try {
              for (const SF of this.queue) await SF(FF), SF.onAbort && WF.push(SF.onAbort)
            } catch (SF) {
              WF.reverse();
              for (const FF of WF) try {
                FF()
              } catch (CF) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === SF || void 0 === SF ? void 0 : SF.message
              })
            }
          }
        }
        class oW {
          constructor(FF, WF, SF, CF) {
            this.app = FF, this.heartbeatServiceProvider = WF, this.appCheckServiceProvider = SF, this.config = CF, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new MW(this), this.idTokenSubscription = new MW(this), this.beforeStateQueue = new ZW(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = gW, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = FF.name, this.clientVersion = CF.sdkClientVersion
          }
          _initializeWithPersistence(FF, WF) {
            return WF && (this._popupRedirectResolver = uW(WF)), this._initializationPromise = this.queue((async () => {
              var SF, CF;
              if (!this._deleted && (this.persistenceManager = await PW.create(this, FF), !this._deleted)) {
                if (null === (SF = this._popupRedirectResolver) || void 0 === SF ? void 0 : SF._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (AF) {}
                await this.initializeCurrentUser(WF), this.lastNotifiedUid = (null === (CF = this.currentUser) || void 0 === CF ? void 0 : CF.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const FF = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || FF ? this.currentUser && FF && this.currentUser.uid === FF.uid ? (this._currentUser._assign(FF), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(FF, !0) : void 0
          }
          async initializeCurrentUser(FF) {
            var WF;
            const SF = await this.assertedPersistence.getCurrentUser();
            let CF = SF,
              AF = !1;
            if (FF && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const SF = null === (WF = this.redirectUser) || void 0 === WF ? void 0 : WF._redirectEventId,
                uF = null === CF || void 0 === CF ? void 0 : CF._redirectEventId,
                hF = await this.tryRedirectSignIn(FF);
              SF && SF !== uF || !(null === hF || void 0 === hF ? void 0 : hF.user) || (CF = hF.user, AF = !0)
            }
            if (!CF) return this.directlySetCurrentUser(null);
            if (!CF._redirectEventId) {
              if (AF) try {
                await this.beforeStateQueue.runMiddleware(CF)
              } catch (uF) {
                CF = SF, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(uF)))
              }
              return CF ? this.reloadAndSetCurrentUserOrClear(CF) : this.directlySetCurrentUser(null)
            }
            return LF(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === CF._redirectEventId ? this.directlySetCurrentUser(CF) : this.reloadAndSetCurrentUserOrClear(CF)
          }
          async tryRedirectSignIn(FF) {
            let WF = null;
            try {
              WF = await this._popupRedirectResolver._completeRedirectFn(this, FF, !0)
            } catch (SF) {
              await this._setRedirectUser(null)
            }
            return WF
          }
          async reloadAndSetCurrentUserOrClear(FF) {
            try {
              await lF(FF)
            } catch (WF) {
              if ("auth/network-request-failed" !== (null === WF || void 0 === WF ? void 0 : WF.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(FF)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const FF = navigator;
              return FF.languages && FF.languages[0] || FF.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(FF) {
            const WF = FF ? (0, CF.J)(FF) : null;
            return WF && LF(WF.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(WF && WF._clone(this))
          }
          async _updateCurrentUser(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return FF && LF(this.tenantId === FF.tenantId, this, "tenant-id-mismatch"), WF || await this.beforeStateQueue.runMiddleware(FF), this.queue((async () => {
              await this.directlySetCurrentUser(FF), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(FF) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(uW(FF))
            }))
          }
          async initializeRecaptchaConfig() {
            const FF = await qS(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              WF = new DW(FF);
            if (null == this.tenantId ? this._agentRecaptchaConfig = WF : this._tenantRecaptchaConfigs[this.tenantId] = WF, WF.emailPasswordEnabled) {
              new OW(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(FF) {
            this._errorFactory = new CF.e("auth", "Firebase", FF())
          }
          onAuthStateChanged(FF, WF, SF) {
            return this.registerStateListener(this.authStateSubscription, FF, WF, SF)
          }
          beforeAuthStateChanged(FF, WF) {
            return this.beforeStateQueue.pushCallback(FF, WF)
          }
          onIdTokenChanged(FF, WF, SF) {
            return this.registerStateListener(this.idTokenSubscription, FF, WF, SF)
          }
          toJSON() {
            var FF;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (FF = this._currentUser) || void 0 === FF ? void 0 : FF.toJSON()
            }
          }
          async _setRedirectUser(FF, WF) {
            const SF = await this.getOrInitRedirectPersistenceManager(WF);
            return null === FF ? SF.removeCurrentUser() : SF.setCurrentUser(FF)
          }
          async getOrInitRedirectPersistenceManager(FF) {
            if (!this.redirectPersistenceManager) {
              const WF = FF && uW(FF) || this._popupRedirectResolver;
              LF(WF, this, "argument-error"), this.redirectPersistenceManager = await PW.create(this, [uW(WF._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(FF) {
            var WF, SF;
            return this._isInitialized && await this.queue((async () => {})), (null === (WF = this._currentUser) || void 0 === WF ? void 0 : WF._redirectEventId) === FF ? this._currentUser : (null === (SF = this.redirectUser) || void 0 === SF ? void 0 : SF._redirectEventId) === FF ? this.redirectUser : null
          }
          async _persistUserIfCurrent(FF) {
            if (FF === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(FF)))
          }
          _notifyListenersIfCurrent(FF) {
            FF === this.currentUser && this.notifyAuthListeners()
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
            var FF, WF;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const SF = null !== (WF = null === (FF = this.currentUser) || void 0 === FF ? void 0 : FF.uid) && void 0 !== WF ? WF : null;
            this.lastNotifiedUid !== SF && (this.lastNotifiedUid = SF, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(FF, WF, SF, CF) {
            if (this._deleted) return () => {};
            const AF = "function" === typeof WF ? WF : WF.next.bind(WF),
              uF = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return LF(uF, this, "internal-error"), uF.then((() => AF(this.currentUser))), "function" === typeof WF ? FF.addObserver(WF, SF, CF) : FF.addObserver(WF)
          }
          async directlySetCurrentUser(FF) {
            this.currentUser && this.currentUser !== FF && this._currentUser._stopProactiveRefresh(), FF && this.isProactiveRefreshEnabled && FF._startProactiveRefresh(), this.currentUser = FF, FF ? await this.assertedPersistence.setCurrentUser(FF) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(FF) {
            return this.operations = this.operations.then(FF, FF), this.operations
          }
          get assertedPersistence() {
            return LF(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(FF) {
            FF && !this.frameworks.includes(FF) && (this.frameworks.push(FF), this.frameworks.sort(), this.clientVersion = kS(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var FF;
            const WF = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (WF["X-Firebase-gmpid"] = this.app.options.appId);
            const SF = await (null === (FF = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === FF ? void 0 : FF.getHeartbeatsHeader());
            SF && (WF["X-Firebase-Client"] = SF);
            const CF = await this._getAppCheckToken();
            return CF && (WF["X-Firebase-AppCheck"] = CF), WF
          }
          async _getAppCheckToken() {
            var FF;
            const WF = await (null === (FF = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === FF ? void 0 : FF.getToken());
            return (null === WF || void 0 === WF ? void 0 : WF.error) && function(FF) {
              if (TF.logLevel <= hF.b.WARN) {
                for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
                TF.warn(`Auth (${AF.h}): ${FF}`, ...SF)
              }
            }(`Error while retrieving App Check token: ${WF.error}`), null === WF || void 0 === WF ? void 0 : WF.token
          }
        }

        function YW(FF) {
          return (0, CF.J)(FF)
        }
        class MW {
          constructor(FF) {
            this.auth = FF, this.observer = null, this.addObserver = (0, CF.u)((FF => this.observer = FF))
          }
          get next() {
            return LF(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function cS(FF, WF) {
          const SF = (0, AF.B)(FF, "auth");
          if (SF.isInitialized()) {
            const FF = SF.getImmediate(),
              AF = SF.getOptions();
            if ((0, CF.w)(AF, null !== WF && void 0 !== WF ? WF : {})) return FF;
            kW(FF, "already-initialized")
          }
          return SF.initialize({
            options: WF
          })
        }

        function GW(FF, WF, SF) {
          const CF = YW(FF);
          LF(CF._canInitEmulator, CF, "emulator-config-failed"), LF(/^https?:\/\//.test(WF), CF, "invalid-emulator-scheme");
          const AF = !!(null === SF || void 0 === SF ? void 0 : SF.disableWarnings),
            uF = zS(WF),
            {
              host: hF,
              port: bW
            } = function(FF) {
              const WF = zS(FF),
                SF = /(\/\/)?([^?#/]+)/.exec(FF.substr(WF.length));
              if (!SF) return {
                host: "",
                port: null
              };
              const CF = SF[2].split("@").pop() || "",
                AF = /^(\[[^\]]+\])(:|$)/.exec(CF);
              if (AF) {
                const FF = AF[1];
                return {
                  host: FF,
                  port: IW(CF.substr(FF.length + 1))
                }
              } {
                const [FF, WF] = CF.split(":");
                return {
                  host: FF,
                  port: IW(WF)
                }
              }
            }(WF),
            dF = null === bW ? "" : `:${bW}`;
          CF.config.emulator = {
            url: `${uF}//${hF}${dF}/`
          }, CF.settings.appVerificationDisabledForTesting = !0, CF.emulatorConfig = Object.freeze({
            host: hF,
            port: bW,
            protocol: uF.replace(":", ""),
            options: Object.freeze({
              disableWarnings: AF
            })
          }), AF || function() {
            function FF() {
              const FF = document.createElement("p"),
                WF = FF.style;
              FF.innerText = "Running in emulator mode. Do not use with production credentials.", WF.position = "fixed", WF.width = "100%", WF.backgroundColor = "#ffffff", WF.border = ".1em solid #000000", WF.color = "#b50000", WF.bottom = "0px", WF.left = "0px", WF.margin = "0px", WF.zIndex = "10000", WF.textAlign = "center", FF.classList.add("firebase-emulator-warning"), document.body.appendChild(FF)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", FF) : FF())
          }()
        }

        function zS(FF) {
          const WF = FF.indexOf(":");
          return WF < 0 ? "" : FF.substr(0, WF + 1)
        }

        function IW(FF) {
          if (!FF) return null;
          const WF = Number(FF);
          return isNaN(WF) ? null : WF
        }
        class fW {
          constructor(FF, WF) {
            this.providerId = FF, this.signInMethod = WF
          }
          toJSON() {
            return mW("not implemented")
          }
          _getIdTokenResponse(FF) {
            return mW("not implemented")
          }
          _linkToIdToken(FF, WF) {
            return mW("not implemented")
          }
          _getReauthenticationResolver(FF) {
            return mW("not implemented")
          }
        }
        async function yS(FF, WF) {
          return fF(FF, "POST", "/v1/accounts:resetPassword", IF(FF, WF))
        }
        async function sW(FF, WF) {
          return fF(FF, "POST", "/v1/accounts:update", WF)
        }
        async function nW(FF, WF) {
          return sF(FF, "POST", "/v1/accounts:signInWithPassword", IF(FF, WF))
        }
        async function HW(FF, WF) {
          return fF(FF, "POST", "/v1/accounts:sendOobCode", IF(FF, WF))
        }
        async function KW(FF, WF) {
          return HW(FF, WF)
        }
        async function wW(FF, WF) {
          return HW(FF, WF)
        }
        class XW extends fW {
          constructor(FF, WF, SF) {
            let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", SF), this._email = FF, this._password = WF, this._tenantId = CF
          }
          static _fromEmailAndPassword(FF, WF) {
            return new XW(FF, WF, "password")
          }
          static _fromEmailAndCode(FF, WF) {
            return new XW(FF, WF, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(FF) {
            const WF = "string" === typeof FF ? JSON.parse(FF) : FF;
            if ((null === WF || void 0 === WF ? void 0 : WF.email) && (null === WF || void 0 === WF ? void 0 : WF.password)) {
              if ("password" === WF.signInMethod) return this._fromEmailAndPassword(WF.email, WF.password);
              if ("emailLink" === WF.signInMethod) return this._fromEmailAndCode(WF.email, WF.password, WF.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(FF) {
            var WF;
            switch (this.signInMethod) {
              case "password":
                const SF = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (WF = FF._getRecaptchaConfig()) || void 0 === WF ? void 0 : WF.emailPasswordEnabled) {
                  const WF = await xS(FF, SF, "signInWithPassword");
                  return nW(FF, WF)
                }
                return nW(FF, SF).catch((async WF => {
                  if ("auth/missing-recaptcha-token" === WF.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const WF = await xS(FF, SF, "signInWithPassword");
                    return nW(FF, WF)
                  }
                  return Promise.reject(WF)
                }));
              case "emailLink":
                return async function(FF, WF) {
                  return sF(FF, "POST", "/v1/accounts:signInWithEmailLink", IF(FF, WF))
                }(FF, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                kW(FF, "internal-error")
            }
          }
          async _linkToIdToken(FF, WF) {
            switch (this.signInMethod) {
              case "password":
                return sW(FF, {
                  idToken: WF,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(FF, WF) {
                  return sF(FF, "POST", "/v1/accounts:signInWithEmailLink", IF(FF, WF))
                }(FF, {
                  idToken: WF,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                kW(FF, "internal-error")
            }
          }
          _getReauthenticationResolver(FF) {
            return this._getIdTokenResponse(FF)
          }
        }
        async function UW(FF, WF) {
          return sF(FF, "POST", "/v1/accounts:signInWithIdp", IF(FF, WF))
        }
        class BW extends fW {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(FF) {
            const WF = new BW(FF.providerId, FF.signInMethod);
            return FF.idToken || FF.accessToken ? (FF.idToken && (WF.idToken = FF.idToken), FF.accessToken && (WF.accessToken = FF.accessToken), FF.nonce && !FF.pendingToken && (WF.nonce = FF.nonce), FF.pendingToken && (WF.pendingToken = FF.pendingToken)) : FF.oauthToken && FF.oauthTokenSecret ? (WF.accessToken = FF.oauthToken, WF.secret = FF.oauthTokenSecret) : kW("argument-error"), WF
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
          static fromJSON(FF) {
            const WF = "string" === typeof FF ? JSON.parse(FF) : FF,
              {
                providerId: SF,
                signInMethod: CF
              } = WF,
              AF = uF(WF, ["providerId", "signInMethod"]);
            if (!SF || !CF) return null;
            const hF = new BW(SF, CF);
            return hF.idToken = AF.idToken || void 0, hF.accessToken = AF.accessToken || void 0, hF.secret = AF.secret, hF.nonce = AF.nonce, hF.pendingToken = AF.pendingToken || null, hF
          }
          _getIdTokenResponse(FF) {
            return UW(FF, this.buildRequest())
          }
          _linkToIdToken(FF, WF) {
            const SF = this.buildRequest();
            return SF.idToken = WF, UW(FF, SF)
          }
          _getReauthenticationResolver(FF) {
            const WF = this.buildRequest();
            return WF.autoCreate = !1, UW(FF, WF)
          }
          buildRequest() {
            const FF = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) FF.pendingToken = this.pendingToken;
            else {
              const WF = {};
              this.idToken && (WF.id_token = this.idToken), this.accessToken && (WF.access_token = this.accessToken), this.secret && (WF.oauth_token_secret = this.secret), WF.providerId = this.providerId, this.nonce && !this.pendingToken && (WF.nonce = this.nonce), FF.postBody = (0, CF.ab)(WF)
            }
            return FF
          }
        }
        const jS = {
          USER_NOT_FOUND: "user-not-found"
        };
        class vS extends fW {
          constructor(FF) {
            super("phone", "phone"), this.params = FF
          }
          static _fromVerification(FF, WF) {
            return new vS({
              verificationId: FF,
              verificationCode: WF
            })
          }
          static _fromTokenResponse(FF, WF) {
            return new vS({
              phoneNumber: FF,
              temporaryProof: WF
            })
          }
          _getIdTokenResponse(FF) {
            return async function(FF, WF) {
              return sF(FF, "POST", "/v1/accounts:signInWithPhoneNumber", IF(FF, WF))
            }(FF, this._makeVerificationRequest())
          }
          _linkToIdToken(FF, WF) {
            return async function(FF, WF) {
              const SF = await sF(FF, "POST", "/v1/accounts:signInWithPhoneNumber", IF(FF, WF));
              if (SF.temporaryProof) throw KF(FF, "account-exists-with-different-credential", SF);
              return SF
            }(FF, Object.assign({
              idToken: WF
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(FF) {
            return async function(FF, WF) {
              return sF(FF, "POST", "/v1/accounts:signInWithPhoneNumber", IF(FF, Object.assign(Object.assign({}, WF), {
                operation: "REAUTH"
              })), jS)
            }(FF, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: FF,
              phoneNumber: WF,
              verificationId: SF,
              verificationCode: CF
            } = this.params;
            return FF && WF ? {
              temporaryProof: FF,
              phoneNumber: WF
            } : {
              sessionInfo: SF,
              code: CF
            }
          }
          toJSON() {
            const FF = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (FF.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (FF.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (FF.verificationCode = this.params.verificationCode), this.params.verificationId && (FF.verificationId = this.params.verificationId), FF
          }
          static fromJSON(FF) {
            "string" === typeof FF && (FF = JSON.parse(FF));
            const {
              verificationId: WF,
              verificationCode: SF,
              phoneNumber: CF,
              temporaryProof: AF
            } = FF;
            return SF || WF || CF || AF ? new vS({
              verificationId: WF,
              verificationCode: SF,
              phoneNumber: CF,
              temporaryProof: AF
            }) : null
          }
        }
        class JW {
          constructor(FF) {
            var WF, SF, AF, uF, hF, bW;
            const dF = (0, CF.Y)((0, CF.z)(FF)),
              PF = null !== (WF = dF.apiKey) && void 0 !== WF ? WF : null,
              RF = null !== (SF = dF.oobCode) && void 0 !== SF ? SF : null,
              iW = function(FF) {
                switch (FF) {
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
              }(null !== (AF = dF.mode) && void 0 !== AF ? AF : null);
            LF(PF && RF && iW, "argument-error"), this.apiKey = PF, this.operation = iW, this.code = RF, this.continueUrl = null !== (uF = dF.continueUrl) && void 0 !== uF ? uF : null, this.languageCode = null !== (hF = dF.languageCode) && void 0 !== hF ? hF : null, this.tenantId = null !== (bW = dF.tenantId) && void 0 !== bW ? bW : null
          }
          static parseLink(FF) {
            const WF = function(FF) {
              const WF = (0, CF.Y)((0, CF.z)(FF)).link,
                SF = WF ? (0, CF.Y)((0, CF.z)(WF)).deep_link_id : null,
                AF = (0, CF.Y)((0, CF.z)(FF)).deep_link_id;
              return (AF ? (0, CF.Y)((0, CF.z)(AF)).link : null) || AF || SF || WF || FF
            }(FF);
            try {
              return new JW(WF)
            } catch (SF) {
              return null
            }
          }
        }

        function pW(FF) {
          return JW.parseLink(FF)
        }
        class lW {
          constructor() {
            this.providerId = lW.PROVIDER_ID
          }
          static credential(FF, WF) {
            return XW._fromEmailAndPassword(FF, WF)
          }
          static credentialWithLink(FF, WF) {
            const SF = JW.parseLink(WF);
            return LF(SF, "argument-error"), XW._fromEmailAndCode(FF, SF.code, SF.tenantId)
          }
        }
        lW.PROVIDER_ID = "password", lW.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", lW.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class FS {
          constructor(FF) {
            this.providerId = FF, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(FF) {
            this.defaultLanguageCode = FF
          }
          setCustomParameters(FF) {
            return this.customParameters = FF, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class WS extends FS {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(FF) {
            return this.scopes.includes(FF) || this.scopes.push(FF), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class SS extends WS {
          static credentialFromJSON(FF) {
            const WF = "string" === typeof FF ? JSON.parse(FF) : FF;
            return LF("providerId" in WF && "signInMethod" in WF, "argument-error"), BW._fromParams(WF)
          }
          credential(FF) {
            return this._credential(Object.assign(Object.assign({}, FF), {
              nonce: FF.rawNonce
            }))
          }
          _credential(FF) {
            return LF(FF.idToken || FF.accessToken, "argument-error"), BW._fromParams(Object.assign(Object.assign({}, FF), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(FF) {
            return SS.oauthCredentialFromTaggedObject(FF)
          }
          static credentialFromError(FF) {
            return SS.oauthCredentialFromTaggedObject(FF.customData || {})
          }
          static oauthCredentialFromTaggedObject(FF) {
            let {
              _tokenResponse: WF
            } = FF;
            if (!WF) return null;
            const {
              oauthIdToken: SF,
              oauthAccessToken: CF,
              oauthTokenSecret: AF,
              pendingToken: uF,
              nonce: hF,
              providerId: bW
            } = WF;
            if (!CF && !AF && !SF && !uF) return null;
            if (!bW) return null;
            try {
              return new SS(bW)._credential({
                idToken: SF,
                accessToken: CF,
                nonce: hF,
                pendingToken: uF
              })
            } catch (dF) {
              return null
            }
          }
        }
        class CS extends WS {
          constructor() {
            super("facebook.com")
          }
          static credential(FF) {
            return BW._fromParams({
              providerId: CS.PROVIDER_ID,
              signInMethod: CS.FACEBOOK_SIGN_IN_METHOD,
              accessToken: FF
            })
          }
          static credentialFromResult(FF) {
            return CS.credentialFromTaggedObject(FF)
          }
          static credentialFromError(FF) {
            return CS.credentialFromTaggedObject(FF.customData || {})
          }
          static credentialFromTaggedObject(FF) {
            let {
              _tokenResponse: WF
            } = FF;
            if (!WF || !("oauthAccessToken" in WF)) return null;
            if (!WF.oauthAccessToken) return null;
            try {
              return CS.credential(WF.oauthAccessToken)
            } catch (SF) {
              return null
            }
          }
        }
        CS.FACEBOOK_SIGN_IN_METHOD = "facebook.com", CS.PROVIDER_ID = "facebook.com";
        class AS extends WS {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(FF, WF) {
            return BW._fromParams({
              providerId: AS.PROVIDER_ID,
              signInMethod: AS.GOOGLE_SIGN_IN_METHOD,
              idToken: FF,
              accessToken: WF
            })
          }
          static credentialFromResult(FF) {
            return AS.credentialFromTaggedObject(FF)
          }
          static credentialFromError(FF) {
            return AS.credentialFromTaggedObject(FF.customData || {})
          }
          static credentialFromTaggedObject(FF) {
            let {
              _tokenResponse: WF
            } = FF;
            if (!WF) return null;
            const {
              oauthIdToken: SF,
              oauthAccessToken: CF
            } = WF;
            if (!SF && !CF) return null;
            try {
              return AS.credential(SF, CF)
            } catch (AF) {
              return null
            }
          }
        }
        AS.GOOGLE_SIGN_IN_METHOD = "google.com", AS.PROVIDER_ID = "google.com";
        class uS extends WS {
          constructor() {
            super("github.com")
          }
          static credential(FF) {
            return BW._fromParams({
              providerId: uS.PROVIDER_ID,
              signInMethod: uS.GITHUB_SIGN_IN_METHOD,
              accessToken: FF
            })
          }
          static credentialFromResult(FF) {
            return uS.credentialFromTaggedObject(FF)
          }
          static credentialFromError(FF) {
            return uS.credentialFromTaggedObject(FF.customData || {})
          }
          static credentialFromTaggedObject(FF) {
            let {
              _tokenResponse: WF
            } = FF;
            if (!WF || !("oauthAccessToken" in WF)) return null;
            if (!WF.oauthAccessToken) return null;
            try {
              return uS.credential(WF.oauthAccessToken)
            } catch (SF) {
              return null
            }
          }
        }
        uS.GITHUB_SIGN_IN_METHOD = "github.com", uS.PROVIDER_ID = "github.com";
        class hS extends fW {
          constructor(FF, WF) {
            super(FF, FF), this.pendingToken = WF
          }
          _getIdTokenResponse(FF) {
            return UW(FF, this.buildRequest())
          }
          _linkToIdToken(FF, WF) {
            const SF = this.buildRequest();
            return SF.idToken = WF, UW(FF, SF)
          }
          _getReauthenticationResolver(FF) {
            const WF = this.buildRequest();
            return WF.autoCreate = !1, UW(FF, WF)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(FF) {
            const WF = "string" === typeof FF ? JSON.parse(FF) : FF,
              {
                providerId: SF,
                signInMethod: CF,
                pendingToken: AF
              } = WF;
            return SF && CF && AF && SF === CF ? new hS(SF, AF) : null
          }
          static _create(FF, WF) {
            return new hS(FF, WF)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class bC extends FS {
          constructor(FF) {
            LF(FF.startsWith("saml."), "argument-error"), super(FF)
          }
          static credentialFromResult(FF) {
            return bC.samlCredentialFromTaggedObject(FF)
          }
          static credentialFromError(FF) {
            return bC.samlCredentialFromTaggedObject(FF.customData || {})
          }
          static credentialFromJSON(FF) {
            const WF = hS.fromJSON(FF);
            return LF(WF, "argument-error"), WF
          }
          static samlCredentialFromTaggedObject(FF) {
            let {
              _tokenResponse: WF
            } = FF;
            if (!WF) return null;
            const {
              pendingToken: SF,
              providerId: CF
            } = WF;
            if (!SF || !CF) return null;
            try {
              return hS._create(CF, SF)
            } catch (AF) {
              return null
            }
          }
        }
        class dS extends WS {
          constructor() {
            super("twitter.com")
          }
          static credential(FF, WF) {
            return BW._fromParams({
              providerId: dS.PROVIDER_ID,
              signInMethod: dS.TWITTER_SIGN_IN_METHOD,
              oauthToken: FF,
              oauthTokenSecret: WF
            })
          }
          static credentialFromResult(FF) {
            return dS.credentialFromTaggedObject(FF)
          }
          static credentialFromError(FF) {
            return dS.credentialFromTaggedObject(FF.customData || {})
          }
          static credentialFromTaggedObject(FF) {
            let {
              _tokenResponse: WF
            } = FF;
            if (!WF) return null;
            const {
              oauthAccessToken: SF,
              oauthTokenSecret: CF
            } = WF;
            if (!SF || !CF) return null;
            try {
              return dS.credential(SF, CF)
            } catch (AF) {
              return null
            }
          }
        }
        async function PS(FF, WF) {
          return sF(FF, "POST", "/v1/accounts:signUp", IF(FF, WF))
        }
        dS.TWITTER_SIGN_IN_METHOD = "twitter.com", dS.PROVIDER_ID = "twitter.com";
        class RS {
          constructor(FF) {
            this.user = FF.user, this.providerId = FF.providerId, this._tokenResponse = FF._tokenResponse, this.operationType = FF.operationType
          }
          static async _fromIdTokenResponse(FF, WF, SF) {
            let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const AF = await CW._fromIdTokenResponse(FF, SF, CF),
              uF = iC(SF);
            return new RS({
              user: AF,
              providerId: uF,
              _tokenResponse: SF,
              operationType: WF
            })
          }
          static async _forOperation(FF, WF, SF) {
            await FF._updateTokensIfNecessary(SF, !0);
            const CF = iC(SF);
            return new RS({
              user: FF,
              providerId: CF,
              _tokenResponse: SF,
              operationType: WF
            })
          }
        }

        function iC(FF) {
          return FF.providerId ? FF.providerId : "phoneNumber" in FF ? "phone" : null
        }
        async function eS(FF) {
          var WF;
          const SF = YW(FF);
          if (await SF._initializationPromise, null === (WF = SF.currentUser) || void 0 === WF ? void 0 : WF.isAnonymous) return new RS({
            user: SF.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const CF = await PS(SF, {
              returnSecureToken: !0
            }),
            AF = await RS._fromIdTokenResponse(SF, "signIn", CF, !0);
          return await SF._updateCurrentUser(AF.user), AF
        }
        class ES extends CF.f {
          constructor(FF, WF, SF, CF) {
            var AF;
            super(WF.code, WF.message), this.operationType = SF, this.user = CF, Object.setPrototypeOf(this, ES.prototype), this.customData = {
              appName: FF.name,
              tenantId: null !== (AF = FF.tenantId) && void 0 !== AF ? AF : void 0,
              _serverResponse: WF.customData._serverResponse,
              operationType: SF
            }
          }
          static _fromErrorAndOperation(FF, WF, SF, CF) {
            return new ES(FF, WF, SF, CF)
          }
        }

        function QS(FF, WF, SF, CF) {
          return ("reauthenticate" === WF ? SF._getReauthenticationResolver(FF) : SF._getIdTokenResponse(FF)).catch((SF => {
            if ("auth/multi-factor-auth-required" === SF.code) throw ES._fromErrorAndOperation(FF, SF, WF, CF);
            throw SF
          }))
        }

        function rC(FF) {
          return new Set(FF.map((FF => {
            let {
              providerId: WF
            } = FF;
            return WF
          })).filter((FF => !!FF)))
        }
        async function gC(FF, WF) {
          const SF = (0, CF.J)(FF);
          await TS(!0, SF, WF);
          const {
            providerUserInfo: AF
          } = await async function(FF, WF) {
            return fF(FF, "POST", "/v1/accounts:update", WF)
          }(SF.auth, {
            idToken: await SF.getIdToken(),
            deleteProvider: [WF]
          }), uF = rC(AF || []);
          return SF.providerData = SF.providerData.filter((FF => uF.has(FF.providerId))), uF.has("phone") || (SF.phoneNumber = null), await SF.auth._persistUserIfCurrent(SF), SF
        }
        async function tC(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const CF = await vW(FF, WF._linkToIdToken(FF.auth, await FF.getIdToken()), SF);
          return RS._forOperation(FF, "link", CF)
        }
        async function TS(FF, WF, SF) {
          await lF(WF);
          const CF = !1 === FF ? "provider-already-linked" : "no-such-provider";
          LF(rC(WF.providerData).has(SF) === FF, WF.auth, CF)
        }
        async function aC(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: CF
          } = FF, AF = "reauthenticate";
          try {
            const uF = await vW(FF, QS(CF, AF, WF, FF), SF);
            LF(uF.idToken, CF, "internal-error");
            const hF = jW(uF.idToken);
            LF(hF, CF, "internal-error");
            const {
              sub: bW
            } = hF;
            return LF(FF.uid === bW, CF, "user-mismatch"), RS._forOperation(FF, AF, uF)
          } catch (uF) {
            throw "auth/user-not-found" === (null === uF || void 0 === uF ? void 0 : uF.code) && kW(CF, "user-mismatch"), uF
          }
        }
        async function kC(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const CF = "signIn",
            AF = await QS(FF, CF, WF),
            uF = await RS._fromIdTokenResponse(FF, CF, AF);
          return SF || await FF._updateCurrentUser(uF.user), uF
        }
        async function qC(FF, WF) {
          return kC(YW(FF), WF)
        }
        async function VS(FF, WF) {
          const SF = (0, CF.J)(FF);
          return await TS(!1, SF, WF.providerId), tC(SF, WF)
        }
        async function NS(FF, WF) {
          return aC((0, CF.J)(FF), WF)
        }
        async function DS(FF, WF) {
          const SF = YW(FF),
            CF = await async function(FF, WF) {
              return sF(FF, "POST", "/v1/accounts:signInWithCustomToken", IF(FF, WF))
            }(SF, {
              token: WF,
              returnSecureToken: !0
            }), AF = await RS._fromIdTokenResponse(SF, "signIn", CF);
          return await SF._updateCurrentUser(AF.user), AF
        }
        class LS {
          constructor(FF, WF) {
            this.factorId = FF, this.uid = WF.mfaEnrollmentId, this.enrollmentTime = new Date(WF.enrolledAt).toUTCString(), this.displayName = WF.displayName
          }
          static _fromServerResponse(FF, WF) {
            return "phoneInfo" in WF ? mC._fromServerResponse(FF, WF) : "totpInfo" in WF ? OS._fromServerResponse(FF, WF) : kW(FF, "internal-error")
          }
        }
        class mC extends LS {
          constructor(FF) {
            super("phone", FF), this.phoneNumber = FF.phoneInfo
          }
          static _fromServerResponse(FF, WF) {
            return new mC(WF)
          }
        }
        class OS extends LS {
          constructor(FF) {
            super("totp", FF)
          }
          static _fromServerResponse(FF, WF) {
            return new OS(WF)
          }
        }

        function xC(FF, WF, SF) {
          var CF;
          LF((null === (CF = SF.url) || void 0 === CF ? void 0 : CF.length) > 0, FF, "invalid-continue-uri"), LF("undefined" === typeof SF.dynamicLinkDomain || SF.dynamicLinkDomain.length > 0, FF, "invalid-dynamic-link-domain"), WF.continueUrl = SF.url, WF.dynamicLinkDomain = SF.dynamicLinkDomain, WF.canHandleCodeInApp = SF.handleCodeInApp, SF.iOS && (LF(SF.iOS.bundleId.length > 0, FF, "missing-ios-bundle-id"), WF.iOSBundleId = SF.iOS.bundleId), SF.android && (LF(SF.android.packageName.length > 0, FF, "missing-android-pkg-name"), WF.androidInstallApp = SF.android.installApp, WF.androidMinimumVersionCode = SF.android.minimumVersion, WF.androidPackageName = SF.android.packageName)
        }
        async function ZS(FF, WF, SF) {
          var CF;
          const AF = YW(FF),
            uF = {
              requestType: "PASSWORD_RESET",
              email: WF,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (CF = AF._getRecaptchaConfig()) || void 0 === CF ? void 0 : CF.emailPasswordEnabled) {
            const FF = await xS(AF, uF, "getOobCode", !0);
            SF && xC(AF, FF, SF), await KW(AF, FF)
          } else SF && xC(AF, uF, SF), await KW(AF, uF).catch((async FF => {
            if ("auth/missing-recaptcha-token" !== FF.code) return Promise.reject(FF);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const FF = await xS(AF, uF, "getOobCode", !0);
              SF && xC(AF, FF, SF), await KW(AF, FF)
            }
          }))
        }
        async function oS(FF, WF, SF) {
          await yS((0, CF.J)(FF), {
            oobCode: WF,
            newPassword: SF
          })
        }
        async function YS(FF, WF) {
          await async function(FF, WF) {
            return fF(FF, "POST", "/v1/accounts:update", IF(FF, WF))
          }((0, CF.J)(FF), {
            oobCode: WF
          })
        }
        async function MS(FF, WF) {
          const SF = (0, CF.J)(FF),
            AF = await yS(SF, {
              oobCode: WF
            }),
            uF = AF.requestType;
          switch (LF(uF, SF, "internal-error"), uF) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              LF(AF.newEmail, SF, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              LF(AF.mfaInfo, SF, "internal-error");
            default:
              LF(AF.email, SF, "internal-error")
          }
          let hF = null;
          return AF.mfaInfo && (hF = LS._fromServerResponse(YW(SF), AF.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === AF.requestType ? AF.newEmail : AF.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === AF.requestType ? AF.email : AF.newEmail) || null,
              multiFactorInfo: hF
            },
            operation: uF
          }
        }
        async function cC(FF, WF) {
          const {
            data: SF
          } = await MS((0, CF.J)(FF), WF);
          return SF.email
        }
        async function GS(FF, WF, SF) {
          var CF;
          const AF = YW(FF),
            uF = {
              returnSecureToken: !0,
              email: WF,
              password: SF,
              clientType: "CLIENT_TYPE_WEB"
            };
          let hF;
          if (null === (CF = AF._getRecaptchaConfig()) || void 0 === CF ? void 0 : CF.emailPasswordEnabled) {
            const FF = await xS(AF, uF, "signUpPassword");
            hF = PS(AF, FF)
          } else hF = PS(AF, uF).catch((async FF => {
            if ("auth/missing-recaptcha-token" === FF.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const FF = await xS(AF, uF, "signUpPassword");
              return PS(AF, FF)
            }
            return Promise.reject(FF)
          }));
          const bW = await hF.catch((FF => Promise.reject(FF))),
            dF = await RS._fromIdTokenResponse(AF, "signIn", bW);
          return await AF._updateCurrentUser(dF.user), dF
        }

        function zC(FF, WF, SF) {
          return qC((0, CF.J)(FF), lW.credential(WF, SF))
        }
        async function IS(FF, WF, SF) {
          var CF;
          const AF = YW(FF),
            uF = {
              requestType: "EMAIL_SIGNIN",
              email: WF,
              clientType: "CLIENT_TYPE_WEB"
            };

          function hF(FF, WF) {
            LF(WF.handleCodeInApp, AF, "argument-error"), WF && xC(AF, FF, WF)
          }
          if (null === (CF = AF._getRecaptchaConfig()) || void 0 === CF ? void 0 : CF.emailPasswordEnabled) {
            const FF = await xS(AF, uF, "getOobCode", !0);
            hF(FF, SF), await wW(AF, FF)
          } else hF(uF, SF), await wW(AF, uF).catch((async FF => {
            if ("auth/missing-recaptcha-token" !== FF.code) return Promise.reject(FF);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const FF = await xS(AF, uF, "getOobCode", !0);
              hF(FF, SF), await wW(AF, FF)
            }
          }))
        }

        function fS(FF, WF) {
          const SF = JW.parseLink(WF);
          return "EMAIL_SIGNIN" === (null === SF || void 0 === SF ? void 0 : SF.operation)
        }
        async function yC(FF, WF, SF) {
          const AF = (0, CF.J)(FF),
            uF = lW.credentialWithLink(WF, SF || xW());
          return LF(uF._tenantId === (AF.tenantId || null), AF, "tenant-id-mismatch"), qC(AF, uF)
        }
        async function sS(FF, WF) {
          const SF = {
              identifier: WF,
              continueUri: ZF() ? xW() : "http://localhost"
            },
            {
              signinMethods: AF
            } = await async function(FF, WF) {
              return fF(FF, "POST", "/v1/accounts:createAuthUri", IF(FF, WF))
            }((0, CF.J)(FF), SF);
          return AF || []
        }
        async function nS(FF, WF) {
          const SF = (0, CF.J)(FF),
            AF = {
              requestType: "VERIFY_EMAIL",
              idToken: await FF.getIdToken()
            };
          WF && xC(SF.auth, AF, WF);
          const {
            email: uF
          } = await async function(FF, WF) {
            return HW(FF, WF)
          }(SF.auth, AF);
          uF !== FF.email && await FF.reload()
        }
        async function HS(FF, WF, SF) {
          const AF = (0, CF.J)(FF),
            uF = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await FF.getIdToken(),
              newEmail: WF
            };
          SF && xC(AF.auth, uF, SF);
          const {
            email: hF
          } = await async function(FF, WF) {
            return HW(FF, WF)
          }(AF.auth, uF);
          hF !== FF.email && await FF.reload()
        }
        async function KS(FF, WF) {
          let {
            displayName: SF,
            photoURL: AF
          } = WF;
          if (void 0 === SF && void 0 === AF) return;
          const uF = (0, CF.J)(FF),
            hF = {
              idToken: await uF.getIdToken(),
              displayName: SF,
              photoUrl: AF,
              returnSecureToken: !0
            },
            bW = await vW(uF, async function(FF, WF) {
              return fF(FF, "POST", "/v1/accounts:update", WF)
            }(uF.auth, hF));
          uF.displayName = bW.displayName || null, uF.photoURL = bW.photoUrl || null;
          const dF = uF.providerData.find((FF => {
            let {
              providerId: WF
            } = FF;
            return "password" === WF
          }));
          dF && (dF.displayName = uF.displayName, dF.photoURL = uF.photoURL), await uF._updateTokensIfNecessary(bW)
        }

        function wS(FF, WF) {
          return US((0, CF.J)(FF), WF, null)
        }

        function XS(FF, WF) {
          return US((0, CF.J)(FF), null, WF)
        }
        async function US(FF, WF, SF) {
          const {
            auth: CF
          } = FF, AF = {
            idToken: await FF.getIdToken(),
            returnSecureToken: !0
          };
          WF && (AF.email = WF), SF && (AF.password = SF);
          const uF = await vW(FF, sW(CF, AF));
          await FF._updateTokensIfNecessary(uF, !0)
        }
        class BS {
          constructor(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = FF, this.providerId = WF, this.profile = SF
          }
        }
        class jC extends BS {
          constructor(FF, WF, SF, CF) {
            super(FF, WF, SF), this.username = CF
          }
        }
        class vC extends BS {
          constructor(FF, WF) {
            super(FF, "facebook.com", WF)
          }
        }
        class JS extends jC {
          constructor(FF, WF) {
            super(FF, "github.com", WF, "string" === typeof(null === WF || void 0 === WF ? void 0 : WF.login) ? null === WF || void 0 === WF ? void 0 : WF.login : null)
          }
        }
        class pS extends BS {
          constructor(FF, WF) {
            super(FF, "google.com", WF)
          }
        }
        class lS extends jC {
          constructor(FF, WF, SF) {
            super(FF, "twitter.com", WF, SF)
          }
        }

        function FC(FF) {
          const {
            user: WF,
            _tokenResponse: SF
          } = FF;
          return WF.isAnonymous && !SF ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(FF) {
            var WF, SF;
            if (!FF) return null;
            const {
              providerId: CF
            } = FF, AF = FF.rawUserInfo ? JSON.parse(FF.rawUserInfo) : {}, uF = FF.isNewUser || "identitytoolkit#SignupNewUserResponse" === FF.kind;
            if (!CF && (null === FF || void 0 === FF ? void 0 : FF.idToken)) {
              const CF = null === (SF = null === (WF = jW(FF.idToken)) || void 0 === WF ? void 0 : WF.firebase) || void 0 === SF ? void 0 : SF.sign_in_provider;
              if (CF) return new BS(uF, "anonymous" !== CF && "custom" !== CF ? CF : null)
            }
            if (!CF) return null;
            switch (CF) {
              case "facebook.com":
                return new vC(uF, AF);
              case "github.com":
                return new JS(uF, AF);
              case "google.com":
                return new pS(uF, AF);
              case "twitter.com":
                return new lS(uF, AF, FF.screenName || null);
              case "custom":
              case "anonymous":
                return new BS(uF, null);
              default:
                return new BS(uF, CF, AF)
            }
          }(SF)
        }

        function WC(FF, WF) {
          return (0, CF.J)(FF).setPersistence(WF)
        }

        function SC(FF) {
          return YW(FF).initializeRecaptchaConfig()
        }

        function CC(FF, WF, SF, AF) {
          return (0, CF.J)(FF).onIdTokenChanged(WF, SF, AF)
        }

        function AC(FF, WF, SF) {
          return (0, CF.J)(FF).beforeAuthStateChanged(WF, SF)
        }

        function uC(FF, WF, SF, AF) {
          return (0, CF.J)(FF).onAuthStateChanged(WF, SF, AF)
        }

        function hC(FF) {
          (0, CF.J)(FF).useDeviceLanguage()
        }

        function bA(FF, WF) {
          return (0, CF.J)(FF).updateCurrentUser(WF)
        }

        function dC(FF) {
          return (0, CF.J)(FF).signOut()
        }
        async function PC(FF) {
          return (0, CF.J)(FF).delete()
        }
        class RC {
          constructor(FF, WF, SF) {
            this.type = FF, this.credential = WF, this.auth = SF
          }
          static _fromIdtoken(FF, WF) {
            return new RC("enroll", FF, WF)
          }
          static _fromMfaPendingCredential(FF) {
            return new RC("signin", FF)
          }
          toJSON() {
            const FF = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [FF]: this.credential
              }
            }
          }
          static fromJSON(FF) {
            var WF, SF;
            if (null === FF || void 0 === FF ? void 0 : FF.multiFactorSession) {
              if (null === (WF = FF.multiFactorSession) || void 0 === WF ? void 0 : WF.pendingCredential) return RC._fromMfaPendingCredential(FF.multiFactorSession.pendingCredential);
              if (null === (SF = FF.multiFactorSession) || void 0 === SF ? void 0 : SF.idToken) return RC._fromIdtoken(FF.multiFactorSession.idToken)
            }
            return null
          }
        }
        class iA {
          constructor(FF, WF, SF) {
            this.session = FF, this.hints = WF, this.signInResolver = SF
          }
          static _fromError(FF, WF) {
            const SF = YW(FF),
              CF = WF.customData._serverResponse,
              AF = (CF.mfaInfo || []).map((FF => LS._fromServerResponse(SF, FF)));
            LF(CF.mfaPendingCredential, SF, "internal-error");
            const uF = RC._fromMfaPendingCredential(CF.mfaPendingCredential);
            return new iA(uF, AF, (async FF => {
              const AF = await FF._process(SF, uF);
              delete CF.mfaInfo, delete CF.mfaPendingCredential;
              const hF = Object.assign(Object.assign({}, CF), {
                idToken: AF.idToken,
                refreshToken: AF.refreshToken
              });
              switch (WF.operationType) {
                case "signIn":
                  const FF = await RS._fromIdTokenResponse(SF, WF.operationType, hF);
                  return await SF._updateCurrentUser(FF.user), FF;
                case "reauthenticate":
                  return LF(WF.user, SF, "internal-error"), RS._forOperation(WF.user, WF.operationType, hF);
                default:
                  kW(SF, "internal-error")
              }
            }))
          }
          async resolveSignIn(FF) {
            const WF = FF;
            return this.signInResolver(WF)
          }
        }

        function eC(FF, WF) {
          var SF;
          const AF = (0, CF.J)(FF),
            uF = WF;
          return LF(WF.customData.operationType, AF, "argument-error"), LF(null === (SF = uF.customData._serverResponse) || void 0 === SF ? void 0 : SF.mfaPendingCredential, AF, "argument-error"), iA._fromError(AF, uF)
        }
        class EC {
          constructor(FF) {
            this.user = FF, this.enrolledFactors = [], FF._onReload((WF => {
              WF.mfaInfo && (this.enrolledFactors = WF.mfaInfo.map((WF => LS._fromServerResponse(FF.auth, WF))))
            }))
          }
          static _fromUser(FF) {
            return new EC(FF)
          }
          async getSession() {
            return RC._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(FF, WF) {
            const SF = FF,
              CF = await this.getSession(),
              AF = await vW(this.user, SF._process(this.user.auth, CF, WF));
            return await this.user._updateTokensIfNecessary(AF), this.user.reload()
          }
          async unenroll(FF) {
            const WF = "string" === typeof FF ? FF : FF.uid,
              SF = await this.user.getIdToken();
            try {
              const FF = await vW(this.user, (CF = this.user.auth, AF = {
                idToken: SF,
                mfaEnrollmentId: WF
              }, fF(CF, "POST", "/v2/accounts/mfaEnrollment:withdraw", IF(CF, AF))));
              this.enrolledFactors = this.enrolledFactors.filter((FF => {
                let {
                  uid: SF
                } = FF;
                return SF !== WF
              })), await this.user._updateTokensIfNecessary(FF), await this.user.reload()
            } catch (uF) {
              throw uF
            }
            var CF, AF
          }
        }
        const QC = new WeakMap;

        function rA(FF) {
          const WF = (0, CF.J)(FF);
          return QC.has(WF) || QC.set(WF, EC._fromUser(WF)), QC.get(WF)
        }
        const gA = "__sak";
        class tA {
          constructor(FF, WF) {
            this.storageRetriever = FF, this.type = WF
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(gA, "1"), this.storage.removeItem(gA), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (FF) {
              return Promise.resolve(!1)
            }
          }
          _set(FF, WF) {
            return this.storage.setItem(FF, JSON.stringify(WF)), Promise.resolve()
          }
          _get(FF) {
            const WF = this.storage.getItem(FF);
            return Promise.resolve(WF ? JSON.parse(WF) : null)
          }
          _remove(FF) {
            return this.storage.removeItem(FF), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class TC extends tA {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (FF, WF) => this.onStorageEvent(FF, WF), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const FF = (0, CF.K)();
              return eW(FF) || TW(FF)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (FF) {
                return !1
              }
            }(), this.fallbackToPolling = aS(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(FF) {
            for (const WF of Object.keys(this.listeners)) {
              const SF = this.storage.getItem(WF),
                CF = this.localCache[WF];
              SF !== CF && FF(WF, CF, SF)
            }
          }
          onStorageEvent(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!FF.key) return void this.forAllChangedKeys(((FF, WF, SF) => {
              this.notifyListeners(FF, SF)
            }));
            const SF = FF.key;
            if (WF ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const CF = this.storage.getItem(SF);
              if (FF.newValue !== CF) null !== FF.newValue ? this.storage.setItem(SF, FF.newValue) : this.storage.removeItem(SF);
              else if (this.localCache[SF] === FF.newValue && !WF) return
            }
            const AF = () => {
                const FF = this.storage.getItem(SF);
                (WF || this.localCache[SF] !== FF) && this.notifyListeners(SF, FF)
              },
              uF = this.storage.getItem(SF);
            (0, CF.R)() && 10 === document.documentMode && uF !== FF.newValue && FF.newValue !== FF.oldValue ? setTimeout(AF, 10) : AF()
          }
          notifyListeners(FF, WF) {
            this.localCache[FF] = WF;
            const SF = this.listeners[FF];
            if (SF)
              for (const CF of Array.from(SF)) CF(WF ? JSON.parse(WF) : WF)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((FF, WF, SF) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: FF,
                  oldValue: WF,
                  newValue: SF
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
          _addListener(FF, WF) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[FF] || (this.listeners[FF] = new Set, this.localCache[FF] = this.storage.getItem(FF)), this.listeners[FF].add(WF)
          }
          _removeListener(FF, WF) {
            this.listeners[FF] && (this.listeners[FF].delete(WF), 0 === this.listeners[FF].size && delete this.listeners[FF]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(FF, WF) {
            await super._set(FF, WF), this.localCache[FF] = JSON.stringify(WF)
          }
          async _get(FF) {
            const WF = await super._get(FF);
            return this.localCache[FF] = JSON.stringify(WF), WF
          }
          async _remove(FF) {
            await super._remove(FF), delete this.localCache[FF]
          }
        }
        TC.type = "LOCAL";
        const aA = TC;
        class kA extends tA {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(FF, WF) {}
          _removeListener(FF, WF) {}
        }
        kA.type = "SESSION";
        const qA = kA;
        class VC {
          constructor(FF) {
            this.eventTarget = FF, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(FF) {
            const WF = this.receivers.find((WF => WF.isListeningto(FF)));
            if (WF) return WF;
            const SF = new VC(FF);
            return this.receivers.push(SF), SF
          }
          isListeningto(FF) {
            return this.eventTarget === FF
          }
          async handleEvent(FF) {
            const WF = FF,
              {
                eventId: SF,
                eventType: CF,
                data: AF
              } = WF.data,
              uF = this.handlersMap[CF];
            if (!(null === uF || void 0 === uF ? void 0 : uF.size)) return;
            WF.ports[0].postMessage({
              status: "ack",
              eventId: SF,
              eventType: CF
            });
            const hF = Array.from(uF).map((async FF => FF(WF.origin, AF))),
              bW = await
            function(FF) {
              return Promise.all(FF.map((async FF => {
                try {
                  return {
                    fulfilled: !0,
                    value: await FF
                  }
                } catch (WF) {
                  return {
                    fulfilled: !1,
                    reason: WF
                  }
                }
              })))
            }(hF);
            WF.ports[0].postMessage({
              status: "done",
              eventId: SF,
              eventType: CF,
              response: bW
            })
          }
          _subscribe(FF, WF) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[FF] || (this.handlersMap[FF] = new Set), this.handlersMap[FF].add(WF)
          }
          _unsubscribe(FF, WF) {
            this.handlersMap[FF] && WF && this.handlersMap[FF].delete(WF), WF && 0 !== this.handlersMap[FF].size || delete this.handlersMap[FF], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function NC() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            SF = "";
          for (let CF = 0; CF < WF; CF++) SF += Math.floor(10 * Math.random());
          return FF + SF
        }
        VC.receivers = [];
        class DC {
          constructor(FF) {
            this.target = FF, this.handlers = new Set
          }
          removeMessageHandler(FF) {
            FF.messageChannel && (FF.messageChannel.port1.removeEventListener("message", FF.KD), FF.messageChannel.port1.close()), this.handlers.delete(FF)
          }
          async _send(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const CF = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!CF) throw new Error("connection_unavailable");
            let AF, uF;
            return new Promise(((hF, bW) => {
              const dF = NC("", 20);
              CF.port1.start();
              const PF = setTimeout((() => {
                bW(new Error("unsupported_event"))
              }), SF);
              uF = {
                messageChannel: CF,
                KD(FF) {
                  const WF = FF;
                  if (WF.data.eventId === dF) switch (WF.data.status) {
                    case "ack":
                      clearTimeout(PF), AF = setTimeout((() => {
                        bW(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(AF), hF(WF.data.response);
                      break;
                    default:
                      clearTimeout(PF), clearTimeout(AF), bW(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(uF), CF.port1.addEventListener("message", uF.KD), this.target.postMessage({
                eventType: FF,
                eventId: dF,
                data: WF
              }, [CF.port2])
            })).finally((() => {
              uF && this.removeMessageHandler(uF)
            }))
          }
        }

        function LC() {
          return window
        }

        function mA() {
          return "undefined" !== typeof LC().WorkerGlobalScope && "function" === typeof LC().importScripts
        }
        const OC = "firebaseLocalStorageDb",
          xA = "firebaseLocalStorage",
          ZC = "fbase_key";
        class oC {
          constructor(FF) {
            this.request = FF
          }
          toPromise() {
            return new Promise(((FF, WF) => {
              this.request.addEventListener("success", (() => {
                FF(this.request.result)
              })), this.request.addEventListener("error", (() => {
                WF(this.request.error)
              }))
            }))
          }
        }

        function YC(FF, WF) {
          return FF.transaction([xA], WF ? "readwrite" : "readonly").objectStore(xA)
        }

        function MC() {
          const FF = indexedDB.open(OC, 1);
          return new Promise(((WF, SF) => {
            FF.addEventListener("error", (() => {
              SF(FF.error)
            })), FF.addEventListener("upgradeneeded", (() => {
              const WF = FF.result;
              try {
                WF.createObjectStore(xA, {
                  keyPath: ZC
                })
              } catch (CF) {
                SF(CF)
              }
            })), FF.addEventListener("success", (async () => {
              const SF = FF.result;
              SF.objectStoreNames.contains(xA) ? WF(SF) : (SF.close(), await
                function() {
                  const FF = indexedDB.deleteDatabase(OC);
                  return new oC(FF).toPromise()
                }(), WF(await MC()))
            }))
          }))
        }
        async function cA(FF, WF, SF) {
          const CF = YC(FF, !0).put({
            [ZC]: WF,
            value: SF
          });
          return new oC(CF).toPromise()
        }

        function GC(FF, WF) {
          const SF = YC(FF, !0).delete(WF);
          return new oC(SF).toPromise()
        }
        class zA {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await MC()), this.db
          }
          async _withRetries(FF) {
            let WF = 0;
            for (;;) try {
              const WF = await this._openDb();
              return await FF(WF)
            } catch (SF) {
              if (WF++ > 3) throw SF;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return mA() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = VC._getInstance(mA() ? self : null), this.receiver._subscribe("keyChanged", (async (FF, WF) => ({
              keyProcessed: (await this._poll()).includes(WF.key)
            }))), this.receiver._subscribe("ping", (async (FF, WF) => ["keyChanged"]))
          }
          async initializeSender() {
            var FF, WF;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (FF) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new DC(this.activeServiceWorker);
            const SF = await this.sender._send("ping", {}, 800);
            SF && (null === (FF = SF[0]) || void 0 === FF ? void 0 : FF.fulfilled) && (null === (WF = SF[0]) || void 0 === WF ? void 0 : WF.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(FF) {
            if (this.sender && this.activeServiceWorker && function() {
                var FF;
                return (null === (FF = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === FF ? void 0 : FF.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: FF
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (WF) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const FF = await MC();
              return await cA(FF, gA, "1"), await GC(FF, gA), !0
            } catch (FF) {}
            return !1
          }
          async _withPendingWrite(FF) {
            this.pendingWrites++;
            try {
              await FF()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(FF, WF) {
            return this._withPendingWrite((async () => (await this._withRetries((SF => cA(SF, FF, WF))), this.localCache[FF] = WF, this.notifyServiceWorker(FF))))
          }
          async _get(FF) {
            const WF = await this._withRetries((WF => async function(FF, WF) {
              const SF = YC(FF, !1).get(WF),
                CF = await new oC(SF).toPromise();
              return void 0 === CF ? null : CF.value
            }(WF, FF)));
            return this.localCache[FF] = WF, WF
          }
          async _remove(FF) {
            return this._withPendingWrite((async () => (await this._withRetries((WF => GC(WF, FF))), delete this.localCache[FF], this.notifyServiceWorker(FF))))
          }
          async _poll() {
            const FF = await this._withRetries((FF => {
              const WF = YC(FF, !1).getAll();
              return new oC(WF).toPromise()
            }));
            if (!FF) return [];
            if (0 !== this.pendingWrites) return [];
            const WF = [],
              SF = new Set;
            for (const {
                fbase_key: CF,
                value: AF
              }
              of FF) SF.add(CF), JSON.stringify(this.localCache[CF]) !== JSON.stringify(AF) && (this.notifyListeners(CF, AF), WF.push(CF));
            for (const CF of Object.keys(this.localCache)) this.localCache[CF] && !SF.has(CF) && (this.notifyListeners(CF, null), WF.push(CF));
            return WF
          }
          notifyListeners(FF, WF) {
            this.localCache[FF] = WF;
            const SF = this.listeners[FF];
            if (SF)
              for (const CF of Array.from(SF)) CF(WF)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(FF, WF) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[FF] || (this.listeners[FF] = new Set, this._get(FF)), this.listeners[FF].add(WF)
          }
          _removeListener(FF, WF) {
            this.listeners[FF] && (this.listeners[FF].delete(WF), 0 === this.listeners[FF].size && delete this.listeners[FF]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        zA.type = "LOCAL";
        const IC = zA;
        const fC = 1e12;
        class yA {
          constructor(FF) {
            this.auth = FF, this.counter = fC, this._widgets = new Map
          }
          render(FF, WF) {
            const SF = this.counter;
            return this._widgets.set(SF, new sC(FF, this.auth.name, WF || {})), this.counter++, SF
          }
          reset(FF) {
            var WF;
            const SF = FF || fC;
            null === (WF = this._widgets.get(SF)) || void 0 === WF || WF.delete(), this._widgets.delete(SF)
          }
          getResponse(FF) {
            var WF;
            const SF = FF || fC;
            return (null === (WF = this._widgets.get(SF)) || void 0 === WF ? void 0 : WF.getResponse()) || ""
          }
          async execute(FF) {
            var WF;
            const SF = FF || fC;
            return null === (WF = this._widgets.get(SF)) || void 0 === WF || WF.execute(), ""
          }
        }
        class sC {
          constructor(FF, WF, SF) {
            this.params = SF, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const CF = "string" === typeof FF ? document.getElementById(FF) : FF;
            LF(CF, "argument-error", {
              appName: WF
            }), this.container = CF, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(FF) {
                const WF = [],
                  SF = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let CF = 0; CF < FF; CF++) WF.push(SF.charAt(Math.floor(Math.random() * SF.length)));
                return WF.join("")
              }(50);
              const {
                callback: FF,
                "expired-callback": WF
              } = this.params;
              if (FF) try {
                FF(this.responseToken)
              } catch (SF) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, WF) try {
                  WF()
                } catch (SF) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const nC = mS("rcb"),
          HC = new YF(3e4, 6e4);
        class KC {
          constructor() {
            var FF;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (FF = LC().grecaptcha) || void 0 === FF ? void 0 : FF.render)
          }
          load(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return LF(function(FF) {
              return FF.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(FF)
            }(WF), FF, "argument-error"), this.shouldResolveImmediately(WF) && VW(LC().grecaptcha) ? Promise.resolve(LC().grecaptcha) : new Promise(((SF, AF) => {
              const uF = LC().setTimeout((() => {
                AF(qW(FF, "network-request-failed"))
              }), HC.get());
              LC()[nC] = () => {
                LC().clearTimeout(uF), delete LC()[nC];
                const CF = LC().grecaptcha;
                if (!CF || !VW(CF)) return void AF(qW(FF, "internal-error"));
                const hF = CF.render;
                CF.render = (FF, WF) => {
                  const SF = hF(FF, WF);
                  return this.counter++, SF
                }, this.hostLanguage = WF, SF(CF)
              };
              LW(`https://www.google.com/recaptcha/api.js??${(0,CF.ab)({onload:nC,render:"explicit",hl:WF})}`).catch((() => {
                clearTimeout(uF), AF(qW(FF, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(FF) {
            var WF;
            return !!(null === (WF = LC().grecaptcha) || void 0 === WF ? void 0 : WF.render) && (FF === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class wC {
          async load(FF) {
            return new yA(FF)
          }
          clearedOneInstance() {}
        }
        const XC = "recaptcha",
          UC = {
            theme: "light",
            type: "image"
          };
        class BC {
          constructor(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, UC),
              SF = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = WF, this.type = XC, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = YW(SF), this.isInvisible = "invisible" === this.parameters.size, LF("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const CF = "string" === typeof FF ? document.getElementById(FF) : FF;
            LF(CF, this.auth, "argument-error"), this.container = CF, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new wC : new KC, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const FF = await this.render(),
              WF = this.getAssertedRecaptcha(),
              SF = WF.getResponse(FF);
            return SF || new Promise((SF => {
              const CF = FF => {
                FF && (this.tokenChangeListeners.delete(CF), SF(FF))
              };
              this.tokenChangeListeners.add(CF), this.isInvisible && WF.execute(FF)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (FF) {
              return Promise.reject(FF)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((FF => {
              throw this.renderPromise = null, FF
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((FF => {
              this.container.removeChild(FF)
            }))
          }
          validateStartingState() {
            LF(!this.parameters.sitekey, this.auth, "argument-error"), LF(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), LF("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(FF) {
            return WF => {
              if (this.tokenChangeListeners.forEach((FF => FF(WF))), "function" === typeof FF) FF(WF);
              else if ("string" === typeof FF) {
                const SF = LC()[FF];
                "function" === typeof SF && SF(WF)
              }
            }
          }
          assertNotDestroyed() {
            LF(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let FF = this.container;
              if (!this.isInvisible) {
                const WF = document.createElement("div");
                FF.appendChild(WF), FF = WF
              }
              this.widgetId = this.getAssertedRecaptcha().render(FF, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            LF(ZF() && !mA(), this.auth, "internal-error"), await
            function() {
              let FF = null;
              return new Promise((WF => {
                "complete" !== document.readyState ? (FF = () => WF(), window.addEventListener("load", FF)) : WF()
              })).catch((WF => {
                throw FF && window.removeEventListener("load", FF), WF
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const FF = await async function(FF) {
              return (await fF(FF, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            LF(FF, this.auth, "internal-error"), this.parameters.sitekey = FF
          }
          getAssertedRecaptcha() {
            return LF(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class jA {
          constructor(FF, WF) {
            this.verificationId = FF, this.onConfirmation = WF
          }
          confirm(FF) {
            const WF = vS._fromVerification(this.verificationId, FF);
            return this.onConfirmation(WF)
          }
        }
        async function vA(FF, WF, SF) {
          const AF = YW(FF),
            uF = await lC(AF, WF, (0, CF.J)(SF));
          return new jA(uF, (FF => qC(AF, FF)))
        }
        async function JC(FF, WF, SF) {
          const AF = (0, CF.J)(FF);
          await TS(!1, AF, "phone");
          const uF = await lC(AF.auth, WF, (0, CF.J)(SF));
          return new jA(uF, (FF => VS(AF, FF)))
        }
        async function pC(FF, WF, SF) {
          const AF = (0, CF.J)(FF),
            uF = await lC(AF.auth, WF, (0, CF.J)(SF));
          return new jA(uF, (FF => NS(AF, FF)))
        }
        async function lC(FF, WF, SF) {
          var CF;
          const AF = await SF.verify();
          try {
            let uF;
            if (LF("string" === typeof AF, FF, "argument-error"), LF(SF.type === XC, FF, "argument-error"), uF = "string" === typeof WF ? {
                phoneNumber: WF
              } : WF, "session" in uF) {
              const WF = uF.session;
              if ("phoneNumber" in uF) {
                LF("enroll" === WF.type, FF, "internal-error");
                const SF = await
                function(FF, WF) {
                  return fF(FF, "POST", "/v2/accounts/mfaEnrollment:start", IF(FF, WF))
                }(FF, {
                  idToken: WF.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: uF.phoneNumber,
                    recaptchaToken: AF
                  }
                });
                return SF.phoneSessionInfo.sessionInfo
              } {
                LF("signin" === WF.type, FF, "internal-error");
                const SF = (null === (CF = uF.multiFactorHint) || void 0 === CF ? void 0 : CF.uid) || uF.multiFactorUid;
                LF(SF, FF, "missing-multi-factor-info");
                const hF = await
                function(FF, WF) {
                  return fF(FF, "POST", "/v2/accounts/mfaSignIn:start", IF(FF, WF))
                }(FF, {
                  mfaPendingCredential: WF.credential,
                  mfaEnrollmentId: SF,
                  phoneSignInInfo: {
                    recaptchaToken: AF
                  }
                });
                return hF.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: WF
              } = await async function(FF, WF) {
                return fF(FF, "POST", "/v1/accounts:sendVerificationCode", IF(FF, WF))
              }(FF, {
                phoneNumber: uF.phoneNumber,
                recaptchaToken: AF
              });
              return WF
            }
          } finally {
            SF._reset()
          }
        }
        async function FA(FF, WF) {
          await tC((0, CF.J)(FF), WF)
        }
        class WA {
          constructor(FF) {
            this.providerId = WA.PROVIDER_ID, this.auth = YW(FF)
          }
          verifyPhoneNumber(FF, WF) {
            return lC(this.auth, FF, (0, CF.J)(WF))
          }
          static credential(FF, WF) {
            return vS._fromVerification(FF, WF)
          }
          static credentialFromResult(FF) {
            const WF = FF;
            return WA.credentialFromTaggedObject(WF)
          }
          static credentialFromError(FF) {
            return WA.credentialFromTaggedObject(FF.customData || {})
          }
          static credentialFromTaggedObject(FF) {
            let {
              _tokenResponse: WF
            } = FF;
            if (!WF) return null;
            const {
              phoneNumber: SF,
              temporaryProof: CF
            } = WF;
            return SF && CF ? vS._fromTokenResponse(SF, CF) : null
          }
        }

        function SA(FF, WF) {
          return WF ? uW(WF) : (LF(FF._popupRedirectResolver, FF, "argument-error"), FF._popupRedirectResolver)
        }
        WA.PROVIDER_ID = "phone", WA.PHONE_SIGN_IN_METHOD = "phone";
        class CA extends fW {
          constructor(FF) {
            super("custom", "custom"), this.params = FF
          }
          _getIdTokenResponse(FF) {
            return UW(FF, this._buildIdpRequest())
          }
          _linkToIdToken(FF, WF) {
            return UW(FF, this._buildIdpRequest(WF))
          }
          _getReauthenticationResolver(FF) {
            return UW(FF, this._buildIdpRequest())
          }
          _buildIdpRequest(FF) {
            const WF = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return FF && (WF.idToken = FF), WF
          }
        }

        function AA(FF) {
          return kC(FF.auth, new CA(FF), FF.bypassAuthState)
        }

        function uA(FF) {
          const {
            auth: WF,
            user: SF
          } = FF;
          return LF(SF, WF, "internal-error"), aC(SF, new CA(FF), FF.bypassAuthState)
        }
        async function hA(FF) {
          const {
            auth: WF,
            user: SF
          } = FF;
          return LF(SF, WF, "internal-error"), tC(SF, new CA(FF), FF.bypassAuthState)
        }
        class bu {
          constructor(FF, WF, SF, CF) {
            let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = FF, this.resolver = SF, this.user = CF, this.bypassAuthState = AF, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(WF) ? WF : [WF]
          }
          execute() {
            return new Promise((async (FF, WF) => {
              this.pendingPromise = {
                resolve: FF,
                reject: WF
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (SF) {
                this.reject(SF)
              }
            }))
          }
          async onAuthEvent(FF) {
            const {
              urlResponse: WF,
              sessionId: SF,
              postBody: CF,
              tenantId: AF,
              error: uF,
              type: hF
            } = FF;
            if (uF) return void this.reject(uF);
            const bW = {
              auth: this.auth,
              requestUri: WF,
              sessionId: SF,
              tenantId: AF || void 0,
              postBody: CF || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(hF)(bW))
            } catch (dF) {
              this.reject(dF)
            }
          }
          onError(FF) {
            this.reject(FF)
          }
          getIdpTask(FF) {
            switch (FF) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return AA;
              case "linkViaPopup":
              case "linkViaRedirect":
                return hA;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return uA;
              default:
                kW(this.auth, "internal-error")
            }
          }
          resolve(FF) {
            OF(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(FF), this.unregisterAndCleanUp()
          }
          reject(FF) {
            OF(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(FF), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const dA = new YF(2e3, 1e4);
        async function PA(FF, WF, SF) {
          const CF = YW(FF);
          NF(FF, WF, FS);
          const AF = SA(CF, SF);
          return new eA(CF, "signInViaPopup", WF, AF).executeNotNull()
        }
        async function RA(FF, WF, SF) {
          const AF = (0, CF.J)(FF);
          NF(AF.auth, WF, FS);
          const uF = SA(AF.auth, SF);
          return new eA(AF.auth, "reauthViaPopup", WF, uF, AF).executeNotNull()
        }
        async function iu(FF, WF, SF) {
          const AF = (0, CF.J)(FF);
          NF(AF.auth, WF, FS);
          const uF = SA(AF.auth, SF);
          return new eA(AF.auth, "linkViaPopup", WF, uF, AF).executeNotNull()
        }
        class eA extends bu {
          constructor(FF, WF, SF, CF, AF) {
            super(FF, WF, CF, AF), this.provider = SF, this.authWindow = null, this.pollId = null, eA.currentPopupAction && eA.currentPopupAction.cancel(), eA.currentPopupAction = this
          }
          async executeNotNull() {
            const FF = await this.execute();
            return LF(FF, this.auth, "internal-error"), FF
          }
          async onExecution() {
            OF(1 === this.filter.length, "Popup operations only handle one event");
            const FF = NC();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], FF), this.authWindow.associatedEvent = FF, this.resolver._originValidation(this.auth).catch((FF => {
              this.reject(FF)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (FF => {
              FF || this.reject(qW(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var FF;
            return (null === (FF = this.authWindow) || void 0 === FF ? void 0 : FF.associatedEvent) || null
          }
          cancel() {
            this.reject(qW(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, eA.currentPopupAction = null
          }
          pollUserCancellation() {
            const FF = () => {
              var WF, SF;
              (null === (SF = null === (WF = this.authWindow) || void 0 === WF ? void 0 : WF.window) || void 0 === SF ? void 0 : SF.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(qW(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(FF, dA.get())
            };
            FF()
          }
        }
        eA.currentPopupAction = null;
        const EA = "pendingRedirect",
          QA = new Map;
        class ru extends bu {
          constructor(FF, WF) {
            super(FF, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], WF, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let FF = QA.get(this.auth._key());
            if (!FF) {
              try {
                const WF = await async function(FF, WF) {
                  const SF = au(WF),
                    CF = TA(FF);
                  if (!await CF._isAvailable()) return !1;
                  const AF = "true" === await CF._get(SF);
                  return await CF._remove(SF), AF
                }(this.resolver, this.auth) ? await super.execute() : null;
                FF = () => Promise.resolve(WF)
              } catch (WF) {
                FF = () => Promise.reject(WF)
              }
              QA.set(this.auth._key(), FF)
            }
            return this.bypassAuthState || QA.set(this.auth._key(), (() => Promise.resolve(null))), FF()
          }
          async onAuthEvent(FF) {
            if ("signInViaRedirect" === FF.type) return super.onAuthEvent(FF);
            if ("unknown" !== FF.type) {
              if (FF.eventId) {
                const WF = await this.auth._redirectUserForId(FF.eventId);
                if (WF) return this.user = WF, super.onAuthEvent(FF);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function gu(FF, WF) {
          return TA(FF)._set(au(WF), "true")
        }

        function tu(FF, WF) {
          QA.set(FF._key(), WF)
        }

        function TA(FF) {
          return uW(FF._redirectPersistence)
        }

        function au(FF) {
          return dW(EA, FF.config.apiKey, FF.name)
        }

        function ku(FF, WF, SF) {
          return async function(FF, WF, SF) {
            const CF = YW(FF);
            NF(FF, WF, FS), await CF._initializationPromise;
            const AF = SA(CF, SF);
            return await gu(AF, CF), AF._openRedirect(CF, WF, "signInViaRedirect")
          }(FF, WF, SF)
        }

        function qu(FF, WF, SF) {
          return async function(FF, WF, SF) {
            const AF = (0, CF.J)(FF);
            NF(AF.auth, WF, FS), await AF.auth._initializationPromise;
            const uF = SA(AF.auth, SF);
            await gu(uF, AF.auth);
            const hF = await LA(AF);
            return uF._openRedirect(AF.auth, WF, "reauthViaRedirect", hF)
          }(FF, WF, SF)
        }

        function VA(FF, WF, SF) {
          return async function(FF, WF, SF) {
            const AF = (0, CF.J)(FF);
            NF(AF.auth, WF, FS), await AF.auth._initializationPromise;
            const uF = SA(AF.auth, SF);
            await TS(!1, AF, WF.providerId), await gu(uF, AF.auth);
            const hF = await LA(AF);
            return uF._openRedirect(AF.auth, WF, "linkViaRedirect", hF)
          }(FF, WF, SF)
        }
        async function NA(FF, WF) {
          return await YW(FF)._initializationPromise, DA(FF, WF, !1)
        }
        async function DA(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const CF = YW(FF),
            AF = SA(CF, WF),
            uF = new ru(CF, AF, SF),
            hF = await uF.execute();
          return hF && !SF && (delete hF.user._redirectEventId, await CF._persistUserIfCurrent(hF.user), await CF._setRedirectUser(null, WF)), hF
        }
        async function LA(FF) {
          const WF = NC(`${FF.uid}:::`);
          return FF._redirectEventId = WF, await FF.auth._setRedirectUser(FF), await FF.auth._persistUserIfCurrent(FF), WF
        }
        class mu {
          constructor(FF) {
            this.auth = FF, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(FF) {
            this.consumers.add(FF), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, FF) && (this.sendToConsumer(this.queuedRedirectEvent, FF), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(FF) {
            this.consumers.delete(FF)
          }
          onEvent(FF) {
            if (this.hasEventBeenHandled(FF)) return !1;
            let WF = !1;
            return this.consumers.forEach((SF => {
              this.isEventForConsumer(FF, SF) && (WF = !0, this.sendToConsumer(FF, SF), this.saveEventToCache(FF))
            })), this.hasHandledPotentialRedirect || ! function(FF) {
              switch (FF.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return xu(FF);
                default:
                  return !1
              }
            }(FF) || (this.hasHandledPotentialRedirect = !0, WF || (this.queuedRedirectEvent = FF, WF = !0)), WF
          }
          sendToConsumer(FF, WF) {
            var SF;
            if (FF.error && !xu(FF)) {
              const CF = (null === (SF = FF.error.code) || void 0 === SF ? void 0 : SF.split("auth/")[1]) || "internal-error";
              WF.onError(qW(this.auth, CF))
            } else WF.onAuthEvent(FF)
          }
          isEventForConsumer(FF, WF) {
            const SF = null === WF.eventId || !!FF.eventId && FF.eventId === WF.eventId;
            return WF.filter.includes(FF.type) && SF
          }
          hasEventBeenHandled(FF) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(OA(FF))
          }
          saveEventToCache(FF) {
            this.cachedEventUids.add(OA(FF)), this.lastProcessedEventTime = Date.now()
          }
        }

        function OA(FF) {
          return [FF.type, FF.eventId, FF.sessionId, FF.tenantId].filter((FF => FF)).join("-")
        }

        function xu(FF) {
          let {
            type: WF,
            error: SF
          } = FF;
          return "unknown" === WF && "auth/no-auth-event" === (null === SF || void 0 === SF ? void 0 : SF.code)
        }
        const ZA = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          oA = /^https?/;
        async function YA(FF) {
          if (FF.config.emulator) return;
          const {
            authorizedDomains: WF
          } = await async function(FF) {
            return fF(FF, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(FF);
          for (const CF of WF) try {
            if (MA(CF)) return
          } catch (SF) {}
          kW(FF, "unauthorized-domain")
        }

        function MA(FF) {
          const WF = xW(),
            {
              protocol: SF,
              hostname: CF
            } = new URL(WF);
          if (FF.startsWith("chrome-extension://")) {
            const AF = new URL(FF);
            return "" === AF.hostname && "" === CF ? "chrome-extension:" === SF && FF.replace("chrome-extension://", "") === WF.replace("chrome-extension://", "") : "chrome-extension:" === SF && AF.hostname === CF
          }
          if (!oA.test(SF)) return !1;
          if (ZA.test(FF)) return CF === FF;
          const AF = FF.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + AF + "|" + AF + ")$", "i").test(CF)
        }
        const cu = new YF(3e4, 6e4);

        function GA() {
          const FF = LC().___jsl;
          if (null === FF || void 0 === FF ? void 0 : FF.H)
            for (const WF of Object.keys(FF.H))
              if (FF.H[WF].r = FF.H[WF].r || [], FF.H[WF].L = FF.H[WF].L || [], FF.H[WF].r = [...FF.H[WF].L], FF.CP)
                for (let SF = 0; SF < FF.CP.length; SF++) FF.CP[SF] = null
        }
        let zu = null;

        function IA(FF) {
          return zu = zu || function(FF) {
            return new Promise(((WF, SF) => {
              var CF, AF, uF;

              function hF() {
                GA(), gapi.load("gapi.iframes", {
                  callback: () => {
                    WF(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    GA(), SF(qW(FF, "network-request-failed"))
                  },
                  timeout: cu.get()
                })
              }
              if (null === (AF = null === (CF = LC().gapi) || void 0 === CF ? void 0 : CF.iframes) || void 0 === AF ? void 0 : AF.Iframe) WF(gapi.iframes.getContext());
              else {
                if (!(null === (uF = LC().gapi) || void 0 === uF ? void 0 : uF.load)) {
                  const WF = mS("iframefcb");
                  return LC()[WF] = () => {
                    gapi.load ? hF() : SF(qW(FF, "network-request-failed"))
                  }, LW(`https://apis.google.com/js/api.js?onload=${WF}`).catch((FF => SF(FF)))
                }
                hF()
              }
            })).catch((FF => {
              throw zu = null, FF
            }))
          }(FF), zu
        }
        const fA = new YF(5e3, 15e3),
          yu = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          sA = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function nA(FF) {
          const WF = FF.config;
          LF(WF.authDomain, FF, "auth-domain-config-required");
          const SF = WF.emulator ? MF(WF, "emulator/auth/iframe") : `https://${FF.config.authDomain}/__/auth/iframe`,
            uF = {
              apiKey: WF.apiKey,
              appName: FF.name,
              v: AF.h
            },
            hF = sA.get(FF.config.apiHost);
          hF && (uF.eid = hF);
          const bW = FF._getFrameworks();
          return bW.length && (uF.fw = bW.join(",")), `${SF}?${(0,CF.ab)(uF).slice(1)}`
        }
        const HA = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class KA {
          constructor(FF) {
            this.window = FF, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (FF) {}
          }
        }

        function wA(FF, WF, SF) {
          let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const hF = Math.max((window.screen.availHeight - uF) / 2, 0).toString(),
            bW = Math.max((window.screen.availWidth - AF) / 2, 0).toString();
          let dF = "";
          const PF = Object.assign(Object.assign({}, HA), {
              width: AF.toString(),
              height: uF.toString(),
              top: hF,
              left: bW
            }),
            RF = (0, CF.K)().toLowerCase();
          SF && (dF = EW(RF) ? "_blank" : SF), iS(RF) && (WF = WF || "http://localhost", PF.scrollbars = "yes");
          const iW = Object.entries(PF).reduce(((FF, WF) => {
            let [SF, CF] = WF;
            return `${FF}${SF}=${CF},`
          }), "");
          if (function() {
              var FF;
              return TW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.K)()) && !!(null === (FF = window.navigator) || void 0 === FF ? void 0 : FF.standalone)
            }(RF) && "_self" !== dF) return function(FF, WF) {
            const SF = document.createElement("a");
            SF.href = FF, SF.target = WF;
            const CF = document.createEvent("MouseEvent");
            CF.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), SF.dispatchEvent(CF)
          }(WF || "", dF), new KA(null);
          const eF = window.open(WF || "", dF, iW);
          LF(eF, FF, "popup-blocked");
          try {
            eF.focus()
          } catch (EF) {}
          return new KA(eF)
        }
        const XA = "__/auth/handler",
          UA = "emulator/auth/handler",
          BA = encodeURIComponent("fac");
        async function ju(FF, WF, SF, uF, hF, bW) {
            LF(FF.config.authDomain, FF, "auth-domain-config-required"), LF(FF.config.apiKey, FF, "invalid-api-key");
            const dF = {
              apiKey: FF.config.apiKey,
              appName: FF.name,
              authType: SF,
              redirectUrl: uF,
              v: AF.h,
              eventId: hF
            };
            if (WF instanceof FS) {
              WF.setDefaultLanguage(FF.languageCode), dF.providerId = WF.providerId || "", (0, CF.O)(WF.getCustomParameters()) || (dF.customParameters = JSON.stringify(WF.getCustomParameters()));
              for (const [FF, WF] of Object.entries(bW || {})) dF[FF] = WF
            }
            if (WF instanceof WS) {
              const FF = WF.getScopes().filter((FF => "" !== FF));
              FF.length > 0 && (dF.scopes = FF.join(","))
            }
            FF.tenantId && (dF.tid = FF.tenantId);
            const PF = dF;
            for (const CF of Object.keys(PF)) void 0 === PF[CF] && delete PF[CF];
            const RF = await FF._getAppCheckToken(),
              iW = RF ? `#${BA}=${encodeURIComponent(RF)}` : "";
            return `${function(FF){let{config:WF}=FF;if(!WF.emulator)return`
            https: //${WF.authDomain}/${XA}`;return MF(WF,UA)}(FF)}?${(0,CF.ab)(PF).slice(1)}${iW}`}const vu="webStorageSupport";const JA=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qA,this._completeRedirectFn=DA,this._overrideRedirectResult=tu}async _openPopup(FF,WF,SF,CF){var AF;OF(null===(AF=this.eventManagers[FF._key()])||void 0===AF?void 0:AF.manager,"_initialize() not called before _openPopup()");return wA(FF,await ju(FF,WF,SF,xW(),CF),NC())}async _openRedirect(FF,WF,SF,CF){await this._originValidation(FF);return function(FF){LC().location.href=FF}(await ju(FF,WF,SF,xW(),CF)),new Promise((()=>{}))}_initialize(FF){const WF=FF._key();if(this.eventManagers[WF]){const{manager:FF,promise:SF}=this.eventManagers[WF];return FF?Promise.resolve(FF):(OF(SF,"If manager is not set, promise should be"),SF)}const SF=this.initAndGetManager(FF);return this.eventManagers[WF]={promise:SF},SF.catch((()=>{delete this.eventManagers[WF]})),SF}async initAndGetManager(FF){const WF=await async function(FF){const WF=await IA(FF),SF=LC().gapi;return LF(SF,FF,"internal-error"),WF.open({where:document.body,url:nA(FF),messageHandlersFilter:SF.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yu,dontclear:!0},(WF=>new Promise((async(SF,CF)=>{await WF.restyle({setHideOnLeave:!1});const AF=qW(FF,"network-request-failed"),uF=LC().setTimeout((()=>{CF(AF)}),fA.get());function hF(){LC().clearTimeout(uF),SF(WF)}WF.ping(hF).then(hF,(()=>{CF(AF)}))}))))}(FF),SF=new mu(FF);return WF.register("authEvent",(WF=>{LF(null===WF||void 0===WF?void 0:WF.authEvent,FF,"invalid-auth-event");return{status:SF.onEvent(WF.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[FF._key()]={manager:SF},this.iframes[FF._key()]=WF,SF}_isIframeWebStorageSupported(FF,WF){this.iframes[FF._key()].send(vu,{type:vu},(SF=>{var CF;const AF=null===(CF=null===SF||void 0===SF?void 0:SF[0])||void 0===CF?void 0:CF[vu];void 0!==AF&&WF(!!AF),kW(FF,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(FF){const WF=FF._key();return this.originValidationPromises[WF]||(this.originValidationPromises[WF]=YA(FF)),this.originValidationPromises[WF]}get _shouldInitProactively(){return aS()||eW()||TW()}};class pA{constructor(FF){this.factorId=FF}_process(FF,WF,SF){switch(WF.type){case"enroll":return this._finalizeEnroll(FF,WF.credential,SF);case"signin":return this._finalizeSignIn(FF,WF.credential);default:return mW("unexpected MultiFactorSessionType")}}}class lA extends pA{constructor(FF){super("phone"),this.credential=FF}static _fromCredential(FF){return new lA(FF)}_finalizeEnroll(FF,WF,SF){return function(FF,WF){return fF(FF,"POST","/v2/accounts/mfaEnrollment:finalize",IF(FF,WF))}(FF,{idToken:WF,displayName:SF,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(FF,WF){return function(FF,WF){return fF(FF,"POST","/v2/accounts/mfaSignIn:finalize",IF(FF,WF))}(FF,{mfaPendingCredential:WF,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Fu{constructor(){}static assertion(FF){return lA._fromCredential(FF)}}Fu.FACTOR_ID="phone";class Wu{static assertionForEnrollment(FF,WF){return Su._fromSecret(FF,WF)}static assertionForSignIn(FF,WF){return Su._fromEnrollmentId(FF,WF)}static async generateSecret(FF){const WF=FF;LF("undefined"!==typeof WF.auth,"internal-error");const SF=await(CF=WF.auth,AF={idToken:WF.credential,totpEnrollmentInfo:{}},fF(CF,"POST","/v2/accounts/mfaEnrollment:start",IF(CF,AF)));var CF,AF;return Cu._fromStartTotpMfaEnrollmentResponse(SF,WF.auth)}}Wu.FACTOR_ID="totp";class Su extends pA{constructor(FF,WF,SF){super("totp"),this.otp=FF,this.enrollmentId=WF,this.secret=SF}static _fromSecret(FF,WF){return new Su(WF,void 0,FF)}static _fromEnrollmentId(FF,WF){return new Su(WF,FF)}async _finalizeEnroll(FF,WF,SF){return LF("undefined"!==typeof this.secret,FF,"argument-error"),function(FF,WF){return fF(FF,"POST","/v2/accounts/mfaEnrollment:finalize",IF(FF,WF))}(FF,{idToken:WF,displayName:SF,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(FF,WF){LF(void 0!==this.enrollmentId&&void 0!==this.otp,FF,"argument-error");const SF={verificationCode:this.otp};return function(FF,WF){return fF(FF,"POST","/v2/accounts/mfaSignIn:finalize",IF(FF,WF))}(FF,{mfaPendingCredential:WF,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:SF})}}class Cu{constructor(FF,WF,SF,CF,AF,uF,hF){this.sessionInfo=uF,this.auth=hF,this.secretKey=FF,this.hashingAlgorithm=WF,this.codeLength=SF,this.codeIntervalSeconds=CF,this.enrollmentCompletionDeadline=AF}static _fromStartTotpMfaEnrollmentResponse(FF,WF){return new Cu(FF.totpSessionInfo.sharedSecretKey,FF.totpSessionInfo.hashingAlgorithm,FF.totpSessionInfo.verificationCodeLength,FF.totpSessionInfo.periodSec,new Date(FF.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),FF.totpSessionInfo.sessionInfo,WF)}_makeTotpVerificationInfo(FF){return{sessionInfo:this.sessionInfo,verificationCode:FF}}generateQrCodeUrl(FF,WF){var SF;let CF=!1;return(Au(FF)||Au(WF))&&(CF=!0),CF&&(Au(FF)&&(FF=(null===(SF=this.auth.currentUser)||void 0===SF?void 0:SF.email)||"unknownuser"),Au(WF)&&(WF=this.auth.name)),`otpauth://totp/${WF}:${FF}?secret=${this.secretKey}&issuer=${WF}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Au(FF){return"undefined"===typeof FF||0===(null===FF||void 0===FF?void 0:FF.length)}var uu="@firebase/auth",hu="0.23.2";class bh{constructor(FF){this.auth=FF,this.internalListeners=new Map}getUid(){var FF;return this.assertAuthConfigured(),(null===(FF=this.auth.currentUser)||void 0===FF?void 0:FF.uid)||null}async getToken(FF){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(FF)}}addAuthTokenListener(FF){if(this.assertAuthConfigured(),this.internalListeners.has(FF))return;const WF=this.auth.onIdTokenChanged((WF=>{FF((null===WF||void 0===WF?void 0:WF.stsTokenManager.accessToken)||null)}));this.internalListeners.set(FF,WF),this.updateProactiveRefresh()}removeAuthTokenListener(FF){this.assertAuthConfigured();const WF=this.internalListeners.get(FF);WF&&(this.internalListeners.delete(FF),WF(),this.updateProactiveRefresh())}assertAuthConfigured(){LF(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const du=(0,CF.I)("authIdTokenMaxAge")||300;let Pu=null;const Ru=FF=>async WF=>{const SF=WF&&await WF.getIdTokenResult(),CF=SF&&((new Date).getTime()-Date.parse(SF.issuedAtTime))/1e3;if(CF&&CF>du)return;const AF=null===SF||void 0===SF?void 0:SF.token;Pu!==AF&&(Pu=AF,await fetch(FF,{method:AF?"POST":"DELETE",headers:AF?{Authorization:`Bearer ${AF}`}:{}}))};function ih(){let FF=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,AF.M)();const WF=(0,AF.B)(FF,"auth");if(WF.isInitialized())return WF.getImmediate();const SF=cS(FF,{popupRedirectResolver:JA,persistence:[IC,aA,qA]}),uF=(0,CF.I)("authTokenSyncURL");if(uF){const FF=Ru(uF);AC(SF,FF,(()=>FF(SF.currentUser))),CC(SF,(WF=>FF(WF)))}const hF=(0,CF.E)("auth");return hF&&GW(SF,`http://${hF}`),SF}var eu;eu="Browser",(0,AF.E)(new bW.e("auth",((FF,WF)=>{let{options:SF}=WF;const CF=FF.getProvider("app").getImmediate(),AF=FF.getProvider("heartbeat"),uF=FF.getProvider("app-check-internal"),{apiKey:hF,authDomain:bW}=CF.options;LF(hF&&!hF.includes(":"),"invalid-api-key",{appName:CF.name});const dF={apiKey:hF,authDomain:bW,clientPlatform:eu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kS(eu)},PF=new oW(CF,AF,uF,dF);return function(FF,WF){const SF=(null===WF||void 0===WF?void 0:WF.persistence)||[],CF=(Array.isArray(SF)?SF:[SF]).map(uW);(null===WF||void 0===WF?void 0:WF.errorMap)&&FF._updateErrorMap(WF.errorMap),FF._initializeWithPersistence(CF,null===WF||void 0===WF?void 0:WF.popupRedirectResolver)}(PF,SF),PF}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((FF,WF,SF)=>{FF.getProvider("auth-internal").initialize()}))),(0,AF.E)(new bW.e("auth-internal",(FF=>(FF=>new bh(FF))(YW(FF.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,AF.V)(uu,hu,function(FF){switch(FF){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(eu)),(0,AF.V)(uu,hu,"esm2017")}};Object.freeze(modules);for(const FF in modules)Object.freeze(modules[FF]);