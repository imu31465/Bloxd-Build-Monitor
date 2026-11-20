export const id = 252;
export const ids = [252];
export const modules = {
  39467: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      constructor(zz, tz, sz) {
        this.bu = zz, this.bv = tz, this.distance = sz, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39475: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(36487),
      Wz = sz(36475),
      Xz = sz(36479);
    class Oz {
      constructor(zz, tz, sz) {
        this.vectors = (0, Fz.c)(8, Wz.p.Zero), this.center = Wz.p.Zero(), this.centerWorld = Wz.p.Zero(), this.extendSize = Wz.p.Zero(), this.extendSizeWorld = Wz.p.Zero(), this.directions = (0, Fz.c)(3, Wz.p.Zero), this.vectorsWorld = (0, Fz.c)(8, Wz.p.Zero), this.minimumWorld = Wz.p.Zero(), this.maximumWorld = Wz.p.Zero(), this.minimum = Wz.p.Zero(), this.maximum = Wz.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(zz, tz, sz)
      }
      reConstruct(zz, tz, sz) {
        const Fz = zz.x,
          Xz = zz.y,
          Oz = zz.z,
          oz = tz.x,
          vz = tz.y,
          Uz = tz.z,
          Kz = this.vectors;
        this.minimum.m_(Fz, Xz, Oz), this.maximum.m_(oz, vz, Uz), Kz[0].m_(Fz, Xz, Oz), Kz[1].m_(oz, vz, Uz), Kz[2].m_(oz, Xz, Oz), Kz[3].m_(Fz, vz, Oz), Kz[4].m_(Fz, Xz, Uz), Kz[5].m_(oz, vz, Oz), Kz[6].m_(Fz, vz, Uz), Kz[7].m_(oz, Xz, Uz), tz.addToRef(zz, this.center).scaleInPlace(.5), tz.subtractToRef(zz, this.extendSize).scaleInPlace(.5), this._worldMatrix = sz || Wz.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(zz) {
        const tz = Oz._TmpVector3,
          sz = this.maximum.subtractToRef(this.minimum, tz[0]),
          Fz = sz.length();
        sz.normalizeFromLength(Fz);
        const Wz = Fz * zz,
          Xz = sz.scaleInPlace(.5 * Wz),
          oz = this.center.subtractToRef(Xz, tz[1]),
          vz = this.center.addToRef(Xz, tz[2]);
        return this.reConstruct(oz, vz, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(zz) {
        const tz = this.minimumWorld,
          sz = this.maximumWorld,
          Fz = this.directions,
          Xz = this.vectorsWorld,
          Oz = this.vectors;
        if (zz.isIdentity()) {
          tz.vsz(this.minimum), sz.vsz(this.maximum);
          for (let zz = 0; zz < 8; ++zz) Xz[zz].vsz(Oz[zz]);
          this.extendSizeWorld.vsz(this.extendSize), this.centerWorld.vsz(this.center)
        } else {
          tz.Z6(Number.MAX_VALUE), sz.Z6(-Number.MAX_VALUE);
          for (let Fz = 0; Fz < 8; ++Fz) {
            const oz = Xz[Fz];
            Wz.p.TransformCoordinatesToRef(Oz[Fz], zz, oz), tz.minimizeInPlace(oz), sz.maximizeInPlace(oz)
          }
          sz.subtractToRef(tz, this.extendSizeWorld).scaleInPlace(.5), sz.addToRef(tz, this.centerWorld).scaleInPlace(.5)
        }
        Wz.p.FromArrayToRef(zz.m, 0, Fz[0]), Wz.p.FromArrayToRef(zz.m, 4, Fz[1]), Wz.p.FromArrayToRef(zz.m, 8, Fz[2]), this._worldMatrix = zz
      }
      isInFrustum(zz) {
        return Oz.IsInFrustum(this.vectorsWorld, zz)
      }
      isCompletelyInFrustum(zz) {
        return Oz.IsCompletelyInFrustum(this.vectorsWorld, zz)
      }
      intersectsPoint(zz) {
        const tz = this.minimumWorld,
          sz = this.maximumWorld,
          Fz = tz.x,
          Wz = tz.y,
          Oz = tz.z,
          oz = sz.x,
          vz = sz.y,
          Uz = sz.z,
          Kz = zz.x,
          uz = zz.y,
          Nz = zz.z,
          bz = -Xz.c;
        return !(oz - Kz < bz || bz > Kz - Fz) && (!(vz - uz < bz || bz > uz - Wz) && !(Uz - Nz < bz || bz > Nz - Oz))
      }
      intersectsSphere(zz) {
        return Oz.IntersectsSphere(this.minimumWorld, this.maximumWorld, zz.centerWorld, zz.radiusWorld)
      }
      intersectsMinMax(zz, tz) {
        const sz = this.minimumWorld,
          Fz = this.maximumWorld,
          Wz = sz.x,
          Xz = sz.y,
          Oz = sz.z,
          oz = Fz.x,
          vz = Fz.y,
          Uz = Fz.z,
          Kz = zz.x,
          uz = zz.y,
          Nz = zz.z,
          bz = tz.x,
          wz = tz.y,
          Dz = tz.z;
        return !(oz < Kz || Wz > bz) && (!(vz < uz || Xz > wz) && !(Uz < Nz || Oz > Dz))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(zz, tz) {
        return zz.intersectsMinMax(tz.minimumWorld, tz.maximumWorld)
      }
      static IntersectsSphere(zz, tz, sz, Fz) {
        const Xz = Oz._TmpVector3[0];
        Wz.p.ClampToRef(sz, zz, tz, Xz);
        return Wz.p.DistanceSquared(sz, Xz) <= Fz * Fz
      }
      static IsCompletelyInFrustum(zz, tz) {
        for (let sz = 0; sz < 6; ++sz) {
          const Fz = tz[sz];
          for (let tz = 0; tz < 8; ++tz)
            if (Fz.dotCoordinate(zz[tz]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(zz, tz) {
        for (let sz = 0; sz < 6; ++sz) {
          let Fz = !0;
          const Wz = tz[sz];
          for (let tz = 0; tz < 8; ++tz)
            if (Wz.dotCoordinate(zz[tz]) >= 0) {
              Fz = !1;
              break
            } if (Fz) return !1
        }
        return !0
      }
    }
    Oz._TmpVector3 = (0, Fz.c)(3, Wz.p.Zero)
  },
  39472: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz
    });
    var Fz = sz(36487),
      Wz = sz(36475),
      Xz = sz(39475);
    class Oz {
      constructor(zz, tz, sz) {
        this.center = Wz.p.Zero(), this.centerWorld = Wz.p.Zero(), this.minimum = Wz.p.Zero(), this.maximum = Wz.p.Zero(), this.reConstruct(zz, tz, sz)
      }
      reConstruct(zz, tz, sz) {
        this.minimum.vsz(zz), this.maximum.vsz(tz);
        const Fz = Wz.p.Distance(zz, tz);
        tz.addToRef(zz, this.center).scaleInPlace(.5), this.radius = .5 * Fz, this._update(sz || Wz.e.IdentityReadOnly)
      }
      scale(zz) {
        const tz = Oz._TmpVector3,
          sz = this.maximum.subtractToRef(this.minimum, tz[0]),
          Fz = sz.length();
        sz.normalizeFromLength(Fz);
        const Wz = Fz * zz,
          Xz = sz.scaleInPlace(.5 * Wz),
          oz = this.center.subtractToRef(Xz, tz[1]),
          vz = this.center.addToRef(Xz, tz[2]);
        return this.reConstruct(oz, vz, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(zz) {
        if (zz.isIdentity()) this.centerWorld.vsz(this.center), this.radiusWorld = this.radius;
        else {
          Wz.p.TransformCoordinatesToRef(this.center, zz, this.centerWorld);
          const tz = Oz._TmpVector3[0];
          Wz.p.TransformNormalFromFloatsToRef(1, 1, 1, zz, tz), this.radiusWorld = Math.max(Math.abs(tz.x), Math.abs(tz.y), Math.abs(tz.z)) * this.radius
        }
      }
      isInFrustum(zz) {
        const tz = this.centerWorld,
          sz = this.radiusWorld;
        for (let Fz = 0; Fz < 6; Fz++)
          if (zz[Fz].dotCoordinate(tz) <= -sz) return !1;
        return !0
      }
      isCenterInFrustum(zz) {
        const tz = this.centerWorld;
        for (let sz = 0; sz < 6; sz++)
          if (zz[sz].dotCoordinate(tz) < 0) return !1;
        return !0
      }
      intersectsPoint(zz) {
        const tz = Wz.p.DistanceSquared(this.centerWorld, zz);
        return !(this.radiusWorld * this.radiusWorld < tz)
      }
      static Intersects(zz, tz) {
        const sz = Wz.p.DistanceSquared(zz.centerWorld, tz.centerWorld),
          Fz = zz.radiusWorld + tz.radiusWorld;
        return !(Fz * Fz < sz)
      }
      static CreateFromCenterAndRadius(zz, tz, sz) {
        this._TmpVector3[0].vsz(zz), this._TmpVector3[1].m_(0, 0, tz), this._TmpVector3[2].vsz(zz), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].oFz(this._TmpVector3[1]);
        const Fz = new Oz(this._TmpVector3[0], this._TmpVector3[2]);
        return Fz._worldMatrix = sz || Wz.e.Identity(), Fz
      }
    }
    Oz._TmpVector3 = (0, Fz.c)(3, Wz.p.Zero);
    const oz = {
        min: 0,
        max: 0
      },
      vz = {
        min: 0,
        max: 0
      },
      Uz = (zz, tz, sz) => {
        const Fz = Wz.p.Dot(tz.centerWorld, zz),
          Xz = Math.abs(Wz.p.Dot(tz.directions[0], zz)) * tz.extendSize.x + Math.abs(Wz.p.Dot(tz.directions[1], zz)) * tz.extendSize.y + Math.abs(Wz.p.Dot(tz.directions[2], zz)) * tz.extendSize.z;
        sz.min = Fz - Xz, sz.max = Fz + Xz
      },
      Kz = (zz, tz, sz) => (Uz(zz, tz, oz), Uz(zz, sz, vz), !(oz.min > vz.max || vz.min > oz.max));
    class uz {
      constructor(zz, tz, sz) {
        this._isLocked = !1, this.boundingBox = new Xz.c(zz, tz, sz), this.uFz = new Oz(zz, tz, sz)
      }
      reConstruct(zz, tz, sz) {
        this.boundingBox.reConstruct(zz, tz, sz), this.uFz.reConstruct(zz, tz, sz)
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
      set isLocked(zz) {
        this._isLocked = zz
      }
      update(zz) {
        this._isLocked || (this.boundingBox._update(zz), this.uFz._update(zz))
      }
      centerOn(zz, tz) {
        const sz = uz._TmpVector3[0].vsz(zz).oFz(tz),
          Fz = uz._TmpVector3[1].vsz(zz).addInPlace(tz);
        return this.boundingBox.reConstruct(sz, Fz, this.boundingBox.getWorldMatrix()), this.uFz.reConstruct(sz, Fz, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(zz) {
        const tz = Wz.p.Minimize(this.minimum, zz),
          sz = Wz.p.Maximize(this.maximum, zz);
        return this.reConstruct(tz, sz, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(zz) {
        const tz = Wz.m.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(tz);
        const sz = Wz.m.XD[0];
        return Wz.p.TransformCoordinatesToRef(zz.boundingBox.minimumWorld, tz, sz), this.encapsulate(sz), Wz.p.TransformCoordinatesToRef(zz.boundingBox.maximumWorld, tz, sz), this.encapsulate(sz), this
      }
      scale(zz) {
        return this.boundingBox.scale(zz), this.uFz.scale(zz), this
      }
      isInFrustum(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === tz || 3 === tz) && this.uFz.isCenterInFrustum(zz)) return !0;
        if (!this.uFz.isInFrustum(zz)) return !1;
        return !(1 !== tz && 3 !== tz) || this.boundingBox.isInFrustum(zz)
      }
      get diagonalLength() {
        const zz = this.boundingBox;
        return zz.maximumWorld.subtractToRef(zz.minimumWorld, uz._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(zz) {
        return this.boundingBox.isCompletelyInFrustum(zz)
      }
      _checkCollision(zz) {
        return zz._canDoCollision(this.uFz.centerWorld, this.uFz.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(zz) {
        return !!this.uFz.centerWorld && (!!this.uFz.intersectsPoint(zz) && !!this.boundingBox.intersectsPoint(zz))
      }
      intersects(zz, tz) {
        if (!Oz.Intersects(this.uFz, zz.uFz)) return !1;
        if (!Xz.c.Intersects(this.boundingBox, zz.boundingBox)) return !1;
        if (!tz) return !0;
        const sz = this.boundingBox,
          Fz = zz.boundingBox;
        return !!Kz(sz.directions[0], sz, Fz) && (!!Kz(sz.directions[1], sz, Fz) && (!!Kz(sz.directions[2], sz, Fz) && (!!Kz(Fz.directions[0], sz, Fz) && (!!Kz(Fz.directions[1], sz, Fz) && (!!Kz(Fz.directions[2], sz, Fz) && (!!Kz(Wz.p.Cross(sz.directions[0], Fz.directions[0]), sz, Fz) && (!!Kz(Wz.p.Cross(sz.directions[0], Fz.directions[1]), sz, Fz) && (!!Kz(Wz.p.Cross(sz.directions[0], Fz.directions[2]), sz, Fz) && (!!Kz(Wz.p.Cross(sz.directions[1], Fz.directions[0]), sz, Fz) && (!!Kz(Wz.p.Cross(sz.directions[1], Fz.directions[1]), sz, Fz) && (!!Kz(Wz.p.Cross(sz.directions[1], Fz.directions[2]), sz, Fz) && (!!Kz(Wz.p.Cross(sz.directions[2], Fz.directions[0]), sz, Fz) && (!!Kz(Wz.p.Cross(sz.directions[2], Fz.directions[1]), sz, Fz) && !!Kz(Wz.p.Cross(sz.directions[2], Fz.directions[2]), sz, Fz))))))))))))))
      }
    }
    uz._TmpVector3 = (0, Fz.c)(2, Wz.p.Zero)
  },
  39493: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      g: () => vz,
      h: () => oz,
      j: () => Oz
    });
    var Fz = sz(39305),
      Wz = sz(36475);

    function Xz(zz) {
      -1 === zz.indexOf("vClipPlane") && zz.push("vClipPlane"), -1 === zz.indexOf("vClipPlane2") && zz.push("vClipPlane2"), -1 === zz.indexOf("vClipPlane3") && zz.push("vClipPlane3"), -1 === zz.indexOf("vClipPlane4") && zz.push("vClipPlane4"), -1 === zz.indexOf("vClipPlane5") && zz.push("vClipPlane5"), -1 === zz.indexOf("vClipPlane6") && zz.push("vClipPlane6")
    }

    function Oz(zz, tz, sz) {
      const Fz = !!(zz.clipPlane ?? tz.clipPlane),
        Wz = !!(zz.clipPlane2 ?? tz.clipPlane2),
        Xz = !!(zz.clipPlane3 ?? tz.clipPlane3),
        Oz = !!(zz.clipPlane4 ?? tz.clipPlane4),
        oz = !!(zz.clipPlane5 ?? tz.clipPlane5),
        vz = !!(zz.clipPlane6 ?? tz.clipPlane6);
      Fz && sz.push("#define CLIPPLANE"), Wz && sz.push("#define CLIPPLANE2"), Xz && sz.push("#define CLIPPLANE3"), Oz && sz.push("#define CLIPPLANE4"), oz && sz.push("#define CLIPPLANE5"), vz && sz.push("#define CLIPPLANE6")
    }

    function oz(zz, tz, sz) {
      let Fz = !1;
      const Wz = !!(zz.clipPlane ?? tz.clipPlane),
        Xz = !!(zz.clipPlane2 ?? tz.clipPlane2),
        Oz = !!(zz.clipPlane3 ?? tz.clipPlane3),
        oz = !!(zz.clipPlane4 ?? tz.clipPlane4),
        vz = !!(zz.clipPlane5 ?? tz.clipPlane5),
        Uz = !!(zz.clipPlane6 ?? tz.clipPlane6);
      return sz.CLIPPLANE !== Wz && (sz.CLIPPLANE = Wz, Fz = !0), sz.CLIPPLANE2 !== Xz && (sz.CLIPPLANE2 = Xz, Fz = !0), sz.CLIPPLANE3 !== Oz && (sz.CLIPPLANE3 = Oz, Fz = !0), sz.CLIPPLANE4 !== oz && (sz.CLIPPLANE4 = oz, Fz = !0), sz.CLIPPLANE5 !== vz && (sz.CLIPPLANE5 = vz, Fz = !0), sz.CLIPPLANE6 !== Uz && (sz.CLIPPLANE6 = Uz, Fz = !0), Fz
    }

    function vz(zz, tz, sz) {
      let Fz = tz.clipPlane ?? sz.clipPlane;
      Uz(zz, "vClipPlane", Fz), Fz = tz.clipPlane2 ?? sz.clipPlane2, Uz(zz, "vClipPlane2", Fz), Fz = tz.clipPlane3 ?? sz.clipPlane3, Uz(zz, "vClipPlane3", Fz), Fz = tz.clipPlane4 ?? sz.clipPlane4, Uz(zz, "vClipPlane4", Fz), Fz = tz.clipPlane5 ?? sz.clipPlane5, Uz(zz, "vClipPlane5", Fz), Fz = tz.clipPlane6 ?? sz.clipPlane6, Uz(zz, "vClipPlane6", Fz)
    }

    function Uz(zz, tz, sz) {
      if (sz) {
        const Xz = Fz.e.aJ()?.floatingOriginOffset || Wz.p.ZeroReadOnly;
        zz.setFloat4(tz, sz.normal.x, sz.normal.y, sz.normal.z, sz.d + Wz.p.Dot(sz.normal, Xz))
      }
    }
  },
  39507: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(zz, tz) {
        this._defines[zz] || (zz < this._currentRank && (this._currentRank = zz), zz > this._maxRank && (this._maxRank = zz), this._defines[zz] = new Array), this._defines[zz].push(tz)
      }
      addCPUSkinningFallback(zz, tz) {
        this._mesh = tz, zz < this._currentRank && (this._currentRank = zz), zz > this._maxRank && (this._maxRank = zz)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(zz, tz) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, zz = zz.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), tz._bonesComputationForcedToCPU = !0;
          const sz = this._mesh.aJ();
          for (let zz = 0; zz < sz.meshes.length; zz++) {
            const Fz = sz.meshes[zz];
            if (Fz.material) {
              if (Fz.computeBonesUsingShaders && 0 !== Fz.numBoneInfluencers)
                if (Fz.material.getEffect() === tz) Fz.computeBonesUsingShaders = !1;
                else if (Fz.kY)
                for (const zz of Fz.kY) {
                  if (zz.effect === tz) {
                    Fz.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Fz.computeBonesUsingShaders && Fz.numBoneInfluencers > 0 && (Fz.computeBonesUsingShaders = !1)
          }
        } else {
          const tz = this._defines[this._currentRank];
          if (tz)
            for (let sz = 0; sz < tz.length; sz++) zz = zz.replace("#define " + tz[sz], "");
          this._currentRank++
        }
        return zz
      }
    }
  },
  39451: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Bz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(39264),
      Oz = sz(36505),
      oz = sz(36502),
      vz = sz(39458),
      Uz = sz(39280),
      Kz = sz(38097),
      uz = sz(37199),
      Nz = sz(39485),
      bz = sz(39181);
    let wz = (() => {
      var zz;
      let tz, sz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, wz, Dz, gz = [];
      return zz = class {
        constructor() {
          this._func = (0, Fz.k)(this, gz), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(zz) {
          this._func = zz
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(zz) {
          this._backFunc = zz
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(zz) {
          this._funcRef = zz
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(zz) {
          this._funcMask = zz
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(zz) {
          this._opStencilFail = zz
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(zz) {
          this._opDepthFail = zz
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(zz) {
          this._opStencilDepthPass = zz
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(zz) {
          this._backOpStencilFail = zz
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(zz) {
          this._backOpDepthFail = zz
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(zz) {
          this._backOpStencilDepthPass = zz
        }
        get mask() {
          return this._mask
        }
        set mask(zz) {
          this._mask = zz
        }
        get enabled() {
          return this._enabled
        }
        set enabled(zz) {
          this._enabled = zz
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(zz) {
          bz.e.Clone((() => zz), this)
        }
        serialize() {
          return bz.e.Serialize(this)
        }
        parse(zz, tz, sz) {
          bz.e.Parse((() => this), zz, tz, sz)
        }
      }, (() => {
        const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Xz = [(0, Wz.J)()], Oz = [(0, Wz.J)()], oz = [(0, Wz.J)()], vz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], Kz = [(0, Wz.J)()], uz = [(0, Wz.J)()], Nz = [(0, Wz.J)()], wz = [(0, Wz.J)()], Dz = [(0, Wz.J)()], (0, Fz.h)(zz, null, tz, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: zz => "func" in zz,
            get: zz => zz.func
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, sz, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: zz => "backFunc" in zz,
            get: zz => zz.backFunc
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, Xz, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: zz => "funcRef" in zz,
            get: zz => zz.funcRef
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, Oz, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: zz => "funcMask" in zz,
            get: zz => zz.funcMask
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, oz, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: zz => "opStencilFail" in zz,
            get: zz => zz.opStencilFail
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, vz, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: zz => "opDepthFail" in zz,
            get: zz => zz.opDepthFail
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, Uz, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: zz => "opStencilDepthPass" in zz,
            get: zz => zz.opStencilDepthPass
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, Kz, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: zz => "backOpStencilFail" in zz,
            get: zz => zz.backOpStencilFail
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, uz, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: zz => "backOpDepthFail" in zz,
            get: zz => zz.backOpDepthFail
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, Nz, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: zz => "backOpStencilDepthPass" in zz,
            get: zz => zz.backOpStencilDepthPass
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, wz, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: zz => "mask" in zz,
            get: zz => zz.mask
          },
          metadata: bz
        }, null, gz), (0, Fz.h)(zz, null, Dz, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "enabled" in zz,
            get: zz => zz.enabled
          },
          metadata: bz
        }, null, gz), bz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bz
        })
      })(), zz
    })();
    var Dz = sz(39489),
      gz = sz(39090),
      Hz = sz(39065);
    let Bz = (() => {
      var zz;
      let tz, sz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz, jz, Az, yz, Mz, dz, hz, Qz, kz, iz, Lz, lz, nz, az = [],
        qz = [],
        Sz = [],
        Vz = [],
        Rz = [],
        pz = [],
        fz = [],
        Ez = [],
        zt = [],
        tt = [],
        st = [],
        Ft = [],
        Wt = [],
        Xt = [],
        Ot = [],
        ot = [],
        vt = [],
        Ut = [],
        Kt = [],
        ut = [],
        Nt = [],
        bt = [],
        wt = [],
        Dt = [],
        gt = [],
        Ht = [],
        Bt = [],
        Pt = [],
        rt = [],
        Yt = [],
        xt = [],
        mt = [],
        Jt = [],
        It = [],
        Ct = [],
        et = [],
        Zt = [],
        Gt = [],
        Tt = [],
        ct = [],
        jt = [],
        At = [],
        yt = [],
        Mt = [],
        dt = [],
        ht = [],
        Qt = [],
        kt = [],
        it = [],
        Lt = [],
        lt = [];
      return zz = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(tz) {
          this._useVertexPulling !== tz && (this._useVertexPulling = tz, this.wtz(zz.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(zz) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(tz) {
          if (this._alpha === tz) return;
          const sz = this._alpha;
          this._alpha = tz, 1 !== sz && 1 !== tz || this.wtz(zz.MiscDirtyFlag + zz.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(tz) {
          this._backFaceCulling !== tz && (this._backFaceCulling = tz, this.wtz(zz.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(tz) {
          const sz = Math.max(0, Math.min(0 | tz, 4));
          this._textureRepetitionMode !== sz && (this._textureRepetitionMode = sz, this.wtz(zz.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(tz) {
          this._cullBackFaces !== tz && (this._cullBackFaces = tz, this.wtz(zz.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(zz) {
          this._blockDirtyMechanism !== zz && (this._blockDirtyMechanism = zz, zz || this.markDirty())
        }
        atomicMaterialsUpdate(zz) {
          this.blockDirtyMechanism = !0;
          try {
            zz(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(zz) {
          this._onDisposeObserver && this.qJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.qJ.add(zz)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Oz.c), this._onBindObservable
        }
        set onBind(zz) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(zz)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Oz.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Oz.c), this._onEffectCreatedObservable
        }
        set alphaMode(zz) {
          this._alphaMode[0] = zz
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[sz] !== tz && (this._alphaMode[sz] = tz, this.wtz(zz.TextureDirtyFlag))
        }
        set needDepthPrePass(zz) {
          this._needDepthPrePass !== zz && (this._needDepthPrePass = zz, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(tz) {
          this._fogEnabled !== tz && (this._fogEnabled = tz, this.wtz(zz.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case zz.WireFrameFillMode:
            case zz.LineListDrawMode:
            case zz.LineLoopDrawMode:
            case zz.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(tz) {
          this.fillMode = tz ? zz.WireFrameFillMode : zz.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case zz.PointFillMode:
            case zz.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(tz) {
          this.fillMode = tz ? zz.PointFillMode : zz.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(tz) {
          this._fillMode !== tz && (this._fillMode = tz, this.wtz(zz.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(zz) {
          const tz = this.aJ().FD().getCaps().fragmentDepthSupported;
          zz && !tz && Kz.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = zz && tz, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(zz) {
          this._isVertexOutputInvariant !== zz && (this._isVertexOutputInvariant = zz, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(zz) {
          this._drawWrapper = zz
        }
        constructor(tz, sz, Wz) {
          let vz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Fz.k)(this, az), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Fz.k)(this, qz, void 0), this.uniqueId = ((0, Fz.k)(this, Sz), (0, Fz.k)(this, Vz, void 0)), this._loadedUniqueId = (0, Fz.k)(this, Rz), this.name = (0, Fz.k)(this, pz, void 0), this.metadata = ((0, Fz.k)(this, fz), (0, Fz.k)(this, Ez, null)), this._internalMetadata = (0, Fz.k)(this, zt), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Fz.k)(this, tt, !1), this.checkReadyOnlyOnce = ((0, Fz.k)(this, st), (0, Fz.k)(this, Ft, !1)), this.state = ((0, Fz.k)(this, Wt), (0, Fz.k)(this, Xt, "")), this._alpha = ((0, Fz.k)(this, Ot), (0, Fz.k)(this, ot, 1)), this.inspectableCustomProperties = (0, Fz.k)(this, vt), this._backFaceCulling = (0, Fz.k)(this, Ut, !0), this._textureRepetitionMode = ((0, Fz.k)(this, Kt), (0, Fz.k)(this, ut, 0)), this.textureRepetitionHexTilingParams = ((0, Fz.k)(this, Nt), (0, Fz.k)(this, bt, [1, .6, 7, .5])), this._cullBackFaces = ((0, Fz.k)(this, wt), (0, Fz.k)(this, Dt, !0)), this._blockDirtyMechanism = ((0, Fz.k)(this, gt), !1), this.sideOrientation = (0, Fz.k)(this, Ht, null), this.onCompiled = ((0, Fz.k)(this, Bt), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.qJ = new Oz.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Fz.k)(this, Pt, [2]), this._needDepthPrePass = ((0, Fz.k)(this, rt), (0, Fz.k)(this, Yt, !1)), this.disableDepthWrite = ((0, Fz.k)(this, xt), (0, Fz.k)(this, mt, !1)), this.disableColorWrite = ((0, Fz.k)(this, Jt), (0, Fz.k)(this, It, !1)), this.forceDepthWrite = ((0, Fz.k)(this, Ct), (0, Fz.k)(this, et, !1)), this.depthFunction = ((0, Fz.k)(this, Zt), (0, Fz.k)(this, Gt, 0)), this.separateCullingPass = ((0, Fz.k)(this, Tt), (0, Fz.k)(this, ct, !1)), this._fogEnabled = ((0, Fz.k)(this, jt), (0, Fz.k)(this, At, !0)), this.pointSize = ((0, Fz.k)(this, yt), (0, Fz.k)(this, Mt, 1)), this.zOffset = ((0, Fz.k)(this, dt), (0, Fz.k)(this, ht, 0)), this.zOffsetUnits = ((0, Fz.k)(this, Qt), (0, Fz.k)(this, kt, 0)), this.clipPlane = (0, Fz.k)(this, it), this.stencil = new wz, this._isVertexOutputInvariant = (0, Fz.k)(this, Lt, zz.ForceVertexOutputInvariant), this._materialContext = (0, Fz.k)(this, lt), this._useUBO = !1, this._fillMode = zz.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = tz;
          const Kz = sz || oz.c.LastCreatedScene;
          Kz && (this._scene = Kz, this._dirtyCallbacks = {}, this._forceGLSL = vz, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = tz || Xz.j.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.FD().createMaterialContext(), this._drawWrapper = new Nz.c(this._scene.FD(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Uz.c(this._scene.FD(), void 0, void 0, tz), this._useUBO = this.aJ().FD().supportsUniformBuffers, this._createUniformBuffer(), Wz || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), zz.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const zz = this.aJ().FD();
          this._uniformBuffer?.dispose(), zz.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Uz.c(zz, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Uz.c(this._scene.FD(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(zz) {
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
        isReady(zz, tz) {
          return !0
        }
        isReadyForSubMesh(zz, tz, sz) {
          const Fz = tz.materialDefines;
          return !!Fz && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Fz, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        aJ() {
          return this._scene
        }
        _getEffectiveOrientation(zz) {
          return null !== this.sideOrientation ? this.sideOrientation : zz.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(zz) {
          this._transparencyMode = zz
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === zz.MATERIAL_ALPHABLEND || this._transparencyMode === zz.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === zz.MATERIAL_ALPHATEST || this._transparencyMode === zz.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === zz.MATERIAL_OPAQUE || this._transparencyMode === zz.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(zz) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : zz.visibility < 1 || !this._disableAlphaBlending && (zz.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(zz) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(zz) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const sz = this.aJ().meshes;
          for (const zz of sz)
            if (zz.kY)
              for (const sz of zz.kY)
                if (sz.vD() === this)
                  for (const zz of sz._drawWrappers) zz && this._materialContext === zz.materialContext && (zz._wasPreviouslyReady = !1, zz._wasPreviouslyUsingInstances = null, zz._forceRebindOnNextCall = tz);
          tz && this.wtz(zz.AllDirtyFlag)
        }
        _preBind(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Fz = this._scene.FD(),
            Wz = (null == sz ? this.sideOrientation : sz) === zz.ClockWiseSideOrientation,
            Xz = tz || this._getDrawWrapper();
          return (0, gz.d)(Xz) && Xz.materialContext && (Xz.materialContext.useVertexPulling = this.useVertexPulling), Fz.enableEffect(Xz), Fz.setState(this.backFaceCulling, this.zOffset, !1, Wz, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Wz
        }
        bind(zz, tz) {}
        buildUniformLayout() {
          const zz = this._uniformBuffer;
          this._eventInfo.ubo = zz, this._callbackPluginEventGeneric(8, this._eventInfo), zz.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(zz, tz, sz) {
          const Fz = sz._drawWrapper;
          this._eventInfo.subMesh = sz, this._callbackPluginEventBindForSubMesh(this._eventInfo), Fz._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(zz) {}
        bindView(zz) {
          this._useUBO ? this._needToBindSceneUbo = !0 : zz.setMatrix("view", this.aJ().getViewMatrix())
        }
        bindViewProjection(zz) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (zz.setMatrix("viewProjection", this.aJ().getTransformMatrix()), zz.setMatrix("projection", this.aJ().getProjectionMatrix()), zz.setMatrix("inverseProjection", this.aJ().getInverseProjectionMatrix()))
        }
        bindEyePosition(zz, tz) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(zz, tz)
        }
        _afterBind(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && tz && (this._needToBindSceneUbo = !1, (0, Dz.w)(tz, this.aJ().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = zz ? zz.visibility : 1, this._onBindObservable && zz && this._onBindObservable.notifyObservers(zz), this.disableDepthWrite) {
            const zz = this._scene.FD();
            this._cachedDepthWriteState = zz.getDepthWrite(), zz.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const zz = this._scene.FD();
            this._cachedColorWriteState = zz.getColorWrite(), zz.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const zz = this._scene.FD();
            this._cachedDepthFunctionState = zz.getDepthFunction() || 0, zz.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.FD().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.FD().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.FD().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(zz) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = zz, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(zz) {
          return null
        }
        _clonePlugins(tz, sz) {
          const Fz = {};
          if (this._serializePlugins(Fz), zz._ParsePlugins(Fz, tz, this._scene, sz), this.pluginManager)
            for (const zz of this.pluginManager._plugins) {
              const sz = tz.pluginManager.getPlugin(zz.name);
              sz && zz.copyTo(sz)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const zz = [];
            for (const tz in this.meshMap) {
              const sz = this.meshMap[tz];
              sz && zz.push(sz)
            }
            return zz
          }
          return this._scene.meshes.filter((zz => zz.material === this))
        }
        forceCompilation(zz, tz, sz, Fz) {
          const Wz = {
              clipPlane: !1,
              useInstances: !1,
              ...sz
            },
            Xz = this.aJ(),
            Oz = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const oz = () => {
            if (!this._scene || !this._scene.FD()) return;
            const sz = Xz.clipPlane;
            if (Wz.clipPlane && (Xz.clipPlane = new uz.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let sz = !0,
                Xz = null;
              if (zz.kY) {
                const tz = new vz.c(0, 0, 0, 0, 0, zz, void 0, !1, !1);
                tz.materialDefines && (tz.materialDefines._renderId = -1), this.isReadyForSubMesh(zz, tz, Wz.useInstances) || (tz.effect && tz.effect.getCompilationError() && tz.effect.allFallbacksProcessed() ? Xz = tz.effect.getCompilationError() : (sz = !1, setTimeout(oz, 16)))
              }
              sz && (this.allowShaderHotSwapping = Oz, Xz && Fz && Fz(Xz), tz && tz(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Oz, tz && tz(this)) : setTimeout(oz, 16);
            Wz.clipPlane && (Xz.clipPlane = sz)
          };
          oz()
        }
        async forceCompilationAsync(zz, tz) {
          return await new Promise(((sz, Fz) => {
            this.forceCompilation(zz, (() => {
              sz()
            }), tz, (zz => {
              Fz(zz)
            }))
          }))
        }
        wtz(tz) {
          this.aJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (zz._DirtyCallbackArray.length = 0, tz & zz.ImageProcessingDirtyFlag && zz._DirtyCallbackArray.push(zz._ImageProcessingDirtyCallBack), tz & zz.TextureDirtyFlag && zz._DirtyCallbackArray.push(zz._TextureDirtyCallBack), tz & zz.LightDirtyFlag && zz._DirtyCallbackArray.push(zz._LightsDirtyCallBack), tz & zz.FresnelDirtyFlag && zz._DirtyCallbackArray.push(zz._FresnelDirtyCallBack), tz & zz.AttributesDirtyFlag && zz._DirtyCallbackArray.push(zz._AttributeDirtyCallBack), tz & zz.MiscDirtyFlag && zz._DirtyCallbackArray.push(zz._MiscDirtyCallBack), tz & zz.PrePassDirtyFlag && zz._DirtyCallbackArray.push(zz._PrePassDirtyCallBack), zz._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(zz._RunDirtyCallBacks), this.aJ().resetCachedMaterial())
        }
        resetDrawCache() {
          const zz = this.aJ().meshes;
          for (const tz of zz)
            if (tz.kY)
              for (const zz of tz.kY) zz.vD() === this && zz.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(zz) {
          const tz = this.aJ();
          if (tz.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const sz = tz.meshes;
          for (const Fz of sz)
            if (Fz.kY)
              for (const sz of Fz.kY) {
                if ((sz.vD() || (tz._hasDefaultMaterial ? tz.defaultMaterial : null)) === this)
                  for (const tz of sz._drawWrappers) tz && tz.defines && tz.defines.markAllAsDirty && this._materialContext === tz.materialContext && zz(tz.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.aJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const zz = this.aJ().enablePrePassRenderer();
          zz && zz.wtz()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(zz._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(zz._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(zz._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(zz._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(zz._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(zz._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(zz._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(zz._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(zz._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(zz._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const zz = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.qJ.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(zz)
            }))
          }
        }
        setPrePassRenderer(zz) {
          return !1
        }
        dispose(zz, tz, sz) {
          const Fz = this.aJ();
          if (Fz.stopAnimation(this), Fz.freeProcessedMaterials(), Fz.removeMaterial(this), this._eventInfo.forceDisposeTextures = tz, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const zz = this._parentContainer.materials.indexOf(this);
            zz > -1 && this._parentContainer.materials.splice(zz, 1), this._parentContainer = null
          }
          if (!0 !== sz)
            if (this.meshMap)
              for (const Wz in this.meshMap) {
                const zz = this.meshMap[Wz];
                this._disposeMeshResources(zz)
              } else {
                const zz = Fz.meshes;
                for (const tz of zz) this._disposeMeshResources(tz)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.qJ.notifyObservers(this), this.qJ.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(zz) {
          if (!zz) return;
          const tz = zz.geometry,
            sz = zz._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (zz.kY && sz)
              for (const Fz of zz.kY) {
                const zz = Fz._drawWrappers;
                for (let Wz = 0; Wz < zz.length; Wz++) {
                  const Xz = zz[Wz]?.effect;
                  if (!Xz) continue;
                  sz[Wz] === this && (tz?._releaseVertexArrayObject(Xz), Fz._removeDrawWrapper(Wz, !0, !0))
                }
              }
          } else tz?._releaseVertexArrayObject(this._drawWrapper.effect);
          zz.material !== this || zz.AFz || (zz.material = null)
        }
        serialize() {
          const zz = bz.e.Serialize(this);
          return zz.stencil = this.stencil.serialize(), zz.uniqueId = this.uniqueId, this._serializePlugins(zz), zz
        }
        _serializePlugins(zz) {
          if (zz.plugins = {}, this.pluginManager)
            for (const tz of this.pluginManager._plugins) tz.doNotSerialize || (zz.plugins[tz.getClassName()] = tz.serialize())
        }
        static ParseAlphaMode(zz, tz) {
          void 0 !== zz._alphaMode ? tz._alphaMode = Array.isArray(zz._alphaMode) ? [...zz._alphaMode] : [zz._alphaMode] : void 0 !== zz.alphaMode ? tz._alphaMode = Array.isArray(zz.alphaMode) ? [...zz.alphaMode] : [zz.alphaMode] : tz._alphaMode = [2]
        }
        static Parse(tz, sz, Fz) {
          if (tz.customType) {
            if ("BABYLON.PBRMaterial" === tz.customType && tz.overloadedAlbedo && (tz.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Kz.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else tz.customType = "BABYLON.StandardMaterial";
          const Wz = Xz.j.Instantiate(tz.customType).Parse(tz, sz, Fz);
          return Wz._loadedUniqueId = tz.uniqueId, zz.ParseAlphaMode(tz, Wz), Wz
        }
        static _ParsePlugins(zz, tz, sz, Fz) {
          if (zz.plugins)
            for (const Wz in zz.plugins) {
              const Oz = zz.plugins[Wz];
              let oz = tz.pluginManager?.getPlugin(Oz.name);
              if (!oz) {
                const zz = Xz.j.Instantiate("BABYLON." + Wz);
                zz && (oz = new zz(tz))
              }
              oz?.parse(Oz, sz, Fz)
            }
        }
      }, (() => {
        const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Hz = [(0, Wz.J)()], Bz = [(0, Wz.J)()], Pz = [(0, Wz.J)()], rz = [(0, Wz.J)()], Yz = [(0, Wz.J)()], xz = [(0, Wz.J)("alpha")], mz = [(0, Wz.J)("backFaceCulling")], Jz = [(0, Wz.J)("textureRepetitionMode")], Iz = [(0, Wz.J)("textureRepetitionHexTilingParams")], Cz = [(0, Wz.J)("cullBackFaces")], ez = [(0, Wz.J)()], Zz = [(0, Wz.J)()], Gz = [(0, Wz.J)()], Tz = [(0, Wz.J)()], cz = [(0, Wz.J)()], jz = [(0, Wz.J)()], Az = [(0, Wz.J)()], yz = [(0, Wz.J)()], Mz = [(0, Wz.J)("fogEnabled")], dz = [(0, Wz.J)()], hz = [(0, Wz.J)()], Qz = [(0, Wz.J)()], kz = [(0, Wz.J)()], iz = [(0, Wz.J)()], Lz = [(0, Wz.J)()], lz = [(0, Wz.J)()], nz = [(0, Wz.J)()], (0, Fz.h)(zz, null, kz, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: zz => "pointsCloud" in zz,
            get: zz => zz.pointsCloud
          },
          metadata: Xz
        }, null, az), (0, Fz.h)(zz, null, iz, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "fillMode" in zz,
            get: zz => zz.fillMode
          },
          metadata: Xz
        }, null, az), (0, Fz.h)(zz, null, Lz, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: zz => "useLogarithmicDepth" in zz,
            get: zz => zz.useLogarithmicDepth
          },
          metadata: Xz
        }, null, az), (0, Fz.h)(zz, null, nz, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "transparencyMode" in zz,
            get: zz => zz.transparencyMode
          },
          metadata: Xz
        }, null, az), (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: zz => "id" in zz,
            get: zz => zz.id,
            set: (zz, tz) => {
              zz.id = tz
            }
          },
          metadata: Xz
        }, qz, Sz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: zz => "uniqueId" in zz,
            get: zz => zz.uniqueId,
            set: (zz, tz) => {
              zz.uniqueId = tz
            }
          },
          metadata: Xz
        }, Vz, Rz), (0, Fz.h)(null, null, Hz, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: zz => "name" in zz,
            get: zz => zz.name,
            set: (zz, tz) => {
              zz.name = tz
            }
          },
          metadata: Xz
        }, pz, fz), (0, Fz.h)(null, null, Bz, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: zz => "metadata" in zz,
            get: zz => zz.metadata,
            set: (zz, tz) => {
              zz.metadata = tz
            }
          },
          metadata: Xz
        }, Ez, zt), (0, Fz.h)(null, null, Pz, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: zz => "checkReadyOnEveryCall" in zz,
            get: zz => zz.checkReadyOnEveryCall,
            set: (zz, tz) => {
              zz.checkReadyOnEveryCall = tz
            }
          },
          metadata: Xz
        }, tt, st), (0, Fz.h)(null, null, rz, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: zz => "checkReadyOnlyOnce" in zz,
            get: zz => zz.checkReadyOnlyOnce,
            set: (zz, tz) => {
              zz.checkReadyOnlyOnce = tz
            }
          },
          metadata: Xz
        }, Ft, Wt), (0, Fz.h)(null, null, Yz, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: zz => "state" in zz,
            get: zz => zz.state,
            set: (zz, tz) => {
              zz.state = tz
            }
          },
          metadata: Xz
        }, Xt, Ot), (0, Fz.h)(null, null, xz, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "_alpha" in zz,
            get: zz => zz._alpha,
            set: (zz, tz) => {
              zz._alpha = tz
            }
          },
          metadata: Xz
        }, ot, vt), (0, Fz.h)(null, null, mz, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: zz => "_backFaceCulling" in zz,
            get: zz => zz._backFaceCulling,
            set: (zz, tz) => {
              zz._backFaceCulling = tz
            }
          },
          metadata: Xz
        }, Ut, Kt), (0, Fz.h)(null, null, Jz, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_textureRepetitionMode" in zz,
            get: zz => zz._textureRepetitionMode,
            set: (zz, tz) => {
              zz._textureRepetitionMode = tz
            }
          },
          metadata: Xz
        }, ut, Nt), (0, Fz.h)(null, null, Iz, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: zz => "textureRepetitionHexTilingParams" in zz,
            get: zz => zz.textureRepetitionHexTilingParams,
            set: (zz, tz) => {
              zz.textureRepetitionHexTilingParams = tz
            }
          },
          metadata: Xz
        }, bt, wt), (0, Fz.h)(null, null, Cz, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: zz => "_cullBackFaces" in zz,
            get: zz => zz._cullBackFaces,
            set: (zz, tz) => {
              zz._cullBackFaces = tz
            }
          },
          metadata: Xz
        }, Dt, gt), (0, Fz.h)(null, null, ez, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: zz => "sideOrientation" in zz,
            get: zz => zz.sideOrientation,
            set: (zz, tz) => {
              zz.sideOrientation = tz
            }
          },
          metadata: Xz
        }, Ht, Bt), (0, Fz.h)(null, null, Zz, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_alphaMode" in zz,
            get: zz => zz._alphaMode,
            set: (zz, tz) => {
              zz._alphaMode = tz
            }
          },
          metadata: Xz
        }, Pt, rt), (0, Fz.h)(null, null, Gz, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: zz => "_needDepthPrePass" in zz,
            get: zz => zz._needDepthPrePass,
            set: (zz, tz) => {
              zz._needDepthPrePass = tz
            }
          },
          metadata: Xz
        }, Yt, xt), (0, Fz.h)(null, null, Tz, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: zz => "disableDepthWrite" in zz,
            get: zz => zz.disableDepthWrite,
            set: (zz, tz) => {
              zz.disableDepthWrite = tz
            }
          },
          metadata: Xz
        }, mt, Jt), (0, Fz.h)(null, null, cz, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: zz => "disableColorWrite" in zz,
            get: zz => zz.disableColorWrite,
            set: (zz, tz) => {
              zz.disableColorWrite = tz
            }
          },
          metadata: Xz
        }, It, Ct), (0, Fz.h)(null, null, jz, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: zz => "forceDepthWrite" in zz,
            get: zz => zz.forceDepthWrite,
            set: (zz, tz) => {
              zz.forceDepthWrite = tz
            }
          },
          metadata: Xz
        }, et, Zt), (0, Fz.h)(null, null, Az, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: zz => "depthFunction" in zz,
            get: zz => zz.depthFunction,
            set: (zz, tz) => {
              zz.depthFunction = tz
            }
          },
          metadata: Xz
        }, Gt, Tt), (0, Fz.h)(null, null, yz, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: zz => "separateCullingPass" in zz,
            get: zz => zz.separateCullingPass,
            set: (zz, tz) => {
              zz.separateCullingPass = tz
            }
          },
          metadata: Xz
        }, ct, jt), (0, Fz.h)(null, null, Mz, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "_fogEnabled" in zz,
            get: zz => zz._fogEnabled,
            set: (zz, tz) => {
              zz._fogEnabled = tz
            }
          },
          metadata: Xz
        }, At, yt), (0, Fz.h)(null, null, dz, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: zz => "pointSize" in zz,
            get: zz => zz.pointSize,
            set: (zz, tz) => {
              zz.pointSize = tz
            }
          },
          metadata: Xz
        }, Mt, dt), (0, Fz.h)(null, null, hz, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: zz => "zOffset" in zz,
            get: zz => zz.zOffset,
            set: (zz, tz) => {
              zz.zOffset = tz
            }
          },
          metadata: Xz
        }, ht, Qt), (0, Fz.h)(null, null, Qz, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: zz => "zOffsetUnits" in zz,
            get: zz => zz.zOffsetUnits,
            set: (zz, tz) => {
              zz.zOffsetUnits = tz
            }
          },
          metadata: Xz
        }, kt, it), (0, Fz.h)(null, null, lz, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: zz => "_isVertexOutputInvariant" in zz,
            get: zz => zz._isVertexOutputInvariant,
            set: (zz, tz) => {
              zz._isVertexOutputInvariant = tz
            }
          },
          metadata: Xz
        }, Lt, lt), Xz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xz
        })
      })(), zz.TriangleFillMode = 0, zz.WireFrameFillMode = 1, zz.PointFillMode = 2, zz.PointListDrawMode = 3, zz.LineListDrawMode = 4, zz.LineLoopDrawMode = 5, zz.LineStripDrawMode = 6, zz.TriangleStripDrawMode = 7, zz.TriangleFanDrawMode = 8, zz.ClockWiseSideOrientation = 0, zz.CounterClockWiseSideOrientation = 1, zz.ImageProcessingDirtyFlag = 64, zz.TextureDirtyFlag = 1, zz.LightDirtyFlag = 2, zz.FresnelDirtyFlag = 4, zz.AttributesDirtyFlag = 8, zz.MiscDirtyFlag = 16, zz.PrePassDirtyFlag = 32, zz.AllDirtyFlag = 127, zz.MATERIAL_OPAQUE = 0, zz.MATERIAL_ALPHATEST = 1, zz.MATERIAL_ALPHABLEND = 2, zz.MATERIAL_ALPHATESTANDBLEND = 3, zz.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, zz.MATERIAL_NORMALBLENDMETHOD_RNM = 1, zz.LIGHTFALLOFF_PHYSICAL = 0, zz.LIGHTFALLOFF_GLTF = 1, zz.LIGHTFALLOFF_STANDARD = 2, zz.OnEventObservable = new Oz.c, zz.ForceVertexOutputInvariant = !1, zz._AllDirtyCallBack = zz => zz.markAllAsDirty(), zz._ImageProcessingDirtyCallBack = zz => zz.markAsImageProcessingDirty(), zz._TextureDirtyCallBack = zz => zz.markAsTexturesDirty(), zz._FresnelDirtyCallBack = zz => zz.markAsFresnelDirty(), zz._MiscDirtyCallBack = zz => zz.markAsMiscDirty(), zz._PrePassDirtyCallBack = zz => zz.markAsPrePassDirty(), zz._LightsDirtyCallBack = zz => zz.markAsLightDirty(), zz._AttributeDirtyCallBack = zz => zz.markAsAttributesDirty(), zz._FresnelAndMiscDirtyCallBack = tz => {
        zz._FresnelDirtyCallBack(tz), zz._MiscDirtyCallBack(tz)
      }, zz._TextureAndMiscDirtyCallBack = tz => {
        zz._TextureDirtyCallBack(tz), zz._MiscDirtyCallBack(tz)
      }, zz._DirtyCallbackArray = [], zz._RunDirtyCallBacks = tz => {
        for (const sz of zz._DirtyCallbackArray) sz(tz)
      }, zz
    })();
    Object.getOwnPropertyDescriptor(Bz.prototype, "pluginManager") || Object.defineProperty(Bz.prototype, "pluginManager", (0, Hz.f)("Material", "pluginManager"))
  },
  39499: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz
    });
    var Fz = sz(39077);
    class Wz {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(zz) {
        this._DiffuseTextureEnabled !== zz && (this._DiffuseTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(zz) {
        this._BaseWeightTextureEnabled !== zz && (this._BaseWeightTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(zz) {
        this._BaseDiffuseRoughnessTextureEnabled !== zz && (this._BaseDiffuseRoughnessTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(zz) {
        this._DetailTextureEnabled !== zz && (this._DetailTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(zz) {
        this._DecalMapEnabled !== zz && (this._DecalMapEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(zz) {
        this._AmbientTextureEnabled !== zz && (this._AmbientTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(zz) {
        this._OpacityTextureEnabled !== zz && (this._OpacityTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(zz) {
        this._ReflectionTextureEnabled !== zz && (this._ReflectionTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(zz) {
        this._EmissiveTextureEnabled !== zz && (this._EmissiveTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(zz) {
        this._SpecularTextureEnabled !== zz && (this._SpecularTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(zz) {
        this._BumpTextureEnabled !== zz && (this._BumpTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(zz) {
        this._LightmapTextureEnabled !== zz && (this._LightmapTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(zz) {
        this._RefractionTextureEnabled !== zz && (this._RefractionTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(zz) {
        this._ColorGradingTextureEnabled !== zz && (this._ColorGradingTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(zz) {
        this._FresnelEnabled !== zz && (this._FresnelEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(zz) {
        this._ClearCoatTextureEnabled !== zz && (this._ClearCoatTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(zz) {
        this._ClearCoatBumpTextureEnabled !== zz && (this._ClearCoatBumpTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(zz) {
        this._ClearCoatTintTextureEnabled !== zz && (this._ClearCoatTintTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(zz) {
        this._SheenTextureEnabled !== zz && (this._SheenTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(zz) {
        this._AnisotropicTextureEnabled !== zz && (this._AnisotropicTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(zz) {
        this._ThicknessTextureEnabled !== zz && (this._ThicknessTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(zz) {
        this._RefractionIntensityTextureEnabled !== zz && (this._RefractionIntensityTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(zz) {
        this._TranslucencyIntensityTextureEnabled !== zz && (this._TranslucencyIntensityTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(zz) {
        this._TranslucencyColorTextureEnabled !== zz && (this._TranslucencyColorTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(zz) {
        this._IridescenceTextureEnabled !== zz && (this._IridescenceTextureEnabled = zz, Fz.b.MarkAllMaterialsAsDirty(1))
      }
    }
    Wz._DiffuseTextureEnabled = !0, Wz._BaseWeightTextureEnabled = !0, Wz._BaseDiffuseRoughnessTextureEnabled = !0, Wz._DetailTextureEnabled = !0, Wz._DecalMapEnabled = !0, Wz._AmbientTextureEnabled = !0, Wz._OpacityTextureEnabled = !0, Wz._ReflectionTextureEnabled = !0, Wz._EmissiveTextureEnabled = !0, Wz._SpecularTextureEnabled = !0, Wz._BumpTextureEnabled = !0, Wz._LightmapTextureEnabled = !0, Wz._RefractionTextureEnabled = !0, Wz._ColorGradingTextureEnabled = !0, Wz._FresnelEnabled = !0, Wz._ClearCoatTextureEnabled = !0, Wz._ClearCoatBumpTextureEnabled = !0, Wz._ClearCoatTintTextureEnabled = !0, Wz._SheenTextureEnabled = !0, Wz._AnisotropicTextureEnabled = !0, Wz._ThicknessTextureEnabled = !0, Wz._RefractionIntensityTextureEnabled = !0, Wz._TranslucencyIntensityTextureEnabled = !0, Wz._TranslucencyColorTextureEnabled = !0, Wz._IridescenceTextureEnabled = !0
  },
  39489: (zz, tz, sz) => {
    sz.d(tz, {
      C: () => Yz,
      F: () => ez,
      J: () => Zz,
      N: () => bz,
      O: () => Nz,
      P: () => iz,
      S: () => Mz,
      U: () => Az,
      X: () => jz,
      Y: () => Pz,
      _: () => Tz,
      cb: () => Lz,
      d: () => cz,
      eb: () => lz,
      g: () => xz,
      hb: () => nz,
      j: () => uz,
      lb: () => Vz,
      n: () => Hz,
      pb: () => qz,
      q: () => Bz,
      s: () => Cz,
      sb: () => Sz,
      t: () => vz,
      tb: () => wz,
      v: () => Dz,
      w: () => gz,
      x: () => rz,
      y: () => Gz
    });
    var Fz = sz(38097),
      Wz = sz(36502),
      Xz = sz(39350),
      Oz = sz(39493),
      oz = sz(39499);

    function vz(zz, tz, sz) {
      if (!zz || zz.LOGARITHMICDEPTH || zz.indexOf && zz.indexOf("LOGARITHMICDEPTH") >= 0) {
        const zz = sz.activeCamera;
        1 === zz.mode && Fz.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), tz.setFloat("logarithmicDepthConstant", 2 / (Math.log(zz.maxZ + 1) / Math.LN2))
      }
    }
    const Uz = {
        r: 0,
        g: 0,
        b: 0
      },
      Kz = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function uz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      sz && zz.fogEnabled && (!tz || tz.applyFog) && 0 !== zz.fogMode && (sz.setFloat4("vFogInfos", zz.fogMode, zz.fogStart, zz.fogEnd, zz.fogDensity), Fz ? (zz.fogColor.toLinearSpaceToRef(Uz, zz.FD().useExactSrgbConversions), sz.setColor3("vFogColor", Uz)) : sz.setColor3("vFogColor", zz.fogColor))
    }

    function Nz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
      const uz = zz.numMaxInfluencers || zz.numInfluencers;
      return uz <= 0 ? 0 : (tz.push("#define MORPHTARGETS"), zz.hasPositions && tz.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), zz.hasNormals && tz.push("#define MORPHTARGETTEXTURE_HASNORMALS"), zz.hasTangents && tz.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), zz.hasUVs && tz.push("#define MORPHTARGETTEXTURE_HASUVS"), zz.hasUV2s && tz.push("#define MORPHTARGETTEXTURE_HASUV2S"), zz.hasColors && tz.push("#define MORPHTARGETTEXTURE_HASCOLORS"), zz.supportsPositions && Wz && tz.push("#define MORPHTARGETS_POSITION"), zz.supportsNormals && Xz && tz.push("#define MORPHTARGETS_NORMAL"), zz.supportsTangents && Oz && tz.push("#define MORPHTARGETS_TANGENT"), zz.supportsUVs && oz && tz.push("#define MORPHTARGETS_UV"), zz.supportsUV2s && vz && tz.push("#define MORPHTARGETS_UV2"), zz.supportsColors && Uz && tz.push("#define MORPHTARGETS_COLOR"), tz.push("#define NUM_MORPH_INFLUENCERS " + uz), zz.isUsingTextureForTargets && tz.push("#define MORPHTARGETS_TEXTURE"), Kz.NUM_MORPH_INFLUENCERS = uz, Kz.NORMAL = Xz, Kz.TANGENT = Oz, Kz.UV = oz, Kz.UV2 = vz, Kz.COLOR = Uz, bz(sz, Fz, Kz, Wz), uz)
    }

    function bz(zz, tz, sz) {
      let Xz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Oz = sz.NUM_MORPH_INFLUENCERS;
      if (Oz > 0 && Wz.c.LastCreatedEngine) {
        const oz = Wz.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          vz = tz.morphTargetManager;
        if (vz?.isUsingTextureForTargets) return;
        const Uz = vz && vz.supportsPositions && Xz,
          Kz = vz && vz.supportsNormals && sz.NORMAL,
          uz = vz && vz.supportsTangents && sz.TANGENT,
          Nz = vz && vz.supportsUVs && sz.UV1,
          bz = vz && vz.supportsUV2s && sz.UV2,
          wz = vz && vz.supportsColors && sz.VERTEXCOLOR;
        for (let sz = 0; sz < Oz; sz++) Uz && zz.push("position" + sz), Kz && zz.push("normal" + sz), uz && zz.push("tangent" + sz), Nz && zz.push("uv_" + sz), bz && zz.push("uv2_" + sz), wz && zz.push("color" + sz), zz.length > oz && Fz.e.Error("Cannot add more vertex attributes for mesh " + tz.name)
      }
    }

    function wz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      zz.push("world0"), zz.push("world1"), zz.push("world2"), zz.push("world3"), tz && (zz.push("previousWorld0"), zz.push("previousWorld1"), zz.push("previousWorld2"), zz.push("previousWorld3"))
    }

    function Dz(zz, tz) {
      const sz = zz.morphTargetManager;
      zz && sz && tz.setFloatArray("morphTargetInfluences", sz.influences)
    }

    function gz(zz, tz) {
      tz.bindToEffect(zz, "Scene")
    }

    function Hz(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Uz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Kz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        uz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Nz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (zz.texturesEnabled && Wz && oz.b.ReflectionTextureEnabled) {
        if (sz.y5("reflectionMatrix", Wz.getReflectionTextureMatrix()), sz.updateFloat2("vReflectionInfos", Wz.level * zz.iblIntensity, Nz), vz && Wz.boundingBoxSize) {
          const zz = Wz;
          sz.updateVector3("vReflectionPosition", zz.boundingBoxPosition), sz.updateVector3("vReflectionSize", zz.boundingBoxSize)
        }
        if (Xz) {
          const zz = Wz.getSize().width;
          sz.updateFloat2("vReflectionFilteringInfo", zz, Math.log2(zz))
        }
        if (Kz && !tz.USEIRRADIANCEMAP) {
          const zz = Wz.sphericalPolynomial;
          if (tz.USESPHERICALFROMREFLECTIONMAP && zz)
            if (tz.SPHERICAL_HARMONICS) {
              const tz = zz.preScaledHarmonics;
              sz.updateVector3("vSphericalL00", tz.l00), sz.updateVector3("vSphericalL1_1", tz.l1_1), sz.updateVector3("vSphericalL10", tz.l10), sz.updateVector3("vSphericalL11", tz.l11), sz.updateVector3("vSphericalL2_2", tz.l2_2), sz.updateVector3("vSphericalL2_1", tz.l2_1), sz.updateVector3("vSphericalL20", tz.l20), sz.updateVector3("vSphericalL21", tz.l21), sz.updateVector3("vSphericalL22", tz.l22)
            } else sz.updateFloat3("vSphericalX", zz.x.x, zz.x.y, zz.x.z), sz.updateFloat3("vSphericalY", zz.y.x, zz.y.y, zz.y.z), sz.updateFloat3("vSphericalZ", zz.z.x, zz.z.y, zz.z.z), sz.updateFloat3("vSphericalXX_ZZ", zz.xx.x - zz.zz.x, zz.xx.y - zz.zz.y, zz.xx.z - zz.zz.z), sz.updateFloat3("vSphericalYY_ZZ", zz.yy.x - zz.zz.x, zz.yy.y - zz.zz.y, zz.yy.z - zz.zz.z), sz.updateFloat3("vSphericalZZ", zz.zz.x, zz.zz.y, zz.zz.z), sz.updateFloat3("vSphericalXY", zz.xy.x, zz.xy.y, zz.xy.z), sz.updateFloat3("vSphericalYZ", zz.yz.x, zz.yz.y, zz.yz.z), sz.updateFloat3("vSphericalZX", zz.zx.x, zz.zx.y, zz.zx.z)
        } else Uz && tz.USEIRRADIANCEMAP && tz.USE_IRRADIANCE_DOMINANT_DIRECTION && Wz.irradianceTexture && sz.updateVector3("vReflectionDominantDirection", Wz.irradianceTexture._dominantDirection);
        Oz && sz.updateFloat3("vReflectionMicrosurfaceInfos", Wz.getSize().width, Wz.lodGenerationScale, Wz.lodGenerationOffset)
      }
      uz && sz.updateColor3("vReflectionColor", Fz)
    }

    function Bz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Fz && oz.b.ReflectionTextureEnabled) {
        tz.LODBASEDMICROSFURACE ? sz.setTexture("reflectionSampler", Fz) : (sz.setTexture("reflectionSampler", Fz._lodTextureMid || Fz), sz.setTexture("reflectionSamplerLow", Fz._lodTextureLow || Fz), sz.setTexture("reflectionSamplerHigh", Fz._lodTextureHigh || Fz)), tz.USEIRRADIANCEMAP && sz.setTexture("irradianceSampler", Fz.irradianceTexture);
        const Xz = zz.iblCdfGenerator;
        Wz && Xz && sz.setTexture("icdfSampler", Xz.getIcdfTexture())
      }
    }

    function Pz(zz, tz, sz) {
      tz._needUVs = !0, tz[sz] = !0, zz.optimizeUVAllocation && zz.getTextureMatrix().isIdentityAs3x2() ? (tz[sz + "DIRECTUV"] = zz.coordinatesIndex + 1, tz["MAINUV" + (zz.coordinatesIndex + 1)] = !0) : tz[sz + "DIRECTUV"] = 0
    }

    function rz(zz, tz, sz) {
      const Fz = zz.getTextureMatrix();
      tz.y5(sz + "Matrix", Fz)
    }

    function Yz(zz, tz, sz) {
      sz.BAKED_VERTEX_ANIMATION_TEXTURE && sz.INSTANCES && zz.push("bakedVertexAnimationSettingsInstanced")
    }

    function xz(zz, tz, sz) {
      var Fz;
      if (tz && zz && (zz.computeBonesUsingShaders && tz._bonesComputationForcedToCPU && (zz.computeBonesUsingShaders = !1), zz.useBones && zz.computeBonesUsingShaders && zz.skeleton)) {
        const Wz = zz.skeleton;
        if (Wz.isUsingTextureForMatrices && tz.getUniformIndex("boneTextureInfo") > -1) {
          const sz = Wz.getTransformMatrixTexture(zz);
          tz.setTexture("boneSampler", sz), tz.setFloat2("boneTextureInfo", Wz._textureWidth, Wz._textureHeight)
        } else {
          const Xz = Wz.getTransformMatrices(zz);
          Xz && (tz.setMatrices("mBones", Xz), sz && zz.aJ().prePassRenderer && zz.aJ().prePassRenderer.getIndex(2) && (sz.previousBones[zz.uniqueId] || (sz.previousBones[zz.uniqueId] = Xz.slice()), tz.setMatrices("mPreviousBones", sz.previousBones[zz.uniqueId]), Fz = Xz, sz.previousBones[zz.uniqueId].set(Fz)))
        }
      }
    }

    function mz(zz, tz, sz, Fz, Wz) {
      let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      zz._bindLight(tz, sz, Fz, Wz, Xz)
    }
    const Jz = 4,
      Iz = new WeakMap;

    function Cz(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Xz = Math.min(tz.lightSources.length, Wz);
      for (let Oz = 0; Oz < Xz; Oz++) {
        mz(tz.lightSources[Oz], Oz, zz, sz, "boolean" === typeof Fz ? Fz : Fz.SPECULARTERM, tz.receiveShadows)
      }
    }

    function ez(zz, tz, sz, Fz) {
      sz.NUM_BONE_INFLUENCERS > 0 && (Fz.addCPUSkinningFallback(0, tz), zz.push("matricesIndices"), zz.push("matricesWeights"), sz.NUM_BONE_INFLUENCERS > 4 && (zz.push("matricesIndicesExtra"), zz.push("matricesWeightsExtra")))
    }

    function Zz(zz, tz) {
      (tz.INSTANCES || tz.THIN_INSTANCES) && wz(zz, !!tz.PREPASS_VELOCITY), tz.INSTANCESCOLOR && zz.push("instanceColor")
    }

    function Gz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wz = 0;
      for (let Xz = 0; Xz < sz && zz["LIGHT" + Xz]; Xz++) Xz > 0 && (Wz = Fz + Xz, tz.addFallback(Wz, "LIGHT" + Xz)), zz.SHADOWS || (zz["SHADOW" + Xz] && tz.addFallback(Fz, "SHADOW" + Xz), zz["SHADOWPCF" + Xz] && tz.addFallback(Fz, "SHADOWPCF" + Xz), zz["SHADOWPCSS" + Xz] && tz.addFallback(Fz, "SHADOWPCSS" + Xz), zz["SHADOWPOISSON" + Xz] && tz.addFallback(Fz, "SHADOWPOISSON" + Xz), zz["SHADOWESM" + Xz] && tz.addFallback(Fz, "SHADOWESM" + Xz), zz["SHADOWCLOSEESM" + Xz] && tz.addFallback(Fz, "SHADOWCLOSEESM" + Xz));
      return Wz
    }

    function Tz(zz, tz, sz, Fz, Wz, Xz, Oz) {
      let oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Uz = arguments.length > 9 ? arguments[9] : void 0,
        Kz = arguments.length > 10 ? arguments[10] : void 0;
      if (Oz._areMiscDirty) {
        Oz.LOGARITHMICDEPTH = sz, Oz.POINTSIZE = Fz, Oz.FOG = Wz && function(zz, tz) {
          return tz.fogEnabled && zz.applyFog && 0 !== tz.fogMode
        }(zz, tz), Oz.NONUNIFORMSCALING = zz.nonUniformScaling, Oz.ALPHATEST = Xz, Oz.DECAL_AFTER_DETAIL = oz, Oz.USE_VERTEX_PULLING = vz, Oz.RIGHT_HANDED = tz.useRightHandedSystem;
        const uz = vz ? Uz?.geometry?.getIndexBuffer() : null,
          Nz = !!Uz && Uz.isUnIndexed;
        Oz.VERTEX_PULLING_USE_INDEX_BUFFER = !!uz && !Nz, Oz.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!uz || Nz) && uz.is32Bits, Oz.VERTEXOUTPUT_INVARIANT = !!Kz
      }
    }

    function cz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!zz.lightsEnabled || Fz) return !0;
      const Wz = tz.lightSources,
        Xz = Math.min(Wz.length, sz);
      for (let Oz = 0; Oz < Xz; Oz++)
        if (!Wz[Oz].areLightTexturesReady()) return !1;
      return !0
    }

    function jz(zz, tz, sz, Wz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!sz._areLightsDirty) return sz._needNormals;
      const oz = Xz;
      Xz = function(zz, tz) {
        const sz = zz.FD().getCaps().maxUniformBuffersPerShaderStage;
        if (null == sz) return tz;
        const Fz = Math.max(sz - Jz, 1);
        return Math.min(tz, Fz)
      }(zz, Xz);
      let vz = 0;
      const Uz = {
        needNormals: sz._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (zz.lightsEnabled && !Oz) {
        tz.lightSources.length > Xz && Xz < oz && function(zz, tz, sz, Wz) {
          let Xz = Iz.get(zz);
          Xz || (Xz = new Set, Iz.set(zz, Xz)), Xz.has(Wz) || (Xz.add(Wz), Fz.e.Warn(`maxSimultaneousLights is ${tz} but this engine supports at most ${sz} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Wz} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Wz+Jz} uniform buffers, over the device limit of ${zz.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${sz}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${sz} or less to silence this warning.`))
        }(zz.FD(), oz, Xz, Math.min(tz.lightSources.length, oz));
        for (const Fz of tz.lightSources)
          if (yz(zz, tz, Fz, vz, sz, Wz, Uz), vz++, vz === Xz) break
      }
      sz.SPECULARTERM = Uz.specularEnabled, sz.SHADOWS = Uz.shadowEnabled;
      const Kz = Math.max(Xz, sz.MAXLIGHTCOUNT || 0);
      for (let Fz = vz; Fz < Kz; Fz++) void 0 !== sz["LIGHT" + Fz] && (sz["LIGHT" + Fz] = !1, sz["HEMILIGHT" + Fz] = !1, sz["POINTLIGHT" + Fz] = !1, sz["DIRLIGHT" + Fz] = !1, sz["SPOTLIGHT" + Fz] = !1, sz["AREALIGHT" + Fz] = !1, sz["CLUSTLIGHT" + Fz] = !1, sz["SHADOW" + Fz] = !1, sz["SHADOWCSM" + Fz] = !1, sz["SHADOWCSMDEBUG" + Fz] = !1, sz["SHADOWCSMNUM_CASCADES" + Fz] = !1, sz["SHADOWCSMUSESHADOWMAXZ" + Fz] = !1, sz["SHADOWCSMNOBLEND" + Fz] = !1, sz["SHADOWCSM_RIGHTHANDED" + Fz] = !1, sz["SHADOWPCF" + Fz] = !1, sz["SHADOWPCSS" + Fz] = !1, sz["SHADOWPOISSON" + Fz] = !1, sz["SHADOWESM" + Fz] = !1, sz["SHADOWCLOSEESM" + Fz] = !1, sz["SHADOWCUBE" + Fz] = !1, sz["SHADOWLOWQUALITY" + Fz] = !1, sz["SHADOWMEDIUMQUALITY" + Fz] = !1);
      sz.LIGHTCOUNT = vz, sz.MAXLIGHTCOUNT = Xz;
      const uz = zz.FD().getCaps();
      return void 0 === sz.SHADOWFLOAT && (Uz.needRebuild = !0), sz.SHADOWFLOAT = Uz.shadowEnabled && (uz.textureFloatRender && uz.textureFloatLinearFiltering || uz.textureHalfFloatRender && uz.textureHalfFloatLinearFiltering), sz.LIGHTMAPEXCLUDED = Uz.lightmapMode, Uz.needRebuild && sz.rebuild(), Uz.needNormals
    }

    function Az(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (tz && oz.b.ReflectionTextureEnabled) {
        if (!tz.isReadyOrNotBlocking()) return !1;
        sz._needNormals = !0, sz.REFLECTION = !0, sz.GAMMAREFLECTION = tz.gammaSpace, sz.RGBDREFLECTION = tz.isRGBD, sz.LODINREFLECTIONALPHA = tz.lodLevelInAlpha, sz.LINEARSPECULARREFLECTION = tz.linearSpecularLOD, sz.USEIRRADIANCEMAP = !1, sz.LODBASEDMICROSFURACE = zz.FD().getCaps().textureLOD;
        const Oz = zz.FD();
        switch (Fz && Wz > 0 ? (sz.NUM_SAMPLES = "" + Wz, Oz._features.needTypeSuffixInShaderConstants && (sz.NUM_SAMPLES = sz.NUM_SAMPLES + "u"), sz.REALTIME_FILTERING = !0, zz.iblCdfGenerator && (sz.IBL_CDF_FILTERING = !0)) : sz.REALTIME_FILTERING = !1, sz.INVERTCUBICMAP = 6 === tz.coordinatesMode, sz.REFLECTIONMAP_3D = tz.isCube, sz.REFLECTIONMAP_OPPOSITEZ = sz.REFLECTIONMAP_3D && zz.useRightHandedSystem ? !tz.invertZ : tz.invertZ, sz.REFLECTIONMAP_CUBIC = !1, sz.REFLECTIONMAP_EXPLICIT = !1, sz.REFLECTIONMAP_PLANAR = !1, sz.REFLECTIONMAP_PROJECTION = !1, sz.REFLECTIONMAP_SKYBOX = !1, sz.REFLECTIONMAP_SPHERICAL = !1, sz.REFLECTIONMAP_EQUIRECTANGULAR = !1, sz.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, sz.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, tz.coordinatesMode) {
          case 0:
            sz.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            sz.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            sz.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            sz.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            sz.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            sz.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            sz.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            sz.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            sz.REFLECTIONMAP_CUBIC = !0, sz.USE_LOCAL_REFLECTIONMAP_CUBIC = !!tz.boundingBoxSize
        }
        5 !== tz.coordinatesMode && (tz.irradianceTexture ? (sz.USEIRRADIANCEMAP = !0, sz.USESPHERICALFROMREFLECTIONMAP = !1, sz.USESPHERICALINVERTEX = !1, tz.irradianceTexture._dominantDirection ? sz.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : sz.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : tz.isCube && (sz.USESPHERICALFROMREFLECTIONMAP = !0, sz.USEIRRADIANCEMAP = !1, sz.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, sz.USESPHERICALINVERTEX = Xz))
      } else sz.REFLECTION = !1, sz.REFLECTIONMAP_3D = !1, sz.REFLECTIONMAP_SPHERICAL = !1, sz.REFLECTIONMAP_PLANAR = !1, sz.REFLECTIONMAP_CUBIC = !1, sz.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, sz.REFLECTIONMAP_PROJECTION = !1, sz.REFLECTIONMAP_SKYBOX = !1, sz.REFLECTIONMAP_EXPLICIT = !1, sz.REFLECTIONMAP_EQUIRECTANGULAR = !1, sz.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, sz.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, sz.INVERTCUBICMAP = !1, sz.USESPHERICALFROMREFLECTIONMAP = !1, sz.USEIRRADIANCEMAP = !1, sz.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, sz.USESPHERICALINVERTEX = !1, sz.REFLECTIONMAP_OPPOSITEZ = !1, sz.LODINREFLECTIONALPHA = !1, sz.GAMMAREFLECTION = !1, sz.RGBDREFLECTION = !1, sz.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function yz(zz, tz, sz, Fz, Wz, Oz, oz) {
      switch (oz.needNormals = !0, void 0 === Wz["LIGHT" + Fz] && (oz.needRebuild = !0), Wz["LIGHT" + Fz] = !0, Wz["SPOTLIGHT" + Fz] = !1, Wz["HEMILIGHT" + Fz] = !1, Wz["POINTLIGHT" + Fz] = !1, Wz["DIRLIGHT" + Fz] = !1, Wz["AREALIGHT" + Fz] = !1, Wz["CLUSTLIGHT" + Fz] = !1, sz.prepareLightSpecificDefines(Wz, Fz), Wz["LIGHT_FALLOFF_PHYSICAL" + Fz] = !1, Wz["LIGHT_FALLOFF_GLTF" + Fz] = !1, Wz["LIGHT_FALLOFF_STANDARD" + Fz] = !1, sz.falloffType) {
        case Xz.c.FALLOFF_GLTF:
          Wz["LIGHT_FALLOFF_GLTF" + Fz] = !0;
          break;
        case Xz.c.FALLOFF_PHYSICAL:
          Wz["LIGHT_FALLOFF_PHYSICAL" + Fz] = !0;
          break;
        case Xz.c.FALLOFF_STANDARD:
          Wz["LIGHT_FALLOFF_STANDARD" + Fz] = !0
      }
      if (Oz && !sz.specular.equalsFloats(0, 0, 0) && (oz.specularEnabled = !0), Wz["SHADOW" + Fz] = !1, Wz["SHADOWCSM" + Fz] = !1, Wz["SHADOWCSMDEBUG" + Fz] = !1, Wz["SHADOWCSMNUM_CASCADES" + Fz] = !1, Wz["SHADOWCSMUSESHADOWMAXZ" + Fz] = !1, Wz["SHADOWCSMNOBLEND" + Fz] = !1, Wz["SHADOWCSM_RIGHTHANDED" + Fz] = !1, Wz["SHADOWPCF" + Fz] = !1, Wz["SHADOWPCSS" + Fz] = !1, Wz["SHADOWPOISSON" + Fz] = !1, Wz["SHADOWESM" + Fz] = !1, Wz["SHADOWCLOSEESM" + Fz] = !1, Wz["SHADOWCUBE" + Fz] = !1, Wz["SHADOWLOWQUALITY" + Fz] = !1, Wz["SHADOWMEDIUMQUALITY" + Fz] = !1, tz && tz.receiveShadows && zz.shadowsEnabled && sz.shadowEnabled) {
        const tz = sz.getShadowGenerator(zz.activeCamera) ?? sz.getShadowGenerator();
        if (tz) {
          const zz = tz.getShadowMap();
          zz && zz.renderList && zz.renderList.length > 0 && (oz.shadowEnabled = !0, tz.prepareDefines(Wz, Fz))
        }
      }
      sz.lightmapMode != Xz.c.LIGHTMAP_DEFAULT ? (oz.lightmapMode = !0, Wz["LIGHTMAPEXCLUDED" + Fz] = !0, Wz["LIGHTMAPNOSPECULAR" + Fz] = sz.lightmapMode == Xz.c.LIGHTMAP_SHADOWSONLY) : (Wz["LIGHTMAPEXCLUDED" + Fz] = !1, Wz["LIGHTMAPNOSPECULAR" + Fz] = !1)
    }

    function Mz(zz, tz, sz, Fz, Wz) {
      let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vz = function(zz, tz) {
          let sz = !1;
          if (zz.activeCamera) {
            const Fz = tz.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Wz = tz.CAMERA_PERSPECTIVE ? 1 : 0,
              Xz = 1 === zz.activeCamera.mode ? 1 : 0,
              Oz = 0 === zz.activeCamera.mode ? 1 : 0;
            (Fz ^ Xz || Wz ^ Oz) && (tz.CAMERA_ORTHOGRAPHIC = 1 === Xz, tz.CAMERA_PERSPECTIVE = 1 === Oz, sz = !0)
          }
          return sz
        }(zz, Fz);
      !1 !== Xz && (vz = (0, Oz.h)(sz, zz, Fz)), Fz.DEPTHPREPASS !== !tz.getColorWrite() && (Fz.DEPTHPREPASS = !Fz.DEPTHPREPASS, vz = !0), Fz.INSTANCES !== Wz && (Fz.INSTANCES = Wz, vz = !0), Fz.THIN_INSTANCES !== oz && (Fz.THIN_INSTANCES = oz, vz = !0), vz && Fz.markAsUnprocessed()
    }
    const dz = 40,
      hz = 64,
      Qz = new WeakMap,
      kz = new WeakSet;

    function iz(zz, tz, sz, Wz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Oz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!tz._areAttributesDirty && tz._needNormals === tz._normals && tz._needUVs === tz._uvs) return !1;
      tz._normals = tz._needNormals, tz._uvs = tz._needUVs, tz.NORMAL = tz._needNormals && zz.isVerticesDataPresent("normal"), tz._needNormals && zz.isVerticesDataPresent("tangent") && (tz.TANGENT = !0);
      for (let Fz = 1; Fz <= 6; ++Fz) tz["UV" + Fz] = !!tz._needUVs && zz.isVerticesDataPresent(`uv${1===Fz?"":Fz}`);
      if (sz) {
        const sz = zz.useVertexColors && zz.isVerticesDataPresent("color");
        tz.VERTEXCOLOR = sz, tz.VERTEXALPHA = zz.hasVertexAlpha && sz && Oz
      }
      return zz.isVerticesDataPresent("instanceColor") && (zz.jFz || zz.hasThinInstances) && (tz.INSTANCESCOLOR = !0), Wz && function(zz, tz) {
        if (zz.useBones && zz.computeBonesUsingShaders && zz.skeleton) {
          tz.NUM_BONE_INFLUENCERS = zz.numBoneInfluencers;
          const sz = void 0 !== tz.BONETEXTURE;
          if (zz.skeleton.isUsingTextureForMatrices && sz) tz.BONETEXTURE = !0;
          else {
            tz.BonesPerMesh = zz.skeleton.bones.length + 1, tz.BONETEXTURE = !sz && void 0;
            const Wz = zz.aJ(),
              Xz = Wz.prePassRenderer;
            if (Xz && Xz.enabled) {
              const sz = -1 === Xz.excludedSkinnedMesh.indexOf(zz);
              tz.BONES_VELOCITY_ENABLED = sz
            }
            const Oz = !0 === tz.MULTIVIEW,
              oz = 2 * tz.BonesPerMesh + (Oz ? 1 : 0);
            if (Qz.get(zz.skeleton) !== oz) {
              Qz.set(zz.skeleton, oz);
              const sz = Wz.FD().getCaps().maxVertexUniformVectors;
              if (sz && !kz.has(zz.skeleton)) {
                const Wz = 4 * tz.BonesPerMesh,
                  Xz = Oz ? hz : dz,
                  oz = Math.max(sz - Xz, 0);
                (Wz > oz || Oz && 3 * Wz > sz) && (kz.add(zz.skeleton), Fz.e.Warn(`Skeleton "${zz.skeleton.name}": ${zz.skeleton.bones.length} bones stored as vertex uniforms use ${Wz} of ~${oz} usable uniform vectors${Oz?" (multiview)":""} on a device reporting ${sz}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else tz.NUM_BONE_INFLUENCERS = 0, tz.BonesPerMesh = 0, void 0 !== tz.BONETEXTURE && (tz.BONETEXTURE = !1)
      }(zz, tz), Xz && function(zz, tz) {
        const sz = zz.morphTargetManager;
        sz ? (tz.MORPHTARGETS_UV = sz.supportsUVs && tz.UV1, tz.MORPHTARGETS_UV2 = sz.supportsUV2s && tz.UV2, tz.MORPHTARGETS_TANGENT = sz.supportsTangents && tz.TANGENT, tz.MORPHTARGETS_NORMAL = sz.supportsNormals && tz.NORMAL, tz.MORPHTARGETS_POSITION = sz.supportsPositions, tz.MORPHTARGETS_COLOR = sz.supportsColors, tz.MORPHTARGETTEXTURE_HASUVS = sz.hasUVs, tz.MORPHTARGETTEXTURE_HASUV2S = sz.hasUV2s, tz.MORPHTARGETTEXTURE_HASTANGENTS = sz.hasTangents, tz.MORPHTARGETTEXTURE_HASNORMALS = sz.hasNormals, tz.MORPHTARGETTEXTURE_HASPOSITIONS = sz.hasPositions, tz.MORPHTARGETTEXTURE_HASCOLORS = sz.hasColors, tz.NUM_MORPH_INFLUENCERS = sz.numMaxInfluencers || sz.numInfluencers, tz.MORPHTARGETS = tz.NUM_MORPH_INFLUENCERS > 0, tz.MORPHTARGETS_TEXTURE = sz.isUsingTextureForTargets) : (tz.MORPHTARGETS_UV = !1, tz.MORPHTARGETS_UV2 = !1, tz.MORPHTARGETS_TANGENT = !1, tz.MORPHTARGETS_NORMAL = !1, tz.MORPHTARGETS_POSITION = !1, tz.MORPHTARGETS_COLOR = !1, tz.MORPHTARGETTEXTURE_HASUVS = !1, tz.MORPHTARGETTEXTURE_HASUV2S = !1, tz.MORPHTARGETTEXTURE_HASTANGENTS = !1, tz.MORPHTARGETTEXTURE_HASNORMALS = !1, tz.MORPHTARGETTEXTURE_HASPOSITIONS = !1, tz.MORPHTARGETTEXTURE_HAS_COLORS = !1, tz.MORPHTARGETS = !1, tz.NUM_MORPH_INFLUENCERS = 0)
      }(zz, tz), oz && function(zz, tz) {
        const sz = zz.bakedVertexAnimationManager;
        tz.BAKED_VERTEX_ANIMATION_TEXTURE = !(!sz || !sz.isEnabled)
      }(zz, tz), !0
    }

    function Lz(zz, tz) {
      if (zz.activeCamera) {
        const sz = tz.MULTIVIEW;
        tz.MULTIVIEW = null !== zz.activeCamera.outputRenderTarget && zz.activeCamera.outputRenderTarget.getViewCount() > 1, tz.MULTIVIEW != sz && tz.markAsUnprocessed()
      }
    }

    function lz(zz, tz, sz) {
      const Fz = tz.ORDER_INDEPENDENT_TRANSPARENCY,
        Wz = tz.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      tz.ORDER_INDEPENDENT_TRANSPARENCY = zz.useOrderIndependentTransparency && sz, tz.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !zz.FD().getCaps().textureFloatLinearFiltering, Fz === tz.ORDER_INDEPENDENT_TRANSPARENCY && Wz === tz.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || tz.markAsUnprocessed()
    }

    function nz(zz, tz, sz) {
      const Fz = tz.PREPASS;
      if (!tz._arePrePassDirty) return;
      const Wz = [{
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
      if (zz.prePassRenderer && zz.prePassRenderer.enabled && sz) {
        tz.PREPASS = !0, tz.SCENE_MRT_COUNT = zz.prePassRenderer.mrtCount, tz.PREPASS_NORMAL_WORLDSPACE = zz.prePassRenderer.generateNormalsInWorldSpace, tz.PREPASS_COLOR = !0, tz.PREPASS_COLOR_INDEX = 0;
        for (let sz = 0; sz < Wz.length; sz++) {
          const Fz = zz.prePassRenderer.getIndex(Wz[sz].type); - 1 !== Fz ? (tz[Wz[sz].define] = !0, tz[Wz[sz].index] = Fz) : tz[Wz[sz].define] = !1
        }
      } else {
        tz.PREPASS = !1;
        for (let zz = 0; zz < Wz.length; zz++) tz[Wz[zz].define] = !1
      }
      tz.PREPASS != Fz && (tz.markAsUnprocessed(), tz.markAsImageProcessingDirty())
    }

    function az(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Uz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Wz && Wz.push("Light" + zz), Xz || (tz.push("vLightData" + zz, "vLightDiffuse" + zz, "vLightSpecular" + zz, "vLightDirection" + zz, "vLightWidth" + zz, "vLightHeight" + zz, "vLightFalloff" + zz, "vLightGround" + zz, "vSliceData" + zz, "vSliceRanges" + zz, "lightMatrix" + zz, "shadowsInfo" + zz, "depthValues" + zz), sz.push("shadowTexture" + zz), sz.push("depthTexture" + zz), tz.push("viewFrustumZ" + zz, "cascadeBlendFactor" + zz, "lightSizeUVCorrection" + zz, "depthCorrection" + zz, "penumbraDarkness" + zz, "frustumLengths" + zz), Fz && (sz.push("projectionLightTexture" + zz), tz.push("textureProjectionMatrix" + zz)), Oz && sz.push("iesLightTexture" + zz), vz && sz.push("rectAreaLightEmissionTexture" + zz), oz && (sz.push("lightDataTexture" + zz), Uz || sz.push("tileMaskTexture" + zz)))
    }

    function qz(zz, tz, sz) {
      const Fz = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      sz && Fz.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), zz.push(...Fz);
      tz.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Sz(zz, tz, sz) {
      let Fz, Wz, Xz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Oz = null;
      if (zz.uniformsNames) {
        const oz = zz;
        Fz = oz.uniformsNames, Wz = oz.uniformBuffersNames, tz = oz.samplers, sz = oz.defines, Xz = oz.maxSimultaneousLights || 0, Oz = oz.shaderLanguage ?? null
      } else Fz = zz, tz || (tz = []);
      for (let oz = 0; oz < Xz && sz["LIGHT" + oz]; oz++) az(oz, Fz, tz, sz["PROJECTEDLIGHTTEXTURE" + oz], Wz, !1, sz["IESLIGHTTEXTURE" + oz], sz["CLUSTLIGHT" + oz], sz["RECTAREALIGHTEMISSIONTEXTURE" + oz], 1 === Oz);
      sz.NUM_MORPH_INFLUENCERS && (Fz.push("morphTargetInfluences"), Fz.push("morphTargetCount")), sz.BAKED_VERTEX_ANIMATION_TEXTURE && (Fz.push("bakedVertexAnimationSettings"), Fz.push("bakedVertexAnimationTextureSizeInverted"), Fz.push("bakedVertexAnimationTime"), tz.push("bakedVertexAnimationTexture"))
    }

    function Vz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      zz.addUniform("vReflectionInfos", 2), zz.addUniform("reflectionMatrix", 16), tz && zz.addUniform("vReflectionMicrosurfaceInfos", 3), sz && (zz.addUniform("vReflectionPosition", 3), zz.addUniform("vReflectionSize", 3)), Fz && (zz.addUniform("vReflectionFilteringInfo", 2), zz.addUniform("vReflectionDominantDirection", 3)), Xz && zz.addUniform("vReflectionColor", 3), Wz && (zz.addUniform("vSphericalL00", 3), zz.addUniform("vSphericalL1_1", 3), zz.addUniform("vSphericalL10", 3), zz.addUniform("vSphericalL11", 3), zz.addUniform("vSphericalL2_2", 3), zz.addUniform("vSphericalL2_1", 3), zz.addUniform("vSphericalL20", 3), zz.addUniform("vSphericalL21", 3), zz.addUniform("vSphericalL22", 3), zz.addUniform("vSphericalX", 3), zz.addUniform("vSphericalY", 3), zz.addUniform("vSphericalZ", 3), zz.addUniform("vSphericalXX_ZZ", 3), zz.addUniform("vSphericalYY_ZZ", 3), zz.addUniform("vSphericalZZ", 3), zz.addUniform("vSphericalXY", 3), zz.addUniform("vSphericalYZ", 3), zz.addUniform("vSphericalZX", 3))
    }
  },
  39501: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(36475),
      Wz = sz(39451);
    class Xz extends Wz.b {
      constructor(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(zz, tz, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Fz.e, this._storeEffectOnSubMeshes = sz
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(zz, tz) {
        return !!zz && (!this._storeEffectOnSubMeshes || (!zz.kY || 0 === zz.kY.length || this.isReadyForSubMesh(zz, zz.kY[0], tz)))
      }
      _isReadyForSubMesh(zz) {
        const tz = zz.materialDefines;
        return !(this.checkReadyOnEveryCall || !zz.effect || !tz || tz._renderId !== this.aJ().getRenderId())
      }
      bindOnlyWorldMatrix(zz) {
        this._activeEffect.setMatrix("world", zz)
      }
      bindOnlyNormalMatrix(zz) {
        this._activeEffect.setMatrix("normalMatrix", zz)
      }
      bind(zz, tz) {
        tz && this.bindForSubMesh(zz, tz, tz.kY[0])
      }
      _afterBind(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(zz, tz, sz), this.aJ()._cachedEffect = tz, sz ? sz._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return sz._drawWrapper._forceRebindOnNextCall || zz.isCachedMaterialInvalid(this, tz, Fz)
      }
      dispose(zz, tz, sz) {
        this._activeEffect = void 0, super.dispose(zz, tz, sz)
      }
    }
  },
  39522: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      f: () => Wz
    });
    const Fz = new WeakMap;

    function Wz(zz) {
      const tz = zz.getVertexBuffers();
      if (!tz) return null;
      let sz = Fz.get(zz);
      if (sz) {
        let zz = !1;
        for (const Fz in tz)
          if (!sz.has(Fz)) {
            zz = !0;
            break
          } if (!zz) return sz
      } else sz = new Map, Fz.set(zz, sz);
      for (const Fz in tz) {
        const zz = tz[Fz];
        if (zz) {
          const tz = zz.byteOffset,
            Wz = zz.byteStride,
            Xz = zz.type,
            Oz = zz.normalized;
          sz.set(Fz, {
            offset: tz,
            stride: Wz,
            type: Xz,
            normalized: Oz
          })
        }
      }
      return sz
    }

    function Xz(zz, tz) {
      tz.forEach(((tz, sz) => {
        const Fz = `vp_${sz}_info`;
        zz.setFloat4(Fz, tz.offset, tz.stride, tz.type, tz.normalized ? 1 : 0)
      }))
    }
  },
  39479: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      f: () => vz
    });
    var Fz = sz(39167),
      Wz = sz(36475),
      Xz = sz(39170);
    let Oz = (() => {
      var zz;
      let tz, sz, Wz = [];
      return zz = class {
        static extractMinAndMaxIndexed(zz, tz, sz, Fz, Wz, Xz) {
          for (let Oz = sz; Oz < sz + Fz; Oz++) {
            const sz = 3 * tz[Oz],
              Fz = zz[sz],
              oz = zz[sz + 1],
              vz = zz[sz + 2];
            Wz.minimizeInPlaceFromFloats(Fz, oz, vz), Xz.maximizeInPlaceFromFloats(Fz, oz, vz)
          }
        }
        static extractMinAndMax(zz, tz, sz, Fz, Wz, Xz) {
          for (let Oz = tz, oz = tz * Fz; Oz < tz + sz; Oz++, oz += Fz) {
            const tz = zz[oz],
              sz = zz[oz + 1],
              Fz = zz[oz + 2];
            Wz.minimizeInPlaceFromFloats(tz, sz, Fz), Xz.maximizeInPlaceFromFloats(tz, sz, Fz)
          }
        }
      }, (() => {
        const Oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [Xz.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], sz = [Xz.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Fz.h)(zz, null, tz, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: zz => "extractMinAndMaxIndexed" in zz,
            get: zz => zz.extractMinAndMaxIndexed
          },
          metadata: Oz
        }, null, Wz), (0, Fz.h)(zz, null, sz, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: zz => "extractMinAndMax" in zz,
            get: zz => zz.extractMinAndMax
          },
          metadata: Oz
        }, null, Wz), Oz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oz
        }), (0, Fz.k)(zz, Wz)
      })(), zz
    })();

    function oz(zz, tz, sz, Fz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const oz = new Wz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        vz = new Wz.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Oz.extractMinAndMaxIndexed(zz, tz, sz, Fz, oz, vz), Xz && (oz.x -= oz.x * Xz.x + Xz.y, oz.y -= oz.y * Xz.x + Xz.y, oz.z -= oz.z * Xz.x + Xz.y, vz.x += vz.x * Xz.x + Xz.y, vz.y += vz.y * Xz.x + Xz.y, vz.z += vz.z * Xz.x + Xz.y), {
        minimum: oz,
        maximum: vz
      }
    }

    function vz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Xz = arguments.length > 4 ? arguments[4] : void 0;
      const oz = new Wz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        vz = new Wz.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Xz || (Xz = 3), Oz.extractMinAndMax(zz, tz, sz, Xz, oz, vz), Fz && (oz.x -= oz.x * Fz.x + Fz.y, oz.y -= oz.y * Fz.x + Fz.y, oz.z -= oz.z * Fz.x + Fz.y, vz.x += vz.x * Fz.x + Fz.y, vz.y += vz.y * Fz.x + Fz.y, vz.z += vz.z * Fz.x + Fz.y), {
        minimum: oz,
        maximum: vz
      }
    }
  },
  39458: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz
    });
    var Fz, Wz = sz(39293),
      Xz = sz(39467),
      Oz = sz(39472),
      oz = sz(39479),
      vz = sz(39485),
      Uz = sz(39065);
    class Kz {
      get materialDefines() {
        const zz = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof zz ? null : zz
      }
      set materialDefines(zz) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = zz
      }
      _getDrawWrapper(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        zz = zz ?? this._engine.currentRenderPassId;
        let sz = this._drawWrappers[zz];
        return !sz && tz && (this._drawWrappers[zz] = sz = new vz.c(this._mesh.aJ().FD())), sz
      }
      _removeDrawWrapper(zz) {
        let tz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[zz]?.dispose(tz), this._drawWrappers[zz] = void 0
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
      _setMainDrawWrapperOverride(zz) {
        this._mainDrawWrapperOverride = zz
      }
      setEffect(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wz = this._drawWrapper;
        Wz.setEffect(zz, tz, Fz), void 0 !== sz && (Wz.materialContext = sz), zz || (Wz.defines = null, Wz.materialContext = void 0)
      }
      resetDrawCache(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== zz) return void this._removeDrawWrapper(zz, !0, tz);
          for (const zz of this._drawWrappers) zz?.dispose(tz)
        }
        this._drawWrappers = []
      }
      static AddToMesh(zz, tz, sz, Fz, Wz, Xz, Oz) {
        return new Kz(zz, tz, sz, Fz, Wz, Xz, Oz, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(zz, tz, sz, Fz, Wz, Xz, Oz) {
        let oz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          vz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = zz, this.verticesStart = tz, this.verticesCount = sz, this.indexStart = Fz, this.indexCount = Wz, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Xz, this._renderingMesh = Oz || Xz, vz && Xz.kY.push(this), this._engine = this._mesh.aJ().FD(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Xz.kY.length - 1, oz && (this.refreshBoundingInfo(), Xz.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      rC() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.rC() : this._boundingInfo
      }
      setBoundingInfo(zz) {
        return this._boundingInfo = zz, this
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
        const zz = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return zz || this._renderingMesh
      }
      vD() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const tz = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!tz) return zz && this._mesh.aJ()._hasDefaultMaterial ? this._mesh.aJ().defaultMaterial : null;
        if (this._isMultiMaterial(tz)) {
          const zz = tz.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== zz && (this._currentMaterial = zz, this.resetDrawCache()), zz
        }
        return tz
      }
      _isMultiMaterial(zz) {
        return void 0 !== zz.getSubMaterial
      }
      refreshBoundingInfo() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (zz || (zz = this._renderingMesh.getVerticesData(Wz.m.PositionKind)), !zz) return this._boundingInfo = this._mesh.rC(), this;
        const tz = this._renderingMesh.Qsz();
        let sz;
        if (0 === this.indexStart && this.indexCount === tz.length) {
          const zz = this._renderingMesh.rC();
          sz = {
            minimum: zz.minimum.clone(),
            maximum: zz.maximum.clone()
          }
        } else sz = (0, oz.c)(zz, tz, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(sz.minimum, sz.maximum) : this._boundingInfo = new Oz.d(sz.minimum, sz.maximum), this
      }
      _checkCollision(zz) {
        return this.rC()._checkCollision(zz)
      }
      updateBoundingInfo(zz) {
        let tz = this.rC();
        return tz || (this.refreshBoundingInfo(), tz = this.rC()), tz && tz.update(zz), this
      }
      isInFrustum(zz) {
        const tz = this.rC();
        return !!tz && tz.isInFrustum(zz, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(zz) {
        const tz = this.rC();
        return !!tz && tz.isCompletelyInFrustum(zz)
      }
      render(zz) {
        return this._renderingMesh.render(this, zz, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(zz, tz) {
        if (!this._linesIndexBuffer) {
          const sz = 6 * Math.floor(this.indexCount / 3),
            Fz = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(sz) : new Uint16Array(sz);
          let Wz = 0;
          if (0 === zz.length)
            for (let zz = this.indexStart; zz < this.indexStart + this.indexCount; zz += 3) Fz[Wz++] = zz, Fz[Wz++] = zz + 1, Fz[Wz++] = zz + 1, Fz[Wz++] = zz + 2, Fz[Wz++] = zz + 2, Fz[Wz++] = zz;
          else
            for (let tz = this.indexStart; tz < this.indexStart + this.indexCount; tz += 3) Fz[Wz++] = zz[tz], Fz[Wz++] = zz[tz + 1], Fz[Wz++] = zz[tz + 1], Fz[Wz++] = zz[tz + 2], Fz[Wz++] = zz[tz + 2], Fz[Wz++] = zz[tz];
          this._linesIndexBuffer = tz.createIndexBuffer(Fz), this._linesIndexCount = Fz.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(zz) {
        const tz = this.rC();
        return !!tz && zz.intersectsBox(tz.boundingBox)
      }
      intersects(zz, tz, sz, Fz, Wz) {
        const Xz = this.vD();
        if (!Xz) return null;
        let Oz = 3,
          oz = !1;
        switch (Xz.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Oz = 1, oz = !0
        }
        return 4 === Xz.fillMode ? sz.length ? this._intersectLines(zz, tz, sz, this._mesh.intersectionThreshold, Fz) : this._intersectUnIndexedLines(zz, tz, sz, this._mesh.intersectionThreshold, Fz) : !sz.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(zz, tz, sz, Fz, Wz) : this._intersectTriangles(zz, tz, sz, Oz, oz, Fz, Wz)
      }
      _intersectLines(zz, tz, sz, Fz, Wz) {
        let Oz = null;
        for (let oz = this.indexStart; oz < this.indexStart + this.indexCount; oz += 2) {
          const vz = tz[sz[oz]],
            Uz = tz[sz[oz + 1]],
            Kz = zz.intersectionSegment(vz, Uz, Fz);
          if (!(Kz < 0) && ((Wz || !Oz || Kz < Oz.distance) && (Oz = new Xz.d(null, null, Kz), Oz.faceId = oz / 2, Wz))) break
        }
        return Oz
      }
      _intersectUnIndexedLines(zz, tz, sz, Fz, Wz) {
        let Oz = null;
        for (let oz = this.verticesStart; oz < this.verticesStart + this.verticesCount; oz += 2) {
          const sz = tz[oz],
            vz = tz[oz + 1],
            Uz = zz.intersectionSegment(sz, vz, Fz);
          if (!(Uz < 0) && ((Wz || !Oz || Uz < Oz.distance) && (Oz = new Xz.d(null, null, Uz), Oz.faceId = oz / 2, Wz))) break
        }
        return Oz
      }
      _intersectTriangles(zz, tz, sz, Fz, Wz, Xz, Oz) {
        let oz = null,
          vz = -1;
        for (let Uz = this.indexStart; Uz < this.indexStart + this.indexCount - (3 - Fz); Uz += Fz) {
          vz++;
          const Fz = sz[Uz],
            Kz = sz[Uz + 1],
            uz = sz[Uz + 2];
          if (Wz && 4294967295 === uz) {
            Uz += 2;
            continue
          }
          const Nz = tz[Fz],
            bz = tz[Kz],
            wz = tz[uz];
          if (!Nz || !bz || !wz) continue;
          if (Oz && !Oz(Nz, bz, wz, zz, Fz, Kz, uz)) continue;
          const Dz = zz.intersectsTriangle(Nz, bz, wz);
          if (Dz) {
            if (Dz.distance < 0) continue;
            if ((Xz || !oz || Dz.distance < oz.distance) && (oz = Dz, oz.faceId = vz, Xz)) break
          }
        }
        return oz
      }
      _intersectUnIndexedTriangles(zz, tz, sz, Fz, Wz) {
        let Xz = null;
        for (let Oz = this.verticesStart; Oz < this.verticesStart + this.verticesCount; Oz += 3) {
          const sz = tz[Oz],
            oz = tz[Oz + 1],
            vz = tz[Oz + 2];
          if (Wz && !Wz(sz, oz, vz, zz, -1, -1, -1)) continue;
          const Uz = zz.intersectsTriangle(sz, oz, vz);
          if (Uz) {
            if (Uz.distance < 0) continue;
            if ((Fz || !Xz || Uz.distance < Xz.distance) && (Xz = Uz, Xz.faceId = Oz / 3, Fz)) break
          }
        }
        return Xz
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(zz, tz) {
        const sz = new Kz(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, zz, tz, !1);
        if (!this.IsGlobal) {
          const zz = this.rC();
          if (!zz) return sz;
          sz._boundingInfo = new Oz.d(zz.minimum, zz.maximum)
        }
        return sz
      }
      dispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.aJ().FD()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const tz = this._mesh.kY.indexOf(this);
        this._mesh.kY.splice(tz, 1), this.resetDrawCache(void 0, zz)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(zz, tz, sz, Fz, Wz) {
        let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Oz = Number.MAX_VALUE,
          oz = -Number.MAX_VALUE;
        const vz = (Wz || Fz).Qsz();
        for (let Uz = tz; Uz < tz + sz; Uz++) {
          const zz = vz[Uz];
          zz < Oz && (Oz = zz), zz > oz && (oz = zz)
        }
        return new Kz(zz, Oz, oz - Oz + 1, tz, sz, Fz, Wz, Xz)
      }
    }(Fz = Kz.prototype).projectToRef ?? (Fz.projectToRef = (0, Uz.g)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);