export const id = 57;
export const ids = [57];
export const modules = {
  36405: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      h: () => Wz
    });
    const Fz = "data-replay-ui-active",
      Wz = [{
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
  36407: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Uz,
      e: () => uz,
      i: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(36405);

    function Oz() {
      const zz = {};
      for (const {
          group: tz
        }
        of Xz.h) zz[tz] = !0;
      return zz
    }
    let oz = Oz();

    function vz() {
      Wz.o.Yg("replayViewer|uiVisibilityChanged")
    }

    function Uz() {
      return oz
    }

    function Kz(zz, tz) {
      oz[zz] !== tz && (oz = {
        ...oz,
        [zz]: tz
      }, "nametag" === zz && Fz.b.set({
        areNametagsHidden: !tz
      }), vz())
    }

    function uz() {
      oz = Oz(), Fz.b.set({
        areNametagsHidden: !1
      }), vz()
    }
  },
  41688: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      HOLD_TIMEOUT_MS: () => oz,
      ReplayViewer: () => Uz
    });
    var Fz = sz(36394),
      Wz = sz(36407),
      Xz = sz(4432),
      Oz = sz(41652);
    const oz = 1e4,
      vz = new Set(["Cw"]);
    class Uz {
      constructor(zz) {
        var tz;
        this.deps = zz, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (tz = zz.now) && void 0 !== tz ? tz : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Xz.ad.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get po() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Fz.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(zz, tz) {
        var sz, Wz, Oz, oz;
        const {
          client: vz
        } = this.deps;
        if (!this.playback) {
          if (!vz.setPlayback(!0)) throw new Error(Fz.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Uz = this.epoch;
        let Kz;
        try {
          Kz = await vz.open(zz)
        } finally {
          this.loadingOpens--
        }
        if (Uz !== this.epoch) throw new Error(Fz.d.coreStopped.text);
        if ("opening" !== Kz) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const zz = function(zz) {
            switch (zz) {
              case "reloading":
                return null;
              case "stopped":
              case Xz.Rc.ModuleTrap:
                return Fz.d.coreStopped;
              case Xz.Rc.ModuleLoad:
                return Fz.d.viewerLoadFailed;
              case Xz.Rc.TooLarge:
                return Fz.d.cantOpen
            }
          }(Kz);
          if (null === zz) return;
          throw new Error(zz.text)
        }
        return this.rejectSave(new Error(Fz.d.saveClosed.text)), this.fileName = null !== (sz = null !== (Wz = tz.fileName) && void 0 !== Wz ? Wz : null === (Oz = tz.fileHandle) || void 0 === Oz ? void 0 : Oz.name) && void 0 !== sz ? sz : null, this.fileHandle = null !== (oz = tz.fileHandle) && void 0 !== oz ? oz : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((zz, tz) => {
          this.pendingOpen = {
            resolve: zz,
            reject: tz
          }
        }))
      }
      play() {
        this.holds.has("Cw") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Cw")
      }
      seek(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this.lastView;
        null !== sz && (tz || zz < sz.wN) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(zz, tz)
      }
      setSpeed(zz) {
        this.deps.client.setSpeed(zz)
      }
      setCameraMode(zz) {
        this.deps.client.setCameraMode(zz)
      }
      cycleCameraMode() {
        const zz = this.lastView;
        null !== zz && zz.state !== Xz.ad.None && this.setCameraMode(Oz.e[(Oz.e.indexOf(zz.cameraMode) + 1) % Oz.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(zz) {
        this.edited(this.deps.client.setKeyframe(zz))
      }
      moveKeyframe(zz, tz) {
        this.edited(this.deps.client.moveKeyframe(zz, tz))
      }
      deleteKeyframes(zz, tz) {
        this.edited(this.deps.client.deleteKeyframes(zz, tz))
      }
      setMark(zz) {
        this.edited(this.deps.client.setMark(zz))
      }
      crop(zz, tz) {
        return !(tz <= zz) && (null !== this.pendingSave ? (this.deps.notify(Fz.d.saveBusy), !1) : !!this.deps.client.crop(zz, tz) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Fz.d.saveBusy.text)) : new Promise(((zz, tz) => {
          const sz = {
            resolve: zz,
            reject: tz
          };
          this.pendingSave = sz, this.editsAtSave = this.edits, this.deps.client.save((0, Oz.h)()).then((zz => {
            this.pendingSave === sz && this.saveStarted(zz)
          }), (zz => {
            this.pendingSave === sz && this.rejectSave(zz instanceof Error ? zz : new Error(String(zz)))
          }))
        }))
      }
      saveStarted(zz) {
        switch (zz) {
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
      markSaved(zz, tz) {
        var sz, Fz;
        this.fileHandle = zz, this.fileName = null !== (sz = null !== (Fz = null === zz || void 0 === zz ? void 0 : zz.name) && void 0 !== Fz ? Fz : tz) && void 0 !== sz ? sz : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Fz.d.coreStopped.text)), this.rejectSave(new Error(Fz.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var zz, tz, sz;
        const Fz = this.deps.client.view(),
          Oz = Fz !== this.lastView;
        this.lastView = Fz, this.opening && null !== Fz && Fz.state !== Xz.ad.None && Fz.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Wz.e)()), this.cropAsked ? (this.cropAsked = !1, null !== Fz && Fz.state === Xz.ad.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Fz && Fz.state !== Xz.ad.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Uz = 0 === this.settleFrames && 0 === (null !== (zz = null === (tz = (sz = this.deps).meshPending) || void 0 === tz ? void 0 : tz.call(sz)) && void 0 !== zz ? zz : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Uz && this.release("opening"), this.holds.has("seek") && Uz && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Uz && this.release("crop");
        const Kz = this.now();
        for (const [Wz, Xz] of this.holds) !vz.has(Wz) && Kz - Xz >= oz && (this.release(Wz), "opening" === Wz && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Oz && this.deps.onChange()
      }
      cropped() {
        (0, Wz.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(zz) {
        switch (zz.reason) {
          case Xz.Rc.TooLarge:
            break;
          case Xz.Rc.Open:
          case Xz.Rc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Fz.d.cantOpen), this.settleOpen(new Error(Fz.d.cantOpen.text));
            break;
          case Xz.Rc.Crop:
            if (zz.code === Xz.Oc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Fz.d.cropFailed);
            break;
          case Xz.Rc.ModuleTrap:
          case Xz.Rc.ModuleLoad:
          case Xz.Rc.Port:
            this.moduleEnded(zz.reason === Xz.Rc.ModuleTrap ? Fz.d.coreStopped : Fz.d.cantOpen);
            break;
          case Xz.Rc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${zz.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(zz) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(zz), this.settleOpen(new Error(zz.text))
      }
      saveDone(zz) {
        const tz = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === tz || void 0 === tz || tz.resolve(zz)
      }
      saveFailed(zz) {
        this.rejectSave(new Error(zz ? Fz.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(zz) {
        zz && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Fz.d.cropBusy.text)) : this.deps.notify(Fz.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(zz) {
        const tz = this.pendingOpen;
        this.pendingOpen = null, null === zz ? null === tz || void 0 === tz || tz.resolve() : null === tz || void 0 === tz || tz.reject(zz)
      }
      rejectSave(zz) {
        const tz = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === tz || void 0 === tz || tz.reject(zz)
      }
      hold(zz) {
        const tz = 0 === this.holds.size;
        this.holds.set(zz, this.now()), tz && this.deps.setHoldDraws(!0)
      }
      release(zz) {
        this.holds.delete(zz) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);