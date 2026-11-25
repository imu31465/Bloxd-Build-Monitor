export const id = 239;
export const ids = [239];
export const modules = {
  37201: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      g: () => GB,
      h: () => JB
    });
    const TB = 1024,
      JB = 16,
      oB = 36e4;
    class GB {
      constructor(BB) {
        this.boneCount = BB, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * BB), this.position = new Float64Array(3 * BB), this.scale = new Float64Array(3 * BB).fill(1), this.touched = new Uint8Array(BB)
      }
      clampToLimits() {
        for (let BB = 0; BB < this.boneCount; BB++)
          if (0 !== this.touched[BB])
            for (let IB = 3 * BB; IB < 3 * BB + 3; IB++) {
              const BB = this.rotation[IB],
                ZB = this.position[IB],
                GB = this.scale[IB];
              BB >= -36e4 && BB <= oB || (this.rotation[IB] = kB(BB, oB)), ZB >= -1024 && ZB <= TB || (this.position[IB] = kB(ZB, TB)), GB >= -JB && GB <= JB || (this.scale[IB] = kB(GB, JB, 1))
            }
      }
      reset() {
        for (let BB = 0; BB < this.boneCount; BB++)
          if (0 !== this.touched[BB]) {
            this.touched[BB] = 0;
            for (let IB = 3 * BB; IB < 3 * BB + 3; IB++) this.rotation[IB] = 0, this.position[IB] = 0, this.scale[IB] = 1
          }
      }
    }
    class vB {
      constructor(BB) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * BB), this.position = new Float64Array(3 * BB), this.scaleDelta = new Float64Array(3 * BB), this.boneWeight = new Float64Array(BB), this.touched = new Uint8Array(BB), this.overrides = new Uint8Array(BB), this.touchedBones = new Int32Array(BB)
      }
      touch(BB, IB, ZB) {
        0 === this.touched[BB] && (this.touched[BB] = 1, this.touchedBones[this.touchedCount++] = BB), this.boneWeight[BB] += IB, ZB && (this.overrides[BB] = 1)
      }
      applyTo(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let JB = 0; JB < this.touchedCount; JB++) {
          const oB = this.touchedBones[JB],
            GB = this.boneWeight[oB];
          if (ZB || 1 === this.overrides[oB]) {
            const ZB = IB * Math.min(1, GB);
            for (let IB = 3 * oB; IB < 3 * oB + 3; IB++) BB.rotation[IB] += (this.rotation[IB] / GB - BB.rotation[IB]) * ZB, BB.position[IB] += (this.position[IB] / GB - BB.position[IB]) * ZB, BB.scale[IB] += (1 + this.scaleDelta[IB] / GB - BB.scale[IB]) * ZB
          } else {
            const ZB = TB && GB > 1 ? IB / GB : IB;
            for (let IB = 3 * oB; IB < 3 * oB + 3; IB++) BB.rotation[IB] += this.rotation[IB] * ZB, BB.position[IB] += this.position[IB] * ZB, BB.scale[IB] *= 1 + this.scaleDelta[IB] * ZB
          }
          BB.touched[oB] = 1
        }
      }
      clear() {
        for (let BB = 0; BB < this.touchedCount; BB++) {
          const IB = this.touchedBones[BB];
          this.touched[IB] = 0, this.overrides[IB] = 0, this.boneWeight[IB] = 0;
          for (let BB = 3 * IB; BB < 3 * IB + 3; BB++) this.rotation[BB] = 0, this.position[BB] = 0, this.scaleDelta[BB] = 0
        }
        this.touchedCount = 0
      }
    }

    function kB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(BB) ? ZB : Math.min(IB, Math.max(-IB, BB))
    }
  },
  37194: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB,
      d: () => vB
    });
    var TB = ZB(37188),
      JB = ZB(360),
      oB = ZB(1956),
      GB = ZB(37201);

    function vB(BB) {
      if ("lT" in BB) return OB.createAnimationScript(BB);
      return new nB(BB).createAnimationScript()
    }

    function kB(BB, IB, ZB, JB) {
      const oB = BB.lT <= 0 ? 1 : IB + ZB * Math.max(0, JB) / BB.lT;
      return BB.AT === TB.l.LoopOnLastFrame ? oB % 1 : BB.AT === TB.l.NoLoop && oB >= 1 ? null : Math.min(1, oB)
    }
    class cB {
      createAnimationScript(BB) {
        const {
          lT: IB,
          loop: ZB,
          tT: TB
        } = BB;
        return {
          lT: Math.round(IB),
          AT: this.createLoopMode(null !== ZB && void 0 !== ZB && ZB),
          tT: this.createNodeSkeletonAnimationScript(null !== TB && void 0 !== TB ? TB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return TB.l.NoLoop;
          case !0:
            return TB.l.LoopOnLastFrame;
          case "hold-on-last-frame":
            return TB.l.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const IB = {};
        for (const ZB in BB) {
          const TB = BB[ZB];
          IB[ZB] = this.createNodeAnimationScript(TB)
        }
        return IB
      }
      createNodeAnimationScript(BB) {
        const {
          timeline: IB
        } = BB, ZB = IB.filter((BB => Number.isFinite(BB.timeFraction)));
        return ZB.sort(((BB, IB) => BB.timeFraction - IB.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ZB, "rotation", FB),
          position: this.createTimelineFromKeyframes(ZB, "position", gB),
          scale: this.createTimelineFromKeyframes(ZB, "scale", gB, yB)
        }
      }
      createTimelineFromKeyframes(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => BB;
        const JB = [];
        for (const cB of BB) {
          const BB = cB[IB];
          if (BB) {
            const IB = this.createAnimationFrameWithoutPrecomputes(cB.timeFraction, BB, TB);
            hB(IB) && JB.push(IB)
          }
        }
        const oB = [];
        for (let cB = 0; cB < JB.length; cB++) {
          var GB, vB, kB;
          const BB = JB[cB],
            IB = null !== (GB = JB[cB - 1]) && void 0 !== GB ? GB : BB,
            TB = null !== (vB = JB[cB + 1]) && void 0 !== vB ? vB : BB,
            nB = null !== (kB = JB[cB + 2]) && void 0 !== kB ? kB : TB;
          oB.push({
            ...BB,
            ...ZB(IB.post, IB.timeFraction, BB.post, BB.timeFraction, TB.pre, TB.timeFraction, nB.pre, nB.timeFraction)
          })
        }
        return oB
      }
      createAnimationFrameWithoutPrecomputes(BB, IB, ZB) {
        let TB, JB, oB = null;
        var GB;
        if ("object" === typeof IB && "point" in IB) oB = null !== (GB = IB.ET) && void 0 !== GB ? GB : null, TB = IB.point, JB = IB.point;
        else if ("object" === typeof IB && "pre" in IB) {
          var vB;
          oB = null !== (vB = IB.ET) && void 0 !== vB ? vB : null, TB = IB.pre, JB = IB.post
        } else TB = IB, JB = IB;
        return {
          timeFraction: BB,
          ET: this.createLerpMode(oB),
          pre: ZB(TB),
          post: ZB(JB)
        }
      }
      createLerpMode(BB) {
        return null === BB ? TB.j.Linear : cB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }
    cB.LERP_MODE_SCHEMA_MAPPING = {
      linear: TB.j.Linear,
      "catmull-rom-spline": TB.j.CatmullRomSpline
    };
    class nB {
      constructor(BB) {
        this.animationSchema = BB
      }
      createAnimationScript() {
        const {
          animation_length: BB,
          loop: IB,
          bones: ZB
        } = this.animationSchema;
        return {
          lT: Math.round(1e3 * BB),
          AT: this.createLoopMode(null !== IB && void 0 !== IB && IB),
          tT: this.createNodeSkeletonAnimationScript(null !== ZB && void 0 !== ZB ? ZB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return TB.l.NoLoop;
          case !0:
            return TB.l.LoopOnLastFrame;
          case "hold_on_last_frame":
            return TB.l.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const IB = {};
        for (const ZB in BB) {
          const TB = BB[ZB];
          IB[ZB] = this.createNodeAnimationScript(TB)
        }
        return IB
      }
      createNodeAnimationScript(BB) {
        const {
          rotation: IB,
          position: ZB,
          scale: TB
        } = BB;
        return {
          rotation: this.createAnimationTimeline(null !== IB && void 0 !== IB ? IB : null, WB, FB, !0),
          position: this.createAnimationTimeline(null !== ZB && void 0 !== ZB ? ZB : null, CB, gB, !1),
          scale: this.createAnimationTimeline(null !== TB && void 0 !== TB ? TB : null, qB, gB, !1)
        }
      }
      createAnimationTimeline(BB, IB, ZB, TB) {
        if (null === BB) return [];
        (Array.isArray(BB) || "number" === typeof BB) && (BB = {
          "0.0": BB
        });
        const JB = Object.entries(BB).map((BB => {
          let [ZB, TB] = BB;
          const JB = Number(ZB) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(JB, TB, IB)
        })).filter(hB);
        JB.sort(((BB, IB) => BB.timeFraction - IB.timeFraction)), TB && function(BB) {
          for (let IB = 1; IB < BB.length; IB++) {
            const ZB = BB[IB - 1].post,
              TB = BB[IB],
              JB = QB(TB.pre),
              oB = QB(TB.post),
              GB = wB(ZB, TB.pre);
            wB(ZB, JB) < GB && (BB[IB] = {
              ...TB,
              pre: JB,
              post: oB
            })
          }
        }(JB);
        const oB = [];
        for (let cB = 0; cB < JB.length; cB++) {
          var GB, vB, kB;
          const BB = JB[cB],
            IB = null !== (GB = JB[cB - 1]) && void 0 !== GB ? GB : BB,
            TB = null !== (vB = JB[cB + 1]) && void 0 !== vB ? vB : BB,
            nB = null !== (kB = JB[cB + 2]) && void 0 !== kB ? kB : TB;
          oB.push({
            ...BB,
            ...ZB(IB.post, IB.timeFraction, BB.post, BB.timeFraction, TB.pre, TB.timeFraction, nB.pre, nB.timeFraction)
          })
        }
        return oB
      }
      createAnimationFrameWithoutPrecomputes(BB, IB, ZB) {
        let TB, JB, oB = null;
        if ("object" === typeof IB && "post" in IB) {
          var GB;
          oB = null !== (GB = IB.lerp_mode) && void 0 !== GB ? GB : null, JB = ZB(IB.post), TB = void 0 !== IB.pre ? ZB(IB.pre) : JB
        } else {
          const BB = ZB(IB);
          JB = BB, TB = BB
        }
        return {
          timeFraction: BB,
          ET: this.createLerpMode(oB),
          pre: TB,
          post: JB
        }
      }
      createLerpMode(BB) {
        return null === BB ? TB.j.Linear : nB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }

    function hB(BB) {
      return Number.isFinite(BB.timeFraction) && zB(BB.pre) && zB(BB.post)
    }

    function zB(BB) {
      return Number.isFinite(BB[0]) && Number.isFinite(BB[1]) && Number.isFinite(BB[2])
    }

    function FB(BB, IB, ZB, TB, JB, oB, GB, vB) {
      const kB = oB - IB,
        cB = oB - TB,
        nB = vB - TB,
        hB = [null, null, null];
      for (let zB = 0; zB < hB.length; zB++) hB[zB] = NB(BB[zB], ZB[zB], JB[zB], GB[zB], kB, nB);
      return {
        DT: cB,
        KT: hB
      }
    }

    function NB(BB, IB, ZB, TB, oB, GB) {
      return {
        ST: JB.e.computeShortestRotation(BB, ZB) / oB,
        BJ: JB.e.computeShortestRotation(IB, TB) / GB,
        delta: JB.e.computeShortestRotation(IB, ZB)
      }
    }

    function gB(BB, IB, ZB, TB, JB, oB, GB, vB) {
      const kB = oB - IB,
        cB = oB - TB,
        nB = vB - TB,
        hB = [null, null, null];
      for (let zB = 0; zB < hB.length; zB++) hB[zB] = {
        ST: (JB[zB] - BB[zB]) / kB,
        BJ: (GB[zB] - ZB[zB]) / nB,
        delta: JB[zB] - ZB[zB]
      };
      return {
        DT: cB,
        KT: hB
      }
    }

    function qB(BB) {
      return yB("number" === typeof BB ? [BB, BB, BB] : BB)
    }

    function yB(BB) {
      return [UB(BB[0]), UB(BB[1]), UB(BB[2])]
    }

    function UB(BB) {
      return Number.isFinite(BB) ? Math.min(GB.h, Math.max(-GB.h, BB)) : BB
    }

    function WB(BB) {
      const [IB, ZB, TB] = BB, GB = -(0, oB.l)(IB), vB = -(0, oB.l)(ZB), kB = (0, oB.l)(TB), cB = JB.e.quaternionFromEulerZYX(GB, vB, kB);
      return JB.e.eulerYXZFromQuaternion(cB)
    }
    nB.LERP_MODE_SCHEMA_MAPPING = {
      linear: TB.j.Linear,
      catmullrom: TB.j.CatmullRomSpline
    };
    const dB = 1 / 16;

    function CB(BB) {
      return [-BB[0] * dB, BB[1] * dB, BB[2] * dB]
    }

    function QB(BB) {
      const [IB, ZB, TB] = BB;
      return [IB >= 0 ? Math.PI - IB : -Math.PI - IB, sB(ZB + Math.PI), sB(TB + Math.PI)]
    }

    function sB(BB) {
      return JB.e.mod(BB + Math.PI, 2 * Math.PI) - Math.PI
    }

    function wB(BB, IB) {
      return Math.abs(JB.e.computeShortestRotation(BB[0], IB[0])) + Math.abs(JB.e.computeShortestRotation(BB[1], IB[1])) + Math.abs(JB.e.computeShortestRotation(BB[2], IB[2]))
    }
    const OB = new cB
  },
  37188: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      h: () => oB,
      j: () => TB,
      l: () => JB
    });
    let TB = function(BB) {
        return BB[BB.Linear = 0] = "Linear", BB[BB.CatmullRomSpline = 1] = "CatmullRomSpline", BB
      }({}),
      JB = function(BB) {
        return BB[BB.NoLoop = 0] = "NoLoop", BB[BB.LoopOnLastFrame = 1] = "LoopOnLastFrame", BB[BB.HoldOnLastFrame = 2] = "HoldOnLastFrame", BB
      }({}),
      oB = function(BB) {
        return BB[BB.Movement = 0] = "Movement", BB[BB.Action = 1] = "Action", BB[BB.Emote = 2] = "Emote", BB[BB.Custom = 3] = "Custom", BB
      }({}),
      GB = function(BB) {
        return BB[BB.Start = 0] = "Start", BB[BB.Stop = 1] = "Stop", BB
      }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);