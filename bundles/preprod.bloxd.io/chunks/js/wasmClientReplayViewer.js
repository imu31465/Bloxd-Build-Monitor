export const id = 63;
export const ids = [63];
export const modules = {
  37260: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => JQ,
      f: () => rQ
    });
    var wQ = XQ(663),
      qQ = XQ(43),
      TQ = XQ(37221);
    const zQ = "replayFileKeptForReload",
      sQ = "replayFileKeptForReloadAt",
      FQ = "replayFileKeptForReloadTab",
      PQ = 3e5,
      gQ = 5e3;
    async function JQ(QQ, WQ) {
      const XQ = Date.now(),
        TQ = {
          at: XQ,
          bytes: QQ,
          source: WQ
        },
        PQ = await Promise.race([(async () => await qQ.f.setItem(sQ, XQ) && qQ.f.setItem(zQ, TQ))(), (0, wQ.L)(gQ).then((() => !1))]);
      PQ || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const JQ = {
        at: XQ,
        HI: PQ
      };
      qQ.m.setItem(FQ, JQ)
    }
    async function rQ() {
      var QQ;
      const WQ = qQ.m.getItem(FQ);
      null !== WQ && qQ.m.removeItem(FQ);
      const XQ = Date.now(),
        wQ = await qQ.f.getItem(sQ),
        gQ = null !== WQ && XQ - WQ.at <= PQ,
        JQ = null !== WQ && wQ === WQ.at;
      let rQ = null;
      if (null !== wQ && (JQ || ("number" !== typeof wQ || XQ - wQ > PQ)) && (rQ = gQ && JQ && WQ.HI ? await qQ.f.getItem(zQ) : null, await Promise.all([qQ.f.removeItem(sQ), qQ.f.removeItem(zQ)])), !gQ) return null;
      if ((null === (QQ = rQ) || void 0 === QQ ? void 0 : QQ.at) !== WQ.at) throw new Error(TQ.b.replayNotKept.text);
      return {
        bytes: rQ.bytes,
        source: rQ.source
      }
    }
  },
  37254: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ,
      f: () => TQ,
      g: () => qQ
    });
    const wQ = [9];

    function qQ(QQ) {
      return wQ.includes(QQ)
    }

    function TQ(QQ) {
      return null !== QQ && QQ >= 3 && QQ < wQ[0]
    }
  },
  37269: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ,
      e: () => qQ
    });
    const wQ = "data-replay-ui-active",
      qQ = [{
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
  37275: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      g: () => JQ,
      i: () => gQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(37269);

    function zQ() {
      const QQ = {};
      for (const {
          group: WQ
        }
        of TQ.e) QQ[WQ] = !0;
      return QQ
    }
    let sQ = zQ();

    function FQ() {
      qQ.k.mB("replayViewer|uiVisibilityChanged")
    }

    function PQ() {
      return sQ
    }

    function gQ(QQ, WQ) {
      sQ[QQ] !== WQ && (sQ = {
        ...sQ,
        [QQ]: WQ
      }, "nametag" === QQ && wQ.b.set({
        areNametagsHidden: !WQ
      }), FQ())
    }

    function JQ() {
      sQ = zQ(), wQ.b.set({
        areNametagsHidden: !1
      }), FQ()
    }
  },
  60861: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      HOLD_TIMEOUT_MS: () => PQ,
      ReplayViewer: () => JQ
    });
    var wQ = XQ(37221),
      qQ = XQ(37260),
      TQ = XQ(37254),
      zQ = XQ(37275),
      sQ = XQ(5134),
      FQ = XQ(42867);
    const PQ = 1e4,
      gQ = new Set(["xI"]);
    class JQ {
      constructor(QQ) {
        var WQ;
        this.deps = QQ, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (WQ = QQ.now) && void 0 !== WQ ? WQ : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== sQ.td.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Ds() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? wQ.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(QQ, WQ) {
        var XQ, TQ, zQ, FQ;
        const {
          client: PQ
        } = this.deps;
        if (!this.playback) {
          if (!PQ.setPlayback(!0)) throw new Error(wQ.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const gQ = this.epoch;
        let JQ;
        try {
          JQ = await PQ.open(QQ, (() => (0, qQ.e)(QQ, WQ)))
        } finally {
          this.loadingOpens--
        }
        if (gQ !== this.epoch && "reloading" !== JQ) throw new Error(wQ.b.coreStopped.text);
        if ("opening" !== JQ) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const QQ = function(QQ) {
            switch (QQ) {
              case "reloading":
                return null;
              case "stopped":
              case sQ.id.ModuleTrap:
                return wQ.b.coreStopped;
              case sQ.id.ModuleLoad:
                return wQ.b.viewerLoadFailed;
              case sQ.id.TooLarge:
                return wQ.b.cantOpen
            }
          }(JQ);
          if (null === QQ) return;
          throw new Error(QQ.text)
        }
        return this.rejectSave(new Error(wQ.b.saveClosed.text)), this.fileName = null !== (XQ = null !== (TQ = WQ.fileName) && void 0 !== TQ ? TQ : null === (zQ = WQ.fileHandle) || void 0 === zQ ? void 0 : zQ.name) && void 0 !== XQ ? XQ : null, this.fileHandle = null !== (FQ = WQ.fileHandle) && void 0 !== FQ ? FQ : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((QQ, WQ) => {
          this.pendingOpen = {
            resolve: QQ,
            reject: WQ
          }
        }))
      }
      play() {
        this.holds.has("xI") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("xI")
      }
      seek(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this.lastView;
        null !== XQ && (WQ || QQ < XQ.fJ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(QQ, WQ)
      }
      setSpeed(QQ) {
        this.deps.client.setSpeed(QQ)
      }
      setCameraMode(QQ) {
        this.deps.client.setCameraMode(QQ)
      }
      cycleCameraMode() {
        const QQ = this.lastView;
        null !== QQ && QQ.state !== sQ.td.None && this.setCameraMode(FQ.e[(FQ.e.indexOf(QQ.cameraMode) + 1) % FQ.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(QQ) {
        this.edited(this.deps.client.setKeyframe(QQ))
      }
      moveKeyframe(QQ, WQ) {
        this.edited(this.deps.client.moveKeyframe(QQ, WQ))
      }
      deleteKeyframes(QQ, WQ) {
        this.edited(this.deps.client.deleteKeyframes(QQ, WQ))
      }
      setMark(QQ) {
        this.edited(this.deps.client.setMark(QQ))
      }
      crop(QQ, WQ) {
        return !(WQ <= QQ) && (null !== this.pendingSave ? (this.deps.notify(wQ.b.saveBusy), !1) : !!this.deps.client.crop(QQ, WQ) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(wQ.b.saveBusy.text)) : new Promise(((QQ, WQ) => {
          const XQ = {
            resolve: QQ,
            reject: WQ
          };
          this.pendingSave = XQ, this.editsAtSave = this.edits, this.deps.client.save((0, FQ.i)()).then((QQ => {
            this.pendingSave === XQ && this.saveStarted(QQ)
          }), (QQ => {
            this.pendingSave === XQ && this.rejectSave(QQ instanceof Error ? QQ : new Error(String(QQ)))
          }))
        }))
      }
      saveStarted(QQ) {
        switch (QQ) {
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
      markSaved(QQ, WQ) {
        var XQ, wQ;
        this.fileHandle = QQ, this.fileName = null !== (XQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.name) && void 0 !== wQ ? wQ : WQ) && void 0 !== XQ ? XQ : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(wQ.b.coreStopped.text)), this.rejectSave(new Error(wQ.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var QQ, WQ, XQ;
        const wQ = this.deps.client.view(),
          qQ = wQ !== this.lastView;
        this.lastView = wQ, this.opening && null !== wQ && wQ.state !== sQ.td.None && wQ.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, zQ.g)()), this.cropAsked ? (this.cropAsked = !1, null !== wQ && wQ.state === sQ.td.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== wQ && wQ.state !== sQ.td.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const TQ = 0 === this.settleFrames && 0 === (null !== (QQ = null === (WQ = (XQ = this.deps).meshPending) || void 0 === WQ ? void 0 : WQ.call(XQ)) && void 0 !== QQ ? QQ : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && TQ && this.release("opening"), this.holds.has("seek") && TQ && this.release("seek"), this.holds.has("crop") && !this.cropRunning && TQ && this.release("crop");
        const FQ = this.now();
        for (const [zQ, sQ] of this.holds) !gQ.has(zQ) && FQ - sQ >= PQ && this.release(zQ);
        this.saveRefused && !this.cropping && this.saveFailed(!1), qQ && this.deps.onChange()
      }
      cropped() {
        (0, zQ.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(QQ) {
        switch (QQ.reason) {
          case sQ.id.TooLarge:
            break;
          case sQ.id.Open:
          case sQ.id.NothingStaged: {
            this.opening = !1, this.release("opening");
            const WQ = (0, TQ.f)(QQ.version) ? wQ.b.replayTooOld : wQ.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(WQ), this.settleOpen(new Error(WQ.text));
            break
          }
          case sQ.id.Crop:
            if (QQ.code === sQ.fd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(wQ.b.cropFailed);
            break;
          case sQ.id.ModuleTrap:
          case sQ.id.ModuleLoad:
          case sQ.id.Port:
            this.moduleEnded(QQ.reason === sQ.id.ModuleTrap ? wQ.b.coreStopped : wQ.b.cantOpen);
            break;
          case sQ.id.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${QQ.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(QQ) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(QQ), this.settleOpen(new Error(QQ.text))
      }
      saveDone(QQ) {
        const WQ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === WQ || void 0 === WQ || WQ.resolve(QQ)
      }
      saveFailed(QQ) {
        this.rejectSave(new Error(QQ ? wQ.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(QQ) {
        QQ && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(wQ.b.cropBusy.text)) : this.deps.notify(wQ.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(QQ) {
        const WQ = this.pendingOpen;
        this.pendingOpen = null, null === QQ ? null === WQ || void 0 === WQ || WQ.resolve() : null === WQ || void 0 === WQ || WQ.reject(QQ)
      }
      rejectSave(QQ) {
        const WQ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === WQ || void 0 === WQ || WQ.reject(QQ)
      }
      hold(QQ) {
        const WQ = 0 === this.holds.size;
        this.holds.set(QQ, this.now()), WQ && this.deps.setHoldDraws(!0)
      }
      release(QQ) {
        this.holds.delete(QQ) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);