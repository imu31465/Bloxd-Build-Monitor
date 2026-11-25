export const id = 243;
export const ids = [243];
export const modules = {
  37446: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      d: () => zQ,
      e: () => qQ
    });
    const wQ = 1024,
      qQ = 16,
      TQ = 36e4;
    class zQ {
      constructor(QQ) {
        this.boneCount = QQ, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * QQ), this.position = new Float64Array(3 * QQ), this.scale = new Float64Array(3 * QQ).fill(1), this.touched = new Uint8Array(QQ)
      }
      clampToLimits() {
        for (let QQ = 0; QQ < this.boneCount; QQ++)
          if (0 !== this.touched[QQ])
            for (let WQ = 3 * QQ; WQ < 3 * QQ + 3; WQ++) {
              const QQ = this.rotation[WQ],
                XQ = this.position[WQ],
                zQ = this.scale[WQ];
              QQ >= -36e4 && QQ <= TQ || (this.rotation[WQ] = FQ(QQ, TQ)), XQ >= -1024 && XQ <= wQ || (this.position[WQ] = FQ(XQ, wQ)), zQ >= -qQ && zQ <= qQ || (this.scale[WQ] = FQ(zQ, qQ, 1))
            }
      }
      reset() {
        for (let QQ = 0; QQ < this.boneCount; QQ++)
          if (0 !== this.touched[QQ]) {
            this.touched[QQ] = 0;
            for (let WQ = 3 * QQ; WQ < 3 * QQ + 3; WQ++) this.rotation[WQ] = 0, this.position[WQ] = 0, this.scale[WQ] = 1
          }
      }
    }
    class sQ {
      constructor(QQ) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * QQ), this.position = new Float64Array(3 * QQ), this.scaleDelta = new Float64Array(3 * QQ), this.boneWeight = new Float64Array(QQ), this.touched = new Uint8Array(QQ), this.overrides = new Uint8Array(QQ), this.touchedBones = new Int32Array(QQ)
      }
      touch(QQ, WQ, XQ) {
        0 === this.touched[QQ] && (this.touched[QQ] = 1, this.touchedBones[this.touchedCount++] = QQ), this.boneWeight[QQ] += WQ, XQ && (this.overrides[QQ] = 1)
      }
      applyTo(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let qQ = 0; qQ < this.touchedCount; qQ++) {
          const TQ = this.touchedBones[qQ],
            zQ = this.boneWeight[TQ];
          if (XQ || 1 === this.overrides[TQ]) {
            const XQ = WQ * Math.min(1, zQ);
            for (let WQ = 3 * TQ; WQ < 3 * TQ + 3; WQ++) QQ.rotation[WQ] += (this.rotation[WQ] / zQ - QQ.rotation[WQ]) * XQ, QQ.position[WQ] += (this.position[WQ] / zQ - QQ.position[WQ]) * XQ, QQ.scale[WQ] += (1 + this.scaleDelta[WQ] / zQ - QQ.scale[WQ]) * XQ
          } else {
            const XQ = wQ && zQ > 1 ? WQ / zQ : WQ;
            for (let WQ = 3 * TQ; WQ < 3 * TQ + 3; WQ++) QQ.rotation[WQ] += this.rotation[WQ] * XQ, QQ.position[WQ] += this.position[WQ] * XQ, QQ.scale[WQ] *= 1 + this.scaleDelta[WQ] * XQ
          }
          QQ.touched[TQ] = 1
        }
      }
      clear() {
        for (let QQ = 0; QQ < this.touchedCount; QQ++) {
          const WQ = this.touchedBones[QQ];
          this.touched[WQ] = 0, this.overrides[WQ] = 0, this.boneWeight[WQ] = 0;
          for (let QQ = 3 * WQ; QQ < 3 * WQ + 3; QQ++) this.rotation[QQ] = 0, this.position[QQ] = 0, this.scaleDelta[QQ] = 0
        }
        this.touchedCount = 0
      }
    }

    function FQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(QQ) ? XQ : Math.min(WQ, Math.max(-WQ, QQ))
    }
  },
  37437: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => FQ,
      f: () => sQ
    });
    var wQ = XQ(37428),
      qQ = XQ(402),
      TQ = XQ(1972),
      zQ = XQ(37446);

    function sQ(QQ) {
      if ("ew" in QQ) return HQ.createAnimationScript(QQ);
      return new gQ(QQ).createAnimationScript()
    }

    function FQ(QQ, WQ, XQ, qQ) {
      const TQ = QQ.ew <= 0 ? 1 : WQ + XQ * Math.max(0, qQ) / QQ.ew;
      return QQ.nw === wQ.n.LoopOnLastFrame ? TQ % 1 : QQ.nw === wQ.n.NoLoop && TQ >= 1 ? null : Math.min(1, TQ)
    }
    class PQ {
      createAnimationScript(QQ) {
        const {
          ew: WQ,
          loop: XQ,
          xw: wQ
        } = QQ;
        return {
          ew: Math.round(WQ),
          nw: this.createLoopMode(null !== XQ && void 0 !== XQ && XQ),
          xw: this.createNodeSkeletonAnimationScript(null !== wQ && void 0 !== wQ ? wQ : null)
        }
      }
      createLoopMode(QQ) {
        switch (QQ) {
          case !1:
            return wQ.n.NoLoop;
          case !0:
            return wQ.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return wQ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${QQ}`)
      }
      createNodeSkeletonAnimationScript(QQ) {
        if (null === QQ) return null;
        const WQ = {};
        for (const XQ in QQ) {
          const wQ = QQ[XQ];
          WQ[XQ] = this.createNodeAnimationScript(wQ)
        }
        return WQ
      }
      createNodeAnimationScript(QQ) {
        const {
          timeline: WQ
        } = QQ, XQ = WQ.filter((QQ => Number.isFinite(QQ.timeFraction)));
        return XQ.sort(((QQ, WQ) => QQ.timeFraction - WQ.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(XQ, "rotation", IQ),
          position: this.createTimelineFromKeyframes(XQ, "position", BQ),
          scale: this.createTimelineFromKeyframes(XQ, "scale", BQ, VQ)
        }
      }
      createTimelineFromKeyframes(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ => QQ;
        const qQ = [];
        for (const PQ of QQ) {
          const QQ = PQ[WQ];
          if (QQ) {
            const WQ = this.createAnimationFrameWithoutPrecomputes(PQ.timeFraction, QQ, wQ);
            JQ(WQ) && qQ.push(WQ)
          }
        }
        const TQ = [];
        for (let PQ = 0; PQ < qQ.length; PQ++) {
          var zQ, sQ, FQ;
          const QQ = qQ[PQ],
            WQ = null !== (zQ = qQ[PQ - 1]) && void 0 !== zQ ? zQ : QQ,
            wQ = null !== (sQ = qQ[PQ + 1]) && void 0 !== sQ ? sQ : QQ,
            gQ = null !== (FQ = qQ[PQ + 2]) && void 0 !== FQ ? FQ : wQ;
          TQ.push({
            ...QQ,
            ...XQ(WQ.post, WQ.timeFraction, QQ.post, QQ.timeFraction, wQ.pre, wQ.timeFraction, gQ.pre, gQ.timeFraction)
          })
        }
        return TQ
      }
      createAnimationFrameWithoutPrecomputes(QQ, WQ, XQ) {
        let wQ, qQ, TQ = null;
        var zQ;
        if ("object" === typeof WQ && "point" in WQ) TQ = null !== (zQ = WQ.Zw) && void 0 !== zQ ? zQ : null, wQ = WQ.point, qQ = WQ.point;
        else if ("object" === typeof WQ && "pre" in WQ) {
          var sQ;
          TQ = null !== (sQ = WQ.Zw) && void 0 !== sQ ? sQ : null, wQ = WQ.pre, qQ = WQ.post
        } else wQ = WQ, qQ = WQ;
        return {
          timeFraction: QQ,
          Zw: this.createLerpMode(TQ),
          pre: XQ(wQ),
          post: XQ(qQ)
        }
      }
      createLerpMode(QQ) {
        return null === QQ ? wQ.j.Linear : PQ.LERP_MODE_SCHEMA_MAPPING[QQ]
      }
    }
    PQ.LERP_MODE_SCHEMA_MAPPING = {
      linear: wQ.j.Linear,
      "catmull-rom-spline": wQ.j.CatmullRomSpline
    };
    class gQ {
      constructor(QQ) {
        this.animationSchema = QQ
      }
      createAnimationScript() {
        const {
          animation_length: QQ,
          loop: WQ,
          bones: XQ
        } = this.animationSchema;
        return {
          ew: Math.round(1e3 * QQ),
          nw: this.createLoopMode(null !== WQ && void 0 !== WQ && WQ),
          xw: this.createNodeSkeletonAnimationScript(null !== XQ && void 0 !== XQ ? XQ : null)
        }
      }
      createLoopMode(QQ) {
        switch (QQ) {
          case !1:
            return wQ.n.NoLoop;
          case !0:
            return wQ.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return wQ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${QQ}`)
      }
      createNodeSkeletonAnimationScript(QQ) {
        if (null === QQ) return null;
        const WQ = {};
        for (const XQ in QQ) {
          const wQ = QQ[XQ];
          WQ[XQ] = this.createNodeAnimationScript(wQ)
        }
        return WQ
      }
      createNodeAnimationScript(QQ) {
        const {
          rotation: WQ,
          position: XQ,
          scale: wQ
        } = QQ;
        return {
          rotation: this.createAnimationTimeline(null !== WQ && void 0 !== WQ ? WQ : null, pQ, IQ, !0),
          position: this.createAnimationTimeline(null !== XQ && void 0 !== XQ ? XQ : null, UQ, BQ, !1),
          scale: this.createAnimationTimeline(null !== wQ && void 0 !== wQ ? wQ : null, yQ, BQ, !1)
        }
      }
      createAnimationTimeline(QQ, WQ, XQ, wQ) {
        if (null === QQ) return [];
        (Array.isArray(QQ) || "number" === typeof QQ) && (QQ = {
          "0.0": QQ
        });
        const qQ = Object.entries(QQ).map((QQ => {
          let [XQ, wQ] = QQ;
          const qQ = Number(XQ) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(qQ, wQ, WQ)
        })).filter(JQ);
        qQ.sort(((QQ, WQ) => QQ.timeFraction - WQ.timeFraction)), wQ && function(QQ) {
          for (let WQ = 1; WQ < QQ.length; WQ++) {
            const XQ = QQ[WQ - 1].post,
              wQ = QQ[WQ],
              qQ = bQ(wQ.pre),
              TQ = bQ(wQ.post),
              zQ = dQ(XQ, wQ.pre);
            dQ(XQ, qQ) < zQ && (QQ[WQ] = {
              ...wQ,
              pre: qQ,
              post: TQ
            })
          }
        }(qQ);
        const TQ = [];
        for (let PQ = 0; PQ < qQ.length; PQ++) {
          var zQ, sQ, FQ;
          const QQ = qQ[PQ],
            WQ = null !== (zQ = qQ[PQ - 1]) && void 0 !== zQ ? zQ : QQ,
            wQ = null !== (sQ = qQ[PQ + 1]) && void 0 !== sQ ? sQ : QQ,
            gQ = null !== (FQ = qQ[PQ + 2]) && void 0 !== FQ ? FQ : wQ;
          TQ.push({
            ...QQ,
            ...XQ(WQ.post, WQ.timeFraction, QQ.post, QQ.timeFraction, wQ.pre, wQ.timeFraction, gQ.pre, gQ.timeFraction)
          })
        }
        return TQ
      }
      createAnimationFrameWithoutPrecomputes(QQ, WQ, XQ) {
        let wQ, qQ, TQ = null;
        if ("object" === typeof WQ && "post" in WQ) {
          var zQ;
          TQ = null !== (zQ = WQ.lerp_mode) && void 0 !== zQ ? zQ : null, qQ = XQ(WQ.post), wQ = void 0 !== WQ.pre ? XQ(WQ.pre) : qQ
        } else {
          const QQ = XQ(WQ);
          qQ = QQ, wQ = QQ
        }
        return {
          timeFraction: QQ,
          Zw: this.createLerpMode(TQ),
          pre: wQ,
          post: qQ
        }
      }
      createLerpMode(QQ) {
        return null === QQ ? wQ.j.Linear : gQ.LERP_MODE_SCHEMA_MAPPING[QQ]
      }
    }

    function JQ(QQ) {
      return Number.isFinite(QQ.timeFraction) && rQ(QQ.pre) && rQ(QQ.post)
    }

    function rQ(QQ) {
      return Number.isFinite(QQ[0]) && Number.isFinite(QQ[1]) && Number.isFinite(QQ[2])
    }

    function IQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
      const FQ = TQ - WQ,
        PQ = TQ - wQ,
        gQ = sQ - wQ,
        JQ = [null, null, null];
      for (let rQ = 0; rQ < JQ.length; rQ++) JQ[rQ] = jQ(QQ[rQ], XQ[rQ], qQ[rQ], zQ[rQ], FQ, gQ);
      return {
        Ow: PQ,
        Kw: JQ
      }
    }

    function jQ(QQ, WQ, XQ, wQ, TQ, zQ) {
      return {
        Mw: qQ.b.computeShortestRotation(QQ, XQ) / TQ,
        Qq: qQ.b.computeShortestRotation(WQ, wQ) / zQ,
        delta: qQ.b.computeShortestRotation(WQ, XQ)
      }
    }

    function BQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
      const FQ = TQ - WQ,
        PQ = TQ - wQ,
        gQ = sQ - wQ,
        JQ = [null, null, null];
      for (let rQ = 0; rQ < JQ.length; rQ++) JQ[rQ] = {
        Mw: (qQ[rQ] - QQ[rQ]) / FQ,
        Qq: (zQ[rQ] - XQ[rQ]) / gQ,
        delta: qQ[rQ] - XQ[rQ]
      };
      return {
        Ow: PQ,
        Kw: JQ
      }
    }

    function yQ(QQ) {
      return VQ("number" === typeof QQ ? [QQ, QQ, QQ] : QQ)
    }

    function VQ(QQ) {
      return [DQ(QQ[0]), DQ(QQ[1]), DQ(QQ[2])]
    }

    function DQ(QQ) {
      return Number.isFinite(QQ) ? Math.min(zQ.e, Math.max(-zQ.e, QQ)) : QQ
    }

    function pQ(QQ) {
      const [WQ, XQ, wQ] = QQ, zQ = -(0, TQ.j)(WQ), sQ = -(0, TQ.j)(XQ), FQ = (0, TQ.j)(wQ), PQ = qQ.b.quaternionFromEulerZYX(zQ, sQ, FQ);
      return qQ.b.eulerYXZFromQuaternion(PQ)
    }
    gQ.LERP_MODE_SCHEMA_MAPPING = {
      linear: wQ.j.Linear,
      catmullrom: wQ.j.CatmullRomSpline
    };
    const GQ = 1 / 16;

    function UQ(QQ) {
      return [-QQ[0] * GQ, QQ[1] * GQ, QQ[2] * GQ]
    }

    function bQ(QQ) {
      const [WQ, XQ, wQ] = QQ;
      return [WQ >= 0 ? Math.PI - WQ : -Math.PI - WQ, vQ(XQ + Math.PI), vQ(wQ + Math.PI)]
    }

    function vQ(QQ) {
      return qQ.b.mod(QQ + Math.PI, 2 * Math.PI) - Math.PI
    }

    function dQ(QQ, WQ) {
      return Math.abs(qQ.b.computeShortestRotation(QQ[0], WQ[0])) + Math.abs(qQ.b.computeShortestRotation(QQ[1], WQ[1])) + Math.abs(qQ.b.computeShortestRotation(QQ[2], WQ[2]))
    }
    const HQ = new PQ
  },
  37428: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      g: () => TQ,
      j: () => wQ,
      n: () => qQ
    });
    let wQ = function(QQ) {
        return QQ[QQ.Linear = 0] = "Linear", QQ[QQ.CatmullRomSpline = 1] = "CatmullRomSpline", QQ
      }({}),
      qQ = function(QQ) {
        return QQ[QQ.NoLoop = 0] = "NoLoop", QQ[QQ.LoopOnLastFrame = 1] = "LoopOnLastFrame", QQ[QQ.HoldOnLastFrame = 2] = "HoldOnLastFrame", QQ
      }({}),
      TQ = function(QQ) {
        return QQ[QQ.Movement = 0] = "Movement", QQ[QQ.Action = 1] = "Action", QQ[QQ.Emote = 2] = "Emote", QQ[QQ.Custom = 3] = "Custom", QQ
      }({}),
      zQ = function(QQ) {
        return QQ[QQ.Start = 0] = "Start", QQ[QQ.Stop = 1] = "Stop", QQ
      }({})
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);