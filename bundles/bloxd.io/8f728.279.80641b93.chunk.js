export const id = 279;
export const ids = [279];
export const modules = {
  39562: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(38158),
      Ic = nc(39567);
    class rB {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = nc, this.uqc = [], this._maxBlockCapacity = Bc || 64, this._selectionContent = new Vc.c(1024), this._creationFunc = cB
      }
      update(cB, Bc, nc) {
        Ic.d._CreateBlocks(cB, Bc, nc, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      JPc(cB) {
        for (let Bc = 0; Bc < this.blocks.length; Bc++) {
          this.blocks[Bc].addEntry(cB)
        }
      }
      xnc(cB) {
        for (let Bc = 0; Bc < this.blocks.length; Bc++) {
          this.blocks[Bc].removeEntry(cB)
        }
      }
      select(cB, Bc) {
        this._selectionContent.reset();
        for (let nc = 0; nc < this.blocks.length; nc++) {
          this.blocks[nc].select(cB, this._selectionContent, Bc)
        }
        return Bc ? this._selectionContent.concat(this.uqc) : this._selectionContent.concatWithNoDuplicate(this.uqc), this._selectionContent
      }
      intersects(cB, Bc, nc) {
        this._selectionContent.reset();
        for (let Vc = 0; Vc < this.blocks.length; Vc++) {
          this.blocks[Vc].intersects(cB, Bc, this._selectionContent, nc)
        }
        return nc ? this._selectionContent.concat(this.uqc) : this._selectionContent.concatWithNoDuplicate(this.uqc), this._selectionContent
      }
      intersectsRay(cB) {
        this._selectionContent.reset();
        for (let Bc = 0; Bc < this.blocks.length; Bc++) {
          this.blocks[Bc].intersectsRay(cB, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.uqc), this._selectionContent
      }
    }
    rB.CreationFuncForMeshes = (cB, Bc) => {
      const nc = cB.qVc();
      !cB.isBlocked && nc.boundingBox.intersectsMinMax(Bc.dPc, Bc.xqc) && Bc.entries.push(cB)
    }, rB.CreationFuncForSubMeshes = (cB, Bc) => {
      cB.qVc().boundingBox.intersectsMinMax(Bc.dPc, Bc.xqc) && Bc.entries.push(cB)
    }
  },
  39567: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(35756),
      Ic = nc(38349);
    class rB {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.entries = [], this.sqc = new Array, this._capacity = nc, this._depth = Vc, this._maxDepth = Ic, this._creationFunc = rB, this._minPoint = cB, this._maxPoint = Bc, this.sqc.push(cB.clone()), this.sqc.push(Bc.clone()), this.sqc.push(cB.clone()), this.sqc[2].x = Bc.x, this.sqc.push(cB.clone()), this.sqc[3].y = Bc.y, this.sqc.push(cB.clone()), this.sqc[4].z = Bc.z, this.sqc.push(Bc.clone()), this.sqc[5].z = cB.z, this.sqc.push(Bc.clone()), this.sqc[6].x = cB.x, this.sqc.push(Bc.clone()), this.sqc[7].y = cB.y
      }
      get Qc() {
        return this._capacity
      }
      get dPc() {
        return this._minPoint
      }
      get xqc() {
        return this._maxPoint
      }
      addEntry(cB) {
        if (this.blocks)
          for (let Bc = 0; Bc < this.blocks.length; Bc++) {
            this.blocks[Bc].addEntry(cB)
          } else this._creationFunc(cB, this), this.entries.length > this.Qc && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(cB) {
        if (this.blocks) {
          for (let Bc = 0; Bc < this.blocks.length; Bc++) {
            this.blocks[Bc].removeEntry(cB)
          }
          return
        }
        const Bc = this.entries.indexOf(cB);
        Bc > -1 && this.entries.splice(Bc, 1)
      }
      addEntries(cB) {
        for (let Bc = 0; Bc < cB.length; Bc++) {
          const nc = cB[Bc];
          this.addEntry(nc)
        }
      }
      select(cB, Bc, nc) {
        if (Ic.d.IsInFrustum(this.sqc, cB)) {
          if (this.blocks) {
            for (let Vc = 0; Vc < this.blocks.length; Vc++) {
              this.blocks[Vc].select(cB, Bc, nc)
            }
            return
          }
          nc ? Bc.concat(this.entries) : Bc.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(cB, Bc, nc, Vc) {
        if (Ic.d.IntersectsSphere(this._minPoint, this._maxPoint, cB, Bc)) {
          if (this.blocks) {
            for (let Ic = 0; Ic < this.blocks.length; Ic++) {
              this.blocks[Ic].intersects(cB, Bc, nc, Vc)
            }
            return
          }
          Vc ? nc.concat(this.entries) : nc.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(cB, Bc) {
        if (cB.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let nc = 0; nc < this.blocks.length; nc++) {
              this.blocks[nc].intersectsRay(cB, Bc)
            }
            return
          }
          Bc.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        rB._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(cB, Bc, nc, Ic, uc, sc, Mc, Pc) {
        Mc.blocks = new Array;
        const qB = new Vc.p((Bc.x - cB.x) / 2, (Bc.y - cB.y) / 2, (Bc.z - cB.z) / 2);
        for (let Vc = 0; Vc < 2; Vc++)
          for (let Bc = 0; Bc < 2; Bc++)
            for (let Oc = 0; Oc < 2; Oc++) {
              const Tc = cB.add(qB.multiplyByFloats(Vc, Bc, Oc)),
                fc = cB.add(qB.multiplyByFloats(Vc + 1, Bc + 1, Oc + 1)),
                mB = new rB(Tc, fc, Ic, uc + 1, sc, Pc);
              mB.addEntries(nc), Mc.blocks.push(mB)
            }
      }
    }
  },
  39574: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => qB
    });
    var Vc = nc(38141),
      Ic = nc(35756),
      rB = nc(38456),
      uc = nc(39512),
      sc = nc(38214),
      Mc = nc(35780),
      Pc = nc(39562);
    class qB {
      constructor(cB) {
        this.name = sc.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new uc.v(Ic.p.Zero(), new Ic.p(1, 1, 1)), (cB = cB || Mc.d.LastCreatedScene) && (this.Ir = cB, this.Ir.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Ir.getActiveSubMeshCandidates = cB => this.getActiveSubMeshCandidates(cB), this.Ir.getCollidingSubMeshCandidates = (cB, Bc) => this.getCollidingSubMeshCandidates(cB, Bc), this.Ir.getIntersectingSubMeshCandidates = (cB, Bc) => this.getIntersectingSubMeshCandidates(cB, Bc))
      }
      register() {
        this.Ir.onMeshRemovedObservable.add((cB => {
          const Bc = this.Ir.selectionOctree;
          if (void 0 !== Bc && null !== Bc) {
            const nc = Bc.uqc.indexOf(cB); - 1 !== nc && Bc.uqc.splice(nc, 1)
          }
        })), this.Ir.onMeshImportedObservable.add((cB => {
          const Bc = this.Ir.selectionOctree;
          void 0 !== Bc && null !== Bc && Bc.JPc(cB)
        }))
      }
      getActiveMeshCandidates() {
        return this.Ir.mOc?.select(this.Ir.frustumPlanes) || this.Ir._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(cB) {
        if (cB._submeshesOctree && cB.useOctreeForRenderingSelection) {
          return cB._submeshesOctree.select(this.Ir.frustumPlanes)
        }
        return this.Ir._getDefaultSubMeshCandidates(cB)
      }
      getIntersectingSubMeshCandidates(cB, Bc) {
        if (cB._submeshesOctree && cB.useOctreeForPicking) {
          uc.v.TransformToRef(Bc, cB.getWorldMatrix(), this._tempRay);
          return cB._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Ir._getDefaultSubMeshCandidates(cB)
      }
      getCollidingSubMeshCandidates(cB, Bc) {
        if (cB._submeshesOctree && cB.useOctreeForCollisions) {
          const nc = Bc._velocityWorldLength + Math.max(Bc._radius.x, Bc._radius.y, Bc._radius.z);
          return cB._submeshesOctree.intersects(Bc._basePointWorld, nc)
        }
        return this.Ir._getDefaultSubMeshCandidates(cB)
      }
      rebuild() {}
      dispose() {}
    }
    let Oc = !1;
    Oc || (Oc = !0, Vc.h.prototype.createOrUpdateSelectionOctree = function() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        nc = this._getComponent(sc.d.NAME_OCTREE);
      nc || (nc = new qB(this), this.bqc(nc)), this.mOc || (this.mOc = new Pc.b(Pc.b.CreationFuncForMeshes, cB, Bc));
      const Vc = this.getWorldExtends();
      return this.mOc.update(Vc.min, Vc.max, this.meshes), this.mOc
    }, Object.defineProperty(Vc.h.prototype, "selectionOctree", {
      get: function() {
        return this.mOc
      },
      enumerable: !0,
      configurable: !0
    }), rB.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const nc = this.knc();
      let Vc = nc._getComponent(sc.d.NAME_OCTREE);
      Vc || (Vc = new qB(nc), nc.bqc(Vc)), this._submeshesOctree || (this._submeshesOctree = new Pc.b(Pc.b.CreationFuncForSubMeshes, cB, Bc)), this.computeWorldMatrix(!0);
      const Ic = this.qVc().boundingBox;
      return this._submeshesOctree.update(Ic.minimumWorld, Ic.maximumWorld, this.rD), this._submeshesOctree
    })
  },
  39512: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Zc,
      e: () => ec,
      g: () => mB,
      h: () => fc,
      j: () => Uc,
      n: () => gB,
      r: () => lc,
      s: () => Lc,
      t: () => Yc,
      v: () => Oc
    });
    var Vc = nc(35759),
      Ic = nc(35756),
      rB = nc(35768),
      uc = nc(38337),
      sc = nc(38187),
      Mc = nc(35780),
      Pc = nc(38229);
    const qB = {
      internalPickerForMesh: void 0
    };
    class Oc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vc.c;
        this.origin = cB, this.direction = Bc, this.length = nc, this.epsilon = Ic
      }
      clone() {
        return new Oc(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Vc = Oc._TmpVector3[0].puc(cB.x - nc, cB.y - nc, cB.z - nc),
          Ic = Oc._TmpVector3[1].puc(Bc.x + nc, Bc.y + nc, Bc.z + nc);
        let rB, uc, sc, Mc, Pc = 0,
          qB = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Vc.x || this.origin.x > Ic.x) return !1
        } else if (rB = 1 / this.direction.x, uc = (Vc.x - this.origin.x) * rB, sc = (Ic.x - this.origin.x) * rB, sc === -1 / 0 && (sc = 1 / 0), uc > sc && (Mc = uc, uc = sc, sc = Mc), Pc = Math.max(uc, Pc), qB = Math.min(sc, qB), Pc > qB) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Vc.y || this.origin.y > Ic.y) return !1
        } else if (rB = 1 / this.direction.y, uc = (Vc.y - this.origin.y) * rB, sc = (Ic.y - this.origin.y) * rB, sc === -1 / 0 && (sc = 1 / 0), uc > sc && (Mc = uc, uc = sc, sc = Mc), Pc = Math.max(uc, Pc), qB = Math.min(sc, qB), Pc > qB) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Vc.z || this.origin.z > Ic.z) return !1
        } else if (rB = 1 / this.direction.z, uc = (Vc.z - this.origin.z) * rB, sc = (Ic.z - this.origin.z) * rB, sc === -1 / 0 && (sc = 1 / 0), uc > sc && (Mc = uc, uc = sc, sc = Mc), Pc = Math.max(uc, Pc), qB = Math.min(sc, qB), Pc > qB) return !1;
        return !0
      }
      intersectsBox(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(cB.minimum, cB.maximum, Bc)
      }
      intersectsSphere(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const nc = cB.center.x - this.origin.x,
          Vc = cB.center.y - this.origin.y,
          Ic = cB.center.z - this.origin.z,
          rB = nc * nc + Vc * Vc + Ic * Ic,
          uc = cB.radius + Bc,
          sc = uc * uc;
        if (rB <= sc) return !0;
        const Mc = nc * this.direction.x + Vc * this.direction.y + Ic * this.direction.z;
        if (Mc < 0) return !1;
        return rB - Mc * Mc <= sc
      }
      intersectsTriangle(cB, Bc, nc) {
        const Vc = Oc._TmpVector3[0],
          rB = Oc._TmpVector3[1],
          sc = Oc._TmpVector3[2],
          Mc = Oc._TmpVector3[3],
          Pc = Oc._TmpVector3[4];
        Bc.subtractToRef(cB, Vc), nc.subtractToRef(cB, rB), Ic.p.CrossToRef(this.direction, rB, sc);
        const qB = Ic.p.Dot(Vc, sc);
        if (0 === qB) return null;
        const Tc = 1 / qB;
        this.origin.subtractToRef(cB, Mc);
        const fc = Ic.p.Dot(Mc, sc) * Tc;
        if (fc < -this.epsilon || fc > 1 + this.epsilon) return null;
        Ic.p.CrossToRef(Mc, Vc, Pc);
        const mB = Ic.p.Dot(this.direction, Pc) * Tc;
        if (mB < -this.epsilon || fc + mB > 1 + this.epsilon) return null;
        const ec = Ic.p.Dot(rB, Pc) * Tc;
        return ec > this.length || ec < 0 ? null : new uc.e(1 - fc - mB, fc, ec)
      }
      intersectsPlane(cB) {
        let Bc;
        const nc = Ic.p.Dot(cB.normal, this.direction);
        if (Math.abs(nc) < 9.99999997475243e-7) return null;
        {
          const Vc = Ic.p.Dot(cB.normal, this.origin);
          return Bc = (-cB.d - Vc) / nc, Bc < 0 ? Bc < -9.99999997475243e-7 ? null : 0 : Bc
        }
      }
      intersectsAxis(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (cB) {
          case "y": {
            const cB = (this.origin.y - Bc) / this.direction.y;
            return cB > 0 ? null : new Ic.p(this.origin.x + this.direction.x * -cB, Bc, this.origin.z + this.direction.z * -cB)
          }
          case "x": {
            const cB = (this.origin.x - Bc) / this.direction.x;
            return cB > 0 ? null : new Ic.p(Bc, this.origin.y + this.direction.y * -cB, this.origin.z + this.direction.z * -cB)
          }
          case "z": {
            const cB = (this.origin.z - Bc) / this.direction.z;
            return cB > 0 ? null : new Ic.p(this.origin.x + this.direction.x * -cB, this.origin.y + this.direction.y * -cB, Bc)
          }
          default:
            return null
        }
      }
      Cqc(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          rB = arguments.length > 4 ? arguments[4] : void 0,
          uc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const sc = Ic.i.Matrix[0];
        return cB.getWorldMatrix().invertToRef(sc), this._tmpRay ? Oc.TransformToRef(this, sc, this._tmpRay) : this._tmpRay = Oc.Transform(this, sc), cB.intersects(this._tmpRay, Bc, nc, Vc, rB, uc)
      }
      intersectsMeshes(cB, Bc, nc) {
        nc ? nc.length = 0 : nc = [];
        for (let Vc = 0; Vc < cB.length; Vc++) {
          const Ic = this.Cqc(cB[Vc], Bc);
          Ic.hit && nc.push(Ic)
        }
        return nc.sort(this._comparePickingInfo), nc
      }
      _comparePickingInfo(cB, Bc) {
        return cB.distance < Bc.distance ? -1 : cB.distance > Bc.distance ? 1 : 0
      }
      intersectionSegment(cB, Bc, nc) {
        const Vc = this.origin,
          rB = Ic.i.KV[0],
          uc = Ic.i.KV[1],
          sc = Ic.i.KV[2],
          Mc = Ic.i.KV[3];
        Bc.subtractToRef(cB, rB), this.direction.scaleToRef(Oc._Rayl, sc), Vc.addToRef(sc, uc), cB.subtractToRef(Vc, Mc);
        const Pc = Ic.p.Dot(rB, rB),
          qB = Ic.p.Dot(rB, sc),
          Tc = Ic.p.Dot(sc, sc),
          fc = Ic.p.Dot(rB, Mc),
          mB = Ic.p.Dot(sc, Mc),
          ec = Pc * Tc - qB * qB;
        let tB, Sc, yB = ec,
          zB = ec;
        ec < Oc._Smallnum ? (tB = 0, yB = 1, Sc = mB, zB = Tc) : (tB = qB * mB - Tc * fc, Sc = Pc * mB - qB * fc, tB < 0 ? (tB = 0, Sc = mB, zB = Tc) : tB > yB && (tB = yB, Sc = mB + qB, zB = Tc)), Sc < 0 ? (Sc = 0, -fc < 0 ? tB = 0 : -fc > Pc ? tB = yB : (tB = -fc, yB = Pc)) : Sc > zB && (Sc = zB, -fc + qB < 0 ? tB = 0 : -fc + qB > Pc ? tB = yB : (tB = -fc + qB, yB = Pc));
        const pc = Math.abs(tB) < Oc._Smallnum ? 0 : tB / yB,
          hc = Math.abs(Sc) < Oc._Smallnum ? 0 : Sc / zB,
          aB = Ic.i.KV[4];
        sc.scaleToRef(hc, aB);
        const lc = Ic.i.KV[5];
        rB.scaleToRef(pc, lc), lc.addInPlace(Mc);
        const Yc = Ic.i.KV[6];
        lc.subtractToRef(aB, Yc);
        return hc > 0 && hc <= this.length && Yc.lengthSquared() < nc * nc ? lc.length() : -1
      }
      update(cB, Bc, nc, Vc, rB, uc, sc) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Oc._RayDistant || (Oc._RayDistant = Oc.Zero()), Oc._RayDistant.unprojectRayToRef(cB, Bc, nc, Vc, Ic.d.IdentityReadOnly, uc, sc);
          const Mc = Ic.i.Matrix[0];
          rB.invertToRef(Mc), Oc.TransformToRef(Oc._RayDistant, Mc, this)
        } else this.unprojectRayToRef(cB, Bc, nc, Vc, rB, uc, sc);
        return this
      }
      static Zero() {
        return new Oc(Ic.p.Zero(), Ic.p.Zero())
      }
      static CreateNew(cB, Bc, nc, Vc, Ic, rB, uc) {
        return Oc.Zero().update(cB, Bc, nc, Vc, Ic, rB, uc)
      }
      static CreateNewFromTo(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ic.d.IdentityReadOnly;
        const Vc = new Oc(new Ic.p(0, 0, 0), new Ic.p(0, 0, 0));
        return Oc.CreateFromToToRef(cB, Bc, Vc, nc)
      }
      static CreateFromToToRef(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ic.d.IdentityReadOnly;
        nc.origin.qqc(cB);
        const rB = Bc.subtractToRef(cB, nc.direction),
          uc = Math.sqrt(rB.x * rB.x + rB.y * rB.y + rB.z * rB.z);
        return nc.length = uc, nc.direction.normalize(), Oc.TransformToRef(nc, Vc, nc)
      }
      static Transform(cB, Bc) {
        const nc = new Oc(new Ic.p(0, 0, 0), new Ic.p(0, 0, 0));
        return Oc.TransformToRef(cB, Bc, nc), nc
      }
      static TransformToRef(cB, Bc, nc) {
        Ic.p.TransformCoordinatesToRef(cB.origin, Bc, nc.origin), Ic.p.TransformNormalToRef(cB.direction, Bc, nc.direction), nc.length = cB.length, nc.epsilon = cB.epsilon;
        const Vc = nc.direction,
          rB = Vc.length();
        if (0 !== rB && 1 !== rB) {
          const cB = 1 / rB;
          Vc.x *= cB, Vc.y *= cB, Vc.z *= cB, nc.length *= rB
        }
        return nc
      }
      unprojectRayToRef(cB, Bc, nc, Vc, rB, uc, sc) {
        const Pc = Ic.i.Matrix[0];
        rB.multiplyToRef(uc, Pc), Pc.multiplyToRef(sc, Pc), Pc.invert();
        const qB = Mc.d.LastCreatedEngine,
          Oc = Ic.i.KV[0];
        Oc.x = cB / nc * 2 - 1, Oc.y = -(Bc / Vc * 2 - 1), Oc.z = qB?.HPc ? 1 : qB?.isNDCHalfZRange ? 0 : -1;
        const Tc = Ic.i.KV[1].puc(Oc.x, Oc.y, 1 - 1e-8),
          fc = Ic.i.KV[2],
          mB = Ic.i.KV[3];
        Ic.p.TransformCoordinatesToRef(Oc, Pc, fc), Ic.p.TransformCoordinatesToRef(Tc, Pc, mB), this.origin.qqc(fc), mB.subtractToRef(fc, this.direction), this.direction.normalize()
      }
    }

    function Tc(cB, Bc, nc, Vc, Ic) {
      let rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const uc = Oc.Zero();
      return fc(cB, Bc, nc, Vc, uc, Ic, rB), uc
    }

    function fc(cB, Bc, nc, Vc, rB, uc) {
      let sc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Mc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Pc = cB.RV();
      if (!uc && !(uc = cB.activeCamera) && !(uc = cB.cameraToUseForPointers)) return cB;
      const qB = uc.viewport,
        Oc = Pc.getRenderHeight(),
        {
          x: Tc,
          y: fc,
          width: mB,
          height: ec
        } = qB.toGlobal(Pc.getRenderWidth(), Oc),
        tB = 1 / Pc.getHardwareScalingLevel();
      return Bc = Bc * tB - Tc, nc = nc * tB - (Oc - fc - ec), rB.update(Bc, nc, mB, ec, Vc || Ic.d.IdentityReadOnly, sc ? Ic.d.IdentityReadOnly : uc.getViewMatrix(), uc.getProjectionMatrix(), Mc), cB
    }

    function mB(cB, Bc, nc, Vc) {
      const Ic = Oc.Zero();
      return ec(cB, Bc, nc, Ic, Vc), Ic
    }

    function ec(cB, Bc, nc, Vc, rB) {
      if (!sc.c) return cB;
      const uc = cB.RV();
      if (!rB && !(rB = cB.activeCamera) && !(rB = cB.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Mc = rB.viewport,
        Pc = uc.getRenderHeight(),
        {
          x: qB,
          y: Oc,
          width: Tc,
          height: fc
        } = Mc.toGlobal(uc.getRenderWidth(), Pc),
        mB = Ic.d.Identity(),
        ec = 1 / uc.getHardwareScalingLevel();
      return Bc = Bc * ec - qB, nc = nc * ec - (Pc - Oc - fc), Vc.update(Bc, nc, Tc, fc, mB, mB, rB.getProjectionMatrix()), cB
    }

    function tB(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
      return Sc(cB, nc, Vc, Bc(Vc, nc.enableDistantPicking), Ic, rB, uc, sc)
    }

    function Sc(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
      const Mc = Bc.intersects(Vc, Ic, uc, rB, nc, sc);
      return Mc && Mc.hit ? !Ic && null != cB && Mc.distance >= cB.distance ? null : Mc : null
    }

    function yB(cB, Bc) {
      return "InstancedLinesMesh" === cB || "LinesMesh" === cB ? Bc.intersectionThreshold : 0
    }

    function zB(cB) {
      const Bc = cB.getClassName();
      if ("GreasedLineMesh" === Bc) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const nc = cB.rawBoundingInfo;
      return {
        rawBoundingInfo: nc,
        intersectionThreshold: nc ? yB(Bc, cB) : 0
      }
    }

    function pc(cB, Bc, nc, Vc, Ic) {
      const rB = cB(nc, Bc.enableDistantPicking);
      return rB.intersectsSphere(Vc.tOc, Ic) && rB.intersectsBox(Vc.boundingBox, Ic) ? rB : null
    }

    function hc(cB, Bc, nc, Vc, rB, uc) {
      let Mc = null;
      const Pc = !!(cB.activeCameras && cB.activeCameras.length > 1 && cB.cameraToUseForPointers !== cB.activeCamera),
        Oc = cB.cameraToUseForPointers || cB.activeCamera,
        Tc = qB.internalPickerForMesh || tB,
        fc = Tc === tB;
      for (let sc = 0; sc < cB.meshes.length; sc++) {
        const qB = cB.meshes[sc];
        if (nc) {
          if (!nc(qB, -1)) continue
        } else if (!qB.isEnabled() || !qB.isVisible || !qB.ur) continue;
        const mB = Pc && qB.isWorldMatrixCameraDependent(),
          ec = qB.computeWorldMatrix(mB, Oc);
        if (qB.hasThinInstances && qB.sMc) {
          const cB = Tc(Mc, Bc, qB, ec, !0, !0, uc);
          if (cB) {
            if (rB) return cB;
            const {
              rawBoundingInfo: sc,
              intersectionThreshold: Pc
            } = zB(qB), Oc = qB._thinInstanceDataStorage.matrixData;
            if (Oc) {
              const cB = Ic.i.Matrix[0],
                mB = Ic.i.Matrix[1],
                tB = Math.min(qB.Jrc, Oc.length >> 4);
              for (let yB = 0; yB < tB; yB++) {
                if (nc && !nc(qB, yB)) continue;
                Ic.d.FromArrayToRef(Oc, yB << 4, cB), cB.multiplyToRef(ec, mB);
                const tB = fc && sc ? pc(Bc, qB, mB, sc, Pc) : null;
                if (fc && sc && !tB) continue;
                const zB = fc && tB ? Sc(Mc, qB, mB, tB, Vc, rB, uc, !0) : Tc(Mc, Bc, qB, mB, Vc, rB, uc, !0);
                if (zB && (Mc = zB, Mc.thinInstanceIndex = yB, Vc)) return Mc
              }
            }
          }
        } else {
          const cB = Tc(Mc, Bc, qB, ec, Vc, rB, uc);
          if (cB && (Mc = cB, Vc)) return Mc
        }
      }
      return Mc || new sc.c
    }

    function aB(cB, Bc, nc, Vc) {
      if (!sc.c) return null;
      const rB = [],
        uc = !!(cB.activeCameras && cB.activeCameras.length > 1 && cB.cameraToUseForPointers !== cB.activeCamera),
        Mc = cB.cameraToUseForPointers || cB.activeCamera,
        Pc = qB.internalPickerForMesh || tB,
        Oc = Pc === tB;
      for (let sc = 0; sc < cB.meshes.length; sc++) {
        const qB = cB.meshes[sc];
        if (nc) {
          if (!nc(qB, -1)) continue
        } else if (!qB.isEnabled() || !qB.isVisible || !qB.ur) continue;
        const Tc = uc && qB.isWorldMatrixCameraDependent(),
          fc = qB.computeWorldMatrix(Tc, Mc);
        if (qB.hasThinInstances && qB.sMc) {
          if (Pc(null, Bc, qB, fc, !0, !0, Vc)) {
            const {
              rawBoundingInfo: cB,
              intersectionThreshold: uc
            } = zB(qB), sc = qB._thinInstanceDataStorage.matrixData;
            if (sc) {
              const Mc = Ic.i.Matrix[0],
                Tc = Ic.i.Matrix[1],
                mB = Math.min(qB.Jrc, sc.length >> 4);
              for (let ec = 0; ec < mB; ec++) {
                if (nc && !nc(qB, ec)) continue;
                Ic.d.FromArrayToRef(sc, ec << 4, Mc), Mc.multiplyToRef(fc, Tc);
                const mB = Oc && cB ? pc(Bc, qB, Tc, cB, uc) : null;
                if (Oc && cB && !mB) continue;
                const tB = Oc && mB ? Sc(null, qB, Tc, mB, !1, !1, Vc, !0) : Pc(null, Bc, qB, Tc, !1, !1, Vc, !0);
                tB && (tB.thinInstanceIndex = ec, rB.push(tB))
              }
            }
          }
        } else {
          const cB = Pc(null, Bc, qB, fc, !1, !1, Vc);
          cB && rB.push(cB)
        }
      }
      return rB
    }

    function lc(cB, Bc, nc, Vc, rB, uc) {
      if (!sc.c) return null;
      const Mc = hc(cB, (Vc => (cB._tempPickingRay || (cB._tempPickingRay = Oc.Zero()), fc(cB, Bc, nc, Vc, cB._tempPickingRay, uc || null), cB._tempPickingRay)), Vc, rB, !0);
      return Mc && (Mc.ray = Tc(cB, Bc, nc, Ic.d.Identity(), uc || null)), Mc
    }

    function Yc(cB, Bc, nc, Vc, rB, uc, sc) {
      const Mc = hc(cB, ((Vc, Ic) => (cB._tempPickingRay || (cB._tempPickingRay = Oc.Zero()), fc(cB, Bc, nc, Vc, cB._tempPickingRay, uc || null, !1, Ic), cB._tempPickingRay)), Vc, rB, !1, sc);
      return Mc && (Mc.ray = Tc(cB, Bc, nc, Ic.d.Identity(), uc || null)), Mc
    }

    function Lc(cB, Bc, nc, Vc, rB) {
      const uc = hc(cB, (nc => (cB._pickWithRayInverseMatrix || (cB._pickWithRayInverseMatrix = Ic.d.Identity()), nc.invertToRef(cB._pickWithRayInverseMatrix), cB._cachedRayForTransform || (cB._cachedRayForTransform = Oc.Zero()), Oc.TransformToRef(Bc, cB._pickWithRayInverseMatrix, cB._cachedRayForTransform), cB._cachedRayForTransform)), nc, Vc, !1, rB);
      return uc && (uc.ray = Bc), uc
    }

    function gB(cB, Bc, nc, Vc, Ic, rB) {
      return aB(cB, (Vc => Tc(cB, Bc, nc, Vc, Ic || null)), Vc, rB)
    }

    function Uc(cB, Bc, nc, Vc) {
      return aB(cB, (nc => (cB._pickWithRayInverseMatrix || (cB._pickWithRayInverseMatrix = Ic.d.Identity()), nc.invertToRef(cB._pickWithRayInverseMatrix), cB._cachedRayForTransform || (cB._cachedRayForTransform = Oc.Zero()), Oc.TransformToRef(Bc, cB._pickWithRayInverseMatrix, cB._cachedRayForTransform), cB._cachedRayForTransform)), nc, Vc)
    }

    function bB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Vc = arguments.length > 3 ? arguments[3] : void 0,
        rB = arguments.length > 4 ? arguments[4] : void 0;
      Vc || (Vc = cB.getWorldMatrix()), Bc.length = nc, rB ? Bc.origin.qqc(rB) : Bc.origin.qqc(cB.position);
      const uc = Ic.i.KV[2];
      uc.set(0, 0, cB._scene.useRightHandedSystem ? -1 : 1);
      const sc = Ic.i.KV[3];
      return Ic.p.TransformNormalToRef(uc, Vc, sc), Ic.p.NormalizeToRef(sc, Bc.direction), Bc
    }

    function Zc(cB, Bc) {
      Bc && (Bc.prototype.getForwardRay = function() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        return bB(this, new Oc(Ic.p.Zero(), Ic.p.Zero(), cB), cB, Bc, nc)
      }, Bc.prototype.getForwardRayToRef = function(cB) {
        return bB(this, cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), cB && (Pc.e._IsPickingAvailable = !0, cB.prototype.createPickingRay = function(cB, Bc, nc, Vc) {
        return Tc(this, cB, Bc, nc, Vc, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Oc._TmpVector3 = (0, rB.c)(6, Ic.p.Zero), Oc._RayDistant = Oc.Zero(), Oc._Smallnum = 1e-8, Oc._Rayl = 1e9
  },
  39509: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB.v
    });
    var Vc = nc(38141),
      Ic = nc(38251),
      rB = nc(39512);
    let uc = !1;
    uc || (uc = !0, (0, rB.b)(Vc.h, Ic.e), Vc.h.prototype.createPickingRayToRef = function(cB, Bc, nc, Vc, Ic) {
      let uc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        sc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, rB.h)(this, cB, Bc, nc, Vc, Ic, uc, sc)
    }, Vc.h.prototype.createPickingRayInCameraSpace = function(cB, Bc, nc) {
      return (0, rB.g)(this, cB, Bc, nc)
    }, Vc.h.prototype.createPickingRayInCameraSpaceToRef = function(cB, Bc, nc, Vc) {
      return (0, rB.e)(this, cB, Bc, nc, Vc)
    }, Vc.h.prototype.pickWithBoundingInfo = function(cB, Bc, nc, Vc, Ic) {
      return (0, rB.r)(this, cB, Bc, nc, Vc, Ic)
    }, Vc.h.prototype.Vn = function(cB, Bc, nc, Vc, Ic, uc) {
      let sc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, rB.t)(this, cB, Bc, nc, Vc, Ic, uc, sc)
    }, Vc.h.prototype.pickWithRay = function(cB, Bc, nc, Vc) {
      return (0, rB.s)(this, cB, Bc, nc, Vc)
    }, Vc.h.prototype.multiPick = function(cB, Bc, nc, Vc, Ic) {
      return (0, rB.n)(this, cB, Bc, nc, Vc, Ic)
    }, Vc.h.prototype.multiPickWithRay = function(cB, Bc, nc) {
      return (0, rB.j)(this, cB, Bc, nc)
    })
  },
  39518: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35756),
      uc = nc(38291),
      sc = nc(39527),
      Mc = nc(38255),
      Pc = nc(35799);
    let qB = (() => {
        var cB;
        let Bc, nc, Mc, Pc, qB, Oc, Tc, fc, mB = sc.c,
          ec = [],
          tB = [],
          Sc = [],
          yB = [],
          zB = [],
          pc = [],
          hc = [],
          aB = [],
          lc = [],
          Yc = [],
          Lc = [],
          gB = [],
          Uc = [];
        return cB = class extends mB {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(cB) {
            this._shadowFrustumSize = cB, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(cB) {
            this._shadowOrthoScale = cB, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(cB) {
            this._orthoLeft = cB
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(cB) {
            this._orthoRight = cB
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(cB) {
            this._orthoTop = cB
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(cB) {
            this._orthoBottom = cB
          }
          constructor(cB, Bc, nc, Ic) {
            super(cB, nc, Ic), this._shadowFrustumSize = ((0, Vc.k)(this, ec), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Vc.k)(this, tB, !0), this.autoCalcShadowZBounds = ((0, Vc.k)(this, Sc), (0, Vc.k)(this, yB, !1)), this._orthoLeft = ((0, Vc.k)(this, zB), (0, Vc.k)(this, pc, Number.MAX_VALUE)), this._orthoRight = ((0, Vc.k)(this, hc), (0, Vc.k)(this, aB, Number.MIN_VALUE)), this._orthoTop = ((0, Vc.k)(this, lc), (0, Vc.k)(this, Yc, Number.MIN_VALUE)), this._orthoBottom = ((0, Vc.k)(this, Lc), (0, Vc.k)(this, gB, Number.MAX_VALUE)), (0, Vc.k)(this, Uc), this.position = Bc.scale(-1), this.direction = Bc
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return uc.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(cB, Bc, nc) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(cB) : this._setDefaultAutoExtendShadowProjectionMatrix(cB, Bc, nc)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(cB) {
            const Bc = this.knc().activeCamera;
            rB.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Bc ? Bc.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Bc ? Bc.maxZ : 1e4, cB, this.knc().RV().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(cB, Bc, nc) {
            const Vc = this.knc().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const cB = rB.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Vc = Number.MAX_VALUE,
                Ic = -Number.MAX_VALUE;
              for (let uc = 0; uc < nc.length; uc++) {
                const sc = nc[uc];
                if (!sc) continue;
                const Mc = sc.qVc().boundingBox;
                for (let nc = 0; nc < Mc.vectorsWorld.length; nc++) rB.p.TransformCoordinatesToRef(Mc.vectorsWorld[nc], Bc, cB), cB.x < this._orthoLeft && (this._orthoLeft = cB.x), cB.y < this._orthoBottom && (this._orthoBottom = cB.y), cB.x > this._orthoRight && (this._orthoRight = cB.x), cB.y > this._orthoTop && (this._orthoTop = cB.y), this.autoCalcShadowZBounds && (cB.z < Vc && (Vc = cB.z), cB.z > Ic && (Ic = cB.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Vc, this._shadowMaxZ = Ic)
            }
            const Ic = this._orthoRight - this._orthoLeft,
              uc = this._orthoTop - this._orthoBottom,
              sc = void 0 !== this.shadowMinZ ? this.shadowMinZ : Vc?.minZ || 0,
              Mc = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Vc?.maxZ || 1e4,
              Pc = this.knc().RV().HPc;
            rB.d.OrthoOffCenterLHToRef(this._orthoLeft - Ic * this.shadowOrthoScale, this._orthoRight + Ic * this.shadowOrthoScale, this._orthoBottom - uc * this.shadowOrthoScale, this._orthoTop + uc * this.shadowOrthoScale, Pc ? Mc : sc, Pc ? sc : Mc, cB, this.knc().RV().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(cB, Bc) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Bc), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Bc), this)
          }
          transferToNodeMaterialEffect(cB, Bc) {
            return this.computeTransformedInformation() ? (cB.setFloat3(Bc, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (cB.setFloat3(Bc, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(cB) {
            const Bc = this._scene.RV();
            return !Bc.HPc && Bc.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(cB) {
            const Bc = this._scene.RV();
            return Bc.HPc && Bc.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(cB, Bc) {
            cB["DIRLIGHT" + Bc] = !0
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(mB[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], Mc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], qB = [(0, Ic.M)("orthoLeft")], Oc = [(0, Ic.M)("orthoRight")], Tc = [(0, Ic.M)("orthoTop")], fc = [(0, Ic.M)("orthoBottom")], (0, Vc.g)(cB, null, Bc, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: cB => "shadowFrustumSize" in cB,
              get: cB => cB.shadowFrustumSize
            },
            metadata: rB
          }, null, ec), (0, Vc.g)(cB, null, nc, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: cB => "shadowOrthoScale" in cB,
              get: cB => cB.shadowOrthoScale
            },
            metadata: rB
          }, null, ec), (0, Vc.g)(null, null, Mc, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: cB => "autoUpdateExtends" in cB,
              get: cB => cB.autoUpdateExtends,
              set: (cB, Bc) => {
                cB.autoUpdateExtends = Bc
              }
            },
            metadata: rB
          }, tB, Sc), (0, Vc.g)(null, null, Pc, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: cB => "autoCalcShadowZBounds" in cB,
              get: cB => cB.autoCalcShadowZBounds,
              set: (cB, Bc) => {
                cB.autoCalcShadowZBounds = Bc
              }
            },
            metadata: rB
          }, yB, zB), (0, Vc.g)(null, null, qB, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: cB => "_orthoLeft" in cB,
              get: cB => cB._orthoLeft,
              set: (cB, Bc) => {
                cB._orthoLeft = Bc
              }
            },
            metadata: rB
          }, pc, hc), (0, Vc.g)(null, null, Oc, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: cB => "_orthoRight" in cB,
              get: cB => cB._orthoRight,
              set: (cB, Bc) => {
                cB._orthoRight = Bc
              }
            },
            metadata: rB
          }, aB, lc), (0, Vc.g)(null, null, Tc, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: cB => "_orthoTop" in cB,
              get: cB => cB._orthoTop,
              set: (cB, Bc) => {
                cB._orthoTop = Bc
              }
            },
            metadata: rB
          }, Yc, Lc), (0, Vc.g)(null, null, fc, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: cB => "_orthoBottom" in cB,
              get: cB => cB._orthoBottom,
              set: (cB, Bc) => {
                cB._orthoBottom = Bc
              }
            },
            metadata: rB
          }, gB, Uc), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB
      })(),
      Oc = !1;
    Oc || (Oc = !0, Mc.c.AddNodeConstructor("Light_Type_1", ((cB, Bc) => () => new qB(cB, rB.p.Zero(), Bc))), (0, Pc.d)("BABYLON.DirectionalLight", qB))
  },
  39542: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => jn
    });
    var Vc = nc(37224),
      Ic = nc(35783),
      rB = nc(35756),
      uc = nc(38194),
      sc = nc(39550),
      Mc = nc(35780),
      Pc = nc(38310),
      qB = nc(35815),
      Oc = nc(37228),
      Tc = nc(37185),
      fc = nc(35785);
    class mB {
      constructor() {
        this.direction1 = new rB.p(0, 1, 0), this.direction2 = new rB.p(0, 1, 0)
      }
      startDirectionFunction(cB, Bc, nc, Vc) {
        const Ic = (0, fc.RandomRange)(this.direction1.x, this.direction2.x),
          uc = (0, fc.RandomRange)(this.direction1.y, this.direction2.y),
          sc = (0, fc.RandomRange)(this.direction1.z, this.direction2.z);
        Vc ? Bc.puc(Ic, uc, sc) : rB.p.TransformNormalFromFloatsToRef(Ic, uc, sc, cB, Bc)
      }
      startPositionFunction(cB, Bc, nc, Vc) {
        Vc ? Bc.puc(0, 0, 0) : rB.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, cB, Bc)
      }
      clone() {
        const cB = new mB;
        return Tc.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setVector3("direction1", this.direction1), cB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(cB) {
        cB.addUniform("direction1", 3), cB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const cB = {};
        return cB.type = this.getClassName(), cB.direction1 = this.direction1.KPc(), cB.direction2 = this.direction2.KPc(), cB
      }
      parse(cB) {
        rB.p.FromArrayToRef(cB.direction1, 0, this.direction1), rB.p.FromArrayToRef(cB.direction2, 0, this.direction2)
      }
    }
    class ec {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = cB, this.radiusRange = Bc, this.directionRandomizer = nc
      }
      startDirectionFunction(cB, Bc, nc, Vc) {
        const Ic = nc.position.subtract(cB.getTranslation()).normalize(),
          uc = (0, fc.RandomRange)(0, this.directionRandomizer),
          sc = (0, fc.RandomRange)(0, this.directionRandomizer),
          Mc = (0, fc.RandomRange)(0, this.directionRandomizer);
        Ic.x += uc, Ic.y += sc, Ic.z += Mc, Ic.normalize(), Vc ? Bc.qqc(Ic) : rB.p.TransformNormalFromFloatsToRef(Ic.x, Ic.y, Ic.z, cB, Bc)
      }
      startPositionFunction(cB, Bc, nc, Vc) {
        const Ic = this.radius - (0, fc.RandomRange)(0, this.radius * this.radiusRange),
          uc = (0, fc.RandomRange)(0, 1),
          sc = (0, fc.RandomRange)(0, 2 * Math.PI),
          Mc = Math.acos(2 * uc - 1),
          Pc = Ic * Math.cos(sc) * Math.sin(Mc),
          qB = Ic * Math.cos(Mc),
          Oc = Ic * Math.sin(sc) * Math.sin(Mc);
        Vc ? Bc.puc(Pc, Math.abs(qB), Oc) : rB.p.TransformCoordinatesFromFloatsToRef(Pc, Math.abs(qB), Oc, cB, Bc)
      }
      clone() {
        const cB = new ec(this.radius, this.directionRandomizer);
        return Tc.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setFloat("radius", this.radius), cB.setFloat("radiusRange", this.radiusRange), cB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(cB) {
        cB.addUniform("radius", 1), cB.addUniform("radiusRange", 1), cB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const cB = {};
        return cB.type = this.getClassName(), cB.radius = this.radius, cB.radiusRange = this.radiusRange, cB.directionRandomizer = this.directionRandomizer, cB
      }
      parse(cB) {
        this.radius = cB.radius, this.radiusRange = cB.radiusRange, this.directionRandomizer = cB.directionRandomizer
      }
    }
    class tB {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = cB, this.radiusRange = Bc, this.directionRandomizer = nc
      }
      startDirectionFunction(cB, Bc, nc, Vc) {
        const Ic = nc.position.subtract(cB.getTranslation()).normalize(),
          uc = (0, fc.RandomRange)(0, this.directionRandomizer),
          sc = (0, fc.RandomRange)(0, this.directionRandomizer),
          Mc = (0, fc.RandomRange)(0, this.directionRandomizer);
        Ic.x += uc, Ic.y += sc, Ic.z += Mc, Ic.normalize(), Vc ? Bc.qqc(Ic) : rB.p.TransformNormalFromFloatsToRef(Ic.x, Ic.y, Ic.z, cB, Bc)
      }
      startPositionFunction(cB, Bc, nc, Vc) {
        const Ic = this.radius - (0, fc.RandomRange)(0, this.radius * this.radiusRange),
          uc = (0, fc.RandomRange)(0, 1),
          sc = (0, fc.RandomRange)(0, 2 * Math.PI),
          Mc = Math.acos(2 * uc - 1),
          Pc = Ic * Math.cos(sc) * Math.sin(Mc),
          qB = Ic * Math.cos(Mc),
          Oc = Ic * Math.sin(sc) * Math.sin(Mc);
        Vc ? Bc.puc(Pc, qB, Oc) : rB.p.TransformCoordinatesFromFloatsToRef(Pc, qB, Oc, cB, Bc)
      }
      clone() {
        const cB = new tB(this.radius, this.directionRandomizer);
        return Tc.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setFloat("radius", this.radius), cB.setFloat("radiusRange", this.radiusRange), cB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(cB) {
        cB.addUniform("radius", 1), cB.addUniform("radiusRange", 1), cB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const cB = {};
        return cB.type = this.getClassName(), cB.radius = this.radius, cB.radiusRange = this.radiusRange, cB.directionRandomizer = this.directionRandomizer, cB
      }
      parse(cB) {
        this.radius = cB.radius, this.radiusRange = cB.radiusRange, this.directionRandomizer = cB.directionRandomizer
      }
    }
    class Sc extends tB {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new rB.p(0, 1, 0),
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new rB.p(0, 1, 0);
        super(cB), this.direction1 = Bc, this.direction2 = nc
      }
      startDirectionFunction(cB, Bc, nc, Vc) {
        const Ic = (0, fc.RandomRange)(this.direction1.x, this.direction2.x),
          uc = (0, fc.RandomRange)(this.direction1.y, this.direction2.y),
          sc = (0, fc.RandomRange)(this.direction1.z, this.direction2.z);
        Vc ? Bc.puc(Ic, uc, sc) : rB.p.TransformNormalFromFloatsToRef(Ic, uc, sc, cB, Bc)
      }
      clone() {
        const cB = new Sc(this.radius, this.direction1, this.direction2);
        return Tc.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setFloat("radius", this.radius), cB.setFloat("radiusRange", this.radiusRange), cB.setVector3("direction1", this.direction1), cB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(cB) {
        cB.addUniform("radius", 1), cB.addUniform("radiusRange", 1), cB.addUniform("direction1", 3), cB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const cB = super.serialize();
        return cB.direction1 = this.direction1.KPc(), cB.direction2 = this.direction2.KPc(), cB
      }
      parse(cB) {
        super.parse(cB), rB.p.FromArrayToRef(cB.direction1, 0, this.direction1), rB.p.FromArrayToRef(cB.direction2, 0, this.direction2)
      }
    }
    var yB = nc(37176);
    class zB {
      get radius() {
        return this._radius
      }
      set radius(cB) {
        this._radius = cB, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(cB) {
        this._angle = cB, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = nc, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Bc, this.radius = cB
      }
      startDirectionFunction(cB, Bc, nc, Vc) {
        const Ic = nc.position.subtract(cB.getTranslation()).normalize(),
          uc = (0, fc.RandomRange)(0, this.directionRandomizer),
          sc = (0, fc.RandomRange)(0, this.directionRandomizer),
          Mc = (0, fc.RandomRange)(0, this.directionRandomizer);
        Ic.x += uc, Ic.y += sc, Ic.z += Mc, Ic.normalize(), Vc ? Bc.qqc(Ic) : rB.p.TransformNormalFromFloatsToRef(Ic.x, Ic.y, Ic.z, cB, Bc)
      }
      startPositionFunction(cB, Bc, nc, Vc) {
        const Ic = (0, fc.RandomRange)(0, 2 * Math.PI);
        let uc;
        this.emitFromSpawnPointOnly ? uc = 1e-4 : (uc = (0, fc.RandomRange)(0, this.heightRange), uc = 1 - uc * uc);
        let sc = this._radius - (0, fc.RandomRange)(0, this._radius * this.radiusRange);
        sc *= uc;
        const Mc = sc * Math.sin(Ic),
          Pc = sc * Math.cos(Ic),
          qB = uc * this._height;
        if (Vc) return Bc.x = Mc, Bc.y = qB, void(Bc.z = Pc);
        rB.p.TransformCoordinatesFromFloatsToRef(Mc, qB, Pc, cB, Bc)
      }
      clone() {
        const cB = new zB(this._radius, this._angle, this.directionRandomizer);
        return Tc.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setFloat2("radius", this._radius, this.radiusRange), cB.setFloat("coneAngle", this._angle), cB.setFloat2("height", this._height, this.heightRange), cB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(cB) {
        cB.addUniform("radius", 2), cB.addUniform("coneAngle", 1), cB.addUniform("height", 2), cB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let cB = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (cB += "\n#define CONEEMITTERSPAWNPOINT"), cB
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const cB = {};
        return cB.type = this.getClassName(), cB.radius = this._radius, cB.angle = this._angle, cB.directionRandomizer = this.directionRandomizer, cB.radiusRange = this.radiusRange, cB.heightRange = this.heightRange, cB.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, cB
      }
      parse(cB) {
        this.radius = cB.radius, this.angle = cB.angle, this.directionRandomizer = cB.directionRandomizer, this.radiusRange = void 0 !== cB.radiusRange ? cB.radiusRange : 1, this.heightRange = void 0 !== cB.heightRange ? cB.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== cB.emitFromSpawnPointOnly && cB.emitFromSpawnPointOnly
      }
    }
    class pc extends zB {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new rB.p(0, 1, 0),
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rB.p(0, 1, 0);
        super(cB, Bc), this.direction1 = nc, this.direction2 = Vc
      }
      startDirectionFunction(cB, Bc, nc, Vc) {
        const Ic = (0, fc.RandomRange)(this.direction1.x, this.direction2.x),
          uc = (0, fc.RandomRange)(this.direction1.y, this.direction2.y),
          sc = (0, fc.RandomRange)(this.direction1.z, this.direction2.z);
        Vc ? Bc.puc(Ic, uc, sc) : rB.p.TransformNormalFromFloatsToRef(Ic, uc, sc, cB, Bc)
      }
      clone() {
        const cB = new pc(this.radius, this.angle, this.direction1, this.direction2);
        return Tc.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        super.applyToShader(cB), cB.setVector3("direction1", this.direction1), cB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(cB) {
        super.buildUniformLayout(cB), cB.addUniform("direction1", 3), cB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const cB = super.serialize();
        return cB.direction1 = this.direction1.KPc(), cB.direction2 = this.direction2.KPc(), cB
      }
      parse(cB) {
        super.parse(cB), rB.p.FromArrayToRef(cB.direction1, 0, this.direction1), rB.p.FromArrayToRef(cB.direction2, 0, this.direction2)
      }
    }
    class hc {
      get mesh() {
        return this._mesh
      }
      set mesh(cB) {
        this._mesh !== cB && (this._mesh = cB, cB ? (this._indices = cB.Tfc(), this._positions = cB.getVerticesData(uc.i.PositionKind), this._normals = cB.getVerticesData(uc.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = rB.p.Zero(), this._mesh = null, this.direction1 = new rB.p(0, 1, 0), this.direction2 = new rB.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = cB
      }
      startDirectionFunction(cB, Bc, nc, Vc) {
        if (this.useMeshNormalsForDirection && this._normals) return void rB.p.TransformNormalToRef(this._storedNormal, cB, Bc);
        const Ic = (0, fc.RandomRange)(this.direction1.x, this.direction2.x),
          uc = (0, fc.RandomRange)(this.direction1.y, this.direction2.y),
          sc = (0, fc.RandomRange)(this.direction1.z, this.direction2.z);
        Vc ? Bc.puc(Ic, uc, sc) : rB.p.TransformNormalFromFloatsToRef(Ic, uc, sc, cB, Bc)
      }
      startPositionFunction(cB, Bc, nc, Vc) {
        if (!this._indices || !this._positions) return;
        const Ic = 3 * (Math.random() * (this._indices.length / 3) | 0),
          uc = Math.random(),
          sc = Math.random() * (1 - uc),
          Mc = 1 - uc - sc,
          Pc = this._indices[Ic],
          qB = this._indices[Ic + 1],
          Oc = this._indices[Ic + 2],
          Tc = rB.i.KV[0],
          fc = rB.i.KV[1],
          mB = rB.i.KV[2],
          ec = rB.i.KV[3];
        rB.p.FromArrayToRef(this._positions, 3 * Pc, Tc), rB.p.FromArrayToRef(this._positions, 3 * qB, fc), rB.p.FromArrayToRef(this._positions, 3 * Oc, mB), ec.x = uc * Tc.x + sc * fc.x + Mc * mB.x, ec.y = uc * Tc.y + sc * fc.y + Mc * mB.y, ec.z = uc * Tc.z + sc * fc.z + Mc * mB.z, Vc ? Bc.puc(ec.x, ec.y, ec.z) : rB.p.TransformCoordinatesFromFloatsToRef(ec.x, ec.y, ec.z, cB, Bc), this.useMeshNormalsForDirection && this._normals && (rB.p.FromArrayToRef(this._normals, 3 * Pc, Tc), rB.p.FromArrayToRef(this._normals, 3 * qB, fc), rB.p.FromArrayToRef(this._normals, 3 * Oc, mB), this._storedNormal.x = uc * Tc.x + sc * fc.x + Mc * mB.x, this._storedNormal.y = uc * Tc.y + sc * fc.y + Mc * mB.y, this._storedNormal.z = uc * Tc.z + sc * fc.z + Mc * mB.z)
      }
      clone() {
        const cB = new hc(this.mesh);
        return Tc.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setVector3("direction1", this.direction1), cB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(cB) {
        cB.addUniform("direction1", 3), cB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const cB = {};
        return cB.type = this.getClassName(), cB.direction1 = this.direction1.KPc(), cB.direction2 = this.direction2.KPc(), cB.meshId = this.mesh?.id, cB.useMeshNormalsForDirection = this.useMeshNormalsForDirection, cB
      }
      parse(cB, Bc) {
        rB.p.FromArrayToRef(cB.direction1, 0, this.direction1), rB.p.FromArrayToRef(cB.direction2, 0, this.direction2), cB.meshId && Bc && (this.mesh = Bc.getLastMeshById(cB.meshId)), this.useMeshNormalsForDirection = cB.useMeshNormalsForDirection
      }
    }
    class aB {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(cB) {
        this._targetStopDuration !== cB && (this._targetStopDuration = cB)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(cB) {
        this._noiseTexture !== cB && (this._noiseTexture = cB, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(cB) {
        this._attractors.push(cB)
      }
      removeAttractor(cB) {
        const Bc = this._attractors.indexOf(cB); - 1 !== Bc && this._attractors.splice(Bc, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(cB) {
        this._animationSheetEnabled !== cB && (this._animationSheetEnabled = cB)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(cB) {
        this._isAnimationSheetEnabled != cB && (this._isAnimationSheetEnabled = cB, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(cB) {
        this._useLogarithmicDepth = cB && this.knc().RV().getCaps().fragmentDepthSupported
      }
      knc() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(cB) {
        switch (cB) {
          case aB.BLENDMODE_MULTIPLYADD:
            return;
          case aB.BLENDMODE_ADD:
            cB = 1;
            break;
          case aB.BLENDMODE_ONEONE:
            cB = 6;
            break;
          case aB.BLENDMODE_STANDARD:
            cB = 2;
            break;
          case aB.BLENDMODE_MULTIPLY:
            cB = 4;
            break;
          case aB.BLENDMODE_SUBTRACT:
            cB = 3
        }
        this._engine.setAlphaMode(cB)
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
      addEmitRateGradient(cB, Bc, nc) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, cB, Bc, nc), this
      }
      removeEmitRateGradient(cB) {
        return this._removeFactorGradient(this._emitRateGradients, cB), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : rB.p.Zero()
      }
      set direction1(cB) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = cB)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : rB.p.Zero()
      }
      set direction2(cB) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = cB)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : rB.p.Zero()
      }
      set minEmitBox(cB) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = cB)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : rB.p.Zero()
      }
      set maxEmitBox(cB) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = cB)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(cB) {
        this._billboardMode !== cB && (this._billboardMode = cB, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(cB) {
        this._isBillboardBased !== cB && (this._isBillboardBased = cB, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(cB) {
        this._attachImageProcessingConfiguration(cB)
      }
      _attachImageProcessingConfiguration(cB) {
        cB !== this._imageProcessingConfiguration && (!cB && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = cB)
      }
      _reset() {}
      _addFactorGradient(cB, Bc, nc, Ic) {
        const rB = new Vc.h(Bc, nc, Ic);
        cB.push(rB), cB.sort(((cB, Bc) => cB.gradient < Bc.gradient ? -1 : cB.gradient > Bc.gradient ? 1 : 0))
      }
      _removeFactorGradient(cB, Bc) {
        if (!cB) return;
        let nc = 0;
        for (const Vc of cB) {
          if (Vc.gradient === Bc) {
            cB.splice(nc, 1);
            break
          }
          nc++
        }
      }
      _removeGradientAndTexture(cB, Bc, nc) {
        if (!Bc) return this;
        let Vc = 0;
        for (const Ic of Bc) {
          if (Ic.gradient === cB) {
            Bc.splice(Vc, 1);
            break
          }
          Vc++
        }
        return nc && nc.dispose(), this
      }
      constructor(cB) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = rB.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new rB.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = aB.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new rB.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new rB.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = rB.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new qB.g(1, 1, 1, 1), this.color2 = new qB.g(1, 1, 1, 1), this.colorDead = new qB.g(0, 0, 0, 1), this.textureMask = new qB.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Pc.d, this.id = cB, this.name = cB
      }
      createPointEmitter(cB, Bc) {
        const nc = function(cB, Bc) {
          const nc = new mB;
          return nc.direction1 = cB, nc.direction2 = Bc, nc
        }(cB, Bc);
        return this.particleEmitterType = nc, nc
      }
      createHemisphericEmitter() {
        const cB = function() {
          return new ec(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = cB, cB
      }
      createSphereEmitter() {
        const cB = function() {
          return new tB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = cB, cB
      }
      createDirectedSphereEmitter() {
        const cB = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new rB.p(0, 1, 0),
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new rB.p(0, 1, 0);
          return new Sc(cB, Bc, nc)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new rB.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new rB.p(0, 1, 0));
        return this.particleEmitterType = cB, cB
      }
      createCylinderEmitter() {
        const cB = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new yB.f(cB, Bc, nc, Vc)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = cB, cB
      }
      createDirectedCylinderEmitter() {
        const cB = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rB.p(0, 1, 0),
            Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new rB.p(0, 1, 0);
          return new yB.c(cB, Bc, nc, Vc, Ic)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rB.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new rB.p(0, 1, 0));
        return this.particleEmitterType = cB, cB
      }
      createConeEmitter() {
        const cB = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new zB(cB, Bc)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = cB, cB
      }
      createDirectedConeEmitter() {
        const cB = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new rB.p(0, 1, 0),
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rB.p(0, 1, 0);
          return new pc(cB, Bc, nc, Vc)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new rB.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rB.p(0, 1, 0));
        return this.particleEmitterType = cB, cB
      }
      createBoxEmitter(cB, Bc, nc, Vc) {
        const Ic = new Oc.d;
        return this.particleEmitterType = Ic, this.direction1 = cB, this.direction2 = Bc, this.minEmitBox = nc, this.maxEmitBox = Vc, Ic
      }
      createMeshEmitter() {
        const cB = function() {
          return new hc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = cB, cB
      }
    }
    aB.BLENDMODE_ONEONE = 0, aB.BLENDMODE_STANDARD = 1, aB.BLENDMODE_ADD = 2, aB.BLENDMODE_MULTIPLY = 3, aB.BLENDMODE_MULTIPLYADD = 4, aB.BLENDMODE_SUBTRACT = -1;
    class lc {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new qB.g(0, 0, 0, 0), this.currentColor2 = new qB.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = rB.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class Yc {
      constructor(cB) {
        this.particleSystem = cB, this.position = rB.p.Zero(), this.direction = rB.p.Zero(), this.color = new qB.g(0, 0, 0, 0), this.colorStep = new qB.g(0, 0, 0, 0), this.initialColor = new qB.g(0, 0, 0, 0), this.colorDead = new qB.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new rB.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new lc, this.id = Yc._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let cB = this.age,
          Bc = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Bc ? (Bc = 1, cB = this._properties.randomCellOffset) : cB += this._properties.randomCellOffset);
        const nc = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Vc;
        Vc = this._properties.initialSpriteCellLoop ? (0, fc.Clamp)(cB * Bc % this.lifeTime / this.lifeTime) : (0, fc.Clamp)(cB * Bc / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Vc * nc | 0
      }
      _inheritParticleInfoToSubEmitter(cB) {
        if (cB.particleSystem.emitter.position) {
          const Bc = cB.particleSystem.emitter;
          if (Bc.position.qqc(this.position), cB.inheritDirection) {
            const cB = rB.i.KV[0];
            this.direction.normalizeToRef(cB), Bc.setDirection(cB, 0, Math.PI / 2)
          }
        } else {
          cB.particleSystem.emitter.qqc(this.position)
        }
        this.direction.scaleToRef(cB.inheritedVelocityAmount / 2, rB.i.KV[0]), cB.particleSystem._inheritedVelocityOffset.qqc(rB.i.KV[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const cB of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(cB)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = Yc._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(cB) {
        cB.position.qqc(this.position), this._properties.initialDirection ? cB._properties.initialDirection ? cB._properties.initialDirection.qqc(this._properties.initialDirection) : cB._properties.initialDirection = this._properties.initialDirection.clone() : cB._properties.initialDirection = null, cB.direction.qqc(this.direction), this._properties.localPosition && (cB._properties.localPosition ? cB._properties.localPosition.qqc(this._properties.localPosition) : cB._properties.localPosition = this._properties.localPosition.clone()), cB.color.qqc(this.color), cB.colorStep.qqc(this.colorStep), cB.initialColor.qqc(this.initialColor), cB.colorDead.qqc(this.colorDead), cB.lifeTime = this.lifeTime, cB.age = this.age, cB._properties.randomCellOffset = this._properties.randomCellOffset, cB.size = this.size, cB.scale.qqc(this.scale), cB.angle = this.angle, cB.angularSpeed = this.angularSpeed, cB.particleSystem = this.particleSystem, cB.cellIndex = this.cellIndex, cB.id = this.id, cB._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (cB._properties.currentColorGradient = this._properties.currentColorGradient, cB._properties.currentColor1.qqc(this._properties.currentColor1), cB._properties.currentColor2.qqc(this._properties.currentColor2)), this._properties.currentSizeGradient && (cB._properties.currentSizeGradient = this._properties.currentSizeGradient, cB._properties.currentSize1 = this._properties.currentSize1, cB._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (cB._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, cB._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, cB._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (cB._properties.currentVelocityGradient = this._properties.currentVelocityGradient, cB._properties.currentVelocity1 = this._properties.currentVelocity1, cB._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (cB._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, cB._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, cB._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (cB._properties.currentDragGradient = this._properties.currentDragGradient, cB._properties.currentDrag1 = this._properties.currentDrag1, cB._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (cB._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, cB._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, cB._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (cB.remapData && this.remapData ? cB.remapData.qqc(this.remapData) : cB.remapData = new rB.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (cB._properties.randomNoiseCoordinates1 && cB._properties.randomNoiseCoordinates2 ? (cB._properties.randomNoiseCoordinates1.qqc(this._properties.randomNoiseCoordinates1), cB._properties.randomNoiseCoordinates2.qqc(this._properties.randomNoiseCoordinates2)) : (cB._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), cB._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), cB.metadata = this.metadata
      }
    }
    Yc._Count = 0;
    var Lc = nc(39187);
    class gB {
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
      constructor(cB, Bc, nc, Vc) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Bc, this.LIc = cB, this._scene = nc, this._host = Vc, this._activeTargets = [], Bc._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            B_: this._getCorrectLoopMode()
          }, this._animation.dataType === Lc.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = rB.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const cB = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, cB)
        }
        if (this.LIc instanceof Array) {
          let cB = 0;
          for (const Bc of this.LIc) this._preparePath(Bc, cB), this._getOriginalValues(cB), cB++;
          this._targetIsArray = !0
        } else this._preparePath(this.LIc), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Ic = Bc.getEvents();
        if (Ic && Ic.length > 0)
          for (const rB of Ic) this._events.push(rB._clone());
        this._enableBlending = cB && cB.animationPropertiesOverride ? cB.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const nc = this._animation.targetPropertyPath;
        if (nc.length > 1) {
          let Vc = cB;
          for (let cB = 0; cB < nc.length - 1; cB++) {
            const Bc = nc[cB];
            if (Vc = Vc[Bc], void 0 === Vc) throw new Error(`Invalid property (${Bc}) in property path (${nc.join(".")})`)
          }
          this._targetPath = nc[nc.length - 1], this._activeTargets[Bc] = Vc
        } else this._targetPath = nc[0], this._activeTargets[Bc] = cB;
        if (void 0 === this._activeTargets[Bc][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${nc.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.LIc instanceof Array) {
            let cB = 0;
            for (const Bc of this.LIc) void 0 !== this._originalValue[cB] && this._setValue(Bc, this._activeTargets[cB], this._originalValue[cB], -1, cB), cB++
          } else void 0 !== this._originalValue[0] && this._setValue(this.LIc, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let cB = 0; cB < this._events.length; cB++) this._events[cB].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const cB = this._animation.runtimeAnimations.indexOf(this);
        cB > -1 && this._animation.runtimeAnimations.splice(cB, 1)
      }
      setValue(cB, Bc) {
        if (this._targetIsArray)
          for (let nc = 0; nc < this.LIc.length; nc++) {
            const Vc = this.LIc[nc];
            this._setValue(Vc, this._activeTargets[nc], cB, Bc, nc)
          } else this._setValue(this.LIc, this._directTarget, cB, Bc, 0)
      }
      _getOriginalValues() {
        let cB, Bc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const nc = this._activeTargets[Bc];
        if (Lc.d.InheritOriginalValueFromActiveAnimations) {
          const cB = this._scene._activeAnimatables;
          for (let Vc = 0; Vc < cB.length; Vc++) {
            const Ic = cB[Vc]._runtimeAnimations;
            for (let cB = 0; cB < Ic.length; cB++) {
              const Vc = Ic[cB];
              if (Vc !== this && Vc._targetPath === this._targetPath)
                for (let cB = 0; cB < Vc._activeTargets.length; cB++)
                  if (Vc._activeTargets[cB] === nc && void 0 !== Vc._originalValue[cB]) return void(Vc._originalValue[cB] && Vc._originalValue[cB].clone ? this._originalValue[Bc] = Vc._originalValue[cB].clone() : this._originalValue[Bc] = Vc._originalValue[cB])
            }
          }
        }
        cB = nc.getLocalMatrix && "_matrix" === this._targetPath ? nc.getLocalMatrix() : nc[this._targetPath], cB && cB.clone ? this._originalValue[Bc] = cB.clone() : this._originalValue[Bc] = cB
      }
      _registerTargetForLateAnimationBinding(cB, Bc) {
        const nc = cB.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(nc), nc._lateAnimationHolders || (nc._lateAnimationHolders = {}), nc._lateAnimationHolders[cB.targetPath] || (nc._lateAnimationHolders[cB.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Bc
        }), cB.isAdditive ? (nc._lateAnimationHolders[cB.targetPath].additiveAnimations.push(cB), nc._lateAnimationHolders[cB.targetPath].totalAdditiveWeight += cB.weight) : (nc._lateAnimationHolders[cB.targetPath].animations.push(cB), nc._lateAnimationHolders[cB.targetPath].totalWeight += cB.weight)
      }
      _setValue(cB, Bc, nc, Vc, Ic) {
        const uc = this._scene._animationWrites,
          sc = this._scene._animationWriteCount++;
        let Mc = uc[sc];
        if (Mc || (Mc = uc[sc] = {
            runtimeAnimation: this,
            target: cB,
            weight: Vc,
            additive: !1,
            blendingFactor: 1,
            carried: !1
          }), Mc.runtimeAnimation = this, Mc.target = cB, Mc.weight = Vc, Mc.additive = this.isAdditive, Mc.carried = !1, this._currentActiveTarget = Bc, this._weight = Vc, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const cB = Bc[this._targetPath];
            cB.clone ? this._originalBlendValue = cB.clone() : this._originalBlendValue = cB
          }
          this._originalBlendValue.m ? Lc.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? rB.d.DecomposeLerpToRef(this._originalBlendValue, nc, this._blendingFactor, this._currentValue) : this._currentValue = rB.d.DecomposeLerp(this._originalBlendValue, nc, this._blendingFactor) : this._currentValue ? rB.d.LerpToRef(this._originalBlendValue, nc, this._blendingFactor, this._currentValue) : this._currentValue = rB.d.Lerp(this._originalBlendValue, nc, this._blendingFactor) : this._currentValue = Lc.d._UniversalLerp(this._originalBlendValue, nc, this._blendingFactor);
          const Vc = cB && cB.animationPropertiesOverride ? cB.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Mc.blendingFactor = this._blendingFactor, this._blendingFactor += Vc
        } else Mc.blendingFactor = 1, this._currentValue ? this._currentValue.qqc ? this._currentValue.qqc(nc) : this._currentValue = nc : this._currentValue = nc?.clone ? nc.clone() : nc; - 1 !== Vc ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Ic]) : this._animationState.B_ === Lc.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Ic], Bc[this._targetPath]) : Bc[this._targetPath] = this._originalValue[Ic] + this._currentValue : Bc[this._targetPath] = this._currentValue, cB.SMc && cB.SMc(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.LIc && this.LIc.animationPropertiesOverride) {
          return "MorphTarget" === this.LIc.getClassName?.() && null == this.LIc._animationPropertiesOverride ? this._animation.B_ : this.LIc.animationPropertiesOverride.B_
        }
        return this._animation.B_
      }
      goToFrame(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const nc = this._animation.getKeys();
        cB < nc[0].frame ? cB = nc[0].frame : cB > nc[nc.length - 1].frame && (cB = nc[nc.length - 1].frame);
        const Vc = this._events;
        if (Vc.length)
          for (let rB = 0; rB < Vc.length; rB++) Vc[rB].onlyOnce || (Vc[rB].isDone = Vc[rB].frame < cB);
        this._currentFrame = cB;
        const Ic = this._animation._interpolate(cB, this._animationState);
        this.setValue(Ic, Bc)
      }
      _prepareForSpeedRatioChange(cB) {
        const Bc = this._previousElapsedTime * (this._animation.framePerSecond * cB) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Bc
      }
      animate(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const uc = this._animation,
          sc = uc.targetPropertyPath;
        if (!sc || sc.length < 1) return this._stopped = !0, !1;
        let Mc, Pc = !0;
        const qB = this._events;
        let Oc;
        if (this._coreRuntimeAnimation) Oc = nc - Bc, Mc = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Mc, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let rB;
          (Bc < this._minFrame || Bc > this._maxFrame) && (Bc = this._minFrame), (nc < this._minFrame || nc > this._maxFrame) && (nc = this._maxFrame), Oc = nc - Bc;
          let sc = cB * (uc.framePerSecond * Ic) / 1e3 + this._absoluteFrameOffset,
            Tc = 0,
            fc = !1;
          const mB = Vc && this._animationState.B_ === Lc.d.ANIMATIONLOOPMODE_YOYO;
          if (mB) {
            const cB = (sc - Bc) / Oc,
              nc = Math.sin(cB * Math.PI);
            sc = Math.abs(nc) * Oc + Bc;
            const Vc = nc >= 0 ? 1 : -1;
            this._yoyoDirection !== Vc && (fc = !0), this._yoyoDirection = Vc
          }
          if (this._previousElapsedTime = cB, this._previousAbsoluteFrame = sc, !Vc && nc >= Bc && (sc >= Oc && Ic > 0 || sc <= 0 && Ic < 0)) Pc = !1, Tc = uc.evaluate(nc);
          else if (!Vc && Bc >= nc && (sc <= Oc && Ic < 0 || sc >= 0 && Ic > 0)) Pc = !1, Tc = uc.evaluate(Bc);
          else if (this._animationState.B_ !== Lc.d.ANIMATIONLOOPMODE_CYCLE) {
            const cB = nc.toString() + Bc.toString();
            if (!this._offsetsCache[cB]) {
              this._animationState.repeatCount = 0, this._animationState.B_ = Lc.d.ANIMATIONLOOPMODE_CYCLE;
              const Vc = uc._interpolate(Bc, this._animationState),
                Ic = uc._interpolate(nc, this._animationState);
              switch (this._animationState.B_ = this._getCorrectLoopMode(), uc.dataType) {
                case Lc.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[cB] = Ic - Vc;
                  break;
                case Lc.d.ANIMATIONTYPE_QUATERNION:
                case Lc.d.ANIMATIONTYPE_VECTOR3:
                case Lc.d.ANIMATIONTYPE_VECTOR2:
                case Lc.d.ANIMATIONTYPE_SIZE:
                case Lc.d.ANIMATIONTYPE_COLOR3:
                case Lc.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[cB] = Ic.subtract(Vc)
              }
              this._highLimitsCache[cB] = Ic
            }
            Tc = this._highLimitsCache[cB], rB = this._offsetsCache[cB]
          }
          if (void 0 === rB) switch (uc.dataType) {
            case Lc.d.ANIMATIONTYPE_FLOAT:
              rB = 0;
              break;
            case Lc.d.ANIMATIONTYPE_QUATERNION:
              rB = Lc.p;
              break;
            case Lc.d.ANIMATIONTYPE_VECTOR3:
              rB = Lc.v;
              break;
            case Lc.d.ANIMATIONTYPE_VECTOR2:
              rB = Lc.t;
              break;
            case Lc.d.ANIMATIONTYPE_SIZE:
              rB = Lc.q;
              break;
            case Lc.d.ANIMATIONTYPE_COLOR3:
              rB = Lc.k;
              break;
            case Lc.d.ANIMATIONTYPE_COLOR4:
              rB = Lc.n
          }
          const ec = this._host ? this._host.syncRoot : null;
          let tB, Sc = this._playbackFrames,
            yB = !1;
          if (ec) {
            const cB = ec.toFrame - ec.fromFrame,
              nc = ec.masterFrame,
              Vc = (nc - ec.fromFrame) / cB;
            Mc = Bc + Oc * Vc;
            const Ic = ec.getAnimations()[0];
            if (Ic && 0 !== cB) {
              const cB = Oc * Vc,
                Bc = Ic._playbackTo - Ic._playbackFrom;
              if (0 !== Bc && Ic._playbackFrom <= ec.fromFrame && Ic._playbackTo >= ec.toFrame) {
                Sc = Oc * Math.round((Ic._playbackFrames - (Ic._currentFrame - Ic._playbackFrom)) / Bc) + cB
              } else yB = (nc - this._playbackSyncMasterFrame) * (Ic._playbackFrames - this._playbackSyncMasterPlayed) < 0, Sc = cB;
              yB = yB || Ic._playbackJumped, this._playbackSyncMasterPlayed = Ic._playbackFrames, this._playbackSyncMasterFrame = nc
            }
          } else Mc = sc > 0 && Bc > nc || sc < 0 && Bc < nc ? Pc && 0 !== Oc ? nc + sc % Oc : Bc : Pc && 0 !== Oc ? Bc + sc % Oc : nc;
          if (!mB && (Ic > 0 && this.currentFrame > Mc || Ic < 0 && this.currentFrame < Mc) || mB && fc) {
            this._onLoop();
            for (let cB = 0; cB < qB.length; cB++) qB[cB].onlyOnce || (qB[cB].isDone = !1);
            this._animationState.key = Ic > 0 ? 0 : uc.getKeys().length - 1
          }
          if (this._currentFrame = Mc, this._animationState.repeatCount = 0 === Oc ? 0 : sc / Oc | 0, this._animationState.highLimitValue = Tc, this._animationState.offsetValue = rB, this._playbackFrom = Bc, this._playbackTo = nc, this._playbackJumped = yB, this._playbackSyncRoot = ec, ec) tB = Sc;
          else if (Pc) tB = mB ? Mc === Bc && sc === nc ? Oc : Mc - Bc : sc;
          else {
            const cB = 0 !== Oc ? Math.floor(this._playbackFrames / Oc) : 0;
            tB = (Mc === nc ? cB + 1 : cB) * Oc
          }
          this._playbackFrames = tB, this._playbackProgress = this._animationState.B_ === Lc.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Oc : tB
        }
        const Tc = uc._interpolate(Mc, this._animationState);
        if (this.setValue(Tc, rB), qB.length)
          for (let fc = 0; fc < qB.length; fc++)
            if (Oc >= 0 && Mc >= qB[fc].frame && qB[fc].frame >= Bc || Oc < 0 && Mc <= qB[fc].frame && qB[fc].frame <= Bc) {
              const cB = qB[fc];
              cB.isDone || (cB.onlyOnce && (qB.splice(fc, 1), fc--), cB.isDone = !0, cB.action(Mc))
            } return Pc || (this._stopped = !0), Pc
      }
    }
    var Uc = nc(37968);
    class bB {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(cB) {
        this._weight = -1 !== cB ? Math.min(Math.max(cB, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(cB) {
        for (let Bc = 0; Bc < this._runtimeAnimations.length; Bc++) {
          this._runtimeAnimations[Bc]._prepareForSpeedRatioChange(cB)
        }
        this._speedRatio = cB, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          rB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          sc = arguments.length > 6 ? arguments[6] : void 0,
          Mc = arguments.length > 7 ? arguments[7] : void 0,
          Pc = arguments.length > 8 ? arguments[8] : void 0,
          qB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Oc = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Bc, this.fromFrame = nc, this.toFrame = Vc, this.loopAnimation = rB, this.onAnimationEnd = sc, this.onAnimationLoop = Pc, this.isAdditive = qB, this.playOrder = Oc, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.eC = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Ic.c, this.onAnimationLoopObservable = new Ic.c, this._scene = cB, Mc && this.appendAnimations(Bc, Mc), this._speedRatio = uc, cB._activeAnimatables.push(this)
      }
      syncWith(cB) {
        if (this._syncRoot = cB, cB) {
          const cB = this._scene._activeAnimatables.indexOf(this);
          cB > -1 && (this._scene._activeAnimatables.splice(cB, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(cB, Bc) {
        for (let nc = 0; nc < Bc.length; nc++) {
          const Vc = Bc[nc],
            Ic = new gB(cB, Vc, this._scene, this);
          Ic._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Ic)
        }
      }
      getAnimationByTargetProperty(cB) {
        const Bc = this._runtimeAnimations;
        for (let nc = 0; nc < Bc.length; nc++)
          if (Bc[nc].animation.targetProperty === cB) return Bc[nc].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(cB) {
        const Bc = this._runtimeAnimations;
        for (let nc = 0; nc < Bc.length; nc++)
          if (Bc[nc].animation.targetProperty === cB) return Bc[nc];
        return null
      }
      reset() {
        const cB = this._runtimeAnimations;
        for (let Bc = 0; Bc < cB.length; Bc++) cB[Bc].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(cB) {
        const Bc = this._runtimeAnimations;
        for (let nc = 0; nc < Bc.length; nc++) Bc[nc].animation.enableBlending = !0, Bc[nc].animation.blendingSpeed = cB
      }
      disableBlending() {
        const cB = this._runtimeAnimations;
        for (let Bc = 0; Bc < cB.length; Bc++) cB[Bc].animation.enableBlending = !1
      }
      goToFrame(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this._runtimeAnimations;
        if (nc[0]) {
          const Bc = nc[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? nc[0].currentFrame;
          const Vc = 0 === this.speedRatio ? 0 : (cB - this._frameToSyncFromJump) / Bc * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Vc
        }
        for (let Vc = 0; Vc < nc.length; Vc++) nc[Vc].goToFrame(cB, Bc ? this._weight : -1);
        this._goToFrame = cB
      }
      get paused() {
        return this.eC
      }
      pause() {
        this.eC || (this.eC = !0)
      }
      restart() {
        this.eC = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (cB || Bc) {
          const Ic = this._scene._activeAnimatables.indexOf(this);
          if (Ic > -1) {
            const rB = this._runtimeAnimations;
            for (let nc = rB.length - 1; nc >= 0; nc--) {
              const Vc = rB[nc];
              cB && Vc.animation.name != cB || (Bc && !Bc(Vc.target) || (Vc.dispose(), rB.splice(nc, 1)))
            }
            0 == rB.length && (nc || this._scene._activeAnimatables.splice(Ic, 1), Vc || this._raiseOnAnimationEnd())
          }
        } else {
          const cB = this._scene._activeAnimatables.indexOf(this);
          if (cB > -1) {
            nc || this._scene._activeAnimatables.splice(cB, 1);
            const Bc = this._runtimeAnimations;
            for (let cB = 0; cB < Bc.length; cB++) Bc[cB].dispose();
            this._runtimeAnimations.length = 0, Vc || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((cB => {
          this.onAnimationEndObservable.add((() => {
            cB(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(cB) {
        if (this.eC) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = cB), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = cB, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += cB - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !bB.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Bc = !1;
        const nc = this._runtimeAnimations;
        let Vc;
        for (Vc = 0; Vc < nc.length; Vc++) {
          const Ic = nc[Vc].animate(cB - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Bc = Bc || Ic
        }
        if (this.animationStarted = Bc, !Bc) {
          if (this.disposeOnEnd)
            for (Vc = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Vc, 1), Vc = 0; Vc < nc.length; Vc++) nc[Vc].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Bc
      }
    }

    function Zc(cB) {
      if (0 === cB.totalWeight && 0 === cB.totalAdditiveWeight) return cB.originalValue;
      let Bc = 1;
      const nc = rB.i.KV[0],
        Vc = rB.i.KV[1],
        Ic = rB.i.Quaternion[0];
      let uc = 0;
      const sc = cB.animations[0],
        Mc = cB.originalValue;
      let Pc, qB = !1;
      if (cB.totalWeight < 1) Pc = 1 - cB.totalWeight, Mc.decompose(Vc, Ic, nc);
      else {
        if (uc = 1, Bc = cB.totalWeight, Pc = sc.weight / Bc, 1 == Pc) {
          if (!cB.totalAdditiveWeight) return sc.currentValue;
          qB = !0
        }
        sc.currentValue.decompose(Vc, Ic, nc)
      }
      if (!qB) {
        Vc.scaleInPlace(Pc), nc.scaleInPlace(Pc), Ic.scaleInPlace(Pc);
        for (let sc = uc; sc < cB.animations.length; sc++) {
          const uc = cB.animations[sc];
          if (0 === uc.weight) continue;
          Pc = uc.weight / Bc;
          const Mc = rB.i.KV[2],
            qB = rB.i.KV[3],
            Oc = rB.i.Quaternion[1];
          uc.currentValue.decompose(qB, Oc, Mc), qB.scaleAndAddToRef(Pc, Vc), Oc.scaleAndAddToRef(rB.f.Dot(Ic, Oc) > 0 ? Pc : -Pc, Ic), Mc.scaleAndAddToRef(Pc, nc)
        }
        Ic.normalize()
      }
      for (let Tc = 0; Tc < cB.additiveAnimations.length; Tc++) {
        const Bc = cB.additiveAnimations[Tc];
        if (0 === Bc.weight) continue;
        const uc = rB.i.KV[2],
          sc = rB.i.KV[3],
          Mc = rB.i.Quaternion[1];
        Bc.currentValue.decompose(sc, Mc, uc), sc.multiplyToRef(Vc, sc), rB.p.LerpToRef(Vc, sc, Bc.weight, Vc), Ic.multiplyToRef(Mc, Mc), rB.f.SlerpToRef(Ic, Mc, Bc.weight, Ic), uc.scaleAndAddToRef(Bc.weight, nc)
      }
      const Oc = sc ? sc._animationState.workValue : rB.i.Matrix[0].clone();
      return rB.d.ComposeToRef(Vc, Ic, nc, Oc), Oc
    }

    function Qc(cB, Bc) {
      if (0 === cB.totalWeight && 0 === cB.totalAdditiveWeight) return Bc;
      const nc = cB.animations[0],
        Vc = cB.originalValue;
      let Ic = Bc;
      if (0 === cB.totalWeight && cB.totalAdditiveWeight > 0) Ic.qqc(Vc);
      else if (1 === cB.animations.length) {
        if (rB.f.SlerpToRef(Vc, nc.currentValue, Math.min(1, cB.totalWeight), Ic), 0 === cB.totalAdditiveWeight) return Ic
      } else if (cB.animations.length > 1) {
        let nc, uc, sc = 1;
        if (cB.totalWeight < 1) {
          const Bc = 1 - cB.totalWeight;
          nc = [], uc = [], nc.push(Vc), uc.push(Bc)
        } else {
          if (2 === cB.animations.length && (rB.f.SlerpToRef(cB.animations[0].currentValue, cB.animations[1].currentValue, cB.animations[1].weight / cB.totalWeight, Bc), 0 === cB.totalAdditiveWeight)) return Bc;
          nc = [], uc = [], sc = cB.totalWeight
        }
        for (let Bc = 0; Bc < cB.animations.length; Bc++) {
          const Vc = cB.animations[Bc];
          nc.push(Vc.currentValue), uc.push(Vc.weight / sc)
        }
        let Mc = 0;
        for (let cB = 0; cB < nc.length;) cB ? (Mc += uc[cB], rB.f.SlerpToRef(Ic, nc[cB], uc[cB] / Mc, Ic), cB++) : (rB.f.SlerpToRef(nc[cB], nc[cB + 1], uc[cB + 1] / (uc[cB] + uc[cB + 1]), Bc), Ic = Bc, Mc = uc[cB] + uc[cB + 1], cB += 2)
      }
      for (let uc = 0; uc < cB.additiveAnimations.length; uc++) {
        const Bc = cB.additiveAnimations[uc];
        0 !== Bc.weight && (Ic.multiplyToRef(Bc.currentValue, rB.i.Quaternion[0]), rB.f.SlerpToRef(Ic, rB.i.Quaternion[0], Bc.weight, Ic))
      }
      return Ic
    }

    function Cc(cB, Bc) {
      Bc && (Bc.prototype.copyAnimationRange = function(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Lc.d(this.name, "_matrix", cB.animations[0].framePerSecond, Lc.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const rB = cB.animations[0].getRange(Bc);
        if (!rB) return !1;
        const uc = rB.from,
          sc = rB.to,
          Mc = cB.animations[0].getKeys(),
          Pc = cB.length,
          qB = cB.getParent(),
          Oc = this.getParent(),
          Tc = Vc && qB && Pc && this.length && Pc !== this.length,
          fc = Tc && Oc && qB ? Oc.length / qB.length : 1,
          mB = Vc && !Oc && Ic && (1 !== Ic.x || 1 !== Ic.y || 1 !== Ic.z),
          ec = this.animations[0].getKeys();
        let tB, Sc, yB;
        for (let zB = 0, pc = Mc.length; zB < pc; zB++) tB = Mc[zB], tB.frame >= uc && tB.frame <= sc && (Vc ? (yB = tB.value.clone(), Tc ? (Sc = yB.getTranslation(), yB.setTranslation(Sc.scaleInPlace(fc))) : mB && Ic ? (Sc = yB.getTranslation(), yB.setTranslation(Sc.multiplyInPlace(Ic))) : yB = tB.value) : yB = tB.value, ec.push({
          frame: tB.frame + nc,
          value: yB
        }));
        return this.animations[0].createRange(Bc, uc + nc, sc + nc), !0
      }), cB && (cB.prototype._animate = function(cB) {
        const Bc = this._animationWrites,
          nc = this._animationWriteCount;
        let Vc = 0;
        for (let rB = this._animationStepWriteCount; rB < nc; rB++) {
          const cB = Bc[rB];
          cB.carried && -1 === cB.weight || (cB.carried = !0, Bc[rB] = Bc[Vc], Bc[Vc] = cB, Vc++)
        }
        for (let rB = Vc; rB < nc; rB++) {
          const cB = Bc[rB];
          cB.runtimeAnimation = null, cB.target = null
        }
        if (this._animationWriteCount = Vc, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Ic = Uc.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Ic
        }
        this.deltaTime = void 0 !== cB ? cB : this.useConstantAnimationDeltaTime ? 16 : (Ic - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Ic;
        const uc = this._activeAnimatables;
        if (0 === uc.length) return;
        this._animationTime += this.deltaTime;
        const sc = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let rB = 0; rB < uc.length; rB++) {
          const cB = uc[rB];
          !cB._animate(sc) && cB.disposeOnEnd && rB--
        }! function(cB) {
          if (cB._registeredForLateAnimationBindings.length) {
            for (let Bc = 0; Bc < cB._registeredForLateAnimationBindings.length; Bc++) {
              const nc = cB._registeredForLateAnimationBindings.data[Bc];
              for (const cB in nc._lateAnimationHolders) {
                const Bc = nc._lateAnimationHolders[cB],
                  Vc = Bc.animations[0],
                  Ic = Bc.originalValue;
                if (void 0 === Ic || null === Ic) continue;
                const uc = Lc.d.AllowMatrixDecomposeForInterpolation && Ic.m;
                let sc = nc[cB];
                if (uc) sc = Zc(Bc);
                else if (void 0 !== Ic.w) sc = Qc(Bc, sc || rB.f.Identity());
                else {
                  let cB = 0,
                    nc = 1;
                  const rB = Vc && Vc._animationState.B_ === Lc.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Bc.totalWeight < 1) sc = rB ? Ic.clone ? Ic.clone() : Ic : Vc && Ic.scale ? Ic.scale(1 - Bc.totalWeight) : Vc ? Ic * (1 - Bc.totalWeight) : Ic.clone ? Ic.clone() : Ic;
                  else if (Vc) {
                    nc = Bc.totalWeight;
                    const uc = Vc.weight / nc;
                    sc = 1 !== uc ? Vc.currentValue.scale ? Vc.currentValue.scale(uc) : Vc.currentValue * uc : (Bc.animations.length > 1 || Bc.additiveAnimations.length > 0) && Vc.currentValue.clone ? Vc.currentValue.clone() : Vc.currentValue, rB && (sc.addToRef ? sc.addToRef(Ic, sc) : sc += Ic), cB = 1
                  }
                  for (let Vc = cB; Vc < Bc.animations.length; Vc++) {
                    const cB = Bc.animations[Vc],
                      Ic = cB.weight / nc;
                    Ic && (cB.currentValue.scaleAndAddToRef ? cB.currentValue.scaleAndAddToRef(Ic, sc) : sc += cB.currentValue * Ic)
                  }
                  for (let Vc = 0; Vc < Bc.additiveAnimations.length; Vc++) {
                    const cB = Bc.additiveAnimations[Vc],
                      nc = cB.weight;
                    nc && (cB.currentValue.scaleAndAddToRef ? cB.currentValue.scaleAndAddToRef(nc, sc) : sc += cB.currentValue * nc)
                  }
                }
                nc[cB] = sc
              }
              nc._lateAnimationHolders = {}
            }
            cB._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, cB.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((cB, Bc) => cB.playOrder - Bc.playOrder))
      }, cB.prototype.beginWeightedAnimation = function(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          uc = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 ? arguments[7] : void 0,
          Mc = arguments.length > 8 ? arguments[8] : void 0,
          Pc = arguments.length > 9 ? arguments[9] : void 0,
          qB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Oc = this.beginAnimation(cB, Bc, nc, Ic, rB, uc, sc, !1, Mc, Pc, qB);
        return Oc.weight = Vc, Oc
      }, cB.prototype.beginAnimation = function(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          rB = arguments.length > 5 ? arguments[5] : void 0,
          uc = arguments.length > 6 ? arguments[6] : void 0,
          sc = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Mc = arguments.length > 8 ? arguments[8] : void 0,
          Pc = arguments.length > 9 ? arguments[9] : void 0,
          qB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Ic < 0) {
          const cB = Bc;
          Bc = nc, nc = cB, Ic = -Ic
        }
        Bc > nc && (Ic = -Ic), sc && this.stopAnimation(cB, void 0, Mc), uc || (uc = new bB(this, cB, Bc, nc, Vc, Ic, rB, void 0, Pc, qB));
        const Oc = !Mc || Mc(cB);
        if (cB.animations && Oc && uc.appendAnimations(cB, cB.animations), cB.getAnimatables) {
          const qB = cB.getAnimatables();
          for (let cB = 0; cB < qB.length; cB++) this.beginAnimation(qB[cB], Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc)
        }
        return uc.reset(), uc
      }, cB.prototype.beginHierarchyAnimation = function(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          uc = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 ? arguments[7] : void 0,
          Mc = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Pc = arguments.length > 9 ? arguments[9] : void 0,
          qB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Oc = cB.getDescendants(Bc),
          Tc = [];
        Tc.push(this.beginAnimation(cB, nc, Vc, Ic, rB, uc, sc, Mc, Pc, void 0, qB));
        for (const fc of Oc) Tc.push(this.beginAnimation(fc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, void 0, qB));
        return Tc
      }, cB.prototype.beginDirectAnimation = function(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (rB < 0) {
          const cB = nc;
          nc = Vc, Vc = cB, rB = -rB
        }
        nc > Vc && (rB = -rB);
        return new bB(this, cB, nc, Vc, Ic, rB, arguments.length > 6 ? arguments[6] : void 0, Bc, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, cB.prototype.beginDirectHierarchyAnimation = function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        let Pc = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const qB = cB.getDescendants(Bc),
          Oc = [];
        Oc.push(this.beginDirectAnimation(cB, nc, Vc, Ic, rB, uc, sc, Mc, Pc));
        for (const Tc of qB) Oc.push(this.beginDirectAnimation(Tc, nc, Vc, Ic, rB, uc, sc, Mc, Pc));
        return Oc
      }, cB.prototype.getAnimatableByTarget = function(cB) {
        for (let Bc = 0; Bc < this._activeAnimatables.length; Bc++)
          if (this._activeAnimatables[Bc].target === cB) return this._activeAnimatables[Bc];
        return null
      }, cB.prototype.getAllAnimatablesByTarget = function(cB) {
        const Bc = [];
        for (let nc = 0; nc < this._activeAnimatables.length; nc++) this._activeAnimatables[nc].target === cB && Bc.push(this._activeAnimatables[nc]);
        return Bc
      }, cB.prototype.stopAnimation = function(cB, Bc, nc) {
        const Vc = this.getAllAnimatablesByTarget(cB);
        for (const Ic of Vc) Ic.stop(Bc, nc)
      }, cB.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let cB = 0; cB < this._activeAnimatables.length; cB++) this._activeAnimatables[cB].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const cB of this.animationGroups) cB.stop()
      })
    }
    bB.ProcessPausedAnimatables = !1;
    var vB, Dc = nc(35768),
      Nc = nc(38255),
      Ec = nc(37953);
    class oc extends Nc.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(cB) {
        (cB.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.qqc(cB), this._markAsDirtyAndDecompose())
      }
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(cB, Bc.knc(), !1), this.name = cB, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Bc, this._localMatrix = Vc?.clone() ?? rB.d.Identity(), this._restMatrix = Ic ?? this._localMatrix.clone(), this._bindMatrix = uc ?? this._localMatrix.clone(), this._index = sc, this._absoluteMatrix = new rB.d, this._absoluteBindMatrix = new rB.d, this._absoluteInverseBindMatrix = new rB.d, this._finalMatrix = new rB.d, Bc.bones.push(this), this.setParent(nc, !1), this._updateAbsoluteBindMatrices()
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
      set parent(cB) {
        this.setParent(cB)
      }
      setParent(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== cB) {
          if (this.parent) {
            const cB = this.parent.children.indexOf(this); - 1 !== cB && this.parent.children.splice(cB, 1)
          }
          this._parentNode = cB, this.parent && this.parent.children.push(this), Bc && this._updateAbsoluteBindMatrices(), this.SMc()
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
      setRestMatrix(cB) {
        this._restMatrix.qqc(cB)
      }
      setRestPose(cB) {
        this.setRestMatrix(cB)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(cB) {
        this.Buc(cB)
      }
      setBindPose(cB) {
        this.setBindMatrix(cB)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const cB = rB.i.KV[0],
            Bc = rB.i.Quaternion[0],
            nc = rB.i.KV[1];
          this.getRestMatrix().decompose(cB, Bc, nc), this._linkedTransformNode.position.qqc(nc), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? rB.f.Identity(), this._linkedTransformNode.rotationQuaternion.qqc(Bc), this._linkedTransformNode.Su.qqc(cB)
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
      linkTransformNode(cB) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = cB, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.bMc
      }
      set position(cB) {
        this._decompose(), this.bMc.qqc(cB), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(cB) {
        this.setRotation(cB)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(cB) {
        this.setRotationQuaternion(cB)
      }
      get Su() {
        return this.getScale()
      }
      set Su(cB) {
        this.setScale(cB)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = rB.p.Zero(), this._localRotation = rB.f.Zero(), this.bMc = rB.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.bMc))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, rB.d.ComposeToRef(this._localScaling, this._localRotation, this.bMc, this._localMatrix)) : this._needToCompose = !1)
      }
      Buc(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.qqc(cB), Bc && this._updateAbsoluteBindMatrices(), nc ? this._matrix = cB : this.SMc()
      }
      _updateAbsoluteBindMatrices(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (cB || (cB = this._bindMatrix), this.parent ? cB.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.qqc(cB), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Bc)
          for (let nc = 0; nc < this.children.length; nc++) this.children[nc]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      SMc() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.SMc(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.SMc(), this._needToDecompose = !0
      }
      _updatePosition(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ic = this.getLocalMatrix();
        if (0 == Bc) Vc ? (Ic.addAtIndex(12, cB.x), Ic.addAtIndex(13, cB.y), Ic.addAtIndex(14, cB.z)) : Ic.setTranslationFromFloats(cB.x, cB.y, cB.z);
        else {
          const Bc = oc._TmpMats[0],
            uc = oc._TmpVecs[0];
          this.parent ? (Bc.qqc(this.parent.getAbsoluteMatrix()), nc && Bc.multiplyToRef(nc.getWorldMatrix(), Bc)) : rB.d.IdentityToRef(Bc), Vc && Bc.setTranslationFromFloats(0, 0, 0), Bc.invert(), rB.p.TransformCoordinatesToRef(cB, Bc, uc), Vc ? (Ic.addAtIndex(12, uc.x), Ic.addAtIndex(13, uc.y), Ic.addAtIndex(14, uc.z)) : Ic.setTranslationFromFloats(uc.x, uc.y, uc.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(cB, Bc, nc, !0)
      }
      setPosition(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(cB, Bc, nc, !1)
      }
      setAbsolutePosition(cB, Bc) {
        this.setPosition(cB, 1, Bc)
      }
      scale(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ic = this.getLocalMatrix(),
          uc = oc._TmpMats[0];
        rB.d.ScalingToRef(cB, Bc, nc, uc), uc.multiplyToRef(Ic, Ic), uc.invert();
        for (const rB of this.children) {
          const Vc = rB.getLocalMatrix();
          Vc.multiplyToRef(uc, Vc), Vc.multiplyAtIndex(12, cB), Vc.multiplyAtIndex(13, Bc), Vc.multiplyAtIndex(14, nc), rB._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Vc)
          for (const rB of this.children) rB.scale(cB, Bc, nc, Vc)
      }
      setScale(cB) {
        this._decompose(), this._localScaling.qqc(cB), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(cB) {
        this._decompose(), cB.qqc(this._localScaling)
      }
      setYawPitchRoll(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Vc) {
          const uc = oc._TmpQuat;
          return rB.f.RotationYawPitchRollToRef(cB, Bc, nc, uc), void this.setRotationQuaternion(uc, Vc, Ic)
        }
        const uc = oc._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(uc, Ic)) return;
        const sc = oc._TmpMats[1];
        rB.d.RotationYawPitchRollToRef(cB, Bc, nc, sc), uc.multiplyToRef(sc, sc), this._rotateWithMatrix(sc, Vc, Ic)
      }
      rotate(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        const Ic = oc._TmpMats[0];
        Ic.setTranslationFromFloats(0, 0, 0), rB.d.RotationAxisToRef(cB, Bc, Ic), this._rotateWithMatrix(Ic, nc, Vc)
      }
      setAxisAngle(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === nc) {
          const Ic = oc._TmpQuat;
          return rB.f.RotationAxisToRef(cB, Bc, Ic), void this.setRotationQuaternion(Ic, nc, Vc)
        }
        const Ic = oc._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ic, Vc)) return;
        const uc = oc._TmpMats[1];
        rB.d.RotationAxisToRef(cB, Bc, uc), Ic.multiplyToRef(uc, uc), this._rotateWithMatrix(uc, nc, Vc)
      }
      setRotation(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(cB.y, cB.x, cB.z, Bc, nc)
      }
      setRotationQuaternion(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Bc) return this._decompose(), this._localRotation.qqc(cB), void this._markAsDirtyAndCompose();
        const Vc = oc._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Vc, nc)) return;
        const Ic = oc._TmpMats[1];
        rB.d.FromQuaternionToRef(cB, Ic), Vc.multiplyToRef(Ic, Ic), this._rotateWithMatrix(Ic, Bc, nc)
      }
      setRotationMatrix(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Bc) {
          const Vc = oc._TmpQuat;
          return rB.f.FromRotationMatrixToRef(cB, Vc), void this.setRotationQuaternion(Vc, Bc, nc)
        }
        const Vc = oc._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Vc, nc)) return;
        const Ic = oc._TmpMats[1];
        Ic.qqc(cB), Vc.multiplyToRef(cB, Ic), this._rotateWithMatrix(Ic, Bc, nc)
      }
      _rotateWithMatrix(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = this.getLocalMatrix(),
          Ic = Vc.m[12],
          rB = Vc.m[13],
          uc = Vc.m[14],
          sc = this.getParent(),
          Mc = oc._TmpMats[3],
          Pc = oc._TmpMats[4];
        sc && 1 == Bc ? (nc ? (Mc.qqc(nc.getWorldMatrix()), sc.getAbsoluteMatrix().multiplyToRef(Mc, Mc)) : Mc.qqc(sc.getAbsoluteMatrix()), Pc.qqc(Mc), Pc.invert(), Vc.multiplyToRef(Mc, Vc), Vc.multiplyToRef(cB, Vc), Vc.multiplyToRef(Pc, Vc)) : 1 == Bc && nc ? (Mc.qqc(nc.getWorldMatrix()), Pc.qqc(Mc), Pc.invert(), Vc.multiplyToRef(Mc, Vc), Vc.multiplyToRef(cB, Vc), Vc.multiplyToRef(Pc, Vc)) : Vc.multiplyToRef(cB, Vc), Vc.setTranslationFromFloats(Ic, rB, uc), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(cB, Bc) {
        const nc = oc._TmpMats[2];
        return cB.qqc(this.getAbsoluteMatrix()), Bc ? (cB.multiplyToRef(Bc.getWorldMatrix(), cB), rB.d.ScalingToRef(Bc.Su.x, Bc.Su.y, Bc.Su.z, nc)) : rB.d.IdentityToRef(nc), cB.invert(), !isNaN(cB.m[0]) && (nc.multiplyAtIndex(0, this._scalingDeterminant), cB.multiplyToRef(nc, cB), !0)
      }
      rC() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const nc = rB.p.Zero();
        return this.getPositionToRef(cB, Bc, nc), nc
      }
      getPositionToRef() {
        let cB = arguments.length > 1 ? arguments[1] : void 0,
          Bc = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const cB = this.getLocalMatrix();
          Bc.x = cB.m[12], Bc.y = cB.m[13], Bc.z = cB.m[14]
        } else {
          const nc = oc._TmpMats[0].qqc(this.getAbsoluteMatrix());
          cB && nc.multiplyToRef(cB.getWorldMatrix(), nc), Bc.x = nc.m[12], Bc.y = nc.m[13], Bc.z = nc.m[14]
        }
      }
      getAbsolutePosition() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Bc = rB.p.Zero();
        return this.getPositionToRef(1, cB, Bc), Bc
      }
      getAbsolutePositionToRef(cB, Bc) {
        this.getPositionToRef(1, cB, Bc)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.qqc(this._localMatrix);
          const cB = this._skeleton.getPoseMatrix();
          cB && this._absoluteMatrix.multiplyToRef(cB, this._absoluteMatrix)
        }
        const cB = this.children,
          Bc = cB.length;
        for (let nc = 0; nc < Bc; nc++) cB[nc].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      fIc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const nc = rB.p.Zero();
        return this.getDirectionToRef(cB, Bc, nc), nc
      }
      getDirectionToRef(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = oc._TmpMats[0].qqc(this.getAbsoluteMatrix());
        Bc && Vc.multiplyToRef(Bc.getWorldMatrix(), Vc), rB.p.TransformNormalToRef(cB, Vc, nc), nc.normalize()
      }
      getRotation() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const nc = rB.p.Zero();
        return this.getRotationToRef(cB, Bc, nc), nc
      }
      getRotationToRef() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = oc._TmpQuat;
        this.getRotationQuaternionToRef(cB, Bc, Vc), Vc.toEulerAnglesToRef(nc)
      }
      getRotationQuaternion() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const nc = rB.f.Identity();
        return this.getRotationQuaternionToRef(cB, Bc, nc), nc
      }
      getRotationQuaternionToRef() {
        let cB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bc = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Bc.qqc(this._localRotation);
        else {
          const nc = oc._TmpMats[0],
            Vc = this.getAbsoluteMatrix();
          cB ? Vc.multiplyToRef(cB.getWorldMatrix(), nc) : nc.qqc(Vc), nc.multiplyAtIndex(0, this._scalingDeterminant), nc.multiplyAtIndex(1, this._scalingDeterminant), nc.multiplyAtIndex(2, this._scalingDeterminant), nc.decompose(void 0, Bc, void 0)
        }
      }
      getRotationMatrix() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 ? arguments[1] : void 0;
        const nc = rB.d.Identity();
        return this.getRotationMatrixToRef(cB, Bc, nc), nc
      }
      getRotationMatrixToRef() {
        let cB = arguments.length > 1 ? arguments[1] : void 0,
          Bc = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Bc);
        else {
          const nc = oc._TmpMats[0],
            Vc = this.getAbsoluteMatrix();
          cB ? Vc.multiplyToRef(cB.getWorldMatrix(), nc) : nc.qqc(Vc), nc.multiplyAtIndex(0, this._scalingDeterminant), nc.multiplyAtIndex(1, this._scalingDeterminant), nc.multiplyAtIndex(2, this._scalingDeterminant), nc.getRotationMatrixToRef(Bc)
        }
      }
      getAbsolutePositionFromLocal(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const nc = rB.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(cB, Bc, nc), nc
      }
      getAbsolutePositionFromLocalToRef(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = oc._TmpMats[0].qqc(this.getAbsoluteMatrix());
        Bc && Vc.multiplyToRef(Bc.getWorldMatrix(), Vc), rB.p.TransformCoordinatesToRef(cB, Vc, nc)
      }
      getLocalPositionFromAbsolute(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const nc = rB.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(cB, Bc, nc), nc
      }
      getLocalPositionFromAbsoluteToRef(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = oc._TmpMats[0].qqc(this.getAbsoluteMatrix());
        Bc && Vc.multiplyToRef(Bc.getWorldMatrix(), Vc), Vc.invert(), rB.p.TransformCoordinatesToRef(cB, Vc, nc)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const cB = this._skeleton.bones.indexOf(this);
        if (-1 !== cB && this._skeleton.bones.splice(cB, 1), this._parentNode && this._parentNode.children) {
          const cB = this._parentNode.children,
            Bc = cB.indexOf(this); - 1 !== Bc && cB.splice(Bc, 1)
        }
        super.dispose()
      }
    }
    oc._TmpVecs = (0, Dc.c)(2, rB.p.Zero), oc._TmpQuat = rB.f.Identity(), oc._TmpMats = (0, Dc.c)(5, rB.d.Identity), (vB = oc.prototype).copyAnimationRange ?? (vB.copyAnimationRange = (0, Ec.h)("Bone", "copyAnimationRange"));
    var Wc = nc(38141);
    let wc = !1;
    var kB = nc(38012),
      Xc = nc(38356),
      Hc = nc(38362),
      Fc = nc(38358),
      Jc = nc(38175);

    function jB(cB, Bc) {
      const nc = (0, fc.RandomRange)(0, 1);
      qB.g.LerpToRef(Bc.color1, Bc.color2, nc, cB.color)
    }

    function Rc(cB, Bc) {
      Bc.colorDead.subtractToRef(cB.color, Bc._colorDiff), Bc._colorDiff.scaleToRef(1 / cB.lifeTime, cB.colorStep)
    }

    function iB(cB, Bc) {
      cB._properties.currentColorGradient = Bc._colorGradients[0], cB._properties.currentColorGradient.getColorToRef(cB.color), cB._properties.currentColor1.qqc(cB.color), Bc._colorGradients.length > 1 ? Bc._colorGradients[1].getColorToRef(cB._properties.currentColor2) : cB._properties.currentColor2.qqc(cB.color)
    }

    function Kc(cB, Bc) {
      const nc = Bc._colorGradients;
      Vc.l.GetCurrentGradient(Bc._ratio, nc, ((Bc, nc, Vc) => {
        Bc !== cB._properties.currentColorGradient && (cB._properties.currentColor1.qqc(cB._properties.currentColor2), nc.getColorToRef(cB._properties.currentColor2), cB._properties.currentColorGradient = Bc), qB.g.LerpToRef(cB._properties.currentColor1, cB._properties.currentColor2, Vc, cB.color), cB.color.a < 0 && (cB.color.a = 0)
      }))
    }

    function xB(cB, Bc) {
      cB.colorStep.scaleToRef(Bc._scaledUpdateSpeed, Bc._scaledColorStep), cB.color.addInPlace(Bc._scaledColorStep), cB.color.a < 0 && (cB.color.a = 0)
    }

    function dc(cB, Bc) {
      Vc.l.GetCurrentGradient(Bc._ratio, Bc._angularSpeedGradients, ((Bc, nc, Vc) => {
        Bc !== cB._properties.currentAngularSpeedGradient && (cB._properties.currentAngularSpeed1 = cB._properties.currentAngularSpeed2, cB._properties.currentAngularSpeed2 = nc.getFactor(), cB._properties.currentAngularSpeedGradient = Bc), cB.angularSpeed = (0, fc.Lerp)(cB._properties.currentAngularSpeed1, cB._properties.currentAngularSpeed2, Vc)
      }))
    }

    function Ac(cB, Bc) {
      cB.angle += cB.angularSpeed * Bc._scaledUpdateSpeed
    }

    function Gc(cB, Bc) {
      Bc.particleEmitterType.startDirectionFunction(Bc._emitterWorldMatrix, cB.direction, cB, Bc.isLocal, Bc._emitterInverseWorldMatrix)
    }

    function cn(cB, Bc) {
      Bc.startDirectionFunction(Bc._emitterWorldMatrix, cB.direction, cB, Bc.isLocal)
    }

    function BB(cB, Bc) {
      cB._properties.currentVelocityGradient = Bc._velocityGradients[0], cB._properties.currentVelocity1 = cB._properties.currentVelocityGradient.getFactor(), Bc._velocityGradients.length > 1 ? cB._properties.currentVelocity2 = Bc._velocityGradients[1].getFactor() : cB._properties.currentVelocity2 = cB._properties.currentVelocity1
    }

    function nB(cB, Bc) {
      cB._properties.currentLimitVelocityGradient = Bc._limitVelocityGradients[0], cB._properties.currentLimitVelocity1 = cB._properties.currentLimitVelocityGradient.getFactor(), Bc._limitVelocityGradients.length > 1 ? cB._properties.currentLimitVelocity2 = Bc._limitVelocityGradients[1].getFactor() : cB._properties.currentLimitVelocity2 = cB._properties.currentLimitVelocity1
    }

    function VB(cB, Bc) {
      Vc.l.GetCurrentGradient(Bc._ratio, Bc._velocityGradients, ((Bc, nc, Vc) => {
        Bc !== cB._properties.currentVelocityGradient && (cB._properties.currentVelocity1 = cB._properties.currentVelocity2, cB._properties.currentVelocity2 = nc.getFactor(), cB._properties.currentVelocityGradient = Bc), cB._properties.directionScale *= (0, fc.Lerp)(cB._properties.currentVelocity1, cB._properties.currentVelocity2, Vc)
      }))
    }

    function IB(cB, Bc) {
      Vc.l.GetCurrentGradient(Bc._ratio, Bc._limitVelocityGradients, ((nc, Vc, Ic) => {
        nc !== cB._properties.currentLimitVelocityGradient && (cB._properties.currentLimitVelocity1 = cB._properties.currentLimitVelocity2, cB._properties.currentLimitVelocity2 = Vc.getFactor(), cB._properties.currentLimitVelocityGradient = nc);
        const rB = (0, fc.Lerp)(cB._properties.currentLimitVelocity1, cB._properties.currentLimitVelocity2, Ic);
        cB.direction.length() > rB && cB.direction.scaleInPlace(Bc.limitVelocityDamping)
      }))
    }

    function rn(cB) {
      cB.direction.scaleToRef(cB._properties.directionScale, cB._properties.scaledDirection)
    }

    function uB(cB, Bc) {
      Bc.particleEmitterType.startPositionFunction(Bc._emitterWorldMatrix, cB.position, cB, Bc.isLocal)
    }

    function sB(cB, Bc) {
      Bc.startPositionFunction(Bc._emitterWorldMatrix, cB.position, cB, Bc.isLocal)
    }

    function MB(cB, Bc) {
      cB._properties.localPosition ? cB._properties.localPosition.qqc(cB.position) : cB._properties.localPosition = cB.position.clone(), rB.p.TransformCoordinatesToRef(cB._properties.localPosition, Bc._emitterWorldMatrix, cB.position)
    }

    function PB(cB, Bc) {
      Bc.isLocal && cB._properties.localPosition ? (cB._properties.localPosition.addInPlace(cB._properties.scaledDirection), rB.p.TransformCoordinatesToRef(cB._properties.localPosition, Bc._emitterWorldMatrix, cB.position)) : cB.position.addInPlace(cB._properties.scaledDirection)
    }

    function qn(cB, Bc) {
      cB._properties.currentDragGradient = Bc._dragGradients[0], cB._properties.currentDrag1 = cB._properties.currentDragGradient.getFactor(), Bc._dragGradients.length > 1 ? cB._properties.currentDrag2 = Bc._dragGradients[1].getFactor() : cB._properties.currentDrag2 = cB._properties.currentDrag1
    }

    function OB(cB, Bc) {
      Vc.l.GetCurrentGradient(Bc._ratio, Bc._dragGradients, ((Bc, nc, Vc) => {
        Bc !== cB._properties.currentDragGradient && (cB._properties.currentDrag1 = cB._properties.currentDrag2, cB._properties.currentDrag2 = nc.getFactor(), cB._properties.currentDragGradient = Bc);
        const Ic = (0, fc.Lerp)(cB._properties.currentDrag1, cB._properties.currentDrag2, Vc);
        cB._properties.scaledDirection.scaleInPlace(1 - Ic)
      }))
    }

    function TB(cB, Bc) {
      cB._properties.randomNoiseCoordinates1 && cB._properties.randomNoiseCoordinates2 ? (cB._properties.randomNoiseCoordinates1.puc(Math.random(), Math.random(), Math.random()), cB._properties.randomNoiseCoordinates2.puc(Math.random(), Math.random(), Math.random())) : (cB._properties.randomNoiseCoordinates1 = new rB.p(Math.random(), Math.random(), Math.random()), cB._properties.randomNoiseCoordinates2 = new rB.p(Math.random(), Math.random(), Math.random()))
    }

    function fB(cB, Bc) {
      const nc = Bc._noiseTextureData,
        Vc = Bc._noiseTextureSize;
      if (nc && Vc && cB._properties.randomNoiseCoordinates1 && cB._properties.randomNoiseCoordinates2) {
        const Ic = Bc._fetchR(cB._properties.randomNoiseCoordinates1.x, cB._properties.randomNoiseCoordinates1.y, Vc.width, Vc.height, nc),
          uc = Bc._fetchR(cB._properties.randomNoiseCoordinates1.z, cB._properties.randomNoiseCoordinates2.x, Vc.width, Vc.height, nc),
          sc = Bc._fetchR(cB._properties.randomNoiseCoordinates2.y, cB._properties.randomNoiseCoordinates2.z, Vc.width, Vc.height, nc),
          Mc = rB.i.KV[0],
          Pc = rB.i.KV[1];
        Mc.puc((2 * Ic - 1) * Bc.noiseStrength.x, (2 * uc - 1) * Bc.noiseStrength.y, (2 * sc - 1) * Bc.noiseStrength.z), Mc.scaleToRef(Bc._tempScaledUpdateSpeed, Pc), cB.direction.addInPlace(Pc)
      }
    }

    function mn(cB, Bc) {
      Bc.gravity.scaleToRef(Bc._tempScaledUpdateSpeed, Bc._scaledGravity), cB.direction.addInPlace(Bc._scaledGravity)
    }

    function eB(cB, Bc) {
      cB.size = (0, fc.RandomRange)(Bc.minSize, Bc.maxSize), cB.scale.puc((0, fc.RandomRange)(Bc.minScaleX, Bc.maxScaleX), (0, fc.RandomRange)(Bc.minScaleY, Bc.maxScaleY))
    }

    function tn(cB, Bc) {
      cB._properties.currentSizeGradient = Bc._sizeGradients[0], cB._properties.currentSize1 = cB._properties.currentSizeGradient.getFactor(), cB.size = cB._properties.currentSize1, Bc._sizeGradients.length > 1 ? cB._properties.currentSize2 = Bc._sizeGradients[1].getFactor() : cB._properties.currentSize2 = cB._properties.currentSize1, cB.scale.puc((0, fc.RandomRange)(Bc.minScaleX, Bc.maxScaleX), (0, fc.RandomRange)(Bc.minScaleY, Bc.maxScaleY))
    }

    function SB(cB, Bc) {
      const nc = Bc._actualFrame / Bc.targetStopDuration;
      Vc.l.GetCurrentGradient(nc, Bc._startSizeGradients, ((nc, Vc, Ic) => {
        nc !== Bc._currentStartSizeGradient && (Bc._currentStartSize1 = Bc._currentStartSize2, Bc._currentStartSize2 = Vc.getFactor(), Bc._currentStartSizeGradient = nc);
        const rB = (0, fc.Lerp)(Bc._currentStartSize1, Bc._currentStartSize2, Ic);
        cB.scale.scaleInPlace(rB)
      }))
    }

    function yn(cB, Bc) {
      Vc.l.GetCurrentGradient(Bc._ratio, Bc._sizeGradients, ((Bc, nc, Vc) => {
        Bc !== cB._properties.currentSizeGradient && (cB._properties.currentSize1 = cB._properties.currentSize2, cB._properties.currentSize2 = nc.getFactor(), cB._properties.currentSizeGradient = Bc), cB.size = (0, fc.Lerp)(cB._properties.currentSize1, cB._properties.currentSize2, Vc)
      }))
    }

    function zn(cB, Bc) {
      cB.remapData = new rB.t(0, 1, 0, 1)
    }

    function pB(cB, Bc) {
      Bc._colorRemapGradients && Bc._colorRemapGradients.length > 0 && Vc.l.GetCurrentGradient(Bc._ratio, Bc._colorRemapGradients, ((Bc, nc, Vc) => {
        const Ic = (0, fc.Lerp)(Bc.factor1, nc.factor1, Vc),
          rB = (0, fc.Lerp)(Bc.factor2, nc.factor2, Vc);
        cB.remapData.x = Ic, cB.remapData.y = rB - Ic
      })), Bc._alphaRemapGradients && Bc._alphaRemapGradients.length > 0 && Vc.l.GetCurrentGradient(Bc._ratio, Bc._alphaRemapGradients, ((Bc, nc, Vc) => {
        const Ic = (0, fc.Lerp)(Bc.factor1, nc.factor1, Vc),
          rB = (0, fc.Lerp)(Bc.factor2, nc.factor2, Vc);
        cB.remapData.z = Ic, cB.remapData.w = rB - Ic
      }))
    }

    function hB(cB, Bc) {
      const nc = (0, fc.Clamp)(Bc._actualFrame / Bc.targetStopDuration);
      Vc.l.GetCurrentGradient(nc, Bc._lifeTimeGradients, ((Bc, Vc) => {
        const Ic = Bc,
          rB = Vc,
          uc = Ic.getFactor(),
          sc = rB.getFactor(),
          Mc = (nc - Ic.gradient) / (rB.gradient - Ic.gradient);
        cB.lifeTime = (0, fc.Lerp)(uc, sc, Mc)
      })), Bc._emitPower = (0, fc.RandomRange)(Bc.minEmitPower, Bc.maxEmitPower)
    }

    function an(cB, Bc) {
      cB.lifeTime = (0, fc.RandomRange)(Bc.minLifeTime, Bc.maxLifeTime), Bc._emitPower = (0, fc.RandomRange)(Bc.minEmitPower, Bc.maxEmitPower)
    }

    function lB(cB, Bc) {
      0 === Bc._emitPower ? (cB._properties.initialDirection ? cB._properties.initialDirection.qqc(cB.direction) : cB._properties.initialDirection = cB.direction.clone(), cB.direction.set(0, 0, 0)) : (cB._properties.initialDirection = null, cB.direction.scaleInPlace(Bc._emitPower)), cB.direction.addInPlace(Bc._inheritedVelocityOffset)
    }

    function YB(cB, Bc) {
      cB.angularSpeed = (0, fc.RandomRange)(Bc.minAngularSpeed, Bc.maxAngularSpeed), cB.angle = (0, fc.RandomRange)(Bc.minInitialRotation, Bc.maxInitialRotation)
    }

    function LB(cB, Bc) {
      cB._properties.currentAngularSpeedGradient = Bc._angularSpeedGradients[0], cB.angularSpeed = cB._properties.currentAngularSpeedGradient.getFactor(), cB._properties.currentAngularSpeed1 = cB.angularSpeed, Bc._angularSpeedGradients.length > 1 ? cB._properties.currentAngularSpeed2 = Bc._angularSpeedGradients[1].getFactor() : cB._properties.currentAngularSpeed2 = cB._properties.currentAngularSpeed1, cB.angle = (0, fc.RandomRange)(Bc.minInitialRotation, Bc.maxInitialRotation)
    }

    function gn(cB, Bc) {
      cB._properties.initialStartSpriteCellId = Bc.startSpriteCellID, cB._properties.initialEndSpriteCellId = Bc.endSpriteCellID, cB._properties.initialSpriteCellLoop = Bc.spriteCellLoop
    }

    function UB(cB, Bc) {
      cB.previousItem = Bc.previousItem, cB.nextItem = Bc, Bc.previousItem && (Bc.previousItem.nextItem = cB), Bc.previousItem = cB
    }

    function bn(cB, Bc) {
      cB.previousItem = Bc, cB.nextItem = Bc.nextItem, Bc.nextItem && (Bc.nextItem.previousItem = cB), Bc.nextItem = cB
    }

    function ZB(cB) {
      cB.previousItem && (cB.previousItem.nextItem = cB.nextItem), cB.nextItem && (cB.nextItem.previousItem = cB.previousItem)
    }
    var QB = nc(38400);
    class CB extends aB {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(cB) {
        this._startDirectionFunction !== cB && (this._startDirectionFunction = cB, this._directionCreation.process = cB ? cn : Gc)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(cB) {
        this._startPositionFunction !== cB && (this._startPositionFunction = cB, this._positionCreation.process = cB ? sB : uB)
      }
      set onDispose(cB) {
        this._onDisposeObserver && this.XBc.remove(this._onDisposeObserver), this._onDisposeObserver = this.XBc.add(cB)
      }
      get nPc() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(cB) {
        this._useRampGradients !== cB && (this._useRampGradients = cB, this._resetEffect(), cB ? (this._rampCreation = {
          process: zn,
          previousItem: null,
          nextItem: null
        }, bn(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: pB,
          previousItem: null,
          nextItem: null
        }, bn(this._remapGradientProcessing, this._gravityProcessing))) : (ZB(this._rampCreation), ZB(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(cB) {
        this._isLocal !== cB && (this._isLocal = cB, cB ? (this._isLocalCreation = {
          process: MB,
          previousItem: null,
          nextItem: null
        }, bn(this._isLocalCreation, this._positionCreation)) : ZB(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(cB) {
        this._animationSheetEnabled !== cB && (this._animationSheetEnabled = cB, cB ? (this._sheetCreation = {
          process: gn,
          previousItem: null,
          nextItem: null
        }, bn(this._sheetCreation, this._colorDeadCreation)) : ZB(this._sheetCreation), this._reset())
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
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[cB]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[cB] ?? this._customWrappers[0]
      }
      setCustomEffect(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Bc] = new Xc.e(this._engine), this._customWrappers[Bc].effect = cB, this._customWrappers[Bc].drawContext && (this._customWrappers[Bc].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Ic.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(cB) {
        if (this.noiseTexture !== cB) {
          if (this._noiseTexture = cB, !cB) return ZB(this._noiseCreation), void ZB(this._noiseProcessing);
          this._noiseCreation = {
            process: TB,
            previousItem: null,
            nextItem: null
          }, bn(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: fB,
            previousItem: null,
            nextItem: null
          }, bn(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          uc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          sc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Pc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        wc || (wc = !0, Cc(Wc.h, oc)), (0, kB.c)(), super(cB), this._emitterInverseWorldMatrix = rB.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new rB.p, this.XBc = new Ic.c, this.onStoppedObservable = new Ic.c, this.onStartedObservable = new Ic.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new qB.g(0, 0, 0, 0), this._colorDiff = new qB.g(0, 0, 0, 0), this._scaledGravity = rB.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = cB => {}, this.recycleParticle = cB => {
          const Bc = this._particles.pop();
          Bc !== cB && Bc.copyTo(cB), Bc.metadata = null, this._stockParticles.push(Bc)
        }, this._createParticle = () => {
          let cB;
          return 0 !== this._stockParticles.length ? (cB = this._stockParticles.pop(), cB._reset()) : cB = new Yc(this), this._prepareParticle(cB), cB
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Bc, this._epsilon = sc, nc && "Scene" !== nc.getClassName() ? (this._engine = nc, this.defaultProjectionMatrix = rB.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = nc || Mc.d.LastCreatedScene, this._engine = this._scene.RV(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.qD.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: an,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: uB,
          previousItem: null,
          nextItem: null
        }, bn(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: Gc,
          previousItem: null,
          nextItem: null
        }, bn(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: lB,
          previousItem: null,
          nextItem: null
        }, bn(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: eB,
          previousItem: null,
          nextItem: null
        }, bn(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: YB,
          previousItem: null,
          nextItem: null
        }, bn(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: jB,
          previousItem: null,
          nextItem: null
        }, bn(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Rc,
          previousItem: null,
          nextItem: null
        }, bn(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Pc || (this._colorProcessing = {
          process: xB,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Ac,
          previousItem: null,
          nextItem: null
        }, bn(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: rn,
          previousItem: null,
          nextItem: null
        }, bn(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: PB,
          previousItem: null,
          nextItem: null
        }, bn(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: mn,
          previousItem: null,
          nextItem: null
        }, bn(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = uc, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Xc.e(this._engine)
        }, this._customWrappers[0].effect = Vc, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Oc.d, this.updateFunction = cB => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((cB => {
            this._noiseTextureData = cB
          })));
          const Bc = cB === this._particles;
          for (let nc = 0; nc < cB.length; nc++) {
            const Vc = cB[nc];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Ic = Vc.age;
            if (Vc.age += this._tempScaledUpdateSpeed, Vc.age > Vc.lifeTime) {
              const cB = Vc.age - Ic,
                Bc = Vc.lifeTime - Ic;
              this._tempScaledUpdateSpeed = Bc * this._tempScaledUpdateSpeed / cB, Vc.age = Vc.lifeTime
            }
            this._ratio = Vc.age / Vc.lifeTime, Vc._properties.directionScale = this._tempScaledUpdateSpeed;
            let rB = this._updateQueueStart;
            for (; rB;) rB.process(Vc, this), rB = rB.nextItem;
            if (this._isAnimationSheetEnabled && !Pc && Vc.updateCellIndex(), Vc._inheritParticleInfoToSubEmitters(), Vc.age >= Vc.lifeTime) {
              if (this._emitFromParticle(Vc), Vc._properties.attachedSubEmitters) {
                for (const cB of Vc._properties.attachedSubEmitters) cB.particleSystem.disposeOnStop = !0, cB.particleSystem.stop();
                Vc._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Vc), Bc && nc--
            } else;
          }
        }
      }
      serialize(cB) {
        throw new Error("Method not implemented.")
      }
      clone(cB, Bc) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = hB : this._lifeTimeCreation.process = an
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: SB,
          previousItem: null,
          nextItem: null
        }, bn(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (ZB(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(cB) {
        this.targetStopDuration !== cB && (this._targetStopDuration = cB, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(cB, Bc, nc) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, cB, Bc, nc), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(cB) {
        return this._removeFactorGradient(this._lifeTimeGradients, cB), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(cB, Bc, nc) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = tn, this._sizeGradientProcessing = {
          process: yn,
          previousItem: null,
          nextItem: null
        }, UB(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, cB, Bc, nc), this
      }
      removeSizeGradient(cB) {
        return this._removeFactorGradient(this._sizeGradients, cB), 0 === this._sizeGradients?.length && (ZB(this._sizeGradientProcessing), this._sizeCreation.process = eB), this
      }
      addColorRemapGradient(cB, Bc, nc) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, cB, Bc, nc), this
      }
      removeColorRemapGradient(cB) {
        return this._removeFactorGradient(this._colorRemapGradients, cB), this
      }
      addAlphaRemapGradient(cB, Bc, nc) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, cB, Bc, nc), this
      }
      removeAlphaRemapGradient(cB) {
        return this._removeFactorGradient(this._alphaRemapGradients, cB), this
      }
      addAngularSpeedGradient(cB, Bc, nc) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = LB, this._angularSpeedGradientProcessing = {
          process: dc,
          previousItem: null,
          nextItem: null
        }, UB(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, cB, Bc, nc), this
      }
      removeAngularSpeedGradient(cB) {
        return this._removeFactorGradient(this._angularSpeedGradients, cB), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = YB, ZB(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(cB, Bc, nc) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: BB,
          previousItem: null,
          nextItem: null
        }, bn(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: VB,
          previousItem: null,
          nextItem: null
        }, UB(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, cB, Bc, nc), this
      }
      removeVelocityGradient(cB) {
        return this._removeFactorGradient(this._velocityGradients, cB), 0 === this._velocityGradients?.length && (ZB(this._velocityCreation), ZB(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(cB, Bc, nc) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: nB,
          previousItem: null,
          nextItem: null
        }, bn(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: IB,
          previousItem: null,
          nextItem: null
        }, bn(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, cB, Bc, nc), this
      }
      removeLimitVelocityGradient(cB) {
        return this._removeFactorGradient(this._limitVelocityGradients, cB), 0 === this._limitVelocityGradients?.length && (ZB(this._limitVelocityCreation), ZB(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(cB, Bc, nc) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: qn,
          previousItem: null,
          nextItem: null
        }, UB(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: OB,
          previousItem: null,
          nextItem: null
        }, UB(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, cB, Bc, nc), this
      }
      removeDragGradient(cB) {
        return this._removeFactorGradient(this._dragGradients, cB), 0 === this._dragGradients?.length && (ZB(this._dragCreation), ZB(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(cB, Bc, nc) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, cB, Bc, nc), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(cB) {
        return this._removeFactorGradient(this._startSizeGradients, cB), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const cB = new Uint8Array(4 * this._rawTextureWidth),
          Bc = qB.m.Color3[0];
        for (let nc = 0; nc < this._rawTextureWidth; nc++) {
          const Ic = nc / this._rawTextureWidth;
          Vc.l.GetCurrentGradient(Ic, this._rampGradients, ((Vc, Ic, rB) => {
            qB.e.LerpToRef(Vc.color, Ic.color, rB, Bc), cB[4 * nc] = 255 * Bc.r, cB[4 * nc + 1] = 255 * Bc.g, cB[4 * nc + 2] = 255 * Bc.b, cB[4 * nc + 3] = 255
          }))
        }
        this._rampGradientsTexture = sc.c.CreateRGBATexture(cB, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((cB, Bc) => cB.gradient < Bc.gradient ? -1 : cB.gradient > Bc.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(cB, Bc) {
        this._rampGradients || (this._rampGradients = []);
        const nc = new Vc.e(cB, Bc);
        return this._rampGradients.push(nc), this._syncRampGradientTexture(), this
      }
      removeRampGradient(cB) {
        return this._removeGradientAndTexture(cB, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(cB, Bc, nc) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = iB, this._colorProcessing.process = Kc);
        const Ic = new Vc.b(cB, Bc, nc);
        return this._colorGradients.push(Ic), this._colorGradients.sort(((cB, Bc) => cB.gradient < Bc.gradient ? -1 : cB.gradient > Bc.gradient ? 1 : 0)), this
      }
      removeColorGradient(cB) {
        if (!this._colorGradients) return this;
        let Bc = 0;
        for (const nc of this._colorGradients) {
          if (nc.gradient === cB) {
            this._colorGradients.splice(Bc, 1);
            break
          }
          Bc++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = jB, this._colorProcessing.process = xB), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const cB of this._drawWrappers)
            if (cB)
              for (const Bc of cB) Bc?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(cB, Bc, nc, Vc, Ic) {
        return Ic[4 * (((cB = .5 * Math.abs(cB) + .5) * nc % nc | 0) + ((Bc = .5 * Math.abs(Bc) + .5) * Vc % Vc | 0) * nc)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const cB = this._engine,
          Bc = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Bc), this._vertexBuffer = new uc.b(cB, this._vertexData, !0, Bc);
        let nc = 0;
        const Vc = this._vertexBuffer.createVertexBuffer(uc.i.PositionKind, nc, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[uc.i.PositionKind] = Vc, nc += 3;
        const Ic = this._vertexBuffer.createVertexBuffer(uc.i.ColorKind, nc, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[uc.i.ColorKind] = Ic, nc += 4;
        const rB = this._vertexBuffer.createVertexBuffer("angle", nc, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = rB, nc += 1;
        const sc = this._vertexBuffer.createVertexBuffer("size", nc, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = sc, nc += 2, this._isAnimationSheetEnabled) {
          const cB = this._vertexBuffer.createVertexBuffer("cellIndex", nc, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = cB, nc += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const cB = this._vertexBuffer.createVertexBuffer("direction", nc, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = cB, nc += 3
        }
        if (this._useRampGradients) {
          const cB = this._vertexBuffer.createVertexBuffer("remapData", nc, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = cB, nc += 4
        }
        let Mc;
        if (this._useInstancing) {
          const Bc = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new uc.b(cB, Bc, !1, 2), Mc = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Mc = this._vertexBuffer.createVertexBuffer("offset", nc, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Mc, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const cB = [],
          Bc = [];
        let nc = 0;
        for (let Vc = 0; Vc < this._capacity; Vc++) cB.push(nc), cB.push(nc + 1), cB.push(nc + 2), cB.push(nc), cB.push(nc + 2), cB.push(nc + 3), Bc.push(nc, nc + 1, nc + 1, nc + 2, nc + 2, nc + 3, nc + 3, nc, nc, nc + 3), nc += 4;
        this._indexBuffer = this._engine.createIndexBuffer(cB), this._linesIndexBuffer = this._engine.createIndexBuffer(Bc)
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
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (cB) return this.startDelay = cB, void setTimeout((() => {
          this.start(0)
        }), cB);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const cB = this.noiseTexture;
          if (cB && cB.onGeneratedObservable) cB.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let Bc = 0; Bc < this.preWarmCycles; Bc++) this.animate(!0), cB.render()
            }))
          }));
          else
            for (let Bc = 0; Bc < this.preWarmCycles; Bc++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(cB))
      }
      _postStop(cB) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(cB, Bc, nc, Vc) {
        let Ic = cB * this._vertexBufferSize;
        const uc = rB.i.KV[0].qqc(this._scene?.floatingOriginOffset || rB.p.ZeroReadOnly);
        if (this._vertexData[Ic++] = Bc.position.x + this.worldOffset.x - uc.x, this._vertexData[Ic++] = Bc.position.y + this.worldOffset.y - uc.y, this._vertexData[Ic++] = Bc.position.z + this.worldOffset.z - uc.z, this._vertexData[Ic++] = Bc.color.r, this._vertexData[Ic++] = Bc.color.g, this._vertexData[Ic++] = Bc.color.b, this._vertexData[Ic++] = Bc.color.a, this._vertexData[Ic++] = Bc.angle, this._vertexData[Ic++] = Bc.scale.x * Bc.size, this._vertexData[Ic++] = Bc.scale.y * Bc.size, this._isAnimationSheetEnabled && (this._vertexData[Ic++] = Bc.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Ic++] = Bc.direction.x, this._vertexData[Ic++] = Bc.direction.y, this._vertexData[Ic++] = Bc.direction.z);
        else if (Bc._properties.initialDirection) {
          let cB = Bc._properties.initialDirection;
          this.isLocal && (rB.p.TransformNormalToRef(cB, this._emitterWorldMatrix, rB.i.KV[0]), cB = rB.i.KV[0]), 0 === cB.x && 0 === cB.z && (cB.x = .001), this._vertexData[Ic++] = cB.x, this._vertexData[Ic++] = cB.y, this._vertexData[Ic++] = cB.z
        } else {
          let cB = Bc.direction;
          this.isLocal && (rB.p.TransformNormalToRef(cB, this._emitterWorldMatrix, rB.i.KV[0]), cB = rB.i.KV[0]), 0 === cB.x && 0 === cB.z && (cB.x = .001), this._vertexData[Ic++] = cB.x, this._vertexData[Ic++] = cB.y, this._vertexData[Ic++] = cB.z
        }
        this._useRampGradients && Bc.remapData && (this._vertexData[Ic++] = Bc.remapData.x, this._vertexData[Ic++] = Bc.remapData.y, this._vertexData[Ic++] = Bc.remapData.z, this._vertexData[Ic++] = Bc.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === nc ? nc = this._epsilon : 1 === nc && (nc = 1 - this._epsilon), 0 === Vc ? Vc = this._epsilon : 1 === Vc && (Vc = 1 - this._epsilon)), this._vertexData[Ic++] = nc, this._vertexData[Ic] = Vc)
      }
      _prepareParticle(cB) {}
      _createNewOnes(cB) {
        let Bc;
        for (let nc = 0; nc < cB && this._particles.length !== this._capacity; nc++) {
          Bc = this._createParticle(), this._particles.push(Bc);
          let cB = this._createQueueStart;
          for (; cB;) cB.process(Bc, this), cB = cB.nextItem;
          Bc._inheritParticleInfoToSubEmitters()
        }
      }
      _update(cB) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const cB = this.emitter;
          this._emitterWorldMatrix = cB.getWorldMatrix()
        } else {
          const cB = this.emitter;
          this._emitterWorldMatrix = rB.d.Translation(cB.x, cB.y, cB.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(cB)
      }
      static _GetAttributeNamesOrOptions() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = [uc.i.PositionKind, uc.i.ColorKind, "angle", "offset", "size"];
        return cB && Vc.push("cellIndex"), Bc || Vc.push("direction"), nc && Vc.push("remapData"), Vc
      }
      static _GetEffectCreationOptions() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Hc.b)(Vc), cB && Vc.push("particlesInfos"), Bc && Vc.push("logarithmicDepthConstant"), nc && (Vc.push("vFogInfos"), Vc.push("vFogColor")), Vc
      }
      fillDefines(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Hc.i)(this, this._scene, cB), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && cB.push("#define FOG")), this._isAnimationSheetEnabled && cB.push("#define ANIMATESHEET"), this.useLogarithmicDepth && cB.push("#define LOGARITHMICDEPTH"), Bc === aB.BLENDMODE_MULTIPLY && cB.push("#define BLENDMULTIPLYMODE"), this.isLocal && cB.push("#define LOCAL"), this._useRampGradients && cB.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (cB.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            cB.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            cB.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && cB.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            cB.push("#define BILLBOARDMODE_ALL")
        }
        nc && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), cB.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(cB, Bc, nc) {
        Bc.push(...CB._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), cB.push(...CB._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), nc.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Jc.e)(cB, this._imageProcessingConfigurationDefines), (0, Jc.c)(nc, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(cB) {
        var Bc;
        const nc = this._getCustomDrawWrapper(cB);
        if (nc?.effect) return nc;
        const Vc = [];
        this.fillDefines(Vc, cB);
        const rB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          uc = QB.b._PrepareStringDefines(rB, Vc),
          sc = uc ? QB.b.GetConfiguration(rB) : void 0;
        let Mc = this._drawWrappers[rB];
        Mc || (Mc = this._drawWrappers[rB] = [], 0 === rB || this._renderPassObserver || (this._renderPassObserver = ((Bc = this._engine)._onReleaseRenderPassObservable ?? (Bc._onReleaseRenderPassObservable = new Ic.c)).add((cB => {
          const Bc = this._drawWrappers[cB];
          if (Bc) {
            for (const cB of Bc) cB?.dispose();
            delete this._drawWrappers[cB]
          }
        }))));
        let Pc = Mc[cB];
        Pc || (Pc = new Xc.e(this._engine), Pc.drawContext && (Pc.drawContext.useInstancing = this._useInstancing), Mc[cB] = Pc);
        const qB = Vc.join("\n");
        if (Pc.defines !== qB) {
          const cB = [],
            Bc = [],
            nc = [];
          this.fillUniformsAttributesAndSamplerNames(Bc, cB, nc), uc && (Bc.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== sc?.defines.PREPASS_LOCAL_POSITION_INDEX && Bc.push("inverseEmitterWM", "geometryWorldOffset")), Pc.setEffect(this._engine.createEffect("particles", {
            attributes: cB,
            uniformsNames: Bc,
            samplers: nc,
            defines: qB,
            shaderLanguage: this._shaderLanguage,
            multiTarget: uc,
            indexParameters: uc ? {
              buffersCount: sc?._mrtCount ?? 0
            } : void 0
          }, this._engine), qB)
        }
        return Pc
      }
      _bindGeometryRendering(cB) {
        const Bc = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          nc = QB.b.GetConfiguration(Bc);
        if (!nc?._defines) return;
        cB.setFloat("objectId", 0), cB.setInt("meshBlendTag", 0);
        const Vc = this._scene?.activeCamera;
        if (cB.setFloat2("cameraInfo", Vc?.minZ ?? 0, Vc?.maxZ ?? 1), this.isLocal && void 0 !== nc.defines.PREPASS_LOCAL_POSITION_INDEX) {
          cB.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Bc = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || rB.p.ZeroReadOnly, rB.i.KV[0]);
          cB.setVector3("geometryWorldOffset", Bc)
        }
      }
      animate() {
        let cB, Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Bc && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Bc ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) cB = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Bc = this._calculateEmitRate();
            cB = Bc * this._scaledUpdateSpeed | 0, this._newPartsExcess += Bc * this._scaledUpdateSpeed - cB
          }
          if (this._newPartsExcess > 1 && (cB += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? cB = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(cB), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Bc) {
            let cB = 0;
            for (let Bc = 0; Bc < this._particles.length; Bc++) {
              const nc = this._particles[Bc];
              this._appendParticleVertices(cB, nc), cB += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const cB = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Bc = this._particles.length;
                Bc < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Bc * cB, this._fixedCapacityHighWaterMark * cB), this._fixedCapacityHighWaterMark = Bc, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const cB = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * cB), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let cB = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const Bc = this._actualFrame / this.targetStopDuration;
          Vc.l.GetCurrentGradient(Bc, this._emitRateGradients, ((Bc, nc, Vc) => {
            Bc !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = nc.getFactor(), this._currentEmitRateGradient = Bc), cB = (0, fc.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Vc)
          }))
        }
        return cB
      }
      _appendParticleVertices(cB, Bc) {
        this._appendParticleVertex(cB++, Bc, 0, 0), this._useInstancing || (this._appendParticleVertex(cB++, Bc, 1, 0), this._appendParticleVertex(cB++, Bc, 1, 1), this._appendParticleVertex(cB, Bc, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !CB.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([nc.e(321).then((() => nc(59125))), nc.e(315).then((() => nc(59127)))])) : await Promise.all([nc.e(304).then((() => nc(59136))), Promise.all([nc.e(297), nc.e(333)]).then((() => nc(59143)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== aB.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(aB.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(aB.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(cB) {
        const Bc = this._getWrapper(cB),
          nc = Bc.effect,
          Vc = this._engine;
        Vc.enableEffect(Bc);
        const Ic = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        nc.setTexture("diffuseSampler", this.particleTexture), nc.setMatrix("view", Ic);
        const uc = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (nc.setMatrix("projection", uc), this._isAnimationSheetEnabled && this.particleTexture) {
          const cB = this.particleTexture.getBaseSize();
          nc.setFloat3("particlesInfos", this.spriteCellWidth / cB.width, this.spriteCellHeight / cB.height, this.spriteCellWidth / cB.width)
        }
        if (nc.setVector2("translationPivot", this.translationPivot), nc.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const cB = this._scene.activeCamera;
          nc.setVector3("eyePosition", cB.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), nc.setTexture("rampSampler", this._rampGradientsTexture));
        const sc = nc.defines;
        this._scene && ((0, Hc.d)(nc, this, this._scene), this.applyFog && (0, Fc.j)(this._scene, void 0, nc)), sc.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Ic.invertToRef(rB.i.Matrix[0]), nc.setMatrix("invView", rB.i.Matrix[0])), nc._multiTarget && this._bindGeometryRendering(nc), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Vc.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, nc) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, nc)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Vc.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, nc) : Vc.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, nc), this.useLogarithmicDepth && this._scene && (0, Fc.s)(sc, nc, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(nc), this._setEngineBasedOnBlendMode(cB), nc._multiTarget && QB.b._BindZeroAlphaDiscard(Vc, nc);
        let Mc = !1;
        try {
          QB.b._BindAttachmentsForEffect(Vc, nc) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(nc), this._useInstancing ? this._scene?.forceWireframe ? Vc.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Vc.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Vc.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Vc.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Mc = !0)
        } finally {
          QB.b._RestoreAttachments(Vc)
        }
        return Mc ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const cB = this._engine;
        let Bc;
        return cB.setState && (cB.setState(!1), this.forceDepthWrite && cB.setDepthWrite(!0)), Bc = this.blendMode === aB.BLENDMODE_MULTIPLYADD ? this._render(aB.BLENDMODE_MULTIPLY) + this._render(aB.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Bc
      }
      _onDispose() {}
      dispose() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), cB && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), cB && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Bc, nc), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const cB = this._scene.qD.indexOf(this);
          cB > -1 && this._scene.qD.splice(cB, 1), this._scene._activeParticleSystems.dispose()
        }
        this.XBc.notifyObservers(this), this.XBc.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    CB.ForceGLSL = !1;
    var vn, DB = nc(35799);
    ! function(cB) {
      cB[cB.ATTACHED = 0] = "ATTACHED", cB[cB.END = 1] = "END"
    }(vn || (vn = {}));
    class NB {
      constructor(cB) {
        if (this.particleSystem = cB, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !cB.emitter || !cB.emitter.dispose) {
          const Bc = (0, DB.b)("BABYLON.AbstractMesh");
          cB.emitter = new Bc("SubemitterSystemEmitter", cB.knc()), cB._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let cB = this.particleSystem.emitter;
        if (cB) {
          if (cB instanceof rB.p) cB = cB.clone();
          else if (-1 !== cB.getClassName().indexOf("Mesh")) {
            cB = new((0, DB.b)("BABYLON.Mesh"))("", cB.knc()), cB.isVisible = !1
          }
        } else cB = new rB.p;
        const Bc = new NB(this.particleSystem.clone(this.particleSystem.name, cB));
        return Bc.particleSystem.name += "Clone", Bc.type = this.type, Bc.inheritDirection = this.inheritDirection, Bc.inheritedVelocityAmount = this.inheritedVelocityAmount, Bc.particleSystem._disposeEmitterOnDispose = !0, Bc.particleSystem.disposeOnStop = !0, Bc
      }
      serialize() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = {};
        return Bc.type = this.type, Bc.inheritDirection = this.inheritDirection, Bc.inheritedVelocityAmount = this.inheritedVelocityAmount, Bc.particleSystem = this.particleSystem.serialize(cB), Bc
      }
      static _ParseParticleSystem(cB, Bc, nc) {
        throw (0, Ec.k)("ParseParticle")
      }
      static Parse(cB, Bc, nc) {
        const Vc = cB.particleSystem,
          Ic = new NB(NB._ParseParticleSystem(Vc, Bc, nc, !0));
        return Ic.type = cB.type, Ic.inheritDirection = cB.inheritDirection, Ic.inheritedVelocityAmount = cB.inheritedVelocityAmount, Ic.particleSystem._isSubEmitter = !0, Ic
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var EB = nc(37965),
      oB = nc(38068);
    const WB = () => {};
    class wB {
      constructor() {
        this.particlePositionGenerator = WB, this.particleDestinationGenerator = WB, this.particleDirectionGenerator = WB
      }
      startDirectionFunction(cB, Bc, nc, Vc) {
        const Ic = rB.i.KV[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== WB) this.particleDirectionGenerator(-1, nc, Ic);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== WB) {
          this.particleDestinationGenerator(-1, nc, Ic);
          const cB = rB.i.KV[1];
          Ic.subtractToRef(nc.position, cB), cB.scaleToRef(1 / nc.lifeTime, Ic)
        } else Ic.set(0, 0, 0);
        Vc ? Bc.qqc(Ic) : rB.p.TransformNormalToRef(Ic, cB, Bc)
      }
      startPositionFunction(cB, Bc, nc, Vc) {
        const Ic = rB.i.KV[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== WB ? this.particlePositionGenerator(-1, nc, Ic) : Ic.set(0, 0, 0), Vc ? Bc.qqc(Ic) : rB.p.TransformCoordinatesToRef(Ic, cB, Bc)
      }
      clone() {
        const cB = new wB;
        return Tc.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {}
      buildUniformLayout(cB) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const cB = {};
        return cB.type = this.getClassName(), cB.particlePositionGenerator = this.particlePositionGenerator, cB.particleDestinationGenerator = this.particleDestinationGenerator, cB
      }
      parse(cB) {
        cB.particlePositionGenerator && (this.particlePositionGenerator = cB.particlePositionGenerator), cB.particleDestinationGenerator && (this.particleDestinationGenerator = cB.particleDestinationGenerator)
      }
    }
    const kn = rB.p.Zero(),
      XB = rB.p.Zero(),
      HB = rB.p.Zero();
    class FB {
      constructor() {
        this.strength = 0, this.position = rB.p.Zero()
      }
      _processParticle(cB, Bc) {
        this.position.subtractToRef(cB.position, kn);
        const nc = kn.lengthSquared() + 1;
        kn.normalize().scaleToRef(this.strength / nc, XB), XB.scaleToRef(Bc._tempScaledUpdateSpeed, HB), cB.direction.addInPlace(HB)
      }
      serialize() {
        return {
          position: this.position.KPc(),
          strength: this.strength
        }
      }
    }
    const JB = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class jn extends CB {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = cB => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Bc = Math.floor(Math.random() * this._subEmitters.length);
          for (const nc of this._subEmitters[Bc])
            if (1 === nc.type) {
              const Bc = nc.clone();
              cB._inheritParticleInfoToSubEmitter(Bc), Bc.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Bc.particleSystem), Bc.particleSystem.start()
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
      set flowMap(cB) {
        this._flowMap !== cB && (this._flowMap = cB, this._flowMapUpdate && (ZB(this._flowMapUpdate), this._flowMapUpdate = null), cB && (this._flowMapUpdate = {
          process: cB => {
            const Bc = this.knc()?.getTransformMatrix();
            this._flowMap._processParticle(cB, this.flowMapStrength * this._tempScaledUpdateSpeed, Bc)
          },
          previousItem: null,
          nextItem: null
        }, bn(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(cB) {
        super.addAttractor(cB), 1 === this._attractors.length && (this._attractorUpdate = {
          process: cB => {
            for (const Bc of this._attractors) Bc._processParticle(cB, this)
          },
          previousItem: null,
          nextItem: null
        }, bn(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(cB) {
        super.removeAttractor(cB), 0 === this._attractors.length && this._attractorUpdate && ZB(this._attractorUpdate)
      }
      start() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(cB)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const cB of this.subEmitters) cB instanceof jn ? this._subEmitters.push([new NB(cB)]) : cB instanceof NB ? this._subEmitters.push([cB]) : cB instanceof Array && this._subEmitters.push(cB)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const cB of this.activeSubSystems) cB.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const cB = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== cB && this._rootParticleSystem.activeSubSystems.splice(cB, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(cB) {
        cB && this._stopSubEmitters()
      }
      _prepareParticle(cB) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const Bc = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          cB._properties.attachedSubEmitters = [];
          for (const nc of Bc)
            if (0 === nc.type) {
              const Bc = nc.clone();
              cB._properties.attachedSubEmitters.push(Bc), Bc.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), cB && this.particles)
          for (const nc of this.particles)
            if (nc._properties.attachedSubEmitters)
              for (let cB = nc._properties.attachedSubEmitters.length - 1; cB >= 0; cB -= 1) nc._properties.attachedSubEmitters[cB].dispose();
        if (Bc && this.activeSubSystems)
          for (let nc = this.activeSubSystems.length - 1; nc >= 0; nc -= 1) this.activeSubSystems[nc].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let cB = 0; cB < this._subEmitters.length; cB++)
            for (const Bc of this._subEmitters[cB]) Bc.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(cB, Bc, nc, Vc) {
        let Ic;
        Ic = nc instanceof EB.e ? null : nc;
        const uc = (0, DB.b)("BABYLON.Texture");
        if (uc && Ic)
          if (cB.texture) Bc.particleTexture = uc.Parse(cB.texture, Ic, Vc);
          else if (cB.textureName) {
          const nc = cB.textureSettings;
          if (Bc.particleTexture = new uc(Vc + cB.textureName, Ic, !1, void 0 === cB.invertY || cB.invertY, nc ? nc.samplingMode : void 0), Bc.particleTexture.name = cB.textureName, nc) {
            const cB = Bc.particleTexture;
            for (const Bc of JB) void 0 !== nc[Bc] && (cB[Bc] = nc[Bc])
          }
        }
        if (cB.emitterId || 0 === cB.emitterId || void 0 !== cB.emitter ? (cB.emitterId || 0 === cB.emitterId) && Ic ? (Bc.emitter = Ic.getLastMeshById(cB.emitterId), Bc.emitter || (Bc.emitter = rB.p.Zero())) : Bc.emitter = rB.p.FromArray(cB.emitter) : Bc.emitter = rB.p.Zero(), Bc.isLocal = !!cB.isLocal, void 0 !== cB.renderingGroupId && (Bc.renderingGroupId = cB.renderingGroupId), void 0 !== cB.isBillboardBased && (Bc.isBillboardBased = cB.isBillboardBased), void 0 !== cB.billboardMode && (Bc.billboardMode = cB.billboardMode), void 0 !== cB.useLogarithmicDepth && (Bc.useLogarithmicDepth = cB.useLogarithmicDepth), cB.animations) {
          for (let nc = 0; nc < cB.animations.length; nc++) {
            const Vc = cB.animations[nc],
              Ic = (0, DB.b)("BABYLON.Animation");
            Ic && Bc.animations.push(Ic.Parse(Vc))
          }
          Bc.beginAnimationOnStart = cB.beginAnimationOnStart, Bc.beginAnimationFrom = cB.beginAnimationFrom, Bc.beginAnimationTo = cB.beginAnimationTo, Bc.beginAnimationLoop = cB.beginAnimationLoop
        }
        if (cB.autoAnimate && Ic && Ic.beginAnimation(Bc, cB.autoAnimateFrom, cB.autoAnimateTo, cB.autoAnimateLoop, cB.autoAnimateSpeed || 1), Bc.startDelay = 0 | cB.startDelay, Bc.minAngularSpeed = cB.minAngularSpeed, Bc.maxAngularSpeed = cB.maxAngularSpeed, Bc.minSize = cB.minSize, Bc.maxSize = cB.maxSize, cB.minScaleX && (Bc.minScaleX = cB.minScaleX, Bc.maxScaleX = cB.maxScaleX, Bc.minScaleY = cB.minScaleY, Bc.maxScaleY = cB.maxScaleY), void 0 !== cB.preWarmCycles && (Bc.preWarmCycles = cB.preWarmCycles, Bc.preWarmStepOffset = cB.preWarmStepOffset), void 0 !== cB.minInitialRotation && (Bc.minInitialRotation = cB.minInitialRotation, Bc.maxInitialRotation = cB.maxInitialRotation), Bc.minLifeTime = cB.minLifeTime, Bc.maxLifeTime = cB.maxLifeTime, Bc.minEmitPower = cB.minEmitPower, Bc.maxEmitPower = cB.maxEmitPower, Bc.emitRate = cB.emitRate, Bc.gravity = rB.p.FromArray(cB.gravity), cB.noiseStrength && (Bc.noiseStrength = rB.p.FromArray(cB.noiseStrength)), Bc.color1 = qB.g.FromArray(cB.color1), Bc.color2 = qB.g.FromArray(cB.color2), Bc.colorDead = qB.g.FromArray(cB.colorDead), Bc.updateSpeed = cB.updateSpeed, Bc.targetStopDuration = cB.targetStopDuration, Bc.blendMode = cB.blendMode, cB.colorGradients)
          for (const rB of cB.colorGradients) Bc.addColorGradient(rB.gradient, qB.g.FromArray(rB.color1), rB.color2 ? qB.g.FromArray(rB.color2) : void 0);
        if (cB.rampGradients) {
          for (const nc of cB.rampGradients) Bc.addRampGradient(nc.gradient, qB.e.FromArray(nc.color));
          Bc.useRampGradients = cB.useRampGradients
        }
        if (cB.colorRemapGradients)
          for (const rB of cB.colorRemapGradients) Bc.addColorRemapGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.alphaRemapGradients)
          for (const rB of cB.alphaRemapGradients) Bc.addAlphaRemapGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.sizeGradients)
          for (const rB of cB.sizeGradients) Bc.addSizeGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.angularSpeedGradients)
          for (const rB of cB.angularSpeedGradients) Bc.addAngularSpeedGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.velocityGradients)
          for (const rB of cB.velocityGradients) Bc.addVelocityGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.dragGradients)
          for (const rB of cB.dragGradients) Bc.addDragGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.emitRateGradients)
          for (const rB of cB.emitRateGradients) Bc.addEmitRateGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.startSizeGradients)
          for (const rB of cB.startSizeGradients) Bc.addStartSizeGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.lifeTimeGradients)
          for (const rB of cB.lifeTimeGradients) Bc.addLifeTimeGradient(rB.gradient, void 0 !== rB.factor1 ? rB.factor1 : rB.factor, rB.factor2);
        if (cB.limitVelocityGradients) {
          for (const nc of cB.limitVelocityGradients) Bc.addLimitVelocityGradient(nc.gradient, void 0 !== nc.factor1 ? nc.factor1 : nc.factor, nc.factor2);
          Bc.limitVelocityDamping = cB.limitVelocityDamping
        }
        if (cB.noiseTexture && Ic) {
          const nc = (0, DB.b)("BABYLON.ProceduralTexture");
          Bc.noiseTexture = nc.Parse(cB.noiseTexture, Ic, Vc)
        }
        let sc;
        if (cB.particleEmitterType) {
          switch (cB.particleEmitterType.type) {
            case "SphereParticleEmitter":
              sc = new tB;
              break;
            case "SphereDirectedParticleEmitter":
              sc = new Sc;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              sc = new zB;
              break;
            case "ConeDirectedParticleEmitter":
              sc = new pc;
              break;
            case "CylinderParticleEmitter":
              sc = new yB.f;
              break;
            case "CylinderDirectedParticleEmitter":
              sc = new yB.c;
              break;
            case "HemisphericParticleEmitter":
              sc = new ec;
              break;
            case "PointParticleEmitter":
              sc = new mB;
              break;
            case "MeshParticleEmitter":
              sc = new hc;
              break;
            case "CustomParticleEmitter":
              sc = new wB;
              break;
            default:
              sc = new Oc.d
          }
          sc.parse(cB.particleEmitterType, Ic)
        } else sc = new Oc.d, sc.parse(cB, Ic);
        Bc.particleEmitterType = sc, Bc.startSpriteCellID = cB.startSpriteCellID, Bc.endSpriteCellID = cB.endSpriteCellID, Bc.spriteCellLoop = cB.spriteCellLoop ?? !0, Bc.spriteCellWidth = cB.spriteCellWidth, Bc.spriteCellHeight = cB.spriteCellHeight, Bc.spriteCellChangeSpeed = cB.spriteCellChangeSpeed, Bc.spriteRandomStartCell = cB.spriteRandomStartCell, Bc.disposeOnStop = cB.disposeOnStop ?? !1, Bc.manualEmitCount = cB.manualEmitCount ?? -1
      }
      static Parse(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ic = arguments.length > 4 ? arguments[4] : void 0;
        const uc = cB.name;
        let sc, Mc, Pc = null,
          Oc = null;
        if (Bc instanceof EB.e ? sc = Bc : (Mc = Bc, sc = Mc.RV()), cB.customShader && (0, Ec.c)(sc.createEffectForParticles)) {
          Oc = cB.customShader;
          const Bc = Oc.shaderOptions.defines.length > 0 ? Oc.shaderOptions.defines.join("\n") : "";
          Pc = sc.createEffectForParticles(Oc.shaderPath.fragmentElement, Oc.shaderOptions.uniforms, Oc.shaderOptions.samplers, Bc)
        }
        const Tc = new jn(uc, Ic || cB.Qc, Bc, Pc, cB.isAnimationSheetEnabled);
        if (Tc.customShader = Oc, Tc._rootUrl = nc, cB.id && (Tc.id = cB.id), cB.subEmitters) {
          Tc.subEmitters = [];
          for (const Vc of cB.subEmitters) {
            const cB = [];
            for (const Ic of Vc) cB.push(NB.Parse(Ic, Bc, nc));
            Tc.subEmitters.push(cB)
          }
        }
        if (cB.attractors)
          for (const qB of cB.attractors) {
            const cB = new FB;
            cB.position = rB.p.FromArray(qB.position), cB.strength = qB.strength, Tc.addAttractor(cB)
          }
        return jn._Parse(cB, Tc, Bc, nc), cB.textureMask && (Tc.textureMask = qB.g.FromArray(cB.textureMask)), cB.worldOffset && (Tc.worldOffset = rB.p.FromArray(cB.worldOffset)), cB.preventAutoStart && (Tc.preventAutoStart = cB.preventAutoStart), cB.metadata && (Tc.metadata = cB.metadata), Vc || Tc.preventAutoStart || Tc.start(), Tc
      }
      serialize() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = {};
        if (jn._Serialize(Bc, this, cB), Bc.textureMask = this.textureMask.KPc(), Bc.customShader = this.customShader, Bc.preventAutoStart = this.preventAutoStart, Bc.worldOffset = this.worldOffset.KPc(), this.metadata && (Bc.metadata = this.metadata), this.subEmitters) {
          Bc.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const nc of this._subEmitters) {
            const Vc = [];
            for (const Bc of nc) Bc.particleSystem.doNotSerialize || Vc.push(Bc.serialize(cB));
            Bc.subEmitters.push(Vc)
          }
        }
        if (this._attractors && this._attractors.length) {
          Bc.attractors = [];
          for (const cB of this._attractors) Bc.attractors.push(cB.serialize())
        }
        return Bc
      }
      static _Serialize(cB, Bc, nc) {
        if (cB.name = Bc.name, cB.id = Bc.id, cB.Qc = Bc.getCapacity(), cB.disposeOnStop = Bc.disposeOnStop, cB.manualEmitCount = Bc.manualEmitCount, Bc.emitter.position) {
          const nc = Bc.emitter;
          cB.emitterId = nc.id
        } else {
          const nc = Bc.emitter;
          cB.emitter = nc.KPc()
        }
        if (Bc.particleEmitterType && (cB.particleEmitterType = Bc.particleEmitterType.serialize()), Bc.particleTexture)
          if (nc) cB.texture = Bc.particleTexture.serialize();
          else {
            const nc = Bc.particleTexture;
            cB.textureName = Bc.particleTexture.name, cB.invertY = !!nc._invertY;
            const Vc = {};
            for (const cB of JB) Vc[cB] = nc[cB];
            Vc.samplingMode = nc.samplingMode, cB.textureSettings = Vc
          } cB.isLocal = Bc.isLocal, oB.e.AppendSerializedAnimations(Bc, cB), cB.beginAnimationOnStart = Bc.beginAnimationOnStart, cB.beginAnimationFrom = Bc.beginAnimationFrom, cB.beginAnimationTo = Bc.beginAnimationTo, cB.beginAnimationLoop = Bc.beginAnimationLoop, cB.startDelay = Bc.startDelay, cB.renderingGroupId = Bc.renderingGroupId, cB.isBillboardBased = Bc.isBillboardBased, cB.billboardMode = Bc.billboardMode, cB.minAngularSpeed = Bc.minAngularSpeed, cB.maxAngularSpeed = Bc.maxAngularSpeed, cB.minSize = Bc.minSize, cB.maxSize = Bc.maxSize, cB.minScaleX = Bc.minScaleX, cB.maxScaleX = Bc.maxScaleX, cB.minScaleY = Bc.minScaleY, cB.maxScaleY = Bc.maxScaleY, cB.minEmitPower = Bc.minEmitPower, cB.maxEmitPower = Bc.maxEmitPower, cB.minLifeTime = Bc.minLifeTime, cB.maxLifeTime = Bc.maxLifeTime, cB.emitRate = Bc.emitRate, cB.gravity = Bc.gravity.KPc(), cB.noiseStrength = Bc.noiseStrength.KPc(), cB.color1 = Bc.color1.KPc(), cB.color2 = Bc.color2.KPc(), cB.colorDead = Bc.colorDead.KPc(), cB.updateSpeed = Bc.updateSpeed, cB.targetStopDuration = Bc.targetStopDuration, cB.blendMode = Bc.blendMode, cB.preWarmCycles = Bc.preWarmCycles, cB.preWarmStepOffset = Bc.preWarmStepOffset, cB.minInitialRotation = Bc.minInitialRotation, cB.maxInitialRotation = Bc.maxInitialRotation, cB.startSpriteCellID = Bc.startSpriteCellID, cB.spriteCellLoop = Bc.spriteCellLoop, cB.endSpriteCellID = Bc.endSpriteCellID, cB.spriteCellChangeSpeed = Bc.spriteCellChangeSpeed, cB.spriteCellWidth = Bc.spriteCellWidth, cB.spriteCellHeight = Bc.spriteCellHeight, cB.spriteRandomStartCell = Bc.spriteRandomStartCell, cB.isAnimationSheetEnabled = Bc.isAnimationSheetEnabled, cB.useLogarithmicDepth = Bc.useLogarithmicDepth;
        const Vc = Bc.getColorGradients();
        if (Vc) {
          cB.colorGradients = [];
          for (const Bc of Vc) {
            const nc = {
              gradient: Bc.gradient,
              color1: Bc.color1.KPc()
            };
            Bc.color2 ? nc.color2 = Bc.color2.KPc() : nc.color2 = Bc.color1.KPc(), cB.colorGradients.push(nc)
          }
        }
        const Ic = Bc.getRampGradients();
        if (Ic) {
          cB.rampGradients = [];
          for (const Bc of Ic) {
            const nc = {
              gradient: Bc.gradient,
              color: Bc.color.KPc()
            };
            cB.rampGradients.push(nc)
          }
          cB.useRampGradients = Bc.useRampGradients
        }
        const rB = Bc.getColorRemapGradients();
        if (rB) {
          cB.colorRemapGradients = [];
          for (const Bc of rB) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.colorRemapGradients.push(nc)
          }
        }
        const uc = Bc.getAlphaRemapGradients();
        if (uc) {
          cB.alphaRemapGradients = [];
          for (const Bc of uc) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.alphaRemapGradients.push(nc)
          }
        }
        const sc = Bc.getSizeGradients();
        if (sc) {
          cB.sizeGradients = [];
          for (const Bc of sc) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.sizeGradients.push(nc)
          }
        }
        const Mc = Bc.getAngularSpeedGradients();
        if (Mc) {
          cB.angularSpeedGradients = [];
          for (const Bc of Mc) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.angularSpeedGradients.push(nc)
          }
        }
        const Pc = Bc.getVelocityGradients();
        if (Pc) {
          cB.velocityGradients = [];
          for (const Bc of Pc) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.velocityGradients.push(nc)
          }
        }
        const qB = Bc.getDragGradients();
        if (qB) {
          cB.dragGradients = [];
          for (const Bc of qB) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.dragGradients.push(nc)
          }
        }
        const Oc = Bc.getEmitRateGradients();
        if (Oc) {
          cB.emitRateGradients = [];
          for (const Bc of Oc) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.emitRateGradients.push(nc)
          }
        }
        const Tc = Bc.getStartSizeGradients();
        if (Tc) {
          cB.startSizeGradients = [];
          for (const Bc of Tc) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.startSizeGradients.push(nc)
          }
        }
        const fc = Bc.getLifeTimeGradients();
        if (fc) {
          cB.lifeTimeGradients = [];
          for (const Bc of fc) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.lifeTimeGradients.push(nc)
          }
        }
        const mB = Bc.getLimitVelocityGradients();
        if (mB) {
          cB.limitVelocityGradients = [];
          for (const Bc of mB) {
            const nc = {
              gradient: Bc.gradient,
              factor1: Bc.factor1
            };
            void 0 !== Bc.factor2 ? nc.factor2 = Bc.factor2 : nc.factor2 = Bc.factor1, cB.limitVelocityGradients.push(nc)
          }
          cB.limitVelocityDamping = Bc.limitVelocityDamping
        }
        Bc.noiseTexture && (cB.noiseTexture = Bc.noiseTexture.serialize())
      }
      clone(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = {
          ...this._customWrappers
        };
        let Ic = null;
        const rB = this._engine;
        if ((0, Ec.c)(rB.createEffectForParticles) && null != this.customShader) {
          Ic = this.customShader;
          const cB = Ic.shaderOptions.defines.length > 0 ? Ic.shaderOptions.defines.join("\n") : "",
            Bc = rB.createEffectForParticles(Ic.shaderPath.fragmentElement, Ic.shaderOptions.uniforms, Ic.shaderOptions.samplers, cB);
          Vc[0] ? Vc[0].effect = Bc : this.setCustomEffect(Bc, 0)
        }
        const uc = this.serialize(nc),
          sc = !1 === nc && this.particleTexture ? this.particleTexture.clone() : null;
        sc && (uc.textureName = void 0);
        const Mc = jn.Parse(uc, this._scene || this._engine, this._rootUrl);
        return Mc.name = cB, Mc.customShader = Ic, Mc._customWrappers = Vc, sc && (Mc.particleTexture = sc), void 0 === Bc && (Bc = this.emitter), this.noiseTexture && (Mc.noiseTexture = this.noiseTexture.clone()), Mc.emitter = Bc, this.preventAutoStart || Mc.start(), Mc
      }
    }
    jn.BILLBOARDMODE_Y = 2, jn.BILLBOARDMODE_ALL = 7, jn.BILLBOARDMODE_STRETCHED = 8, jn.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let RB = !1;
    RB || (RB = !0, NB._ParseParticleSystem = jn.Parse)
  },
  39584: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      SkyMaterial: () => zB,
      _MaxColorValueForRenderTarget: () => yB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(38068),
      uc = nc(35753),
      sc = nc(38317),
      Mc = nc(38370),
      Pc = nc(39555),
      qB = nc(39232),
      Oc = nc(38137),
      Tc = nc(35799),
      fc = nc(38391),
      mB = nc(38374),
      ec = nc(38362),
      tB = nc(38358);
    class Sc extends sc.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function yB(cB) {
      switch (cB) {
        case Pc.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Pc.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let zB = (() => {
      var cB;
      let Bc, sc, Pc, Tc, zB, pc, hc, aB, lc, Yc, Lc, gB, Uc, bB, Zc, Qc = Mc.c,
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [],
        wc = [],
        kB = [],
        Xc = [],
        Hc = [],
        Fc = [],
        Jc = [],
        jB = [],
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
        MB = [];
      return cB = class extends Qc {
        constructor(cB, Bc) {
          super(cB, Bc, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Vc.k)(this, Cc, 1), this.turbidity = ((0, Vc.k)(this, vB), (0, Vc.k)(this, Dc, 10)), this.rayleigh = ((0, Vc.k)(this, Nc), (0, Vc.k)(this, Ec, 2)), this.mieCoefficient = ((0, Vc.k)(this, oc), (0, Vc.k)(this, Wc, .005)), this.mieDirectionalG = ((0, Vc.k)(this, wc), (0, Vc.k)(this, kB, .8)), this.distance = ((0, Vc.k)(this, Xc), (0, Vc.k)(this, Hc, 500)), this.inclination = ((0, Vc.k)(this, Fc), (0, Vc.k)(this, Jc, .49)), this.azimuth = ((0, Vc.k)(this, jB), (0, Vc.k)(this, Rc, .25)), this.sunPosition = ((0, Vc.k)(this, iB), (0, Vc.k)(this, Kc, new uc.KV(0, 100, 0))), this.useSunPosition = ((0, Vc.k)(this, xB), (0, Vc.k)(this, dc, !1)), this.cameraOffset = ((0, Vc.k)(this, Ac), (0, Vc.k)(this, Gc, uc.KV.Zero())), this.up = ((0, Vc.k)(this, cn), (0, Vc.k)(this, BB, uc.KV.Up())), this.dithering = ((0, Vc.k)(this, nB), (0, Vc.k)(this, VB, !1)), this.rawHdrOutput = ((0, Vc.k)(this, IB), (0, Vc.k)(this, rn, !1)), this.cloudiness = ((0, Vc.k)(this, uB), (0, Vc.k)(this, sB, 0)), this._cameraPosition = ((0, Vc.k)(this, MB), uc.KV.Zero()), this._skyOrientation = new uc.Quaternion
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
        isReadyForSubMesh(Bc, nc) {
          const Vc = nc._drawWrapper;
          if (this.isFrozen && Vc.effect && Vc._wasPreviouslyReady) return !0;
          nc.materialDefines || (nc.materialDefines = new Sc);
          const Ic = nc.materialDefines,
            rB = this.knc();
          if (this._isReadyForSubMesh(nc)) return !0;
          if ((0, tB.cb)(Bc, rB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Ic, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, tB.W)(Bc, Ic, !0, !1), Ic.IMAGEPROCESSINGPOSTPROCESS !== rB.imageProcessingConfiguration.applyByPostProcess && Ic.markAsMiscDirty(), Ic.DITHER !== this.dithering && Ic.markAsMiscDirty(), Ic.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Ic.markAsMiscDirty(), Ic.isDirty) {
            Ic.markAsProcessed(), rB.resetCachedMaterial();
            const Bc = new mB.e;
            Ic.FOG && Bc.addFallback(1, "FOG"), Ic.IMAGEPROCESSINGPOSTPROCESS = rB.imageProcessingConfiguration.applyByPostProcess, Ic.DITHER = this.dithering, Ic.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Vc = [qB.g.PositionKind];
            Ic.VERTEXCOLOR && Vc.push(qB.g.ColorKind);
            const uc = "sky",
              sc = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, ec.b)(sc);
            const Mc = Ic.toString();
            nc.setEffect(rB.RV().createEffect(uc, {
              attributes: Vc,
              uniformsNames: sc,
              uniformBuffersNames: [],
              samplers: [],
              defines: Mc,
              fallbacks: Bc,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: cB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, rB.RV()), Ic, this._materialContext)
          }
          return !(!nc.effect || !nc.effect.isReady()) && (Ic._renderId = rB.getRenderId(), Vc._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(cB, Bc, nc) {
          const Vc = this.knc(),
            Ic = nc.materialDefines;
          if (!Ic) return;
          const rB = nc.effect;
          if (!rB) return;
          this._activeEffect = rB, this.bindOnlyWorldMatrix(cB), this._activeEffect.setMatrix("viewProjection", Vc.getTransformMatrix()), this._mustRebind(Vc, rB, nc) && ((0, ec.d)(rB, this, Vc), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, tB.s)(Ic, rB, Vc)), Vc.fogEnabled && Bc.applyFog && Vc.fogMode !== Oc.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", Vc.getViewMatrix()), (0, tB.j)(Vc, Bc, this._activeEffect, this.rawHdrOutput);
          const sc = Vc.activeCamera;
          if (sc) {
            const cB = sc.getWorldMatrix();
            this._cameraPosition.x = cB.m[12], this._cameraPosition.y = cB.m[13], this._cameraPosition.z = cB.m[14], this._activeEffect.setVector3("cameraPosition", uc.TmpVectors.KV[0].qqc(this._cameraPosition).Tqc(Vc.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const cB = Vc.RV()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", yB(cB?.texture?.type))
          }
          if (!this.useSunPosition) {
            const cB = Math.PI * (this.inclination - .5),
              Bc = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Bc) * Math.cos(cB), this.sunPosition.y = this.distance * Math.sin(-cB), this.sunPosition.z = this.distance * Math.sin(Bc) * Math.cos(cB), uc.Quaternion.FromUnitVectorsToRef(uc.KV.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Bc, this._activeEffect, nc)
        }
        getAnimatables() {
          return []
        }
        dispose(cB) {
          super.dispose(cB)
        }
        clone(Bc) {
          return rB.e.Clone((() => new cB(Bc, this.knc())), this)
        }
        serialize() {
          const cB = super.serialize();
          return cB.customType = "BABYLON.SkyMaterial", cB
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Bc, nc, Vc) {
          return rB.e.Parse((() => new cB(Bc.name, nc)), Bc, nc, Vc)
        }
      }, (() => {
        const nc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qc[Symbol.metadata] ?? null) : void 0;
        Bc = [(0, Ic.M)()], sc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], Tc = [(0, Ic.M)()], zB = [(0, Ic.M)()], pc = [(0, Ic.M)()], hc = [(0, Ic.M)()], aB = [(0, Ic.M)()], lc = [(0, Ic.L)()], Yc = [(0, Ic.M)()], Lc = [(0, Ic.L)()], gB = [(0, Ic.L)()], Uc = [(0, Ic.M)()], bB = [(0, Ic.M)()], Zc = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: cB => "luminance" in cB,
            get: cB => cB.luminance,
            set: (cB, Bc) => {
              cB.luminance = Bc
            }
          },
          metadata: nc
        }, Cc, vB), (0, Vc.g)(null, null, sc, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: cB => "turbidity" in cB,
            get: cB => cB.turbidity,
            set: (cB, Bc) => {
              cB.turbidity = Bc
            }
          },
          metadata: nc
        }, Dc, Nc), (0, Vc.g)(null, null, Pc, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: cB => "rayleigh" in cB,
            get: cB => cB.rayleigh,
            set: (cB, Bc) => {
              cB.rayleigh = Bc
            }
          },
          metadata: nc
        }, Ec, oc), (0, Vc.g)(null, null, Tc, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: cB => "mieCoefficient" in cB,
            get: cB => cB.mieCoefficient,
            set: (cB, Bc) => {
              cB.mieCoefficient = Bc
            }
          },
          metadata: nc
        }, Wc, wc), (0, Vc.g)(null, null, zB, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: cB => "mieDirectionalG" in cB,
            get: cB => cB.mieDirectionalG,
            set: (cB, Bc) => {
              cB.mieDirectionalG = Bc
            }
          },
          metadata: nc
        }, kB, Xc), (0, Vc.g)(null, null, pc, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: cB => "distance" in cB,
            get: cB => cB.distance,
            set: (cB, Bc) => {
              cB.distance = Bc
            }
          },
          metadata: nc
        }, Hc, Fc), (0, Vc.g)(null, null, hc, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: cB => "inclination" in cB,
            get: cB => cB.inclination,
            set: (cB, Bc) => {
              cB.inclination = Bc
            }
          },
          metadata: nc
        }, Jc, jB), (0, Vc.g)(null, null, aB, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: cB => "azimuth" in cB,
            get: cB => cB.azimuth,
            set: (cB, Bc) => {
              cB.azimuth = Bc
            }
          },
          metadata: nc
        }, Rc, iB), (0, Vc.g)(null, null, lc, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: cB => "sunPosition" in cB,
            get: cB => cB.sunPosition,
            set: (cB, Bc) => {
              cB.sunPosition = Bc
            }
          },
          metadata: nc
        }, Kc, xB), (0, Vc.g)(null, null, Yc, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: cB => "useSunPosition" in cB,
            get: cB => cB.useSunPosition,
            set: (cB, Bc) => {
              cB.useSunPosition = Bc
            }
          },
          metadata: nc
        }, dc, Ac), (0, Vc.g)(null, null, Lc, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: cB => "cameraOffset" in cB,
            get: cB => cB.cameraOffset,
            set: (cB, Bc) => {
              cB.cameraOffset = Bc
            }
          },
          metadata: nc
        }, Gc, cn), (0, Vc.g)(null, null, gB, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: cB => "up" in cB,
            get: cB => cB.up,
            set: (cB, Bc) => {
              cB.up = Bc
            }
          },
          metadata: nc
        }, BB, nB), (0, Vc.g)(null, null, Uc, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: cB => "dithering" in cB,
            get: cB => cB.dithering,
            set: (cB, Bc) => {
              cB.dithering = Bc
            }
          },
          metadata: nc
        }, VB, IB), (0, Vc.g)(null, null, bB, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: cB => "rawHdrOutput" in cB,
            get: cB => cB.rawHdrOutput,
            set: (cB, Bc) => {
              cB.rawHdrOutput = Bc
            }
          },
          metadata: nc
        }, rn, uB), (0, Vc.g)(null, null, Zc, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: cB => "cloudiness" in cB,
            get: cB => cB.cloudiness,
            set: (cB, Bc) => {
              cB.cloudiness = Bc
            }
          },
          metadata: nc
        }, sB, MB), nc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nc
        })
      })(), cB._ShaderLoader = new fc.e((() => [nc.e(305).then((() => nc(59149))), nc.e(298).then((() => nc(59153)))]), (() => [nc.e(322).then((() => nc(59158))), nc.e(316).then((() => nc(59164)))])), cB
    })();
    (0, Tc.d)("BABYLON.SkyMaterial", zB)
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);