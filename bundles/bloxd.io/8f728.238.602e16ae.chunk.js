export const id = 238;
export const ids = [238];
export const modules = {
  38337: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {
      constructor(cB, Bc, nc) {
        this.bu = cB, this.bv = Bc, this.distance = nc, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  38349: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(35768),
      Ic = nc(35756),
      rB = nc(35759);
    class uc {
      constructor(cB, Bc, nc) {
        this.vectors = (0, Vc.c)(8, Ic.p.Zero), this.center = Ic.p.Zero(), this.centerWorld = Ic.p.Zero(), this.extendSize = Ic.p.Zero(), this.extendSizeWorld = Ic.p.Zero(), this.directions = (0, Vc.c)(3, Ic.p.Zero), this.vectorsWorld = (0, Vc.c)(8, Ic.p.Zero), this.minimumWorld = Ic.p.Zero(), this.maximumWorld = Ic.p.Zero(), this.minimum = Ic.p.Zero(), this.maximum = Ic.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(cB, Bc, nc)
      }
      reConstruct(cB, Bc, nc) {
        const Vc = cB.x,
          rB = cB.y,
          uc = cB.z,
          sc = Bc.x,
          Mc = Bc.y,
          Pc = Bc.z,
          qB = this.vectors;
        this.minimum.puc(Vc, rB, uc), this.maximum.puc(sc, Mc, Pc), qB[0].puc(Vc, rB, uc), qB[1].puc(sc, Mc, Pc), qB[2].puc(sc, rB, uc), qB[3].puc(Vc, Mc, uc), qB[4].puc(Vc, rB, Pc), qB[5].puc(sc, Mc, uc), qB[6].puc(Vc, Mc, Pc), qB[7].puc(sc, rB, Pc), Bc.addToRef(cB, this.center).scaleInPlace(.5), Bc.subtractToRef(cB, this.extendSize).scaleInPlace(.5), this._worldMatrix = nc || Ic.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(cB) {
        const Bc = uc._TmpVector3,
          nc = this.maximum.subtractToRef(this.minimum, Bc[0]),
          Vc = nc.length();
        nc.normalizeFromLength(Vc);
        const Ic = Vc * cB,
          rB = nc.scaleInPlace(.5 * Ic),
          sc = this.center.subtractToRef(rB, Bc[1]),
          Mc = this.center.addToRef(rB, Bc[2]);
        return this.reConstruct(sc, Mc, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(cB) {
        const Bc = this.minimumWorld,
          nc = this.maximumWorld,
          Vc = this.directions,
          rB = this.vectorsWorld,
          uc = this.vectors;
        if (cB.isIdentity()) {
          Bc.qqc(this.minimum), nc.qqc(this.maximum);
          for (let cB = 0; cB < 8; ++cB) rB[cB].qqc(uc[cB]);
          this.extendSizeWorld.qqc(this.extendSize), this.centerWorld.qqc(this.center)
        } else {
          Bc.orc(Number.MAX_VALUE), nc.orc(-Number.MAX_VALUE);
          for (let Vc = 0; Vc < 8; ++Vc) {
            const sc = rB[Vc];
            Ic.p.TransformCoordinatesToRef(uc[Vc], cB, sc), Bc.minimizeInPlace(sc), nc.maximizeInPlace(sc)
          }
          nc.subtractToRef(Bc, this.extendSizeWorld).scaleInPlace(.5), nc.addToRef(Bc, this.centerWorld).scaleInPlace(.5)
        }
        Ic.p.FromArrayToRef(cB.m, 0, Vc[0]), Ic.p.FromArrayToRef(cB.m, 4, Vc[1]), Ic.p.FromArrayToRef(cB.m, 8, Vc[2]), this._worldMatrix = cB
      }
      isInFrustum(cB) {
        return uc.IsInFrustum(this.vectorsWorld, cB)
      }
      isCompletelyInFrustum(cB) {
        return uc.IsCompletelyInFrustum(this.vectorsWorld, cB)
      }
      intersectsPoint(cB) {
        const Bc = this.minimumWorld,
          nc = this.maximumWorld,
          Vc = Bc.x,
          Ic = Bc.y,
          uc = Bc.z,
          sc = nc.x,
          Mc = nc.y,
          Pc = nc.z,
          qB = cB.x,
          Oc = cB.y,
          Tc = cB.z,
          fc = -rB.c;
        return !(sc - qB < fc || fc > qB - Vc) && (!(Mc - Oc < fc || fc > Oc - Ic) && !(Pc - Tc < fc || fc > Tc - uc))
      }
      intersectsSphere(cB) {
        return uc.IntersectsSphere(this.minimumWorld, this.maximumWorld, cB.centerWorld, cB.radiusWorld)
      }
      intersectsMinMax(cB, Bc) {
        const nc = this.minimumWorld,
          Vc = this.maximumWorld,
          Ic = nc.x,
          rB = nc.y,
          uc = nc.z,
          sc = Vc.x,
          Mc = Vc.y,
          Pc = Vc.z,
          qB = cB.x,
          Oc = cB.y,
          Tc = cB.z,
          fc = Bc.x,
          mB = Bc.y,
          ec = Bc.z;
        return !(sc < qB || Ic > fc) && (!(Mc < Oc || rB > mB) && !(Pc < Tc || uc > ec))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(cB, Bc) {
        return cB.intersectsMinMax(Bc.minimumWorld, Bc.maximumWorld)
      }
      static IntersectsSphere(cB, Bc, nc, Vc) {
        const rB = uc._TmpVector3[0];
        Ic.p.ClampToRef(nc, cB, Bc, rB);
        return Ic.p.DistanceSquared(nc, rB) <= Vc * Vc
      }
      static IsCompletelyInFrustum(cB, Bc) {
        for (let nc = 0; nc < 6; ++nc) {
          const Vc = Bc[nc];
          for (let Bc = 0; Bc < 8; ++Bc)
            if (Vc.dotCoordinate(cB[Bc]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(cB, Bc) {
        for (let nc = 0; nc < 6; ++nc) {
          let Vc = !0;
          const Ic = Bc[nc];
          for (let Bc = 0; Bc < 8; ++Bc)
            if (Ic.dotCoordinate(cB[Bc]) >= 0) {
              Vc = !1;
              break
            } if (Vc) return !1
        }
        return !0
      }
    }
    uc._TmpVector3 = (0, Vc.c)(3, Ic.p.Zero)
  },
  38343: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Oc
    });
    var Vc = nc(35768),
      Ic = nc(35756),
      rB = nc(38349);
    class uc {
      constructor(cB, Bc, nc) {
        this.center = Ic.p.Zero(), this.centerWorld = Ic.p.Zero(), this.minimum = Ic.p.Zero(), this.maximum = Ic.p.Zero(), this.reConstruct(cB, Bc, nc)
      }
      reConstruct(cB, Bc, nc) {
        this.minimum.qqc(cB), this.maximum.qqc(Bc);
        const Vc = Ic.p.Distance(cB, Bc);
        Bc.addToRef(cB, this.center).scaleInPlace(.5), this.radius = .5 * Vc, this._update(nc || Ic.d.IdentityReadOnly)
      }
      scale(cB) {
        const Bc = uc._TmpVector3,
          nc = this.maximum.subtractToRef(this.minimum, Bc[0]),
          Vc = nc.length();
        nc.normalizeFromLength(Vc);
        const Ic = Vc * cB,
          rB = nc.scaleInPlace(.5 * Ic),
          sc = this.center.subtractToRef(rB, Bc[1]),
          Mc = this.center.addToRef(rB, Bc[2]);
        return this.reConstruct(sc, Mc, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(cB) {
        if (cB.isIdentity()) this.centerWorld.qqc(this.center), this.radiusWorld = this.radius;
        else {
          Ic.p.TransformCoordinatesToRef(this.center, cB, this.centerWorld);
          const Bc = uc._TmpVector3[0];
          Ic.p.TransformNormalFromFloatsToRef(1, 1, 1, cB, Bc), this.radiusWorld = Math.max(Math.abs(Bc.x), Math.abs(Bc.y), Math.abs(Bc.z)) * this.radius
        }
      }
      isInFrustum(cB) {
        const Bc = this.centerWorld,
          nc = this.radiusWorld;
        for (let Vc = 0; Vc < 6; Vc++)
          if (cB[Vc].dotCoordinate(Bc) <= -nc) return !1;
        return !0
      }
      isCenterInFrustum(cB) {
        const Bc = this.centerWorld;
        for (let nc = 0; nc < 6; nc++)
          if (cB[nc].dotCoordinate(Bc) < 0) return !1;
        return !0
      }
      intersectsPoint(cB) {
        const Bc = Ic.p.DistanceSquared(this.centerWorld, cB);
        return !(this.radiusWorld * this.radiusWorld < Bc)
      }
      static Intersects(cB, Bc) {
        const nc = Ic.p.DistanceSquared(cB.centerWorld, Bc.centerWorld),
          Vc = cB.radiusWorld + Bc.radiusWorld;
        return !(Vc * Vc < nc)
      }
      static CreateFromCenterAndRadius(cB, Bc, nc) {
        this._TmpVector3[0].qqc(cB), this._TmpVector3[1].puc(0, 0, Bc), this._TmpVector3[2].qqc(cB), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].Tqc(this._TmpVector3[1]);
        const Vc = new uc(this._TmpVector3[0], this._TmpVector3[2]);
        return Vc._worldMatrix = nc || Ic.d.Identity(), Vc
      }
    }
    uc._TmpVector3 = (0, Vc.c)(3, Ic.p.Zero);
    const sc = {
        min: 0,
        max: 0
      },
      Mc = {
        min: 0,
        max: 0
      },
      Pc = (cB, Bc, nc) => {
        const Vc = Ic.p.Dot(Bc.centerWorld, cB),
          rB = Math.abs(Ic.p.Dot(Bc.directions[0], cB)) * Bc.extendSize.x + Math.abs(Ic.p.Dot(Bc.directions[1], cB)) * Bc.extendSize.y + Math.abs(Ic.p.Dot(Bc.directions[2], cB)) * Bc.extendSize.z;
        nc.min = Vc - rB, nc.max = Vc + rB
      },
      qB = (cB, Bc, nc) => (Pc(cB, Bc, sc), Pc(cB, nc, Mc), !(sc.min > Mc.max || Mc.min > sc.max));
    class Oc {
      constructor(cB, Bc, nc) {
        this._isLocked = !1, this.boundingBox = new rB.d(cB, Bc, nc), this.tOc = new uc(cB, Bc, nc)
      }
      reConstruct(cB, Bc, nc) {
        this.boundingBox.reConstruct(cB, Bc, nc), this.tOc.reConstruct(cB, Bc, nc)
      }
      get minimum() {
        return this.boundingBox.minimum
      }
      get maximum() {
        return this.boundingBox.maximum
      }
      get isLocked() {
        return this._isLocked
      }
      set isLocked(cB) {
        this._isLocked = cB
      }
      update(cB) {
        this._isLocked || (this.boundingBox._update(cB), this.tOc._update(cB))
      }
      centerOn(cB, Bc) {
        const nc = Oc._TmpVector3[0].qqc(cB).Tqc(Bc),
          Vc = Oc._TmpVector3[1].qqc(cB).addInPlace(Bc);
        return this.boundingBox.reConstruct(nc, Vc, this.boundingBox.getWorldMatrix()), this.tOc.reConstruct(nc, Vc, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(cB) {
        const Bc = Ic.p.Minimize(this.minimum, cB),
          nc = Ic.p.Maximize(this.maximum, cB);
        return this.reConstruct(Bc, nc, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(cB) {
        const Bc = Ic.i.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Bc);
        const nc = Ic.i.KV[0];
        return Ic.p.TransformCoordinatesToRef(cB.boundingBox.minimumWorld, Bc, nc), this.encapsulate(nc), Ic.p.TransformCoordinatesToRef(cB.boundingBox.maximumWorld, Bc, nc), this.encapsulate(nc), this
      }
      scale(cB) {
        return this.boundingBox.scale(cB), this.tOc.scale(cB), this
      }
      isInFrustum(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Bc || 3 === Bc) && this.tOc.isCenterInFrustum(cB)) return !0;
        if (!this.tOc.isInFrustum(cB)) return !1;
        return !(1 !== Bc && 3 !== Bc) || this.boundingBox.isInFrustum(cB)
      }
      get diagonalLength() {
        const cB = this.boundingBox;
        return cB.maximumWorld.subtractToRef(cB.minimumWorld, Oc._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(cB) {
        return this.boundingBox.isCompletelyInFrustum(cB)
      }
      _checkCollision(cB) {
        return cB._canDoCollision(this.tOc.centerWorld, this.tOc.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(cB) {
        return !!this.tOc.centerWorld && (!!this.tOc.intersectsPoint(cB) && !!this.boundingBox.intersectsPoint(cB))
      }
      intersects(cB, Bc) {
        if (!uc.Intersects(this.tOc, cB.tOc)) return !1;
        if (!rB.d.Intersects(this.boundingBox, cB.boundingBox)) return !1;
        if (!Bc) return !0;
        const nc = this.boundingBox,
          Vc = cB.boundingBox;
        return !!qB(nc.directions[0], nc, Vc) && (!!qB(nc.directions[1], nc, Vc) && (!!qB(nc.directions[2], nc, Vc) && (!!qB(Vc.directions[0], nc, Vc) && (!!qB(Vc.directions[1], nc, Vc) && (!!qB(Vc.directions[2], nc, Vc) && (!!qB(Ic.p.Cross(nc.directions[0], Vc.directions[0]), nc, Vc) && (!!qB(Ic.p.Cross(nc.directions[0], Vc.directions[1]), nc, Vc) && (!!qB(Ic.p.Cross(nc.directions[0], Vc.directions[2]), nc, Vc) && (!!qB(Ic.p.Cross(nc.directions[1], Vc.directions[0]), nc, Vc) && (!!qB(Ic.p.Cross(nc.directions[1], Vc.directions[1]), nc, Vc) && (!!qB(Ic.p.Cross(nc.directions[1], Vc.directions[2]), nc, Vc) && (!!qB(Ic.p.Cross(nc.directions[2], Vc.directions[0]), nc, Vc) && (!!qB(Ic.p.Cross(nc.directions[2], Vc.directions[1]), nc, Vc) && !!qB(Ic.p.Cross(nc.directions[2], Vc.directions[2]), nc, Vc))))))))))))))
      }
    }
    Oc._TmpVector3 = (0, Vc.c)(2, Ic.p.Zero)
  },
  38362: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      d: () => Mc,
      f: () => sc,
      i: () => uc
    });
    var Vc = nc(38202),
      Ic = nc(35756);

    function rB(cB) {
      -1 === cB.indexOf("vClipPlane") && cB.push("vClipPlane"), -1 === cB.indexOf("vClipPlane2") && cB.push("vClipPlane2"), -1 === cB.indexOf("vClipPlane3") && cB.push("vClipPlane3"), -1 === cB.indexOf("vClipPlane4") && cB.push("vClipPlane4"), -1 === cB.indexOf("vClipPlane5") && cB.push("vClipPlane5"), -1 === cB.indexOf("vClipPlane6") && cB.push("vClipPlane6")
    }

    function uc(cB, Bc, nc) {
      const Vc = !!(cB.clipPlane ?? Bc.clipPlane),
        Ic = !!(cB.clipPlane2 ?? Bc.clipPlane2),
        rB = !!(cB.clipPlane3 ?? Bc.clipPlane3),
        uc = !!(cB.clipPlane4 ?? Bc.clipPlane4),
        sc = !!(cB.clipPlane5 ?? Bc.clipPlane5),
        Mc = !!(cB.clipPlane6 ?? Bc.clipPlane6);
      Vc && nc.push("#define CLIPPLANE"), Ic && nc.push("#define CLIPPLANE2"), rB && nc.push("#define CLIPPLANE3"), uc && nc.push("#define CLIPPLANE4"), sc && nc.push("#define CLIPPLANE5"), Mc && nc.push("#define CLIPPLANE6")
    }

    function sc(cB, Bc, nc) {
      let Vc = !1;
      const Ic = !!(cB.clipPlane ?? Bc.clipPlane),
        rB = !!(cB.clipPlane2 ?? Bc.clipPlane2),
        uc = !!(cB.clipPlane3 ?? Bc.clipPlane3),
        sc = !!(cB.clipPlane4 ?? Bc.clipPlane4),
        Mc = !!(cB.clipPlane5 ?? Bc.clipPlane5),
        Pc = !!(cB.clipPlane6 ?? Bc.clipPlane6);
      return nc.CLIPPLANE !== Ic && (nc.CLIPPLANE = Ic, Vc = !0), nc.CLIPPLANE2 !== rB && (nc.CLIPPLANE2 = rB, Vc = !0), nc.CLIPPLANE3 !== uc && (nc.CLIPPLANE3 = uc, Vc = !0), nc.CLIPPLANE4 !== sc && (nc.CLIPPLANE4 = sc, Vc = !0), nc.CLIPPLANE5 !== Mc && (nc.CLIPPLANE5 = Mc, Vc = !0), nc.CLIPPLANE6 !== Pc && (nc.CLIPPLANE6 = Pc, Vc = !0), Vc
    }

    function Mc(cB, Bc, nc) {
      let Vc = Bc.clipPlane ?? nc.clipPlane;
      Pc(cB, "vClipPlane", Vc), Vc = Bc.clipPlane2 ?? nc.clipPlane2, Pc(cB, "vClipPlane2", Vc), Vc = Bc.clipPlane3 ?? nc.clipPlane3, Pc(cB, "vClipPlane3", Vc), Vc = Bc.clipPlane4 ?? nc.clipPlane4, Pc(cB, "vClipPlane4", Vc), Vc = Bc.clipPlane5 ?? nc.clipPlane5, Pc(cB, "vClipPlane5", Vc), Vc = Bc.clipPlane6 ?? nc.clipPlane6, Pc(cB, "vClipPlane6", Vc)
    }

    function Pc(cB, Bc, nc) {
      if (nc) {
        const rB = Vc.d.knc()?.floatingOriginOffset || Ic.p.ZeroReadOnly;
        cB.setFloat4(Bc, nc.normal.x, nc.normal.y, nc.normal.z, nc.d + Ic.p.Dot(nc.normal, rB))
      }
    }
  },
  38374: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(cB, Bc) {
        this._defines[cB] || (cB < this._currentRank && (this._currentRank = cB), cB > this._maxRank && (this._maxRank = cB), this._defines[cB] = new Array), this._defines[cB].push(Bc)
      }
      addCPUSkinningFallback(cB, Bc) {
        this._mesh = Bc, cB < this._currentRank && (this._currentRank = cB), cB > this._maxRank && (this._maxRank = cB)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(cB, Bc) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, cB = cB.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Bc._bonesComputationForcedToCPU = !0;
          const nc = this._mesh.knc();
          for (let cB = 0; cB < nc.meshes.length; cB++) {
            const Vc = nc.meshes[cB];
            if (Vc.material) {
              if (Vc.computeBonesUsingShaders && 0 !== Vc.numBoneInfluencers)
                if (Vc.material.getEffect() === Bc) Vc.computeBonesUsingShaders = !1;
                else if (Vc.rD)
                for (const cB of Vc.rD) {
                  if (cB.effect === Bc) {
                    Vc.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Vc.computeBonesUsingShaders && Vc.numBoneInfluencers > 0 && (Vc.computeBonesUsingShaders = !1)
          }
        } else {
          const Bc = this._defines[this._currentRank];
          if (Bc)
            for (let nc = 0; nc < Bc.length; nc++) cB = cB.replace("#define " + Bc[nc], "");
          this._currentRank++
        }
        return cB
      }
    }
  },
  38326: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => yB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(38146),
      uc = nc(35783),
      sc = nc(35780),
      Mc = nc(38332),
      Pc = nc(38182),
      qB = nc(37191),
      Oc = nc(36329),
      Tc = nc(38356),
      fc = nc(38068);
    let mB = (() => {
      var cB;
      let Bc, nc, rB, uc, sc, Mc, Pc, qB, Oc, Tc, mB, ec, tB = [];
      return cB = class {
        constructor() {
          this._func = (0, Vc.k)(this, tB), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(cB) {
          this._func = cB
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(cB) {
          this._backFunc = cB
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(cB) {
          this._funcRef = cB
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(cB) {
          this._funcMask = cB
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(cB) {
          this._opStencilFail = cB
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(cB) {
          this._opDepthFail = cB
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(cB) {
          this._opStencilDepthPass = cB
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(cB) {
          this._backOpStencilFail = cB
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(cB) {
          this._backOpDepthFail = cB
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(cB) {
          this._backOpStencilDepthPass = cB
        }
        get mask() {
          return this._mask
        }
        set mask(cB) {
          this._mask = cB
        }
        get enabled() {
          return this._enabled
        }
        set enabled(cB) {
          this._enabled = cB
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(cB) {
          fc.e.Clone((() => cB), this)
        }
        serialize() {
          return fc.e.Serialize(this)
        }
        parse(cB, Bc, nc) {
          fc.e.Parse((() => this), cB, Bc, nc)
        }
      }, (() => {
        const fc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], rB = [(0, Ic.M)()], uc = [(0, Ic.M)()], sc = [(0, Ic.M)()], Mc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], qB = [(0, Ic.M)()], Oc = [(0, Ic.M)()], Tc = [(0, Ic.M)()], mB = [(0, Ic.M)()], ec = [(0, Ic.M)()], (0, Vc.g)(cB, null, Bc, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: cB => "func" in cB,
            get: cB => cB.func
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, nc, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: cB => "backFunc" in cB,
            get: cB => cB.backFunc
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, rB, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: cB => "funcRef" in cB,
            get: cB => cB.funcRef
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, uc, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: cB => "funcMask" in cB,
            get: cB => cB.funcMask
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, sc, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: cB => "opStencilFail" in cB,
            get: cB => cB.opStencilFail
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, Mc, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: cB => "opDepthFail" in cB,
            get: cB => cB.opDepthFail
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, Pc, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: cB => "opStencilDepthPass" in cB,
            get: cB => cB.opStencilDepthPass
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, qB, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: cB => "backOpStencilFail" in cB,
            get: cB => cB.backOpStencilFail
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, Oc, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: cB => "backOpDepthFail" in cB,
            get: cB => cB.backOpDepthFail
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, Tc, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: cB => "backOpStencilDepthPass" in cB,
            get: cB => cB.backOpStencilDepthPass
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, mB, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: cB => "mask" in cB,
            get: cB => cB.mask
          },
          metadata: fc
        }, null, tB), (0, Vc.g)(cB, null, ec, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "enabled" in cB,
            get: cB => cB.enabled
          },
          metadata: fc
        }, null, tB), fc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fc
        })
      })(), cB
    })();
    var ec = nc(38358),
      tB = nc(37981),
      Sc = nc(37953);
    let yB = (() => {
      var cB;
      let Bc, nc, Sc, yB, zB, pc, hc, aB, lc, Yc, Lc, gB, Uc, bB, Zc, Qc, Cc, vB, Dc, Nc, Ec, oc, Wc, wc, kB, Xc, Hc, Fc, Jc, jB = [],
        Rc = [],
        iB = [],
        Kc = [],
        xB = [],
        dc = [],
        Ac = [],
        Gc = [],
        cn = [],
        BB = [],
        nB = [],
        VB = [],
        IB = [],
        rn = [],
        uB = [],
        sB = [],
        MB = [],
        PB = [],
        qn = [],
        OB = [],
        TB = [],
        fB = [],
        mn = [],
        eB = [],
        tn = [],
        SB = [],
        yn = [],
        zn = [],
        pB = [],
        hB = [],
        an = [],
        lB = [],
        YB = [],
        LB = [],
        gn = [],
        UB = [],
        bn = [],
        ZB = [],
        QB = [],
        CB = [],
        vn = [],
        DB = [],
        NB = [],
        EB = [],
        oB = [],
        WB = [],
        wB = [],
        kn = [],
        XB = [],
        HB = [],
        FB = [];
      return cB = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Bc) {
          this._useVertexPulling !== Bc && (this._useVertexPulling = Bc, this.SMc(cB.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(cB) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(Bc) {
          if (this._alpha === Bc) return;
          const nc = this._alpha;
          this._alpha = Bc, 1 !== nc && 1 !== Bc || this.SMc(cB.MiscDirtyFlag + cB.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Bc) {
          this._backFaceCulling !== Bc && (this._backFaceCulling = Bc, this.SMc(cB.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Bc) {
          const nc = Math.max(0, Math.min(0 | Bc, 4));
          this._textureRepetitionMode !== nc && (this._textureRepetitionMode = nc, this.SMc(cB.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Bc) {
          this._cullBackFaces !== Bc && (this._cullBackFaces = Bc, this.SMc(cB.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(cB) {
          this._blockDirtyMechanism !== cB && (this._blockDirtyMechanism = cB, cB || this.markDirty())
        }
        atomicMaterialsUpdate(cB) {
          this.blockDirtyMechanism = !0;
          try {
            cB(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(cB) {
          this._onDisposeObserver && this.XBc.remove(this._onDisposeObserver), this._onDisposeObserver = this.XBc.add(cB)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new uc.c), this._onBindObservable
        }
        set onBind(cB) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(cB)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new uc.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new uc.c), this._onEffectCreatedObservable
        }
        set alphaMode(cB) {
          this._alphaMode[0] = cB
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(Bc) {
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[nc] !== Bc && (this._alphaMode[nc] = Bc, this.SMc(cB.TextureDirtyFlag))
        }
        set needDepthPrePass(cB) {
          this._needDepthPrePass !== cB && (this._needDepthPrePass = cB, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(Bc) {
          this._fogEnabled !== Bc && (this._fogEnabled = Bc, this.SMc(cB.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case cB.WireFrameFillMode:
            case cB.LineListDrawMode:
            case cB.LineLoopDrawMode:
            case cB.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(Bc) {
          this.fillMode = Bc ? cB.WireFrameFillMode : cB.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case cB.PointFillMode:
            case cB.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Bc) {
          this.fillMode = Bc ? cB.PointFillMode : cB.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Bc) {
          this._fillMode !== Bc && (this._fillMode = Bc, this.SMc(cB.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(cB) {
          const Bc = this.knc().RV().getCaps().fragmentDepthSupported;
          cB && !Bc && qB.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = cB && Bc, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(cB) {
          this._isVertexOutputInvariant !== cB && (this._isVertexOutputInvariant = cB, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(cB) {
          this._drawWrapper = cB
        }
        constructor(Bc, nc, Ic) {
          let Mc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Vc.k)(this, jB), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Vc.k)(this, Rc, void 0), this.uniqueId = ((0, Vc.k)(this, iB), (0, Vc.k)(this, Kc, void 0)), this._loadedUniqueId = (0, Vc.k)(this, xB), this.name = (0, Vc.k)(this, dc, void 0), this.metadata = ((0, Vc.k)(this, Ac), (0, Vc.k)(this, Gc, null)), this._internalMetadata = (0, Vc.k)(this, cn), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Vc.k)(this, BB, !1), this.checkReadyOnlyOnce = ((0, Vc.k)(this, nB), (0, Vc.k)(this, VB, !1)), this.state = ((0, Vc.k)(this, IB), (0, Vc.k)(this, rn, "")), this._alpha = ((0, Vc.k)(this, uB), (0, Vc.k)(this, sB, 1)), this.inspectableCustomProperties = (0, Vc.k)(this, MB), this._backFaceCulling = (0, Vc.k)(this, PB, !0), this._textureRepetitionMode = ((0, Vc.k)(this, qn), (0, Vc.k)(this, OB, 0)), this.textureRepetitionHexTilingParams = ((0, Vc.k)(this, TB), (0, Vc.k)(this, fB, [1, .6, 7, .5])), this._cullBackFaces = ((0, Vc.k)(this, mn), (0, Vc.k)(this, eB, !0)), this._blockDirtyMechanism = ((0, Vc.k)(this, tn), !1), this.sideOrientation = (0, Vc.k)(this, SB, null), this.onCompiled = ((0, Vc.k)(this, yn), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.XBc = new uc.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Vc.k)(this, zn, [2]), this._needDepthPrePass = ((0, Vc.k)(this, pB), (0, Vc.k)(this, hB, !1)), this.disableDepthWrite = ((0, Vc.k)(this, an), (0, Vc.k)(this, lB, !1)), this.disableColorWrite = ((0, Vc.k)(this, YB), (0, Vc.k)(this, LB, !1)), this.forceDepthWrite = ((0, Vc.k)(this, gn), (0, Vc.k)(this, UB, !1)), this.depthFunction = ((0, Vc.k)(this, bn), (0, Vc.k)(this, ZB, 0)), this.separateCullingPass = ((0, Vc.k)(this, QB), (0, Vc.k)(this, CB, !1)), this._fogEnabled = ((0, Vc.k)(this, vn), (0, Vc.k)(this, DB, !0)), this.pointSize = ((0, Vc.k)(this, NB), (0, Vc.k)(this, EB, 1)), this.zOffset = ((0, Vc.k)(this, oB), (0, Vc.k)(this, WB, 0)), this.zOffsetUnits = ((0, Vc.k)(this, wB), (0, Vc.k)(this, kn, 0)), this.clipPlane = (0, Vc.k)(this, XB), this.stencil = new mB, this._isVertexOutputInvariant = (0, Vc.k)(this, HB, cB.ForceVertexOutputInvariant), this._materialContext = (0, Vc.k)(this, FB), this._useUBO = !1, this._fillMode = cB.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Bc;
          const qB = nc || sc.d.LastCreatedScene;
          qB && (this._scene = qB, this._dirtyCallbacks = {}, this._forceGLSL = Mc, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Bc || rB.g.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.RV().createMaterialContext(), this._drawWrapper = new Tc.e(this._scene.RV(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Pc.c(this._scene.RV(), void 0, void 0, Bc), this._useUBO = this.knc().RV().supportsUniformBuffers, this._createUniformBuffer(), Ic || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), cB.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const cB = this.knc().RV();
          this._uniformBuffer?.dispose(), cB.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Pc.c(cB, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Pc.c(this._scene.RV(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(cB) {
          return "Name: " + this.name
        }
        getClassName() {
          return "Material"
        }
        get _isMaterial() {
          return !0
        }
        get isFrozen() {
          return this.checkReadyOnlyOnce
        }
        freeze() {
          this.markDirty(), this.checkReadyOnlyOnce = !0
        }
        unfreeze() {
          this.markDirty(), this.checkReadyOnlyOnce = !1
        }
        isReady(cB, Bc) {
          return !0
        }
        isReadyForSubMesh(cB, Bc, nc) {
          const Vc = Bc.materialDefines;
          return !!Vc && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Vc, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        knc() {
          return this._scene
        }
        _getEffectiveOrientation(cB) {
          return null !== this.sideOrientation ? this.sideOrientation : cB.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(cB) {
          this._transparencyMode = cB
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === cB.MATERIAL_ALPHABLEND || this._transparencyMode === cB.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === cB.MATERIAL_ALPHATEST || this._transparencyMode === cB.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === cB.MATERIAL_OPAQUE || this._transparencyMode === cB.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(cB) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : cB.visibility < 1 || !this._disableAlphaBlending && (cB.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(cB) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(cB) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const nc = this.knc().meshes;
          for (const cB of nc)
            if (cB.rD)
              for (const nc of cB.rD)
                if (nc.AV() === this)
                  for (const cB of nc._drawWrappers) cB && this._materialContext === cB.materialContext && (cB._wasPreviouslyReady = !1, cB._wasPreviouslyUsingInstances = null, cB._forceRebindOnNextCall = Bc);
          Bc && this.SMc(cB.AllDirtyFlag)
        }
        _preBind(Bc) {
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Vc = this._scene.RV(),
            Ic = (null == nc ? this.sideOrientation : nc) === cB.ClockWiseSideOrientation,
            rB = Bc || this._getDrawWrapper();
          return (0, tB.e)(rB) && rB.materialContext && (rB.materialContext.useVertexPulling = this.useVertexPulling), Vc.enableEffect(rB), Vc.setState(this.backFaceCulling, this.zOffset, !1, Ic, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Ic
        }
        bind(cB, Bc) {}
        buildUniformLayout() {
          const cB = this._uniformBuffer;
          this._eventInfo.ubo = cB, this._callbackPluginEventGeneric(8, this._eventInfo), cB.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(cB, Bc, nc) {
          const Vc = nc._drawWrapper;
          this._eventInfo.subMesh = nc, this._callbackPluginEventBindForSubMesh(this._eventInfo), Vc._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(cB) {}
        bindView(cB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : cB.setMatrix("view", this.knc().getViewMatrix())
        }
        bindViewProjection(cB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (cB.setMatrix("viewProjection", this.knc().getTransformMatrix()), cB.setMatrix("projection", this.knc().getProjectionMatrix()), cB.setMatrix("inverseProjection", this.knc().getInverseProjectionMatrix()))
        }
        bindEyePosition(cB, Bc) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(cB, Bc)
        }
        _afterBind(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Bc && (this._needToBindSceneUbo = !1, (0, ec.y)(Bc, this.knc().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = cB ? cB.visibility : 1, this._onBindObservable && cB && this._onBindObservable.notifyObservers(cB), this.disableDepthWrite) {
            const cB = this._scene.RV();
            this._cachedDepthWriteState = cB.getDepthWrite(), cB.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const cB = this._scene.RV();
            this._cachedColorWriteState = cB.getColorWrite(), cB.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const cB = this._scene.RV();
            this._cachedDepthFunctionState = cB.getDepthFunction() || 0, cB.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.RV().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.RV().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.RV().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(cB) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = cB, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(cB) {
          return null
        }
        _clonePlugins(Bc, nc) {
          const Vc = {};
          if (this._serializePlugins(Vc), cB._ParsePlugins(Vc, Bc, this._scene, nc), this.pluginManager)
            for (const cB of this.pluginManager._plugins) {
              const nc = Bc.pluginManager.getPlugin(cB.name);
              nc && cB.copyTo(nc)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const cB = [];
            for (const Bc in this.meshMap) {
              const nc = this.meshMap[Bc];
              nc && cB.push(nc)
            }
            return cB
          }
          return this._scene.meshes.filter((cB => cB.material === this))
        }
        forceCompilation(cB, Bc, nc, Vc) {
          const Ic = {
              clipPlane: !1,
              useInstances: !1,
              ...nc
            },
            rB = this.knc(),
            uc = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const sc = () => {
            if (!this._scene || !this._scene.RV()) return;
            const nc = rB.clipPlane;
            if (Ic.clipPlane && (rB.clipPlane = new Oc.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let nc = !0,
                rB = null;
              if (cB.rD) {
                const Bc = new Mc.e(0, 0, 0, 0, 0, cB, void 0, !1, !1);
                Bc.materialDefines && (Bc.materialDefines._renderId = -1), this.isReadyForSubMesh(cB, Bc, Ic.useInstances) || (Bc.effect && Bc.effect.getCompilationError() && Bc.effect.allFallbacksProcessed() ? rB = Bc.effect.getCompilationError() : (nc = !1, setTimeout(sc, 16)))
              }
              nc && (this.allowShaderHotSwapping = uc, rB && Vc && Vc(rB), Bc && Bc(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = uc, Bc && Bc(this)) : setTimeout(sc, 16);
            Ic.clipPlane && (rB.clipPlane = nc)
          };
          sc()
        }
        async forceCompilationAsync(cB, Bc) {
          return await new Promise(((nc, Vc) => {
            this.forceCompilation(cB, (() => {
              nc()
            }), Bc, (cB => {
              Vc(cB)
            }))
          }))
        }
        SMc(Bc) {
          this.knc().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (cB._DirtyCallbackArray.length = 0, Bc & cB.ImageProcessingDirtyFlag && cB._DirtyCallbackArray.push(cB._ImageProcessingDirtyCallBack), Bc & cB.TextureDirtyFlag && cB._DirtyCallbackArray.push(cB._TextureDirtyCallBack), Bc & cB.LightDirtyFlag && cB._DirtyCallbackArray.push(cB._LightsDirtyCallBack), Bc & cB.FresnelDirtyFlag && cB._DirtyCallbackArray.push(cB._FresnelDirtyCallBack), Bc & cB.AttributesDirtyFlag && cB._DirtyCallbackArray.push(cB._AttributeDirtyCallBack), Bc & cB.MiscDirtyFlag && cB._DirtyCallbackArray.push(cB._MiscDirtyCallBack), Bc & cB.PrePassDirtyFlag && cB._DirtyCallbackArray.push(cB._PrePassDirtyCallBack), cB._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(cB._RunDirtyCallBacks), this.knc().resetCachedMaterial())
        }
        resetDrawCache() {
          const cB = this.knc().meshes;
          for (const Bc of cB)
            if (Bc.rD)
              for (const cB of Bc.rD) cB.AV() === this && cB.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(cB) {
          const Bc = this.knc();
          if (Bc.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const nc = Bc.meshes;
          for (const Vc of nc)
            if (Vc.rD)
              for (const nc of Vc.rD) {
                if ((nc.AV() || (Bc._hasDefaultMaterial ? Bc.defaultMaterial : null)) === this)
                  for (const Bc of nc._drawWrappers) Bc && Bc.defines && Bc.defines.markAllAsDirty && this._materialContext === Bc.materialContext && cB(Bc.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.knc().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const cB = this.knc().enablePrePassRenderer();
          cB && cB.SMc()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(cB._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(cB._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(cB._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(cB._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(cB._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(cB._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(cB._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(cB._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(cB._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(cB._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const cB = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.XBc.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(cB)
            }))
          }
        }
        setPrePassRenderer(cB) {
          return !1
        }
        dispose(cB, Bc, nc) {
          const Vc = this.knc();
          if (Vc.stopAnimation(this), Vc.freeProcessedMaterials(), Vc.removeMaterial(this), this._eventInfo.forceDisposeTextures = Bc, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const cB = this._parentContainer.materials.indexOf(this);
            cB > -1 && this._parentContainer.materials.splice(cB, 1), this._parentContainer = null
          }
          if (!0 !== nc)
            if (this.meshMap)
              for (const Ic in this.meshMap) {
                const cB = this.meshMap[Ic];
                this._disposeMeshResources(cB)
              } else {
                const cB = Vc.meshes;
                for (const Bc of cB) this._disposeMeshResources(Bc)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.XBc.notifyObservers(this), this.XBc.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(cB) {
          if (!cB) return;
          const Bc = cB.geometry,
            nc = cB._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (cB.rD && nc)
              for (const Vc of cB.rD) {
                const cB = Vc._drawWrappers;
                for (let Ic = 0; Ic < cB.length; Ic++) {
                  const rB = cB[Ic]?.effect;
                  if (!rB) continue;
                  nc[Ic] === this && (Bc?._releaseVertexArrayObject(rB), Vc._removeDrawWrapper(Ic, !0, !0))
                }
              }
          } else Bc?._releaseVertexArrayObject(this._drawWrapper.effect);
          cB.material !== this || cB.wqc || (cB.material = null)
        }
        serialize() {
          const cB = fc.e.Serialize(this);
          return cB.stencil = this.stencil.serialize(), cB.uniqueId = this.uniqueId, this._serializePlugins(cB), cB
        }
        _serializePlugins(cB) {
          if (cB.plugins = {}, this.pluginManager)
            for (const Bc of this.pluginManager._plugins) Bc.doNotSerialize || (cB.plugins[Bc.getClassName()] = Bc.serialize())
        }
        static ParseAlphaMode(cB, Bc) {
          void 0 !== cB._alphaMode ? Bc._alphaMode = Array.isArray(cB._alphaMode) ? [...cB._alphaMode] : [cB._alphaMode] : void 0 !== cB.alphaMode ? Bc._alphaMode = Array.isArray(cB.alphaMode) ? [...cB.alphaMode] : [cB.alphaMode] : Bc._alphaMode = [2]
        }
        static Parse(Bc, nc, Vc) {
          if (Bc.customType) {
            if ("BABYLON.PBRMaterial" === Bc.customType && Bc.overloadedAlbedo && (Bc.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return qB.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Bc.customType = "BABYLON.StandardMaterial";
          const Ic = rB.g.Instantiate(Bc.customType).Parse(Bc, nc, Vc);
          return Ic._loadedUniqueId = Bc.uniqueId, cB.ParseAlphaMode(Bc, Ic), Ic
        }
        static _ParsePlugins(cB, Bc, nc, Vc) {
          if (cB.plugins)
            for (const Ic in cB.plugins) {
              const uc = cB.plugins[Ic];
              let sc = Bc.pluginManager?.getPlugin(uc.name);
              if (!sc) {
                const cB = rB.g.Instantiate("BABYLON." + Ic);
                cB && (sc = new cB(Bc))
              }
              sc?.parse(uc, nc, Vc)
            }
        }
      }, (() => {
        const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], Sc = [(0, Ic.M)()], yB = [(0, Ic.M)()], zB = [(0, Ic.M)()], pc = [(0, Ic.M)()], hc = [(0, Ic.M)()], aB = [(0, Ic.M)("alpha")], lc = [(0, Ic.M)("backFaceCulling")], Yc = [(0, Ic.M)("textureRepetitionMode")], Lc = [(0, Ic.M)("textureRepetitionHexTilingParams")], gB = [(0, Ic.M)("cullBackFaces")], Uc = [(0, Ic.M)()], bB = [(0, Ic.M)()], Zc = [(0, Ic.M)()], Qc = [(0, Ic.M)()], Cc = [(0, Ic.M)()], vB = [(0, Ic.M)()], Dc = [(0, Ic.M)()], Nc = [(0, Ic.M)()], Ec = [(0, Ic.M)("fogEnabled")], oc = [(0, Ic.M)()], Wc = [(0, Ic.M)()], wc = [(0, Ic.M)()], kB = [(0, Ic.M)()], Xc = [(0, Ic.M)()], Hc = [(0, Ic.M)()], Fc = [(0, Ic.M)()], Jc = [(0, Ic.M)()], (0, Vc.g)(cB, null, kB, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: cB => "pointsCloud" in cB,
            get: cB => cB.pointsCloud
          },
          metadata: rB
        }, null, jB), (0, Vc.g)(cB, null, Xc, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "fillMode" in cB,
            get: cB => cB.fillMode
          },
          metadata: rB
        }, null, jB), (0, Vc.g)(cB, null, Hc, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: cB => "useLogarithmicDepth" in cB,
            get: cB => cB.useLogarithmicDepth
          },
          metadata: rB
        }, null, jB), (0, Vc.g)(cB, null, Jc, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "transparencyMode" in cB,
            get: cB => cB.transparencyMode
          },
          metadata: rB
        }, null, jB), (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: cB => "id" in cB,
            get: cB => cB.id,
            set: (cB, Bc) => {
              cB.id = Bc
            }
          },
          metadata: rB
        }, Rc, iB), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: cB => "uniqueId" in cB,
            get: cB => cB.uniqueId,
            set: (cB, Bc) => {
              cB.uniqueId = Bc
            }
          },
          metadata: rB
        }, Kc, xB), (0, Vc.g)(null, null, Sc, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: cB => "name" in cB,
            get: cB => cB.name,
            set: (cB, Bc) => {
              cB.name = Bc
            }
          },
          metadata: rB
        }, dc, Ac), (0, Vc.g)(null, null, yB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: cB => "metadata" in cB,
            get: cB => cB.metadata,
            set: (cB, Bc) => {
              cB.metadata = Bc
            }
          },
          metadata: rB
        }, Gc, cn), (0, Vc.g)(null, null, zB, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: cB => "checkReadyOnEveryCall" in cB,
            get: cB => cB.checkReadyOnEveryCall,
            set: (cB, Bc) => {
              cB.checkReadyOnEveryCall = Bc
            }
          },
          metadata: rB
        }, BB, nB), (0, Vc.g)(null, null, pc, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: cB => "checkReadyOnlyOnce" in cB,
            get: cB => cB.checkReadyOnlyOnce,
            set: (cB, Bc) => {
              cB.checkReadyOnlyOnce = Bc
            }
          },
          metadata: rB
        }, VB, IB), (0, Vc.g)(null, null, hc, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: cB => "state" in cB,
            get: cB => cB.state,
            set: (cB, Bc) => {
              cB.state = Bc
            }
          },
          metadata: rB
        }, rn, uB), (0, Vc.g)(null, null, aB, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: cB => "_alpha" in cB,
            get: cB => cB._alpha,
            set: (cB, Bc) => {
              cB._alpha = Bc
            }
          },
          metadata: rB
        }, sB, MB), (0, Vc.g)(null, null, lc, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: cB => "_backFaceCulling" in cB,
            get: cB => cB._backFaceCulling,
            set: (cB, Bc) => {
              cB._backFaceCulling = Bc
            }
          },
          metadata: rB
        }, PB, qn), (0, Vc.g)(null, null, Yc, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "_textureRepetitionMode" in cB,
            get: cB => cB._textureRepetitionMode,
            set: (cB, Bc) => {
              cB._textureRepetitionMode = Bc
            }
          },
          metadata: rB
        }, OB, TB), (0, Vc.g)(null, null, Lc, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: cB => "textureRepetitionHexTilingParams" in cB,
            get: cB => cB.textureRepetitionHexTilingParams,
            set: (cB, Bc) => {
              cB.textureRepetitionHexTilingParams = Bc
            }
          },
          metadata: rB
        }, fB, mn), (0, Vc.g)(null, null, gB, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: cB => "_cullBackFaces" in cB,
            get: cB => cB._cullBackFaces,
            set: (cB, Bc) => {
              cB._cullBackFaces = Bc
            }
          },
          metadata: rB
        }, eB, tn), (0, Vc.g)(null, null, Uc, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: cB => "sideOrientation" in cB,
            get: cB => cB.sideOrientation,
            set: (cB, Bc) => {
              cB.sideOrientation = Bc
            }
          },
          metadata: rB
        }, SB, yn), (0, Vc.g)(null, null, bB, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "_alphaMode" in cB,
            get: cB => cB._alphaMode,
            set: (cB, Bc) => {
              cB._alphaMode = Bc
            }
          },
          metadata: rB
        }, zn, pB), (0, Vc.g)(null, null, Zc, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: cB => "_needDepthPrePass" in cB,
            get: cB => cB._needDepthPrePass,
            set: (cB, Bc) => {
              cB._needDepthPrePass = Bc
            }
          },
          metadata: rB
        }, hB, an), (0, Vc.g)(null, null, Qc, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: cB => "disableDepthWrite" in cB,
            get: cB => cB.disableDepthWrite,
            set: (cB, Bc) => {
              cB.disableDepthWrite = Bc
            }
          },
          metadata: rB
        }, lB, YB), (0, Vc.g)(null, null, Cc, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: cB => "disableColorWrite" in cB,
            get: cB => cB.disableColorWrite,
            set: (cB, Bc) => {
              cB.disableColorWrite = Bc
            }
          },
          metadata: rB
        }, LB, gn), (0, Vc.g)(null, null, vB, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: cB => "forceDepthWrite" in cB,
            get: cB => cB.forceDepthWrite,
            set: (cB, Bc) => {
              cB.forceDepthWrite = Bc
            }
          },
          metadata: rB
        }, UB, bn), (0, Vc.g)(null, null, Dc, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: cB => "depthFunction" in cB,
            get: cB => cB.depthFunction,
            set: (cB, Bc) => {
              cB.depthFunction = Bc
            }
          },
          metadata: rB
        }, ZB, QB), (0, Vc.g)(null, null, Nc, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: cB => "separateCullingPass" in cB,
            get: cB => cB.separateCullingPass,
            set: (cB, Bc) => {
              cB.separateCullingPass = Bc
            }
          },
          metadata: rB
        }, CB, vn), (0, Vc.g)(null, null, Ec, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "_fogEnabled" in cB,
            get: cB => cB._fogEnabled,
            set: (cB, Bc) => {
              cB._fogEnabled = Bc
            }
          },
          metadata: rB
        }, DB, NB), (0, Vc.g)(null, null, oc, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: cB => "pointSize" in cB,
            get: cB => cB.pointSize,
            set: (cB, Bc) => {
              cB.pointSize = Bc
            }
          },
          metadata: rB
        }, EB, oB), (0, Vc.g)(null, null, Wc, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: cB => "zOffset" in cB,
            get: cB => cB.zOffset,
            set: (cB, Bc) => {
              cB.zOffset = Bc
            }
          },
          metadata: rB
        }, WB, wB), (0, Vc.g)(null, null, wc, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: cB => "zOffsetUnits" in cB,
            get: cB => cB.zOffsetUnits,
            set: (cB, Bc) => {
              cB.zOffsetUnits = Bc
            }
          },
          metadata: rB
        }, kn, XB), (0, Vc.g)(null, null, Fc, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: cB => "_isVertexOutputInvariant" in cB,
            get: cB => cB._isVertexOutputInvariant,
            set: (cB, Bc) => {
              cB._isVertexOutputInvariant = Bc
            }
          },
          metadata: rB
        }, HB, FB), rB && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rB
        })
      })(), cB.TriangleFillMode = 0, cB.WireFrameFillMode = 1, cB.PointFillMode = 2, cB.PointListDrawMode = 3, cB.LineListDrawMode = 4, cB.LineLoopDrawMode = 5, cB.LineStripDrawMode = 6, cB.TriangleStripDrawMode = 7, cB.TriangleFanDrawMode = 8, cB.ClockWiseSideOrientation = 0, cB.CounterClockWiseSideOrientation = 1, cB.ImageProcessingDirtyFlag = 64, cB.TextureDirtyFlag = 1, cB.LightDirtyFlag = 2, cB.FresnelDirtyFlag = 4, cB.AttributesDirtyFlag = 8, cB.MiscDirtyFlag = 16, cB.PrePassDirtyFlag = 32, cB.AllDirtyFlag = 127, cB.MATERIAL_OPAQUE = 0, cB.MATERIAL_ALPHATEST = 1, cB.MATERIAL_ALPHABLEND = 2, cB.MATERIAL_ALPHATESTANDBLEND = 3, cB.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, cB.MATERIAL_NORMALBLENDMETHOD_RNM = 1, cB.LIGHTFALLOFF_PHYSICAL = 0, cB.LIGHTFALLOFF_GLTF = 1, cB.LIGHTFALLOFF_STANDARD = 2, cB.OnEventObservable = new uc.c, cB.ForceVertexOutputInvariant = !1, cB._AllDirtyCallBack = cB => cB.markAllAsDirty(), cB._ImageProcessingDirtyCallBack = cB => cB.markAsImageProcessingDirty(), cB._TextureDirtyCallBack = cB => cB.markAsTexturesDirty(), cB._FresnelDirtyCallBack = cB => cB.markAsFresnelDirty(), cB._MiscDirtyCallBack = cB => cB.markAsMiscDirty(), cB._PrePassDirtyCallBack = cB => cB.markAsPrePassDirty(), cB._LightsDirtyCallBack = cB => cB.markAsLightDirty(), cB._AttributeDirtyCallBack = cB => cB.markAsAttributesDirty(), cB._FresnelAndMiscDirtyCallBack = Bc => {
        cB._FresnelDirtyCallBack(Bc), cB._MiscDirtyCallBack(Bc)
      }, cB._TextureAndMiscDirtyCallBack = Bc => {
        cB._TextureDirtyCallBack(Bc), cB._MiscDirtyCallBack(Bc)
      }, cB._DirtyCallbackArray = [], cB._RunDirtyCallBacks = Bc => {
        for (const nc of cB._DirtyCallbackArray) nc(Bc)
      }, cB
    })();
    Object.getOwnPropertyDescriptor(yB.prototype, "pluginManager") || Object.defineProperty(yB.prototype, "pluginManager", (0, Sc.e)("Material", "pluginManager"))
  },
  38364: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    var Vc = nc(37965);
    class Ic {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(cB) {
        this._DiffuseTextureEnabled !== cB && (this._DiffuseTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(cB) {
        this._BaseWeightTextureEnabled !== cB && (this._BaseWeightTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(cB) {
        this._BaseDiffuseRoughnessTextureEnabled !== cB && (this._BaseDiffuseRoughnessTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(cB) {
        this._DetailTextureEnabled !== cB && (this._DetailTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(cB) {
        this._DecalMapEnabled !== cB && (this._DecalMapEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(cB) {
        this._AmbientTextureEnabled !== cB && (this._AmbientTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(cB) {
        this._OpacityTextureEnabled !== cB && (this._OpacityTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(cB) {
        this._ReflectionTextureEnabled !== cB && (this._ReflectionTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(cB) {
        this._EmissiveTextureEnabled !== cB && (this._EmissiveTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(cB) {
        this._SpecularTextureEnabled !== cB && (this._SpecularTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(cB) {
        this._BumpTextureEnabled !== cB && (this._BumpTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(cB) {
        this._LightmapTextureEnabled !== cB && (this._LightmapTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(cB) {
        this._RefractionTextureEnabled !== cB && (this._RefractionTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(cB) {
        this._ColorGradingTextureEnabled !== cB && (this._ColorGradingTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(cB) {
        this._FresnelEnabled !== cB && (this._FresnelEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(cB) {
        this._ClearCoatTextureEnabled !== cB && (this._ClearCoatTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(cB) {
        this._ClearCoatBumpTextureEnabled !== cB && (this._ClearCoatBumpTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(cB) {
        this._ClearCoatTintTextureEnabled !== cB && (this._ClearCoatTintTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(cB) {
        this._SheenTextureEnabled !== cB && (this._SheenTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(cB) {
        this._AnisotropicTextureEnabled !== cB && (this._AnisotropicTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(cB) {
        this._ThicknessTextureEnabled !== cB && (this._ThicknessTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(cB) {
        this._RefractionIntensityTextureEnabled !== cB && (this._RefractionIntensityTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(cB) {
        this._TranslucencyIntensityTextureEnabled !== cB && (this._TranslucencyIntensityTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(cB) {
        this._TranslucencyColorTextureEnabled !== cB && (this._TranslucencyColorTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(cB) {
        this._IridescenceTextureEnabled !== cB && (this._IridescenceTextureEnabled = cB, Vc.e.MarkAllMaterialsAsDirty(1))
      }
    }
    Ic._DiffuseTextureEnabled = !0, Ic._BaseWeightTextureEnabled = !0, Ic._BaseDiffuseRoughnessTextureEnabled = !0, Ic._DetailTextureEnabled = !0, Ic._DecalMapEnabled = !0, Ic._AmbientTextureEnabled = !0, Ic._OpacityTextureEnabled = !0, Ic._ReflectionTextureEnabled = !0, Ic._EmissiveTextureEnabled = !0, Ic._SpecularTextureEnabled = !0, Ic._BumpTextureEnabled = !0, Ic._LightmapTextureEnabled = !0, Ic._RefractionTextureEnabled = !0, Ic._ColorGradingTextureEnabled = !0, Ic._FresnelEnabled = !0, Ic._ClearCoatTextureEnabled = !0, Ic._ClearCoatBumpTextureEnabled = !0, Ic._ClearCoatTintTextureEnabled = !0, Ic._SheenTextureEnabled = !0, Ic._AnisotropicTextureEnabled = !0, Ic._ThicknessTextureEnabled = !0, Ic._RefractionIntensityTextureEnabled = !0, Ic._TranslucencyIntensityTextureEnabled = !0, Ic._TranslucencyColorTextureEnabled = !0, Ic._IridescenceTextureEnabled = !0
  },
  38358: (cB, Bc, nc) => {
    nc.d(Bc, {
      $: () => zB,
      B: () => pc,
      F: () => Zc,
      G: () => hc,
      K: () => Uc,
      M: () => bB,
      O: () => fc,
      S: () => Tc,
      W: () => Xc,
      X: () => Ec,
      Y: () => Dc,
      Z: () => vB,
      cb: () => Qc,
      e: () => Cc,
      gb: () => Hc,
      i: () => aB,
      j: () => Oc,
      kb: () => Fc,
      lb: () => Jc,
      mb: () => Kc,
      n: () => Sc,
      ob: () => Rc,
      q: () => yB,
      r: () => gB,
      rb: () => iB,
      s: () => Mc,
      vb: () => mB,
      w: () => ec,
      y: () => tB
    });
    var Vc = nc(37191),
      Ic = nc(35780),
      rB = nc(38232),
      uc = nc(38362),
      sc = nc(38364);

    function Mc(cB, Bc, nc) {
      if (!cB || cB.LOGARITHMICDEPTH || cB.indexOf && cB.indexOf("LOGARITHMICDEPTH") >= 0) {
        const cB = nc.activeCamera;
        1 === cB.mode && Vc.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Bc.setFloat("logarithmicDepthConstant", 2 / (Math.log(cB.maxZ + 1) / Math.LN2))
      }
    }
    const Pc = {
        r: 0,
        g: 0,
        b: 0
      },
      qB = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Oc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      nc && cB.fogEnabled && (!Bc || Bc.applyFog) && 0 !== cB.fogMode && (nc.setFloat4("vFogInfos", cB.fogMode, cB.fogStart, cB.fogEnd, cB.fogDensity), Vc ? (cB.fogColor.toLinearSpaceToRef(Pc, cB.RV().useExactSrgbConversions), nc.setColor3("vFogColor", Pc)) : nc.setColor3("vFogColor", cB.fogColor))
    }

    function Tc(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
      const Oc = cB.numMaxInfluencers || cB.numInfluencers;
      return Oc <= 0 ? 0 : (Bc.push("#define MORPHTARGETS"), cB.hasPositions && Bc.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), cB.hasNormals && Bc.push("#define MORPHTARGETTEXTURE_HASNORMALS"), cB.hasTangents && Bc.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), cB.hasUVs && Bc.push("#define MORPHTARGETTEXTURE_HASUVS"), cB.hasUV2s && Bc.push("#define MORPHTARGETTEXTURE_HASUV2S"), cB.hasColors && Bc.push("#define MORPHTARGETTEXTURE_HASCOLORS"), cB.supportsPositions && Ic && Bc.push("#define MORPHTARGETS_POSITION"), cB.supportsNormals && rB && Bc.push("#define MORPHTARGETS_NORMAL"), cB.supportsTangents && uc && Bc.push("#define MORPHTARGETS_TANGENT"), cB.supportsUVs && sc && Bc.push("#define MORPHTARGETS_UV"), cB.supportsUV2s && Mc && Bc.push("#define MORPHTARGETS_UV2"), cB.supportsColors && Pc && Bc.push("#define MORPHTARGETS_COLOR"), Bc.push("#define NUM_MORPH_INFLUENCERS " + Oc), cB.isUsingTextureForTargets && Bc.push("#define MORPHTARGETS_TEXTURE"), qB.NUM_MORPH_INFLUENCERS = Oc, qB.NORMAL = rB, qB.TANGENT = uc, qB.UV = sc, qB.UV2 = Mc, qB.COLOR = Pc, fc(nc, Vc, qB, Ic), Oc)
    }

    function fc(cB, Bc, nc) {
      let rB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const uc = nc.NUM_MORPH_INFLUENCERS;
      if (uc > 0 && Ic.d.LastCreatedEngine) {
        const sc = Ic.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          Mc = Bc.morphTargetManager;
        if (Mc?.isUsingTextureForTargets) return;
        const Pc = Mc && Mc.supportsPositions && rB,
          qB = Mc && Mc.supportsNormals && nc.NORMAL,
          Oc = Mc && Mc.supportsTangents && nc.TANGENT,
          Tc = Mc && Mc.supportsUVs && nc.UV1,
          fc = Mc && Mc.supportsUV2s && nc.UV2,
          mB = Mc && Mc.supportsColors && nc.VERTEXCOLOR;
        for (let nc = 0; nc < uc; nc++) Pc && cB.push("position" + nc), qB && cB.push("normal" + nc), Oc && cB.push("tangent" + nc), Tc && cB.push("uv_" + nc), fc && cB.push("uv2_" + nc), mB && cB.push("color" + nc), cB.length > sc && Vc.c.Error("Cannot add more vertex attributes for mesh " + Bc.name)
      }
    }

    function mB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      cB.push("world0"), cB.push("world1"), cB.push("world2"), cB.push("world3"), Bc && (cB.push("previousWorld0"), cB.push("previousWorld1"), cB.push("previousWorld2"), cB.push("previousWorld3"))
    }

    function ec(cB, Bc) {
      const nc = cB.morphTargetManager;
      cB && nc && Bc.setFloatArray("morphTargetInfluences", nc.influences)
    }

    function tB(cB, Bc) {
      Bc.bindToEffect(cB, "Scene")
    }

    function Sc(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Mc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Pc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        qB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Oc = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Tc = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (cB.texturesEnabled && Ic && sc.c.ReflectionTextureEnabled) {
        if (nc.Buc("reflectionMatrix", Ic.getReflectionTextureMatrix()), nc.updateFloat2("vReflectionInfos", Ic.level * cB.iblIntensity, Tc), Mc && Ic.boundingBoxSize) {
          const cB = Ic;
          nc.updateVector3("vReflectionPosition", cB.boundingBoxPosition), nc.updateVector3("vReflectionSize", cB.boundingBoxSize)
        }
        if (rB) {
          const cB = Ic.getSize().width;
          nc.updateFloat2("vReflectionFilteringInfo", cB, Math.log2(cB))
        }
        if (qB && !Bc.USEIRRADIANCEMAP) {
          const cB = Ic.sphericalPolynomial;
          if (Bc.USESPHERICALFROMREFLECTIONMAP && cB)
            if (Bc.SPHERICAL_HARMONICS) {
              const Bc = cB.preScaledHarmonics;
              nc.updateVector3("vSphericalL00", Bc.l00), nc.updateVector3("vSphericalL1_1", Bc.l1_1), nc.updateVector3("vSphericalL10", Bc.l10), nc.updateVector3("vSphericalL11", Bc.l11), nc.updateVector3("vSphericalL2_2", Bc.l2_2), nc.updateVector3("vSphericalL2_1", Bc.l2_1), nc.updateVector3("vSphericalL20", Bc.l20), nc.updateVector3("vSphericalL21", Bc.l21), nc.updateVector3("vSphericalL22", Bc.l22)
            } else nc.updateFloat3("vSphericalX", cB.x.x, cB.x.y, cB.x.z), nc.updateFloat3("vSphericalY", cB.y.x, cB.y.y, cB.y.z), nc.updateFloat3("vSphericalZ", cB.z.x, cB.z.y, cB.z.z), nc.updateFloat3("vSphericalXX_ZZ", cB.xx.x - cB.zz.x, cB.xx.y - cB.zz.y, cB.xx.z - cB.zz.z), nc.updateFloat3("vSphericalYY_ZZ", cB.yy.x - cB.zz.x, cB.yy.y - cB.zz.y, cB.yy.z - cB.zz.z), nc.updateFloat3("vSphericalZZ", cB.zz.x, cB.zz.y, cB.zz.z), nc.updateFloat3("vSphericalXY", cB.xy.x, cB.xy.y, cB.xy.z), nc.updateFloat3("vSphericalYZ", cB.yz.x, cB.yz.y, cB.yz.z), nc.updateFloat3("vSphericalZX", cB.zx.x, cB.zx.y, cB.zx.z)
        } else Pc && Bc.USEIRRADIANCEMAP && Bc.USE_IRRADIANCE_DOMINANT_DIRECTION && Ic.irradianceTexture && nc.updateVector3("vReflectionDominantDirection", Ic.irradianceTexture._dominantDirection);
        uc && nc.updateFloat3("vReflectionMicrosurfaceInfos", Ic.getSize().width, Ic.lodGenerationScale, Ic.lodGenerationOffset)
      }
      Oc && nc.updateColor3("vReflectionColor", Vc)
    }

    function yB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Vc && sc.c.ReflectionTextureEnabled) {
        Bc.LODBASEDMICROSFURACE ? nc.setTexture("reflectionSampler", Vc) : (nc.setTexture("reflectionSampler", Vc._lodTextureMid || Vc), nc.setTexture("reflectionSamplerLow", Vc._lodTextureLow || Vc), nc.setTexture("reflectionSamplerHigh", Vc._lodTextureHigh || Vc)), Bc.USEIRRADIANCEMAP && nc.setTexture("irradianceSampler", Vc.irradianceTexture);
        const rB = cB.iblCdfGenerator;
        Ic && rB && nc.setTexture("icdfSampler", rB.getIcdfTexture())
      }
    }

    function zB(cB, Bc, nc) {
      Bc._needUVs = !0, Bc[nc] = !0, cB.optimizeUVAllocation && cB.getTextureMatrix().isIdentityAs3x2() ? (Bc[nc + "DIRECTUV"] = cB.coordinatesIndex + 1, Bc["MAINUV" + (cB.coordinatesIndex + 1)] = !0) : Bc[nc + "DIRECTUV"] = 0
    }

    function pc(cB, Bc, nc) {
      const Vc = cB.getTextureMatrix();
      Bc.Buc(nc + "Matrix", Vc)
    }

    function hc(cB, Bc, nc) {
      nc.BAKED_VERTEX_ANIMATION_TEXTURE && nc.INSTANCES && cB.push("bakedVertexAnimationSettingsInstanced")
    }

    function aB(cB, Bc, nc) {
      var Vc;
      if (Bc && cB && (cB.computeBonesUsingShaders && Bc._bonesComputationForcedToCPU && (cB.computeBonesUsingShaders = !1), cB.useBones && cB.computeBonesUsingShaders && cB.skeleton)) {
        const Ic = cB.skeleton;
        if (Ic.isUsingTextureForMatrices && Bc.getUniformIndex("boneTextureInfo") > -1) {
          const nc = Ic.getTransformMatrixTexture(cB);
          Bc.setTexture("boneSampler", nc), Bc.setFloat2("boneTextureInfo", Ic._textureWidth, Ic._textureHeight)
        } else {
          const rB = Ic.getTransformMatrices(cB);
          rB && (Bc.setMatrices("mBones", rB), nc && cB.knc().prePassRenderer && cB.knc().prePassRenderer.getIndex(2) && (nc.previousBones[cB.uniqueId] || (nc.previousBones[cB.uniqueId] = rB.slice()), Bc.setMatrices("mPreviousBones", nc.previousBones[cB.uniqueId]), Vc = rB, nc.previousBones[cB.uniqueId].set(Vc)))
        }
      }
    }

    function lc(cB, Bc, nc, Vc, Ic) {
      let rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      cB._bindLight(Bc, nc, Vc, Ic, rB)
    }
    const Yc = 4,
      Lc = new WeakMap;

    function gB(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const rB = Math.min(Bc.lightSources.length, Ic);
      for (let uc = 0; uc < rB; uc++) {
        lc(Bc.lightSources[uc], uc, cB, nc, "boolean" === typeof Vc ? Vc : Vc.SPECULARTERM, Bc.receiveShadows)
      }
    }

    function Uc(cB, Bc, nc, Vc) {
      nc.NUM_BONE_INFLUENCERS > 0 && (Vc.addCPUSkinningFallback(0, Bc), cB.push("matricesIndices"), cB.push("matricesWeights"), nc.NUM_BONE_INFLUENCERS > 4 && (cB.push("matricesIndicesExtra"), cB.push("matricesWeightsExtra")))
    }

    function bB(cB, Bc) {
      (Bc.INSTANCES || Bc.THIN_INSTANCES) && mB(cB, !!Bc.PREPASS_VELOCITY), Bc.INSTANCESCOLOR && cB.push("instanceColor")
    }

    function Zc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ic = 0;
      for (let rB = 0; rB < nc && cB["LIGHT" + rB]; rB++) rB > 0 && (Ic = Vc + rB, Bc.addFallback(Ic, "LIGHT" + rB)), cB.SHADOWS || (cB["SHADOW" + rB] && Bc.addFallback(Vc, "SHADOW" + rB), cB["SHADOWPCF" + rB] && Bc.addFallback(Vc, "SHADOWPCF" + rB), cB["SHADOWPCSS" + rB] && Bc.addFallback(Vc, "SHADOWPCSS" + rB), cB["SHADOWPOISSON" + rB] && Bc.addFallback(Vc, "SHADOWPOISSON" + rB), cB["SHADOWESM" + rB] && Bc.addFallback(Vc, "SHADOWESM" + rB), cB["SHADOWCLOSEESM" + rB] && Bc.addFallback(Vc, "SHADOWCLOSEESM" + rB));
      return Ic
    }

    function Qc(cB, Bc, nc, Vc, Ic, rB, uc) {
      let sc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Mc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Pc = arguments.length > 9 ? arguments[9] : void 0,
        qB = arguments.length > 10 ? arguments[10] : void 0;
      if (uc._areMiscDirty) {
        uc.LOGARITHMICDEPTH = nc, uc.POINTSIZE = Vc, uc.FOG = Ic && function(cB, Bc) {
          return Bc.fogEnabled && cB.applyFog && 0 !== Bc.fogMode
        }(cB, Bc), uc.NONUNIFORMSCALING = cB.nonUniformScaling, uc.ALPHATEST = rB, uc.DECAL_AFTER_DETAIL = sc, uc.USE_VERTEX_PULLING = Mc, uc.RIGHT_HANDED = Bc.useRightHandedSystem;
        const Oc = Mc ? Pc?.geometry?.getIndexBuffer() : null,
          Tc = !!Pc && Pc.isUnIndexed;
        uc.VERTEX_PULLING_USE_INDEX_BUFFER = !!Oc && !Tc, uc.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Oc || Tc) && Oc.is32Bits, uc.VERTEXOUTPUT_INVARIANT = !!qB
      }
    }

    function Cc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!cB.lightsEnabled || Vc) return !0;
      const Ic = Bc.lightSources,
        rB = Math.min(Ic.length, nc);
      for (let uc = 0; uc < rB; uc++)
        if (!Ic[uc].areLightTexturesReady()) return !1;
      return !0
    }

    function vB(cB, Bc, nc, Ic) {
      let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        uc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!nc._areLightsDirty) return nc._needNormals;
      const sc = rB;
      rB = function(cB, Bc) {
        const nc = cB.RV().getCaps().maxUniformBuffersPerShaderStage;
        if (null == nc) return Bc;
        const Vc = Math.max(nc - Yc, 1);
        return Math.min(Bc, Vc)
      }(cB, rB);
      let Mc = 0;
      const Pc = {
        needNormals: nc._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (cB.lightsEnabled && !uc) {
        Bc.lightSources.length > rB && rB < sc && function(cB, Bc, nc, Ic) {
          let rB = Lc.get(cB);
          rB || (rB = new Set, Lc.set(cB, rB)), rB.has(Ic) || (rB.add(Ic), Vc.c.Warn(`maxSimultaneousLights is ${Bc} but this engine supports at most ${nc} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Ic} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Ic+Yc} uniform buffers, over the device limit of ${cB.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${nc}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${nc} or less to silence this warning.`))
        }(cB.RV(), sc, rB, Math.min(Bc.lightSources.length, sc));
        for (const Vc of Bc.lightSources)
          if (Nc(cB, Bc, Vc, Mc, nc, Ic, Pc), Mc++, Mc === rB) break
      }
      nc.SPECULARTERM = Pc.specularEnabled, nc.SHADOWS = Pc.shadowEnabled;
      const qB = Math.max(rB, nc.MAXLIGHTCOUNT || 0);
      for (let Vc = Mc; Vc < qB; Vc++) void 0 !== nc["LIGHT" + Vc] && (nc["LIGHT" + Vc] = !1, nc["HEMILIGHT" + Vc] = !1, nc["POINTLIGHT" + Vc] = !1, nc["DIRLIGHT" + Vc] = !1, nc["SPOTLIGHT" + Vc] = !1, nc["AREALIGHT" + Vc] = !1, nc["CLUSTLIGHT" + Vc] = !1, nc["SHADOW" + Vc] = !1, nc["SHADOWCSM" + Vc] = !1, nc["SHADOWCSMDEBUG" + Vc] = !1, nc["SHADOWCSMNUM_CASCADES" + Vc] = !1, nc["SHADOWCSMUSESHADOWMAXZ" + Vc] = !1, nc["SHADOWCSMNOBLEND" + Vc] = !1, nc["SHADOWCSM_RIGHTHANDED" + Vc] = !1, nc["SHADOWPCF" + Vc] = !1, nc["SHADOWPCSS" + Vc] = !1, nc["SHADOWPOISSON" + Vc] = !1, nc["SHADOWESM" + Vc] = !1, nc["SHADOWCLOSEESM" + Vc] = !1, nc["SHADOWCUBE" + Vc] = !1, nc["SHADOWLOWQUALITY" + Vc] = !1, nc["SHADOWMEDIUMQUALITY" + Vc] = !1);
      nc.LIGHTCOUNT = Mc, nc.MAXLIGHTCOUNT = rB;
      const Oc = cB.RV().getCaps();
      return void 0 === nc.SHADOWFLOAT && (Pc.needRebuild = !0), nc.SHADOWFLOAT = Pc.shadowEnabled && (Oc.textureFloatRender && Oc.textureFloatLinearFiltering || Oc.textureHalfFloatRender && Oc.textureHalfFloatLinearFiltering), nc.LIGHTMAPEXCLUDED = Pc.lightmapMode, Pc.needRebuild && nc.rebuild(), Pc.needNormals
    }

    function Dc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Bc && sc.c.ReflectionTextureEnabled) {
        if (!Bc.isReadyOrNotBlocking()) return !1;
        nc._needNormals = !0, nc.REFLECTION = !0, nc.GAMMAREFLECTION = Bc.gammaSpace, nc.RGBDREFLECTION = Bc.isRGBD, nc.LODINREFLECTIONALPHA = Bc.lodLevelInAlpha, nc.LINEARSPECULARREFLECTION = Bc.linearSpecularLOD, nc.USEIRRADIANCEMAP = !1, nc.LODBASEDMICROSFURACE = cB.RV().getCaps().textureLOD;
        const uc = cB.RV();
        switch (Vc && Ic > 0 ? (nc.NUM_SAMPLES = "" + Ic, uc._features.needTypeSuffixInShaderConstants && (nc.NUM_SAMPLES = nc.NUM_SAMPLES + "u"), nc.REALTIME_FILTERING = !0, cB.iblCdfGenerator && (nc.IBL_CDF_FILTERING = !0)) : nc.REALTIME_FILTERING = !1, nc.INVERTCUBICMAP = 6 === Bc.coordinatesMode, nc.REFLECTIONMAP_3D = Bc.isCube, nc.REFLECTIONMAP_OPPOSITEZ = nc.REFLECTIONMAP_3D && cB.useRightHandedSystem ? !Bc.invertZ : Bc.invertZ, nc.REFLECTIONMAP_CUBIC = !1, nc.REFLECTIONMAP_EXPLICIT = !1, nc.REFLECTIONMAP_PLANAR = !1, nc.REFLECTIONMAP_PROJECTION = !1, nc.REFLECTIONMAP_SKYBOX = !1, nc.REFLECTIONMAP_SPHERICAL = !1, nc.REFLECTIONMAP_EQUIRECTANGULAR = !1, nc.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, nc.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Bc.coordinatesMode) {
          case 0:
            nc.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            nc.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            nc.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            nc.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            nc.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            nc.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            nc.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            nc.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            nc.REFLECTIONMAP_CUBIC = !0, nc.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Bc.boundingBoxSize
        }
        5 !== Bc.coordinatesMode && (Bc.irradianceTexture ? (nc.USEIRRADIANCEMAP = !0, nc.USESPHERICALFROMREFLECTIONMAP = !1, nc.USESPHERICALINVERTEX = !1, Bc.irradianceTexture._dominantDirection ? nc.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : nc.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Bc.isCube && (nc.USESPHERICALFROMREFLECTIONMAP = !0, nc.USEIRRADIANCEMAP = !1, nc.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, nc.USESPHERICALINVERTEX = rB))
      } else nc.REFLECTION = !1, nc.REFLECTIONMAP_3D = !1, nc.REFLECTIONMAP_SPHERICAL = !1, nc.REFLECTIONMAP_PLANAR = !1, nc.REFLECTIONMAP_CUBIC = !1, nc.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, nc.REFLECTIONMAP_PROJECTION = !1, nc.REFLECTIONMAP_SKYBOX = !1, nc.REFLECTIONMAP_EXPLICIT = !1, nc.REFLECTIONMAP_EQUIRECTANGULAR = !1, nc.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, nc.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, nc.INVERTCUBICMAP = !1, nc.USESPHERICALFROMREFLECTIONMAP = !1, nc.USEIRRADIANCEMAP = !1, nc.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, nc.USESPHERICALINVERTEX = !1, nc.REFLECTIONMAP_OPPOSITEZ = !1, nc.LODINREFLECTIONALPHA = !1, nc.GAMMAREFLECTION = !1, nc.RGBDREFLECTION = !1, nc.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Nc(cB, Bc, nc, Vc, Ic, uc, sc) {
      switch (sc.needNormals = !0, void 0 === Ic["LIGHT" + Vc] && (sc.needRebuild = !0), Ic["LIGHT" + Vc] = !0, Ic["SPOTLIGHT" + Vc] = !1, Ic["HEMILIGHT" + Vc] = !1, Ic["POINTLIGHT" + Vc] = !1, Ic["DIRLIGHT" + Vc] = !1, Ic["AREALIGHT" + Vc] = !1, Ic["CLUSTLIGHT" + Vc] = !1, nc.prepareLightSpecificDefines(Ic, Vc), Ic["LIGHT_FALLOFF_PHYSICAL" + Vc] = !1, Ic["LIGHT_FALLOFF_GLTF" + Vc] = !1, Ic["LIGHT_FALLOFF_STANDARD" + Vc] = !1, nc.falloffType) {
        case rB.c.FALLOFF_GLTF:
          Ic["LIGHT_FALLOFF_GLTF" + Vc] = !0;
          break;
        case rB.c.FALLOFF_PHYSICAL:
          Ic["LIGHT_FALLOFF_PHYSICAL" + Vc] = !0;
          break;
        case rB.c.FALLOFF_STANDARD:
          Ic["LIGHT_FALLOFF_STANDARD" + Vc] = !0
      }
      if (uc && !nc.specular.equalsFloats(0, 0, 0) && (sc.specularEnabled = !0), Ic["SHADOW" + Vc] = !1, Ic["SHADOWCSM" + Vc] = !1, Ic["SHADOWCSMDEBUG" + Vc] = !1, Ic["SHADOWCSMNUM_CASCADES" + Vc] = !1, Ic["SHADOWCSMUSESHADOWMAXZ" + Vc] = !1, Ic["SHADOWCSMNOBLEND" + Vc] = !1, Ic["SHADOWCSM_RIGHTHANDED" + Vc] = !1, Ic["SHADOWPCF" + Vc] = !1, Ic["SHADOWPCSS" + Vc] = !1, Ic["SHADOWPOISSON" + Vc] = !1, Ic["SHADOWESM" + Vc] = !1, Ic["SHADOWCLOSEESM" + Vc] = !1, Ic["SHADOWCUBE" + Vc] = !1, Ic["SHADOWLOWQUALITY" + Vc] = !1, Ic["SHADOWMEDIUMQUALITY" + Vc] = !1, Bc && Bc.receiveShadows && cB.shadowsEnabled && nc.shadowEnabled) {
        const Bc = nc.getShadowGenerator(cB.activeCamera) ?? nc.getShadowGenerator();
        if (Bc) {
          const cB = Bc.getShadowMap();
          cB && cB.renderList && cB.renderList.length > 0 && (sc.shadowEnabled = !0, Bc.prepareDefines(Ic, Vc))
        }
      }
      nc.lightmapMode != rB.c.LIGHTMAP_DEFAULT ? (sc.lightmapMode = !0, Ic["LIGHTMAPEXCLUDED" + Vc] = !0, Ic["LIGHTMAPNOSPECULAR" + Vc] = nc.lightmapMode == rB.c.LIGHTMAP_SHADOWSONLY) : (Ic["LIGHTMAPEXCLUDED" + Vc] = !1, Ic["LIGHTMAPNOSPECULAR" + Vc] = !1)
    }

    function Ec(cB, Bc, nc, Vc, Ic) {
      let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        sc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Mc = function(cB, Bc) {
          let nc = !1;
          if (cB.activeCamera) {
            const Vc = Bc.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Ic = Bc.CAMERA_PERSPECTIVE ? 1 : 0,
              rB = 1 === cB.activeCamera.mode ? 1 : 0,
              uc = 0 === cB.activeCamera.mode ? 1 : 0;
            (Vc ^ rB || Ic ^ uc) && (Bc.CAMERA_ORTHOGRAPHIC = 1 === rB, Bc.CAMERA_PERSPECTIVE = 1 === uc, nc = !0)
          }
          return nc
        }(cB, Vc);
      !1 !== rB && (Mc = (0, uc.f)(nc, cB, Vc)), Vc.DEPTHPREPASS !== !Bc.getColorWrite() && (Vc.DEPTHPREPASS = !Vc.DEPTHPREPASS, Mc = !0), Vc.INSTANCES !== Ic && (Vc.INSTANCES = Ic, Mc = !0), Vc.THIN_INSTANCES !== sc && (Vc.THIN_INSTANCES = sc, Mc = !0), Mc && Vc.markAsUnprocessed()
    }
    const oc = 40,
      Wc = 64,
      wc = new WeakMap,
      kB = new WeakSet;

    function Xc(cB, Bc, nc, Ic) {
      let rB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        uc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        sc = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Bc._areAttributesDirty && Bc._needNormals === Bc._normals && Bc._needUVs === Bc._uvs) return !1;
      Bc._normals = Bc._needNormals, Bc._uvs = Bc._needUVs, Bc.NORMAL = Bc._needNormals && cB.isVerticesDataPresent("normal"), Bc._needNormals && cB.isVerticesDataPresent("tangent") && (Bc.TANGENT = !0);
      for (let Vc = 1; Vc <= 6; ++Vc) Bc["UV" + Vc] = !!Bc._needUVs && cB.isVerticesDataPresent(`uv${1===Vc?"":Vc}`);
      if (nc) {
        const nc = cB.useVertexColors && cB.isVerticesDataPresent("color");
        Bc.VERTEXCOLOR = nc, Bc.VERTEXALPHA = cB.hasVertexAlpha && nc && uc
      }
      return cB.isVerticesDataPresent("instanceColor") && (cB.Wqc || cB.hasThinInstances) && (Bc.INSTANCESCOLOR = !0), Ic && function(cB, Bc) {
        if (cB.useBones && cB.computeBonesUsingShaders && cB.skeleton) {
          Bc.NUM_BONE_INFLUENCERS = cB.numBoneInfluencers;
          const nc = void 0 !== Bc.BONETEXTURE;
          if (cB.skeleton.isUsingTextureForMatrices && nc) Bc.BONETEXTURE = !0;
          else {
            Bc.BonesPerMesh = cB.skeleton.bones.length + 1, Bc.BONETEXTURE = !nc && void 0;
            const Ic = cB.knc(),
              rB = Ic.prePassRenderer;
            if (rB && rB.enabled) {
              const nc = -1 === rB.excludedSkinnedMesh.indexOf(cB);
              Bc.BONES_VELOCITY_ENABLED = nc
            }
            const uc = !0 === Bc.MULTIVIEW,
              sc = 2 * Bc.BonesPerMesh + (uc ? 1 : 0);
            if (wc.get(cB.skeleton) !== sc) {
              wc.set(cB.skeleton, sc);
              const nc = Ic.RV().getCaps().maxVertexUniformVectors;
              if (nc && !kB.has(cB.skeleton)) {
                const Ic = 4 * Bc.BonesPerMesh,
                  rB = uc ? Wc : oc,
                  sc = Math.max(nc - rB, 0);
                (Ic > sc || uc && 3 * Ic > nc) && (kB.add(cB.skeleton), Vc.c.Warn(`Skeleton "${cB.skeleton.name}": ${cB.skeleton.bones.length} bones stored as vertex uniforms use ${Ic} of ~${sc} usable uniform vectors${uc?" (multiview)":""} on a device reporting ${nc}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Bc.NUM_BONE_INFLUENCERS = 0, Bc.BonesPerMesh = 0, void 0 !== Bc.BONETEXTURE && (Bc.BONETEXTURE = !1)
      }(cB, Bc), rB && function(cB, Bc) {
        const nc = cB.morphTargetManager;
        nc ? (Bc.MORPHTARGETS_UV = nc.supportsUVs && Bc.UV1, Bc.MORPHTARGETS_UV2 = nc.supportsUV2s && Bc.UV2, Bc.MORPHTARGETS_TANGENT = nc.supportsTangents && Bc.TANGENT, Bc.MORPHTARGETS_NORMAL = nc.supportsNormals && Bc.NORMAL, Bc.MORPHTARGETS_POSITION = nc.supportsPositions, Bc.MORPHTARGETS_COLOR = nc.supportsColors, Bc.MORPHTARGETTEXTURE_HASUVS = nc.hasUVs, Bc.MORPHTARGETTEXTURE_HASUV2S = nc.hasUV2s, Bc.MORPHTARGETTEXTURE_HASTANGENTS = nc.hasTangents, Bc.MORPHTARGETTEXTURE_HASNORMALS = nc.hasNormals, Bc.MORPHTARGETTEXTURE_HASPOSITIONS = nc.hasPositions, Bc.MORPHTARGETTEXTURE_HASCOLORS = nc.hasColors, Bc.NUM_MORPH_INFLUENCERS = nc.numMaxInfluencers || nc.numInfluencers, Bc.MORPHTARGETS = Bc.NUM_MORPH_INFLUENCERS > 0, Bc.MORPHTARGETS_TEXTURE = nc.isUsingTextureForTargets) : (Bc.MORPHTARGETS_UV = !1, Bc.MORPHTARGETS_UV2 = !1, Bc.MORPHTARGETS_TANGENT = !1, Bc.MORPHTARGETS_NORMAL = !1, Bc.MORPHTARGETS_POSITION = !1, Bc.MORPHTARGETS_COLOR = !1, Bc.MORPHTARGETTEXTURE_HASUVS = !1, Bc.MORPHTARGETTEXTURE_HASUV2S = !1, Bc.MORPHTARGETTEXTURE_HASTANGENTS = !1, Bc.MORPHTARGETTEXTURE_HASNORMALS = !1, Bc.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Bc.MORPHTARGETTEXTURE_HAS_COLORS = !1, Bc.MORPHTARGETS = !1, Bc.NUM_MORPH_INFLUENCERS = 0)
      }(cB, Bc), sc && function(cB, Bc) {
        const nc = cB.bakedVertexAnimationManager;
        Bc.BAKED_VERTEX_ANIMATION_TEXTURE = !(!nc || !nc.isEnabled)
      }(cB, Bc), !0
    }

    function Hc(cB, Bc) {
      if (cB.activeCamera) {
        const nc = Bc.MULTIVIEW;
        Bc.MULTIVIEW = null !== cB.activeCamera.outputRenderTarget && cB.activeCamera.outputRenderTarget.getViewCount() > 1, Bc.MULTIVIEW != nc && Bc.markAsUnprocessed()
      }
    }

    function Fc(cB, Bc, nc) {
      const Vc = Bc.ORDER_INDEPENDENT_TRANSPARENCY,
        Ic = Bc.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Bc.ORDER_INDEPENDENT_TRANSPARENCY = cB.useOrderIndependentTransparency && nc, Bc.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !cB.RV().getCaps().textureFloatLinearFiltering, Vc === Bc.ORDER_INDEPENDENT_TRANSPARENCY && Ic === Bc.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Bc.markAsUnprocessed()
    }

    function Jc(cB, Bc, nc) {
      const Vc = Bc.PREPASS;
      if (!Bc._arePrePassDirty) return;
      const Ic = [{
        type: 1,
        define: "PREPASS_POSITION",
        index: "PREPASS_POSITION_INDEX"
      }, {
        type: 9,
        define: "PREPASS_LOCAL_POSITION",
        index: "PREPASS_LOCAL_POSITION_INDEX"
      }, {
        type: 2,
        define: "PREPASS_VELOCITY",
        index: "PREPASS_VELOCITY_INDEX"
      }, {
        type: 11,
        define: "PREPASS_VELOCITY_LINEAR",
        index: "PREPASS_VELOCITY_LINEAR_INDEX"
      }, {
        type: 3,
        define: "PREPASS_REFLECTIVITY",
        index: "PREPASS_REFLECTIVITY_INDEX"
      }, {
        type: 0,
        define: "PREPASS_IRRADIANCE_LEGACY",
        index: "PREPASS_IRRADIANCE_LEGACY_INDEX"
      }, {
        type: 7,
        define: "PREPASS_ALBEDO_SQRT",
        index: "PREPASS_ALBEDO_SQRT_INDEX"
      }, {
        type: 5,
        define: "PREPASS_DEPTH",
        index: "PREPASS_DEPTH_INDEX"
      }, {
        type: 10,
        define: "PREPASS_SCREENSPACE_DEPTH",
        index: "PREPASS_SCREENSPACE_DEPTH_INDEX"
      }, {
        type: 6,
        define: "PREPASS_NORMAL",
        index: "PREPASS_NORMAL_INDEX"
      }, {
        type: 8,
        define: "PREPASS_WORLD_NORMAL",
        index: "PREPASS_WORLD_NORMAL_INDEX"
      }, {
        type: 14,
        define: "PREPASS_IRRADIANCE",
        index: "PREPASS_IRRADIANCE_INDEX"
      }];
      if (cB.prePassRenderer && cB.prePassRenderer.enabled && nc) {
        Bc.PREPASS = !0, Bc.SCENE_MRT_COUNT = cB.prePassRenderer.mrtCount, Bc.PREPASS_NORMAL_WORLDSPACE = cB.prePassRenderer.generateNormalsInWorldSpace, Bc.PREPASS_COLOR = !0, Bc.PREPASS_COLOR_INDEX = 0;
        for (let nc = 0; nc < Ic.length; nc++) {
          const Vc = cB.prePassRenderer.getIndex(Ic[nc].type); - 1 !== Vc ? (Bc[Ic[nc].define] = !0, Bc[Ic[nc].index] = Vc) : Bc[Ic[nc].define] = !1
        }
      } else {
        Bc.PREPASS = !1;
        for (let cB = 0; cB < Ic.length; cB++) Bc[Ic[cB].define] = !1
      }
      Bc.PREPASS != Vc && (Bc.markAsUnprocessed(), Bc.markAsImageProcessingDirty())
    }

    function jB(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        sc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Mc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Pc = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Ic && Ic.push("Light" + cB), rB || (Bc.push("vLightData" + cB, "vLightDiffuse" + cB, "vLightSpecular" + cB, "vLightDirection" + cB, "vLightWidth" + cB, "vLightHeight" + cB, "vLightFalloff" + cB, "vLightGround" + cB, "vSliceData" + cB, "vSliceRanges" + cB, "lightMatrix" + cB, "shadowsInfo" + cB, "depthValues" + cB), nc.push("shadowTexture" + cB), nc.push("depthTexture" + cB), Bc.push("viewFrustumZ" + cB, "cascadeBlendFactor" + cB, "lightSizeUVCorrection" + cB, "depthCorrection" + cB, "penumbraDarkness" + cB, "frustumLengths" + cB), Vc && (nc.push("projectionLightTexture" + cB), Bc.push("textureProjectionMatrix" + cB)), uc && nc.push("iesLightTexture" + cB), Mc && nc.push("rectAreaLightEmissionTexture" + cB), sc && (nc.push("lightDataTexture" + cB), Pc || nc.push("tileMaskTexture" + cB)))
    }

    function Rc(cB, Bc, nc) {
      const Vc = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      nc && Vc.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), cB.push(...Vc);
      Bc.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function iB(cB, Bc, nc) {
      let Vc, Ic, rB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        uc = null;
      if (cB.uniformsNames) {
        const sc = cB;
        Vc = sc.uniformsNames, Ic = sc.uniformBuffersNames, Bc = sc.samplers, nc = sc.defines, rB = sc.maxSimultaneousLights || 0, uc = sc.shaderLanguage ?? null
      } else Vc = cB, Bc || (Bc = []);
      for (let sc = 0; sc < rB && nc["LIGHT" + sc]; sc++) jB(sc, Vc, Bc, nc["PROJECTEDLIGHTTEXTURE" + sc], Ic, !1, nc["IESLIGHTTEXTURE" + sc], nc["CLUSTLIGHT" + sc], nc["RECTAREALIGHTEMISSIONTEXTURE" + sc], 1 === uc);
      nc.NUM_MORPH_INFLUENCERS && (Vc.push("morphTargetInfluences"), Vc.push("morphTargetCount")), nc.BAKED_VERTEX_ANIMATION_TEXTURE && (Vc.push("bakedVertexAnimationSettings"), Vc.push("bakedVertexAnimationTextureSizeInverted"), Vc.push("bakedVertexAnimationTime"), Bc.push("bakedVertexAnimationTexture"))
    }

    function Kc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      cB.addUniform("vReflectionInfos", 2), cB.addUniform("reflectionMatrix", 16), Bc && cB.addUniform("vReflectionMicrosurfaceInfos", 3), nc && (cB.addUniform("vReflectionPosition", 3), cB.addUniform("vReflectionSize", 3)), Vc && (cB.addUniform("vReflectionFilteringInfo", 2), cB.addUniform("vReflectionDominantDirection", 3)), rB && cB.addUniform("vReflectionColor", 3), Ic && (cB.addUniform("vSphericalL00", 3), cB.addUniform("vSphericalL1_1", 3), cB.addUniform("vSphericalL10", 3), cB.addUniform("vSphericalL11", 3), cB.addUniform("vSphericalL2_2", 3), cB.addUniform("vSphericalL2_1", 3), cB.addUniform("vSphericalL20", 3), cB.addUniform("vSphericalL21", 3), cB.addUniform("vSphericalL22", 3), cB.addUniform("vSphericalX", 3), cB.addUniform("vSphericalY", 3), cB.addUniform("vSphericalZ", 3), cB.addUniform("vSphericalXX_ZZ", 3), cB.addUniform("vSphericalYY_ZZ", 3), cB.addUniform("vSphericalZZ", 3), cB.addUniform("vSphericalXY", 3), cB.addUniform("vSphericalYZ", 3), cB.addUniform("vSphericalZX", 3))
    }
  },
  38370: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(35756),
      Ic = nc(38326);
    class rB extends Ic.c {
      constructor(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(cB, Bc, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Vc.d, this._storeEffectOnSubMeshes = nc
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(cB, Bc) {
        return !!cB && (!this._storeEffectOnSubMeshes || (!cB.rD || 0 === cB.rD.length || this.isReadyForSubMesh(cB, cB.rD[0], Bc)))
      }
      _isReadyForSubMesh(cB) {
        const Bc = cB.materialDefines;
        return !(this.checkReadyOnEveryCall || !cB.effect || !Bc || Bc._renderId !== this.knc().getRenderId())
      }
      bindOnlyWorldMatrix(cB) {
        this._activeEffect.setMatrix("world", cB)
      }
      bindOnlyNormalMatrix(cB) {
        this._activeEffect.setMatrix("normalMatrix", cB)
      }
      bind(cB, Bc) {
        Bc && this.bindForSubMesh(cB, Bc, Bc.rD[0])
      }
      _afterBind(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(cB, Bc, nc), this.knc()._cachedEffect = Bc, nc ? nc._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return nc._drawWrapper._forceRebindOnNextCall || cB.isCachedMaterialInvalid(this, Bc, Vc)
      }
      dispose(cB, Bc, nc) {
        this._activeEffect = void 0, super.dispose(cB, Bc, nc)
      }
    }
  },
  38383: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      h: () => Ic
    });
    const Vc = new WeakMap;

    function Ic(cB) {
      const Bc = cB.getVertexBuffers();
      if (!Bc) return null;
      let nc = Vc.get(cB);
      if (nc) {
        let cB = !1;
        for (const Vc in Bc)
          if (!nc.has(Vc)) {
            cB = !0;
            break
          } if (!cB) return nc
      } else nc = new Map, Vc.set(cB, nc);
      for (const Vc in Bc) {
        const cB = Bc[Vc];
        if (cB) {
          const Bc = cB.byteOffset,
            Ic = cB.byteStride,
            rB = cB.type,
            uc = cB.normalized;
          nc.set(Vc, {
            offset: Bc,
            stride: Ic,
            type: rB,
            normalized: uc
          })
        }
      }
      return nc
    }

    function rB(cB, Bc) {
      Bc.forEach(((Bc, nc) => {
        const Vc = `vp_${nc}_info`;
        cB.setFloat4(Vc, Bc.offset, Bc.stride, Bc.type, Bc.normalized ? 1 : 0)
      }))
    }
  },
  38354: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      g: () => Mc
    });
    var Vc = nc(38035),
      Ic = nc(35756),
      rB = nc(38043);
    let uc = (() => {
      var cB;
      let Bc, nc, Ic = [];
      return cB = class {
        static extractMinAndMaxIndexed(cB, Bc, nc, Vc, Ic, rB) {
          for (let uc = nc; uc < nc + Vc; uc++) {
            const nc = 3 * Bc[uc],
              Vc = cB[nc],
              sc = cB[nc + 1],
              Mc = cB[nc + 2];
            Ic.minimizeInPlaceFromFloats(Vc, sc, Mc), rB.maximizeInPlaceFromFloats(Vc, sc, Mc)
          }
        }
        static extractMinAndMax(cB, Bc, nc, Vc, Ic, rB) {
          for (let uc = Bc, sc = Bc * Vc; uc < Bc + nc; uc++, sc += Vc) {
            const Bc = cB[sc],
              nc = cB[sc + 1],
              Vc = cB[sc + 2];
            Ic.minimizeInPlaceFromFloats(Bc, nc, Vc), rB.maximizeInPlaceFromFloats(Bc, nc, Vc)
          }
        }
      }, (() => {
        const uc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [rB.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], nc = [rB.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Vc.g)(cB, null, Bc, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: cB => "extractMinAndMaxIndexed" in cB,
            get: cB => cB.extractMinAndMaxIndexed
          },
          metadata: uc
        }, null, Ic), (0, Vc.g)(cB, null, nc, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: cB => "extractMinAndMax" in cB,
            get: cB => cB.extractMinAndMax
          },
          metadata: uc
        }, null, Ic), uc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uc
        }), (0, Vc.k)(cB, Ic)
      })(), cB
    })();

    function sc(cB, Bc, nc, Vc) {
      let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const sc = new Ic.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Mc = new Ic.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return uc.extractMinAndMaxIndexed(cB, Bc, nc, Vc, sc, Mc), rB && (sc.x -= sc.x * rB.x + rB.y, sc.y -= sc.y * rB.x + rB.y, sc.z -= sc.z * rB.x + rB.y, Mc.x += Mc.x * rB.x + rB.y, Mc.y += Mc.y * rB.x + rB.y, Mc.z += Mc.z * rB.x + rB.y), {
        minimum: sc,
        maximum: Mc
      }
    }

    function Mc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        rB = arguments.length > 4 ? arguments[4] : void 0;
      const sc = new Ic.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Mc = new Ic.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return rB || (rB = 3), uc.extractMinAndMax(cB, Bc, nc, rB, sc, Mc), Vc && (sc.x -= sc.x * Vc.x + Vc.y, sc.y -= sc.y * Vc.x + Vc.y, sc.z -= sc.z * Vc.x + Vc.y, Mc.x += Mc.x * Vc.x + Vc.y, Mc.y += Mc.y * Vc.x + Vc.y, Mc.z += Mc.z * Vc.x + Vc.y), {
        minimum: sc,
        maximum: Mc
      }
    }
  },
  38332: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => qB
    });
    var Vc, Ic = nc(38194),
      rB = nc(38337),
      uc = nc(38343),
      sc = nc(38354),
      Mc = nc(38356),
      Pc = nc(37953);
    class qB {
      get materialDefines() {
        const cB = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof cB ? null : cB
      }
      set materialDefines(cB) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = cB
      }
      _getDrawWrapper(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        cB = cB ?? this._engine.currentRenderPassId;
        let nc = this._drawWrappers[cB];
        return !nc && Bc && (this._drawWrappers[cB] = nc = new Mc.e(this._mesh.knc().RV())), nc
      }
      _removeDrawWrapper(cB) {
        let Bc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[cB]?.dispose(Bc), this._drawWrappers[cB] = void 0
      }
      get effect() {
        return this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.effect : this._getDrawWrapper()?.effect ?? null
      }
      get _drawWrapper() {
        return this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)
      }
      get _drawWrapperOverride() {
        return this._mainDrawWrapperOverride
      }
      _setMainDrawWrapperOverride(cB) {
        this._mainDrawWrapperOverride = cB
      }
      setEffect(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ic = this._drawWrapper;
        Ic.setEffect(cB, Bc, Vc), void 0 !== nc && (Ic.materialContext = nc), cB || (Ic.defines = null, Ic.materialContext = void 0)
      }
      resetDrawCache(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== cB) return void this._removeDrawWrapper(cB, !0, Bc);
          for (const cB of this._drawWrappers) cB?.dispose(Bc)
        }
        this._drawWrappers = []
      }
      static AddToMesh(cB, Bc, nc, Vc, Ic, rB, uc) {
        return new qB(cB, Bc, nc, Vc, Ic, rB, uc, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(cB, Bc, nc, Vc, Ic, rB, uc) {
        let sc = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Mc = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = cB, this.verticesStart = Bc, this.verticesCount = nc, this.indexStart = Vc, this.indexCount = Ic, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = rB, this._renderingMesh = uc || rB, Mc && rB.rD.push(this), this._engine = this._mesh.knc().RV(), this.resetDrawCache(), this._trianglePlanes = [], this._id = rB.rD.length - 1, sc && (this.refreshBoundingInfo(), rB.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      qVc() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.qVc() : this._boundingInfo
      }
      setBoundingInfo(cB) {
        return this._boundingInfo = cB, this
      }
      getMesh() {
        return this._mesh
      }
      getRenderingMesh() {
        return this._renderingMesh
      }
      getReplacementMesh() {
        return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
      }
      getEffectiveMesh() {
        const cB = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return cB || this._renderingMesh
      }
      AV() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Bc = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Bc) return cB && this._mesh.knc()._hasDefaultMaterial ? this._mesh.knc().defaultMaterial : null;
        if (this._isMultiMaterial(Bc)) {
          const cB = Bc.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== cB && (this._currentMaterial = cB, this.resetDrawCache()), cB
        }
        return Bc
      }
      _isMultiMaterial(cB) {
        return void 0 !== cB.getSubMaterial
      }
      refreshBoundingInfo() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (cB || (cB = this._renderingMesh.getVerticesData(Ic.i.PositionKind)), !cB) return this._boundingInfo = this._mesh.qVc(), this;
        const Bc = this._renderingMesh.Tfc();
        let nc;
        if (0 === this.indexStart && this.indexCount === Bc.length) {
          const cB = this._renderingMesh.qVc();
          nc = {
            minimum: cB.minimum.clone(),
            maximum: cB.maximum.clone()
          }
        } else nc = (0, sc.c)(cB, Bc, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(nc.minimum, nc.maximum) : this._boundingInfo = new uc.b(nc.minimum, nc.maximum), this
      }
      _checkCollision(cB) {
        return this.qVc()._checkCollision(cB)
      }
      updateBoundingInfo(cB) {
        let Bc = this.qVc();
        return Bc || (this.refreshBoundingInfo(), Bc = this.qVc()), Bc && Bc.update(cB), this
      }
      isInFrustum(cB) {
        const Bc = this.qVc();
        return !!Bc && Bc.isInFrustum(cB, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(cB) {
        const Bc = this.qVc();
        return !!Bc && Bc.isCompletelyInFrustum(cB)
      }
      render(cB) {
        return this._renderingMesh.render(this, cB, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(cB, Bc) {
        if (!this._linesIndexBuffer) {
          const nc = 6 * Math.floor(this.indexCount / 3),
            Vc = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(nc) : new Uint16Array(nc);
          let Ic = 0;
          if (0 === cB.length)
            for (let cB = this.indexStart; cB < this.indexStart + this.indexCount; cB += 3) Vc[Ic++] = cB, Vc[Ic++] = cB + 1, Vc[Ic++] = cB + 1, Vc[Ic++] = cB + 2, Vc[Ic++] = cB + 2, Vc[Ic++] = cB;
          else
            for (let Bc = this.indexStart; Bc < this.indexStart + this.indexCount; Bc += 3) Vc[Ic++] = cB[Bc], Vc[Ic++] = cB[Bc + 1], Vc[Ic++] = cB[Bc + 1], Vc[Ic++] = cB[Bc + 2], Vc[Ic++] = cB[Bc + 2], Vc[Ic++] = cB[Bc];
          this._linesIndexBuffer = Bc.createIndexBuffer(Vc), this._linesIndexCount = Vc.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(cB) {
        const Bc = this.qVc();
        return !!Bc && cB.intersectsBox(Bc.boundingBox)
      }
      intersects(cB, Bc, nc, Vc, Ic) {
        const rB = this.AV();
        if (!rB) return null;
        let uc = 3,
          sc = !1;
        switch (rB.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            uc = 1, sc = !0
        }
        return 4 === rB.fillMode ? nc.length ? this._intersectLines(cB, Bc, nc, this._mesh.intersectionThreshold, Vc) : this._intersectUnIndexedLines(cB, Bc, nc, this._mesh.intersectionThreshold, Vc) : !nc.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(cB, Bc, nc, Vc, Ic) : this._intersectTriangles(cB, Bc, nc, uc, sc, Vc, Ic)
      }
      _intersectLines(cB, Bc, nc, Vc, Ic) {
        let uc = null;
        for (let sc = this.indexStart; sc < this.indexStart + this.indexCount; sc += 2) {
          const Mc = Bc[nc[sc]],
            Pc = Bc[nc[sc + 1]],
            qB = cB.intersectionSegment(Mc, Pc, Vc);
          if (!(qB < 0) && ((Ic || !uc || qB < uc.distance) && (uc = new rB.e(null, null, qB), uc.faceId = sc / 2, Ic))) break
        }
        return uc
      }
      _intersectUnIndexedLines(cB, Bc, nc, Vc, Ic) {
        let uc = null;
        for (let sc = this.verticesStart; sc < this.verticesStart + this.verticesCount; sc += 2) {
          const nc = Bc[sc],
            Mc = Bc[sc + 1],
            Pc = cB.intersectionSegment(nc, Mc, Vc);
          if (!(Pc < 0) && ((Ic || !uc || Pc < uc.distance) && (uc = new rB.e(null, null, Pc), uc.faceId = sc / 2, Ic))) break
        }
        return uc
      }
      _intersectTriangles(cB, Bc, nc, Vc, Ic, rB, uc) {
        let sc = null,
          Mc = -1;
        for (let Pc = this.indexStart; Pc < this.indexStart + this.indexCount - (3 - Vc); Pc += Vc) {
          Mc++;
          const Vc = nc[Pc],
            qB = nc[Pc + 1],
            Oc = nc[Pc + 2];
          if (Ic && 4294967295 === Oc) {
            Pc += 2;
            continue
          }
          const Tc = Bc[Vc],
            fc = Bc[qB],
            mB = Bc[Oc];
          if (!Tc || !fc || !mB) continue;
          if (uc && !uc(Tc, fc, mB, cB, Vc, qB, Oc)) continue;
          const ec = cB.intersectsTriangle(Tc, fc, mB);
          if (ec) {
            if (ec.distance < 0) continue;
            if ((rB || !sc || ec.distance < sc.distance) && (sc = ec, sc.faceId = Mc, rB)) break
          }
        }
        return sc
      }
      _intersectUnIndexedTriangles(cB, Bc, nc, Vc, Ic) {
        let rB = null;
        for (let uc = this.verticesStart; uc < this.verticesStart + this.verticesCount; uc += 3) {
          const nc = Bc[uc],
            sc = Bc[uc + 1],
            Mc = Bc[uc + 2];
          if (Ic && !Ic(nc, sc, Mc, cB, -1, -1, -1)) continue;
          const Pc = cB.intersectsTriangle(nc, sc, Mc);
          if (Pc) {
            if (Pc.distance < 0) continue;
            if ((Vc || !rB || Pc.distance < rB.distance) && (rB = Pc, rB.faceId = uc / 3, Vc)) break
          }
        }
        return rB
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(cB, Bc) {
        const nc = new qB(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, cB, Bc, !1);
        if (!this.IsGlobal) {
          const cB = this.qVc();
          if (!cB) return nc;
          nc._boundingInfo = new uc.b(cB.minimum, cB.maximum)
        }
        return nc
      }
      dispose() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.knc().RV()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Bc = this._mesh.rD.indexOf(this);
        this._mesh.rD.splice(Bc, 1), this.resetDrawCache(void 0, cB)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(cB, Bc, nc, Vc, Ic) {
        let rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uc = Number.MAX_VALUE,
          sc = -Number.MAX_VALUE;
        const Mc = (Ic || Vc).Tfc();
        for (let Pc = Bc; Pc < Bc + nc; Pc++) {
          const cB = Mc[Pc];
          cB < uc && (uc = cB), cB > sc && (sc = cB)
        }
        return new qB(cB, uc, sc - uc + 1, Bc, nc, Vc, Ic, rB)
      }
    }(Vc = qB.prototype).projectToRef ?? (Vc.projectToRef = (0, Pc.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);