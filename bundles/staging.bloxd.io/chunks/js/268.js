/*! For license information please see fqwnlq.268.d58cc67b.chunk.js.LICENSE.txt */
export const id = 268;
export const ids = [268];
export const modules = {
    40563: (SS, HS, gS) => {
        gS.r(HS), gS.d(HS, {
          ActionCodeOperation: () => kS,
          ActionCodeURL: () => mH,
          AuthCredential: () => WH,
          AuthErrorCodes: () => CS,
          EmailAuthCredential: () => FH,
          EmailAuthProvider: () => rH,
          FacebookAuthProvider: () => tg,
          FactorId: () => qS,
          GithubAuthProvider: () => Xg,
          GoogleAuthProvider: () => bg,
          OAuthCredential: () => TH,
          OAuthProvider: () => gg,
          OperationType: () => fS,
          PhoneAuthCredential: () => lH,
          PhoneAuthProvider: () => gb,
          PhoneMultiFactorGenerator: () => HX,
          ProviderId: () => uS,
          RecaptchaVerifier: () => ot,
          SAMLAuthProvider: () => Ng,
          SignInMethod: () => IS,
          TotpMultiFactorGenerator: () => gX,
          TotpSecret: () => bX,
          TwitterAuthProvider: () => qg,
          applyActionCode: () => Lg,
          beforeAuthStateChanged: () => bt,
          browserLocalPersistence: () => Qt,
          browserPopupRedirectResolver: () => eb,
          browserSessionPersistence: () => wt,
          checkActionCode: () => Yg,
          confirmPasswordReset: () => Eg,
          connectAuthEmulator: () => yH,
          createUserWithEmailAndPassword: () => yg,
          debugErrorMap: () => KS,
          deleteUser: () => ut,
          fetchSignInMethodsForEmail: () => Ug,
          getAdditionalUserInfo: () => St,
          getAuth: () => kX,
          getIdToken: () => FS,
          getIdTokenResult: () => RS,
          getMultiFactorResolver: () => kt,
          getRedirectResult: () => Zb,
          inMemoryPersistence: () => NH,
          indexedDBLocalPersistence: () => Wt,
          initializeAuth: () => AH,
          initializeRecaptchaConfig: () => gt,
          isSignInWithEmailLink: () => Wg,
          linkWithCredential: () => wg,
          linkWithPhoneNumber: () => et,
          linkWithPopup: () => kb,
          linkWithRedirect: () => hb,
          multiFactor: () => Gt,
          onAuthStateChanged: () => Xt,
          onIdTokenChanged: () => tt,
          parseActionCodeURL: () => eH,
          prodErrorMap: () => jS,
          reauthenticateWithCredential: () => hg,
          reauthenticateWithPhoneNumber: () => rt,
          reauthenticateWithPopup: () => fb,
          reauthenticateWithRedirect: () => wb,
          reload: () => SH,
          sendEmailVerification: () => pg,
          sendPasswordResetEmail: () => vg,
          sendSignInLinkToEmail: () => ig,
          setPersistence: () => Ht,
          signInAnonymously: () => kg,
          signInWithCredential: () => Dg,
          signInWithCustomToken: () => Zg,
          signInWithEmailAndPassword: () => Vg,
          signInWithEmailLink: () => zg,
          signInWithPhoneNumber: () => mt,
          signInWithPopup: () => Ib,
          signInWithRedirect: () => Db,
          signOut: () => qt,
          unlink: () => Gg,
          updateCurrentUser: () => Nt,
          updateEmail: () => Mg,
          updatePassword: () => Fg,
          updatePhoneNumber: () => Hb,
          updateProfile: () => Bg,
          useDeviceLanguage: () => xt,
          verifyBeforeUpdateEmail: () => sg,
          verifyPasswordResetCode: () => Ag
        });
        var tS = gS(40547),
          bS = gS(40539);

        function XS(SS, HS) {
          var gS = {};
          for (var tS in SS) Object.prototype.hasOwnProperty.call(SS, tS) && HS.indexOf(tS) < 0 && (gS[tS] = SS[tS]);
          if (null != SS && "function" === typeof Object.getOwnPropertySymbols) {
            var bS = 0;
            for (tS = Object.getOwnPropertySymbols(SS); bS < tS.length; bS++) HS.indexOf(tS[bS]) < 0 && Object.prototype.propertyIsEnumerable.call(SS, tS[bS]) && (gS[tS[bS]] = SS[tS[bS]])
          }
          return gS
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var xS = gS(40552),
          NS = gS(40541);
        const qS = {
            PHONE: "phone",
            TOTP: "totp"
          },
          uS = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          IS = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          fS = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          kS = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function aS() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const KS = function() {
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
          jS = aS,
          GS = new tS.d("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          CS = {
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
          nS = new xS.d("@firebase/auth");

        function PS(SS) {
          if (nS.logLevel <= xS.c.ERROR) {
            for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
            nS.error(`Auth (${bS.d}): ${SS}`, ...gS)
          }
        }

        function QS(SS) {
          for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
          throw ZS(SS, ...gS)
        }

        function DS(SS) {
          for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
          return ZS(SS, ...gS)
        }

        function wS(SS, HS, gS) {
          const bS = Object.assign(Object.assign({}, jS()), {
            [HS]: gS
          });
          return new tS.d("auth", "Firebase", bS).create(HS, {
            appName: SS.name
          })
        }

        function hS(SS, HS, gS) {
          if (!(HS instanceof gS)) throw gS.name !== HS.constructor.name && QS(SS, "argument-error"), wS(SS, "argument-error", `Type of ${HS.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function ZS(SS) {
          for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
          if ("string" !== typeof SS) {
            const HS = gS[0],
              tS = [...gS.slice(1)];
            return tS[0] && (tS[0].appName = SS.name), SS._errorFactory.create(HS, ...tS)
          }
          return GS.create(SS, ...gS)
        }

        function JS(SS, HS) {
          if (!SS) {
            for (var gS = arguments.length, tS = new Array(gS > 2 ? gS - 2 : 0), bS = 2; bS < gS; bS++) tS[bS - 2] = arguments[bS];
            throw ZS(HS, ...tS)
          }
        }

        function OS(SS) {
          const HS = "INTERNAL ASSERTION FAILED: " + SS;
          throw PS(HS), new Error(HS)
        }

        function dS(SS, HS) {
          SS || OS(HS)
        }

        function cS() {
          var SS;
          return "undefined" !== typeof self && (null === (SS = self.location) || void 0 === SS ? void 0 : SS.href) || ""
        }

        function vS() {
          return "http:" === ES() || "https:" === ES()
        }

        function ES() {
          var SS;
          return "undefined" !== typeof self && (null === (SS = self.location) || void 0 === SS ? void 0 : SS.protocol) || null
        }
        class LS {
          constructor(SS, HS) {
            this.shortDelay = SS, this.longDelay = HS, dS(HS > SS, "Short delay should be less than long delay!"), this.isMobile = (0, tS.X)() || (0, tS.Z)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (vS() || (0, tS.O)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function YS(SS, HS) {
          dS(SS.emulator, "Emulator should always be set here");
          const {
            url: gS
          } = SS.emulator;
          return HS ? `${gS}${HS.startsWith("/")?HS.slice(1):HS}` : gS
        }
        class AS {
          static initialize(SS, HS, gS) {
            this.fetchImpl = SS, HS && (this.headersImpl = HS), gS && (this.responseImpl = gS)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void OS("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void OS("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void OS("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const yS = {
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
          VS = new LS(3e4, 6e4);

        function iS(SS, HS) {
          return SS.tenantId && !HS.tenantId ? Object.assign(Object.assign({}, HS), {
            tenantId: SS.tenantId
          }) : HS
        }
        async function WS(SS, HS, gS, bS) {
          return zS(SS, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let XS = {},
              xS = {};
            bS && ("GET" === HS ? xS = bS : XS = {
              body: JSON.stringify(bS)
            });
            const NS = (0, tS.db)(Object.assign({
                key: SS.config.apiKey
              }, xS)).slice(1),
              qS = await SS._getAdditionalHeaders();
            return qS["Content-Type"] = "application/json", SS.languageCode && (qS["X-Firebase-Locale"] = SS.languageCode), AS.fetch()(pS(SS, SS.config.apiHost, gS, NS), Object.assign({
              method: HS,
              headers: qS,
              referrerPolicy: "no-referrer"
            }, XS))
          }))
        }
        async function zS(SS, HS, gS) {
          SS._canInitEmulator = !1;
          const bS = Object.assign(Object.assign({}, yS), HS);
          try {
            const HS = new sS(SS),
              tS = await Promise.race([gS(), HS.promise]);
            HS.clearNetworkTimeout();
            const XS = await tS.json();
            if ("needConfirmation" in XS) throw BS(SS, "account-exists-with-different-credential", XS);
            if (tS.ok && !("errorMessage" in XS)) return XS;
            {
              const HS = tS.ok ? XS.errorMessage : XS.error.message,
                [gS, xS] = HS.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === gS) throw BS(SS, "credential-already-in-use", XS);
              if ("EMAIL_EXISTS" === gS) throw BS(SS, "email-already-in-use", XS);
              if ("USER_DISABLED" === gS) throw BS(SS, "user-disabled", XS);
              const NS = bS[gS] || gS.toLowerCase().replace(/[_\s]+/g, "-");
              if (xS) throw wS(SS, NS, xS);
              QS(SS, NS)
            }
          } catch (XS) {
            if (XS instanceof tS.f) throw XS;
            QS(SS, "network-request-failed", {
              message: String(XS)
            })
          }
        }
        async function US(SS, HS, gS, tS) {
          let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const XS = await WS(SS, HS, gS, tS, bS);
          return "mfaPendingCredential" in XS && QS(SS, "multi-factor-auth-required", {
            _serverResponse: XS
          }), XS
        }

        function pS(SS, HS, gS, tS) {
          const bS = `${HS}${gS}?${tS}`;
          return SS.config.emulator ? YS(SS.config, bS) : `${SS.config.apiScheme}://${bS}`
        }
        class sS {
          constructor(SS) {
            this.auth = SS, this.timer = null, this.promise = new Promise(((SS, HS) => {
              this.timer = setTimeout((() => HS(DS(this.auth, "network-request-failed"))), VS.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function BS(SS, HS, gS) {
          const tS = {
            appName: SS.name
          };
          gS.email && (tS.email = gS.email), gS.phoneNumber && (tS.phoneNumber = gS.phoneNumber);
          const bS = DS(SS, HS, tS);
          return bS.customData._tokenResponse = gS, bS
        }

        function MS(SS) {
          if (SS) try {
            const HS = new Date(Number(SS));
            if (!isNaN(HS.getTime())) return HS.toUTCString()
          } catch (HS) {}
        }

        function FS(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, tS.J)(SS).getIdToken(HS)
        }
        async function RS(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const gS = (0, tS.J)(SS),
            bS = await gS.getIdToken(HS),
            XS = oS(bS);
          JS(XS && XS.exp && XS.auth_time && XS.iat, gS.auth, "internal-error");
          const xS = "object" === typeof XS.firebase ? XS.firebase : void 0,
            NS = null === xS || void 0 === xS ? void 0 : xS.sign_in_provider;
          return {
            claims: XS,
            token: bS,
            authTime: MS(TS(XS.auth_time)),
            issuedAtTime: MS(TS(XS.iat)),
            expirationTime: MS(TS(XS.exp)),
            signInProvider: NS || null,
            signInSecondFactor: (null === xS || void 0 === xS ? void 0 : xS.sign_in_second_factor) || null
          }
        }

        function TS(SS) {
          return 1e3 * Number(SS)
        }

        function oS(SS) {
          const [HS, gS, bS] = SS.split(".");
          if (void 0 === HS || void 0 === gS || void 0 === bS) return PS("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const SS = (0, tS.l)(gS);
            return SS ? JSON.parse(SS) : (PS("Failed to decode base64 JWT payload"), null)
          } catch (XS) {
            return PS("Caught error parsing JWT payload as JSON", null === XS || void 0 === XS ? void 0 : XS.toString()), null
          }
        }
        async function lS(SS, HS) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return HS;
          try {
            return await HS
          } catch (gS) {
            throw gS instanceof tS.f && function(SS) {
              let {
                code: HS
              } = SS;
              return "auth/user-disabled" === HS || "auth/user-token-expired" === HS
            }(gS) && SS.auth.currentUser === SS && await SS.auth.signOut(), gS
          }
        }
        class mS {
          constructor(SS) {
            this.user = SS, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(SS) {
            var HS;
            if (SS) {
              const SS = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), SS
            } {
              this.errorBackoff = 3e4;
              const SS = (null !== (HS = this.user.stsTokenManager.expirationTime) && void 0 !== HS ? HS : 0) - Date.now() - 3e5;
              return Math.max(0, SS)
            }
          }
          schedule() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const HS = this.getInterval(SS);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), HS)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (SS) {
              return void("auth/network-request-failed" === (null === SS || void 0 === SS ? void 0 : SS.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class eS {
          constructor(SS, HS) {
            this.createdAt = SS, this.lastLoginAt = HS, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = MS(this.lastLoginAt), this.creationTime = MS(this.createdAt)
          }
          _copy(SS) {
            this.createdAt = SS.createdAt, this.lastLoginAt = SS.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function rS(SS) {
          var HS;
          const gS = SS.auth,
            tS = await SS.getIdToken(),
            bS = await lS(SS, async function(SS, HS) {
              return WS(SS, "POST", "/v1/accounts:lookup", HS)
            }(gS, {
              idToken: tS
            }));
          JS(null === bS || void 0 === bS ? void 0 : bS.users.length, gS, "internal-error");
          const xS = bS.users[0];
          SS._notifyReloadListener(xS);
          const NS = (null === (HS = xS.providerUserInfo) || void 0 === HS ? void 0 : HS.length) ? xS.providerUserInfo.map((SS => {
            var {
              providerId: HS
            } = SS, gS = XS(SS, ["providerId"]);
            return {
              providerId: HS,
              uid: gS.rawId || "",
              displayName: gS.displayName || null,
              email: gS.email || null,
              phoneNumber: gS.phoneNumber || null,
              photoURL: gS.photoUrl || null
            }
          })) : [];
          const qS = (uS = SS.providerData, IS = NS, [...uS.filter((SS => !IS.some((HS => HS.providerId === SS.providerId)))), ...IS]);
          var uS, IS;
          const fS = SS.isAnonymous,
            kS = !(SS.email && xS.passwordHash) && !(null === qS || void 0 === qS ? void 0 : qS.length),
            aS = !!fS && kS,
            KS = {
              uid: xS.localId,
              displayName: xS.displayName || null,
              photoURL: xS.photoUrl || null,
              email: xS.email || null,
              emailVerified: xS.emailVerified || !1,
              phoneNumber: xS.phoneNumber || null,
              tenantId: xS.tenantId || null,
              providerData: qS,
              metadata: new eS(xS.createdAt, xS.lastLoginAt),
              isAnonymous: aS
            };
          Object.assign(SS, KS)
        }
        async function SH(SS) {
          const HS = (0, tS.J)(SS);
          await rS(HS), await HS.auth._persistUserIfCurrent(HS), HS.auth._notifyListenersIfCurrent(HS)
        }
        class HH {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(SS) {
            JS(SS.idToken, "internal-error"), JS("undefined" !== typeof SS.idToken, "internal-error"), JS("undefined" !== typeof SS.refreshToken, "internal-error");
            const HS = "expiresIn" in SS && "undefined" !== typeof SS.expiresIn ? Number(SS.expiresIn) : function(SS) {
              const HS = oS(SS);
              return JS(HS, "internal-error"), JS("undefined" !== typeof HS.exp, "internal-error"), JS("undefined" !== typeof HS.iat, "internal-error"), Number(HS.exp) - Number(HS.iat)
            }(SS.idToken);
            this.updateTokensAndExpiration(SS.idToken, SS.refreshToken, HS)
          }
          async getToken(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return JS(!this.accessToken || this.refreshToken, SS, "user-token-expired"), HS || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(SS, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(SS, HS) {
            const {
              accessToken: gS,
              refreshToken: bS,
              expiresIn: XS
            } = await async function(SS, HS) {
              const gS = await zS(SS, {}, (async () => {
                const gS = (0, tS.db)({
                    grant_type: "refresh_token",
                    refresh_token: HS
                  }).slice(1),
                  {
                    tokenApiHost: bS,
                    apiKey: XS
                  } = SS.config,
                  xS = pS(SS, bS, "/v1/token", `key=${XS}`),
                  NS = await SS._getAdditionalHeaders();
                return NS["Content-Type"] = "application/x-www-form-urlencoded", AS.fetch()(xS, {
                  method: "POST",
                  headers: NS,
                  body: gS
                })
              }));
              return {
                accessToken: gS.access_token,
                expiresIn: gS.expires_in,
                refreshToken: gS.refresh_token
              }
            }(SS, HS);
            this.updateTokensAndExpiration(gS, bS, Number(XS))
          }
          updateTokensAndExpiration(SS, HS, gS) {
            this.refreshToken = HS || null, this.accessToken = SS || null, this.expirationTime = Date.now() + 1e3 * gS
          }
          static fromJSON(SS, HS) {
            const {
              refreshToken: gS,
              accessToken: tS,
              expirationTime: bS
            } = HS, XS = new HH;
            return gS && (JS("string" === typeof gS, "internal-error", {
              appName: SS
            }), XS.refreshToken = gS), tS && (JS("string" === typeof tS, "internal-error", {
              appName: SS
            }), XS.accessToken = tS), bS && (JS("number" === typeof bS, "internal-error", {
              appName: SS
            }), XS.expirationTime = bS), XS
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(SS) {
            this.accessToken = SS.accessToken, this.refreshToken = SS.refreshToken, this.expirationTime = SS.expirationTime
          }
          _clone() {
            return Object.assign(new HH, this.toJSON())
          }
          _performRefresh() {
            return OS("not implemented")
          }
        }

        function gH(SS, HS) {
          JS("string" === typeof SS || "undefined" === typeof SS, "internal-error", {
            appName: HS
          })
        }
        class tH {
          constructor(SS) {
            var {
              uid: HS,
              auth: gS,
              stsTokenManager: tS
            } = SS, bS = XS(SS, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new mS(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = HS, this.auth = gS, this.stsTokenManager = tS, this.accessToken = tS.accessToken, this.displayName = bS.displayName || null, this.email = bS.email || null, this.emailVerified = bS.emailVerified || !1, this.phoneNumber = bS.phoneNumber || null, this.photoURL = bS.photoURL || null, this.isAnonymous = bS.isAnonymous || !1, this.tenantId = bS.tenantId || null, this.providerData = bS.providerData ? [...bS.providerData] : [], this.metadata = new eS(bS.createdAt || void 0, bS.lastLoginAt || void 0)
          }
          async getIdToken(SS) {
            const HS = await lS(this, this.stsTokenManager.getToken(this.auth, SS));
            return JS(HS, this.auth, "internal-error"), this.accessToken !== HS && (this.accessToken = HS, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), HS
          }
          getIdTokenResult(SS) {
            return RS(this, SS)
          }
          reload() {
            return SH(this)
          }
          _assign(SS) {
            this !== SS && (JS(this.uid === SS.uid, this.auth, "internal-error"), this.displayName = SS.displayName, this.photoURL = SS.photoURL, this.email = SS.email, this.emailVerified = SS.emailVerified, this.phoneNumber = SS.phoneNumber, this.isAnonymous = SS.isAnonymous, this.tenantId = SS.tenantId, this.providerData = SS.providerData.map((SS => Object.assign({}, SS))), this.metadata._copy(SS.metadata), this.stsTokenManager._assign(SS.stsTokenManager))
          }
          _clone(SS) {
            const HS = new tH(Object.assign(Object.assign({}, this), {
              auth: SS,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return HS.metadata._copy(this.metadata), HS
          }
          _onReload(SS) {
            JS(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = SS, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(SS) {
            this.reloadListener ? this.reloadListener(SS) : this.reloadUserInfo = SS
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gS = !1;
            SS.idToken && SS.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(SS), gS = !0), HS && await rS(this), await this.auth._persistUserIfCurrent(this), gS && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const SS = await this.getIdToken();
            return await lS(this, async function(SS, HS) {
              return WS(SS, "POST", "/v1/accounts:delete", HS)
            }(this.auth, {
              idToken: SS
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
              providerData: this.providerData.map((SS => Object.assign({}, SS))),
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
          static _fromJSON(SS, HS) {
            var gS, tS, bS, XS, xS, NS, qS, uS;
            const IS = null !== (gS = HS.displayName) && void 0 !== gS ? gS : void 0,
              fS = null !== (tS = HS.email) && void 0 !== tS ? tS : void 0,
              kS = null !== (bS = HS.phoneNumber) && void 0 !== bS ? bS : void 0,
              aS = null !== (XS = HS.photoURL) && void 0 !== XS ? XS : void 0,
              KS = null !== (xS = HS.tenantId) && void 0 !== xS ? xS : void 0,
              jS = null !== (NS = HS._redirectEventId) && void 0 !== NS ? NS : void 0,
              GS = null !== (qS = HS.createdAt) && void 0 !== qS ? qS : void 0,
              CS = null !== (uS = HS.lastLoginAt) && void 0 !== uS ? uS : void 0,
              {
                uid: nS,
                emailVerified: PS,
                isAnonymous: QS,
                providerData: DS,
                stsTokenManager: wS
              } = HS;
            JS(nS && wS, SS, "internal-error");
            const hS = HH.fromJSON(this.name, wS);
            JS("string" === typeof nS, SS, "internal-error"), gH(IS, SS.name), gH(fS, SS.name), JS("boolean" === typeof PS, SS, "internal-error"), JS("boolean" === typeof QS, SS, "internal-error"), gH(kS, SS.name), gH(aS, SS.name), gH(KS, SS.name), gH(jS, SS.name), gH(GS, SS.name), gH(CS, SS.name);
            const ZS = new tH({
              uid: nS,
              auth: SS,
              email: fS,
              emailVerified: PS,
              displayName: IS,
              isAnonymous: QS,
              photoURL: aS,
              phoneNumber: kS,
              tenantId: KS,
              stsTokenManager: hS,
              createdAt: GS,
              lastLoginAt: CS
            });
            return DS && Array.isArray(DS) && (ZS.providerData = DS.map((SS => Object.assign({}, SS)))), jS && (ZS._redirectEventId = jS), ZS
          }
          static async _fromIdTokenResponse(SS, HS) {
            let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const tS = new HH;
            tS.updateFromServerResponse(HS);
            const bS = new tH({
              uid: HS.localId,
              auth: SS,
              stsTokenManager: tS,
              isAnonymous: gS
            });
            return await rS(bS), bS
          }
        }
        const bH = new Map;

        function XH(SS) {
          dS(SS instanceof Function, "Expected a class definition");
          let HS = bH.get(SS);
          return HS ? (dS(HS instanceof SS, "Instance stored in cache mismatched with class"), HS) : (HS = new SS, bH.set(SS, HS), HS)
        }
        class xH {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(SS, HS) {
            this.storage[SS] = HS
          }
          async _get(SS) {
            const HS = this.storage[SS];
            return void 0 === HS ? null : HS
          }
          async _remove(SS) {
            delete this.storage[SS]
          }
          _addListener(SS, HS) {}
          _removeListener(SS, HS) {}
        }
        xH.type = "NONE";
        const NH = xH;

        function qH(SS, HS, gS) {
          return `firebase:${SS}:${HS}:${gS}`
        }
        class uH {
          constructor(SS, HS, gS) {
            this.persistence = SS, this.auth = HS, this.userKey = gS;
            const {
              config: tS,
              name: bS
            } = this.auth;
            this.fullUserKey = qH(this.userKey, tS.apiKey, bS), this.fullPersistenceKey = qH("persistence", tS.apiKey, bS), this.boundEventHandler = HS._onStorageEvent.bind(HS), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(SS) {
            return this.persistence._set(this.fullUserKey, SS.toJSON())
          }
          async getCurrentUser() {
            const SS = await this.persistence._get(this.fullUserKey);
            return SS ? tH._fromJSON(this.auth, SS) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(SS) {
            if (this.persistence === SS) return;
            const HS = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = SS, HS ? this.setCurrentUser(HS) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(SS, HS) {
            let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!HS.length) return new uH(XH(NH), SS, gS);
            const tS = (await Promise.all(HS.map((async SS => {
              if (await SS._isAvailable()) return SS
            })))).filter((SS => SS));
            let bS = tS[0] || XH(NH);
            const XS = qH(gS, SS.config.apiKey, SS.name);
            let xS = null;
            for (const uS of HS) try {
              const HS = await uS._get(XS);
              if (HS) {
                const gS = tH._fromJSON(SS, HS);
                uS !== bS && (xS = gS), bS = uS;
                break
              }
            } catch (qS) {}
            const NS = tS.filter((SS => SS._shouldAllowMigration));
            return bS._shouldAllowMigration && NS.length ? (bS = NS[0], xS && await bS._set(XS, xS.toJSON()), await Promise.all(HS.map((async SS => {
              if (SS !== bS) try {
                await SS._remove(XS)
              } catch (qS) {}
            }))), new uH(bS, SS, gS)) : new uH(bS, SS, gS)
          }
        }

        function IH(SS) {
          const HS = SS.toLowerCase();
          if (HS.includes("opera/") || HS.includes("opr/") || HS.includes("opios/")) return "Opera";
          if (KH(HS)) return "IEMobile";
          if (HS.includes("msie") || HS.includes("trident/")) return "IE";
          if (HS.includes("edge/")) return "Edge";
          if (fH(HS)) return "Firefox";
          if (HS.includes("silk/")) return "Silk";
          if (GH(HS)) return "Blackberry";
          if (CH(HS)) return "Webos";
          if (kH(HS)) return "Safari";
          if ((HS.includes("chrome/") || aH(HS)) && !HS.includes("edge/")) return "Chrome";
          if (jH(HS)) return "Android";
          {
            const HS = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              gS = SS.match(HS);
            if (2 === (null === gS || void 0 === gS ? void 0 : gS.length)) return gS[1]
          }
          return "Other"
        }

        function fH() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)();
          return /firefox\//i.test(SS)
        }

        function kH() {
          const SS = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)()).toLowerCase();
          return SS.includes("safari/") && !SS.includes("chrome/") && !SS.includes("crios/") && !SS.includes("android")
        }

        function aH() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)();
          return /crios\//i.test(SS)
        }

        function KH() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)();
          return /iemobile/i.test(SS)
        }

        function jH() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)();
          return /android/i.test(SS)
        }

        function GH() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)();
          return /blackberry/i.test(SS)
        }

        function CH() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)();
          return /webos/i.test(SS)
        }

        function nH() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)();
          return /iphone|ipad|ipod/i.test(SS) || /macintosh/i.test(SS) && /mobile/i.test(SS)
        }

        function PH() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)();
          return nH(SS) || jH(SS) || CH(SS) || GH(SS) || /windows phone/i.test(SS) || KH(SS)
        }

        function QH(SS) {
          let HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (SS) {
            case "Browser":
              HS = IH((0, tS.N)());
              break;
            case "Worker":
              HS = `${IH((0,tS.N)())}-${SS}`;
              break;
            default:
              HS = SS
          }
          const XS = gS.length ? gS.join(",") : "FirebaseCore-web";
          return `${HS}/JsCore/${bS.d}/${XS}`
        }
        async function DH(SS, HS) {
          return WS(SS, "GET", "/v2/recaptchaConfig", iS(SS, HS))
        }

        function wH(SS) {
          return void 0 !== SS && void 0 !== SS.getResponse
        }

        function hH(SS) {
          return void 0 !== SS && void 0 !== SS.enterprise
        }
        class ZH {
          constructor(SS) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === SS.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = SS.recaptchaKey.split("/")[3], this.emailPasswordEnabled = SS.recaptchaEnforcementState.some((SS => "EMAIL_PASSWORD_PROVIDER" === SS.provider && "OFF" !== SS.enforcementState))
          }
        }

        function JH(SS) {
          return new Promise(((HS, gS) => {
            const tS = document.createElement("script");
            tS.setAttribute("src", SS), tS.onload = HS, tS.onerror = SS => {
                const HS = DS("internal-error");
                HS.customData = SS, gS(HS)
              }, tS.type = "text/javascript", tS.charset = "UTF-8",
              function() {
                var SS, HS;
                return null !== (HS = null === (SS = document.getElementsByTagName("head")) || void 0 === SS ? void 0 : SS[0]) && void 0 !== HS ? HS : document
              }().appendChild(tS)
          }))
        }

        function OH(SS) {
          return `__${SS}${Math.floor(1e6*Math.random())}`
        }
        class dH {
          constructor(SS) {
            this.type = "recaptcha-enterprise", this.auth = LH(SS)
          }
          async verify() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function gS(HS, gS, tS) {
              const bS = window.grecaptcha;
              hH(bS) ? bS.enterprise.ready((() => {
                bS.enterprise.execute(HS, {
                  action: SS
                }).then((SS => {
                  gS(SS)
                })).catch((() => {
                  gS("NO_RECAPTCHA")
                }))
              })) : tS(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((SS, tS) => {
              (async function(SS) {
                if (!HS) {
                  if (null == SS.tenantId && null != SS._agentRecaptchaConfig) return SS._agentRecaptchaConfig.siteKey;
                  if (null != SS.tenantId && void 0 !== SS._tenantRecaptchaConfigs[SS.tenantId]) return SS._tenantRecaptchaConfigs[SS.tenantId].siteKey
                }
                return new Promise((async (HS, gS) => {
                  DH(SS, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((tS => {
                    if (void 0 !== tS.recaptchaKey) {
                      const gS = new ZH(tS);
                      return null == SS.tenantId ? SS._agentRecaptchaConfig = gS : SS._tenantRecaptchaConfigs[SS.tenantId] = gS, HS(gS.siteKey)
                    }
                    gS(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((SS => {
                    gS(SS)
                  }))
                }))
              })(this.auth).then((bS => {
                if (!HS && hH(window.grecaptcha)) gS(bS, SS, tS);
                else {
                  if ("undefined" === typeof window) return void tS(new Error("RecaptchaVerifier is only supported in browser"));
                  JH("https://www.google.com/recaptcha/enterprise.js?render=" + bS).then((() => {
                    gS(bS, SS, tS)
                  })).catch((SS => {
                    tS(SS)
                  }))
                }
              })).catch((SS => {
                tS(SS)
              }))
            }))
          }
        }
        async function cH(SS, HS, gS) {
          let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const bS = new dH(SS);
          let XS;
          try {
            XS = await bS.verify(gS)
          } catch (NS) {
            XS = await bS.verify(gS, !0)
          }
          const xS = Object.assign({}, HS);
          return tS ? Object.assign(xS, {
            captchaResp: XS
          }) : Object.assign(xS, {
            captchaResponse: XS
          }), Object.assign(xS, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(xS, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), xS
        }
        class vH {
          constructor(SS) {
            this.auth = SS, this.queue = []
          }
          pushCallback(SS, HS) {
            const gS = HS => new Promise(((gS, tS) => {
              try {
                gS(SS(HS))
              } catch (bS) {
                tS(bS)
              }
            }));
            gS.onAbort = HS, this.queue.push(gS);
            const tS = this.queue.length - 1;
            return () => {
              this.queue[tS] = () => Promise.resolve()
            }
          }
          async runMiddleware(SS) {
            if (this.auth.currentUser === SS) return;
            const HS = [];
            try {
              for (const gS of this.queue) await gS(SS), gS.onAbort && HS.push(gS.onAbort)
            } catch (gS) {
              HS.reverse();
              for (const SS of HS) try {
                SS()
              } catch (tS) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === gS || void 0 === gS ? void 0 : gS.message
              })
            }
          }
        }
        class EH {
          constructor(SS, HS, gS, tS) {
            this.app = SS, this.heartbeatServiceProvider = HS, this.appCheckServiceProvider = gS, this.config = tS, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new YH(this), this.idTokenSubscription = new YH(this), this.beforeStateQueue = new vH(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = GS, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = SS.name, this.clientVersion = tS.sdkClientVersion
          }
          _initializeWithPersistence(SS, HS) {
            return HS && (this._popupRedirectResolver = XH(HS)), this._initializationPromise = this.queue((async () => {
              var gS, tS;
              if (!this._deleted && (this.persistenceManager = await uH.create(this, SS), !this._deleted)) {
                if (null === (gS = this._popupRedirectResolver) || void 0 === gS ? void 0 : gS._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (bS) {}
                await this.initializeCurrentUser(HS), this.lastNotifiedUid = (null === (tS = this.currentUser) || void 0 === tS ? void 0 : tS.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const SS = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || SS ? this.currentUser && SS && this.currentUser.uid === SS.uid ? (this._currentUser._assign(SS), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(SS, !0) : void 0
          }
          async initializeCurrentUser(SS) {
            var HS;
            const gS = await this.assertedPersistence.getCurrentUser();
            let tS = gS,
              bS = !1;
            if (SS && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const gS = null === (HS = this.redirectUser) || void 0 === HS ? void 0 : HS._redirectEventId,
                XS = null === tS || void 0 === tS ? void 0 : tS._redirectEventId,
                xS = await this.tryRedirectSignIn(SS);
              gS && gS !== XS || !(null === xS || void 0 === xS ? void 0 : xS.user) || (tS = xS.user, bS = !0)
            }
            if (!tS) return this.directlySetCurrentUser(null);
            if (!tS._redirectEventId) {
              if (bS) try {
                await this.beforeStateQueue.runMiddleware(tS)
              } catch (XS) {
                tS = gS, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(XS)))
              }
              return tS ? this.reloadAndSetCurrentUserOrClear(tS) : this.directlySetCurrentUser(null)
            }
            return JS(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === tS._redirectEventId ? this.directlySetCurrentUser(tS) : this.reloadAndSetCurrentUserOrClear(tS)
          }
          async tryRedirectSignIn(SS) {
            let HS = null;
            try {
              HS = await this._popupRedirectResolver._completeRedirectFn(this, SS, !0)
            } catch (gS) {
              await this._setRedirectUser(null)
            }
            return HS
          }
          async reloadAndSetCurrentUserOrClear(SS) {
            try {
              await rS(SS)
            } catch (HS) {
              if ("auth/network-request-failed" !== (null === HS || void 0 === HS ? void 0 : HS.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(SS)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const SS = navigator;
              return SS.languages && SS.languages[0] || SS.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(SS) {
            const HS = SS ? (0, tS.J)(SS) : null;
            return HS && JS(HS.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(HS && HS._clone(this))
          }
          async _updateCurrentUser(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return SS && JS(this.tenantId === SS.tenantId, this, "tenant-id-mismatch"), HS || await this.beforeStateQueue.runMiddleware(SS), this.queue((async () => {
              await this.directlySetCurrentUser(SS), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(SS) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(XH(SS))
            }))
          }
          async initializeRecaptchaConfig() {
            const SS = await DH(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              HS = new ZH(SS);
            if (null == this.tenantId ? this._agentRecaptchaConfig = HS : this._tenantRecaptchaConfigs[this.tenantId] = HS, HS.emailPasswordEnabled) {
              new dH(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(SS) {
            this._errorFactory = new tS.d("auth", "Firebase", SS())
          }
          onAuthStateChanged(SS, HS, gS) {
            return this.registerStateListener(this.authStateSubscription, SS, HS, gS)
          }
          beforeAuthStateChanged(SS, HS) {
            return this.beforeStateQueue.pushCallback(SS, HS)
          }
          onIdTokenChanged(SS, HS, gS) {
            return this.registerStateListener(this.idTokenSubscription, SS, HS, gS)
          }
          toJSON() {
            var SS;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (SS = this._currentUser) || void 0 === SS ? void 0 : SS.toJSON()
            }
          }
          async _setRedirectUser(SS, HS) {
            const gS = await this.getOrInitRedirectPersistenceManager(HS);
            return null === SS ? gS.removeCurrentUser() : gS.setCurrentUser(SS)
          }
          async getOrInitRedirectPersistenceManager(SS) {
            if (!this.redirectPersistenceManager) {
              const HS = SS && XH(SS) || this._popupRedirectResolver;
              JS(HS, this, "argument-error"), this.redirectPersistenceManager = await uH.create(this, [XH(HS._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(SS) {
            var HS, gS;
            return this._isInitialized && await this.queue((async () => {})), (null === (HS = this._currentUser) || void 0 === HS ? void 0 : HS._redirectEventId) === SS ? this._currentUser : (null === (gS = this.redirectUser) || void 0 === gS ? void 0 : gS._redirectEventId) === SS ? this.redirectUser : null
          }
          async _persistUserIfCurrent(SS) {
            if (SS === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(SS)))
          }
          _notifyListenersIfCurrent(SS) {
            SS === this.currentUser && this.notifyAuthListeners()
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
            var SS, HS;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const gS = null !== (HS = null === (SS = this.currentUser) || void 0 === SS ? void 0 : SS.uid) && void 0 !== HS ? HS : null;
            this.lastNotifiedUid !== gS && (this.lastNotifiedUid = gS, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(SS, HS, gS, tS) {
            if (this._deleted) return () => {};
            const bS = "function" === typeof HS ? HS : HS.next.bind(HS),
              XS = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return JS(XS, this, "internal-error"), XS.then((() => bS(this.currentUser))), "function" === typeof HS ? SS.addObserver(HS, gS, tS) : SS.addObserver(HS)
          }
          async directlySetCurrentUser(SS) {
            this.currentUser && this.currentUser !== SS && this._currentUser._stopProactiveRefresh(), SS && this.isProactiveRefreshEnabled && SS._startProactiveRefresh(), this.currentUser = SS, SS ? await this.assertedPersistence.setCurrentUser(SS) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(SS) {
            return this.operations = this.operations.then(SS, SS), this.operations
          }
          get assertedPersistence() {
            return JS(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(SS) {
            SS && !this.frameworks.includes(SS) && (this.frameworks.push(SS), this.frameworks.sort(), this.clientVersion = QH(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var SS;
            const HS = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (HS["X-Firebase-gmpid"] = this.app.options.appId);
            const gS = await (null === (SS = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === SS ? void 0 : SS.getHeartbeatsHeader());
            gS && (HS["X-Firebase-Client"] = gS);
            const tS = await this._getAppCheckToken();
            return tS && (HS["X-Firebase-AppCheck"] = tS), HS
          }
          async _getAppCheckToken() {
            var SS;
            const HS = await (null === (SS = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === SS ? void 0 : SS.getToken());
            return (null === HS || void 0 === HS ? void 0 : HS.error) && function(SS) {
              if (nS.logLevel <= xS.c.WARN) {
                for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
                nS.warn(`Auth (${bS.d}): ${SS}`, ...gS)
              }
            }(`Error while retrieving App Check token: ${HS.error}`), null === HS || void 0 === HS ? void 0 : HS.token
          }
        }

        function LH(SS) {
          return (0, tS.J)(SS)
        }
        class YH {
          constructor(SS) {
            this.auth = SS, this.observer = null, this.addObserver = (0, tS.u)((SS => this.observer = SS))
          }
          get next() {
            return JS(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function AH(SS, HS) {
          const gS = (0, bS.z)(SS, "auth");
          if (gS.isInitialized()) {
            const SS = gS.getImmediate(),
              bS = gS.getOptions();
            if ((0, tS.v)(bS, null !== HS && void 0 !== HS ? HS : {})) return SS;
            QS(SS, "already-initialized")
          }
          return gS.initialize({
            options: HS
          })
        }

        function yH(SS, HS, gS) {
          const tS = LH(SS);
          JS(tS._canInitEmulator, tS, "emulator-config-failed"), JS(/^https?:\/\//.test(HS), tS, "invalid-emulator-scheme");
          const bS = !!(null === gS || void 0 === gS ? void 0 : gS.disableWarnings),
            XS = VH(HS),
            {
              host: xS,
              port: NS
            } = function(SS) {
              const HS = VH(SS),
                gS = /(\/\/)?([^?#/]+)/.exec(SS.substr(HS.length));
              if (!gS) return {
                host: "",
                port: null
              };
              const tS = gS[2].split("@").pop() || "",
                bS = /^(\[[^\]]+\])(:|$)/.exec(tS);
              if (bS) {
                const SS = bS[1];
                return {
                  host: SS,
                  port: iH(tS.substr(SS.length + 1))
                }
              } {
                const [SS, HS] = tS.split(":");
                return {
                  host: SS,
                  port: iH(HS)
                }
              }
            }(HS),
            qS = null === NS ? "" : `:${NS}`;
          tS.config.emulator = {
            url: `${XS}//${xS}${qS}/`
          }, tS.settings.appVerificationDisabledForTesting = !0, tS.emulatorConfig = Object.freeze({
            host: xS,
            port: NS,
            protocol: XS.replace(":", ""),
            options: Object.freeze({
              disableWarnings: bS
            })
          }), bS || function() {
            function SS() {
              const SS = document.createElement("p"),
                HS = SS.style;
              SS.innerText = "Running in emulator mode. Do not use with production credentials.", HS.position = "fixed", HS.width = "100%", HS.backgroundColor = "#ffffff", HS.border = ".1em solid #000000", HS.color = "#b50000", HS.bottom = "0px", HS.left = "0px", HS.margin = "0px", HS.zIndex = "10000", HS.textAlign = "center", SS.classList.add("firebase-emulator-warning"), document.body.appendChild(SS)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", SS) : SS())
          }()
        }

        function VH(SS) {
          const HS = SS.indexOf(":");
          return HS < 0 ? "" : SS.substr(0, HS + 1)
        }

        function iH(SS) {
          if (!SS) return null;
          const HS = Number(SS);
          return isNaN(HS) ? null : HS
        }
        class WH {
          constructor(SS, HS) {
            this.providerId = SS, this.signInMethod = HS
          }
          toJSON() {
            return OS("not implemented")
          }
          _getIdTokenResponse(SS) {
            return OS("not implemented")
          }
          _linkToIdToken(SS, HS) {
            return OS("not implemented")
          }
          _getReauthenticationResolver(SS) {
            return OS("not implemented")
          }
        }
        async function zH(SS, HS) {
          return WS(SS, "POST", "/v1/accounts:resetPassword", iS(SS, HS))
        }
        async function UH(SS, HS) {
          return WS(SS, "POST", "/v1/accounts:update", HS)
        }
        async function pH(SS, HS) {
          return US(SS, "POST", "/v1/accounts:signInWithPassword", iS(SS, HS))
        }
        async function sH(SS, HS) {
          return WS(SS, "POST", "/v1/accounts:sendOobCode", iS(SS, HS))
        }
        async function BH(SS, HS) {
          return sH(SS, HS)
        }
        async function MH(SS, HS) {
          return sH(SS, HS)
        }
        class FH extends WH {
          constructor(SS, HS, gS) {
            let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", gS), this._email = SS, this._password = HS, this._tenantId = tS
          }
          static _fromEmailAndPassword(SS, HS) {
            return new FH(SS, HS, "password")
          }
          static _fromEmailAndCode(SS, HS) {
            return new FH(SS, HS, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(SS) {
            const HS = "string" === typeof SS ? JSON.parse(SS) : SS;
            if ((null === HS || void 0 === HS ? void 0 : HS.email) && (null === HS || void 0 === HS ? void 0 : HS.password)) {
              if ("password" === HS.signInMethod) return this._fromEmailAndPassword(HS.email, HS.password);
              if ("emailLink" === HS.signInMethod) return this._fromEmailAndCode(HS.email, HS.password, HS.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(SS) {
            var HS;
            switch (this.signInMethod) {
              case "password":
                const gS = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (HS = SS._getRecaptchaConfig()) || void 0 === HS ? void 0 : HS.emailPasswordEnabled) {
                  const HS = await cH(SS, gS, "signInWithPassword");
                  return pH(SS, HS)
                }
                return pH(SS, gS).catch((async HS => {
                  if ("auth/missing-recaptcha-token" === HS.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const HS = await cH(SS, gS, "signInWithPassword");
                    return pH(SS, HS)
                  }
                  return Promise.reject(HS)
                }));
              case "emailLink":
                return async function(SS, HS) {
                  return US(SS, "POST", "/v1/accounts:signInWithEmailLink", iS(SS, HS))
                }(SS, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                QS(SS, "internal-error")
            }
          }
          async _linkToIdToken(SS, HS) {
            switch (this.signInMethod) {
              case "password":
                return UH(SS, {
                  idToken: HS,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(SS, HS) {
                  return US(SS, "POST", "/v1/accounts:signInWithEmailLink", iS(SS, HS))
                }(SS, {
                  idToken: HS,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                QS(SS, "internal-error")
            }
          }
          _getReauthenticationResolver(SS) {
            return this._getIdTokenResponse(SS)
          }
        }
        async function RH(SS, HS) {
          return US(SS, "POST", "/v1/accounts:signInWithIdp", iS(SS, HS))
        }
        class TH extends WH {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(SS) {
            const HS = new TH(SS.providerId, SS.signInMethod);
            return SS.idToken || SS.accessToken ? (SS.idToken && (HS.idToken = SS.idToken), SS.accessToken && (HS.accessToken = SS.accessToken), SS.nonce && !SS.pendingToken && (HS.nonce = SS.nonce), SS.pendingToken && (HS.pendingToken = SS.pendingToken)) : SS.oauthToken && SS.oauthTokenSecret ? (HS.accessToken = SS.oauthToken, HS.secret = SS.oauthTokenSecret) : QS("argument-error"), HS
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
          static fromJSON(SS) {
            const HS = "string" === typeof SS ? JSON.parse(SS) : SS,
              {
                providerId: gS,
                signInMethod: tS
              } = HS,
              bS = XS(HS, ["providerId", "signInMethod"]);
            if (!gS || !tS) return null;
            const xS = new TH(gS, tS);
            return xS.idToken = bS.idToken || void 0, xS.accessToken = bS.accessToken || void 0, xS.secret = bS.secret, xS.nonce = bS.nonce, xS.pendingToken = bS.pendingToken || null, xS
          }
          _getIdTokenResponse(SS) {
            return RH(SS, this.buildRequest())
          }
          _linkToIdToken(SS, HS) {
            const gS = this.buildRequest();
            return gS.idToken = HS, RH(SS, gS)
          }
          _getReauthenticationResolver(SS) {
            const HS = this.buildRequest();
            return HS.autoCreate = !1, RH(SS, HS)
          }
          buildRequest() {
            const SS = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) SS.pendingToken = this.pendingToken;
            else {
              const HS = {};
              this.idToken && (HS.id_token = this.idToken), this.accessToken && (HS.access_token = this.accessToken), this.secret && (HS.oauth_token_secret = this.secret), HS.providerId = this.providerId, this.nonce && !this.pendingToken && (HS.nonce = this.nonce), SS.postBody = (0, tS.db)(HS)
            }
            return SS
          }
        }
        const oH = {
          USER_NOT_FOUND: "user-not-found"
        };
        class lH extends WH {
          constructor(SS) {
            super("phone", "phone"), this.params = SS
          }
          static _fromVerification(SS, HS) {
            return new lH({
              verificationId: SS,
              verificationCode: HS
            })
          }
          static _fromTokenResponse(SS, HS) {
            return new lH({
              phoneNumber: SS,
              temporaryProof: HS
            })
          }
          _getIdTokenResponse(SS) {
            return async function(SS, HS) {
              return US(SS, "POST", "/v1/accounts:signInWithPhoneNumber", iS(SS, HS))
            }(SS, this._makeVerificationRequest())
          }
          _linkToIdToken(SS, HS) {
            return async function(SS, HS) {
              const gS = await US(SS, "POST", "/v1/accounts:signInWithPhoneNumber", iS(SS, HS));
              if (gS.temporaryProof) throw BS(SS, "account-exists-with-different-credential", gS);
              return gS
            }(SS, Object.assign({
              idToken: HS
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(SS) {
            return async function(SS, HS) {
              return US(SS, "POST", "/v1/accounts:signInWithPhoneNumber", iS(SS, Object.assign(Object.assign({}, HS), {
                operation: "REAUTH"
              })), oH)
            }(SS, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: SS,
              phoneNumber: HS,
              verificationId: gS,
              verificationCode: tS
            } = this.params;
            return SS && HS ? {
              temporaryProof: SS,
              phoneNumber: HS
            } : {
              sessionInfo: gS,
              code: tS
            }
          }
          toJSON() {
            const SS = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (SS.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (SS.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (SS.verificationCode = this.params.verificationCode), this.params.verificationId && (SS.verificationId = this.params.verificationId), SS
          }
          static fromJSON(SS) {
            "string" === typeof SS && (SS = JSON.parse(SS));
            const {
              verificationId: HS,
              verificationCode: gS,
              phoneNumber: tS,
              temporaryProof: bS
            } = SS;
            return gS || HS || tS || bS ? new lH({
              verificationId: HS,
              verificationCode: gS,
              phoneNumber: tS,
              temporaryProof: bS
            }) : null
          }
        }
        class mH {
          constructor(SS) {
            var HS, gS, bS, XS, xS, NS;
            const qS = (0, tS.ab)((0, tS.y)(SS)),
              uS = null !== (HS = qS.apiKey) && void 0 !== HS ? HS : null,
              IS = null !== (gS = qS.oobCode) && void 0 !== gS ? gS : null,
              fS = function(SS) {
                switch (SS) {
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
              }(null !== (bS = qS.mode) && void 0 !== bS ? bS : null);
            JS(uS && IS && fS, "argument-error"), this.apiKey = uS, this.operation = fS, this.code = IS, this.continueUrl = null !== (XS = qS.continueUrl) && void 0 !== XS ? XS : null, this.languageCode = null !== (xS = qS.languageCode) && void 0 !== xS ? xS : null, this.tenantId = null !== (NS = qS.tenantId) && void 0 !== NS ? NS : null
          }
          static parseLink(SS) {
            const HS = function(SS) {
              const HS = (0, tS.ab)((0, tS.y)(SS)).link,
                gS = HS ? (0, tS.ab)((0, tS.y)(HS)).deep_link_id : null,
                bS = (0, tS.ab)((0, tS.y)(SS)).deep_link_id;
              return (bS ? (0, tS.ab)((0, tS.y)(bS)).link : null) || bS || gS || HS || SS
            }(SS);
            try {
              return new mH(HS)
            } catch (gS) {
              return null
            }
          }
        }

        function eH(SS) {
          return mH.parseLink(SS)
        }
        class rH {
          constructor() {
            this.providerId = rH.PROVIDER_ID
          }
          static credential(SS, HS) {
            return FH._fromEmailAndPassword(SS, HS)
          }
          static credentialWithLink(SS, HS) {
            const gS = mH.parseLink(HS);
            return JS(gS, "argument-error"), FH._fromEmailAndCode(SS, gS.code, gS.tenantId)
          }
        }
        rH.PROVIDER_ID = "password", rH.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", rH.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Sg {
          constructor(SS) {
            this.providerId = SS, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(SS) {
            this.defaultLanguageCode = SS
          }
          setCustomParameters(SS) {
            return this.customParameters = SS, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class Hg extends Sg {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(SS) {
            return this.scopes.includes(SS) || this.scopes.push(SS), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class gg extends Hg {
          static credentialFromJSON(SS) {
            const HS = "string" === typeof SS ? JSON.parse(SS) : SS;
            return JS("providerId" in HS && "signInMethod" in HS, "argument-error"), TH._fromParams(HS)
          }
          credential(SS) {
            return this._credential(Object.assign(Object.assign({}, SS), {
              nonce: SS.rawNonce
            }))
          }
          _credential(SS) {
            return JS(SS.idToken || SS.accessToken, "argument-error"), TH._fromParams(Object.assign(Object.assign({}, SS), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(SS) {
            return gg.oauthCredentialFromTaggedObject(SS)
          }
          static credentialFromError(SS) {
            return gg.oauthCredentialFromTaggedObject(SS.customData || {})
          }
          static oauthCredentialFromTaggedObject(SS) {
            let {
              _tokenResponse: HS
            } = SS;
            if (!HS) return null;
            const {
              oauthIdToken: gS,
              oauthAccessToken: tS,
              oauthTokenSecret: bS,
              pendingToken: XS,
              nonce: xS,
              providerId: NS
            } = HS;
            if (!tS && !bS && !gS && !XS) return null;
            if (!NS) return null;
            try {
              return new gg(NS)._credential({
                idToken: gS,
                accessToken: tS,
                nonce: xS,
                pendingToken: XS
              })
            } catch (qS) {
              return null
            }
          }
        }
        class tg extends Hg {
          constructor() {
            super("facebook.com")
          }
          static credential(SS) {
            return TH._fromParams({
              providerId: tg.PROVIDER_ID,
              signInMethod: tg.FACEBOOK_SIGN_IN_METHOD,
              accessToken: SS
            })
          }
          static credentialFromResult(SS) {
            return tg.credentialFromTaggedObject(SS)
          }
          static credentialFromError(SS) {
            return tg.credentialFromTaggedObject(SS.customData || {})
          }
          static credentialFromTaggedObject(SS) {
            let {
              _tokenResponse: HS
            } = SS;
            if (!HS || !("oauthAccessToken" in HS)) return null;
            if (!HS.oauthAccessToken) return null;
            try {
              return tg.credential(HS.oauthAccessToken)
            } catch (gS) {
              return null
            }
          }
        }
        tg.FACEBOOK_SIGN_IN_METHOD = "facebook.com", tg.PROVIDER_ID = "facebook.com";
        class bg extends Hg {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(SS, HS) {
            return TH._fromParams({
              providerId: bg.PROVIDER_ID,
              signInMethod: bg.GOOGLE_SIGN_IN_METHOD,
              idToken: SS,
              accessToken: HS
            })
          }
          static credentialFromResult(SS) {
            return bg.credentialFromTaggedObject(SS)
          }
          static credentialFromError(SS) {
            return bg.credentialFromTaggedObject(SS.customData || {})
          }
          static credentialFromTaggedObject(SS) {
            let {
              _tokenResponse: HS
            } = SS;
            if (!HS) return null;
            const {
              oauthIdToken: gS,
              oauthAccessToken: tS
            } = HS;
            if (!gS && !tS) return null;
            try {
              return bg.credential(gS, tS)
            } catch (bS) {
              return null
            }
          }
        }
        bg.GOOGLE_SIGN_IN_METHOD = "google.com", bg.PROVIDER_ID = "google.com";
        class Xg extends Hg {
          constructor() {
            super("github.com")
          }
          static credential(SS) {
            return TH._fromParams({
              providerId: Xg.PROVIDER_ID,
              signInMethod: Xg.GITHUB_SIGN_IN_METHOD,
              accessToken: SS
            })
          }
          static credentialFromResult(SS) {
            return Xg.credentialFromTaggedObject(SS)
          }
          static credentialFromError(SS) {
            return Xg.credentialFromTaggedObject(SS.customData || {})
          }
          static credentialFromTaggedObject(SS) {
            let {
              _tokenResponse: HS
            } = SS;
            if (!HS || !("oauthAccessToken" in HS)) return null;
            if (!HS.oauthAccessToken) return null;
            try {
              return Xg.credential(HS.oauthAccessToken)
            } catch (gS) {
              return null
            }
          }
        }
        Xg.GITHUB_SIGN_IN_METHOD = "github.com", Xg.PROVIDER_ID = "github.com";
        class xg extends WH {
          constructor(SS, HS) {
            super(SS, SS), this.pendingToken = HS
          }
          _getIdTokenResponse(SS) {
            return RH(SS, this.buildRequest())
          }
          _linkToIdToken(SS, HS) {
            const gS = this.buildRequest();
            return gS.idToken = HS, RH(SS, gS)
          }
          _getReauthenticationResolver(SS) {
            const HS = this.buildRequest();
            return HS.autoCreate = !1, RH(SS, HS)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(SS) {
            const HS = "string" === typeof SS ? JSON.parse(SS) : SS,
              {
                providerId: gS,
                signInMethod: tS,
                pendingToken: bS
              } = HS;
            return gS && tS && bS && gS === tS ? new xg(gS, bS) : null
          }
          static _create(SS, HS) {
            return new xg(SS, HS)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Ng extends Sg {
          constructor(SS) {
            JS(SS.startsWith("saml."), "argument-error"), super(SS)
          }
          static credentialFromResult(SS) {
            return Ng.samlCredentialFromTaggedObject(SS)
          }
          static credentialFromError(SS) {
            return Ng.samlCredentialFromTaggedObject(SS.customData || {})
          }
          static credentialFromJSON(SS) {
            const HS = xg.fromJSON(SS);
            return JS(HS, "argument-error"), HS
          }
          static samlCredentialFromTaggedObject(SS) {
            let {
              _tokenResponse: HS
            } = SS;
            if (!HS) return null;
            const {
              pendingToken: gS,
              providerId: tS
            } = HS;
            if (!gS || !tS) return null;
            try {
              return xg._create(tS, gS)
            } catch (bS) {
              return null
            }
          }
        }
        class qg extends Hg {
          constructor() {
            super("twitter.com")
          }
          static credential(SS, HS) {
            return TH._fromParams({
              providerId: qg.PROVIDER_ID,
              signInMethod: qg.TWITTER_SIGN_IN_METHOD,
              oauthToken: SS,
              oauthTokenSecret: HS
            })
          }
          static credentialFromResult(SS) {
            return qg.credentialFromTaggedObject(SS)
          }
          static credentialFromError(SS) {
            return qg.credentialFromTaggedObject(SS.customData || {})
          }
          static credentialFromTaggedObject(SS) {
            let {
              _tokenResponse: HS
            } = SS;
            if (!HS) return null;
            const {
              oauthAccessToken: gS,
              oauthTokenSecret: tS
            } = HS;
            if (!gS || !tS) return null;
            try {
              return qg.credential(gS, tS)
            } catch (bS) {
              return null
            }
          }
        }
        async function ug(SS, HS) {
          return US(SS, "POST", "/v1/accounts:signUp", iS(SS, HS))
        }
        qg.TWITTER_SIGN_IN_METHOD = "twitter.com", qg.PROVIDER_ID = "twitter.com";
        class Ig {
          constructor(SS) {
            this.user = SS.user, this.providerId = SS.providerId, this._tokenResponse = SS._tokenResponse, this.operationType = SS.operationType
          }
          static async _fromIdTokenResponse(SS, HS, gS) {
            let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const bS = await tH._fromIdTokenResponse(SS, gS, tS),
              XS = fg(gS);
            return new Ig({
              user: bS,
              providerId: XS,
              _tokenResponse: gS,
              operationType: HS
            })
          }
          static async _forOperation(SS, HS, gS) {
            await SS._updateTokensIfNecessary(gS, !0);
            const tS = fg(gS);
            return new Ig({
              user: SS,
              providerId: tS,
              _tokenResponse: gS,
              operationType: HS
            })
          }
        }

        function fg(SS) {
          return SS.providerId ? SS.providerId : "phoneNumber" in SS ? "phone" : null
        }
        async function kg(SS) {
          var HS;
          const gS = LH(SS);
          if (await gS._initializationPromise, null === (HS = gS.currentUser) || void 0 === HS ? void 0 : HS.isAnonymous) return new Ig({
            user: gS.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const tS = await ug(gS, {
              returnSecureToken: !0
            }),
            bS = await Ig._fromIdTokenResponse(gS, "signIn", tS, !0);
          return await gS._updateCurrentUser(bS.user), bS
        }
        class ag extends tS.f {
          constructor(SS, HS, gS, tS) {
            var bS;
            super(HS.code, HS.message), this.operationType = gS, this.user = tS, Object.setPrototypeOf(this, ag.prototype), this.customData = {
              appName: SS.name,
              tenantId: null !== (bS = SS.tenantId) && void 0 !== bS ? bS : void 0,
              _serverResponse: HS.customData._serverResponse,
              operationType: gS
            }
          }
          static _fromErrorAndOperation(SS, HS, gS, tS) {
            return new ag(SS, HS, gS, tS)
          }
        }

        function Kg(SS, HS, gS, tS) {
          return ("reauthenticate" === HS ? gS._getReauthenticationResolver(SS) : gS._getIdTokenResponse(SS)).catch((gS => {
            if ("auth/multi-factor-auth-required" === gS.code) throw ag._fromErrorAndOperation(SS, gS, HS, tS);
            throw gS
          }))
        }

        function jg(SS) {
          return new Set(SS.map((SS => {
            let {
              providerId: HS
            } = SS;
            return HS
          })).filter((SS => !!SS)))
        }
        async function Gg(SS, HS) {
          const gS = (0, tS.J)(SS);
          await ng(!0, gS, HS);
          const {
            providerUserInfo: bS
          } = await async function(SS, HS) {
            return WS(SS, "POST", "/v1/accounts:update", HS)
          }(gS.auth, {
            idToken: await gS.getIdToken(),
            deleteProvider: [HS]
          }), XS = jg(bS || []);
          return gS.providerData = gS.providerData.filter((SS => XS.has(SS.providerId))), XS.has("phone") || (gS.phoneNumber = null), await gS.auth._persistUserIfCurrent(gS), gS
        }
        async function Cg(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const tS = await lS(SS, HS._linkToIdToken(SS.auth, await SS.getIdToken()), gS);
          return Ig._forOperation(SS, "link", tS)
        }
        async function ng(SS, HS, gS) {
          await rS(HS);
          const tS = !1 === SS ? "provider-already-linked" : "no-such-provider";
          JS(jg(HS.providerData).has(gS) === SS, HS.auth, tS)
        }
        async function Pg(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: tS
          } = SS, bS = "reauthenticate";
          try {
            const XS = await lS(SS, Kg(tS, bS, HS, SS), gS);
            JS(XS.idToken, tS, "internal-error");
            const xS = oS(XS.idToken);
            JS(xS, tS, "internal-error");
            const {
              sub: NS
            } = xS;
            return JS(SS.uid === NS, tS, "user-mismatch"), Ig._forOperation(SS, bS, XS)
          } catch (XS) {
            throw "auth/user-not-found" === (null === XS || void 0 === XS ? void 0 : XS.code) && QS(tS, "user-mismatch"), XS
          }
        }
        async function Qg(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const tS = "signIn",
            bS = await Kg(SS, tS, HS),
            XS = await Ig._fromIdTokenResponse(SS, tS, bS);
          return gS || await SS._updateCurrentUser(XS.user), XS
        }
        async function Dg(SS, HS) {
          return Qg(LH(SS), HS)
        }
        async function wg(SS, HS) {
          const gS = (0, tS.J)(SS);
          return await ng(!1, gS, HS.providerId), Cg(gS, HS)
        }
        async function hg(SS, HS) {
          return Pg((0, tS.J)(SS), HS)
        }
        async function Zg(SS, HS) {
          const gS = LH(SS),
            tS = await async function(SS, HS) {
              return US(SS, "POST", "/v1/accounts:signInWithCustomToken", iS(SS, HS))
            }(gS, {
              token: HS,
              returnSecureToken: !0
            }), bS = await Ig._fromIdTokenResponse(gS, "signIn", tS);
          return await gS._updateCurrentUser(bS.user), bS
        }
        class Jg {
          constructor(SS, HS) {
            this.factorId = SS, this.uid = HS.mfaEnrollmentId, this.enrollmentTime = new Date(HS.enrolledAt).toUTCString(), this.displayName = HS.displayName
          }
          static _fromServerResponse(SS, HS) {
            return "phoneInfo" in HS ? Og._fromServerResponse(SS, HS) : "totpInfo" in HS ? dg._fromServerResponse(SS, HS) : QS(SS, "internal-error")
          }
        }
        class Og extends Jg {
          constructor(SS) {
            super("phone", SS), this.phoneNumber = SS.phoneInfo
          }
          static _fromServerResponse(SS, HS) {
            return new Og(HS)
          }
        }
        class dg extends Jg {
          constructor(SS) {
            super("totp", SS)
          }
          static _fromServerResponse(SS, HS) {
            return new dg(HS)
          }
        }

        function cg(SS, HS, gS) {
          var tS;
          JS((null === (tS = gS.url) || void 0 === tS ? void 0 : tS.length) > 0, SS, "invalid-continue-uri"), JS("undefined" === typeof gS.dynamicLinkDomain || gS.dynamicLinkDomain.length > 0, SS, "invalid-dynamic-link-domain"), HS.continueUrl = gS.url, HS.dynamicLinkDomain = gS.dynamicLinkDomain, HS.canHandleCodeInApp = gS.handleCodeInApp, gS.iOS && (JS(gS.iOS.bundleId.length > 0, SS, "missing-ios-bundle-id"), HS.iOSBundleId = gS.iOS.bundleId), gS.android && (JS(gS.android.packageName.length > 0, SS, "missing-android-pkg-name"), HS.androidInstallApp = gS.android.installApp, HS.androidMinimumVersionCode = gS.android.minimumVersion, HS.androidPackageName = gS.android.packageName)
        }
        async function vg(SS, HS, gS) {
          var tS;
          const bS = LH(SS),
            XS = {
              requestType: "PASSWORD_RESET",
              email: HS,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (tS = bS._getRecaptchaConfig()) || void 0 === tS ? void 0 : tS.emailPasswordEnabled) {
            const SS = await cH(bS, XS, "getOobCode", !0);
            gS && cg(bS, SS, gS), await BH(bS, SS)
          } else gS && cg(bS, XS, gS), await BH(bS, XS).catch((async SS => {
            if ("auth/missing-recaptcha-token" !== SS.code) return Promise.reject(SS);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const SS = await cH(bS, XS, "getOobCode", !0);
              gS && cg(bS, SS, gS), await BH(bS, SS)
            }
          }))
        }
        async function Eg(SS, HS, gS) {
          await zH((0, tS.J)(SS), {
            oobCode: HS,
            newPassword: gS
          })
        }
        async function Lg(SS, HS) {
          await async function(SS, HS) {
            return WS(SS, "POST", "/v1/accounts:update", iS(SS, HS))
          }((0, tS.J)(SS), {
            oobCode: HS
          })
        }
        async function Yg(SS, HS) {
          const gS = (0, tS.J)(SS),
            bS = await zH(gS, {
              oobCode: HS
            }),
            XS = bS.requestType;
          switch (JS(XS, gS, "internal-error"), XS) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              JS(bS.newEmail, gS, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              JS(bS.mfaInfo, gS, "internal-error");
            default:
              JS(bS.email, gS, "internal-error")
          }
          let xS = null;
          return bS.mfaInfo && (xS = Jg._fromServerResponse(LH(gS), bS.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === bS.requestType ? bS.newEmail : bS.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === bS.requestType ? bS.email : bS.newEmail) || null,
              multiFactorInfo: xS
            },
            operation: XS
          }
        }
        async function Ag(SS, HS) {
          const {
            data: gS
          } = await Yg((0, tS.J)(SS), HS);
          return gS.email
        }
        async function yg(SS, HS, gS) {
          var tS;
          const bS = LH(SS),
            XS = {
              returnSecureToken: !0,
              email: HS,
              password: gS,
              clientType: "CLIENT_TYPE_WEB"
            };
          let xS;
          if (null === (tS = bS._getRecaptchaConfig()) || void 0 === tS ? void 0 : tS.emailPasswordEnabled) {
            const SS = await cH(bS, XS, "signUpPassword");
            xS = ug(bS, SS)
          } else xS = ug(bS, XS).catch((async SS => {
            if ("auth/missing-recaptcha-token" === SS.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const SS = await cH(bS, XS, "signUpPassword");
              return ug(bS, SS)
            }
            return Promise.reject(SS)
          }));
          const NS = await xS.catch((SS => Promise.reject(SS))),
            qS = await Ig._fromIdTokenResponse(bS, "signIn", NS);
          return await bS._updateCurrentUser(qS.user), qS
        }

        function Vg(SS, HS, gS) {
          return Dg((0, tS.J)(SS), rH.credential(HS, gS))
        }
        async function ig(SS, HS, gS) {
          var tS;
          const bS = LH(SS),
            XS = {
              requestType: "EMAIL_SIGNIN",
              email: HS,
              clientType: "CLIENT_TYPE_WEB"
            };

          function xS(SS, HS) {
            JS(HS.handleCodeInApp, bS, "argument-error"), HS && cg(bS, SS, HS)
          }
          if (null === (tS = bS._getRecaptchaConfig()) || void 0 === tS ? void 0 : tS.emailPasswordEnabled) {
            const SS = await cH(bS, XS, "getOobCode", !0);
            xS(SS, gS), await MH(bS, SS)
          } else xS(XS, gS), await MH(bS, XS).catch((async SS => {
            if ("auth/missing-recaptcha-token" !== SS.code) return Promise.reject(SS);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const SS = await cH(bS, XS, "getOobCode", !0);
              xS(SS, gS), await MH(bS, SS)
            }
          }))
        }

        function Wg(SS, HS) {
          const gS = mH.parseLink(HS);
          return "EMAIL_SIGNIN" === (null === gS || void 0 === gS ? void 0 : gS.operation)
        }
        async function zg(SS, HS, gS) {
          const bS = (0, tS.J)(SS),
            XS = rH.credentialWithLink(HS, gS || cS());
          return JS(XS._tenantId === (bS.tenantId || null), bS, "tenant-id-mismatch"), Dg(bS, XS)
        }
        async function Ug(SS, HS) {
          const gS = {
              identifier: HS,
              continueUri: vS() ? cS() : "http://localhost"
            },
            {
              signinMethods: bS
            } = await async function(SS, HS) {
              return WS(SS, "POST", "/v1/accounts:createAuthUri", iS(SS, HS))
            }((0, tS.J)(SS), gS);
          return bS || []
        }
        async function pg(SS, HS) {
          const gS = (0, tS.J)(SS),
            bS = {
              requestType: "VERIFY_EMAIL",
              idToken: await SS.getIdToken()
            };
          HS && cg(gS.auth, bS, HS);
          const {
            email: XS
          } = await async function(SS, HS) {
            return sH(SS, HS)
          }(gS.auth, bS);
          XS !== SS.email && await SS.reload()
        }
        async function sg(SS, HS, gS) {
          const bS = (0, tS.J)(SS),
            XS = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await SS.getIdToken(),
              newEmail: HS
            };
          gS && cg(bS.auth, XS, gS);
          const {
            email: xS
          } = await async function(SS, HS) {
            return sH(SS, HS)
          }(bS.auth, XS);
          xS !== SS.email && await SS.reload()
        }
        async function Bg(SS, HS) {
          let {
            displayName: gS,
            photoURL: bS
          } = HS;
          if (void 0 === gS && void 0 === bS) return;
          const XS = (0, tS.J)(SS),
            xS = {
              idToken: await XS.getIdToken(),
              displayName: gS,
              photoUrl: bS,
              returnSecureToken: !0
            },
            NS = await lS(XS, async function(SS, HS) {
              return WS(SS, "POST", "/v1/accounts:update", HS)
            }(XS.auth, xS));
          XS.displayName = NS.displayName || null, XS.photoURL = NS.photoUrl || null;
          const qS = XS.providerData.find((SS => {
            let {
              providerId: HS
            } = SS;
            return "password" === HS
          }));
          qS && (qS.displayName = XS.displayName, qS.photoURL = XS.photoURL), await XS._updateTokensIfNecessary(NS)
        }

        function Mg(SS, HS) {
          return Rg((0, tS.J)(SS), HS, null)
        }

        function Fg(SS, HS) {
          return Rg((0, tS.J)(SS), null, HS)
        }
        async function Rg(SS, HS, gS) {
          const {
            auth: tS
          } = SS, bS = {
            idToken: await SS.getIdToken(),
            returnSecureToken: !0
          };
          HS && (bS.email = HS), gS && (bS.password = gS);
          const XS = await lS(SS, UH(tS, bS));
          await SS._updateTokensIfNecessary(XS, !0)
        }
        class Tg {
          constructor(SS, HS) {
            let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = SS, this.providerId = HS, this.profile = gS
          }
        }
        class og extends Tg {
          constructor(SS, HS, gS, tS) {
            super(SS, HS, gS), this.username = tS
          }
        }
        class lg extends Tg {
          constructor(SS, HS) {
            super(SS, "facebook.com", HS)
          }
        }
        class mg extends og {
          constructor(SS, HS) {
            super(SS, "github.com", HS, "string" === typeof(null === HS || void 0 === HS ? void 0 : HS.login) ? null === HS || void 0 === HS ? void 0 : HS.login : null)
          }
        }
        class eg extends Tg {
          constructor(SS, HS) {
            super(SS, "google.com", HS)
          }
        }
        class rg extends og {
          constructor(SS, HS, gS) {
            super(SS, "twitter.com", HS, gS)
          }
        }

        function St(SS) {
          const {
            user: HS,
            _tokenResponse: gS
          } = SS;
          return HS.isAnonymous && !gS ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(SS) {
            var HS, gS;
            if (!SS) return null;
            const {
              providerId: tS
            } = SS, bS = SS.rawUserInfo ? JSON.parse(SS.rawUserInfo) : {}, XS = SS.isNewUser || "identitytoolkit#SignupNewUserResponse" === SS.kind;
            if (!tS && (null === SS || void 0 === SS ? void 0 : SS.idToken)) {
              const tS = null === (gS = null === (HS = oS(SS.idToken)) || void 0 === HS ? void 0 : HS.firebase) || void 0 === gS ? void 0 : gS.sign_in_provider;
              if (tS) return new Tg(XS, "anonymous" !== tS && "custom" !== tS ? tS : null)
            }
            if (!tS) return null;
            switch (tS) {
              case "facebook.com":
                return new lg(XS, bS);
              case "github.com":
                return new mg(XS, bS);
              case "google.com":
                return new eg(XS, bS);
              case "twitter.com":
                return new rg(XS, bS, SS.screenName || null);
              case "custom":
              case "anonymous":
                return new Tg(XS, null);
              default:
                return new Tg(XS, tS, bS)
            }
          }(gS)
        }

        function Ht(SS, HS) {
          return (0, tS.J)(SS).setPersistence(HS)
        }

        function gt(SS) {
          return LH(SS).initializeRecaptchaConfig()
        }

        function tt(SS, HS, gS, bS) {
          return (0, tS.J)(SS).onIdTokenChanged(HS, gS, bS)
        }

        function bt(SS, HS, gS) {
          return (0, tS.J)(SS).beforeAuthStateChanged(HS, gS)
        }

        function Xt(SS, HS, gS, bS) {
          return (0, tS.J)(SS).onAuthStateChanged(HS, gS, bS)
        }

        function xt(SS) {
          (0, tS.J)(SS).useDeviceLanguage()
        }

        function Nt(SS, HS) {
          return (0, tS.J)(SS).updateCurrentUser(HS)
        }

        function qt(SS) {
          return (0, tS.J)(SS).signOut()
        }
        async function ut(SS) {
          return (0, tS.J)(SS).delete()
        }
        class It {
          constructor(SS, HS, gS) {
            this.type = SS, this.credential = HS, this.auth = gS
          }
          static _fromIdtoken(SS, HS) {
            return new It("enroll", SS, HS)
          }
          static _fromMfaPendingCredential(SS) {
            return new It("signin", SS)
          }
          toJSON() {
            const SS = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [SS]: this.credential
              }
            }
          }
          static fromJSON(SS) {
            var HS, gS;
            if (null === SS || void 0 === SS ? void 0 : SS.multiFactorSession) {
              if (null === (HS = SS.multiFactorSession) || void 0 === HS ? void 0 : HS.pendingCredential) return It._fromMfaPendingCredential(SS.multiFactorSession.pendingCredential);
              if (null === (gS = SS.multiFactorSession) || void 0 === gS ? void 0 : gS.idToken) return It._fromIdtoken(SS.multiFactorSession.idToken)
            }
            return null
          }
        }
        class ft {
          constructor(SS, HS, gS) {
            this.session = SS, this.hints = HS, this.signInResolver = gS
          }
          static _fromError(SS, HS) {
            const gS = LH(SS),
              tS = HS.customData._serverResponse,
              bS = (tS.mfaInfo || []).map((SS => Jg._fromServerResponse(gS, SS)));
            JS(tS.mfaPendingCredential, gS, "internal-error");
            const XS = It._fromMfaPendingCredential(tS.mfaPendingCredential);
            return new ft(XS, bS, (async SS => {
              const bS = await SS._process(gS, XS);
              delete tS.mfaInfo, delete tS.mfaPendingCredential;
              const xS = Object.assign(Object.assign({}, tS), {
                idToken: bS.idToken,
                refreshToken: bS.refreshToken
              });
              switch (HS.operationType) {
                case "signIn":
                  const SS = await Ig._fromIdTokenResponse(gS, HS.operationType, xS);
                  return await gS._updateCurrentUser(SS.user), SS;
                case "reauthenticate":
                  return JS(HS.user, gS, "internal-error"), Ig._forOperation(HS.user, HS.operationType, xS);
                default:
                  QS(gS, "internal-error")
              }
            }))
          }
          async resolveSignIn(SS) {
            const HS = SS;
            return this.signInResolver(HS)
          }
        }

        function kt(SS, HS) {
          var gS;
          const bS = (0, tS.J)(SS),
            XS = HS;
          return JS(HS.customData.operationType, bS, "argument-error"), JS(null === (gS = XS.customData._serverResponse) || void 0 === gS ? void 0 : gS.mfaPendingCredential, bS, "argument-error"), ft._fromError(bS, XS)
        }
        class Kt {
          constructor(SS) {
            this.user = SS, this.enrolledFactors = [], SS._onReload((HS => {
              HS.mfaInfo && (this.enrolledFactors = HS.mfaInfo.map((HS => Jg._fromServerResponse(SS.auth, HS))))
            }))
          }
          static _fromUser(SS) {
            return new Kt(SS)
          }
          async getSession() {
            return It._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(SS, HS) {
            const gS = SS,
              tS = await this.getSession(),
              bS = await lS(this.user, gS._process(this.user.auth, tS, HS));
            return await this.user._updateTokensIfNecessary(bS), this.user.reload()
          }
          async unenroll(SS) {
            const HS = "string" === typeof SS ? SS : SS.uid,
              gS = await this.user.getIdToken();
            try {
              const SS = await lS(this.user, (tS = this.user.auth, bS = {
                idToken: gS,
                mfaEnrollmentId: HS
              }, WS(tS, "POST", "/v2/accounts/mfaEnrollment:withdraw", iS(tS, bS))));
              this.enrolledFactors = this.enrolledFactors.filter((SS => {
                let {
                  uid: gS
                } = SS;
                return gS !== HS
              })), await this.user._updateTokensIfNecessary(SS), await this.user.reload()
            } catch (XS) {
              throw XS
            }
            var tS, bS
          }
        }
        const jt = new WeakMap;

        function Gt(SS) {
          const HS = (0, tS.J)(SS);
          return jt.has(HS) || jt.set(HS, Kt._fromUser(HS)), jt.get(HS)
        }
        const Ct = "__sak";
        class nt {
          constructor(SS, HS) {
            this.storageRetriever = SS, this.type = HS
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Ct, "1"), this.storage.removeItem(Ct), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (SS) {
              return Promise.resolve(!1)
            }
          }
          _set(SS, HS) {
            return this.storage.setItem(SS, JSON.stringify(HS)), Promise.resolve()
          }
          _get(SS) {
            const HS = this.storage.getItem(SS);
            return Promise.resolve(HS ? JSON.parse(HS) : null)
          }
          _remove(SS) {
            return this.storage.removeItem(SS), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Pt extends nt {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (SS, HS) => this.onStorageEvent(SS, HS), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const SS = (0, tS.N)();
              return kH(SS) || nH(SS)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (SS) {
                return !1
              }
            }(), this.fallbackToPolling = PH(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(SS) {
            for (const HS of Object.keys(this.listeners)) {
              const gS = this.storage.getItem(HS),
                tS = this.localCache[HS];
              gS !== tS && SS(HS, tS, gS)
            }
          }
          onStorageEvent(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!SS.key) return void this.forAllChangedKeys(((SS, HS, gS) => {
              this.notifyListeners(SS, gS)
            }));
            const gS = SS.key;
            if (HS ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const tS = this.storage.getItem(gS);
              if (SS.newValue !== tS) null !== SS.newValue ? this.storage.setItem(gS, SS.newValue) : this.storage.removeItem(gS);
              else if (this.localCache[gS] === SS.newValue && !HS) return
            }
            const bS = () => {
                const SS = this.storage.getItem(gS);
                (HS || this.localCache[gS] !== SS) && this.notifyListeners(gS, SS)
              },
              XS = this.storage.getItem(gS);
            (0, tS.S)() && 10 === document.documentMode && XS !== SS.newValue && SS.newValue !== SS.oldValue ? setTimeout(bS, 10) : bS()
          }
          notifyListeners(SS, HS) {
            this.localCache[SS] = HS;
            const gS = this.listeners[SS];
            if (gS)
              for (const tS of Array.from(gS)) tS(HS ? JSON.parse(HS) : HS)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((SS, HS, gS) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: SS,
                  oldValue: HS,
                  newValue: gS
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
          _addListener(SS, HS) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[SS] || (this.listeners[SS] = new Set, this.localCache[SS] = this.storage.getItem(SS)), this.listeners[SS].add(HS)
          }
          _removeListener(SS, HS) {
            this.listeners[SS] && (this.listeners[SS].delete(HS), 0 === this.listeners[SS].size && delete this.listeners[SS]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(SS, HS) {
            await super._set(SS, HS), this.localCache[SS] = JSON.stringify(HS)
          }
          async _get(SS) {
            const HS = await super._get(SS);
            return this.localCache[SS] = JSON.stringify(HS), HS
          }
          async _remove(SS) {
            await super._remove(SS), delete this.localCache[SS]
          }
        }
        Pt.type = "LOCAL";
        const Qt = Pt;
        class Dt extends nt {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(SS, HS) {}
          _removeListener(SS, HS) {}
        }
        Dt.type = "SESSION";
        const wt = Dt;
        class ht {
          constructor(SS) {
            this.eventTarget = SS, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(SS) {
            const HS = this.receivers.find((HS => HS.isListeningto(SS)));
            if (HS) return HS;
            const gS = new ht(SS);
            return this.receivers.push(gS), gS
          }
          isListeningto(SS) {
            return this.eventTarget === SS
          }
          async handleEvent(SS) {
            const HS = SS,
              {
                eventId: gS,
                eventType: tS,
                data: bS
              } = HS.data,
              XS = this.handlersMap[tS];
            if (!(null === XS || void 0 === XS ? void 0 : XS.size)) return;
            HS.ports[0].postMessage({
              status: "ack",
              eventId: gS,
              eventType: tS
            });
            const xS = Array.from(XS).map((async SS => SS(HS.origin, bS))),
              NS = await
            function(SS) {
              return Promise.all(SS.map((async SS => {
                try {
                  return {
                    fulfilled: !0,
                    value: await SS
                  }
                } catch (HS) {
                  return {
                    fulfilled: !1,
                    reason: HS
                  }
                }
              })))
            }(xS);
            HS.ports[0].postMessage({
              status: "done",
              eventId: gS,
              eventType: tS,
              response: NS
            })
          }
          _subscribe(SS, HS) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[SS] || (this.handlersMap[SS] = new Set), this.handlersMap[SS].add(HS)
          }
          _unsubscribe(SS, HS) {
            this.handlersMap[SS] && HS && this.handlersMap[SS].delete(HS), HS && 0 !== this.handlersMap[SS].size || delete this.handlersMap[SS], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Zt() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            gS = "";
          for (let tS = 0; tS < HS; tS++) gS += Math.floor(10 * Math.random());
          return SS + gS
        }
        ht.receivers = [];
        class Jt {
          constructor(SS) {
            this.target = SS, this.handlers = new Set
          }
          removeMessageHandler(SS) {
            SS.messageChannel && (SS.messageChannel.port1.removeEventListener("message", SS.eC), SS.messageChannel.port1.close()), this.handlers.delete(SS)
          }
          async _send(SS, HS) {
            let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const tS = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!tS) throw new Error("connection_unavailable");
            let bS, XS;
            return new Promise(((xS, NS) => {
              const qS = Zt("", 20);
              tS.port1.start();
              const uS = setTimeout((() => {
                NS(new Error("unsupported_event"))
              }), gS);
              XS = {
                messageChannel: tS,
                eC(SS) {
                  const HS = SS;
                  if (HS.data.eventId === qS) switch (HS.data.status) {
                    case "ack":
                      clearTimeout(uS), bS = setTimeout((() => {
                        NS(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(bS), xS(HS.data.response);
                      break;
                    default:
                      clearTimeout(uS), clearTimeout(bS), NS(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(XS), tS.port1.addEventListener("message", XS.eC), this.target.postMessage({
                eventType: SS,
                eventId: qS,
                data: HS
              }, [tS.port2])
            })).finally((() => {
              XS && this.removeMessageHandler(XS)
            }))
          }
        }

        function Ot() {
          return window
        }

        function dt() {
          return "undefined" !== typeof Ot().WorkerGlobalScope && "function" === typeof Ot().importScripts
        }
        const ct = "firebaseLocalStorageDb",
          vt = "firebaseLocalStorage",
          Et = "fbase_key";
        class Lt {
          constructor(SS) {
            this.request = SS
          }
          toPromise() {
            return new Promise(((SS, HS) => {
              this.request.addEventListener("success", (() => {
                SS(this.request.result)
              })), this.request.addEventListener("error", (() => {
                HS(this.request.error)
              }))
            }))
          }
        }

        function Yt(SS, HS) {
          return SS.transaction([vt], HS ? "readwrite" : "readonly").objectStore(vt)
        }

        function At() {
          const SS = indexedDB.open(ct, 1);
          return new Promise(((HS, gS) => {
            SS.addEventListener("error", (() => {
              gS(SS.error)
            })), SS.addEventListener("upgradeneeded", (() => {
              const HS = SS.result;
              try {
                HS.createObjectStore(vt, {
                  keyPath: Et
                })
              } catch (tS) {
                gS(tS)
              }
            })), SS.addEventListener("success", (async () => {
              const gS = SS.result;
              gS.objectStoreNames.contains(vt) ? HS(gS) : (gS.close(), await
                function() {
                  const SS = indexedDB.deleteDatabase(ct);
                  return new Lt(SS).toPromise()
                }(), HS(await At()))
            }))
          }))
        }
        async function yt(SS, HS, gS) {
          const tS = Yt(SS, !0).put({
            [Et]: HS,
            value: gS
          });
          return new Lt(tS).toPromise()
        }

        function Vt(SS, HS) {
          const gS = Yt(SS, !0).delete(HS);
          return new Lt(gS).toPromise()
        }
        class it {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await At()), this.db
          }
          async _withRetries(SS) {
            let HS = 0;
            for (;;) try {
              const HS = await this._openDb();
              return await SS(HS)
            } catch (gS) {
              if (HS++ > 3) throw gS;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return dt() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = ht._getInstance(dt() ? self : null), this.receiver._subscribe("keyChanged", (async (SS, HS) => ({
              keyProcessed: (await this._poll()).includes(HS.key)
            }))), this.receiver._subscribe("ping", (async (SS, HS) => ["keyChanged"]))
          }
          async initializeSender() {
            var SS, HS;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (SS) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Jt(this.activeServiceWorker);
            const gS = await this.sender._send("ping", {}, 800);
            gS && (null === (SS = gS[0]) || void 0 === SS ? void 0 : SS.fulfilled) && (null === (HS = gS[0]) || void 0 === HS ? void 0 : HS.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(SS) {
            if (this.sender && this.activeServiceWorker && function() {
                var SS;
                return (null === (SS = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === SS ? void 0 : SS.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: SS
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (HS) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const SS = await At();
              return await yt(SS, Ct, "1"), await Vt(SS, Ct), !0
            } catch (SS) {}
            return !1
          }
          async _withPendingWrite(SS) {
            this.pendingWrites++;
            try {
              await SS()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(SS, HS) {
            return this._withPendingWrite((async () => (await this._withRetries((gS => yt(gS, SS, HS))), this.localCache[SS] = HS, this.notifyServiceWorker(SS))))
          }
          async _get(SS) {
            const HS = await this._withRetries((HS => async function(SS, HS) {
              const gS = Yt(SS, !1).get(HS),
                tS = await new Lt(gS).toPromise();
              return void 0 === tS ? null : tS.value
            }(HS, SS)));
            return this.localCache[SS] = HS, HS
          }
          async _remove(SS) {
            return this._withPendingWrite((async () => (await this._withRetries((HS => Vt(HS, SS))), delete this.localCache[SS], this.notifyServiceWorker(SS))))
          }
          async _poll() {
            const SS = await this._withRetries((SS => {
              const HS = Yt(SS, !1).getAll();
              return new Lt(HS).toPromise()
            }));
            if (!SS) return [];
            if (0 !== this.pendingWrites) return [];
            const HS = [],
              gS = new Set;
            for (const {
                fbase_key: tS,
                value: bS
              }
              of SS) gS.add(tS), JSON.stringify(this.localCache[tS]) !== JSON.stringify(bS) && (this.notifyListeners(tS, bS), HS.push(tS));
            for (const tS of Object.keys(this.localCache)) this.localCache[tS] && !gS.has(tS) && (this.notifyListeners(tS, null), HS.push(tS));
            return HS
          }
          notifyListeners(SS, HS) {
            this.localCache[SS] = HS;
            const gS = this.listeners[SS];
            if (gS)
              for (const tS of Array.from(gS)) tS(HS)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(SS, HS) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[SS] || (this.listeners[SS] = new Set, this._get(SS)), this.listeners[SS].add(HS)
          }
          _removeListener(SS, HS) {
            this.listeners[SS] && (this.listeners[SS].delete(HS), 0 === this.listeners[SS].size && delete this.listeners[SS]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        it.type = "LOCAL";
        const Wt = it;
        const zt = 1e12;
        class Ut {
          constructor(SS) {
            this.auth = SS, this.counter = zt, this._widgets = new Map
          }
          render(SS, HS) {
            const gS = this.counter;
            return this._widgets.set(gS, new pt(SS, this.auth.name, HS || {})), this.counter++, gS
          }
          reset(SS) {
            var HS;
            const gS = SS || zt;
            null === (HS = this._widgets.get(gS)) || void 0 === HS || HS.delete(), this._widgets.delete(gS)
          }
          getResponse(SS) {
            var HS;
            const gS = SS || zt;
            return (null === (HS = this._widgets.get(gS)) || void 0 === HS ? void 0 : HS.getResponse()) || ""
          }
          async execute(SS) {
            var HS;
            const gS = SS || zt;
            return null === (HS = this._widgets.get(gS)) || void 0 === HS || HS.execute(), ""
          }
        }
        class pt {
          constructor(SS, HS, gS) {
            this.params = gS, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const tS = "string" === typeof SS ? document.getElementById(SS) : SS;
            JS(tS, "argument-error", {
              appName: HS
            }), this.container = tS, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(SS) {
                const HS = [],
                  gS = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let tS = 0; tS < SS; tS++) HS.push(gS.charAt(Math.floor(Math.random() * gS.length)));
                return HS.join("")
              }(50);
              const {
                callback: SS,
                "expired-callback": HS
              } = this.params;
              if (SS) try {
                SS(this.responseToken)
              } catch (gS) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, HS) try {
                  HS()
                } catch (gS) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const st = OH("rcb"),
          Bt = new LS(3e4, 6e4);
        class Mt {
          constructor() {
            var SS;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (SS = Ot().grecaptcha) || void 0 === SS ? void 0 : SS.render)
          }
          load(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return JS(function(SS) {
              return SS.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(SS)
            }(HS), SS, "argument-error"), this.shouldResolveImmediately(HS) && wH(Ot().grecaptcha) ? Promise.resolve(Ot().grecaptcha) : new Promise(((gS, bS) => {
              const XS = Ot().setTimeout((() => {
                bS(DS(SS, "network-request-failed"))
              }), Bt.get());
              Ot()[st] = () => {
                Ot().clearTimeout(XS), delete Ot()[st];
                const tS = Ot().grecaptcha;
                if (!tS || !wH(tS)) return void bS(DS(SS, "internal-error"));
                const xS = tS.render;
                tS.render = (SS, HS) => {
                  const gS = xS(SS, HS);
                  return this.counter++, gS
                }, this.hostLanguage = HS, gS(tS)
              };
              JH(`https://www.google.com/recaptcha/api.js??${(0,tS.db)({onload:st,render:"explicit",hl:HS})}`).catch((() => {
                clearTimeout(XS), bS(DS(SS, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(SS) {
            var HS;
            return !!(null === (HS = Ot().grecaptcha) || void 0 === HS ? void 0 : HS.render) && (SS === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class Ft {
          async load(SS) {
            return new Ut(SS)
          }
          clearedOneInstance() {}
        }
        const Rt = "recaptcha",
          Tt = {
            theme: "light",
            type: "image"
          };
        class ot {
          constructor(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Tt),
              gS = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = HS, this.type = Rt, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = LH(gS), this.isInvisible = "invisible" === this.parameters.size, JS("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const tS = "string" === typeof SS ? document.getElementById(SS) : SS;
            JS(tS, this.auth, "argument-error"), this.container = tS, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Ft : new Mt, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const SS = await this.render(),
              HS = this.getAssertedRecaptcha(),
              gS = HS.getResponse(SS);
            return gS || new Promise((gS => {
              const tS = SS => {
                SS && (this.tokenChangeListeners.delete(tS), gS(SS))
              };
              this.tokenChangeListeners.add(tS), this.isInvisible && HS.execute(SS)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (SS) {
              return Promise.reject(SS)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((SS => {
              throw this.renderPromise = null, SS
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((SS => {
              this.container.removeChild(SS)
            }))
          }
          validateStartingState() {
            JS(!this.parameters.sitekey, this.auth, "argument-error"), JS(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), JS("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(SS) {
            return HS => {
              if (this.tokenChangeListeners.forEach((SS => SS(HS))), "function" === typeof SS) SS(HS);
              else if ("string" === typeof SS) {
                const gS = Ot()[SS];
                "function" === typeof gS && gS(HS)
              }
            }
          }
          assertNotDestroyed() {
            JS(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let SS = this.container;
              if (!this.isInvisible) {
                const HS = document.createElement("div");
                SS.appendChild(HS), SS = HS
              }
              this.widgetId = this.getAssertedRecaptcha().render(SS, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            JS(vS() && !dt(), this.auth, "internal-error"), await
            function() {
              let SS = null;
              return new Promise((HS => {
                "complete" !== document.readyState ? (SS = () => HS(), window.addEventListener("load", SS)) : HS()
              })).catch((HS => {
                throw SS && window.removeEventListener("load", SS), HS
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const SS = await async function(SS) {
              return (await WS(SS, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            JS(SS, this.auth, "internal-error"), this.parameters.sitekey = SS
          }
          getAssertedRecaptcha() {
            return JS(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class lt {
          constructor(SS, HS) {
            this.verificationId = SS, this.onConfirmation = HS
          }
          confirm(SS) {
            const HS = lH._fromVerification(this.verificationId, SS);
            return this.onConfirmation(HS)
          }
        }
        async function mt(SS, HS, gS) {
          const bS = LH(SS),
            XS = await Sb(bS, HS, (0, tS.J)(gS));
          return new lt(XS, (SS => Dg(bS, SS)))
        }
        async function et(SS, HS, gS) {
          const bS = (0, tS.J)(SS);
          await ng(!1, bS, "phone");
          const XS = await Sb(bS.auth, HS, (0, tS.J)(gS));
          return new lt(XS, (SS => wg(bS, SS)))
        }
        async function rt(SS, HS, gS) {
          const bS = (0, tS.J)(SS),
            XS = await Sb(bS.auth, HS, (0, tS.J)(gS));
          return new lt(XS, (SS => hg(bS, SS)))
        }
        async function Sb(SS, HS, gS) {
          var tS;
          const bS = await gS.verify();
          try {
            let XS;
            if (JS("string" === typeof bS, SS, "argument-error"), JS(gS.type === Rt, SS, "argument-error"), XS = "string" === typeof HS ? {
                phoneNumber: HS
              } : HS, "session" in XS) {
              const HS = XS.session;
              if ("phoneNumber" in XS) {
                JS("enroll" === HS.type, SS, "internal-error");
                const gS = await
                function(SS, HS) {
                  return WS(SS, "POST", "/v2/accounts/mfaEnrollment:start", iS(SS, HS))
                }(SS, {
                  idToken: HS.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: XS.phoneNumber,
                    recaptchaToken: bS
                  }
                });
                return gS.phoneSessionInfo.sessionInfo
              } {
                JS("signin" === HS.type, SS, "internal-error");
                const gS = (null === (tS = XS.multiFactorHint) || void 0 === tS ? void 0 : tS.uid) || XS.multiFactorUid;
                JS(gS, SS, "missing-multi-factor-info");
                const xS = await
                function(SS, HS) {
                  return WS(SS, "POST", "/v2/accounts/mfaSignIn:start", iS(SS, HS))
                }(SS, {
                  mfaPendingCredential: HS.credential,
                  mfaEnrollmentId: gS,
                  phoneSignInInfo: {
                    recaptchaToken: bS
                  }
                });
                return xS.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: HS
              } = await async function(SS, HS) {
                return WS(SS, "POST", "/v1/accounts:sendVerificationCode", iS(SS, HS))
              }(SS, {
                phoneNumber: XS.phoneNumber,
                recaptchaToken: bS
              });
              return HS
            }
          } finally {
            gS._reset()
          }
        }
        async function Hb(SS, HS) {
          await Cg((0, tS.J)(SS), HS)
        }
        class gb {
          constructor(SS) {
            this.providerId = gb.PROVIDER_ID, this.auth = LH(SS)
          }
          verifyPhoneNumber(SS, HS) {
            return Sb(this.auth, SS, (0, tS.J)(HS))
          }
          static credential(SS, HS) {
            return lH._fromVerification(SS, HS)
          }
          static credentialFromResult(SS) {
            const HS = SS;
            return gb.credentialFromTaggedObject(HS)
          }
          static credentialFromError(SS) {
            return gb.credentialFromTaggedObject(SS.customData || {})
          }
          static credentialFromTaggedObject(SS) {
            let {
              _tokenResponse: HS
            } = SS;
            if (!HS) return null;
            const {
              phoneNumber: gS,
              temporaryProof: tS
            } = HS;
            return gS && tS ? lH._fromTokenResponse(gS, tS) : null
          }
        }

        function tb(SS, HS) {
          return HS ? XH(HS) : (JS(SS._popupRedirectResolver, SS, "argument-error"), SS._popupRedirectResolver)
        }
        gb.PROVIDER_ID = "phone", gb.PHONE_SIGN_IN_METHOD = "phone";
        class bb extends WH {
          constructor(SS) {
            super("custom", "custom"), this.params = SS
          }
          _getIdTokenResponse(SS) {
            return RH(SS, this._buildIdpRequest())
          }
          _linkToIdToken(SS, HS) {
            return RH(SS, this._buildIdpRequest(HS))
          }
          _getReauthenticationResolver(SS) {
            return RH(SS, this._buildIdpRequest())
          }
          _buildIdpRequest(SS) {
            const HS = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return SS && (HS.idToken = SS), HS
          }
        }

        function Xb(SS) {
          return Qg(SS.auth, new bb(SS), SS.bypassAuthState)
        }

        function xb(SS) {
          const {
            auth: HS,
            user: gS
          } = SS;
          return JS(gS, HS, "internal-error"), Pg(gS, new bb(SS), SS.bypassAuthState)
        }
        async function Nb(SS) {
          const {
            auth: HS,
            user: gS
          } = SS;
          return JS(gS, HS, "internal-error"), Cg(gS, new bb(SS), SS.bypassAuthState)
        }
        class qb {
          constructor(SS, HS, gS, tS) {
            let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = SS, this.resolver = gS, this.user = tS, this.bypassAuthState = bS, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(HS) ? HS : [HS]
          }
          execute() {
            return new Promise((async (SS, HS) => {
              this.pendingPromise = {
                resolve: SS,
                reject: HS
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (gS) {
                this.reject(gS)
              }
            }))
          }
          async onAuthEvent(SS) {
            const {
              urlResponse: HS,
              sessionId: gS,
              postBody: tS,
              tenantId: bS,
              error: XS,
              type: xS
            } = SS;
            if (XS) return void this.reject(XS);
            const NS = {
              auth: this.auth,
              requestUri: HS,
              sessionId: gS,
              tenantId: bS || void 0,
              postBody: tS || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(xS)(NS))
            } catch (qS) {
              this.reject(qS)
            }
          }
          onError(SS) {
            this.reject(SS)
          }
          getIdpTask(SS) {
            switch (SS) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Xb;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Nb;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return xb;
              default:
                QS(this.auth, "internal-error")
            }
          }
          resolve(SS) {
            dS(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(SS), this.unregisterAndCleanUp()
          }
          reject(SS) {
            dS(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(SS), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const ub = new LS(2e3, 1e4);
        async function Ib(SS, HS, gS) {
          const tS = LH(SS);
          hS(SS, HS, Sg);
          const bS = tb(tS, gS);
          return new ab(tS, "signInViaPopup", HS, bS).executeNotNull()
        }
        async function fb(SS, HS, gS) {
          const bS = (0, tS.J)(SS);
          hS(bS.auth, HS, Sg);
          const XS = tb(bS.auth, gS);
          return new ab(bS.auth, "reauthViaPopup", HS, XS, bS).executeNotNull()
        }
        async function kb(SS, HS, gS) {
          const bS = (0, tS.J)(SS);
          hS(bS.auth, HS, Sg);
          const XS = tb(bS.auth, gS);
          return new ab(bS.auth, "linkViaPopup", HS, XS, bS).executeNotNull()
        }
        class ab extends qb {
          constructor(SS, HS, gS, tS, bS) {
            super(SS, HS, tS, bS), this.provider = gS, this.authWindow = null, this.pollId = null, ab.currentPopupAction && ab.currentPopupAction.cancel(), ab.currentPopupAction = this
          }
          async executeNotNull() {
            const SS = await this.execute();
            return JS(SS, this.auth, "internal-error"), SS
          }
          async onExecution() {
            dS(1 === this.filter.length, "Popup operations only handle one event");
            const SS = Zt();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], SS), this.authWindow.associatedEvent = SS, this.resolver._originValidation(this.auth).catch((SS => {
              this.reject(SS)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (SS => {
              SS || this.reject(DS(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var SS;
            return (null === (SS = this.authWindow) || void 0 === SS ? void 0 : SS.associatedEvent) || null
          }
          cancel() {
            this.reject(DS(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, ab.currentPopupAction = null
          }
          pollUserCancellation() {
            const SS = () => {
              var HS, gS;
              (null === (gS = null === (HS = this.authWindow) || void 0 === HS ? void 0 : HS.window) || void 0 === gS ? void 0 : gS.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(DS(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(SS, ub.get())
            };
            SS()
          }
        }
        ab.currentPopupAction = null;
        const Kb = "pendingRedirect",
          jb = new Map;
        class Gb extends qb {
          constructor(SS, HS) {
            super(SS, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], HS, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let SS = jb.get(this.auth._key());
            if (!SS) {
              try {
                const HS = await async function(SS, HS) {
                  const gS = Qb(HS),
                    tS = Pb(SS);
                  if (!await tS._isAvailable()) return !1;
                  const bS = "true" === await tS._get(gS);
                  return await tS._remove(gS), bS
                }(this.resolver, this.auth) ? await super.execute() : null;
                SS = () => Promise.resolve(HS)
              } catch (HS) {
                SS = () => Promise.reject(HS)
              }
              jb.set(this.auth._key(), SS)
            }
            return this.bypassAuthState || jb.set(this.auth._key(), (() => Promise.resolve(null))), SS()
          }
          async onAuthEvent(SS) {
            if ("signInViaRedirect" === SS.type) return super.onAuthEvent(SS);
            if ("unknown" !== SS.type) {
              if (SS.eventId) {
                const HS = await this.auth._redirectUserForId(SS.eventId);
                if (HS) return this.user = HS, super.onAuthEvent(SS);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Cb(SS, HS) {
          return Pb(SS)._set(Qb(HS), "true")
        }

        function nb(SS, HS) {
          jb.set(SS._key(), HS)
        }

        function Pb(SS) {
          return XH(SS._redirectPersistence)
        }

        function Qb(SS) {
          return qH(Kb, SS.config.apiKey, SS.name)
        }

        function Db(SS, HS, gS) {
          return async function(SS, HS, gS) {
            const tS = LH(SS);
            hS(SS, HS, Sg), await tS._initializationPromise;
            const bS = tb(tS, gS);
            return await Cb(bS, tS), bS._openRedirect(tS, HS, "signInViaRedirect")
          }(SS, HS, gS)
        }

        function wb(SS, HS, gS) {
          return async function(SS, HS, gS) {
            const bS = (0, tS.J)(SS);
            hS(bS.auth, HS, Sg), await bS.auth._initializationPromise;
            const XS = tb(bS.auth, gS);
            await Cb(XS, bS.auth);
            const xS = await Ob(bS);
            return XS._openRedirect(bS.auth, HS, "reauthViaRedirect", xS)
          }(SS, HS, gS)
        }

        function hb(SS, HS, gS) {
          return async function(SS, HS, gS) {
            const bS = (0, tS.J)(SS);
            hS(bS.auth, HS, Sg), await bS.auth._initializationPromise;
            const XS = tb(bS.auth, gS);
            await ng(!1, bS, HS.providerId), await Cb(XS, bS.auth);
            const xS = await Ob(bS);
            return XS._openRedirect(bS.auth, HS, "linkViaRedirect", xS)
          }(SS, HS, gS)
        }
        async function Zb(SS, HS) {
          return await LH(SS)._initializationPromise, Jb(SS, HS, !1)
        }
        async function Jb(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const tS = LH(SS),
            bS = tb(tS, HS),
            XS = new Gb(tS, bS, gS),
            xS = await XS.execute();
          return xS && !gS && (delete xS.user._redirectEventId, await tS._persistUserIfCurrent(xS.user), await tS._setRedirectUser(null, HS)), xS
        }
        async function Ob(SS) {
          const HS = Zt(`${SS.uid}:::`);
          return SS._redirectEventId = HS, await SS.auth._setRedirectUser(SS), await SS.auth._persistUserIfCurrent(SS), HS
        }
        class db {
          constructor(SS) {
            this.auth = SS, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(SS) {
            this.consumers.add(SS), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, SS) && (this.sendToConsumer(this.queuedRedirectEvent, SS), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(SS) {
            this.consumers.delete(SS)
          }
          onEvent(SS) {
            if (this.hasEventBeenHandled(SS)) return !1;
            let HS = !1;
            return this.consumers.forEach((gS => {
              this.isEventForConsumer(SS, gS) && (HS = !0, this.sendToConsumer(SS, gS), this.saveEventToCache(SS))
            })), this.hasHandledPotentialRedirect || ! function(SS) {
              switch (SS.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return vb(SS);
                default:
                  return !1
              }
            }(SS) || (this.hasHandledPotentialRedirect = !0, HS || (this.queuedRedirectEvent = SS, HS = !0)), HS
          }
          sendToConsumer(SS, HS) {
            var gS;
            if (SS.error && !vb(SS)) {
              const tS = (null === (gS = SS.error.code) || void 0 === gS ? void 0 : gS.split("auth/")[1]) || "internal-error";
              HS.onError(DS(this.auth, tS))
            } else HS.onAuthEvent(SS)
          }
          isEventForConsumer(SS, HS) {
            const gS = null === HS.eventId || !!SS.eventId && SS.eventId === HS.eventId;
            return HS.filter.includes(SS.type) && gS
          }
          hasEventBeenHandled(SS) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(cb(SS))
          }
          saveEventToCache(SS) {
            this.cachedEventUids.add(cb(SS)), this.lastProcessedEventTime = Date.now()
          }
        }

        function cb(SS) {
          return [SS.type, SS.eventId, SS.sessionId, SS.tenantId].filter((SS => SS)).join("-")
        }

        function vb(SS) {
          let {
            type: HS,
            error: gS
          } = SS;
          return "unknown" === HS && "auth/no-auth-event" === (null === gS || void 0 === gS ? void 0 : gS.code)
        }
        const Eb = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Lb = /^https?/;
        async function Yb(SS) {
          if (SS.config.emulator) return;
          const {
            authorizedDomains: HS
          } = await async function(SS) {
            return WS(SS, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(SS);
          for (const tS of HS) try {
            if (Ab(tS)) return
          } catch (gS) {}
          QS(SS, "unauthorized-domain")
        }

        function Ab(SS) {
          const HS = cS(),
            {
              protocol: gS,
              hostname: tS
            } = new URL(HS);
          if (SS.startsWith("chrome-extension://")) {
            const bS = new URL(SS);
            return "" === bS.hostname && "" === tS ? "chrome-extension:" === gS && SS.replace("chrome-extension://", "") === HS.replace("chrome-extension://", "") : "chrome-extension:" === gS && bS.hostname === tS
          }
          if (!Lb.test(gS)) return !1;
          if (Eb.test(SS)) return tS === SS;
          const bS = SS.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + bS + "|" + bS + ")$", "i").test(tS)
        }
        const yb = new LS(3e4, 6e4);

        function Vb() {
          const SS = Ot().___jsl;
          if (null === SS || void 0 === SS ? void 0 : SS.H)
            for (const HS of Object.keys(SS.H))
              if (SS.H[HS].r = SS.H[HS].r || [], SS.H[HS].L = SS.H[HS].L || [], SS.H[HS].r = [...SS.H[HS].L], SS.CP)
                for (let gS = 0; gS < SS.CP.length; gS++) SS.CP[gS] = null
        }
        let ib = null;

        function Wb(SS) {
          return ib = ib || function(SS) {
            return new Promise(((HS, gS) => {
              var tS, bS, XS;

              function xS() {
                Vb(), gapi.load("gapi.iframes", {
                  callback: () => {
                    HS(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Vb(), gS(DS(SS, "network-request-failed"))
                  },
                  timeout: yb.get()
                })
              }
              if (null === (bS = null === (tS = Ot().gapi) || void 0 === tS ? void 0 : tS.iframes) || void 0 === bS ? void 0 : bS.Iframe) HS(gapi.iframes.getContext());
              else {
                if (!(null === (XS = Ot().gapi) || void 0 === XS ? void 0 : XS.load)) {
                  const HS = OH("iframefcb");
                  return Ot()[HS] = () => {
                    gapi.load ? xS() : gS(DS(SS, "network-request-failed"))
                  }, JH(`https://apis.google.com/js/api.js?onload=${HS}`).catch((SS => gS(SS)))
                }
                xS()
              }
            })).catch((SS => {
              throw ib = null, SS
            }))
          }(SS), ib
        }
        const zb = new LS(5e3, 15e3),
          Ub = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          pb = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function sb(SS) {
          const HS = SS.config;
          JS(HS.authDomain, SS, "auth-domain-config-required");
          const gS = HS.emulator ? YS(HS, "emulator/auth/iframe") : `https://${SS.config.authDomain}/__/auth/iframe`,
            XS = {
              apiKey: HS.apiKey,
              appName: SS.name,
              v: bS.d
            },
            xS = pb.get(SS.config.apiHost);
          xS && (XS.eid = xS);
          const NS = SS._getFrameworks();
          return NS.length && (XS.fw = NS.join(",")), `${gS}?${(0,tS.db)(XS).slice(1)}`
        }
        const Bb = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Mb {
          constructor(SS) {
            this.window = SS, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (SS) {}
          }
        }

        function Fb(SS, HS, gS) {
          let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const xS = Math.max((window.screen.availHeight - XS) / 2, 0).toString(),
            NS = Math.max((window.screen.availWidth - bS) / 2, 0).toString();
          let qS = "";
          const uS = Object.assign(Object.assign({}, Bb), {
              width: bS.toString(),
              height: XS.toString(),
              top: xS,
              left: NS
            }),
            IS = (0, tS.N)().toLowerCase();
          gS && (qS = aH(IS) ? "_blank" : gS), fH(IS) && (HS = HS || "http://localhost", uS.scrollbars = "yes");
          const fS = Object.entries(uS).reduce(((SS, HS) => {
            let [gS, tS] = HS;
            return `${SS}${gS}=${tS},`
          }), "");
          if (function() {
              var SS;
              return nH(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.N)()) && !!(null === (SS = window.navigator) || void 0 === SS ? void 0 : SS.standalone)
            }(IS) && "_self" !== qS) return function(SS, HS) {
            const gS = document.createElement("a");
            gS.href = SS, gS.target = HS;
            const tS = document.createEvent("MouseEvent");
            tS.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), gS.dispatchEvent(tS)
          }(HS || "", qS), new Mb(null);
          const kS = window.open(HS || "", qS, fS);
          JS(kS, SS, "popup-blocked");
          try {
            kS.focus()
          } catch (aS) {}
          return new Mb(kS)
        }
        const Rb = "__/auth/handler",
          Tb = "emulator/auth/handler",
          ob = encodeURIComponent("fac");
        async function lb(SS, HS, gS, XS, xS, NS) {
            JS(SS.config.authDomain, SS, "auth-domain-config-required"), JS(SS.config.apiKey, SS, "invalid-api-key");
            const qS = {
              apiKey: SS.config.apiKey,
              appName: SS.name,
              authType: gS,
              redirectUrl: XS,
              v: bS.d,
              eventId: xS
            };
            if (HS instanceof Sg) {
              HS.setDefaultLanguage(SS.languageCode), qS.providerId = HS.providerId || "", (0, tS.R)(HS.getCustomParameters()) || (qS.customParameters = JSON.stringify(HS.getCustomParameters()));
              for (const [SS, HS] of Object.entries(NS || {})) qS[SS] = HS
            }
            if (HS instanceof Hg) {
              const SS = HS.getScopes().filter((SS => "" !== SS));
              SS.length > 0 && (qS.scopes = SS.join(","))
            }
            SS.tenantId && (qS.tid = SS.tenantId);
            const uS = qS;
            for (const tS of Object.keys(uS)) void 0 === uS[tS] && delete uS[tS];
            const IS = await SS._getAppCheckToken(),
              fS = IS ? `#${ob}=${encodeURIComponent(IS)}` : "";
            return `${function(SS){let{config:HS}=SS;if(!HS.emulator)return`
            https: //${HS.authDomain}/${Rb}`;return YS(HS,Tb)}(SS)}?${(0,tS.db)(uS).slice(1)}${fS}`}const mb="webStorageSupport";const eb=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=Jb,this._overrideRedirectResult=nb}async _openPopup(SS,HS,gS,tS){var bS;dS(null===(bS=this.eventManagers[SS._key()])||void 0===bS?void 0:bS.manager,"_initialize() not called before _openPopup()");return Fb(SS,await lb(SS,HS,gS,cS(),tS),Zt())}async _openRedirect(SS,HS,gS,tS){await this._originValidation(SS);return function(SS){Ot().location.href=SS}(await lb(SS,HS,gS,cS(),tS)),new Promise((()=>{}))}_initialize(SS){const HS=SS._key();if(this.eventManagers[HS]){const{manager:SS,promise:gS}=this.eventManagers[HS];return SS?Promise.resolve(SS):(dS(gS,"If manager is not set, promise should be"),gS)}const gS=this.initAndGetManager(SS);return this.eventManagers[HS]={promise:gS},gS.catch((()=>{delete this.eventManagers[HS]})),gS}async initAndGetManager(SS){const HS=await async function(SS){const HS=await Wb(SS),gS=Ot().gapi;return JS(gS,SS,"internal-error"),HS.open({where:document.body,url:sb(SS),messageHandlersFilter:gS.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ub,dontclear:!0},(HS=>new Promise((async(gS,tS)=>{await HS.restyle({setHideOnLeave:!1});const bS=DS(SS,"network-request-failed"),XS=Ot().setTimeout((()=>{tS(bS)}),zb.get());function xS(){Ot().clearTimeout(XS),gS(HS)}HS.ping(xS).then(xS,(()=>{tS(bS)}))}))))}(SS),gS=new db(SS);return HS.register("authEvent",(HS=>{JS(null===HS||void 0===HS?void 0:HS.authEvent,SS,"invalid-auth-event");return{status:gS.onEvent(HS.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[SS._key()]={manager:gS},this.iframes[SS._key()]=HS,gS}_isIframeWebStorageSupported(SS,HS){this.iframes[SS._key()].send(mb,{type:mb},(gS=>{var tS;const bS=null===(tS=null===gS||void 0===gS?void 0:gS[0])||void 0===tS?void 0:tS[mb];void 0!==bS&&HS(!!bS),QS(SS,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(SS){const HS=SS._key();return this.originValidationPromises[HS]||(this.originValidationPromises[HS]=Yb(SS)),this.originValidationPromises[HS]}get _shouldInitProactively(){return PH()||kH()||nH()}};class rb{constructor(SS){this.factorId=SS}_process(SS,HS,gS){switch(HS.type){case"enroll":return this._finalizeEnroll(SS,HS.credential,gS);case"signin":return this._finalizeSignIn(SS,HS.credential);default:return OS("unexpected MultiFactorSessionType")}}}class SX extends rb{constructor(SS){super("phone"),this.credential=SS}static _fromCredential(SS){return new SX(SS)}_finalizeEnroll(SS,HS,gS){return function(SS,HS){return WS(SS,"POST","/v2/accounts/mfaEnrollment:finalize",iS(SS,HS))}(SS,{idToken:HS,displayName:gS,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(SS,HS){return function(SS,HS){return WS(SS,"POST","/v2/accounts/mfaSignIn:finalize",iS(SS,HS))}(SS,{mfaPendingCredential:HS,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class HX{constructor(){}static assertion(SS){return SX._fromCredential(SS)}}HX.FACTOR_ID="phone";class gX{static assertionForEnrollment(SS,HS){return tX._fromSecret(SS,HS)}static assertionForSignIn(SS,HS){return tX._fromEnrollmentId(SS,HS)}static async generateSecret(SS){const HS=SS;JS("undefined"!==typeof HS.auth,"internal-error");const gS=await(tS=HS.auth,bS={idToken:HS.credential,totpEnrollmentInfo:{}},WS(tS,"POST","/v2/accounts/mfaEnrollment:start",iS(tS,bS)));var tS,bS;return bX._fromStartTotpMfaEnrollmentResponse(gS,HS.auth)}}gX.FACTOR_ID="totp";class tX extends rb{constructor(SS,HS,gS){super("totp"),this.otp=SS,this.enrollmentId=HS,this.secret=gS}static _fromSecret(SS,HS){return new tX(HS,void 0,SS)}static _fromEnrollmentId(SS,HS){return new tX(HS,SS)}async _finalizeEnroll(SS,HS,gS){return JS("undefined"!==typeof this.secret,SS,"argument-error"),function(SS,HS){return WS(SS,"POST","/v2/accounts/mfaEnrollment:finalize",iS(SS,HS))}(SS,{idToken:HS,displayName:gS,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(SS,HS){JS(void 0!==this.enrollmentId&&void 0!==this.otp,SS,"argument-error");const gS={verificationCode:this.otp};return function(SS,HS){return WS(SS,"POST","/v2/accounts/mfaSignIn:finalize",iS(SS,HS))}(SS,{mfaPendingCredential:HS,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:gS})}}class bX{constructor(SS,HS,gS,tS,bS,XS,xS){this.sessionInfo=XS,this.auth=xS,this.secretKey=SS,this.hashingAlgorithm=HS,this.codeLength=gS,this.codeIntervalSeconds=tS,this.enrollmentCompletionDeadline=bS}static _fromStartTotpMfaEnrollmentResponse(SS,HS){return new bX(SS.totpSessionInfo.sharedSecretKey,SS.totpSessionInfo.hashingAlgorithm,SS.totpSessionInfo.verificationCodeLength,SS.totpSessionInfo.periodSec,new Date(SS.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),SS.totpSessionInfo.sessionInfo,HS)}_makeTotpVerificationInfo(SS){return{sessionInfo:this.sessionInfo,verificationCode:SS}}generateQrCodeUrl(SS,HS){var gS;let tS=!1;return(XX(SS)||XX(HS))&&(tS=!0),tS&&(XX(SS)&&(SS=(null===(gS=this.auth.currentUser)||void 0===gS?void 0:gS.email)||"unknownuser"),XX(HS)&&(HS=this.auth.name)),`otpauth://totp/${HS}:${SS}?secret=${this.secretKey}&issuer=${HS}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function XX(SS){return"undefined"===typeof SS||0===(null===SS||void 0===SS?void 0:SS.length)}var xX="@firebase/auth",NX="0.23.2";class qX{constructor(SS){this.auth=SS,this.internalListeners=new Map}getUid(){var SS;return this.assertAuthConfigured(),(null===(SS=this.auth.currentUser)||void 0===SS?void 0:SS.uid)||null}async getToken(SS){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(SS)}}addAuthTokenListener(SS){if(this.assertAuthConfigured(),this.internalListeners.has(SS))return;const HS=this.auth.onIdTokenChanged((HS=>{SS((null===HS||void 0===HS?void 0:HS.stsTokenManager.accessToken)||null)}));this.internalListeners.set(SS,HS),this.updateProactiveRefresh()}removeAuthTokenListener(SS){this.assertAuthConfigured();const HS=this.internalListeners.get(SS);HS&&(this.internalListeners.delete(SS),HS(),this.updateProactiveRefresh())}assertAuthConfigured(){JS(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const uX=(0,tS.G)("authIdTokenMaxAge")||300;let IX=null;const fX=SS=>async HS=>{const gS=HS&&await HS.getIdTokenResult(),tS=gS&&((new Date).getTime()-Date.parse(gS.issuedAtTime))/1e3;if(tS&&tS>uX)return;const bS=null===gS||void 0===gS?void 0:gS.token;IX!==bS&&(IX=bS,await fetch(SS,{method:bS?"POST":"DELETE",headers:bS?{Authorization:`Bearer ${bS}`}:{}}))};function kX(){let SS=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,bS.M)();const HS=(0,bS.z)(SS,"auth");if(HS.isInitialized())return HS.getImmediate();const gS=AH(SS,{popupRedirectResolver:eb,persistence:[Wt,Qt,wt]}),XS=(0,tS.G)("authTokenSyncURL");if(XS){const SS=fX(XS);bt(gS,SS,(()=>SS(gS.currentUser))),tt(gS,(HS=>SS(HS)))}const xS=(0,tS.C)("auth");return xS&&yH(gS,`http://${xS}`),gS}var aX;aX="Browser",(0,bS.A)(new NS.d("auth",((SS,HS)=>{let{options:gS}=HS;const tS=SS.getProvider("app").getImmediate(),bS=SS.getProvider("heartbeat"),XS=SS.getProvider("app-check-internal"),{apiKey:xS,authDomain:NS}=tS.options;JS(xS&&!xS.includes(":"),"invalid-api-key",{appName:tS.name});const qS={apiKey:xS,authDomain:NS,clientPlatform:aX,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QH(aX)},uS=new EH(tS,bS,XS,qS);return function(SS,HS){const gS=(null===HS||void 0===HS?void 0:HS.persistence)||[],tS=(Array.isArray(gS)?gS:[gS]).map(XH);(null===HS||void 0===HS?void 0:HS.errorMap)&&SS._updateErrorMap(HS.errorMap),SS._initializeWithPersistence(tS,null===HS||void 0===HS?void 0:HS.popupRedirectResolver)}(uS,gS),uS}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((SS,HS,gS)=>{SS.getProvider("auth-internal").initialize()}))),(0,bS.A)(new NS.d("auth-internal",(SS=>(SS=>new qX(SS))(LH(SS.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,bS.T)(xX,NX,function(SS){switch(SS){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(aX)),(0,bS.T)(xX,NX,"esm2017")}};Object.freeze(modules);for(const SS in modules)Object.freeze(modules[SS]);