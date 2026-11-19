/*! For license information please see wd13r.258.914c814e.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
    39645: (DD, CD, cD) => {
        cD.r(CD), cD.d(CD, {
          ActionCodeOperation: () => yD,
          ActionCodeURL: () => rC,
          AuthCredential: () => TC,
          AuthErrorCodes: () => vD,
          EmailAuthCredential: () => sC,
          EmailAuthProvider: () => FC,
          FacebookAuthProvider: () => Ic,
          FactorId: () => QD,
          GithubAuthProvider: () => ic,
          GoogleAuthProvider: () => pc,
          OAuthCredential: () => eC,
          OAuthProvider: () => cc,
          OperationType: () => BD,
          PhoneAuthCredential: () => hC,
          PhoneAuthProvider: () => Cp,
          PhoneMultiFactorGenerator: () => Ci,
          ProviderId: () => wD,
          RecaptchaVerifier: () => eI,
          SAMLAuthProvider: () => bc,
          SignInMethod: () => SD,
          TotpMultiFactorGenerator: () => ci,
          TotpSecret: () => ii,
          TwitterAuthProvider: () => Qc,
          applyActionCode: () => ac,
          beforeAuthStateChanged: () => pI,
          browserLocalPersistence: () => gI,
          browserPopupRedirectResolver: () => Ap,
          browserSessionPersistence: () => mI,
          checkActionCode: () => Vc,
          confirmPasswordReset: () => Kc,
          connectAuthEmulator: () => jC,
          createUserWithEmailAndPassword: () => jc,
          debugErrorMap: () => tD,
          deleteUser: () => wI,
          fetchSignInMethodsForEmail: () => Rc,
          getAdditionalUserInfo: () => DI,
          getAuth: () => Mi,
          getIdToken: () => sD,
          getIdTokenResult: () => ED,
          getMultiFactorResolver: () => yI,
          getRedirectResult: () => Op,
          inMemoryPersistence: () => bC,
          indexedDBLocalPersistence: () => LI,
          initializeAuth: () => zC,
          initializeRecaptchaConfig: () => cI,
          isSignInWithEmailLink: () => Tc,
          linkWithCredential: () => nc,
          linkWithPhoneNumber: () => rI,
          linkWithPopup: () => Bp,
          linkWithRedirect: () => np,
          multiFactor: () => ZI,
          onAuthStateChanged: () => iI,
          onIdTokenChanged: () => II,
          parseActionCodeURL: () => AC,
          prodErrorMap: () => ZD,
          reauthenticateWithCredential: () => Oc,
          reauthenticateWithPhoneNumber: () => AI,
          reauthenticateWithPopup: () => Sp,
          reauthenticateWithRedirect: () => mp,
          reload: () => DC,
          sendEmailVerification: () => kc,
          sendPasswordResetEmail: () => Jc,
          sendSignInLinkToEmail: () => Lc,
          setPersistence: () => CI,
          signInAnonymously: () => yc,
          signInWithCredential: () => mc,
          signInWithCustomToken: () => Pc,
          signInWithEmailAndPassword: () => lc,
          signInWithEmailLink: () => Gc,
          signInWithPhoneNumber: () => hI,
          signInWithPopup: () => wp,
          signInWithRedirect: () => Xp,
          signOut: () => QI,
          unlink: () => oc,
          updateCurrentUser: () => bI,
          updateEmail: () => Wc,
          updatePassword: () => sc,
          updatePhoneNumber: () => Dp,
          updateProfile: () => Yc,
          useDeviceLanguage: () => fI,
          verifyBeforeUpdateEmail: () => dc,
          verifyPasswordResetCode: () => zc
        });
        var ID = cD(39634),
          pD = cD(39626);

        function iD(DD, CD) {
          var cD = {};
          for (var ID in DD) Object.prototype.hasOwnProperty.call(DD, ID) && CD.indexOf(ID) < 0 && (cD[ID] = DD[ID]);
          if (null != DD && "function" === typeof Object.getOwnPropertySymbols) {
            var pD = 0;
            for (ID = Object.getOwnPropertySymbols(DD); pD < ID.length; pD++) CD.indexOf(ID[pD]) < 0 && Object.prototype.propertyIsEnumerable.call(DD, ID[pD]) && (cD[ID[pD]] = DD[ID[pD]])
          }
          return cD
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var fD = cD(39637),
          bD = cD(39632);
        const QD = {
            PHONE: "phone",
            TOTP: "totp"
          },
          wD = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          SD = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          BD = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          yD = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function MD() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const tD = function() {
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
          ZD = MD,
          oD = new ID.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          vD = {
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
          ND = new fD.f("@firebase/auth");

        function gD(DD) {
          if (ND.logLevel <= fD.d.ERROR) {
            for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
            ND.error(`Auth (${pD.e}): ${DD}`, ...cD)
          }
        }

        function XD(DD) {
          for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
          throw PD(DD, ...cD)
        }

        function mD(DD) {
          for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
          return PD(DD, ...cD)
        }

        function nD(DD, CD, cD) {
          const pD = Object.assign(Object.assign({}, ZD()), {
            [CD]: cD
          });
          return new ID.h("auth", "Firebase", pD).create(CD, {
            appName: DD.name
          })
        }

        function OD(DD, CD, cD) {
          if (!(CD instanceof cD)) throw cD.name !== CD.constructor.name && XD(DD, "argument-error"), nD(DD, "argument-error", `Type of ${CD.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function PD(DD) {
          for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
          if ("string" !== typeof DD) {
            const CD = cD[0],
              ID = [...cD.slice(1)];
            return ID[0] && (ID[0].appName = DD.name), DD._errorFactory.create(CD, ...ID)
          }
          return oD.create(DD, ...cD)
        }

        function HD(DD, CD) {
          if (!DD) {
            for (var cD = arguments.length, ID = new Array(cD > 2 ? cD - 2 : 0), pD = 2; pD < cD; pD++) ID[pD - 2] = arguments[pD];
            throw PD(CD, ...ID)
          }
        }

        function UD(DD) {
          const CD = "INTERNAL ASSERTION FAILED: " + DD;
          throw gD(CD), new Error(CD)
        }

        function xD(DD, CD) {
          DD || UD(CD)
        }

        function qD() {
          var DD;
          return "undefined" !== typeof self && (null === (DD = self.location) || void 0 === DD ? void 0 : DD.href) || ""
        }

        function JD() {
          return "http:" === KD() || "https:" === KD()
        }

        function KD() {
          var DD;
          return "undefined" !== typeof self && (null === (DD = self.location) || void 0 === DD ? void 0 : DD.protocol) || null
        }
        class aD {
          constructor(DD, CD) {
            this.shortDelay = DD, this.longDelay = CD, xD(CD > DD, "Short delay should be less than long delay!"), this.isMobile = (0, ID.bb)() || (0, ID.fb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (JD() || (0, ID.U)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function VD(DD, CD) {
          xD(DD.emulator, "Emulator should always be set here");
          const {
            url: cD
          } = DD.emulator;
          return CD ? `${cD}${CD.startsWith("/")?CD.slice(1):CD}` : cD
        }
        class zD {
          static initialize(DD, CD, cD) {
            this.fetchImpl = DD, CD && (this.headersImpl = CD), cD && (this.responseImpl = cD)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void UD("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void UD("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void UD("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const jD = {
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
          lD = new aD(3e4, 6e4);

        function LD(DD, CD) {
          return DD.tenantId && !CD.tenantId ? Object.assign(Object.assign({}, CD), {
            tenantId: DD.tenantId
          }) : CD
        }
        async function TD(DD, CD, cD, pD) {
          return GD(DD, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let iD = {},
              fD = {};
            pD && ("GET" === CD ? fD = pD : iD = {
              body: JSON.stringify(pD)
            });
            const bD = (0, ID.kb)(Object.assign({
                key: DD.config.apiKey
              }, fD)).slice(1),
              QD = await DD._getAdditionalHeaders();
            return QD["Content-Type"] = "application/json", DD.languageCode && (QD["X-Firebase-Locale"] = DD.languageCode), zD.fetch()(kD(DD, DD.config.apiHost, cD, bD), Object.assign({
              method: CD,
              headers: QD,
              referrerPolicy: "no-referrer"
            }, iD))
          }))
        }
        async function GD(DD, CD, cD) {
          DD._canInitEmulator = !1;
          const pD = Object.assign(Object.assign({}, jD), CD);
          try {
            const CD = new dD(DD),
              ID = await Promise.race([cD(), CD.promise]);
            CD.clearNetworkTimeout();
            const iD = await ID.json();
            if ("needConfirmation" in iD) throw YD(DD, "account-exists-with-different-credential", iD);
            if (ID.ok && !("errorMessage" in iD)) return iD;
            {
              const CD = ID.ok ? iD.errorMessage : iD.error.message,
                [cD, fD] = CD.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === cD) throw YD(DD, "credential-already-in-use", iD);
              if ("EMAIL_EXISTS" === cD) throw YD(DD, "email-already-in-use", iD);
              if ("USER_DISABLED" === cD) throw YD(DD, "user-disabled", iD);
              const bD = pD[cD] || cD.toLowerCase().replace(/[_\s]+/g, "-");
              if (fD) throw nD(DD, bD, fD);
              XD(DD, bD)
            }
          } catch (iD) {
            if (iD instanceof ID.k) throw iD;
            XD(DD, "network-request-failed", {
              message: String(iD)
            })
          }
        }
        async function RD(DD, CD, cD, ID) {
          let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const iD = await TD(DD, CD, cD, ID, pD);
          return "mfaPendingCredential" in iD && XD(DD, "multi-factor-auth-required", {
            _serverResponse: iD
          }), iD
        }

        function kD(DD, CD, cD, ID) {
          const pD = `${CD}${cD}?${ID}`;
          return DD.config.emulator ? VD(DD.config, pD) : `${DD.config.apiScheme}://${pD}`
        }
        class dD {
          constructor(DD) {
            this.auth = DD, this.timer = null, this.promise = new Promise(((DD, CD) => {
              this.timer = setTimeout((() => CD(mD(this.auth, "network-request-failed"))), lD.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function YD(DD, CD, cD) {
          const ID = {
            appName: DD.name
          };
          cD.email && (ID.email = cD.email), cD.phoneNumber && (ID.phoneNumber = cD.phoneNumber);
          const pD = mD(DD, CD, ID);
          return pD.customData._tokenResponse = cD, pD
        }

        function WD(DD) {
          if (DD) try {
            const CD = new Date(Number(DD));
            if (!isNaN(CD.getTime())) return CD.toUTCString()
          } catch (CD) {}
        }

        function sD(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, ID.P)(DD).getIdToken(CD)
        }
        async function ED(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const cD = (0, ID.P)(DD),
            pD = await cD.getIdToken(CD),
            iD = uD(pD);
          HD(iD && iD.exp && iD.auth_time && iD.iat, cD.auth, "internal-error");
          const fD = "object" === typeof iD.firebase ? iD.firebase : void 0,
            bD = null === fD || void 0 === fD ? void 0 : fD.sign_in_provider;
          return {
            claims: iD,
            token: pD,
            authTime: WD(eD(iD.auth_time)),
            issuedAtTime: WD(eD(iD.iat)),
            expirationTime: WD(eD(iD.exp)),
            signInProvider: bD || null,
            signInSecondFactor: (null === fD || void 0 === fD ? void 0 : fD.sign_in_second_factor) || null
          }
        }

        function eD(DD) {
          return 1e3 * Number(DD)
        }

        function uD(DD) {
          const [CD, cD, pD] = DD.split(".");
          if (void 0 === CD || void 0 === cD || void 0 === pD) return gD("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const DD = (0, ID.q)(cD);
            return DD ? JSON.parse(DD) : (gD("Failed to decode base64 JWT payload"), null)
          } catch (iD) {
            return gD("Caught error parsing JWT payload as JSON", null === iD || void 0 === iD ? void 0 : iD.toString()), null
          }
        }
        async function hD(DD, CD) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return CD;
          try {
            return await CD
          } catch (cD) {
            throw cD instanceof ID.k && function(DD) {
              let {
                code: CD
              } = DD;
              return "auth/user-disabled" === CD || "auth/user-token-expired" === CD
            }(cD) && DD.auth.currentUser === DD && await DD.auth.signOut(), cD
          }
        }
        class rD {
          constructor(DD) {
            this.user = DD, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(DD) {
            var CD;
            if (DD) {
              const DD = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), DD
            } {
              this.errorBackoff = 3e4;
              const DD = (null !== (CD = this.user.stsTokenManager.expirationTime) && void 0 !== CD ? CD : 0) - Date.now() - 3e5;
              return Math.max(0, DD)
            }
          }
          schedule() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const CD = this.getInterval(DD);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), CD)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (DD) {
              return void("auth/network-request-failed" === (null === DD || void 0 === DD ? void 0 : DD.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class AD {
          constructor(DD, CD) {
            this.createdAt = DD, this.lastLoginAt = CD, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = WD(this.lastLoginAt), this.creationTime = WD(this.createdAt)
          }
          _copy(DD) {
            this.createdAt = DD.createdAt, this.lastLoginAt = DD.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function FD(DD) {
          var CD;
          const cD = DD.auth,
            ID = await DD.getIdToken(),
            pD = await hD(DD, async function(DD, CD) {
              return TD(DD, "POST", "/v1/accounts:lookup", CD)
            }(cD, {
              idToken: ID
            }));
          HD(null === pD || void 0 === pD ? void 0 : pD.users.length, cD, "internal-error");
          const fD = pD.users[0];
          DD._notifyReloadListener(fD);
          const bD = (null === (CD = fD.providerUserInfo) || void 0 === CD ? void 0 : CD.length) ? fD.providerUserInfo.map((DD => {
            var {
              providerId: CD
            } = DD, cD = iD(DD, ["providerId"]);
            return {
              providerId: CD,
              uid: cD.rawId || "",
              displayName: cD.displayName || null,
              email: cD.email || null,
              phoneNumber: cD.phoneNumber || null,
              photoURL: cD.photoUrl || null
            }
          })) : [];
          const QD = (wD = DD.providerData, SD = bD, [...wD.filter((DD => !SD.some((CD => CD.providerId === DD.providerId)))), ...SD]);
          var wD, SD;
          const BD = DD.isAnonymous,
            yD = !(DD.email && fD.passwordHash) && !(null === QD || void 0 === QD ? void 0 : QD.length),
            MD = !!BD && yD,
            tD = {
              uid: fD.localId,
              displayName: fD.displayName || null,
              photoURL: fD.photoUrl || null,
              email: fD.email || null,
              emailVerified: fD.emailVerified || !1,
              phoneNumber: fD.phoneNumber || null,
              tenantId: fD.tenantId || null,
              providerData: QD,
              metadata: new AD(fD.createdAt, fD.lastLoginAt),
              isAnonymous: MD
            };
          Object.assign(DD, tD)
        }
        async function DC(DD) {
          const CD = (0, ID.P)(DD);
          await FD(CD), await CD.auth._persistUserIfCurrent(CD), CD.auth._notifyListenersIfCurrent(CD)
        }
        class CC {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(DD) {
            HD(DD.idToken, "internal-error"), HD("undefined" !== typeof DD.idToken, "internal-error"), HD("undefined" !== typeof DD.refreshToken, "internal-error");
            const CD = "expiresIn" in DD && "undefined" !== typeof DD.expiresIn ? Number(DD.expiresIn) : function(DD) {
              const CD = uD(DD);
              return HD(CD, "internal-error"), HD("undefined" !== typeof CD.exp, "internal-error"), HD("undefined" !== typeof CD.iat, "internal-error"), Number(CD.exp) - Number(CD.iat)
            }(DD.idToken);
            this.updateTokensAndExpiration(DD.idToken, DD.refreshToken, CD)
          }
          async getToken(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return HD(!this.accessToken || this.refreshToken, DD, "user-token-expired"), CD || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(DD, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(DD, CD) {
            const {
              accessToken: cD,
              refreshToken: pD,
              expiresIn: iD
            } = await async function(DD, CD) {
              const cD = await GD(DD, {}, (async () => {
                const cD = (0, ID.kb)({
                    grant_type: "refresh_token",
                    refresh_token: CD
                  }).slice(1),
                  {
                    tokenApiHost: pD,
                    apiKey: iD
                  } = DD.config,
                  fD = kD(DD, pD, "/v1/token", `key=${iD}`),
                  bD = await DD._getAdditionalHeaders();
                return bD["Content-Type"] = "application/x-www-form-urlencoded", zD.fetch()(fD, {
                  method: "POST",
                  headers: bD,
                  body: cD
                })
              }));
              return {
                accessToken: cD.access_token,
                expiresIn: cD.expires_in,
                refreshToken: cD.refresh_token
              }
            }(DD, CD);
            this.updateTokensAndExpiration(cD, pD, Number(iD))
          }
          updateTokensAndExpiration(DD, CD, cD) {
            this.refreshToken = CD || null, this.accessToken = DD || null, this.expirationTime = Date.now() + 1e3 * cD
          }
          static fromJSON(DD, CD) {
            const {
              refreshToken: cD,
              accessToken: ID,
              expirationTime: pD
            } = CD, iD = new CC;
            return cD && (HD("string" === typeof cD, "internal-error", {
              appName: DD
            }), iD.refreshToken = cD), ID && (HD("string" === typeof ID, "internal-error", {
              appName: DD
            }), iD.accessToken = ID), pD && (HD("number" === typeof pD, "internal-error", {
              appName: DD
            }), iD.expirationTime = pD), iD
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(DD) {
            this.accessToken = DD.accessToken, this.refreshToken = DD.refreshToken, this.expirationTime = DD.expirationTime
          }
          _clone() {
            return Object.assign(new CC, this.toJSON())
          }
          _performRefresh() {
            return UD("not implemented")
          }
        }

        function cC(DD, CD) {
          HD("string" === typeof DD || "undefined" === typeof DD, "internal-error", {
            appName: CD
          })
        }
        class IC {
          constructor(DD) {
            var {
              uid: CD,
              auth: cD,
              stsTokenManager: ID
            } = DD, pD = iD(DD, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new rD(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = CD, this.auth = cD, this.stsTokenManager = ID, this.accessToken = ID.accessToken, this.displayName = pD.displayName || null, this.email = pD.email || null, this.emailVerified = pD.emailVerified || !1, this.phoneNumber = pD.phoneNumber || null, this.photoURL = pD.photoURL || null, this.isAnonymous = pD.isAnonymous || !1, this.tenantId = pD.tenantId || null, this.providerData = pD.providerData ? [...pD.providerData] : [], this.metadata = new AD(pD.createdAt || void 0, pD.lastLoginAt || void 0)
          }
          async getIdToken(DD) {
            const CD = await hD(this, this.stsTokenManager.getToken(this.auth, DD));
            return HD(CD, this.auth, "internal-error"), this.accessToken !== CD && (this.accessToken = CD, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), CD
          }
          getIdTokenResult(DD) {
            return ED(this, DD)
          }
          reload() {
            return DC(this)
          }
          _assign(DD) {
            this !== DD && (HD(this.uid === DD.uid, this.auth, "internal-error"), this.displayName = DD.displayName, this.photoURL = DD.photoURL, this.email = DD.email, this.emailVerified = DD.emailVerified, this.phoneNumber = DD.phoneNumber, this.isAnonymous = DD.isAnonymous, this.tenantId = DD.tenantId, this.providerData = DD.providerData.map((DD => Object.assign({}, DD))), this.metadata._copy(DD.metadata), this.stsTokenManager._assign(DD.stsTokenManager))
          }
          _clone(DD) {
            const CD = new IC(Object.assign(Object.assign({}, this), {
              auth: DD,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return CD.metadata._copy(this.metadata), CD
          }
          _onReload(DD) {
            HD(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = DD, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(DD) {
            this.reloadListener ? this.reloadListener(DD) : this.reloadUserInfo = DD
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cD = !1;
            DD.idToken && DD.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(DD), cD = !0), CD && await FD(this), await this.auth._persistUserIfCurrent(this), cD && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const DD = await this.getIdToken();
            return await hD(this, async function(DD, CD) {
              return TD(DD, "POST", "/v1/accounts:delete", CD)
            }(this.auth, {
              idToken: DD
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
              providerData: this.providerData.map((DD => Object.assign({}, DD))),
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
          static _fromJSON(DD, CD) {
            var cD, ID, pD, iD, fD, bD, QD, wD;
            const SD = null !== (cD = CD.displayName) && void 0 !== cD ? cD : void 0,
              BD = null !== (ID = CD.email) && void 0 !== ID ? ID : void 0,
              yD = null !== (pD = CD.phoneNumber) && void 0 !== pD ? pD : void 0,
              MD = null !== (iD = CD.photoURL) && void 0 !== iD ? iD : void 0,
              tD = null !== (fD = CD.tenantId) && void 0 !== fD ? fD : void 0,
              ZD = null !== (bD = CD._redirectEventId) && void 0 !== bD ? bD : void 0,
              oD = null !== (QD = CD.createdAt) && void 0 !== QD ? QD : void 0,
              vD = null !== (wD = CD.lastLoginAt) && void 0 !== wD ? wD : void 0,
              {
                uid: ND,
                emailVerified: gD,
                isAnonymous: XD,
                providerData: mD,
                stsTokenManager: nD
              } = CD;
            HD(ND && nD, DD, "internal-error");
            const OD = CC.fromJSON(this.name, nD);
            HD("string" === typeof ND, DD, "internal-error"), cC(SD, DD.name), cC(BD, DD.name), HD("boolean" === typeof gD, DD, "internal-error"), HD("boolean" === typeof XD, DD, "internal-error"), cC(yD, DD.name), cC(MD, DD.name), cC(tD, DD.name), cC(ZD, DD.name), cC(oD, DD.name), cC(vD, DD.name);
            const PD = new IC({
              uid: ND,
              auth: DD,
              email: BD,
              emailVerified: gD,
              displayName: SD,
              isAnonymous: XD,
              photoURL: MD,
              phoneNumber: yD,
              tenantId: tD,
              stsTokenManager: OD,
              createdAt: oD,
              lastLoginAt: vD
            });
            return mD && Array.isArray(mD) && (PD.providerData = mD.map((DD => Object.assign({}, DD)))), ZD && (PD._redirectEventId = ZD), PD
          }
          static async _fromIdTokenResponse(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const ID = new CC;
            ID.updateFromServerResponse(CD);
            const pD = new IC({
              uid: CD.localId,
              auth: DD,
              stsTokenManager: ID,
              isAnonymous: cD
            });
            return await FD(pD), pD
          }
        }
        const pC = new Map;

        function iC(DD) {
          xD(DD instanceof Function, "Expected a class definition");
          let CD = pC.get(DD);
          return CD ? (xD(CD instanceof DD, "Instance stored in cache mismatched with class"), CD) : (CD = new DD, pC.set(DD, CD), CD)
        }
        class fC {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(DD, CD) {
            this.storage[DD] = CD
          }
          async _get(DD) {
            const CD = this.storage[DD];
            return void 0 === CD ? null : CD
          }
          async _remove(DD) {
            delete this.storage[DD]
          }
          _addListener(DD, CD) {}
          _removeListener(DD, CD) {}
        }
        fC.type = "NONE";
        const bC = fC;

        function QC(DD, CD, cD) {
          return `firebase:${DD}:${CD}:${cD}`
        }
        class wC {
          constructor(DD, CD, cD) {
            this.persistence = DD, this.auth = CD, this.userKey = cD;
            const {
              config: ID,
              name: pD
            } = this.auth;
            this.fullUserKey = QC(this.userKey, ID.apiKey, pD), this.fullPersistenceKey = QC("persistence", ID.apiKey, pD), this.boundEventHandler = CD._onStorageEvent.bind(CD), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(DD) {
            return this.persistence._set(this.fullUserKey, DD.toJSON())
          }
          async getCurrentUser() {
            const DD = await this.persistence._get(this.fullUserKey);
            return DD ? IC._fromJSON(this.auth, DD) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(DD) {
            if (this.persistence === DD) return;
            const CD = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = DD, CD ? this.setCurrentUser(CD) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!CD.length) return new wC(iC(bC), DD, cD);
            const ID = (await Promise.all(CD.map((async DD => {
              if (await DD._isAvailable()) return DD
            })))).filter((DD => DD));
            let pD = ID[0] || iC(bC);
            const iD = QC(cD, DD.config.apiKey, DD.name);
            let fD = null;
            for (const wD of CD) try {
              const CD = await wD._get(iD);
              if (CD) {
                const cD = IC._fromJSON(DD, CD);
                wD !== pD && (fD = cD), pD = wD;
                break
              }
            } catch (QD) {}
            const bD = ID.filter((DD => DD._shouldAllowMigration));
            return pD._shouldAllowMigration && bD.length ? (pD = bD[0], fD && await pD._set(iD, fD.toJSON()), await Promise.all(CD.map((async DD => {
              if (DD !== pD) try {
                await DD._remove(iD)
              } catch (QD) {}
            }))), new wC(pD, DD, cD)) : new wC(pD, DD, cD)
          }
        }

        function SC(DD) {
          const CD = DD.toLowerCase();
          if (CD.includes("opera/") || CD.includes("opr/") || CD.includes("opios/")) return "Opera";
          if (tC(CD)) return "IEMobile";
          if (CD.includes("msie") || CD.includes("trident/")) return "IE";
          if (CD.includes("edge/")) return "Edge";
          if (BC(CD)) return "Firefox";
          if (CD.includes("silk/")) return "Silk";
          if (oC(CD)) return "Blackberry";
          if (vC(CD)) return "Webos";
          if (yC(CD)) return "Safari";
          if ((CD.includes("chrome/") || MC(CD)) && !CD.includes("edge/")) return "Chrome";
          if (ZC(CD)) return "Android";
          {
            const CD = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              cD = DD.match(CD);
            if (2 === (null === cD || void 0 === cD ? void 0 : cD.length)) return cD[1]
          }
          return "Other"
        }

        function BC() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)();
          return /firefox\//i.test(DD)
        }

        function yC() {
          const DD = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)()).toLowerCase();
          return DD.includes("safari/") && !DD.includes("chrome/") && !DD.includes("crios/") && !DD.includes("android")
        }

        function MC() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)();
          return /crios\//i.test(DD)
        }

        function tC() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)();
          return /iemobile/i.test(DD)
        }

        function ZC() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)();
          return /android/i.test(DD)
        }

        function oC() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)();
          return /blackberry/i.test(DD)
        }

        function vC() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)();
          return /webos/i.test(DD)
        }

        function NC() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)();
          return /iphone|ipad|ipod/i.test(DD) || /macintosh/i.test(DD) && /mobile/i.test(DD)
        }

        function gC() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)();
          return NC(DD) || ZC(DD) || vC(DD) || oC(DD) || /windows phone/i.test(DD) || tC(DD)
        }

        function XC(DD) {
          let CD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (DD) {
            case "Browser":
              CD = SC((0, ID.S)());
              break;
            case "Worker":
              CD = `${SC((0,ID.S)())}-${DD}`;
              break;
            default:
              CD = DD
          }
          const iD = cD.length ? cD.join(",") : "FirebaseCore-web";
          return `${CD}/JsCore/${pD.e}/${iD}`
        }
        async function mC(DD, CD) {
          return TD(DD, "GET", "/v2/recaptchaConfig", LD(DD, CD))
        }

        function nC(DD) {
          return void 0 !== DD && void 0 !== DD.getResponse
        }

        function OC(DD) {
          return void 0 !== DD && void 0 !== DD.enterprise
        }
        class PC {
          constructor(DD) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === DD.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = DD.recaptchaKey.split("/")[3], this.emailPasswordEnabled = DD.recaptchaEnforcementState.some((DD => "EMAIL_PASSWORD_PROVIDER" === DD.provider && "OFF" !== DD.enforcementState))
          }
        }

        function HC(DD) {
          return new Promise(((CD, cD) => {
            const ID = document.createElement("script");
            ID.setAttribute("src", DD), ID.onload = CD, ID.onerror = DD => {
                const CD = mD("internal-error");
                CD.customData = DD, cD(CD)
              }, ID.type = "text/javascript", ID.charset = "UTF-8",
              function() {
                var DD, CD;
                return null !== (CD = null === (DD = document.getElementsByTagName("head")) || void 0 === DD ? void 0 : DD[0]) && void 0 !== CD ? CD : document
              }().appendChild(ID)
          }))
        }

        function UC(DD) {
          return `__${DD}${Math.floor(1e6*Math.random())}`
        }
        class xC {
          constructor(DD) {
            this.type = "recaptcha-enterprise", this.auth = aC(DD)
          }
          async verify() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function cD(CD, cD, ID) {
              const pD = window.grecaptcha;
              OC(pD) ? pD.enterprise.ready((() => {
                pD.enterprise.execute(CD, {
                  action: DD
                }).then((DD => {
                  cD(DD)
                })).catch((() => {
                  cD("NO_RECAPTCHA")
                }))
              })) : ID(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((DD, ID) => {
              (async function(DD) {
                if (!CD) {
                  if (null == DD.tenantId && null != DD._agentRecaptchaConfig) return DD._agentRecaptchaConfig.siteKey;
                  if (null != DD.tenantId && void 0 !== DD._tenantRecaptchaConfigs[DD.tenantId]) return DD._tenantRecaptchaConfigs[DD.tenantId].siteKey
                }
                return new Promise((async (CD, cD) => {
                  mC(DD, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((ID => {
                    if (void 0 !== ID.recaptchaKey) {
                      const cD = new PC(ID);
                      return null == DD.tenantId ? DD._agentRecaptchaConfig = cD : DD._tenantRecaptchaConfigs[DD.tenantId] = cD, CD(cD.siteKey)
                    }
                    cD(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((DD => {
                    cD(DD)
                  }))
                }))
              })(this.auth).then((pD => {
                if (!CD && OC(window.grecaptcha)) cD(pD, DD, ID);
                else {
                  if ("undefined" === typeof window) return void ID(new Error("RecaptchaVerifier is only supported in browser"));
                  HC("https://www.google.com/recaptcha/enterprise.js?render=" + pD).then((() => {
                    cD(pD, DD, ID)
                  })).catch((DD => {
                    ID(DD)
                  }))
                }
              })).catch((DD => {
                ID(DD)
              }))
            }))
          }
        }
        async function qC(DD, CD, cD) {
          let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const pD = new xC(DD);
          let iD;
          try {
            iD = await pD.verify(cD)
          } catch (bD) {
            iD = await pD.verify(cD, !0)
          }
          const fD = Object.assign({}, CD);
          return ID ? Object.assign(fD, {
            captchaResp: iD
          }) : Object.assign(fD, {
            captchaResponse: iD
          }), Object.assign(fD, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(fD, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), fD
        }
        class JC {
          constructor(DD) {
            this.auth = DD, this.queue = []
          }
          pushCallback(DD, CD) {
            const cD = CD => new Promise(((cD, ID) => {
              try {
                cD(DD(CD))
              } catch (pD) {
                ID(pD)
              }
            }));
            cD.onAbort = CD, this.queue.push(cD);
            const ID = this.queue.length - 1;
            return () => {
              this.queue[ID] = () => Promise.resolve()
            }
          }
          async runMiddleware(DD) {
            if (this.auth.currentUser === DD) return;
            const CD = [];
            try {
              for (const cD of this.queue) await cD(DD), cD.onAbort && CD.push(cD.onAbort)
            } catch (cD) {
              CD.reverse();
              for (const DD of CD) try {
                DD()
              } catch (ID) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === cD || void 0 === cD ? void 0 : cD.message
              })
            }
          }
        }
        class KC {
          constructor(DD, CD, cD, ID) {
            this.app = DD, this.heartbeatServiceProvider = CD, this.appCheckServiceProvider = cD, this.config = ID, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new VC(this), this.idTokenSubscription = new VC(this), this.beforeStateQueue = new JC(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = oD, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = DD.name, this.clientVersion = ID.sdkClientVersion
          }
          _initializeWithPersistence(DD, CD) {
            return CD && (this._popupRedirectResolver = iC(CD)), this._initializationPromise = this.queue((async () => {
              var cD, ID;
              if (!this._deleted && (this.persistenceManager = await wC.create(this, DD), !this._deleted)) {
                if (null === (cD = this._popupRedirectResolver) || void 0 === cD ? void 0 : cD._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (pD) {}
                await this.initializeCurrentUser(CD), this.lastNotifiedUid = (null === (ID = this.currentUser) || void 0 === ID ? void 0 : ID.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const DD = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || DD ? this.currentUser && DD && this.currentUser.uid === DD.uid ? (this._currentUser._assign(DD), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(DD, !0) : void 0
          }
          async initializeCurrentUser(DD) {
            var CD;
            const cD = await this.assertedPersistence.getCurrentUser();
            let ID = cD,
              pD = !1;
            if (DD && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const cD = null === (CD = this.redirectUser) || void 0 === CD ? void 0 : CD._redirectEventId,
                iD = null === ID || void 0 === ID ? void 0 : ID._redirectEventId,
                fD = await this.tryRedirectSignIn(DD);
              cD && cD !== iD || !(null === fD || void 0 === fD ? void 0 : fD.user) || (ID = fD.user, pD = !0)
            }
            if (!ID) return this.directlySetCurrentUser(null);
            if (!ID._redirectEventId) {
              if (pD) try {
                await this.beforeStateQueue.runMiddleware(ID)
              } catch (iD) {
                ID = cD, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(iD)))
              }
              return ID ? this.reloadAndSetCurrentUserOrClear(ID) : this.directlySetCurrentUser(null)
            }
            return HD(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === ID._redirectEventId ? this.directlySetCurrentUser(ID) : this.reloadAndSetCurrentUserOrClear(ID)
          }
          async tryRedirectSignIn(DD) {
            let CD = null;
            try {
              CD = await this._popupRedirectResolver._completeRedirectFn(this, DD, !0)
            } catch (cD) {
              await this._setRedirectUser(null)
            }
            return CD
          }
          async reloadAndSetCurrentUserOrClear(DD) {
            try {
              await FD(DD)
            } catch (CD) {
              if ("auth/network-request-failed" !== (null === CD || void 0 === CD ? void 0 : CD.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(DD)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const DD = navigator;
              return DD.languages && DD.languages[0] || DD.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(DD) {
            const CD = DD ? (0, ID.P)(DD) : null;
            return CD && HD(CD.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(CD && CD._clone(this))
          }
          async _updateCurrentUser(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return DD && HD(this.tenantId === DD.tenantId, this, "tenant-id-mismatch"), CD || await this.beforeStateQueue.runMiddleware(DD), this.queue((async () => {
              await this.directlySetCurrentUser(DD), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(DD) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(iC(DD))
            }))
          }
          async initializeRecaptchaConfig() {
            const DD = await mC(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              CD = new PC(DD);
            if (null == this.tenantId ? this._agentRecaptchaConfig = CD : this._tenantRecaptchaConfigs[this.tenantId] = CD, CD.emailPasswordEnabled) {
              new xC(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(DD) {
            this._errorFactory = new ID.h("auth", "Firebase", DD())
          }
          onAuthStateChanged(DD, CD, cD) {
            return this.registerStateListener(this.authStateSubscription, DD, CD, cD)
          }
          beforeAuthStateChanged(DD, CD) {
            return this.beforeStateQueue.pushCallback(DD, CD)
          }
          onIdTokenChanged(DD, CD, cD) {
            return this.registerStateListener(this.idTokenSubscription, DD, CD, cD)
          }
          toJSON() {
            var DD;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (DD = this._currentUser) || void 0 === DD ? void 0 : DD.toJSON()
            }
          }
          async _setRedirectUser(DD, CD) {
            const cD = await this.getOrInitRedirectPersistenceManager(CD);
            return null === DD ? cD.removeCurrentUser() : cD.setCurrentUser(DD)
          }
          async getOrInitRedirectPersistenceManager(DD) {
            if (!this.redirectPersistenceManager) {
              const CD = DD && iC(DD) || this._popupRedirectResolver;
              HD(CD, this, "argument-error"), this.redirectPersistenceManager = await wC.create(this, [iC(CD._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(DD) {
            var CD, cD;
            return this._isInitialized && await this.queue((async () => {})), (null === (CD = this._currentUser) || void 0 === CD ? void 0 : CD._redirectEventId) === DD ? this._currentUser : (null === (cD = this.redirectUser) || void 0 === cD ? void 0 : cD._redirectEventId) === DD ? this.redirectUser : null
          }
          async _persistUserIfCurrent(DD) {
            if (DD === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(DD)))
          }
          _notifyListenersIfCurrent(DD) {
            DD === this.currentUser && this.notifyAuthListeners()
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
            var DD, CD;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const cD = null !== (CD = null === (DD = this.currentUser) || void 0 === DD ? void 0 : DD.uid) && void 0 !== CD ? CD : null;
            this.lastNotifiedUid !== cD && (this.lastNotifiedUid = cD, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(DD, CD, cD, ID) {
            if (this._deleted) return () => {};
            const pD = "function" === typeof CD ? CD : CD.next.bind(CD),
              iD = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return HD(iD, this, "internal-error"), iD.then((() => pD(this.currentUser))), "function" === typeof CD ? DD.addObserver(CD, cD, ID) : DD.addObserver(CD)
          }
          async directlySetCurrentUser(DD) {
            this.currentUser && this.currentUser !== DD && this._currentUser._stopProactiveRefresh(), DD && this.isProactiveRefreshEnabled && DD._startProactiveRefresh(), this.currentUser = DD, DD ? await this.assertedPersistence.setCurrentUser(DD) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(DD) {
            return this.operations = this.operations.then(DD, DD), this.operations
          }
          get assertedPersistence() {
            return HD(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(DD) {
            DD && !this.frameworks.includes(DD) && (this.frameworks.push(DD), this.frameworks.sort(), this.clientVersion = XC(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var DD;
            const CD = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (CD["X-Firebase-gmpid"] = this.app.options.appId);
            const cD = await (null === (DD = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === DD ? void 0 : DD.getHeartbeatsHeader());
            cD && (CD["X-Firebase-Client"] = cD);
            const ID = await this._getAppCheckToken();
            return ID && (CD["X-Firebase-AppCheck"] = ID), CD
          }
          async _getAppCheckToken() {
            var DD;
            const CD = await (null === (DD = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === DD ? void 0 : DD.getToken());
            return (null === CD || void 0 === CD ? void 0 : CD.error) && function(DD) {
              if (ND.logLevel <= fD.d.WARN) {
                for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
                ND.warn(`Auth (${pD.e}): ${DD}`, ...cD)
              }
            }(`Error while retrieving App Check token: ${CD.error}`), null === CD || void 0 === CD ? void 0 : CD.token
          }
        }

        function aC(DD) {
          return (0, ID.P)(DD)
        }
        class VC {
          constructor(DD) {
            this.auth = DD, this.observer = null, this.addObserver = (0, ID.y)((DD => this.observer = DD))
          }
          get next() {
            return HD(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function zC(DD, CD) {
          const cD = (0, pD.w)(DD, "auth");
          if (cD.isInitialized()) {
            const DD = cD.getImmediate(),
              pD = cD.getOptions();
            if ((0, ID.A)(pD, null !== CD && void 0 !== CD ? CD : {})) return DD;
            XD(DD, "already-initialized")
          }
          return cD.initialize({
            options: CD
          })
        }

        function jC(DD, CD, cD) {
          const ID = aC(DD);
          HD(ID._canInitEmulator, ID, "emulator-config-failed"), HD(/^https?:\/\//.test(CD), ID, "invalid-emulator-scheme");
          const pD = !!(null === cD || void 0 === cD ? void 0 : cD.disableWarnings),
            iD = lC(CD),
            {
              host: fD,
              port: bD
            } = function(DD) {
              const CD = lC(DD),
                cD = /(\/\/)?([^?#/]+)/.exec(DD.substr(CD.length));
              if (!cD) return {
                host: "",
                port: null
              };
              const ID = cD[2].split("@").pop() || "",
                pD = /^(\[[^\]]+\])(:|$)/.exec(ID);
              if (pD) {
                const DD = pD[1];
                return {
                  host: DD,
                  port: LC(ID.substr(DD.length + 1))
                }
              } {
                const [DD, CD] = ID.split(":");
                return {
                  host: DD,
                  port: LC(CD)
                }
              }
            }(CD),
            QD = null === bD ? "" : `:${bD}`;
          ID.config.emulator = {
            url: `${iD}//${fD}${QD}/`
          }, ID.settings.appVerificationDisabledForTesting = !0, ID.emulatorConfig = Object.freeze({
            host: fD,
            port: bD,
            protocol: iD.replace(":", ""),
            options: Object.freeze({
              disableWarnings: pD
            })
          }), pD || function() {
            function DD() {
              const DD = document.createElement("p"),
                CD = DD.style;
              DD.innerText = "Running in emulator mode. Do not use with production credentials.", CD.position = "fixed", CD.width = "100%", CD.backgroundColor = "#ffffff", CD.border = ".1em solid #000000", CD.color = "#b50000", CD.bottom = "0px", CD.left = "0px", CD.margin = "0px", CD.zIndex = "10000", CD.textAlign = "center", DD.classList.add("firebase-emulator-warning"), document.body.appendChild(DD)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", DD) : DD())
          }()
        }

        function lC(DD) {
          const CD = DD.indexOf(":");
          return CD < 0 ? "" : DD.substr(0, CD + 1)
        }

        function LC(DD) {
          if (!DD) return null;
          const CD = Number(DD);
          return isNaN(CD) ? null : CD
        }
        class TC {
          constructor(DD, CD) {
            this.providerId = DD, this.signInMethod = CD
          }
          toJSON() {
            return UD("not implemented")
          }
          _getIdTokenResponse(DD) {
            return UD("not implemented")
          }
          _linkToIdToken(DD, CD) {
            return UD("not implemented")
          }
          _getReauthenticationResolver(DD) {
            return UD("not implemented")
          }
        }
        async function GC(DD, CD) {
          return TD(DD, "POST", "/v1/accounts:resetPassword", LD(DD, CD))
        }
        async function RC(DD, CD) {
          return TD(DD, "POST", "/v1/accounts:update", CD)
        }
        async function kC(DD, CD) {
          return RD(DD, "POST", "/v1/accounts:signInWithPassword", LD(DD, CD))
        }
        async function dC(DD, CD) {
          return TD(DD, "POST", "/v1/accounts:sendOobCode", LD(DD, CD))
        }
        async function YC(DD, CD) {
          return dC(DD, CD)
        }
        async function WC(DD, CD) {
          return dC(DD, CD)
        }
        class sC extends TC {
          constructor(DD, CD, cD) {
            let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", cD), this._email = DD, this._password = CD, this._tenantId = ID
          }
          static _fromEmailAndPassword(DD, CD) {
            return new sC(DD, CD, "password")
          }
          static _fromEmailAndCode(DD, CD) {
            return new sC(DD, CD, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(DD) {
            const CD = "string" === typeof DD ? JSON.parse(DD) : DD;
            if ((null === CD || void 0 === CD ? void 0 : CD.email) && (null === CD || void 0 === CD ? void 0 : CD.password)) {
              if ("password" === CD.signInMethod) return this._fromEmailAndPassword(CD.email, CD.password);
              if ("emailLink" === CD.signInMethod) return this._fromEmailAndCode(CD.email, CD.password, CD.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(DD) {
            var CD;
            switch (this.signInMethod) {
              case "password":
                const cD = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (CD = DD._getRecaptchaConfig()) || void 0 === CD ? void 0 : CD.emailPasswordEnabled) {
                  const CD = await qC(DD, cD, "signInWithPassword");
                  return kC(DD, CD)
                }
                return kC(DD, cD).catch((async CD => {
                  if ("auth/missing-recaptcha-token" === CD.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const CD = await qC(DD, cD, "signInWithPassword");
                    return kC(DD, CD)
                  }
                  return Promise.reject(CD)
                }));
              case "emailLink":
                return async function(DD, CD) {
                  return RD(DD, "POST", "/v1/accounts:signInWithEmailLink", LD(DD, CD))
                }(DD, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                XD(DD, "internal-error")
            }
          }
          async _linkToIdToken(DD, CD) {
            switch (this.signInMethod) {
              case "password":
                return RC(DD, {
                  idToken: CD,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(DD, CD) {
                  return RD(DD, "POST", "/v1/accounts:signInWithEmailLink", LD(DD, CD))
                }(DD, {
                  idToken: CD,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                XD(DD, "internal-error")
            }
          }
          _getReauthenticationResolver(DD) {
            return this._getIdTokenResponse(DD)
          }
        }
        async function EC(DD, CD) {
          return RD(DD, "POST", "/v1/accounts:signInWithIdp", LD(DD, CD))
        }
        class eC extends TC {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(DD) {
            const CD = new eC(DD.providerId, DD.signInMethod);
            return DD.idToken || DD.accessToken ? (DD.idToken && (CD.idToken = DD.idToken), DD.accessToken && (CD.accessToken = DD.accessToken), DD.nonce && !DD.pendingToken && (CD.nonce = DD.nonce), DD.pendingToken && (CD.pendingToken = DD.pendingToken)) : DD.oauthToken && DD.oauthTokenSecret ? (CD.accessToken = DD.oauthToken, CD.secret = DD.oauthTokenSecret) : XD("argument-error"), CD
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
          static fromJSON(DD) {
            const CD = "string" === typeof DD ? JSON.parse(DD) : DD,
              {
                providerId: cD,
                signInMethod: ID
              } = CD,
              pD = iD(CD, ["providerId", "signInMethod"]);
            if (!cD || !ID) return null;
            const fD = new eC(cD, ID);
            return fD.idToken = pD.idToken || void 0, fD.accessToken = pD.accessToken || void 0, fD.secret = pD.secret, fD.nonce = pD.nonce, fD.pendingToken = pD.pendingToken || null, fD
          }
          _getIdTokenResponse(DD) {
            return EC(DD, this.buildRequest())
          }
          _linkToIdToken(DD, CD) {
            const cD = this.buildRequest();
            return cD.idToken = CD, EC(DD, cD)
          }
          _getReauthenticationResolver(DD) {
            const CD = this.buildRequest();
            return CD.autoCreate = !1, EC(DD, CD)
          }
          buildRequest() {
            const DD = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) DD.pendingToken = this.pendingToken;
            else {
              const CD = {};
              this.idToken && (CD.id_token = this.idToken), this.accessToken && (CD.access_token = this.accessToken), this.secret && (CD.oauth_token_secret = this.secret), CD.providerId = this.providerId, this.nonce && !this.pendingToken && (CD.nonce = this.nonce), DD.postBody = (0, ID.kb)(CD)
            }
            return DD
          }
        }
        const uC = {
          USER_NOT_FOUND: "user-not-found"
        };
        class hC extends TC {
          constructor(DD) {
            super("phone", "phone"), this.params = DD
          }
          static _fromVerification(DD, CD) {
            return new hC({
              verificationId: DD,
              verificationCode: CD
            })
          }
          static _fromTokenResponse(DD, CD) {
            return new hC({
              phoneNumber: DD,
              temporaryProof: CD
            })
          }
          _getIdTokenResponse(DD) {
            return async function(DD, CD) {
              return RD(DD, "POST", "/v1/accounts:signInWithPhoneNumber", LD(DD, CD))
            }(DD, this._makeVerificationRequest())
          }
          _linkToIdToken(DD, CD) {
            return async function(DD, CD) {
              const cD = await RD(DD, "POST", "/v1/accounts:signInWithPhoneNumber", LD(DD, CD));
              if (cD.temporaryProof) throw YD(DD, "account-exists-with-different-credential", cD);
              return cD
            }(DD, Object.assign({
              idToken: CD
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(DD) {
            return async function(DD, CD) {
              return RD(DD, "POST", "/v1/accounts:signInWithPhoneNumber", LD(DD, Object.assign(Object.assign({}, CD), {
                operation: "REAUTH"
              })), uC)
            }(DD, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: DD,
              phoneNumber: CD,
              verificationId: cD,
              verificationCode: ID
            } = this.params;
            return DD && CD ? {
              temporaryProof: DD,
              phoneNumber: CD
            } : {
              sessionInfo: cD,
              code: ID
            }
          }
          toJSON() {
            const DD = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (DD.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (DD.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (DD.verificationCode = this.params.verificationCode), this.params.verificationId && (DD.verificationId = this.params.verificationId), DD
          }
          static fromJSON(DD) {
            "string" === typeof DD && (DD = JSON.parse(DD));
            const {
              verificationId: CD,
              verificationCode: cD,
              phoneNumber: ID,
              temporaryProof: pD
            } = DD;
            return cD || CD || ID || pD ? new hC({
              verificationId: CD,
              verificationCode: cD,
              phoneNumber: ID,
              temporaryProof: pD
            }) : null
          }
        }
        class rC {
          constructor(DD) {
            var CD, cD, pD, iD, fD, bD;
            const QD = (0, ID.ib)((0, ID.D)(DD)),
              wD = null !== (CD = QD.apiKey) && void 0 !== CD ? CD : null,
              SD = null !== (cD = QD.oobCode) && void 0 !== cD ? cD : null,
              BD = function(DD) {
                switch (DD) {
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
              }(null !== (pD = QD.mode) && void 0 !== pD ? pD : null);
            HD(wD && SD && BD, "argument-error"), this.apiKey = wD, this.operation = BD, this.code = SD, this.continueUrl = null !== (iD = QD.continueUrl) && void 0 !== iD ? iD : null, this.languageCode = null !== (fD = QD.languageCode) && void 0 !== fD ? fD : null, this.tenantId = null !== (bD = QD.tenantId) && void 0 !== bD ? bD : null
          }
          static parseLink(DD) {
            const CD = function(DD) {
              const CD = (0, ID.ib)((0, ID.D)(DD)).link,
                cD = CD ? (0, ID.ib)((0, ID.D)(CD)).deep_link_id : null,
                pD = (0, ID.ib)((0, ID.D)(DD)).deep_link_id;
              return (pD ? (0, ID.ib)((0, ID.D)(pD)).link : null) || pD || cD || CD || DD
            }(DD);
            try {
              return new rC(CD)
            } catch (cD) {
              return null
            }
          }
        }

        function AC(DD) {
          return rC.parseLink(DD)
        }
        class FC {
          constructor() {
            this.providerId = FC.PROVIDER_ID
          }
          static credential(DD, CD) {
            return sC._fromEmailAndPassword(DD, CD)
          }
          static credentialWithLink(DD, CD) {
            const cD = rC.parseLink(CD);
            return HD(cD, "argument-error"), sC._fromEmailAndCode(DD, cD.code, cD.tenantId)
          }
        }
        FC.PROVIDER_ID = "password", FC.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", FC.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Dc {
          constructor(DD) {
            this.providerId = DD, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(DD) {
            this.defaultLanguageCode = DD
          }
          setCustomParameters(DD) {
            return this.customParameters = DD, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class Cc extends Dc {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(DD) {
            return this.scopes.includes(DD) || this.scopes.push(DD), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class cc extends Cc {
          static credentialFromJSON(DD) {
            const CD = "string" === typeof DD ? JSON.parse(DD) : DD;
            return HD("providerId" in CD && "signInMethod" in CD, "argument-error"), eC._fromParams(CD)
          }
          credential(DD) {
            return this._credential(Object.assign(Object.assign({}, DD), {
              nonce: DD.rawNonce
            }))
          }
          _credential(DD) {
            return HD(DD.idToken || DD.accessToken, "argument-error"), eC._fromParams(Object.assign(Object.assign({}, DD), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(DD) {
            return cc.oauthCredentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return cc.oauthCredentialFromTaggedObject(DD.customData || {})
          }
          static oauthCredentialFromTaggedObject(DD) {
            let {
              _tokenResponse: CD
            } = DD;
            if (!CD) return null;
            const {
              oauthIdToken: cD,
              oauthAccessToken: ID,
              oauthTokenSecret: pD,
              pendingToken: iD,
              nonce: fD,
              providerId: bD
            } = CD;
            if (!ID && !pD && !cD && !iD) return null;
            if (!bD) return null;
            try {
              return new cc(bD)._credential({
                idToken: cD,
                accessToken: ID,
                nonce: fD,
                pendingToken: iD
              })
            } catch (QD) {
              return null
            }
          }
        }
        class Ic extends Cc {
          constructor() {
            super("facebook.com")
          }
          static credential(DD) {
            return eC._fromParams({
              providerId: Ic.PROVIDER_ID,
              signInMethod: Ic.FACEBOOK_SIGN_IN_METHOD,
              accessToken: DD
            })
          }
          static credentialFromResult(DD) {
            return Ic.credentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return Ic.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: CD
            } = DD;
            if (!CD || !("oauthAccessToken" in CD)) return null;
            if (!CD.oauthAccessToken) return null;
            try {
              return Ic.credential(CD.oauthAccessToken)
            } catch (cD) {
              return null
            }
          }
        }
        Ic.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Ic.PROVIDER_ID = "facebook.com";
        class pc extends Cc {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(DD, CD) {
            return eC._fromParams({
              providerId: pc.PROVIDER_ID,
              signInMethod: pc.GOOGLE_SIGN_IN_METHOD,
              idToken: DD,
              accessToken: CD
            })
          }
          static credentialFromResult(DD) {
            return pc.credentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return pc.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: CD
            } = DD;
            if (!CD) return null;
            const {
              oauthIdToken: cD,
              oauthAccessToken: ID
            } = CD;
            if (!cD && !ID) return null;
            try {
              return pc.credential(cD, ID)
            } catch (pD) {
              return null
            }
          }
        }
        pc.GOOGLE_SIGN_IN_METHOD = "google.com", pc.PROVIDER_ID = "google.com";
        class ic extends Cc {
          constructor() {
            super("github.com")
          }
          static credential(DD) {
            return eC._fromParams({
              providerId: ic.PROVIDER_ID,
              signInMethod: ic.GITHUB_SIGN_IN_METHOD,
              accessToken: DD
            })
          }
          static credentialFromResult(DD) {
            return ic.credentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return ic.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: CD
            } = DD;
            if (!CD || !("oauthAccessToken" in CD)) return null;
            if (!CD.oauthAccessToken) return null;
            try {
              return ic.credential(CD.oauthAccessToken)
            } catch (cD) {
              return null
            }
          }
        }
        ic.GITHUB_SIGN_IN_METHOD = "github.com", ic.PROVIDER_ID = "github.com";
        class fc extends TC {
          constructor(DD, CD) {
            super(DD, DD), this.pendingToken = CD
          }
          _getIdTokenResponse(DD) {
            return EC(DD, this.buildRequest())
          }
          _linkToIdToken(DD, CD) {
            const cD = this.buildRequest();
            return cD.idToken = CD, EC(DD, cD)
          }
          _getReauthenticationResolver(DD) {
            const CD = this.buildRequest();
            return CD.autoCreate = !1, EC(DD, CD)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(DD) {
            const CD = "string" === typeof DD ? JSON.parse(DD) : DD,
              {
                providerId: cD,
                signInMethod: ID,
                pendingToken: pD
              } = CD;
            return cD && ID && pD && cD === ID ? new fc(cD, pD) : null
          }
          static _create(DD, CD) {
            return new fc(DD, CD)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class bc extends Dc {
          constructor(DD) {
            HD(DD.startsWith("saml."), "argument-error"), super(DD)
          }
          static credentialFromResult(DD) {
            return bc.samlCredentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return bc.samlCredentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromJSON(DD) {
            const CD = fc.fromJSON(DD);
            return HD(CD, "argument-error"), CD
          }
          static samlCredentialFromTaggedObject(DD) {
            let {
              _tokenResponse: CD
            } = DD;
            if (!CD) return null;
            const {
              pendingToken: cD,
              providerId: ID
            } = CD;
            if (!cD || !ID) return null;
            try {
              return fc._create(ID, cD)
            } catch (pD) {
              return null
            }
          }
        }
        class Qc extends Cc {
          constructor() {
            super("twitter.com")
          }
          static credential(DD, CD) {
            return eC._fromParams({
              providerId: Qc.PROVIDER_ID,
              signInMethod: Qc.TWITTER_SIGN_IN_METHOD,
              oauthToken: DD,
              oauthTokenSecret: CD
            })
          }
          static credentialFromResult(DD) {
            return Qc.credentialFromTaggedObject(DD)
          }
          static credentialFromError(DD) {
            return Qc.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: CD
            } = DD;
            if (!CD) return null;
            const {
              oauthAccessToken: cD,
              oauthTokenSecret: ID
            } = CD;
            if (!cD || !ID) return null;
            try {
              return Qc.credential(cD, ID)
            } catch (pD) {
              return null
            }
          }
        }
        async function wc(DD, CD) {
          return RD(DD, "POST", "/v1/accounts:signUp", LD(DD, CD))
        }
        Qc.TWITTER_SIGN_IN_METHOD = "twitter.com", Qc.PROVIDER_ID = "twitter.com";
        class Sc {
          constructor(DD) {
            this.user = DD.user, this.providerId = DD.providerId, this._tokenResponse = DD._tokenResponse, this.operationType = DD.operationType
          }
          static async _fromIdTokenResponse(DD, CD, cD) {
            let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const pD = await IC._fromIdTokenResponse(DD, cD, ID),
              iD = Bc(cD);
            return new Sc({
              user: pD,
              providerId: iD,
              _tokenResponse: cD,
              operationType: CD
            })
          }
          static async _forOperation(DD, CD, cD) {
            await DD._updateTokensIfNecessary(cD, !0);
            const ID = Bc(cD);
            return new Sc({
              user: DD,
              providerId: ID,
              _tokenResponse: cD,
              operationType: CD
            })
          }
        }

        function Bc(DD) {
          return DD.providerId ? DD.providerId : "phoneNumber" in DD ? "phone" : null
        }
        async function yc(DD) {
          var CD;
          const cD = aC(DD);
          if (await cD._initializationPromise, null === (CD = cD.currentUser) || void 0 === CD ? void 0 : CD.isAnonymous) return new Sc({
            user: cD.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const ID = await wc(cD, {
              returnSecureToken: !0
            }),
            pD = await Sc._fromIdTokenResponse(cD, "signIn", ID, !0);
          return await cD._updateCurrentUser(pD.user), pD
        }
        class Mc extends ID.k {
          constructor(DD, CD, cD, ID) {
            var pD;
            super(CD.code, CD.message), this.operationType = cD, this.user = ID, Object.setPrototypeOf(this, Mc.prototype), this.customData = {
              appName: DD.name,
              tenantId: null !== (pD = DD.tenantId) && void 0 !== pD ? pD : void 0,
              _serverResponse: CD.customData._serverResponse,
              operationType: cD
            }
          }
          static _fromErrorAndOperation(DD, CD, cD, ID) {
            return new Mc(DD, CD, cD, ID)
          }
        }

        function tc(DD, CD, cD, ID) {
          return ("reauthenticate" === CD ? cD._getReauthenticationResolver(DD) : cD._getIdTokenResponse(DD)).catch((cD => {
            if ("auth/multi-factor-auth-required" === cD.code) throw Mc._fromErrorAndOperation(DD, cD, CD, ID);
            throw cD
          }))
        }

        function Zc(DD) {
          return new Set(DD.map((DD => {
            let {
              providerId: CD
            } = DD;
            return CD
          })).filter((DD => !!DD)))
        }
        async function oc(DD, CD) {
          const cD = (0, ID.P)(DD);
          await Nc(!0, cD, CD);
          const {
            providerUserInfo: pD
          } = await async function(DD, CD) {
            return TD(DD, "POST", "/v1/accounts:update", CD)
          }(cD.auth, {
            idToken: await cD.getIdToken(),
            deleteProvider: [CD]
          }), iD = Zc(pD || []);
          return cD.providerData = cD.providerData.filter((DD => iD.has(DD.providerId))), iD.has("phone") || (cD.phoneNumber = null), await cD.auth._persistUserIfCurrent(cD), cD
        }
        async function vc(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const ID = await hD(DD, CD._linkToIdToken(DD.auth, await DD.getIdToken()), cD);
          return Sc._forOperation(DD, "link", ID)
        }
        async function Nc(DD, CD, cD) {
          await FD(CD);
          const ID = !1 === DD ? "provider-already-linked" : "no-such-provider";
          HD(Zc(CD.providerData).has(cD) === DD, CD.auth, ID)
        }
        async function gc(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: ID
          } = DD, pD = "reauthenticate";
          try {
            const iD = await hD(DD, tc(ID, pD, CD, DD), cD);
            HD(iD.idToken, ID, "internal-error");
            const fD = uD(iD.idToken);
            HD(fD, ID, "internal-error");
            const {
              sub: bD
            } = fD;
            return HD(DD.uid === bD, ID, "user-mismatch"), Sc._forOperation(DD, pD, iD)
          } catch (iD) {
            throw "auth/user-not-found" === (null === iD || void 0 === iD ? void 0 : iD.code) && XD(ID, "user-mismatch"), iD
          }
        }
        async function Xc(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const ID = "signIn",
            pD = await tc(DD, ID, CD),
            iD = await Sc._fromIdTokenResponse(DD, ID, pD);
          return cD || await DD._updateCurrentUser(iD.user), iD
        }
        async function mc(DD, CD) {
          return Xc(aC(DD), CD)
        }
        async function nc(DD, CD) {
          const cD = (0, ID.P)(DD);
          return await Nc(!1, cD, CD.providerId), vc(cD, CD)
        }
        async function Oc(DD, CD) {
          return gc((0, ID.P)(DD), CD)
        }
        async function Pc(DD, CD) {
          const cD = aC(DD),
            ID = await async function(DD, CD) {
              return RD(DD, "POST", "/v1/accounts:signInWithCustomToken", LD(DD, CD))
            }(cD, {
              token: CD,
              returnSecureToken: !0
            }), pD = await Sc._fromIdTokenResponse(cD, "signIn", ID);
          return await cD._updateCurrentUser(pD.user), pD
        }
        class Hc {
          constructor(DD, CD) {
            this.factorId = DD, this.uid = CD.mfaEnrollmentId, this.enrollmentTime = new Date(CD.enrolledAt).toUTCString(), this.displayName = CD.displayName
          }
          static _fromServerResponse(DD, CD) {
            return "phoneInfo" in CD ? Uc._fromServerResponse(DD, CD) : "totpInfo" in CD ? xc._fromServerResponse(DD, CD) : XD(DD, "internal-error")
          }
        }
        class Uc extends Hc {
          constructor(DD) {
            super("phone", DD), this.phoneNumber = DD.phoneInfo
          }
          static _fromServerResponse(DD, CD) {
            return new Uc(CD)
          }
        }
        class xc extends Hc {
          constructor(DD) {
            super("totp", DD)
          }
          static _fromServerResponse(DD, CD) {
            return new xc(CD)
          }
        }

        function qc(DD, CD, cD) {
          var ID;
          HD((null === (ID = cD.url) || void 0 === ID ? void 0 : ID.length) > 0, DD, "invalid-continue-uri"), HD("undefined" === typeof cD.dynamicLinkDomain || cD.dynamicLinkDomain.length > 0, DD, "invalid-dynamic-link-domain"), CD.continueUrl = cD.url, CD.dynamicLinkDomain = cD.dynamicLinkDomain, CD.canHandleCodeInApp = cD.handleCodeInApp, cD.iOS && (HD(cD.iOS.bundleId.length > 0, DD, "missing-ios-bundle-id"), CD.iOSBundleId = cD.iOS.bundleId), cD.android && (HD(cD.android.packageName.length > 0, DD, "missing-android-pkg-name"), CD.androidInstallApp = cD.android.installApp, CD.androidMinimumVersionCode = cD.android.minimumVersion, CD.androidPackageName = cD.android.packageName)
        }
        async function Jc(DD, CD, cD) {
          var ID;
          const pD = aC(DD),
            iD = {
              requestType: "PASSWORD_RESET",
              email: CD,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (ID = pD._getRecaptchaConfig()) || void 0 === ID ? void 0 : ID.emailPasswordEnabled) {
            const DD = await qC(pD, iD, "getOobCode", !0);
            cD && qc(pD, DD, cD), await YC(pD, DD)
          } else cD && qc(pD, iD, cD), await YC(pD, iD).catch((async DD => {
            if ("auth/missing-recaptcha-token" !== DD.code) return Promise.reject(DD);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const DD = await qC(pD, iD, "getOobCode", !0);
              cD && qc(pD, DD, cD), await YC(pD, DD)
            }
          }))
        }
        async function Kc(DD, CD, cD) {
          await GC((0, ID.P)(DD), {
            oobCode: CD,
            newPassword: cD
          })
        }
        async function ac(DD, CD) {
          await async function(DD, CD) {
            return TD(DD, "POST", "/v1/accounts:update", LD(DD, CD))
          }((0, ID.P)(DD), {
            oobCode: CD
          })
        }
        async function Vc(DD, CD) {
          const cD = (0, ID.P)(DD),
            pD = await GC(cD, {
              oobCode: CD
            }),
            iD = pD.requestType;
          switch (HD(iD, cD, "internal-error"), iD) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              HD(pD.newEmail, cD, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              HD(pD.mfaInfo, cD, "internal-error");
            default:
              HD(pD.email, cD, "internal-error")
          }
          let fD = null;
          return pD.mfaInfo && (fD = Hc._fromServerResponse(aC(cD), pD.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === pD.requestType ? pD.newEmail : pD.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === pD.requestType ? pD.email : pD.newEmail) || null,
              multiFactorInfo: fD
            },
            operation: iD
          }
        }
        async function zc(DD, CD) {
          const {
            data: cD
          } = await Vc((0, ID.P)(DD), CD);
          return cD.email
        }
        async function jc(DD, CD, cD) {
          var ID;
          const pD = aC(DD),
            iD = {
              returnSecureToken: !0,
              email: CD,
              password: cD,
              clientType: "CLIENT_TYPE_WEB"
            };
          let fD;
          if (null === (ID = pD._getRecaptchaConfig()) || void 0 === ID ? void 0 : ID.emailPasswordEnabled) {
            const DD = await qC(pD, iD, "signUpPassword");
            fD = wc(pD, DD)
          } else fD = wc(pD, iD).catch((async DD => {
            if ("auth/missing-recaptcha-token" === DD.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const DD = await qC(pD, iD, "signUpPassword");
              return wc(pD, DD)
            }
            return Promise.reject(DD)
          }));
          const bD = await fD.catch((DD => Promise.reject(DD))),
            QD = await Sc._fromIdTokenResponse(pD, "signIn", bD);
          return await pD._updateCurrentUser(QD.user), QD
        }

        function lc(DD, CD, cD) {
          return mc((0, ID.P)(DD), FC.credential(CD, cD))
        }
        async function Lc(DD, CD, cD) {
          var ID;
          const pD = aC(DD),
            iD = {
              requestType: "EMAIL_SIGNIN",
              email: CD,
              clientType: "CLIENT_TYPE_WEB"
            };

          function fD(DD, CD) {
            HD(CD.handleCodeInApp, pD, "argument-error"), CD && qc(pD, DD, CD)
          }
          if (null === (ID = pD._getRecaptchaConfig()) || void 0 === ID ? void 0 : ID.emailPasswordEnabled) {
            const DD = await qC(pD, iD, "getOobCode", !0);
            fD(DD, cD), await WC(pD, DD)
          } else fD(iD, cD), await WC(pD, iD).catch((async DD => {
            if ("auth/missing-recaptcha-token" !== DD.code) return Promise.reject(DD);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const DD = await qC(pD, iD, "getOobCode", !0);
              fD(DD, cD), await WC(pD, DD)
            }
          }))
        }

        function Tc(DD, CD) {
          const cD = rC.parseLink(CD);
          return "EMAIL_SIGNIN" === (null === cD || void 0 === cD ? void 0 : cD.operation)
        }
        async function Gc(DD, CD, cD) {
          const pD = (0, ID.P)(DD),
            iD = FC.credentialWithLink(CD, cD || qD());
          return HD(iD._tenantId === (pD.tenantId || null), pD, "tenant-id-mismatch"), mc(pD, iD)
        }
        async function Rc(DD, CD) {
          const cD = {
              identifier: CD,
              continueUri: JD() ? qD() : "http://localhost"
            },
            {
              signinMethods: pD
            } = await async function(DD, CD) {
              return TD(DD, "POST", "/v1/accounts:createAuthUri", LD(DD, CD))
            }((0, ID.P)(DD), cD);
          return pD || []
        }
        async function kc(DD, CD) {
          const cD = (0, ID.P)(DD),
            pD = {
              requestType: "VERIFY_EMAIL",
              idToken: await DD.getIdToken()
            };
          CD && qc(cD.auth, pD, CD);
          const {
            email: iD
          } = await async function(DD, CD) {
            return dC(DD, CD)
          }(cD.auth, pD);
          iD !== DD.email && await DD.reload()
        }
        async function dc(DD, CD, cD) {
          const pD = (0, ID.P)(DD),
            iD = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await DD.getIdToken(),
              newEmail: CD
            };
          cD && qc(pD.auth, iD, cD);
          const {
            email: fD
          } = await async function(DD, CD) {
            return dC(DD, CD)
          }(pD.auth, iD);
          fD !== DD.email && await DD.reload()
        }
        async function Yc(DD, CD) {
          let {
            displayName: cD,
            photoURL: pD
          } = CD;
          if (void 0 === cD && void 0 === pD) return;
          const iD = (0, ID.P)(DD),
            fD = {
              idToken: await iD.getIdToken(),
              displayName: cD,
              photoUrl: pD,
              returnSecureToken: !0
            },
            bD = await hD(iD, async function(DD, CD) {
              return TD(DD, "POST", "/v1/accounts:update", CD)
            }(iD.auth, fD));
          iD.displayName = bD.displayName || null, iD.photoURL = bD.photoUrl || null;
          const QD = iD.providerData.find((DD => {
            let {
              providerId: CD
            } = DD;
            return "password" === CD
          }));
          QD && (QD.displayName = iD.displayName, QD.photoURL = iD.photoURL), await iD._updateTokensIfNecessary(bD)
        }

        function Wc(DD, CD) {
          return Ec((0, ID.P)(DD), CD, null)
        }

        function sc(DD, CD) {
          return Ec((0, ID.P)(DD), null, CD)
        }
        async function Ec(DD, CD, cD) {
          const {
            auth: ID
          } = DD, pD = {
            idToken: await DD.getIdToken(),
            returnSecureToken: !0
          };
          CD && (pD.email = CD), cD && (pD.password = cD);
          const iD = await hD(DD, RC(ID, pD));
          await DD._updateTokensIfNecessary(iD, !0)
        }
        class ec {
          constructor(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = DD, this.providerId = CD, this.profile = cD
          }
        }
        class uc extends ec {
          constructor(DD, CD, cD, ID) {
            super(DD, CD, cD), this.username = ID
          }
        }
        class hc extends ec {
          constructor(DD, CD) {
            super(DD, "facebook.com", CD)
          }
        }
        class rc extends uc {
          constructor(DD, CD) {
            super(DD, "github.com", CD, "string" === typeof(null === CD || void 0 === CD ? void 0 : CD.login) ? null === CD || void 0 === CD ? void 0 : CD.login : null)
          }
        }
        class Ac extends ec {
          constructor(DD, CD) {
            super(DD, "google.com", CD)
          }
        }
        class Fc extends uc {
          constructor(DD, CD, cD) {
            super(DD, "twitter.com", CD, cD)
          }
        }

        function DI(DD) {
          const {
            user: CD,
            _tokenResponse: cD
          } = DD;
          return CD.isAnonymous && !cD ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(DD) {
            var CD, cD;
            if (!DD) return null;
            const {
              providerId: ID
            } = DD, pD = DD.rawUserInfo ? JSON.parse(DD.rawUserInfo) : {}, iD = DD.isNewUser || "identitytoolkit#SignupNewUserResponse" === DD.kind;
            if (!ID && (null === DD || void 0 === DD ? void 0 : DD.idToken)) {
              const ID = null === (cD = null === (CD = uD(DD.idToken)) || void 0 === CD ? void 0 : CD.firebase) || void 0 === cD ? void 0 : cD.sign_in_provider;
              if (ID) return new ec(iD, "anonymous" !== ID && "custom" !== ID ? ID : null)
            }
            if (!ID) return null;
            switch (ID) {
              case "facebook.com":
                return new hc(iD, pD);
              case "github.com":
                return new rc(iD, pD);
              case "google.com":
                return new Ac(iD, pD);
              case "twitter.com":
                return new Fc(iD, pD, DD.screenName || null);
              case "custom":
              case "anonymous":
                return new ec(iD, null);
              default:
                return new ec(iD, ID, pD)
            }
          }(cD)
        }

        function CI(DD, CD) {
          return (0, ID.P)(DD).setPersistence(CD)
        }

        function cI(DD) {
          return aC(DD).initializeRecaptchaConfig()
        }

        function II(DD, CD, cD, pD) {
          return (0, ID.P)(DD).onIdTokenChanged(CD, cD, pD)
        }

        function pI(DD, CD, cD) {
          return (0, ID.P)(DD).beforeAuthStateChanged(CD, cD)
        }

        function iI(DD, CD, cD, pD) {
          return (0, ID.P)(DD).onAuthStateChanged(CD, cD, pD)
        }

        function fI(DD) {
          (0, ID.P)(DD).useDeviceLanguage()
        }

        function bI(DD, CD) {
          return (0, ID.P)(DD).updateCurrentUser(CD)
        }

        function QI(DD) {
          return (0, ID.P)(DD).signOut()
        }
        async function wI(DD) {
          return (0, ID.P)(DD).delete()
        }
        class SI {
          constructor(DD, CD, cD) {
            this.type = DD, this.credential = CD, this.auth = cD
          }
          static _fromIdtoken(DD, CD) {
            return new SI("enroll", DD, CD)
          }
          static _fromMfaPendingCredential(DD) {
            return new SI("signin", DD)
          }
          toJSON() {
            const DD = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [DD]: this.credential
              }
            }
          }
          static fromJSON(DD) {
            var CD, cD;
            if (null === DD || void 0 === DD ? void 0 : DD.multiFactorSession) {
              if (null === (CD = DD.multiFactorSession) || void 0 === CD ? void 0 : CD.pendingCredential) return SI._fromMfaPendingCredential(DD.multiFactorSession.pendingCredential);
              if (null === (cD = DD.multiFactorSession) || void 0 === cD ? void 0 : cD.idToken) return SI._fromIdtoken(DD.multiFactorSession.idToken)
            }
            return null
          }
        }
        class BI {
          constructor(DD, CD, cD) {
            this.session = DD, this.hints = CD, this.signInResolver = cD
          }
          static _fromError(DD, CD) {
            const cD = aC(DD),
              ID = CD.customData._serverResponse,
              pD = (ID.mfaInfo || []).map((DD => Hc._fromServerResponse(cD, DD)));
            HD(ID.mfaPendingCredential, cD, "internal-error");
            const iD = SI._fromMfaPendingCredential(ID.mfaPendingCredential);
            return new BI(iD, pD, (async DD => {
              const pD = await DD._process(cD, iD);
              delete ID.mfaInfo, delete ID.mfaPendingCredential;
              const fD = Object.assign(Object.assign({}, ID), {
                idToken: pD.idToken,
                refreshToken: pD.refreshToken
              });
              switch (CD.operationType) {
                case "signIn":
                  const DD = await Sc._fromIdTokenResponse(cD, CD.operationType, fD);
                  return await cD._updateCurrentUser(DD.user), DD;
                case "reauthenticate":
                  return HD(CD.user, cD, "internal-error"), Sc._forOperation(CD.user, CD.operationType, fD);
                default:
                  XD(cD, "internal-error")
              }
            }))
          }
          async resolveSignIn(DD) {
            const CD = DD;
            return this.signInResolver(CD)
          }
        }

        function yI(DD, CD) {
          var cD;
          const pD = (0, ID.P)(DD),
            iD = CD;
          return HD(CD.customData.operationType, pD, "argument-error"), HD(null === (cD = iD.customData._serverResponse) || void 0 === cD ? void 0 : cD.mfaPendingCredential, pD, "argument-error"), BI._fromError(pD, iD)
        }
        class MI {
          constructor(DD) {
            this.user = DD, this.enrolledFactors = [], DD._onReload((CD => {
              CD.mfaInfo && (this.enrolledFactors = CD.mfaInfo.map((CD => Hc._fromServerResponse(DD.auth, CD))))
            }))
          }
          static _fromUser(DD) {
            return new MI(DD)
          }
          async getSession() {
            return SI._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(DD, CD) {
            const cD = DD,
              ID = await this.getSession(),
              pD = await hD(this.user, cD._process(this.user.auth, ID, CD));
            return await this.user._updateTokensIfNecessary(pD), this.user.reload()
          }
          async unenroll(DD) {
            const CD = "string" === typeof DD ? DD : DD.uid,
              cD = await this.user.getIdToken();
            try {
              const DD = await hD(this.user, (ID = this.user.auth, pD = {
                idToken: cD,
                mfaEnrollmentId: CD
              }, TD(ID, "POST", "/v2/accounts/mfaEnrollment:withdraw", LD(ID, pD))));
              this.enrolledFactors = this.enrolledFactors.filter((DD => {
                let {
                  uid: cD
                } = DD;
                return cD !== CD
              })), await this.user._updateTokensIfNecessary(DD), await this.user.reload()
            } catch (iD) {
              throw iD
            }
            var ID, pD
          }
        }
        const tI = new WeakMap;

        function ZI(DD) {
          const CD = (0, ID.P)(DD);
          return tI.has(CD) || tI.set(CD, MI._fromUser(CD)), tI.get(CD)
        }
        const oI = "__sak";
        class vI {
          constructor(DD, CD) {
            this.storageRetriever = DD, this.type = CD
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(oI, "1"), this.storage.removeItem(oI), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (DD) {
              return Promise.resolve(!1)
            }
          }
          _set(DD, CD) {
            return this.storage.setItem(DD, JSON.stringify(CD)), Promise.resolve()
          }
          _get(DD) {
            const CD = this.storage.getItem(DD);
            return Promise.resolve(CD ? JSON.parse(CD) : null)
          }
          _remove(DD) {
            return this.storage.removeItem(DD), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class NI extends vI {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (DD, CD) => this.onStorageEvent(DD, CD), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const DD = (0, ID.S)();
              return yC(DD) || NC(DD)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (DD) {
                return !1
              }
            }(), this.fallbackToPolling = gC(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(DD) {
            for (const CD of Object.keys(this.listeners)) {
              const cD = this.storage.getItem(CD),
                ID = this.localCache[CD];
              cD !== ID && DD(CD, ID, cD)
            }
          }
          onStorageEvent(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!DD.key) return void this.forAllChangedKeys(((DD, CD, cD) => {
              this.notifyListeners(DD, cD)
            }));
            const cD = DD.key;
            if (CD ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const ID = this.storage.getItem(cD);
              if (DD.newValue !== ID) null !== DD.newValue ? this.storage.setItem(cD, DD.newValue) : this.storage.removeItem(cD);
              else if (this.localCache[cD] === DD.newValue && !CD) return
            }
            const pD = () => {
                const DD = this.storage.getItem(cD);
                (CD || this.localCache[cD] !== DD) && this.notifyListeners(cD, DD)
              },
              iD = this.storage.getItem(cD);
            (0, ID.Z)() && 10 === document.documentMode && iD !== DD.newValue && DD.newValue !== DD.oldValue ? setTimeout(pD, 10) : pD()
          }
          notifyListeners(DD, CD) {
            this.localCache[DD] = CD;
            const cD = this.listeners[DD];
            if (cD)
              for (const ID of Array.from(cD)) ID(CD ? JSON.parse(CD) : CD)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((DD, CD, cD) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: DD,
                  oldValue: CD,
                  newValue: cD
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
          _addListener(DD, CD) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[DD] || (this.listeners[DD] = new Set, this.localCache[DD] = this.storage.getItem(DD)), this.listeners[DD].add(CD)
          }
          _removeListener(DD, CD) {
            this.listeners[DD] && (this.listeners[DD].delete(CD), 0 === this.listeners[DD].size && delete this.listeners[DD]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(DD, CD) {
            await super._set(DD, CD), this.localCache[DD] = JSON.stringify(CD)
          }
          async _get(DD) {
            const CD = await super._get(DD);
            return this.localCache[DD] = JSON.stringify(CD), CD
          }
          async _remove(DD) {
            await super._remove(DD), delete this.localCache[DD]
          }
        }
        NI.type = "LOCAL";
        const gI = NI;
        class XI extends vI {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(DD, CD) {}
          _removeListener(DD, CD) {}
        }
        XI.type = "SESSION";
        const mI = XI;
        class nI {
          constructor(DD) {
            this.eventTarget = DD, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(DD) {
            const CD = this.receivers.find((CD => CD.isListeningto(DD)));
            if (CD) return CD;
            const cD = new nI(DD);
            return this.receivers.push(cD), cD
          }
          isListeningto(DD) {
            return this.eventTarget === DD
          }
          async handleEvent(DD) {
            const CD = DD,
              {
                eventId: cD,
                eventType: ID,
                data: pD
              } = CD.data,
              iD = this.handlersMap[ID];
            if (!(null === iD || void 0 === iD ? void 0 : iD.size)) return;
            CD.ports[0].postMessage({
              status: "ack",
              eventId: cD,
              eventType: ID
            });
            const fD = Array.from(iD).map((async DD => DD(CD.origin, pD))),
              bD = await
            function(DD) {
              return Promise.all(DD.map((async DD => {
                try {
                  return {
                    fulfilled: !0,
                    value: await DD
                  }
                } catch (CD) {
                  return {
                    fulfilled: !1,
                    reason: CD
                  }
                }
              })))
            }(fD);
            CD.ports[0].postMessage({
              status: "done",
              eventId: cD,
              eventType: ID,
              response: bD
            })
          }
          _subscribe(DD, CD) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[DD] || (this.handlersMap[DD] = new Set), this.handlersMap[DD].add(CD)
          }
          _unsubscribe(DD, CD) {
            this.handlersMap[DD] && CD && this.handlersMap[DD].delete(CD), CD && 0 !== this.handlersMap[DD].size || delete this.handlersMap[DD], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function OI() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            cD = "";
          for (let ID = 0; ID < CD; ID++) cD += Math.floor(10 * Math.random());
          return DD + cD
        }
        nI.receivers = [];
        class PI {
          constructor(DD) {
            this.target = DD, this.handlers = new Set
          }
          removeMessageHandler(DD) {
            DD.messageChannel && (DD.messageChannel.port1.removeEventListener("message", DD.Qm), DD.messageChannel.port1.close()), this.handlers.delete(DD)
          }
          async _send(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const ID = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!ID) throw new Error("connection_unavailable");
            let pD, iD;
            return new Promise(((fD, bD) => {
              const QD = OI("", 20);
              ID.port1.start();
              const wD = setTimeout((() => {
                bD(new Error("unsupported_event"))
              }), cD);
              iD = {
                messageChannel: ID,
                Qm(DD) {
                  const CD = DD;
                  if (CD.data.eventId === QD) switch (CD.data.status) {
                    case "ack":
                      clearTimeout(wD), pD = setTimeout((() => {
                        bD(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(pD), fD(CD.data.response);
                      break;
                    default:
                      clearTimeout(wD), clearTimeout(pD), bD(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(iD), ID.port1.addEventListener("message", iD.Qm), this.target.postMessage({
                eventType: DD,
                eventId: QD,
                data: CD
              }, [ID.port2])
            })).finally((() => {
              iD && this.removeMessageHandler(iD)
            }))
          }
        }

        function HI() {
          return window
        }

        function UI() {
          return "undefined" !== typeof HI().WorkerGlobalScope && "function" === typeof HI().importScripts
        }
        const xI = "firebaseLocalStorageDb",
          qI = "firebaseLocalStorage",
          JI = "fbase_key";
        class KI {
          constructor(DD) {
            this.request = DD
          }
          toPromise() {
            return new Promise(((DD, CD) => {
              this.request.addEventListener("success", (() => {
                DD(this.request.result)
              })), this.request.addEventListener("error", (() => {
                CD(this.request.error)
              }))
            }))
          }
        }

        function aI(DD, CD) {
          return DD.transaction([qI], CD ? "readwrite" : "readonly").objectStore(qI)
        }

        function VI() {
          const DD = indexedDB.open(xI, 1);
          return new Promise(((CD, cD) => {
            DD.addEventListener("error", (() => {
              cD(DD.error)
            })), DD.addEventListener("upgradeneeded", (() => {
              const CD = DD.result;
              try {
                CD.createObjectStore(qI, {
                  keyPath: JI
                })
              } catch (ID) {
                cD(ID)
              }
            })), DD.addEventListener("success", (async () => {
              const cD = DD.result;
              cD.objectStoreNames.contains(qI) ? CD(cD) : (cD.close(), await
                function() {
                  const DD = indexedDB.deleteDatabase(xI);
                  return new KI(DD).toPromise()
                }(), CD(await VI()))
            }))
          }))
        }
        async function zI(DD, CD, cD) {
          const ID = aI(DD, !0).put({
            [JI]: CD,
            value: cD
          });
          return new KI(ID).toPromise()
        }

        function jI(DD, CD) {
          const cD = aI(DD, !0).delete(CD);
          return new KI(cD).toPromise()
        }
        class lI {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await VI()), this.db
          }
          async _withRetries(DD) {
            let CD = 0;
            for (;;) try {
              const CD = await this._openDb();
              return await DD(CD)
            } catch (cD) {
              if (CD++ > 3) throw cD;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return UI() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = nI._getInstance(UI() ? self : null), this.receiver._subscribe("keyChanged", (async (DD, CD) => ({
              keyProcessed: (await this._poll()).includes(CD.key)
            }))), this.receiver._subscribe("ping", (async (DD, CD) => ["keyChanged"]))
          }
          async initializeSender() {
            var DD, CD;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (DD) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new PI(this.activeServiceWorker);
            const cD = await this.sender._send("ping", {}, 800);
            cD && (null === (DD = cD[0]) || void 0 === DD ? void 0 : DD.fulfilled) && (null === (CD = cD[0]) || void 0 === CD ? void 0 : CD.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(DD) {
            if (this.sender && this.activeServiceWorker && function() {
                var DD;
                return (null === (DD = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === DD ? void 0 : DD.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: DD
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (CD) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const DD = await VI();
              return await zI(DD, oI, "1"), await jI(DD, oI), !0
            } catch (DD) {}
            return !1
          }
          async _withPendingWrite(DD) {
            this.pendingWrites++;
            try {
              await DD()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(DD, CD) {
            return this._withPendingWrite((async () => (await this._withRetries((cD => zI(cD, DD, CD))), this.localCache[DD] = CD, this.notifyServiceWorker(DD))))
          }
          async _get(DD) {
            const CD = await this._withRetries((CD => async function(DD, CD) {
              const cD = aI(DD, !1).get(CD),
                ID = await new KI(cD).toPromise();
              return void 0 === ID ? null : ID.value
            }(CD, DD)));
            return this.localCache[DD] = CD, CD
          }
          async _remove(DD) {
            return this._withPendingWrite((async () => (await this._withRetries((CD => jI(CD, DD))), delete this.localCache[DD], this.notifyServiceWorker(DD))))
          }
          async _poll() {
            const DD = await this._withRetries((DD => {
              const CD = aI(DD, !1).getAll();
              return new KI(CD).toPromise()
            }));
            if (!DD) return [];
            if (0 !== this.pendingWrites) return [];
            const CD = [],
              cD = new Set;
            for (const {
                fbase_key: ID,
                value: pD
              }
              of DD) cD.add(ID), JSON.stringify(this.localCache[ID]) !== JSON.stringify(pD) && (this.notifyListeners(ID, pD), CD.push(ID));
            for (const ID of Object.keys(this.localCache)) this.localCache[ID] && !cD.has(ID) && (this.notifyListeners(ID, null), CD.push(ID));
            return CD
          }
          notifyListeners(DD, CD) {
            this.localCache[DD] = CD;
            const cD = this.listeners[DD];
            if (cD)
              for (const ID of Array.from(cD)) ID(CD)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(DD, CD) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[DD] || (this.listeners[DD] = new Set, this._get(DD)), this.listeners[DD].add(CD)
          }
          _removeListener(DD, CD) {
            this.listeners[DD] && (this.listeners[DD].delete(CD), 0 === this.listeners[DD].size && delete this.listeners[DD]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        lI.type = "LOCAL";
        const LI = lI;
        const TI = 1e12;
        class GI {
          constructor(DD) {
            this.auth = DD, this.counter = TI, this._widgets = new Map
          }
          render(DD, CD) {
            const cD = this.counter;
            return this._widgets.set(cD, new RI(DD, this.auth.name, CD || {})), this.counter++, cD
          }
          reset(DD) {
            var CD;
            const cD = DD || TI;
            null === (CD = this._widgets.get(cD)) || void 0 === CD || CD.delete(), this._widgets.delete(cD)
          }
          getResponse(DD) {
            var CD;
            const cD = DD || TI;
            return (null === (CD = this._widgets.get(cD)) || void 0 === CD ? void 0 : CD.getResponse()) || ""
          }
          async execute(DD) {
            var CD;
            const cD = DD || TI;
            return null === (CD = this._widgets.get(cD)) || void 0 === CD || CD.execute(), ""
          }
        }
        class RI {
          constructor(DD, CD, cD) {
            this.params = cD, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const ID = "string" === typeof DD ? document.getElementById(DD) : DD;
            HD(ID, "argument-error", {
              appName: CD
            }), this.container = ID, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(DD) {
                const CD = [],
                  cD = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let ID = 0; ID < DD; ID++) CD.push(cD.charAt(Math.floor(Math.random() * cD.length)));
                return CD.join("")
              }(50);
              const {
                callback: DD,
                "expired-callback": CD
              } = this.params;
              if (DD) try {
                DD(this.responseToken)
              } catch (cD) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, CD) try {
                  CD()
                } catch (cD) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const kI = UC("rcb"),
          dI = new aD(3e4, 6e4);
        class YI {
          constructor() {
            var DD;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (DD = HI().grecaptcha) || void 0 === DD ? void 0 : DD.render)
          }
          load(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return HD(function(DD) {
              return DD.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(DD)
            }(CD), DD, "argument-error"), this.shouldResolveImmediately(CD) && nC(HI().grecaptcha) ? Promise.resolve(HI().grecaptcha) : new Promise(((cD, pD) => {
              const iD = HI().setTimeout((() => {
                pD(mD(DD, "network-request-failed"))
              }), dI.get());
              HI()[kI] = () => {
                HI().clearTimeout(iD), delete HI()[kI];
                const ID = HI().grecaptcha;
                if (!ID || !nC(ID)) return void pD(mD(DD, "internal-error"));
                const fD = ID.render;
                ID.render = (DD, CD) => {
                  const cD = fD(DD, CD);
                  return this.counter++, cD
                }, this.hostLanguage = CD, cD(ID)
              };
              HC(`https://www.google.com/recaptcha/api.js??${(0,ID.kb)({onload:kI,render:"explicit",hl:CD})}`).catch((() => {
                clearTimeout(iD), pD(mD(DD, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(DD) {
            var CD;
            return !!(null === (CD = HI().grecaptcha) || void 0 === CD ? void 0 : CD.render) && (DD === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class WI {
          async load(DD) {
            return new GI(DD)
          }
          clearedOneInstance() {}
        }
        const sI = "recaptcha",
          EI = {
            theme: "light",
            type: "image"
          };
        class eI {
          constructor(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, EI),
              cD = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = CD, this.type = sI, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = aC(cD), this.isInvisible = "invisible" === this.parameters.size, HD("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const ID = "string" === typeof DD ? document.getElementById(DD) : DD;
            HD(ID, this.auth, "argument-error"), this.container = ID, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new WI : new YI, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const DD = await this.render(),
              CD = this.getAssertedRecaptcha(),
              cD = CD.getResponse(DD);
            return cD || new Promise((cD => {
              const ID = DD => {
                DD && (this.tokenChangeListeners.delete(ID), cD(DD))
              };
              this.tokenChangeListeners.add(ID), this.isInvisible && CD.execute(DD)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (DD) {
              return Promise.reject(DD)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((DD => {
              throw this.renderPromise = null, DD
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((DD => {
              this.container.removeChild(DD)
            }))
          }
          validateStartingState() {
            HD(!this.parameters.sitekey, this.auth, "argument-error"), HD(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), HD("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(DD) {
            return CD => {
              if (this.tokenChangeListeners.forEach((DD => DD(CD))), "function" === typeof DD) DD(CD);
              else if ("string" === typeof DD) {
                const cD = HI()[DD];
                "function" === typeof cD && cD(CD)
              }
            }
          }
          assertNotDestroyed() {
            HD(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let DD = this.container;
              if (!this.isInvisible) {
                const CD = document.createElement("div");
                DD.appendChild(CD), DD = CD
              }
              this.widgetId = this.getAssertedRecaptcha().render(DD, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            HD(JD() && !UI(), this.auth, "internal-error"), await
            function() {
              let DD = null;
              return new Promise((CD => {
                "complete" !== document.readyState ? (DD = () => CD(), window.addEventListener("load", DD)) : CD()
              })).catch((CD => {
                throw DD && window.removeEventListener("load", DD), CD
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const DD = await async function(DD) {
              return (await TD(DD, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            HD(DD, this.auth, "internal-error"), this.parameters.sitekey = DD
          }
          getAssertedRecaptcha() {
            return HD(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class uI {
          constructor(DD, CD) {
            this.verificationId = DD, this.onConfirmation = CD
          }
          confirm(DD) {
            const CD = hC._fromVerification(this.verificationId, DD);
            return this.onConfirmation(CD)
          }
        }
        async function hI(DD, CD, cD) {
          const pD = aC(DD),
            iD = await FI(pD, CD, (0, ID.P)(cD));
          return new uI(iD, (DD => mc(pD, DD)))
        }
        async function rI(DD, CD, cD) {
          const pD = (0, ID.P)(DD);
          await Nc(!1, pD, "phone");
          const iD = await FI(pD.auth, CD, (0, ID.P)(cD));
          return new uI(iD, (DD => nc(pD, DD)))
        }
        async function AI(DD, CD, cD) {
          const pD = (0, ID.P)(DD),
            iD = await FI(pD.auth, CD, (0, ID.P)(cD));
          return new uI(iD, (DD => Oc(pD, DD)))
        }
        async function FI(DD, CD, cD) {
          var ID;
          const pD = await cD.verify();
          try {
            let iD;
            if (HD("string" === typeof pD, DD, "argument-error"), HD(cD.type === sI, DD, "argument-error"), iD = "string" === typeof CD ? {
                phoneNumber: CD
              } : CD, "session" in iD) {
              const CD = iD.session;
              if ("phoneNumber" in iD) {
                HD("enroll" === CD.type, DD, "internal-error");
                const cD = await
                function(DD, CD) {
                  return TD(DD, "POST", "/v2/accounts/mfaEnrollment:start", LD(DD, CD))
                }(DD, {
                  idToken: CD.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: iD.phoneNumber,
                    recaptchaToken: pD
                  }
                });
                return cD.phoneSessionInfo.sessionInfo
              } {
                HD("signin" === CD.type, DD, "internal-error");
                const cD = (null === (ID = iD.multiFactorHint) || void 0 === ID ? void 0 : ID.uid) || iD.multiFactorUid;
                HD(cD, DD, "missing-multi-factor-info");
                const fD = await
                function(DD, CD) {
                  return TD(DD, "POST", "/v2/accounts/mfaSignIn:start", LD(DD, CD))
                }(DD, {
                  mfaPendingCredential: CD.credential,
                  mfaEnrollmentId: cD,
                  phoneSignInInfo: {
                    recaptchaToken: pD
                  }
                });
                return fD.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: CD
              } = await async function(DD, CD) {
                return TD(DD, "POST", "/v1/accounts:sendVerificationCode", LD(DD, CD))
              }(DD, {
                phoneNumber: iD.phoneNumber,
                recaptchaToken: pD
              });
              return CD
            }
          } finally {
            cD._reset()
          }
        }
        async function Dp(DD, CD) {
          await vc((0, ID.P)(DD), CD)
        }
        class Cp {
          constructor(DD) {
            this.providerId = Cp.PROVIDER_ID, this.auth = aC(DD)
          }
          verifyPhoneNumber(DD, CD) {
            return FI(this.auth, DD, (0, ID.P)(CD))
          }
          static credential(DD, CD) {
            return hC._fromVerification(DD, CD)
          }
          static credentialFromResult(DD) {
            const CD = DD;
            return Cp.credentialFromTaggedObject(CD)
          }
          static credentialFromError(DD) {
            return Cp.credentialFromTaggedObject(DD.customData || {})
          }
          static credentialFromTaggedObject(DD) {
            let {
              _tokenResponse: CD
            } = DD;
            if (!CD) return null;
            const {
              phoneNumber: cD,
              temporaryProof: ID
            } = CD;
            return cD && ID ? hC._fromTokenResponse(cD, ID) : null
          }
        }

        function cp(DD, CD) {
          return CD ? iC(CD) : (HD(DD._popupRedirectResolver, DD, "argument-error"), DD._popupRedirectResolver)
        }
        Cp.PROVIDER_ID = "phone", Cp.PHONE_SIGN_IN_METHOD = "phone";
        class Ip extends TC {
          constructor(DD) {
            super("custom", "custom"), this.params = DD
          }
          _getIdTokenResponse(DD) {
            return EC(DD, this._buildIdpRequest())
          }
          _linkToIdToken(DD, CD) {
            return EC(DD, this._buildIdpRequest(CD))
          }
          _getReauthenticationResolver(DD) {
            return EC(DD, this._buildIdpRequest())
          }
          _buildIdpRequest(DD) {
            const CD = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return DD && (CD.idToken = DD), CD
          }
        }

        function pp(DD) {
          return Xc(DD.auth, new Ip(DD), DD.bypassAuthState)
        }

        function ip(DD) {
          const {
            auth: CD,
            user: cD
          } = DD;
          return HD(cD, CD, "internal-error"), gc(cD, new Ip(DD), DD.bypassAuthState)
        }
        async function fp(DD) {
          const {
            auth: CD,
            user: cD
          } = DD;
          return HD(cD, CD, "internal-error"), vc(cD, new Ip(DD), DD.bypassAuthState)
        }
        class bp {
          constructor(DD, CD, cD, ID) {
            let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = DD, this.resolver = cD, this.user = ID, this.bypassAuthState = pD, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(CD) ? CD : [CD]
          }
          execute() {
            return new Promise((async (DD, CD) => {
              this.pendingPromise = {
                resolve: DD,
                reject: CD
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (cD) {
                this.reject(cD)
              }
            }))
          }
          async onAuthEvent(DD) {
            const {
              urlResponse: CD,
              sessionId: cD,
              postBody: ID,
              tenantId: pD,
              error: iD,
              type: fD
            } = DD;
            if (iD) return void this.reject(iD);
            const bD = {
              auth: this.auth,
              requestUri: CD,
              sessionId: cD,
              tenantId: pD || void 0,
              postBody: ID || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(fD)(bD))
            } catch (QD) {
              this.reject(QD)
            }
          }
          onError(DD) {
            this.reject(DD)
          }
          getIdpTask(DD) {
            switch (DD) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return pp;
              case "linkViaPopup":
              case "linkViaRedirect":
                return fp;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return ip;
              default:
                XD(this.auth, "internal-error")
            }
          }
          resolve(DD) {
            xD(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(DD), this.unregisterAndCleanUp()
          }
          reject(DD) {
            xD(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(DD), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Qp = new aD(2e3, 1e4);
        async function wp(DD, CD, cD) {
          const ID = aC(DD);
          OD(DD, CD, Dc);
          const pD = cp(ID, cD);
          return new yp(ID, "signInViaPopup", CD, pD).executeNotNull()
        }
        async function Sp(DD, CD, cD) {
          const pD = (0, ID.P)(DD);
          OD(pD.auth, CD, Dc);
          const iD = cp(pD.auth, cD);
          return new yp(pD.auth, "reauthViaPopup", CD, iD, pD).executeNotNull()
        }
        async function Bp(DD, CD, cD) {
          const pD = (0, ID.P)(DD);
          OD(pD.auth, CD, Dc);
          const iD = cp(pD.auth, cD);
          return new yp(pD.auth, "linkViaPopup", CD, iD, pD).executeNotNull()
        }
        class yp extends bp {
          constructor(DD, CD, cD, ID, pD) {
            super(DD, CD, ID, pD), this.provider = cD, this.authWindow = null, this.pollId = null, yp.currentPopupAction && yp.currentPopupAction.cancel(), yp.currentPopupAction = this
          }
          async executeNotNull() {
            const DD = await this.execute();
            return HD(DD, this.auth, "internal-error"), DD
          }
          async onExecution() {
            xD(1 === this.filter.length, "Popup operations only handle one event");
            const DD = OI();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], DD), this.authWindow.associatedEvent = DD, this.resolver._originValidation(this.auth).catch((DD => {
              this.reject(DD)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (DD => {
              DD || this.reject(mD(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var DD;
            return (null === (DD = this.authWindow) || void 0 === DD ? void 0 : DD.associatedEvent) || null
          }
          cancel() {
            this.reject(mD(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, yp.currentPopupAction = null
          }
          pollUserCancellation() {
            const DD = () => {
              var CD, cD;
              (null === (cD = null === (CD = this.authWindow) || void 0 === CD ? void 0 : CD.window) || void 0 === cD ? void 0 : cD.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(mD(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(DD, Qp.get())
            };
            DD()
          }
        }
        yp.currentPopupAction = null;
        const Mp = "pendingRedirect",
          tp = new Map;
        class Zp extends bp {
          constructor(DD, CD) {
            super(DD, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], CD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let DD = tp.get(this.auth._key());
            if (!DD) {
              try {
                const CD = await async function(DD, CD) {
                  const cD = gp(CD),
                    ID = Np(DD);
                  if (!await ID._isAvailable()) return !1;
                  const pD = "true" === await ID._get(cD);
                  return await ID._remove(cD), pD
                }(this.resolver, this.auth) ? await super.execute() : null;
                DD = () => Promise.resolve(CD)
              } catch (CD) {
                DD = () => Promise.reject(CD)
              }
              tp.set(this.auth._key(), DD)
            }
            return this.bypassAuthState || tp.set(this.auth._key(), (() => Promise.resolve(null))), DD()
          }
          async onAuthEvent(DD) {
            if ("signInViaRedirect" === DD.type) return super.onAuthEvent(DD);
            if ("unknown" !== DD.type) {
              if (DD.eventId) {
                const CD = await this.auth._redirectUserForId(DD.eventId);
                if (CD) return this.user = CD, super.onAuthEvent(DD);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function op(DD, CD) {
          return Np(DD)._set(gp(CD), "true")
        }

        function vp(DD, CD) {
          tp.set(DD._key(), CD)
        }

        function Np(DD) {
          return iC(DD._redirectPersistence)
        }

        function gp(DD) {
          return QC(Mp, DD.config.apiKey, DD.name)
        }

        function Xp(DD, CD, cD) {
          return async function(DD, CD, cD) {
            const ID = aC(DD);
            OD(DD, CD, Dc), await ID._initializationPromise;
            const pD = cp(ID, cD);
            return await op(pD, ID), pD._openRedirect(ID, CD, "signInViaRedirect")
          }(DD, CD, cD)
        }

        function mp(DD, CD, cD) {
          return async function(DD, CD, cD) {
            const pD = (0, ID.P)(DD);
            OD(pD.auth, CD, Dc), await pD.auth._initializationPromise;
            const iD = cp(pD.auth, cD);
            await op(iD, pD.auth);
            const fD = await Hp(pD);
            return iD._openRedirect(pD.auth, CD, "reauthViaRedirect", fD)
          }(DD, CD, cD)
        }

        function np(DD, CD, cD) {
          return async function(DD, CD, cD) {
            const pD = (0, ID.P)(DD);
            OD(pD.auth, CD, Dc), await pD.auth._initializationPromise;
            const iD = cp(pD.auth, cD);
            await Nc(!1, pD, CD.providerId), await op(iD, pD.auth);
            const fD = await Hp(pD);
            return iD._openRedirect(pD.auth, CD, "linkViaRedirect", fD)
          }(DD, CD, cD)
        }
        async function Op(DD, CD) {
          return await aC(DD)._initializationPromise, Pp(DD, CD, !1)
        }
        async function Pp(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const ID = aC(DD),
            pD = cp(ID, CD),
            iD = new Zp(ID, pD, cD),
            fD = await iD.execute();
          return fD && !cD && (delete fD.user._redirectEventId, await ID._persistUserIfCurrent(fD.user), await ID._setRedirectUser(null, CD)), fD
        }
        async function Hp(DD) {
          const CD = OI(`${DD.uid}:::`);
          return DD._redirectEventId = CD, await DD.auth._setRedirectUser(DD), await DD.auth._persistUserIfCurrent(DD), CD
        }
        class Up {
          constructor(DD) {
            this.auth = DD, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(DD) {
            this.consumers.add(DD), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, DD) && (this.sendToConsumer(this.queuedRedirectEvent, DD), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(DD) {
            this.consumers.delete(DD)
          }
          onEvent(DD) {
            if (this.hasEventBeenHandled(DD)) return !1;
            let CD = !1;
            return this.consumers.forEach((cD => {
              this.isEventForConsumer(DD, cD) && (CD = !0, this.sendToConsumer(DD, cD), this.saveEventToCache(DD))
            })), this.hasHandledPotentialRedirect || ! function(DD) {
              switch (DD.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return qp(DD);
                default:
                  return !1
              }
            }(DD) || (this.hasHandledPotentialRedirect = !0, CD || (this.queuedRedirectEvent = DD, CD = !0)), CD
          }
          sendToConsumer(DD, CD) {
            var cD;
            if (DD.error && !qp(DD)) {
              const ID = (null === (cD = DD.error.code) || void 0 === cD ? void 0 : cD.split("auth/")[1]) || "internal-error";
              CD.onError(mD(this.auth, ID))
            } else CD.onAuthEvent(DD)
          }
          isEventForConsumer(DD, CD) {
            const cD = null === CD.eventId || !!DD.eventId && DD.eventId === CD.eventId;
            return CD.filter.includes(DD.type) && cD
          }
          hasEventBeenHandled(DD) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(xp(DD))
          }
          saveEventToCache(DD) {
            this.cachedEventUids.add(xp(DD)), this.lastProcessedEventTime = Date.now()
          }
        }

        function xp(DD) {
          return [DD.type, DD.eventId, DD.sessionId, DD.tenantId].filter((DD => DD)).join("-")
        }

        function qp(DD) {
          let {
            type: CD,
            error: cD
          } = DD;
          return "unknown" === CD && "auth/no-auth-event" === (null === cD || void 0 === cD ? void 0 : cD.code)
        }
        const Jp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Kp = /^https?/;
        async function ap(DD) {
          if (DD.config.emulator) return;
          const {
            authorizedDomains: CD
          } = await async function(DD) {
            return TD(DD, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(DD);
          for (const ID of CD) try {
            if (Vp(ID)) return
          } catch (cD) {}
          XD(DD, "unauthorized-domain")
        }

        function Vp(DD) {
          const CD = qD(),
            {
              protocol: cD,
              hostname: ID
            } = new URL(CD);
          if (DD.startsWith("chrome-extension://")) {
            const pD = new URL(DD);
            return "" === pD.hostname && "" === ID ? "chrome-extension:" === cD && DD.replace("chrome-extension://", "") === CD.replace("chrome-extension://", "") : "chrome-extension:" === cD && pD.hostname === ID
          }
          if (!Kp.test(cD)) return !1;
          if (Jp.test(DD)) return ID === DD;
          const pD = DD.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + pD + "|" + pD + ")$", "i").test(ID)
        }
        const zp = new aD(3e4, 6e4);

        function jp() {
          const DD = HI().___jsl;
          if (null === DD || void 0 === DD ? void 0 : DD.H)
            for (const CD of Object.keys(DD.H))
              if (DD.H[CD].r = DD.H[CD].r || [], DD.H[CD].L = DD.H[CD].L || [], DD.H[CD].r = [...DD.H[CD].L], DD.CP)
                for (let cD = 0; cD < DD.CP.length; cD++) DD.CP[cD] = null
        }
        let lp = null;

        function Lp(DD) {
          return lp = lp || function(DD) {
            return new Promise(((CD, cD) => {
              var ID, pD, iD;

              function fD() {
                jp(), gapi.load("gapi.iframes", {
                  callback: () => {
                    CD(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    jp(), cD(mD(DD, "network-request-failed"))
                  },
                  timeout: zp.get()
                })
              }
              if (null === (pD = null === (ID = HI().gapi) || void 0 === ID ? void 0 : ID.iframes) || void 0 === pD ? void 0 : pD.Iframe) CD(gapi.iframes.getContext());
              else {
                if (!(null === (iD = HI().gapi) || void 0 === iD ? void 0 : iD.load)) {
                  const CD = UC("iframefcb");
                  return HI()[CD] = () => {
                    gapi.load ? fD() : cD(mD(DD, "network-request-failed"))
                  }, HC(`https://apis.google.com/js/api.js?onload=${CD}`).catch((DD => cD(DD)))
                }
                fD()
              }
            })).catch((DD => {
              throw lp = null, DD
            }))
          }(DD), lp
        }
        const Tp = new aD(5e3, 15e3),
          Gp = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          Rp = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function kp(DD) {
          const CD = DD.config;
          HD(CD.authDomain, DD, "auth-domain-config-required");
          const cD = CD.emulator ? VD(CD, "emulator/auth/iframe") : `https://${DD.config.authDomain}/__/auth/iframe`,
            iD = {
              apiKey: CD.apiKey,
              appName: DD.name,
              v: pD.e
            },
            fD = Rp.get(DD.config.apiHost);
          fD && (iD.eid = fD);
          const bD = DD._getFrameworks();
          return bD.length && (iD.fw = bD.join(",")), `${cD}?${(0,ID.kb)(iD).slice(1)}`
        }
        const dp = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Yp {
          constructor(DD) {
            this.window = DD, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (DD) {}
          }
        }

        function Wp(DD, CD, cD) {
          let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const fD = Math.max((window.screen.availHeight - iD) / 2, 0).toString(),
            bD = Math.max((window.screen.availWidth - pD) / 2, 0).toString();
          let QD = "";
          const wD = Object.assign(Object.assign({}, dp), {
              width: pD.toString(),
              height: iD.toString(),
              top: fD,
              left: bD
            }),
            SD = (0, ID.S)().toLowerCase();
          cD && (QD = MC(SD) ? "_blank" : cD), BC(SD) && (CD = CD || "http://localhost", wD.scrollbars = "yes");
          const BD = Object.entries(wD).reduce(((DD, CD) => {
            let [cD, ID] = CD;
            return `${DD}${cD}=${ID},`
          }), "");
          if (function() {
              var DD;
              return NC(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.S)()) && !!(null === (DD = window.navigator) || void 0 === DD ? void 0 : DD.standalone)
            }(SD) && "_self" !== QD) return function(DD, CD) {
            const cD = document.createElement("a");
            cD.href = DD, cD.target = CD;
            const ID = document.createEvent("MouseEvent");
            ID.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), cD.dispatchEvent(ID)
          }(CD || "", QD), new Yp(null);
          const yD = window.open(CD || "", QD, BD);
          HD(yD, DD, "popup-blocked");
          try {
            yD.focus()
          } catch (MD) {}
          return new Yp(yD)
        }
        const sp = "__/auth/handler",
          Ep = "emulator/auth/handler",
          ep = encodeURIComponent("fac");
        async function hp(DD, CD, cD, iD, fD, bD) {
            HD(DD.config.authDomain, DD, "auth-domain-config-required"), HD(DD.config.apiKey, DD, "invalid-api-key");
            const QD = {
              apiKey: DD.config.apiKey,
              appName: DD.name,
              authType: cD,
              redirectUrl: iD,
              v: pD.e,
              eventId: fD
            };
            if (CD instanceof Dc) {
              CD.setDefaultLanguage(DD.languageCode), QD.providerId = CD.providerId || "", (0, ID.Y)(CD.getCustomParameters()) || (QD.customParameters = JSON.stringify(CD.getCustomParameters()));
              for (const [DD, CD] of Object.entries(bD || {})) QD[DD] = CD
            }
            if (CD instanceof Cc) {
              const DD = CD.getScopes().filter((DD => "" !== DD));
              DD.length > 0 && (QD.scopes = DD.join(","))
            }
            DD.tenantId && (QD.tid = DD.tenantId);
            const wD = QD;
            for (const ID of Object.keys(wD)) void 0 === wD[ID] && delete wD[ID];
            const SD = await DD._getAppCheckToken(),
              BD = SD ? `#${ep}=${encodeURIComponent(SD)}` : "";
            return `${function(DD){let{config:CD}=DD;if(!CD.emulator)return`
            https: //${CD.authDomain}/${sp}`;return VD(CD,Ep)}(DD)}?${(0,ID.kb)(wD).slice(1)}${BD}`}const rp="webStorageSupport";const Ap=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mI,this._completeRedirectFn=Pp,this._overrideRedirectResult=vp}async _openPopup(DD,CD,cD,ID){var pD;xD(null===(pD=this.eventManagers[DD._key()])||void 0===pD?void 0:pD.manager,"_initialize() not called before _openPopup()");return Wp(DD,await hp(DD,CD,cD,qD(),ID),OI())}async _openRedirect(DD,CD,cD,ID){await this._originValidation(DD);return function(DD){HI().location.href=DD}(await hp(DD,CD,cD,qD(),ID)),new Promise((()=>{}))}_initialize(DD){const CD=DD._key();if(this.eventManagers[CD]){const{manager:DD,promise:cD}=this.eventManagers[CD];return DD?Promise.resolve(DD):(xD(cD,"If manager is not set, promise should be"),cD)}const cD=this.initAndGetManager(DD);return this.eventManagers[CD]={promise:cD},cD.catch((()=>{delete this.eventManagers[CD]})),cD}async initAndGetManager(DD){const CD=await async function(DD){const CD=await Lp(DD),cD=HI().gapi;return HD(cD,DD,"internal-error"),CD.open({where:document.body,url:kp(DD),messageHandlersFilter:cD.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gp,dontclear:!0},(CD=>new Promise((async(cD,ID)=>{await CD.restyle({setHideOnLeave:!1});const pD=mD(DD,"network-request-failed"),iD=HI().setTimeout((()=>{ID(pD)}),Tp.get());function fD(){HI().clearTimeout(iD),cD(CD)}CD.ping(fD).then(fD,(()=>{ID(pD)}))}))))}(DD),cD=new Up(DD);return CD.register("authEvent",(CD=>{HD(null===CD||void 0===CD?void 0:CD.authEvent,DD,"invalid-auth-event");return{status:cD.onEvent(CD.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[DD._key()]={manager:cD},this.iframes[DD._key()]=CD,cD}_isIframeWebStorageSupported(DD,CD){this.iframes[DD._key()].send(rp,{type:rp},(cD=>{var ID;const pD=null===(ID=null===cD||void 0===cD?void 0:cD[0])||void 0===ID?void 0:ID[rp];void 0!==pD&&CD(!!pD),XD(DD,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(DD){const CD=DD._key();return this.originValidationPromises[CD]||(this.originValidationPromises[CD]=ap(DD)),this.originValidationPromises[CD]}get _shouldInitProactively(){return gC()||yC()||NC()}};class Fp{constructor(DD){this.factorId=DD}_process(DD,CD,cD){switch(CD.type){case"enroll":return this._finalizeEnroll(DD,CD.credential,cD);case"signin":return this._finalizeSignIn(DD,CD.credential);default:return UD("unexpected MultiFactorSessionType")}}}class Di extends Fp{constructor(DD){super("phone"),this.credential=DD}static _fromCredential(DD){return new Di(DD)}_finalizeEnroll(DD,CD,cD){return function(DD,CD){return TD(DD,"POST","/v2/accounts/mfaEnrollment:finalize",LD(DD,CD))}(DD,{idToken:CD,displayName:cD,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(DD,CD){return function(DD,CD){return TD(DD,"POST","/v2/accounts/mfaSignIn:finalize",LD(DD,CD))}(DD,{mfaPendingCredential:CD,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ci{constructor(){}static assertion(DD){return Di._fromCredential(DD)}}Ci.FACTOR_ID="phone";class ci{static assertionForEnrollment(DD,CD){return Ii._fromSecret(DD,CD)}static assertionForSignIn(DD,CD){return Ii._fromEnrollmentId(DD,CD)}static async generateSecret(DD){const CD=DD;HD("undefined"!==typeof CD.auth,"internal-error");const cD=await(ID=CD.auth,pD={idToken:CD.credential,totpEnrollmentInfo:{}},TD(ID,"POST","/v2/accounts/mfaEnrollment:start",LD(ID,pD)));var ID,pD;return ii._fromStartTotpMfaEnrollmentResponse(cD,CD.auth)}}ci.FACTOR_ID="totp";class Ii extends Fp{constructor(DD,CD,cD){super("totp"),this.otp=DD,this.enrollmentId=CD,this.secret=cD}static _fromSecret(DD,CD){return new Ii(CD,void 0,DD)}static _fromEnrollmentId(DD,CD){return new Ii(CD,DD)}async _finalizeEnroll(DD,CD,cD){return HD("undefined"!==typeof this.secret,DD,"argument-error"),function(DD,CD){return TD(DD,"POST","/v2/accounts/mfaEnrollment:finalize",LD(DD,CD))}(DD,{idToken:CD,displayName:cD,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(DD,CD){HD(void 0!==this.enrollmentId&&void 0!==this.otp,DD,"argument-error");const cD={verificationCode:this.otp};return function(DD,CD){return TD(DD,"POST","/v2/accounts/mfaSignIn:finalize",LD(DD,CD))}(DD,{mfaPendingCredential:CD,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:cD})}}class ii{constructor(DD,CD,cD,ID,pD,iD,fD){this.sessionInfo=iD,this.auth=fD,this.secretKey=DD,this.hashingAlgorithm=CD,this.codeLength=cD,this.codeIntervalSeconds=ID,this.enrollmentCompletionDeadline=pD}static _fromStartTotpMfaEnrollmentResponse(DD,CD){return new ii(DD.totpSessionInfo.sharedSecretKey,DD.totpSessionInfo.hashingAlgorithm,DD.totpSessionInfo.verificationCodeLength,DD.totpSessionInfo.periodSec,new Date(DD.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),DD.totpSessionInfo.sessionInfo,CD)}_makeTotpVerificationInfo(DD){return{sessionInfo:this.sessionInfo,verificationCode:DD}}generateQrCodeUrl(DD,CD){var cD;let ID=!1;return(fi(DD)||fi(CD))&&(ID=!0),ID&&(fi(DD)&&(DD=(null===(cD=this.auth.currentUser)||void 0===cD?void 0:cD.email)||"unknownuser"),fi(CD)&&(CD=this.auth.name)),`otpauth://totp/${CD}:${DD}?secret=${this.secretKey}&issuer=${CD}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function fi(DD){return"undefined"===typeof DD||0===(null===DD||void 0===DD?void 0:DD.length)}var bi="@firebase/auth",Qi="0.23.2";class wi{constructor(DD){this.auth=DD,this.internalListeners=new Map}getUid(){var DD;return this.assertAuthConfigured(),(null===(DD=this.auth.currentUser)||void 0===DD?void 0:DD.uid)||null}async getToken(DD){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(DD)}}addAuthTokenListener(DD){if(this.assertAuthConfigured(),this.internalListeners.has(DD))return;const CD=this.auth.onIdTokenChanged((CD=>{DD((null===CD||void 0===CD?void 0:CD.stsTokenManager.accessToken)||null)}));this.internalListeners.set(DD,CD),this.updateProactiveRefresh()}removeAuthTokenListener(DD){this.assertAuthConfigured();const CD=this.internalListeners.get(DD);CD&&(this.internalListeners.delete(DD),CD(),this.updateProactiveRefresh())}assertAuthConfigured(){HD(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const Si=(0,ID.L)("authIdTokenMaxAge")||300;let Bi=null;const yi=DD=>async CD=>{const cD=CD&&await CD.getIdTokenResult(),ID=cD&&((new Date).getTime()-Date.parse(cD.issuedAtTime))/1e3;if(ID&&ID>Si)return;const pD=null===cD||void 0===cD?void 0:cD.token;Bi!==pD&&(Bi=pD,await fetch(DD,{method:pD?"POST":"DELETE",headers:pD?{Authorization:`Bearer ${pD}`}:{}}))};function Mi(){let DD=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,pD.F)();const CD=(0,pD.w)(DD,"auth");if(CD.isInitialized())return CD.getImmediate();const cD=zC(DD,{popupRedirectResolver:Ap,persistence:[LI,gI,mI]}),iD=(0,ID.L)("authTokenSyncURL");if(iD){const DD=yi(iD);pI(cD,DD,(()=>DD(cD.currentUser))),II(cD,(CD=>DD(CD)))}const fD=(0,ID.H)("auth");return fD&&jC(cD,`http://${fD}`),cD}var ti;ti="Browser",(0,pD.x)(new bD.g("auth",((DD,CD)=>{let{options:cD}=CD;const ID=DD.getProvider("app").getImmediate(),pD=DD.getProvider("heartbeat"),iD=DD.getProvider("app-check-internal"),{apiKey:fD,authDomain:bD}=ID.options;HD(fD&&!fD.includes(":"),"invalid-api-key",{appName:ID.name});const QD={apiKey:fD,authDomain:bD,clientPlatform:ti,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XC(ti)},wD=new KC(ID,pD,iD,QD);return function(DD,CD){const cD=(null===CD||void 0===CD?void 0:CD.persistence)||[],ID=(Array.isArray(cD)?cD:[cD]).map(iC);(null===CD||void 0===CD?void 0:CD.errorMap)&&DD._updateErrorMap(CD.errorMap),DD._initializeWithPersistence(ID,null===CD||void 0===CD?void 0:CD.popupRedirectResolver)}(wD,cD),wD}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((DD,CD,cD)=>{DD.getProvider("auth-internal").initialize()}))),(0,pD.x)(new bD.g("auth-internal",(DD=>(DD=>new wi(DD))(aC(DD.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,pD.O)(bi,Qi,function(DD){switch(DD){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ti)),(0,pD.O)(bi,Qi,"esm2017")}};Object.freeze(modules);for(const DD in modules)Object.freeze(modules[DD]);