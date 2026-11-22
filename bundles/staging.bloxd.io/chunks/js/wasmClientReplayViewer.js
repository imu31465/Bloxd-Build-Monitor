export const id = 60;
export const ids = [60];
export const modules = {
  36576: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk,
      c: () => xk
    });
    var Dk = ik(594),
      fk = ik(38),
      Sk = ik(36539);
    const bk = "replayFileKeptForReload",
      rk = "replayFileKeptForReloadAt",
      Pk = "replayFileKeptForReloadTab",
      mk = 3e5,
      Mk = 5e3;
    async function Kk(kk, ek) {
      const ik = Date.now(),
        Sk = {
          at: ik,
          bytes: kk,
          source: ek
        },
        mk = await Promise.race([(async () => await fk.e.setItem(rk, ik) && fk.e.setItem(bk, Sk))(), (0, Dk.H)(Mk).then((() => !1))]);
      mk || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Kk = {
        at: ik,
        fU: mk
      };
      fk.g.setItem(Pk, Kk)
    }
    async function xk() {
      var kk;
      const ek = fk.g.getItem(Pk);
      null !== ek && fk.g.removeItem(Pk);
      const ik = Date.now(),
        Dk = await fk.e.getItem(rk),
        Mk = null !== ek && ik - ek.at <= mk,
        Kk = null !== ek && Dk === ek.at;
      let xk = null;
      if (null !== Dk && (Kk || ("number" !== typeof Dk || ik - Dk > mk)) && (xk = Mk && Kk && ek.fU ? await fk.e.getItem(bk) : null, await Promise.all([fk.e.removeItem(rk), fk.e.removeItem(bk)])), !Mk) return null;
      if ((null === (kk = xk) || void 0 === kk ? void 0 : kk.at) !== ek.at) throw new Error(Sk.e.replayNotKept.text);
      return {
        bytes: xk.bytes,
        source: xk.source
      }
    }
  },
  36571: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      f: () => Sk,
      g: () => fk
    });
    const Dk = [9];

    function fk(kk) {
      return Dk.includes(kk)
    }

    function Sk(kk) {
      return null !== kk && kk >= 3 && kk < Dk[0]
    }
  },
  36586: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      f: () => fk
    });
    const Dk = "data-replay-ui-active",
      fk = [{
        group: "middleTextTop",
        dataAttr: "data-replay-hide-middle-text-top",
        label: "Middle text top"
      }, {
        group: "middleTextUpper",
        dataAttr: "data-replay-hide-middle-text-upper",
        label: "Middle text upper"
      }, {
        group: "middleTextLower",
        dataAttr: "data-replay-hide-middle-text-lower",
        label: "Middle text lower"
      }, {
        group: "rightInfoText",
        dataAttr: "data-replay-hide-right-info-text",
        label: "Right info text"
      }, {
        group: "crosshair",
        dataAttr: "data-replay-hide-crosshair",
        label: "Crosshair"
      }, {
        group: "flyingMiddleText",
        dataAttr: "data-replay-hide-flying-middle-text",
        label: "Flying middle text"
      }, {
        group: "hotbar",
        dataAttr: "data-replay-hide-hotbar",
        label: "Hotbar (shop, inventory, item name)"
      }, {
        group: "auraBar",
        dataAttr: "data-replay-hide-aura-bar",
        label: "Aura XP bar"
      }, {
        group: "healthAndShield",
        dataAttr: "data-replay-hide-health-and-shield",
        label: "Health bar and shield bar"
      }, {
        group: "effectInfo",
        dataAttr: "data-replay-hide-effect-info",
        label: "Effect info"
      }, {
        group: "nametag",
        dataAttr: null,
        label: "Nametags"
      }, {
        group: "everythingElse",
        dataAttr: "data-replay-hide-everything-else",
        label: "Everything else"
      }]
  },
  36595: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk,
      f: () => Kk,
      i: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(36586);

    function bk() {
      const kk = {};
      for (const {
          group: ek
        }
        of Sk.f) kk[ek] = !0;
      return kk
    }
    let rk = bk();

    function Pk() {
      fk.j.tm("replayViewer|uiVisibilityChanged")
    }

    function mk() {
      return rk
    }

    function Mk(kk, ek) {
      rk[kk] !== ek && (rk = {
        ...rk,
        [kk]: ek
      }, "nametag" === kk && Dk.b.set({
        areNametagsHidden: !ek
      }), Pk())
    }

    function Kk() {
      rk = bk(), Dk.b.set({
        areNametagsHidden: !1
      }), Pk()
    }
  },
  59994: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      HOLD_TIMEOUT_MS: () => mk,
      ReplayViewer: () => Kk
    });
    var Dk = ik(36539),
      fk = ik(36576),
      Sk = ik(36571),
      bk = ik(36595),
      rk = ik(4735),
      Pk = ik(42183);
    const mk = 1e4,
      Mk = new Set(["AU"]);
    class Kk {
      constructor(kk) {
        var ek;
        this.deps = kk, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ek = kk.now) && void 0 !== ek ? ek : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== rk.xd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get XM() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Dk.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(kk, ek) {
        var ik, Sk, bk, Pk;
        const {
          client: mk
        } = this.deps;
        if (!this.playback) {
          if (!mk.setPlayback(!0)) throw new Error(Dk.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Mk = this.epoch;
        let Kk;
        try {
          Kk = await mk.open(kk, (() => (0, fk.b)(kk, ek)))
        } finally {
          this.loadingOpens--
        }
        if (Mk !== this.epoch && "reloading" !== Kk) throw new Error(Dk.e.coreStopped.text);
        if ("opening" !== Kk) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const kk = function(kk) {
            switch (kk) {
              case "reloading":
                return null;
              case "stopped":
              case rk.nd.ModuleTrap:
                return Dk.e.coreStopped;
              case rk.nd.ModuleLoad:
                return Dk.e.viewerLoadFailed;
              case rk.nd.TooLarge:
                return Dk.e.cantOpen
            }
          }(Kk);
          if (null === kk) return;
          throw new Error(kk.text)
        }
        return this.rejectSave(new Error(Dk.e.saveClosed.text)), this.fileName = null !== (ik = null !== (Sk = ek.fileName) && void 0 !== Sk ? Sk : null === (bk = ek.fileHandle) || void 0 === bk ? void 0 : bk.name) && void 0 !== ik ? ik : null, this.fileHandle = null !== (Pk = ek.fileHandle) && void 0 !== Pk ? Pk : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((kk, ek) => {
          this.pendingOpen = {
            resolve: kk,
            reject: ek
          }
        }))
      }
      play() {
        this.holds.has("AU") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("AU")
      }
      seek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this.lastView;
        null !== ik && (ek || kk < ik.Px) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, ek)
      }
      setSpeed(kk) {
        this.deps.client.setSpeed(kk)
      }
      setCameraMode(kk) {
        this.deps.client.setCameraMode(kk)
      }
      cycleCameraMode() {
        const kk = this.lastView;
        null !== kk && kk.state !== rk.xd.None && this.setCameraMode(Pk.d[(Pk.d.indexOf(kk.cameraMode) + 1) % Pk.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(kk) {
        this.edited(this.deps.client.setKeyframe(kk))
      }
      moveKeyframe(kk, ek) {
        this.edited(this.deps.client.moveKeyframe(kk, ek))
      }
      deleteKeyframes(kk, ek) {
        this.edited(this.deps.client.deleteKeyframes(kk, ek))
      }
      setMark(kk) {
        this.edited(this.deps.client.setMark(kk))
      }
      crop(kk, ek) {
        return !(ek <= kk) && (null !== this.pendingSave ? (this.deps.notify(Dk.e.saveBusy), !1) : !!this.deps.client.crop(kk, ek) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Dk.e.saveBusy.text)) : new Promise(((kk, ek) => {
          const ik = {
            resolve: kk,
            reject: ek
          };
          this.pendingSave = ik, this.editsAtSave = this.edits, this.deps.client.save((0, Pk.f)()).then((kk => {
            this.pendingSave === ik && this.saveStarted(kk)
          }), (kk => {
            this.pendingSave === ik && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
          }))
        }))
      }
      saveStarted(kk) {
        switch (kk) {
          case "sealing":
            return;
          case "busy":
            return void this.saveFailed(!0);
          case "refused":
            return void(this.saveRefused = !0);
          case "tooLarge":
            return void this.saveFailed(!1)
        }
      }
      markSaved(kk, ek) {
        var ik, Dk;
        this.fileHandle = kk, this.fileName = null !== (ik = null !== (Dk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Dk ? Dk : ek) && void 0 !== ik ? ik : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Dk.e.coreStopped.text)), this.rejectSave(new Error(Dk.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var kk, ek, ik;
        const Dk = this.deps.client.view(),
          fk = Dk !== this.lastView;
        this.lastView = Dk, this.opening && null !== Dk && Dk.state !== rk.xd.None && Dk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, bk.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Dk && Dk.state === rk.xd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Dk && Dk.state !== rk.xd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Sk = 0 === this.settleFrames && 0 === (null !== (kk = null === (ek = (ik = this.deps).meshPending) || void 0 === ek ? void 0 : ek.call(ik)) && void 0 !== kk ? kk : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Sk && this.release("opening"), this.holds.has("seek") && Sk && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Sk && this.release("crop");
        const Pk = this.now();
        for (const [bk, rk] of this.holds) !Mk.has(bk) && Pk - rk >= mk && this.release(bk);
        this.saveRefused && !this.cropping && this.saveFailed(!1), fk && this.deps.onChange()
      }
      cropped() {
        (0, bk.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(kk) {
        switch (kk.reason) {
          case rk.nd.TooLarge:
            break;
          case rk.nd.Open:
          case rk.nd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const ek = (0, Sk.f)(kk.version) ? Dk.e.replayTooOld : Dk.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(ek), this.settleOpen(new Error(ek.text));
            break
          }
          case rk.nd.Crop:
            if (kk.code === rk.md.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Dk.e.cropFailed);
            break;
          case rk.nd.ModuleTrap:
          case rk.nd.ModuleLoad:
          case rk.nd.Port:
            this.moduleEnded(kk.reason === rk.nd.ModuleTrap ? Dk.e.coreStopped : Dk.e.cantOpen);
            break;
          case rk.nd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${kk.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(kk) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(kk), this.settleOpen(new Error(kk.text))
      }
      saveDone(kk) {
        const ek = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ek || void 0 === ek || ek.resolve(kk)
      }
      saveFailed(kk) {
        this.rejectSave(new Error(kk ? Dk.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(kk) {
        kk && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Dk.e.cropBusy.text)) : this.deps.notify(Dk.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(kk) {
        const ek = this.pendingOpen;
        this.pendingOpen = null, null === kk ? null === ek || void 0 === ek || ek.resolve() : null === ek || void 0 === ek || ek.reject(kk)
      }
      rejectSave(kk) {
        const ek = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ek || void 0 === ek || ek.reject(kk)
      }
      hold(kk) {
        const ek = 0 === this.holds.size;
        this.holds.set(kk, this.now()), ek && this.deps.setHoldDraws(!0)
      }
      release(kk) {
        this.holds.delete(kk) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);