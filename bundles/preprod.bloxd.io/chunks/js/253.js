export const id = 253;
export const ids = [253];
export const modules = {
  37880: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      g: () => AU,
      i: () => yU
    });
    const cU = 1024,
      yU = 16,
      QU = 36e4;
    class AU {
      constructor(UU) {
        this.boneCount = UU, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * UU), this.position = new Float64Array(3 * UU), this.scale = new Float64Array(3 * UU).fill(1), this.touched = new Uint8Array(UU)
      }
      clampToLimits() {
        for (let UU = 0; UU < this.boneCount; UU++)
          if (0 !== this.touched[UU])
            for (let XU = 3 * UU; XU < 3 * UU + 3; XU++) {
              const UU = this.rotation[XU],
                zU = this.position[XU],
                AU = this.scale[XU];
              UU >= -36e4 && UU <= QU || (this.rotation[XU] = oU(UU, QU)), zU >= -1024 && zU <= cU || (this.position[XU] = oU(zU, cU)), AU >= -yU && AU <= yU || (this.scale[XU] = oU(AU, yU, 1))
            }
      }
      reset() {
        for (let UU = 0; UU < this.boneCount; UU++)
          if (0 !== this.touched[UU]) {
            this.touched[UU] = 0;
            for (let XU = 3 * UU; XU < 3 * UU + 3; XU++) this.rotation[XU] = 0, this.position[XU] = 0, this.scale[XU] = 1
          }
      }
    }
    class FU {
      constructor(UU) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * UU), this.position = new Float64Array(3 * UU), this.scaleDelta = new Float64Array(3 * UU), this.boneWeight = new Float64Array(UU), this.touched = new Uint8Array(UU), this.overrides = new Uint8Array(UU), this.touchedBones = new Int32Array(UU)
      }
      touch(UU, XU, zU) {
        0 === this.touched[UU] && (this.touched[UU] = 1, this.touchedBones[this.touchedCount++] = UU), this.boneWeight[UU] += XU, zU && (this.overrides[UU] = 1)
      }
      applyTo(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let yU = 0; yU < this.touchedCount; yU++) {
          const QU = this.touchedBones[yU],
            AU = this.boneWeight[QU];
          if (zU || 1 === this.overrides[QU]) {
            const zU = XU * Math.min(1, AU);
            for (let XU = 3 * QU; XU < 3 * QU + 3; XU++) UU.rotation[XU] += (this.rotation[XU] / AU - UU.rotation[XU]) * zU, UU.position[XU] += (this.position[XU] / AU - UU.position[XU]) * zU, UU.scale[XU] += (1 + this.scaleDelta[XU] / AU - UU.scale[XU]) * zU
          } else {
            const zU = cU && AU > 1 ? XU / AU : XU;
            for (let XU = 3 * QU; XU < 3 * QU + 3; XU++) UU.rotation[XU] += this.rotation[XU] * zU, UU.position[XU] += this.position[XU] * zU, UU.scale[XU] *= 1 + this.scaleDelta[XU] * zU
          }
          UU.touched[QU] = 1
        }
      }
      clear() {
        for (let UU = 0; UU < this.touchedCount; UU++) {
          const XU = this.touchedBones[UU];
          this.touched[XU] = 0, this.overrides[XU] = 0, this.boneWeight[XU] = 0;
          for (let UU = 3 * XU; UU < 3 * XU + 3; UU++) this.rotation[UU] = 0, this.position[UU] = 0, this.scaleDelta[UU] = 0
        }
        this.touchedCount = 0
      }
    }

    function oU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(UU) ? zU : Math.min(XU, Math.max(-XU, UU))
    }
  },
  37876: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      g: () => FU
    });
    var cU = zU(37870),
      yU = zU(344),
      QU = zU(1974),
      AU = zU(37880);

    function FU(UU) {
      if ("pX" in UU) return dU.createAnimationScript(UU);
      return new EU(UU).createAnimationScript()
    }

    function oU(UU, XU, zU, yU) {
      const QU = UU.pX <= 0 ? 1 : XU + zU * Math.max(0, yU) / UU.pX;
      return UU.aX === cU.k.LoopOnLastFrame ? QU % 1 : UU.aX === cU.k.NoLoop && QU >= 1 ? null : Math.min(1, QU)
    }
    class DU {
      createAnimationScript(UU) {
        const {
          pX: XU,
          loop: zU,
          tX: cU
        } = UU;
        return {
          pX: Math.round(XU),
          aX: this.createLoopMode(null !== zU && void 0 !== zU && zU),
          tX: this.createNodeSkeletonAnimationScript(null !== cU && void 0 !== cU ? cU : null)
        }
      }
      createLoopMode(UU) {
        switch (UU) {
          case !1:
            return cU.k.NoLoop;
          case !0:
            return cU.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return cU.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${UU}`)
      }
      createNodeSkeletonAnimationScript(UU) {
        if (null === UU) return null;
        const XU = {};
        for (const zU in UU) {
          const cU = UU[zU];
          XU[zU] = this.createNodeAnimationScript(cU)
        }
        return XU
      }
      createNodeAnimationScript(UU) {
        const {
          timeline: XU
        } = UU, zU = XU.filter((UU => Number.isFinite(UU.timeFraction)));
        return zU.sort(((UU, XU) => UU.timeFraction - XU.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(zU, "rotation", IU),
          position: this.createTimelineFromKeyframes(zU, "position", aU),
          scale: this.createTimelineFromKeyframes(zU, "scale", aU, gU)
        }
      }
      createTimelineFromKeyframes(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU => UU;
        const yU = [];
        for (const DU of UU) {
          const UU = DU[XU];
          if (UU) {
            const XU = this.createAnimationFrameWithoutPrecomputes(DU.timeFraction, UU, cU);
            YU(XU) && yU.push(XU)
          }
        }
        const QU = [];
        for (let DU = 0; DU < yU.length; DU++) {
          var AU, FU, oU;
          const UU = yU[DU],
            XU = null !== (AU = yU[DU - 1]) && void 0 !== AU ? AU : UU,
            cU = null !== (FU = yU[DU + 1]) && void 0 !== FU ? FU : UU,
            EU = null !== (oU = yU[DU + 2]) && void 0 !== oU ? oU : cU;
          QU.push({
            ...UU,
            ...zU(XU.post, XU.timeFraction, UU.post, UU.timeFraction, cU.pre, cU.timeFraction, EU.pre, EU.timeFraction)
          })
        }
        return QU
      }
      createAnimationFrameWithoutPrecomputes(UU, XU, zU) {
        let cU, yU, QU = null;
        var AU;
        if ("object" === typeof XU && "point" in XU) QU = null !== (AU = XU.GX) && void 0 !== AU ? AU : null, cU = XU.point, yU = XU.point;
        else if ("object" === typeof XU && "pre" in XU) {
          var FU;
          QU = null !== (FU = XU.GX) && void 0 !== FU ? FU : null, cU = XU.pre, yU = XU.post
        } else cU = XU, yU = XU;
        return {
          timeFraction: UU,
          GX: this.createLerpMode(QU),
          pre: zU(cU),
          post: zU(yU)
        }
      }
      createLerpMode(UU) {
        return null === UU ? cU.i.Linear : DU.LERP_MODE_SCHEMA_MAPPING[UU]
      }
    }
    DU.LERP_MODE_SCHEMA_MAPPING = {
      linear: cU.i.Linear,
      "catmull-rom-spline": cU.i.CatmullRomSpline
    };
    class EU {
      constructor(UU) {
        this.animationSchema = UU
      }
      createAnimationScript() {
        const {
          animation_length: UU,
          loop: XU,
          bones: zU
        } = this.animationSchema;
        return {
          pX: Math.round(1e3 * UU),
          aX: this.createLoopMode(null !== XU && void 0 !== XU && XU),
          tX: this.createNodeSkeletonAnimationScript(null !== zU && void 0 !== zU ? zU : null)
        }
      }
      createLoopMode(UU) {
        switch (UU) {
          case !1:
            return cU.k.NoLoop;
          case !0:
            return cU.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return cU.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${UU}`)
      }
      createNodeSkeletonAnimationScript(UU) {
        if (null === UU) return null;
        const XU = {};
        for (const zU in UU) {
          const cU = UU[zU];
          XU[zU] = this.createNodeAnimationScript(cU)
        }
        return XU
      }
      createNodeAnimationScript(UU) {
        const {
          rotation: XU,
          position: zU,
          scale: cU
        } = UU;
        return {
          rotation: this.createAnimationTimeline(null !== XU && void 0 !== XU ? XU : null, GU, IU, !0),
          position: this.createAnimationTimeline(null !== zU && void 0 !== zU ? zU : null, ZU, aU, !1),
          scale: this.createAnimationTimeline(null !== cU && void 0 !== cU ? cU : null, tU, aU, !1)
        }
      }
      createAnimationTimeline(UU, XU, zU, cU) {
        if (null === UU) return [];
        (Array.isArray(UU) || "number" === typeof UU) && (UU = {
          "0.0": UU
        });
        const yU = Object.entries(UU).map((UU => {
          let [zU, cU] = UU;
          const yU = Number(zU) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(yU, cU, XU)
        })).filter(YU);
        yU.sort(((UU, XU) => UU.timeFraction - XU.timeFraction)), cU && function(UU) {
          for (let XU = 1; XU < UU.length; XU++) {
            const zU = UU[XU - 1].post,
              cU = UU[XU],
              yU = RU(cU.pre),
              QU = RU(cU.post),
              AU = WU(zU, cU.pre);
            WU(zU, yU) < AU && (UU[XU] = {
              ...cU,
              pre: yU,
              post: QU
            })
          }
        }(yU);
        const QU = [];
        for (let DU = 0; DU < yU.length; DU++) {
          var AU, FU, oU;
          const UU = yU[DU],
            XU = null !== (AU = yU[DU - 1]) && void 0 !== AU ? AU : UU,
            cU = null !== (FU = yU[DU + 1]) && void 0 !== FU ? FU : UU,
            EU = null !== (oU = yU[DU + 2]) && void 0 !== oU ? oU : cU;
          QU.push({
            ...UU,
            ...zU(XU.post, XU.timeFraction, UU.post, UU.timeFraction, cU.pre, cU.timeFraction, EU.pre, EU.timeFraction)
          })
        }
        return QU
      }
      createAnimationFrameWithoutPrecomputes(UU, XU, zU) {
        let cU, yU, QU = null;
        if ("object" === typeof XU && "post" in XU) {
          var AU;
          QU = null !== (AU = XU.lerp_mode) && void 0 !== AU ? AU : null, yU = zU(XU.post), cU = void 0 !== XU.pre ? zU(XU.pre) : yU
        } else {
          const UU = zU(XU);
          yU = UU, cU = UU
        }
        return {
          timeFraction: UU,
          GX: this.createLerpMode(QU),
          pre: cU,
          post: yU
        }
      }
      createLerpMode(UU) {
        return null === UU ? cU.i.Linear : EU.LERP_MODE_SCHEMA_MAPPING[UU]
      }
    }

    function YU(UU) {
      return Number.isFinite(UU.timeFraction) && NU(UU.pre) && NU(UU.post)
    }

    function NU(UU) {
      return Number.isFinite(UU[0]) && Number.isFinite(UU[1]) && Number.isFinite(UU[2])
    }

    function IU(UU, XU, zU, cU, yU, QU, AU, FU) {
      const oU = QU - XU,
        DU = QU - cU,
        EU = FU - cU,
        YU = [null, null, null];
      for (let NU = 0; NU < YU.length; NU++) YU[NU] = pU(UU[NU], zU[NU], yU[NU], AU[NU], oU, EU);
      return {
        BX: DU,
        ZX: YU
      }
    }

    function pU(UU, XU, zU, cU, QU, AU) {
      return {
        PX: yU.d.computeShortestRotation(UU, zU) / QU,
        WX: yU.d.computeShortestRotation(XU, cU) / AU,
        delta: yU.d.computeShortestRotation(XU, zU)
      }
    }

    function aU(UU, XU, zU, cU, yU, QU, AU, FU) {
      const oU = QU - XU,
        DU = QU - cU,
        EU = FU - cU,
        YU = [null, null, null];
      for (let NU = 0; NU < YU.length; NU++) YU[NU] = {
        PX: (yU[NU] - UU[NU]) / oU,
        WX: (AU[NU] - zU[NU]) / EU,
        delta: yU[NU] - zU[NU]
      };
      return {
        BX: DU,
        ZX: YU
      }
    }

    function tU(UU) {
      return gU("number" === typeof UU ? [UU, UU, UU] : UU)
    }

    function gU(UU) {
      return [kU(UU[0]), kU(UU[1]), kU(UU[2])]
    }

    function kU(UU) {
      return Number.isFinite(UU) ? Math.min(AU.i, Math.max(-AU.i, UU)) : UU
    }

    function GU(UU) {
      const [XU, zU, cU] = UU, AU = -(0, QU.l)(XU), FU = -(0, QU.l)(zU), oU = (0, QU.l)(cU), DU = yU.d.quaternionFromEulerZYX(AU, FU, oU);
      return yU.d.eulerYXZFromQuaternion(DU)
    }
    EU.LERP_MODE_SCHEMA_MAPPING = {
      linear: cU.i.Linear,
      catmullrom: cU.i.CatmullRomSpline
    };
    const BU = 1 / 16;

    function ZU(UU) {
      return [-UU[0] * BU, UU[1] * BU, UU[2] * BU]
    }

    function RU(UU) {
      const [XU, zU, cU] = UU;
      return [XU >= 0 ? Math.PI - XU : -Math.PI - XU, PU(zU + Math.PI), PU(cU + Math.PI)]
    }

    function PU(UU) {
      return yU.d.mod(UU + Math.PI, 2 * Math.PI) - Math.PI
    }

    function WU(UU, XU) {
      return Math.abs(yU.d.computeShortestRotation(UU[0], XU[0])) + Math.abs(yU.d.computeShortestRotation(UU[1], XU[1])) + Math.abs(yU.d.computeShortestRotation(UU[2], XU[2]))
    }
    const dU = new DU
  },
  37870: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      f: () => QU,
      i: () => cU,
      k: () => yU
    });
    let cU = function(UU) {
        return UU[UU.Linear = 0] = "Linear", UU[UU.CatmullRomSpline = 1] = "CatmullRomSpline", UU
      }({}),
      yU = function(UU) {
        return UU[UU.NoLoop = 0] = "NoLoop", UU[UU.LoopOnLastFrame = 1] = "LoopOnLastFrame", UU[UU.HoldOnLastFrame = 2] = "HoldOnLastFrame", UU
      }({}),
      QU = function(UU) {
        return UU[UU.Movement = 0] = "Movement", UU[UU.Action = 1] = "Action", UU[UU.Emote = 2] = "Emote", UU[UU.Custom = 3] = "Custom", UU
      }({}),
      AU = function(UU) {
        return UU[UU.Start = 0] = "Start", UU[UU.Stop = 1] = "Stop", UU
      }({})
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);