export const id = 294;
export const ids = [294];
export const modules = {
  40734: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz
    });
    var Fz = sz(39270),
      Wz = sz(40742);
    class Xz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = sz, this.zFz = [], this._maxBlockCapacity = tz || 64, this._selectionContent = new Fz.e(1024), this._creationFunc = zz
      }
      update(zz, tz, sz) {
        Wz.b._CreateBlocks(zz, tz, sz, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      ksz(zz) {
        for (let tz = 0; tz < this.blocks.length; tz++) {
          this.blocks[tz].addEntry(zz)
        }
      }
      mI(zz) {
        for (let tz = 0; tz < this.blocks.length; tz++) {
          this.blocks[tz].removeEntry(zz)
        }
      }
      select(zz, tz) {
        this._selectionContent.reset();
        for (let sz = 0; sz < this.blocks.length; sz++) {
          this.blocks[sz].select(zz, this._selectionContent, tz)
        }
        return tz ? this._selectionContent.concat(this.zFz) : this._selectionContent.concatWithNoDuplicate(this.zFz), this._selectionContent
      }
      intersects(zz, tz, sz) {
        this._selectionContent.reset();
        for (let Fz = 0; Fz < this.blocks.length; Fz++) {
          this.blocks[Fz].intersects(zz, tz, this._selectionContent, sz)
        }
        return sz ? this._selectionContent.concat(this.zFz) : this._selectionContent.concatWithNoDuplicate(this.zFz), this._selectionContent
      }
      intersectsRay(zz) {
        this._selectionContent.reset();
        for (let tz = 0; tz < this.blocks.length; tz++) {
          this.blocks[tz].intersectsRay(zz, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.zFz), this._selectionContent
      }
    }
    Xz.CreationFuncForMeshes = (zz, tz) => {
      const sz = zz.rC();
      !zz.isBlocked && sz.boundingBox.intersectsMinMax(tz.asz, tz.nsz) && tz.entries.push(zz)
    }, Xz.CreationFuncForSubMeshes = (zz, tz) => {
      zz.rC().boundingBox.intersectsMinMax(tz.asz, tz.nsz) && tz.entries.push(zz)
    }
  },
  40742: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz
    });
    var Fz = sz(36475),
      Wz = sz(39475);
    class Xz {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.entries = [], this.tFz = new Array, this._capacity = sz, this._depth = Fz, this._maxDepth = Wz, this._creationFunc = Xz, this._minPoint = zz, this._maxPoint = tz, this.tFz.push(zz.clone()), this.tFz.push(tz.clone()), this.tFz.push(zz.clone()), this.tFz[2].x = tz.x, this.tFz.push(zz.clone()), this.tFz[3].y = tz.y, this.tFz.push(zz.clone()), this.tFz[4].z = tz.z, this.tFz.push(tz.clone()), this.tFz[5].z = zz.z, this.tFz.push(tz.clone()), this.tFz[6].x = zz.x, this.tFz.push(tz.clone()), this.tFz[7].y = zz.y
      }
      get au() {
        return this._capacity
      }
      get asz() {
        return this._minPoint
      }
      get nsz() {
        return this._maxPoint
      }
      addEntry(zz) {
        if (this.blocks)
          for (let tz = 0; tz < this.blocks.length; tz++) {
            this.blocks[tz].addEntry(zz)
          } else this._creationFunc(zz, this), this.entries.length > this.au && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(zz) {
        if (this.blocks) {
          for (let tz = 0; tz < this.blocks.length; tz++) {
            this.blocks[tz].removeEntry(zz)
          }
          return
        }
        const tz = this.entries.indexOf(zz);
        tz > -1 && this.entries.splice(tz, 1)
      }
      addEntries(zz) {
        for (let tz = 0; tz < zz.length; tz++) {
          const sz = zz[tz];
          this.addEntry(sz)
        }
      }
      select(zz, tz, sz) {
        if (Wz.c.IsInFrustum(this.tFz, zz)) {
          if (this.blocks) {
            for (let Fz = 0; Fz < this.blocks.length; Fz++) {
              this.blocks[Fz].select(zz, tz, sz)
            }
            return
          }
          sz ? tz.concat(this.entries) : tz.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(zz, tz, sz, Fz) {
        if (Wz.c.IntersectsSphere(this._minPoint, this._maxPoint, zz, tz)) {
          if (this.blocks) {
            for (let Wz = 0; Wz < this.blocks.length; Wz++) {
              this.blocks[Wz].intersects(zz, tz, sz, Fz)
            }
            return
          }
          Fz ? sz.concat(this.entries) : sz.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(zz, tz) {
        if (zz.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let sz = 0; sz < this.blocks.length; sz++) {
              this.blocks[sz].intersectsRay(zz, tz)
            }
            return
          }
          tz.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Xz._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(zz, tz, sz, Wz, Oz, oz, vz, Uz) {
        vz.blocks = new Array;
        const Kz = new Fz.p((tz.x - zz.x) / 2, (tz.y - zz.y) / 2, (tz.z - zz.z) / 2);
        for (let Fz = 0; Fz < 2; Fz++)
          for (let tz = 0; tz < 2; tz++)
            for (let uz = 0; uz < 2; uz++) {
              const Nz = zz.add(Kz.multiplyByFloats(Fz, tz, uz)),
                bz = zz.add(Kz.multiplyByFloats(Fz + 1, tz + 1, uz + 1)),
                wz = new Xz(Nz, bz, Wz, Oz + 1, oz, Uz);
              wz.addEntries(sz), vz.blocks.push(wz)
            }
      }
    }
  },
  40746: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz
    });
    var Fz = sz(39256),
      Wz = sz(36475),
      Xz = sz(39581),
      Oz = sz(40681),
      oz = sz(39319),
      vz = sz(36502),
      Uz = sz(40734);
    class Kz {
      constructor(zz) {
        this.name = oz.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Oz.E(Wz.p.Zero(), new Wz.p(1, 1, 1)), (zz = zz || vz.c.LastCreatedScene) && (this.Kg = zz, this.Kg.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Kg.getActiveSubMeshCandidates = zz => this.getActiveSubMeshCandidates(zz), this.Kg.getCollidingSubMeshCandidates = (zz, tz) => this.getCollidingSubMeshCandidates(zz, tz), this.Kg.getIntersectingSubMeshCandidates = (zz, tz) => this.getIntersectingSubMeshCandidates(zz, tz))
      }
      register() {
        this.Kg.onMeshRemovedObservable.add((zz => {
          const tz = this.Kg.selectionOctree;
          if (void 0 !== tz && null !== tz) {
            const sz = tz.zFz.indexOf(zz); - 1 !== sz && tz.zFz.splice(sz, 1)
          }
        })), this.Kg.onMeshImportedObservable.add((zz => {
          const tz = this.Kg.selectionOctree;
          void 0 !== tz && null !== tz && tz.ksz(zz)
        }))
      }
      getActiveMeshCandidates() {
        return this.Kg.UFz?.select(this.Kg.frustumPlanes) || this.Kg._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(zz) {
        if (zz._submeshesOctree && zz.useOctreeForRenderingSelection) {
          return zz._submeshesOctree.select(this.Kg.frustumPlanes)
        }
        return this.Kg._getDefaultSubMeshCandidates(zz)
      }
      getIntersectingSubMeshCandidates(zz, tz) {
        if (zz._submeshesOctree && zz.useOctreeForPicking) {
          Oz.E.TransformToRef(tz, zz.getWorldMatrix(), this._tempRay);
          return zz._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Kg._getDefaultSubMeshCandidates(zz)
      }
      getCollidingSubMeshCandidates(zz, tz) {
        if (zz._submeshesOctree && zz.useOctreeForCollisions) {
          const sz = tz._velocityWorldLength + Math.max(tz._radius.x, tz._radius.y, tz._radius.z);
          return zz._submeshesOctree.intersects(tz._basePointWorld, sz)
        }
        return this.Kg._getDefaultSubMeshCandidates(zz)
      }
      rebuild() {}
      dispose() {}
    }
    let uz = !1;
    uz || (uz = !0, Fz.i.prototype.createOrUpdateSelectionOctree = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        sz = this._getComponent(oz.e.NAME_OCTREE);
      sz || (sz = new Kz(this), this.Jsz(sz)), this.UFz || (this.UFz = new Uz.b(Uz.b.CreationFuncForMeshes, zz, tz));
      const Fz = this.getWorldExtends();
      return this.UFz.update(Fz.min, Fz.max, this.meshes), this.UFz
    }, Object.defineProperty(Fz.i.prototype, "selectionOctree", {
      get: function() {
        return this.UFz
      },
      enumerable: !0,
      configurable: !0
    }), Xz.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const sz = this.aJ();
      let Fz = sz._getComponent(oz.e.NAME_OCTREE);
      Fz || (Fz = new Kz(sz), sz.Jsz(Fz)), this._submeshesOctree || (this._submeshesOctree = new Uz.b(Uz.b.CreationFuncForSubMeshes, zz, tz)), this.computeWorldMatrix(!0);
      const Wz = this.rC().boundingBox;
      return this._submeshesOctree.update(Wz.minimumWorld, Wz.maximumWorld, this.kY), this._submeshesOctree
    })
  },
  40681: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Jz,
      E: () => uz,
      d: () => Gz,
      e: () => Dz,
      g: () => wz,
      k: () => bz,
      o: () => ez,
      s: () => Cz,
      w: () => mz,
      z: () => Iz
    });
    var Fz = sz(36479),
      Wz = sz(36475),
      Xz = sz(36487),
      Oz = sz(39467),
      oz = sz(39284),
      vz = sz(36502),
      Uz = sz(39342);
    const Kz = {
      internalPickerForMesh: void 0
    };
    class uz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fz.c;
        this.origin = zz, this.direction = tz, this.length = sz, this.epsilon = Wz
      }
      clone() {
        return new uz(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Fz = uz._TmpVector3[0].m_(zz.x - sz, zz.y - sz, zz.z - sz),
          Wz = uz._TmpVector3[1].m_(tz.x + sz, tz.y + sz, tz.z + sz);
        let Xz, Oz, oz, vz, Uz = 0,
          Kz = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Fz.x || this.origin.x > Wz.x) return !1
        } else if (Xz = 1 / this.direction.x, Oz = (Fz.x - this.origin.x) * Xz, oz = (Wz.x - this.origin.x) * Xz, oz === -1 / 0 && (oz = 1 / 0), Oz > oz && (vz = Oz, Oz = oz, oz = vz), Uz = Math.max(Oz, Uz), Kz = Math.min(oz, Kz), Uz > Kz) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Fz.y || this.origin.y > Wz.y) return !1
        } else if (Xz = 1 / this.direction.y, Oz = (Fz.y - this.origin.y) * Xz, oz = (Wz.y - this.origin.y) * Xz, oz === -1 / 0 && (oz = 1 / 0), Oz > oz && (vz = Oz, Oz = oz, oz = vz), Uz = Math.max(Oz, Uz), Kz = Math.min(oz, Kz), Uz > Kz) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Fz.z || this.origin.z > Wz.z) return !1
        } else if (Xz = 1 / this.direction.z, Oz = (Fz.z - this.origin.z) * Xz, oz = (Wz.z - this.origin.z) * Xz, oz === -1 / 0 && (oz = 1 / 0), Oz > oz && (vz = Oz, Oz = oz, oz = vz), Uz = Math.max(Oz, Uz), Kz = Math.min(oz, Kz), Uz > Kz) return !1;
        return !0
      }
      intersectsBox(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(zz.minimum, zz.maximum, tz)
      }
      intersectsSphere(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = zz.center.x - this.origin.x,
          Fz = zz.center.y - this.origin.y,
          Wz = zz.center.z - this.origin.z,
          Xz = sz * sz + Fz * Fz + Wz * Wz,
          Oz = zz.radius + tz,
          oz = Oz * Oz;
        if (Xz <= oz) return !0;
        const vz = sz * this.direction.x + Fz * this.direction.y + Wz * this.direction.z;
        if (vz < 0) return !1;
        return Xz - vz * vz <= oz
      }
      intersectsTriangle(zz, tz, sz) {
        const Fz = uz._TmpVector3[0],
          Xz = uz._TmpVector3[1],
          oz = uz._TmpVector3[2],
          vz = uz._TmpVector3[3],
          Uz = uz._TmpVector3[4];
        tz.subtractToRef(zz, Fz), sz.subtractToRef(zz, Xz), Wz.p.CrossToRef(this.direction, Xz, oz);
        const Kz = Wz.p.Dot(Fz, oz);
        if (0 === Kz) return null;
        const Nz = 1 / Kz;
        this.origin.subtractToRef(zz, vz);
        const bz = Wz.p.Dot(vz, oz) * Nz;
        if (bz < -this.epsilon || bz > 1 + this.epsilon) return null;
        Wz.p.CrossToRef(vz, Fz, Uz);
        const wz = Wz.p.Dot(this.direction, Uz) * Nz;
        if (wz < -this.epsilon || bz + wz > 1 + this.epsilon) return null;
        const Dz = Wz.p.Dot(Xz, Uz) * Nz;
        return Dz > this.length || Dz < 0 ? null : new Oz.d(1 - bz - wz, bz, Dz)
      }
      intersectsPlane(zz) {
        let tz;
        const sz = Wz.p.Dot(zz.normal, this.direction);
        if (Math.abs(sz) < 9.99999997475243e-7) return null;
        {
          const Fz = Wz.p.Dot(zz.normal, this.origin);
          return tz = (-zz.d - Fz) / sz, tz < 0 ? tz < -9.99999997475243e-7 ? null : 0 : tz
        }
      }
      intersectsAxis(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (zz) {
          case "y": {
            const zz = (this.origin.y - tz) / this.direction.y;
            return zz > 0 ? null : new Wz.p(this.origin.x + this.direction.x * -zz, tz, this.origin.z + this.direction.z * -zz)
          }
          case "x": {
            const zz = (this.origin.x - tz) / this.direction.x;
            return zz > 0 ? null : new Wz.p(tz, this.origin.y + this.direction.y * -zz, this.origin.z + this.direction.z * -zz)
          }
          case "z": {
            const zz = (this.origin.z - tz) / this.direction.z;
            return zz > 0 ? null : new Wz.p(this.origin.x + this.direction.x * -zz, this.origin.y + this.direction.y * -zz, tz)
          }
          default:
            return null
        }
      }
      CFz(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Xz = arguments.length > 4 ? arguments[4] : void 0,
          Oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const oz = Wz.m.Matrix[0];
        return zz.getWorldMatrix().invertToRef(oz), this._tmpRay ? uz.TransformToRef(this, oz, this._tmpRay) : this._tmpRay = uz.Transform(this, oz), zz.intersects(this._tmpRay, tz, sz, Fz, Xz, Oz)
      }
      intersectsMeshes(zz, tz, sz) {
        sz ? sz.length = 0 : sz = [];
        for (let Fz = 0; Fz < zz.length; Fz++) {
          const Wz = this.CFz(zz[Fz], tz);
          Wz.hit && sz.push(Wz)
        }
        return sz.sort(this._comparePickingInfo), sz
      }
      _comparePickingInfo(zz, tz) {
        return zz.distance < tz.distance ? -1 : zz.distance > tz.distance ? 1 : 0
      }
      intersectionSegment(zz, tz, sz) {
        const Fz = this.origin,
          Xz = Wz.m.XD[0],
          Oz = Wz.m.XD[1],
          oz = Wz.m.XD[2],
          vz = Wz.m.XD[3];
        tz.subtractToRef(zz, Xz), this.direction.scaleToRef(uz._Rayl, oz), Fz.addToRef(oz, Oz), zz.subtractToRef(Fz, vz);
        const Uz = Wz.p.Dot(Xz, Xz),
          Kz = Wz.p.Dot(Xz, oz),
          Nz = Wz.p.Dot(oz, oz),
          bz = Wz.p.Dot(Xz, vz),
          wz = Wz.p.Dot(oz, vz),
          Dz = Uz * Nz - Kz * Kz;
        let gz, Hz, Bz = Dz,
          Pz = Dz;
        Dz < uz._Smallnum ? (gz = 0, Bz = 1, Hz = wz, Pz = Nz) : (gz = Kz * wz - Nz * bz, Hz = Uz * wz - Kz * bz, gz < 0 ? (gz = 0, Hz = wz, Pz = Nz) : gz > Bz && (gz = Bz, Hz = wz + Kz, Pz = Nz)), Hz < 0 ? (Hz = 0, -bz < 0 ? gz = 0 : -bz > Uz ? gz = Bz : (gz = -bz, Bz = Uz)) : Hz > Pz && (Hz = Pz, -bz + Kz < 0 ? gz = 0 : -bz + Kz > Uz ? gz = Bz : (gz = -bz + Kz, Bz = Uz));
        const rz = Math.abs(gz) < uz._Smallnum ? 0 : gz / Bz,
          Yz = Math.abs(Hz) < uz._Smallnum ? 0 : Hz / Pz,
          xz = Wz.m.XD[4];
        oz.scaleToRef(Yz, xz);
        const mz = Wz.m.XD[5];
        Xz.scaleToRef(rz, mz), mz.addInPlace(vz);
        const Jz = Wz.m.XD[6];
        mz.subtractToRef(xz, Jz);
        return Yz > 0 && Yz <= this.length && Jz.lengthSquared() < sz * sz ? mz.length() : -1
      }
      update(zz, tz, sz, Fz, Xz, Oz, oz) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          uz._RayDistant || (uz._RayDistant = uz.Zero()), uz._RayDistant.unprojectRayToRef(zz, tz, sz, Fz, Wz.e.IdentityReadOnly, Oz, oz);
          const vz = Wz.m.Matrix[0];
          Xz.invertToRef(vz), uz.TransformToRef(uz._RayDistant, vz, this)
        } else this.unprojectRayToRef(zz, tz, sz, Fz, Xz, Oz, oz);
        return this
      }
      static Zero() {
        return new uz(Wz.p.Zero(), Wz.p.Zero())
      }
      static CreateNew(zz, tz, sz, Fz, Wz, Xz, Oz) {
        return uz.Zero().update(zz, tz, sz, Fz, Wz, Xz, Oz)
      }
      static CreateNewFromTo(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.e.IdentityReadOnly;
        const Fz = new uz(new Wz.p(0, 0, 0), new Wz.p(0, 0, 0));
        return uz.CreateFromToToRef(zz, tz, Fz, sz)
      }
      static CreateFromToToRef(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wz.e.IdentityReadOnly;
        sz.origin.vsz(zz);
        const Xz = tz.subtractToRef(zz, sz.direction),
          Oz = Math.sqrt(Xz.x * Xz.x + Xz.y * Xz.y + Xz.z * Xz.z);
        return sz.length = Oz, sz.direction.normalize(), uz.TransformToRef(sz, Fz, sz)
      }
      static Transform(zz, tz) {
        const sz = new uz(new Wz.p(0, 0, 0), new Wz.p(0, 0, 0));
        return uz.TransformToRef(zz, tz, sz), sz
      }
      static TransformToRef(zz, tz, sz) {
        Wz.p.TransformCoordinatesToRef(zz.origin, tz, sz.origin), Wz.p.TransformNormalToRef(zz.direction, tz, sz.direction), sz.length = zz.length, sz.epsilon = zz.epsilon;
        const Fz = sz.direction,
          Xz = Fz.length();
        if (0 !== Xz && 1 !== Xz) {
          const zz = 1 / Xz;
          Fz.x *= zz, Fz.y *= zz, Fz.z *= zz, sz.length *= Xz
        }
        return sz
      }
      unprojectRayToRef(zz, tz, sz, Fz, Xz, Oz, oz) {
        const Uz = Wz.m.Matrix[0];
        Xz.multiplyToRef(Oz, Uz), Uz.multiplyToRef(oz, Uz), Uz.invert();
        const Kz = vz.c.LastCreatedEngine,
          uz = Wz.m.XD[0];
        uz.x = zz / sz * 2 - 1, uz.y = -(tz / Fz * 2 - 1), uz.z = Kz?.ysz ? 1 : Kz?.isNDCHalfZRange ? 0 : -1;
        const Nz = Wz.m.XD[1].m_(uz.x, uz.y, 1 - 1e-8),
          bz = Wz.m.XD[2],
          wz = Wz.m.XD[3];
        Wz.p.TransformCoordinatesToRef(uz, Uz, bz), Wz.p.TransformCoordinatesToRef(Nz, Uz, wz), this.origin.vsz(bz), wz.subtractToRef(bz, this.direction), this.direction.normalize()
      }
    }

    function Nz(zz, tz, sz, Fz, Wz) {
      let Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Oz = uz.Zero();
      return bz(zz, tz, sz, Fz, Oz, Wz, Xz), Oz
    }

    function bz(zz, tz, sz, Fz, Xz, Oz) {
      let oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Uz = zz.FD();
      if (!Oz && !(Oz = zz.activeCamera) && !(Oz = zz.cameraToUseForPointers)) return zz;
      const Kz = Oz.viewport,
        uz = Uz.getRenderHeight(),
        {
          x: Nz,
          y: bz,
          width: wz,
          height: Dz
        } = Kz.toGlobal(Uz.getRenderWidth(), uz),
        gz = 1 / Uz.getHardwareScalingLevel();
      return tz = tz * gz - Nz, sz = sz * gz - (uz - bz - Dz), Xz.update(tz, sz, wz, Dz, Fz || Wz.e.IdentityReadOnly, oz ? Wz.e.IdentityReadOnly : Oz.getViewMatrix(), Oz.getProjectionMatrix(), vz), zz
    }

    function wz(zz, tz, sz, Fz) {
      const Wz = uz.Zero();
      return Dz(zz, tz, sz, Wz, Fz), Wz
    }

    function Dz(zz, tz, sz, Fz, Xz) {
      if (!oz.e) return zz;
      const Oz = zz.FD();
      if (!Xz && !(Xz = zz.activeCamera) && !(Xz = zz.cameraToUseForPointers)) throw new Error("Active camera not set");
      const vz = Xz.viewport,
        Uz = Oz.getRenderHeight(),
        {
          x: Kz,
          y: uz,
          width: Nz,
          height: bz
        } = vz.toGlobal(Oz.getRenderWidth(), Uz),
        wz = Wz.e.Identity(),
        Dz = 1 / Oz.getHardwareScalingLevel();
      return tz = tz * Dz - Kz, sz = sz * Dz - (Uz - uz - bz), Fz.update(tz, sz, Nz, bz, wz, wz, Xz.getProjectionMatrix()), zz
    }

    function gz(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
      return Hz(zz, sz, Fz, tz(Fz, sz.enableDistantPicking), Wz, Xz, Oz, oz)
    }

    function Hz(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
      const vz = tz.intersects(Fz, Wz, Oz, Xz, sz, oz);
      return vz && vz.hit ? !Wz && null != zz && vz.distance >= zz.distance ? null : vz : null
    }

    function Bz(zz, tz) {
      return "InstancedLinesMesh" === zz || "LinesMesh" === zz ? tz.intersectionThreshold : 0
    }

    function Pz(zz) {
      const tz = zz.getClassName();
      if ("GreasedLineMesh" === tz) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const sz = zz.rawBoundingInfo;
      return {
        rawBoundingInfo: sz,
        intersectionThreshold: sz ? Bz(tz, zz) : 0
      }
    }

    function rz(zz, tz, sz, Fz, Wz) {
      const Xz = zz(sz, tz.enableDistantPicking);
      return Xz.intersectsSphere(Fz.uFz, Wz) && Xz.intersectsBox(Fz.boundingBox, Wz) ? Xz : null
    }

    function Yz(zz, tz, sz, Fz, Xz, Oz) {
      let vz = null;
      const Uz = !!(zz.activeCameras && zz.activeCameras.length > 1 && zz.cameraToUseForPointers !== zz.activeCamera),
        uz = zz.cameraToUseForPointers || zz.activeCamera,
        Nz = Kz.internalPickerForMesh || gz,
        bz = Nz === gz;
      for (let oz = 0; oz < zz.meshes.length; oz++) {
        const Kz = zz.meshes[oz];
        if (sz) {
          if (!sz(Kz, -1)) continue
        } else if (!Kz.isEnabled() || !Kz.isVisible || !Kz.Ng) continue;
        const wz = Uz && Kz.isWorldMatrixCameraDependent(),
          Dz = Kz.computeWorldMatrix(wz, uz);
        if (Kz.hasThinInstances && Kz.Wtz) {
          const zz = Nz(vz, tz, Kz, Dz, !0, !0, Oz);
          if (zz) {
            if (Xz) return zz;
            const {
              rawBoundingInfo: oz,
              intersectionThreshold: Uz
            } = Pz(Kz), uz = Kz._thinInstanceDataStorage.matrixData;
            if (uz) {
              const zz = Wz.m.Matrix[0],
                wz = Wz.m.Matrix[1],
                gz = Math.min(Kz.E1, uz.length >> 4);
              for (let Bz = 0; Bz < gz; Bz++) {
                if (sz && !sz(Kz, Bz)) continue;
                Wz.e.FromArrayToRef(uz, Bz << 4, zz), zz.multiplyToRef(Dz, wz);
                const gz = bz && oz ? rz(tz, Kz, wz, oz, Uz) : null;
                if (bz && oz && !gz) continue;
                const Pz = bz && gz ? Hz(vz, Kz, wz, gz, Fz, Xz, Oz, !0) : Nz(vz, tz, Kz, wz, Fz, Xz, Oz, !0);
                if (Pz && (vz = Pz, vz.thinInstanceIndex = Bz, Fz)) return vz
              }
            }
          }
        } else {
          const zz = Nz(vz, tz, Kz, Dz, Fz, Xz, Oz);
          if (zz && (vz = zz, Fz)) return vz
        }
      }
      return vz || new oz.e
    }

    function xz(zz, tz, sz, Fz) {
      if (!oz.e) return null;
      const Xz = [],
        Oz = !!(zz.activeCameras && zz.activeCameras.length > 1 && zz.cameraToUseForPointers !== zz.activeCamera),
        vz = zz.cameraToUseForPointers || zz.activeCamera,
        Uz = Kz.internalPickerForMesh || gz,
        uz = Uz === gz;
      for (let oz = 0; oz < zz.meshes.length; oz++) {
        const Kz = zz.meshes[oz];
        if (sz) {
          if (!sz(Kz, -1)) continue
        } else if (!Kz.isEnabled() || !Kz.isVisible || !Kz.Ng) continue;
        const Nz = Oz && Kz.isWorldMatrixCameraDependent(),
          bz = Kz.computeWorldMatrix(Nz, vz);
        if (Kz.hasThinInstances && Kz.Wtz) {
          if (Uz(null, tz, Kz, bz, !0, !0, Fz)) {
            const {
              rawBoundingInfo: zz,
              intersectionThreshold: Oz
            } = Pz(Kz), oz = Kz._thinInstanceDataStorage.matrixData;
            if (oz) {
              const vz = Wz.m.Matrix[0],
                Nz = Wz.m.Matrix[1],
                wz = Math.min(Kz.E1, oz.length >> 4);
              for (let Dz = 0; Dz < wz; Dz++) {
                if (sz && !sz(Kz, Dz)) continue;
                Wz.e.FromArrayToRef(oz, Dz << 4, vz), vz.multiplyToRef(bz, Nz);
                const wz = uz && zz ? rz(tz, Kz, Nz, zz, Oz) : null;
                if (uz && zz && !wz) continue;
                const gz = uz && wz ? Hz(null, Kz, Nz, wz, !1, !1, Fz, !0) : Uz(null, tz, Kz, Nz, !1, !1, Fz, !0);
                gz && (gz.thinInstanceIndex = Dz, Xz.push(gz))
              }
            }
          }
        } else {
          const zz = Uz(null, tz, Kz, bz, !1, !1, Fz);
          zz && Xz.push(zz)
        }
      }
      return Xz
    }

    function mz(zz, tz, sz, Fz, Xz, Oz) {
      if (!oz.e) return null;
      const vz = Yz(zz, (Fz => (zz._tempPickingRay || (zz._tempPickingRay = uz.Zero()), bz(zz, tz, sz, Fz, zz._tempPickingRay, Oz || null), zz._tempPickingRay)), Fz, Xz, !0);
      return vz && (vz.ray = Nz(zz, tz, sz, Wz.e.Identity(), Oz || null)), vz
    }

    function Jz(zz, tz, sz, Fz, Xz, Oz, oz) {
      const vz = Yz(zz, ((Fz, Wz) => (zz._tempPickingRay || (zz._tempPickingRay = uz.Zero()), bz(zz, tz, sz, Fz, zz._tempPickingRay, Oz || null, !1, Wz), zz._tempPickingRay)), Fz, Xz, !1, oz);
      return vz && (vz.ray = Nz(zz, tz, sz, Wz.e.Identity(), Oz || null)), vz
    }

    function Iz(zz, tz, sz, Fz, Xz) {
      const Oz = Yz(zz, (sz => (zz._pickWithRayInverseMatrix || (zz._pickWithRayInverseMatrix = Wz.e.Identity()), sz.invertToRef(zz._pickWithRayInverseMatrix), zz._cachedRayForTransform || (zz._cachedRayForTransform = uz.Zero()), uz.TransformToRef(tz, zz._pickWithRayInverseMatrix, zz._cachedRayForTransform), zz._cachedRayForTransform)), sz, Fz, !1, Xz);
      return Oz && (Oz.ray = tz), Oz
    }

    function Cz(zz, tz, sz, Fz, Wz, Xz) {
      return xz(zz, (Fz => Nz(zz, tz, sz, Fz, Wz || null)), Fz, Xz)
    }

    function ez(zz, tz, sz, Fz) {
      return xz(zz, (sz => (zz._pickWithRayInverseMatrix || (zz._pickWithRayInverseMatrix = Wz.e.Identity()), sz.invertToRef(zz._pickWithRayInverseMatrix), zz._cachedRayForTransform || (zz._cachedRayForTransform = uz.Zero()), uz.TransformToRef(tz, zz._pickWithRayInverseMatrix, zz._cachedRayForTransform), zz._cachedRayForTransform)), sz, Fz)
    }

    function Zz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Fz = arguments.length > 3 ? arguments[3] : void 0,
        Xz = arguments.length > 4 ? arguments[4] : void 0;
      Fz || (Fz = zz.getWorldMatrix()), tz.length = sz, Xz ? tz.origin.vsz(Xz) : tz.origin.vsz(zz.position);
      const Oz = Wz.m.XD[2];
      Oz.set(0, 0, zz._scene.useRightHandedSystem ? -1 : 1);
      const oz = Wz.m.XD[3];
      return Wz.p.TransformNormalToRef(Oz, Fz, oz), Wz.p.NormalizeToRef(oz, tz.direction), tz
    }

    function Gz(zz, tz) {
      tz && (tz.prototype.getForwardRay = function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        return Zz(this, new uz(Wz.p.Zero(), Wz.p.Zero(), zz), zz, tz, sz)
      }, tz.prototype.getForwardRayToRef = function(zz) {
        return Zz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), zz && (Uz.c._IsPickingAvailable = !0, zz.prototype.createPickingRay = function(zz, tz, sz, Fz) {
        return Nz(this, zz, tz, sz, Fz, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    uz._TmpVector3 = (0, Xz.c)(6, Wz.p.Zero), uz._RayDistant = uz.Zero(), uz._Smallnum = 1e-8, uz._Rayl = 1e9
  },
  40674: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz.E
    });
    var Fz = sz(39256),
      Wz = sz(39370),
      Xz = sz(40681);
    let Oz = !1;
    Oz || (Oz = !0, (0, Xz.d)(Fz.i, Wz.b), Fz.i.prototype.createPickingRayToRef = function(zz, tz, sz, Fz, Wz) {
      let Oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Xz.k)(this, zz, tz, sz, Fz, Wz, Oz, oz)
    }, Fz.i.prototype.createPickingRayInCameraSpace = function(zz, tz, sz) {
      return (0, Xz.g)(this, zz, tz, sz)
    }, Fz.i.prototype.createPickingRayInCameraSpaceToRef = function(zz, tz, sz, Fz) {
      return (0, Xz.e)(this, zz, tz, sz, Fz)
    }, Fz.i.prototype.pickWithBoundingInfo = function(zz, tz, sz, Fz, Wz) {
      return (0, Xz.w)(this, zz, tz, sz, Fz, Wz)
    }, Fz.i.prototype.gb = function(zz, tz, sz, Fz, Wz, Oz) {
      let oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Xz.D)(this, zz, tz, sz, Fz, Wz, Oz, oz)
    }, Fz.i.prototype.pickWithRay = function(zz, tz, sz, Fz) {
      return (0, Xz.z)(this, zz, tz, sz, Fz)
    }, Fz.i.prototype.multiPick = function(zz, tz, sz, Fz, Wz) {
      return (0, Xz.s)(this, zz, tz, sz, Fz, Wz)
    }, Fz.i.prototype.multiPickWithRay = function(zz, tz, sz) {
      return (0, Xz.o)(this, zz, tz, sz)
    })
  },
  40689: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Kz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36475),
      Oz = sz(39421),
      oz = sz(40695),
      vz = sz(39374),
      Uz = sz(36518);
    let Kz = (() => {
        var zz;
        let tz, sz, vz, Uz, Kz, uz, Nz, bz, wz = oz.e,
          Dz = [],
          gz = [],
          Hz = [],
          Bz = [],
          Pz = [],
          rz = [],
          Yz = [],
          xz = [],
          mz = [],
          Jz = [],
          Iz = [],
          Cz = [],
          ez = [];
        return zz = class extends wz {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(zz) {
            this._shadowFrustumSize = zz, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(zz) {
            this._shadowOrthoScale = zz, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(zz) {
            this._orthoLeft = zz
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(zz) {
            this._orthoRight = zz
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(zz) {
            this._orthoTop = zz
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(zz) {
            this._orthoBottom = zz
          }
          constructor(zz, tz, sz, Wz) {
            super(zz, sz, Wz), this._shadowFrustumSize = ((0, Fz.k)(this, Dz), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Fz.k)(this, gz, !0), this.autoCalcShadowZBounds = ((0, Fz.k)(this, Hz), (0, Fz.k)(this, Bz, !1)), this._orthoLeft = ((0, Fz.k)(this, Pz), (0, Fz.k)(this, rz, Number.MAX_VALUE)), this._orthoRight = ((0, Fz.k)(this, Yz), (0, Fz.k)(this, xz, Number.MIN_VALUE)), this._orthoTop = ((0, Fz.k)(this, mz), (0, Fz.k)(this, Jz, Number.MIN_VALUE)), this._orthoBottom = ((0, Fz.k)(this, Iz), (0, Fz.k)(this, Cz, Number.MAX_VALUE)), (0, Fz.k)(this, ez), this.position = tz.scale(-1), this.direction = tz
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Oz.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(zz, tz, sz) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(zz) : this._setDefaultAutoExtendShadowProjectionMatrix(zz, tz, sz)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(zz) {
            const tz = this.aJ().activeCamera;
            Xz.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : tz ? tz.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : tz ? tz.maxZ : 1e4, zz, this.aJ().FD().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(zz, tz, sz) {
            const Fz = this.aJ().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const zz = Xz.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Fz = Number.MAX_VALUE,
                Wz = -Number.MAX_VALUE;
              for (let Oz = 0; Oz < sz.length; Oz++) {
                const oz = sz[Oz];
                if (!oz) continue;
                const vz = oz.rC().boundingBox;
                for (let sz = 0; sz < vz.vectorsWorld.length; sz++) Xz.p.TransformCoordinatesToRef(vz.vectorsWorld[sz], tz, zz), zz.x < this._orthoLeft && (this._orthoLeft = zz.x), zz.y < this._orthoBottom && (this._orthoBottom = zz.y), zz.x > this._orthoRight && (this._orthoRight = zz.x), zz.y > this._orthoTop && (this._orthoTop = zz.y), this.autoCalcShadowZBounds && (zz.z < Fz && (Fz = zz.z), zz.z > Wz && (Wz = zz.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Fz, this._shadowMaxZ = Wz)
            }
            const Wz = this._orthoRight - this._orthoLeft,
              Oz = this._orthoTop - this._orthoBottom,
              oz = void 0 !== this.shadowMinZ ? this.shadowMinZ : Fz?.minZ || 0,
              vz = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Fz?.maxZ || 1e4,
              Uz = this.aJ().FD().ysz;
            Xz.e.OrthoOffCenterLHToRef(this._orthoLeft - Wz * this.shadowOrthoScale, this._orthoRight + Wz * this.shadowOrthoScale, this._orthoBottom - Oz * this.shadowOrthoScale, this._orthoTop + Oz * this.shadowOrthoScale, Uz ? vz : oz, Uz ? oz : vz, zz, this.aJ().FD().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(zz, tz) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, tz), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, tz), this)
          }
          transferToNodeMaterialEffect(zz, tz) {
            return this.computeTransformedInformation() ? (zz.setFloat3(tz, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (zz.setFloat3(tz, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(zz) {
            const tz = this._scene.FD();
            return !tz.ysz && tz.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(zz) {
            const tz = this._scene.FD();
            return tz.ysz && tz.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(zz, tz) {
            zz["DIRLIGHT" + tz] = !0
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(wz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], vz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], Kz = [(0, Wz.J)("orthoLeft")], uz = [(0, Wz.J)("orthoRight")], Nz = [(0, Wz.J)("orthoTop")], bz = [(0, Wz.J)("orthoBottom")], (0, Fz.h)(zz, null, tz, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: zz => "shadowFrustumSize" in zz,
              get: zz => zz.shadowFrustumSize
            },
            metadata: Xz
          }, null, Dz), (0, Fz.h)(zz, null, sz, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "shadowOrthoScale" in zz,
              get: zz => zz.shadowOrthoScale
            },
            metadata: Xz
          }, null, Dz), (0, Fz.h)(null, null, vz, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: zz => "autoUpdateExtends" in zz,
              get: zz => zz.autoUpdateExtends,
              set: (zz, tz) => {
                zz.autoUpdateExtends = tz
              }
            },
            metadata: Xz
          }, gz, Hz), (0, Fz.h)(null, null, Uz, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: zz => "autoCalcShadowZBounds" in zz,
              get: zz => zz.autoCalcShadowZBounds,
              set: (zz, tz) => {
                zz.autoCalcShadowZBounds = tz
              }
            },
            metadata: Xz
          }, Bz, Pz), (0, Fz.h)(null, null, Kz, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: zz => "_orthoLeft" in zz,
              get: zz => zz._orthoLeft,
              set: (zz, tz) => {
                zz._orthoLeft = tz
              }
            },
            metadata: Xz
          }, rz, Yz), (0, Fz.h)(null, null, uz, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: zz => "_orthoRight" in zz,
              get: zz => zz._orthoRight,
              set: (zz, tz) => {
                zz._orthoRight = tz
              }
            },
            metadata: Xz
          }, xz, mz), (0, Fz.h)(null, null, Nz, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: zz => "_orthoTop" in zz,
              get: zz => zz._orthoTop,
              set: (zz, tz) => {
                zz._orthoTop = tz
              }
            },
            metadata: Xz
          }, Jz, Iz), (0, Fz.h)(null, null, bz, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: zz => "_orthoBottom" in zz,
              get: zz => zz._orthoBottom,
              set: (zz, tz) => {
                zz._orthoBottom = tz
              }
            },
            metadata: Xz
          }, Cz, ez), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz
      })(),
      uz = !1;
    uz || (uz = !0, vz.e.AddNodeConstructor("Light_Type_1", ((zz, tz) => () => new Kz(zz, Xz.p.Zero(), tz))), (0, Uz.g)("BABYLON.DirectionalLight", Kz))
  },
  40706: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => qt
    });
    var Fz = sz(38126),
      Wz = sz(36505),
      Xz = sz(36475),
      Oz = sz(39293),
      oz = sz(40715),
      vz = sz(36502),
      Uz = sz(39439),
      Kz = sz(36654),
      uz = sz(38131),
      Nz = sz(38091),
      bz = sz(36507);
    class wz {
      constructor() {
        this.direction1 = new Xz.p(0, 1, 0), this.direction2 = new Xz.p(0, 1, 0)
      }
      startDirectionFunction(zz, tz, sz, Fz) {
        const Wz = (0, bz.RandomRange)(this.direction1.x, this.direction2.x),
          Oz = (0, bz.RandomRange)(this.direction1.y, this.direction2.y),
          oz = (0, bz.RandomRange)(this.direction1.z, this.direction2.z);
        Fz ? tz.m_(Wz, Oz, oz) : Xz.p.TransformNormalFromFloatsToRef(Wz, Oz, oz, zz, tz)
      }
      startPositionFunction(zz, tz, sz, Fz) {
        Fz ? tz.m_(0, 0, 0) : Xz.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, zz, tz)
      }
      clone() {
        const zz = new wz;
        return Nz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.direction1 = this.direction1.hsz(), zz.direction2 = this.direction2.hsz(), zz
      }
      parse(zz) {
        Xz.p.FromArrayToRef(zz.direction1, 0, this.direction1), Xz.p.FromArrayToRef(zz.direction2, 0, this.direction2)
      }
    }
    class Dz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = zz, this.radiusRange = tz, this.directionRandomizer = sz
      }
      startDirectionFunction(zz, tz, sz, Fz) {
        const Wz = sz.position.subtract(zz.getTranslation()).normalize(),
          Oz = (0, bz.RandomRange)(0, this.directionRandomizer),
          oz = (0, bz.RandomRange)(0, this.directionRandomizer),
          vz = (0, bz.RandomRange)(0, this.directionRandomizer);
        Wz.x += Oz, Wz.y += oz, Wz.z += vz, Wz.normalize(), Fz ? tz.vsz(Wz) : Xz.p.TransformNormalFromFloatsToRef(Wz.x, Wz.y, Wz.z, zz, tz)
      }
      startPositionFunction(zz, tz, sz, Fz) {
        const Wz = this.radius - (0, bz.RandomRange)(0, this.radius * this.radiusRange),
          Oz = (0, bz.RandomRange)(0, 1),
          oz = (0, bz.RandomRange)(0, 2 * Math.PI),
          vz = Math.acos(2 * Oz - 1),
          Uz = Wz * Math.cos(oz) * Math.sin(vz),
          Kz = Wz * Math.cos(vz),
          uz = Wz * Math.sin(oz) * Math.sin(vz);
        Fz ? tz.m_(Uz, Math.abs(Kz), uz) : Xz.p.TransformCoordinatesFromFloatsToRef(Uz, Math.abs(Kz), uz, zz, tz)
      }
      clone() {
        const zz = new Dz(this.radius, this.directionRandomizer);
        return Nz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("radiusRange", this.radiusRange), zz.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("radiusRange", 1), zz.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.radius = this.radius, zz.radiusRange = this.radiusRange, zz.directionRandomizer = this.directionRandomizer, zz
      }
      parse(zz) {
        this.radius = zz.radius, this.radiusRange = zz.radiusRange, this.directionRandomizer = zz.directionRandomizer
      }
    }
    class gz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = zz, this.radiusRange = tz, this.directionRandomizer = sz
      }
      startDirectionFunction(zz, tz, sz, Fz) {
        const Wz = sz.position.subtract(zz.getTranslation()).normalize(),
          Oz = (0, bz.RandomRange)(0, this.directionRandomizer),
          oz = (0, bz.RandomRange)(0, this.directionRandomizer),
          vz = (0, bz.RandomRange)(0, this.directionRandomizer);
        Wz.x += Oz, Wz.y += oz, Wz.z += vz, Wz.normalize(), Fz ? tz.vsz(Wz) : Xz.p.TransformNormalFromFloatsToRef(Wz.x, Wz.y, Wz.z, zz, tz)
      }
      startPositionFunction(zz, tz, sz, Fz) {
        const Wz = this.radius - (0, bz.RandomRange)(0, this.radius * this.radiusRange),
          Oz = (0, bz.RandomRange)(0, 1),
          oz = (0, bz.RandomRange)(0, 2 * Math.PI),
          vz = Math.acos(2 * Oz - 1),
          Uz = Wz * Math.cos(oz) * Math.sin(vz),
          Kz = Wz * Math.cos(vz),
          uz = Wz * Math.sin(oz) * Math.sin(vz);
        Fz ? tz.m_(Uz, Kz, uz) : Xz.p.TransformCoordinatesFromFloatsToRef(Uz, Kz, uz, zz, tz)
      }
      clone() {
        const zz = new gz(this.radius, this.directionRandomizer);
        return Nz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("radiusRange", this.radiusRange), zz.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("radiusRange", 1), zz.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.radius = this.radius, zz.radiusRange = this.radiusRange, zz.directionRandomizer = this.directionRandomizer, zz
      }
      parse(zz) {
        this.radius = zz.radius, this.radiusRange = zz.radiusRange, this.directionRandomizer = zz.directionRandomizer
      }
    }
    class Hz extends gz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Xz.p(0, 1, 0),
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Xz.p(0, 1, 0);
        super(zz), this.direction1 = tz, this.direction2 = sz
      }
      startDirectionFunction(zz, tz, sz, Fz) {
        const Wz = (0, bz.RandomRange)(this.direction1.x, this.direction2.x),
          Oz = (0, bz.RandomRange)(this.direction1.y, this.direction2.y),
          oz = (0, bz.RandomRange)(this.direction1.z, this.direction2.z);
        Fz ? tz.m_(Wz, Oz, oz) : Xz.p.TransformNormalFromFloatsToRef(Wz, Oz, oz, zz, tz)
      }
      clone() {
        const zz = new Hz(this.radius, this.direction1, this.direction2);
        return Nz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("radiusRange", this.radiusRange), zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("radiusRange", 1), zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const zz = super.serialize();
        return zz.direction1 = this.direction1.hsz(), zz.direction2 = this.direction2.hsz(), zz
      }
      parse(zz) {
        super.parse(zz), Xz.p.FromArrayToRef(zz.direction1, 0, this.direction1), Xz.p.FromArrayToRef(zz.direction2, 0, this.direction2)
      }
    }
    var Bz = sz(38084);
    class Pz {
      get radius() {
        return this._radius
      }
      set radius(zz) {
        this._radius = zz, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(zz) {
        this._angle = zz, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = sz, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = tz, this.radius = zz
      }
      startDirectionFunction(zz, tz, sz, Fz) {
        const Wz = sz.position.subtract(zz.getTranslation()).normalize(),
          Oz = (0, bz.RandomRange)(0, this.directionRandomizer),
          oz = (0, bz.RandomRange)(0, this.directionRandomizer),
          vz = (0, bz.RandomRange)(0, this.directionRandomizer);
        Wz.x += Oz, Wz.y += oz, Wz.z += vz, Wz.normalize(), Fz ? tz.vsz(Wz) : Xz.p.TransformNormalFromFloatsToRef(Wz.x, Wz.y, Wz.z, zz, tz)
      }
      startPositionFunction(zz, tz, sz, Fz) {
        const Wz = (0, bz.RandomRange)(0, 2 * Math.PI);
        let Oz;
        this.emitFromSpawnPointOnly ? Oz = 1e-4 : (Oz = (0, bz.RandomRange)(0, this.heightRange), Oz = 1 - Oz * Oz);
        let oz = this._radius - (0, bz.RandomRange)(0, this._radius * this.radiusRange);
        oz *= Oz;
        const vz = oz * Math.sin(Wz),
          Uz = oz * Math.cos(Wz),
          Kz = Oz * this._height;
        if (Fz) return tz.x = vz, tz.y = Kz, void(tz.z = Uz);
        Xz.p.TransformCoordinatesFromFloatsToRef(vz, Kz, Uz, zz, tz)
      }
      clone() {
        const zz = new Pz(this._radius, this._angle, this.directionRandomizer);
        return Nz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat2("radius", this._radius, this.radiusRange), zz.setFloat("coneAngle", this._angle), zz.setFloat2("height", this._height, this.heightRange), zz.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 2), zz.addUniform("coneAngle", 1), zz.addUniform("height", 2), zz.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let zz = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (zz += "\n#define CONEEMITTERSPAWNPOINT"), zz
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.radius = this._radius, zz.angle = this._angle, zz.directionRandomizer = this.directionRandomizer, zz.radiusRange = this.radiusRange, zz.heightRange = this.heightRange, zz.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, zz
      }
      parse(zz) {
        this.radius = zz.radius, this.angle = zz.angle, this.directionRandomizer = zz.directionRandomizer, this.radiusRange = void 0 !== zz.radiusRange ? zz.radiusRange : 1, this.heightRange = void 0 !== zz.heightRange ? zz.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== zz.emitFromSpawnPointOnly && zz.emitFromSpawnPointOnly
      }
    }
    class rz extends Pz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Xz.p(0, 1, 0),
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Xz.p(0, 1, 0);
        super(zz, tz), this.direction1 = sz, this.direction2 = Fz
      }
      startDirectionFunction(zz, tz, sz, Fz) {
        const Wz = (0, bz.RandomRange)(this.direction1.x, this.direction2.x),
          Oz = (0, bz.RandomRange)(this.direction1.y, this.direction2.y),
          oz = (0, bz.RandomRange)(this.direction1.z, this.direction2.z);
        Fz ? tz.m_(Wz, Oz, oz) : Xz.p.TransformNormalFromFloatsToRef(Wz, Oz, oz, zz, tz)
      }
      clone() {
        const zz = new rz(this.radius, this.angle, this.direction1, this.direction2);
        return Nz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        super.applyToShader(zz), zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        super.buildUniformLayout(zz), zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const zz = super.serialize();
        return zz.direction1 = this.direction1.hsz(), zz.direction2 = this.direction2.hsz(), zz
      }
      parse(zz) {
        super.parse(zz), Xz.p.FromArrayToRef(zz.direction1, 0, this.direction1), Xz.p.FromArrayToRef(zz.direction2, 0, this.direction2)
      }
    }
    class Yz {
      get mesh() {
        return this._mesh
      }
      set mesh(zz) {
        this._mesh !== zz && (this._mesh = zz, zz ? (this._indices = zz.Qsz(), this._positions = zz.getVerticesData(Oz.m.PositionKind), this._normals = zz.getVerticesData(Oz.m.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Xz.p.Zero(), this._mesh = null, this.direction1 = new Xz.p(0, 1, 0), this.direction2 = new Xz.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = zz
      }
      startDirectionFunction(zz, tz, sz, Fz) {
        if (this.useMeshNormalsForDirection && this._normals) return void Xz.p.TransformNormalToRef(this._storedNormal, zz, tz);
        const Wz = (0, bz.RandomRange)(this.direction1.x, this.direction2.x),
          Oz = (0, bz.RandomRange)(this.direction1.y, this.direction2.y),
          oz = (0, bz.RandomRange)(this.direction1.z, this.direction2.z);
        Fz ? tz.m_(Wz, Oz, oz) : Xz.p.TransformNormalFromFloatsToRef(Wz, Oz, oz, zz, tz)
      }
      startPositionFunction(zz, tz, sz, Fz) {
        if (!this._indices || !this._positions) return;
        const Wz = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Oz = Math.random(),
          oz = Math.random() * (1 - Oz),
          vz = 1 - Oz - oz,
          Uz = this._indices[Wz],
          Kz = this._indices[Wz + 1],
          uz = this._indices[Wz + 2],
          Nz = Xz.m.XD[0],
          bz = Xz.m.XD[1],
          wz = Xz.m.XD[2],
          Dz = Xz.m.XD[3];
        Xz.p.FromArrayToRef(this._positions, 3 * Uz, Nz), Xz.p.FromArrayToRef(this._positions, 3 * Kz, bz), Xz.p.FromArrayToRef(this._positions, 3 * uz, wz), Dz.x = Oz * Nz.x + oz * bz.x + vz * wz.x, Dz.y = Oz * Nz.y + oz * bz.y + vz * wz.y, Dz.z = Oz * Nz.z + oz * bz.z + vz * wz.z, Fz ? tz.m_(Dz.x, Dz.y, Dz.z) : Xz.p.TransformCoordinatesFromFloatsToRef(Dz.x, Dz.y, Dz.z, zz, tz), this.useMeshNormalsForDirection && this._normals && (Xz.p.FromArrayToRef(this._normals, 3 * Uz, Nz), Xz.p.FromArrayToRef(this._normals, 3 * Kz, bz), Xz.p.FromArrayToRef(this._normals, 3 * uz, wz), this._storedNormal.x = Oz * Nz.x + oz * bz.x + vz * wz.x, this._storedNormal.y = Oz * Nz.y + oz * bz.y + vz * wz.y, this._storedNormal.z = Oz * Nz.z + oz * bz.z + vz * wz.z)
      }
      clone() {
        const zz = new Yz(this.mesh);
        return Nz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.direction1 = this.direction1.hsz(), zz.direction2 = this.direction2.hsz(), zz.meshId = this.mesh?.id, zz.useMeshNormalsForDirection = this.useMeshNormalsForDirection, zz
      }
      parse(zz, tz) {
        Xz.p.FromArrayToRef(zz.direction1, 0, this.direction1), Xz.p.FromArrayToRef(zz.direction2, 0, this.direction2), zz.meshId && tz && (this.mesh = tz.getLastMeshById(zz.meshId)), this.useMeshNormalsForDirection = zz.useMeshNormalsForDirection
      }
    }
    class xz {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(zz) {
        this._targetStopDuration !== zz && (this._targetStopDuration = zz)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(zz) {
        this._noiseTexture !== zz && (this._noiseTexture = zz, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(zz) {
        this._attractors.push(zz)
      }
      removeAttractor(zz) {
        const tz = this._attractors.indexOf(zz); - 1 !== tz && this._attractors.splice(tz, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(zz) {
        this._animationSheetEnabled !== zz && (this._animationSheetEnabled = zz)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(zz) {
        this._isAnimationSheetEnabled != zz && (this._isAnimationSheetEnabled = zz, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(zz) {
        this._useLogarithmicDepth = zz && this.aJ().FD().getCaps().fragmentDepthSupported
      }
      aJ() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(zz) {
        switch (zz) {
          case xz.BLENDMODE_MULTIPLYADD:
            return;
          case xz.BLENDMODE_ADD:
            zz = 1;
            break;
          case xz.BLENDMODE_ONEONE:
            zz = 6;
            break;
          case xz.BLENDMODE_STANDARD:
            zz = 2;
            break;
          case xz.BLENDMODE_MULTIPLY:
            zz = 4;
            break;
          case xz.BLENDMODE_SUBTRACT:
            zz = 3
        }
        this._engine.setAlphaMode(zz)
      }
      getDragGradients() {
        return this._dragGradients
      }
      getLimitVelocityGradients() {
        return this._limitVelocityGradients
      }
      getColorGradients() {
        return this._colorGradients
      }
      getSizeGradients() {
        return this._sizeGradients
      }
      getColorRemapGradients() {
        return this._colorRemapGradients
      }
      getAlphaRemapGradients() {
        return this._alphaRemapGradients
      }
      getLifeTimeGradients() {
        return this._lifeTimeGradients
      }
      getAngularSpeedGradients() {
        return this._angularSpeedGradients
      }
      getVelocityGradients() {
        return this._velocityGradients
      }
      getStartSizeGradients() {
        return this._startSizeGradients
      }
      getEmitRateGradients() {
        return this._emitRateGradients
      }
      addEmitRateGradient(zz, tz, sz) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, zz, tz, sz), this
      }
      removeEmitRateGradient(zz) {
        return this._removeFactorGradient(this._emitRateGradients, zz), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Xz.p.Zero()
      }
      set direction1(zz) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = zz)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Xz.p.Zero()
      }
      set direction2(zz) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = zz)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Xz.p.Zero()
      }
      set minEmitBox(zz) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = zz)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Xz.p.Zero()
      }
      set maxEmitBox(zz) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = zz)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(zz) {
        this._billboardMode !== zz && (this._billboardMode = zz, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(zz) {
        this._isBillboardBased !== zz && (this._isBillboardBased = zz, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(zz) {
        this._attachImageProcessingConfiguration(zz)
      }
      _attachImageProcessingConfiguration(zz) {
        zz !== this._imageProcessingConfiguration && (!zz && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = zz)
      }
      _reset() {}
      _addFactorGradient(zz, tz, sz, Wz) {
        const Xz = new Fz.m(tz, sz, Wz);
        zz.push(Xz), zz.sort(((zz, tz) => zz.gradient < tz.gradient ? -1 : zz.gradient > tz.gradient ? 1 : 0))
      }
      _removeFactorGradient(zz, tz) {
        if (!zz) return;
        let sz = 0;
        for (const Fz of zz) {
          if (Fz.gradient === tz) {
            zz.splice(sz, 1);
            break
          }
          sz++
        }
      }
      _removeGradientAndTexture(zz, tz, sz) {
        if (!tz) return this;
        let Fz = 0;
        for (const Wz of tz) {
          if (Wz.gradient === zz) {
            tz.splice(Fz, 1);
            break
          }
          Fz++
        }
        return sz && sz.dispose(), this
      }
      constructor(zz) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Xz.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Xz.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = xz.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Xz.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Xz.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Xz.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Kz.d(1, 1, 1, 1), this.color2 = new Kz.d(1, 1, 1, 1), this.colorDead = new Kz.d(0, 0, 0, 1), this.textureMask = new Kz.d(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Uz.c, this.id = zz, this.name = zz
      }
      createPointEmitter(zz, tz) {
        const sz = function(zz, tz) {
          const sz = new wz;
          return sz.direction1 = zz, sz.direction2 = tz, sz
        }(zz, tz);
        return this.particleEmitterType = sz, sz
      }
      createHemisphericEmitter() {
        const zz = function() {
          return new Dz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = zz, zz
      }
      createSphereEmitter() {
        const zz = function() {
          return new gz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = zz, zz
      }
      createDirectedSphereEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Xz.p(0, 1, 0),
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Xz.p(0, 1, 0);
          return new Hz(zz, tz, sz)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Xz.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Xz.p(0, 1, 0));
        return this.particleEmitterType = zz, zz
      }
      createCylinderEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Bz.g(zz, tz, sz, Fz)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = zz, zz
      }
      createDirectedCylinderEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Xz.p(0, 1, 0),
            Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Xz.p(0, 1, 0);
          return new Bz.d(zz, tz, sz, Fz, Wz)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Xz.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Xz.p(0, 1, 0));
        return this.particleEmitterType = zz, zz
      }
      createConeEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Pz(zz, tz)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = zz, zz
      }
      createDirectedConeEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Xz.p(0, 1, 0),
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Xz.p(0, 1, 0);
          return new rz(zz, tz, sz, Fz)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Xz.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Xz.p(0, 1, 0));
        return this.particleEmitterType = zz, zz
      }
      createBoxEmitter(zz, tz, sz, Fz) {
        const Wz = new uz.b;
        return this.particleEmitterType = Wz, this.direction1 = zz, this.direction2 = tz, this.minEmitBox = sz, this.maxEmitBox = Fz, Wz
      }
      createMeshEmitter() {
        const zz = function() {
          return new Yz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = zz, zz
      }
    }
    xz.BLENDMODE_ONEONE = 0, xz.BLENDMODE_STANDARD = 1, xz.BLENDMODE_ADD = 2, xz.BLENDMODE_MULTIPLY = 3, xz.BLENDMODE_MULTIPLYADD = 4, xz.BLENDMODE_SUBTRACT = -1;
    class mz {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Kz.d(0, 0, 0, 0), this.currentColor2 = new Kz.d(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Xz.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class Jz {
      constructor(zz) {
        this.particleSystem = zz, this.position = Xz.p.Zero(), this.direction = Xz.p.Zero(), this.color = new Kz.d(0, 0, 0, 0), this.colorStep = new Kz.d(0, 0, 0, 0), this.initialColor = new Kz.d(0, 0, 0, 0), this.colorDead = new Kz.d(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Xz.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new mz, this.id = Jz._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let zz = this.age,
          tz = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === tz ? (tz = 1, zz = this._properties.randomCellOffset) : zz += this._properties.randomCellOffset);
        const sz = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Fz;
        Fz = this._properties.initialSpriteCellLoop ? (0, bz.Clamp)(zz * tz % this.lifeTime / this.lifeTime) : (0, bz.Clamp)(zz * tz / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Fz * sz | 0
      }
      _inheritParticleInfoToSubEmitter(zz) {
        if (zz.particleSystem.emitter.position) {
          const tz = zz.particleSystem.emitter;
          if (tz.position.vsz(this.position), zz.inheritDirection) {
            const zz = Xz.m.XD[0];
            this.direction.normalizeToRef(zz), tz.setDirection(zz, 0, Math.PI / 2)
          }
        } else {
          zz.particleSystem.emitter.vsz(this.position)
        }
        this.direction.scaleToRef(zz.inheritedVelocityAmount / 2, Xz.m.XD[0]), zz.particleSystem._inheritedVelocityOffset.vsz(Xz.m.XD[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const zz of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(zz)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = Jz._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(zz) {
        zz.position.vsz(this.position), this._properties.initialDirection ? zz._properties.initialDirection ? zz._properties.initialDirection.vsz(this._properties.initialDirection) : zz._properties.initialDirection = this._properties.initialDirection.clone() : zz._properties.initialDirection = null, zz.direction.vsz(this.direction), this._properties.localPosition && (zz._properties.localPosition ? zz._properties.localPosition.vsz(this._properties.localPosition) : zz._properties.localPosition = this._properties.localPosition.clone()), zz.color.vsz(this.color), zz.colorStep.vsz(this.colorStep), zz.initialColor.vsz(this.initialColor), zz.colorDead.vsz(this.colorDead), zz.lifeTime = this.lifeTime, zz.age = this.age, zz._properties.randomCellOffset = this._properties.randomCellOffset, zz.size = this.size, zz.scale.vsz(this.scale), zz.angle = this.angle, zz.angularSpeed = this.angularSpeed, zz.particleSystem = this.particleSystem, zz.cellIndex = this.cellIndex, zz.id = this.id, zz._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (zz._properties.currentColorGradient = this._properties.currentColorGradient, zz._properties.currentColor1.vsz(this._properties.currentColor1), zz._properties.currentColor2.vsz(this._properties.currentColor2)), this._properties.currentSizeGradient && (zz._properties.currentSizeGradient = this._properties.currentSizeGradient, zz._properties.currentSize1 = this._properties.currentSize1, zz._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (zz._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, zz._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, zz._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (zz._properties.currentVelocityGradient = this._properties.currentVelocityGradient, zz._properties.currentVelocity1 = this._properties.currentVelocity1, zz._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (zz._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, zz._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, zz._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (zz._properties.currentDragGradient = this._properties.currentDragGradient, zz._properties.currentDrag1 = this._properties.currentDrag1, zz._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (zz._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, zz._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, zz._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (zz.remapData && this.remapData ? zz.remapData.vsz(this.remapData) : zz.remapData = new Xz.q(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (zz._properties.randomNoiseCoordinates1 && zz._properties.randomNoiseCoordinates2 ? (zz._properties.randomNoiseCoordinates1.vsz(this._properties.randomNoiseCoordinates1), zz._properties.randomNoiseCoordinates2.vsz(this._properties.randomNoiseCoordinates2)) : (zz._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), zz._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), zz.metadata = this.metadata
      }
    }
    Jz._Count = 0;
    var Iz = sz(40185);
    class Cz {
      get currentFrame() {
        return this._currentFrame
      }
      get _evaluatedFrom() {
        return this._playbackFrom
      }
      get _evaluatedTo() {
        return this._playbackTo
      }
      get _evaluatedProgress() {
        return this._playbackProgress
      }
      get _evaluatedSyncRoot() {
        return this._playbackSyncRoot
      }
      get _evaluatedJump() {
        return this._playbackJumped
      }
      get weight() {
        return this._weight
      }
      get currentValue() {
        return this._currentValue
      }
      get targetPath() {
        return this._targetPath
      }
      get target() {
        return this._currentActiveTarget
      }
      get isAdditive() {
        return this._host && this._host.isAdditive
      }
      constructor(zz, tz, sz, Fz) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = tz, this.vV = zz, this._scene = sz, this._host = Fz, this._activeTargets = [], tz._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            hX: this._getCorrectLoopMode()
          }, this._animation.dataType === Iz.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Xz.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const zz = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, zz)
        }
        if (this.vV instanceof Array) {
          let zz = 0;
          for (const tz of this.vV) this._preparePath(tz, zz), this._getOriginalValues(zz), zz++;
          this._targetIsArray = !0
        } else this._preparePath(this.vV), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Wz = tz.getEvents();
        if (Wz && Wz.length > 0)
          for (const Xz of Wz) this._events.push(Xz._clone());
        this._enableBlending = zz && zz.animationPropertiesOverride ? zz.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = this._animation.targetPropertyPath;
        if (sz.length > 1) {
          let Fz = zz;
          for (let zz = 0; zz < sz.length - 1; zz++) {
            const tz = sz[zz];
            if (Fz = Fz[tz], void 0 === Fz) throw new Error(`Invalid property (${tz}) in property path (${sz.join(".")})`)
          }
          this._targetPath = sz[sz.length - 1], this._activeTargets[tz] = Fz
        } else this._targetPath = sz[0], this._activeTargets[tz] = zz;
        if (void 0 === this._activeTargets[tz][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${sz.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.vV instanceof Array) {
            let zz = 0;
            for (const tz of this.vV) void 0 !== this._originalValue[zz] && this._setValue(tz, this._activeTargets[zz], this._originalValue[zz], -1, zz), zz++
          } else void 0 !== this._originalValue[0] && this._setValue(this.vV, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let zz = 0; zz < this._events.length; zz++) this._events[zz].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const zz = this._animation.runtimeAnimations.indexOf(this);
        zz > -1 && this._animation.runtimeAnimations.splice(zz, 1)
      }
      setValue(zz, tz) {
        if (this._targetIsArray)
          for (let sz = 0; sz < this.vV.length; sz++) {
            const Fz = this.vV[sz];
            this._setValue(Fz, this._activeTargets[sz], zz, tz, sz)
          } else this._setValue(this.vV, this._directTarget, zz, tz, 0)
      }
      _getOriginalValues() {
        let zz, tz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const sz = this._activeTargets[tz];
        if (Iz.d.InheritOriginalValueFromActiveAnimations) {
          const zz = this._scene._activeAnimatables;
          for (let Fz = 0; Fz < zz.length; Fz++) {
            const Wz = zz[Fz]._runtimeAnimations;
            for (let zz = 0; zz < Wz.length; zz++) {
              const Fz = Wz[zz];
              if (Fz !== this && Fz._targetPath === this._targetPath)
                for (let zz = 0; zz < Fz._activeTargets.length; zz++)
                  if (Fz._activeTargets[zz] === sz && void 0 !== Fz._originalValue[zz]) return void(Fz._originalValue[zz] && Fz._originalValue[zz].clone ? this._originalValue[tz] = Fz._originalValue[zz].clone() : this._originalValue[tz] = Fz._originalValue[zz])
            }
          }
        }
        zz = sz.getLocalMatrix && "_matrix" === this._targetPath ? sz.getLocalMatrix() : sz[this._targetPath], zz && zz.clone ? this._originalValue[tz] = zz.clone() : this._originalValue[tz] = zz
      }
      _registerTargetForLateAnimationBinding(zz, tz) {
        const sz = zz.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(sz), sz._lateAnimationHolders || (sz._lateAnimationHolders = {}), sz._lateAnimationHolders[zz.targetPath] || (sz._lateAnimationHolders[zz.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: tz
        }), zz.isAdditive ? (sz._lateAnimationHolders[zz.targetPath].additiveAnimations.push(zz), sz._lateAnimationHolders[zz.targetPath].totalAdditiveWeight += zz.weight) : (sz._lateAnimationHolders[zz.targetPath].animations.push(zz), sz._lateAnimationHolders[zz.targetPath].totalWeight += zz.weight)
      }
      _setValue(zz, tz, sz, Fz, Wz) {
        const Oz = this._scene._animationWrites,
          oz = this._scene._animationWriteCount++;
        let vz = Oz[oz];
        if (vz || (vz = Oz[oz] = {
            runtimeAnimation: this,
            target: zz,
            weight: Fz,
            additive: !1,
            blendingFactor: 1,
            nb: !1
          }), vz.runtimeAnimation = this, vz.target = zz, vz.weight = Fz, vz.additive = this.isAdditive, vz.nb = !1, this._currentActiveTarget = tz, this._weight = Fz, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const zz = tz[this._targetPath];
            zz.clone ? this._originalBlendValue = zz.clone() : this._originalBlendValue = zz
          }
          this._originalBlendValue.m ? Iz.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Xz.e.DecomposeLerpToRef(this._originalBlendValue, sz, this._blendingFactor, this._currentValue) : this._currentValue = Xz.e.DecomposeLerp(this._originalBlendValue, sz, this._blendingFactor) : this._currentValue ? Xz.e.LerpToRef(this._originalBlendValue, sz, this._blendingFactor, this._currentValue) : this._currentValue = Xz.e.Lerp(this._originalBlendValue, sz, this._blendingFactor) : this._currentValue = Iz.d._UniversalLerp(this._originalBlendValue, sz, this._blendingFactor);
          const Fz = zz && zz.animationPropertiesOverride ? zz.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          vz.blendingFactor = this._blendingFactor, this._blendingFactor += Fz
        } else vz.blendingFactor = 1, this._currentValue ? this._currentValue.vsz ? this._currentValue.vsz(sz) : this._currentValue = sz : this._currentValue = sz?.clone ? sz.clone() : sz; - 1 !== Fz ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Wz]) : this._animationState.hX === Iz.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Wz], tz[this._targetPath]) : tz[this._targetPath] = this._originalValue[Wz] + this._currentValue : tz[this._targetPath] = this._currentValue, zz.wtz && zz.wtz(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.vV && this.vV.animationPropertiesOverride) {
          return "MorphTarget" === this.vV.getClassName?.() && null == this.vV._animationPropertiesOverride ? this._animation.hX : this.vV.animationPropertiesOverride.hX
        }
        return this._animation.hX
      }
      goToFrame(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const sz = this._animation.getKeys();
        zz < sz[0].frame ? zz = sz[0].frame : zz > sz[sz.length - 1].frame && (zz = sz[sz.length - 1].frame);
        const Fz = this._events;
        if (Fz.length)
          for (let Xz = 0; Xz < Fz.length; Xz++) Fz[Xz].onlyOnce || (Fz[Xz].isDone = Fz[Xz].frame < zz);
        this._currentFrame = zz;
        const Wz = this._animation._interpolate(zz, this._animationState);
        this.setValue(Wz, tz)
      }
      _prepareForSpeedRatioChange(zz) {
        const tz = this._previousElapsedTime * (this._animation.framePerSecond * zz) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - tz
      }
      animate(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Oz = this._animation,
          oz = Oz.targetPropertyPath;
        if (!oz || oz.length < 1) return this._stopped = !0, !1;
        let vz, Uz = !0;
        const Kz = this._events;
        let uz;
        if (this._coreRuntimeAnimation) uz = sz - tz, vz = this._coreRuntimeAnimation.currentFrame, this._currentFrame = vz, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Xz;
          (tz < this._minFrame || tz > this._maxFrame) && (tz = this._minFrame), (sz < this._minFrame || sz > this._maxFrame) && (sz = this._maxFrame), uz = sz - tz;
          let oz = zz * (Oz.framePerSecond * Wz) / 1e3 + this._absoluteFrameOffset,
            Nz = 0,
            bz = !1;
          const wz = Fz && this._animationState.hX === Iz.d.ANIMATIONLOOPMODE_YOYO;
          if (wz) {
            const zz = (oz - tz) / uz,
              sz = Math.sin(zz * Math.PI);
            oz = Math.abs(sz) * uz + tz;
            const Fz = sz >= 0 ? 1 : -1;
            this._yoyoDirection !== Fz && (bz = !0), this._yoyoDirection = Fz
          }
          if (this._previousElapsedTime = zz, this._previousAbsoluteFrame = oz, !Fz && sz >= tz && (oz >= uz && Wz > 0 || oz <= 0 && Wz < 0)) Uz = !1, Nz = Oz.evaluate(sz);
          else if (!Fz && tz >= sz && (oz <= uz && Wz < 0 || oz >= 0 && Wz > 0)) Uz = !1, Nz = Oz.evaluate(tz);
          else if (this._animationState.hX !== Iz.d.ANIMATIONLOOPMODE_CYCLE) {
            const zz = sz.toString() + tz.toString();
            if (!this._offsetsCache[zz]) {
              this._animationState.repeatCount = 0, this._animationState.hX = Iz.d.ANIMATIONLOOPMODE_CYCLE;
              const Fz = Oz._interpolate(tz, this._animationState),
                Wz = Oz._interpolate(sz, this._animationState);
              switch (this._animationState.hX = this._getCorrectLoopMode(), Oz.dataType) {
                case Iz.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[zz] = Wz - Fz;
                  break;
                case Iz.d.ANIMATIONTYPE_QUATERNION:
                case Iz.d.ANIMATIONTYPE_VECTOR3:
                case Iz.d.ANIMATIONTYPE_VECTOR2:
                case Iz.d.ANIMATIONTYPE_SIZE:
                case Iz.d.ANIMATIONTYPE_COLOR3:
                case Iz.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[zz] = Wz.subtract(Fz)
              }
              this._highLimitsCache[zz] = Wz
            }
            Nz = this._highLimitsCache[zz], Xz = this._offsetsCache[zz]
          }
          if (void 0 === Xz) switch (Oz.dataType) {
            case Iz.d.ANIMATIONTYPE_FLOAT:
              Xz = 0;
              break;
            case Iz.d.ANIMATIONTYPE_QUATERNION:
              Xz = Iz.k;
              break;
            case Iz.d.ANIMATIONTYPE_VECTOR3:
              Xz = Iz.q;
              break;
            case Iz.d.ANIMATIONTYPE_VECTOR2:
              Xz = Iz.m;
              break;
            case Iz.d.ANIMATIONTYPE_SIZE:
              Xz = Iz.l;
              break;
            case Iz.d.ANIMATIONTYPE_COLOR3:
              Xz = Iz.i;
              break;
            case Iz.d.ANIMATIONTYPE_COLOR4:
              Xz = Iz.j
          }
          const Dz = this._host ? this._host.syncRoot : null;
          let gz, Hz = this._playbackFrames,
            Bz = !1;
          if (Dz) {
            const zz = Dz.toFrame - Dz.fromFrame,
              sz = Dz.masterFrame,
              Fz = (sz - Dz.fromFrame) / zz;
            vz = tz + uz * Fz;
            const Wz = Dz.getAnimations()[0];
            if (Wz && 0 !== zz) {
              const zz = uz * Fz,
                tz = Wz._playbackTo - Wz._playbackFrom;
              if (0 !== tz && Wz._playbackFrom <= Dz.fromFrame && Wz._playbackTo >= Dz.toFrame) {
                Hz = uz * Math.round((Wz._playbackFrames - (Wz._currentFrame - Wz._playbackFrom)) / tz) + zz
              } else Bz = (sz - this._playbackSyncMasterFrame) * (Wz._playbackFrames - this._playbackSyncMasterPlayed) < 0, Hz = zz;
              Bz = Bz || Wz._playbackJumped, this._playbackSyncMasterPlayed = Wz._playbackFrames, this._playbackSyncMasterFrame = sz
            }
          } else vz = oz > 0 && tz > sz || oz < 0 && tz < sz ? Uz && 0 !== uz ? sz + oz % uz : tz : Uz && 0 !== uz ? tz + oz % uz : sz;
          if (!wz && (Wz > 0 && this.currentFrame > vz || Wz < 0 && this.currentFrame < vz) || wz && bz) {
            this._onLoop();
            for (let zz = 0; zz < Kz.length; zz++) Kz[zz].onlyOnce || (Kz[zz].isDone = !1);
            this._animationState.key = Wz > 0 ? 0 : Oz.getKeys().length - 1
          }
          if (this._currentFrame = vz, this._animationState.repeatCount = 0 === uz ? 0 : oz / uz | 0, this._animationState.highLimitValue = Nz, this._animationState.offsetValue = Xz, this._playbackFrom = tz, this._playbackTo = sz, this._playbackJumped = Bz, this._playbackSyncRoot = Dz, Dz) gz = Hz;
          else if (Uz) gz = wz ? vz === tz && oz === sz ? uz : vz - tz : oz;
          else {
            const zz = 0 !== uz ? Math.floor(this._playbackFrames / uz) : 0;
            gz = (vz === sz ? zz + 1 : zz) * uz
          }
          this._playbackFrames = gz, this._playbackProgress = this._animationState.hX === Iz.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? uz : gz
        }
        const Nz = Oz._interpolate(vz, this._animationState);
        if (this.setValue(Nz, Xz), Kz.length)
          for (let bz = 0; bz < Kz.length; bz++)
            if (uz >= 0 && vz >= Kz[bz].frame && Kz[bz].frame >= tz || uz < 0 && vz <= Kz[bz].frame && Kz[bz].frame <= tz) {
              const zz = Kz[bz];
              zz.isDone || (zz.onlyOnce && (Kz.splice(bz, 1), bz--), zz.isDone = !0, zz.action(vz))
            } return Uz || (this._stopped = !0), Uz
      }
    }
    var ez = sz(39079);
    class Zz {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(zz) {
        this._weight = -1 !== zz ? Math.min(Math.max(zz, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(zz) {
        for (let tz = 0; tz < this._runtimeAnimations.length; tz++) {
          this._runtimeAnimations[tz]._prepareForSpeedRatioChange(zz)
        }
        this._speedRatio = zz, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Xz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          oz = arguments.length > 6 ? arguments[6] : void 0,
          vz = arguments.length > 7 ? arguments[7] : void 0,
          Uz = arguments.length > 8 ? arguments[8] : void 0,
          Kz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          uz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = tz, this.fromFrame = sz, this.toFrame = Fz, this.loopAnimation = Xz, this.onAnimationEnd = oz, this.onAnimationLoop = Uz, this.isAdditive = Kz, this.playOrder = uz, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.JY = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Wz.c, this.onAnimationLoopObservable = new Wz.c, this._scene = zz, vz && this.appendAnimations(tz, vz), this._speedRatio = Oz, zz._activeAnimatables.push(this)
      }
      syncWith(zz) {
        if (this._syncRoot = zz, zz) {
          const zz = this._scene._activeAnimatables.indexOf(this);
          zz > -1 && (this._scene._activeAnimatables.splice(zz, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(zz, tz) {
        for (let sz = 0; sz < tz.length; sz++) {
          const Fz = tz[sz],
            Wz = new Cz(zz, Fz, this._scene, this);
          Wz._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Wz)
        }
      }
      getAnimationByTargetProperty(zz) {
        const tz = this._runtimeAnimations;
        for (let sz = 0; sz < tz.length; sz++)
          if (tz[sz].animation.targetProperty === zz) return tz[sz].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(zz) {
        const tz = this._runtimeAnimations;
        for (let sz = 0; sz < tz.length; sz++)
          if (tz[sz].animation.targetProperty === zz) return tz[sz];
        return null
      }
      reset() {
        const zz = this._runtimeAnimations;
        for (let tz = 0; tz < zz.length; tz++) zz[tz].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(zz) {
        const tz = this._runtimeAnimations;
        for (let sz = 0; sz < tz.length; sz++) tz[sz].animation.enableBlending = !0, tz[sz].animation.blendingSpeed = zz
      }
      disableBlending() {
        const zz = this._runtimeAnimations;
        for (let tz = 0; tz < zz.length; tz++) zz[tz].animation.enableBlending = !1
      }
      goToFrame(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this._runtimeAnimations;
        if (sz[0]) {
          const tz = sz[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? sz[0].currentFrame;
          const Fz = 0 === this.speedRatio ? 0 : (zz - this._frameToSyncFromJump) / tz * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Fz
        }
        for (let Fz = 0; Fz < sz.length; Fz++) sz[Fz].goToFrame(zz, tz ? this._weight : -1);
        this._goToFrame = zz
      }
      get paused() {
        return this.JY
      }
      pause() {
        this.JY || (this.JY = !0)
      }
      restart() {
        this.JY = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (zz || tz) {
          const Wz = this._scene._activeAnimatables.indexOf(this);
          if (Wz > -1) {
            const Xz = this._runtimeAnimations;
            for (let sz = Xz.length - 1; sz >= 0; sz--) {
              const Fz = Xz[sz];
              zz && Fz.animation.name != zz || (tz && !tz(Fz.target) || (Fz.dispose(), Xz.splice(sz, 1)))
            }
            0 == Xz.length && (sz || this._scene._activeAnimatables.splice(Wz, 1), Fz || this._raiseOnAnimationEnd())
          }
        } else {
          const zz = this._scene._activeAnimatables.indexOf(this);
          if (zz > -1) {
            sz || this._scene._activeAnimatables.splice(zz, 1);
            const tz = this._runtimeAnimations;
            for (let zz = 0; zz < tz.length; zz++) tz[zz].dispose();
            this._runtimeAnimations.length = 0, Fz || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((zz => {
          this.onAnimationEndObservable.add((() => {
            zz(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(zz) {
        if (this.JY) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = zz), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = zz, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += zz - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Zz.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let tz = !1;
        const sz = this._runtimeAnimations;
        let Fz;
        for (Fz = 0; Fz < sz.length; Fz++) {
          const Wz = sz[Fz].animate(zz - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          tz = tz || Wz
        }
        if (this.animationStarted = tz, !tz) {
          if (this.disposeOnEnd)
            for (Fz = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Fz, 1), Fz = 0; Fz < sz.length; Fz++) sz[Fz].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return tz
      }
    }

    function Gz(zz) {
      if (0 === zz.totalWeight && 0 === zz.totalAdditiveWeight) return zz.originalValue;
      let tz = 1;
      const sz = Xz.m.XD[0],
        Fz = Xz.m.XD[1],
        Wz = Xz.m.Quaternion[0];
      let Oz = 0;
      const oz = zz.animations[0],
        vz = zz.originalValue;
      let Uz, Kz = !1;
      if (zz.totalWeight < 1) Uz = 1 - zz.totalWeight, vz.decompose(Fz, Wz, sz);
      else {
        if (Oz = 1, tz = zz.totalWeight, Uz = oz.weight / tz, 1 == Uz) {
          if (!zz.totalAdditiveWeight) return oz.currentValue;
          Kz = !0
        }
        oz.currentValue.decompose(Fz, Wz, sz)
      }
      if (!Kz) {
        Fz.scaleInPlace(Uz), sz.scaleInPlace(Uz), Wz.scaleInPlace(Uz);
        for (let oz = Oz; oz < zz.animations.length; oz++) {
          const Oz = zz.animations[oz];
          if (0 === Oz.weight) continue;
          Uz = Oz.weight / tz;
          const vz = Xz.m.XD[2],
            Kz = Xz.m.XD[3],
            uz = Xz.m.Quaternion[1];
          Oz.currentValue.decompose(Kz, uz, vz), Kz.scaleAndAddToRef(Uz, Fz), uz.scaleAndAddToRef(Xz.h.Dot(Wz, uz) > 0 ? Uz : -Uz, Wz), vz.scaleAndAddToRef(Uz, sz)
        }
        Wz.normalize()
      }
      for (let Nz = 0; Nz < zz.additiveAnimations.length; Nz++) {
        const tz = zz.additiveAnimations[Nz];
        if (0 === tz.weight) continue;
        const Oz = Xz.m.XD[2],
          oz = Xz.m.XD[3],
          vz = Xz.m.Quaternion[1];
        tz.currentValue.decompose(oz, vz, Oz), oz.multiplyToRef(Fz, oz), Xz.p.LerpToRef(Fz, oz, tz.weight, Fz), Wz.multiplyToRef(vz, vz), Xz.h.SlerpToRef(Wz, vz, tz.weight, Wz), Oz.scaleAndAddToRef(tz.weight, sz)
      }
      const uz = oz ? oz._animationState.workValue : Xz.m.Matrix[0].clone();
      return Xz.e.ComposeToRef(Fz, Wz, sz, uz), uz
    }

    function Tz(zz, tz) {
      if (0 === zz.totalWeight && 0 === zz.totalAdditiveWeight) return tz;
      const sz = zz.animations[0],
        Fz = zz.originalValue;
      let Wz = tz;
      if (0 === zz.totalWeight && zz.totalAdditiveWeight > 0) Wz.vsz(Fz);
      else if (1 === zz.animations.length) {
        if (Xz.h.SlerpToRef(Fz, sz.currentValue, Math.min(1, zz.totalWeight), Wz), 0 === zz.totalAdditiveWeight) return Wz
      } else if (zz.animations.length > 1) {
        let sz, Oz, oz = 1;
        if (zz.totalWeight < 1) {
          const tz = 1 - zz.totalWeight;
          sz = [], Oz = [], sz.push(Fz), Oz.push(tz)
        } else {
          if (2 === zz.animations.length && (Xz.h.SlerpToRef(zz.animations[0].currentValue, zz.animations[1].currentValue, zz.animations[1].weight / zz.totalWeight, tz), 0 === zz.totalAdditiveWeight)) return tz;
          sz = [], Oz = [], oz = zz.totalWeight
        }
        for (let tz = 0; tz < zz.animations.length; tz++) {
          const Fz = zz.animations[tz];
          sz.push(Fz.currentValue), Oz.push(Fz.weight / oz)
        }
        let vz = 0;
        for (let zz = 0; zz < sz.length;) zz ? (vz += Oz[zz], Xz.h.SlerpToRef(Wz, sz[zz], Oz[zz] / vz, Wz), zz++) : (Xz.h.SlerpToRef(sz[zz], sz[zz + 1], Oz[zz + 1] / (Oz[zz] + Oz[zz + 1]), tz), Wz = tz, vz = Oz[zz] + Oz[zz + 1], zz += 2)
      }
      for (let Oz = 0; Oz < zz.additiveAnimations.length; Oz++) {
        const tz = zz.additiveAnimations[Oz];
        0 !== tz.weight && (Wz.multiplyToRef(tz.currentValue, Xz.m.Quaternion[0]), Xz.h.SlerpToRef(Wz, Xz.m.Quaternion[0], tz.weight, Wz))
      }
      return Wz
    }

    function cz(zz, tz) {
      tz && (tz.prototype.copyAnimationRange = function(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Iz.d(this.name, "_matrix", zz.animations[0].framePerSecond, Iz.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Xz = zz.animations[0].getRange(tz);
        if (!Xz) return !1;
        const Oz = Xz.from,
          oz = Xz.to,
          vz = zz.animations[0].getKeys(),
          Uz = zz.length,
          Kz = zz.getParent(),
          uz = this.getParent(),
          Nz = Fz && Kz && Uz && this.length && Uz !== this.length,
          bz = Nz && uz && Kz ? uz.length / Kz.length : 1,
          wz = Fz && !uz && Wz && (1 !== Wz.x || 1 !== Wz.y || 1 !== Wz.z),
          Dz = this.animations[0].getKeys();
        let gz, Hz, Bz;
        for (let Pz = 0, rz = vz.length; Pz < rz; Pz++) gz = vz[Pz], gz.frame >= Oz && gz.frame <= oz && (Fz ? (Bz = gz.value.clone(), Nz ? (Hz = Bz.getTranslation(), Bz.setTranslation(Hz.scaleInPlace(bz))) : wz && Wz ? (Hz = Bz.getTranslation(), Bz.setTranslation(Hz.multiplyInPlace(Wz))) : Bz = gz.value) : Bz = gz.value, Dz.push({
          frame: gz.frame + sz,
          value: Bz
        }));
        return this.animations[0].createRange(tz, Oz + sz, oz + sz), !0
      }), zz && (zz.prototype._animate = function(zz) {
        const tz = this._animationWrites,
          sz = this._animationWriteCount;
        let Fz = 0;
        for (let Xz = this._animationStepWriteCount; Xz < sz; Xz++) {
          const zz = tz[Xz];
          zz.nb && -1 === zz.weight || (zz.nb = !0, tz[Xz] = tz[Fz], tz[Fz] = zz, Fz++)
        }
        for (let Xz = Fz; Xz < sz; Xz++) {
          const zz = tz[Xz];
          zz.runtimeAnimation = null, zz.target = null
        }
        if (this._animationWriteCount = Fz, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Wz = ez.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Wz
        }
        this.deltaTime = void 0 !== zz ? zz : this.useConstantAnimationDeltaTime ? 16 : (Wz - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Wz;
        const Oz = this._activeAnimatables;
        if (0 === Oz.length) return;
        this._animationTime += this.deltaTime;
        const oz = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Xz = 0; Xz < Oz.length; Xz++) {
          const zz = Oz[Xz];
          !zz._animate(oz) && zz.disposeOnEnd && Xz--
        }! function(zz) {
          if (zz._registeredForLateAnimationBindings.length) {
            for (let tz = 0; tz < zz._registeredForLateAnimationBindings.length; tz++) {
              const sz = zz._registeredForLateAnimationBindings.data[tz];
              for (const zz in sz._lateAnimationHolders) {
                const tz = sz._lateAnimationHolders[zz],
                  Fz = tz.animations[0],
                  Wz = tz.originalValue;
                if (void 0 === Wz || null === Wz) continue;
                const Oz = Iz.d.AllowMatrixDecomposeForInterpolation && Wz.m;
                let oz = sz[zz];
                if (Oz) oz = Gz(tz);
                else if (void 0 !== Wz.w) oz = Tz(tz, oz || Xz.h.Identity());
                else {
                  let zz = 0,
                    sz = 1;
                  const Xz = Fz && Fz._animationState.hX === Iz.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (tz.totalWeight < 1) oz = Xz ? Wz.clone ? Wz.clone() : Wz : Fz && Wz.scale ? Wz.scale(1 - tz.totalWeight) : Fz ? Wz * (1 - tz.totalWeight) : Wz.clone ? Wz.clone() : Wz;
                  else if (Fz) {
                    sz = tz.totalWeight;
                    const Oz = Fz.weight / sz;
                    oz = 1 !== Oz ? Fz.currentValue.scale ? Fz.currentValue.scale(Oz) : Fz.currentValue * Oz : (tz.animations.length > 1 || tz.additiveAnimations.length > 0) && Fz.currentValue.clone ? Fz.currentValue.clone() : Fz.currentValue, Xz && (oz.addToRef ? oz.addToRef(Wz, oz) : oz += Wz), zz = 1
                  }
                  for (let Fz = zz; Fz < tz.animations.length; Fz++) {
                    const zz = tz.animations[Fz],
                      Wz = zz.weight / sz;
                    Wz && (zz.currentValue.scaleAndAddToRef ? zz.currentValue.scaleAndAddToRef(Wz, oz) : oz += zz.currentValue * Wz)
                  }
                  for (let Fz = 0; Fz < tz.additiveAnimations.length; Fz++) {
                    const zz = tz.additiveAnimations[Fz],
                      sz = zz.weight;
                    sz && (zz.currentValue.scaleAndAddToRef ? zz.currentValue.scaleAndAddToRef(sz, oz) : oz += zz.currentValue * sz)
                  }
                }
                sz[zz] = oz
              }
              sz._lateAnimationHolders = {}
            }
            zz._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, zz.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((zz, tz) => zz.playOrder - tz.playOrder))
      }, zz.prototype.beginWeightedAnimation = function(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Oz = arguments.length > 6 ? arguments[6] : void 0,
          oz = arguments.length > 7 ? arguments[7] : void 0,
          vz = arguments.length > 8 ? arguments[8] : void 0,
          Uz = arguments.length > 9 ? arguments[9] : void 0,
          Kz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const uz = this.beginAnimation(zz, tz, sz, Wz, Xz, Oz, oz, !1, vz, Uz, Kz);
        return uz.weight = Fz, uz
      }, zz.prototype.beginAnimation = function(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Xz = arguments.length > 5 ? arguments[5] : void 0,
          Oz = arguments.length > 6 ? arguments[6] : void 0,
          oz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          vz = arguments.length > 8 ? arguments[8] : void 0,
          Uz = arguments.length > 9 ? arguments[9] : void 0,
          Kz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Wz < 0) {
          const zz = tz;
          tz = sz, sz = zz, Wz = -Wz
        }
        tz > sz && (Wz = -Wz), oz && this.stopAnimation(zz, void 0, vz), Oz || (Oz = new Zz(this, zz, tz, sz, Fz, Wz, Xz, void 0, Uz, Kz));
        const uz = !vz || vz(zz);
        if (zz.animations && uz && Oz.appendAnimations(zz, zz.animations), zz.getAnimatables) {
          const Kz = zz.getAnimatables();
          for (let zz = 0; zz < Kz.length; zz++) this.beginAnimation(Kz[zz], tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz)
        }
        return Oz.reset(), Oz
      }, zz.prototype.beginHierarchyAnimation = function(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Oz = arguments.length > 6 ? arguments[6] : void 0,
          oz = arguments.length > 7 ? arguments[7] : void 0,
          vz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Uz = arguments.length > 9 ? arguments[9] : void 0,
          Kz = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const uz = zz.getDescendants(tz),
          Nz = [];
        Nz.push(this.beginAnimation(zz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, void 0, Kz));
        for (const bz of uz) Nz.push(this.beginAnimation(bz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, void 0, Kz));
        return Nz
      }, zz.prototype.beginDirectAnimation = function(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Xz < 0) {
          const zz = sz;
          sz = Fz, Fz = zz, Xz = -Xz
        }
        sz > Fz && (Xz = -Xz);
        return new Zz(this, zz, sz, Fz, Wz, Xz, arguments.length > 6 ? arguments[6] : void 0, tz, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, zz.prototype.beginDirectHierarchyAnimation = function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        let Uz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Kz = zz.getDescendants(tz),
          uz = [];
        uz.push(this.beginDirectAnimation(zz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz));
        for (const Nz of Kz) uz.push(this.beginDirectAnimation(Nz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz));
        return uz
      }, zz.prototype.getAnimatableByTarget = function(zz) {
        for (let tz = 0; tz < this._activeAnimatables.length; tz++)
          if (this._activeAnimatables[tz].target === zz) return this._activeAnimatables[tz];
        return null
      }, zz.prototype.getAllAnimatablesByTarget = function(zz) {
        const tz = [];
        for (let sz = 0; sz < this._activeAnimatables.length; sz++) this._activeAnimatables[sz].target === zz && tz.push(this._activeAnimatables[sz]);
        return tz
      }, zz.prototype.stopAnimation = function(zz, tz, sz) {
        const Fz = this.getAllAnimatablesByTarget(zz);
        for (const Wz of Fz) Wz.stop(tz, sz)
      }, zz.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let zz = 0; zz < this._activeAnimatables.length; zz++) this._activeAnimatables[zz].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const zz of this.animationGroups) zz.stop()
      })
    }
    Zz.ProcessPausedAnimatables = !1;
    var jz, Az = sz(36487),
      yz = sz(39374),
      Mz = sz(39065);
    class dz extends yz.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(zz) {
        (zz.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.vsz(zz), this._markAsDirtyAndDecompose())
      }
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(zz, tz.aJ(), !1), this.name = zz, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = tz, this._localMatrix = Fz?.clone() ?? Xz.e.Identity(), this._restMatrix = Wz ?? this._localMatrix.clone(), this._bindMatrix = Oz ?? this._localMatrix.clone(), this._index = oz, this._absoluteMatrix = new Xz.e, this._absoluteBindMatrix = new Xz.e, this._absoluteInverseBindMatrix = new Xz.e, this._finalMatrix = new Xz.e, tz.bones.push(this), this.setParent(sz, !1), this._updateAbsoluteBindMatrices()
      }
      getClassName() {
        return "Bone"
      }
      getSkeleton() {
        return this._skeleton
      }
      get parent() {
        return this._parentNode
      }
      getParent() {
        return this.parent
      }
      getChildren() {
        return this.children
      }
      getIndex() {
        return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
      }
      set parent(zz) {
        this.setParent(zz)
      }
      setParent(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== zz) {
          if (this.parent) {
            const zz = this.parent.children.indexOf(this); - 1 !== zz && this.parent.children.splice(zz, 1)
          }
          this._parentNode = zz, this.parent && this.parent.children.push(this), tz && this._updateAbsoluteBindMatrices(), this.wtz()
        }
      }
      getLocalMatrix() {
        return this._compose(), this._localMatrix
      }
      getBindMatrix() {
        return this._bindMatrix
      }
      getBaseMatrix() {
        return this.getBindMatrix()
      }
      getRestMatrix() {
        return this._restMatrix
      }
      getRestPose() {
        return this.getRestMatrix()
      }
      setRestMatrix(zz) {
        this._restMatrix.vsz(zz)
      }
      setRestPose(zz) {
        this.setRestMatrix(zz)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(zz) {
        this.y5(zz)
      }
      setBindPose(zz) {
        this.setBindMatrix(zz)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const zz = Xz.m.XD[0],
            tz = Xz.m.Quaternion[0],
            sz = Xz.m.XD[1];
          this.getRestMatrix().decompose(zz, tz, sz), this._linkedTransformNode.position.vsz(sz), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Xz.h.Identity(), this._linkedTransformNode.rotationQuaternion.vsz(tz), this._linkedTransformNode.nX.vsz(zz)
        } else this._matrix = this._restMatrix
      }
      getAbsoluteInverseBindMatrix() {
        return this._absoluteInverseBindMatrix
      }
      getInvertedAbsoluteTransform() {
        return this.getAbsoluteInverseBindMatrix()
      }
      getAbsoluteMatrix() {
        return this._skeleton.computeAbsoluteMatrices(), this._absoluteMatrix
      }
      getAbsoluteTransform() {
        return this.getAbsoluteMatrix()
      }
      linkTransformNode(zz) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = zz, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.Yzz
      }
      set position(zz) {
        this._decompose(), this.Yzz.vsz(zz), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(zz) {
        this.setRotation(zz)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(zz) {
        this.setRotationQuaternion(zz)
      }
      get nX() {
        return this.getScale()
      }
      set nX(zz) {
        this.setScale(zz)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Xz.p.Zero(), this._localRotation = Xz.h.Zero(), this.Yzz = Xz.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Yzz))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Xz.e.ComposeToRef(this._localScaling, this._localRotation, this.Yzz, this._localMatrix)) : this._needToCompose = !1)
      }
      y5(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.vsz(zz), tz && this._updateAbsoluteBindMatrices(), sz ? this._matrix = zz : this.wtz()
      }
      _updateAbsoluteBindMatrices(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (zz || (zz = this._bindMatrix), this.parent ? zz.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.vsz(zz), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), tz)
          for (let sz = 0; sz < this.children.length; sz++) this.children[sz]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      wtz() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.wtz(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.wtz(), this._needToDecompose = !0
      }
      _updatePosition(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wz = this.getLocalMatrix();
        if (0 == tz) Fz ? (Wz.addAtIndex(12, zz.x), Wz.addAtIndex(13, zz.y), Wz.addAtIndex(14, zz.z)) : Wz.setTranslationFromFloats(zz.x, zz.y, zz.z);
        else {
          const tz = dz._TmpMats[0],
            Oz = dz._TmpVecs[0];
          this.parent ? (tz.vsz(this.parent.getAbsoluteMatrix()), sz && tz.multiplyToRef(sz.getWorldMatrix(), tz)) : Xz.e.IdentityToRef(tz), Fz && tz.setTranslationFromFloats(0, 0, 0), tz.invert(), Xz.p.TransformCoordinatesToRef(zz, tz, Oz), Fz ? (Wz.addAtIndex(12, Oz.x), Wz.addAtIndex(13, Oz.y), Wz.addAtIndex(14, Oz.z)) : Wz.setTranslationFromFloats(Oz.x, Oz.y, Oz.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(zz, tz, sz, !0)
      }
      setPosition(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(zz, tz, sz, !1)
      }
      setAbsolutePosition(zz, tz) {
        this.setPosition(zz, 1, tz)
      }
      scale(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wz = this.getLocalMatrix(),
          Oz = dz._TmpMats[0];
        Xz.e.ScalingToRef(zz, tz, sz, Oz), Oz.multiplyToRef(Wz, Wz), Oz.invert();
        for (const Xz of this.children) {
          const Fz = Xz.getLocalMatrix();
          Fz.multiplyToRef(Oz, Fz), Fz.multiplyAtIndex(12, zz), Fz.multiplyAtIndex(13, tz), Fz.multiplyAtIndex(14, sz), Xz._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Fz)
          for (const Xz of this.children) Xz.scale(zz, tz, sz, Fz)
      }
      setScale(zz) {
        this._decompose(), this._localScaling.vsz(zz), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(zz) {
        this._decompose(), zz.vsz(this._localScaling)
      }
      setYawPitchRoll(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Fz) {
          const Oz = dz._TmpQuat;
          return Xz.h.RotationYawPitchRollToRef(zz, tz, sz, Oz), void this.setRotationQuaternion(Oz, Fz, Wz)
        }
        const Oz = dz._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Oz, Wz)) return;
        const oz = dz._TmpMats[1];
        Xz.e.RotationYawPitchRollToRef(zz, tz, sz, oz), Oz.multiplyToRef(oz, oz), this._rotateWithMatrix(oz, Fz, Wz)
      }
      rotate(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        const Wz = dz._TmpMats[0];
        Wz.setTranslationFromFloats(0, 0, 0), Xz.e.RotationAxisToRef(zz, tz, Wz), this._rotateWithMatrix(Wz, sz, Fz)
      }
      setAxisAngle(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === sz) {
          const Wz = dz._TmpQuat;
          return Xz.h.RotationAxisToRef(zz, tz, Wz), void this.setRotationQuaternion(Wz, sz, Fz)
        }
        const Wz = dz._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Wz, Fz)) return;
        const Oz = dz._TmpMats[1];
        Xz.e.RotationAxisToRef(zz, tz, Oz), Wz.multiplyToRef(Oz, Oz), this._rotateWithMatrix(Oz, sz, Fz)
      }
      setRotation(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(zz.y, zz.x, zz.z, tz, sz)
      }
      setRotationQuaternion(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === tz) return this._decompose(), this._localRotation.vsz(zz), void this._markAsDirtyAndCompose();
        const Fz = dz._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Fz, sz)) return;
        const Wz = dz._TmpMats[1];
        Xz.e.FromQuaternionToRef(zz, Wz), Fz.multiplyToRef(Wz, Wz), this._rotateWithMatrix(Wz, tz, sz)
      }
      setRotationMatrix(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === tz) {
          const Fz = dz._TmpQuat;
          return Xz.h.FromRotationMatrixToRef(zz, Fz), void this.setRotationQuaternion(Fz, tz, sz)
        }
        const Fz = dz._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Fz, sz)) return;
        const Wz = dz._TmpMats[1];
        Wz.vsz(zz), Fz.multiplyToRef(zz, Wz), this._rotateWithMatrix(Wz, tz, sz)
      }
      _rotateWithMatrix(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = this.getLocalMatrix(),
          Wz = Fz.m[12],
          Xz = Fz.m[13],
          Oz = Fz.m[14],
          oz = this.getParent(),
          vz = dz._TmpMats[3],
          Uz = dz._TmpMats[4];
        oz && 1 == tz ? (sz ? (vz.vsz(sz.getWorldMatrix()), oz.getAbsoluteMatrix().multiplyToRef(vz, vz)) : vz.vsz(oz.getAbsoluteMatrix()), Uz.vsz(vz), Uz.invert(), Fz.multiplyToRef(vz, Fz), Fz.multiplyToRef(zz, Fz), Fz.multiplyToRef(Uz, Fz)) : 1 == tz && sz ? (vz.vsz(sz.getWorldMatrix()), Uz.vsz(vz), Uz.invert(), Fz.multiplyToRef(vz, Fz), Fz.multiplyToRef(zz, Fz), Fz.multiplyToRef(Uz, Fz)) : Fz.multiplyToRef(zz, Fz), Fz.setTranslationFromFloats(Wz, Xz, Oz), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(zz, tz) {
        const sz = dz._TmpMats[2];
        return zz.vsz(this.getAbsoluteMatrix()), tz ? (zz.multiplyToRef(tz.getWorldMatrix(), zz), Xz.e.ScalingToRef(tz.nX.x, tz.nX.y, tz.nX.z, sz)) : Xz.e.IdentityToRef(sz), zz.invert(), !isNaN(zz.m[0]) && (sz.multiplyAtIndex(0, this._scalingDeterminant), zz.multiplyToRef(sz, zz), !0)
      }
      yB() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sz = Xz.p.Zero();
        return this.getPositionToRef(zz, tz, sz), sz
      }
      getPositionToRef() {
        let zz = arguments.length > 1 ? arguments[1] : void 0,
          tz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const zz = this.getLocalMatrix();
          tz.x = zz.m[12], tz.y = zz.m[13], tz.z = zz.m[14]
        } else {
          const sz = dz._TmpMats[0].vsz(this.getAbsoluteMatrix());
          zz && sz.multiplyToRef(zz.getWorldMatrix(), sz), tz.x = sz.m[12], tz.y = sz.m[13], tz.z = sz.m[14]
        }
      }
      getAbsolutePosition() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const tz = Xz.p.Zero();
        return this.getPositionToRef(1, zz, tz), tz
      }
      getAbsolutePositionToRef(zz, tz) {
        this.getPositionToRef(1, zz, tz)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.vsz(this._localMatrix);
          const zz = this._skeleton.getPoseMatrix();
          zz && this._absoluteMatrix.multiplyToRef(zz, this._absoluteMatrix)
        }
        const zz = this.children,
          tz = zz.length;
        for (let sz = 0; sz < tz; sz++) zz[sz].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      Mq(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sz = Xz.p.Zero();
        return this.getDirectionToRef(zz, tz, sz), sz
      }
      getDirectionToRef(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = dz._TmpMats[0].vsz(this.getAbsoluteMatrix());
        tz && Fz.multiplyToRef(tz.getWorldMatrix(), Fz), Xz.p.TransformNormalToRef(zz, Fz, sz), sz.normalize()
      }
      getRotation() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sz = Xz.p.Zero();
        return this.getRotationToRef(zz, tz, sz), sz
      }
      getRotationToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = dz._TmpQuat;
        this.getRotationQuaternionToRef(zz, tz, Fz), Fz.toEulerAnglesToRef(sz)
      }
      getRotationQuaternion() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sz = Xz.h.Identity();
        return this.getRotationQuaternionToRef(zz, tz, sz), sz
      }
      getRotationQuaternionToRef() {
        let zz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          tz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), tz.vsz(this._localRotation);
        else {
          const sz = dz._TmpMats[0],
            Fz = this.getAbsoluteMatrix();
          zz ? Fz.multiplyToRef(zz.getWorldMatrix(), sz) : sz.vsz(Fz), sz.multiplyAtIndex(0, this._scalingDeterminant), sz.multiplyAtIndex(1, this._scalingDeterminant), sz.multiplyAtIndex(2, this._scalingDeterminant), sz.decompose(void 0, tz, void 0)
        }
      }
      getRotationMatrix() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 ? arguments[1] : void 0;
        const sz = Xz.e.Identity();
        return this.getRotationMatrixToRef(zz, tz, sz), sz
      }
      getRotationMatrixToRef() {
        let zz = arguments.length > 1 ? arguments[1] : void 0,
          tz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(tz);
        else {
          const sz = dz._TmpMats[0],
            Fz = this.getAbsoluteMatrix();
          zz ? Fz.multiplyToRef(zz.getWorldMatrix(), sz) : sz.vsz(Fz), sz.multiplyAtIndex(0, this._scalingDeterminant), sz.multiplyAtIndex(1, this._scalingDeterminant), sz.multiplyAtIndex(2, this._scalingDeterminant), sz.getRotationMatrixToRef(tz)
        }
      }
      getAbsolutePositionFromLocal(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sz = Xz.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(zz, tz, sz), sz
      }
      getAbsolutePositionFromLocalToRef(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = dz._TmpMats[0].vsz(this.getAbsoluteMatrix());
        tz && Fz.multiplyToRef(tz.getWorldMatrix(), Fz), Xz.p.TransformCoordinatesToRef(zz, Fz, sz)
      }
      getLocalPositionFromAbsolute(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sz = Xz.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(zz, tz, sz), sz
      }
      getLocalPositionFromAbsoluteToRef(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = dz._TmpMats[0].vsz(this.getAbsoluteMatrix());
        tz && Fz.multiplyToRef(tz.getWorldMatrix(), Fz), Fz.invert(), Xz.p.TransformCoordinatesToRef(zz, Fz, sz)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const zz = this._skeleton.bones.indexOf(this);
        if (-1 !== zz && this._skeleton.bones.splice(zz, 1), this._parentNode && this._parentNode.children) {
          const zz = this._parentNode.children,
            tz = zz.indexOf(this); - 1 !== tz && zz.splice(tz, 1)
        }
        super.dispose()
      }
    }
    dz._TmpVecs = (0, Az.c)(2, Xz.p.Zero), dz._TmpQuat = Xz.h.Identity(), dz._TmpMats = (0, Az.c)(5, Xz.e.Identity), (jz = dz.prototype).copyAnimationRange ?? (jz.copyAnimationRange = (0, Mz.g)("Bone", "copyAnimationRange"));
    var hz = sz(39256);
    let Qz = !1;
    var kz = sz(39137),
      iz = sz(39485),
      Lz = sz(39493),
      lz = sz(39489),
      nz = sz(39276);

    function az(zz, tz) {
      const sz = (0, bz.RandomRange)(0, 1);
      Kz.d.LerpToRef(tz.color1, tz.color2, sz, zz.color)
    }

    function qz(zz, tz) {
      tz.colorDead.subtractToRef(zz.color, tz._colorDiff), tz._colorDiff.scaleToRef(1 / zz.lifeTime, zz.colorStep)
    }

    function Sz(zz, tz) {
      zz._properties.currentColorGradient = tz._colorGradients[0], zz._properties.currentColorGradient.getColorToRef(zz.color), zz._properties.currentColor1.vsz(zz.color), tz._colorGradients.length > 1 ? tz._colorGradients[1].getColorToRef(zz._properties.currentColor2) : zz._properties.currentColor2.vsz(zz.color)
    }

    function Vz(zz, tz) {
      const sz = tz._colorGradients;
      Fz.o.GetCurrentGradient(tz._ratio, sz, ((tz, sz, Fz) => {
        tz !== zz._properties.currentColorGradient && (zz._properties.currentColor1.vsz(zz._properties.currentColor2), sz.getColorToRef(zz._properties.currentColor2), zz._properties.currentColorGradient = tz), Kz.d.LerpToRef(zz._properties.currentColor1, zz._properties.currentColor2, Fz, zz.color), zz.color.a < 0 && (zz.color.a = 0)
      }))
    }

    function Rz(zz, tz) {
      zz.colorStep.scaleToRef(tz._scaledUpdateSpeed, tz._scaledColorStep), zz.color.addInPlace(tz._scaledColorStep), zz.color.a < 0 && (zz.color.a = 0)
    }

    function pz(zz, tz) {
      Fz.o.GetCurrentGradient(tz._ratio, tz._angularSpeedGradients, ((tz, sz, Fz) => {
        tz !== zz._properties.currentAngularSpeedGradient && (zz._properties.currentAngularSpeed1 = zz._properties.currentAngularSpeed2, zz._properties.currentAngularSpeed2 = sz.getFactor(), zz._properties.currentAngularSpeedGradient = tz), zz.angularSpeed = (0, bz.Lerp)(zz._properties.currentAngularSpeed1, zz._properties.currentAngularSpeed2, Fz)
      }))
    }

    function fz(zz, tz) {
      zz.angle += zz.angularSpeed * tz._scaledUpdateSpeed
    }

    function Ez(zz, tz) {
      tz.particleEmitterType.startDirectionFunction(tz._emitterWorldMatrix, zz.direction, zz, tz.isLocal, tz._emitterInverseWorldMatrix)
    }

    function zt(zz, tz) {
      tz.startDirectionFunction(tz._emitterWorldMatrix, zz.direction, zz, tz.isLocal)
    }

    function tt(zz, tz) {
      zz._properties.currentVelocityGradient = tz._velocityGradients[0], zz._properties.currentVelocity1 = zz._properties.currentVelocityGradient.getFactor(), tz._velocityGradients.length > 1 ? zz._properties.currentVelocity2 = tz._velocityGradients[1].getFactor() : zz._properties.currentVelocity2 = zz._properties.currentVelocity1
    }

    function st(zz, tz) {
      zz._properties.currentLimitVelocityGradient = tz._limitVelocityGradients[0], zz._properties.currentLimitVelocity1 = zz._properties.currentLimitVelocityGradient.getFactor(), tz._limitVelocityGradients.length > 1 ? zz._properties.currentLimitVelocity2 = tz._limitVelocityGradients[1].getFactor() : zz._properties.currentLimitVelocity2 = zz._properties.currentLimitVelocity1
    }

    function Ft(zz, tz) {
      Fz.o.GetCurrentGradient(tz._ratio, tz._velocityGradients, ((tz, sz, Fz) => {
        tz !== zz._properties.currentVelocityGradient && (zz._properties.currentVelocity1 = zz._properties.currentVelocity2, zz._properties.currentVelocity2 = sz.getFactor(), zz._properties.currentVelocityGradient = tz), zz._properties.directionScale *= (0, bz.Lerp)(zz._properties.currentVelocity1, zz._properties.currentVelocity2, Fz)
      }))
    }

    function Wt(zz, tz) {
      Fz.o.GetCurrentGradient(tz._ratio, tz._limitVelocityGradients, ((sz, Fz, Wz) => {
        sz !== zz._properties.currentLimitVelocityGradient && (zz._properties.currentLimitVelocity1 = zz._properties.currentLimitVelocity2, zz._properties.currentLimitVelocity2 = Fz.getFactor(), zz._properties.currentLimitVelocityGradient = sz);
        const Xz = (0, bz.Lerp)(zz._properties.currentLimitVelocity1, zz._properties.currentLimitVelocity2, Wz);
        zz.direction.length() > Xz && zz.direction.scaleInPlace(tz.limitVelocityDamping)
      }))
    }

    function Xt(zz) {
      zz.direction.scaleToRef(zz._properties.directionScale, zz._properties.scaledDirection)
    }

    function Ot(zz, tz) {
      tz.particleEmitterType.startPositionFunction(tz._emitterWorldMatrix, zz.position, zz, tz.isLocal)
    }

    function ot(zz, tz) {
      tz.startPositionFunction(tz._emitterWorldMatrix, zz.position, zz, tz.isLocal)
    }

    function vt(zz, tz) {
      zz._properties.localPosition ? zz._properties.localPosition.vsz(zz.position) : zz._properties.localPosition = zz.position.clone(), Xz.p.TransformCoordinatesToRef(zz._properties.localPosition, tz._emitterWorldMatrix, zz.position)
    }

    function Ut(zz, tz) {
      tz.isLocal && zz._properties.localPosition ? (zz._properties.localPosition.addInPlace(zz._properties.scaledDirection), Xz.p.TransformCoordinatesToRef(zz._properties.localPosition, tz._emitterWorldMatrix, zz.position)) : zz.position.addInPlace(zz._properties.scaledDirection)
    }

    function Kt(zz, tz) {
      zz._properties.currentDragGradient = tz._dragGradients[0], zz._properties.currentDrag1 = zz._properties.currentDragGradient.getFactor(), tz._dragGradients.length > 1 ? zz._properties.currentDrag2 = tz._dragGradients[1].getFactor() : zz._properties.currentDrag2 = zz._properties.currentDrag1
    }

    function ut(zz, tz) {
      Fz.o.GetCurrentGradient(tz._ratio, tz._dragGradients, ((tz, sz, Fz) => {
        tz !== zz._properties.currentDragGradient && (zz._properties.currentDrag1 = zz._properties.currentDrag2, zz._properties.currentDrag2 = sz.getFactor(), zz._properties.currentDragGradient = tz);
        const Wz = (0, bz.Lerp)(zz._properties.currentDrag1, zz._properties.currentDrag2, Fz);
        zz._properties.scaledDirection.scaleInPlace(1 - Wz)
      }))
    }

    function Nt(zz, tz) {
      zz._properties.randomNoiseCoordinates1 && zz._properties.randomNoiseCoordinates2 ? (zz._properties.randomNoiseCoordinates1.m_(Math.random(), Math.random(), Math.random()), zz._properties.randomNoiseCoordinates2.m_(Math.random(), Math.random(), Math.random())) : (zz._properties.randomNoiseCoordinates1 = new Xz.p(Math.random(), Math.random(), Math.random()), zz._properties.randomNoiseCoordinates2 = new Xz.p(Math.random(), Math.random(), Math.random()))
    }

    function bt(zz, tz) {
      const sz = tz._noiseTextureData,
        Fz = tz._noiseTextureSize;
      if (sz && Fz && zz._properties.randomNoiseCoordinates1 && zz._properties.randomNoiseCoordinates2) {
        const Wz = tz._fetchR(zz._properties.randomNoiseCoordinates1.x, zz._properties.randomNoiseCoordinates1.y, Fz.width, Fz.height, sz),
          Oz = tz._fetchR(zz._properties.randomNoiseCoordinates1.z, zz._properties.randomNoiseCoordinates2.x, Fz.width, Fz.height, sz),
          oz = tz._fetchR(zz._properties.randomNoiseCoordinates2.y, zz._properties.randomNoiseCoordinates2.z, Fz.width, Fz.height, sz),
          vz = Xz.m.XD[0],
          Uz = Xz.m.XD[1];
        vz.m_((2 * Wz - 1) * tz.noiseStrength.x, (2 * Oz - 1) * tz.noiseStrength.y, (2 * oz - 1) * tz.noiseStrength.z), vz.scaleToRef(tz._tempScaledUpdateSpeed, Uz), zz.direction.addInPlace(Uz)
      }
    }

    function wt(zz, tz) {
      tz.gravity.scaleToRef(tz._tempScaledUpdateSpeed, tz._scaledGravity), zz.direction.addInPlace(tz._scaledGravity)
    }

    function Dt(zz, tz) {
      zz.size = (0, bz.RandomRange)(tz.minSize, tz.maxSize), zz.scale.m_((0, bz.RandomRange)(tz.minScaleX, tz.maxScaleX), (0, bz.RandomRange)(tz.minScaleY, tz.maxScaleY))
    }

    function gt(zz, tz) {
      zz._properties.currentSizeGradient = tz._sizeGradients[0], zz._properties.currentSize1 = zz._properties.currentSizeGradient.getFactor(), zz.size = zz._properties.currentSize1, tz._sizeGradients.length > 1 ? zz._properties.currentSize2 = tz._sizeGradients[1].getFactor() : zz._properties.currentSize2 = zz._properties.currentSize1, zz.scale.m_((0, bz.RandomRange)(tz.minScaleX, tz.maxScaleX), (0, bz.RandomRange)(tz.minScaleY, tz.maxScaleY))
    }

    function Ht(zz, tz) {
      const sz = tz._actualFrame / tz.targetStopDuration;
      Fz.o.GetCurrentGradient(sz, tz._startSizeGradients, ((sz, Fz, Wz) => {
        sz !== tz._currentStartSizeGradient && (tz._currentStartSize1 = tz._currentStartSize2, tz._currentStartSize2 = Fz.getFactor(), tz._currentStartSizeGradient = sz);
        const Xz = (0, bz.Lerp)(tz._currentStartSize1, tz._currentStartSize2, Wz);
        zz.scale.scaleInPlace(Xz)
      }))
    }

    function Bt(zz, tz) {
      Fz.o.GetCurrentGradient(tz._ratio, tz._sizeGradients, ((tz, sz, Fz) => {
        tz !== zz._properties.currentSizeGradient && (zz._properties.currentSize1 = zz._properties.currentSize2, zz._properties.currentSize2 = sz.getFactor(), zz._properties.currentSizeGradient = tz), zz.size = (0, bz.Lerp)(zz._properties.currentSize1, zz._properties.currentSize2, Fz)
      }))
    }

    function Pt(zz, tz) {
      zz.remapData = new Xz.q(0, 1, 0, 1)
    }

    function rt(zz, tz) {
      tz._colorRemapGradients && tz._colorRemapGradients.length > 0 && Fz.o.GetCurrentGradient(tz._ratio, tz._colorRemapGradients, ((tz, sz, Fz) => {
        const Wz = (0, bz.Lerp)(tz.factor1, sz.factor1, Fz),
          Xz = (0, bz.Lerp)(tz.factor2, sz.factor2, Fz);
        zz.remapData.x = Wz, zz.remapData.y = Xz - Wz
      })), tz._alphaRemapGradients && tz._alphaRemapGradients.length > 0 && Fz.o.GetCurrentGradient(tz._ratio, tz._alphaRemapGradients, ((tz, sz, Fz) => {
        const Wz = (0, bz.Lerp)(tz.factor1, sz.factor1, Fz),
          Xz = (0, bz.Lerp)(tz.factor2, sz.factor2, Fz);
        zz.remapData.z = Wz, zz.remapData.w = Xz - Wz
      }))
    }

    function Yt(zz, tz) {
      const sz = (0, bz.Clamp)(tz._actualFrame / tz.targetStopDuration);
      Fz.o.GetCurrentGradient(sz, tz._lifeTimeGradients, ((tz, Fz) => {
        const Wz = tz,
          Xz = Fz,
          Oz = Wz.getFactor(),
          oz = Xz.getFactor(),
          vz = (sz - Wz.gradient) / (Xz.gradient - Wz.gradient);
        zz.lifeTime = (0, bz.Lerp)(Oz, oz, vz)
      })), tz._emitPower = (0, bz.RandomRange)(tz.minEmitPower, tz.maxEmitPower)
    }

    function xt(zz, tz) {
      zz.lifeTime = (0, bz.RandomRange)(tz.minLifeTime, tz.maxLifeTime), tz._emitPower = (0, bz.RandomRange)(tz.minEmitPower, tz.maxEmitPower)
    }

    function mt(zz, tz) {
      0 === tz._emitPower ? (zz._properties.initialDirection ? zz._properties.initialDirection.vsz(zz.direction) : zz._properties.initialDirection = zz.direction.clone(), zz.direction.set(0, 0, 0)) : (zz._properties.initialDirection = null, zz.direction.scaleInPlace(tz._emitPower)), zz.direction.addInPlace(tz._inheritedVelocityOffset)
    }

    function Jt(zz, tz) {
      zz.angularSpeed = (0, bz.RandomRange)(tz.minAngularSpeed, tz.maxAngularSpeed), zz.angle = (0, bz.RandomRange)(tz.minInitialRotation, tz.maxInitialRotation)
    }

    function It(zz, tz) {
      zz._properties.currentAngularSpeedGradient = tz._angularSpeedGradients[0], zz.angularSpeed = zz._properties.currentAngularSpeedGradient.getFactor(), zz._properties.currentAngularSpeed1 = zz.angularSpeed, tz._angularSpeedGradients.length > 1 ? zz._properties.currentAngularSpeed2 = tz._angularSpeedGradients[1].getFactor() : zz._properties.currentAngularSpeed2 = zz._properties.currentAngularSpeed1, zz.angle = (0, bz.RandomRange)(tz.minInitialRotation, tz.maxInitialRotation)
    }

    function Ct(zz, tz) {
      zz._properties.initialStartSpriteCellId = tz.startSpriteCellID, zz._properties.initialEndSpriteCellId = tz.endSpriteCellID, zz._properties.initialSpriteCellLoop = tz.spriteCellLoop
    }

    function et(zz, tz) {
      zz.previousItem = tz.previousItem, zz.nextItem = tz, tz.previousItem && (tz.previousItem.nextItem = zz), tz.previousItem = zz
    }

    function Zt(zz, tz) {
      zz.previousItem = tz, zz.nextItem = tz.nextItem, tz.nextItem && (tz.nextItem.previousItem = zz), tz.nextItem = zz
    }

    function Gt(zz) {
      zz.previousItem && (zz.previousItem.nextItem = zz.nextItem), zz.nextItem && (zz.nextItem.previousItem = zz.previousItem)
    }
    var Tt = sz(39531);
    class ct extends xz {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(zz) {
        this._startDirectionFunction !== zz && (this._startDirectionFunction = zz, this._directionCreation.process = zz ? zt : Ez)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(zz) {
        this._startPositionFunction !== zz && (this._startPositionFunction = zz, this._positionCreation.process = zz ? ot : Ot)
      }
      set onDispose(zz) {
        this._onDisposeObserver && this.qJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.qJ.add(zz)
      }
      get zsz() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(zz) {
        this._useRampGradients !== zz && (this._useRampGradients = zz, this._resetEffect(), zz ? (this._rampCreation = {
          process: Pt,
          previousItem: null,
          nextItem: null
        }, Zt(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: rt,
          previousItem: null,
          nextItem: null
        }, Zt(this._remapGradientProcessing, this._gravityProcessing))) : (Gt(this._rampCreation), Gt(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(zz) {
        this._isLocal !== zz && (this._isLocal = zz, zz ? (this._isLocalCreation = {
          process: vt,
          previousItem: null,
          nextItem: null
        }, Zt(this._isLocalCreation, this._positionCreation)) : Gt(this._isLocalCreation))
      }
      get particles() {
        return this._particles
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(zz) {
        this._animationSheetEnabled !== zz && (this._animationSheetEnabled = zz, zz ? (this._sheetCreation = {
          process: Ct,
          previousItem: null,
          nextItem: null
        }, Zt(this._sheetCreation, this._colorDeadCreation)) : Gt(this._sheetCreation), this._reset())
      }
      getActiveCount() {
        return this._particles.length
      }
      getClassName() {
        return "ParticleSystem"
      }
      isStopping() {
        return this._stopped && this.isAlive()
      }
      getCustomEffect() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[zz]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[zz] ?? this._customWrappers[0]
      }
      setCustomEffect(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[tz] = new iz.c(this._engine), this._customWrappers[tz].effect = zz, this._customWrappers[tz].drawContext && (this._customWrappers[tz].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Wz.c), this._onBeforeDrawParticlesObservable
      }
      get vertexShaderName() {
        return "particles"
      }
      get vertexBuffers() {
        return this._vertexBuffers
      }
      get indexBuffer() {
        return this._indexBuffer
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(zz) {
        if (this.noiseTexture !== zz) {
          if (this._noiseTexture = zz, !zz) return Gt(this._noiseCreation), void Gt(this._noiseProcessing);
          this._noiseCreation = {
            process: Nt,
            previousItem: null,
            nextItem: null
          }, Zt(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: bt,
            previousItem: null,
            nextItem: null
          }, Zt(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Oz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Uz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        Qz || (Qz = !0, cz(hz.i, dz)), (0, kz.b)(), super(zz), this._emitterInverseWorldMatrix = Xz.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Xz.p, this.qJ = new Wz.c, this.onStoppedObservable = new Wz.c, this.onStartedObservable = new Wz.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Kz.d(0, 0, 0, 0), this._colorDiff = new Kz.d(0, 0, 0, 0), this._scaledGravity = Xz.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = zz => {}, this.recycleParticle = zz => {
          const tz = this._particles.pop();
          tz !== zz && tz.copyTo(zz), tz.metadata = null, this._stockParticles.push(tz)
        }, this._createParticle = () => {
          let zz;
          return 0 !== this._stockParticles.length ? (zz = this._stockParticles.pop(), zz._reset()) : zz = new Jz(this), this._prepareParticle(zz), zz
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = tz, this._epsilon = oz, sz && "Scene" !== sz.getClassName() ? (this._engine = sz, this.defaultProjectionMatrix = Xz.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = sz || vz.c.LastCreatedScene, this._engine = this._scene.FD(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.lY.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: xt,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Ot,
          previousItem: null,
          nextItem: null
        }, Zt(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: Ez,
          previousItem: null,
          nextItem: null
        }, Zt(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: mt,
          previousItem: null,
          nextItem: null
        }, Zt(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Dt,
          previousItem: null,
          nextItem: null
        }, Zt(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Jt,
          previousItem: null,
          nextItem: null
        }, Zt(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: az,
          previousItem: null,
          nextItem: null
        }, Zt(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: qz,
          previousItem: null,
          nextItem: null
        }, Zt(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Uz || (this._colorProcessing = {
          process: Rz,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: fz,
          previousItem: null,
          nextItem: null
        }, Zt(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Xt,
          previousItem: null,
          nextItem: null
        }, Zt(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Ut,
          previousItem: null,
          nextItem: null
        }, Zt(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: wt,
          previousItem: null,
          nextItem: null
        }, Zt(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Oz, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new iz.c(this._engine)
        }, this._customWrappers[0].effect = Fz, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new uz.b, this.updateFunction = zz => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((zz => {
            this._noiseTextureData = zz
          })));
          const tz = zz === this._particles;
          for (let sz = 0; sz < zz.length; sz++) {
            const Fz = zz[sz];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Wz = Fz.age;
            if (Fz.age += this._tempScaledUpdateSpeed, Fz.age > Fz.lifeTime) {
              const zz = Fz.age - Wz,
                tz = Fz.lifeTime - Wz;
              this._tempScaledUpdateSpeed = tz * this._tempScaledUpdateSpeed / zz, Fz.age = Fz.lifeTime
            }
            this._ratio = Fz.age / Fz.lifeTime, Fz._properties.directionScale = this._tempScaledUpdateSpeed;
            let Xz = this._updateQueueStart;
            for (; Xz;) Xz.process(Fz, this), Xz = Xz.nextItem;
            if (this._isAnimationSheetEnabled && !Uz && Fz.updateCellIndex(), Fz._inheritParticleInfoToSubEmitters(), Fz.age >= Fz.lifeTime) {
              if (this._emitFromParticle(Fz), Fz._properties.attachedSubEmitters) {
                for (const zz of Fz._properties.attachedSubEmitters) zz.particleSystem.disposeOnStop = !0, zz.particleSystem.stop();
                Fz._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Fz), tz && sz--
            } else;
          }
        }
      }
      serialize(zz) {
        throw new Error("Method not implemented.")
      }
      clone(zz, tz) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Yt : this._lifeTimeCreation.process = xt
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Ht,
          previousItem: null,
          nextItem: null
        }, Zt(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Gt(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(zz) {
        this.targetStopDuration !== zz && (this._targetStopDuration = zz, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(zz, tz, sz) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, zz, tz, sz), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(zz) {
        return this._removeFactorGradient(this._lifeTimeGradients, zz), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(zz, tz, sz) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = gt, this._sizeGradientProcessing = {
          process: Bt,
          previousItem: null,
          nextItem: null
        }, et(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, zz, tz, sz), this
      }
      removeSizeGradient(zz) {
        return this._removeFactorGradient(this._sizeGradients, zz), 0 === this._sizeGradients?.length && (Gt(this._sizeGradientProcessing), this._sizeCreation.process = Dt), this
      }
      addColorRemapGradient(zz, tz, sz) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, zz, tz, sz), this
      }
      removeColorRemapGradient(zz) {
        return this._removeFactorGradient(this._colorRemapGradients, zz), this
      }
      addAlphaRemapGradient(zz, tz, sz) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, zz, tz, sz), this
      }
      removeAlphaRemapGradient(zz) {
        return this._removeFactorGradient(this._alphaRemapGradients, zz), this
      }
      addAngularSpeedGradient(zz, tz, sz) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = It, this._angularSpeedGradientProcessing = {
          process: pz,
          previousItem: null,
          nextItem: null
        }, et(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, zz, tz, sz), this
      }
      removeAngularSpeedGradient(zz) {
        return this._removeFactorGradient(this._angularSpeedGradients, zz), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Jt, Gt(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(zz, tz, sz) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: tt,
          previousItem: null,
          nextItem: null
        }, Zt(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Ft,
          previousItem: null,
          nextItem: null
        }, et(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, zz, tz, sz), this
      }
      removeVelocityGradient(zz) {
        return this._removeFactorGradient(this._velocityGradients, zz), 0 === this._velocityGradients?.length && (Gt(this._velocityCreation), Gt(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(zz, tz, sz) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: st,
          previousItem: null,
          nextItem: null
        }, Zt(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Wt,
          previousItem: null,
          nextItem: null
        }, Zt(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, zz, tz, sz), this
      }
      removeLimitVelocityGradient(zz) {
        return this._removeFactorGradient(this._limitVelocityGradients, zz), 0 === this._limitVelocityGradients?.length && (Gt(this._limitVelocityCreation), Gt(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(zz, tz, sz) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Kt,
          previousItem: null,
          nextItem: null
        }, et(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: ut,
          previousItem: null,
          nextItem: null
        }, et(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, zz, tz, sz), this
      }
      removeDragGradient(zz) {
        return this._removeFactorGradient(this._dragGradients, zz), 0 === this._dragGradients?.length && (Gt(this._dragCreation), Gt(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(zz, tz, sz) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, zz, tz, sz), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(zz) {
        return this._removeFactorGradient(this._startSizeGradients, zz), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const zz = new Uint8Array(4 * this._rawTextureWidth),
          tz = Kz.f.Color3[0];
        for (let sz = 0; sz < this._rawTextureWidth; sz++) {
          const Wz = sz / this._rawTextureWidth;
          Fz.o.GetCurrentGradient(Wz, this._rampGradients, ((Fz, Wz, Xz) => {
            Kz.c.LerpToRef(Fz.color, Wz.color, Xz, tz), zz[4 * sz] = 255 * tz.r, zz[4 * sz + 1] = 255 * tz.g, zz[4 * sz + 2] = 255 * tz.b, zz[4 * sz + 3] = 255
          }))
        }
        this._rampGradientsTexture = oz.b.CreateRGBATexture(zz, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((zz, tz) => zz.gradient < tz.gradient ? -1 : zz.gradient > tz.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(zz, tz) {
        this._rampGradients || (this._rampGradients = []);
        const sz = new Fz.i(zz, tz);
        return this._rampGradients.push(sz), this._syncRampGradientTexture(), this
      }
      removeRampGradient(zz) {
        return this._removeGradientAndTexture(zz, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(zz, tz, sz) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Sz, this._colorProcessing.process = Vz);
        const Wz = new Fz.e(zz, tz, sz);
        return this._colorGradients.push(Wz), this._colorGradients.sort(((zz, tz) => zz.gradient < tz.gradient ? -1 : zz.gradient > tz.gradient ? 1 : 0)), this
      }
      removeColorGradient(zz) {
        if (!this._colorGradients) return this;
        let tz = 0;
        for (const sz of this._colorGradients) {
          if (sz.gradient === zz) {
            this._colorGradients.splice(tz, 1);
            break
          }
          tz++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = az, this._colorProcessing.process = Rz), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const zz of this._drawWrappers)
            if (zz)
              for (const tz of zz) tz?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(zz, tz, sz, Fz, Wz) {
        return Wz[4 * (((zz = .5 * Math.abs(zz) + .5) * sz % sz | 0) + ((tz = .5 * Math.abs(tz) + .5) * Fz % Fz | 0) * sz)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const zz = this._engine,
          tz = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * tz), this._vertexBuffer = new Oz.e(zz, this._vertexData, !0, tz);
        let sz = 0;
        const Fz = this._vertexBuffer.createVertexBuffer(Oz.m.PositionKind, sz, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Oz.m.PositionKind] = Fz, sz += 3;
        const Wz = this._vertexBuffer.createVertexBuffer(Oz.m.ColorKind, sz, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Oz.m.ColorKind] = Wz, sz += 4;
        const Xz = this._vertexBuffer.createVertexBuffer("angle", sz, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Xz, sz += 1;
        const oz = this._vertexBuffer.createVertexBuffer("size", sz, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = oz, sz += 2, this._isAnimationSheetEnabled) {
          const zz = this._vertexBuffer.createVertexBuffer("cellIndex", sz, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = zz, sz += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const zz = this._vertexBuffer.createVertexBuffer("direction", sz, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = zz, sz += 3
        }
        if (this._useRampGradients) {
          const zz = this._vertexBuffer.createVertexBuffer("remapData", sz, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = zz, sz += 4
        }
        let vz;
        if (this._useInstancing) {
          const tz = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Oz.e(zz, tz, !1, 2), vz = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else vz = this._vertexBuffer.createVertexBuffer("offset", sz, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = vz, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const zz = [],
          tz = [];
        let sz = 0;
        for (let Fz = 0; Fz < this._capacity; Fz++) zz.push(sz), zz.push(sz + 1), zz.push(sz + 2), zz.push(sz), zz.push(sz + 2), zz.push(sz + 3), tz.push(sz, sz + 1, sz + 1, sz + 2, sz + 2, sz + 3, sz + 3, sz, sz, sz + 3), sz += 4;
        this._indexBuffer = this._engine.createIndexBuffer(zz), this._linesIndexBuffer = this._engine.createIndexBuffer(tz)
      }
      getCapacity() {
        return this._capacity
      }
      isAlive() {
        return this._alive
      }
      isStarted() {
        return this._started
      }
      _preStart() {}
      start() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (zz) return this.startDelay = zz, void setTimeout((() => {
          this.start(0)
        }), zz);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const zz = this.noiseTexture;
          if (zz && zz.onGeneratedObservable) zz.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let tz = 0; tz < this.preWarmCycles; tz++) this.animate(!0), zz.render()
            }))
          }));
          else
            for (let tz = 0; tz < this.preWarmCycles; tz++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(zz))
      }
      _postStop(zz) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(zz, tz, sz, Fz) {
        let Wz = zz * this._vertexBufferSize;
        const Oz = Xz.m.XD[0].vsz(this._scene?.floatingOriginOffset || Xz.p.ZeroReadOnly);
        if (this._vertexData[Wz++] = tz.position.x + this.worldOffset.x - Oz.x, this._vertexData[Wz++] = tz.position.y + this.worldOffset.y - Oz.y, this._vertexData[Wz++] = tz.position.z + this.worldOffset.z - Oz.z, this._vertexData[Wz++] = tz.color.r, this._vertexData[Wz++] = tz.color.g, this._vertexData[Wz++] = tz.color.b, this._vertexData[Wz++] = tz.color.a, this._vertexData[Wz++] = tz.angle, this._vertexData[Wz++] = tz.scale.x * tz.size, this._vertexData[Wz++] = tz.scale.y * tz.size, this._isAnimationSheetEnabled && (this._vertexData[Wz++] = tz.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Wz++] = tz.direction.x, this._vertexData[Wz++] = tz.direction.y, this._vertexData[Wz++] = tz.direction.z);
        else if (tz._properties.initialDirection) {
          let zz = tz._properties.initialDirection;
          this.isLocal && (Xz.p.TransformNormalToRef(zz, this._emitterWorldMatrix, Xz.m.XD[0]), zz = Xz.m.XD[0]), 0 === zz.x && 0 === zz.z && (zz.x = .001), this._vertexData[Wz++] = zz.x, this._vertexData[Wz++] = zz.y, this._vertexData[Wz++] = zz.z
        } else {
          let zz = tz.direction;
          this.isLocal && (Xz.p.TransformNormalToRef(zz, this._emitterWorldMatrix, Xz.m.XD[0]), zz = Xz.m.XD[0]), 0 === zz.x && 0 === zz.z && (zz.x = .001), this._vertexData[Wz++] = zz.x, this._vertexData[Wz++] = zz.y, this._vertexData[Wz++] = zz.z
        }
        this._useRampGradients && tz.remapData && (this._vertexData[Wz++] = tz.remapData.x, this._vertexData[Wz++] = tz.remapData.y, this._vertexData[Wz++] = tz.remapData.z, this._vertexData[Wz++] = tz.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === sz ? sz = this._epsilon : 1 === sz && (sz = 1 - this._epsilon), 0 === Fz ? Fz = this._epsilon : 1 === Fz && (Fz = 1 - this._epsilon)), this._vertexData[Wz++] = sz, this._vertexData[Wz] = Fz)
      }
      _prepareParticle(zz) {}
      _createNewOnes(zz) {
        let tz;
        for (let sz = 0; sz < zz && this._particles.length !== this._capacity; sz++) {
          tz = this._createParticle(), this._particles.push(tz);
          let zz = this._createQueueStart;
          for (; zz;) zz.process(tz, this), zz = zz.nextItem;
          tz._inheritParticleInfoToSubEmitters()
        }
      }
      _update(zz) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const zz = this.emitter;
          this._emitterWorldMatrix = zz.getWorldMatrix()
        } else {
          const zz = this.emitter;
          this._emitterWorldMatrix = Xz.e.Translation(zz.x, zz.y, zz.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(zz)
      }
      static _GetAttributeNamesOrOptions() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = [Oz.m.PositionKind, Oz.m.ColorKind, "angle", "offset", "size"];
        return zz && Fz.push("cellIndex"), tz || Fz.push("direction"), sz && Fz.push("remapData"), Fz
      }
      static _GetEffectCreationOptions() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Lz.d)(Fz), zz && Fz.push("particlesInfos"), tz && Fz.push("logarithmicDepthConstant"), sz && (Fz.push("vFogInfos"), Fz.push("vFogColor")), Fz
      }
      fillDefines(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Lz.j)(this, this._scene, zz), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && zz.push("#define FOG")), this._isAnimationSheetEnabled && zz.push("#define ANIMATESHEET"), this.useLogarithmicDepth && zz.push("#define LOGARITHMICDEPTH"), tz === xz.BLENDMODE_MULTIPLY && zz.push("#define BLENDMULTIPLYMODE"), this.isLocal && zz.push("#define LOCAL"), this._useRampGradients && zz.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (zz.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            zz.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            zz.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && zz.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            zz.push("#define BILLBOARDMODE_ALL")
        }
        sz && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), zz.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(zz, tz, sz) {
        tz.push(...ct._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), zz.push(...ct._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), sz.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, nz.g)(zz, this._imageProcessingConfigurationDefines), (0, nz.e)(sz, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(zz) {
        var tz;
        const sz = this._getCustomDrawWrapper(zz);
        if (sz?.effect) return sz;
        const Fz = [];
        this.fillDefines(Fz, zz);
        const Xz = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Oz = Tt.c._PrepareStringDefines(Xz, Fz),
          oz = Oz ? Tt.c.GetConfiguration(Xz) : void 0;
        let vz = this._drawWrappers[Xz];
        vz || (vz = this._drawWrappers[Xz] = [], 0 === Xz || this._renderPassObserver || (this._renderPassObserver = ((tz = this._engine)._onReleaseRenderPassObservable ?? (tz._onReleaseRenderPassObservable = new Wz.c)).add((zz => {
          const tz = this._drawWrappers[zz];
          if (tz) {
            for (const zz of tz) zz?.dispose();
            delete this._drawWrappers[zz]
          }
        }))));
        let Uz = vz[zz];
        Uz || (Uz = new iz.c(this._engine), Uz.drawContext && (Uz.drawContext.useInstancing = this._useInstancing), vz[zz] = Uz);
        const Kz = Fz.join("\n");
        if (Uz.defines !== Kz) {
          const zz = [],
            tz = [],
            sz = [];
          this.fillUniformsAttributesAndSamplerNames(tz, zz, sz), Oz && (tz.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== oz?.defines.PREPASS_LOCAL_POSITION_INDEX && tz.push("inverseEmitterWM", "geometryWorldOffset")), Uz.setEffect(this._engine.createEffect("particles", {
            attributes: zz,
            uniformsNames: tz,
            samplers: sz,
            defines: Kz,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Oz,
            indexParameters: Oz ? {
              buffersCount: oz?._mrtCount ?? 0
            } : void 0
          }, this._engine), Kz)
        }
        return Uz
      }
      _bindGeometryRendering(zz) {
        const tz = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          sz = Tt.c.GetConfiguration(tz);
        if (!sz?._defines) return;
        zz.setFloat("objectId", 0), zz.setInt("meshBlendTag", 0);
        const Fz = this._scene?.activeCamera;
        if (zz.setFloat2("cameraInfo", Fz?.minZ ?? 0, Fz?.maxZ ?? 1), this.isLocal && void 0 !== sz.defines.PREPASS_LOCAL_POSITION_INDEX) {
          zz.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const tz = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Xz.p.ZeroReadOnly, Xz.m.XD[0]);
          zz.setVector3("geometryWorldOffset", tz)
        }
      }
      animate() {
        let zz, tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!tz && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (tz ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) zz = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const tz = this._calculateEmitRate();
            zz = tz * this._scaledUpdateSpeed | 0, this._newPartsExcess += tz * this._scaledUpdateSpeed - zz
          }
          if (this._newPartsExcess > 1 && (zz += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? zz = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(zz), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !tz) {
            let zz = 0;
            for (let tz = 0; tz < this._particles.length; tz++) {
              const sz = this._particles[tz];
              this._appendParticleVertices(zz, sz), zz += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const zz = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  tz = this._particles.length;
                tz < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, tz * zz, this._fixedCapacityHighWaterMark * zz), this._fixedCapacityHighWaterMark = tz, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
              } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
          }
          0 === this.manualEmitCount && this.disposeOnStop && this.stop()
        }
      }
      _initFixedCapacitySnapshotData() {
        return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
      }
      _clearFixedCapacitySnapshotData() {
        if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
        const zz = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * zz), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let zz = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const tz = this._actualFrame / this.targetStopDuration;
          Fz.o.GetCurrentGradient(tz, this._emitRateGradients, ((tz, sz, Fz) => {
            tz !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = sz.getFactor(), this._currentEmitRateGradient = tz), zz = (0, bz.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Fz)
          }))
        }
        return zz
      }
      _appendParticleVertices(zz, tz) {
        this._appendParticleVertex(zz++, tz, 0, 0), this._useInstancing || (this._appendParticleVertex(zz++, tz, 1, 0), this._appendParticleVertex(zz++, tz, 1, 1), this._appendParticleVertex(zz, tz, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !ct.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([sz.e(336).then((() => sz(60348))), sz.e(330).then((() => sz(60357)))])) : await Promise.all([sz.e(319).then((() => sz(60364))), Promise.all([sz.e(312), sz.e(348)]).then((() => sz(60369)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== xz.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(xz.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(xz.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(zz) {
        const tz = this._getWrapper(zz),
          sz = tz.effect,
          Fz = this._engine;
        Fz.enableEffect(tz);
        const Wz = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        sz.setTexture("diffuseSampler", this.particleTexture), sz.setMatrix("view", Wz);
        const Oz = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (sz.setMatrix("projection", Oz), this._isAnimationSheetEnabled && this.particleTexture) {
          const zz = this.particleTexture.getBaseSize();
          sz.setFloat3("particlesInfos", this.spriteCellWidth / zz.width, this.spriteCellHeight / zz.height, this.spriteCellWidth / zz.width)
        }
        if (sz.setVector2("translationPivot", this.translationPivot), sz.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const zz = this._scene.activeCamera;
          sz.setVector3("eyePosition", zz.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), sz.setTexture("rampSampler", this._rampGradientsTexture));
        const oz = sz.defines;
        this._scene && ((0, Lz.g)(sz, this, this._scene), this.applyFog && (0, lz.j)(this._scene, void 0, sz)), oz.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Wz.invertToRef(Xz.m.Matrix[0]), sz.setMatrix("invView", Xz.m.Matrix[0])), sz._multiTarget && this._bindGeometryRendering(sz), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Fz.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, sz) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, sz)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Fz.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, sz) : Fz.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, sz), this.useLogarithmicDepth && this._scene && (0, lz.t)(oz, sz, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(sz), this._setEngineBasedOnBlendMode(zz), sz._multiTarget && Tt.c._BindZeroAlphaDiscard(Fz, sz);
        let vz = !1;
        try {
          Tt.c._BindAttachmentsForEffect(Fz, sz) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(sz), this._useInstancing ? this._scene?.forceWireframe ? Fz.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Fz.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Fz.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Fz.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), vz = !0)
        } finally {
          Tt.c._RestoreAttachments(Fz)
        }
        return vz ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const zz = this._engine;
        let tz;
        return zz.setState && (zz.setState(!1), this.forceDepthWrite && zz.setDepthWrite(!0)), tz = this.blendMode === xz.BLENDMODE_MULTIPLYADD ? this._render(xz.BLENDMODE_MULTIPLY) + this._render(xz.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), tz
      }
      _onDispose() {}
      dispose() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), zz && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), zz && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(tz, sz), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const zz = this._scene.lY.indexOf(this);
          zz > -1 && this._scene.lY.splice(zz, 1), this._scene._activeParticleSystems.dispose()
        }
        this.qJ.notifyObservers(this), this.qJ.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    ct.ForceGLSL = !1;
    var jt, At = sz(36518);
    ! function(zz) {
      zz[zz.ATTACHED = 0] = "ATTACHED", zz[zz.END = 1] = "END"
    }(jt || (jt = {}));
    class yt {
      constructor(zz) {
        if (this.particleSystem = zz, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !zz.emitter || !zz.emitter.dispose) {
          const tz = (0, At.e)("BABYLON.AbstractMesh");
          zz.emitter = new tz("SubemitterSystemEmitter", zz.aJ()), zz._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let zz = this.particleSystem.emitter;
        if (zz) {
          if (zz instanceof Xz.p) zz = zz.clone();
          else if (-1 !== zz.getClassName().indexOf("Mesh")) {
            zz = new((0, At.e)("BABYLON.Mesh"))("", zz.aJ()), zz.isVisible = !1
          }
        } else zz = new Xz.p;
        const tz = new yt(this.particleSystem.clone(this.particleSystem.name, zz));
        return tz.particleSystem.name += "Clone", tz.type = this.type, tz.inheritDirection = this.inheritDirection, tz.inheritedVelocityAmount = this.inheritedVelocityAmount, tz.particleSystem._disposeEmitterOnDispose = !0, tz.particleSystem.disposeOnStop = !0, tz
      }
      serialize() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = {};
        return tz.type = this.type, tz.inheritDirection = this.inheritDirection, tz.inheritedVelocityAmount = this.inheritedVelocityAmount, tz.particleSystem = this.particleSystem.serialize(zz), tz
      }
      static _ParseParticleSystem(zz, tz, sz) {
        throw (0, Mz.i)("ParseParticle")
      }
      static Parse(zz, tz, sz) {
        const Fz = zz.particleSystem,
          Wz = new yt(yt._ParseParticleSystem(Fz, tz, sz, !0));
        return Wz.type = zz.type, Wz.inheritDirection = zz.inheritDirection, Wz.inheritedVelocityAmount = zz.inheritedVelocityAmount, Wz.particleSystem._isSubEmitter = !0, Wz
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Mt = sz(39077),
      dt = sz(39181);
    const ht = () => {};
    class Qt {
      constructor() {
        this.particlePositionGenerator = ht, this.particleDestinationGenerator = ht, this.particleDirectionGenerator = ht
      }
      startDirectionFunction(zz, tz, sz, Fz) {
        const Wz = Xz.m.XD[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== ht) this.particleDirectionGenerator(-1, sz, Wz);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== ht) {
          this.particleDestinationGenerator(-1, sz, Wz);
          const zz = Xz.m.XD[1];
          Wz.subtractToRef(sz.position, zz), zz.scaleToRef(1 / sz.lifeTime, Wz)
        } else Wz.set(0, 0, 0);
        Fz ? tz.vsz(Wz) : Xz.p.TransformNormalToRef(Wz, zz, tz)
      }
      startPositionFunction(zz, tz, sz, Fz) {
        const Wz = Xz.m.XD[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== ht ? this.particlePositionGenerator(-1, sz, Wz) : Wz.set(0, 0, 0), Fz ? tz.vsz(Wz) : Xz.p.TransformCoordinatesToRef(Wz, zz, tz)
      }
      clone() {
        const zz = new Qt;
        return Nz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {}
      buildUniformLayout(zz) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.particlePositionGenerator = this.particlePositionGenerator, zz.particleDestinationGenerator = this.particleDestinationGenerator, zz
      }
      parse(zz) {
        zz.particlePositionGenerator && (this.particlePositionGenerator = zz.particlePositionGenerator), zz.particleDestinationGenerator && (this.particleDestinationGenerator = zz.particleDestinationGenerator)
      }
    }
    const kt = Xz.p.Zero(),
      it = Xz.p.Zero(),
      Lt = Xz.p.Zero();
    class lt {
      constructor() {
        this.strength = 0, this.position = Xz.p.Zero()
      }
      _processParticle(zz, tz) {
        this.position.subtractToRef(zz.position, kt);
        const sz = kt.lengthSquared() + 1;
        kt.normalize().scaleToRef(this.strength / sz, it), it.scaleToRef(tz._tempScaledUpdateSpeed, Lt), zz.direction.addInPlace(Lt)
      }
      serialize() {
        return {
          position: this.position.hsz(),
          strength: this.strength
        }
      }
    }
    const nt = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class qt extends ct {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = zz => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const tz = Math.floor(Math.random() * this._subEmitters.length);
          for (const sz of this._subEmitters[tz])
            if (1 === sz.type) {
              const tz = sz.clone();
              zz._inheritParticleInfoToSubEmitter(tz), tz.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(tz.particleSystem), tz.particleSystem.start()
            }
        }
      }
      get source() {
        return this._source
      }
      get isNodeGenerated() {
        return null !== this._source
      }
      get flowMap() {
        return this._flowMap
      }
      set flowMap(zz) {
        this._flowMap !== zz && (this._flowMap = zz, this._flowMapUpdate && (Gt(this._flowMapUpdate), this._flowMapUpdate = null), zz && (this._flowMapUpdate = {
          process: zz => {
            const tz = this.aJ()?.getTransformMatrix();
            this._flowMap._processParticle(zz, this.flowMapStrength * this._tempScaledUpdateSpeed, tz)
          },
          previousItem: null,
          nextItem: null
        }, Zt(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(zz) {
        super.addAttractor(zz), 1 === this._attractors.length && (this._attractorUpdate = {
          process: zz => {
            for (const tz of this._attractors) tz._processParticle(zz, this)
          },
          previousItem: null,
          nextItem: null
        }, Zt(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(zz) {
        super.removeAttractor(zz), 0 === this._attractors.length && this._attractorUpdate && Gt(this._attractorUpdate)
      }
      start() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(zz)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const zz of this.subEmitters) zz instanceof qt ? this._subEmitters.push([new yt(zz)]) : zz instanceof yt ? this._subEmitters.push([zz]) : zz instanceof Array && this._subEmitters.push(zz)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const zz of this.activeSubSystems) zz.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const zz = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== zz && this._rootParticleSystem.activeSubSystems.splice(zz, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(zz) {
        zz && this._stopSubEmitters()
      }
      _prepareParticle(zz) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const tz = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          zz._properties.attachedSubEmitters = [];
          for (const sz of tz)
            if (0 === sz.type) {
              const tz = sz.clone();
              zz._properties.attachedSubEmitters.push(tz), tz.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), zz && this.particles)
          for (const sz of this.particles)
            if (sz._properties.attachedSubEmitters)
              for (let zz = sz._properties.attachedSubEmitters.length - 1; zz >= 0; zz -= 1) sz._properties.attachedSubEmitters[zz].dispose();
        if (tz && this.activeSubSystems)
          for (let sz = this.activeSubSystems.length - 1; sz >= 0; sz -= 1) this.activeSubSystems[sz].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let zz = 0; zz < this._subEmitters.length; zz++)
            for (const tz of this._subEmitters[zz]) tz.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(zz, tz, sz, Fz) {
        let Wz;
        Wz = sz instanceof Mt.b ? null : sz;
        const Oz = (0, At.e)("BABYLON.Texture");
        if (Oz && Wz)
          if (zz.texture) tz.particleTexture = Oz.Parse(zz.texture, Wz, Fz);
          else if (zz.textureName) {
          const sz = zz.textureSettings;
          if (tz.particleTexture = new Oz(Fz + zz.textureName, Wz, !1, void 0 === zz.invertY || zz.invertY, sz ? sz.samplingMode : void 0), tz.particleTexture.name = zz.textureName, sz) {
            const zz = tz.particleTexture;
            for (const tz of nt) void 0 !== sz[tz] && (zz[tz] = sz[tz])
          }
        }
        if (zz.emitterId || 0 === zz.emitterId || void 0 !== zz.emitter ? (zz.emitterId || 0 === zz.emitterId) && Wz ? (tz.emitter = Wz.getLastMeshById(zz.emitterId), tz.emitter || (tz.emitter = Xz.p.Zero())) : tz.emitter = Xz.p.FromArray(zz.emitter) : tz.emitter = Xz.p.Zero(), tz.isLocal = !!zz.isLocal, void 0 !== zz.renderingGroupId && (tz.renderingGroupId = zz.renderingGroupId), void 0 !== zz.isBillboardBased && (tz.isBillboardBased = zz.isBillboardBased), void 0 !== zz.billboardMode && (tz.billboardMode = zz.billboardMode), void 0 !== zz.useLogarithmicDepth && (tz.useLogarithmicDepth = zz.useLogarithmicDepth), zz.animations) {
          for (let sz = 0; sz < zz.animations.length; sz++) {
            const Fz = zz.animations[sz],
              Wz = (0, At.e)("BABYLON.Animation");
            Wz && tz.animations.push(Wz.Parse(Fz))
          }
          tz.beginAnimationOnStart = zz.beginAnimationOnStart, tz.beginAnimationFrom = zz.beginAnimationFrom, tz.beginAnimationTo = zz.beginAnimationTo, tz.beginAnimationLoop = zz.beginAnimationLoop
        }
        if (zz.autoAnimate && Wz && Wz.beginAnimation(tz, zz.autoAnimateFrom, zz.autoAnimateTo, zz.autoAnimateLoop, zz.autoAnimateSpeed || 1), tz.startDelay = 0 | zz.startDelay, tz.minAngularSpeed = zz.minAngularSpeed, tz.maxAngularSpeed = zz.maxAngularSpeed, tz.minSize = zz.minSize, tz.maxSize = zz.maxSize, zz.minScaleX && (tz.minScaleX = zz.minScaleX, tz.maxScaleX = zz.maxScaleX, tz.minScaleY = zz.minScaleY, tz.maxScaleY = zz.maxScaleY), void 0 !== zz.preWarmCycles && (tz.preWarmCycles = zz.preWarmCycles, tz.preWarmStepOffset = zz.preWarmStepOffset), void 0 !== zz.minInitialRotation && (tz.minInitialRotation = zz.minInitialRotation, tz.maxInitialRotation = zz.maxInitialRotation), tz.minLifeTime = zz.minLifeTime, tz.maxLifeTime = zz.maxLifeTime, tz.minEmitPower = zz.minEmitPower, tz.maxEmitPower = zz.maxEmitPower, tz.emitRate = zz.emitRate, tz.gravity = Xz.p.FromArray(zz.gravity), zz.noiseStrength && (tz.noiseStrength = Xz.p.FromArray(zz.noiseStrength)), tz.color1 = Kz.d.FromArray(zz.color1), tz.color2 = Kz.d.FromArray(zz.color2), tz.colorDead = Kz.d.FromArray(zz.colorDead), tz.updateSpeed = zz.updateSpeed, tz.targetStopDuration = zz.targetStopDuration, tz.blendMode = zz.blendMode, zz.colorGradients)
          for (const Xz of zz.colorGradients) tz.addColorGradient(Xz.gradient, Kz.d.FromArray(Xz.color1), Xz.color2 ? Kz.d.FromArray(Xz.color2) : void 0);
        if (zz.rampGradients) {
          for (const sz of zz.rampGradients) tz.addRampGradient(sz.gradient, Kz.c.FromArray(sz.color));
          tz.useRampGradients = zz.useRampGradients
        }
        if (zz.colorRemapGradients)
          for (const Xz of zz.colorRemapGradients) tz.addColorRemapGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.alphaRemapGradients)
          for (const Xz of zz.alphaRemapGradients) tz.addAlphaRemapGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.sizeGradients)
          for (const Xz of zz.sizeGradients) tz.addSizeGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.angularSpeedGradients)
          for (const Xz of zz.angularSpeedGradients) tz.addAngularSpeedGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.velocityGradients)
          for (const Xz of zz.velocityGradients) tz.addVelocityGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.dragGradients)
          for (const Xz of zz.dragGradients) tz.addDragGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.emitRateGradients)
          for (const Xz of zz.emitRateGradients) tz.addEmitRateGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.startSizeGradients)
          for (const Xz of zz.startSizeGradients) tz.addStartSizeGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.lifeTimeGradients)
          for (const Xz of zz.lifeTimeGradients) tz.addLifeTimeGradient(Xz.gradient, void 0 !== Xz.factor1 ? Xz.factor1 : Xz.factor, Xz.factor2);
        if (zz.limitVelocityGradients) {
          for (const sz of zz.limitVelocityGradients) tz.addLimitVelocityGradient(sz.gradient, void 0 !== sz.factor1 ? sz.factor1 : sz.factor, sz.factor2);
          tz.limitVelocityDamping = zz.limitVelocityDamping
        }
        if (zz.noiseTexture && Wz) {
          const sz = (0, At.e)("BABYLON.ProceduralTexture");
          tz.noiseTexture = sz.Parse(zz.noiseTexture, Wz, Fz)
        }
        let oz;
        if (zz.particleEmitterType) {
          switch (zz.particleEmitterType.type) {
            case "SphereParticleEmitter":
              oz = new gz;
              break;
            case "SphereDirectedParticleEmitter":
              oz = new Hz;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              oz = new Pz;
              break;
            case "ConeDirectedParticleEmitter":
              oz = new rz;
              break;
            case "CylinderParticleEmitter":
              oz = new Bz.g;
              break;
            case "CylinderDirectedParticleEmitter":
              oz = new Bz.d;
              break;
            case "HemisphericParticleEmitter":
              oz = new Dz;
              break;
            case "PointParticleEmitter":
              oz = new wz;
              break;
            case "MeshParticleEmitter":
              oz = new Yz;
              break;
            case "CustomParticleEmitter":
              oz = new Qt;
              break;
            default:
              oz = new uz.b
          }
          oz.parse(zz.particleEmitterType, Wz)
        } else oz = new uz.b, oz.parse(zz, Wz);
        tz.particleEmitterType = oz, tz.startSpriteCellID = zz.startSpriteCellID, tz.endSpriteCellID = zz.endSpriteCellID, tz.spriteCellLoop = zz.spriteCellLoop ?? !0, tz.spriteCellWidth = zz.spriteCellWidth, tz.spriteCellHeight = zz.spriteCellHeight, tz.spriteCellChangeSpeed = zz.spriteCellChangeSpeed, tz.spriteRandomStartCell = zz.spriteRandomStartCell, tz.disposeOnStop = zz.disposeOnStop ?? !1, tz.manualEmitCount = zz.manualEmitCount ?? -1
      }
      static Parse(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wz = arguments.length > 4 ? arguments[4] : void 0;
        const Oz = zz.name;
        let oz, vz, Uz = null,
          uz = null;
        if (tz instanceof Mt.b ? oz = tz : (vz = tz, oz = vz.FD()), zz.customShader && (0, Mz.d)(oz.createEffectForParticles)) {
          uz = zz.customShader;
          const tz = uz.shaderOptions.defines.length > 0 ? uz.shaderOptions.defines.join("\n") : "";
          Uz = oz.createEffectForParticles(uz.shaderPath.fragmentElement, uz.shaderOptions.uniforms, uz.shaderOptions.samplers, tz)
        }
        const Nz = new qt(Oz, Wz || zz.au, tz, Uz, zz.isAnimationSheetEnabled);
        if (Nz.customShader = uz, Nz._rootUrl = sz, zz.id && (Nz.id = zz.id), zz.subEmitters) {
          Nz.subEmitters = [];
          for (const Fz of zz.subEmitters) {
            const zz = [];
            for (const Wz of Fz) zz.push(yt.Parse(Wz, tz, sz));
            Nz.subEmitters.push(zz)
          }
        }
        if (zz.attractors)
          for (const Kz of zz.attractors) {
            const zz = new lt;
            zz.position = Xz.p.FromArray(Kz.position), zz.strength = Kz.strength, Nz.addAttractor(zz)
          }
        return qt._Parse(zz, Nz, tz, sz), zz.textureMask && (Nz.textureMask = Kz.d.FromArray(zz.textureMask)), zz.worldOffset && (Nz.worldOffset = Xz.p.FromArray(zz.worldOffset)), zz.preventAutoStart && (Nz.preventAutoStart = zz.preventAutoStart), zz.metadata && (Nz.metadata = zz.metadata), Fz || Nz.preventAutoStart || Nz.start(), Nz
      }
      serialize() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = {};
        if (qt._Serialize(tz, this, zz), tz.textureMask = this.textureMask.hsz(), tz.customShader = this.customShader, tz.preventAutoStart = this.preventAutoStart, tz.worldOffset = this.worldOffset.hsz(), this.metadata && (tz.metadata = this.metadata), this.subEmitters) {
          tz.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const sz of this._subEmitters) {
            const Fz = [];
            for (const tz of sz) tz.particleSystem.doNotSerialize || Fz.push(tz.serialize(zz));
            tz.subEmitters.push(Fz)
          }
        }
        if (this._attractors && this._attractors.length) {
          tz.attractors = [];
          for (const zz of this._attractors) tz.attractors.push(zz.serialize())
        }
        return tz
      }
      static _Serialize(zz, tz, sz) {
        if (zz.name = tz.name, zz.id = tz.id, zz.au = tz.getCapacity(), zz.disposeOnStop = tz.disposeOnStop, zz.manualEmitCount = tz.manualEmitCount, tz.emitter.position) {
          const sz = tz.emitter;
          zz.emitterId = sz.id
        } else {
          const sz = tz.emitter;
          zz.emitter = sz.hsz()
        }
        if (tz.particleEmitterType && (zz.particleEmitterType = tz.particleEmitterType.serialize()), tz.particleTexture)
          if (sz) zz.texture = tz.particleTexture.serialize();
          else {
            const sz = tz.particleTexture;
            zz.textureName = tz.particleTexture.name, zz.invertY = !!sz._invertY;
            const Fz = {};
            for (const zz of nt) Fz[zz] = sz[zz];
            Fz.samplingMode = sz.samplingMode, zz.textureSettings = Fz
          } zz.isLocal = tz.isLocal, dt.e.AppendSerializedAnimations(tz, zz), zz.beginAnimationOnStart = tz.beginAnimationOnStart, zz.beginAnimationFrom = tz.beginAnimationFrom, zz.beginAnimationTo = tz.beginAnimationTo, zz.beginAnimationLoop = tz.beginAnimationLoop, zz.startDelay = tz.startDelay, zz.renderingGroupId = tz.renderingGroupId, zz.isBillboardBased = tz.isBillboardBased, zz.billboardMode = tz.billboardMode, zz.minAngularSpeed = tz.minAngularSpeed, zz.maxAngularSpeed = tz.maxAngularSpeed, zz.minSize = tz.minSize, zz.maxSize = tz.maxSize, zz.minScaleX = tz.minScaleX, zz.maxScaleX = tz.maxScaleX, zz.minScaleY = tz.minScaleY, zz.maxScaleY = tz.maxScaleY, zz.minEmitPower = tz.minEmitPower, zz.maxEmitPower = tz.maxEmitPower, zz.minLifeTime = tz.minLifeTime, zz.maxLifeTime = tz.maxLifeTime, zz.emitRate = tz.emitRate, zz.gravity = tz.gravity.hsz(), zz.noiseStrength = tz.noiseStrength.hsz(), zz.color1 = tz.color1.hsz(), zz.color2 = tz.color2.hsz(), zz.colorDead = tz.colorDead.hsz(), zz.updateSpeed = tz.updateSpeed, zz.targetStopDuration = tz.targetStopDuration, zz.blendMode = tz.blendMode, zz.preWarmCycles = tz.preWarmCycles, zz.preWarmStepOffset = tz.preWarmStepOffset, zz.minInitialRotation = tz.minInitialRotation, zz.maxInitialRotation = tz.maxInitialRotation, zz.startSpriteCellID = tz.startSpriteCellID, zz.spriteCellLoop = tz.spriteCellLoop, zz.endSpriteCellID = tz.endSpriteCellID, zz.spriteCellChangeSpeed = tz.spriteCellChangeSpeed, zz.spriteCellWidth = tz.spriteCellWidth, zz.spriteCellHeight = tz.spriteCellHeight, zz.spriteRandomStartCell = tz.spriteRandomStartCell, zz.isAnimationSheetEnabled = tz.isAnimationSheetEnabled, zz.useLogarithmicDepth = tz.useLogarithmicDepth;
        const Fz = tz.getColorGradients();
        if (Fz) {
          zz.colorGradients = [];
          for (const tz of Fz) {
            const sz = {
              gradient: tz.gradient,
              color1: tz.color1.hsz()
            };
            tz.color2 ? sz.color2 = tz.color2.hsz() : sz.color2 = tz.color1.hsz(), zz.colorGradients.push(sz)
          }
        }
        const Wz = tz.getRampGradients();
        if (Wz) {
          zz.rampGradients = [];
          for (const tz of Wz) {
            const sz = {
              gradient: tz.gradient,
              color: tz.color.hsz()
            };
            zz.rampGradients.push(sz)
          }
          zz.useRampGradients = tz.useRampGradients
        }
        const Xz = tz.getColorRemapGradients();
        if (Xz) {
          zz.colorRemapGradients = [];
          for (const tz of Xz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.colorRemapGradients.push(sz)
          }
        }
        const Oz = tz.getAlphaRemapGradients();
        if (Oz) {
          zz.alphaRemapGradients = [];
          for (const tz of Oz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.alphaRemapGradients.push(sz)
          }
        }
        const oz = tz.getSizeGradients();
        if (oz) {
          zz.sizeGradients = [];
          for (const tz of oz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.sizeGradients.push(sz)
          }
        }
        const vz = tz.getAngularSpeedGradients();
        if (vz) {
          zz.angularSpeedGradients = [];
          for (const tz of vz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.angularSpeedGradients.push(sz)
          }
        }
        const Uz = tz.getVelocityGradients();
        if (Uz) {
          zz.velocityGradients = [];
          for (const tz of Uz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.velocityGradients.push(sz)
          }
        }
        const Kz = tz.getDragGradients();
        if (Kz) {
          zz.dragGradients = [];
          for (const tz of Kz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.dragGradients.push(sz)
          }
        }
        const uz = tz.getEmitRateGradients();
        if (uz) {
          zz.emitRateGradients = [];
          for (const tz of uz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.emitRateGradients.push(sz)
          }
        }
        const Nz = tz.getStartSizeGradients();
        if (Nz) {
          zz.startSizeGradients = [];
          for (const tz of Nz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.startSizeGradients.push(sz)
          }
        }
        const bz = tz.getLifeTimeGradients();
        if (bz) {
          zz.lifeTimeGradients = [];
          for (const tz of bz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.lifeTimeGradients.push(sz)
          }
        }
        const wz = tz.getLimitVelocityGradients();
        if (wz) {
          zz.limitVelocityGradients = [];
          for (const tz of wz) {
            const sz = {
              gradient: tz.gradient,
              factor1: tz.factor1
            };
            void 0 !== tz.factor2 ? sz.factor2 = tz.factor2 : sz.factor2 = tz.factor1, zz.limitVelocityGradients.push(sz)
          }
          zz.limitVelocityDamping = tz.limitVelocityDamping
        }
        tz.noiseTexture && (zz.noiseTexture = tz.noiseTexture.serialize())
      }
      clone(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = {
          ...this._customWrappers
        };
        let Wz = null;
        const Xz = this._engine;
        if ((0, Mz.d)(Xz.createEffectForParticles) && null != this.customShader) {
          Wz = this.customShader;
          const zz = Wz.shaderOptions.defines.length > 0 ? Wz.shaderOptions.defines.join("\n") : "",
            tz = Xz.createEffectForParticles(Wz.shaderPath.fragmentElement, Wz.shaderOptions.uniforms, Wz.shaderOptions.samplers, zz);
          Fz[0] ? Fz[0].effect = tz : this.setCustomEffect(tz, 0)
        }
        const Oz = this.serialize(sz),
          oz = !1 === sz && this.particleTexture ? this.particleTexture.clone() : null;
        oz && (Oz.textureName = void 0);
        const vz = qt.Parse(Oz, this._scene || this._engine, this._rootUrl);
        return vz.name = zz, vz.customShader = Wz, vz._customWrappers = Fz, oz && (vz.particleTexture = oz), void 0 === tz && (tz = this.emitter), this.noiseTexture && (vz.noiseTexture = this.noiseTexture.clone()), vz.emitter = tz, this.preventAutoStart || vz.start(), vz
      }
    }
    qt.BILLBOARDMODE_Y = 2, qt.BILLBOARDMODE_ALL = 7, qt.BILLBOARDMODE_STRETCHED = 8, qt.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let St = !1;
    St || (St = !0, yt._ParseParticleSystem = qt.Parse)
  },
  40761: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      SkyMaterial: () => Pz,
      _MaxColorValueForRenderTarget: () => Bz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(39181),
      Oz = sz(36473),
      oz = sz(39444),
      vz = sz(39501),
      Uz = sz(40717),
      Kz = sz(40238),
      uz = sz(39252),
      Nz = sz(36518),
      bz = sz(39529),
      wz = sz(39507),
      Dz = sz(39493),
      gz = sz(39489);
    class Hz extends oz.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Bz(zz) {
      switch (zz) {
        case Uz.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Uz.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Pz = (() => {
      var zz;
      let tz, oz, Uz, Nz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz = vz.c,
        cz = [],
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [],
        Qz = [],
        kz = [],
        iz = [],
        Lz = [],
        lz = [],
        nz = [],
        az = [],
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
        vt = [];
      return zz = class extends Tz {
        constructor(zz, tz) {
          super(zz, tz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Fz.k)(this, cz, 1), this.turbidity = ((0, Fz.k)(this, jz), (0, Fz.k)(this, Az, 10)), this.rayleigh = ((0, Fz.k)(this, yz), (0, Fz.k)(this, Mz, 2)), this.mieCoefficient = ((0, Fz.k)(this, dz), (0, Fz.k)(this, hz, .005)), this.mieDirectionalG = ((0, Fz.k)(this, Qz), (0, Fz.k)(this, kz, .8)), this.distance = ((0, Fz.k)(this, iz), (0, Fz.k)(this, Lz, 500)), this.inclination = ((0, Fz.k)(this, lz), (0, Fz.k)(this, nz, .49)), this.azimuth = ((0, Fz.k)(this, az), (0, Fz.k)(this, qz, .25)), this.sunPosition = ((0, Fz.k)(this, Sz), (0, Fz.k)(this, Vz, new Oz.XD(0, 100, 0))), this.useSunPosition = ((0, Fz.k)(this, Rz), (0, Fz.k)(this, pz, !1)), this.cameraOffset = ((0, Fz.k)(this, fz), (0, Fz.k)(this, Ez, Oz.XD.Zero())), this.up = ((0, Fz.k)(this, zt), (0, Fz.k)(this, tt, Oz.XD.Up())), this.dithering = ((0, Fz.k)(this, st), (0, Fz.k)(this, Ft, !1)), this.rawHdrOutput = ((0, Fz.k)(this, Wt), (0, Fz.k)(this, Xt, !1)), this.cloudiness = ((0, Fz.k)(this, Ot), (0, Fz.k)(this, ot, 0)), this._cameraPosition = ((0, Fz.k)(this, vt), Oz.XD.Zero()), this._skyOrientation = new Oz.Quaternion
        }
        needAlphaBlending() {
          return this.alpha < 1
        }
        needAlphaTesting() {
          return !1
        }
        getAlphaTestTexture() {
          return null
        }
        isReadyForSubMesh(tz, sz) {
          const Fz = sz._drawWrapper;
          if (this.isFrozen && Fz.effect && Fz._wasPreviouslyReady) return !0;
          sz.materialDefines || (sz.materialDefines = new Hz);
          const Wz = sz.materialDefines,
            Xz = this.aJ();
          if (this._isReadyForSubMesh(sz)) return !0;
          if ((0, gz._)(tz, Xz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Wz, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, gz.P)(tz, Wz, !0, !1), Wz.IMAGEPROCESSINGPOSTPROCESS !== Xz.imageProcessingConfiguration.applyByPostProcess && Wz.markAsMiscDirty(), Wz.DITHER !== this.dithering && Wz.markAsMiscDirty(), Wz.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Wz.markAsMiscDirty(), Wz.isDirty) {
            Wz.markAsProcessed(), Xz.resetCachedMaterial();
            const tz = new wz.e;
            Wz.FOG && tz.addFallback(1, "FOG"), Wz.IMAGEPROCESSINGPOSTPROCESS = Xz.imageProcessingConfiguration.applyByPostProcess, Wz.DITHER = this.dithering, Wz.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Fz = [Kz.c.PositionKind];
            Wz.VERTEXCOLOR && Fz.push(Kz.c.ColorKind);
            const Oz = "sky",
              oz = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Dz.d)(oz);
            const vz = Wz.toString();
            sz.setEffect(Xz.FD().createEffect(Oz, {
              attributes: Fz,
              uniformsNames: oz,
              uniformBuffersNames: [],
              samplers: [],
              defines: vz,
              fallbacks: tz,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: zz._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Xz.FD()), Wz, this._materialContext)
          }
          return !(!sz.effect || !sz.effect.isReady()) && (Wz._renderId = Xz.getRenderId(), Fz._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(zz, tz, sz) {
          const Fz = this.aJ(),
            Wz = sz.materialDefines;
          if (!Wz) return;
          const Xz = sz.effect;
          if (!Xz) return;
          this._activeEffect = Xz, this.bindOnlyWorldMatrix(zz), this._activeEffect.setMatrix("viewProjection", Fz.getTransformMatrix()), this._mustRebind(Fz, Xz, sz) && ((0, Dz.g)(Xz, this, Fz), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, gz.t)(Wz, Xz, Fz)), Fz.fogEnabled && tz.applyFog && Fz.fogMode !== uz.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", Fz.getViewMatrix()), (0, gz.j)(Fz, tz, this._activeEffect, this.rawHdrOutput);
          const oz = Fz.activeCamera;
          if (oz) {
            const zz = oz.getWorldMatrix();
            this._cameraPosition.x = zz.m[12], this._cameraPosition.y = zz.m[13], this._cameraPosition.z = zz.m[14], this._activeEffect.setVector3("cameraPosition", Oz.TmpVectors.XD[0].vsz(this._cameraPosition).oFz(Fz.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const zz = Fz.FD()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Bz(zz?.texture?.type))
          }
          if (!this.useSunPosition) {
            const zz = Math.PI * (this.inclination - .5),
              tz = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(tz) * Math.cos(zz), this.sunPosition.y = this.distance * Math.sin(-zz), this.sunPosition.z = this.distance * Math.sin(tz) * Math.cos(zz), Oz.Quaternion.FromUnitVectorsToRef(Oz.XD.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(tz, this._activeEffect, sz)
        }
        getAnimatables() {
          return []
        }
        dispose(zz) {
          super.dispose(zz)
        }
        clone(tz) {
          return Xz.e.Clone((() => new zz(tz, this.aJ())), this)
        }
        serialize() {
          const zz = super.serialize();
          return zz.customType = "BABYLON.SkyMaterial", zz
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(tz, sz, Fz) {
          return Xz.e.Parse((() => new zz(tz.name, sz)), tz, sz, Fz)
        }
      }, (() => {
        const sz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tz[Symbol.metadata] ?? null) : void 0;
        tz = [(0, Wz.J)()], oz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], Nz = [(0, Wz.J)()], Pz = [(0, Wz.J)()], rz = [(0, Wz.J)()], Yz = [(0, Wz.J)()], xz = [(0, Wz.J)()], mz = [(0, Wz.H)()], Jz = [(0, Wz.J)()], Iz = [(0, Wz.H)()], Cz = [(0, Wz.H)()], ez = [(0, Wz.J)()], Zz = [(0, Wz.J)()], Gz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: zz => "luminance" in zz,
            get: zz => zz.luminance,
            set: (zz, tz) => {
              zz.luminance = tz
            }
          },
          metadata: sz
        }, cz, jz), (0, Fz.h)(null, null, oz, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: zz => "turbidity" in zz,
            get: zz => zz.turbidity,
            set: (zz, tz) => {
              zz.turbidity = tz
            }
          },
          metadata: sz
        }, Az, yz), (0, Fz.h)(null, null, Uz, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: zz => "rayleigh" in zz,
            get: zz => zz.rayleigh,
            set: (zz, tz) => {
              zz.rayleigh = tz
            }
          },
          metadata: sz
        }, Mz, dz), (0, Fz.h)(null, null, Nz, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: zz => "mieCoefficient" in zz,
            get: zz => zz.mieCoefficient,
            set: (zz, tz) => {
              zz.mieCoefficient = tz
            }
          },
          metadata: sz
        }, hz, Qz), (0, Fz.h)(null, null, Pz, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: zz => "mieDirectionalG" in zz,
            get: zz => zz.mieDirectionalG,
            set: (zz, tz) => {
              zz.mieDirectionalG = tz
            }
          },
          metadata: sz
        }, kz, iz), (0, Fz.h)(null, null, rz, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: zz => "distance" in zz,
            get: zz => zz.distance,
            set: (zz, tz) => {
              zz.distance = tz
            }
          },
          metadata: sz
        }, Lz, lz), (0, Fz.h)(null, null, Yz, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: zz => "inclination" in zz,
            get: zz => zz.inclination,
            set: (zz, tz) => {
              zz.inclination = tz
            }
          },
          metadata: sz
        }, nz, az), (0, Fz.h)(null, null, xz, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: zz => "azimuth" in zz,
            get: zz => zz.azimuth,
            set: (zz, tz) => {
              zz.azimuth = tz
            }
          },
          metadata: sz
        }, qz, Sz), (0, Fz.h)(null, null, mz, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: zz => "sunPosition" in zz,
            get: zz => zz.sunPosition,
            set: (zz, tz) => {
              zz.sunPosition = tz
            }
          },
          metadata: sz
        }, Vz, Rz), (0, Fz.h)(null, null, Jz, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSunPosition" in zz,
            get: zz => zz.useSunPosition,
            set: (zz, tz) => {
              zz.useSunPosition = tz
            }
          },
          metadata: sz
        }, pz, fz), (0, Fz.h)(null, null, Iz, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: zz => "cameraOffset" in zz,
            get: zz => zz.cameraOffset,
            set: (zz, tz) => {
              zz.cameraOffset = tz
            }
          },
          metadata: sz
        }, Ez, zt), (0, Fz.h)(null, null, Cz, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: zz => "up" in zz,
            get: zz => zz.up,
            set: (zz, tz) => {
              zz.up = tz
            }
          },
          metadata: sz
        }, tt, st), (0, Fz.h)(null, null, ez, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: zz => "dithering" in zz,
            get: zz => zz.dithering,
            set: (zz, tz) => {
              zz.dithering = tz
            }
          },
          metadata: sz
        }, Ft, Wt), (0, Fz.h)(null, null, Zz, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: zz => "rawHdrOutput" in zz,
            get: zz => zz.rawHdrOutput,
            set: (zz, tz) => {
              zz.rawHdrOutput = tz
            }
          },
          metadata: sz
        }, Xt, Ot), (0, Fz.h)(null, null, Gz, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: zz => "cloudiness" in zz,
            get: zz => zz.cloudiness,
            set: (zz, tz) => {
              zz.cloudiness = tz
            }
          },
          metadata: sz
        }, ot, vt), sz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sz
        })
      })(), zz._ShaderLoader = new bz.c((() => [sz.e(320).then((() => sz(60377))), sz.e(313).then((() => sz(60381)))]), (() => [sz.e(337).then((() => sz(60390))), sz.e(331).then((() => sz(60394)))])), zz
    })();
    (0, Nz.g)("BABYLON.SkyMaterial", Pz)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);