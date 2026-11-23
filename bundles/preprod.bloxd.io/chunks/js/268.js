/*! For license information please see w4ddu.268.c9290842.chunk.js.LICENSE.txt */
export const id = 268;
export const ids = [268];
export const modules = {
    40364: (CC, zC, ZC) => {
        ZC.r(zC), ZC.d(zC, {
          ActionCodeOperation: () => NC,
          ActionCodeURL: () => Oz,
          AuthCredential: () => uz,
          AuthErrorCodes: () => PC,
          EmailAuthCredential: () => jz,
          EmailAuthProvider: () => Vz,
          FacebookAuthProvider: () => QZ,
          FactorId: () => oC,
          GithubAuthProvider: () => bZ,
          GoogleAuthProvider: () => wZ,
          OAuthCredential: () => Lz,
          OAuthProvider: () => ZZ,
          OperationType: () => WC,
          PhoneAuthCredential: () => Bz,
          PhoneAuthProvider: () => zw,
          PhoneMultiFactorGenerator: () => zb,
          ProviderId: () => qC,
          RecaptchaVerifier: () => LQ,
          SAMLAuthProvider: () => fZ,
          SignInMethod: () => FC,
          TotpMultiFactorGenerator: () => Zb,
          TotpSecret: () => wb,
          TwitterAuthProvider: () => oZ,
          applyActionCode: () => mZ,
          beforeAuthStateChanged: () => wQ,
          browserLocalPersistence: () => RQ,
          browserPopupRedirectResolver: () => kw,
          browserSessionPersistence: () => xQ,
          checkActionCode: () => HZ,
          confirmPasswordReset: () => dZ,
          connectAuthEmulator: () => lz,
          createUserWithEmailAndPassword: () => lZ,
          debugErrorMap: () => gC,
          deleteUser: () => qQ,
          fetchSignInMethodsForEmail: () => sZ,
          getAdditionalUserInfo: () => CQ,
          getAuth: () => Nb,
          getIdToken: () => jC,
          getIdTokenResult: () => yC,
          getMultiFactorResolver: () => NQ,
          getRedirectResult: () => Iw,
          inMemoryPersistence: () => fz,
          indexedDBLocalPersistence: () => cQ,
          initializeAuth: () => Ez,
          initializeRecaptchaConfig: () => ZQ,
          isSignInWithEmailLink: () => uZ,
          linkWithCredential: () => JZ,
          linkWithPhoneNumber: () => OQ,
          linkWithPopup: () => Ww,
          linkWithRedirect: () => Jw,
          multiFactor: () => SQ,
          onAuthStateChanged: () => bQ,
          onIdTokenChanged: () => QQ,
          parseActionCodeURL: () => kz,
          prodErrorMap: () => SC,
          reauthenticateWithCredential: () => IZ,
          reauthenticateWithPhoneNumber: () => kQ,
          reauthenticateWithPopup: () => Fw,
          reauthenticateWithRedirect: () => xw,
          reload: () => Cz,
          sendEmailVerification: () => TZ,
          sendPasswordResetEmail: () => YZ,
          sendSignInLinkToEmail: () => cZ,
          setPersistence: () => zQ,
          signInAnonymously: () => NZ,
          signInWithCredential: () => xZ,
          signInWithCustomToken: () => iZ,
          signInWithEmailAndPassword: () => XZ,
          signInWithEmailLink: () => rZ,
          signInWithPhoneNumber: () => BQ,
          signInWithPopup: () => qw,
          signInWithRedirect: () => Aw,
          signOut: () => oQ,
          unlink: () => pZ,
          updateCurrentUser: () => fQ,
          updateEmail: () => DZ,
          updatePassword: () => jZ,
          updatePhoneNumber: () => Cw,
          updateProfile: () => tZ,
          useDeviceLanguage: () => nQ,
          verifyBeforeUpdateEmail: () => aZ,
          verifyPasswordResetCode: () => EZ
        });
        var QC = ZC(40340),
          wC = ZC(40329);

        function bC(CC, zC) {
          var ZC = {};
          for (var QC in CC) Object.prototype.hasOwnProperty.call(CC, QC) && zC.indexOf(QC) < 0 && (ZC[QC] = CC[QC]);
          if (null != CC && "function" === typeof Object.getOwnPropertySymbols) {
            var wC = 0;
            for (QC = Object.getOwnPropertySymbols(CC); wC < QC.length; wC++) zC.indexOf(QC[wC]) < 0 && Object.prototype.propertyIsEnumerable.call(CC, QC[wC]) && (ZC[QC[wC]] = CC[QC[wC]])
          }
          return ZC
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var nC = ZC(40349),
          fC = ZC(40336);
        const oC = {
            PHONE: "phone",
            TOTP: "totp"
          },
          qC = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          FC = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          WC = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          NC = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function MC() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const gC = function() {
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
          SC = MC,
          pC = new QC.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          PC = {
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
          GC = new nC.c("@firebase/auth");

        function RC(CC) {
          if (GC.logLevel <= nC.b.ERROR) {
            for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
            GC.error(`Auth (${wC.i}): ${CC}`, ...ZC)
          }
        }

        function AC(CC) {
          for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
          throw iC(CC, ...ZC)
        }

        function xC(CC) {
          for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
          return iC(CC, ...ZC)
        }

        function JC(CC, zC, ZC) {
          const wC = Object.assign(Object.assign({}, SC()), {
            [zC]: ZC
          });
          return new QC.g("auth", "Firebase", wC).create(zC, {
            appName: CC.name
          })
        }

        function IC(CC, zC, ZC) {
          if (!(zC instanceof ZC)) throw ZC.name !== zC.constructor.name && AC(CC, "argument-error"), JC(CC, "argument-error", `Type of ${zC.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function iC(CC) {
          for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
          if ("string" !== typeof CC) {
            const zC = ZC[0],
              QC = [...ZC.slice(1)];
            return QC[0] && (QC[0].appName = CC.name), CC._errorFactory.create(zC, ...QC)
          }
          return pC.create(CC, ...ZC)
        }

        function vC(CC, zC) {
          if (!CC) {
            for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
            throw iC(zC, ...QC)
          }
        }

        function eC(CC) {
          const zC = "INTERNAL ASSERTION FAILED: " + CC;
          throw RC(zC), new Error(zC)
        }

        function hC(CC, zC) {
          CC || eC(zC)
        }

        function KC() {
          var CC;
          return "undefined" !== typeof self && (null === (CC = self.location) || void 0 === CC ? void 0 : CC.href) || ""
        }

        function YC() {
          return "http:" === dC() || "https:" === dC()
        }

        function dC() {
          var CC;
          return "undefined" !== typeof self && (null === (CC = self.location) || void 0 === CC ? void 0 : CC.protocol) || null
        }
        class mC {
          constructor(CC, zC) {
            this.shortDelay = CC, this.longDelay = zC, hC(zC > CC, "Short delay should be less than long delay!"), this.isMobile = (0, QC.cb)() || (0, QC.gb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (YC() || (0, QC.R)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function HC(CC, zC) {
          hC(CC.emulator, "Emulator should always be set here");
          const {
            url: ZC
          } = CC.emulator;
          return zC ? `${ZC}${zC.startsWith("/")?zC.slice(1):zC}` : ZC
        }
        class EC {
          static initialize(CC, zC, ZC) {
            this.fetchImpl = CC, zC && (this.headersImpl = zC), ZC && (this.responseImpl = ZC)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void eC("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void eC("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void eC("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const lC = {
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
          XC = new mC(3e4, 6e4);

        function cC(CC, zC) {
          return CC.tenantId && !zC.tenantId ? Object.assign(Object.assign({}, zC), {
            tenantId: CC.tenantId
          }) : zC
        }
        async function uC(CC, zC, ZC, wC) {
          return rC(CC, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let bC = {},
              nC = {};
            wC && ("GET" === zC ? nC = wC : bC = {
              body: JSON.stringify(wC)
            });
            const fC = (0, QC.jb)(Object.assign({
                key: CC.config.apiKey
              }, nC)).slice(1),
              oC = await CC._getAdditionalHeaders();
            return oC["Content-Type"] = "application/json", CC.languageCode && (oC["X-Firebase-Locale"] = CC.languageCode), EC.fetch()(TC(CC, CC.config.apiHost, ZC, fC), Object.assign({
              method: zC,
              headers: oC,
              referrerPolicy: "no-referrer"
            }, bC))
          }))
        }
        async function rC(CC, zC, ZC) {
          CC._canInitEmulator = !1;
          const wC = Object.assign(Object.assign({}, lC), zC);
          try {
            const zC = new aC(CC),
              QC = await Promise.race([ZC(), zC.promise]);
            zC.clearNetworkTimeout();
            const bC = await QC.json();
            if ("needConfirmation" in bC) throw tC(CC, "account-exists-with-different-credential", bC);
            if (QC.ok && !("errorMessage" in bC)) return bC;
            {
              const zC = QC.ok ? bC.errorMessage : bC.error.message,
                [ZC, nC] = zC.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === ZC) throw tC(CC, "credential-already-in-use", bC);
              if ("EMAIL_EXISTS" === ZC) throw tC(CC, "email-already-in-use", bC);
              if ("USER_DISABLED" === ZC) throw tC(CC, "user-disabled", bC);
              const fC = wC[ZC] || ZC.toLowerCase().replace(/[_\s]+/g, "-");
              if (nC) throw JC(CC, fC, nC);
              AC(CC, fC)
            }
          } catch (bC) {
            if (bC instanceof QC.j) throw bC;
            AC(CC, "network-request-failed", {
              message: String(bC)
            })
          }
        }
        async function sC(CC, zC, ZC, QC) {
          let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const bC = await uC(CC, zC, ZC, QC, wC);
          return "mfaPendingCredential" in bC && AC(CC, "multi-factor-auth-required", {
            _serverResponse: bC
          }), bC
        }

        function TC(CC, zC, ZC, QC) {
          const wC = `${zC}${ZC}?${QC}`;
          return CC.config.emulator ? HC(CC.config, wC) : `${CC.config.apiScheme}://${wC}`
        }
        class aC {
          constructor(CC) {
            this.auth = CC, this.timer = null, this.promise = new Promise(((CC, zC) => {
              this.timer = setTimeout((() => zC(xC(this.auth, "network-request-failed"))), XC.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function tC(CC, zC, ZC) {
          const QC = {
            appName: CC.name
          };
          ZC.email && (QC.email = ZC.email), ZC.phoneNumber && (QC.phoneNumber = ZC.phoneNumber);
          const wC = xC(CC, zC, QC);
          return wC.customData._tokenResponse = ZC, wC
        }

        function DC(CC) {
          if (CC) try {
            const zC = new Date(Number(CC));
            if (!isNaN(zC.getTime())) return zC.toUTCString()
          } catch (zC) {}
        }

        function jC(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, QC.L)(CC).getIdToken(zC)
        }
        async function yC(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const ZC = (0, QC.L)(CC),
            wC = await ZC.getIdToken(zC),
            bC = UC(wC);
          vC(bC && bC.exp && bC.auth_time && bC.iat, ZC.auth, "internal-error");
          const nC = "object" === typeof bC.firebase ? bC.firebase : void 0,
            fC = null === nC || void 0 === nC ? void 0 : nC.sign_in_provider;
          return {
            claims: bC,
            token: wC,
            authTime: DC(LC(bC.auth_time)),
            issuedAtTime: DC(LC(bC.iat)),
            expirationTime: DC(LC(bC.exp)),
            signInProvider: fC || null,
            signInSecondFactor: (null === nC || void 0 === nC ? void 0 : nC.sign_in_second_factor) || null
          }
        }

        function LC(CC) {
          return 1e3 * Number(CC)
        }

        function UC(CC) {
          const [zC, ZC, wC] = CC.split(".");
          if (void 0 === zC || void 0 === ZC || void 0 === wC) return RC("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const CC = (0, QC.p)(ZC);
            return CC ? JSON.parse(CC) : (RC("Failed to decode base64 JWT payload"), null)
          } catch (bC) {
            return RC("Caught error parsing JWT payload as JSON", null === bC || void 0 === bC ? void 0 : bC.toString()), null
          }
        }
        async function BC(CC, zC) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return zC;
          try {
            return await zC
          } catch (ZC) {
            throw ZC instanceof QC.j && function(CC) {
              let {
                code: zC
              } = CC;
              return "auth/user-disabled" === zC || "auth/user-token-expired" === zC
            }(ZC) && CC.auth.currentUser === CC && await CC.auth.signOut(), ZC
          }
        }
        class OC {
          constructor(CC) {
            this.user = CC, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(CC) {
            var zC;
            if (CC) {
              const CC = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), CC
            } {
              this.errorBackoff = 3e4;
              const CC = (null !== (zC = this.user.stsTokenManager.expirationTime) && void 0 !== zC ? zC : 0) - Date.now() - 3e5;
              return Math.max(0, CC)
            }
          }
          schedule() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const zC = this.getInterval(CC);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), zC)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (CC) {
              return void("auth/network-request-failed" === (null === CC || void 0 === CC ? void 0 : CC.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class kC {
          constructor(CC, zC) {
            this.createdAt = CC, this.lastLoginAt = zC, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = DC(this.lastLoginAt), this.creationTime = DC(this.createdAt)
          }
          _copy(CC) {
            this.createdAt = CC.createdAt, this.lastLoginAt = CC.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function VC(CC) {
          var zC;
          const ZC = CC.auth,
            QC = await CC.getIdToken(),
            wC = await BC(CC, async function(CC, zC) {
              return uC(CC, "POST", "/v1/accounts:lookup", zC)
            }(ZC, {
              idToken: QC
            }));
          vC(null === wC || void 0 === wC ? void 0 : wC.users.length, ZC, "internal-error");
          const nC = wC.users[0];
          CC._notifyReloadListener(nC);
          const fC = (null === (zC = nC.providerUserInfo) || void 0 === zC ? void 0 : zC.length) ? nC.providerUserInfo.map((CC => {
            var {
              providerId: zC
            } = CC, ZC = bC(CC, ["providerId"]);
            return {
              providerId: zC,
              uid: ZC.rawId || "",
              displayName: ZC.displayName || null,
              email: ZC.email || null,
              phoneNumber: ZC.phoneNumber || null,
              photoURL: ZC.photoUrl || null
            }
          })) : [];
          const oC = (qC = CC.providerData, FC = fC, [...qC.filter((CC => !FC.some((zC => zC.providerId === CC.providerId)))), ...FC]);
          var qC, FC;
          const WC = CC.isAnonymous,
            NC = !(CC.email && nC.passwordHash) && !(null === oC || void 0 === oC ? void 0 : oC.length),
            MC = !!WC && NC,
            gC = {
              uid: nC.localId,
              displayName: nC.displayName || null,
              photoURL: nC.photoUrl || null,
              email: nC.email || null,
              emailVerified: nC.emailVerified || !1,
              phoneNumber: nC.phoneNumber || null,
              tenantId: nC.tenantId || null,
              providerData: oC,
              metadata: new kC(nC.createdAt, nC.lastLoginAt),
              isAnonymous: MC
            };
          Object.assign(CC, gC)
        }
        async function Cz(CC) {
          const zC = (0, QC.L)(CC);
          await VC(zC), await zC.auth._persistUserIfCurrent(zC), zC.auth._notifyListenersIfCurrent(zC)
        }
        class zz {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(CC) {
            vC(CC.idToken, "internal-error"), vC("undefined" !== typeof CC.idToken, "internal-error"), vC("undefined" !== typeof CC.refreshToken, "internal-error");
            const zC = "expiresIn" in CC && "undefined" !== typeof CC.expiresIn ? Number(CC.expiresIn) : function(CC) {
              const zC = UC(CC);
              return vC(zC, "internal-error"), vC("undefined" !== typeof zC.exp, "internal-error"), vC("undefined" !== typeof zC.iat, "internal-error"), Number(zC.exp) - Number(zC.iat)
            }(CC.idToken);
            this.updateTokensAndExpiration(CC.idToken, CC.refreshToken, zC)
          }
          async getToken(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return vC(!this.accessToken || this.refreshToken, CC, "user-token-expired"), zC || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(CC, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(CC, zC) {
            const {
              accessToken: ZC,
              refreshToken: wC,
              expiresIn: bC
            } = await async function(CC, zC) {
              const ZC = await rC(CC, {}, (async () => {
                const ZC = (0, QC.jb)({
                    grant_type: "refresh_token",
                    refresh_token: zC
                  }).slice(1),
                  {
                    tokenApiHost: wC,
                    apiKey: bC
                  } = CC.config,
                  nC = TC(CC, wC, "/v1/token", `key=${bC}`),
                  fC = await CC._getAdditionalHeaders();
                return fC["Content-Type"] = "application/x-www-form-urlencoded", EC.fetch()(nC, {
                  method: "POST",
                  headers: fC,
                  body: ZC
                })
              }));
              return {
                accessToken: ZC.access_token,
                expiresIn: ZC.expires_in,
                refreshToken: ZC.refresh_token
              }
            }(CC, zC);
            this.updateTokensAndExpiration(ZC, wC, Number(bC))
          }
          updateTokensAndExpiration(CC, zC, ZC) {
            this.refreshToken = zC || null, this.accessToken = CC || null, this.expirationTime = Date.now() + 1e3 * ZC
          }
          static fromJSON(CC, zC) {
            const {
              refreshToken: ZC,
              accessToken: QC,
              expirationTime: wC
            } = zC, bC = new zz;
            return ZC && (vC("string" === typeof ZC, "internal-error", {
              appName: CC
            }), bC.refreshToken = ZC), QC && (vC("string" === typeof QC, "internal-error", {
              appName: CC
            }), bC.accessToken = QC), wC && (vC("number" === typeof wC, "internal-error", {
              appName: CC
            }), bC.expirationTime = wC), bC
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(CC) {
            this.accessToken = CC.accessToken, this.refreshToken = CC.refreshToken, this.expirationTime = CC.expirationTime
          }
          _clone() {
            return Object.assign(new zz, this.toJSON())
          }
          _performRefresh() {
            return eC("not implemented")
          }
        }

        function Zz(CC, zC) {
          vC("string" === typeof CC || "undefined" === typeof CC, "internal-error", {
            appName: zC
          })
        }
        class Qz {
          constructor(CC) {
            var {
              uid: zC,
              auth: ZC,
              stsTokenManager: QC
            } = CC, wC = bC(CC, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new OC(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = zC, this.auth = ZC, this.stsTokenManager = QC, this.accessToken = QC.accessToken, this.displayName = wC.displayName || null, this.email = wC.email || null, this.emailVerified = wC.emailVerified || !1, this.phoneNumber = wC.phoneNumber || null, this.photoURL = wC.photoURL || null, this.isAnonymous = wC.isAnonymous || !1, this.tenantId = wC.tenantId || null, this.providerData = wC.providerData ? [...wC.providerData] : [], this.metadata = new kC(wC.createdAt || void 0, wC.lastLoginAt || void 0)
          }
          async getIdToken(CC) {
            const zC = await BC(this, this.stsTokenManager.getToken(this.auth, CC));
            return vC(zC, this.auth, "internal-error"), this.accessToken !== zC && (this.accessToken = zC, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), zC
          }
          getIdTokenResult(CC) {
            return yC(this, CC)
          }
          reload() {
            return Cz(this)
          }
          _assign(CC) {
            this !== CC && (vC(this.uid === CC.uid, this.auth, "internal-error"), this.displayName = CC.displayName, this.photoURL = CC.photoURL, this.email = CC.email, this.emailVerified = CC.emailVerified, this.phoneNumber = CC.phoneNumber, this.isAnonymous = CC.isAnonymous, this.tenantId = CC.tenantId, this.providerData = CC.providerData.map((CC => Object.assign({}, CC))), this.metadata._copy(CC.metadata), this.stsTokenManager._assign(CC.stsTokenManager))
          }
          _clone(CC) {
            const zC = new Qz(Object.assign(Object.assign({}, this), {
              auth: CC,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return zC.metadata._copy(this.metadata), zC
          }
          _onReload(CC) {
            vC(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = CC, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(CC) {
            this.reloadListener ? this.reloadListener(CC) : this.reloadUserInfo = CC
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZC = !1;
            CC.idToken && CC.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(CC), ZC = !0), zC && await VC(this), await this.auth._persistUserIfCurrent(this), ZC && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const CC = await this.getIdToken();
            return await BC(this, async function(CC, zC) {
              return uC(CC, "POST", "/v1/accounts:delete", zC)
            }(this.auth, {
              idToken: CC
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
              providerData: this.providerData.map((CC => Object.assign({}, CC))),
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
          static _fromJSON(CC, zC) {
            var ZC, QC, wC, bC, nC, fC, oC, qC;
            const FC = null !== (ZC = zC.displayName) && void 0 !== ZC ? ZC : void 0,
              WC = null !== (QC = zC.email) && void 0 !== QC ? QC : void 0,
              NC = null !== (wC = zC.phoneNumber) && void 0 !== wC ? wC : void 0,
              MC = null !== (bC = zC.photoURL) && void 0 !== bC ? bC : void 0,
              gC = null !== (nC = zC.tenantId) && void 0 !== nC ? nC : void 0,
              SC = null !== (fC = zC._redirectEventId) && void 0 !== fC ? fC : void 0,
              pC = null !== (oC = zC.createdAt) && void 0 !== oC ? oC : void 0,
              PC = null !== (qC = zC.lastLoginAt) && void 0 !== qC ? qC : void 0,
              {
                uid: GC,
                emailVerified: RC,
                isAnonymous: AC,
                providerData: xC,
                stsTokenManager: JC
              } = zC;
            vC(GC && JC, CC, "internal-error");
            const IC = zz.fromJSON(this.name, JC);
            vC("string" === typeof GC, CC, "internal-error"), Zz(FC, CC.name), Zz(WC, CC.name), vC("boolean" === typeof RC, CC, "internal-error"), vC("boolean" === typeof AC, CC, "internal-error"), Zz(NC, CC.name), Zz(MC, CC.name), Zz(gC, CC.name), Zz(SC, CC.name), Zz(pC, CC.name), Zz(PC, CC.name);
            const iC = new Qz({
              uid: GC,
              auth: CC,
              email: WC,
              emailVerified: RC,
              displayName: FC,
              isAnonymous: AC,
              photoURL: MC,
              phoneNumber: NC,
              tenantId: gC,
              stsTokenManager: IC,
              createdAt: pC,
              lastLoginAt: PC
            });
            return xC && Array.isArray(xC) && (iC.providerData = xC.map((CC => Object.assign({}, CC)))), SC && (iC._redirectEventId = SC), iC
          }
          static async _fromIdTokenResponse(CC, zC) {
            let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const QC = new zz;
            QC.updateFromServerResponse(zC);
            const wC = new Qz({
              uid: zC.localId,
              auth: CC,
              stsTokenManager: QC,
              isAnonymous: ZC
            });
            return await VC(wC), wC
          }
        }
        const wz = new Map;

        function bz(CC) {
          hC(CC instanceof Function, "Expected a class definition");
          let zC = wz.get(CC);
          return zC ? (hC(zC instanceof CC, "Instance stored in cache mismatched with class"), zC) : (zC = new CC, wz.set(CC, zC), zC)
        }
        class nz {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(CC, zC) {
            this.storage[CC] = zC
          }
          async _get(CC) {
            const zC = this.storage[CC];
            return void 0 === zC ? null : zC
          }
          async _remove(CC) {
            delete this.storage[CC]
          }
          _addListener(CC, zC) {}
          _removeListener(CC, zC) {}
        }
        nz.type = "NONE";
        const fz = nz;

        function oz(CC, zC, ZC) {
          return `firebase:${CC}:${zC}:${ZC}`
        }
        class qz {
          constructor(CC, zC, ZC) {
            this.persistence = CC, this.auth = zC, this.userKey = ZC;
            const {
              config: QC,
              name: wC
            } = this.auth;
            this.fullUserKey = oz(this.userKey, QC.apiKey, wC), this.fullPersistenceKey = oz("persistence", QC.apiKey, wC), this.boundEventHandler = zC._onStorageEvent.bind(zC), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(CC) {
            return this.persistence._set(this.fullUserKey, CC.toJSON())
          }
          async getCurrentUser() {
            const CC = await this.persistence._get(this.fullUserKey);
            return CC ? Qz._fromJSON(this.auth, CC) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(CC) {
            if (this.persistence === CC) return;
            const zC = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = CC, zC ? this.setCurrentUser(zC) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(CC, zC) {
            let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!zC.length) return new qz(bz(fz), CC, ZC);
            const QC = (await Promise.all(zC.map((async CC => {
              if (await CC._isAvailable()) return CC
            })))).filter((CC => CC));
            let wC = QC[0] || bz(fz);
            const bC = oz(ZC, CC.config.apiKey, CC.name);
            let nC = null;
            for (const qC of zC) try {
              const zC = await qC._get(bC);
              if (zC) {
                const ZC = Qz._fromJSON(CC, zC);
                qC !== wC && (nC = ZC), wC = qC;
                break
              }
            } catch (oC) {}
            const fC = QC.filter((CC => CC._shouldAllowMigration));
            return wC._shouldAllowMigration && fC.length ? (wC = fC[0], nC && await wC._set(bC, nC.toJSON()), await Promise.all(zC.map((async CC => {
              if (CC !== wC) try {
                await CC._remove(bC)
              } catch (oC) {}
            }))), new qz(wC, CC, ZC)) : new qz(wC, CC, ZC)
          }
        }

        function Fz(CC) {
          const zC = CC.toLowerCase();
          if (zC.includes("opera/") || zC.includes("opr/") || zC.includes("opios/")) return "Opera";
          if (gz(zC)) return "IEMobile";
          if (zC.includes("msie") || zC.includes("trident/")) return "IE";
          if (zC.includes("edge/")) return "Edge";
          if (Wz(zC)) return "Firefox";
          if (zC.includes("silk/")) return "Silk";
          if (pz(zC)) return "Blackberry";
          if (Pz(zC)) return "Webos";
          if (Nz(zC)) return "Safari";
          if ((zC.includes("chrome/") || Mz(zC)) && !zC.includes("edge/")) return "Chrome";
          if (Sz(zC)) return "Android";
          {
            const zC = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              ZC = CC.match(zC);
            if (2 === (null === ZC || void 0 === ZC ? void 0 : ZC.length)) return ZC[1]
          }
          return "Other"
        }

        function Wz() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)();
          return /firefox\//i.test(CC)
        }

        function Nz() {
          const CC = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)()).toLowerCase();
          return CC.includes("safari/") && !CC.includes("chrome/") && !CC.includes("crios/") && !CC.includes("android")
        }

        function Mz() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)();
          return /crios\//i.test(CC)
        }

        function gz() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)();
          return /iemobile/i.test(CC)
        }

        function Sz() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)();
          return /android/i.test(CC)
        }

        function pz() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)();
          return /blackberry/i.test(CC)
        }

        function Pz() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)();
          return /webos/i.test(CC)
        }

        function Gz() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)();
          return /iphone|ipad|ipod/i.test(CC) || /macintosh/i.test(CC) && /mobile/i.test(CC)
        }

        function Rz() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)();
          return Gz(CC) || Sz(CC) || Pz(CC) || pz(CC) || /windows phone/i.test(CC) || gz(CC)
        }

        function Az(CC) {
          let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (CC) {
            case "Browser":
              zC = Fz((0, QC.O)());
              break;
            case "Worker":
              zC = `${Fz((0,QC.O)())}-${CC}`;
              break;
            default:
              zC = CC
          }
          const bC = ZC.length ? ZC.join(",") : "FirebaseCore-web";
          return `${zC}/JsCore/${wC.i}/${bC}`
        }
        async function xz(CC, zC) {
          return uC(CC, "GET", "/v2/recaptchaConfig", cC(CC, zC))
        }

        function Jz(CC) {
          return void 0 !== CC && void 0 !== CC.getResponse
        }

        function Iz(CC) {
          return void 0 !== CC && void 0 !== CC.enterprise
        }
        class iz {
          constructor(CC) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === CC.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = CC.recaptchaKey.split("/")[3], this.emailPasswordEnabled = CC.recaptchaEnforcementState.some((CC => "EMAIL_PASSWORD_PROVIDER" === CC.provider && "OFF" !== CC.enforcementState))
          }
        }

        function vz(CC) {
          return new Promise(((zC, ZC) => {
            const QC = document.createElement("script");
            QC.setAttribute("src", CC), QC.onload = zC, QC.onerror = CC => {
                const zC = xC("internal-error");
                zC.customData = CC, ZC(zC)
              }, QC.type = "text/javascript", QC.charset = "UTF-8",
              function() {
                var CC, zC;
                return null !== (zC = null === (CC = document.getElementsByTagName("head")) || void 0 === CC ? void 0 : CC[0]) && void 0 !== zC ? zC : document
              }().appendChild(QC)
          }))
        }

        function ez(CC) {
          return `__${CC}${Math.floor(1e6*Math.random())}`
        }
        class hz {
          constructor(CC) {
            this.type = "recaptcha-enterprise", this.auth = mz(CC)
          }
          async verify() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function ZC(zC, ZC, QC) {
              const wC = window.grecaptcha;
              Iz(wC) ? wC.enterprise.ready((() => {
                wC.enterprise.execute(zC, {
                  action: CC
                }).then((CC => {
                  ZC(CC)
                })).catch((() => {
                  ZC("NO_RECAPTCHA")
                }))
              })) : QC(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((CC, QC) => {
              (async function(CC) {
                if (!zC) {
                  if (null == CC.tenantId && null != CC._agentRecaptchaConfig) return CC._agentRecaptchaConfig.siteKey;
                  if (null != CC.tenantId && void 0 !== CC._tenantRecaptchaConfigs[CC.tenantId]) return CC._tenantRecaptchaConfigs[CC.tenantId].siteKey
                }
                return new Promise((async (zC, ZC) => {
                  xz(CC, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((QC => {
                    if (void 0 !== QC.recaptchaKey) {
                      const ZC = new iz(QC);
                      return null == CC.tenantId ? CC._agentRecaptchaConfig = ZC : CC._tenantRecaptchaConfigs[CC.tenantId] = ZC, zC(ZC.siteKey)
                    }
                    ZC(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((CC => {
                    ZC(CC)
                  }))
                }))
              })(this.auth).then((wC => {
                if (!zC && Iz(window.grecaptcha)) ZC(wC, CC, QC);
                else {
                  if ("undefined" === typeof window) return void QC(new Error("RecaptchaVerifier is only supported in browser"));
                  vz("https://www.google.com/recaptcha/enterprise.js?render=" + wC).then((() => {
                    ZC(wC, CC, QC)
                  })).catch((CC => {
                    QC(CC)
                  }))
                }
              })).catch((CC => {
                QC(CC)
              }))
            }))
          }
        }
        async function Kz(CC, zC, ZC) {
          let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const wC = new hz(CC);
          let bC;
          try {
            bC = await wC.verify(ZC)
          } catch (fC) {
            bC = await wC.verify(ZC, !0)
          }
          const nC = Object.assign({}, zC);
          return QC ? Object.assign(nC, {
            captchaResp: bC
          }) : Object.assign(nC, {
            captchaResponse: bC
          }), Object.assign(nC, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(nC, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), nC
        }
        class Yz {
          constructor(CC) {
            this.auth = CC, this.queue = []
          }
          pushCallback(CC, zC) {
            const ZC = zC => new Promise(((ZC, QC) => {
              try {
                ZC(CC(zC))
              } catch (wC) {
                QC(wC)
              }
            }));
            ZC.onAbort = zC, this.queue.push(ZC);
            const QC = this.queue.length - 1;
            return () => {
              this.queue[QC] = () => Promise.resolve()
            }
          }
          async runMiddleware(CC) {
            if (this.auth.currentUser === CC) return;
            const zC = [];
            try {
              for (const ZC of this.queue) await ZC(CC), ZC.onAbort && zC.push(ZC.onAbort)
            } catch (ZC) {
              zC.reverse();
              for (const CC of zC) try {
                CC()
              } catch (QC) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === ZC || void 0 === ZC ? void 0 : ZC.message
              })
            }
          }
        }
        class dz {
          constructor(CC, zC, ZC, QC) {
            this.app = CC, this.heartbeatServiceProvider = zC, this.appCheckServiceProvider = ZC, this.config = QC, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Hz(this), this.idTokenSubscription = new Hz(this), this.beforeStateQueue = new Yz(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = pC, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = CC.name, this.clientVersion = QC.sdkClientVersion
          }
          _initializeWithPersistence(CC, zC) {
            return zC && (this._popupRedirectResolver = bz(zC)), this._initializationPromise = this.queue((async () => {
              var ZC, QC;
              if (!this._deleted && (this.persistenceManager = await qz.create(this, CC), !this._deleted)) {
                if (null === (ZC = this._popupRedirectResolver) || void 0 === ZC ? void 0 : ZC._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (wC) {}
                await this.initializeCurrentUser(zC), this.lastNotifiedUid = (null === (QC = this.currentUser) || void 0 === QC ? void 0 : QC.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const CC = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || CC ? this.currentUser && CC && this.currentUser.uid === CC.uid ? (this._currentUser._assign(CC), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(CC, !0) : void 0
          }
          async initializeCurrentUser(CC) {
            var zC;
            const ZC = await this.assertedPersistence.getCurrentUser();
            let QC = ZC,
              wC = !1;
            if (CC && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const ZC = null === (zC = this.redirectUser) || void 0 === zC ? void 0 : zC._redirectEventId,
                bC = null === QC || void 0 === QC ? void 0 : QC._redirectEventId,
                nC = await this.tryRedirectSignIn(CC);
              ZC && ZC !== bC || !(null === nC || void 0 === nC ? void 0 : nC.user) || (QC = nC.user, wC = !0)
            }
            if (!QC) return this.directlySetCurrentUser(null);
            if (!QC._redirectEventId) {
              if (wC) try {
                await this.beforeStateQueue.runMiddleware(QC)
              } catch (bC) {
                QC = ZC, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(bC)))
              }
              return QC ? this.reloadAndSetCurrentUserOrClear(QC) : this.directlySetCurrentUser(null)
            }
            return vC(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === QC._redirectEventId ? this.directlySetCurrentUser(QC) : this.reloadAndSetCurrentUserOrClear(QC)
          }
          async tryRedirectSignIn(CC) {
            let zC = null;
            try {
              zC = await this._popupRedirectResolver._completeRedirectFn(this, CC, !0)
            } catch (ZC) {
              await this._setRedirectUser(null)
            }
            return zC
          }
          async reloadAndSetCurrentUserOrClear(CC) {
            try {
              await VC(CC)
            } catch (zC) {
              if ("auth/network-request-failed" !== (null === zC || void 0 === zC ? void 0 : zC.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(CC)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const CC = navigator;
              return CC.languages && CC.languages[0] || CC.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(CC) {
            const zC = CC ? (0, QC.L)(CC) : null;
            return zC && vC(zC.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(zC && zC._clone(this))
          }
          async _updateCurrentUser(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return CC && vC(this.tenantId === CC.tenantId, this, "tenant-id-mismatch"), zC || await this.beforeStateQueue.runMiddleware(CC), this.queue((async () => {
              await this.directlySetCurrentUser(CC), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(CC) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(bz(CC))
            }))
          }
          async initializeRecaptchaConfig() {
            const CC = await xz(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              zC = new iz(CC);
            if (null == this.tenantId ? this._agentRecaptchaConfig = zC : this._tenantRecaptchaConfigs[this.tenantId] = zC, zC.emailPasswordEnabled) {
              new hz(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(CC) {
            this._errorFactory = new QC.g("auth", "Firebase", CC())
          }
          onAuthStateChanged(CC, zC, ZC) {
            return this.registerStateListener(this.authStateSubscription, CC, zC, ZC)
          }
          beforeAuthStateChanged(CC, zC) {
            return this.beforeStateQueue.pushCallback(CC, zC)
          }
          onIdTokenChanged(CC, zC, ZC) {
            return this.registerStateListener(this.idTokenSubscription, CC, zC, ZC)
          }
          toJSON() {
            var CC;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (CC = this._currentUser) || void 0 === CC ? void 0 : CC.toJSON()
            }
          }
          async _setRedirectUser(CC, zC) {
            const ZC = await this.getOrInitRedirectPersistenceManager(zC);
            return null === CC ? ZC.removeCurrentUser() : ZC.setCurrentUser(CC)
          }
          async getOrInitRedirectPersistenceManager(CC) {
            if (!this.redirectPersistenceManager) {
              const zC = CC && bz(CC) || this._popupRedirectResolver;
              vC(zC, this, "argument-error"), this.redirectPersistenceManager = await qz.create(this, [bz(zC._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(CC) {
            var zC, ZC;
            return this._isInitialized && await this.queue((async () => {})), (null === (zC = this._currentUser) || void 0 === zC ? void 0 : zC._redirectEventId) === CC ? this._currentUser : (null === (ZC = this.redirectUser) || void 0 === ZC ? void 0 : ZC._redirectEventId) === CC ? this.redirectUser : null
          }
          async _persistUserIfCurrent(CC) {
            if (CC === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(CC)))
          }
          _notifyListenersIfCurrent(CC) {
            CC === this.currentUser && this.notifyAuthListeners()
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
            var CC, zC;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const ZC = null !== (zC = null === (CC = this.currentUser) || void 0 === CC ? void 0 : CC.uid) && void 0 !== zC ? zC : null;
            this.lastNotifiedUid !== ZC && (this.lastNotifiedUid = ZC, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(CC, zC, ZC, QC) {
            if (this._deleted) return () => {};
            const wC = "function" === typeof zC ? zC : zC.next.bind(zC),
              bC = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return vC(bC, this, "internal-error"), bC.then((() => wC(this.currentUser))), "function" === typeof zC ? CC.addObserver(zC, ZC, QC) : CC.addObserver(zC)
          }
          async directlySetCurrentUser(CC) {
            this.currentUser && this.currentUser !== CC && this._currentUser._stopProactiveRefresh(), CC && this.isProactiveRefreshEnabled && CC._startProactiveRefresh(), this.currentUser = CC, CC ? await this.assertedPersistence.setCurrentUser(CC) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(CC) {
            return this.operations = this.operations.then(CC, CC), this.operations
          }
          get assertedPersistence() {
            return vC(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(CC) {
            CC && !this.frameworks.includes(CC) && (this.frameworks.push(CC), this.frameworks.sort(), this.clientVersion = Az(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var CC;
            const zC = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (zC["X-Firebase-gmpid"] = this.app.options.appId);
            const ZC = await (null === (CC = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === CC ? void 0 : CC.getHeartbeatsHeader());
            ZC && (zC["X-Firebase-Client"] = ZC);
            const QC = await this._getAppCheckToken();
            return QC && (zC["X-Firebase-AppCheck"] = QC), zC
          }
          async _getAppCheckToken() {
            var CC;
            const zC = await (null === (CC = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === CC ? void 0 : CC.getToken());
            return (null === zC || void 0 === zC ? void 0 : zC.error) && function(CC) {
              if (GC.logLevel <= nC.b.WARN) {
                for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
                GC.warn(`Auth (${wC.i}): ${CC}`, ...ZC)
              }
            }(`Error while retrieving App Check token: ${zC.error}`), null === zC || void 0 === zC ? void 0 : zC.token
          }
        }

        function mz(CC) {
          return (0, QC.L)(CC)
        }
        class Hz {
          constructor(CC) {
            this.auth = CC, this.observer = null, this.addObserver = (0, QC.w)((CC => this.observer = CC))
          }
          get next() {
            return vC(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Ez(CC, zC) {
          const ZC = (0, wC.D)(CC, "auth");
          if (ZC.isInitialized()) {
            const CC = ZC.getImmediate(),
              wC = ZC.getOptions();
            if ((0, QC.z)(wC, null !== zC && void 0 !== zC ? zC : {})) return CC;
            AC(CC, "already-initialized")
          }
          return ZC.initialize({
            options: zC
          })
        }

        function lz(CC, zC, ZC) {
          const QC = mz(CC);
          vC(QC._canInitEmulator, QC, "emulator-config-failed"), vC(/^https?:\/\//.test(zC), QC, "invalid-emulator-scheme");
          const wC = !!(null === ZC || void 0 === ZC ? void 0 : ZC.disableWarnings),
            bC = Xz(zC),
            {
              host: nC,
              port: fC
            } = function(CC) {
              const zC = Xz(CC),
                ZC = /(\/\/)?([^?#/]+)/.exec(CC.substr(zC.length));
              if (!ZC) return {
                host: "",
                port: null
              };
              const QC = ZC[2].split("@").pop() || "",
                wC = /^(\[[^\]]+\])(:|$)/.exec(QC);
              if (wC) {
                const CC = wC[1];
                return {
                  host: CC,
                  port: cz(QC.substr(CC.length + 1))
                }
              } {
                const [CC, zC] = QC.split(":");
                return {
                  host: CC,
                  port: cz(zC)
                }
              }
            }(zC),
            oC = null === fC ? "" : `:${fC}`;
          QC.config.emulator = {
            url: `${bC}//${nC}${oC}/`
          }, QC.settings.appVerificationDisabledForTesting = !0, QC.emulatorConfig = Object.freeze({
            host: nC,
            port: fC,
            protocol: bC.replace(":", ""),
            options: Object.freeze({
              disableWarnings: wC
            })
          }), wC || function() {
            function CC() {
              const CC = document.createElement("p"),
                zC = CC.style;
              CC.innerText = "Running in emulator mode. Do not use with production credentials.", zC.position = "fixed", zC.width = "100%", zC.backgroundColor = "#ffffff", zC.border = ".1em solid #000000", zC.color = "#b50000", zC.bottom = "0px", zC.left = "0px", zC.margin = "0px", zC.zIndex = "10000", zC.textAlign = "center", CC.classList.add("firebase-emulator-warning"), document.body.appendChild(CC)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", CC) : CC())
          }()
        }

        function Xz(CC) {
          const zC = CC.indexOf(":");
          return zC < 0 ? "" : CC.substr(0, zC + 1)
        }

        function cz(CC) {
          if (!CC) return null;
          const zC = Number(CC);
          return isNaN(zC) ? null : zC
        }
        class uz {
          constructor(CC, zC) {
            this.providerId = CC, this.signInMethod = zC
          }
          toJSON() {
            return eC("not implemented")
          }
          _getIdTokenResponse(CC) {
            return eC("not implemented")
          }
          _linkToIdToken(CC, zC) {
            return eC("not implemented")
          }
          _getReauthenticationResolver(CC) {
            return eC("not implemented")
          }
        }
        async function rz(CC, zC) {
          return uC(CC, "POST", "/v1/accounts:resetPassword", cC(CC, zC))
        }
        async function sz(CC, zC) {
          return uC(CC, "POST", "/v1/accounts:update", zC)
        }
        async function Tz(CC, zC) {
          return sC(CC, "POST", "/v1/accounts:signInWithPassword", cC(CC, zC))
        }
        async function az(CC, zC) {
          return uC(CC, "POST", "/v1/accounts:sendOobCode", cC(CC, zC))
        }
        async function tz(CC, zC) {
          return az(CC, zC)
        }
        async function Dz(CC, zC) {
          return az(CC, zC)
        }
        class jz extends uz {
          constructor(CC, zC, ZC) {
            let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", ZC), this._email = CC, this._password = zC, this._tenantId = QC
          }
          static _fromEmailAndPassword(CC, zC) {
            return new jz(CC, zC, "password")
          }
          static _fromEmailAndCode(CC, zC) {
            return new jz(CC, zC, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(CC) {
            const zC = "string" === typeof CC ? JSON.parse(CC) : CC;
            if ((null === zC || void 0 === zC ? void 0 : zC.email) && (null === zC || void 0 === zC ? void 0 : zC.password)) {
              if ("password" === zC.signInMethod) return this._fromEmailAndPassword(zC.email, zC.password);
              if ("emailLink" === zC.signInMethod) return this._fromEmailAndCode(zC.email, zC.password, zC.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(CC) {
            var zC;
            switch (this.signInMethod) {
              case "password":
                const ZC = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (zC = CC._getRecaptchaConfig()) || void 0 === zC ? void 0 : zC.emailPasswordEnabled) {
                  const zC = await Kz(CC, ZC, "signInWithPassword");
                  return Tz(CC, zC)
                }
                return Tz(CC, ZC).catch((async zC => {
                  if ("auth/missing-recaptcha-token" === zC.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const zC = await Kz(CC, ZC, "signInWithPassword");
                    return Tz(CC, zC)
                  }
                  return Promise.reject(zC)
                }));
              case "emailLink":
                return async function(CC, zC) {
                  return sC(CC, "POST", "/v1/accounts:signInWithEmailLink", cC(CC, zC))
                }(CC, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                AC(CC, "internal-error")
            }
          }
          async _linkToIdToken(CC, zC) {
            switch (this.signInMethod) {
              case "password":
                return sz(CC, {
                  idToken: zC,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(CC, zC) {
                  return sC(CC, "POST", "/v1/accounts:signInWithEmailLink", cC(CC, zC))
                }(CC, {
                  idToken: zC,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                AC(CC, "internal-error")
            }
          }
          _getReauthenticationResolver(CC) {
            return this._getIdTokenResponse(CC)
          }
        }
        async function yz(CC, zC) {
          return sC(CC, "POST", "/v1/accounts:signInWithIdp", cC(CC, zC))
        }
        class Lz extends uz {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(CC) {
            const zC = new Lz(CC.providerId, CC.signInMethod);
            return CC.idToken || CC.accessToken ? (CC.idToken && (zC.idToken = CC.idToken), CC.accessToken && (zC.accessToken = CC.accessToken), CC.nonce && !CC.pendingToken && (zC.nonce = CC.nonce), CC.pendingToken && (zC.pendingToken = CC.pendingToken)) : CC.oauthToken && CC.oauthTokenSecret ? (zC.accessToken = CC.oauthToken, zC.secret = CC.oauthTokenSecret) : AC("argument-error"), zC
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
          static fromJSON(CC) {
            const zC = "string" === typeof CC ? JSON.parse(CC) : CC,
              {
                providerId: ZC,
                signInMethod: QC
              } = zC,
              wC = bC(zC, ["providerId", "signInMethod"]);
            if (!ZC || !QC) return null;
            const nC = new Lz(ZC, QC);
            return nC.idToken = wC.idToken || void 0, nC.accessToken = wC.accessToken || void 0, nC.secret = wC.secret, nC.nonce = wC.nonce, nC.pendingToken = wC.pendingToken || null, nC
          }
          _getIdTokenResponse(CC) {
            return yz(CC, this.buildRequest())
          }
          _linkToIdToken(CC, zC) {
            const ZC = this.buildRequest();
            return ZC.idToken = zC, yz(CC, ZC)
          }
          _getReauthenticationResolver(CC) {
            const zC = this.buildRequest();
            return zC.autoCreate = !1, yz(CC, zC)
          }
          buildRequest() {
            const CC = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) CC.pendingToken = this.pendingToken;
            else {
              const zC = {};
              this.idToken && (zC.id_token = this.idToken), this.accessToken && (zC.access_token = this.accessToken), this.secret && (zC.oauth_token_secret = this.secret), zC.providerId = this.providerId, this.nonce && !this.pendingToken && (zC.nonce = this.nonce), CC.postBody = (0, QC.jb)(zC)
            }
            return CC
          }
        }
        const Uz = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Bz extends uz {
          constructor(CC) {
            super("phone", "phone"), this.params = CC
          }
          static _fromVerification(CC, zC) {
            return new Bz({
              verificationId: CC,
              verificationCode: zC
            })
          }
          static _fromTokenResponse(CC, zC) {
            return new Bz({
              phoneNumber: CC,
              temporaryProof: zC
            })
          }
          _getIdTokenResponse(CC) {
            return async function(CC, zC) {
              return sC(CC, "POST", "/v1/accounts:signInWithPhoneNumber", cC(CC, zC))
            }(CC, this._makeVerificationRequest())
          }
          _linkToIdToken(CC, zC) {
            return async function(CC, zC) {
              const ZC = await sC(CC, "POST", "/v1/accounts:signInWithPhoneNumber", cC(CC, zC));
              if (ZC.temporaryProof) throw tC(CC, "account-exists-with-different-credential", ZC);
              return ZC
            }(CC, Object.assign({
              idToken: zC
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(CC) {
            return async function(CC, zC) {
              return sC(CC, "POST", "/v1/accounts:signInWithPhoneNumber", cC(CC, Object.assign(Object.assign({}, zC), {
                operation: "REAUTH"
              })), Uz)
            }(CC, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: CC,
              phoneNumber: zC,
              verificationId: ZC,
              verificationCode: QC
            } = this.params;
            return CC && zC ? {
              temporaryProof: CC,
              phoneNumber: zC
            } : {
              sessionInfo: ZC,
              code: QC
            }
          }
          toJSON() {
            const CC = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (CC.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (CC.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (CC.verificationCode = this.params.verificationCode), this.params.verificationId && (CC.verificationId = this.params.verificationId), CC
          }
          static fromJSON(CC) {
            "string" === typeof CC && (CC = JSON.parse(CC));
            const {
              verificationId: zC,
              verificationCode: ZC,
              phoneNumber: QC,
              temporaryProof: wC
            } = CC;
            return ZC || zC || QC || wC ? new Bz({
              verificationId: zC,
              verificationCode: ZC,
              phoneNumber: QC,
              temporaryProof: wC
            }) : null
          }
        }
        class Oz {
          constructor(CC) {
            var zC, ZC, wC, bC, nC, fC;
            const oC = (0, QC.hb)((0, QC.D)(CC)),
              qC = null !== (zC = oC.apiKey) && void 0 !== zC ? zC : null,
              FC = null !== (ZC = oC.oobCode) && void 0 !== ZC ? ZC : null,
              WC = function(CC) {
                switch (CC) {
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
              }(null !== (wC = oC.mode) && void 0 !== wC ? wC : null);
            vC(qC && FC && WC, "argument-error"), this.apiKey = qC, this.operation = WC, this.code = FC, this.continueUrl = null !== (bC = oC.continueUrl) && void 0 !== bC ? bC : null, this.languageCode = null !== (nC = oC.languageCode) && void 0 !== nC ? nC : null, this.tenantId = null !== (fC = oC.tenantId) && void 0 !== fC ? fC : null
          }
          static parseLink(CC) {
            const zC = function(CC) {
              const zC = (0, QC.hb)((0, QC.D)(CC)).link,
                ZC = zC ? (0, QC.hb)((0, QC.D)(zC)).deep_link_id : null,
                wC = (0, QC.hb)((0, QC.D)(CC)).deep_link_id;
              return (wC ? (0, QC.hb)((0, QC.D)(wC)).link : null) || wC || ZC || zC || CC
            }(CC);
            try {
              return new Oz(zC)
            } catch (ZC) {
              return null
            }
          }
        }

        function kz(CC) {
          return Oz.parseLink(CC)
        }
        class Vz {
          constructor() {
            this.providerId = Vz.PROVIDER_ID
          }
          static credential(CC, zC) {
            return jz._fromEmailAndPassword(CC, zC)
          }
          static credentialWithLink(CC, zC) {
            const ZC = Oz.parseLink(zC);
            return vC(ZC, "argument-error"), jz._fromEmailAndCode(CC, ZC.code, ZC.tenantId)
          }
        }
        Vz.PROVIDER_ID = "password", Vz.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Vz.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class CZ {
          constructor(CC) {
            this.providerId = CC, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(CC) {
            this.defaultLanguageCode = CC
          }
          setCustomParameters(CC) {
            return this.customParameters = CC, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class zZ extends CZ {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(CC) {
            return this.scopes.includes(CC) || this.scopes.push(CC), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class ZZ extends zZ {
          static credentialFromJSON(CC) {
            const zC = "string" === typeof CC ? JSON.parse(CC) : CC;
            return vC("providerId" in zC && "signInMethod" in zC, "argument-error"), Lz._fromParams(zC)
          }
          credential(CC) {
            return this._credential(Object.assign(Object.assign({}, CC), {
              nonce: CC.rawNonce
            }))
          }
          _credential(CC) {
            return vC(CC.idToken || CC.accessToken, "argument-error"), Lz._fromParams(Object.assign(Object.assign({}, CC), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(CC) {
            return ZZ.oauthCredentialFromTaggedObject(CC)
          }
          static credentialFromError(CC) {
            return ZZ.oauthCredentialFromTaggedObject(CC.customData || {})
          }
          static oauthCredentialFromTaggedObject(CC) {
            let {
              _tokenResponse: zC
            } = CC;
            if (!zC) return null;
            const {
              oauthIdToken: ZC,
              oauthAccessToken: QC,
              oauthTokenSecret: wC,
              pendingToken: bC,
              nonce: nC,
              providerId: fC
            } = zC;
            if (!QC && !wC && !ZC && !bC) return null;
            if (!fC) return null;
            try {
              return new ZZ(fC)._credential({
                idToken: ZC,
                accessToken: QC,
                nonce: nC,
                pendingToken: bC
              })
            } catch (oC) {
              return null
            }
          }
        }
        class QZ extends zZ {
          constructor() {
            super("facebook.com")
          }
          static credential(CC) {
            return Lz._fromParams({
              providerId: QZ.PROVIDER_ID,
              signInMethod: QZ.FACEBOOK_SIGN_IN_METHOD,
              accessToken: CC
            })
          }
          static credentialFromResult(CC) {
            return QZ.credentialFromTaggedObject(CC)
          }
          static credentialFromError(CC) {
            return QZ.credentialFromTaggedObject(CC.customData || {})
          }
          static credentialFromTaggedObject(CC) {
            let {
              _tokenResponse: zC
            } = CC;
            if (!zC || !("oauthAccessToken" in zC)) return null;
            if (!zC.oauthAccessToken) return null;
            try {
              return QZ.credential(zC.oauthAccessToken)
            } catch (ZC) {
              return null
            }
          }
        }
        QZ.FACEBOOK_SIGN_IN_METHOD = "facebook.com", QZ.PROVIDER_ID = "facebook.com";
        class wZ extends zZ {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(CC, zC) {
            return Lz._fromParams({
              providerId: wZ.PROVIDER_ID,
              signInMethod: wZ.GOOGLE_SIGN_IN_METHOD,
              idToken: CC,
              accessToken: zC
            })
          }
          static credentialFromResult(CC) {
            return wZ.credentialFromTaggedObject(CC)
          }
          static credentialFromError(CC) {
            return wZ.credentialFromTaggedObject(CC.customData || {})
          }
          static credentialFromTaggedObject(CC) {
            let {
              _tokenResponse: zC
            } = CC;
            if (!zC) return null;
            const {
              oauthIdToken: ZC,
              oauthAccessToken: QC
            } = zC;
            if (!ZC && !QC) return null;
            try {
              return wZ.credential(ZC, QC)
            } catch (wC) {
              return null
            }
          }
        }
        wZ.GOOGLE_SIGN_IN_METHOD = "google.com", wZ.PROVIDER_ID = "google.com";
        class bZ extends zZ {
          constructor() {
            super("github.com")
          }
          static credential(CC) {
            return Lz._fromParams({
              providerId: bZ.PROVIDER_ID,
              signInMethod: bZ.GITHUB_SIGN_IN_METHOD,
              accessToken: CC
            })
          }
          static credentialFromResult(CC) {
            return bZ.credentialFromTaggedObject(CC)
          }
          static credentialFromError(CC) {
            return bZ.credentialFromTaggedObject(CC.customData || {})
          }
          static credentialFromTaggedObject(CC) {
            let {
              _tokenResponse: zC
            } = CC;
            if (!zC || !("oauthAccessToken" in zC)) return null;
            if (!zC.oauthAccessToken) return null;
            try {
              return bZ.credential(zC.oauthAccessToken)
            } catch (ZC) {
              return null
            }
          }
        }
        bZ.GITHUB_SIGN_IN_METHOD = "github.com", bZ.PROVIDER_ID = "github.com";
        class nZ extends uz {
          constructor(CC, zC) {
            super(CC, CC), this.pendingToken = zC
          }
          _getIdTokenResponse(CC) {
            return yz(CC, this.buildRequest())
          }
          _linkToIdToken(CC, zC) {
            const ZC = this.buildRequest();
            return ZC.idToken = zC, yz(CC, ZC)
          }
          _getReauthenticationResolver(CC) {
            const zC = this.buildRequest();
            return zC.autoCreate = !1, yz(CC, zC)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(CC) {
            const zC = "string" === typeof CC ? JSON.parse(CC) : CC,
              {
                providerId: ZC,
                signInMethod: QC,
                pendingToken: wC
              } = zC;
            return ZC && QC && wC && ZC === QC ? new nZ(ZC, wC) : null
          }
          static _create(CC, zC) {
            return new nZ(CC, zC)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class fZ extends CZ {
          constructor(CC) {
            vC(CC.startsWith("saml."), "argument-error"), super(CC)
          }
          static credentialFromResult(CC) {
            return fZ.samlCredentialFromTaggedObject(CC)
          }
          static credentialFromError(CC) {
            return fZ.samlCredentialFromTaggedObject(CC.customData || {})
          }
          static credentialFromJSON(CC) {
            const zC = nZ.fromJSON(CC);
            return vC(zC, "argument-error"), zC
          }
          static samlCredentialFromTaggedObject(CC) {
            let {
              _tokenResponse: zC
            } = CC;
            if (!zC) return null;
            const {
              pendingToken: ZC,
              providerId: QC
            } = zC;
            if (!ZC || !QC) return null;
            try {
              return nZ._create(QC, ZC)
            } catch (wC) {
              return null
            }
          }
        }
        class oZ extends zZ {
          constructor() {
            super("twitter.com")
          }
          static credential(CC, zC) {
            return Lz._fromParams({
              providerId: oZ.PROVIDER_ID,
              signInMethod: oZ.TWITTER_SIGN_IN_METHOD,
              oauthToken: CC,
              oauthTokenSecret: zC
            })
          }
          static credentialFromResult(CC) {
            return oZ.credentialFromTaggedObject(CC)
          }
          static credentialFromError(CC) {
            return oZ.credentialFromTaggedObject(CC.customData || {})
          }
          static credentialFromTaggedObject(CC) {
            let {
              _tokenResponse: zC
            } = CC;
            if (!zC) return null;
            const {
              oauthAccessToken: ZC,
              oauthTokenSecret: QC
            } = zC;
            if (!ZC || !QC) return null;
            try {
              return oZ.credential(ZC, QC)
            } catch (wC) {
              return null
            }
          }
        }
        async function qZ(CC, zC) {
          return sC(CC, "POST", "/v1/accounts:signUp", cC(CC, zC))
        }
        oZ.TWITTER_SIGN_IN_METHOD = "twitter.com", oZ.PROVIDER_ID = "twitter.com";
        class FZ {
          constructor(CC) {
            this.user = CC.user, this.providerId = CC.providerId, this._tokenResponse = CC._tokenResponse, this.operationType = CC.operationType
          }
          static async _fromIdTokenResponse(CC, zC, ZC) {
            let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const wC = await Qz._fromIdTokenResponse(CC, ZC, QC),
              bC = WZ(ZC);
            return new FZ({
              user: wC,
              providerId: bC,
              _tokenResponse: ZC,
              operationType: zC
            })
          }
          static async _forOperation(CC, zC, ZC) {
            await CC._updateTokensIfNecessary(ZC, !0);
            const QC = WZ(ZC);
            return new FZ({
              user: CC,
              providerId: QC,
              _tokenResponse: ZC,
              operationType: zC
            })
          }
        }

        function WZ(CC) {
          return CC.providerId ? CC.providerId : "phoneNumber" in CC ? "phone" : null
        }
        async function NZ(CC) {
          var zC;
          const ZC = mz(CC);
          if (await ZC._initializationPromise, null === (zC = ZC.currentUser) || void 0 === zC ? void 0 : zC.isAnonymous) return new FZ({
            user: ZC.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const QC = await qZ(ZC, {
              returnSecureToken: !0
            }),
            wC = await FZ._fromIdTokenResponse(ZC, "signIn", QC, !0);
          return await ZC._updateCurrentUser(wC.user), wC
        }
        class MZ extends QC.j {
          constructor(CC, zC, ZC, QC) {
            var wC;
            super(zC.code, zC.message), this.operationType = ZC, this.user = QC, Object.setPrototypeOf(this, MZ.prototype), this.customData = {
              appName: CC.name,
              tenantId: null !== (wC = CC.tenantId) && void 0 !== wC ? wC : void 0,
              _serverResponse: zC.customData._serverResponse,
              operationType: ZC
            }
          }
          static _fromErrorAndOperation(CC, zC, ZC, QC) {
            return new MZ(CC, zC, ZC, QC)
          }
        }

        function gZ(CC, zC, ZC, QC) {
          return ("reauthenticate" === zC ? ZC._getReauthenticationResolver(CC) : ZC._getIdTokenResponse(CC)).catch((ZC => {
            if ("auth/multi-factor-auth-required" === ZC.code) throw MZ._fromErrorAndOperation(CC, ZC, zC, QC);
            throw ZC
          }))
        }

        function SZ(CC) {
          return new Set(CC.map((CC => {
            let {
              providerId: zC
            } = CC;
            return zC
          })).filter((CC => !!CC)))
        }
        async function pZ(CC, zC) {
          const ZC = (0, QC.L)(CC);
          await GZ(!0, ZC, zC);
          const {
            providerUserInfo: wC
          } = await async function(CC, zC) {
            return uC(CC, "POST", "/v1/accounts:update", zC)
          }(ZC.auth, {
            idToken: await ZC.getIdToken(),
            deleteProvider: [zC]
          }), bC = SZ(wC || []);
          return ZC.providerData = ZC.providerData.filter((CC => bC.has(CC.providerId))), bC.has("phone") || (ZC.phoneNumber = null), await ZC.auth._persistUserIfCurrent(ZC), ZC
        }
        async function PZ(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const QC = await BC(CC, zC._linkToIdToken(CC.auth, await CC.getIdToken()), ZC);
          return FZ._forOperation(CC, "link", QC)
        }
        async function GZ(CC, zC, ZC) {
          await VC(zC);
          const QC = !1 === CC ? "provider-already-linked" : "no-such-provider";
          vC(SZ(zC.providerData).has(ZC) === CC, zC.auth, QC)
        }
        async function RZ(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: QC
          } = CC, wC = "reauthenticate";
          try {
            const bC = await BC(CC, gZ(QC, wC, zC, CC), ZC);
            vC(bC.idToken, QC, "internal-error");
            const nC = UC(bC.idToken);
            vC(nC, QC, "internal-error");
            const {
              sub: fC
            } = nC;
            return vC(CC.uid === fC, QC, "user-mismatch"), FZ._forOperation(CC, wC, bC)
          } catch (bC) {
            throw "auth/user-not-found" === (null === bC || void 0 === bC ? void 0 : bC.code) && AC(QC, "user-mismatch"), bC
          }
        }
        async function AZ(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const QC = "signIn",
            wC = await gZ(CC, QC, zC),
            bC = await FZ._fromIdTokenResponse(CC, QC, wC);
          return ZC || await CC._updateCurrentUser(bC.user), bC
        }
        async function xZ(CC, zC) {
          return AZ(mz(CC), zC)
        }
        async function JZ(CC, zC) {
          const ZC = (0, QC.L)(CC);
          return await GZ(!1, ZC, zC.providerId), PZ(ZC, zC)
        }
        async function IZ(CC, zC) {
          return RZ((0, QC.L)(CC), zC)
        }
        async function iZ(CC, zC) {
          const ZC = mz(CC),
            QC = await async function(CC, zC) {
              return sC(CC, "POST", "/v1/accounts:signInWithCustomToken", cC(CC, zC))
            }(ZC, {
              token: zC,
              returnSecureToken: !0
            }), wC = await FZ._fromIdTokenResponse(ZC, "signIn", QC);
          return await ZC._updateCurrentUser(wC.user), wC
        }
        class vZ {
          constructor(CC, zC) {
            this.factorId = CC, this.uid = zC.mfaEnrollmentId, this.enrollmentTime = new Date(zC.enrolledAt).toUTCString(), this.displayName = zC.displayName
          }
          static _fromServerResponse(CC, zC) {
            return "phoneInfo" in zC ? eZ._fromServerResponse(CC, zC) : "totpInfo" in zC ? hZ._fromServerResponse(CC, zC) : AC(CC, "internal-error")
          }
        }
        class eZ extends vZ {
          constructor(CC) {
            super("phone", CC), this.phoneNumber = CC.phoneInfo
          }
          static _fromServerResponse(CC, zC) {
            return new eZ(zC)
          }
        }
        class hZ extends vZ {
          constructor(CC) {
            super("totp", CC)
          }
          static _fromServerResponse(CC, zC) {
            return new hZ(zC)
          }
        }

        function KZ(CC, zC, ZC) {
          var QC;
          vC((null === (QC = ZC.url) || void 0 === QC ? void 0 : QC.length) > 0, CC, "invalid-continue-uri"), vC("undefined" === typeof ZC.dynamicLinkDomain || ZC.dynamicLinkDomain.length > 0, CC, "invalid-dynamic-link-domain"), zC.continueUrl = ZC.url, zC.dynamicLinkDomain = ZC.dynamicLinkDomain, zC.canHandleCodeInApp = ZC.handleCodeInApp, ZC.iOS && (vC(ZC.iOS.bundleId.length > 0, CC, "missing-ios-bundle-id"), zC.iOSBundleId = ZC.iOS.bundleId), ZC.android && (vC(ZC.android.packageName.length > 0, CC, "missing-android-pkg-name"), zC.androidInstallApp = ZC.android.installApp, zC.androidMinimumVersionCode = ZC.android.minimumVersion, zC.androidPackageName = ZC.android.packageName)
        }
        async function YZ(CC, zC, ZC) {
          var QC;
          const wC = mz(CC),
            bC = {
              requestType: "PASSWORD_RESET",
              email: zC,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (QC = wC._getRecaptchaConfig()) || void 0 === QC ? void 0 : QC.emailPasswordEnabled) {
            const CC = await Kz(wC, bC, "getOobCode", !0);
            ZC && KZ(wC, CC, ZC), await tz(wC, CC)
          } else ZC && KZ(wC, bC, ZC), await tz(wC, bC).catch((async CC => {
            if ("auth/missing-recaptcha-token" !== CC.code) return Promise.reject(CC);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const CC = await Kz(wC, bC, "getOobCode", !0);
              ZC && KZ(wC, CC, ZC), await tz(wC, CC)
            }
          }))
        }
        async function dZ(CC, zC, ZC) {
          await rz((0, QC.L)(CC), {
            oobCode: zC,
            newPassword: ZC
          })
        }
        async function mZ(CC, zC) {
          await async function(CC, zC) {
            return uC(CC, "POST", "/v1/accounts:update", cC(CC, zC))
          }((0, QC.L)(CC), {
            oobCode: zC
          })
        }
        async function HZ(CC, zC) {
          const ZC = (0, QC.L)(CC),
            wC = await rz(ZC, {
              oobCode: zC
            }),
            bC = wC.requestType;
          switch (vC(bC, ZC, "internal-error"), bC) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              vC(wC.newEmail, ZC, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              vC(wC.mfaInfo, ZC, "internal-error");
            default:
              vC(wC.email, ZC, "internal-error")
          }
          let nC = null;
          return wC.mfaInfo && (nC = vZ._fromServerResponse(mz(ZC), wC.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === wC.requestType ? wC.newEmail : wC.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === wC.requestType ? wC.email : wC.newEmail) || null,
              multiFactorInfo: nC
            },
            operation: bC
          }
        }
        async function EZ(CC, zC) {
          const {
            data: ZC
          } = await HZ((0, QC.L)(CC), zC);
          return ZC.email
        }
        async function lZ(CC, zC, ZC) {
          var QC;
          const wC = mz(CC),
            bC = {
              returnSecureToken: !0,
              email: zC,
              password: ZC,
              clientType: "CLIENT_TYPE_WEB"
            };
          let nC;
          if (null === (QC = wC._getRecaptchaConfig()) || void 0 === QC ? void 0 : QC.emailPasswordEnabled) {
            const CC = await Kz(wC, bC, "signUpPassword");
            nC = qZ(wC, CC)
          } else nC = qZ(wC, bC).catch((async CC => {
            if ("auth/missing-recaptcha-token" === CC.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const CC = await Kz(wC, bC, "signUpPassword");
              return qZ(wC, CC)
            }
            return Promise.reject(CC)
          }));
          const fC = await nC.catch((CC => Promise.reject(CC))),
            oC = await FZ._fromIdTokenResponse(wC, "signIn", fC);
          return await wC._updateCurrentUser(oC.user), oC
        }

        function XZ(CC, zC, ZC) {
          return xZ((0, QC.L)(CC), Vz.credential(zC, ZC))
        }
        async function cZ(CC, zC, ZC) {
          var QC;
          const wC = mz(CC),
            bC = {
              requestType: "EMAIL_SIGNIN",
              email: zC,
              clientType: "CLIENT_TYPE_WEB"
            };

          function nC(CC, zC) {
            vC(zC.handleCodeInApp, wC, "argument-error"), zC && KZ(wC, CC, zC)
          }
          if (null === (QC = wC._getRecaptchaConfig()) || void 0 === QC ? void 0 : QC.emailPasswordEnabled) {
            const CC = await Kz(wC, bC, "getOobCode", !0);
            nC(CC, ZC), await Dz(wC, CC)
          } else nC(bC, ZC), await Dz(wC, bC).catch((async CC => {
            if ("auth/missing-recaptcha-token" !== CC.code) return Promise.reject(CC);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const CC = await Kz(wC, bC, "getOobCode", !0);
              nC(CC, ZC), await Dz(wC, CC)
            }
          }))
        }

        function uZ(CC, zC) {
          const ZC = Oz.parseLink(zC);
          return "EMAIL_SIGNIN" === (null === ZC || void 0 === ZC ? void 0 : ZC.operation)
        }
        async function rZ(CC, zC, ZC) {
          const wC = (0, QC.L)(CC),
            bC = Vz.credentialWithLink(zC, ZC || KC());
          return vC(bC._tenantId === (wC.tenantId || null), wC, "tenant-id-mismatch"), xZ(wC, bC)
        }
        async function sZ(CC, zC) {
          const ZC = {
              identifier: zC,
              continueUri: YC() ? KC() : "http://localhost"
            },
            {
              signinMethods: wC
            } = await async function(CC, zC) {
              return uC(CC, "POST", "/v1/accounts:createAuthUri", cC(CC, zC))
            }((0, QC.L)(CC), ZC);
          return wC || []
        }
        async function TZ(CC, zC) {
          const ZC = (0, QC.L)(CC),
            wC = {
              requestType: "VERIFY_EMAIL",
              idToken: await CC.getIdToken()
            };
          zC && KZ(ZC.auth, wC, zC);
          const {
            email: bC
          } = await async function(CC, zC) {
            return az(CC, zC)
          }(ZC.auth, wC);
          bC !== CC.email && await CC.reload()
        }
        async function aZ(CC, zC, ZC) {
          const wC = (0, QC.L)(CC),
            bC = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await CC.getIdToken(),
              newEmail: zC
            };
          ZC && KZ(wC.auth, bC, ZC);
          const {
            email: nC
          } = await async function(CC, zC) {
            return az(CC, zC)
          }(wC.auth, bC);
          nC !== CC.email && await CC.reload()
        }
        async function tZ(CC, zC) {
          let {
            displayName: ZC,
            photoURL: wC
          } = zC;
          if (void 0 === ZC && void 0 === wC) return;
          const bC = (0, QC.L)(CC),
            nC = {
              idToken: await bC.getIdToken(),
              displayName: ZC,
              photoUrl: wC,
              returnSecureToken: !0
            },
            fC = await BC(bC, async function(CC, zC) {
              return uC(CC, "POST", "/v1/accounts:update", zC)
            }(bC.auth, nC));
          bC.displayName = fC.displayName || null, bC.photoURL = fC.photoUrl || null;
          const oC = bC.providerData.find((CC => {
            let {
              providerId: zC
            } = CC;
            return "password" === zC
          }));
          oC && (oC.displayName = bC.displayName, oC.photoURL = bC.photoURL), await bC._updateTokensIfNecessary(fC)
        }

        function DZ(CC, zC) {
          return yZ((0, QC.L)(CC), zC, null)
        }

        function jZ(CC, zC) {
          return yZ((0, QC.L)(CC), null, zC)
        }
        async function yZ(CC, zC, ZC) {
          const {
            auth: QC
          } = CC, wC = {
            idToken: await CC.getIdToken(),
            returnSecureToken: !0
          };
          zC && (wC.email = zC), ZC && (wC.password = ZC);
          const bC = await BC(CC, sz(QC, wC));
          await CC._updateTokensIfNecessary(bC, !0)
        }
        class LZ {
          constructor(CC, zC) {
            let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = CC, this.providerId = zC, this.profile = ZC
          }
        }
        class UZ extends LZ {
          constructor(CC, zC, ZC, QC) {
            super(CC, zC, ZC), this.username = QC
          }
        }
        class BZ extends LZ {
          constructor(CC, zC) {
            super(CC, "facebook.com", zC)
          }
        }
        class OZ extends UZ {
          constructor(CC, zC) {
            super(CC, "github.com", zC, "string" === typeof(null === zC || void 0 === zC ? void 0 : zC.login) ? null === zC || void 0 === zC ? void 0 : zC.login : null)
          }
        }
        class kZ extends LZ {
          constructor(CC, zC) {
            super(CC, "google.com", zC)
          }
        }
        class VZ extends UZ {
          constructor(CC, zC, ZC) {
            super(CC, "twitter.com", zC, ZC)
          }
        }

        function CQ(CC) {
          const {
            user: zC,
            _tokenResponse: ZC
          } = CC;
          return zC.isAnonymous && !ZC ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(CC) {
            var zC, ZC;
            if (!CC) return null;
            const {
              providerId: QC
            } = CC, wC = CC.rawUserInfo ? JSON.parse(CC.rawUserInfo) : {}, bC = CC.isNewUser || "identitytoolkit#SignupNewUserResponse" === CC.kind;
            if (!QC && (null === CC || void 0 === CC ? void 0 : CC.idToken)) {
              const QC = null === (ZC = null === (zC = UC(CC.idToken)) || void 0 === zC ? void 0 : zC.firebase) || void 0 === ZC ? void 0 : ZC.sign_in_provider;
              if (QC) return new LZ(bC, "anonymous" !== QC && "custom" !== QC ? QC : null)
            }
            if (!QC) return null;
            switch (QC) {
              case "facebook.com":
                return new BZ(bC, wC);
              case "github.com":
                return new OZ(bC, wC);
              case "google.com":
                return new kZ(bC, wC);
              case "twitter.com":
                return new VZ(bC, wC, CC.screenName || null);
              case "custom":
              case "anonymous":
                return new LZ(bC, null);
              default:
                return new LZ(bC, QC, wC)
            }
          }(ZC)
        }

        function zQ(CC, zC) {
          return (0, QC.L)(CC).setPersistence(zC)
        }

        function ZQ(CC) {
          return mz(CC).initializeRecaptchaConfig()
        }

        function QQ(CC, zC, ZC, wC) {
          return (0, QC.L)(CC).onIdTokenChanged(zC, ZC, wC)
        }

        function wQ(CC, zC, ZC) {
          return (0, QC.L)(CC).beforeAuthStateChanged(zC, ZC)
        }

        function bQ(CC, zC, ZC, wC) {
          return (0, QC.L)(CC).onAuthStateChanged(zC, ZC, wC)
        }

        function nQ(CC) {
          (0, QC.L)(CC).useDeviceLanguage()
        }

        function fQ(CC, zC) {
          return (0, QC.L)(CC).updateCurrentUser(zC)
        }

        function oQ(CC) {
          return (0, QC.L)(CC).signOut()
        }
        async function qQ(CC) {
          return (0, QC.L)(CC).delete()
        }
        class FQ {
          constructor(CC, zC, ZC) {
            this.type = CC, this.credential = zC, this.auth = ZC
          }
          static _fromIdtoken(CC, zC) {
            return new FQ("enroll", CC, zC)
          }
          static _fromMfaPendingCredential(CC) {
            return new FQ("signin", CC)
          }
          toJSON() {
            const CC = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [CC]: this.credential
              }
            }
          }
          static fromJSON(CC) {
            var zC, ZC;
            if (null === CC || void 0 === CC ? void 0 : CC.multiFactorSession) {
              if (null === (zC = CC.multiFactorSession) || void 0 === zC ? void 0 : zC.pendingCredential) return FQ._fromMfaPendingCredential(CC.multiFactorSession.pendingCredential);
              if (null === (ZC = CC.multiFactorSession) || void 0 === ZC ? void 0 : ZC.idToken) return FQ._fromIdtoken(CC.multiFactorSession.idToken)
            }
            return null
          }
        }
        class WQ {
          constructor(CC, zC, ZC) {
            this.session = CC, this.hints = zC, this.signInResolver = ZC
          }
          static _fromError(CC, zC) {
            const ZC = mz(CC),
              QC = zC.customData._serverResponse,
              wC = (QC.mfaInfo || []).map((CC => vZ._fromServerResponse(ZC, CC)));
            vC(QC.mfaPendingCredential, ZC, "internal-error");
            const bC = FQ._fromMfaPendingCredential(QC.mfaPendingCredential);
            return new WQ(bC, wC, (async CC => {
              const wC = await CC._process(ZC, bC);
              delete QC.mfaInfo, delete QC.mfaPendingCredential;
              const nC = Object.assign(Object.assign({}, QC), {
                idToken: wC.idToken,
                refreshToken: wC.refreshToken
              });
              switch (zC.operationType) {
                case "signIn":
                  const CC = await FZ._fromIdTokenResponse(ZC, zC.operationType, nC);
                  return await ZC._updateCurrentUser(CC.user), CC;
                case "reauthenticate":
                  return vC(zC.user, ZC, "internal-error"), FZ._forOperation(zC.user, zC.operationType, nC);
                default:
                  AC(ZC, "internal-error")
              }
            }))
          }
          async resolveSignIn(CC) {
            const zC = CC;
            return this.signInResolver(zC)
          }
        }

        function NQ(CC, zC) {
          var ZC;
          const wC = (0, QC.L)(CC),
            bC = zC;
          return vC(zC.customData.operationType, wC, "argument-error"), vC(null === (ZC = bC.customData._serverResponse) || void 0 === ZC ? void 0 : ZC.mfaPendingCredential, wC, "argument-error"), WQ._fromError(wC, bC)
        }
        class MQ {
          constructor(CC) {
            this.user = CC, this.enrolledFactors = [], CC._onReload((zC => {
              zC.mfaInfo && (this.enrolledFactors = zC.mfaInfo.map((zC => vZ._fromServerResponse(CC.auth, zC))))
            }))
          }
          static _fromUser(CC) {
            return new MQ(CC)
          }
          async getSession() {
            return FQ._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(CC, zC) {
            const ZC = CC,
              QC = await this.getSession(),
              wC = await BC(this.user, ZC._process(this.user.auth, QC, zC));
            return await this.user._updateTokensIfNecessary(wC), this.user.reload()
          }
          async unenroll(CC) {
            const zC = "string" === typeof CC ? CC : CC.uid,
              ZC = await this.user.getIdToken();
            try {
              const CC = await BC(this.user, (QC = this.user.auth, wC = {
                idToken: ZC,
                mfaEnrollmentId: zC
              }, uC(QC, "POST", "/v2/accounts/mfaEnrollment:withdraw", cC(QC, wC))));
              this.enrolledFactors = this.enrolledFactors.filter((CC => {
                let {
                  uid: ZC
                } = CC;
                return ZC !== zC
              })), await this.user._updateTokensIfNecessary(CC), await this.user.reload()
            } catch (bC) {
              throw bC
            }
            var QC, wC
          }
        }
        const gQ = new WeakMap;

        function SQ(CC) {
          const zC = (0, QC.L)(CC);
          return gQ.has(zC) || gQ.set(zC, MQ._fromUser(zC)), gQ.get(zC)
        }
        const pQ = "__sak";
        class PQ {
          constructor(CC, zC) {
            this.storageRetriever = CC, this.type = zC
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(pQ, "1"), this.storage.removeItem(pQ), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (CC) {
              return Promise.resolve(!1)
            }
          }
          _set(CC, zC) {
            return this.storage.setItem(CC, JSON.stringify(zC)), Promise.resolve()
          }
          _get(CC) {
            const zC = this.storage.getItem(CC);
            return Promise.resolve(zC ? JSON.parse(zC) : null)
          }
          _remove(CC) {
            return this.storage.removeItem(CC), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class GQ extends PQ {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (CC, zC) => this.onStorageEvent(CC, zC), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const CC = (0, QC.O)();
              return Nz(CC) || Gz(CC)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (CC) {
                return !1
              }
            }(), this.fallbackToPolling = Rz(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(CC) {
            for (const zC of Object.keys(this.listeners)) {
              const ZC = this.storage.getItem(zC),
                QC = this.localCache[zC];
              ZC !== QC && CC(zC, QC, ZC)
            }
          }
          onStorageEvent(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!CC.key) return void this.forAllChangedKeys(((CC, zC, ZC) => {
              this.notifyListeners(CC, ZC)
            }));
            const ZC = CC.key;
            if (zC ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const QC = this.storage.getItem(ZC);
              if (CC.newValue !== QC) null !== CC.newValue ? this.storage.setItem(ZC, CC.newValue) : this.storage.removeItem(ZC);
              else if (this.localCache[ZC] === CC.newValue && !zC) return
            }
            const wC = () => {
                const CC = this.storage.getItem(ZC);
                (zC || this.localCache[ZC] !== CC) && this.notifyListeners(ZC, CC)
              },
              bC = this.storage.getItem(ZC);
            (0, QC.X)() && 10 === document.documentMode && bC !== CC.newValue && CC.newValue !== CC.oldValue ? setTimeout(wC, 10) : wC()
          }
          notifyListeners(CC, zC) {
            this.localCache[CC] = zC;
            const ZC = this.listeners[CC];
            if (ZC)
              for (const QC of Array.from(ZC)) QC(zC ? JSON.parse(zC) : zC)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((CC, zC, ZC) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: CC,
                  oldValue: zC,
                  newValue: ZC
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
          _addListener(CC, zC) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[CC] || (this.listeners[CC] = new Set, this.localCache[CC] = this.storage.getItem(CC)), this.listeners[CC].add(zC)
          }
          _removeListener(CC, zC) {
            this.listeners[CC] && (this.listeners[CC].delete(zC), 0 === this.listeners[CC].size && delete this.listeners[CC]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(CC, zC) {
            await super._set(CC, zC), this.localCache[CC] = JSON.stringify(zC)
          }
          async _get(CC) {
            const zC = await super._get(CC);
            return this.localCache[CC] = JSON.stringify(zC), zC
          }
          async _remove(CC) {
            await super._remove(CC), delete this.localCache[CC]
          }
        }
        GQ.type = "LOCAL";
        const RQ = GQ;
        class AQ extends PQ {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(CC, zC) {}
          _removeListener(CC, zC) {}
        }
        AQ.type = "SESSION";
        const xQ = AQ;
        class JQ {
          constructor(CC) {
            this.eventTarget = CC, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(CC) {
            const zC = this.receivers.find((zC => zC.isListeningto(CC)));
            if (zC) return zC;
            const ZC = new JQ(CC);
            return this.receivers.push(ZC), ZC
          }
          isListeningto(CC) {
            return this.eventTarget === CC
          }
          async handleEvent(CC) {
            const zC = CC,
              {
                eventId: ZC,
                eventType: QC,
                data: wC
              } = zC.data,
              bC = this.handlersMap[QC];
            if (!(null === bC || void 0 === bC ? void 0 : bC.size)) return;
            zC.ports[0].postMessage({
              status: "ack",
              eventId: ZC,
              eventType: QC
            });
            const nC = Array.from(bC).map((async CC => CC(zC.origin, wC))),
              fC = await
            function(CC) {
              return Promise.all(CC.map((async CC => {
                try {
                  return {
                    fulfilled: !0,
                    value: await CC
                  }
                } catch (zC) {
                  return {
                    fulfilled: !1,
                    reason: zC
                  }
                }
              })))
            }(nC);
            zC.ports[0].postMessage({
              status: "done",
              eventId: ZC,
              eventType: QC,
              response: fC
            })
          }
          _subscribe(CC, zC) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[CC] || (this.handlersMap[CC] = new Set), this.handlersMap[CC].add(zC)
          }
          _unsubscribe(CC, zC) {
            this.handlersMap[CC] && zC && this.handlersMap[CC].delete(zC), zC && 0 !== this.handlersMap[CC].size || delete this.handlersMap[CC], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function IQ() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            ZC = "";
          for (let QC = 0; QC < zC; QC++) ZC += Math.floor(10 * Math.random());
          return CC + ZC
        }
        JQ.receivers = [];
        class iQ {
          constructor(CC) {
            this.target = CC, this.handlers = new Set
          }
          removeMessageHandler(CC) {
            CC.messageChannel && (CC.messageChannel.port1.removeEventListener("message", CC.fR), CC.messageChannel.port1.close()), this.handlers.delete(CC)
          }
          async _send(CC, zC) {
            let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const QC = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!QC) throw new Error("connection_unavailable");
            let wC, bC;
            return new Promise(((nC, fC) => {
              const oC = IQ("", 20);
              QC.port1.start();
              const qC = setTimeout((() => {
                fC(new Error("unsupported_event"))
              }), ZC);
              bC = {
                messageChannel: QC,
                fR(CC) {
                  const zC = CC;
                  if (zC.data.eventId === oC) switch (zC.data.status) {
                    case "ack":
                      clearTimeout(qC), wC = setTimeout((() => {
                        fC(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(wC), nC(zC.data.response);
                      break;
                    default:
                      clearTimeout(qC), clearTimeout(wC), fC(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(bC), QC.port1.addEventListener("message", bC.fR), this.target.postMessage({
                eventType: CC,
                eventId: oC,
                data: zC
              }, [QC.port2])
            })).finally((() => {
              bC && this.removeMessageHandler(bC)
            }))
          }
        }

        function vQ() {
          return window
        }

        function eQ() {
          return "undefined" !== typeof vQ().WorkerGlobalScope && "function" === typeof vQ().importScripts
        }
        const hQ = "firebaseLocalStorageDb",
          KQ = "firebaseLocalStorage",
          YQ = "fbase_key";
        class dQ {
          constructor(CC) {
            this.request = CC
          }
          toPromise() {
            return new Promise(((CC, zC) => {
              this.request.addEventListener("success", (() => {
                CC(this.request.result)
              })), this.request.addEventListener("error", (() => {
                zC(this.request.error)
              }))
            }))
          }
        }

        function mQ(CC, zC) {
          return CC.transaction([KQ], zC ? "readwrite" : "readonly").objectStore(KQ)
        }

        function HQ() {
          const CC = indexedDB.open(hQ, 1);
          return new Promise(((zC, ZC) => {
            CC.addEventListener("error", (() => {
              ZC(CC.error)
            })), CC.addEventListener("upgradeneeded", (() => {
              const zC = CC.result;
              try {
                zC.createObjectStore(KQ, {
                  keyPath: YQ
                })
              } catch (QC) {
                ZC(QC)
              }
            })), CC.addEventListener("success", (async () => {
              const ZC = CC.result;
              ZC.objectStoreNames.contains(KQ) ? zC(ZC) : (ZC.close(), await
                function() {
                  const CC = indexedDB.deleteDatabase(hQ);
                  return new dQ(CC).toPromise()
                }(), zC(await HQ()))
            }))
          }))
        }
        async function EQ(CC, zC, ZC) {
          const QC = mQ(CC, !0).put({
            [YQ]: zC,
            value: ZC
          });
          return new dQ(QC).toPromise()
        }

        function lQ(CC, zC) {
          const ZC = mQ(CC, !0).delete(zC);
          return new dQ(ZC).toPromise()
        }
        class XQ {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await HQ()), this.db
          }
          async _withRetries(CC) {
            let zC = 0;
            for (;;) try {
              const zC = await this._openDb();
              return await CC(zC)
            } catch (ZC) {
              if (zC++ > 3) throw ZC;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return eQ() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = JQ._getInstance(eQ() ? self : null), this.receiver._subscribe("keyChanged", (async (CC, zC) => ({
              keyProcessed: (await this._poll()).includes(zC.key)
            }))), this.receiver._subscribe("ping", (async (CC, zC) => ["keyChanged"]))
          }
          async initializeSender() {
            var CC, zC;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (CC) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new iQ(this.activeServiceWorker);
            const ZC = await this.sender._send("ping", {}, 800);
            ZC && (null === (CC = ZC[0]) || void 0 === CC ? void 0 : CC.fulfilled) && (null === (zC = ZC[0]) || void 0 === zC ? void 0 : zC.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(CC) {
            if (this.sender && this.activeServiceWorker && function() {
                var CC;
                return (null === (CC = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === CC ? void 0 : CC.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: CC
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (zC) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const CC = await HQ();
              return await EQ(CC, pQ, "1"), await lQ(CC, pQ), !0
            } catch (CC) {}
            return !1
          }
          async _withPendingWrite(CC) {
            this.pendingWrites++;
            try {
              await CC()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(CC, zC) {
            return this._withPendingWrite((async () => (await this._withRetries((ZC => EQ(ZC, CC, zC))), this.localCache[CC] = zC, this.notifyServiceWorker(CC))))
          }
          async _get(CC) {
            const zC = await this._withRetries((zC => async function(CC, zC) {
              const ZC = mQ(CC, !1).get(zC),
                QC = await new dQ(ZC).toPromise();
              return void 0 === QC ? null : QC.value
            }(zC, CC)));
            return this.localCache[CC] = zC, zC
          }
          async _remove(CC) {
            return this._withPendingWrite((async () => (await this._withRetries((zC => lQ(zC, CC))), delete this.localCache[CC], this.notifyServiceWorker(CC))))
          }
          async _poll() {
            const CC = await this._withRetries((CC => {
              const zC = mQ(CC, !1).getAll();
              return new dQ(zC).toPromise()
            }));
            if (!CC) return [];
            if (0 !== this.pendingWrites) return [];
            const zC = [],
              ZC = new Set;
            for (const {
                fbase_key: QC,
                value: wC
              }
              of CC) ZC.add(QC), JSON.stringify(this.localCache[QC]) !== JSON.stringify(wC) && (this.notifyListeners(QC, wC), zC.push(QC));
            for (const QC of Object.keys(this.localCache)) this.localCache[QC] && !ZC.has(QC) && (this.notifyListeners(QC, null), zC.push(QC));
            return zC
          }
          notifyListeners(CC, zC) {
            this.localCache[CC] = zC;
            const ZC = this.listeners[CC];
            if (ZC)
              for (const QC of Array.from(ZC)) QC(zC)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(CC, zC) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[CC] || (this.listeners[CC] = new Set, this._get(CC)), this.listeners[CC].add(zC)
          }
          _removeListener(CC, zC) {
            this.listeners[CC] && (this.listeners[CC].delete(zC), 0 === this.listeners[CC].size && delete this.listeners[CC]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        XQ.type = "LOCAL";
        const cQ = XQ;
        const uQ = 1e12;
        class rQ {
          constructor(CC) {
            this.auth = CC, this.counter = uQ, this._widgets = new Map
          }
          render(CC, zC) {
            const ZC = this.counter;
            return this._widgets.set(ZC, new sQ(CC, this.auth.name, zC || {})), this.counter++, ZC
          }
          reset(CC) {
            var zC;
            const ZC = CC || uQ;
            null === (zC = this._widgets.get(ZC)) || void 0 === zC || zC.delete(), this._widgets.delete(ZC)
          }
          getResponse(CC) {
            var zC;
            const ZC = CC || uQ;
            return (null === (zC = this._widgets.get(ZC)) || void 0 === zC ? void 0 : zC.getResponse()) || ""
          }
          async execute(CC) {
            var zC;
            const ZC = CC || uQ;
            return null === (zC = this._widgets.get(ZC)) || void 0 === zC || zC.execute(), ""
          }
        }
        class sQ {
          constructor(CC, zC, ZC) {
            this.params = ZC, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const QC = "string" === typeof CC ? document.getElementById(CC) : CC;
            vC(QC, "argument-error", {
              appName: zC
            }), this.container = QC, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(CC) {
                const zC = [],
                  ZC = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let QC = 0; QC < CC; QC++) zC.push(ZC.charAt(Math.floor(Math.random() * ZC.length)));
                return zC.join("")
              }(50);
              const {
                callback: CC,
                "expired-callback": zC
              } = this.params;
              if (CC) try {
                CC(this.responseToken)
              } catch (ZC) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, zC) try {
                  zC()
                } catch (ZC) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const TQ = ez("rcb"),
          aQ = new mC(3e4, 6e4);
        class tQ {
          constructor() {
            var CC;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (CC = vQ().grecaptcha) || void 0 === CC ? void 0 : CC.render)
          }
          load(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return vC(function(CC) {
              return CC.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(CC)
            }(zC), CC, "argument-error"), this.shouldResolveImmediately(zC) && Jz(vQ().grecaptcha) ? Promise.resolve(vQ().grecaptcha) : new Promise(((ZC, wC) => {
              const bC = vQ().setTimeout((() => {
                wC(xC(CC, "network-request-failed"))
              }), aQ.get());
              vQ()[TQ] = () => {
                vQ().clearTimeout(bC), delete vQ()[TQ];
                const QC = vQ().grecaptcha;
                if (!QC || !Jz(QC)) return void wC(xC(CC, "internal-error"));
                const nC = QC.render;
                QC.render = (CC, zC) => {
                  const ZC = nC(CC, zC);
                  return this.counter++, ZC
                }, this.hostLanguage = zC, ZC(QC)
              };
              vz(`https://www.google.com/recaptcha/api.js??${(0,QC.jb)({onload:TQ,render:"explicit",hl:zC})}`).catch((() => {
                clearTimeout(bC), wC(xC(CC, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(CC) {
            var zC;
            return !!(null === (zC = vQ().grecaptcha) || void 0 === zC ? void 0 : zC.render) && (CC === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class DQ {
          async load(CC) {
            return new rQ(CC)
          }
          clearedOneInstance() {}
        }
        const jQ = "recaptcha",
          yQ = {
            theme: "light",
            type: "image"
          };
        class LQ {
          constructor(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, yQ),
              ZC = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = zC, this.type = jQ, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = mz(ZC), this.isInvisible = "invisible" === this.parameters.size, vC("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const QC = "string" === typeof CC ? document.getElementById(CC) : CC;
            vC(QC, this.auth, "argument-error"), this.container = QC, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new DQ : new tQ, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const CC = await this.render(),
              zC = this.getAssertedRecaptcha(),
              ZC = zC.getResponse(CC);
            return ZC || new Promise((ZC => {
              const QC = CC => {
                CC && (this.tokenChangeListeners.delete(QC), ZC(CC))
              };
              this.tokenChangeListeners.add(QC), this.isInvisible && zC.execute(CC)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (CC) {
              return Promise.reject(CC)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((CC => {
              throw this.renderPromise = null, CC
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((CC => {
              this.container.removeChild(CC)
            }))
          }
          validateStartingState() {
            vC(!this.parameters.sitekey, this.auth, "argument-error"), vC(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), vC("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(CC) {
            return zC => {
              if (this.tokenChangeListeners.forEach((CC => CC(zC))), "function" === typeof CC) CC(zC);
              else if ("string" === typeof CC) {
                const ZC = vQ()[CC];
                "function" === typeof ZC && ZC(zC)
              }
            }
          }
          assertNotDestroyed() {
            vC(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let CC = this.container;
              if (!this.isInvisible) {
                const zC = document.createElement("div");
                CC.appendChild(zC), CC = zC
              }
              this.widgetId = this.getAssertedRecaptcha().render(CC, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            vC(YC() && !eQ(), this.auth, "internal-error"), await
            function() {
              let CC = null;
              return new Promise((zC => {
                "complete" !== document.readyState ? (CC = () => zC(), window.addEventListener("load", CC)) : zC()
              })).catch((zC => {
                throw CC && window.removeEventListener("load", CC), zC
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const CC = await async function(CC) {
              return (await uC(CC, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            vC(CC, this.auth, "internal-error"), this.parameters.sitekey = CC
          }
          getAssertedRecaptcha() {
            return vC(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class UQ {
          constructor(CC, zC) {
            this.verificationId = CC, this.onConfirmation = zC
          }
          confirm(CC) {
            const zC = Bz._fromVerification(this.verificationId, CC);
            return this.onConfirmation(zC)
          }
        }
        async function BQ(CC, zC, ZC) {
          const wC = mz(CC),
            bC = await VQ(wC, zC, (0, QC.L)(ZC));
          return new UQ(bC, (CC => xZ(wC, CC)))
        }
        async function OQ(CC, zC, ZC) {
          const wC = (0, QC.L)(CC);
          await GZ(!1, wC, "phone");
          const bC = await VQ(wC.auth, zC, (0, QC.L)(ZC));
          return new UQ(bC, (CC => JZ(wC, CC)))
        }
        async function kQ(CC, zC, ZC) {
          const wC = (0, QC.L)(CC),
            bC = await VQ(wC.auth, zC, (0, QC.L)(ZC));
          return new UQ(bC, (CC => IZ(wC, CC)))
        }
        async function VQ(CC, zC, ZC) {
          var QC;
          const wC = await ZC.verify();
          try {
            let bC;
            if (vC("string" === typeof wC, CC, "argument-error"), vC(ZC.type === jQ, CC, "argument-error"), bC = "string" === typeof zC ? {
                phoneNumber: zC
              } : zC, "session" in bC) {
              const zC = bC.session;
              if ("phoneNumber" in bC) {
                vC("enroll" === zC.type, CC, "internal-error");
                const ZC = await
                function(CC, zC) {
                  return uC(CC, "POST", "/v2/accounts/mfaEnrollment:start", cC(CC, zC))
                }(CC, {
                  idToken: zC.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: bC.phoneNumber,
                    recaptchaToken: wC
                  }
                });
                return ZC.phoneSessionInfo.sessionInfo
              } {
                vC("signin" === zC.type, CC, "internal-error");
                const ZC = (null === (QC = bC.multiFactorHint) || void 0 === QC ? void 0 : QC.uid) || bC.multiFactorUid;
                vC(ZC, CC, "missing-multi-factor-info");
                const nC = await
                function(CC, zC) {
                  return uC(CC, "POST", "/v2/accounts/mfaSignIn:start", cC(CC, zC))
                }(CC, {
                  mfaPendingCredential: zC.credential,
                  mfaEnrollmentId: ZC,
                  phoneSignInInfo: {
                    recaptchaToken: wC
                  }
                });
                return nC.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: zC
              } = await async function(CC, zC) {
                return uC(CC, "POST", "/v1/accounts:sendVerificationCode", cC(CC, zC))
              }(CC, {
                phoneNumber: bC.phoneNumber,
                recaptchaToken: wC
              });
              return zC
            }
          } finally {
            ZC._reset()
          }
        }
        async function Cw(CC, zC) {
          await PZ((0, QC.L)(CC), zC)
        }
        class zw {
          constructor(CC) {
            this.providerId = zw.PROVIDER_ID, this.auth = mz(CC)
          }
          verifyPhoneNumber(CC, zC) {
            return VQ(this.auth, CC, (0, QC.L)(zC))
          }
          static credential(CC, zC) {
            return Bz._fromVerification(CC, zC)
          }
          static credentialFromResult(CC) {
            const zC = CC;
            return zw.credentialFromTaggedObject(zC)
          }
          static credentialFromError(CC) {
            return zw.credentialFromTaggedObject(CC.customData || {})
          }
          static credentialFromTaggedObject(CC) {
            let {
              _tokenResponse: zC
            } = CC;
            if (!zC) return null;
            const {
              phoneNumber: ZC,
              temporaryProof: QC
            } = zC;
            return ZC && QC ? Bz._fromTokenResponse(ZC, QC) : null
          }
        }

        function Zw(CC, zC) {
          return zC ? bz(zC) : (vC(CC._popupRedirectResolver, CC, "argument-error"), CC._popupRedirectResolver)
        }
        zw.PROVIDER_ID = "phone", zw.PHONE_SIGN_IN_METHOD = "phone";
        class Qw extends uz {
          constructor(CC) {
            super("custom", "custom"), this.params = CC
          }
          _getIdTokenResponse(CC) {
            return yz(CC, this._buildIdpRequest())
          }
          _linkToIdToken(CC, zC) {
            return yz(CC, this._buildIdpRequest(zC))
          }
          _getReauthenticationResolver(CC) {
            return yz(CC, this._buildIdpRequest())
          }
          _buildIdpRequest(CC) {
            const zC = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return CC && (zC.idToken = CC), zC
          }
        }

        function ww(CC) {
          return AZ(CC.auth, new Qw(CC), CC.bypassAuthState)
        }

        function bw(CC) {
          const {
            auth: zC,
            user: ZC
          } = CC;
          return vC(ZC, zC, "internal-error"), RZ(ZC, new Qw(CC), CC.bypassAuthState)
        }
        async function nw(CC) {
          const {
            auth: zC,
            user: ZC
          } = CC;
          return vC(ZC, zC, "internal-error"), PZ(ZC, new Qw(CC), CC.bypassAuthState)
        }
        class fw {
          constructor(CC, zC, ZC, QC) {
            let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = CC, this.resolver = ZC, this.user = QC, this.bypassAuthState = wC, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(zC) ? zC : [zC]
          }
          execute() {
            return new Promise((async (CC, zC) => {
              this.pendingPromise = {
                resolve: CC,
                reject: zC
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (ZC) {
                this.reject(ZC)
              }
            }))
          }
          async onAuthEvent(CC) {
            const {
              urlResponse: zC,
              sessionId: ZC,
              postBody: QC,
              tenantId: wC,
              error: bC,
              type: nC
            } = CC;
            if (bC) return void this.reject(bC);
            const fC = {
              auth: this.auth,
              requestUri: zC,
              sessionId: ZC,
              tenantId: wC || void 0,
              postBody: QC || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(nC)(fC))
            } catch (oC) {
              this.reject(oC)
            }
          }
          onError(CC) {
            this.reject(CC)
          }
          getIdpTask(CC) {
            switch (CC) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return ww;
              case "linkViaPopup":
              case "linkViaRedirect":
                return nw;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return bw;
              default:
                AC(this.auth, "internal-error")
            }
          }
          resolve(CC) {
            hC(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(CC), this.unregisterAndCleanUp()
          }
          reject(CC) {
            hC(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(CC), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const ow = new mC(2e3, 1e4);
        async function qw(CC, zC, ZC) {
          const QC = mz(CC);
          IC(CC, zC, CZ);
          const wC = Zw(QC, ZC);
          return new Nw(QC, "signInViaPopup", zC, wC).executeNotNull()
        }
        async function Fw(CC, zC, ZC) {
          const wC = (0, QC.L)(CC);
          IC(wC.auth, zC, CZ);
          const bC = Zw(wC.auth, ZC);
          return new Nw(wC.auth, "reauthViaPopup", zC, bC, wC).executeNotNull()
        }
        async function Ww(CC, zC, ZC) {
          const wC = (0, QC.L)(CC);
          IC(wC.auth, zC, CZ);
          const bC = Zw(wC.auth, ZC);
          return new Nw(wC.auth, "linkViaPopup", zC, bC, wC).executeNotNull()
        }
        class Nw extends fw {
          constructor(CC, zC, ZC, QC, wC) {
            super(CC, zC, QC, wC), this.provider = ZC, this.authWindow = null, this.pollId = null, Nw.currentPopupAction && Nw.currentPopupAction.cancel(), Nw.currentPopupAction = this
          }
          async executeNotNull() {
            const CC = await this.execute();
            return vC(CC, this.auth, "internal-error"), CC
          }
          async onExecution() {
            hC(1 === this.filter.length, "Popup operations only handle one event");
            const CC = IQ();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], CC), this.authWindow.associatedEvent = CC, this.resolver._originValidation(this.auth).catch((CC => {
              this.reject(CC)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (CC => {
              CC || this.reject(xC(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var CC;
            return (null === (CC = this.authWindow) || void 0 === CC ? void 0 : CC.associatedEvent) || null
          }
          cancel() {
            this.reject(xC(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Nw.currentPopupAction = null
          }
          pollUserCancellation() {
            const CC = () => {
              var zC, ZC;
              (null === (ZC = null === (zC = this.authWindow) || void 0 === zC ? void 0 : zC.window) || void 0 === ZC ? void 0 : ZC.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(xC(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(CC, ow.get())
            };
            CC()
          }
        }
        Nw.currentPopupAction = null;
        const Mw = "pendingRedirect",
          gw = new Map;
        class Sw extends fw {
          constructor(CC, zC) {
            super(CC, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], zC, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let CC = gw.get(this.auth._key());
            if (!CC) {
              try {
                const zC = await async function(CC, zC) {
                  const ZC = Rw(zC),
                    QC = Gw(CC);
                  if (!await QC._isAvailable()) return !1;
                  const wC = "true" === await QC._get(ZC);
                  return await QC._remove(ZC), wC
                }(this.resolver, this.auth) ? await super.execute() : null;
                CC = () => Promise.resolve(zC)
              } catch (zC) {
                CC = () => Promise.reject(zC)
              }
              gw.set(this.auth._key(), CC)
            }
            return this.bypassAuthState || gw.set(this.auth._key(), (() => Promise.resolve(null))), CC()
          }
          async onAuthEvent(CC) {
            if ("signInViaRedirect" === CC.type) return super.onAuthEvent(CC);
            if ("unknown" !== CC.type) {
              if (CC.eventId) {
                const zC = await this.auth._redirectUserForId(CC.eventId);
                if (zC) return this.user = zC, super.onAuthEvent(CC);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function pw(CC, zC) {
          return Gw(CC)._set(Rw(zC), "true")
        }

        function Pw(CC, zC) {
          gw.set(CC._key(), zC)
        }

        function Gw(CC) {
          return bz(CC._redirectPersistence)
        }

        function Rw(CC) {
          return oz(Mw, CC.config.apiKey, CC.name)
        }

        function Aw(CC, zC, ZC) {
          return async function(CC, zC, ZC) {
            const QC = mz(CC);
            IC(CC, zC, CZ), await QC._initializationPromise;
            const wC = Zw(QC, ZC);
            return await pw(wC, QC), wC._openRedirect(QC, zC, "signInViaRedirect")
          }(CC, zC, ZC)
        }

        function xw(CC, zC, ZC) {
          return async function(CC, zC, ZC) {
            const wC = (0, QC.L)(CC);
            IC(wC.auth, zC, CZ), await wC.auth._initializationPromise;
            const bC = Zw(wC.auth, ZC);
            await pw(bC, wC.auth);
            const nC = await vw(wC);
            return bC._openRedirect(wC.auth, zC, "reauthViaRedirect", nC)
          }(CC, zC, ZC)
        }

        function Jw(CC, zC, ZC) {
          return async function(CC, zC, ZC) {
            const wC = (0, QC.L)(CC);
            IC(wC.auth, zC, CZ), await wC.auth._initializationPromise;
            const bC = Zw(wC.auth, ZC);
            await GZ(!1, wC, zC.providerId), await pw(bC, wC.auth);
            const nC = await vw(wC);
            return bC._openRedirect(wC.auth, zC, "linkViaRedirect", nC)
          }(CC, zC, ZC)
        }
        async function Iw(CC, zC) {
          return await mz(CC)._initializationPromise, iw(CC, zC, !1)
        }
        async function iw(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const QC = mz(CC),
            wC = Zw(QC, zC),
            bC = new Sw(QC, wC, ZC),
            nC = await bC.execute();
          return nC && !ZC && (delete nC.user._redirectEventId, await QC._persistUserIfCurrent(nC.user), await QC._setRedirectUser(null, zC)), nC
        }
        async function vw(CC) {
          const zC = IQ(`${CC.uid}:::`);
          return CC._redirectEventId = zC, await CC.auth._setRedirectUser(CC), await CC.auth._persistUserIfCurrent(CC), zC
        }
        class ew {
          constructor(CC) {
            this.auth = CC, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(CC) {
            this.consumers.add(CC), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, CC) && (this.sendToConsumer(this.queuedRedirectEvent, CC), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(CC) {
            this.consumers.delete(CC)
          }
          onEvent(CC) {
            if (this.hasEventBeenHandled(CC)) return !1;
            let zC = !1;
            return this.consumers.forEach((ZC => {
              this.isEventForConsumer(CC, ZC) && (zC = !0, this.sendToConsumer(CC, ZC), this.saveEventToCache(CC))
            })), this.hasHandledPotentialRedirect || ! function(CC) {
              switch (CC.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Kw(CC);
                default:
                  return !1
              }
            }(CC) || (this.hasHandledPotentialRedirect = !0, zC || (this.queuedRedirectEvent = CC, zC = !0)), zC
          }
          sendToConsumer(CC, zC) {
            var ZC;
            if (CC.error && !Kw(CC)) {
              const QC = (null === (ZC = CC.error.code) || void 0 === ZC ? void 0 : ZC.split("auth/")[1]) || "internal-error";
              zC.onError(xC(this.auth, QC))
            } else zC.onAuthEvent(CC)
          }
          isEventForConsumer(CC, zC) {
            const ZC = null === zC.eventId || !!CC.eventId && CC.eventId === zC.eventId;
            return zC.filter.includes(CC.type) && ZC
          }
          hasEventBeenHandled(CC) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(hw(CC))
          }
          saveEventToCache(CC) {
            this.cachedEventUids.add(hw(CC)), this.lastProcessedEventTime = Date.now()
          }
        }

        function hw(CC) {
          return [CC.type, CC.eventId, CC.sessionId, CC.tenantId].filter((CC => CC)).join("-")
        }

        function Kw(CC) {
          let {
            type: zC,
            error: ZC
          } = CC;
          return "unknown" === zC && "auth/no-auth-event" === (null === ZC || void 0 === ZC ? void 0 : ZC.code)
        }
        const Yw = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          dw = /^https?/;
        async function mw(CC) {
          if (CC.config.emulator) return;
          const {
            authorizedDomains: zC
          } = await async function(CC) {
            return uC(CC, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(CC);
          for (const QC of zC) try {
            if (Hw(QC)) return
          } catch (ZC) {}
          AC(CC, "unauthorized-domain")
        }

        function Hw(CC) {
          const zC = KC(),
            {
              protocol: ZC,
              hostname: QC
            } = new URL(zC);
          if (CC.startsWith("chrome-extension://")) {
            const wC = new URL(CC);
            return "" === wC.hostname && "" === QC ? "chrome-extension:" === ZC && CC.replace("chrome-extension://", "") === zC.replace("chrome-extension://", "") : "chrome-extension:" === ZC && wC.hostname === QC
          }
          if (!dw.test(ZC)) return !1;
          if (Yw.test(CC)) return QC === CC;
          const wC = CC.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + wC + "|" + wC + ")$", "i").test(QC)
        }
        const Ew = new mC(3e4, 6e4);

        function lw() {
          const CC = vQ().___jsl;
          if (null === CC || void 0 === CC ? void 0 : CC.H)
            for (const zC of Object.keys(CC.H))
              if (CC.H[zC].r = CC.H[zC].r || [], CC.H[zC].L = CC.H[zC].L || [], CC.H[zC].r = [...CC.H[zC].L], CC.CP)
                for (let ZC = 0; ZC < CC.CP.length; ZC++) CC.CP[ZC] = null
        }
        let Xw = null;

        function uw(CC) {
          return Xw = Xw || function(CC) {
            return new Promise(((zC, ZC) => {
              var QC, wC, bC;

              function nC() {
                lw(), gapi.load("gapi.iframes", {
                  callback: () => {
                    zC(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    lw(), ZC(xC(CC, "network-request-failed"))
                  },
                  timeout: Ew.get()
                })
              }
              if (null === (wC = null === (QC = vQ().gapi) || void 0 === QC ? void 0 : QC.iframes) || void 0 === wC ? void 0 : wC.Iframe) zC(gapi.iframes.getContext());
              else {
                if (!(null === (bC = vQ().gapi) || void 0 === bC ? void 0 : bC.load)) {
                  const zC = ez("iframefcb");
                  return vQ()[zC] = () => {
                    gapi.load ? nC() : ZC(xC(CC, "network-request-failed"))
                  }, vz(`https://apis.google.com/js/api.js?onload=${zC}`).catch((CC => ZC(CC)))
                }
                nC()
              }
            })).catch((CC => {
              throw Xw = null, CC
            }))
          }(CC), Xw
        }
        const rw = new mC(5e3, 15e3),
          sw = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          Tw = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function aw(CC) {
          const zC = CC.config;
          vC(zC.authDomain, CC, "auth-domain-config-required");
          const ZC = zC.emulator ? HC(zC, "emulator/auth/iframe") : `https://${CC.config.authDomain}/__/auth/iframe`,
            bC = {
              apiKey: zC.apiKey,
              appName: CC.name,
              v: wC.i
            },
            nC = Tw.get(CC.config.apiHost);
          nC && (bC.eid = nC);
          const fC = CC._getFrameworks();
          return fC.length && (bC.fw = fC.join(",")), `${ZC}?${(0,QC.jb)(bC).slice(1)}`
        }
        const tw = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Dw {
          constructor(CC) {
            this.window = CC, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (CC) {}
          }
        }

        function jw(CC, zC, ZC) {
          let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const nC = Math.max((window.screen.availHeight - bC) / 2, 0).toString(),
            fC = Math.max((window.screen.availWidth - wC) / 2, 0).toString();
          let oC = "";
          const qC = Object.assign(Object.assign({}, tw), {
              width: wC.toString(),
              height: bC.toString(),
              top: nC,
              left: fC
            }),
            FC = (0, QC.O)().toLowerCase();
          ZC && (oC = Mz(FC) ? "_blank" : ZC), Wz(FC) && (zC = zC || "http://localhost", qC.scrollbars = "yes");
          const WC = Object.entries(qC).reduce(((CC, zC) => {
            let [ZC, QC] = zC;
            return `${CC}${ZC}=${QC},`
          }), "");
          if (function() {
              var CC;
              return Gz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.O)()) && !!(null === (CC = window.navigator) || void 0 === CC ? void 0 : CC.standalone)
            }(FC) && "_self" !== oC) return function(CC, zC) {
            const ZC = document.createElement("a");
            ZC.href = CC, ZC.target = zC;
            const QC = document.createEvent("MouseEvent");
            QC.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), ZC.dispatchEvent(QC)
          }(zC || "", oC), new Dw(null);
          const NC = window.open(zC || "", oC, WC);
          vC(NC, CC, "popup-blocked");
          try {
            NC.focus()
          } catch (MC) {}
          return new Dw(NC)
        }
        const yw = "__/auth/handler",
          Lw = "emulator/auth/handler",
          Uw = encodeURIComponent("fac");
        async function Bw(CC, zC, ZC, bC, nC, fC) {
            vC(CC.config.authDomain, CC, "auth-domain-config-required"), vC(CC.config.apiKey, CC, "invalid-api-key");
            const oC = {
              apiKey: CC.config.apiKey,
              appName: CC.name,
              authType: ZC,
              redirectUrl: bC,
              v: wC.i,
              eventId: nC
            };
            if (zC instanceof CZ) {
              zC.setDefaultLanguage(CC.languageCode), oC.providerId = zC.providerId || "", (0, QC.U)(zC.getCustomParameters()) || (oC.customParameters = JSON.stringify(zC.getCustomParameters()));
              for (const [CC, zC] of Object.entries(fC || {})) oC[CC] = zC
            }
            if (zC instanceof zZ) {
              const CC = zC.getScopes().filter((CC => "" !== CC));
              CC.length > 0 && (oC.scopes = CC.join(","))
            }
            CC.tenantId && (oC.tid = CC.tenantId);
            const qC = oC;
            for (const QC of Object.keys(qC)) void 0 === qC[QC] && delete qC[QC];
            const FC = await CC._getAppCheckToken(),
              WC = FC ? `#${Uw}=${encodeURIComponent(FC)}` : "";
            return `${function(CC){let{config:zC}=CC;if(!zC.emulator)return`
            https: //${zC.authDomain}/${yw}`;return HC(zC,Lw)}(CC)}?${(0,QC.jb)(qC).slice(1)}${WC}`}const Ow="webStorageSupport";const kw=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xQ,this._completeRedirectFn=iw,this._overrideRedirectResult=Pw}async _openPopup(CC,zC,ZC,QC){var wC;hC(null===(wC=this.eventManagers[CC._key()])||void 0===wC?void 0:wC.manager,"_initialize() not called before _openPopup()");return jw(CC,await Bw(CC,zC,ZC,KC(),QC),IQ())}async _openRedirect(CC,zC,ZC,QC){await this._originValidation(CC);return function(CC){vQ().location.href=CC}(await Bw(CC,zC,ZC,KC(),QC)),new Promise((()=>{}))}_initialize(CC){const zC=CC._key();if(this.eventManagers[zC]){const{manager:CC,promise:ZC}=this.eventManagers[zC];return CC?Promise.resolve(CC):(hC(ZC,"If manager is not set, promise should be"),ZC)}const ZC=this.initAndGetManager(CC);return this.eventManagers[zC]={promise:ZC},ZC.catch((()=>{delete this.eventManagers[zC]})),ZC}async initAndGetManager(CC){const zC=await async function(CC){const zC=await uw(CC),ZC=vQ().gapi;return vC(ZC,CC,"internal-error"),zC.open({where:document.body,url:aw(CC),messageHandlersFilter:ZC.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sw,dontclear:!0},(zC=>new Promise((async(ZC,QC)=>{await zC.restyle({setHideOnLeave:!1});const wC=xC(CC,"network-request-failed"),bC=vQ().setTimeout((()=>{QC(wC)}),rw.get());function nC(){vQ().clearTimeout(bC),ZC(zC)}zC.ping(nC).then(nC,(()=>{QC(wC)}))}))))}(CC),ZC=new ew(CC);return zC.register("authEvent",(zC=>{vC(null===zC||void 0===zC?void 0:zC.authEvent,CC,"invalid-auth-event");return{status:ZC.onEvent(zC.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[CC._key()]={manager:ZC},this.iframes[CC._key()]=zC,ZC}_isIframeWebStorageSupported(CC,zC){this.iframes[CC._key()].send(Ow,{type:Ow},(ZC=>{var QC;const wC=null===(QC=null===ZC||void 0===ZC?void 0:ZC[0])||void 0===QC?void 0:QC[Ow];void 0!==wC&&zC(!!wC),AC(CC,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(CC){const zC=CC._key();return this.originValidationPromises[zC]||(this.originValidationPromises[zC]=mw(CC)),this.originValidationPromises[zC]}get _shouldInitProactively(){return Rz()||Nz()||Gz()}};class Vw{constructor(CC){this.factorId=CC}_process(CC,zC,ZC){switch(zC.type){case"enroll":return this._finalizeEnroll(CC,zC.credential,ZC);case"signin":return this._finalizeSignIn(CC,zC.credential);default:return eC("unexpected MultiFactorSessionType")}}}class Cb extends Vw{constructor(CC){super("phone"),this.credential=CC}static _fromCredential(CC){return new Cb(CC)}_finalizeEnroll(CC,zC,ZC){return function(CC,zC){return uC(CC,"POST","/v2/accounts/mfaEnrollment:finalize",cC(CC,zC))}(CC,{idToken:zC,displayName:ZC,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(CC,zC){return function(CC,zC){return uC(CC,"POST","/v2/accounts/mfaSignIn:finalize",cC(CC,zC))}(CC,{mfaPendingCredential:zC,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class zb{constructor(){}static assertion(CC){return Cb._fromCredential(CC)}}zb.FACTOR_ID="phone";class Zb{static assertionForEnrollment(CC,zC){return Qb._fromSecret(CC,zC)}static assertionForSignIn(CC,zC){return Qb._fromEnrollmentId(CC,zC)}static async generateSecret(CC){const zC=CC;vC("undefined"!==typeof zC.auth,"internal-error");const ZC=await(QC=zC.auth,wC={idToken:zC.credential,totpEnrollmentInfo:{}},uC(QC,"POST","/v2/accounts/mfaEnrollment:start",cC(QC,wC)));var QC,wC;return wb._fromStartTotpMfaEnrollmentResponse(ZC,zC.auth)}}Zb.FACTOR_ID="totp";class Qb extends Vw{constructor(CC,zC,ZC){super("totp"),this.otp=CC,this.enrollmentId=zC,this.secret=ZC}static _fromSecret(CC,zC){return new Qb(zC,void 0,CC)}static _fromEnrollmentId(CC,zC){return new Qb(zC,CC)}async _finalizeEnroll(CC,zC,ZC){return vC("undefined"!==typeof this.secret,CC,"argument-error"),function(CC,zC){return uC(CC,"POST","/v2/accounts/mfaEnrollment:finalize",cC(CC,zC))}(CC,{idToken:zC,displayName:ZC,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(CC,zC){vC(void 0!==this.enrollmentId&&void 0!==this.otp,CC,"argument-error");const ZC={verificationCode:this.otp};return function(CC,zC){return uC(CC,"POST","/v2/accounts/mfaSignIn:finalize",cC(CC,zC))}(CC,{mfaPendingCredential:zC,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:ZC})}}class wb{constructor(CC,zC,ZC,QC,wC,bC,nC){this.sessionInfo=bC,this.auth=nC,this.secretKey=CC,this.hashingAlgorithm=zC,this.codeLength=ZC,this.codeIntervalSeconds=QC,this.enrollmentCompletionDeadline=wC}static _fromStartTotpMfaEnrollmentResponse(CC,zC){return new wb(CC.totpSessionInfo.sharedSecretKey,CC.totpSessionInfo.hashingAlgorithm,CC.totpSessionInfo.verificationCodeLength,CC.totpSessionInfo.periodSec,new Date(CC.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),CC.totpSessionInfo.sessionInfo,zC)}_makeTotpVerificationInfo(CC){return{sessionInfo:this.sessionInfo,verificationCode:CC}}generateQrCodeUrl(CC,zC){var ZC;let QC=!1;return(bb(CC)||bb(zC))&&(QC=!0),QC&&(bb(CC)&&(CC=(null===(ZC=this.auth.currentUser)||void 0===ZC?void 0:ZC.email)||"unknownuser"),bb(zC)&&(zC=this.auth.name)),`otpauth://totp/${zC}:${CC}?secret=${this.secretKey}&issuer=${zC}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function bb(CC){return"undefined"===typeof CC||0===(null===CC||void 0===CC?void 0:CC.length)}var nb="@firebase/auth",fb="0.23.2";class ob{constructor(CC){this.auth=CC,this.internalListeners=new Map}getUid(){var CC;return this.assertAuthConfigured(),(null===(CC=this.auth.currentUser)||void 0===CC?void 0:CC.uid)||null}async getToken(CC){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(CC)}}addAuthTokenListener(CC){if(this.assertAuthConfigured(),this.internalListeners.has(CC))return;const zC=this.auth.onIdTokenChanged((zC=>{CC((null===zC||void 0===zC?void 0:zC.stsTokenManager.accessToken)||null)}));this.internalListeners.set(CC,zC),this.updateProactiveRefresh()}removeAuthTokenListener(CC){this.assertAuthConfigured();const zC=this.internalListeners.get(CC);zC&&(this.internalListeners.delete(CC),zC(),this.updateProactiveRefresh())}assertAuthConfigured(){vC(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const qb=(0,QC.I)("authIdTokenMaxAge")||300;let Fb=null;const Wb=CC=>async zC=>{const ZC=zC&&await zC.getIdTokenResult(),QC=ZC&&((new Date).getTime()-Date.parse(ZC.issuedAtTime))/1e3;if(QC&&QC>qb)return;const wC=null===ZC||void 0===ZC?void 0:ZC.token;Fb!==wC&&(Fb=wC,await fetch(CC,{method:wC?"POST":"DELETE",headers:wC?{Authorization:`Bearer ${wC}`}:{}}))};function Nb(){let CC=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,wC.S)();const zC=(0,wC.D)(CC,"auth");if(zC.isInitialized())return zC.getImmediate();const ZC=Ez(CC,{popupRedirectResolver:kw,persistence:[cQ,RQ,xQ]}),bC=(0,QC.I)("authTokenSyncURL");if(bC){const CC=Wb(bC);wQ(ZC,CC,(()=>CC(ZC.currentUser))),QQ(ZC,(zC=>CC(zC)))}const nC=(0,QC.H)("auth");return nC&&lz(ZC,`http://${nC}`),ZC}var Mb;Mb="Browser",(0,wC.H)(new fC.f("auth",((CC,zC)=>{let{options:ZC}=zC;const QC=CC.getProvider("app").getImmediate(),wC=CC.getProvider("heartbeat"),bC=CC.getProvider("app-check-internal"),{apiKey:nC,authDomain:fC}=QC.options;vC(nC&&!nC.includes(":"),"invalid-api-key",{appName:QC.name});const oC={apiKey:nC,authDomain:fC,clientPlatform:Mb,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Az(Mb)},qC=new dz(QC,wC,bC,oC);return function(CC,zC){const ZC=(null===zC||void 0===zC?void 0:zC.persistence)||[],QC=(Array.isArray(ZC)?ZC:[ZC]).map(bz);(null===zC||void 0===zC?void 0:zC.errorMap)&&CC._updateErrorMap(zC.errorMap),CC._initializeWithPersistence(QC,null===zC||void 0===zC?void 0:zC.popupRedirectResolver)}(qC,ZC),qC}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((CC,zC,ZC)=>{CC.getProvider("auth-internal").initialize()}))),(0,wC.H)(new fC.f("auth-internal",(CC=>(CC=>new ob(CC))(mz(CC.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,wC.$)(nb,fb,function(CC){switch(CC){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Mb)),(0,wC.$)(nb,fb,"esm2017")}};Object.freeze(modules);for(const CC in modules)Object.freeze(modules[CC]);