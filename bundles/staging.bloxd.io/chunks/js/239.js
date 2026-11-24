export const id = 239;
export const ids = [239];
export const modules = {
  37258: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB,
      f: () => IB,
      j: () => nB
    });
    const QB = 1024,
      nB = 16,
      dB = 36e4;
    class IB {
      constructor(BB) {
        this.boneCount = BB, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * BB), this.position = new Float64Array(3 * BB), this.scale = new Float64Array(3 * BB).fill(1), this.touched = new Uint8Array(BB)
      }
      clampToLimits() {
        for (let BB = 0; BB < this.boneCount; BB++)
          if (0 !== this.touched[BB])
            for (let jB = 3 * BB; jB < 3 * BB + 3; jB++) {
              const BB = this.rotation[jB],
                zB = this.position[jB],
                IB = this.scale[jB];
              BB >= -36e4 && BB <= dB || (this.rotation[jB] = uB(BB, dB)), zB >= -1024 && zB <= QB || (this.position[jB] = uB(zB, QB)), IB >= -nB && IB <= nB || (this.scale[jB] = uB(IB, nB, 1))
            }
      }
      reset() {
        for (let BB = 0; BB < this.boneCount; BB++)
          if (0 !== this.touched[BB]) {
            this.touched[BB] = 0;
            for (let jB = 3 * BB; jB < 3 * BB + 3; jB++) this.rotation[jB] = 0, this.position[jB] = 0, this.scale[jB] = 1
          }
      }
    }
    class NB {
      constructor(BB) {
        this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * BB), this.position = new Float64Array(3 * BB), this.scaleDelta = new Float64Array(3 * BB), this.boneWeight = new Float64Array(BB), this.touched = new Uint8Array(BB), this.overrides = new Uint8Array(BB), this.touchedBones = new Int32Array(BB)
      }
      touch(BB, jB, zB) {
        0 === this.touched[BB] && (this.touched[BB] = 1, this.touchedBones[this.touchedCount++] = BB), this.boneWeight[BB] += jB, zB && (this.overrides[BB] = 1)
      }
      applyTo(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (let nB = 0; nB < this.touchedCount; nB++) {
          const dB = this.touchedBones[nB],
            IB = this.boneWeight[dB];
          if (zB || 1 === this.overrides[dB]) {
            const zB = jB * Math.min(1, IB);
            for (let jB = 3 * dB; jB < 3 * dB + 3; jB++) BB.rotation[jB] += (this.rotation[jB] / IB - BB.rotation[jB]) * zB, BB.position[jB] += (this.position[jB] / IB - BB.position[jB]) * zB, BB.scale[jB] += (1 + this.scaleDelta[jB] / IB - BB.scale[jB]) * zB
          } else {
            const zB = QB && IB > 1 ? jB / IB : jB;
            for (let jB = 3 * dB; jB < 3 * dB + 3; jB++) BB.rotation[jB] += this.rotation[jB] * zB, BB.position[jB] += this.position[jB] * zB, BB.scale[jB] *= 1 + this.scaleDelta[jB] * zB
          }
          BB.touched[dB] = 1
        }
      }
      clear() {
        for (let BB = 0; BB < this.touchedCount; BB++) {
          const jB = this.touchedBones[BB];
          this.touched[jB] = 0, this.overrides[jB] = 0, this.boneWeight[jB] = 0;
          for (let BB = 3 * jB; BB < 3 * jB + 3; BB++) this.rotation[BB] = 0, this.position[BB] = 0, this.scaleDelta[BB] = 0
        }
        this.touchedCount = 0
      }
    }

    function uB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return Number.isNaN(BB) ? zB : Math.min(jB, Math.max(-jB, BB))
    }
  },
  37252: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      e: () => NB
    });
    var QB = zB(37239),
      nB = zB(376),
      dB = zB(1948),
      IB = zB(37258);

    function NB(BB) {
      if ("CQ" in BB) return iB.createAnimationScript(BB);
      return new aB(BB).createAnimationScript()
    }

    function uB(BB, jB, zB, nB) {
      const dB = BB.CQ <= 0 ? 1 : jB + zB * Math.max(0, nB) / BB.CQ;
      return BB.cQ === QB.j.LoopOnLastFrame ? dB % 1 : BB.cQ === QB.j.NoLoop && dB >= 1 ? null : Math.min(1, dB)
    }
    class UB {
      createAnimationScript(BB) {
        const {
          CQ: jB,
          loop: zB,
          bQ: QB
        } = BB;
        return {
          CQ: Math.round(jB),
          cQ: this.createLoopMode(null !== zB && void 0 !== zB && zB),
          bQ: this.createNodeSkeletonAnimationScript(null !== QB && void 0 !== QB ? QB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return QB.j.NoLoop;
          case !0:
            return QB.j.LoopOnLastFrame;
          case "hold-on-last-frame":
            return QB.j.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const jB = {};
        for (const zB in BB) {
          const QB = BB[zB];
          jB[zB] = this.createNodeAnimationScript(QB)
        }
        return jB
      }
      createNodeAnimationScript(BB) {
        const {
          timeline: jB
        } = BB, zB = jB.filter((BB => Number.isFinite(BB.timeFraction)));
        return zB.sort(((BB, jB) => BB.timeFraction - jB.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(zB, "rotation", sB),
          position: this.createTimelineFromKeyframes(zB, "position", mB),
          scale: this.createTimelineFromKeyframes(zB, "scale", mB, kB)
        }
      }
      createTimelineFromKeyframes(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => BB;
        const nB = [];
        for (const UB of BB) {
          const BB = UB[jB];
          if (BB) {
            const jB = this.createAnimationFrameWithoutPrecomputes(UB.timeFraction, BB, QB);
            pB(jB) && nB.push(jB)
          }
        }
        const dB = [];
        for (let UB = 0; UB < nB.length; UB++) {
          var IB, NB, uB;
          const BB = nB[UB],
            jB = null !== (IB = nB[UB - 1]) && void 0 !== IB ? IB : BB,
            QB = null !== (NB = nB[UB + 1]) && void 0 !== NB ? NB : BB,
            aB = null !== (uB = nB[UB + 2]) && void 0 !== uB ? uB : QB;
          dB.push({
            ...BB,
            ...zB(jB.post, jB.timeFraction, BB.post, BB.timeFraction, QB.pre, QB.timeFraction, aB.pre, aB.timeFraction)
          })
        }
        return dB
      }
      createAnimationFrameWithoutPrecomputes(BB, jB, zB) {
        let QB, nB, dB = null;
        var IB;
        if ("object" === typeof jB && "point" in jB) dB = null !== (IB = jB.OQ) && void 0 !== IB ? IB : null, QB = jB.point, nB = jB.point;
        else if ("object" === typeof jB && "pre" in jB) {
          var NB;
          dB = null !== (NB = jB.OQ) && void 0 !== NB ? NB : null, QB = jB.pre, nB = jB.post
        } else QB = jB, nB = jB;
        return {
          timeFraction: BB,
          OQ: this.createLerpMode(dB),
          pre: zB(QB),
          post: zB(nB)
        }
      }
      createLerpMode(BB) {
        return null === BB ? QB.i.Linear : UB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }
    UB.LERP_MODE_SCHEMA_MAPPING = {
      linear: QB.i.Linear,
      "catmull-rom-spline": QB.i.CatmullRomSpline
    };
    class aB {
      constructor(BB) {
        this.animationSchema = BB
      }
      createAnimationScript() {
        const {
          animation_length: BB,
          loop: jB,
          bones: zB
        } = this.animationSchema;
        return {
          CQ: Math.round(1e3 * BB),
          cQ: this.createLoopMode(null !== jB && void 0 !== jB && jB),
          bQ: this.createNodeSkeletonAnimationScript(null !== zB && void 0 !== zB ? zB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return QB.j.NoLoop;
          case !0:
            return QB.j.LoopOnLastFrame;
          case "hold_on_last_frame":
            return QB.j.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const jB = {};
        for (const zB in BB) {
          const QB = BB[zB];
          jB[zB] = this.createNodeAnimationScript(QB)
        }
        return jB
      }
      createNodeAnimationScript(BB) {
        const {
          rotation: jB,
          position: zB,
          scale: QB
        } = BB;
        return {
          rotation: this.createAnimationTimeline(null !== jB && void 0 !== jB ? jB : null, LB, sB, !0),
          position: this.createAnimationTimeline(null !== zB && void 0 !== zB ? zB : null, tB, mB, !1),
          scale: this.createAnimationTimeline(null !== QB && void 0 !== QB ? QB : null, yB, mB, !1)
        }
      }
      createAnimationTimeline(BB, jB, zB, QB) {
        if (null === BB) return [];
        (Array.isArray(BB) || "number" === typeof BB) && (BB = {
          "0.0": BB
        });
        const nB = Object.entries(BB).map((BB => {
          let [zB, QB] = BB;
          const nB = Number(zB) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(nB, QB, jB)
        })).filter(pB);
        nB.sort(((BB, jB) => BB.timeFraction - jB.timeFraction)), QB && function(BB) {
          for (let jB = 1; jB < BB.length; jB++) {
            const zB = BB[jB - 1].post,
              QB = BB[jB],
              nB = SB(QB.pre),
              dB = SB(QB.post),
              IB = EB(zB, QB.pre);
            EB(zB, nB) < IB && (BB[jB] = {
              ...QB,
              pre: nB,
              post: dB
            })
          }
        }(nB);
        const dB = [];
        for (let UB = 0; UB < nB.length; UB++) {
          var IB, NB, uB;
          const BB = nB[UB],
            jB = null !== (IB = nB[UB - 1]) && void 0 !== IB ? IB : BB,
            QB = null !== (NB = nB[UB + 1]) && void 0 !== NB ? NB : BB,
            aB = null !== (uB = nB[UB + 2]) && void 0 !== uB ? uB : QB;
          dB.push({
            ...BB,
            ...zB(jB.post, jB.timeFraction, BB.post, BB.timeFraction, QB.pre, QB.timeFraction, aB.pre, aB.timeFraction)
          })
        }
        return dB
      }
      createAnimationFrameWithoutPrecomputes(BB, jB, zB) {
        let QB, nB, dB = null;
        if ("object" === typeof jB && "post" in jB) {
          var IB;
          dB = null !== (IB = jB.lerp_mode) && void 0 !== IB ? IB : null, nB = zB(jB.post), QB = void 0 !== jB.pre ? zB(jB.pre) : nB
        } else {
          const BB = zB(jB);
          nB = BB, QB = BB
        }
        return {
          timeFraction: BB,
          OQ: this.createLerpMode(dB),
          pre: QB,
          post: nB
        }
      }
      createLerpMode(BB) {
        return null === BB ? QB.i.Linear : aB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }

    function pB(BB) {
      return Number.isFinite(BB.timeFraction) && rB(BB.pre) && rB(BB.post)
    }

    function rB(BB) {
      return Number.isFinite(BB[0]) && Number.isFinite(BB[1]) && Number.isFinite(BB[2])
    }

    function sB(BB, jB, zB, QB, nB, dB, IB, NB) {
      const uB = dB - jB,
        UB = dB - QB,
        aB = NB - QB,
        pB = [null, null, null];
      for (let rB = 0; rB < pB.length; rB++) pB[rB] = JB(BB[rB], zB[rB], nB[rB], IB[rB], uB, aB);
      return {
        Bn: UB,
        jn: pB
      }
    }

    function JB(BB, jB, zB, QB, dB, IB) {
      return {
        Qn: nB.b.computeShortestRotation(BB, zB) / dB,
        nn: nB.b.computeShortestRotation(jB, QB) / IB,
        delta: nB.b.computeShortestRotation(jB, zB)
      }
    }

    function mB(BB, jB, zB, QB, nB, dB, IB, NB) {
      const uB = dB - jB,
        UB = dB - QB,
        aB = NB - QB,
        pB = [null, null, null];
      for (let rB = 0; rB < pB.length; rB++) pB[rB] = {
        Qn: (nB[rB] - BB[rB]) / uB,
        nn: (IB[rB] - zB[rB]) / aB,
        delta: nB[rB] - zB[rB]
      };
      return {
        Bn: UB,
        jn: pB
      }
    }

    function yB(BB) {
      return kB("number" === typeof BB ? [BB, BB, BB] : BB)
    }

    function kB(BB) {
      return [GB(BB[0]), GB(BB[1]), GB(BB[2])]
    }

    function GB(BB) {
      return Number.isFinite(BB) ? Math.min(IB.j, Math.max(-IB.j, BB)) : BB
    }

    function LB(BB) {
      const [jB, zB, QB] = BB, IB = -(0, dB.p)(jB), NB = -(0, dB.p)(zB), uB = (0, dB.p)(QB), UB = nB.b.quaternionFromEulerZYX(IB, NB, uB);
      return nB.b.eulerYXZFromQuaternion(UB)
    }
    aB.LERP_MODE_SCHEMA_MAPPING = {
      linear: QB.i.Linear,
      catmullrom: QB.i.CatmullRomSpline
    };
    const gB = 1 / 16;

    function tB(BB) {
      return [-BB[0] * gB, BB[1] * gB, BB[2] * gB]
    }

    function SB(BB) {
      const [jB, zB, QB] = BB;
      return [jB >= 0 ? Math.PI - jB : -Math.PI - jB, MB(zB + Math.PI), MB(QB + Math.PI)]
    }

    function MB(BB) {
      return nB.b.mod(BB + Math.PI, 2 * Math.PI) - Math.PI
    }

    function EB(BB, jB) {
      return Math.abs(nB.b.computeShortestRotation(BB[0], jB[0])) + Math.abs(nB.b.computeShortestRotation(BB[1], jB[1])) + Math.abs(nB.b.computeShortestRotation(BB[2], jB[2]))
    }
    const iB = new UB
  },
  37239: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => dB,
      i: () => QB,
      j: () => nB
    });
    let QB = function(BB) {
        return BB[BB.Linear = 0] = "Linear", BB[BB.CatmullRomSpline = 1] = "CatmullRomSpline", BB
      }({}),
      nB = function(BB) {
        return BB[BB.NoLoop = 0] = "NoLoop", BB[BB.LoopOnLastFrame = 1] = "LoopOnLastFrame", BB[BB.HoldOnLastFrame = 2] = "HoldOnLastFrame", BB
      }({}),
      dB = function(BB) {
        return BB[BB.Movement = 0] = "Movement", BB[BB.Action = 1] = "Action", BB[BB.Emote = 2] = "Emote", BB[BB.Custom = 3] = "Custom", BB
      }({}),
      IB = function(BB) {
        return BB[BB.Start = 0] = "Start", BB[BB.Stop = 1] = "Stop", BB
      }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);