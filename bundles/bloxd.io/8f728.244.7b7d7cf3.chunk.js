/*! For license information please see 8f728.244.7b7d7cf3.chunk.js.LICENSE.txt */
export const id = 244;
export const ids = [244];
export const modules = {
    38534: (cB, Bc, nc) => {
        nc.r(Bc), nc.d(Bc, {
          ActionCodeOperation: () => Tc,
          ActionCodeURL: () => AB,
          AuthCredential: () => WB,
          AuthErrorCodes: () => Sc,
          EmailAuthCredential: () => jn,
          EmailAuthProvider: () => cV,
          FacebookAuthProvider: () => In,
          FactorId: () => Mc,
          GithubAuthProvider: () => un,
          GoogleAuthProvider: () => rV,
          OAuthCredential: () => KB,
          OAuthProvider: () => Vn,
          OperationType: () => Oc,
          PhoneAuthCredential: () => dB,
          PhoneAuthProvider: () => nI,
          PhoneMultiFactorGenerator: () => Br,
          ProviderId: () => Pc,
          RecaptchaVerifier: () => KV,
          SAMLAuthProvider: () => Mn,
          SignInMethod: () => qB,
          TotpMultiFactorGenerator: () => nr,
          TotpSecret: () => Ir,
          TwitterAuthProvider: () => Pn,
          applyActionCode: () => vV,
          beforeAuthStateChanged: () => rI,
          browserLocalPersistence: () => pV,
          browserPopupRedirectResolver: () => AI,
          browserSessionPersistence: () => aI,
          checkActionCode: () => Dn,
          confirmPasswordReset: () => Cn,
          connectAuthEmulator: () => NB,
          createUserWithEmailAndPassword: () => En,
          debugErrorMap: () => mB,
          deleteUser: () => qI,
          fetchSignInMethodsForEmail: () => Xn,
          getAdditionalUserInfo: () => BV,
          getAuth: () => Tr,
          getIdToken: () => jB,
          getIdTokenResult: () => Rc,
          getMultiFactorResolver: () => fV,
          getRedirectResult: () => YI,
          inMemoryPersistence: () => sB,
          indexedDBLocalPersistence: () => WV,
          initializeAuth: () => DB,
          initializeRecaptchaConfig: () => VV,
          isSignInWithEmailLink: () => wn,
          linkWithCredential: () => lnc,
          linkWithPhoneNumber: () => AV,
          linkWithPopup: () => TI,
          linkWithRedirect: () => lI,
          multiFactor: () => tI,
          onAuthStateChanged: () => uV,
          onIdTokenChanged: () => IV,
          parseActionCodeURL: () => GB,
          prodErrorMap: () => ec,
          reauthenticateWithCredential: () => Yn,
          reauthenticateWithPhoneNumber: () => GV,
          reauthenticateWithPopup: () => OI,
          reauthenticateWithRedirect: () => ar,
          reload: () => cn,
          sendEmailVerification: () => Hn,
          sendPasswordResetEmail: () => Qn,
          sendSignInLinkToEmail: () => Wn,
          setPersistence: () => nV,
          signInAnonymously: () => fn,
          signInWithCredential: () => aV,
          signInWithCustomToken: () => Ln,
          signInWithEmailAndPassword: () => onc,
          signInWithEmailLink: () => kV,
          signInWithPhoneNumber: () => dV,
          signInWithPopup: () => qr,
          signInWithRedirect: () => hI,
          signOut: () => PV,
          unlink: () => Sn,
          updateCurrentUser: () => MV,
          updateEmail: () => jV,
          updatePassword: () => Rn,
          updatePhoneNumber: () => BI,
          updateProfile: () => Jn,
          useDeviceLanguage: () => sV,
          verifyBeforeUpdateEmail: () => Fn,
          verifyPasswordResetCode: () => Nn
        });
        var Vc = nc(38521),
          Ic = nc(38508);

        function rB(cB, Bc) {
          var nc = {};
          for (var Vc in cB) Object.prototype.hasOwnProperty.call(cB, Vc) && Bc.indexOf(Vc) < 0 && (nc[Vc] = cB[Vc]);
          if (null != cB && "function" === typeof Object.getOwnPropertySymbols) {
            var Ic = 0;
            for (Vc = Object.getOwnPropertySymbols(cB); Ic < Vc.length; Ic++) Bc.indexOf(Vc[Ic]) < 0 && Object.prototype.propertyIsEnumerable.call(cB, Vc[Ic]) && (nc[Vc[Ic]] = cB[Vc[Ic]])
          }
          return nc
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var uc = nc(38525),
          sc = nc(38513);
        const Mc = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Pc = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          qB = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Oc = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Tc = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function fc() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const mB = function() {
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
          ec = fc,
          tB = new Vc.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Sc = {
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
          yB = new uc.f("@firebase/auth");

        function zB(cB) {
          if (yB.logLevel <= uc.e.ERROR) {
            for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
            yB.error(`Auth (${Ic.d}): ${cB}`, ...nc)
          }
        }

        function pc(cB) {
          for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
          throw Yc(cB, ...nc)
        }

        function hc(cB) {
          for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
          return Yc(cB, ...nc)
        }

        function aB(cB, Bc, nc) {
          const Ic = Object.assign(Object.assign({}, ec()), {
            [Bc]: nc
          });
          return new Vc.g("auth", "Firebase", Ic).create(Bc, {
            appName: cB.name
          })
        }

        function lc(cB, Bc, nc) {
          if (!(Bc instanceof nc)) throw nc.name !== Bc.constructor.name && pc(cB, "argument-error"), aB(cB, "argument-error", `Type of ${Bc.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function Yc(cB) {
          for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
          if ("string" !== typeof cB) {
            const Bc = nc[0],
              Vc = [...nc.slice(1)];
            return Vc[0] && (Vc[0].appName = cB.name), cB._errorFactory.create(Bc, ...Vc)
          }
          return tB.create(cB, ...nc)
        }

        function Lc(cB, Bc) {
          if (!cB) {
            for (var nc = arguments.length, Vc = new Array(nc > 2 ? nc - 2 : 0), Ic = 2; Ic < nc; Ic++) Vc[Ic - 2] = arguments[Ic];
            throw Yc(Bc, ...Vc)
          }
        }

        function gB(cB) {
          const Bc = "INTERNAL ASSERTION FAILED: " + cB;
          throw zB(Bc), new Error(Bc)
        }

        function Uc(cB, Bc) {
          cB || gB(Bc)
        }

        function bB() {
          var cB;
          return "undefined" !== typeof self && (null === (cB = self.location) || void 0 === cB ? void 0 : cB.href) || ""
        }

        function Zc() {
          return "http:" === Qc() || "https:" === Qc()
        }

        function Qc() {
          var cB;
          return "undefined" !== typeof self && (null === (cB = self.location) || void 0 === cB ? void 0 : cB.protocol) || null
        }
        class Cc {
          constructor(cB, Bc) {
            this.shortDelay = cB, this.longDelay = Bc, Uc(Bc > cB, "Short delay should be less than long delay!"), this.isMobile = (0, Vc.Z)() || (0, Vc.ab)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Zc() || (0, Vc.R)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function vB(cB, Bc) {
          Uc(cB.emulator, "Emulator should always be set here");
          const {
            url: nc
          } = cB.emulator;
          return Bc ? `${nc}${Bc.startsWith("/")?Bc.slice(1):Bc}` : nc
        }
        class Dc {
          static initialize(cB, Bc, nc) {
            this.fetchImpl = cB, Bc && (this.headersImpl = Bc), nc && (this.responseImpl = nc)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void gB("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void gB("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void gB("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Nc = {
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
          Ec = new Cc(3e4, 6e4);

        function oc(cB, Bc) {
          return cB.tenantId && !Bc.tenantId ? Object.assign(Object.assign({}, Bc), {
            tenantId: cB.tenantId
          }) : Bc
        }
        async function Wc(cB, Bc, nc, Ic) {
          return wc(cB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let rB = {},
              uc = {};
            Ic && ("GET" === Bc ? uc = Ic : rB = {
              body: JSON.stringify(Ic)
            });
            const sc = (0, Vc.fb)(Object.assign({
                key: cB.config.apiKey
              }, uc)).slice(1),
              Mc = await cB._getAdditionalHeaders();
            return Mc["Content-Type"] = "application/json", cB.languageCode && (Mc["X-Firebase-Locale"] = cB.languageCode), Dc.fetch()(Xc(cB, cB.config.apiHost, nc, sc), Object.assign({
              method: Bc,
              headers: Mc,
              referrerPolicy: "no-referrer"
            }, rB))
          }))
        }
        async function wc(cB, Bc, nc) {
          cB._canInitEmulator = !1;
          const Ic = Object.assign(Object.assign({}, Nc), Bc);
          try {
            const Bc = new Hc(cB),
              Vc = await Promise.race([nc(), Bc.promise]);
            Bc.clearNetworkTimeout();
            const rB = await Vc.json();
            if ("needConfirmation" in rB) throw Fc(cB, "account-exists-with-different-credential", rB);
            if (Vc.ok && !("errorMessage" in rB)) return rB;
            {
              const Bc = Vc.ok ? rB.errorMessage : rB.error.message,
                [nc, uc] = Bc.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === nc) throw Fc(cB, "credential-already-in-use", rB);
              if ("EMAIL_EXISTS" === nc) throw Fc(cB, "email-already-in-use", rB);
              if ("USER_DISABLED" === nc) throw Fc(cB, "user-disabled", rB);
              const sc = Ic[nc] || nc.toLowerCase().replace(/[_\s]+/g, "-");
              if (uc) throw aB(cB, sc, uc);
              pc(cB, sc)
            }
          } catch (rB) {
            if (rB instanceof Vc.i) throw rB;
            pc(cB, "network-request-failed", {
              message: String(rB)
            })
          }
        }
        async function kB(cB, Bc, nc, Vc) {
          let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const rB = await Wc(cB, Bc, nc, Vc, Ic);
          return "mfaPendingCredential" in rB && pc(cB, "multi-factor-auth-required", {
            _serverResponse: rB
          }), rB
        }

        function Xc(cB, Bc, nc, Vc) {
          const Ic = `${Bc}${nc}?${Vc}`;
          return cB.config.emulator ? vB(cB.config, Ic) : `${cB.config.apiScheme}://${Ic}`
        }
        class Hc {
          constructor(cB) {
            this.auth = cB, this.timer = null, this.promise = new Promise(((cB, Bc) => {
              this.timer = setTimeout((() => Bc(hc(this.auth, "network-request-failed"))), Ec.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Fc(cB, Bc, nc) {
          const Vc = {
            appName: cB.name
          };
          nc.email && (Vc.email = nc.email), nc.phoneNumber && (Vc.phoneNumber = nc.phoneNumber);
          const Ic = hc(cB, Bc, Vc);
          return Ic.customData._tokenResponse = nc, Ic
        }

        function Jc(cB) {
          if (cB) try {
            const Bc = new Date(Number(cB));
            if (!isNaN(Bc.getTime())) return Bc.toUTCString()
          } catch (Bc) {}
        }

        function jB(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Vc.N)(cB).getIdToken(Bc)
        }
        async function Rc(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const nc = (0, Vc.N)(cB),
            Ic = await nc.getIdToken(Bc),
            rB = Kc(Ic);
          Lc(rB && rB.exp && rB.auth_time && rB.iat, nc.auth, "internal-error");
          const uc = "object" === typeof rB.firebase ? rB.firebase : void 0,
            sc = null === uc || void 0 === uc ? void 0 : uc.sign_in_provider;
          return {
            claims: rB,
            token: Ic,
            authTime: Jc(iB(rB.auth_time)),
            issuedAtTime: Jc(iB(rB.iat)),
            expirationTime: Jc(iB(rB.exp)),
            signInProvider: sc || null,
            signInSecondFactor: (null === uc || void 0 === uc ? void 0 : uc.sign_in_second_factor) || null
          }
        }

        function iB(cB) {
          return 1e3 * Number(cB)
        }

        function Kc(cB) {
          const [Bc, nc, Ic] = cB.split(".");
          if (void 0 === Bc || void 0 === nc || void 0 === Ic) return zB("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const cB = (0, Vc.o)(nc);
            return cB ? JSON.parse(cB) : (zB("Failed to decode base64 JWT payload"), null)
          } catch (rB) {
            return zB("Caught error parsing JWT payload as JSON", null === rB || void 0 === rB ? void 0 : rB.toString()), null
          }
        }
        async function xB(cB, Bc) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Bc;
          try {
            return await Bc
          } catch (nc) {
            throw nc instanceof Vc.i && function(cB) {
              let {
                code: Bc
              } = cB;
              return "auth/user-disabled" === Bc || "auth/user-token-expired" === Bc
            }(nc) && cB.auth.currentUser === cB && await cB.auth.signOut(), nc
          }
        }
        class dc {
          constructor(cB) {
            this.user = cB, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(cB) {
            var Bc;
            if (cB) {
              const cB = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), cB
            } {
              this.errorBackoff = 3e4;
              const cB = (null !== (Bc = this.user.stsTokenManager.expirationTime) && void 0 !== Bc ? Bc : 0) - Date.now() - 3e5;
              return Math.max(0, cB)
            }
          }
          schedule() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Bc = this.getInterval(cB);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Bc)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (cB) {
              return void("auth/network-request-failed" === (null === cB || void 0 === cB ? void 0 : cB.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Ac {
          constructor(cB, Bc) {
            this.createdAt = cB, this.lastLoginAt = Bc, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Jc(this.lastLoginAt), this.creationTime = Jc(this.createdAt)
          }
          _copy(cB) {
            this.createdAt = cB.createdAt, this.lastLoginAt = cB.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function Gc(cB) {
          var Bc;
          const nc = cB.auth,
            Vc = await cB.getIdToken(),
            Ic = await xB(cB, async function(cB, Bc) {
              return Wc(cB, "POST", "/v1/accounts:lookup", Bc)
            }(nc, {
              idToken: Vc
            }));
          Lc(null === Ic || void 0 === Ic ? void 0 : Ic.users.length, nc, "internal-error");
          const uc = Ic.users[0];
          cB._notifyReloadListener(uc);
          const sc = (null === (Bc = uc.providerUserInfo) || void 0 === Bc ? void 0 : Bc.length) ? uc.providerUserInfo.map((cB => {
            var {
              providerId: Bc
            } = cB, nc = rB(cB, ["providerId"]);
            return {
              providerId: Bc,
              uid: nc.rawId || "",
              displayName: nc.displayName || null,
              email: nc.email || null,
              phoneNumber: nc.phoneNumber || null,
              photoURL: nc.photoUrl || null
            }
          })) : [];
          const Mc = (Pc = cB.providerData, qB = sc, [...Pc.filter((cB => !qB.some((Bc => Bc.providerId === cB.providerId)))), ...qB]);
          var Pc, qB;
          const Oc = cB.isAnonymous,
            Tc = !(cB.email && uc.passwordHash) && !(null === Mc || void 0 === Mc ? void 0 : Mc.length),
            fc = !!Oc && Tc,
            mB = {
              uid: uc.localId,
              displayName: uc.displayName || null,
              photoURL: uc.photoUrl || null,
              email: uc.email || null,
              emailVerified: uc.emailVerified || !1,
              phoneNumber: uc.phoneNumber || null,
              tenantId: uc.tenantId || null,
              providerData: Mc,
              metadata: new Ac(uc.createdAt, uc.lastLoginAt),
              isAnonymous: fc
            };
          Object.assign(cB, mB)
        }
        async function cn(cB) {
          const Bc = (0, Vc.N)(cB);
          await Gc(Bc), await Bc.auth._persistUserIfCurrent(Bc), Bc.auth._notifyListenersIfCurrent(Bc)
        }
        class BB {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(cB) {
            Lc(cB.idToken, "internal-error"), Lc("undefined" !== typeof cB.idToken, "internal-error"), Lc("undefined" !== typeof cB.refreshToken, "internal-error");
            const Bc = "expiresIn" in cB && "undefined" !== typeof cB.expiresIn ? Number(cB.expiresIn) : function(cB) {
              const Bc = Kc(cB);
              return Lc(Bc, "internal-error"), Lc("undefined" !== typeof Bc.exp, "internal-error"), Lc("undefined" !== typeof Bc.iat, "internal-error"), Number(Bc.exp) - Number(Bc.iat)
            }(cB.idToken);
            this.updateTokensAndExpiration(cB.idToken, cB.refreshToken, Bc)
          }
          async getToken(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Lc(!this.accessToken || this.refreshToken, cB, "user-token-expired"), Bc || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(cB, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(cB, Bc) {
            const {
              accessToken: nc,
              refreshToken: Ic,
              expiresIn: rB
            } = await async function(cB, Bc) {
              const nc = await wc(cB, {}, (async () => {
                const nc = (0, Vc.fb)({
                    grant_type: "refresh_token",
                    refresh_token: Bc
                  }).slice(1),
                  {
                    tokenApiHost: Ic,
                    apiKey: rB
                  } = cB.config,
                  uc = Xc(cB, Ic, "/v1/token", `key=${rB}`),
                  sc = await cB._getAdditionalHeaders();
                return sc["Content-Type"] = "application/x-www-form-urlencoded", Dc.fetch()(uc, {
                  method: "POST",
                  headers: sc,
                  body: nc
                })
              }));
              return {
                accessToken: nc.access_token,
                expiresIn: nc.expires_in,
                refreshToken: nc.refresh_token
              }
            }(cB, Bc);
            this.updateTokensAndExpiration(nc, Ic, Number(rB))
          }
          updateTokensAndExpiration(cB, Bc, nc) {
            this.refreshToken = Bc || null, this.accessToken = cB || null, this.expirationTime = Date.now() + 1e3 * nc
          }
          static fromJSON(cB, Bc) {
            const {
              refreshToken: nc,
              accessToken: Vc,
              expirationTime: Ic
            } = Bc, rB = new BB;
            return nc && (Lc("string" === typeof nc, "internal-error", {
              appName: cB
            }), rB.refreshToken = nc), Vc && (Lc("string" === typeof Vc, "internal-error", {
              appName: cB
            }), rB.accessToken = Vc), Ic && (Lc("number" === typeof Ic, "internal-error", {
              appName: cB
            }), rB.expirationTime = Ic), rB
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(cB) {
            this.accessToken = cB.accessToken, this.refreshToken = cB.refreshToken, this.expirationTime = cB.expirationTime
          }
          _clone() {
            return Object.assign(new BB, this.toJSON())
          }
          _performRefresh() {
            return gB("not implemented")
          }
        }

        function nB(cB, Bc) {
          Lc("string" === typeof cB || "undefined" === typeof cB, "internal-error", {
            appName: Bc
          })
        }
        class VB {
          constructor(cB) {
            var {
              uid: Bc,
              auth: nc,
              stsTokenManager: Vc
            } = cB, Ic = rB(cB, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new dc(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Bc, this.auth = nc, this.stsTokenManager = Vc, this.accessToken = Vc.accessToken, this.displayName = Ic.displayName || null, this.email = Ic.email || null, this.emailVerified = Ic.emailVerified || !1, this.phoneNumber = Ic.phoneNumber || null, this.photoURL = Ic.photoURL || null, this.isAnonymous = Ic.isAnonymous || !1, this.tenantId = Ic.tenantId || null, this.providerData = Ic.providerData ? [...Ic.providerData] : [], this.metadata = new Ac(Ic.createdAt || void 0, Ic.lastLoginAt || void 0)
          }
          async getIdToken(cB) {
            const Bc = await xB(this, this.stsTokenManager.getToken(this.auth, cB));
            return Lc(Bc, this.auth, "internal-error"), this.accessToken !== Bc && (this.accessToken = Bc, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Bc
          }
          getIdTokenResult(cB) {
            return Rc(this, cB)
          }
          reload() {
            return cn(this)
          }
          _assign(cB) {
            this !== cB && (Lc(this.uid === cB.uid, this.auth, "internal-error"), this.displayName = cB.displayName, this.photoURL = cB.photoURL, this.email = cB.email, this.emailVerified = cB.emailVerified, this.phoneNumber = cB.phoneNumber, this.isAnonymous = cB.isAnonymous, this.tenantId = cB.tenantId, this.providerData = cB.providerData.map((cB => Object.assign({}, cB))), this.metadata._copy(cB.metadata), this.stsTokenManager._assign(cB.stsTokenManager))
          }
          _clone(cB) {
            const Bc = new VB(Object.assign(Object.assign({}, this), {
              auth: cB,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Bc.metadata._copy(this.metadata), Bc
          }
          _onReload(cB) {
            Lc(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = cB, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(cB) {
            this.reloadListener ? this.reloadListener(cB) : this.reloadUserInfo = cB
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              nc = !1;
            cB.idToken && cB.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(cB), nc = !0), Bc && await Gc(this), await this.auth._persistUserIfCurrent(this), nc && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const cB = await this.getIdToken();
            return await xB(this, async function(cB, Bc) {
              return Wc(cB, "POST", "/v1/accounts:delete", Bc)
            }(this.auth, {
              idToken: cB
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
              providerData: this.providerData.map((cB => Object.assign({}, cB))),
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
          static _fromJSON(cB, Bc) {
            var nc, Vc, Ic, rB, uc, sc, Mc, Pc;
            const qB = null !== (nc = Bc.displayName) && void 0 !== nc ? nc : void 0,
              Oc = null !== (Vc = Bc.email) && void 0 !== Vc ? Vc : void 0,
              Tc = null !== (Ic = Bc.phoneNumber) && void 0 !== Ic ? Ic : void 0,
              fc = null !== (rB = Bc.photoURL) && void 0 !== rB ? rB : void 0,
              mB = null !== (uc = Bc.tenantId) && void 0 !== uc ? uc : void 0,
              ec = null !== (sc = Bc._redirectEventId) && void 0 !== sc ? sc : void 0,
              tB = null !== (Mc = Bc.createdAt) && void 0 !== Mc ? Mc : void 0,
              Sc = null !== (Pc = Bc.lastLoginAt) && void 0 !== Pc ? Pc : void 0,
              {
                uid: yB,
                emailVerified: zB,
                isAnonymous: pc,
                providerData: hc,
                stsTokenManager: aB
              } = Bc;
            Lc(yB && aB, cB, "internal-error");
            const lc = BB.fromJSON(this.name, aB);
            Lc("string" === typeof yB, cB, "internal-error"), nB(qB, cB.name), nB(Oc, cB.name), Lc("boolean" === typeof zB, cB, "internal-error"), Lc("boolean" === typeof pc, cB, "internal-error"), nB(Tc, cB.name), nB(fc, cB.name), nB(mB, cB.name), nB(ec, cB.name), nB(tB, cB.name), nB(Sc, cB.name);
            const Yc = new VB({
              uid: yB,
              auth: cB,
              email: Oc,
              emailVerified: zB,
              displayName: qB,
              isAnonymous: pc,
              photoURL: fc,
              phoneNumber: Tc,
              tenantId: mB,
              stsTokenManager: lc,
              createdAt: tB,
              lastLoginAt: Sc
            });
            return hc && Array.isArray(hc) && (Yc.providerData = hc.map((cB => Object.assign({}, cB)))), ec && (Yc._redirectEventId = ec), Yc
          }
          static async _fromIdTokenResponse(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Vc = new BB;
            Vc.updateFromServerResponse(Bc);
            const Ic = new VB({
              uid: Bc.localId,
              auth: cB,
              stsTokenManager: Vc,
              isAnonymous: nc
            });
            return await Gc(Ic), Ic
          }
        }
        const IB = new Map;

        function rn(cB) {
          Uc(cB instanceof Function, "Expected a class definition");
          let Bc = IB.get(cB);
          return Bc ? (Uc(Bc instanceof cB, "Instance stored in cache mismatched with class"), Bc) : (Bc = new cB, IB.set(cB, Bc), Bc)
        }
        class uB {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(cB, Bc) {
            this.storage[cB] = Bc
          }
          async _get(cB) {
            const Bc = this.storage[cB];
            return void 0 === Bc ? null : Bc
          }
          async _remove(cB) {
            delete this.storage[cB]
          }
          _addListener(cB, Bc) {}
          _removeListener(cB, Bc) {}
        }
        uB.type = "NONE";
        const sB = uB;

        function MB(cB, Bc, nc) {
          return `firebase:${cB}:${Bc}:${nc}`
        }
        class PB {
          constructor(cB, Bc, nc) {
            this.persistence = cB, this.auth = Bc, this.userKey = nc;
            const {
              config: Vc,
              name: Ic
            } = this.auth;
            this.fullUserKey = MB(this.userKey, Vc.apiKey, Ic), this.fullPersistenceKey = MB("persistence", Vc.apiKey, Ic), this.boundEventHandler = Bc._onStorageEvent.bind(Bc), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(cB) {
            return this.persistence._set(this.fullUserKey, cB.toJSON())
          }
          async getCurrentUser() {
            const cB = await this.persistence._get(this.fullUserKey);
            return cB ? VB._fromJSON(this.auth, cB) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(cB) {
            if (this.persistence === cB) return;
            const Bc = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = cB, Bc ? this.setCurrentUser(Bc) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Bc.length) return new PB(rn(sB), cB, nc);
            const Vc = (await Promise.all(Bc.map((async cB => {
              if (await cB._isAvailable()) return cB
            })))).filter((cB => cB));
            let Ic = Vc[0] || rn(sB);
            const rB = MB(nc, cB.config.apiKey, cB.name);
            let uc = null;
            for (const Pc of Bc) try {
              const Bc = await Pc._get(rB);
              if (Bc) {
                const nc = VB._fromJSON(cB, Bc);
                Pc !== Ic && (uc = nc), Ic = Pc;
                break
              }
            } catch (Mc) {}
            const sc = Vc.filter((cB => cB._shouldAllowMigration));
            return Ic._shouldAllowMigration && sc.length ? (Ic = sc[0], uc && await Ic._set(rB, uc.toJSON()), await Promise.all(Bc.map((async cB => {
              if (cB !== Ic) try {
                await cB._remove(rB)
              } catch (Mc) {}
            }))), new PB(Ic, cB, nc)) : new PB(Ic, cB, nc)
          }
        }

        function qn(cB) {
          const Bc = cB.toLowerCase();
          if (Bc.includes("opera/") || Bc.includes("opr/") || Bc.includes("opios/")) return "Opera";
          if (mn(Bc)) return "IEMobile";
          if (Bc.includes("msie") || Bc.includes("trident/")) return "IE";
          if (Bc.includes("edge/")) return "Edge";
          if (OB(Bc)) return "Firefox";
          if (Bc.includes("silk/")) return "Silk";
          if (tn(Bc)) return "Blackberry";
          if (SB(Bc)) return "Webos";
          if (TB(Bc)) return "Safari";
          if ((Bc.includes("chrome/") || fB(Bc)) && !Bc.includes("edge/")) return "Chrome";
          if (eB(Bc)) return "Android";
          {
            const Bc = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              nc = cB.match(Bc);
            if (2 === (null === nc || void 0 === nc ? void 0 : nc.length)) return nc[1]
          }
          return "Other"
        }

        function OB() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)();
          return /firefox\//i.test(cB)
        }

        function TB() {
          const cB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)()).toLowerCase();
          return cB.includes("safari/") && !cB.includes("chrome/") && !cB.includes("crios/") && !cB.includes("android")
        }

        function fB() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)();
          return /crios\//i.test(cB)
        }

        function mn() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)();
          return /iemobile/i.test(cB)
        }

        function eB() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)();
          return /android/i.test(cB)
        }

        function tn() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)();
          return /blackberry/i.test(cB)
        }

        function SB() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)();
          return /webos/i.test(cB)
        }

        function yn() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)();
          return /iphone|ipad|ipod/i.test(cB) || /macintosh/i.test(cB) && /mobile/i.test(cB)
        }

        function zn() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)();
          return yn(cB) || eB(cB) || SB(cB) || tn(cB) || /windows phone/i.test(cB) || mn(cB)
        }

        function pB(cB) {
          let Bc, nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (cB) {
            case "Browser":
              Bc = qn((0, Vc.P)());
              break;
            case "Worker":
              Bc = `${qn((0,Vc.P)())}-${cB}`;
              break;
            default:
              Bc = cB
          }
          const rB = nc.length ? nc.join(",") : "FirebaseCore-web";
          return `${Bc}/JsCore/${Ic.d}/${rB}`
        }
        async function hB(cB, Bc) {
          return Wc(cB, "GET", "/v2/recaptchaConfig", oc(cB, Bc))
        }

        function an(cB) {
          return void 0 !== cB && void 0 !== cB.getResponse
        }

        function lB(cB) {
          return void 0 !== cB && void 0 !== cB.enterprise
        }
        class YB {
          constructor(cB) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === cB.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = cB.recaptchaKey.split("/")[3], this.emailPasswordEnabled = cB.recaptchaEnforcementState.some((cB => "EMAIL_PASSWORD_PROVIDER" === cB.provider && "OFF" !== cB.enforcementState))
          }
        }

        function LB(cB) {
          return new Promise(((Bc, nc) => {
            const Vc = document.createElement("script");
            Vc.setAttribute("src", cB), Vc.onload = Bc, Vc.onerror = cB => {
                const Bc = hc("internal-error");
                Bc.customData = cB, nc(Bc)
              }, Vc.type = "text/javascript", Vc.charset = "UTF-8",
              function() {
                var cB, Bc;
                return null !== (Bc = null === (cB = document.getElementsByTagName("head")) || void 0 === cB ? void 0 : cB[0]) && void 0 !== Bc ? Bc : document
              }().appendChild(Vc)
          }))
        }

        function gn(cB) {
          return `__${cB}${Math.floor(1e6*Math.random())}`
        }
        class UB {
          constructor(cB) {
            this.type = "recaptcha-enterprise", this.auth = CB(cB)
          }
          async verify() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function nc(Bc, nc, Vc) {
              const Ic = window.grecaptcha;
              lB(Ic) ? Ic.enterprise.ready((() => {
                Ic.enterprise.execute(Bc, {
                  action: cB
                }).then((cB => {
                  nc(cB)
                })).catch((() => {
                  nc("NO_RECAPTCHA")
                }))
              })) : Vc(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((cB, Vc) => {
              (async function(cB) {
                if (!Bc) {
                  if (null == cB.tenantId && null != cB._agentRecaptchaConfig) return cB._agentRecaptchaConfig.siteKey;
                  if (null != cB.tenantId && void 0 !== cB._tenantRecaptchaConfigs[cB.tenantId]) return cB._tenantRecaptchaConfigs[cB.tenantId].siteKey
                }
                return new Promise((async (Bc, nc) => {
                  hB(cB, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Vc => {
                    if (void 0 !== Vc.recaptchaKey) {
                      const nc = new YB(Vc);
                      return null == cB.tenantId ? cB._agentRecaptchaConfig = nc : cB._tenantRecaptchaConfigs[cB.tenantId] = nc, Bc(nc.siteKey)
                    }
                    nc(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((cB => {
                    nc(cB)
                  }))
                }))
              })(this.auth).then((Ic => {
                if (!Bc && lB(window.grecaptcha)) nc(Ic, cB, Vc);
                else {
                  if ("undefined" === typeof window) return void Vc(new Error("RecaptchaVerifier is only supported in browser"));
                  LB("https://www.google.com/recaptcha/enterprise.js?render=" + Ic).then((() => {
                    nc(Ic, cB, Vc)
                  })).catch((cB => {
                    Vc(cB)
                  }))
                }
              })).catch((cB => {
                Vc(cB)
              }))
            }))
          }
        }
        async function bn(cB, Bc, nc) {
          let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Ic = new UB(cB);
          let rB;
          try {
            rB = await Ic.verify(nc)
          } catch (sc) {
            rB = await Ic.verify(nc, !0)
          }
          const uc = Object.assign({}, Bc);
          return Vc ? Object.assign(uc, {
            captchaResp: rB
          }) : Object.assign(uc, {
            captchaResponse: rB
          }), Object.assign(uc, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(uc, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), uc
        }
        class ZB {
          constructor(cB) {
            this.auth = cB, this.queue = []
          }
          pushCallback(cB, Bc) {
            const nc = Bc => new Promise(((nc, Vc) => {
              try {
                nc(cB(Bc))
              } catch (Ic) {
                Vc(Ic)
              }
            }));
            nc.onAbort = Bc, this.queue.push(nc);
            const Vc = this.queue.length - 1;
            return () => {
              this.queue[Vc] = () => Promise.resolve()
            }
          }
          async runMiddleware(cB) {
            if (this.auth.currentUser === cB) return;
            const Bc = [];
            try {
              for (const nc of this.queue) await nc(cB), nc.onAbort && Bc.push(nc.onAbort)
            } catch (nc) {
              Bc.reverse();
              for (const cB of Bc) try {
                cB()
              } catch (Vc) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === nc || void 0 === nc ? void 0 : nc.message
              })
            }
          }
        }
        class QB {
          constructor(cB, Bc, nc, Vc) {
            this.app = cB, this.heartbeatServiceProvider = Bc, this.appCheckServiceProvider = nc, this.config = Vc, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new vn(this), this.idTokenSubscription = new vn(this), this.beforeStateQueue = new ZB(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = tB, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = cB.name, this.clientVersion = Vc.sdkClientVersion
          }
          _initializeWithPersistence(cB, Bc) {
            return Bc && (this._popupRedirectResolver = rn(Bc)), this._initializationPromise = this.queue((async () => {
              var nc, Vc;
              if (!this._deleted && (this.persistenceManager = await PB.create(this, cB), !this._deleted)) {
                if (null === (nc = this._popupRedirectResolver) || void 0 === nc ? void 0 : nc._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Ic) {}
                await this.initializeCurrentUser(Bc), this.lastNotifiedUid = (null === (Vc = this.currentUser) || void 0 === Vc ? void 0 : Vc.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const cB = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || cB ? this.currentUser && cB && this.currentUser.uid === cB.uid ? (this._currentUser._assign(cB), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(cB, !0) : void 0
          }
          async initializeCurrentUser(cB) {
            var Bc;
            const nc = await this.assertedPersistence.getCurrentUser();
            let Vc = nc,
              Ic = !1;
            if (cB && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const nc = null === (Bc = this.redirectUser) || void 0 === Bc ? void 0 : Bc._redirectEventId,
                rB = null === Vc || void 0 === Vc ? void 0 : Vc._redirectEventId,
                uc = await this.tryRedirectSignIn(cB);
              nc && nc !== rB || !(null === uc || void 0 === uc ? void 0 : uc.user) || (Vc = uc.user, Ic = !0)
            }
            if (!Vc) return this.directlySetCurrentUser(null);
            if (!Vc._redirectEventId) {
              if (Ic) try {
                await this.beforeStateQueue.runMiddleware(Vc)
              } catch (rB) {
                Vc = nc, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(rB)))
              }
              return Vc ? this.reloadAndSetCurrentUserOrClear(Vc) : this.directlySetCurrentUser(null)
            }
            return Lc(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Vc._redirectEventId ? this.directlySetCurrentUser(Vc) : this.reloadAndSetCurrentUserOrClear(Vc)
          }
          async tryRedirectSignIn(cB) {
            let Bc = null;
            try {
              Bc = await this._popupRedirectResolver._completeRedirectFn(this, cB, !0)
            } catch (nc) {
              await this._setRedirectUser(null)
            }
            return Bc
          }
          async reloadAndSetCurrentUserOrClear(cB) {
            try {
              await Gc(cB)
            } catch (Bc) {
              if ("auth/network-request-failed" !== (null === Bc || void 0 === Bc ? void 0 : Bc.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(cB)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const cB = navigator;
              return cB.languages && cB.languages[0] || cB.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(cB) {
            const Bc = cB ? (0, Vc.N)(cB) : null;
            return Bc && Lc(Bc.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Bc && Bc._clone(this))
          }
          async _updateCurrentUser(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return cB && Lc(this.tenantId === cB.tenantId, this, "tenant-id-mismatch"), Bc || await this.beforeStateQueue.runMiddleware(cB), this.queue((async () => {
              await this.directlySetCurrentUser(cB), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(cB) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(rn(cB))
            }))
          }
          async initializeRecaptchaConfig() {
            const cB = await hB(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Bc = new YB(cB);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Bc : this._tenantRecaptchaConfigs[this.tenantId] = Bc, Bc.emailPasswordEnabled) {
              new UB(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(cB) {
            this._errorFactory = new Vc.g("auth", "Firebase", cB())
          }
          onAuthStateChanged(cB, Bc, nc) {
            return this.registerStateListener(this.authStateSubscription, cB, Bc, nc)
          }
          beforeAuthStateChanged(cB, Bc) {
            return this.beforeStateQueue.pushCallback(cB, Bc)
          }
          onIdTokenChanged(cB, Bc, nc) {
            return this.registerStateListener(this.idTokenSubscription, cB, Bc, nc)
          }
          toJSON() {
            var cB;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (cB = this._currentUser) || void 0 === cB ? void 0 : cB.toJSON()
            }
          }
          async _setRedirectUser(cB, Bc) {
            const nc = await this.getOrInitRedirectPersistenceManager(Bc);
            return null === cB ? nc.removeCurrentUser() : nc.setCurrentUser(cB)
          }
          async getOrInitRedirectPersistenceManager(cB) {
            if (!this.redirectPersistenceManager) {
              const Bc = cB && rn(cB) || this._popupRedirectResolver;
              Lc(Bc, this, "argument-error"), this.redirectPersistenceManager = await PB.create(this, [rn(Bc._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(cB) {
            var Bc, nc;
            return this._isInitialized && await this.queue((async () => {})), (null === (Bc = this._currentUser) || void 0 === Bc ? void 0 : Bc._redirectEventId) === cB ? this._currentUser : (null === (nc = this.redirectUser) || void 0 === nc ? void 0 : nc._redirectEventId) === cB ? this.redirectUser : null
          }
          async _persistUserIfCurrent(cB) {
            if (cB === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(cB)))
          }
          _notifyListenersIfCurrent(cB) {
            cB === this.currentUser && this.notifyAuthListeners()
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
            var cB, Bc;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const nc = null !== (Bc = null === (cB = this.currentUser) || void 0 === cB ? void 0 : cB.uid) && void 0 !== Bc ? Bc : null;
            this.lastNotifiedUid !== nc && (this.lastNotifiedUid = nc, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(cB, Bc, nc, Vc) {
            if (this._deleted) return () => {};
            const Ic = "function" === typeof Bc ? Bc : Bc.next.bind(Bc),
              rB = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Lc(rB, this, "internal-error"), rB.then((() => Ic(this.currentUser))), "function" === typeof Bc ? cB.addObserver(Bc, nc, Vc) : cB.addObserver(Bc)
          }
          async directlySetCurrentUser(cB) {
            this.currentUser && this.currentUser !== cB && this._currentUser._stopProactiveRefresh(), cB && this.isProactiveRefreshEnabled && cB._startProactiveRefresh(), this.currentUser = cB, cB ? await this.assertedPersistence.setCurrentUser(cB) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(cB) {
            return this.operations = this.operations.then(cB, cB), this.operations
          }
          get assertedPersistence() {
            return Lc(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(cB) {
            cB && !this.frameworks.includes(cB) && (this.frameworks.push(cB), this.frameworks.sort(), this.clientVersion = pB(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var cB;
            const Bc = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Bc["X-Firebase-gmpid"] = this.app.options.appId);
            const nc = await (null === (cB = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === cB ? void 0 : cB.getHeartbeatsHeader());
            nc && (Bc["X-Firebase-Client"] = nc);
            const Vc = await this._getAppCheckToken();
            return Vc && (Bc["X-Firebase-AppCheck"] = Vc), Bc
          }
          async _getAppCheckToken() {
            var cB;
            const Bc = await (null === (cB = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === cB ? void 0 : cB.getToken());
            return (null === Bc || void 0 === Bc ? void 0 : Bc.error) && function(cB) {
              if (yB.logLevel <= uc.e.WARN) {
                for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
                yB.warn(`Auth (${Ic.d}): ${cB}`, ...nc)
              }
            }(`Error while retrieving App Check token: ${Bc.error}`), null === Bc || void 0 === Bc ? void 0 : Bc.token
          }
        }

        function CB(cB) {
          return (0, Vc.N)(cB)
        }
        class vn {
          constructor(cB) {
            this.auth = cB, this.observer = null, this.addObserver = (0, Vc.u)((cB => this.observer = cB))
          }
          get next() {
            return Lc(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function DB(cB, Bc) {
          const nc = (0, Ic.r)(cB, "auth");
          if (nc.isInitialized()) {
            const cB = nc.getImmediate(),
              Ic = nc.getOptions();
            if ((0, Vc.y)(Ic, null !== Bc && void 0 !== Bc ? Bc : {})) return cB;
            pc(cB, "already-initialized")
          }
          return nc.initialize({
            options: Bc
          })
        }

        function NB(cB, Bc, nc) {
          const Vc = CB(cB);
          Lc(Vc._canInitEmulator, Vc, "emulator-config-failed"), Lc(/^https?:\/\//.test(Bc), Vc, "invalid-emulator-scheme");
          const Ic = !!(null === nc || void 0 === nc ? void 0 : nc.disableWarnings),
            rB = EB(Bc),
            {
              host: uc,
              port: sc
            } = function(cB) {
              const Bc = EB(cB),
                nc = /(\/\/)?([^?#/]+)/.exec(cB.substr(Bc.length));
              if (!nc) return {
                host: "",
                port: null
              };
              const Vc = nc[2].split("@").pop() || "",
                Ic = /^(\[[^\]]+\])(:|$)/.exec(Vc);
              if (Ic) {
                const cB = Ic[1];
                return {
                  host: cB,
                  port: oB(Vc.substr(cB.length + 1))
                }
              } {
                const [cB, Bc] = Vc.split(":");
                return {
                  host: cB,
                  port: oB(Bc)
                }
              }
            }(Bc),
            Mc = null === sc ? "" : `:${sc}`;
          Vc.config.emulator = {
            url: `${rB}//${uc}${Mc}/`
          }, Vc.settings.appVerificationDisabledForTesting = !0, Vc.emulatorConfig = Object.freeze({
            host: uc,
            port: sc,
            protocol: rB.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Ic
            })
          }), Ic || function() {
            function cB() {
              const cB = document.createElement("p"),
                Bc = cB.style;
              cB.innerText = "Running in emulator mode. Do not use with production credentials.", Bc.position = "fixed", Bc.width = "100%", Bc.backgroundColor = "#ffffff", Bc.border = ".1em solid #000000", Bc.color = "#b50000", Bc.bottom = "0px", Bc.left = "0px", Bc.margin = "0px", Bc.zIndex = "10000", Bc.textAlign = "center", cB.classList.add("firebase-emulator-warning"), document.body.appendChild(cB)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", cB) : cB())
          }()
        }

        function EB(cB) {
          const Bc = cB.indexOf(":");
          return Bc < 0 ? "" : cB.substr(0, Bc + 1)
        }

        function oB(cB) {
          if (!cB) return null;
          const Bc = Number(cB);
          return isNaN(Bc) ? null : Bc
        }
        class WB {
          constructor(cB, Bc) {
            this.providerId = cB, this.signInMethod = Bc
          }
          toJSON() {
            return gB("not implemented")
          }
          _getIdTokenResponse(cB) {
            return gB("not implemented")
          }
          _linkToIdToken(cB, Bc) {
            return gB("not implemented")
          }
          _getReauthenticationResolver(cB) {
            return gB("not implemented")
          }
        }
        async function wB(cB, Bc) {
          return Wc(cB, "POST", "/v1/accounts:resetPassword", oc(cB, Bc))
        }
        async function kn(cB, Bc) {
          return Wc(cB, "POST", "/v1/accounts:update", Bc)
        }
        async function XB(cB, Bc) {
          return kB(cB, "POST", "/v1/accounts:signInWithPassword", oc(cB, Bc))
        }
        async function HB(cB, Bc) {
          return Wc(cB, "POST", "/v1/accounts:sendOobCode", oc(cB, Bc))
        }
        async function FB(cB, Bc) {
          return HB(cB, Bc)
        }
        async function JB(cB, Bc) {
          return HB(cB, Bc)
        }
        class jn extends WB {
          constructor(cB, Bc, nc) {
            let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", nc), this._email = cB, this._password = Bc, this._tenantId = Vc
          }
          static _fromEmailAndPassword(cB, Bc) {
            return new jn(cB, Bc, "password")
          }
          static _fromEmailAndCode(cB, Bc) {
            return new jn(cB, Bc, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(cB) {
            const Bc = "string" === typeof cB ? JSON.parse(cB) : cB;
            if ((null === Bc || void 0 === Bc ? void 0 : Bc.email) && (null === Bc || void 0 === Bc ? void 0 : Bc.password)) {
              if ("password" === Bc.signInMethod) return this._fromEmailAndPassword(Bc.email, Bc.password);
              if ("emailLink" === Bc.signInMethod) return this._fromEmailAndCode(Bc.email, Bc.password, Bc.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(cB) {
            var Bc;
            switch (this.signInMethod) {
              case "password":
                const nc = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Bc = cB._getRecaptchaConfig()) || void 0 === Bc ? void 0 : Bc.emailPasswordEnabled) {
                  const Bc = await bn(cB, nc, "signInWithPassword");
                  return XB(cB, Bc)
                }
                return XB(cB, nc).catch((async Bc => {
                  if ("auth/missing-recaptcha-token" === Bc.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Bc = await bn(cB, nc, "signInWithPassword");
                    return XB(cB, Bc)
                  }
                  return Promise.reject(Bc)
                }));
              case "emailLink":
                return async function(cB, Bc) {
                  return kB(cB, "POST", "/v1/accounts:signInWithEmailLink", oc(cB, Bc))
                }(cB, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                pc(cB, "internal-error")
            }
          }
          async _linkToIdToken(cB, Bc) {
            switch (this.signInMethod) {
              case "password":
                return kn(cB, {
                  idToken: Bc,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(cB, Bc) {
                  return kB(cB, "POST", "/v1/accounts:signInWithEmailLink", oc(cB, Bc))
                }(cB, {
                  idToken: Bc,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                pc(cB, "internal-error")
            }
          }
          _getReauthenticationResolver(cB) {
            return this._getIdTokenResponse(cB)
          }
        }
        async function RB(cB, Bc) {
          return kB(cB, "POST", "/v1/accounts:signInWithIdp", oc(cB, Bc))
        }
        class KB extends WB {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(cB) {
            const Bc = new KB(cB.providerId, cB.signInMethod);
            return cB.idToken || cB.accessToken ? (cB.idToken && (Bc.idToken = cB.idToken), cB.accessToken && (Bc.accessToken = cB.accessToken), cB.nonce && !cB.pendingToken && (Bc.nonce = cB.nonce), cB.pendingToken && (Bc.pendingToken = cB.pendingToken)) : cB.oauthToken && cB.oauthTokenSecret ? (Bc.accessToken = cB.oauthToken, Bc.secret = cB.oauthTokenSecret) : pc("argument-error"), Bc
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
          static fromJSON(cB) {
            const Bc = "string" === typeof cB ? JSON.parse(cB) : cB,
              {
                providerId: nc,
                signInMethod: Vc
              } = Bc,
              Ic = rB(Bc, ["providerId", "signInMethod"]);
            if (!nc || !Vc) return null;
            const uc = new KB(nc, Vc);
            return uc.idToken = Ic.idToken || void 0, uc.accessToken = Ic.accessToken || void 0, uc.secret = Ic.secret, uc.nonce = Ic.nonce, uc.pendingToken = Ic.pendingToken || null, uc
          }
          _getIdTokenResponse(cB) {
            return RB(cB, this.buildRequest())
          }
          _linkToIdToken(cB, Bc) {
            const nc = this.buildRequest();
            return nc.idToken = Bc, RB(cB, nc)
          }
          _getReauthenticationResolver(cB) {
            const Bc = this.buildRequest();
            return Bc.autoCreate = !1, RB(cB, Bc)
          }
          buildRequest() {
            const cB = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) cB.pendingToken = this.pendingToken;
            else {
              const Bc = {};
              this.idToken && (Bc.id_token = this.idToken), this.accessToken && (Bc.access_token = this.accessToken), this.secret && (Bc.oauth_token_secret = this.secret), Bc.providerId = this.providerId, this.nonce && !this.pendingToken && (Bc.nonce = this.nonce), cB.postBody = (0, Vc.fb)(Bc)
            }
            return cB
          }
        }
        const xn = {
          USER_NOT_FOUND: "user-not-found"
        };
        class dB extends WB {
          constructor(cB) {
            super("phone", "phone"), this.params = cB
          }
          static _fromVerification(cB, Bc) {
            return new dB({
              verificationId: cB,
              verificationCode: Bc
            })
          }
          static _fromTokenResponse(cB, Bc) {
            return new dB({
              phoneNumber: cB,
              temporaryProof: Bc
            })
          }
          _getIdTokenResponse(cB) {
            return async function(cB, Bc) {
              return kB(cB, "POST", "/v1/accounts:signInWithPhoneNumber", oc(cB, Bc))
            }(cB, this._makeVerificationRequest())
          }
          _linkToIdToken(cB, Bc) {
            return async function(cB, Bc) {
              const nc = await kB(cB, "POST", "/v1/accounts:signInWithPhoneNumber", oc(cB, Bc));
              if (nc.temporaryProof) throw Fc(cB, "account-exists-with-different-credential", nc);
              return nc
            }(cB, Object.assign({
              idToken: Bc
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(cB) {
            return async function(cB, Bc) {
              return kB(cB, "POST", "/v1/accounts:signInWithPhoneNumber", oc(cB, Object.assign(Object.assign({}, Bc), {
                operation: "REAUTH"
              })), xn)
            }(cB, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: cB,
              phoneNumber: Bc,
              verificationId: nc,
              verificationCode: Vc
            } = this.params;
            return cB && Bc ? {
              temporaryProof: cB,
              phoneNumber: Bc
            } : {
              sessionInfo: nc,
              code: Vc
            }
          }
          toJSON() {
            const cB = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (cB.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (cB.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (cB.verificationCode = this.params.verificationCode), this.params.verificationId && (cB.verificationId = this.params.verificationId), cB
          }
          static fromJSON(cB) {
            "string" === typeof cB && (cB = JSON.parse(cB));
            const {
              verificationId: Bc,
              verificationCode: nc,
              phoneNumber: Vc,
              temporaryProof: Ic
            } = cB;
            return nc || Bc || Vc || Ic ? new dB({
              verificationId: Bc,
              verificationCode: nc,
              phoneNumber: Vc,
              temporaryProof: Ic
            }) : null
          }
        }
        class AB {
          constructor(cB) {
            var Bc, nc, Ic, rB, uc, sc;
            const Mc = (0, Vc.cb)((0, Vc.B)(cB)),
              Pc = null !== (Bc = Mc.apiKey) && void 0 !== Bc ? Bc : null,
              qB = null !== (nc = Mc.oobCode) && void 0 !== nc ? nc : null,
              Oc = function(cB) {
                switch (cB) {
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
              }(null !== (Ic = Mc.mode) && void 0 !== Ic ? Ic : null);
            Lc(Pc && qB && Oc, "argument-error"), this.apiKey = Pc, this.operation = Oc, this.code = qB, this.continueUrl = null !== (rB = Mc.continueUrl) && void 0 !== rB ? rB : null, this.languageCode = null !== (uc = Mc.languageCode) && void 0 !== uc ? uc : null, this.tenantId = null !== (sc = Mc.tenantId) && void 0 !== sc ? sc : null
          }
          static parseLink(cB) {
            const Bc = function(cB) {
              const Bc = (0, Vc.cb)((0, Vc.B)(cB)).link,
                nc = Bc ? (0, Vc.cb)((0, Vc.B)(Bc)).deep_link_id : null,
                Ic = (0, Vc.cb)((0, Vc.B)(cB)).deep_link_id;
              return (Ic ? (0, Vc.cb)((0, Vc.B)(Ic)).link : null) || Ic || nc || Bc || cB
            }(cB);
            try {
              return new AB(Bc)
            } catch (nc) {
              return null
            }
          }
        }

        function GB(cB) {
          return AB.parseLink(cB)
        }
        class cV {
          constructor() {
            this.providerId = cV.PROVIDER_ID
          }
          static credential(cB, Bc) {
            return jn._fromEmailAndPassword(cB, Bc)
          }
          static credentialWithLink(cB, Bc) {
            const nc = AB.parseLink(Bc);
            return Lc(nc, "argument-error"), jn._fromEmailAndCode(cB, nc.code, nc.tenantId)
          }
        }
        cV.PROVIDER_ID = "password", cV.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", cV.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Bn {
          constructor(cB) {
            this.providerId = cB, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(cB) {
            this.defaultLanguageCode = cB
          }
          setCustomParameters(cB) {
            return this.customParameters = cB, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class nn extends Bn {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(cB) {
            return this.scopes.includes(cB) || this.scopes.push(cB), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class Vn extends nn {
          static credentialFromJSON(cB) {
            const Bc = "string" === typeof cB ? JSON.parse(cB) : cB;
            return Lc("providerId" in Bc && "signInMethod" in Bc, "argument-error"), KB._fromParams(Bc)
          }
          credential(cB) {
            return this._credential(Object.assign(Object.assign({}, cB), {
              nonce: cB.rawNonce
            }))
          }
          _credential(cB) {
            return Lc(cB.idToken || cB.accessToken, "argument-error"), KB._fromParams(Object.assign(Object.assign({}, cB), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(cB) {
            return Vn.oauthCredentialFromTaggedObject(cB)
          }
          static credentialFromError(cB) {
            return Vn.oauthCredentialFromTaggedObject(cB.customData || {})
          }
          static oauthCredentialFromTaggedObject(cB) {
            let {
              _tokenResponse: Bc
            } = cB;
            if (!Bc) return null;
            const {
              oauthIdToken: nc,
              oauthAccessToken: Vc,
              oauthTokenSecret: Ic,
              pendingToken: rB,
              nonce: uc,
              providerId: sc
            } = Bc;
            if (!Vc && !Ic && !nc && !rB) return null;
            if (!sc) return null;
            try {
              return new Vn(sc)._credential({
                idToken: nc,
                accessToken: Vc,
                nonce: uc,
                pendingToken: rB
              })
            } catch (Mc) {
              return null
            }
          }
        }
        class In extends nn {
          constructor() {
            super("facebook.com")
          }
          static credential(cB) {
            return KB._fromParams({
              providerId: In.PROVIDER_ID,
              signInMethod: In.FACEBOOK_SIGN_IN_METHOD,
              accessToken: cB
            })
          }
          static credentialFromResult(cB) {
            return In.credentialFromTaggedObject(cB)
          }
          static credentialFromError(cB) {
            return In.credentialFromTaggedObject(cB.customData || {})
          }
          static credentialFromTaggedObject(cB) {
            let {
              _tokenResponse: Bc
            } = cB;
            if (!Bc || !("oauthAccessToken" in Bc)) return null;
            if (!Bc.oauthAccessToken) return null;
            try {
              return In.credential(Bc.oauthAccessToken)
            } catch (nc) {
              return null
            }
          }
        }
        In.FACEBOOK_SIGN_IN_METHOD = "facebook.com", In.PROVIDER_ID = "facebook.com";
        class rV extends nn {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(cB, Bc) {
            return KB._fromParams({
              providerId: rV.PROVIDER_ID,
              signInMethod: rV.GOOGLE_SIGN_IN_METHOD,
              idToken: cB,
              accessToken: Bc
            })
          }
          static credentialFromResult(cB) {
            return rV.credentialFromTaggedObject(cB)
          }
          static credentialFromError(cB) {
            return rV.credentialFromTaggedObject(cB.customData || {})
          }
          static credentialFromTaggedObject(cB) {
            let {
              _tokenResponse: Bc
            } = cB;
            if (!Bc) return null;
            const {
              oauthIdToken: nc,
              oauthAccessToken: Vc
            } = Bc;
            if (!nc && !Vc) return null;
            try {
              return rV.credential(nc, Vc)
            } catch (Ic) {
              return null
            }
          }
        }
        rV.GOOGLE_SIGN_IN_METHOD = "google.com", rV.PROVIDER_ID = "google.com";
        class un extends nn {
          constructor() {
            super("github.com")
          }
          static credential(cB) {
            return KB._fromParams({
              providerId: un.PROVIDER_ID,
              signInMethod: un.GITHUB_SIGN_IN_METHOD,
              accessToken: cB
            })
          }
          static credentialFromResult(cB) {
            return un.credentialFromTaggedObject(cB)
          }
          static credentialFromError(cB) {
            return un.credentialFromTaggedObject(cB.customData || {})
          }
          static credentialFromTaggedObject(cB) {
            let {
              _tokenResponse: Bc
            } = cB;
            if (!Bc || !("oauthAccessToken" in Bc)) return null;
            if (!Bc.oauthAccessToken) return null;
            try {
              return un.credential(Bc.oauthAccessToken)
            } catch (nc) {
              return null
            }
          }
        }
        un.GITHUB_SIGN_IN_METHOD = "github.com", un.PROVIDER_ID = "github.com";
        class sn extends WB {
          constructor(cB, Bc) {
            super(cB, cB), this.pendingToken = Bc
          }
          _getIdTokenResponse(cB) {
            return RB(cB, this.buildRequest())
          }
          _linkToIdToken(cB, Bc) {
            const nc = this.buildRequest();
            return nc.idToken = Bc, RB(cB, nc)
          }
          _getReauthenticationResolver(cB) {
            const Bc = this.buildRequest();
            return Bc.autoCreate = !1, RB(cB, Bc)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(cB) {
            const Bc = "string" === typeof cB ? JSON.parse(cB) : cB,
              {
                providerId: nc,
                signInMethod: Vc,
                pendingToken: Ic
              } = Bc;
            return nc && Vc && Ic && nc === Vc ? new sn(nc, Ic) : null
          }
          static _create(cB, Bc) {
            return new sn(cB, Bc)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Mn extends Bn {
          constructor(cB) {
            Lc(cB.startsWith("saml."), "argument-error"), super(cB)
          }
          static credentialFromResult(cB) {
            return Mn.samlCredentialFromTaggedObject(cB)
          }
          static credentialFromError(cB) {
            return Mn.samlCredentialFromTaggedObject(cB.customData || {})
          }
          static credentialFromJSON(cB) {
            const Bc = sn.fromJSON(cB);
            return Lc(Bc, "argument-error"), Bc
          }
          static samlCredentialFromTaggedObject(cB) {
            let {
              _tokenResponse: Bc
            } = cB;
            if (!Bc) return null;
            const {
              pendingToken: nc,
              providerId: Vc
            } = Bc;
            if (!nc || !Vc) return null;
            try {
              return sn._create(Vc, nc)
            } catch (Ic) {
              return null
            }
          }
        }
        class Pn extends nn {
          constructor() {
            super("twitter.com")
          }
          static credential(cB, Bc) {
            return KB._fromParams({
              providerId: Pn.PROVIDER_ID,
              signInMethod: Pn.TWITTER_SIGN_IN_METHOD,
              oauthToken: cB,
              oauthTokenSecret: Bc
            })
          }
          static credentialFromResult(cB) {
            return Pn.credentialFromTaggedObject(cB)
          }
          static credentialFromError(cB) {
            return Pn.credentialFromTaggedObject(cB.customData || {})
          }
          static credentialFromTaggedObject(cB) {
            let {
              _tokenResponse: Bc
            } = cB;
            if (!Bc) return null;
            const {
              oauthAccessToken: nc,
              oauthTokenSecret: Vc
            } = Bc;
            if (!nc || !Vc) return null;
            try {
              return Pn.credential(nc, Vc)
            } catch (Ic) {
              return null
            }
          }
        }
        async function qV(cB, Bc) {
          return kB(cB, "POST", "/v1/accounts:signUp", oc(cB, Bc))
        }
        Pn.TWITTER_SIGN_IN_METHOD = "twitter.com", Pn.PROVIDER_ID = "twitter.com";
        class On {
          constructor(cB) {
            this.user = cB.user, this.providerId = cB.providerId, this._tokenResponse = cB._tokenResponse, this.operationType = cB.operationType
          }
          static async _fromIdTokenResponse(cB, Bc, nc) {
            let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Ic = await VB._fromIdTokenResponse(cB, nc, Vc),
              rB = Tn(nc);
            return new On({
              user: Ic,
              providerId: rB,
              _tokenResponse: nc,
              operationType: Bc
            })
          }
          static async _forOperation(cB, Bc, nc) {
            await cB._updateTokensIfNecessary(nc, !0);
            const Vc = Tn(nc);
            return new On({
              user: cB,
              providerId: Vc,
              _tokenResponse: nc,
              operationType: Bc
            })
          }
        }

        function Tn(cB) {
          return cB.providerId ? cB.providerId : "phoneNumber" in cB ? "phone" : null
        }
        async function fn(cB) {
          var Bc;
          const nc = CB(cB);
          if (await nc._initializationPromise, null === (Bc = nc.currentUser) || void 0 === Bc ? void 0 : Bc.isAnonymous) return new On({
            user: nc.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Vc = await qV(nc, {
              returnSecureToken: !0
            }),
            Ic = await On._fromIdTokenResponse(nc, "signIn", Vc, !0);
          return await nc._updateCurrentUser(Ic.user), Ic
        }
        class mV extends Vc.i {
          constructor(cB, Bc, nc, Vc) {
            var Ic;
            super(Bc.code, Bc.message), this.operationType = nc, this.user = Vc, Object.setPrototypeOf(this, mV.prototype), this.customData = {
              appName: cB.name,
              tenantId: null !== (Ic = cB.tenantId) && void 0 !== Ic ? Ic : void 0,
              _serverResponse: Bc.customData._serverResponse,
              operationType: nc
            }
          }
          static _fromErrorAndOperation(cB, Bc, nc, Vc) {
            return new mV(cB, Bc, nc, Vc)
          }
        }

        function en(cB, Bc, nc, Vc) {
          return ("reauthenticate" === Bc ? nc._getReauthenticationResolver(cB) : nc._getIdTokenResponse(cB)).catch((nc => {
            if ("auth/multi-factor-auth-required" === nc.code) throw mV._fromErrorAndOperation(cB, nc, Bc, Vc);
            throw nc
          }))
        }

        function tV(cB) {
          return new Set(cB.map((cB => {
            let {
              providerId: Bc
            } = cB;
            return Bc
          })).filter((cB => !!cB)))
        }
        async function Sn(cB, Bc) {
          const nc = (0, Vc.N)(cB);
          await zV(!0, nc, Bc);
          const {
            providerUserInfo: Ic
          } = await async function(cB, Bc) {
            return Wc(cB, "POST", "/v1/accounts:update", Bc)
          }(nc.auth, {
            idToken: await nc.getIdToken(),
            deleteProvider: [Bc]
          }), rB = tV(Ic || []);
          return nc.providerData = nc.providerData.filter((cB => rB.has(cB.providerId))), rB.has("phone") || (nc.phoneNumber = null), await nc.auth._persistUserIfCurrent(nc), nc
        }
        async function yV(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Vc = await xB(cB, Bc._linkToIdToken(cB.auth, await cB.getIdToken()), nc);
          return On._forOperation(cB, "link", Vc)
        }
        async function zV(cB, Bc, nc) {
          await Gc(Bc);
          const Vc = !1 === cB ? "provider-already-linked" : "no-such-provider";
          Lc(tV(Bc.providerData).has(nc) === cB, Bc.auth, Vc)
        }
        async function pn(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Vc
          } = cB, Ic = "reauthenticate";
          try {
            const rB = await xB(cB, en(Vc, Ic, Bc, cB), nc);
            Lc(rB.idToken, Vc, "internal-error");
            const uc = Kc(rB.idToken);
            Lc(uc, Vc, "internal-error");
            const {
              sub: sc
            } = uc;
            return Lc(cB.uid === sc, Vc, "user-mismatch"), On._forOperation(cB, Ic, rB)
          } catch (rB) {
            throw "auth/user-not-found" === (null === rB || void 0 === rB ? void 0 : rB.code) && pc(Vc, "user-mismatch"), rB
          }
        }
        async function hn(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Vc = "signIn",
            Ic = await en(cB, Vc, Bc),
            rB = await On._fromIdTokenResponse(cB, Vc, Ic);
          return nc || await cB._updateCurrentUser(rB.user), rB
        }
        async function aV(cB, Bc) {
          return hn(CB(cB), Bc)
        }
        async function lnc(cB, Bc) {
          const nc = (0, Vc.N)(cB);
          return await zV(!1, nc, Bc.providerId), yV(nc, Bc)
        }
        async function Yn(cB, Bc) {
          return pn((0, Vc.N)(cB), Bc)
        }
        async function Ln(cB, Bc) {
          const nc = CB(cB),
            Vc = await async function(cB, Bc) {
              return kB(cB, "POST", "/v1/accounts:signInWithCustomToken", oc(cB, Bc))
            }(nc, {
              token: Bc,
              returnSecureToken: !0
            }), Ic = await On._fromIdTokenResponse(nc, "signIn", Vc);
          return await nc._updateCurrentUser(Ic.user), Ic
        }
        class gV {
          constructor(cB, Bc) {
            this.factorId = cB, this.uid = Bc.mfaEnrollmentId, this.enrollmentTime = new Date(Bc.enrolledAt).toUTCString(), this.displayName = Bc.displayName
          }
          static _fromServerResponse(cB, Bc) {
            return "phoneInfo" in Bc ? Un._fromServerResponse(cB, Bc) : "totpInfo" in Bc ? bV._fromServerResponse(cB, Bc) : pc(cB, "internal-error")
          }
        }
        class Un extends gV {
          constructor(cB) {
            super("phone", cB), this.phoneNumber = cB.phoneInfo
          }
          static _fromServerResponse(cB, Bc) {
            return new Un(Bc)
          }
        }
        class bV extends gV {
          constructor(cB) {
            super("totp", cB)
          }
          static _fromServerResponse(cB, Bc) {
            return new bV(Bc)
          }
        }

        function Zn(cB, Bc, nc) {
          var Vc;
          Lc((null === (Vc = nc.url) || void 0 === Vc ? void 0 : Vc.length) > 0, cB, "invalid-continue-uri"), Lc("undefined" === typeof nc.dynamicLinkDomain || nc.dynamicLinkDomain.length > 0, cB, "invalid-dynamic-link-domain"), Bc.continueUrl = nc.url, Bc.dynamicLinkDomain = nc.dynamicLinkDomain, Bc.canHandleCodeInApp = nc.handleCodeInApp, nc.iOS && (Lc(nc.iOS.bundleId.length > 0, cB, "missing-ios-bundle-id"), Bc.iOSBundleId = nc.iOS.bundleId), nc.android && (Lc(nc.android.packageName.length > 0, cB, "missing-android-pkg-name"), Bc.androidInstallApp = nc.android.installApp, Bc.androidMinimumVersionCode = nc.android.minimumVersion, Bc.androidPackageName = nc.android.packageName)
        }
        async function Qn(cB, Bc, nc) {
          var Vc;
          const Ic = CB(cB),
            rB = {
              requestType: "PASSWORD_RESET",
              email: Bc,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Vc = Ic._getRecaptchaConfig()) || void 0 === Vc ? void 0 : Vc.emailPasswordEnabled) {
            const cB = await bn(Ic, rB, "getOobCode", !0);
            nc && Zn(Ic, cB, nc), await FB(Ic, cB)
          } else nc && Zn(Ic, rB, nc), await FB(Ic, rB).catch((async cB => {
            if ("auth/missing-recaptcha-token" !== cB.code) return Promise.reject(cB);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const cB = await bn(Ic, rB, "getOobCode", !0);
              nc && Zn(Ic, cB, nc), await FB(Ic, cB)
            }
          }))
        }
        async function Cn(cB, Bc, nc) {
          await wB((0, Vc.N)(cB), {
            oobCode: Bc,
            newPassword: nc
          })
        }
        async function vV(cB, Bc) {
          await async function(cB, Bc) {
            return Wc(cB, "POST", "/v1/accounts:update", oc(cB, Bc))
          }((0, Vc.N)(cB), {
            oobCode: Bc
          })
        }
        async function Dn(cB, Bc) {
          const nc = (0, Vc.N)(cB),
            Ic = await wB(nc, {
              oobCode: Bc
            }),
            rB = Ic.requestType;
          switch (Lc(rB, nc, "internal-error"), rB) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Lc(Ic.newEmail, nc, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Lc(Ic.mfaInfo, nc, "internal-error");
            default:
              Lc(Ic.email, nc, "internal-error")
          }
          let uc = null;
          return Ic.mfaInfo && (uc = gV._fromServerResponse(CB(nc), Ic.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Ic.requestType ? Ic.newEmail : Ic.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Ic.requestType ? Ic.email : Ic.newEmail) || null,
              multiFactorInfo: uc
            },
            operation: rB
          }
        }
        async function Nn(cB, Bc) {
          const {
            data: nc
          } = await Dn((0, Vc.N)(cB), Bc);
          return nc.email
        }
        async function En(cB, Bc, nc) {
          var Vc;
          const Ic = CB(cB),
            rB = {
              returnSecureToken: !0,
              email: Bc,
              password: nc,
              clientType: "CLIENT_TYPE_WEB"
            };
          let uc;
          if (null === (Vc = Ic._getRecaptchaConfig()) || void 0 === Vc ? void 0 : Vc.emailPasswordEnabled) {
            const cB = await bn(Ic, rB, "signUpPassword");
            uc = qV(Ic, cB)
          } else uc = qV(Ic, rB).catch((async cB => {
            if ("auth/missing-recaptcha-token" === cB.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const cB = await bn(Ic, rB, "signUpPassword");
              return qV(Ic, cB)
            }
            return Promise.reject(cB)
          }));
          const sc = await uc.catch((cB => Promise.reject(cB))),
            Mc = await On._fromIdTokenResponse(Ic, "signIn", sc);
          return await Ic._updateCurrentUser(Mc.user), Mc
        }

        function onc(cB, Bc, nc) {
          return aV((0, Vc.N)(cB), cV.credential(Bc, nc))
        }
        async function Wn(cB, Bc, nc) {
          var Vc;
          const Ic = CB(cB),
            rB = {
              requestType: "EMAIL_SIGNIN",
              email: Bc,
              clientType: "CLIENT_TYPE_WEB"
            };

          function uc(cB, Bc) {
            Lc(Bc.handleCodeInApp, Ic, "argument-error"), Bc && Zn(Ic, cB, Bc)
          }
          if (null === (Vc = Ic._getRecaptchaConfig()) || void 0 === Vc ? void 0 : Vc.emailPasswordEnabled) {
            const cB = await bn(Ic, rB, "getOobCode", !0);
            uc(cB, nc), await JB(Ic, cB)
          } else uc(rB, nc), await JB(Ic, rB).catch((async cB => {
            if ("auth/missing-recaptcha-token" !== cB.code) return Promise.reject(cB);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const cB = await bn(Ic, rB, "getOobCode", !0);
              uc(cB, nc), await JB(Ic, cB)
            }
          }))
        }

        function wn(cB, Bc) {
          const nc = AB.parseLink(Bc);
          return "EMAIL_SIGNIN" === (null === nc || void 0 === nc ? void 0 : nc.operation)
        }
        async function kV(cB, Bc, nc) {
          const Ic = (0, Vc.N)(cB),
            rB = cV.credentialWithLink(Bc, nc || bB());
          return Lc(rB._tenantId === (Ic.tenantId || null), Ic, "tenant-id-mismatch"), aV(Ic, rB)
        }
        async function Xn(cB, Bc) {
          const nc = {
              identifier: Bc,
              continueUri: Zc() ? bB() : "http://localhost"
            },
            {
              signinMethods: Ic
            } = await async function(cB, Bc) {
              return Wc(cB, "POST", "/v1/accounts:createAuthUri", oc(cB, Bc))
            }((0, Vc.N)(cB), nc);
          return Ic || []
        }
        async function Hn(cB, Bc) {
          const nc = (0, Vc.N)(cB),
            Ic = {
              requestType: "VERIFY_EMAIL",
              idToken: await cB.getIdToken()
            };
          Bc && Zn(nc.auth, Ic, Bc);
          const {
            email: rB
          } = await async function(cB, Bc) {
            return HB(cB, Bc)
          }(nc.auth, Ic);
          rB !== cB.email && await cB.reload()
        }
        async function Fn(cB, Bc, nc) {
          const Ic = (0, Vc.N)(cB),
            rB = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await cB.getIdToken(),
              newEmail: Bc
            };
          nc && Zn(Ic.auth, rB, nc);
          const {
            email: uc
          } = await async function(cB, Bc) {
            return HB(cB, Bc)
          }(Ic.auth, rB);
          uc !== cB.email && await cB.reload()
        }
        async function Jn(cB, Bc) {
          let {
            displayName: nc,
            photoURL: Ic
          } = Bc;
          if (void 0 === nc && void 0 === Ic) return;
          const rB = (0, Vc.N)(cB),
            uc = {
              idToken: await rB.getIdToken(),
              displayName: nc,
              photoUrl: Ic,
              returnSecureToken: !0
            },
            sc = await xB(rB, async function(cB, Bc) {
              return Wc(cB, "POST", "/v1/accounts:update", Bc)
            }(rB.auth, uc));
          rB.displayName = sc.displayName || null, rB.photoURL = sc.photoUrl || null;
          const Mc = rB.providerData.find((cB => {
            let {
              providerId: Bc
            } = cB;
            return "password" === Bc
          }));
          Mc && (Mc.displayName = rB.displayName, Mc.photoURL = rB.photoURL), await rB._updateTokensIfNecessary(sc)
        }

        function jV(cB, Bc) {
          return iV((0, Vc.N)(cB), Bc, null)
        }

        function Rn(cB, Bc) {
          return iV((0, Vc.N)(cB), null, Bc)
        }
        async function iV(cB, Bc, nc) {
          const {
            auth: Vc
          } = cB, Ic = {
            idToken: await cB.getIdToken(),
            returnSecureToken: !0
          };
          Bc && (Ic.email = Bc), nc && (Ic.password = nc);
          const rB = await xB(cB, kn(Vc, Ic));
          await cB._updateTokensIfNecessary(rB, !0)
        }
        class Kn {
          constructor(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = cB, this.providerId = Bc, this.profile = nc
          }
        }
        class xV extends Kn {
          constructor(cB, Bc, nc, Vc) {
            super(cB, Bc, nc), this.username = Vc
          }
        }
        class dn extends Kn {
          constructor(cB, Bc) {
            super(cB, "facebook.com", Bc)
          }
        }
        class An extends xV {
          constructor(cB, Bc) {
            super(cB, "github.com", Bc, "string" === typeof(null === Bc || void 0 === Bc ? void 0 : Bc.login) ? null === Bc || void 0 === Bc ? void 0 : Bc.login : null)
          }
        }
        class Gn extends Kn {
          constructor(cB, Bc) {
            super(cB, "google.com", Bc)
          }
        }
        class cI extends xV {
          constructor(cB, Bc, nc) {
            super(cB, "twitter.com", Bc, nc)
          }
        }

        function BV(cB) {
          const {
            user: Bc,
            _tokenResponse: nc
          } = cB;
          return Bc.isAnonymous && !nc ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(cB) {
            var Bc, nc;
            if (!cB) return null;
            const {
              providerId: Vc
            } = cB, Ic = cB.rawUserInfo ? JSON.parse(cB.rawUserInfo) : {}, rB = cB.isNewUser || "identitytoolkit#SignupNewUserResponse" === cB.kind;
            if (!Vc && (null === cB || void 0 === cB ? void 0 : cB.idToken)) {
              const Vc = null === (nc = null === (Bc = Kc(cB.idToken)) || void 0 === Bc ? void 0 : Bc.firebase) || void 0 === nc ? void 0 : nc.sign_in_provider;
              if (Vc) return new Kn(rB, "anonymous" !== Vc && "custom" !== Vc ? Vc : null)
            }
            if (!Vc) return null;
            switch (Vc) {
              case "facebook.com":
                return new dn(rB, Ic);
              case "github.com":
                return new An(rB, Ic);
              case "google.com":
                return new Gn(rB, Ic);
              case "twitter.com":
                return new cI(rB, Ic, cB.screenName || null);
              case "custom":
              case "anonymous":
                return new Kn(rB, null);
              default:
                return new Kn(rB, Vc, Ic)
            }
          }(nc)
        }

        function nV(cB, Bc) {
          return (0, Vc.N)(cB).setPersistence(Bc)
        }

        function VV(cB) {
          return CB(cB).initializeRecaptchaConfig()
        }

        function IV(cB, Bc, nc, Ic) {
          return (0, Vc.N)(cB).onIdTokenChanged(Bc, nc, Ic)
        }

        function rI(cB, Bc, nc) {
          return (0, Vc.N)(cB).beforeAuthStateChanged(Bc, nc)
        }

        function uV(cB, Bc, nc, Ic) {
          return (0, Vc.N)(cB).onAuthStateChanged(Bc, nc, Ic)
        }

        function sV(cB) {
          (0, Vc.N)(cB).useDeviceLanguage()
        }

        function MV(cB, Bc) {
          return (0, Vc.N)(cB).updateCurrentUser(Bc)
        }

        function PV(cB) {
          return (0, Vc.N)(cB).signOut()
        }
        async function qI(cB) {
          return (0, Vc.N)(cB).delete()
        }
        class OV {
          constructor(cB, Bc, nc) {
            this.type = cB, this.credential = Bc, this.auth = nc
          }
          static _fromIdtoken(cB, Bc) {
            return new OV("enroll", cB, Bc)
          }
          static _fromMfaPendingCredential(cB) {
            return new OV("signin", cB)
          }
          toJSON() {
            const cB = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [cB]: this.credential
              }
            }
          }
          static fromJSON(cB) {
            var Bc, nc;
            if (null === cB || void 0 === cB ? void 0 : cB.multiFactorSession) {
              if (null === (Bc = cB.multiFactorSession) || void 0 === Bc ? void 0 : Bc.pendingCredential) return OV._fromMfaPendingCredential(cB.multiFactorSession.pendingCredential);
              if (null === (nc = cB.multiFactorSession) || void 0 === nc ? void 0 : nc.idToken) return OV._fromIdtoken(cB.multiFactorSession.idToken)
            }
            return null
          }
        }
        class TV {
          constructor(cB, Bc, nc) {
            this.session = cB, this.hints = Bc, this.signInResolver = nc
          }
          static _fromError(cB, Bc) {
            const nc = CB(cB),
              Vc = Bc.customData._serverResponse,
              Ic = (Vc.mfaInfo || []).map((cB => gV._fromServerResponse(nc, cB)));
            Lc(Vc.mfaPendingCredential, nc, "internal-error");
            const rB = OV._fromMfaPendingCredential(Vc.mfaPendingCredential);
            return new TV(rB, Ic, (async cB => {
              const Ic = await cB._process(nc, rB);
              delete Vc.mfaInfo, delete Vc.mfaPendingCredential;
              const uc = Object.assign(Object.assign({}, Vc), {
                idToken: Ic.idToken,
                refreshToken: Ic.refreshToken
              });
              switch (Bc.operationType) {
                case "signIn":
                  const cB = await On._fromIdTokenResponse(nc, Bc.operationType, uc);
                  return await nc._updateCurrentUser(cB.user), cB;
                case "reauthenticate":
                  return Lc(Bc.user, nc, "internal-error"), On._forOperation(Bc.user, Bc.operationType, uc);
                default:
                  pc(nc, "internal-error")
              }
            }))
          }
          async resolveSignIn(cB) {
            const Bc = cB;
            return this.signInResolver(Bc)
          }
        }

        function fV(cB, Bc) {
          var nc;
          const Ic = (0, Vc.N)(cB),
            rB = Bc;
          return Lc(Bc.customData.operationType, Ic, "argument-error"), Lc(null === (nc = rB.customData._serverResponse) || void 0 === nc ? void 0 : nc.mfaPendingCredential, Ic, "argument-error"), TV._fromError(Ic, rB)
        }
        class mI {
          constructor(cB) {
            this.user = cB, this.enrolledFactors = [], cB._onReload((Bc => {
              Bc.mfaInfo && (this.enrolledFactors = Bc.mfaInfo.map((Bc => gV._fromServerResponse(cB.auth, Bc))))
            }))
          }
          static _fromUser(cB) {
            return new mI(cB)
          }
          async getSession() {
            return OV._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(cB, Bc) {
            const nc = cB,
              Vc = await this.getSession(),
              Ic = await xB(this.user, nc._process(this.user.auth, Vc, Bc));
            return await this.user._updateTokensIfNecessary(Ic), this.user.reload()
          }
          async unenroll(cB) {
            const Bc = "string" === typeof cB ? cB : cB.uid,
              nc = await this.user.getIdToken();
            try {
              const cB = await xB(this.user, (Vc = this.user.auth, Ic = {
                idToken: nc,
                mfaEnrollmentId: Bc
              }, Wc(Vc, "POST", "/v2/accounts/mfaEnrollment:withdraw", oc(Vc, Ic))));
              this.enrolledFactors = this.enrolledFactors.filter((cB => {
                let {
                  uid: nc
                } = cB;
                return nc !== Bc
              })), await this.user._updateTokensIfNecessary(cB), await this.user.reload()
            } catch (rB) {
              throw rB
            }
            var Vc, Ic
          }
        }
        const eV = new WeakMap;

        function tI(cB) {
          const Bc = (0, Vc.N)(cB);
          return eV.has(Bc) || eV.set(Bc, mI._fromUser(Bc)), eV.get(Bc)
        }
        const SV = "__sak";
        class yI {
          constructor(cB, Bc) {
            this.storageRetriever = cB, this.type = Bc
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(SV, "1"), this.storage.removeItem(SV), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (cB) {
              return Promise.resolve(!1)
            }
          }
          _set(cB, Bc) {
            return this.storage.setItem(cB, JSON.stringify(Bc)), Promise.resolve()
          }
          _get(cB) {
            const Bc = this.storage.getItem(cB);
            return Promise.resolve(Bc ? JSON.parse(Bc) : null)
          }
          _remove(cB) {
            return this.storage.removeItem(cB), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class zI extends yI {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (cB, Bc) => this.onStorageEvent(cB, Bc), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const cB = (0, Vc.P)();
              return TB(cB) || yn(cB)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (cB) {
                return !1
              }
            }(), this.fallbackToPolling = zn(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(cB) {
            for (const Bc of Object.keys(this.listeners)) {
              const nc = this.storage.getItem(Bc),
                Vc = this.localCache[Bc];
              nc !== Vc && cB(Bc, Vc, nc)
            }
          }
          onStorageEvent(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!cB.key) return void this.forAllChangedKeys(((cB, Bc, nc) => {
              this.notifyListeners(cB, nc)
            }));
            const nc = cB.key;
            if (Bc ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Vc = this.storage.getItem(nc);
              if (cB.newValue !== Vc) null !== cB.newValue ? this.storage.setItem(nc, cB.newValue) : this.storage.removeItem(nc);
              else if (this.localCache[nc] === cB.newValue && !Bc) return
            }
            const Ic = () => {
                const cB = this.storage.getItem(nc);
                (Bc || this.localCache[nc] !== cB) && this.notifyListeners(nc, cB)
              },
              rB = this.storage.getItem(nc);
            (0, Vc.V)() && 10 === document.documentMode && rB !== cB.newValue && cB.newValue !== cB.oldValue ? setTimeout(Ic, 10) : Ic()
          }
          notifyListeners(cB, Bc) {
            this.localCache[cB] = Bc;
            const nc = this.listeners[cB];
            if (nc)
              for (const Vc of Array.from(nc)) Vc(Bc ? JSON.parse(Bc) : Bc)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((cB, Bc, nc) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: cB,
                  oldValue: Bc,
                  newValue: nc
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
          _addListener(cB, Bc) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[cB] || (this.listeners[cB] = new Set, this.localCache[cB] = this.storage.getItem(cB)), this.listeners[cB].add(Bc)
          }
          _removeListener(cB, Bc) {
            this.listeners[cB] && (this.listeners[cB].delete(Bc), 0 === this.listeners[cB].size && delete this.listeners[cB]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(cB, Bc) {
            await super._set(cB, Bc), this.localCache[cB] = JSON.stringify(Bc)
          }
          async _get(cB) {
            const Bc = await super._get(cB);
            return this.localCache[cB] = JSON.stringify(Bc), Bc
          }
          async _remove(cB) {
            await super._remove(cB), delete this.localCache[cB]
          }
        }
        zI.type = "LOCAL";
        const pV = zI;
        class hV extends yI {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(cB, Bc) {}
          _removeListener(cB, Bc) {}
        }
        hV.type = "SESSION";
        const aI = hV;
        class lV {
          constructor(cB) {
            this.eventTarget = cB, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(cB) {
            const Bc = this.receivers.find((Bc => Bc.isListeningto(cB)));
            if (Bc) return Bc;
            const nc = new lV(cB);
            return this.receivers.push(nc), nc
          }
          isListeningto(cB) {
            return this.eventTarget === cB
          }
          async handleEvent(cB) {
            const Bc = cB,
              {
                eventId: nc,
                eventType: Vc,
                data: Ic
              } = Bc.data,
              rB = this.handlersMap[Vc];
            if (!(null === rB || void 0 === rB ? void 0 : rB.size)) return;
            Bc.ports[0].postMessage({
              status: "ack",
              eventId: nc,
              eventType: Vc
            });
            const uc = Array.from(rB).map((async cB => cB(Bc.origin, Ic))),
              sc = await
            function(cB) {
              return Promise.all(cB.map((async cB => {
                try {
                  return {
                    fulfilled: !0,
                    value: await cB
                  }
                } catch (Bc) {
                  return {
                    fulfilled: !1,
                    reason: Bc
                  }
                }
              })))
            }(uc);
            Bc.ports[0].postMessage({
              status: "done",
              eventId: nc,
              eventType: Vc,
              response: sc
            })
          }
          _subscribe(cB, Bc) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[cB] || (this.handlersMap[cB] = new Set), this.handlersMap[cB].add(Bc)
          }
          _unsubscribe(cB, Bc) {
            this.handlersMap[cB] && Bc && this.handlersMap[cB].delete(Bc), Bc && 0 !== this.handlersMap[cB].size || delete this.handlersMap[cB], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function YV() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            nc = "";
          for (let Vc = 0; Vc < Bc; Vc++) nc += Math.floor(10 * Math.random());
          return cB + nc
        }
        lV.receivers = [];
        class LV {
          constructor(cB) {
            this.target = cB, this.handlers = new Set
          }
          removeMessageHandler(cB) {
            cB.messageChannel && (cB.messageChannel.port1.removeEventListener("message", cB.tC), cB.messageChannel.port1.close()), this.handlers.delete(cB)
          }
          async _send(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Vc = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Vc) throw new Error("connection_unavailable");
            let Ic, rB;
            return new Promise(((uc, sc) => {
              const Mc = YV("", 20);
              Vc.port1.start();
              const Pc = setTimeout((() => {
                sc(new Error("unsupported_event"))
              }), nc);
              rB = {
                messageChannel: Vc,
                tC(cB) {
                  const Bc = cB;
                  if (Bc.data.eventId === Mc) switch (Bc.data.status) {
                    case "ack":
                      clearTimeout(Pc), Ic = setTimeout((() => {
                        sc(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Ic), uc(Bc.data.response);
                      break;
                    default:
                      clearTimeout(Pc), clearTimeout(Ic), sc(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(rB), Vc.port1.addEventListener("message", rB.tC), this.target.postMessage({
                eventType: cB,
                eventId: Mc,
                data: Bc
              }, [Vc.port2])
            })).finally((() => {
              rB && this.removeMessageHandler(rB)
            }))
          }
        }

        function gI() {
          return window
        }

        function UV() {
          return "undefined" !== typeof gI().WorkerGlobalScope && "function" === typeof gI().importScripts
        }
        const bI = "firebaseLocalStorageDb",
          ZV = "firebaseLocalStorage",
          QV = "fbase_key";
        class CV {
          constructor(cB) {
            this.request = cB
          }
          toPromise() {
            return new Promise(((cB, Bc) => {
              this.request.addEventListener("success", (() => {
                cB(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Bc(this.request.error)
              }))
            }))
          }
        }

        function vI(cB, Bc) {
          return cB.transaction([ZV], Bc ? "readwrite" : "readonly").objectStore(ZV)
        }

        function DV() {
          const cB = indexedDB.open(bI, 1);
          return new Promise(((Bc, nc) => {
            cB.addEventListener("error", (() => {
              nc(cB.error)
            })), cB.addEventListener("upgradeneeded", (() => {
              const Bc = cB.result;
              try {
                Bc.createObjectStore(ZV, {
                  keyPath: QV
                })
              } catch (Vc) {
                nc(Vc)
              }
            })), cB.addEventListener("success", (async () => {
              const nc = cB.result;
              nc.objectStoreNames.contains(ZV) ? Bc(nc) : (nc.close(), await
                function() {
                  const cB = indexedDB.deleteDatabase(bI);
                  return new CV(cB).toPromise()
                }(), Bc(await DV()))
            }))
          }))
        }
        async function NV(cB, Bc, nc) {
          const Vc = vI(cB, !0).put({
            [QV]: Bc,
            value: nc
          });
          return new CV(Vc).toPromise()
        }

        function EV(cB, Bc) {
          const nc = vI(cB, !0).delete(Bc);
          return new CV(nc).toPromise()
        }
        class oV {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await DV()), this.db
          }
          async _withRetries(cB) {
            let Bc = 0;
            for (;;) try {
              const Bc = await this._openDb();
              return await cB(Bc)
            } catch (nc) {
              if (Bc++ > 3) throw nc;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return UV() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = lV._getInstance(UV() ? self : null), this.receiver._subscribe("keyChanged", (async (cB, Bc) => ({
              keyProcessed: (await this._poll()).includes(Bc.key)
            }))), this.receiver._subscribe("ping", (async (cB, Bc) => ["keyChanged"]))
          }
          async initializeSender() {
            var cB, Bc;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (cB) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new LV(this.activeServiceWorker);
            const nc = await this.sender._send("ping", {}, 800);
            nc && (null === (cB = nc[0]) || void 0 === cB ? void 0 : cB.fulfilled) && (null === (Bc = nc[0]) || void 0 === Bc ? void 0 : Bc.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(cB) {
            if (this.sender && this.activeServiceWorker && function() {
                var cB;
                return (null === (cB = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === cB ? void 0 : cB.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: cB
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Bc) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const cB = await DV();
              return await NV(cB, SV, "1"), await EV(cB, SV), !0
            } catch (cB) {}
            return !1
          }
          async _withPendingWrite(cB) {
            this.pendingWrites++;
            try {
              await cB()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(cB, Bc) {
            return this._withPendingWrite((async () => (await this._withRetries((nc => NV(nc, cB, Bc))), this.localCache[cB] = Bc, this.notifyServiceWorker(cB))))
          }
          async _get(cB) {
            const Bc = await this._withRetries((Bc => async function(cB, Bc) {
              const nc = vI(cB, !1).get(Bc),
                Vc = await new CV(nc).toPromise();
              return void 0 === Vc ? null : Vc.value
            }(Bc, cB)));
            return this.localCache[cB] = Bc, Bc
          }
          async _remove(cB) {
            return this._withPendingWrite((async () => (await this._withRetries((Bc => EV(Bc, cB))), delete this.localCache[cB], this.notifyServiceWorker(cB))))
          }
          async _poll() {
            const cB = await this._withRetries((cB => {
              const Bc = vI(cB, !1).getAll();
              return new CV(Bc).toPromise()
            }));
            if (!cB) return [];
            if (0 !== this.pendingWrites) return [];
            const Bc = [],
              nc = new Set;
            for (const {
                fbase_key: Vc,
                value: Ic
              }
              of cB) nc.add(Vc), JSON.stringify(this.localCache[Vc]) !== JSON.stringify(Ic) && (this.notifyListeners(Vc, Ic), Bc.push(Vc));
            for (const Vc of Object.keys(this.localCache)) this.localCache[Vc] && !nc.has(Vc) && (this.notifyListeners(Vc, null), Bc.push(Vc));
            return Bc
          }
          notifyListeners(cB, Bc) {
            this.localCache[cB] = Bc;
            const nc = this.listeners[cB];
            if (nc)
              for (const Vc of Array.from(nc)) Vc(Bc)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(cB, Bc) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[cB] || (this.listeners[cB] = new Set, this._get(cB)), this.listeners[cB].add(Bc)
          }
          _removeListener(cB, Bc) {
            this.listeners[cB] && (this.listeners[cB].delete(Bc), 0 === this.listeners[cB].size && delete this.listeners[cB]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        oV.type = "LOCAL";
        const WV = oV;
        const wV = 1e12;
        class kI {
          constructor(cB) {
            this.auth = cB, this.counter = wV, this._widgets = new Map
          }
          render(cB, Bc) {
            const nc = this.counter;
            return this._widgets.set(nc, new XV(cB, this.auth.name, Bc || {})), this.counter++, nc
          }
          reset(cB) {
            var Bc;
            const nc = cB || wV;
            null === (Bc = this._widgets.get(nc)) || void 0 === Bc || Bc.delete(), this._widgets.delete(nc)
          }
          getResponse(cB) {
            var Bc;
            const nc = cB || wV;
            return (null === (Bc = this._widgets.get(nc)) || void 0 === Bc ? void 0 : Bc.getResponse()) || ""
          }
          async execute(cB) {
            var Bc;
            const nc = cB || wV;
            return null === (Bc = this._widgets.get(nc)) || void 0 === Bc || Bc.execute(), ""
          }
        }
        class XV {
          constructor(cB, Bc, nc) {
            this.params = nc, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Vc = "string" === typeof cB ? document.getElementById(cB) : cB;
            Lc(Vc, "argument-error", {
              appName: Bc
            }), this.container = Vc, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(cB) {
                const Bc = [],
                  nc = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Vc = 0; Vc < cB; Vc++) Bc.push(nc.charAt(Math.floor(Math.random() * nc.length)));
                return Bc.join("")
              }(50);
              const {
                callback: cB,
                "expired-callback": Bc
              } = this.params;
              if (cB) try {
                cB(this.responseToken)
              } catch (nc) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Bc) try {
                  Bc()
                } catch (nc) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const HV = gn("rcb"),
          FV = new Cc(3e4, 6e4);
        class JV {
          constructor() {
            var cB;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (cB = gI().grecaptcha) || void 0 === cB ? void 0 : cB.render)
          }
          load(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Lc(function(cB) {
              return cB.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(cB)
            }(Bc), cB, "argument-error"), this.shouldResolveImmediately(Bc) && an(gI().grecaptcha) ? Promise.resolve(gI().grecaptcha) : new Promise(((nc, Ic) => {
              const rB = gI().setTimeout((() => {
                Ic(hc(cB, "network-request-failed"))
              }), FV.get());
              gI()[HV] = () => {
                gI().clearTimeout(rB), delete gI()[HV];
                const Vc = gI().grecaptcha;
                if (!Vc || !an(Vc)) return void Ic(hc(cB, "internal-error"));
                const uc = Vc.render;
                Vc.render = (cB, Bc) => {
                  const nc = uc(cB, Bc);
                  return this.counter++, nc
                }, this.hostLanguage = Bc, nc(Vc)
              };
              LB(`https://www.google.com/recaptcha/api.js??${(0,Vc.fb)({onload:HV,render:"explicit",hl:Bc})}`).catch((() => {
                clearTimeout(rB), Ic(hc(cB, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(cB) {
            var Bc;
            return !!(null === (Bc = gI().grecaptcha) || void 0 === Bc ? void 0 : Bc.render) && (cB === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class jI {
          async load(cB) {
            return new kI(cB)
          }
          clearedOneInstance() {}
        }
        const RV = "recaptcha",
          iI = {
            theme: "light",
            type: "image"
          };
        class KV {
          constructor(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, iI),
              nc = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Bc, this.type = RV, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = CB(nc), this.isInvisible = "invisible" === this.parameters.size, Lc("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Vc = "string" === typeof cB ? document.getElementById(cB) : cB;
            Lc(Vc, this.auth, "argument-error"), this.container = Vc, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new jI : new JV, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const cB = await this.render(),
              Bc = this.getAssertedRecaptcha(),
              nc = Bc.getResponse(cB);
            return nc || new Promise((nc => {
              const Vc = cB => {
                cB && (this.tokenChangeListeners.delete(Vc), nc(cB))
              };
              this.tokenChangeListeners.add(Vc), this.isInvisible && Bc.execute(cB)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (cB) {
              return Promise.reject(cB)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((cB => {
              throw this.renderPromise = null, cB
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((cB => {
              this.container.removeChild(cB)
            }))
          }
          validateStartingState() {
            Lc(!this.parameters.sitekey, this.auth, "argument-error"), Lc(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Lc("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(cB) {
            return Bc => {
              if (this.tokenChangeListeners.forEach((cB => cB(Bc))), "function" === typeof cB) cB(Bc);
              else if ("string" === typeof cB) {
                const nc = gI()[cB];
                "function" === typeof nc && nc(Bc)
              }
            }
          }
          assertNotDestroyed() {
            Lc(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let cB = this.container;
              if (!this.isInvisible) {
                const Bc = document.createElement("div");
                cB.appendChild(Bc), cB = Bc
              }
              this.widgetId = this.getAssertedRecaptcha().render(cB, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Lc(Zc() && !UV(), this.auth, "internal-error"), await
            function() {
              let cB = null;
              return new Promise((Bc => {
                "complete" !== document.readyState ? (cB = () => Bc(), window.addEventListener("load", cB)) : Bc()
              })).catch((Bc => {
                throw cB && window.removeEventListener("load", cB), Bc
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const cB = await async function(cB) {
              return (await Wc(cB, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Lc(cB, this.auth, "internal-error"), this.parameters.sitekey = cB
          }
          getAssertedRecaptcha() {
            return Lc(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class xI {
          constructor(cB, Bc) {
            this.verificationId = cB, this.onConfirmation = Bc
          }
          confirm(cB) {
            const Bc = dB._fromVerification(this.verificationId, cB);
            return this.onConfirmation(Bc)
          }
        }
        async function dV(cB, Bc, nc) {
          const Ic = CB(cB),
            rB = await cr(Ic, Bc, (0, Vc.N)(nc));
          return new xI(rB, (cB => aV(Ic, cB)))
        }
        async function AV(cB, Bc, nc) {
          const Ic = (0, Vc.N)(cB);
          await zV(!1, Ic, "phone");
          const rB = await cr(Ic.auth, Bc, (0, Vc.N)(nc));
          return new xI(rB, (cB => lnc(Ic, cB)))
        }
        async function GV(cB, Bc, nc) {
          const Ic = (0, Vc.N)(cB),
            rB = await cr(Ic.auth, Bc, (0, Vc.N)(nc));
          return new xI(rB, (cB => Yn(Ic, cB)))
        }
        async function cr(cB, Bc, nc) {
          var Vc;
          const Ic = await nc.verify();
          try {
            let rB;
            if (Lc("string" === typeof Ic, cB, "argument-error"), Lc(nc.type === RV, cB, "argument-error"), rB = "string" === typeof Bc ? {
                phoneNumber: Bc
              } : Bc, "session" in rB) {
              const Bc = rB.session;
              if ("phoneNumber" in rB) {
                Lc("enroll" === Bc.type, cB, "internal-error");
                const nc = await
                function(cB, Bc) {
                  return Wc(cB, "POST", "/v2/accounts/mfaEnrollment:start", oc(cB, Bc))
                }(cB, {
                  idToken: Bc.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: rB.phoneNumber,
                    recaptchaToken: Ic
                  }
                });
                return nc.phoneSessionInfo.sessionInfo
              } {
                Lc("signin" === Bc.type, cB, "internal-error");
                const nc = (null === (Vc = rB.multiFactorHint) || void 0 === Vc ? void 0 : Vc.uid) || rB.multiFactorUid;
                Lc(nc, cB, "missing-multi-factor-info");
                const uc = await
                function(cB, Bc) {
                  return Wc(cB, "POST", "/v2/accounts/mfaSignIn:start", oc(cB, Bc))
                }(cB, {
                  mfaPendingCredential: Bc.credential,
                  mfaEnrollmentId: nc,
                  phoneSignInInfo: {
                    recaptchaToken: Ic
                  }
                });
                return uc.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Bc
              } = await async function(cB, Bc) {
                return Wc(cB, "POST", "/v1/accounts:sendVerificationCode", oc(cB, Bc))
              }(cB, {
                phoneNumber: rB.phoneNumber,
                recaptchaToken: Ic
              });
              return Bc
            }
          } finally {
            nc._reset()
          }
        }
        async function BI(cB, Bc) {
          await yV((0, Vc.N)(cB), Bc)
        }
        class nI {
          constructor(cB) {
            this.providerId = nI.PROVIDER_ID, this.auth = CB(cB)
          }
          verifyPhoneNumber(cB, Bc) {
            return cr(this.auth, cB, (0, Vc.N)(Bc))
          }
          static credential(cB, Bc) {
            return dB._fromVerification(cB, Bc)
          }
          static credentialFromResult(cB) {
            const Bc = cB;
            return nI.credentialFromTaggedObject(Bc)
          }
          static credentialFromError(cB) {
            return nI.credentialFromTaggedObject(cB.customData || {})
          }
          static credentialFromTaggedObject(cB) {
            let {
              _tokenResponse: Bc
            } = cB;
            if (!Bc) return null;
            const {
              phoneNumber: nc,
              temporaryProof: Vc
            } = Bc;
            return nc && Vc ? dB._fromTokenResponse(nc, Vc) : null
          }
        }

        function VI(cB, Bc) {
          return Bc ? rn(Bc) : (Lc(cB._popupRedirectResolver, cB, "argument-error"), cB._popupRedirectResolver)
        }
        nI.PROVIDER_ID = "phone", nI.PHONE_SIGN_IN_METHOD = "phone";
        class II extends WB {
          constructor(cB) {
            super("custom", "custom"), this.params = cB
          }
          _getIdTokenResponse(cB) {
            return RB(cB, this._buildIdpRequest())
          }
          _linkToIdToken(cB, Bc) {
            return RB(cB, this._buildIdpRequest(Bc))
          }
          _getReauthenticationResolver(cB) {
            return RB(cB, this._buildIdpRequest())
          }
          _buildIdpRequest(cB) {
            const Bc = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return cB && (Bc.idToken = cB), Bc
          }
        }

        function rr(cB) {
          return hn(cB.auth, new II(cB), cB.bypassAuthState)
        }

        function uI(cB) {
          const {
            auth: Bc,
            user: nc
          } = cB;
          return Lc(nc, Bc, "internal-error"), pn(nc, new II(cB), cB.bypassAuthState)
        }
        async function sI(cB) {
          const {
            auth: Bc,
            user: nc
          } = cB;
          return Lc(nc, Bc, "internal-error"), yV(nc, new II(cB), cB.bypassAuthState)
        }
        class MI {
          constructor(cB, Bc, nc, Vc) {
            let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = cB, this.resolver = nc, this.user = Vc, this.bypassAuthState = Ic, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Bc) ? Bc : [Bc]
          }
          execute() {
            return new Promise((async (cB, Bc) => {
              this.pendingPromise = {
                resolve: cB,
                reject: Bc
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (nc) {
                this.reject(nc)
              }
            }))
          }
          async onAuthEvent(cB) {
            const {
              urlResponse: Bc,
              sessionId: nc,
              postBody: Vc,
              tenantId: Ic,
              error: rB,
              type: uc
            } = cB;
            if (rB) return void this.reject(rB);
            const sc = {
              auth: this.auth,
              requestUri: Bc,
              sessionId: nc,
              tenantId: Ic || void 0,
              postBody: Vc || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(uc)(sc))
            } catch (Mc) {
              this.reject(Mc)
            }
          }
          onError(cB) {
            this.reject(cB)
          }
          getIdpTask(cB) {
            switch (cB) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return rr;
              case "linkViaPopup":
              case "linkViaRedirect":
                return sI;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return uI;
              default:
                pc(this.auth, "internal-error")
            }
          }
          resolve(cB) {
            Uc(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(cB), this.unregisterAndCleanUp()
          }
          reject(cB) {
            Uc(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(cB), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const PI = new Cc(2e3, 1e4);
        async function qr(cB, Bc, nc) {
          const Vc = CB(cB);
          lc(cB, Bc, Bn);
          const Ic = VI(Vc, nc);
          return new fI(Vc, "signInViaPopup", Bc, Ic).executeNotNull()
        }
        async function OI(cB, Bc, nc) {
          const Ic = (0, Vc.N)(cB);
          lc(Ic.auth, Bc, Bn);
          const rB = VI(Ic.auth, nc);
          return new fI(Ic.auth, "reauthViaPopup", Bc, rB, Ic).executeNotNull()
        }
        async function TI(cB, Bc, nc) {
          const Ic = (0, Vc.N)(cB);
          lc(Ic.auth, Bc, Bn);
          const rB = VI(Ic.auth, nc);
          return new fI(Ic.auth, "linkViaPopup", Bc, rB, Ic).executeNotNull()
        }
        class fI extends MI {
          constructor(cB, Bc, nc, Vc, Ic) {
            super(cB, Bc, Vc, Ic), this.provider = nc, this.authWindow = null, this.pollId = null, fI.currentPopupAction && fI.currentPopupAction.cancel(), fI.currentPopupAction = this
          }
          async executeNotNull() {
            const cB = await this.execute();
            return Lc(cB, this.auth, "internal-error"), cB
          }
          async onExecution() {
            Uc(1 === this.filter.length, "Popup operations only handle one event");
            const cB = YV();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], cB), this.authWindow.associatedEvent = cB, this.resolver._originValidation(this.auth).catch((cB => {
              this.reject(cB)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (cB => {
              cB || this.reject(hc(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var cB;
            return (null === (cB = this.authWindow) || void 0 === cB ? void 0 : cB.associatedEvent) || null
          }
          cancel() {
            this.reject(hc(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, fI.currentPopupAction = null
          }
          pollUserCancellation() {
            const cB = () => {
              var Bc, nc;
              (null === (nc = null === (Bc = this.authWindow) || void 0 === Bc ? void 0 : Bc.window) || void 0 === nc ? void 0 : nc.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(hc(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(cB, PI.get())
            };
            cB()
          }
        }
        fI.currentPopupAction = null;
        const mr = "pendingRedirect",
          eI = new Map;
        class tr extends MI {
          constructor(cB, Bc) {
            super(cB, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Bc, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let cB = eI.get(this.auth._key());
            if (!cB) {
              try {
                const Bc = await async function(cB, Bc) {
                  const nc = pI(Bc),
                    Vc = zr(cB);
                  if (!await Vc._isAvailable()) return !1;
                  const Ic = "true" === await Vc._get(nc);
                  return await Vc._remove(nc), Ic
                }(this.resolver, this.auth) ? await super.execute() : null;
                cB = () => Promise.resolve(Bc)
              } catch (Bc) {
                cB = () => Promise.reject(Bc)
              }
              eI.set(this.auth._key(), cB)
            }
            return this.bypassAuthState || eI.set(this.auth._key(), (() => Promise.resolve(null))), cB()
          }
          async onAuthEvent(cB) {
            if ("signInViaRedirect" === cB.type) return super.onAuthEvent(cB);
            if ("unknown" !== cB.type) {
              if (cB.eventId) {
                const Bc = await this.auth._redirectUserForId(cB.eventId);
                if (Bc) return this.user = Bc, super.onAuthEvent(cB);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function SI(cB, Bc) {
          return zr(cB)._set(pI(Bc), "true")
        }

        function yr(cB, Bc) {
          eI.set(cB._key(), Bc)
        }

        function zr(cB) {
          return rn(cB._redirectPersistence)
        }

        function pI(cB) {
          return MB(mr, cB.config.apiKey, cB.name)
        }

        function hI(cB, Bc, nc) {
          return async function(cB, Bc, nc) {
            const Vc = CB(cB);
            lc(cB, Bc, Bn), await Vc._initializationPromise;
            const Ic = VI(Vc, nc);
            return await SI(Ic, Vc), Ic._openRedirect(Vc, Bc, "signInViaRedirect")
          }(cB, Bc, nc)
        }

        function ar(cB, Bc, nc) {
          return async function(cB, Bc, nc) {
            const Ic = (0, Vc.N)(cB);
            lc(Ic.auth, Bc, Bn), await Ic.auth._initializationPromise;
            const rB = VI(Ic.auth, nc);
            await SI(rB, Ic.auth);
            const uc = await gr(Ic);
            return rB._openRedirect(Ic.auth, Bc, "reauthViaRedirect", uc)
          }(cB, Bc, nc)
        }

        function lI(cB, Bc, nc) {
          return async function(cB, Bc, nc) {
            const Ic = (0, Vc.N)(cB);
            lc(Ic.auth, Bc, Bn), await Ic.auth._initializationPromise;
            const rB = VI(Ic.auth, nc);
            await zV(!1, Ic, Bc.providerId), await SI(rB, Ic.auth);
            const uc = await gr(Ic);
            return rB._openRedirect(Ic.auth, Bc, "linkViaRedirect", uc)
          }(cB, Bc, nc)
        }
        async function YI(cB, Bc) {
          return await CB(cB)._initializationPromise, LI(cB, Bc, !1)
        }
        async function LI(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Vc = CB(cB),
            Ic = VI(Vc, Bc),
            rB = new tr(Vc, Ic, nc),
            uc = await rB.execute();
          return uc && !nc && (delete uc.user._redirectEventId, await Vc._persistUserIfCurrent(uc.user), await Vc._setRedirectUser(null, Bc)), uc
        }
        async function gr(cB) {
          const Bc = YV(`${cB.uid}:::`);
          return cB._redirectEventId = Bc, await cB.auth._setRedirectUser(cB), await cB.auth._persistUserIfCurrent(cB), Bc
        }
        class UI {
          constructor(cB) {
            this.auth = cB, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(cB) {
            this.consumers.add(cB), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, cB) && (this.sendToConsumer(this.queuedRedirectEvent, cB), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(cB) {
            this.consumers.delete(cB)
          }
          onEvent(cB) {
            if (this.hasEventBeenHandled(cB)) return !1;
            let Bc = !1;
            return this.consumers.forEach((nc => {
              this.isEventForConsumer(cB, nc) && (Bc = !0, this.sendToConsumer(cB, nc), this.saveEventToCache(cB))
            })), this.hasHandledPotentialRedirect || ! function(cB) {
              switch (cB.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return ZI(cB);
                default:
                  return !1
              }
            }(cB) || (this.hasHandledPotentialRedirect = !0, Bc || (this.queuedRedirectEvent = cB, Bc = !0)), Bc
          }
          sendToConsumer(cB, Bc) {
            var nc;
            if (cB.error && !ZI(cB)) {
              const Vc = (null === (nc = cB.error.code) || void 0 === nc ? void 0 : nc.split("auth/")[1]) || "internal-error";
              Bc.onError(hc(this.auth, Vc))
            } else Bc.onAuthEvent(cB)
          }
          isEventForConsumer(cB, Bc) {
            const nc = null === Bc.eventId || !!cB.eventId && cB.eventId === Bc.eventId;
            return Bc.filter.includes(cB.type) && nc
          }
          hasEventBeenHandled(cB) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(br(cB))
          }
          saveEventToCache(cB) {
            this.cachedEventUids.add(br(cB)), this.lastProcessedEventTime = Date.now()
          }
        }

        function br(cB) {
          return [cB.type, cB.eventId, cB.sessionId, cB.tenantId].filter((cB => cB)).join("-")
        }

        function ZI(cB) {
          let {
            type: Bc,
            error: nc
          } = cB;
          return "unknown" === Bc && "auth/no-auth-event" === (null === nc || void 0 === nc ? void 0 : nc.code)
        }
        const QI = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          CI = /^https?/;
        async function vr(cB) {
          if (cB.config.emulator) return;
          const {
            authorizedDomains: Bc
          } = await async function(cB) {
            return Wc(cB, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(cB);
          for (const Vc of Bc) try {
            if (DI(Vc)) return
          } catch (nc) {}
          pc(cB, "unauthorized-domain")
        }

        function DI(cB) {
          const Bc = bB(),
            {
              protocol: nc,
              hostname: Vc
            } = new URL(Bc);
          if (cB.startsWith("chrome-extension://")) {
            const Ic = new URL(cB);
            return "" === Ic.hostname && "" === Vc ? "chrome-extension:" === nc && cB.replace("chrome-extension://", "") === Bc.replace("chrome-extension://", "") : "chrome-extension:" === nc && Ic.hostname === Vc
          }
          if (!CI.test(nc)) return !1;
          if (QI.test(cB)) return Vc === cB;
          const Ic = cB.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Ic + "|" + Ic + ")$", "i").test(Vc)
        }
        const NI = new Cc(3e4, 6e4);

        function EI() {
          const cB = gI().___jsl;
          if (null === cB || void 0 === cB ? void 0 : cB.H)
            for (const Bc of Object.keys(cB.H))
              if (cB.H[Bc].r = cB.H[Bc].r || [], cB.H[Bc].L = cB.H[Bc].L || [], cB.H[Bc].r = [...cB.H[Bc].L], cB.CP)
                for (let nc = 0; nc < cB.CP.length; nc++) cB.CP[nc] = null
        }
        let oI = null;

        function WI(cB) {
          return oI = oI || function(cB) {
            return new Promise(((Bc, nc) => {
              var Vc, Ic, rB;

              function uc() {
                EI(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Bc(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    EI(), nc(hc(cB, "network-request-failed"))
                  },
                  timeout: NI.get()
                })
              }
              if (null === (Ic = null === (Vc = gI().gapi) || void 0 === Vc ? void 0 : Vc.iframes) || void 0 === Ic ? void 0 : Ic.Iframe) Bc(gapi.iframes.getContext());
              else {
                if (!(null === (rB = gI().gapi) || void 0 === rB ? void 0 : rB.load)) {
                  const Bc = gn("iframefcb");
                  return gI()[Bc] = () => {
                    gapi.load ? uc() : nc(hc(cB, "network-request-failed"))
                  }, LB(`https://apis.google.com/js/api.js?onload=${Bc}`).catch((cB => nc(cB)))
                }
                uc()
              }
            })).catch((cB => {
              throw oI = null, cB
            }))
          }(cB), oI
        }
        const wI = new Cc(5e3, 15e3),
          kr = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          XI = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function HI(cB) {
          const Bc = cB.config;
          Lc(Bc.authDomain, cB, "auth-domain-config-required");
          const nc = Bc.emulator ? vB(Bc, "emulator/auth/iframe") : `https://${cB.config.authDomain}/__/auth/iframe`,
            rB = {
              apiKey: Bc.apiKey,
              appName: cB.name,
              v: Ic.d
            },
            uc = XI.get(cB.config.apiHost);
          uc && (rB.eid = uc);
          const sc = cB._getFrameworks();
          return sc.length && (rB.fw = sc.join(",")), `${nc}?${(0,Vc.fb)(rB).slice(1)}`
        }
        const FI = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class JI {
          constructor(cB) {
            this.window = cB, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (cB) {}
          }
        }

        function jr(cB, Bc, nc) {
          let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const uc = Math.max((window.screen.availHeight - rB) / 2, 0).toString(),
            sc = Math.max((window.screen.availWidth - Ic) / 2, 0).toString();
          let Mc = "";
          const Pc = Object.assign(Object.assign({}, FI), {
              width: Ic.toString(),
              height: rB.toString(),
              top: uc,
              left: sc
            }),
            qB = (0, Vc.P)().toLowerCase();
          nc && (Mc = fB(qB) ? "_blank" : nc), OB(qB) && (Bc = Bc || "http://localhost", Pc.scrollbars = "yes");
          const Oc = Object.entries(Pc).reduce(((cB, Bc) => {
            let [nc, Vc] = Bc;
            return `${cB}${nc}=${Vc},`
          }), "");
          if (function() {
              var cB;
              return yn(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vc.P)()) && !!(null === (cB = window.navigator) || void 0 === cB ? void 0 : cB.standalone)
            }(qB) && "_self" !== Mc) return function(cB, Bc) {
            const nc = document.createElement("a");
            nc.href = cB, nc.target = Bc;
            const Vc = document.createEvent("MouseEvent");
            Vc.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), nc.dispatchEvent(Vc)
          }(Bc || "", Mc), new JI(null);
          const Tc = window.open(Bc || "", Mc, Oc);
          Lc(Tc, cB, "popup-blocked");
          try {
            Tc.focus()
          } catch (fc) {}
          return new JI(Tc)
        }
        const RI = "__/auth/handler",
          ir = "emulator/auth/handler",
          KI = encodeURIComponent("fac");
        async function xr(cB, Bc, nc, rB, uc, sc) {
            Lc(cB.config.authDomain, cB, "auth-domain-config-required"), Lc(cB.config.apiKey, cB, "invalid-api-key");
            const Mc = {
              apiKey: cB.config.apiKey,
              appName: cB.name,
              authType: nc,
              redirectUrl: rB,
              v: Ic.d,
              eventId: uc
            };
            if (Bc instanceof Bn) {
              Bc.setDefaultLanguage(cB.languageCode), Mc.providerId = Bc.providerId || "", (0, Vc.S)(Bc.getCustomParameters()) || (Mc.customParameters = JSON.stringify(Bc.getCustomParameters()));
              for (const [cB, Bc] of Object.entries(sc || {})) Mc[cB] = Bc
            }
            if (Bc instanceof nn) {
              const cB = Bc.getScopes().filter((cB => "" !== cB));
              cB.length > 0 && (Mc.scopes = cB.join(","))
            }
            cB.tenantId && (Mc.tid = cB.tenantId);
            const Pc = Mc;
            for (const Vc of Object.keys(Pc)) void 0 === Pc[Vc] && delete Pc[Vc];
            const qB = await cB._getAppCheckToken(),
              Oc = qB ? `#${KI}=${encodeURIComponent(qB)}` : "";
            return `${function(cB){let{config:Bc}=cB;if(!Bc.emulator)return`
            https: //${Bc.authDomain}/${RI}`;return vB(Bc,ir)}(cB)}?${(0,Vc.fb)(Pc).slice(1)}${Oc}`}const dI="webStorageSupport";const AI=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aI,this._completeRedirectFn=LI,this._overrideRedirectResult=yr}async _openPopup(cB,Bc,nc,Vc){var Ic;Uc(null===(Ic=this.eventManagers[cB._key()])||void 0===Ic?void 0:Ic.manager,"_initialize() not called before _openPopup()");return jr(cB,await xr(cB,Bc,nc,bB(),Vc),YV())}async _openRedirect(cB,Bc,nc,Vc){await this._originValidation(cB);return function(cB){gI().location.href=cB}(await xr(cB,Bc,nc,bB(),Vc)),new Promise((()=>{}))}_initialize(cB){const Bc=cB._key();if(this.eventManagers[Bc]){const{manager:cB,promise:nc}=this.eventManagers[Bc];return cB?Promise.resolve(cB):(Uc(nc,"If manager is not set, promise should be"),nc)}const nc=this.initAndGetManager(cB);return this.eventManagers[Bc]={promise:nc},nc.catch((()=>{delete this.eventManagers[Bc]})),nc}async initAndGetManager(cB){const Bc=await async function(cB){const Bc=await WI(cB),nc=gI().gapi;return Lc(nc,cB,"internal-error"),Bc.open({where:document.body,url:HI(cB),messageHandlersFilter:nc.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kr,dontclear:!0},(Bc=>new Promise((async(nc,Vc)=>{await Bc.restyle({setHideOnLeave:!1});const Ic=hc(cB,"network-request-failed"),rB=gI().setTimeout((()=>{Vc(Ic)}),wI.get());function uc(){gI().clearTimeout(rB),nc(Bc)}Bc.ping(uc).then(uc,(()=>{Vc(Ic)}))}))))}(cB),nc=new UI(cB);return Bc.register("authEvent",(Bc=>{Lc(null===Bc||void 0===Bc?void 0:Bc.authEvent,cB,"invalid-auth-event");return{status:nc.onEvent(Bc.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[cB._key()]={manager:nc},this.iframes[cB._key()]=Bc,nc}_isIframeWebStorageSupported(cB,Bc){this.iframes[cB._key()].send(dI,{type:dI},(nc=>{var Vc;const Ic=null===(Vc=null===nc||void 0===nc?void 0:nc[0])||void 0===Vc?void 0:Vc[dI];void 0!==Ic&&Bc(!!Ic),pc(cB,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(cB){const Bc=cB._key();return this.originValidationPromises[Bc]||(this.originValidationPromises[Bc]=vr(cB)),this.originValidationPromises[Bc]}get _shouldInitProactively(){return zn()||TB()||yn()}};class GI{constructor(cB){this.factorId=cB}_process(cB,Bc,nc){switch(Bc.type){case"enroll":return this._finalizeEnroll(cB,Bc.credential,nc);case"signin":return this._finalizeSignIn(cB,Bc.credential);default:return gB("unexpected MultiFactorSessionType")}}}class cu extends GI{constructor(cB){super("phone"),this.credential=cB}static _fromCredential(cB){return new cu(cB)}_finalizeEnroll(cB,Bc,nc){return function(cB,Bc){return Wc(cB,"POST","/v2/accounts/mfaEnrollment:finalize",oc(cB,Bc))}(cB,{idToken:Bc,displayName:nc,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(cB,Bc){return function(cB,Bc){return Wc(cB,"POST","/v2/accounts/mfaSignIn:finalize",oc(cB,Bc))}(cB,{mfaPendingCredential:Bc,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Br{constructor(){}static assertion(cB){return cu._fromCredential(cB)}}Br.FACTOR_ID="phone";class nr{static assertionForEnrollment(cB,Bc){return Vr._fromSecret(cB,Bc)}static assertionForSignIn(cB,Bc){return Vr._fromEnrollmentId(cB,Bc)}static async generateSecret(cB){const Bc=cB;Lc("undefined"!==typeof Bc.auth,"internal-error");const nc=await(Vc=Bc.auth,Ic={idToken:Bc.credential,totpEnrollmentInfo:{}},Wc(Vc,"POST","/v2/accounts/mfaEnrollment:start",oc(Vc,Ic)));var Vc,Ic;return Ir._fromStartTotpMfaEnrollmentResponse(nc,Bc.auth)}}nr.FACTOR_ID="totp";class Vr extends GI{constructor(cB,Bc,nc){super("totp"),this.otp=cB,this.enrollmentId=Bc,this.secret=nc}static _fromSecret(cB,Bc){return new Vr(Bc,void 0,cB)}static _fromEnrollmentId(cB,Bc){return new Vr(Bc,cB)}async _finalizeEnroll(cB,Bc,nc){return Lc("undefined"!==typeof this.secret,cB,"argument-error"),function(cB,Bc){return Wc(cB,"POST","/v2/accounts/mfaEnrollment:finalize",oc(cB,Bc))}(cB,{idToken:Bc,displayName:nc,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(cB,Bc){Lc(void 0!==this.enrollmentId&&void 0!==this.otp,cB,"argument-error");const nc={verificationCode:this.otp};return function(cB,Bc){return Wc(cB,"POST","/v2/accounts/mfaSignIn:finalize",oc(cB,Bc))}(cB,{mfaPendingCredential:Bc,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:nc})}}class Ir{constructor(cB,Bc,nc,Vc,Ic,rB,uc){this.sessionInfo=rB,this.auth=uc,this.secretKey=cB,this.hashingAlgorithm=Bc,this.codeLength=nc,this.codeIntervalSeconds=Vc,this.enrollmentCompletionDeadline=Ic}static _fromStartTotpMfaEnrollmentResponse(cB,Bc){return new Ir(cB.totpSessionInfo.sharedSecretKey,cB.totpSessionInfo.hashingAlgorithm,cB.totpSessionInfo.verificationCodeLength,cB.totpSessionInfo.periodSec,new Date(cB.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),cB.totpSessionInfo.sessionInfo,Bc)}_makeTotpVerificationInfo(cB){return{sessionInfo:this.sessionInfo,verificationCode:cB}}generateQrCodeUrl(cB,Bc){var nc;let Vc=!1;return(ru(cB)||ru(Bc))&&(Vc=!0),Vc&&(ru(cB)&&(cB=(null===(nc=this.auth.currentUser)||void 0===nc?void 0:nc.email)||"unknownuser"),ru(Bc)&&(Bc=this.auth.name)),`otpauth://totp/${Bc}:${cB}?secret=${this.secretKey}&issuer=${Bc}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ru(cB){return"undefined"===typeof cB||0===(null===cB||void 0===cB?void 0:cB.length)}var ur="@firebase/auth",sr="0.23.2";class Mr{constructor(cB){this.auth=cB,this.internalListeners=new Map}getUid(){var cB;return this.assertAuthConfigured(),(null===(cB=this.auth.currentUser)||void 0===cB?void 0:cB.uid)||null}async getToken(cB){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(cB)}}addAuthTokenListener(cB){if(this.assertAuthConfigured(),this.internalListeners.has(cB))return;const Bc=this.auth.onIdTokenChanged((Bc=>{cB((null===Bc||void 0===Bc?void 0:Bc.stsTokenManager.accessToken)||null)}));this.internalListeners.set(cB,Bc),this.updateProactiveRefresh()}removeAuthTokenListener(cB){this.assertAuthConfigured();const Bc=this.internalListeners.get(cB);Bc&&(this.internalListeners.delete(cB),Bc(),this.updateProactiveRefresh())}assertAuthConfigured(){Lc(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const Pr=(0,Vc.L)("authIdTokenMaxAge")||300;let qu=null;const Or=cB=>async Bc=>{const nc=Bc&&await Bc.getIdTokenResult(),Vc=nc&&((new Date).getTime()-Date.parse(nc.issuedAtTime))/1e3;if(Vc&&Vc>Pr)return;const Ic=null===nc||void 0===nc?void 0:nc.token;qu!==Ic&&(qu=Ic,await fetch(cB,{method:Ic?"POST":"DELETE",headers:Ic?{Authorization:`Bearer ${Ic}`}:{}}))};function Tr(){let cB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Ic.C)();const Bc=(0,Ic.r)(cB,"auth");if(Bc.isInitialized())return Bc.getImmediate();const nc=DB(cB,{popupRedirectResolver:AI,persistence:[WV,pV,aI]}),rB=(0,Vc.L)("authTokenSyncURL");if(rB){const cB=Or(rB);rI(nc,cB,(()=>cB(nc.currentUser))),IV(nc,(Bc=>cB(Bc)))}const uc=(0,Vc.J)("auth");return uc&&NB(nc,`http://${uc}`),nc}var fr;fr="Browser",(0,Ic.s)(new sc.f("auth",((cB,Bc)=>{let{options:nc}=Bc;const Vc=cB.getProvider("app").getImmediate(),Ic=cB.getProvider("heartbeat"),rB=cB.getProvider("app-check-internal"),{apiKey:uc,authDomain:sc}=Vc.options;Lc(uc&&!uc.includes(":"),"invalid-api-key",{appName:Vc.name});const Mc={apiKey:uc,authDomain:sc,clientPlatform:fr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pB(fr)},Pc=new QB(Vc,Ic,rB,Mc);return function(cB,Bc){const nc=(null===Bc||void 0===Bc?void 0:Bc.persistence)||[],Vc=(Array.isArray(nc)?nc:[nc]).map(rn);(null===Bc||void 0===Bc?void 0:Bc.errorMap)&&cB._updateErrorMap(Bc.errorMap),cB._initializeWithPersistence(Vc,null===Bc||void 0===Bc?void 0:Bc.popupRedirectResolver)}(Pc,nc),Pc}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((cB,Bc,nc)=>{cB.getProvider("auth-internal").initialize()}))),(0,Ic.s)(new sc.f("auth-internal",(cB=>(cB=>new Mr(cB))(CB(cB.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Ic.F)(ur,sr,function(cB){switch(cB){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(fr)),(0,Ic.F)(ur,sr,"esm2017")}};Object.freeze(modules);for(const cB in modules)Object.freeze(modules[cB]);