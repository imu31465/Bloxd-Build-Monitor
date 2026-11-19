export const id = 252;
export const ids = [252];
export const modules = {
  39467: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    class Ez {
      constructor(zz, uz, bz) {
        this.bu = zz, this.bv = uz, this.distance = bz, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39483: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(36528),
      nz = bz(36519),
      iz = bz(36526);
    class lz {
      constructor(zz, uz, bz) {
        this.vectors = (0, Ez.d)(8, nz.n.Zero), this.center = nz.n.Zero(), this.centerWorld = nz.n.Zero(), this.extendSize = nz.n.Zero(), this.extendSizeWorld = nz.n.Zero(), this.directions = (0, Ez.d)(3, nz.n.Zero), this.vectorsWorld = (0, Ez.d)(8, nz.n.Zero), this.minimumWorld = nz.n.Zero(), this.maximumWorld = nz.n.Zero(), this.minimum = nz.n.Zero(), this.maximum = nz.n.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(zz, uz, bz)
      }
      reConstruct(zz, uz, bz) {
        const Ez = zz.x,
          iz = zz.y,
          lz = zz.z,
          Mz = uz.x,
          tz = uz.y,
          Hz = uz.z,
          Oz = this.vectors;
        this.minimum.P_(Ez, iz, lz), this.maximum.P_(Mz, tz, Hz), Oz[0].P_(Ez, iz, lz), Oz[1].P_(Mz, tz, Hz), Oz[2].P_(Mz, iz, lz), Oz[3].P_(Ez, tz, lz), Oz[4].P_(Ez, iz, Hz), Oz[5].P_(Mz, tz, lz), Oz[6].P_(Ez, tz, Hz), Oz[7].P_(Mz, iz, Hz), uz.addToRef(zz, this.center).scaleInPlace(.5), uz.subtractToRef(zz, this.extendSize).scaleInPlace(.5), this._worldMatrix = bz || nz.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(zz) {
        const uz = lz._TmpVector3,
          bz = this.maximum.subtractToRef(this.minimum, uz[0]),
          Ez = bz.length();
        bz.normalizeFromLength(Ez);
        const nz = Ez * zz,
          iz = bz.scaleInPlace(.5 * nz),
          Mz = this.center.subtractToRef(iz, uz[1]),
          tz = this.center.addToRef(iz, uz[2]);
        return this.reConstruct(Mz, tz, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(zz) {
        const uz = this.minimumWorld,
          bz = this.maximumWorld,
          Ez = this.directions,
          iz = this.vectorsWorld,
          lz = this.vectors;
        if (zz.isIdentity()) {
          uz.euz(this.minimum), bz.euz(this.maximum);
          for (let zz = 0; zz < 8; ++zz) iz[zz].euz(lz[zz]);
          this.extendSizeWorld.euz(this.extendSize), this.centerWorld.euz(this.center)
        } else {
          uz.Vk(Number.MAX_VALUE), bz.Vk(-Number.MAX_VALUE);
          for (let Ez = 0; Ez < 8; ++Ez) {
            const Mz = iz[Ez];
            nz.n.TransformCoordinatesToRef(lz[Ez], zz, Mz), uz.minimizeInPlace(Mz), bz.maximizeInPlace(Mz)
          }
          bz.subtractToRef(uz, this.extendSizeWorld).scaleInPlace(.5), bz.addToRef(uz, this.centerWorld).scaleInPlace(.5)
        }
        nz.n.FromArrayToRef(zz.m, 0, Ez[0]), nz.n.FromArrayToRef(zz.m, 4, Ez[1]), nz.n.FromArrayToRef(zz.m, 8, Ez[2]), this._worldMatrix = zz
      }
      isInFrustum(zz) {
        return lz.IsInFrustum(this.vectorsWorld, zz)
      }
      isCompletelyInFrustum(zz) {
        return lz.IsCompletelyInFrustum(this.vectorsWorld, zz)
      }
      intersectsPoint(zz) {
        const uz = this.minimumWorld,
          bz = this.maximumWorld,
          Ez = uz.x,
          nz = uz.y,
          lz = uz.z,
          Mz = bz.x,
          tz = bz.y,
          Hz = bz.z,
          Oz = zz.x,
          pz = zz.y,
          dz = zz.z,
          Fz = -iz.b;
        return !(Mz - Oz < Fz || Fz > Oz - Ez) && (!(tz - pz < Fz || Fz > pz - nz) && !(Hz - dz < Fz || Fz > dz - lz))
      }
      intersectsSphere(zz) {
        return lz.IntersectsSphere(this.minimumWorld, this.maximumWorld, zz.centerWorld, zz.radiusWorld)
      }
      intersectsMinMax(zz, uz) {
        const bz = this.minimumWorld,
          Ez = this.maximumWorld,
          nz = bz.x,
          iz = bz.y,
          lz = bz.z,
          Mz = Ez.x,
          tz = Ez.y,
          Hz = Ez.z,
          Oz = zz.x,
          pz = zz.y,
          dz = zz.z,
          Fz = uz.x,
          Zz = uz.y,
          Rz = uz.z;
        return !(Mz < Oz || nz > Fz) && (!(tz < pz || iz > Zz) && !(Hz < dz || lz > Rz))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(zz, uz) {
        return zz.intersectsMinMax(uz.minimumWorld, uz.maximumWorld)
      }
      static IntersectsSphere(zz, uz, bz, Ez) {
        const iz = lz._TmpVector3[0];
        nz.n.ClampToRef(bz, zz, uz, iz);
        return nz.n.DistanceSquared(bz, iz) <= Ez * Ez
      }
      static IsCompletelyInFrustum(zz, uz) {
        for (let bz = 0; bz < 6; ++bz) {
          const Ez = uz[bz];
          for (let uz = 0; uz < 8; ++uz)
            if (Ez.dotCoordinate(zz[uz]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(zz, uz) {
        for (let bz = 0; bz < 6; ++bz) {
          let Ez = !0;
          const nz = uz[bz];
          for (let uz = 0; uz < 8; ++uz)
            if (nz.dotCoordinate(zz[uz]) >= 0) {
              Ez = !1;
              break
            } if (Ez) return !1
        }
        return !0
      }
    }
    lz._TmpVector3 = (0, Ez.d)(3, nz.n.Zero)
  },
  39474: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => pz
    });
    var Ez = bz(36528),
      nz = bz(36519),
      iz = bz(39483);
    class lz {
      constructor(zz, uz, bz) {
        this.center = nz.n.Zero(), this.centerWorld = nz.n.Zero(), this.minimum = nz.n.Zero(), this.maximum = nz.n.Zero(), this.reConstruct(zz, uz, bz)
      }
      reConstruct(zz, uz, bz) {
        this.minimum.euz(zz), this.maximum.euz(uz);
        const Ez = nz.n.Distance(zz, uz);
        uz.addToRef(zz, this.center).scaleInPlace(.5), this.radius = .5 * Ez, this._update(bz || nz.d.IdentityReadOnly)
      }
      scale(zz) {
        const uz = lz._TmpVector3,
          bz = this.maximum.subtractToRef(this.minimum, uz[0]),
          Ez = bz.length();
        bz.normalizeFromLength(Ez);
        const nz = Ez * zz,
          iz = bz.scaleInPlace(.5 * nz),
          Mz = this.center.subtractToRef(iz, uz[1]),
          tz = this.center.addToRef(iz, uz[2]);
        return this.reConstruct(Mz, tz, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(zz) {
        if (zz.isIdentity()) this.centerWorld.euz(this.center), this.radiusWorld = this.radius;
        else {
          nz.n.TransformCoordinatesToRef(this.center, zz, this.centerWorld);
          const uz = lz._TmpVector3[0];
          nz.n.TransformNormalFromFloatsToRef(1, 1, 1, zz, uz), this.radiusWorld = Math.max(Math.abs(uz.x), Math.abs(uz.y), Math.abs(uz.z)) * this.radius
        }
      }
      isInFrustum(zz) {
        const uz = this.centerWorld,
          bz = this.radiusWorld;
        for (let Ez = 0; Ez < 6; Ez++)
          if (zz[Ez].dotCoordinate(uz) <= -bz) return !1;
        return !0
      }
      isCenterInFrustum(zz) {
        const uz = this.centerWorld;
        for (let bz = 0; bz < 6; bz++)
          if (zz[bz].dotCoordinate(uz) < 0) return !1;
        return !0
      }
      intersectsPoint(zz) {
        const uz = nz.n.DistanceSquared(this.centerWorld, zz);
        return !(this.radiusWorld * this.radiusWorld < uz)
      }
      static Intersects(zz, uz) {
        const bz = nz.n.DistanceSquared(zz.centerWorld, uz.centerWorld),
          Ez = zz.radiusWorld + uz.radiusWorld;
        return !(Ez * Ez < bz)
      }
      static CreateFromCenterAndRadius(zz, uz, bz) {
        this._TmpVector3[0].euz(zz), this._TmpVector3[1].P_(0, 0, uz), this._TmpVector3[2].euz(zz), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].Qbz(this._TmpVector3[1]);
        const Ez = new lz(this._TmpVector3[0], this._TmpVector3[2]);
        return Ez._worldMatrix = bz || nz.d.Identity(), Ez
      }
    }
    lz._TmpVector3 = (0, Ez.d)(3, nz.n.Zero);
    const Mz = {
        min: 0,
        max: 0
      },
      tz = {
        min: 0,
        max: 0
      },
      Hz = (zz, uz, bz) => {
        const Ez = nz.n.Dot(uz.centerWorld, zz),
          iz = Math.abs(nz.n.Dot(uz.directions[0], zz)) * uz.extendSize.x + Math.abs(nz.n.Dot(uz.directions[1], zz)) * uz.extendSize.y + Math.abs(nz.n.Dot(uz.directions[2], zz)) * uz.extendSize.z;
        bz.min = Ez - iz, bz.max = Ez + iz
      },
      Oz = (zz, uz, bz) => (Hz(zz, uz, Mz), Hz(zz, bz, tz), !(Mz.min > tz.max || tz.min > Mz.max));
    class pz {
      constructor(zz, uz, bz) {
        this._isLocked = !1, this.boundingBox = new iz.e(zz, uz, bz), this.Ibz = new lz(zz, uz, bz)
      }
      reConstruct(zz, uz, bz) {
        this.boundingBox.reConstruct(zz, uz, bz), this.Ibz.reConstruct(zz, uz, bz)
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
        this._isLocked || (this.boundingBox._update(zz), this.Ibz._update(zz))
      }
      centerOn(zz, uz) {
        const bz = pz._TmpVector3[0].euz(zz).Qbz(uz),
          Ez = pz._TmpVector3[1].euz(zz).addInPlace(uz);
        return this.boundingBox.reConstruct(bz, Ez, this.boundingBox.getWorldMatrix()), this.Ibz.reConstruct(bz, Ez, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(zz) {
        const uz = nz.n.Minimize(this.minimum, zz),
          bz = nz.n.Maximize(this.maximum, zz);
        return this.reConstruct(uz, bz, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(zz) {
        const uz = nz.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(uz);
        const bz = nz.l.ER[0];
        return nz.n.TransformCoordinatesToRef(zz.boundingBox.minimumWorld, uz, bz), this.encapsulate(bz), nz.n.TransformCoordinatesToRef(zz.boundingBox.maximumWorld, uz, bz), this.encapsulate(bz), this
      }
      scale(zz) {
        return this.boundingBox.scale(zz), this.Ibz.scale(zz), this
      }
      isInFrustum(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === uz || 3 === uz) && this.Ibz.isCenterInFrustum(zz)) return !0;
        if (!this.Ibz.isInFrustum(zz)) return !1;
        return !(1 !== uz && 3 !== uz) || this.boundingBox.isInFrustum(zz)
      }
      get diagonalLength() {
        const zz = this.boundingBox;
        return zz.maximumWorld.subtractToRef(zz.minimumWorld, pz._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(zz) {
        return this.boundingBox.isCompletelyInFrustum(zz)
      }
      _checkCollision(zz) {
        return zz._canDoCollision(this.Ibz.centerWorld, this.Ibz.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(zz) {
        return !!this.Ibz.centerWorld && (!!this.Ibz.intersectsPoint(zz) && !!this.boundingBox.intersectsPoint(zz))
      }
      intersects(zz, uz) {
        if (!lz.Intersects(this.Ibz, zz.Ibz)) return !1;
        if (!iz.e.Intersects(this.boundingBox, zz.boundingBox)) return !1;
        if (!uz) return !0;
        const bz = this.boundingBox,
          Ez = zz.boundingBox;
        return !!Oz(bz.directions[0], bz, Ez) && (!!Oz(bz.directions[1], bz, Ez) && (!!Oz(bz.directions[2], bz, Ez) && (!!Oz(Ez.directions[0], bz, Ez) && (!!Oz(Ez.directions[1], bz, Ez) && (!!Oz(Ez.directions[2], bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[0], Ez.directions[0]), bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[0], Ez.directions[1]), bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[0], Ez.directions[2]), bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[1], Ez.directions[0]), bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[1], Ez.directions[1]), bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[1], Ez.directions[2]), bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[2], Ez.directions[0]), bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[2], Ez.directions[1]), bz, Ez) && !!Oz(nz.n.Cross(bz.directions[2], Ez.directions[2]), bz, Ez))))))))))))))
      }
    }
    pz._TmpVector3 = (0, Ez.d)(2, nz.n.Zero)
  },
  39511: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => tz,
      g: () => Mz,
      i: () => lz
    });
    var Ez = bz(39311),
      nz = bz(36519);

    function iz(zz) {
      -1 === zz.indexOf("vClipPlane") && zz.push("vClipPlane"), -1 === zz.indexOf("vClipPlane2") && zz.push("vClipPlane2"), -1 === zz.indexOf("vClipPlane3") && zz.push("vClipPlane3"), -1 === zz.indexOf("vClipPlane4") && zz.push("vClipPlane4"), -1 === zz.indexOf("vClipPlane5") && zz.push("vClipPlane5"), -1 === zz.indexOf("vClipPlane6") && zz.push("vClipPlane6")
    }

    function lz(zz, uz, bz) {
      const Ez = !!(zz.clipPlane ?? uz.clipPlane),
        nz = !!(zz.clipPlane2 ?? uz.clipPlane2),
        iz = !!(zz.clipPlane3 ?? uz.clipPlane3),
        lz = !!(zz.clipPlane4 ?? uz.clipPlane4),
        Mz = !!(zz.clipPlane5 ?? uz.clipPlane5),
        tz = !!(zz.clipPlane6 ?? uz.clipPlane6);
      Ez && bz.push("#define CLIPPLANE"), nz && bz.push("#define CLIPPLANE2"), iz && bz.push("#define CLIPPLANE3"), lz && bz.push("#define CLIPPLANE4"), Mz && bz.push("#define CLIPPLANE5"), tz && bz.push("#define CLIPPLANE6")
    }

    function Mz(zz, uz, bz) {
      let Ez = !1;
      const nz = !!(zz.clipPlane ?? uz.clipPlane),
        iz = !!(zz.clipPlane2 ?? uz.clipPlane2),
        lz = !!(zz.clipPlane3 ?? uz.clipPlane3),
        Mz = !!(zz.clipPlane4 ?? uz.clipPlane4),
        tz = !!(zz.clipPlane5 ?? uz.clipPlane5),
        Hz = !!(zz.clipPlane6 ?? uz.clipPlane6);
      return bz.CLIPPLANE !== nz && (bz.CLIPPLANE = nz, Ez = !0), bz.CLIPPLANE2 !== iz && (bz.CLIPPLANE2 = iz, Ez = !0), bz.CLIPPLANE3 !== lz && (bz.CLIPPLANE3 = lz, Ez = !0), bz.CLIPPLANE4 !== Mz && (bz.CLIPPLANE4 = Mz, Ez = !0), bz.CLIPPLANE5 !== tz && (bz.CLIPPLANE5 = tz, Ez = !0), bz.CLIPPLANE6 !== Hz && (bz.CLIPPLANE6 = Hz, Ez = !0), Ez
    }

    function tz(zz, uz, bz) {
      let Ez = uz.clipPlane ?? bz.clipPlane;
      Hz(zz, "vClipPlane", Ez), Ez = uz.clipPlane2 ?? bz.clipPlane2, Hz(zz, "vClipPlane2", Ez), Ez = uz.clipPlane3 ?? bz.clipPlane3, Hz(zz, "vClipPlane3", Ez), Ez = uz.clipPlane4 ?? bz.clipPlane4, Hz(zz, "vClipPlane4", Ez), Ez = uz.clipPlane5 ?? bz.clipPlane5, Hz(zz, "vClipPlane5", Ez), Ez = uz.clipPlane6 ?? bz.clipPlane6, Hz(zz, "vClipPlane6", Ez)
    }

    function Hz(zz, uz, bz) {
      if (bz) {
        const iz = Ez.d.XT()?.floatingOriginOffset || nz.n.ZeroReadOnly;
        zz.setFloat4(uz, bz.normal.x, bz.normal.y, bz.normal.z, bz.d + nz.n.Dot(bz.normal, iz))
      }
    }
  },
  39528: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    class Ez {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(zz, uz) {
        this._defines[zz] || (zz < this._currentRank && (this._currentRank = zz), zz > this._maxRank && (this._maxRank = zz), this._defines[zz] = new Array), this._defines[zz].push(uz)
      }
      addCPUSkinningFallback(zz, uz) {
        this._mesh = uz, zz < this._currentRank && (this._currentRank = zz), zz > this._maxRank && (this._maxRank = zz)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(zz, uz) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, zz = zz.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), uz._bonesComputationForcedToCPU = !0;
          const bz = this._mesh.XT();
          for (let zz = 0; zz < bz.meshes.length; zz++) {
            const Ez = bz.meshes[zz];
            if (Ez.material) {
              if (Ez.computeBonesUsingShaders && 0 !== Ez.numBoneInfluencers)
                if (Ez.material.getEffect() === uz) Ez.computeBonesUsingShaders = !1;
                else if (Ez.hN)
                for (const zz of Ez.hN) {
                  if (zz.effect === uz) {
                    Ez.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Ez.computeBonesUsingShaders && Ez.numBoneInfluencers > 0 && (Ez.computeBonesUsingShaders = !1)
          }
        } else {
          const uz = this._defines[this._currentRank];
          if (uz)
            for (let bz = 0; bz < uz.length; bz++) zz = zz.replace("#define " + uz[bz], "");
          this._currentRank++
        }
        return zz
      }
    }
  },
  39451: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Xz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(39258),
      lz = bz(36547),
      Mz = bz(36543),
      tz = bz(39459),
      Hz = bz(39291),
      Oz = bz(38060),
      pz = bz(37239),
      dz = bz(39497),
      Fz = bz(39182);
    let Zz = (() => {
      var zz;
      let uz, bz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Zz, Rz, Kz = [];
      return zz = class {
        constructor() {
          this._func = (0, Ez.j)(this, Kz), this.reset()
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
          Fz.e.Clone((() => zz), this)
        }
        serialize() {
          return Fz.e.Serialize(this)
        }
        parse(zz, uz, bz) {
          Fz.e.Parse((() => this), zz, uz, bz)
        }
      }, (() => {
        const Fz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], lz = [(0, nz.G)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.G)()], dz = [(0, nz.G)()], Zz = [(0, nz.G)()], Rz = [(0, nz.G)()], (0, Ez.h)(zz, null, uz, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: zz => "func" in zz,
            get: zz => zz.func
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, bz, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: zz => "backFunc" in zz,
            get: zz => zz.backFunc
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, iz, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: zz => "funcRef" in zz,
            get: zz => zz.funcRef
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, lz, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: zz => "funcMask" in zz,
            get: zz => zz.funcMask
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, Mz, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: zz => "opStencilFail" in zz,
            get: zz => zz.opStencilFail
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, tz, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: zz => "opDepthFail" in zz,
            get: zz => zz.opDepthFail
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, Hz, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: zz => "opStencilDepthPass" in zz,
            get: zz => zz.opStencilDepthPass
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, Oz, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: zz => "backOpStencilFail" in zz,
            get: zz => zz.backOpStencilFail
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, pz, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: zz => "backOpDepthFail" in zz,
            get: zz => zz.backOpDepthFail
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, dz, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: zz => "backOpStencilDepthPass" in zz,
            get: zz => zz.backOpStencilDepthPass
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, Zz, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: zz => "mask" in zz,
            get: zz => zz.mask
          },
          metadata: Fz
        }, null, Kz), (0, Ez.h)(zz, null, Rz, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "enabled" in zz,
            get: zz => zz.enabled
          },
          metadata: Fz
        }, null, Kz), Fz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fz
        })
      })(), zz
    })();
    var Rz = bz(39505),
      Kz = bz(39103),
      wz = bz(39061);
    let Xz = (() => {
      var zz;
      let uz, bz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz, az, Vz, mz, qz, hz, Uz, cz, gz, Sz, yz, Dz, Qz, Wz = [],
        ez = [],
        jz = [],
        Iz = [],
        Bz = [],
        Cz = [],
        Yz = [],
        kz = [],
        zu = [],
        uu = [],
        bu = [],
        Eu = [],
        nu = [],
        iu = [],
        lu = [],
        Mu = [],
        tu = [],
        Hu = [],
        Ou = [],
        pu = [],
        du = [],
        Fu = [],
        Zu = [],
        Ru = [],
        Ku = [],
        wu = [],
        Xu = [],
        fu = [],
        su = [],
        ru = [],
        ou = [],
        Nu = [],
        vu = [],
        xu = [],
        Ju = [],
        Au = [],
        Tu = [],
        Lu = [],
        Pu = [],
        Gu = [],
        au = [],
        Vu = [],
        mu = [],
        qu = [],
        hu = [],
        Uu = [],
        cu = [],
        gu = [],
        Su = [],
        yu = [],
        Du = [];
      return zz = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(uz) {
          this._useVertexPulling !== uz && (this._useVertexPulling = uz, this.zuz(zz.MiscDirtyFlag))
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
        set alpha(uz) {
          if (this._alpha === uz) return;
          const bz = this._alpha;
          this._alpha = uz, 1 !== bz && 1 !== uz || this.zuz(zz.MiscDirtyFlag + zz.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(uz) {
          this._backFaceCulling !== uz && (this._backFaceCulling = uz, this.zuz(zz.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(uz) {
          const bz = Math.max(0, Math.min(0 | uz, 4));
          this._textureRepetitionMode !== bz && (this._textureRepetitionMode = bz, this.zuz(zz.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(uz) {
          this._cullBackFaces !== uz && (this._cullBackFaces = uz, this.zuz(zz.TextureDirtyFlag))
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
          this._onDisposeObserver && this.aT.remove(this._onDisposeObserver), this._onDisposeObserver = this.aT.add(zz)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new lz.b), this._onBindObservable
        }
        set onBind(zz) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(zz)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new lz.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new lz.b), this._onEffectCreatedObservable
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
        setAlphaMode(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[bz] !== uz && (this._alphaMode[bz] = uz, this.zuz(zz.TextureDirtyFlag))
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
        set fogEnabled(uz) {
          this._fogEnabled !== uz && (this._fogEnabled = uz, this.zuz(zz.MiscDirtyFlag))
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
        set wireframe(uz) {
          this.fillMode = uz ? zz.WireFrameFillMode : zz.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case zz.PointFillMode:
            case zz.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(uz) {
          this.fillMode = uz ? zz.PointFillMode : zz.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(uz) {
          this._fillMode !== uz && (this._fillMode = uz, this.zuz(zz.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(zz) {
          const uz = this.XT().uR().getCaps().fragmentDepthSupported;
          zz && !uz && Oz.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = zz && uz, this._markAllSubMeshesAsMiscDirty()
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
        constructor(uz, bz, nz) {
          let tz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Ez.j)(this, Wz), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Ez.j)(this, ez, void 0), this.uniqueId = ((0, Ez.j)(this, jz), (0, Ez.j)(this, Iz, void 0)), this._loadedUniqueId = (0, Ez.j)(this, Bz), this.name = (0, Ez.j)(this, Cz, void 0), this.metadata = ((0, Ez.j)(this, Yz), (0, Ez.j)(this, kz, null)), this._internalMetadata = (0, Ez.j)(this, zu), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Ez.j)(this, uu, !1), this.checkReadyOnlyOnce = ((0, Ez.j)(this, bu), (0, Ez.j)(this, Eu, !1)), this.state = ((0, Ez.j)(this, nu), (0, Ez.j)(this, iu, "")), this._alpha = ((0, Ez.j)(this, lu), (0, Ez.j)(this, Mu, 1)), this.inspectableCustomProperties = (0, Ez.j)(this, tu), this._backFaceCulling = (0, Ez.j)(this, Hu, !0), this._textureRepetitionMode = ((0, Ez.j)(this, Ou), (0, Ez.j)(this, pu, 0)), this.textureRepetitionHexTilingParams = ((0, Ez.j)(this, du), (0, Ez.j)(this, Fu, [1, .6, 7, .5])), this._cullBackFaces = ((0, Ez.j)(this, Zu), (0, Ez.j)(this, Ru, !0)), this._blockDirtyMechanism = ((0, Ez.j)(this, Ku), !1), this.sideOrientation = (0, Ez.j)(this, wu, null), this.onCompiled = ((0, Ez.j)(this, Xu), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.aT = new lz.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Ez.j)(this, fu, [2]), this._needDepthPrePass = ((0, Ez.j)(this, su), (0, Ez.j)(this, ru, !1)), this.disableDepthWrite = ((0, Ez.j)(this, ou), (0, Ez.j)(this, Nu, !1)), this.disableColorWrite = ((0, Ez.j)(this, vu), (0, Ez.j)(this, xu, !1)), this.forceDepthWrite = ((0, Ez.j)(this, Ju), (0, Ez.j)(this, Au, !1)), this.depthFunction = ((0, Ez.j)(this, Tu), (0, Ez.j)(this, Lu, 0)), this.separateCullingPass = ((0, Ez.j)(this, Pu), (0, Ez.j)(this, Gu, !1)), this._fogEnabled = ((0, Ez.j)(this, au), (0, Ez.j)(this, Vu, !0)), this.pointSize = ((0, Ez.j)(this, mu), (0, Ez.j)(this, qu, 1)), this.zOffset = ((0, Ez.j)(this, hu), (0, Ez.j)(this, Uu, 0)), this.zOffsetUnits = ((0, Ez.j)(this, cu), (0, Ez.j)(this, gu, 0)), this.clipPlane = (0, Ez.j)(this, Su), this.stencil = new Zz, this._isVertexOutputInvariant = (0, Ez.j)(this, yu, zz.ForceVertexOutputInvariant), this._materialContext = (0, Ez.j)(this, Du), this._useUBO = !1, this._fillMode = zz.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = uz;
          const Oz = bz || Mz.d.LastCreatedScene;
          Oz && (this._scene = Oz, this._dirtyCallbacks = {}, this._forceGLSL = tz, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = uz || iz.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.uR().createMaterialContext(), this._drawWrapper = new dz.c(this._scene.uR(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Hz.b(this._scene.uR(), void 0, void 0, uz), this._useUBO = this.XT().uR().supportsUniformBuffers, this._createUniformBuffer(), nz || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), zz.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const zz = this.XT().uR();
          this._uniformBuffer?.dispose(), zz.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Hz.b(zz, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Hz.b(this._scene.uR(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(zz, uz) {
          return !0
        }
        isReadyForSubMesh(zz, uz, bz) {
          const Ez = uz.materialDefines;
          return !!Ez && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ez, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        XT() {
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
          let uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const bz = this.XT().meshes;
          for (const zz of bz)
            if (zz.hN)
              for (const bz of zz.hN)
                if (bz.lR() === this)
                  for (const zz of bz._drawWrappers) zz && this._materialContext === zz.materialContext && (zz._wasPreviouslyReady = !1, zz._wasPreviouslyUsingInstances = null, zz._forceRebindOnNextCall = uz);
          uz && this.zuz(zz.AllDirtyFlag)
        }
        _preBind(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ez = this._scene.uR(),
            nz = (null == bz ? this.sideOrientation : bz) === zz.ClockWiseSideOrientation,
            iz = uz || this._getDrawWrapper();
          return (0, Kz.c)(iz) && iz.materialContext && (iz.materialContext.useVertexPulling = this.useVertexPulling), Ez.enableEffect(iz), Ez.setState(this.backFaceCulling, this.zOffset, !1, nz, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), nz
        }
        bind(zz, uz) {}
        buildUniformLayout() {
          const zz = this._uniformBuffer;
          this._eventInfo.ubo = zz, this._callbackPluginEventGeneric(8, this._eventInfo), zz.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(zz, uz, bz) {
          const Ez = bz._drawWrapper;
          this._eventInfo.subMesh = bz, this._callbackPluginEventBindForSubMesh(this._eventInfo), Ez._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(zz) {}
        bindView(zz) {
          this._useUBO ? this._needToBindSceneUbo = !0 : zz.setMatrix("view", this.XT().getViewMatrix())
        }
        bindViewProjection(zz) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (zz.setMatrix("viewProjection", this.XT().getTransformMatrix()), zz.setMatrix("projection", this.XT().getProjectionMatrix()), zz.setMatrix("inverseProjection", this.XT().getInverseProjectionMatrix()))
        }
        bindEyePosition(zz, uz) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(zz, uz)
        }
        _afterBind(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && uz && (this._needToBindSceneUbo = !1, (0, Rz.y)(uz, this.XT().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = zz ? zz.visibility : 1, this._onBindObservable && zz && this._onBindObservable.notifyObservers(zz), this.disableDepthWrite) {
            const zz = this._scene.uR();
            this._cachedDepthWriteState = zz.getDepthWrite(), zz.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const zz = this._scene.uR();
            this._cachedColorWriteState = zz.getColorWrite(), zz.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const zz = this._scene.uR();
            this._cachedDepthFunctionState = zz.getDepthFunction() || 0, zz.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.uR().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.uR().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.uR().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(uz, bz) {
          const Ez = {};
          if (this._serializePlugins(Ez), zz._ParsePlugins(Ez, uz, this._scene, bz), this.pluginManager)
            for (const zz of this.pluginManager._plugins) {
              const bz = uz.pluginManager.getPlugin(zz.name);
              bz && zz.copyTo(bz)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const zz = [];
            for (const uz in this.meshMap) {
              const bz = this.meshMap[uz];
              bz && zz.push(bz)
            }
            return zz
          }
          return this._scene.meshes.filter((zz => zz.material === this))
        }
        forceCompilation(zz, uz, bz, Ez) {
          const nz = {
              clipPlane: !1,
              useInstances: !1,
              ...bz
            },
            iz = this.XT(),
            lz = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Mz = () => {
            if (!this._scene || !this._scene.uR()) return;
            const bz = iz.clipPlane;
            if (nz.clipPlane && (iz.clipPlane = new pz.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let bz = !0,
                iz = null;
              if (zz.hN) {
                const uz = new tz.e(0, 0, 0, 0, 0, zz, void 0, !1, !1);
                uz.materialDefines && (uz.materialDefines._renderId = -1), this.isReadyForSubMesh(zz, uz, nz.useInstances) || (uz.effect && uz.effect.getCompilationError() && uz.effect.allFallbacksProcessed() ? iz = uz.effect.getCompilationError() : (bz = !1, setTimeout(Mz, 16)))
              }
              bz && (this.allowShaderHotSwapping = lz, iz && Ez && Ez(iz), uz && uz(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = lz, uz && uz(this)) : setTimeout(Mz, 16);
            nz.clipPlane && (iz.clipPlane = bz)
          };
          Mz()
        }
        async forceCompilationAsync(zz, uz) {
          return await new Promise(((bz, Ez) => {
            this.forceCompilation(zz, (() => {
              bz()
            }), uz, (zz => {
              Ez(zz)
            }))
          }))
        }
        zuz(uz) {
          this.XT().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (zz._DirtyCallbackArray.length = 0, uz & zz.ImageProcessingDirtyFlag && zz._DirtyCallbackArray.push(zz._ImageProcessingDirtyCallBack), uz & zz.TextureDirtyFlag && zz._DirtyCallbackArray.push(zz._TextureDirtyCallBack), uz & zz.LightDirtyFlag && zz._DirtyCallbackArray.push(zz._LightsDirtyCallBack), uz & zz.FresnelDirtyFlag && zz._DirtyCallbackArray.push(zz._FresnelDirtyCallBack), uz & zz.AttributesDirtyFlag && zz._DirtyCallbackArray.push(zz._AttributeDirtyCallBack), uz & zz.MiscDirtyFlag && zz._DirtyCallbackArray.push(zz._MiscDirtyCallBack), uz & zz.PrePassDirtyFlag && zz._DirtyCallbackArray.push(zz._PrePassDirtyCallBack), zz._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(zz._RunDirtyCallBacks), this.XT().resetCachedMaterial())
        }
        resetDrawCache() {
          const zz = this.XT().meshes;
          for (const uz of zz)
            if (uz.hN)
              for (const zz of uz.hN) zz.lR() === this && zz.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(zz) {
          const uz = this.XT();
          if (uz.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const bz = uz.meshes;
          for (const Ez of bz)
            if (Ez.hN)
              for (const bz of Ez.hN) {
                if ((bz.lR() || (uz._hasDefaultMaterial ? uz.defaultMaterial : null)) === this)
                  for (const uz of bz._drawWrappers) uz && uz.defines && uz.defines.markAllAsDirty && this._materialContext === uz.materialContext && zz(uz.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.XT().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const zz = this.XT().enablePrePassRenderer();
          zz && zz.zuz()
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
            this.aT.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(zz)
            }))
          }
        }
        setPrePassRenderer(zz) {
          return !1
        }
        dispose(zz, uz, bz) {
          const Ez = this.XT();
          if (Ez.stopAnimation(this), Ez.freeProcessedMaterials(), Ez.removeMaterial(this), this._eventInfo.forceDisposeTextures = uz, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const zz = this._parentContainer.materials.indexOf(this);
            zz > -1 && this._parentContainer.materials.splice(zz, 1), this._parentContainer = null
          }
          if (!0 !== bz)
            if (this.meshMap)
              for (const nz in this.meshMap) {
                const zz = this.meshMap[nz];
                this._disposeMeshResources(zz)
              } else {
                const zz = Ez.meshes;
                for (const uz of zz) this._disposeMeshResources(uz)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.aT.notifyObservers(this), this.aT.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(zz) {
          if (!zz) return;
          const uz = zz.geometry,
            bz = zz._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (zz.hN && bz)
              for (const Ez of zz.hN) {
                const zz = Ez._drawWrappers;
                for (let nz = 0; nz < zz.length; nz++) {
                  const iz = zz[nz]?.effect;
                  if (!iz) continue;
                  bz[nz] === this && (uz?._releaseVertexArrayObject(iz), Ez._removeDrawWrapper(nz, !0, !0))
                }
              }
          } else uz?._releaseVertexArrayObject(this._drawWrapper.effect);
          zz.material !== this || zz.wEz || (zz.material = null)
        }
        serialize() {
          const zz = Fz.e.Serialize(this);
          return zz.stencil = this.stencil.serialize(), zz.uniqueId = this.uniqueId, this._serializePlugins(zz), zz
        }
        _serializePlugins(zz) {
          if (zz.plugins = {}, this.pluginManager)
            for (const uz of this.pluginManager._plugins) uz.doNotSerialize || (zz.plugins[uz.getClassName()] = uz.serialize())
        }
        static ParseAlphaMode(zz, uz) {
          void 0 !== zz._alphaMode ? uz._alphaMode = Array.isArray(zz._alphaMode) ? [...zz._alphaMode] : [zz._alphaMode] : void 0 !== zz.alphaMode ? uz._alphaMode = Array.isArray(zz.alphaMode) ? [...zz.alphaMode] : [zz.alphaMode] : uz._alphaMode = [2]
        }
        static Parse(uz, bz, Ez) {
          if (uz.customType) {
            if ("BABYLON.PBRMaterial" === uz.customType && uz.overloadedAlbedo && (uz.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Oz.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else uz.customType = "BABYLON.StandardMaterial";
          const nz = iz.h.Instantiate(uz.customType).Parse(uz, bz, Ez);
          return nz._loadedUniqueId = uz.uniqueId, zz.ParseAlphaMode(uz, nz), nz
        }
        static _ParsePlugins(zz, uz, bz, Ez) {
          if (zz.plugins)
            for (const nz in zz.plugins) {
              const lz = zz.plugins[nz];
              let Mz = uz.pluginManager?.getPlugin(lz.name);
              if (!Mz) {
                const zz = iz.h.Instantiate("BABYLON." + nz);
                zz && (Mz = new zz(uz))
              }
              Mz?.parse(lz, bz, Ez)
            }
        }
      }, (() => {
        const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], wz = [(0, nz.G)()], Xz = [(0, nz.G)()], fz = [(0, nz.G)()], sz = [(0, nz.G)()], rz = [(0, nz.G)()], oz = [(0, nz.G)("alpha")], Nz = [(0, nz.G)("backFaceCulling")], vz = [(0, nz.G)("textureRepetitionMode")], xz = [(0, nz.G)("textureRepetitionHexTilingParams")], Jz = [(0, nz.G)("cullBackFaces")], Az = [(0, nz.G)()], Tz = [(0, nz.G)()], Lz = [(0, nz.G)()], Pz = [(0, nz.G)()], Gz = [(0, nz.G)()], az = [(0, nz.G)()], Vz = [(0, nz.G)()], mz = [(0, nz.G)()], qz = [(0, nz.G)("fogEnabled")], hz = [(0, nz.G)()], Uz = [(0, nz.G)()], cz = [(0, nz.G)()], gz = [(0, nz.G)()], Sz = [(0, nz.G)()], yz = [(0, nz.G)()], Dz = [(0, nz.G)()], Qz = [(0, nz.G)()], (0, Ez.h)(zz, null, gz, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: zz => "pointsCloud" in zz,
            get: zz => zz.pointsCloud
          },
          metadata: iz
        }, null, Wz), (0, Ez.h)(zz, null, Sz, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "fillMode" in zz,
            get: zz => zz.fillMode
          },
          metadata: iz
        }, null, Wz), (0, Ez.h)(zz, null, yz, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: zz => "useLogarithmicDepth" in zz,
            get: zz => zz.useLogarithmicDepth
          },
          metadata: iz
        }, null, Wz), (0, Ez.h)(zz, null, Qz, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "transparencyMode" in zz,
            get: zz => zz.transparencyMode
          },
          metadata: iz
        }, null, Wz), (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: zz => "id" in zz,
            get: zz => zz.id,
            set: (zz, uz) => {
              zz.id = uz
            }
          },
          metadata: iz
        }, ez, jz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: zz => "uniqueId" in zz,
            get: zz => zz.uniqueId,
            set: (zz, uz) => {
              zz.uniqueId = uz
            }
          },
          metadata: iz
        }, Iz, Bz), (0, Ez.h)(null, null, wz, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: zz => "name" in zz,
            get: zz => zz.name,
            set: (zz, uz) => {
              zz.name = uz
            }
          },
          metadata: iz
        }, Cz, Yz), (0, Ez.h)(null, null, Xz, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: zz => "metadata" in zz,
            get: zz => zz.metadata,
            set: (zz, uz) => {
              zz.metadata = uz
            }
          },
          metadata: iz
        }, kz, zu), (0, Ez.h)(null, null, fz, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: zz => "checkReadyOnEveryCall" in zz,
            get: zz => zz.checkReadyOnEveryCall,
            set: (zz, uz) => {
              zz.checkReadyOnEveryCall = uz
            }
          },
          metadata: iz
        }, uu, bu), (0, Ez.h)(null, null, sz, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: zz => "checkReadyOnlyOnce" in zz,
            get: zz => zz.checkReadyOnlyOnce,
            set: (zz, uz) => {
              zz.checkReadyOnlyOnce = uz
            }
          },
          metadata: iz
        }, Eu, nu), (0, Ez.h)(null, null, rz, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: zz => "state" in zz,
            get: zz => zz.state,
            set: (zz, uz) => {
              zz.state = uz
            }
          },
          metadata: iz
        }, iu, lu), (0, Ez.h)(null, null, oz, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "_alpha" in zz,
            get: zz => zz._alpha,
            set: (zz, uz) => {
              zz._alpha = uz
            }
          },
          metadata: iz
        }, Mu, tu), (0, Ez.h)(null, null, Nz, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: zz => "_backFaceCulling" in zz,
            get: zz => zz._backFaceCulling,
            set: (zz, uz) => {
              zz._backFaceCulling = uz
            }
          },
          metadata: iz
        }, Hu, Ou), (0, Ez.h)(null, null, vz, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_textureRepetitionMode" in zz,
            get: zz => zz._textureRepetitionMode,
            set: (zz, uz) => {
              zz._textureRepetitionMode = uz
            }
          },
          metadata: iz
        }, pu, du), (0, Ez.h)(null, null, xz, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: zz => "textureRepetitionHexTilingParams" in zz,
            get: zz => zz.textureRepetitionHexTilingParams,
            set: (zz, uz) => {
              zz.textureRepetitionHexTilingParams = uz
            }
          },
          metadata: iz
        }, Fu, Zu), (0, Ez.h)(null, null, Jz, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: zz => "_cullBackFaces" in zz,
            get: zz => zz._cullBackFaces,
            set: (zz, uz) => {
              zz._cullBackFaces = uz
            }
          },
          metadata: iz
        }, Ru, Ku), (0, Ez.h)(null, null, Az, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: zz => "sideOrientation" in zz,
            get: zz => zz.sideOrientation,
            set: (zz, uz) => {
              zz.sideOrientation = uz
            }
          },
          metadata: iz
        }, wu, Xu), (0, Ez.h)(null, null, Tz, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_alphaMode" in zz,
            get: zz => zz._alphaMode,
            set: (zz, uz) => {
              zz._alphaMode = uz
            }
          },
          metadata: iz
        }, fu, su), (0, Ez.h)(null, null, Lz, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: zz => "_needDepthPrePass" in zz,
            get: zz => zz._needDepthPrePass,
            set: (zz, uz) => {
              zz._needDepthPrePass = uz
            }
          },
          metadata: iz
        }, ru, ou), (0, Ez.h)(null, null, Pz, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: zz => "disableDepthWrite" in zz,
            get: zz => zz.disableDepthWrite,
            set: (zz, uz) => {
              zz.disableDepthWrite = uz
            }
          },
          metadata: iz
        }, Nu, vu), (0, Ez.h)(null, null, Gz, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: zz => "disableColorWrite" in zz,
            get: zz => zz.disableColorWrite,
            set: (zz, uz) => {
              zz.disableColorWrite = uz
            }
          },
          metadata: iz
        }, xu, Ju), (0, Ez.h)(null, null, az, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: zz => "forceDepthWrite" in zz,
            get: zz => zz.forceDepthWrite,
            set: (zz, uz) => {
              zz.forceDepthWrite = uz
            }
          },
          metadata: iz
        }, Au, Tu), (0, Ez.h)(null, null, Vz, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: zz => "depthFunction" in zz,
            get: zz => zz.depthFunction,
            set: (zz, uz) => {
              zz.depthFunction = uz
            }
          },
          metadata: iz
        }, Lu, Pu), (0, Ez.h)(null, null, mz, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: zz => "separateCullingPass" in zz,
            get: zz => zz.separateCullingPass,
            set: (zz, uz) => {
              zz.separateCullingPass = uz
            }
          },
          metadata: iz
        }, Gu, au), (0, Ez.h)(null, null, qz, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "_fogEnabled" in zz,
            get: zz => zz._fogEnabled,
            set: (zz, uz) => {
              zz._fogEnabled = uz
            }
          },
          metadata: iz
        }, Vu, mu), (0, Ez.h)(null, null, hz, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: zz => "pointSize" in zz,
            get: zz => zz.pointSize,
            set: (zz, uz) => {
              zz.pointSize = uz
            }
          },
          metadata: iz
        }, qu, hu), (0, Ez.h)(null, null, Uz, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: zz => "zOffset" in zz,
            get: zz => zz.zOffset,
            set: (zz, uz) => {
              zz.zOffset = uz
            }
          },
          metadata: iz
        }, Uu, cu), (0, Ez.h)(null, null, cz, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: zz => "zOffsetUnits" in zz,
            get: zz => zz.zOffsetUnits,
            set: (zz, uz) => {
              zz.zOffsetUnits = uz
            }
          },
          metadata: iz
        }, gu, Su), (0, Ez.h)(null, null, Dz, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: zz => "_isVertexOutputInvariant" in zz,
            get: zz => zz._isVertexOutputInvariant,
            set: (zz, uz) => {
              zz._isVertexOutputInvariant = uz
            }
          },
          metadata: iz
        }, yu, Du), iz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iz
        })
      })(), zz.TriangleFillMode = 0, zz.WireFrameFillMode = 1, zz.PointFillMode = 2, zz.PointListDrawMode = 3, zz.LineListDrawMode = 4, zz.LineLoopDrawMode = 5, zz.LineStripDrawMode = 6, zz.TriangleStripDrawMode = 7, zz.TriangleFanDrawMode = 8, zz.ClockWiseSideOrientation = 0, zz.CounterClockWiseSideOrientation = 1, zz.ImageProcessingDirtyFlag = 64, zz.TextureDirtyFlag = 1, zz.LightDirtyFlag = 2, zz.FresnelDirtyFlag = 4, zz.AttributesDirtyFlag = 8, zz.MiscDirtyFlag = 16, zz.PrePassDirtyFlag = 32, zz.AllDirtyFlag = 127, zz.MATERIAL_OPAQUE = 0, zz.MATERIAL_ALPHATEST = 1, zz.MATERIAL_ALPHABLEND = 2, zz.MATERIAL_ALPHATESTANDBLEND = 3, zz.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, zz.MATERIAL_NORMALBLENDMETHOD_RNM = 1, zz.LIGHTFALLOFF_PHYSICAL = 0, zz.LIGHTFALLOFF_GLTF = 1, zz.LIGHTFALLOFF_STANDARD = 2, zz.OnEventObservable = new lz.b, zz.ForceVertexOutputInvariant = !1, zz._AllDirtyCallBack = zz => zz.markAllAsDirty(), zz._ImageProcessingDirtyCallBack = zz => zz.markAsImageProcessingDirty(), zz._TextureDirtyCallBack = zz => zz.markAsTexturesDirty(), zz._FresnelDirtyCallBack = zz => zz.markAsFresnelDirty(), zz._MiscDirtyCallBack = zz => zz.markAsMiscDirty(), zz._PrePassDirtyCallBack = zz => zz.markAsPrePassDirty(), zz._LightsDirtyCallBack = zz => zz.markAsLightDirty(), zz._AttributeDirtyCallBack = zz => zz.markAsAttributesDirty(), zz._FresnelAndMiscDirtyCallBack = uz => {
        zz._FresnelDirtyCallBack(uz), zz._MiscDirtyCallBack(uz)
      }, zz._TextureAndMiscDirtyCallBack = uz => {
        zz._TextureDirtyCallBack(uz), zz._MiscDirtyCallBack(uz)
      }, zz._DirtyCallbackArray = [], zz._RunDirtyCallBacks = uz => {
        for (const bz of zz._DirtyCallbackArray) bz(uz)
      }, zz
    })();
    Object.getOwnPropertyDescriptor(Xz.prototype, "pluginManager") || Object.defineProperty(Xz.prototype, "pluginManager", (0, wz.f)("Material", "pluginManager"))
  },
  39513: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    var Ez = bz(39079);
    class nz {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(zz) {
        this._DiffuseTextureEnabled !== zz && (this._DiffuseTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(zz) {
        this._BaseWeightTextureEnabled !== zz && (this._BaseWeightTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(zz) {
        this._BaseDiffuseRoughnessTextureEnabled !== zz && (this._BaseDiffuseRoughnessTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(zz) {
        this._DetailTextureEnabled !== zz && (this._DetailTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(zz) {
        this._DecalMapEnabled !== zz && (this._DecalMapEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(zz) {
        this._AmbientTextureEnabled !== zz && (this._AmbientTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(zz) {
        this._OpacityTextureEnabled !== zz && (this._OpacityTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(zz) {
        this._ReflectionTextureEnabled !== zz && (this._ReflectionTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(zz) {
        this._EmissiveTextureEnabled !== zz && (this._EmissiveTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(zz) {
        this._SpecularTextureEnabled !== zz && (this._SpecularTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(zz) {
        this._BumpTextureEnabled !== zz && (this._BumpTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(zz) {
        this._LightmapTextureEnabled !== zz && (this._LightmapTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(zz) {
        this._RefractionTextureEnabled !== zz && (this._RefractionTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(zz) {
        this._ColorGradingTextureEnabled !== zz && (this._ColorGradingTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(zz) {
        this._FresnelEnabled !== zz && (this._FresnelEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(zz) {
        this._ClearCoatTextureEnabled !== zz && (this._ClearCoatTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(zz) {
        this._ClearCoatBumpTextureEnabled !== zz && (this._ClearCoatBumpTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(zz) {
        this._ClearCoatTintTextureEnabled !== zz && (this._ClearCoatTintTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(zz) {
        this._SheenTextureEnabled !== zz && (this._SheenTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(zz) {
        this._AnisotropicTextureEnabled !== zz && (this._AnisotropicTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(zz) {
        this._ThicknessTextureEnabled !== zz && (this._ThicknessTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(zz) {
        this._RefractionIntensityTextureEnabled !== zz && (this._RefractionIntensityTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(zz) {
        this._TranslucencyIntensityTextureEnabled !== zz && (this._TranslucencyIntensityTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(zz) {
        this._TranslucencyColorTextureEnabled !== zz && (this._TranslucencyColorTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(zz) {
        this._IridescenceTextureEnabled !== zz && (this._IridescenceTextureEnabled = zz, Ez.b.MarkAllMaterialsAsDirty(1))
      }
    }
    nz._DiffuseTextureEnabled = !0, nz._BaseWeightTextureEnabled = !0, nz._BaseDiffuseRoughnessTextureEnabled = !0, nz._DetailTextureEnabled = !0, nz._DecalMapEnabled = !0, nz._AmbientTextureEnabled = !0, nz._OpacityTextureEnabled = !0, nz._ReflectionTextureEnabled = !0, nz._EmissiveTextureEnabled = !0, nz._SpecularTextureEnabled = !0, nz._BumpTextureEnabled = !0, nz._LightmapTextureEnabled = !0, nz._RefractionTextureEnabled = !0, nz._ColorGradingTextureEnabled = !0, nz._FresnelEnabled = !0, nz._ClearCoatTextureEnabled = !0, nz._ClearCoatBumpTextureEnabled = !0, nz._ClearCoatTintTextureEnabled = !0, nz._SheenTextureEnabled = !0, nz._AnisotropicTextureEnabled = !0, nz._ThicknessTextureEnabled = !0, nz._RefractionIntensityTextureEnabled = !0, nz._TranslucencyIntensityTextureEnabled = !0, nz._TranslucencyColorTextureEnabled = !0, nz._IridescenceTextureEnabled = !0
  },
  39505: (zz, uz, bz) => {
    bz.d(uz, {
      $: () => az,
      B: () => sz,
      C: () => Lz,
      G: () => rz,
      I: () => Az,
      M: () => Tz,
      P: () => Fz,
      R: () => dz,
      T: () => Sz,
      W: () => qz,
      Z: () => Vz,
      d: () => Gz,
      db: () => fz,
      g: () => oz,
      hb: () => Pz,
      ib: () => yz,
      k: () => pz,
      kb: () => Dz,
      m: () => wz,
      mb: () => Qz,
      n: () => Xz,
      pb: () => Iz,
      q: () => Jz,
      sb: () => ez,
      t: () => tz,
      ub: () => jz,
      w: () => Rz,
      xb: () => Zz,
      y: () => Kz
    });
    var Ez = bz(38060),
      nz = bz(36543),
      iz = bz(39358),
      lz = bz(39511),
      Mz = bz(39513);

    function tz(zz, uz, bz) {
      if (!zz || zz.LOGARITHMICDEPTH || zz.indexOf && zz.indexOf("LOGARITHMICDEPTH") >= 0) {
        const zz = bz.activeCamera;
        1 === zz.mode && Ez.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), uz.setFloat("logarithmicDepthConstant", 2 / (Math.log(zz.maxZ + 1) / Math.LN2))
      }
    }
    const Hz = {
        r: 0,
        g: 0,
        b: 0
      },
      Oz = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function pz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      bz && zz.fogEnabled && (!uz || uz.applyFog) && 0 !== zz.fogMode && (bz.setFloat4("vFogInfos", zz.fogMode, zz.fogStart, zz.fogEnd, zz.fogDensity), Ez ? (zz.fogColor.toLinearSpaceToRef(Hz, zz.uR().useExactSrgbConversions), bz.setColor3("vFogColor", Hz)) : bz.setColor3("vFogColor", zz.fogColor))
    }

    function dz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
      const pz = zz.numMaxInfluencers || zz.numInfluencers;
      return pz <= 0 ? 0 : (uz.push("#define MORPHTARGETS"), zz.hasPositions && uz.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), zz.hasNormals && uz.push("#define MORPHTARGETTEXTURE_HASNORMALS"), zz.hasTangents && uz.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), zz.hasUVs && uz.push("#define MORPHTARGETTEXTURE_HASUVS"), zz.hasUV2s && uz.push("#define MORPHTARGETTEXTURE_HASUV2S"), zz.hasColors && uz.push("#define MORPHTARGETTEXTURE_HASCOLORS"), zz.supportsPositions && nz && uz.push("#define MORPHTARGETS_POSITION"), zz.supportsNormals && iz && uz.push("#define MORPHTARGETS_NORMAL"), zz.supportsTangents && lz && uz.push("#define MORPHTARGETS_TANGENT"), zz.supportsUVs && Mz && uz.push("#define MORPHTARGETS_UV"), zz.supportsUV2s && tz && uz.push("#define MORPHTARGETS_UV2"), zz.supportsColors && Hz && uz.push("#define MORPHTARGETS_COLOR"), uz.push("#define NUM_MORPH_INFLUENCERS " + pz), zz.isUsingTextureForTargets && uz.push("#define MORPHTARGETS_TEXTURE"), Oz.NUM_MORPH_INFLUENCERS = pz, Oz.NORMAL = iz, Oz.TANGENT = lz, Oz.UV = Mz, Oz.UV2 = tz, Oz.COLOR = Hz, Fz(bz, Ez, Oz, nz), pz)
    }

    function Fz(zz, uz, bz) {
      let iz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const lz = bz.NUM_MORPH_INFLUENCERS;
      if (lz > 0 && nz.d.LastCreatedEngine) {
        const Mz = nz.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          tz = uz.morphTargetManager;
        if (tz?.isUsingTextureForTargets) return;
        const Hz = tz && tz.supportsPositions && iz,
          Oz = tz && tz.supportsNormals && bz.NORMAL,
          pz = tz && tz.supportsTangents && bz.TANGENT,
          dz = tz && tz.supportsUVs && bz.UV1,
          Fz = tz && tz.supportsUV2s && bz.UV2,
          Zz = tz && tz.supportsColors && bz.VERTEXCOLOR;
        for (let bz = 0; bz < lz; bz++) Hz && zz.push("position" + bz), Oz && zz.push("normal" + bz), pz && zz.push("tangent" + bz), dz && zz.push("uv_" + bz), Fz && zz.push("uv2_" + bz), Zz && zz.push("color" + bz), zz.length > Mz && Ez.e.Error("Cannot add more vertex attributes for mesh " + uz.name)
      }
    }

    function Zz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      zz.push("world0"), zz.push("world1"), zz.push("world2"), zz.push("world3"), uz && (zz.push("previousWorld0"), zz.push("previousWorld1"), zz.push("previousWorld2"), zz.push("previousWorld3"))
    }

    function Rz(zz, uz) {
      const bz = zz.morphTargetManager;
      zz && bz && uz.setFloatArray("morphTargetInfluences", bz.influences)
    }

    function Kz(zz, uz) {
      uz.bindToEffect(zz, "Scene")
    }

    function wz(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        tz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Hz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Oz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        pz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        dz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (zz.texturesEnabled && nz && Mz.d.ReflectionTextureEnabled) {
        if (bz.M_("reflectionMatrix", nz.getReflectionTextureMatrix()), bz.updateFloat2("vReflectionInfos", nz.level * zz.iblIntensity, dz), tz && nz.boundingBoxSize) {
          const zz = nz;
          bz.updateVector3("vReflectionPosition", zz.boundingBoxPosition), bz.updateVector3("vReflectionSize", zz.boundingBoxSize)
        }
        if (iz) {
          const zz = nz.getSize().width;
          bz.updateFloat2("vReflectionFilteringInfo", zz, Math.log2(zz))
        }
        if (Oz && !uz.USEIRRADIANCEMAP) {
          const zz = nz.sphericalPolynomial;
          if (uz.USESPHERICALFROMREFLECTIONMAP && zz)
            if (uz.SPHERICAL_HARMONICS) {
              const uz = zz.preScaledHarmonics;
              bz.updateVector3("vSphericalL00", uz.l00), bz.updateVector3("vSphericalL1_1", uz.l1_1), bz.updateVector3("vSphericalL10", uz.l10), bz.updateVector3("vSphericalL11", uz.l11), bz.updateVector3("vSphericalL2_2", uz.l2_2), bz.updateVector3("vSphericalL2_1", uz.l2_1), bz.updateVector3("vSphericalL20", uz.l20), bz.updateVector3("vSphericalL21", uz.l21), bz.updateVector3("vSphericalL22", uz.l22)
            } else bz.updateFloat3("vSphericalX", zz.x.x, zz.x.y, zz.x.z), bz.updateFloat3("vSphericalY", zz.y.x, zz.y.y, zz.y.z), bz.updateFloat3("vSphericalZ", zz.z.x, zz.z.y, zz.z.z), bz.updateFloat3("vSphericalXX_ZZ", zz.xx.x - zz.zz.x, zz.xx.y - zz.zz.y, zz.xx.z - zz.zz.z), bz.updateFloat3("vSphericalYY_ZZ", zz.yy.x - zz.zz.x, zz.yy.y - zz.zz.y, zz.yy.z - zz.zz.z), bz.updateFloat3("vSphericalZZ", zz.zz.x, zz.zz.y, zz.zz.z), bz.updateFloat3("vSphericalXY", zz.xy.x, zz.xy.y, zz.xy.z), bz.updateFloat3("vSphericalYZ", zz.yz.x, zz.yz.y, zz.yz.z), bz.updateFloat3("vSphericalZX", zz.zx.x, zz.zx.y, zz.zx.z)
        } else Hz && uz.USEIRRADIANCEMAP && uz.USE_IRRADIANCE_DOMINANT_DIRECTION && nz.irradianceTexture && bz.updateVector3("vReflectionDominantDirection", nz.irradianceTexture._dominantDirection);
        lz && bz.updateFloat3("vReflectionMicrosurfaceInfos", nz.getSize().width, nz.lodGenerationScale, nz.lodGenerationOffset)
      }
      pz && bz.updateColor3("vReflectionColor", Ez)
    }

    function Xz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Ez && Mz.d.ReflectionTextureEnabled) {
        uz.LODBASEDMICROSFURACE ? bz.setTexture("reflectionSampler", Ez) : (bz.setTexture("reflectionSampler", Ez._lodTextureMid || Ez), bz.setTexture("reflectionSamplerLow", Ez._lodTextureLow || Ez), bz.setTexture("reflectionSamplerHigh", Ez._lodTextureHigh || Ez)), uz.USEIRRADIANCEMAP && bz.setTexture("irradianceSampler", Ez.irradianceTexture);
        const iz = zz.iblCdfGenerator;
        nz && iz && bz.setTexture("icdfSampler", iz.getIcdfTexture())
      }
    }

    function fz(zz, uz, bz) {
      uz._needUVs = !0, uz[bz] = !0, zz.optimizeUVAllocation && zz.getTextureMatrix().isIdentityAs3x2() ? (uz[bz + "DIRECTUV"] = zz.coordinatesIndex + 1, uz["MAINUV" + (zz.coordinatesIndex + 1)] = !0) : uz[bz + "DIRECTUV"] = 0
    }

    function sz(zz, uz, bz) {
      const Ez = zz.getTextureMatrix();
      uz.M_(bz + "Matrix", Ez)
    }

    function rz(zz, uz, bz) {
      bz.BAKED_VERTEX_ANIMATION_TEXTURE && bz.INSTANCES && zz.push("bakedVertexAnimationSettingsInstanced")
    }

    function oz(zz, uz, bz) {
      var Ez;
      if (uz && zz && (zz.computeBonesUsingShaders && uz._bonesComputationForcedToCPU && (zz.computeBonesUsingShaders = !1), zz.useBones && zz.computeBonesUsingShaders && zz.skeleton)) {
        const nz = zz.skeleton;
        if (nz.isUsingTextureForMatrices && uz.getUniformIndex("boneTextureInfo") > -1) {
          const bz = nz.getTransformMatrixTexture(zz);
          uz.setTexture("boneSampler", bz), uz.setFloat2("boneTextureInfo", nz._textureWidth, nz._textureHeight)
        } else {
          const iz = nz.getTransformMatrices(zz);
          iz && (uz.setMatrices("mBones", iz), bz && zz.XT().prePassRenderer && zz.XT().prePassRenderer.getIndex(2) && (bz.previousBones[zz.uniqueId] || (bz.previousBones[zz.uniqueId] = iz.slice()), uz.setMatrices("mPreviousBones", bz.previousBones[zz.uniqueId]), Ez = iz, bz.previousBones[zz.uniqueId].set(Ez)))
        }
      }
    }

    function Nz(zz, uz, bz, Ez, nz) {
      let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      zz._bindLight(uz, bz, Ez, nz, iz)
    }
    const vz = 4,
      xz = new WeakMap;

    function Jz(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const iz = Math.min(uz.lightSources.length, nz);
      for (let lz = 0; lz < iz; lz++) {
        Nz(uz.lightSources[lz], lz, zz, bz, "boolean" === typeof Ez ? Ez : Ez.SPECULARTERM, uz.receiveShadows)
      }
    }

    function Az(zz, uz, bz, Ez) {
      bz.NUM_BONE_INFLUENCERS > 0 && (Ez.addCPUSkinningFallback(0, uz), zz.push("matricesIndices"), zz.push("matricesWeights"), bz.NUM_BONE_INFLUENCERS > 4 && (zz.push("matricesIndicesExtra"), zz.push("matricesWeightsExtra")))
    }

    function Tz(zz, uz) {
      (uz.INSTANCES || uz.THIN_INSTANCES) && Zz(zz, !!uz.PREPASS_VELOCITY), uz.INSTANCESCOLOR && zz.push("instanceColor")
    }

    function Lz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nz = 0;
      for (let iz = 0; iz < bz && zz["LIGHT" + iz]; iz++) iz > 0 && (nz = Ez + iz, uz.addFallback(nz, "LIGHT" + iz)), zz.SHADOWS || (zz["SHADOW" + iz] && uz.addFallback(Ez, "SHADOW" + iz), zz["SHADOWPCF" + iz] && uz.addFallback(Ez, "SHADOWPCF" + iz), zz["SHADOWPCSS" + iz] && uz.addFallback(Ez, "SHADOWPCSS" + iz), zz["SHADOWPOISSON" + iz] && uz.addFallback(Ez, "SHADOWPOISSON" + iz), zz["SHADOWESM" + iz] && uz.addFallback(Ez, "SHADOWESM" + iz), zz["SHADOWCLOSEESM" + iz] && uz.addFallback(Ez, "SHADOWCLOSEESM" + iz));
      return nz
    }

    function Pz(zz, uz, bz, Ez, nz, iz, lz) {
      let Mz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Hz = arguments.length > 9 ? arguments[9] : void 0,
        Oz = arguments.length > 10 ? arguments[10] : void 0;
      if (lz._areMiscDirty) {
        lz.LOGARITHMICDEPTH = bz, lz.POINTSIZE = Ez, lz.FOG = nz && function(zz, uz) {
          return uz.fogEnabled && zz.applyFog && 0 !== uz.fogMode
        }(zz, uz), lz.NONUNIFORMSCALING = zz.nonUniformScaling, lz.ALPHATEST = iz, lz.DECAL_AFTER_DETAIL = Mz, lz.USE_VERTEX_PULLING = tz, lz.RIGHT_HANDED = uz.useRightHandedSystem;
        const pz = tz ? Hz?.geometry?.getIndexBuffer() : null,
          dz = !!Hz && Hz.isUnIndexed;
        lz.VERTEX_PULLING_USE_INDEX_BUFFER = !!pz && !dz, lz.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!pz || dz) && pz.is32Bits, lz.VERTEXOUTPUT_INVARIANT = !!Oz
      }
    }

    function Gz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!zz.lightsEnabled || Ez) return !0;
      const nz = uz.lightSources,
        iz = Math.min(nz.length, bz);
      for (let lz = 0; lz < iz; lz++)
        if (!nz[lz].areLightTexturesReady()) return !1;
      return !0
    }

    function az(zz, uz, bz, nz) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        lz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!bz._areLightsDirty) return bz._needNormals;
      const Mz = iz;
      iz = function(zz, uz) {
        const bz = zz.uR().getCaps().maxUniformBuffersPerShaderStage;
        if (null == bz) return uz;
        const Ez = Math.max(bz - vz, 1);
        return Math.min(uz, Ez)
      }(zz, iz);
      let tz = 0;
      const Hz = {
        needNormals: bz._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (zz.lightsEnabled && !lz) {
        uz.lightSources.length > iz && iz < Mz && function(zz, uz, bz, nz) {
          let iz = xz.get(zz);
          iz || (iz = new Set, xz.set(zz, iz)), iz.has(nz) || (iz.add(nz), Ez.e.Warn(`maxSimultaneousLights is ${uz} but this engine supports at most ${bz} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${nz} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${nz+vz} uniform buffers, over the device limit of ${zz.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${bz}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${bz} or less to silence this warning.`))
        }(zz.uR(), Mz, iz, Math.min(uz.lightSources.length, Mz));
        for (const Ez of uz.lightSources)
          if (mz(zz, uz, Ez, tz, bz, nz, Hz), tz++, tz === iz) break
      }
      bz.SPECULARTERM = Hz.specularEnabled, bz.SHADOWS = Hz.shadowEnabled;
      const Oz = Math.max(iz, bz.MAXLIGHTCOUNT || 0);
      for (let Ez = tz; Ez < Oz; Ez++) void 0 !== bz["LIGHT" + Ez] && (bz["LIGHT" + Ez] = !1, bz["HEMILIGHT" + Ez] = !1, bz["POINTLIGHT" + Ez] = !1, bz["DIRLIGHT" + Ez] = !1, bz["SPOTLIGHT" + Ez] = !1, bz["AREALIGHT" + Ez] = !1, bz["CLUSTLIGHT" + Ez] = !1, bz["SHADOW" + Ez] = !1, bz["SHADOWCSM" + Ez] = !1, bz["SHADOWCSMDEBUG" + Ez] = !1, bz["SHADOWCSMNUM_CASCADES" + Ez] = !1, bz["SHADOWCSMUSESHADOWMAXZ" + Ez] = !1, bz["SHADOWCSMNOBLEND" + Ez] = !1, bz["SHADOWCSM_RIGHTHANDED" + Ez] = !1, bz["SHADOWPCF" + Ez] = !1, bz["SHADOWPCSS" + Ez] = !1, bz["SHADOWPOISSON" + Ez] = !1, bz["SHADOWESM" + Ez] = !1, bz["SHADOWCLOSEESM" + Ez] = !1, bz["SHADOWCUBE" + Ez] = !1, bz["SHADOWLOWQUALITY" + Ez] = !1, bz["SHADOWMEDIUMQUALITY" + Ez] = !1);
      bz.LIGHTCOUNT = tz, bz.MAXLIGHTCOUNT = iz;
      const pz = zz.uR().getCaps();
      return void 0 === bz.SHADOWFLOAT && (Hz.needRebuild = !0), bz.SHADOWFLOAT = Hz.shadowEnabled && (pz.textureFloatRender && pz.textureFloatLinearFiltering || pz.textureHalfFloatRender && pz.textureHalfFloatLinearFiltering), bz.LIGHTMAPEXCLUDED = Hz.lightmapMode, Hz.needRebuild && bz.rebuild(), Hz.needNormals
    }

    function Vz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (uz && Mz.d.ReflectionTextureEnabled) {
        if (!uz.isReadyOrNotBlocking()) return !1;
        bz._needNormals = !0, bz.REFLECTION = !0, bz.GAMMAREFLECTION = uz.gammaSpace, bz.RGBDREFLECTION = uz.isRGBD, bz.LODINREFLECTIONALPHA = uz.lodLevelInAlpha, bz.LINEARSPECULARREFLECTION = uz.linearSpecularLOD, bz.USEIRRADIANCEMAP = !1, bz.LODBASEDMICROSFURACE = zz.uR().getCaps().textureLOD;
        const lz = zz.uR();
        switch (Ez && nz > 0 ? (bz.NUM_SAMPLES = "" + nz, lz._features.needTypeSuffixInShaderConstants && (bz.NUM_SAMPLES = bz.NUM_SAMPLES + "u"), bz.REALTIME_FILTERING = !0, zz.iblCdfGenerator && (bz.IBL_CDF_FILTERING = !0)) : bz.REALTIME_FILTERING = !1, bz.INVERTCUBICMAP = 6 === uz.coordinatesMode, bz.REFLECTIONMAP_3D = uz.isCube, bz.REFLECTIONMAP_OPPOSITEZ = bz.REFLECTIONMAP_3D && zz.useRightHandedSystem ? !uz.invertZ : uz.invertZ, bz.REFLECTIONMAP_CUBIC = !1, bz.REFLECTIONMAP_EXPLICIT = !1, bz.REFLECTIONMAP_PLANAR = !1, bz.REFLECTIONMAP_PROJECTION = !1, bz.REFLECTIONMAP_SKYBOX = !1, bz.REFLECTIONMAP_SPHERICAL = !1, bz.REFLECTIONMAP_EQUIRECTANGULAR = !1, bz.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, bz.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, uz.coordinatesMode) {
          case 0:
            bz.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            bz.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            bz.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            bz.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            bz.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            bz.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            bz.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            bz.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            bz.REFLECTIONMAP_CUBIC = !0, bz.USE_LOCAL_REFLECTIONMAP_CUBIC = !!uz.boundingBoxSize
        }
        5 !== uz.coordinatesMode && (uz.irradianceTexture ? (bz.USEIRRADIANCEMAP = !0, bz.USESPHERICALFROMREFLECTIONMAP = !1, bz.USESPHERICALINVERTEX = !1, uz.irradianceTexture._dominantDirection ? bz.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : bz.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : uz.isCube && (bz.USESPHERICALFROMREFLECTIONMAP = !0, bz.USEIRRADIANCEMAP = !1, bz.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, bz.USESPHERICALINVERTEX = iz))
      } else bz.REFLECTION = !1, bz.REFLECTIONMAP_3D = !1, bz.REFLECTIONMAP_SPHERICAL = !1, bz.REFLECTIONMAP_PLANAR = !1, bz.REFLECTIONMAP_CUBIC = !1, bz.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, bz.REFLECTIONMAP_PROJECTION = !1, bz.REFLECTIONMAP_SKYBOX = !1, bz.REFLECTIONMAP_EXPLICIT = !1, bz.REFLECTIONMAP_EQUIRECTANGULAR = !1, bz.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, bz.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, bz.INVERTCUBICMAP = !1, bz.USESPHERICALFROMREFLECTIONMAP = !1, bz.USEIRRADIANCEMAP = !1, bz.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, bz.USESPHERICALINVERTEX = !1, bz.REFLECTIONMAP_OPPOSITEZ = !1, bz.LODINREFLECTIONALPHA = !1, bz.GAMMAREFLECTION = !1, bz.RGBDREFLECTION = !1, bz.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function mz(zz, uz, bz, Ez, nz, lz, Mz) {
      switch (Mz.needNormals = !0, void 0 === nz["LIGHT" + Ez] && (Mz.needRebuild = !0), nz["LIGHT" + Ez] = !0, nz["SPOTLIGHT" + Ez] = !1, nz["HEMILIGHT" + Ez] = !1, nz["POINTLIGHT" + Ez] = !1, nz["DIRLIGHT" + Ez] = !1, nz["AREALIGHT" + Ez] = !1, nz["CLUSTLIGHT" + Ez] = !1, bz.prepareLightSpecificDefines(nz, Ez), nz["LIGHT_FALLOFF_PHYSICAL" + Ez] = !1, nz["LIGHT_FALLOFF_GLTF" + Ez] = !1, nz["LIGHT_FALLOFF_STANDARD" + Ez] = !1, bz.falloffType) {
        case iz.c.FALLOFF_GLTF:
          nz["LIGHT_FALLOFF_GLTF" + Ez] = !0;
          break;
        case iz.c.FALLOFF_PHYSICAL:
          nz["LIGHT_FALLOFF_PHYSICAL" + Ez] = !0;
          break;
        case iz.c.FALLOFF_STANDARD:
          nz["LIGHT_FALLOFF_STANDARD" + Ez] = !0
      }
      if (lz && !bz.specular.equalsFloats(0, 0, 0) && (Mz.specularEnabled = !0), nz["SHADOW" + Ez] = !1, nz["SHADOWCSM" + Ez] = !1, nz["SHADOWCSMDEBUG" + Ez] = !1, nz["SHADOWCSMNUM_CASCADES" + Ez] = !1, nz["SHADOWCSMUSESHADOWMAXZ" + Ez] = !1, nz["SHADOWCSMNOBLEND" + Ez] = !1, nz["SHADOWCSM_RIGHTHANDED" + Ez] = !1, nz["SHADOWPCF" + Ez] = !1, nz["SHADOWPCSS" + Ez] = !1, nz["SHADOWPOISSON" + Ez] = !1, nz["SHADOWESM" + Ez] = !1, nz["SHADOWCLOSEESM" + Ez] = !1, nz["SHADOWCUBE" + Ez] = !1, nz["SHADOWLOWQUALITY" + Ez] = !1, nz["SHADOWMEDIUMQUALITY" + Ez] = !1, uz && uz.receiveShadows && zz.shadowsEnabled && bz.shadowEnabled) {
        const uz = bz.getShadowGenerator(zz.activeCamera) ?? bz.getShadowGenerator();
        if (uz) {
          const zz = uz.getShadowMap();
          zz && zz.renderList && zz.renderList.length > 0 && (Mz.shadowEnabled = !0, uz.prepareDefines(nz, Ez))
        }
      }
      bz.lightmapMode != iz.c.LIGHTMAP_DEFAULT ? (Mz.lightmapMode = !0, nz["LIGHTMAPEXCLUDED" + Ez] = !0, nz["LIGHTMAPNOSPECULAR" + Ez] = bz.lightmapMode == iz.c.LIGHTMAP_SHADOWSONLY) : (nz["LIGHTMAPEXCLUDED" + Ez] = !1, nz["LIGHTMAPNOSPECULAR" + Ez] = !1)
    }

    function qz(zz, uz, bz, Ez, nz) {
      let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Mz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        tz = function(zz, uz) {
          let bz = !1;
          if (zz.activeCamera) {
            const Ez = uz.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              nz = uz.CAMERA_PERSPECTIVE ? 1 : 0,
              iz = 1 === zz.activeCamera.mode ? 1 : 0,
              lz = 0 === zz.activeCamera.mode ? 1 : 0;
            (Ez ^ iz || nz ^ lz) && (uz.CAMERA_ORTHOGRAPHIC = 1 === iz, uz.CAMERA_PERSPECTIVE = 1 === lz, bz = !0)
          }
          return bz
        }(zz, Ez);
      !1 !== iz && (tz = (0, lz.g)(bz, zz, Ez)), Ez.DEPTHPREPASS !== !uz.getColorWrite() && (Ez.DEPTHPREPASS = !Ez.DEPTHPREPASS, tz = !0), Ez.INSTANCES !== nz && (Ez.INSTANCES = nz, tz = !0), Ez.THIN_INSTANCES !== Mz && (Ez.THIN_INSTANCES = Mz, tz = !0), tz && Ez.markAsUnprocessed()
    }
    const hz = 40,
      Uz = 64,
      cz = new WeakMap,
      gz = new WeakSet;

    function Sz(zz, uz, bz, nz) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Mz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!uz._areAttributesDirty && uz._needNormals === uz._normals && uz._needUVs === uz._uvs) return !1;
      uz._normals = uz._needNormals, uz._uvs = uz._needUVs, uz.NORMAL = uz._needNormals && zz.isVerticesDataPresent("normal"), uz._needNormals && zz.isVerticesDataPresent("tangent") && (uz.TANGENT = !0);
      for (let Ez = 1; Ez <= 6; ++Ez) uz["UV" + Ez] = !!uz._needUVs && zz.isVerticesDataPresent(`uv${1===Ez?"":Ez}`);
      if (bz) {
        const bz = zz.useVertexColors && zz.isVerticesDataPresent("color");
        uz.VERTEXCOLOR = bz, uz.VERTEXALPHA = zz.hasVertexAlpha && bz && lz
      }
      return zz.isVerticesDataPresent("instanceColor") && (zz.KEz || zz.hasThinInstances) && (uz.INSTANCESCOLOR = !0), nz && function(zz, uz) {
        if (zz.useBones && zz.computeBonesUsingShaders && zz.skeleton) {
          uz.NUM_BONE_INFLUENCERS = zz.numBoneInfluencers;
          const bz = void 0 !== uz.BONETEXTURE;
          if (zz.skeleton.isUsingTextureForMatrices && bz) uz.BONETEXTURE = !0;
          else {
            uz.BonesPerMesh = zz.skeleton.bones.length + 1, uz.BONETEXTURE = !bz && void 0;
            const nz = zz.XT(),
              iz = nz.prePassRenderer;
            if (iz && iz.enabled) {
              const bz = -1 === iz.excludedSkinnedMesh.indexOf(zz);
              uz.BONES_VELOCITY_ENABLED = bz
            }
            const lz = !0 === uz.MULTIVIEW,
              Mz = 2 * uz.BonesPerMesh + (lz ? 1 : 0);
            if (cz.get(zz.skeleton) !== Mz) {
              cz.set(zz.skeleton, Mz);
              const bz = nz.uR().getCaps().maxVertexUniformVectors;
              if (bz && !gz.has(zz.skeleton)) {
                const nz = 4 * uz.BonesPerMesh,
                  iz = lz ? Uz : hz,
                  Mz = Math.max(bz - iz, 0);
                (nz > Mz || lz && 3 * nz > bz) && (gz.add(zz.skeleton), Ez.e.Warn(`Skeleton "${zz.skeleton.name}": ${zz.skeleton.bones.length} bones stored as vertex uniforms use ${nz} of ~${Mz} usable uniform vectors${lz?" (multiview)":""} on a device reporting ${bz}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else uz.NUM_BONE_INFLUENCERS = 0, uz.BonesPerMesh = 0, void 0 !== uz.BONETEXTURE && (uz.BONETEXTURE = !1)
      }(zz, uz), iz && function(zz, uz) {
        const bz = zz.morphTargetManager;
        bz ? (uz.MORPHTARGETS_UV = bz.supportsUVs && uz.UV1, uz.MORPHTARGETS_UV2 = bz.supportsUV2s && uz.UV2, uz.MORPHTARGETS_TANGENT = bz.supportsTangents && uz.TANGENT, uz.MORPHTARGETS_NORMAL = bz.supportsNormals && uz.NORMAL, uz.MORPHTARGETS_POSITION = bz.supportsPositions, uz.MORPHTARGETS_COLOR = bz.supportsColors, uz.MORPHTARGETTEXTURE_HASUVS = bz.hasUVs, uz.MORPHTARGETTEXTURE_HASUV2S = bz.hasUV2s, uz.MORPHTARGETTEXTURE_HASTANGENTS = bz.hasTangents, uz.MORPHTARGETTEXTURE_HASNORMALS = bz.hasNormals, uz.MORPHTARGETTEXTURE_HASPOSITIONS = bz.hasPositions, uz.MORPHTARGETTEXTURE_HASCOLORS = bz.hasColors, uz.NUM_MORPH_INFLUENCERS = bz.numMaxInfluencers || bz.numInfluencers, uz.MORPHTARGETS = uz.NUM_MORPH_INFLUENCERS > 0, uz.MORPHTARGETS_TEXTURE = bz.isUsingTextureForTargets) : (uz.MORPHTARGETS_UV = !1, uz.MORPHTARGETS_UV2 = !1, uz.MORPHTARGETS_TANGENT = !1, uz.MORPHTARGETS_NORMAL = !1, uz.MORPHTARGETS_POSITION = !1, uz.MORPHTARGETS_COLOR = !1, uz.MORPHTARGETTEXTURE_HASUVS = !1, uz.MORPHTARGETTEXTURE_HASUV2S = !1, uz.MORPHTARGETTEXTURE_HASTANGENTS = !1, uz.MORPHTARGETTEXTURE_HASNORMALS = !1, uz.MORPHTARGETTEXTURE_HASPOSITIONS = !1, uz.MORPHTARGETTEXTURE_HAS_COLORS = !1, uz.MORPHTARGETS = !1, uz.NUM_MORPH_INFLUENCERS = 0)
      }(zz, uz), Mz && function(zz, uz) {
        const bz = zz.bakedVertexAnimationManager;
        uz.BAKED_VERTEX_ANIMATION_TEXTURE = !(!bz || !bz.isEnabled)
      }(zz, uz), !0
    }

    function yz(zz, uz) {
      if (zz.activeCamera) {
        const bz = uz.MULTIVIEW;
        uz.MULTIVIEW = null !== zz.activeCamera.outputRenderTarget && zz.activeCamera.outputRenderTarget.getViewCount() > 1, uz.MULTIVIEW != bz && uz.markAsUnprocessed()
      }
    }

    function Dz(zz, uz, bz) {
      const Ez = uz.ORDER_INDEPENDENT_TRANSPARENCY,
        nz = uz.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      uz.ORDER_INDEPENDENT_TRANSPARENCY = zz.useOrderIndependentTransparency && bz, uz.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !zz.uR().getCaps().textureFloatLinearFiltering, Ez === uz.ORDER_INDEPENDENT_TRANSPARENCY && nz === uz.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || uz.markAsUnprocessed()
    }

    function Qz(zz, uz, bz) {
      const Ez = uz.PREPASS;
      if (!uz._arePrePassDirty) return;
      const nz = [{
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
      if (zz.prePassRenderer && zz.prePassRenderer.enabled && bz) {
        uz.PREPASS = !0, uz.SCENE_MRT_COUNT = zz.prePassRenderer.mrtCount, uz.PREPASS_NORMAL_WORLDSPACE = zz.prePassRenderer.generateNormalsInWorldSpace, uz.PREPASS_COLOR = !0, uz.PREPASS_COLOR_INDEX = 0;
        for (let bz = 0; bz < nz.length; bz++) {
          const Ez = zz.prePassRenderer.getIndex(nz[bz].type); - 1 !== Ez ? (uz[nz[bz].define] = !0, uz[nz[bz].index] = Ez) : uz[nz[bz].define] = !1
        }
      } else {
        uz.PREPASS = !1;
        for (let zz = 0; zz < nz.length; zz++) uz[nz[zz].define] = !1
      }
      uz.PREPASS != Ez && (uz.markAsUnprocessed(), uz.markAsImageProcessingDirty())
    }

    function Wz(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Mz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Hz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      nz && nz.push("Light" + zz), iz || (uz.push("vLightData" + zz, "vLightDiffuse" + zz, "vLightSpecular" + zz, "vLightDirection" + zz, "vLightWidth" + zz, "vLightHeight" + zz, "vLightFalloff" + zz, "vLightGround" + zz, "vSliceData" + zz, "vSliceRanges" + zz, "lightMatrix" + zz, "shadowsInfo" + zz, "depthValues" + zz), bz.push("shadowTexture" + zz), bz.push("depthTexture" + zz), uz.push("viewFrustumZ" + zz, "cascadeBlendFactor" + zz, "lightSizeUVCorrection" + zz, "depthCorrection" + zz, "penumbraDarkness" + zz, "frustumLengths" + zz), Ez && (bz.push("projectionLightTexture" + zz), uz.push("textureProjectionMatrix" + zz)), lz && bz.push("iesLightTexture" + zz), tz && bz.push("rectAreaLightEmissionTexture" + zz), Mz && (bz.push("lightDataTexture" + zz), Hz || bz.push("tileMaskTexture" + zz)))
    }

    function ez(zz, uz, bz) {
      const Ez = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      bz && Ez.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), zz.push(...Ez);
      uz.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function jz(zz, uz, bz) {
      let Ez, nz, iz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        lz = null;
      if (zz.uniformsNames) {
        const Mz = zz;
        Ez = Mz.uniformsNames, nz = Mz.uniformBuffersNames, uz = Mz.samplers, bz = Mz.defines, iz = Mz.maxSimultaneousLights || 0, lz = Mz.shaderLanguage ?? null
      } else Ez = zz, uz || (uz = []);
      for (let Mz = 0; Mz < iz && bz["LIGHT" + Mz]; Mz++) Wz(Mz, Ez, uz, bz["PROJECTEDLIGHTTEXTURE" + Mz], nz, !1, bz["IESLIGHTTEXTURE" + Mz], bz["CLUSTLIGHT" + Mz], bz["RECTAREALIGHTEMISSIONTEXTURE" + Mz], 1 === lz);
      bz.NUM_MORPH_INFLUENCERS && (Ez.push("morphTargetInfluences"), Ez.push("morphTargetCount")), bz.BAKED_VERTEX_ANIMATION_TEXTURE && (Ez.push("bakedVertexAnimationSettings"), Ez.push("bakedVertexAnimationTextureSizeInverted"), Ez.push("bakedVertexAnimationTime"), uz.push("bakedVertexAnimationTexture"))
    }

    function Iz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      zz.addUniform("vReflectionInfos", 2), zz.addUniform("reflectionMatrix", 16), uz && zz.addUniform("vReflectionMicrosurfaceInfos", 3), bz && (zz.addUniform("vReflectionPosition", 3), zz.addUniform("vReflectionSize", 3)), Ez && (zz.addUniform("vReflectionFilteringInfo", 2), zz.addUniform("vReflectionDominantDirection", 3)), iz && zz.addUniform("vReflectionColor", 3), nz && (zz.addUniform("vSphericalL00", 3), zz.addUniform("vSphericalL1_1", 3), zz.addUniform("vSphericalL10", 3), zz.addUniform("vSphericalL11", 3), zz.addUniform("vSphericalL2_2", 3), zz.addUniform("vSphericalL2_1", 3), zz.addUniform("vSphericalL20", 3), zz.addUniform("vSphericalL21", 3), zz.addUniform("vSphericalL22", 3), zz.addUniform("vSphericalX", 3), zz.addUniform("vSphericalY", 3), zz.addUniform("vSphericalZ", 3), zz.addUniform("vSphericalXX_ZZ", 3), zz.addUniform("vSphericalYY_ZZ", 3), zz.addUniform("vSphericalZZ", 3), zz.addUniform("vSphericalXY", 3), zz.addUniform("vSphericalYZ", 3), zz.addUniform("vSphericalZX", 3))
    }
  },
  39519: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(36519),
      nz = bz(39451);
    class iz extends nz.c {
      constructor(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(zz, uz, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Ez.d, this._storeEffectOnSubMeshes = bz
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(zz, uz) {
        return !!zz && (!this._storeEffectOnSubMeshes || (!zz.hN || 0 === zz.hN.length || this.isReadyForSubMesh(zz, zz.hN[0], uz)))
      }
      _isReadyForSubMesh(zz) {
        const uz = zz.materialDefines;
        return !(this.checkReadyOnEveryCall || !zz.effect || !uz || uz._renderId !== this.XT().getRenderId())
      }
      bindOnlyWorldMatrix(zz) {
        this._activeEffect.setMatrix("world", zz)
      }
      bindOnlyNormalMatrix(zz) {
        this._activeEffect.setMatrix("normalMatrix", zz)
      }
      bind(zz, uz) {
        uz && this.bindForSubMesh(zz, uz, uz.hN[0])
      }
      _afterBind(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(zz, uz, bz), this.XT()._cachedEffect = uz, bz ? bz._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return bz._drawWrapper._forceRebindOnNextCall || zz.isCachedMaterialInvalid(this, uz, Ez)
      }
      dispose(zz, uz, bz) {
        this._activeEffect = void 0, super.dispose(zz, uz, bz)
      }
    }
  },
  39540: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      e: () => nz
    });
    const Ez = new WeakMap;

    function nz(zz) {
      const uz = zz.getVertexBuffers();
      if (!uz) return null;
      let bz = Ez.get(zz);
      if (bz) {
        let zz = !1;
        for (const Ez in uz)
          if (!bz.has(Ez)) {
            zz = !0;
            break
          } if (!zz) return bz
      } else bz = new Map, Ez.set(zz, bz);
      for (const Ez in uz) {
        const zz = uz[Ez];
        if (zz) {
          const uz = zz.byteOffset,
            nz = zz.byteStride,
            iz = zz.type,
            lz = zz.normalized;
          bz.set(Ez, {
            offset: uz,
            stride: nz,
            type: iz,
            normalized: lz
          })
        }
      }
      return bz
    }

    function iz(zz, uz) {
      uz.forEach(((uz, bz) => {
        const Ez = `vp_${bz}_info`;
        zz.setFloat4(Ez, uz.offset, uz.stride, uz.type, uz.normalized ? 1 : 0)
      }))
    }
  },
  39492: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz,
      c: () => tz
    });
    var Ez = bz(39170),
      nz = bz(36519),
      iz = bz(39172);
    let lz = (() => {
      var zz;
      let uz, bz, nz = [];
      return zz = class {
        static extractMinAndMaxIndexed(zz, uz, bz, Ez, nz, iz) {
          for (let lz = bz; lz < bz + Ez; lz++) {
            const bz = 3 * uz[lz],
              Ez = zz[bz],
              Mz = zz[bz + 1],
              tz = zz[bz + 2];
            nz.minimizeInPlaceFromFloats(Ez, Mz, tz), iz.maximizeInPlaceFromFloats(Ez, Mz, tz)
          }
        }
        static extractMinAndMax(zz, uz, bz, Ez, nz, iz) {
          for (let lz = uz, Mz = uz * Ez; lz < uz + bz; lz++, Mz += Ez) {
            const uz = zz[Mz],
              bz = zz[Mz + 1],
              Ez = zz[Mz + 2];
            nz.minimizeInPlaceFromFloats(uz, bz, Ez), iz.maximizeInPlaceFromFloats(uz, bz, Ez)
          }
        }
      }, (() => {
        const lz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [iz.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], bz = [iz.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Ez.h)(zz, null, uz, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: zz => "extractMinAndMaxIndexed" in zz,
            get: zz => zz.extractMinAndMaxIndexed
          },
          metadata: lz
        }, null, nz), (0, Ez.h)(zz, null, bz, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: zz => "extractMinAndMax" in zz,
            get: zz => zz.extractMinAndMax
          },
          metadata: lz
        }, null, nz), lz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lz
        }), (0, Ez.j)(zz, nz)
      })(), zz
    })();

    function Mz(zz, uz, bz, Ez) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Mz = new nz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        tz = new nz.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return lz.extractMinAndMaxIndexed(zz, uz, bz, Ez, Mz, tz), iz && (Mz.x -= Mz.x * iz.x + iz.y, Mz.y -= Mz.y * iz.x + iz.y, Mz.z -= Mz.z * iz.x + iz.y, tz.x += tz.x * iz.x + iz.y, tz.y += tz.y * iz.x + iz.y, tz.z += tz.z * iz.x + iz.y), {
        minimum: Mz,
        maximum: tz
      }
    }

    function tz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        iz = arguments.length > 4 ? arguments[4] : void 0;
      const Mz = new nz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        tz = new nz.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return iz || (iz = 3), lz.extractMinAndMax(zz, uz, bz, iz, Mz, tz), Ez && (Mz.x -= Mz.x * Ez.x + Ez.y, Mz.y -= Mz.y * Ez.x + Ez.y, Mz.z -= Mz.z * Ez.x + Ez.y, tz.x += tz.x * Ez.x + Ez.y, tz.y += tz.y * Ez.x + Ez.y, tz.z += tz.z * Ez.x + Ez.y), {
        minimum: Mz,
        maximum: tz
      }
    }
  },
  39459: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Oz
    });
    var Ez, nz = bz(39299),
      iz = bz(39467),
      lz = bz(39474),
      Mz = bz(39492),
      tz = bz(39497),
      Hz = bz(39061);
    class Oz {
      get materialDefines() {
        const zz = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof zz ? null : zz
      }
      set materialDefines(zz) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = zz
      }
      _getDrawWrapper(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        zz = zz ?? this._engine.currentRenderPassId;
        let bz = this._drawWrappers[zz];
        return !bz && uz && (this._drawWrappers[zz] = bz = new tz.c(this._mesh.XT().uR())), bz
      }
      _removeDrawWrapper(zz) {
        let uz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[zz]?.dispose(uz), this._drawWrappers[zz] = void 0
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const nz = this._drawWrapper;
        nz.setEffect(zz, uz, Ez), void 0 !== bz && (nz.materialContext = bz), zz || (nz.defines = null, nz.materialContext = void 0)
      }
      resetDrawCache(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== zz) return void this._removeDrawWrapper(zz, !0, uz);
          for (const zz of this._drawWrappers) zz?.dispose(uz)
        }
        this._drawWrappers = []
      }
      static AddToMesh(zz, uz, bz, Ez, nz, iz, lz) {
        return new Oz(zz, uz, bz, Ez, nz, iz, lz, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(zz, uz, bz, Ez, nz, iz, lz) {
        let Mz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          tz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = zz, this.verticesStart = uz, this.verticesCount = bz, this.indexStart = Ez, this.indexCount = nz, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = iz, this._renderingMesh = lz || iz, tz && iz.hN.push(this), this._engine = this._mesh.XT().uR(), this.resetDrawCache(), this._trianglePlanes = [], this._id = iz.hN.length - 1, Mz && (this.refreshBoundingInfo(), iz.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      lG() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.lG() : this._boundingInfo
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
      lR() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const uz = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!uz) return zz && this._mesh.XT()._hasDefaultMaterial ? this._mesh.XT().defaultMaterial : null;
        if (this._isMultiMaterial(uz)) {
          const zz = uz.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== zz && (this._currentMaterial = zz, this.resetDrawCache()), zz
        }
        return uz
      }
      _isMultiMaterial(zz) {
        return void 0 !== zz.getSubMaterial
      }
      refreshBoundingInfo() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (zz || (zz = this._renderingMesh.getVerticesData(nz.j.PositionKind)), !zz) return this._boundingInfo = this._mesh.lG(), this;
        const uz = this._renderingMesh.Nbz();
        let bz;
        if (0 === this.indexStart && this.indexCount === uz.length) {
          const zz = this._renderingMesh.lG();
          bz = {
            minimum: zz.minimum.clone(),
            maximum: zz.maximum.clone()
          }
        } else bz = (0, Mz.b)(zz, uz, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(bz.minimum, bz.maximum) : this._boundingInfo = new lz.e(bz.minimum, bz.maximum), this
      }
      _checkCollision(zz) {
        return this.lG()._checkCollision(zz)
      }
      updateBoundingInfo(zz) {
        let uz = this.lG();
        return uz || (this.refreshBoundingInfo(), uz = this.lG()), uz && uz.update(zz), this
      }
      isInFrustum(zz) {
        const uz = this.lG();
        return !!uz && uz.isInFrustum(zz, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(zz) {
        const uz = this.lG();
        return !!uz && uz.isCompletelyInFrustum(zz)
      }
      render(zz) {
        return this._renderingMesh.render(this, zz, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(zz, uz) {
        if (!this._linesIndexBuffer) {
          const bz = 6 * Math.floor(this.indexCount / 3),
            Ez = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(bz) : new Uint16Array(bz);
          let nz = 0;
          if (0 === zz.length)
            for (let zz = this.indexStart; zz < this.indexStart + this.indexCount; zz += 3) Ez[nz++] = zz, Ez[nz++] = zz + 1, Ez[nz++] = zz + 1, Ez[nz++] = zz + 2, Ez[nz++] = zz + 2, Ez[nz++] = zz;
          else
            for (let uz = this.indexStart; uz < this.indexStart + this.indexCount; uz += 3) Ez[nz++] = zz[uz], Ez[nz++] = zz[uz + 1], Ez[nz++] = zz[uz + 1], Ez[nz++] = zz[uz + 2], Ez[nz++] = zz[uz + 2], Ez[nz++] = zz[uz];
          this._linesIndexBuffer = uz.createIndexBuffer(Ez), this._linesIndexCount = Ez.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(zz) {
        const uz = this.lG();
        return !!uz && zz.intersectsBox(uz.boundingBox)
      }
      intersects(zz, uz, bz, Ez, nz) {
        const iz = this.lR();
        if (!iz) return null;
        let lz = 3,
          Mz = !1;
        switch (iz.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            lz = 1, Mz = !0
        }
        return 4 === iz.fillMode ? bz.length ? this._intersectLines(zz, uz, bz, this._mesh.intersectionThreshold, Ez) : this._intersectUnIndexedLines(zz, uz, bz, this._mesh.intersectionThreshold, Ez) : !bz.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(zz, uz, bz, Ez, nz) : this._intersectTriangles(zz, uz, bz, lz, Mz, Ez, nz)
      }
      _intersectLines(zz, uz, bz, Ez, nz) {
        let lz = null;
        for (let Mz = this.indexStart; Mz < this.indexStart + this.indexCount; Mz += 2) {
          const tz = uz[bz[Mz]],
            Hz = uz[bz[Mz + 1]],
            Oz = zz.intersectionSegment(tz, Hz, Ez);
          if (!(Oz < 0) && ((nz || !lz || Oz < lz.distance) && (lz = new iz.b(null, null, Oz), lz.faceId = Mz / 2, nz))) break
        }
        return lz
      }
      _intersectUnIndexedLines(zz, uz, bz, Ez, nz) {
        let lz = null;
        for (let Mz = this.verticesStart; Mz < this.verticesStart + this.verticesCount; Mz += 2) {
          const bz = uz[Mz],
            tz = uz[Mz + 1],
            Hz = zz.intersectionSegment(bz, tz, Ez);
          if (!(Hz < 0) && ((nz || !lz || Hz < lz.distance) && (lz = new iz.b(null, null, Hz), lz.faceId = Mz / 2, nz))) break
        }
        return lz
      }
      _intersectTriangles(zz, uz, bz, Ez, nz, iz, lz) {
        let Mz = null,
          tz = -1;
        for (let Hz = this.indexStart; Hz < this.indexStart + this.indexCount - (3 - Ez); Hz += Ez) {
          tz++;
          const Ez = bz[Hz],
            Oz = bz[Hz + 1],
            pz = bz[Hz + 2];
          if (nz && 4294967295 === pz) {
            Hz += 2;
            continue
          }
          const dz = uz[Ez],
            Fz = uz[Oz],
            Zz = uz[pz];
          if (!dz || !Fz || !Zz) continue;
          if (lz && !lz(dz, Fz, Zz, zz, Ez, Oz, pz)) continue;
          const Rz = zz.intersectsTriangle(dz, Fz, Zz);
          if (Rz) {
            if (Rz.distance < 0) continue;
            if ((iz || !Mz || Rz.distance < Mz.distance) && (Mz = Rz, Mz.faceId = tz, iz)) break
          }
        }
        return Mz
      }
      _intersectUnIndexedTriangles(zz, uz, bz, Ez, nz) {
        let iz = null;
        for (let lz = this.verticesStart; lz < this.verticesStart + this.verticesCount; lz += 3) {
          const bz = uz[lz],
            Mz = uz[lz + 1],
            tz = uz[lz + 2];
          if (nz && !nz(bz, Mz, tz, zz, -1, -1, -1)) continue;
          const Hz = zz.intersectsTriangle(bz, Mz, tz);
          if (Hz) {
            if (Hz.distance < 0) continue;
            if ((Ez || !iz || Hz.distance < iz.distance) && (iz = Hz, iz.faceId = lz / 3, Ez)) break
          }
        }
        return iz
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(zz, uz) {
        const bz = new Oz(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, zz, uz, !1);
        if (!this.IsGlobal) {
          const zz = this.lG();
          if (!zz) return bz;
          bz._boundingInfo = new lz.e(zz.minimum, zz.maximum)
        }
        return bz
      }
      dispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.XT().uR()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const uz = this._mesh.hN.indexOf(this);
        this._mesh.hN.splice(uz, 1), this.resetDrawCache(void 0, zz)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(zz, uz, bz, Ez, nz) {
        let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lz = Number.MAX_VALUE,
          Mz = -Number.MAX_VALUE;
        const tz = (nz || Ez).Nbz();
        for (let Hz = uz; Hz < uz + bz; Hz++) {
          const zz = tz[Hz];
          zz < lz && (lz = zz), zz > Mz && (Mz = zz)
        }
        return new Oz(zz, lz, Mz - lz + 1, uz, bz, Ez, nz, iz)
      }
    }(Ez = Oz.prototype).projectToRef ?? (Ez.projectToRef = (0, Hz.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);