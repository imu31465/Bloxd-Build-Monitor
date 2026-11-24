export const id = 303;
export const ids = [303];
export const modules = {
  41645: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(40220),
      Am = fm(41652);
    class am {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = fm, this.Khm = [], this._maxBlockCapacity = Tm || 64, this._selectionContent = new hm.c(1024), this._creationFunc = mm
      }
      update(mm, Tm, fm) {
        Am.e._CreateBlocks(mm, Tm, fm, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      whm(mm) {
        for (let Tm = 0; Tm < this.blocks.length; Tm++) {
          this.blocks[Tm].addEntry(mm)
        }
      }
      yG(mm) {
        for (let Tm = 0; Tm < this.blocks.length; Tm++) {
          this.blocks[Tm].removeEntry(mm)
        }
      }
      select(mm, Tm) {
        this._selectionContent.reset();
        for (let fm = 0; fm < this.blocks.length; fm++) {
          this.blocks[fm].select(mm, this._selectionContent, Tm)
        }
        return Tm ? this._selectionContent.concat(this.Khm) : this._selectionContent.concatWithNoDuplicate(this.Khm), this._selectionContent
      }
      intersects(mm, Tm, fm) {
        this._selectionContent.reset();
        for (let hm = 0; hm < this.blocks.length; hm++) {
          this.blocks[hm].intersects(mm, Tm, this._selectionContent, fm)
        }
        return fm ? this._selectionContent.concat(this.Khm) : this._selectionContent.concatWithNoDuplicate(this.Khm), this._selectionContent
      }
      intersectsRay(mm) {
        this._selectionContent.reset();
        for (let Tm = 0; Tm < this.blocks.length; Tm++) {
          this.blocks[Tm].intersectsRay(mm, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.Khm), this._selectionContent
      }
    }
    am.CreationFuncForMeshes = (mm, Tm) => {
      const fm = mm.DH();
      !mm.isBlocked && fm.boundingBox.intersectsMinMax(Tm.ohm, Tm.Ehm) && Tm.entries.push(mm)
    }, am.CreationFuncForSubMeshes = (mm, Tm) => {
      mm.DH().boundingBox.intersectsMinMax(Tm.ohm, Tm.Ehm) && Tm.entries.push(mm)
    }
  },
  41652: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(37185),
      Am = fm(40408);
    class am {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.entries = [], this.Qhm = new Array, this._capacity = fm, this._depth = hm, this._maxDepth = Am, this._creationFunc = am, this._minPoint = mm, this._maxPoint = Tm, this.Qhm.push(mm.clone()), this.Qhm.push(Tm.clone()), this.Qhm.push(mm.clone()), this.Qhm[2].x = Tm.x, this.Qhm.push(mm.clone()), this.Qhm[3].y = Tm.y, this.Qhm.push(mm.clone()), this.Qhm[4].z = Tm.z, this.Qhm.push(Tm.clone()), this.Qhm[5].z = mm.z, this.Qhm.push(Tm.clone()), this.Qhm[6].x = mm.x, this.Qhm.push(Tm.clone()), this.Qhm[7].y = mm.y
      }
      get yp() {
        return this._capacity
      }
      get ohm() {
        return this._minPoint
      }
      get Ehm() {
        return this._maxPoint
      }
      addEntry(mm) {
        if (this.blocks)
          for (let Tm = 0; Tm < this.blocks.length; Tm++) {
            this.blocks[Tm].addEntry(mm)
          } else this._creationFunc(mm, this), this.entries.length > this.yp && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(mm) {
        if (this.blocks) {
          for (let Tm = 0; Tm < this.blocks.length; Tm++) {
            this.blocks[Tm].removeEntry(mm)
          }
          return
        }
        const Tm = this.entries.indexOf(mm);
        Tm > -1 && this.entries.splice(Tm, 1)
      }
      addEntries(mm) {
        for (let Tm = 0; Tm < mm.length; Tm++) {
          const fm = mm[Tm];
          this.addEntry(fm)
        }
      }
      select(mm, Tm, fm) {
        if (Am.c.IsInFrustum(this.Qhm, mm)) {
          if (this.blocks) {
            for (let hm = 0; hm < this.blocks.length; hm++) {
              this.blocks[hm].select(mm, Tm, fm)
            }
            return
          }
          fm ? Tm.concat(this.entries) : Tm.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(mm, Tm, fm, hm) {
        if (Am.c.IntersectsSphere(this._minPoint, this._maxPoint, mm, Tm)) {
          if (this.blocks) {
            for (let Am = 0; Am < this.blocks.length; Am++) {
              this.blocks[Am].intersects(mm, Tm, fm, hm)
            }
            return
          }
          hm ? fm.concat(this.entries) : fm.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(mm, Tm) {
        if (mm.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let fm = 0; fm < this.blocks.length; fm++) {
              this.blocks[fm].intersectsRay(mm, Tm)
            }
            return
          }
          Tm.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        am._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(mm, Tm, fm, Am, xm, wm, Dm, im) {
        Dm.blocks = new Array;
        const Rm = new hm.p((Tm.x - mm.x) / 2, (Tm.y - mm.y) / 2, (Tm.z - mm.z) / 2);
        for (let hm = 0; hm < 2; hm++)
          for (let Tm = 0; Tm < 2; Tm++)
            for (let pm = 0; pm < 2; pm++) {
              const Em = mm.add(Rm.multiplyByFloats(hm, Tm, pm)),
                om = mm.add(Rm.multiplyByFloats(hm + 1, Tm + 1, pm + 1)),
                Om = new am(Em, om, Am, xm + 1, wm, im);
              Om.addEntries(fm), Dm.blocks.push(Om)
            }
      }
    }
  },
  41661: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Rm
    });
    var hm = fm(40199),
      Am = fm(37185),
      am = fm(40544),
      xm = fm(41605),
      wm = fm(40274),
      Dm = fm(37201),
      im = fm(41645);
    class Rm {
      constructor(mm) {
        this.name = wm.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new xm.z(Am.p.Zero(), new Am.p(1, 1, 1)), (mm = mm || Dm.c.LastCreatedScene) && (this.Aq = mm, this.Aq.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Aq.getActiveSubMeshCandidates = mm => this.getActiveSubMeshCandidates(mm), this.Aq.getCollidingSubMeshCandidates = (mm, Tm) => this.getCollidingSubMeshCandidates(mm, Tm), this.Aq.getIntersectingSubMeshCandidates = (mm, Tm) => this.getIntersectingSubMeshCandidates(mm, Tm))
      }
      register() {
        this.Aq.onMeshRemovedObservable.add((mm => {
          const Tm = this.Aq.selectionOctree;
          if (void 0 !== Tm && null !== Tm) {
            const fm = Tm.Khm.indexOf(mm); - 1 !== fm && Tm.Khm.splice(fm, 1)
          }
        })), this.Aq.onMeshImportedObservable.add((mm => {
          const Tm = this.Aq.selectionOctree;
          void 0 !== Tm && null !== Tm && Tm.whm(mm)
        }))
      }
      getActiveMeshCandidates() {
        return this.Aq.khm?.select(this.Aq.frustumPlanes) || this.Aq._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(mm) {
        if (mm._submeshesOctree && mm.useOctreeForRenderingSelection) {
          return mm._submeshesOctree.select(this.Aq.frustumPlanes)
        }
        return this.Aq._getDefaultSubMeshCandidates(mm)
      }
      getIntersectingSubMeshCandidates(mm, Tm) {
        if (mm._submeshesOctree && mm.useOctreeForPicking) {
          xm.z.TransformToRef(Tm, mm.getWorldMatrix(), this._tempRay);
          return mm._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Aq._getDefaultSubMeshCandidates(mm)
      }
      getCollidingSubMeshCandidates(mm, Tm) {
        if (mm._submeshesOctree && mm.useOctreeForCollisions) {
          const fm = Tm._velocityWorldLength + Math.max(Tm._radius.x, Tm._radius.y, Tm._radius.z);
          return mm._submeshesOctree.intersects(Tm._basePointWorld, fm)
        }
        return this.Aq._getDefaultSubMeshCandidates(mm)
      }
      rebuild() {}
      dispose() {}
    }
    let pm = !1;
    pm || (pm = !0, hm.f.prototype.createOrUpdateSelectionOctree = function() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        fm = this._getComponent(wm.c.NAME_OCTREE);
      fm || (fm = new Rm(this), this.vfm(fm)), this.khm || (this.khm = new im.e(im.e.CreationFuncForMeshes, mm, Tm));
      const hm = this.getWorldExtends();
      return this.khm.update(hm.min, hm.max, this.meshes), this.khm
    }, Object.defineProperty(hm.f.prototype, "selectionOctree", {
      get: function() {
        return this.khm
      },
      enumerable: !0,
      configurable: !0
    }), am.d.prototype.createOrUpdateSubmeshesOctree = function() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const fm = this.wG();
      let hm = fm._getComponent(wm.c.NAME_OCTREE);
      hm || (hm = new Rm(fm), fm.vfm(hm)), this._submeshesOctree || (this._submeshesOctree = new im.e(im.e.CreationFuncForSubMeshes, mm, Tm)), this.computeWorldMatrix(!0);
      const Am = this.DH().boundingBox;
      return this._submeshesOctree.update(Am.minimumWorld, Am.maximumWorld, this.jK), this._submeshesOctree
    })
  },
  41605: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Sm,
      d: () => Ym,
      h: () => Om,
      k: () => om,
      m: () => km,
      q: () => Zm,
      u: () => Jm,
      v: () => zm,
      w: () => cm,
      z: () => pm
    });
    var hm = fm(37191),
      Am = fm(37185),
      am = fm(37197),
      xm = fm(40399),
      wm = fm(40242),
      Dm = fm(37201),
      im = fm(40294);
    const Rm = {
      internalPickerForMesh: void 0
    };
    class pm {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hm.c;
        this.origin = mm, this.direction = Tm, this.length = fm, this.epsilon = Am
      }
      clone() {
        return new pm(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const hm = pm._TmpVector3[0].Z8(mm.x - fm, mm.y - fm, mm.z - fm),
          Am = pm._TmpVector3[1].Z8(Tm.x + fm, Tm.y + fm, Tm.z + fm);
        let am, xm, wm, Dm, im = 0,
          Rm = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < hm.x || this.origin.x > Am.x) return !1
        } else if (am = 1 / this.direction.x, xm = (hm.x - this.origin.x) * am, wm = (Am.x - this.origin.x) * am, wm === -1 / 0 && (wm = 1 / 0), xm > wm && (Dm = xm, xm = wm, wm = Dm), im = Math.max(xm, im), Rm = Math.min(wm, Rm), im > Rm) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < hm.y || this.origin.y > Am.y) return !1
        } else if (am = 1 / this.direction.y, xm = (hm.y - this.origin.y) * am, wm = (Am.y - this.origin.y) * am, wm === -1 / 0 && (wm = 1 / 0), xm > wm && (Dm = xm, xm = wm, wm = Dm), im = Math.max(xm, im), Rm = Math.min(wm, Rm), im > Rm) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < hm.z || this.origin.z > Am.z) return !1
        } else if (am = 1 / this.direction.z, xm = (hm.z - this.origin.z) * am, wm = (Am.z - this.origin.z) * am, wm === -1 / 0 && (wm = 1 / 0), xm > wm && (Dm = xm, xm = wm, wm = Dm), im = Math.max(xm, im), Rm = Math.min(wm, Rm), im > Rm) return !1;
        return !0
      }
      intersectsBox(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(mm.minimum, mm.maximum, Tm)
      }
      intersectsSphere(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = mm.center.x - this.origin.x,
          hm = mm.center.y - this.origin.y,
          Am = mm.center.z - this.origin.z,
          am = fm * fm + hm * hm + Am * Am,
          xm = mm.radius + Tm,
          wm = xm * xm;
        if (am <= wm) return !0;
        const Dm = fm * this.direction.x + hm * this.direction.y + Am * this.direction.z;
        if (Dm < 0) return !1;
        return am - Dm * Dm <= wm
      }
      intersectsTriangle(mm, Tm, fm) {
        const hm = pm._TmpVector3[0],
          am = pm._TmpVector3[1],
          wm = pm._TmpVector3[2],
          Dm = pm._TmpVector3[3],
          im = pm._TmpVector3[4];
        Tm.subtractToRef(mm, hm), fm.subtractToRef(mm, am), Am.p.CrossToRef(this.direction, am, wm);
        const Rm = Am.p.Dot(hm, wm);
        if (0 === Rm) return null;
        const Em = 1 / Rm;
        this.origin.subtractToRef(mm, Dm);
        const om = Am.p.Dot(Dm, wm) * Em;
        if (om < -this.epsilon || om > 1 + this.epsilon) return null;
        Am.p.CrossToRef(Dm, hm, im);
        const Om = Am.p.Dot(this.direction, im) * Em;
        if (Om < -this.epsilon || om + Om > 1 + this.epsilon) return null;
        const Ym = Am.p.Dot(am, im) * Em;
        return Ym > this.length || Ym < 0 ? null : new xm.e(1 - om - Om, om, Ym)
      }
      intersectsPlane(mm) {
        let Tm;
        const fm = Am.p.Dot(mm.normal, this.direction);
        if (Math.abs(fm) < 9.99999997475243e-7) return null;
        {
          const hm = Am.p.Dot(mm.normal, this.origin);
          return Tm = (-mm.d - hm) / fm, Tm < 0 ? Tm < -9.99999997475243e-7 ? null : 0 : Tm
        }
      }
      intersectsAxis(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (mm) {
          case "y": {
            const mm = (this.origin.y - Tm) / this.direction.y;
            return mm > 0 ? null : new Am.p(this.origin.x + this.direction.x * -mm, Tm, this.origin.z + this.direction.z * -mm)
          }
          case "x": {
            const mm = (this.origin.x - Tm) / this.direction.x;
            return mm > 0 ? null : new Am.p(Tm, this.origin.y + this.direction.y * -mm, this.origin.z + this.direction.z * -mm)
          }
          case "z": {
            const mm = (this.origin.z - Tm) / this.direction.z;
            return mm > 0 ? null : new Am.p(this.origin.x + this.direction.x * -mm, this.origin.y + this.direction.y * -mm, Tm)
          }
          default:
            return null
        }
      }
      vhm(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          am = arguments.length > 4 ? arguments[4] : void 0,
          xm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const wm = Am.j.Matrix[0];
        return mm.getWorldMatrix().invertToRef(wm), this._tmpRay ? pm.TransformToRef(this, wm, this._tmpRay) : this._tmpRay = pm.Transform(this, wm), mm.intersects(this._tmpRay, Tm, fm, hm, am, xm)
      }
      intersectsMeshes(mm, Tm, fm) {
        fm ? fm.length = 0 : fm = [];
        for (let hm = 0; hm < mm.length; hm++) {
          const Am = this.vhm(mm[hm], Tm);
          Am.hit && fm.push(Am)
        }
        return fm.sort(this._comparePickingInfo), fm
      }
      _comparePickingInfo(mm, Tm) {
        return mm.distance < Tm.distance ? -1 : mm.distance > Tm.distance ? 1 : 0
      }
      intersectionSegment(mm, Tm, fm) {
        const hm = this.origin,
          am = Am.j.WO[0],
          xm = Am.j.WO[1],
          wm = Am.j.WO[2],
          Dm = Am.j.WO[3];
        Tm.subtractToRef(mm, am), this.direction.scaleToRef(pm._Rayl, wm), hm.addToRef(wm, xm), mm.subtractToRef(hm, Dm);
        const im = Am.p.Dot(am, am),
          Rm = Am.p.Dot(am, wm),
          Em = Am.p.Dot(wm, wm),
          om = Am.p.Dot(am, Dm),
          Om = Am.p.Dot(wm, Dm),
          Ym = im * Em - Rm * Rm;
        let qm, jm, Vm = Ym,
          Im = Ym;
        Ym < pm._Smallnum ? (qm = 0, Vm = 1, jm = Om, Im = Em) : (qm = Rm * Om - Em * om, jm = im * Om - Rm * om, qm < 0 ? (qm = 0, jm = Om, Im = Em) : qm > Vm && (qm = Vm, jm = Om + Rm, Im = Em)), jm < 0 ? (jm = 0, -om < 0 ? qm = 0 : -om > im ? qm = Vm : (qm = -om, Vm = im)) : jm > Im && (jm = Im, -om + Rm < 0 ? qm = 0 : -om + Rm > im ? qm = Vm : (qm = -om + Rm, Vm = im));
        const Km = Math.abs(qm) < pm._Smallnum ? 0 : qm / Vm,
          Qm = Math.abs(jm) < pm._Smallnum ? 0 : jm / Im,
          nm = Am.j.WO[4];
        wm.scaleToRef(Qm, nm);
        const Jm = Am.j.WO[5];
        am.scaleToRef(Km, Jm), Jm.addInPlace(Dm);
        const cm = Am.j.WO[6];
        Jm.subtractToRef(nm, cm);
        return Qm > 0 && Qm <= this.length && cm.lengthSquared() < fm * fm ? Jm.length() : -1
      }
      update(mm, Tm, fm, hm, am, xm, wm) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          pm._RayDistant || (pm._RayDistant = pm.Zero()), pm._RayDistant.unprojectRayToRef(mm, Tm, fm, hm, Am.e.IdentityReadOnly, xm, wm);
          const Dm = Am.j.Matrix[0];
          am.invertToRef(Dm), pm.TransformToRef(pm._RayDistant, Dm, this)
        } else this.unprojectRayToRef(mm, Tm, fm, hm, am, xm, wm);
        return this
      }
      static Zero() {
        return new pm(Am.p.Zero(), Am.p.Zero())
      }
      static CreateNew(mm, Tm, fm, hm, Am, am, xm) {
        return pm.Zero().update(mm, Tm, fm, hm, Am, am, xm)
      }
      static CreateNewFromTo(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Am.e.IdentityReadOnly;
        const hm = new pm(new Am.p(0, 0, 0), new Am.p(0, 0, 0));
        return pm.CreateFromToToRef(mm, Tm, hm, fm)
      }
      static CreateFromToToRef(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Am.e.IdentityReadOnly;
        fm.origin.ZZ(mm);
        const am = Tm.subtractToRef(mm, fm.direction),
          xm = Math.sqrt(am.x * am.x + am.y * am.y + am.z * am.z);
        return fm.length = xm, fm.direction.normalize(), pm.TransformToRef(fm, hm, fm)
      }
      static Transform(mm, Tm) {
        const fm = new pm(new Am.p(0, 0, 0), new Am.p(0, 0, 0));
        return pm.TransformToRef(mm, Tm, fm), fm
      }
      static TransformToRef(mm, Tm, fm) {
        Am.p.TransformCoordinatesToRef(mm.origin, Tm, fm.origin), Am.p.TransformNormalToRef(mm.direction, Tm, fm.direction), fm.length = mm.length, fm.epsilon = mm.epsilon;
        const hm = fm.direction,
          am = hm.length();
        if (0 !== am && 1 !== am) {
          const mm = 1 / am;
          hm.x *= mm, hm.y *= mm, hm.z *= mm, fm.length *= am
        }
        return fm
      }
      unprojectRayToRef(mm, Tm, fm, hm, am, xm, wm) {
        const im = Am.j.Matrix[0];
        am.multiplyToRef(xm, im), im.multiplyToRef(wm, im), im.invert();
        const Rm = Dm.c.LastCreatedEngine,
          pm = Am.j.WO[0];
        pm.x = mm / fm * 2 - 1, pm.y = -(Tm / hm * 2 - 1), pm.z = Rm?.fhm ? 1 : Rm?.isNDCHalfZRange ? 0 : -1;
        const Em = Am.j.WO[1].Z8(pm.x, pm.y, 1 - 1e-8),
          om = Am.j.WO[2],
          Om = Am.j.WO[3];
        Am.p.TransformCoordinatesToRef(pm, im, om), Am.p.TransformCoordinatesToRef(Em, im, Om), this.origin.ZZ(om), Om.subtractToRef(om, this.direction), this.direction.normalize()
      }
    }

    function Em(mm, Tm, fm, hm, Am) {
      let am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const xm = pm.Zero();
      return om(mm, Tm, fm, hm, xm, Am, am), xm
    }

    function om(mm, Tm, fm, hm, am, xm) {
      let wm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Dm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const im = mm.dO();
      if (!xm && !(xm = mm.activeCamera) && !(xm = mm.cameraToUseForPointers)) return mm;
      const Rm = xm.viewport,
        pm = im.getRenderHeight(),
        {
          x: Em,
          y: om,
          width: Om,
          height: Ym
        } = Rm.toGlobal(im.getRenderWidth(), pm),
        qm = 1 / im.getHardwareScalingLevel();
      return Tm = Tm * qm - Em, fm = fm * qm - (pm - om - Ym), am.update(Tm, fm, Om, Ym, hm || Am.e.IdentityReadOnly, wm ? Am.e.IdentityReadOnly : xm.getViewMatrix(), xm.getProjectionMatrix(), Dm), mm
    }

    function Om(mm, Tm, fm, hm) {
      const Am = pm.Zero();
      return Ym(mm, Tm, fm, Am, hm), Am
    }

    function Ym(mm, Tm, fm, hm, am) {
      if (!wm.e) return mm;
      const xm = mm.dO();
      if (!am && !(am = mm.activeCamera) && !(am = mm.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Dm = am.viewport,
        im = xm.getRenderHeight(),
        {
          x: Rm,
          y: pm,
          width: Em,
          height: om
        } = Dm.toGlobal(xm.getRenderWidth(), im),
        Om = Am.e.Identity(),
        Ym = 1 / xm.getHardwareScalingLevel();
      return Tm = Tm * Ym - Rm, fm = fm * Ym - (im - pm - om), hm.update(Tm, fm, Em, om, Om, Om, am.getProjectionMatrix()), mm
    }

    function qm(mm, Tm, fm, hm, Am, am, xm, wm) {
      return jm(mm, fm, hm, Tm(hm, fm.enableDistantPicking), Am, am, xm, wm)
    }

    function jm(mm, Tm, fm, hm, Am, am, xm, wm) {
      const Dm = Tm.intersects(hm, Am, xm, am, fm, wm);
      return Dm && Dm.hit ? !Am && null != mm && Dm.distance >= mm.distance ? null : Dm : null
    }

    function Vm(mm, Tm) {
      return "InstancedLinesMesh" === mm || "LinesMesh" === mm ? Tm.intersectionThreshold : 0
    }

    function Im(mm) {
      const Tm = mm.getClassName();
      if ("GreasedLineMesh" === Tm) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const fm = mm.rawBoundingInfo;
      return {
        rawBoundingInfo: fm,
        intersectionThreshold: fm ? Vm(Tm, mm) : 0
      }
    }

    function Km(mm, Tm, fm, hm, Am) {
      const am = mm(fm, Tm.enableDistantPicking);
      return am.intersectsSphere(hm.Shm, Am) && am.intersectsBox(hm.boundingBox, Am) ? am : null
    }

    function Qm(mm, Tm, fm, hm, am, xm) {
      let Dm = null;
      const im = !!(mm.activeCameras && mm.activeCameras.length > 1 && mm.cameraToUseForPointers !== mm.activeCamera),
        pm = mm.cameraToUseForPointers || mm.activeCamera,
        Em = Rm.internalPickerForMesh || qm,
        om = Em === qm;
      for (let wm = 0; wm < mm.meshes.length; wm++) {
        const Rm = mm.meshes[wm];
        if (fm) {
          if (!fm(Rm, -1)) continue
        } else if (!Rm.isEnabled() || !Rm.isVisible || !Rm.xq) continue;
        const Om = im && Rm.isWorldMatrixCameraDependent(),
          Ym = Rm.computeWorldMatrix(Om, pm);
        if (Rm.hasThinInstances && Rm.ZTm) {
          const mm = Em(Dm, Tm, Rm, Ym, !0, !0, xm);
          if (mm) {
            if (am) return mm;
            const {
              rawBoundingInfo: wm,
              intersectionThreshold: im
            } = Im(Rm), pm = Rm._thinInstanceDataStorage.matrixData;
            if (pm) {
              const mm = Am.j.Matrix[0],
                Om = Am.j.Matrix[1],
                qm = Math.min(Rm.o4, pm.length >> 4);
              for (let Vm = 0; Vm < qm; Vm++) {
                if (fm && !fm(Rm, Vm)) continue;
                Am.e.FromArrayToRef(pm, Vm << 4, mm), mm.multiplyToRef(Ym, Om);
                const qm = om && wm ? Km(Tm, Rm, Om, wm, im) : null;
                if (om && wm && !qm) continue;
                const Im = om && qm ? jm(Dm, Rm, Om, qm, hm, am, xm, !0) : Em(Dm, Tm, Rm, Om, hm, am, xm, !0);
                if (Im && (Dm = Im, Dm.thinInstanceIndex = Vm, hm)) return Dm
              }
            }
          }
        } else {
          const mm = Em(Dm, Tm, Rm, Ym, hm, am, xm);
          if (mm && (Dm = mm, hm)) return Dm
        }
      }
      return Dm || new wm.e
    }

    function nm(mm, Tm, fm, hm) {
      if (!wm.e) return null;
      const am = [],
        xm = !!(mm.activeCameras && mm.activeCameras.length > 1 && mm.cameraToUseForPointers !== mm.activeCamera),
        Dm = mm.cameraToUseForPointers || mm.activeCamera,
        im = Rm.internalPickerForMesh || qm,
        pm = im === qm;
      for (let wm = 0; wm < mm.meshes.length; wm++) {
        const Rm = mm.meshes[wm];
        if (fm) {
          if (!fm(Rm, -1)) continue
        } else if (!Rm.isEnabled() || !Rm.isVisible || !Rm.xq) continue;
        const Em = xm && Rm.isWorldMatrixCameraDependent(),
          om = Rm.computeWorldMatrix(Em, Dm);
        if (Rm.hasThinInstances && Rm.ZTm) {
          if (im(null, Tm, Rm, om, !0, !0, hm)) {
            const {
              rawBoundingInfo: mm,
              intersectionThreshold: xm
            } = Im(Rm), wm = Rm._thinInstanceDataStorage.matrixData;
            if (wm) {
              const Dm = Am.j.Matrix[0],
                Em = Am.j.Matrix[1],
                Om = Math.min(Rm.o4, wm.length >> 4);
              for (let Ym = 0; Ym < Om; Ym++) {
                if (fm && !fm(Rm, Ym)) continue;
                Am.e.FromArrayToRef(wm, Ym << 4, Dm), Dm.multiplyToRef(om, Em);
                const Om = pm && mm ? Km(Tm, Rm, Em, mm, xm) : null;
                if (pm && mm && !Om) continue;
                const qm = pm && Om ? jm(null, Rm, Em, Om, !1, !1, hm, !0) : im(null, Tm, Rm, Em, !1, !1, hm, !0);
                qm && (qm.thinInstanceIndex = Ym, am.push(qm))
              }
            }
          }
        } else {
          const mm = im(null, Tm, Rm, om, !1, !1, hm);
          mm && am.push(mm)
        }
      }
      return am
    }

    function Jm(mm, Tm, fm, hm, am, xm) {
      if (!wm.e) return null;
      const Dm = Qm(mm, (hm => (mm._tempPickingRay || (mm._tempPickingRay = pm.Zero()), om(mm, Tm, fm, hm, mm._tempPickingRay, xm || null), mm._tempPickingRay)), hm, am, !0);
      return Dm && (Dm.ray = Em(mm, Tm, fm, Am.e.Identity(), xm || null)), Dm
    }

    function cm(mm, Tm, fm, hm, am, xm, wm) {
      const Dm = Qm(mm, ((hm, Am) => (mm._tempPickingRay || (mm._tempPickingRay = pm.Zero()), om(mm, Tm, fm, hm, mm._tempPickingRay, xm || null, !1, Am), mm._tempPickingRay)), hm, am, !1, wm);
      return Dm && (Dm.ray = Em(mm, Tm, fm, Am.e.Identity(), xm || null)), Dm
    }

    function zm(mm, Tm, fm, hm, am) {
      const xm = Qm(mm, (fm => (mm._pickWithRayInverseMatrix || (mm._pickWithRayInverseMatrix = Am.e.Identity()), fm.invertToRef(mm._pickWithRayInverseMatrix), mm._cachedRayForTransform || (mm._cachedRayForTransform = pm.Zero()), pm.TransformToRef(Tm, mm._pickWithRayInverseMatrix, mm._cachedRayForTransform), mm._cachedRayForTransform)), fm, hm, !1, am);
      return xm && (xm.ray = Tm), xm
    }

    function Zm(mm, Tm, fm, hm, Am, am) {
      return nm(mm, (hm => Em(mm, Tm, fm, hm, Am || null)), hm, am)
    }

    function km(mm, Tm, fm, hm) {
      return nm(mm, (fm => (mm._pickWithRayInverseMatrix || (mm._pickWithRayInverseMatrix = Am.e.Identity()), fm.invertToRef(mm._pickWithRayInverseMatrix), mm._cachedRayForTransform || (mm._cachedRayForTransform = pm.Zero()), pm.TransformToRef(Tm, mm._pickWithRayInverseMatrix, mm._cachedRayForTransform), mm._cachedRayForTransform)), fm, hm)
    }

    function bm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        hm = arguments.length > 3 ? arguments[3] : void 0,
        am = arguments.length > 4 ? arguments[4] : void 0;
      hm || (hm = mm.getWorldMatrix()), Tm.length = fm, am ? Tm.origin.ZZ(am) : Tm.origin.ZZ(mm.position);
      const xm = Am.j.WO[2];
      xm.set(0, 0, mm._scene.useRightHandedSystem ? -1 : 1);
      const wm = Am.j.WO[3];
      return Am.p.TransformNormalToRef(xm, hm, wm), Am.p.NormalizeToRef(wm, Tm.direction), Tm
    }

    function Sm(mm, Tm) {
      Tm && (Tm.prototype.getForwardRay = function() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        return bm(this, new pm(Am.p.Zero(), Am.p.Zero(), mm), mm, Tm, fm)
      }, Tm.prototype.getForwardRayToRef = function(mm) {
        return bm(this, mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), mm && (im.c._IsPickingAvailable = !0, mm.prototype.createPickingRay = function(mm, Tm, fm, hm) {
        return Em(this, mm, Tm, fm, hm, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    pm._TmpVector3 = (0, am.c)(6, Am.p.Zero), pm._RayDistant = pm.Zero(), pm._Smallnum = 1e-8, pm._Rayl = 1e9
  },
  41599: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am.z
    });
    var hm = fm(40199),
      Am = fm(40319),
      am = fm(41605);
    let xm = !1;
    xm || (xm = !0, (0, am.c)(hm.f, Am.b), hm.f.prototype.createPickingRayToRef = function(mm, Tm, fm, hm, Am) {
      let xm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        wm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, am.k)(this, mm, Tm, fm, hm, Am, xm, wm)
    }, hm.f.prototype.createPickingRayInCameraSpace = function(mm, Tm, fm) {
      return (0, am.h)(this, mm, Tm, fm)
    }, hm.f.prototype.createPickingRayInCameraSpaceToRef = function(mm, Tm, fm, hm) {
      return (0, am.d)(this, mm, Tm, fm, hm)
    }, hm.f.prototype.pickWithBoundingInfo = function(mm, Tm, fm, hm, Am) {
      return (0, am.u)(this, mm, Tm, fm, hm, Am)
    }, hm.f.prototype.Do = function(mm, Tm, fm, hm, Am, xm) {
      let wm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, am.w)(this, mm, Tm, fm, hm, Am, xm, wm)
    }, hm.f.prototype.pickWithRay = function(mm, Tm, fm, hm) {
      return (0, am.v)(this, mm, Tm, fm, hm)
    }, hm.f.prototype.multiPick = function(mm, Tm, fm, hm, Am) {
      return (0, am.q)(this, mm, Tm, fm, hm, Am)
    }, hm.f.prototype.multiPickWithRay = function(mm, Tm, fm) {
      return (0, am.m)(this, mm, Tm, fm)
    })
  },
  41609: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37185),
      xm = fm(40355),
      wm = fm(41613),
      Dm = fm(40326),
      im = fm(37224);
    let Rm = (() => {
        var mm;
        let Tm, fm, Dm, im, Rm, pm, Em, om, Om = wm.d,
          Ym = [],
          qm = [],
          jm = [],
          Vm = [],
          Im = [],
          Km = [],
          Qm = [],
          nm = [],
          Jm = [],
          cm = [],
          zm = [],
          Zm = [],
          km = [];
        return mm = class extends Om {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(mm) {
            this._shadowFrustumSize = mm, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(mm) {
            this._shadowOrthoScale = mm, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(mm) {
            this._orthoLeft = mm
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(mm) {
            this._orthoRight = mm
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(mm) {
            this._orthoTop = mm
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(mm) {
            this._orthoBottom = mm
          }
          constructor(mm, Tm, fm, Am) {
            super(mm, fm, Am), this._shadowFrustumSize = ((0, hm.i)(this, Ym), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, hm.i)(this, qm, !0), this.autoCalcShadowZBounds = ((0, hm.i)(this, jm), (0, hm.i)(this, Vm, !1)), this._orthoLeft = ((0, hm.i)(this, Im), (0, hm.i)(this, Km, Number.MAX_VALUE)), this._orthoRight = ((0, hm.i)(this, Qm), (0, hm.i)(this, nm, Number.MIN_VALUE)), this._orthoTop = ((0, hm.i)(this, Jm), (0, hm.i)(this, cm, Number.MIN_VALUE)), this._orthoBottom = ((0, hm.i)(this, zm), (0, hm.i)(this, Zm, Number.MAX_VALUE)), (0, hm.i)(this, km), this.position = Tm.scale(-1), this.direction = Tm
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return xm.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(mm, Tm, fm) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(mm) : this._setDefaultAutoExtendShadowProjectionMatrix(mm, Tm, fm)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(mm) {
            const Tm = this.wG().activeCamera;
            am.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Tm ? Tm.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Tm ? Tm.maxZ : 1e4, mm, this.wG().dO().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(mm, Tm, fm) {
            const hm = this.wG().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const mm = am.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let hm = Number.MAX_VALUE,
                Am = -Number.MAX_VALUE;
              for (let xm = 0; xm < fm.length; xm++) {
                const wm = fm[xm];
                if (!wm) continue;
                const Dm = wm.DH().boundingBox;
                for (let fm = 0; fm < Dm.vectorsWorld.length; fm++) am.p.TransformCoordinatesToRef(Dm.vectorsWorld[fm], Tm, mm), mm.x < this._orthoLeft && (this._orthoLeft = mm.x), mm.y < this._orthoBottom && (this._orthoBottom = mm.y), mm.x > this._orthoRight && (this._orthoRight = mm.x), mm.y > this._orthoTop && (this._orthoTop = mm.y), this.autoCalcShadowZBounds && (mm.z < hm && (hm = mm.z), mm.z > Am && (Am = mm.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = hm, this._shadowMaxZ = Am)
            }
            const Am = this._orthoRight - this._orthoLeft,
              xm = this._orthoTop - this._orthoBottom,
              wm = void 0 !== this.shadowMinZ ? this.shadowMinZ : hm?.minZ || 0,
              Dm = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : hm?.maxZ || 1e4,
              im = this.wG().dO().fhm;
            am.e.OrthoOffCenterLHToRef(this._orthoLeft - Am * this.shadowOrthoScale, this._orthoRight + Am * this.shadowOrthoScale, this._orthoBottom - xm * this.shadowOrthoScale, this._orthoTop + xm * this.shadowOrthoScale, im ? Dm : wm, im ? wm : Dm, mm, this.wG().dO().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(mm, Tm) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Tm), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Tm), this)
          }
          transferToNodeMaterialEffect(mm, Tm) {
            return this.computeTransformedInformation() ? (mm.setFloat3(Tm, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (mm.setFloat3(Tm, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(mm) {
            const Tm = this._scene.dO();
            return !Tm.fhm && Tm.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(mm) {
            const Tm = this._scene.dO();
            return Tm.fhm && Tm.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(mm, Tm) {
            mm["DIRLIGHT" + Tm] = !0
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(Om[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.J)()], fm = [(0, Am.J)()], Dm = [(0, Am.J)()], im = [(0, Am.J)()], Rm = [(0, Am.J)("orthoLeft")], pm = [(0, Am.J)("orthoRight")], Em = [(0, Am.J)("orthoTop")], om = [(0, Am.J)("orthoBottom")], (0, hm.g)(mm, null, Tm, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: mm => "shadowFrustumSize" in mm,
              get: mm => mm.shadowFrustumSize
            },
            metadata: am
          }, null, Ym), (0, hm.g)(mm, null, fm, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: mm => "shadowOrthoScale" in mm,
              get: mm => mm.shadowOrthoScale
            },
            metadata: am
          }, null, Ym), (0, hm.g)(null, null, Dm, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: mm => "autoUpdateExtends" in mm,
              get: mm => mm.autoUpdateExtends,
              set: (mm, Tm) => {
                mm.autoUpdateExtends = Tm
              }
            },
            metadata: am
          }, qm, jm), (0, hm.g)(null, null, im, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: mm => "autoCalcShadowZBounds" in mm,
              get: mm => mm.autoCalcShadowZBounds,
              set: (mm, Tm) => {
                mm.autoCalcShadowZBounds = Tm
              }
            },
            metadata: am
          }, Vm, Im), (0, hm.g)(null, null, Rm, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: mm => "_orthoLeft" in mm,
              get: mm => mm._orthoLeft,
              set: (mm, Tm) => {
                mm._orthoLeft = Tm
              }
            },
            metadata: am
          }, Km, Qm), (0, hm.g)(null, null, pm, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: mm => "_orthoRight" in mm,
              get: mm => mm._orthoRight,
              set: (mm, Tm) => {
                mm._orthoRight = Tm
              }
            },
            metadata: am
          }, nm, Jm), (0, hm.g)(null, null, Em, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: mm => "_orthoTop" in mm,
              get: mm => mm._orthoTop,
              set: (mm, Tm) => {
                mm._orthoTop = Tm
              }
            },
            metadata: am
          }, cm, zm), (0, hm.g)(null, null, om, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: mm => "_orthoBottom" in mm,
              get: mm => mm._orthoBottom,
              set: (mm, Tm) => {
                mm._orthoBottom = Tm
              }
            },
            metadata: am
          }, Zm, km), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm
      })(),
      pm = !1;
    pm || (pm = !0, Dm.c.AddNodeConstructor("Light_Type_1", ((mm, Tm) => () => new Rm(mm, am.p.Zero(), Tm))), (0, im.d)("BABYLON.DirectionalLight", Rm))
  },
  41626: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => vT
    });
    var hm = fm(38802),
      Am = fm(37203),
      am = fm(37185),
      xm = fm(40251),
      wm = fm(41634),
      Dm = fm(37201),
      im = fm(40371),
      Rm = fm(37336),
      pm = fm(38807),
      Em = fm(38764),
      om = fm(37208);
    class Om {
      constructor() {
        this.direction1 = new am.p(0, 1, 0), this.direction2 = new am.p(0, 1, 0)
      }
      startDirectionFunction(mm, Tm, fm, hm) {
        const Am = (0, om.RandomRange)(this.direction1.x, this.direction2.x),
          xm = (0, om.RandomRange)(this.direction1.y, this.direction2.y),
          wm = (0, om.RandomRange)(this.direction1.z, this.direction2.z);
        hm ? Tm.Z8(Am, xm, wm) : am.p.TransformNormalFromFloatsToRef(Am, xm, wm, mm, Tm)
      }
      startPositionFunction(mm, Tm, fm, hm) {
        hm ? Tm.Z8(0, 0, 0) : am.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, mm, Tm)
      }
      clone() {
        const mm = new Om;
        return Em.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setVector3("direction1", this.direction1), mm.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(mm) {
        mm.addUniform("direction1", 3), mm.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const mm = {};
        return mm.type = this.getClassName(), mm.direction1 = this.direction1.ahm(), mm.direction2 = this.direction2.ahm(), mm
      }
      parse(mm) {
        am.p.FromArrayToRef(mm.direction1, 0, this.direction1), am.p.FromArrayToRef(mm.direction2, 0, this.direction2)
      }
    }
    class Ym {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = mm, this.radiusRange = Tm, this.directionRandomizer = fm
      }
      startDirectionFunction(mm, Tm, fm, hm) {
        const Am = fm.position.subtract(mm.getTranslation()).normalize(),
          xm = (0, om.RandomRange)(0, this.directionRandomizer),
          wm = (0, om.RandomRange)(0, this.directionRandomizer),
          Dm = (0, om.RandomRange)(0, this.directionRandomizer);
        Am.x += xm, Am.y += wm, Am.z += Dm, Am.normalize(), hm ? Tm.ZZ(Am) : am.p.TransformNormalFromFloatsToRef(Am.x, Am.y, Am.z, mm, Tm)
      }
      startPositionFunction(mm, Tm, fm, hm) {
        const Am = this.radius - (0, om.RandomRange)(0, this.radius * this.radiusRange),
          xm = (0, om.RandomRange)(0, 1),
          wm = (0, om.RandomRange)(0, 2 * Math.PI),
          Dm = Math.acos(2 * xm - 1),
          im = Am * Math.cos(wm) * Math.sin(Dm),
          Rm = Am * Math.cos(Dm),
          pm = Am * Math.sin(wm) * Math.sin(Dm);
        hm ? Tm.Z8(im, Math.abs(Rm), pm) : am.p.TransformCoordinatesFromFloatsToRef(im, Math.abs(Rm), pm, mm, Tm)
      }
      clone() {
        const mm = new Ym(this.radius, this.directionRandomizer);
        return Em.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setFloat("radius", this.radius), mm.setFloat("radiusRange", this.radiusRange), mm.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(mm) {
        mm.addUniform("radius", 1), mm.addUniform("radiusRange", 1), mm.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const mm = {};
        return mm.type = this.getClassName(), mm.radius = this.radius, mm.radiusRange = this.radiusRange, mm.directionRandomizer = this.directionRandomizer, mm
      }
      parse(mm) {
        this.radius = mm.radius, this.radiusRange = mm.radiusRange, this.directionRandomizer = mm.directionRandomizer
      }
    }
    class qm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = mm, this.radiusRange = Tm, this.directionRandomizer = fm
      }
      startDirectionFunction(mm, Tm, fm, hm) {
        const Am = fm.position.subtract(mm.getTranslation()).normalize(),
          xm = (0, om.RandomRange)(0, this.directionRandomizer),
          wm = (0, om.RandomRange)(0, this.directionRandomizer),
          Dm = (0, om.RandomRange)(0, this.directionRandomizer);
        Am.x += xm, Am.y += wm, Am.z += Dm, Am.normalize(), hm ? Tm.ZZ(Am) : am.p.TransformNormalFromFloatsToRef(Am.x, Am.y, Am.z, mm, Tm)
      }
      startPositionFunction(mm, Tm, fm, hm) {
        const Am = this.radius - (0, om.RandomRange)(0, this.radius * this.radiusRange),
          xm = (0, om.RandomRange)(0, 1),
          wm = (0, om.RandomRange)(0, 2 * Math.PI),
          Dm = Math.acos(2 * xm - 1),
          im = Am * Math.cos(wm) * Math.sin(Dm),
          Rm = Am * Math.cos(Dm),
          pm = Am * Math.sin(wm) * Math.sin(Dm);
        hm ? Tm.Z8(im, Rm, pm) : am.p.TransformCoordinatesFromFloatsToRef(im, Rm, pm, mm, Tm)
      }
      clone() {
        const mm = new qm(this.radius, this.directionRandomizer);
        return Em.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setFloat("radius", this.radius), mm.setFloat("radiusRange", this.radiusRange), mm.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(mm) {
        mm.addUniform("radius", 1), mm.addUniform("radiusRange", 1), mm.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const mm = {};
        return mm.type = this.getClassName(), mm.radius = this.radius, mm.radiusRange = this.radiusRange, mm.directionRandomizer = this.directionRandomizer, mm
      }
      parse(mm) {
        this.radius = mm.radius, this.radiusRange = mm.radiusRange, this.directionRandomizer = mm.directionRandomizer
      }
    }
    class jm extends qm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new am.p(0, 1, 0),
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new am.p(0, 1, 0);
        super(mm), this.direction1 = Tm, this.direction2 = fm
      }
      startDirectionFunction(mm, Tm, fm, hm) {
        const Am = (0, om.RandomRange)(this.direction1.x, this.direction2.x),
          xm = (0, om.RandomRange)(this.direction1.y, this.direction2.y),
          wm = (0, om.RandomRange)(this.direction1.z, this.direction2.z);
        hm ? Tm.Z8(Am, xm, wm) : am.p.TransformNormalFromFloatsToRef(Am, xm, wm, mm, Tm)
      }
      clone() {
        const mm = new jm(this.radius, this.direction1, this.direction2);
        return Em.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setFloat("radius", this.radius), mm.setFloat("radiusRange", this.radiusRange), mm.setVector3("direction1", this.direction1), mm.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(mm) {
        mm.addUniform("radius", 1), mm.addUniform("radiusRange", 1), mm.addUniform("direction1", 3), mm.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const mm = super.serialize();
        return mm.direction1 = this.direction1.ahm(), mm.direction2 = this.direction2.ahm(), mm
      }
      parse(mm) {
        super.parse(mm), am.p.FromArrayToRef(mm.direction1, 0, this.direction1), am.p.FromArrayToRef(mm.direction2, 0, this.direction2)
      }
    }
    var Vm = fm(38758);
    class Im {
      get radius() {
        return this._radius
      }
      set radius(mm) {
        this._radius = mm, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(mm) {
        this._angle = mm, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = fm, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Tm, this.radius = mm
      }
      startDirectionFunction(mm, Tm, fm, hm) {
        const Am = fm.position.subtract(mm.getTranslation()).normalize(),
          xm = (0, om.RandomRange)(0, this.directionRandomizer),
          wm = (0, om.RandomRange)(0, this.directionRandomizer),
          Dm = (0, om.RandomRange)(0, this.directionRandomizer);
        Am.x += xm, Am.y += wm, Am.z += Dm, Am.normalize(), hm ? Tm.ZZ(Am) : am.p.TransformNormalFromFloatsToRef(Am.x, Am.y, Am.z, mm, Tm)
      }
      startPositionFunction(mm, Tm, fm, hm) {
        const Am = (0, om.RandomRange)(0, 2 * Math.PI);
        let xm;
        this.emitFromSpawnPointOnly ? xm = 1e-4 : (xm = (0, om.RandomRange)(0, this.heightRange), xm = 1 - xm * xm);
        let wm = this._radius - (0, om.RandomRange)(0, this._radius * this.radiusRange);
        wm *= xm;
        const Dm = wm * Math.sin(Am),
          im = wm * Math.cos(Am),
          Rm = xm * this._height;
        if (hm) return Tm.x = Dm, Tm.y = Rm, void(Tm.z = im);
        am.p.TransformCoordinatesFromFloatsToRef(Dm, Rm, im, mm, Tm)
      }
      clone() {
        const mm = new Im(this._radius, this._angle, this.directionRandomizer);
        return Em.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setFloat2("radius", this._radius, this.radiusRange), mm.setFloat("coneAngle", this._angle), mm.setFloat2("height", this._height, this.heightRange), mm.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(mm) {
        mm.addUniform("radius", 2), mm.addUniform("coneAngle", 1), mm.addUniform("height", 2), mm.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let mm = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (mm += "\n#define CONEEMITTERSPAWNPOINT"), mm
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const mm = {};
        return mm.type = this.getClassName(), mm.radius = this._radius, mm.angle = this._angle, mm.directionRandomizer = this.directionRandomizer, mm.radiusRange = this.radiusRange, mm.heightRange = this.heightRange, mm.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, mm
      }
      parse(mm) {
        this.radius = mm.radius, this.angle = mm.angle, this.directionRandomizer = mm.directionRandomizer, this.radiusRange = void 0 !== mm.radiusRange ? mm.radiusRange : 1, this.heightRange = void 0 !== mm.heightRange ? mm.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== mm.emitFromSpawnPointOnly && mm.emitFromSpawnPointOnly
      }
    }
    class Km extends Im {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new am.p(0, 1, 0),
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new am.p(0, 1, 0);
        super(mm, Tm), this.direction1 = fm, this.direction2 = hm
      }
      startDirectionFunction(mm, Tm, fm, hm) {
        const Am = (0, om.RandomRange)(this.direction1.x, this.direction2.x),
          xm = (0, om.RandomRange)(this.direction1.y, this.direction2.y),
          wm = (0, om.RandomRange)(this.direction1.z, this.direction2.z);
        hm ? Tm.Z8(Am, xm, wm) : am.p.TransformNormalFromFloatsToRef(Am, xm, wm, mm, Tm)
      }
      clone() {
        const mm = new Km(this.radius, this.angle, this.direction1, this.direction2);
        return Em.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        super.applyToShader(mm), mm.setVector3("direction1", this.direction1), mm.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(mm) {
        super.buildUniformLayout(mm), mm.addUniform("direction1", 3), mm.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const mm = super.serialize();
        return mm.direction1 = this.direction1.ahm(), mm.direction2 = this.direction2.ahm(), mm
      }
      parse(mm) {
        super.parse(mm), am.p.FromArrayToRef(mm.direction1, 0, this.direction1), am.p.FromArrayToRef(mm.direction2, 0, this.direction2)
      }
    }
    class Qm {
      get mesh() {
        return this._mesh
      }
      set mesh(mm) {
        this._mesh !== mm && (this._mesh = mm, mm ? (this._indices = mm.xhm(), this._positions = mm.getVerticesData(xm.m.PositionKind), this._normals = mm.getVerticesData(xm.m.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = am.p.Zero(), this._mesh = null, this.direction1 = new am.p(0, 1, 0), this.direction2 = new am.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = mm
      }
      startDirectionFunction(mm, Tm, fm, hm) {
        if (this.useMeshNormalsForDirection && this._normals) return void am.p.TransformNormalToRef(this._storedNormal, mm, Tm);
        const Am = (0, om.RandomRange)(this.direction1.x, this.direction2.x),
          xm = (0, om.RandomRange)(this.direction1.y, this.direction2.y),
          wm = (0, om.RandomRange)(this.direction1.z, this.direction2.z);
        hm ? Tm.Z8(Am, xm, wm) : am.p.TransformNormalFromFloatsToRef(Am, xm, wm, mm, Tm)
      }
      startPositionFunction(mm, Tm, fm, hm) {
        if (!this._indices || !this._positions) return;
        const Am = 3 * (Math.random() * (this._indices.length / 3) | 0),
          xm = Math.random(),
          wm = Math.random() * (1 - xm),
          Dm = 1 - xm - wm,
          im = this._indices[Am],
          Rm = this._indices[Am + 1],
          pm = this._indices[Am + 2],
          Em = am.j.WO[0],
          om = am.j.WO[1],
          Om = am.j.WO[2],
          Ym = am.j.WO[3];
        am.p.FromArrayToRef(this._positions, 3 * im, Em), am.p.FromArrayToRef(this._positions, 3 * Rm, om), am.p.FromArrayToRef(this._positions, 3 * pm, Om), Ym.x = xm * Em.x + wm * om.x + Dm * Om.x, Ym.y = xm * Em.y + wm * om.y + Dm * Om.y, Ym.z = xm * Em.z + wm * om.z + Dm * Om.z, hm ? Tm.Z8(Ym.x, Ym.y, Ym.z) : am.p.TransformCoordinatesFromFloatsToRef(Ym.x, Ym.y, Ym.z, mm, Tm), this.useMeshNormalsForDirection && this._normals && (am.p.FromArrayToRef(this._normals, 3 * im, Em), am.p.FromArrayToRef(this._normals, 3 * Rm, om), am.p.FromArrayToRef(this._normals, 3 * pm, Om), this._storedNormal.x = xm * Em.x + wm * om.x + Dm * Om.x, this._storedNormal.y = xm * Em.y + wm * om.y + Dm * Om.y, this._storedNormal.z = xm * Em.z + wm * om.z + Dm * Om.z)
      }
      clone() {
        const mm = new Qm(this.mesh);
        return Em.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setVector3("direction1", this.direction1), mm.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(mm) {
        mm.addUniform("direction1", 3), mm.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const mm = {};
        return mm.type = this.getClassName(), mm.direction1 = this.direction1.ahm(), mm.direction2 = this.direction2.ahm(), mm.meshId = this.mesh?.id, mm.useMeshNormalsForDirection = this.useMeshNormalsForDirection, mm
      }
      parse(mm, Tm) {
        am.p.FromArrayToRef(mm.direction1, 0, this.direction1), am.p.FromArrayToRef(mm.direction2, 0, this.direction2), mm.meshId && Tm && (this.mesh = Tm.getLastMeshById(mm.meshId)), this.useMeshNormalsForDirection = mm.useMeshNormalsForDirection
      }
    }
    class nm {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(mm) {
        this._targetStopDuration !== mm && (this._targetStopDuration = mm)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(mm) {
        this._noiseTexture !== mm && (this._noiseTexture = mm, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(mm) {
        this._attractors.push(mm)
      }
      removeAttractor(mm) {
        const Tm = this._attractors.indexOf(mm); - 1 !== Tm && this._attractors.splice(Tm, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(mm) {
        this._animationSheetEnabled !== mm && (this._animationSheetEnabled = mm)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(mm) {
        this._isAnimationSheetEnabled != mm && (this._isAnimationSheetEnabled = mm, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(mm) {
        this._useLogarithmicDepth = mm && this.wG().dO().getCaps().fragmentDepthSupported
      }
      wG() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(mm) {
        switch (mm) {
          case nm.BLENDMODE_MULTIPLYADD:
            return;
          case nm.BLENDMODE_ADD:
            mm = 1;
            break;
          case nm.BLENDMODE_ONEONE:
            mm = 6;
            break;
          case nm.BLENDMODE_STANDARD:
            mm = 2;
            break;
          case nm.BLENDMODE_MULTIPLY:
            mm = 4;
            break;
          case nm.BLENDMODE_SUBTRACT:
            mm = 3
        }
        this._engine.setAlphaMode(mm)
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
      addEmitRateGradient(mm, Tm, fm) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, mm, Tm, fm), this
      }
      removeEmitRateGradient(mm) {
        return this._removeFactorGradient(this._emitRateGradients, mm), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : am.p.Zero()
      }
      set direction1(mm) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = mm)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : am.p.Zero()
      }
      set direction2(mm) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = mm)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : am.p.Zero()
      }
      set minEmitBox(mm) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = mm)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : am.p.Zero()
      }
      set maxEmitBox(mm) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = mm)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(mm) {
        this._billboardMode !== mm && (this._billboardMode = mm, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(mm) {
        this._isBillboardBased !== mm && (this._isBillboardBased = mm, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(mm) {
        this._attachImageProcessingConfiguration(mm)
      }
      _attachImageProcessingConfiguration(mm) {
        mm !== this._imageProcessingConfiguration && (!mm && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = mm)
      }
      _reset() {}
      _addFactorGradient(mm, Tm, fm, Am) {
        const am = new hm.f(Tm, fm, Am);
        mm.push(am), mm.sort(((mm, Tm) => mm.gradient < Tm.gradient ? -1 : mm.gradient > Tm.gradient ? 1 : 0))
      }
      _removeFactorGradient(mm, Tm) {
        if (!mm) return;
        let fm = 0;
        for (const hm of mm) {
          if (hm.gradient === Tm) {
            mm.splice(fm, 1);
            break
          }
          fm++
        }
      }
      _removeGradientAndTexture(mm, Tm, fm) {
        if (!Tm) return this;
        let hm = 0;
        for (const Am of Tm) {
          if (Am.gradient === mm) {
            Tm.splice(hm, 1);
            break
          }
          hm++
        }
        return fm && fm.dispose(), this
      }
      constructor(mm) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = am.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new am.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = nm.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new am.l(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new am.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = am.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Rm.c(1, 1, 1, 1), this.color2 = new Rm.c(1, 1, 1, 1), this.colorDead = new Rm.c(0, 0, 0, 1), this.textureMask = new Rm.c(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new im.c, this.id = mm, this.name = mm
      }
      createPointEmitter(mm, Tm) {
        const fm = function(mm, Tm) {
          const fm = new Om;
          return fm.direction1 = mm, fm.direction2 = Tm, fm
        }(mm, Tm);
        return this.particleEmitterType = fm, fm
      }
      createHemisphericEmitter() {
        const mm = function() {
          return new Ym(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = mm, mm
      }
      createSphereEmitter() {
        const mm = function() {
          return new qm(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = mm, mm
      }
      createDirectedSphereEmitter() {
        const mm = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new am.p(0, 1, 0),
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new am.p(0, 1, 0);
          return new jm(mm, Tm, fm)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new am.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new am.p(0, 1, 0));
        return this.particleEmitterType = mm, mm
      }
      createCylinderEmitter() {
        const mm = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Vm.d(mm, Tm, fm, hm)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = mm, mm
      }
      createDirectedCylinderEmitter() {
        const mm = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new am.p(0, 1, 0),
            Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new am.p(0, 1, 0);
          return new Vm.b(mm, Tm, fm, hm, Am)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new am.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new am.p(0, 1, 0));
        return this.particleEmitterType = mm, mm
      }
      createConeEmitter() {
        const mm = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Im(mm, Tm)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = mm, mm
      }
      createDirectedConeEmitter() {
        const mm = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new am.p(0, 1, 0),
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new am.p(0, 1, 0);
          return new Km(mm, Tm, fm, hm)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new am.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new am.p(0, 1, 0));
        return this.particleEmitterType = mm, mm
      }
      createBoxEmitter(mm, Tm, fm, hm) {
        const Am = new pm.b;
        return this.particleEmitterType = Am, this.direction1 = mm, this.direction2 = Tm, this.minEmitBox = fm, this.maxEmitBox = hm, Am
      }
      createMeshEmitter() {
        const mm = function() {
          return new Qm(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = mm, mm
      }
    }
    nm.BLENDMODE_ONEONE = 0, nm.BLENDMODE_STANDARD = 1, nm.BLENDMODE_ADD = 2, nm.BLENDMODE_MULTIPLY = 3, nm.BLENDMODE_MULTIPLYADD = 4, nm.BLENDMODE_SUBTRACT = -1;
    class Jm {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Rm.c(0, 0, 0, 0), this.currentColor2 = new Rm.c(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = am.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class cm {
      constructor(mm) {
        this.particleSystem = mm, this.position = am.p.Zero(), this.direction = am.p.Zero(), this.color = new Rm.c(0, 0, 0, 0), this.colorStep = new Rm.c(0, 0, 0, 0), this.initialColor = new Rm.c(0, 0, 0, 0), this.colorDead = new Rm.c(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new am.l(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Jm, this.id = cm._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let mm = this.age,
          Tm = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Tm ? (Tm = 1, mm = this._properties.randomCellOffset) : mm += this._properties.randomCellOffset);
        const fm = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let hm;
        hm = this._properties.initialSpriteCellLoop ? (0, om.Clamp)(mm * Tm % this.lifeTime / this.lifeTime) : (0, om.Clamp)(mm * Tm / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + hm * fm | 0
      }
      _inheritParticleInfoToSubEmitter(mm) {
        if (mm.particleSystem.emitter.position) {
          const Tm = mm.particleSystem.emitter;
          if (Tm.position.ZZ(this.position), mm.inheritDirection) {
            const mm = am.j.WO[0];
            this.direction.normalizeToRef(mm), Tm.setDirection(mm, 0, Math.PI / 2)
          }
        } else {
          mm.particleSystem.emitter.ZZ(this.position)
        }
        this.direction.scaleToRef(mm.inheritedVelocityAmount / 2, am.j.WO[0]), mm.particleSystem._inheritedVelocityOffset.ZZ(am.j.WO[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const mm of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(mm)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = cm._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(mm) {
        mm.position.ZZ(this.position), this._properties.initialDirection ? mm._properties.initialDirection ? mm._properties.initialDirection.ZZ(this._properties.initialDirection) : mm._properties.initialDirection = this._properties.initialDirection.clone() : mm._properties.initialDirection = null, mm.direction.ZZ(this.direction), this._properties.localPosition && (mm._properties.localPosition ? mm._properties.localPosition.ZZ(this._properties.localPosition) : mm._properties.localPosition = this._properties.localPosition.clone()), mm.color.ZZ(this.color), mm.colorStep.ZZ(this.colorStep), mm.initialColor.ZZ(this.initialColor), mm.colorDead.ZZ(this.colorDead), mm.lifeTime = this.lifeTime, mm.age = this.age, mm._properties.randomCellOffset = this._properties.randomCellOffset, mm.size = this.size, mm.scale.ZZ(this.scale), mm.angle = this.angle, mm.angularSpeed = this.angularSpeed, mm.particleSystem = this.particleSystem, mm.cellIndex = this.cellIndex, mm.id = this.id, mm._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (mm._properties.currentColorGradient = this._properties.currentColorGradient, mm._properties.currentColor1.ZZ(this._properties.currentColor1), mm._properties.currentColor2.ZZ(this._properties.currentColor2)), this._properties.currentSizeGradient && (mm._properties.currentSizeGradient = this._properties.currentSizeGradient, mm._properties.currentSize1 = this._properties.currentSize1, mm._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (mm._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, mm._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, mm._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (mm._properties.currentVelocityGradient = this._properties.currentVelocityGradient, mm._properties.currentVelocity1 = this._properties.currentVelocity1, mm._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (mm._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, mm._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, mm._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (mm._properties.currentDragGradient = this._properties.currentDragGradient, mm._properties.currentDrag1 = this._properties.currentDrag1, mm._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (mm._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, mm._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, mm._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (mm.remapData && this.remapData ? mm.remapData.ZZ(this.remapData) : mm.remapData = new am.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (mm._properties.randomNoiseCoordinates1 && mm._properties.randomNoiseCoordinates2 ? (mm._properties.randomNoiseCoordinates1.ZZ(this._properties.randomNoiseCoordinates1), mm._properties.randomNoiseCoordinates2.ZZ(this._properties.randomNoiseCoordinates2)) : (mm._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), mm._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), mm.metadata = this.metadata
      }
    }
    cm._Count = 0;
    var zm = fm(41155);
    class Zm {
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
      constructor(mm, Tm, fm, hm) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Tm, this.vW = mm, this._scene = fm, this._host = hm, this._activeTargets = [], Tm._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Ea: this._getCorrectLoopMode()
          }, this._animation.dataType === zm.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = am.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const mm = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, mm)
        }
        if (this.vW instanceof Array) {
          let mm = 0;
          for (const Tm of this.vW) this._preparePath(Tm, mm), this._getOriginalValues(mm), mm++;
          this._targetIsArray = !0
        } else this._preparePath(this.vW), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Am = Tm.getEvents();
        if (Am && Am.length > 0)
          for (const am of Am) this._events.push(am._clone());
        this._enableBlending = mm && mm.animationPropertiesOverride ? mm.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = this._animation.targetPropertyPath;
        if (fm.length > 1) {
          let hm = mm;
          for (let mm = 0; mm < fm.length - 1; mm++) {
            const Tm = fm[mm];
            if (hm = hm[Tm], void 0 === hm) throw new Error(`Invalid property (${Tm}) in property path (${fm.join(".")})`)
          }
          this._targetPath = fm[fm.length - 1], this._activeTargets[Tm] = hm
        } else this._targetPath = fm[0], this._activeTargets[Tm] = mm;
        if (void 0 === this._activeTargets[Tm][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${fm.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.vW instanceof Array) {
            let mm = 0;
            for (const Tm of this.vW) void 0 !== this._originalValue[mm] && this._setValue(Tm, this._activeTargets[mm], this._originalValue[mm], -1, mm), mm++
          } else void 0 !== this._originalValue[0] && this._setValue(this.vW, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let mm = 0; mm < this._events.length; mm++) this._events[mm].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const mm = this._animation.runtimeAnimations.indexOf(this);
        mm > -1 && this._animation.runtimeAnimations.splice(mm, 1)
      }
      setValue(mm, Tm) {
        if (this._targetIsArray)
          for (let fm = 0; fm < this.vW.length; fm++) {
            const hm = this.vW[fm];
            this._setValue(hm, this._activeTargets[fm], mm, Tm, fm)
          } else this._setValue(this.vW, this._directTarget, mm, Tm, 0)
      }
      _getOriginalValues() {
        let mm, Tm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const fm = this._activeTargets[Tm];
        if (zm.b.InheritOriginalValueFromActiveAnimations) {
          const mm = this._scene._activeAnimatables;
          for (let hm = 0; hm < mm.length; hm++) {
            const Am = mm[hm]._runtimeAnimations;
            for (let mm = 0; mm < Am.length; mm++) {
              const hm = Am[mm];
              if (hm !== this && hm._targetPath === this._targetPath)
                for (let mm = 0; mm < hm._activeTargets.length; mm++)
                  if (hm._activeTargets[mm] === fm && void 0 !== hm._originalValue[mm]) return void(hm._originalValue[mm] && hm._originalValue[mm].clone ? this._originalValue[Tm] = hm._originalValue[mm].clone() : this._originalValue[Tm] = hm._originalValue[mm])
            }
          }
        }
        mm = fm.getLocalMatrix && "_matrix" === this._targetPath ? fm.getLocalMatrix() : fm[this._targetPath], mm && mm.clone ? this._originalValue[Tm] = mm.clone() : this._originalValue[Tm] = mm
      }
      _registerTargetForLateAnimationBinding(mm, Tm) {
        const fm = mm.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(fm), fm._lateAnimationHolders || (fm._lateAnimationHolders = {}), fm._lateAnimationHolders[mm.targetPath] || (fm._lateAnimationHolders[mm.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Tm
        }), mm.isAdditive ? (fm._lateAnimationHolders[mm.targetPath].additiveAnimations.push(mm), fm._lateAnimationHolders[mm.targetPath].totalAdditiveWeight += mm.weight) : (fm._lateAnimationHolders[mm.targetPath].animations.push(mm), fm._lateAnimationHolders[mm.targetPath].totalWeight += mm.weight)
      }
      _setValue(mm, Tm, fm, hm, Am) {
        const xm = this._scene._animationWrites,
          wm = this._scene._animationWriteCount++;
        let Dm = xm[wm];
        if (Dm || (Dm = xm[wm] = {
            runtimeAnimation: this,
            target: mm,
            weight: hm,
            additive: !1,
            blendingFactor: 1,
            jq: !1
          }), Dm.runtimeAnimation = this, Dm.target = mm, Dm.weight = hm, Dm.additive = this.isAdditive, Dm.jq = !1, this._currentActiveTarget = Tm, this._weight = hm, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const mm = Tm[this._targetPath];
            mm.clone ? this._originalBlendValue = mm.clone() : this._originalBlendValue = mm
          }
          this._originalBlendValue.m ? zm.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? am.e.DecomposeLerpToRef(this._originalBlendValue, fm, this._blendingFactor, this._currentValue) : this._currentValue = am.e.DecomposeLerp(this._originalBlendValue, fm, this._blendingFactor) : this._currentValue ? am.e.LerpToRef(this._originalBlendValue, fm, this._blendingFactor, this._currentValue) : this._currentValue = am.e.Lerp(this._originalBlendValue, fm, this._blendingFactor) : this._currentValue = zm.b._UniversalLerp(this._originalBlendValue, fm, this._blendingFactor);
          const hm = mm && mm.animationPropertiesOverride ? mm.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Dm.blendingFactor = this._blendingFactor, this._blendingFactor += hm
        } else Dm.blendingFactor = 1, this._currentValue ? this._currentValue.ZZ ? this._currentValue.ZZ(fm) : this._currentValue = fm : this._currentValue = fm?.clone ? fm.clone() : fm; - 1 !== hm ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Am]) : this._animationState.Ea === zm.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Am], Tm[this._targetPath]) : Tm[this._targetPath] = this._originalValue[Am] + this._currentValue : Tm[this._targetPath] = this._currentValue, mm.HTm && mm.HTm(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.vW && this.vW.animationPropertiesOverride) {
          return "MorphTarget" === this.vW.getClassName?.() && null == this.vW._animationPropertiesOverride ? this._animation.Ea : this.vW.animationPropertiesOverride.Ea
        }
        return this._animation.Ea
      }
      goToFrame(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const fm = this._animation.getKeys();
        mm < fm[0].frame ? mm = fm[0].frame : mm > fm[fm.length - 1].frame && (mm = fm[fm.length - 1].frame);
        const hm = this._events;
        if (hm.length)
          for (let am = 0; am < hm.length; am++) hm[am].onlyOnce || (hm[am].isDone = hm[am].frame < mm);
        this._currentFrame = mm;
        const Am = this._animation._interpolate(mm, this._animationState);
        this.setValue(Am, Tm)
      }
      _prepareForSpeedRatioChange(mm) {
        const Tm = this._previousElapsedTime * (this._animation.framePerSecond * mm) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Tm
      }
      animate(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const xm = this._animation,
          wm = xm.targetPropertyPath;
        if (!wm || wm.length < 1) return this._stopped = !0, !1;
        let Dm, im = !0;
        const Rm = this._events;
        let pm;
        if (this._coreRuntimeAnimation) pm = fm - Tm, Dm = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Dm, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let am;
          (Tm < this._minFrame || Tm > this._maxFrame) && (Tm = this._minFrame), (fm < this._minFrame || fm > this._maxFrame) && (fm = this._maxFrame), pm = fm - Tm;
          let wm = mm * (xm.framePerSecond * Am) / 1e3 + this._absoluteFrameOffset,
            Em = 0,
            om = !1;
          const Om = hm && this._animationState.Ea === zm.b.ANIMATIONLOOPMODE_YOYO;
          if (Om) {
            const mm = (wm - Tm) / pm,
              fm = Math.sin(mm * Math.PI);
            wm = Math.abs(fm) * pm + Tm;
            const hm = fm >= 0 ? 1 : -1;
            this._yoyoDirection !== hm && (om = !0), this._yoyoDirection = hm
          }
          if (this._previousElapsedTime = mm, this._previousAbsoluteFrame = wm, !hm && fm >= Tm && (wm >= pm && Am > 0 || wm <= 0 && Am < 0)) im = !1, Em = xm.evaluate(fm);
          else if (!hm && Tm >= fm && (wm <= pm && Am < 0 || wm >= 0 && Am > 0)) im = !1, Em = xm.evaluate(Tm);
          else if (this._animationState.Ea !== zm.b.ANIMATIONLOOPMODE_CYCLE) {
            const mm = fm.toString() + Tm.toString();
            if (!this._offsetsCache[mm]) {
              this._animationState.repeatCount = 0, this._animationState.Ea = zm.b.ANIMATIONLOOPMODE_CYCLE;
              const hm = xm._interpolate(Tm, this._animationState),
                Am = xm._interpolate(fm, this._animationState);
              switch (this._animationState.Ea = this._getCorrectLoopMode(), xm.dataType) {
                case zm.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[mm] = Am - hm;
                  break;
                case zm.b.ANIMATIONTYPE_QUATERNION:
                case zm.b.ANIMATIONTYPE_VECTOR3:
                case zm.b.ANIMATIONTYPE_VECTOR2:
                case zm.b.ANIMATIONTYPE_SIZE:
                case zm.b.ANIMATIONTYPE_COLOR3:
                case zm.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[mm] = Am.subtract(hm)
              }
              this._highLimitsCache[mm] = Am
            }
            Em = this._highLimitsCache[mm], am = this._offsetsCache[mm]
          }
          if (void 0 === am) switch (xm.dataType) {
            case zm.b.ANIMATIONTYPE_FLOAT:
              am = 0;
              break;
            case zm.b.ANIMATIONTYPE_QUATERNION:
              am = zm.k;
              break;
            case zm.b.ANIMATIONTYPE_VECTOR3:
              am = zm.t;
              break;
            case zm.b.ANIMATIONTYPE_VECTOR2:
              am = zm.q;
              break;
            case zm.b.ANIMATIONTYPE_SIZE:
              am = zm.m;
              break;
            case zm.b.ANIMATIONTYPE_COLOR3:
              am = zm.g;
              break;
            case zm.b.ANIMATIONTYPE_COLOR4:
              am = zm.h
          }
          const Ym = this._host ? this._host.syncRoot : null;
          let qm, jm = this._playbackFrames,
            Vm = !1;
          if (Ym) {
            const mm = Ym.toFrame - Ym.fromFrame,
              fm = Ym.masterFrame,
              hm = (fm - Ym.fromFrame) / mm;
            Dm = Tm + pm * hm;
            const Am = Ym.getAnimations()[0];
            if (Am && 0 !== mm) {
              const mm = pm * hm,
                Tm = Am._playbackTo - Am._playbackFrom;
              if (0 !== Tm && Am._playbackFrom <= Ym.fromFrame && Am._playbackTo >= Ym.toFrame) {
                jm = pm * Math.round((Am._playbackFrames - (Am._currentFrame - Am._playbackFrom)) / Tm) + mm
              } else Vm = (fm - this._playbackSyncMasterFrame) * (Am._playbackFrames - this._playbackSyncMasterPlayed) < 0, jm = mm;
              Vm = Vm || Am._playbackJumped, this._playbackSyncMasterPlayed = Am._playbackFrames, this._playbackSyncMasterFrame = fm
            }
          } else Dm = wm > 0 && Tm > fm || wm < 0 && Tm < fm ? im && 0 !== pm ? fm + wm % pm : Tm : im && 0 !== pm ? Tm + wm % pm : fm;
          if (!Om && (Am > 0 && this.currentFrame > Dm || Am < 0 && this.currentFrame < Dm) || Om && om) {
            this._onLoop();
            for (let mm = 0; mm < Rm.length; mm++) Rm[mm].onlyOnce || (Rm[mm].isDone = !1);
            this._animationState.key = Am > 0 ? 0 : xm.getKeys().length - 1
          }
          if (this._currentFrame = Dm, this._animationState.repeatCount = 0 === pm ? 0 : wm / pm | 0, this._animationState.highLimitValue = Em, this._animationState.offsetValue = am, this._playbackFrom = Tm, this._playbackTo = fm, this._playbackJumped = Vm, this._playbackSyncRoot = Ym, Ym) qm = jm;
          else if (im) qm = Om ? Dm === Tm && wm === fm ? pm : Dm - Tm : wm;
          else {
            const mm = 0 !== pm ? Math.floor(this._playbackFrames / pm) : 0;
            qm = (Dm === fm ? mm + 1 : mm) * pm
          }
          this._playbackFrames = qm, this._playbackProgress = this._animationState.Ea === zm.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? pm : qm
        }
        const Em = xm._interpolate(Dm, this._animationState);
        if (this.setValue(Em, am), Rm.length)
          for (let om = 0; om < Rm.length; om++)
            if (pm >= 0 && Dm >= Rm[om].frame && Rm[om].frame >= Tm || pm < 0 && Dm <= Rm[om].frame && Rm[om].frame <= Tm) {
              const mm = Rm[om];
              mm.isDone || (mm.onlyOnce && (Rm.splice(om, 1), om--), mm.isDone = !0, mm.action(Dm))
            } return im || (this._stopped = !0), im
      }
    }
    var km = fm(40020);
    class bm {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(mm) {
        this._weight = -1 !== mm ? Math.min(Math.max(mm, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(mm) {
        for (let Tm = 0; Tm < this._runtimeAnimations.length; Tm++) {
          this._runtimeAnimations[Tm]._prepareForSpeedRatioChange(mm)
        }
        this._speedRatio = mm, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          wm = arguments.length > 6 ? arguments[6] : void 0,
          Dm = arguments.length > 7 ? arguments[7] : void 0,
          im = arguments.length > 8 ? arguments[8] : void 0,
          Rm = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          pm = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Tm, this.fromFrame = fm, this.toFrame = hm, this.loopAnimation = am, this.onAnimationEnd = wm, this.onAnimationLoop = im, this.isAdditive = Rm, this.playOrder = pm, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.yI = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Am.c, this.onAnimationLoopObservable = new Am.c, this._scene = mm, Dm && this.appendAnimations(Tm, Dm), this._speedRatio = xm, mm._activeAnimatables.push(this)
      }
      syncWith(mm) {
        if (this._syncRoot = mm, mm) {
          const mm = this._scene._activeAnimatables.indexOf(this);
          mm > -1 && (this._scene._activeAnimatables.splice(mm, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(mm, Tm) {
        for (let fm = 0; fm < Tm.length; fm++) {
          const hm = Tm[fm],
            Am = new Zm(mm, hm, this._scene, this);
          Am._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Am)
        }
      }
      getAnimationByTargetProperty(mm) {
        const Tm = this._runtimeAnimations;
        for (let fm = 0; fm < Tm.length; fm++)
          if (Tm[fm].animation.targetProperty === mm) return Tm[fm].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(mm) {
        const Tm = this._runtimeAnimations;
        for (let fm = 0; fm < Tm.length; fm++)
          if (Tm[fm].animation.targetProperty === mm) return Tm[fm];
        return null
      }
      reset() {
        const mm = this._runtimeAnimations;
        for (let Tm = 0; Tm < mm.length; Tm++) mm[Tm].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(mm) {
        const Tm = this._runtimeAnimations;
        for (let fm = 0; fm < Tm.length; fm++) Tm[fm].animation.enableBlending = !0, Tm[fm].animation.blendingSpeed = mm
      }
      disableBlending() {
        const mm = this._runtimeAnimations;
        for (let Tm = 0; Tm < mm.length; Tm++) mm[Tm].animation.enableBlending = !1
      }
      goToFrame(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this._runtimeAnimations;
        if (fm[0]) {
          const Tm = fm[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? fm[0].currentFrame;
          const hm = 0 === this.speedRatio ? 0 : (mm - this._frameToSyncFromJump) / Tm * 1e3 / this.speedRatio;
          this._manualJumpDelay = -hm
        }
        for (let hm = 0; hm < fm.length; hm++) fm[hm].goToFrame(mm, Tm ? this._weight : -1);
        this._goToFrame = mm
      }
      get paused() {
        return this.yI
      }
      pause() {
        this.yI || (this.yI = !0)
      }
      restart() {
        this.yI = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (mm || Tm) {
          const Am = this._scene._activeAnimatables.indexOf(this);
          if (Am > -1) {
            const am = this._runtimeAnimations;
            for (let fm = am.length - 1; fm >= 0; fm--) {
              const hm = am[fm];
              mm && hm.animation.name != mm || (Tm && !Tm(hm.target) || (hm.dispose(), am.splice(fm, 1)))
            }
            0 == am.length && (fm || this._scene._activeAnimatables.splice(Am, 1), hm || this._raiseOnAnimationEnd())
          }
        } else {
          const mm = this._scene._activeAnimatables.indexOf(this);
          if (mm > -1) {
            fm || this._scene._activeAnimatables.splice(mm, 1);
            const Tm = this._runtimeAnimations;
            for (let mm = 0; mm < Tm.length; mm++) Tm[mm].dispose();
            this._runtimeAnimations.length = 0, hm || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((mm => {
          this.onAnimationEndObservable.add((() => {
            mm(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(mm) {
        if (this.yI) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = mm), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = mm, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += mm - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !bm.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Tm = !1;
        const fm = this._runtimeAnimations;
        let hm;
        for (hm = 0; hm < fm.length; hm++) {
          const Am = fm[hm].animate(mm - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Tm = Tm || Am
        }
        if (this.animationStarted = Tm, !Tm) {
          if (this.disposeOnEnd)
            for (hm = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(hm, 1), hm = 0; hm < fm.length; hm++) fm[hm].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Tm
      }
    }

    function Sm(mm) {
      if (0 === mm.totalWeight && 0 === mm.totalAdditiveWeight) return mm.originalValue;
      let Tm = 1;
      const fm = am.j.WO[0],
        hm = am.j.WO[1],
        Am = am.j.Quaternion[0];
      let xm = 0;
      const wm = mm.animations[0],
        Dm = mm.originalValue;
      let im, Rm = !1;
      if (mm.totalWeight < 1) im = 1 - mm.totalWeight, Dm.decompose(hm, Am, fm);
      else {
        if (xm = 1, Tm = mm.totalWeight, im = wm.weight / Tm, 1 == im) {
          if (!mm.totalAdditiveWeight) return wm.currentValue;
          Rm = !0
        }
        wm.currentValue.decompose(hm, Am, fm)
      }
      if (!Rm) {
        hm.scaleInPlace(im), fm.scaleInPlace(im), Am.scaleInPlace(im);
        for (let wm = xm; wm < mm.animations.length; wm++) {
          const xm = mm.animations[wm];
          if (0 === xm.weight) continue;
          im = xm.weight / Tm;
          const Dm = am.j.WO[2],
            Rm = am.j.WO[3],
            pm = am.j.Quaternion[1];
          xm.currentValue.decompose(Rm, pm, Dm), Rm.scaleAndAddToRef(im, hm), pm.scaleAndAddToRef(am.h.Dot(Am, pm) > 0 ? im : -im, Am), Dm.scaleAndAddToRef(im, fm)
        }
        Am.normalize()
      }
      for (let Em = 0; Em < mm.additiveAnimations.length; Em++) {
        const Tm = mm.additiveAnimations[Em];
        if (0 === Tm.weight) continue;
        const xm = am.j.WO[2],
          wm = am.j.WO[3],
          Dm = am.j.Quaternion[1];
        Tm.currentValue.decompose(wm, Dm, xm), wm.multiplyToRef(hm, wm), am.p.LerpToRef(hm, wm, Tm.weight, hm), Am.multiplyToRef(Dm, Dm), am.h.SlerpToRef(Am, Dm, Tm.weight, Am), xm.scaleAndAddToRef(Tm.weight, fm)
      }
      const pm = wm ? wm._animationState.workValue : am.j.Matrix[0].clone();
      return am.e.ComposeToRef(hm, Am, fm, pm), pm
    }

    function em(mm, Tm) {
      if (0 === mm.totalWeight && 0 === mm.totalAdditiveWeight) return Tm;
      const fm = mm.animations[0],
        hm = mm.originalValue;
      let Am = Tm;
      if (0 === mm.totalWeight && mm.totalAdditiveWeight > 0) Am.ZZ(hm);
      else if (1 === mm.animations.length) {
        if (am.h.SlerpToRef(hm, fm.currentValue, Math.min(1, mm.totalWeight), Am), 0 === mm.totalAdditiveWeight) return Am
      } else if (mm.animations.length > 1) {
        let fm, xm, wm = 1;
        if (mm.totalWeight < 1) {
          const Tm = 1 - mm.totalWeight;
          fm = [], xm = [], fm.push(hm), xm.push(Tm)
        } else {
          if (2 === mm.animations.length && (am.h.SlerpToRef(mm.animations[0].currentValue, mm.animations[1].currentValue, mm.animations[1].weight / mm.totalWeight, Tm), 0 === mm.totalAdditiveWeight)) return Tm;
          fm = [], xm = [], wm = mm.totalWeight
        }
        for (let Tm = 0; Tm < mm.animations.length; Tm++) {
          const hm = mm.animations[Tm];
          fm.push(hm.currentValue), xm.push(hm.weight / wm)
        }
        let Dm = 0;
        for (let mm = 0; mm < fm.length;) mm ? (Dm += xm[mm], am.h.SlerpToRef(Am, fm[mm], xm[mm] / Dm, Am), mm++) : (am.h.SlerpToRef(fm[mm], fm[mm + 1], xm[mm + 1] / (xm[mm] + xm[mm + 1]), Tm), Am = Tm, Dm = xm[mm] + xm[mm + 1], mm += 2)
      }
      for (let xm = 0; xm < mm.additiveAnimations.length; xm++) {
        const Tm = mm.additiveAnimations[xm];
        0 !== Tm.weight && (Am.multiplyToRef(Tm.currentValue, am.j.Quaternion[0]), am.h.SlerpToRef(Am, am.j.Quaternion[0], Tm.weight, Am))
      }
      return Am
    }

    function Nm(mm, Tm) {
      Tm && (Tm.prototype.copyAnimationRange = function(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new zm.b(this.name, "_matrix", mm.animations[0].framePerSecond, zm.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const am = mm.animations[0].getRange(Tm);
        if (!am) return !1;
        const xm = am.from,
          wm = am.to,
          Dm = mm.animations[0].getKeys(),
          im = mm.length,
          Rm = mm.getParent(),
          pm = this.getParent(),
          Em = hm && Rm && im && this.length && im !== this.length,
          om = Em && pm && Rm ? pm.length / Rm.length : 1,
          Om = hm && !pm && Am && (1 !== Am.x || 1 !== Am.y || 1 !== Am.z),
          Ym = this.animations[0].getKeys();
        let qm, jm, Vm;
        for (let Im = 0, Km = Dm.length; Im < Km; Im++) qm = Dm[Im], qm.frame >= xm && qm.frame <= wm && (hm ? (Vm = qm.value.clone(), Em ? (jm = Vm.getTranslation(), Vm.setTranslation(jm.scaleInPlace(om))) : Om && Am ? (jm = Vm.getTranslation(), Vm.setTranslation(jm.multiplyInPlace(Am))) : Vm = qm.value) : Vm = qm.value, Ym.push({
          frame: qm.frame + fm,
          value: Vm
        }));
        return this.animations[0].createRange(Tm, xm + fm, wm + fm), !0
      }), mm && (mm.prototype._animate = function(mm) {
        const Tm = this._animationWrites,
          fm = this._animationWriteCount;
        let hm = 0;
        for (let am = this._animationStepWriteCount; am < fm; am++) {
          const mm = Tm[am];
          mm.jq && -1 === mm.weight || (mm.jq = !0, Tm[am] = Tm[hm], Tm[hm] = mm, hm++)
        }
        for (let am = hm; am < fm; am++) {
          const mm = Tm[am];
          mm.runtimeAnimation = null, mm.target = null
        }
        if (this._animationWriteCount = hm, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Am = km.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Am
        }
        this.deltaTime = void 0 !== mm ? mm : this.useConstantAnimationDeltaTime ? 16 : (Am - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Am;
        const xm = this._activeAnimatables;
        if (0 === xm.length) return;
        this._animationTime += this.deltaTime;
        const wm = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let am = 0; am < xm.length; am++) {
          const mm = xm[am];
          !mm._animate(wm) && mm.disposeOnEnd && am--
        }! function(mm) {
          if (mm._registeredForLateAnimationBindings.length) {
            for (let Tm = 0; Tm < mm._registeredForLateAnimationBindings.length; Tm++) {
              const fm = mm._registeredForLateAnimationBindings.data[Tm];
              for (const mm in fm._lateAnimationHolders) {
                const Tm = fm._lateAnimationHolders[mm],
                  hm = Tm.animations[0],
                  Am = Tm.originalValue;
                if (void 0 === Am || null === Am) continue;
                const xm = zm.b.AllowMatrixDecomposeForInterpolation && Am.m;
                let wm = fm[mm];
                if (xm) wm = Sm(Tm);
                else if (void 0 !== Am.w) wm = em(Tm, wm || am.h.Identity());
                else {
                  let mm = 0,
                    fm = 1;
                  const am = hm && hm._animationState.Ea === zm.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Tm.totalWeight < 1) wm = am ? Am.clone ? Am.clone() : Am : hm && Am.scale ? Am.scale(1 - Tm.totalWeight) : hm ? Am * (1 - Tm.totalWeight) : Am.clone ? Am.clone() : Am;
                  else if (hm) {
                    fm = Tm.totalWeight;
                    const xm = hm.weight / fm;
                    wm = 1 !== xm ? hm.currentValue.scale ? hm.currentValue.scale(xm) : hm.currentValue * xm : (Tm.animations.length > 1 || Tm.additiveAnimations.length > 0) && hm.currentValue.clone ? hm.currentValue.clone() : hm.currentValue, am && (wm.addToRef ? wm.addToRef(Am, wm) : wm += Am), mm = 1
                  }
                  for (let hm = mm; hm < Tm.animations.length; hm++) {
                    const mm = Tm.animations[hm],
                      Am = mm.weight / fm;
                    Am && (mm.currentValue.scaleAndAddToRef ? mm.currentValue.scaleAndAddToRef(Am, wm) : wm += mm.currentValue * Am)
                  }
                  for (let hm = 0; hm < Tm.additiveAnimations.length; hm++) {
                    const mm = Tm.additiveAnimations[hm],
                      fm = mm.weight;
                    fm && (mm.currentValue.scaleAndAddToRef ? mm.currentValue.scaleAndAddToRef(fm, wm) : wm += mm.currentValue * fm)
                  }
                }
                fm[mm] = wm
              }
              fm._lateAnimationHolders = {}
            }
            mm._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, mm.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((mm, Tm) => mm.playOrder - Tm.playOrder))
      }, mm.prototype.beginWeightedAnimation = function(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          xm = arguments.length > 6 ? arguments[6] : void 0,
          wm = arguments.length > 7 ? arguments[7] : void 0,
          Dm = arguments.length > 8 ? arguments[8] : void 0,
          im = arguments.length > 9 ? arguments[9] : void 0,
          Rm = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pm = this.beginAnimation(mm, Tm, fm, Am, am, xm, wm, !1, Dm, im, Rm);
        return pm.weight = hm, pm
      }, mm.prototype.beginAnimation = function(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          am = arguments.length > 5 ? arguments[5] : void 0,
          xm = arguments.length > 6 ? arguments[6] : void 0,
          wm = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Dm = arguments.length > 8 ? arguments[8] : void 0,
          im = arguments.length > 9 ? arguments[9] : void 0,
          Rm = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Am < 0) {
          const mm = Tm;
          Tm = fm, fm = mm, Am = -Am
        }
        Tm > fm && (Am = -Am), wm && this.stopAnimation(mm, void 0, Dm), xm || (xm = new bm(this, mm, Tm, fm, hm, Am, am, void 0, im, Rm));
        const pm = !Dm || Dm(mm);
        if (mm.animations && pm && xm.appendAnimations(mm, mm.animations), mm.getAnimatables) {
          const Rm = mm.getAnimatables();
          for (let mm = 0; mm < Rm.length; mm++) this.beginAnimation(Rm[mm], Tm, fm, hm, Am, am, xm, wm, Dm, im)
        }
        return xm.reset(), xm
      }, mm.prototype.beginHierarchyAnimation = function(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          xm = arguments.length > 6 ? arguments[6] : void 0,
          wm = arguments.length > 7 ? arguments[7] : void 0,
          Dm = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          im = arguments.length > 9 ? arguments[9] : void 0,
          Rm = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const pm = mm.getDescendants(Tm),
          Em = [];
        Em.push(this.beginAnimation(mm, fm, hm, Am, am, xm, wm, Dm, im, void 0, Rm));
        for (const om of pm) Em.push(this.beginAnimation(om, fm, hm, Am, am, xm, wm, Dm, im, void 0, Rm));
        return Em
      }, mm.prototype.beginDirectAnimation = function(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (am < 0) {
          const mm = fm;
          fm = hm, hm = mm, am = -am
        }
        fm > hm && (am = -am);
        return new bm(this, mm, fm, hm, Am, am, arguments.length > 6 ? arguments[6] : void 0, Tm, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, mm.prototype.beginDirectHierarchyAnimation = function(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        let im = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Rm = mm.getDescendants(Tm),
          pm = [];
        pm.push(this.beginDirectAnimation(mm, fm, hm, Am, am, xm, wm, Dm, im));
        for (const Em of Rm) pm.push(this.beginDirectAnimation(Em, fm, hm, Am, am, xm, wm, Dm, im));
        return pm
      }, mm.prototype.getAnimatableByTarget = function(mm) {
        for (let Tm = 0; Tm < this._activeAnimatables.length; Tm++)
          if (this._activeAnimatables[Tm].target === mm) return this._activeAnimatables[Tm];
        return null
      }, mm.prototype.getAllAnimatablesByTarget = function(mm) {
        const Tm = [];
        for (let fm = 0; fm < this._activeAnimatables.length; fm++) this._activeAnimatables[fm].target === mm && Tm.push(this._activeAnimatables[fm]);
        return Tm
      }, mm.prototype.stopAnimation = function(mm, Tm, fm) {
        const hm = this.getAllAnimatablesByTarget(mm);
        for (const Am of hm) Am.stop(Tm, fm)
      }, mm.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let mm = 0; mm < this._activeAnimatables.length; mm++) this._activeAnimatables[mm].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const mm of this.animationGroups) mm.stop()
      })
    }
    bm.ProcessPausedAnimatables = !1;
    var Gm, Xm = fm(37197),
      Pm = fm(40326),
      Hm = fm(39993);
    class ym extends Pm.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(mm) {
        (mm.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.ZZ(mm), this._markAsDirtyAndDecompose())
      }
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(mm, Tm.wG(), !1), this.name = mm, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Tm, this._localMatrix = hm?.clone() ?? am.e.Identity(), this._restMatrix = Am ?? this._localMatrix.clone(), this._bindMatrix = xm ?? this._localMatrix.clone(), this._index = wm, this._absoluteMatrix = new am.e, this._absoluteBindMatrix = new am.e, this._absoluteInverseBindMatrix = new am.e, this._finalMatrix = new am.e, Tm.bones.push(this), this.setParent(fm, !1), this._updateAbsoluteBindMatrices()
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
      set parent(mm) {
        this.setParent(mm)
      }
      setParent(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== mm) {
          if (this.parent) {
            const mm = this.parent.children.indexOf(this); - 1 !== mm && this.parent.children.splice(mm, 1)
          }
          this._parentNode = mm, this.parent && this.parent.children.push(this), Tm && this._updateAbsoluteBindMatrices(), this.HTm()
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
      setRestMatrix(mm) {
        this._restMatrix.ZZ(mm)
      }
      setRestPose(mm) {
        this.setRestMatrix(mm)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(mm) {
        this.K9(mm)
      }
      setBindPose(mm) {
        this.setBindMatrix(mm)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const mm = am.j.WO[0],
            Tm = am.j.Quaternion[0],
            fm = am.j.WO[1];
          this.getRestMatrix().decompose(mm, Tm, fm), this._linkedTransformNode.position.ZZ(fm), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? am.h.Identity(), this._linkedTransformNode.rotationQuaternion.ZZ(Tm), this._linkedTransformNode.fi.ZZ(mm)
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
      linkTransformNode(mm) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = mm, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.Wmm
      }
      set position(mm) {
        this._decompose(), this.Wmm.ZZ(mm), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(mm) {
        this.setRotation(mm)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(mm) {
        this.setRotationQuaternion(mm)
      }
      get fi() {
        return this.getScale()
      }
      set fi(mm) {
        this.setScale(mm)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = am.p.Zero(), this._localRotation = am.h.Zero(), this.Wmm = am.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Wmm))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, am.e.ComposeToRef(this._localScaling, this._localRotation, this.Wmm, this._localMatrix)) : this._needToCompose = !1)
      }
      K9(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.ZZ(mm), Tm && this._updateAbsoluteBindMatrices(), fm ? this._matrix = mm : this.HTm()
      }
      _updateAbsoluteBindMatrices(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (mm || (mm = this._bindMatrix), this.parent ? mm.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.ZZ(mm), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Tm)
          for (let fm = 0; fm < this.children.length; fm++) this.children[fm]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      HTm() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.HTm(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.HTm(), this._needToDecompose = !0
      }
      _updatePosition(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Am = this.getLocalMatrix();
        if (0 == Tm) hm ? (Am.addAtIndex(12, mm.x), Am.addAtIndex(13, mm.y), Am.addAtIndex(14, mm.z)) : Am.setTranslationFromFloats(mm.x, mm.y, mm.z);
        else {
          const Tm = ym._TmpMats[0],
            xm = ym._TmpVecs[0];
          this.parent ? (Tm.ZZ(this.parent.getAbsoluteMatrix()), fm && Tm.multiplyToRef(fm.getWorldMatrix(), Tm)) : am.e.IdentityToRef(Tm), hm && Tm.setTranslationFromFloats(0, 0, 0), Tm.invert(), am.p.TransformCoordinatesToRef(mm, Tm, xm), hm ? (Am.addAtIndex(12, xm.x), Am.addAtIndex(13, xm.y), Am.addAtIndex(14, xm.z)) : Am.setTranslationFromFloats(xm.x, xm.y, xm.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(mm, Tm, fm, !0)
      }
      setPosition(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(mm, Tm, fm, !1)
      }
      setAbsolutePosition(mm, Tm) {
        this.setPosition(mm, 1, Tm)
      }
      scale(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Am = this.getLocalMatrix(),
          xm = ym._TmpMats[0];
        am.e.ScalingToRef(mm, Tm, fm, xm), xm.multiplyToRef(Am, Am), xm.invert();
        for (const am of this.children) {
          const hm = am.getLocalMatrix();
          hm.multiplyToRef(xm, hm), hm.multiplyAtIndex(12, mm), hm.multiplyAtIndex(13, Tm), hm.multiplyAtIndex(14, fm), am._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), hm)
          for (const am of this.children) am.scale(mm, Tm, fm, hm)
      }
      setScale(mm) {
        this._decompose(), this._localScaling.ZZ(mm), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(mm) {
        this._decompose(), mm.ZZ(this._localScaling)
      }
      setYawPitchRoll(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Am = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === hm) {
          const xm = ym._TmpQuat;
          return am.h.RotationYawPitchRollToRef(mm, Tm, fm, xm), void this.setRotationQuaternion(xm, hm, Am)
        }
        const xm = ym._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(xm, Am)) return;
        const wm = ym._TmpMats[1];
        am.e.RotationYawPitchRollToRef(mm, Tm, fm, wm), xm.multiplyToRef(wm, wm), this._rotateWithMatrix(wm, hm, Am)
      }
      rotate(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        const Am = ym._TmpMats[0];
        Am.setTranslationFromFloats(0, 0, 0), am.e.RotationAxisToRef(mm, Tm, Am), this._rotateWithMatrix(Am, fm, hm)
      }
      setAxisAngle(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === fm) {
          const Am = ym._TmpQuat;
          return am.h.RotationAxisToRef(mm, Tm, Am), void this.setRotationQuaternion(Am, fm, hm)
        }
        const Am = ym._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Am, hm)) return;
        const xm = ym._TmpMats[1];
        am.e.RotationAxisToRef(mm, Tm, xm), Am.multiplyToRef(xm, xm), this._rotateWithMatrix(xm, fm, hm)
      }
      setRotation(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(mm.y, mm.x, mm.z, Tm, fm)
      }
      setRotationQuaternion(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Tm) return this._decompose(), this._localRotation.ZZ(mm), void this._markAsDirtyAndCompose();
        const hm = ym._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(hm, fm)) return;
        const Am = ym._TmpMats[1];
        am.e.FromQuaternionToRef(mm, Am), hm.multiplyToRef(Am, Am), this._rotateWithMatrix(Am, Tm, fm)
      }
      setRotationMatrix(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Tm) {
          const hm = ym._TmpQuat;
          return am.h.FromRotationMatrixToRef(mm, hm), void this.setRotationQuaternion(hm, Tm, fm)
        }
        const hm = ym._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(hm, fm)) return;
        const Am = ym._TmpMats[1];
        Am.ZZ(mm), hm.multiplyToRef(mm, Am), this._rotateWithMatrix(Am, Tm, fm)
      }
      _rotateWithMatrix(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = this.getLocalMatrix(),
          Am = hm.m[12],
          am = hm.m[13],
          xm = hm.m[14],
          wm = this.getParent(),
          Dm = ym._TmpMats[3],
          im = ym._TmpMats[4];
        wm && 1 == Tm ? (fm ? (Dm.ZZ(fm.getWorldMatrix()), wm.getAbsoluteMatrix().multiplyToRef(Dm, Dm)) : Dm.ZZ(wm.getAbsoluteMatrix()), im.ZZ(Dm), im.invert(), hm.multiplyToRef(Dm, hm), hm.multiplyToRef(mm, hm), hm.multiplyToRef(im, hm)) : 1 == Tm && fm ? (Dm.ZZ(fm.getWorldMatrix()), im.ZZ(Dm), im.invert(), hm.multiplyToRef(Dm, hm), hm.multiplyToRef(mm, hm), hm.multiplyToRef(im, hm)) : hm.multiplyToRef(mm, hm), hm.setTranslationFromFloats(Am, am, xm), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(mm, Tm) {
        const fm = ym._TmpMats[2];
        return mm.ZZ(this.getAbsoluteMatrix()), Tm ? (mm.multiplyToRef(Tm.getWorldMatrix(), mm), am.e.ScalingToRef(Tm.fi.x, Tm.fi.y, Tm.fi.z, fm)) : am.e.IdentityToRef(fm), mm.invert(), !isNaN(mm.m[0]) && (fm.multiplyAtIndex(0, this._scalingDeterminant), mm.multiplyToRef(fm, mm), !0)
      }
      rV() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const fm = am.p.Zero();
        return this.getPositionToRef(mm, Tm, fm), fm
      }
      getPositionToRef() {
        let mm = arguments.length > 1 ? arguments[1] : void 0,
          Tm = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const mm = this.getLocalMatrix();
          Tm.x = mm.m[12], Tm.y = mm.m[13], Tm.z = mm.m[14]
        } else {
          const fm = ym._TmpMats[0].ZZ(this.getAbsoluteMatrix());
          mm && fm.multiplyToRef(mm.getWorldMatrix(), fm), Tm.x = fm.m[12], Tm.y = fm.m[13], Tm.z = fm.m[14]
        }
      }
      getAbsolutePosition() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Tm = am.p.Zero();
        return this.getPositionToRef(1, mm, Tm), Tm
      }
      getAbsolutePositionToRef(mm, Tm) {
        this.getPositionToRef(1, mm, Tm)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.ZZ(this._localMatrix);
          const mm = this._skeleton.getPoseMatrix();
          mm && this._absoluteMatrix.multiplyToRef(mm, this._absoluteMatrix)
        }
        const mm = this.children,
          Tm = mm.length;
        for (let fm = 0; fm < Tm; fm++) mm[fm].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      dU(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const fm = am.p.Zero();
        return this.getDirectionToRef(mm, Tm, fm), fm
      }
      getDirectionToRef(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = ym._TmpMats[0].ZZ(this.getAbsoluteMatrix());
        Tm && hm.multiplyToRef(Tm.getWorldMatrix(), hm), am.p.TransformNormalToRef(mm, hm, fm), fm.normalize()
      }
      getRotation() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const fm = am.p.Zero();
        return this.getRotationToRef(mm, Tm, fm), fm
      }
      getRotationToRef() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = ym._TmpQuat;
        this.getRotationQuaternionToRef(mm, Tm, hm), hm.toEulerAnglesToRef(fm)
      }
      getRotationQuaternion() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const fm = am.h.Identity();
        return this.getRotationQuaternionToRef(mm, Tm, fm), fm
      }
      getRotationQuaternionToRef() {
        let mm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Tm = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Tm.ZZ(this._localRotation);
        else {
          const fm = ym._TmpMats[0],
            hm = this.getAbsoluteMatrix();
          mm ? hm.multiplyToRef(mm.getWorldMatrix(), fm) : fm.ZZ(hm), fm.multiplyAtIndex(0, this._scalingDeterminant), fm.multiplyAtIndex(1, this._scalingDeterminant), fm.multiplyAtIndex(2, this._scalingDeterminant), fm.decompose(void 0, Tm, void 0)
        }
      }
      getRotationMatrix() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 ? arguments[1] : void 0;
        const fm = am.e.Identity();
        return this.getRotationMatrixToRef(mm, Tm, fm), fm
      }
      getRotationMatrixToRef() {
        let mm = arguments.length > 1 ? arguments[1] : void 0,
          Tm = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Tm);
        else {
          const fm = ym._TmpMats[0],
            hm = this.getAbsoluteMatrix();
          mm ? hm.multiplyToRef(mm.getWorldMatrix(), fm) : fm.ZZ(hm), fm.multiplyAtIndex(0, this._scalingDeterminant), fm.multiplyAtIndex(1, this._scalingDeterminant), fm.multiplyAtIndex(2, this._scalingDeterminant), fm.getRotationMatrixToRef(Tm)
        }
      }
      getAbsolutePositionFromLocal(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const fm = am.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(mm, Tm, fm), fm
      }
      getAbsolutePositionFromLocalToRef(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = ym._TmpMats[0].ZZ(this.getAbsoluteMatrix());
        Tm && hm.multiplyToRef(Tm.getWorldMatrix(), hm), am.p.TransformCoordinatesToRef(mm, hm, fm)
      }
      getLocalPositionFromAbsolute(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const fm = am.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(mm, Tm, fm), fm
      }
      getLocalPositionFromAbsoluteToRef(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = ym._TmpMats[0].ZZ(this.getAbsoluteMatrix());
        Tm && hm.multiplyToRef(Tm.getWorldMatrix(), hm), hm.invert(), am.p.TransformCoordinatesToRef(mm, hm, fm)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const mm = this._skeleton.bones.indexOf(this);
        if (-1 !== mm && this._skeleton.bones.splice(mm, 1), this._parentNode && this._parentNode.children) {
          const mm = this._parentNode.children,
            Tm = mm.indexOf(this); - 1 !== Tm && mm.splice(Tm, 1)
        }
        super.dispose()
      }
    }
    ym._TmpVecs = (0, Xm.c)(2, am.p.Zero), ym._TmpQuat = am.h.Identity(), ym._TmpMats = (0, Xm.c)(5, am.e.Identity), (Gm = ym.prototype).copyAnimationRange ?? (Gm.copyAnimationRange = (0, Hm.f)("Bone", "copyAnimationRange"));
    var Cm = fm(40199);
    let rm = !1;
    var sm = fm(40082),
      lm = fm(40423),
      Mm = fm(40432),
      um = fm(40428),
      Bm = fm(40230);

    function Lm(mm, Tm) {
      const fm = (0, om.RandomRange)(0, 1);
      Rm.c.LerpToRef(Tm.color1, Tm.color2, fm, mm.color)
    }

    function tm(mm, Tm) {
      Tm.colorDead.subtractToRef(mm.color, Tm._colorDiff), Tm._colorDiff.scaleToRef(1 / mm.lifeTime, mm.colorStep)
    }

    function Um(mm, Tm) {
      mm._properties.currentColorGradient = Tm._colorGradients[0], mm._properties.currentColorGradient.getColorToRef(mm.color), mm._properties.currentColor1.ZZ(mm.color), Tm._colorGradients.length > 1 ? Tm._colorGradients[1].getColorToRef(mm._properties.currentColor2) : mm._properties.currentColor2.ZZ(mm.color)
    }

    function dm(mm, Tm) {
      const fm = Tm._colorGradients;
      hm.j.GetCurrentGradient(Tm._ratio, fm, ((Tm, fm, hm) => {
        Tm !== mm._properties.currentColorGradient && (mm._properties.currentColor1.ZZ(mm._properties.currentColor2), fm.getColorToRef(mm._properties.currentColor2), mm._properties.currentColorGradient = Tm), Rm.c.LerpToRef(mm._properties.currentColor1, mm._properties.currentColor2, hm, mm.color), mm.color.a < 0 && (mm.color.a = 0)
      }))
    }

    function gm(mm, Tm) {
      mm.colorStep.scaleToRef(Tm._scaledUpdateSpeed, Tm._scaledColorStep), mm.color.addInPlace(Tm._scaledColorStep), mm.color.a < 0 && (mm.color.a = 0)
    }

    function Wm(mm, Tm) {
      hm.j.GetCurrentGradient(Tm._ratio, Tm._angularSpeedGradients, ((Tm, fm, hm) => {
        Tm !== mm._properties.currentAngularSpeedGradient && (mm._properties.currentAngularSpeed1 = mm._properties.currentAngularSpeed2, mm._properties.currentAngularSpeed2 = fm.getFactor(), mm._properties.currentAngularSpeedGradient = Tm), mm.angularSpeed = (0, om.Lerp)(mm._properties.currentAngularSpeed1, mm._properties.currentAngularSpeed2, hm)
      }))
    }

    function Fm(mm, Tm) {
      mm.angle += mm.angularSpeed * Tm._scaledUpdateSpeed
    }

    function mT(mm, Tm) {
      Tm.particleEmitterType.startDirectionFunction(Tm._emitterWorldMatrix, mm.direction, mm, Tm.isLocal, Tm._emitterInverseWorldMatrix)
    }

    function TT(mm, Tm) {
      Tm.startDirectionFunction(Tm._emitterWorldMatrix, mm.direction, mm, Tm.isLocal)
    }

    function fT(mm, Tm) {
      mm._properties.currentVelocityGradient = Tm._velocityGradients[0], mm._properties.currentVelocity1 = mm._properties.currentVelocityGradient.getFactor(), Tm._velocityGradients.length > 1 ? mm._properties.currentVelocity2 = Tm._velocityGradients[1].getFactor() : mm._properties.currentVelocity2 = mm._properties.currentVelocity1
    }

    function hT(mm, Tm) {
      mm._properties.currentLimitVelocityGradient = Tm._limitVelocityGradients[0], mm._properties.currentLimitVelocity1 = mm._properties.currentLimitVelocityGradient.getFactor(), Tm._limitVelocityGradients.length > 1 ? mm._properties.currentLimitVelocity2 = Tm._limitVelocityGradients[1].getFactor() : mm._properties.currentLimitVelocity2 = mm._properties.currentLimitVelocity1
    }

    function AT(mm, Tm) {
      hm.j.GetCurrentGradient(Tm._ratio, Tm._velocityGradients, ((Tm, fm, hm) => {
        Tm !== mm._properties.currentVelocityGradient && (mm._properties.currentVelocity1 = mm._properties.currentVelocity2, mm._properties.currentVelocity2 = fm.getFactor(), mm._properties.currentVelocityGradient = Tm), mm._properties.directionScale *= (0, om.Lerp)(mm._properties.currentVelocity1, mm._properties.currentVelocity2, hm)
      }))
    }

    function aT(mm, Tm) {
      hm.j.GetCurrentGradient(Tm._ratio, Tm._limitVelocityGradients, ((fm, hm, Am) => {
        fm !== mm._properties.currentLimitVelocityGradient && (mm._properties.currentLimitVelocity1 = mm._properties.currentLimitVelocity2, mm._properties.currentLimitVelocity2 = hm.getFactor(), mm._properties.currentLimitVelocityGradient = fm);
        const am = (0, om.Lerp)(mm._properties.currentLimitVelocity1, mm._properties.currentLimitVelocity2, Am);
        mm.direction.length() > am && mm.direction.scaleInPlace(Tm.limitVelocityDamping)
      }))
    }

    function xT(mm) {
      mm.direction.scaleToRef(mm._properties.directionScale, mm._properties.scaledDirection)
    }

    function wT(mm, Tm) {
      Tm.particleEmitterType.startPositionFunction(Tm._emitterWorldMatrix, mm.position, mm, Tm.isLocal)
    }

    function DT(mm, Tm) {
      Tm.startPositionFunction(Tm._emitterWorldMatrix, mm.position, mm, Tm.isLocal)
    }

    function iT(mm, Tm) {
      mm._properties.localPosition ? mm._properties.localPosition.ZZ(mm.position) : mm._properties.localPosition = mm.position.clone(), am.p.TransformCoordinatesToRef(mm._properties.localPosition, Tm._emitterWorldMatrix, mm.position)
    }

    function RT(mm, Tm) {
      Tm.isLocal && mm._properties.localPosition ? (mm._properties.localPosition.addInPlace(mm._properties.scaledDirection), am.p.TransformCoordinatesToRef(mm._properties.localPosition, Tm._emitterWorldMatrix, mm.position)) : mm.position.addInPlace(mm._properties.scaledDirection)
    }

    function pT(mm, Tm) {
      mm._properties.currentDragGradient = Tm._dragGradients[0], mm._properties.currentDrag1 = mm._properties.currentDragGradient.getFactor(), Tm._dragGradients.length > 1 ? mm._properties.currentDrag2 = Tm._dragGradients[1].getFactor() : mm._properties.currentDrag2 = mm._properties.currentDrag1
    }

    function ET(mm, Tm) {
      hm.j.GetCurrentGradient(Tm._ratio, Tm._dragGradients, ((Tm, fm, hm) => {
        Tm !== mm._properties.currentDragGradient && (mm._properties.currentDrag1 = mm._properties.currentDrag2, mm._properties.currentDrag2 = fm.getFactor(), mm._properties.currentDragGradient = Tm);
        const Am = (0, om.Lerp)(mm._properties.currentDrag1, mm._properties.currentDrag2, hm);
        mm._properties.scaledDirection.scaleInPlace(1 - Am)
      }))
    }

    function oT(mm, Tm) {
      mm._properties.randomNoiseCoordinates1 && mm._properties.randomNoiseCoordinates2 ? (mm._properties.randomNoiseCoordinates1.Z8(Math.random(), Math.random(), Math.random()), mm._properties.randomNoiseCoordinates2.Z8(Math.random(), Math.random(), Math.random())) : (mm._properties.randomNoiseCoordinates1 = new am.p(Math.random(), Math.random(), Math.random()), mm._properties.randomNoiseCoordinates2 = new am.p(Math.random(), Math.random(), Math.random()))
    }

    function OT(mm, Tm) {
      const fm = Tm._noiseTextureData,
        hm = Tm._noiseTextureSize;
      if (fm && hm && mm._properties.randomNoiseCoordinates1 && mm._properties.randomNoiseCoordinates2) {
        const Am = Tm._fetchR(mm._properties.randomNoiseCoordinates1.x, mm._properties.randomNoiseCoordinates1.y, hm.width, hm.height, fm),
          xm = Tm._fetchR(mm._properties.randomNoiseCoordinates1.z, mm._properties.randomNoiseCoordinates2.x, hm.width, hm.height, fm),
          wm = Tm._fetchR(mm._properties.randomNoiseCoordinates2.y, mm._properties.randomNoiseCoordinates2.z, hm.width, hm.height, fm),
          Dm = am.j.WO[0],
          im = am.j.WO[1];
        Dm.Z8((2 * Am - 1) * Tm.noiseStrength.x, (2 * xm - 1) * Tm.noiseStrength.y, (2 * wm - 1) * Tm.noiseStrength.z), Dm.scaleToRef(Tm._tempScaledUpdateSpeed, im), mm.direction.addInPlace(im)
      }
    }

    function YT(mm, Tm) {
      Tm.gravity.scaleToRef(Tm._tempScaledUpdateSpeed, Tm._scaledGravity), mm.direction.addInPlace(Tm._scaledGravity)
    }

    function qT(mm, Tm) {
      mm.size = (0, om.RandomRange)(Tm.minSize, Tm.maxSize), mm.scale.Z8((0, om.RandomRange)(Tm.minScaleX, Tm.maxScaleX), (0, om.RandomRange)(Tm.minScaleY, Tm.maxScaleY))
    }

    function jT(mm, Tm) {
      mm._properties.currentSizeGradient = Tm._sizeGradients[0], mm._properties.currentSize1 = mm._properties.currentSizeGradient.getFactor(), mm.size = mm._properties.currentSize1, Tm._sizeGradients.length > 1 ? mm._properties.currentSize2 = Tm._sizeGradients[1].getFactor() : mm._properties.currentSize2 = mm._properties.currentSize1, mm.scale.Z8((0, om.RandomRange)(Tm.minScaleX, Tm.maxScaleX), (0, om.RandomRange)(Tm.minScaleY, Tm.maxScaleY))
    }

    function VT(mm, Tm) {
      const fm = Tm._actualFrame / Tm.targetStopDuration;
      hm.j.GetCurrentGradient(fm, Tm._startSizeGradients, ((fm, hm, Am) => {
        fm !== Tm._currentStartSizeGradient && (Tm._currentStartSize1 = Tm._currentStartSize2, Tm._currentStartSize2 = hm.getFactor(), Tm._currentStartSizeGradient = fm);
        const am = (0, om.Lerp)(Tm._currentStartSize1, Tm._currentStartSize2, Am);
        mm.scale.scaleInPlace(am)
      }))
    }

    function IT(mm, Tm) {
      hm.j.GetCurrentGradient(Tm._ratio, Tm._sizeGradients, ((Tm, fm, hm) => {
        Tm !== mm._properties.currentSizeGradient && (mm._properties.currentSize1 = mm._properties.currentSize2, mm._properties.currentSize2 = fm.getFactor(), mm._properties.currentSizeGradient = Tm), mm.size = (0, om.Lerp)(mm._properties.currentSize1, mm._properties.currentSize2, hm)
      }))
    }

    function KT(mm, Tm) {
      mm.remapData = new am.t(0, 1, 0, 1)
    }

    function QT(mm, Tm) {
      Tm._colorRemapGradients && Tm._colorRemapGradients.length > 0 && hm.j.GetCurrentGradient(Tm._ratio, Tm._colorRemapGradients, ((Tm, fm, hm) => {
        const Am = (0, om.Lerp)(Tm.factor1, fm.factor1, hm),
          am = (0, om.Lerp)(Tm.factor2, fm.factor2, hm);
        mm.remapData.x = Am, mm.remapData.y = am - Am
      })), Tm._alphaRemapGradients && Tm._alphaRemapGradients.length > 0 && hm.j.GetCurrentGradient(Tm._ratio, Tm._alphaRemapGradients, ((Tm, fm, hm) => {
        const Am = (0, om.Lerp)(Tm.factor1, fm.factor1, hm),
          am = (0, om.Lerp)(Tm.factor2, fm.factor2, hm);
        mm.remapData.z = Am, mm.remapData.w = am - Am
      }))
    }

    function nT(mm, Tm) {
      const fm = (0, om.Clamp)(Tm._actualFrame / Tm.targetStopDuration);
      hm.j.GetCurrentGradient(fm, Tm._lifeTimeGradients, ((Tm, hm) => {
        const Am = Tm,
          am = hm,
          xm = Am.getFactor(),
          wm = am.getFactor(),
          Dm = (fm - Am.gradient) / (am.gradient - Am.gradient);
        mm.lifeTime = (0, om.Lerp)(xm, wm, Dm)
      })), Tm._emitPower = (0, om.RandomRange)(Tm.minEmitPower, Tm.maxEmitPower)
    }

    function JT(mm, Tm) {
      mm.lifeTime = (0, om.RandomRange)(Tm.minLifeTime, Tm.maxLifeTime), Tm._emitPower = (0, om.RandomRange)(Tm.minEmitPower, Tm.maxEmitPower)
    }

    function cT(mm, Tm) {
      0 === Tm._emitPower ? (mm._properties.initialDirection ? mm._properties.initialDirection.ZZ(mm.direction) : mm._properties.initialDirection = mm.direction.clone(), mm.direction.set(0, 0, 0)) : (mm._properties.initialDirection = null, mm.direction.scaleInPlace(Tm._emitPower)), mm.direction.addInPlace(Tm._inheritedVelocityOffset)
    }

    function zT(mm, Tm) {
      mm.angularSpeed = (0, om.RandomRange)(Tm.minAngularSpeed, Tm.maxAngularSpeed), mm.angle = (0, om.RandomRange)(Tm.minInitialRotation, Tm.maxInitialRotation)
    }

    function ZT(mm, Tm) {
      mm._properties.currentAngularSpeedGradient = Tm._angularSpeedGradients[0], mm.angularSpeed = mm._properties.currentAngularSpeedGradient.getFactor(), mm._properties.currentAngularSpeed1 = mm.angularSpeed, Tm._angularSpeedGradients.length > 1 ? mm._properties.currentAngularSpeed2 = Tm._angularSpeedGradients[1].getFactor() : mm._properties.currentAngularSpeed2 = mm._properties.currentAngularSpeed1, mm.angle = (0, om.RandomRange)(Tm.minInitialRotation, Tm.maxInitialRotation)
    }

    function kT(mm, Tm) {
      mm._properties.initialStartSpriteCellId = Tm.startSpriteCellID, mm._properties.initialEndSpriteCellId = Tm.endSpriteCellID, mm._properties.initialSpriteCellLoop = Tm.spriteCellLoop
    }

    function bT(mm, Tm) {
      mm.previousItem = Tm.previousItem, mm.nextItem = Tm, Tm.previousItem && (Tm.previousItem.nextItem = mm), Tm.previousItem = mm
    }

    function ST(mm, Tm) {
      mm.previousItem = Tm, mm.nextItem = Tm.nextItem, Tm.nextItem && (Tm.nextItem.previousItem = mm), Tm.nextItem = mm
    }

    function eT(mm) {
      mm.previousItem && (mm.previousItem.nextItem = mm.nextItem), mm.nextItem && (mm.nextItem.previousItem = mm.previousItem)
    }
    var NT = fm(40483);
    class GT extends nm {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(mm) {
        this._startDirectionFunction !== mm && (this._startDirectionFunction = mm, this._directionCreation.process = mm ? TT : mT)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(mm) {
        this._startPositionFunction !== mm && (this._startPositionFunction = mm, this._positionCreation.process = mm ? DT : wT)
      }
      set onDispose(mm) {
        this._onDisposeObserver && this.iG.remove(this._onDisposeObserver), this._onDisposeObserver = this.iG.add(mm)
      }
      get aJ() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(mm) {
        this._useRampGradients !== mm && (this._useRampGradients = mm, this._resetEffect(), mm ? (this._rampCreation = {
          process: KT,
          previousItem: null,
          nextItem: null
        }, ST(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: QT,
          previousItem: null,
          nextItem: null
        }, ST(this._remapGradientProcessing, this._gravityProcessing))) : (eT(this._rampCreation), eT(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(mm) {
        this._isLocal !== mm && (this._isLocal = mm, mm ? (this._isLocalCreation = {
          process: iT,
          previousItem: null,
          nextItem: null
        }, ST(this._isLocalCreation, this._positionCreation)) : eT(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(mm) {
        this._animationSheetEnabled !== mm && (this._animationSheetEnabled = mm, mm ? (this._sheetCreation = {
          process: kT,
          previousItem: null,
          nextItem: null
        }, ST(this._sheetCreation, this._colorDeadCreation)) : eT(this._sheetCreation), this._reset())
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
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[mm]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[mm] ?? this._customWrappers[0]
      }
      setCustomEffect(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Tm] = new lm.b(this._engine), this._customWrappers[Tm].effect = mm, this._customWrappers[Tm].drawContext && (this._customWrappers[Tm].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Am.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(mm) {
        if (this.noiseTexture !== mm) {
          if (this._noiseTexture = mm, !mm) return eT(this._noiseCreation), void eT(this._noiseProcessing);
          this._noiseCreation = {
            process: oT,
            previousItem: null,
            nextItem: null
          }, ST(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: OT,
            previousItem: null,
            nextItem: null
          }, ST(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          xm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          wm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          im = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        rm || (rm = !0, Nm(Cm.f, ym)), (0, sm.e)(), super(mm), this._emitterInverseWorldMatrix = am.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new am.p, this.iG = new Am.c, this.onStoppedObservable = new Am.c, this.onStartedObservable = new Am.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Rm.c(0, 0, 0, 0), this._colorDiff = new Rm.c(0, 0, 0, 0), this._scaledGravity = am.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = mm => {}, this.recycleParticle = mm => {
          const Tm = this._particles.pop();
          Tm !== mm && Tm.copyTo(mm), Tm.metadata = null, this._stockParticles.push(Tm)
        }, this._createParticle = () => {
          let mm;
          return 0 !== this._stockParticles.length ? (mm = this._stockParticles.pop(), mm._reset()) : mm = new cm(this), this._prepareParticle(mm), mm
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Tm, this._epsilon = wm, fm && "Scene" !== fm.getClassName() ? (this._engine = fm, this.defaultProjectionMatrix = am.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = fm || Dm.c.LastCreatedScene, this._engine = this._scene.dO(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.VK.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: JT,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: wT,
          previousItem: null,
          nextItem: null
        }, ST(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: mT,
          previousItem: null,
          nextItem: null
        }, ST(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: cT,
          previousItem: null,
          nextItem: null
        }, ST(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: qT,
          previousItem: null,
          nextItem: null
        }, ST(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: zT,
          previousItem: null,
          nextItem: null
        }, ST(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Lm,
          previousItem: null,
          nextItem: null
        }, ST(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: tm,
          previousItem: null,
          nextItem: null
        }, ST(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, im || (this._colorProcessing = {
          process: gm,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Fm,
          previousItem: null,
          nextItem: null
        }, ST(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: xT,
          previousItem: null,
          nextItem: null
        }, ST(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: RT,
          previousItem: null,
          nextItem: null
        }, ST(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: YT,
          previousItem: null,
          nextItem: null
        }, ST(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = xm, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new lm.b(this._engine)
        }, this._customWrappers[0].effect = hm, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new pm.b, this.updateFunction = mm => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((mm => {
            this._noiseTextureData = mm
          })));
          const Tm = mm === this._particles;
          for (let fm = 0; fm < mm.length; fm++) {
            const hm = mm[fm];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Am = hm.age;
            if (hm.age += this._tempScaledUpdateSpeed, hm.age > hm.lifeTime) {
              const mm = hm.age - Am,
                Tm = hm.lifeTime - Am;
              this._tempScaledUpdateSpeed = Tm * this._tempScaledUpdateSpeed / mm, hm.age = hm.lifeTime
            }
            this._ratio = hm.age / hm.lifeTime, hm._properties.directionScale = this._tempScaledUpdateSpeed;
            let am = this._updateQueueStart;
            for (; am;) am.process(hm, this), am = am.nextItem;
            if (this._isAnimationSheetEnabled && !im && hm.updateCellIndex(), hm._inheritParticleInfoToSubEmitters(), hm.age >= hm.lifeTime) {
              if (this._emitFromParticle(hm), hm._properties.attachedSubEmitters) {
                for (const mm of hm._properties.attachedSubEmitters) mm.particleSystem.disposeOnStop = !0, mm.particleSystem.stop();
                hm._properties.attachedSubEmitters = null
              }
              this.recycleParticle(hm), Tm && fm--
            } else;
          }
        }
      }
      serialize(mm) {
        throw new Error("Method not implemented.")
      }
      clone(mm, Tm) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = nT : this._lifeTimeCreation.process = JT
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: VT,
          previousItem: null,
          nextItem: null
        }, ST(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (eT(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(mm) {
        this.targetStopDuration !== mm && (this._targetStopDuration = mm, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(mm, Tm, fm) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, mm, Tm, fm), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(mm) {
        return this._removeFactorGradient(this._lifeTimeGradients, mm), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(mm, Tm, fm) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = jT, this._sizeGradientProcessing = {
          process: IT,
          previousItem: null,
          nextItem: null
        }, bT(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, mm, Tm, fm), this
      }
      removeSizeGradient(mm) {
        return this._removeFactorGradient(this._sizeGradients, mm), 0 === this._sizeGradients?.length && (eT(this._sizeGradientProcessing), this._sizeCreation.process = qT), this
      }
      addColorRemapGradient(mm, Tm, fm) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, mm, Tm, fm), this
      }
      removeColorRemapGradient(mm) {
        return this._removeFactorGradient(this._colorRemapGradients, mm), this
      }
      addAlphaRemapGradient(mm, Tm, fm) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, mm, Tm, fm), this
      }
      removeAlphaRemapGradient(mm) {
        return this._removeFactorGradient(this._alphaRemapGradients, mm), this
      }
      addAngularSpeedGradient(mm, Tm, fm) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = ZT, this._angularSpeedGradientProcessing = {
          process: Wm,
          previousItem: null,
          nextItem: null
        }, bT(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, mm, Tm, fm), this
      }
      removeAngularSpeedGradient(mm) {
        return this._removeFactorGradient(this._angularSpeedGradients, mm), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = zT, eT(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(mm, Tm, fm) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: fT,
          previousItem: null,
          nextItem: null
        }, ST(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: AT,
          previousItem: null,
          nextItem: null
        }, bT(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, mm, Tm, fm), this
      }
      removeVelocityGradient(mm) {
        return this._removeFactorGradient(this._velocityGradients, mm), 0 === this._velocityGradients?.length && (eT(this._velocityCreation), eT(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(mm, Tm, fm) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: hT,
          previousItem: null,
          nextItem: null
        }, ST(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: aT,
          previousItem: null,
          nextItem: null
        }, ST(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, mm, Tm, fm), this
      }
      removeLimitVelocityGradient(mm) {
        return this._removeFactorGradient(this._limitVelocityGradients, mm), 0 === this._limitVelocityGradients?.length && (eT(this._limitVelocityCreation), eT(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(mm, Tm, fm) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: pT,
          previousItem: null,
          nextItem: null
        }, bT(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: ET,
          previousItem: null,
          nextItem: null
        }, bT(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, mm, Tm, fm), this
      }
      removeDragGradient(mm) {
        return this._removeFactorGradient(this._dragGradients, mm), 0 === this._dragGradients?.length && (eT(this._dragCreation), eT(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(mm, Tm, fm) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, mm, Tm, fm), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(mm) {
        return this._removeFactorGradient(this._startSizeGradients, mm), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const mm = new Uint8Array(4 * this._rawTextureWidth),
          Tm = Rm.e.Color3[0];
        for (let fm = 0; fm < this._rawTextureWidth; fm++) {
          const Am = fm / this._rawTextureWidth;
          hm.j.GetCurrentGradient(Am, this._rampGradients, ((hm, Am, am) => {
            Rm.b.LerpToRef(hm.color, Am.color, am, Tm), mm[4 * fm] = 255 * Tm.r, mm[4 * fm + 1] = 255 * Tm.g, mm[4 * fm + 2] = 255 * Tm.b, mm[4 * fm + 3] = 255
          }))
        }
        this._rampGradientsTexture = wm.b.CreateRGBATexture(mm, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((mm, Tm) => mm.gradient < Tm.gradient ? -1 : mm.gradient > Tm.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(mm, Tm) {
        this._rampGradients || (this._rampGradients = []);
        const fm = new hm.d(mm, Tm);
        return this._rampGradients.push(fm), this._syncRampGradientTexture(), this
      }
      removeRampGradient(mm) {
        return this._removeGradientAndTexture(mm, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(mm, Tm, fm) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Um, this._colorProcessing.process = dm);
        const Am = new hm.b(mm, Tm, fm);
        return this._colorGradients.push(Am), this._colorGradients.sort(((mm, Tm) => mm.gradient < Tm.gradient ? -1 : mm.gradient > Tm.gradient ? 1 : 0)), this
      }
      removeColorGradient(mm) {
        if (!this._colorGradients) return this;
        let Tm = 0;
        for (const fm of this._colorGradients) {
          if (fm.gradient === mm) {
            this._colorGradients.splice(Tm, 1);
            break
          }
          Tm++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Lm, this._colorProcessing.process = gm), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const mm of this._drawWrappers)
            if (mm)
              for (const Tm of mm) Tm?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(mm, Tm, fm, hm, Am) {
        return Am[4 * (((mm = .5 * Math.abs(mm) + .5) * fm % fm | 0) + ((Tm = .5 * Math.abs(Tm) + .5) * hm % hm | 0) * fm)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const mm = this._engine,
          Tm = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Tm), this._vertexBuffer = new xm.c(mm, this._vertexData, !0, Tm);
        let fm = 0;
        const hm = this._vertexBuffer.createVertexBuffer(xm.m.PositionKind, fm, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[xm.m.PositionKind] = hm, fm += 3;
        const Am = this._vertexBuffer.createVertexBuffer(xm.m.ColorKind, fm, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[xm.m.ColorKind] = Am, fm += 4;
        const am = this._vertexBuffer.createVertexBuffer("angle", fm, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = am, fm += 1;
        const wm = this._vertexBuffer.createVertexBuffer("size", fm, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = wm, fm += 2, this._isAnimationSheetEnabled) {
          const mm = this._vertexBuffer.createVertexBuffer("cellIndex", fm, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = mm, fm += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const mm = this._vertexBuffer.createVertexBuffer("direction", fm, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = mm, fm += 3
        }
        if (this._useRampGradients) {
          const mm = this._vertexBuffer.createVertexBuffer("remapData", fm, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = mm, fm += 4
        }
        let Dm;
        if (this._useInstancing) {
          const Tm = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new xm.c(mm, Tm, !1, 2), Dm = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Dm = this._vertexBuffer.createVertexBuffer("offset", fm, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Dm, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const mm = [],
          Tm = [];
        let fm = 0;
        for (let hm = 0; hm < this._capacity; hm++) mm.push(fm), mm.push(fm + 1), mm.push(fm + 2), mm.push(fm), mm.push(fm + 2), mm.push(fm + 3), Tm.push(fm, fm + 1, fm + 1, fm + 2, fm + 2, fm + 3, fm + 3, fm, fm, fm + 3), fm += 4;
        this._indexBuffer = this._engine.createIndexBuffer(mm), this._linesIndexBuffer = this._engine.createIndexBuffer(Tm)
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
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (mm) return this.startDelay = mm, void setTimeout((() => {
          this.start(0)
        }), mm);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const mm = this.noiseTexture;
          if (mm && mm.onGeneratedObservable) mm.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let Tm = 0; Tm < this.preWarmCycles; Tm++) this.animate(!0), mm.render()
            }))
          }));
          else
            for (let Tm = 0; Tm < this.preWarmCycles; Tm++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(mm))
      }
      _postStop(mm) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(mm, Tm, fm, hm) {
        let Am = mm * this._vertexBufferSize;
        const xm = am.j.WO[0].ZZ(this._scene?.floatingOriginOffset || am.p.ZeroReadOnly);
        if (this._vertexData[Am++] = Tm.position.x + this.worldOffset.x - xm.x, this._vertexData[Am++] = Tm.position.y + this.worldOffset.y - xm.y, this._vertexData[Am++] = Tm.position.z + this.worldOffset.z - xm.z, this._vertexData[Am++] = Tm.color.r, this._vertexData[Am++] = Tm.color.g, this._vertexData[Am++] = Tm.color.b, this._vertexData[Am++] = Tm.color.a, this._vertexData[Am++] = Tm.angle, this._vertexData[Am++] = Tm.scale.x * Tm.size, this._vertexData[Am++] = Tm.scale.y * Tm.size, this._isAnimationSheetEnabled && (this._vertexData[Am++] = Tm.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Am++] = Tm.direction.x, this._vertexData[Am++] = Tm.direction.y, this._vertexData[Am++] = Tm.direction.z);
        else if (Tm._properties.initialDirection) {
          let mm = Tm._properties.initialDirection;
          this.isLocal && (am.p.TransformNormalToRef(mm, this._emitterWorldMatrix, am.j.WO[0]), mm = am.j.WO[0]), 0 === mm.x && 0 === mm.z && (mm.x = .001), this._vertexData[Am++] = mm.x, this._vertexData[Am++] = mm.y, this._vertexData[Am++] = mm.z
        } else {
          let mm = Tm.direction;
          this.isLocal && (am.p.TransformNormalToRef(mm, this._emitterWorldMatrix, am.j.WO[0]), mm = am.j.WO[0]), 0 === mm.x && 0 === mm.z && (mm.x = .001), this._vertexData[Am++] = mm.x, this._vertexData[Am++] = mm.y, this._vertexData[Am++] = mm.z
        }
        this._useRampGradients && Tm.remapData && (this._vertexData[Am++] = Tm.remapData.x, this._vertexData[Am++] = Tm.remapData.y, this._vertexData[Am++] = Tm.remapData.z, this._vertexData[Am++] = Tm.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === fm ? fm = this._epsilon : 1 === fm && (fm = 1 - this._epsilon), 0 === hm ? hm = this._epsilon : 1 === hm && (hm = 1 - this._epsilon)), this._vertexData[Am++] = fm, this._vertexData[Am] = hm)
      }
      _prepareParticle(mm) {}
      _createNewOnes(mm) {
        let Tm;
        for (let fm = 0; fm < mm && this._particles.length !== this._capacity; fm++) {
          Tm = this._createParticle(), this._particles.push(Tm);
          let mm = this._createQueueStart;
          for (; mm;) mm.process(Tm, this), mm = mm.nextItem;
          Tm._inheritParticleInfoToSubEmitters()
        }
      }
      _update(mm) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const mm = this.emitter;
          this._emitterWorldMatrix = mm.getWorldMatrix()
        } else {
          const mm = this.emitter;
          this._emitterWorldMatrix = am.e.Translation(mm.x, mm.y, mm.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(mm)
      }
      static _GetAttributeNamesOrOptions() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = [xm.m.PositionKind, xm.m.ColorKind, "angle", "offset", "size"];
        return mm && hm.push("cellIndex"), Tm || hm.push("direction"), fm && hm.push("remapData"), hm
      }
      static _GetEffectCreationOptions() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Mm.c)(hm), mm && hm.push("particlesInfos"), Tm && hm.push("logarithmicDepthConstant"), fm && (hm.push("vFogInfos"), hm.push("vFogColor")), hm
      }
      fillDefines(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Mm.k)(this, this._scene, mm), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && mm.push("#define FOG")), this._isAnimationSheetEnabled && mm.push("#define ANIMATESHEET"), this.useLogarithmicDepth && mm.push("#define LOGARITHMICDEPTH"), Tm === nm.BLENDMODE_MULTIPLY && mm.push("#define BLENDMULTIPLYMODE"), this.isLocal && mm.push("#define LOCAL"), this._useRampGradients && mm.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (mm.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            mm.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            mm.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && mm.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            mm.push("#define BILLBOARDMODE_ALL")
        }
        fm && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), mm.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(mm, Tm, fm) {
        Tm.push(...GT._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), mm.push(...GT._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), fm.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Bm.d)(mm, this._imageProcessingConfigurationDefines), (0, Bm.c)(fm, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(mm) {
        var Tm;
        const fm = this._getCustomDrawWrapper(mm);
        if (fm?.effect) return fm;
        const hm = [];
        this.fillDefines(hm, mm);
        const am = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          xm = NT.c._PrepareStringDefines(am, hm),
          wm = xm ? NT.c.GetConfiguration(am) : void 0;
        let Dm = this._drawWrappers[am];
        Dm || (Dm = this._drawWrappers[am] = [], 0 === am || this._renderPassObserver || (this._renderPassObserver = ((Tm = this._engine)._onReleaseRenderPassObservable ?? (Tm._onReleaseRenderPassObservable = new Am.c)).add((mm => {
          const Tm = this._drawWrappers[mm];
          if (Tm) {
            for (const mm of Tm) mm?.dispose();
            delete this._drawWrappers[mm]
          }
        }))));
        let im = Dm[mm];
        im || (im = new lm.b(this._engine), im.drawContext && (im.drawContext.useInstancing = this._useInstancing), Dm[mm] = im);
        const Rm = hm.join("\n");
        if (im.defines !== Rm) {
          const mm = [],
            Tm = [],
            fm = [];
          this.fillUniformsAttributesAndSamplerNames(Tm, mm, fm), xm && (Tm.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== wm?.defines.PREPASS_LOCAL_POSITION_INDEX && Tm.push("inverseEmitterWM", "geometryWorldOffset")), im.setEffect(this._engine.createEffect("particles", {
            attributes: mm,
            uniformsNames: Tm,
            samplers: fm,
            defines: Rm,
            shaderLanguage: this._shaderLanguage,
            multiTarget: xm,
            indexParameters: xm ? {
              buffersCount: wm?._mrtCount ?? 0
            } : void 0
          }, this._engine), Rm)
        }
        return im
      }
      _bindGeometryRendering(mm) {
        const Tm = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          fm = NT.c.GetConfiguration(Tm);
        if (!fm?._defines) return;
        mm.setFloat("objectId", 0), mm.setInt("meshBlendTag", 0);
        const hm = this._scene?.activeCamera;
        if (mm.setFloat2("cameraInfo", hm?.minZ ?? 0, hm?.maxZ ?? 1), this.isLocal && void 0 !== fm.defines.PREPASS_LOCAL_POSITION_INDEX) {
          mm.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Tm = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || am.p.ZeroReadOnly, am.j.WO[0]);
          mm.setVector3("geometryWorldOffset", Tm)
        }
      }
      animate() {
        let mm, Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Tm && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Tm ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) mm = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Tm = this._calculateEmitRate();
            mm = Tm * this._scaledUpdateSpeed | 0, this._newPartsExcess += Tm * this._scaledUpdateSpeed - mm
          }
          if (this._newPartsExcess > 1 && (mm += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? mm = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(mm), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Tm) {
            let mm = 0;
            for (let Tm = 0; Tm < this._particles.length; Tm++) {
              const fm = this._particles[Tm];
              this._appendParticleVertices(mm, fm), mm += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const mm = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Tm = this._particles.length;
                Tm < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Tm * mm, this._fixedCapacityHighWaterMark * mm), this._fixedCapacityHighWaterMark = Tm, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const mm = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * mm), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let mm = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const Tm = this._actualFrame / this.targetStopDuration;
          hm.j.GetCurrentGradient(Tm, this._emitRateGradients, ((Tm, fm, hm) => {
            Tm !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = fm.getFactor(), this._currentEmitRateGradient = Tm), mm = (0, om.Lerp)(this._currentEmitRate1, this._currentEmitRate2, hm)
          }))
        }
        return mm
      }
      _appendParticleVertices(mm, Tm) {
        this._appendParticleVertex(mm++, Tm, 0, 0), this._useInstancing || (this._appendParticleVertex(mm++, Tm, 1, 0), this._appendParticleVertex(mm++, Tm, 1, 1), this._appendParticleVertex(mm, Tm, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !GT.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([fm.e(346).then((() => fm(61368))), fm.e(340).then((() => fm(61372)))])) : await Promise.all([fm.e(329).then((() => fm(61378))), Promise.all([fm.e(322), fm.e(356)]).then((() => fm(61381)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== nm.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(nm.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(nm.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(mm) {
        const Tm = this._getWrapper(mm),
          fm = Tm.effect,
          hm = this._engine;
        hm.enableEffect(Tm);
        const Am = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        fm.setTexture("diffuseSampler", this.particleTexture), fm.setMatrix("view", Am);
        const xm = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (fm.setMatrix("projection", xm), this._isAnimationSheetEnabled && this.particleTexture) {
          const mm = this.particleTexture.getBaseSize();
          fm.setFloat3("particlesInfos", this.spriteCellWidth / mm.width, this.spriteCellHeight / mm.height, this.spriteCellWidth / mm.width)
        }
        if (fm.setVector2("translationPivot", this.translationPivot), fm.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const mm = this._scene.activeCamera;
          fm.setVector3("eyePosition", mm.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), fm.setTexture("rampSampler", this._rampGradientsTexture));
        const wm = fm.defines;
        this._scene && ((0, Mm.d)(fm, this, this._scene), this.applyFog && (0, um.j)(this._scene, void 0, fm)), wm.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Am.invertToRef(am.j.Matrix[0]), fm.setMatrix("invView", am.j.Matrix[0])), fm._multiTarget && this._bindGeometryRendering(fm), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? hm.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, fm) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, fm)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? hm.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, fm) : hm.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, fm), this.useLogarithmicDepth && this._scene && (0, um.r)(wm, fm, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(fm), this._setEngineBasedOnBlendMode(mm), fm._multiTarget && NT.c._BindZeroAlphaDiscard(hm, fm);
        let Dm = !1;
        try {
          NT.c._BindAttachmentsForEffect(hm, fm) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(fm), this._useInstancing ? this._scene?.forceWireframe ? hm.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : hm.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? hm.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : hm.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Dm = !0)
        } finally {
          NT.c._RestoreAttachments(hm)
        }
        return Dm ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const mm = this._engine;
        let Tm;
        return mm.setState && (mm.setState(!1), this.forceDepthWrite && mm.setDepthWrite(!0)), Tm = this.blendMode === nm.BLENDMODE_MULTIPLYADD ? this._render(nm.BLENDMODE_MULTIPLY) + this._render(nm.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Tm
      }
      _onDispose() {}
      dispose() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), mm && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), mm && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Tm, fm), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const mm = this._scene.VK.indexOf(this);
          mm > -1 && this._scene.VK.splice(mm, 1), this._scene._activeParticleSystems.dispose()
        }
        this.iG.notifyObservers(this), this.iG.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    GT.ForceGLSL = !1;
    var XT, PT = fm(37224);
    ! function(mm) {
      mm[mm.ATTACHED = 0] = "ATTACHED", mm[mm.END = 1] = "END"
    }(XT || (XT = {}));
    class HT {
      constructor(mm) {
        if (this.particleSystem = mm, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !mm.emitter || !mm.emitter.dispose) {
          const Tm = (0, PT.c)("BABYLON.AbstractMesh");
          mm.emitter = new Tm("SubemitterSystemEmitter", mm.wG()), mm._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let mm = this.particleSystem.emitter;
        if (mm) {
          if (mm instanceof am.p) mm = mm.clone();
          else if (-1 !== mm.getClassName().indexOf("Mesh")) {
            mm = new((0, PT.c)("BABYLON.Mesh"))("", mm.wG()), mm.isVisible = !1
          }
        } else mm = new am.p;
        const Tm = new HT(this.particleSystem.clone(this.particleSystem.name, mm));
        return Tm.particleSystem.name += "Clone", Tm.type = this.type, Tm.inheritDirection = this.inheritDirection, Tm.inheritedVelocityAmount = this.inheritedVelocityAmount, Tm.particleSystem._disposeEmitterOnDispose = !0, Tm.particleSystem.disposeOnStop = !0, Tm
      }
      serialize() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = {};
        return Tm.type = this.type, Tm.inheritDirection = this.inheritDirection, Tm.inheritedVelocityAmount = this.inheritedVelocityAmount, Tm.particleSystem = this.particleSystem.serialize(mm), Tm
      }
      static _ParseParticleSystem(mm, Tm, fm) {
        throw (0, Hm.i)("ParseParticle")
      }
      static Parse(mm, Tm, fm) {
        const hm = mm.particleSystem,
          Am = new HT(HT._ParseParticleSystem(hm, Tm, fm, !0));
        return Am.type = mm.type, Am.inheritDirection = mm.inheritDirection, Am.inheritedVelocityAmount = mm.inheritedVelocityAmount, Am.particleSystem._isSubEmitter = !0, Am
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var yT = fm(40014),
      CT = fm(40129);
    const rT = () => {};
    class sT {
      constructor() {
        this.particlePositionGenerator = rT, this.particleDestinationGenerator = rT, this.particleDirectionGenerator = rT
      }
      startDirectionFunction(mm, Tm, fm, hm) {
        const Am = am.j.WO[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== rT) this.particleDirectionGenerator(-1, fm, Am);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== rT) {
          this.particleDestinationGenerator(-1, fm, Am);
          const mm = am.j.WO[1];
          Am.subtractToRef(fm.position, mm), mm.scaleToRef(1 / fm.lifeTime, Am)
        } else Am.set(0, 0, 0);
        hm ? Tm.ZZ(Am) : am.p.TransformNormalToRef(Am, mm, Tm)
      }
      startPositionFunction(mm, Tm, fm, hm) {
        const Am = am.j.WO[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== rT ? this.particlePositionGenerator(-1, fm, Am) : Am.set(0, 0, 0), hm ? Tm.ZZ(Am) : am.p.TransformCoordinatesToRef(Am, mm, Tm)
      }
      clone() {
        const mm = new sT;
        return Em.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {}
      buildUniformLayout(mm) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const mm = {};
        return mm.type = this.getClassName(), mm.particlePositionGenerator = this.particlePositionGenerator, mm.particleDestinationGenerator = this.particleDestinationGenerator, mm
      }
      parse(mm) {
        mm.particlePositionGenerator && (this.particlePositionGenerator = mm.particlePositionGenerator), mm.particleDestinationGenerator && (this.particleDestinationGenerator = mm.particleDestinationGenerator)
      }
    }
    const lT = am.p.Zero(),
      MT = am.p.Zero(),
      uT = am.p.Zero();
    class BT {
      constructor() {
        this.strength = 0, this.position = am.p.Zero()
      }
      _processParticle(mm, Tm) {
        this.position.subtractToRef(mm.position, lT);
        const fm = lT.lengthSquared() + 1;
        lT.normalize().scaleToRef(this.strength / fm, MT), MT.scaleToRef(Tm._tempScaledUpdateSpeed, uT), mm.direction.addInPlace(uT)
      }
      serialize() {
        return {
          position: this.position.ahm(),
          strength: this.strength
        }
      }
    }
    const LT = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class vT extends GT {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = mm => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Tm = Math.floor(Math.random() * this._subEmitters.length);
          for (const fm of this._subEmitters[Tm])
            if (1 === fm.type) {
              const Tm = fm.clone();
              mm._inheritParticleInfoToSubEmitter(Tm), Tm.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Tm.particleSystem), Tm.particleSystem.start()
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
      set flowMap(mm) {
        this._flowMap !== mm && (this._flowMap = mm, this._flowMapUpdate && (eT(this._flowMapUpdate), this._flowMapUpdate = null), mm && (this._flowMapUpdate = {
          process: mm => {
            const Tm = this.wG()?.getTransformMatrix();
            this._flowMap._processParticle(mm, this.flowMapStrength * this._tempScaledUpdateSpeed, Tm)
          },
          previousItem: null,
          nextItem: null
        }, ST(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(mm) {
        super.addAttractor(mm), 1 === this._attractors.length && (this._attractorUpdate = {
          process: mm => {
            for (const Tm of this._attractors) Tm._processParticle(mm, this)
          },
          previousItem: null,
          nextItem: null
        }, ST(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(mm) {
        super.removeAttractor(mm), 0 === this._attractors.length && this._attractorUpdate && eT(this._attractorUpdate)
      }
      start() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(mm)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const mm of this.subEmitters) mm instanceof vT ? this._subEmitters.push([new HT(mm)]) : mm instanceof HT ? this._subEmitters.push([mm]) : mm instanceof Array && this._subEmitters.push(mm)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const mm of this.activeSubSystems) mm.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const mm = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== mm && this._rootParticleSystem.activeSubSystems.splice(mm, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(mm) {
        mm && this._stopSubEmitters()
      }
      _prepareParticle(mm) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const Tm = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          mm._properties.attachedSubEmitters = [];
          for (const fm of Tm)
            if (0 === fm.type) {
              const Tm = fm.clone();
              mm._properties.attachedSubEmitters.push(Tm), Tm.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), mm && this.particles)
          for (const fm of this.particles)
            if (fm._properties.attachedSubEmitters)
              for (let mm = fm._properties.attachedSubEmitters.length - 1; mm >= 0; mm -= 1) fm._properties.attachedSubEmitters[mm].dispose();
        if (Tm && this.activeSubSystems)
          for (let fm = this.activeSubSystems.length - 1; fm >= 0; fm -= 1) this.activeSubSystems[fm].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let mm = 0; mm < this._subEmitters.length; mm++)
            for (const Tm of this._subEmitters[mm]) Tm.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(mm, Tm, fm, hm) {
        let Am;
        Am = fm instanceof yT.b ? null : fm;
        const xm = (0, PT.c)("BABYLON.Texture");
        if (xm && Am)
          if (mm.texture) Tm.particleTexture = xm.Parse(mm.texture, Am, hm);
          else if (mm.textureName) {
          const fm = mm.textureSettings;
          if (Tm.particleTexture = new xm(hm + mm.textureName, Am, !1, void 0 === mm.invertY || mm.invertY, fm ? fm.samplingMode : void 0), Tm.particleTexture.name = mm.textureName, fm) {
            const mm = Tm.particleTexture;
            for (const Tm of LT) void 0 !== fm[Tm] && (mm[Tm] = fm[Tm])
          }
        }
        if (mm.emitterId || 0 === mm.emitterId || void 0 !== mm.emitter ? (mm.emitterId || 0 === mm.emitterId) && Am ? (Tm.emitter = Am.getLastMeshById(mm.emitterId), Tm.emitter || (Tm.emitter = am.p.Zero())) : Tm.emitter = am.p.FromArray(mm.emitter) : Tm.emitter = am.p.Zero(), Tm.isLocal = !!mm.isLocal, void 0 !== mm.renderingGroupId && (Tm.renderingGroupId = mm.renderingGroupId), void 0 !== mm.isBillboardBased && (Tm.isBillboardBased = mm.isBillboardBased), void 0 !== mm.billboardMode && (Tm.billboardMode = mm.billboardMode), void 0 !== mm.useLogarithmicDepth && (Tm.useLogarithmicDepth = mm.useLogarithmicDepth), mm.animations) {
          for (let fm = 0; fm < mm.animations.length; fm++) {
            const hm = mm.animations[fm],
              Am = (0, PT.c)("BABYLON.Animation");
            Am && Tm.animations.push(Am.Parse(hm))
          }
          Tm.beginAnimationOnStart = mm.beginAnimationOnStart, Tm.beginAnimationFrom = mm.beginAnimationFrom, Tm.beginAnimationTo = mm.beginAnimationTo, Tm.beginAnimationLoop = mm.beginAnimationLoop
        }
        if (mm.autoAnimate && Am && Am.beginAnimation(Tm, mm.autoAnimateFrom, mm.autoAnimateTo, mm.autoAnimateLoop, mm.autoAnimateSpeed || 1), Tm.startDelay = 0 | mm.startDelay, Tm.minAngularSpeed = mm.minAngularSpeed, Tm.maxAngularSpeed = mm.maxAngularSpeed, Tm.minSize = mm.minSize, Tm.maxSize = mm.maxSize, mm.minScaleX && (Tm.minScaleX = mm.minScaleX, Tm.maxScaleX = mm.maxScaleX, Tm.minScaleY = mm.minScaleY, Tm.maxScaleY = mm.maxScaleY), void 0 !== mm.preWarmCycles && (Tm.preWarmCycles = mm.preWarmCycles, Tm.preWarmStepOffset = mm.preWarmStepOffset), void 0 !== mm.minInitialRotation && (Tm.minInitialRotation = mm.minInitialRotation, Tm.maxInitialRotation = mm.maxInitialRotation), Tm.minLifeTime = mm.minLifeTime, Tm.maxLifeTime = mm.maxLifeTime, Tm.minEmitPower = mm.minEmitPower, Tm.maxEmitPower = mm.maxEmitPower, Tm.emitRate = mm.emitRate, Tm.gravity = am.p.FromArray(mm.gravity), mm.noiseStrength && (Tm.noiseStrength = am.p.FromArray(mm.noiseStrength)), Tm.color1 = Rm.c.FromArray(mm.color1), Tm.color2 = Rm.c.FromArray(mm.color2), Tm.colorDead = Rm.c.FromArray(mm.colorDead), Tm.updateSpeed = mm.updateSpeed, Tm.targetStopDuration = mm.targetStopDuration, Tm.blendMode = mm.blendMode, mm.colorGradients)
          for (const am of mm.colorGradients) Tm.addColorGradient(am.gradient, Rm.c.FromArray(am.color1), am.color2 ? Rm.c.FromArray(am.color2) : void 0);
        if (mm.rampGradients) {
          for (const fm of mm.rampGradients) Tm.addRampGradient(fm.gradient, Rm.b.FromArray(fm.color));
          Tm.useRampGradients = mm.useRampGradients
        }
        if (mm.colorRemapGradients)
          for (const am of mm.colorRemapGradients) Tm.addColorRemapGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.alphaRemapGradients)
          for (const am of mm.alphaRemapGradients) Tm.addAlphaRemapGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.sizeGradients)
          for (const am of mm.sizeGradients) Tm.addSizeGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.angularSpeedGradients)
          for (const am of mm.angularSpeedGradients) Tm.addAngularSpeedGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.velocityGradients)
          for (const am of mm.velocityGradients) Tm.addVelocityGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.dragGradients)
          for (const am of mm.dragGradients) Tm.addDragGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.emitRateGradients)
          for (const am of mm.emitRateGradients) Tm.addEmitRateGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.startSizeGradients)
          for (const am of mm.startSizeGradients) Tm.addStartSizeGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.lifeTimeGradients)
          for (const am of mm.lifeTimeGradients) Tm.addLifeTimeGradient(am.gradient, void 0 !== am.factor1 ? am.factor1 : am.factor, am.factor2);
        if (mm.limitVelocityGradients) {
          for (const fm of mm.limitVelocityGradients) Tm.addLimitVelocityGradient(fm.gradient, void 0 !== fm.factor1 ? fm.factor1 : fm.factor, fm.factor2);
          Tm.limitVelocityDamping = mm.limitVelocityDamping
        }
        if (mm.noiseTexture && Am) {
          const fm = (0, PT.c)("BABYLON.ProceduralTexture");
          Tm.noiseTexture = fm.Parse(mm.noiseTexture, Am, hm)
        }
        let wm;
        if (mm.particleEmitterType) {
          switch (mm.particleEmitterType.type) {
            case "SphereParticleEmitter":
              wm = new qm;
              break;
            case "SphereDirectedParticleEmitter":
              wm = new jm;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              wm = new Im;
              break;
            case "ConeDirectedParticleEmitter":
              wm = new Km;
              break;
            case "CylinderParticleEmitter":
              wm = new Vm.d;
              break;
            case "CylinderDirectedParticleEmitter":
              wm = new Vm.b;
              break;
            case "HemisphericParticleEmitter":
              wm = new Ym;
              break;
            case "PointParticleEmitter":
              wm = new Om;
              break;
            case "MeshParticleEmitter":
              wm = new Qm;
              break;
            case "CustomParticleEmitter":
              wm = new sT;
              break;
            default:
              wm = new pm.b
          }
          wm.parse(mm.particleEmitterType, Am)
        } else wm = new pm.b, wm.parse(mm, Am);
        Tm.particleEmitterType = wm, Tm.startSpriteCellID = mm.startSpriteCellID, Tm.endSpriteCellID = mm.endSpriteCellID, Tm.spriteCellLoop = mm.spriteCellLoop ?? !0, Tm.spriteCellWidth = mm.spriteCellWidth, Tm.spriteCellHeight = mm.spriteCellHeight, Tm.spriteCellChangeSpeed = mm.spriteCellChangeSpeed, Tm.spriteRandomStartCell = mm.spriteRandomStartCell, Tm.disposeOnStop = mm.disposeOnStop ?? !1, Tm.manualEmitCount = mm.manualEmitCount ?? -1
      }
      static Parse(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Am = arguments.length > 4 ? arguments[4] : void 0;
        const xm = mm.name;
        let wm, Dm, im = null,
          pm = null;
        if (Tm instanceof yT.b ? wm = Tm : (Dm = Tm, wm = Dm.dO()), mm.customShader && (0, Hm.d)(wm.createEffectForParticles)) {
          pm = mm.customShader;
          const Tm = pm.shaderOptions.defines.length > 0 ? pm.shaderOptions.defines.join("\n") : "";
          im = wm.createEffectForParticles(pm.shaderPath.fragmentElement, pm.shaderOptions.uniforms, pm.shaderOptions.samplers, Tm)
        }
        const Em = new vT(xm, Am || mm.yp, Tm, im, mm.isAnimationSheetEnabled);
        if (Em.customShader = pm, Em._rootUrl = fm, mm.id && (Em.id = mm.id), mm.subEmitters) {
          Em.subEmitters = [];
          for (const hm of mm.subEmitters) {
            const mm = [];
            for (const Am of hm) mm.push(HT.Parse(Am, Tm, fm));
            Em.subEmitters.push(mm)
          }
        }
        if (mm.attractors)
          for (const Rm of mm.attractors) {
            const mm = new BT;
            mm.position = am.p.FromArray(Rm.position), mm.strength = Rm.strength, Em.addAttractor(mm)
          }
        return vT._Parse(mm, Em, Tm, fm), mm.textureMask && (Em.textureMask = Rm.c.FromArray(mm.textureMask)), mm.worldOffset && (Em.worldOffset = am.p.FromArray(mm.worldOffset)), mm.preventAutoStart && (Em.preventAutoStart = mm.preventAutoStart), mm.metadata && (Em.metadata = mm.metadata), hm || Em.preventAutoStart || Em.start(), Em
      }
      serialize() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = {};
        if (vT._Serialize(Tm, this, mm), Tm.textureMask = this.textureMask.ahm(), Tm.customShader = this.customShader, Tm.preventAutoStart = this.preventAutoStart, Tm.worldOffset = this.worldOffset.ahm(), this.metadata && (Tm.metadata = this.metadata), this.subEmitters) {
          Tm.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const fm of this._subEmitters) {
            const hm = [];
            for (const Tm of fm) Tm.particleSystem.doNotSerialize || hm.push(Tm.serialize(mm));
            Tm.subEmitters.push(hm)
          }
        }
        if (this._attractors && this._attractors.length) {
          Tm.attractors = [];
          for (const mm of this._attractors) Tm.attractors.push(mm.serialize())
        }
        return Tm
      }
      static _Serialize(mm, Tm, fm) {
        if (mm.name = Tm.name, mm.id = Tm.id, mm.yp = Tm.getCapacity(), mm.disposeOnStop = Tm.disposeOnStop, mm.manualEmitCount = Tm.manualEmitCount, Tm.emitter.position) {
          const fm = Tm.emitter;
          mm.emitterId = fm.id
        } else {
          const fm = Tm.emitter;
          mm.emitter = fm.ahm()
        }
        if (Tm.particleEmitterType && (mm.particleEmitterType = Tm.particleEmitterType.serialize()), Tm.particleTexture)
          if (fm) mm.texture = Tm.particleTexture.serialize();
          else {
            const fm = Tm.particleTexture;
            mm.textureName = Tm.particleTexture.name, mm.invertY = !!fm._invertY;
            const hm = {};
            for (const mm of LT) hm[mm] = fm[mm];
            hm.samplingMode = fm.samplingMode, mm.textureSettings = hm
          } mm.isLocal = Tm.isLocal, CT.d.AppendSerializedAnimations(Tm, mm), mm.beginAnimationOnStart = Tm.beginAnimationOnStart, mm.beginAnimationFrom = Tm.beginAnimationFrom, mm.beginAnimationTo = Tm.beginAnimationTo, mm.beginAnimationLoop = Tm.beginAnimationLoop, mm.startDelay = Tm.startDelay, mm.renderingGroupId = Tm.renderingGroupId, mm.isBillboardBased = Tm.isBillboardBased, mm.billboardMode = Tm.billboardMode, mm.minAngularSpeed = Tm.minAngularSpeed, mm.maxAngularSpeed = Tm.maxAngularSpeed, mm.minSize = Tm.minSize, mm.maxSize = Tm.maxSize, mm.minScaleX = Tm.minScaleX, mm.maxScaleX = Tm.maxScaleX, mm.minScaleY = Tm.minScaleY, mm.maxScaleY = Tm.maxScaleY, mm.minEmitPower = Tm.minEmitPower, mm.maxEmitPower = Tm.maxEmitPower, mm.minLifeTime = Tm.minLifeTime, mm.maxLifeTime = Tm.maxLifeTime, mm.emitRate = Tm.emitRate, mm.gravity = Tm.gravity.ahm(), mm.noiseStrength = Tm.noiseStrength.ahm(), mm.color1 = Tm.color1.ahm(), mm.color2 = Tm.color2.ahm(), mm.colorDead = Tm.colorDead.ahm(), mm.updateSpeed = Tm.updateSpeed, mm.targetStopDuration = Tm.targetStopDuration, mm.blendMode = Tm.blendMode, mm.preWarmCycles = Tm.preWarmCycles, mm.preWarmStepOffset = Tm.preWarmStepOffset, mm.minInitialRotation = Tm.minInitialRotation, mm.maxInitialRotation = Tm.maxInitialRotation, mm.startSpriteCellID = Tm.startSpriteCellID, mm.spriteCellLoop = Tm.spriteCellLoop, mm.endSpriteCellID = Tm.endSpriteCellID, mm.spriteCellChangeSpeed = Tm.spriteCellChangeSpeed, mm.spriteCellWidth = Tm.spriteCellWidth, mm.spriteCellHeight = Tm.spriteCellHeight, mm.spriteRandomStartCell = Tm.spriteRandomStartCell, mm.isAnimationSheetEnabled = Tm.isAnimationSheetEnabled, mm.useLogarithmicDepth = Tm.useLogarithmicDepth;
        const hm = Tm.getColorGradients();
        if (hm) {
          mm.colorGradients = [];
          for (const Tm of hm) {
            const fm = {
              gradient: Tm.gradient,
              color1: Tm.color1.ahm()
            };
            Tm.color2 ? fm.color2 = Tm.color2.ahm() : fm.color2 = Tm.color1.ahm(), mm.colorGradients.push(fm)
          }
        }
        const Am = Tm.getRampGradients();
        if (Am) {
          mm.rampGradients = [];
          for (const Tm of Am) {
            const fm = {
              gradient: Tm.gradient,
              color: Tm.color.ahm()
            };
            mm.rampGradients.push(fm)
          }
          mm.useRampGradients = Tm.useRampGradients
        }
        const am = Tm.getColorRemapGradients();
        if (am) {
          mm.colorRemapGradients = [];
          for (const Tm of am) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.colorRemapGradients.push(fm)
          }
        }
        const xm = Tm.getAlphaRemapGradients();
        if (xm) {
          mm.alphaRemapGradients = [];
          for (const Tm of xm) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.alphaRemapGradients.push(fm)
          }
        }
        const wm = Tm.getSizeGradients();
        if (wm) {
          mm.sizeGradients = [];
          for (const Tm of wm) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.sizeGradients.push(fm)
          }
        }
        const Dm = Tm.getAngularSpeedGradients();
        if (Dm) {
          mm.angularSpeedGradients = [];
          for (const Tm of Dm) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.angularSpeedGradients.push(fm)
          }
        }
        const im = Tm.getVelocityGradients();
        if (im) {
          mm.velocityGradients = [];
          for (const Tm of im) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.velocityGradients.push(fm)
          }
        }
        const Rm = Tm.getDragGradients();
        if (Rm) {
          mm.dragGradients = [];
          for (const Tm of Rm) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.dragGradients.push(fm)
          }
        }
        const pm = Tm.getEmitRateGradients();
        if (pm) {
          mm.emitRateGradients = [];
          for (const Tm of pm) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.emitRateGradients.push(fm)
          }
        }
        const Em = Tm.getStartSizeGradients();
        if (Em) {
          mm.startSizeGradients = [];
          for (const Tm of Em) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.startSizeGradients.push(fm)
          }
        }
        const om = Tm.getLifeTimeGradients();
        if (om) {
          mm.lifeTimeGradients = [];
          for (const Tm of om) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.lifeTimeGradients.push(fm)
          }
        }
        const Om = Tm.getLimitVelocityGradients();
        if (Om) {
          mm.limitVelocityGradients = [];
          for (const Tm of Om) {
            const fm = {
              gradient: Tm.gradient,
              factor1: Tm.factor1
            };
            void 0 !== Tm.factor2 ? fm.factor2 = Tm.factor2 : fm.factor2 = Tm.factor1, mm.limitVelocityGradients.push(fm)
          }
          mm.limitVelocityDamping = Tm.limitVelocityDamping
        }
        Tm.noiseTexture && (mm.noiseTexture = Tm.noiseTexture.serialize())
      }
      clone(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = {
          ...this._customWrappers
        };
        let Am = null;
        const am = this._engine;
        if ((0, Hm.d)(am.createEffectForParticles) && null != this.customShader) {
          Am = this.customShader;
          const mm = Am.shaderOptions.defines.length > 0 ? Am.shaderOptions.defines.join("\n") : "",
            Tm = am.createEffectForParticles(Am.shaderPath.fragmentElement, Am.shaderOptions.uniforms, Am.shaderOptions.samplers, mm);
          hm[0] ? hm[0].effect = Tm : this.setCustomEffect(Tm, 0)
        }
        const xm = this.serialize(fm),
          wm = !1 === fm && this.particleTexture ? this.particleTexture.clone() : null;
        wm && (xm.textureName = void 0);
        const Dm = vT.Parse(xm, this._scene || this._engine, this._rootUrl);
        return Dm.name = mm, Dm.customShader = Am, Dm._customWrappers = hm, wm && (Dm.particleTexture = wm), void 0 === Tm && (Tm = this.emitter), this.noiseTexture && (Dm.noiseTexture = this.noiseTexture.clone()), Dm.emitter = Tm, this.preventAutoStart || Dm.start(), Dm
      }
    }
    vT.BILLBOARDMODE_Y = 2, vT.BILLBOARDMODE_ALL = 7, vT.BILLBOARDMODE_STRETCHED = 8, vT.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let tT = !1;
    tT || (tT = !0, HT._ParseParticleSystem = vT.Parse)
  },
  41667: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      SkyMaterial: () => Im,
      _MaxColorValueForRenderTarget: () => Vm
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(40129),
      xm = fm(37181),
      wm = fm(40379),
      Dm = fm(40445),
      im = fm(41636),
      Rm = fm(41203),
      pm = fm(40196),
      Em = fm(37224),
      om = fm(40474),
      Om = fm(40447),
      Ym = fm(40432),
      qm = fm(40428);
    class jm extends wm.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Vm(mm) {
      switch (mm) {
        case im.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case im.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Im = (() => {
      var mm;
      let Tm, wm, im, Em, Im, Km, Qm, nm, Jm, cm, zm, Zm, km, bm, Sm, em = Dm.d,
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [],
        rm = [],
        sm = [],
        lm = [],
        Mm = [],
        um = [],
        Bm = [],
        Lm = [],
        tm = [],
        Um = [],
        dm = [],
        gm = [],
        Wm = [],
        Fm = [],
        mT = [],
        TT = [],
        fT = [],
        hT = [],
        AT = [],
        aT = [],
        xT = [],
        wT = [],
        DT = [],
        iT = [];
      return mm = class extends em {
        constructor(mm, Tm) {
          super(mm, Tm, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, hm.i)(this, Nm, 1), this.turbidity = ((0, hm.i)(this, Gm), (0, hm.i)(this, Xm, 10)), this.rayleigh = ((0, hm.i)(this, Pm), (0, hm.i)(this, Hm, 2)), this.mieCoefficient = ((0, hm.i)(this, ym), (0, hm.i)(this, Cm, .005)), this.mieDirectionalG = ((0, hm.i)(this, rm), (0, hm.i)(this, sm, .8)), this.distance = ((0, hm.i)(this, lm), (0, hm.i)(this, Mm, 500)), this.inclination = ((0, hm.i)(this, um), (0, hm.i)(this, Bm, .49)), this.azimuth = ((0, hm.i)(this, Lm), (0, hm.i)(this, tm, .25)), this.sunPosition = ((0, hm.i)(this, Um), (0, hm.i)(this, dm, new xm.WO(0, 100, 0))), this.useSunPosition = ((0, hm.i)(this, gm), (0, hm.i)(this, Wm, !1)), this.cameraOffset = ((0, hm.i)(this, Fm), (0, hm.i)(this, mT, xm.WO.Zero())), this.up = ((0, hm.i)(this, TT), (0, hm.i)(this, fT, xm.WO.Up())), this.dithering = ((0, hm.i)(this, hT), (0, hm.i)(this, AT, !1)), this.rawHdrOutput = ((0, hm.i)(this, aT), (0, hm.i)(this, xT, !1)), this.cloudiness = ((0, hm.i)(this, wT), (0, hm.i)(this, DT, 0)), this._cameraPosition = ((0, hm.i)(this, iT), xm.WO.Zero()), this._skyOrientation = new xm.Quaternion
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
        isReadyForSubMesh(Tm, fm) {
          const hm = fm._drawWrapper;
          if (this.isFrozen && hm.effect && hm._wasPreviouslyReady) return !0;
          fm.materialDefines || (fm.materialDefines = new jm);
          const Am = fm.materialDefines,
            am = this.wG();
          if (this._isReadyForSubMesh(fm)) return !0;
          if ((0, qm.db)(Tm, am, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Am, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, qm.Q)(Tm, Am, !0, !1), Am.IMAGEPROCESSINGPOSTPROCESS !== am.imageProcessingConfiguration.applyByPostProcess && Am.markAsMiscDirty(), Am.DITHER !== this.dithering && Am.markAsMiscDirty(), Am.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Am.markAsMiscDirty(), Am.isDirty) {
            Am.markAsProcessed(), am.resetCachedMaterial();
            const Tm = new Om.e;
            Am.FOG && Tm.addFallback(1, "FOG"), Am.IMAGEPROCESSINGPOSTPROCESS = am.imageProcessingConfiguration.applyByPostProcess, Am.DITHER = this.dithering, Am.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const hm = [Rm.g.PositionKind];
            Am.VERTEXCOLOR && hm.push(Rm.g.ColorKind);
            const xm = "sky",
              wm = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Ym.c)(wm);
            const Dm = Am.toString();
            fm.setEffect(am.dO().createEffect(xm, {
              attributes: hm,
              uniformsNames: wm,
              uniformBuffersNames: [],
              samplers: [],
              defines: Dm,
              fallbacks: Tm,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: mm._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, am.dO()), Am, this._materialContext)
          }
          return !(!fm.effect || !fm.effect.isReady()) && (Am._renderId = am.getRenderId(), hm._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(mm, Tm, fm) {
          const hm = this.wG(),
            Am = fm.materialDefines;
          if (!Am) return;
          const am = fm.effect;
          if (!am) return;
          this._activeEffect = am, this.bindOnlyWorldMatrix(mm), this._activeEffect.setMatrix("viewProjection", hm.getTransformMatrix()), this._mustRebind(hm, am, fm) && ((0, Ym.d)(am, this, hm), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, qm.r)(Am, am, hm)), hm.fogEnabled && Tm.applyFog && hm.fogMode !== pm.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", hm.getViewMatrix()), (0, qm.j)(hm, Tm, this._activeEffect, this.rawHdrOutput);
          const wm = hm.activeCamera;
          if (wm) {
            const mm = wm.getWorldMatrix();
            this._cameraPosition.x = mm.m[12], this._cameraPosition.y = mm.m[13], this._cameraPosition.z = mm.m[14], this._activeEffect.setVector3("cameraPosition", xm.TmpVectors.WO[0].ZZ(this._cameraPosition).zhm(hm.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const mm = hm.dO()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Vm(mm?.texture?.type))
          }
          if (!this.useSunPosition) {
            const mm = Math.PI * (this.inclination - .5),
              Tm = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Tm) * Math.cos(mm), this.sunPosition.y = this.distance * Math.sin(-mm), this.sunPosition.z = this.distance * Math.sin(Tm) * Math.cos(mm), xm.Quaternion.FromUnitVectorsToRef(xm.WO.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Tm, this._activeEffect, fm)
        }
        getAnimatables() {
          return []
        }
        dispose(mm) {
          super.dispose(mm)
        }
        clone(Tm) {
          return am.d.Clone((() => new mm(Tm, this.wG())), this)
        }
        serialize() {
          const mm = super.serialize();
          return mm.customType = "BABYLON.SkyMaterial", mm
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Tm, fm, hm) {
          return am.d.Parse((() => new mm(Tm.name, fm)), Tm, fm, hm)
        }
      }, (() => {
        const fm = "function" === typeof Symbol && Symbol.metadata ? Object.create(em[Symbol.metadata] ?? null) : void 0;
        Tm = [(0, Am.J)()], wm = [(0, Am.J)()], im = [(0, Am.J)()], Em = [(0, Am.J)()], Im = [(0, Am.J)()], Km = [(0, Am.J)()], Qm = [(0, Am.J)()], nm = [(0, Am.J)()], Jm = [(0, Am.F)()], cm = [(0, Am.J)()], zm = [(0, Am.F)()], Zm = [(0, Am.F)()], km = [(0, Am.J)()], bm = [(0, Am.J)()], Sm = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: mm => "luminance" in mm,
            get: mm => mm.luminance,
            set: (mm, Tm) => {
              mm.luminance = Tm
            }
          },
          metadata: fm
        }, Nm, Gm), (0, hm.g)(null, null, wm, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: mm => "turbidity" in mm,
            get: mm => mm.turbidity,
            set: (mm, Tm) => {
              mm.turbidity = Tm
            }
          },
          metadata: fm
        }, Xm, Pm), (0, hm.g)(null, null, im, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: mm => "rayleigh" in mm,
            get: mm => mm.rayleigh,
            set: (mm, Tm) => {
              mm.rayleigh = Tm
            }
          },
          metadata: fm
        }, Hm, ym), (0, hm.g)(null, null, Em, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: mm => "mieCoefficient" in mm,
            get: mm => mm.mieCoefficient,
            set: (mm, Tm) => {
              mm.mieCoefficient = Tm
            }
          },
          metadata: fm
        }, Cm, rm), (0, hm.g)(null, null, Im, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: mm => "mieDirectionalG" in mm,
            get: mm => mm.mieDirectionalG,
            set: (mm, Tm) => {
              mm.mieDirectionalG = Tm
            }
          },
          metadata: fm
        }, sm, lm), (0, hm.g)(null, null, Km, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: mm => "distance" in mm,
            get: mm => mm.distance,
            set: (mm, Tm) => {
              mm.distance = Tm
            }
          },
          metadata: fm
        }, Mm, um), (0, hm.g)(null, null, Qm, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: mm => "inclination" in mm,
            get: mm => mm.inclination,
            set: (mm, Tm) => {
              mm.inclination = Tm
            }
          },
          metadata: fm
        }, Bm, Lm), (0, hm.g)(null, null, nm, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: mm => "azimuth" in mm,
            get: mm => mm.azimuth,
            set: (mm, Tm) => {
              mm.azimuth = Tm
            }
          },
          metadata: fm
        }, tm, Um), (0, hm.g)(null, null, Jm, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: mm => "sunPosition" in mm,
            get: mm => mm.sunPosition,
            set: (mm, Tm) => {
              mm.sunPosition = Tm
            }
          },
          metadata: fm
        }, dm, gm), (0, hm.g)(null, null, cm, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: mm => "useSunPosition" in mm,
            get: mm => mm.useSunPosition,
            set: (mm, Tm) => {
              mm.useSunPosition = Tm
            }
          },
          metadata: fm
        }, Wm, Fm), (0, hm.g)(null, null, zm, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: mm => "cameraOffset" in mm,
            get: mm => mm.cameraOffset,
            set: (mm, Tm) => {
              mm.cameraOffset = Tm
            }
          },
          metadata: fm
        }, mT, TT), (0, hm.g)(null, null, Zm, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: mm => "up" in mm,
            get: mm => mm.up,
            set: (mm, Tm) => {
              mm.up = Tm
            }
          },
          metadata: fm
        }, fT, hT), (0, hm.g)(null, null, km, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: mm => "dithering" in mm,
            get: mm => mm.dithering,
            set: (mm, Tm) => {
              mm.dithering = Tm
            }
          },
          metadata: fm
        }, AT, aT), (0, hm.g)(null, null, bm, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: mm => "rawHdrOutput" in mm,
            get: mm => mm.rawHdrOutput,
            set: (mm, Tm) => {
              mm.rawHdrOutput = Tm
            }
          },
          metadata: fm
        }, xT, wT), (0, hm.g)(null, null, Sm, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: mm => "cloudiness" in mm,
            get: mm => mm.cloudiness,
            set: (mm, Tm) => {
              mm.cloudiness = Tm
            }
          },
          metadata: fm
        }, DT, iT), fm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fm
        })
      })(), mm._ShaderLoader = new om.e((() => [fm.e(330).then((() => fm(61385))), fm.e(323).then((() => fm(61394)))]), (() => [fm.e(347).then((() => fm(61397))), fm.e(341).then((() => fm(61403)))])), mm
    })();
    (0, Em.d)("BABYLON.SkyMaterial", Im)
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);