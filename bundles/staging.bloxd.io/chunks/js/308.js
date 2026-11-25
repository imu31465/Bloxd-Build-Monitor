export const id = 308;
export const ids = [308];
export const modules = {
  41854: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(40311),
      qt = Vt(41858);
    class Dt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = Vt, this.nOt = [], this._maxBlockCapacity = et || 64, this._selectionContent = new Ot.d(1024), this._creationFunc = tt
      }
      update(tt, et, Vt) {
        qt.e._CreateBlocks(tt, et, Vt, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      oOt(tt) {
        for (let et = 0; et < this.blocks.length; et++) {
          this.blocks[et].addEntry(tt)
        }
      }
      wZ(tt) {
        for (let et = 0; et < this.blocks.length; et++) {
          this.blocks[et].removeEntry(tt)
        }
      }
      select(tt, et) {
        this._selectionContent.reset();
        for (let Vt = 0; Vt < this.blocks.length; Vt++) {
          this.blocks[Vt].select(tt, this._selectionContent, et)
        }
        return et ? this._selectionContent.concat(this.nOt) : this._selectionContent.concatWithNoDuplicate(this.nOt), this._selectionContent
      }
      intersects(tt, et, Vt) {
        this._selectionContent.reset();
        for (let Ot = 0; Ot < this.blocks.length; Ot++) {
          this.blocks[Ot].intersects(tt, et, this._selectionContent, Vt)
        }
        return Vt ? this._selectionContent.concat(this.nOt) : this._selectionContent.concatWithNoDuplicate(this.nOt), this._selectionContent
      }
      intersectsRay(tt) {
        this._selectionContent.reset();
        for (let et = 0; et < this.blocks.length; et++) {
          this.blocks[et].intersectsRay(tt, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.nOt), this._selectionContent
      }
    }
    Dt.CreationFuncForMeshes = (tt, et) => {
      const Vt = tt.fL();
      !tt.isBlocked && Vt.boundingBox.intersectsMinMax(et.YOt, et.iOt) && et.entries.push(tt)
    }, Dt.CreationFuncForSubMeshes = (tt, et) => {
      tt.fL().boundingBox.intersectsMinMax(et.YOt, et.iOt) && et.entries.push(tt)
    }
  },
  41858: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(37336),
      qt = Vt(40497);
    class Dt {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.entries = [], this.tqt = new Array, this._capacity = Vt, this._depth = Ot, this._maxDepth = qt, this._creationFunc = Dt, this._minPoint = tt, this._maxPoint = et, this.tqt.push(tt.clone()), this.tqt.push(et.clone()), this.tqt.push(tt.clone()), this.tqt[2].x = et.x, this.tqt.push(tt.clone()), this.tqt[3].y = et.y, this.tqt.push(tt.clone()), this.tqt[4].z = et.z, this.tqt.push(et.clone()), this.tqt[5].z = tt.z, this.tqt.push(et.clone()), this.tqt[6].x = tt.x, this.tqt.push(et.clone()), this.tqt[7].y = tt.y
      }
      get uQ() {
        return this._capacity
      }
      get YOt() {
        return this._minPoint
      }
      get iOt() {
        return this._maxPoint
      }
      addEntry(tt) {
        if (this.blocks)
          for (let et = 0; et < this.blocks.length; et++) {
            this.blocks[et].addEntry(tt)
          } else this._creationFunc(tt, this), this.entries.length > this.uQ && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(tt) {
        if (this.blocks) {
          for (let et = 0; et < this.blocks.length; et++) {
            this.blocks[et].removeEntry(tt)
          }
          return
        }
        const et = this.entries.indexOf(tt);
        et > -1 && this.entries.splice(et, 1)
      }
      addEntries(tt) {
        for (let et = 0; et < tt.length; et++) {
          const Vt = tt[et];
          this.addEntry(Vt)
        }
      }
      select(tt, et, Vt) {
        if (qt.e.IsInFrustum(this.tqt, tt)) {
          if (this.blocks) {
            for (let Ot = 0; Ot < this.blocks.length; Ot++) {
              this.blocks[Ot].select(tt, et, Vt)
            }
            return
          }
          Vt ? et.concat(this.entries) : et.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(tt, et, Vt, Ot) {
        if (qt.e.IntersectsSphere(this._minPoint, this._maxPoint, tt, et)) {
          if (this.blocks) {
            for (let qt = 0; qt < this.blocks.length; qt++) {
              this.blocks[qt].intersects(tt, et, Vt, Ot)
            }
            return
          }
          Ot ? Vt.concat(this.entries) : Vt.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(tt, et) {
        if (tt.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let Vt = 0; Vt < this.blocks.length; Vt++) {
              this.blocks[Vt].intersectsRay(tt, et)
            }
            return
          }
          et.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Dt._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(tt, et, Vt, qt, mt, dt, jt, Ht) {
        jt.blocks = new Array;
        const Xt = new Ot.n((et.x - tt.x) / 2, (et.y - tt.y) / 2, (et.z - tt.z) / 2);
        for (let Ot = 0; Ot < 2; Ot++)
          for (let et = 0; et < 2; et++)
            for (let Qt = 0; Qt < 2; Qt++) {
              const lt = tt.add(Xt.multiplyByFloats(Ot, et, Qt)),
                Et = tt.add(Xt.multiplyByFloats(Ot + 1, et + 1, Qt + 1)),
                ft = new Dt(lt, Et, qt, mt + 1, dt, Ht);
              ft.addEntries(Vt), jt.blocks.push(ft)
            }
      }
    }
  },
  41865: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt
    });
    var Ot = Vt(40296),
      qt = Vt(37336),
      Dt = Vt(40633),
      mt = Vt(41813),
      dt = Vt(40366),
      jt = Vt(37359),
      Ht = Vt(41854);
    class Xt {
      constructor(tt) {
        this.name = dt.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new mt.C(qt.n.Zero(), new qt.n(1, 1, 1)), (tt = tt || jt.d.LastCreatedScene) && (this.Fw = tt, this.Fw.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Fw.getActiveSubMeshCandidates = tt => this.getActiveSubMeshCandidates(tt), this.Fw.getCollidingSubMeshCandidates = (tt, et) => this.getCollidingSubMeshCandidates(tt, et), this.Fw.getIntersectingSubMeshCandidates = (tt, et) => this.getIntersectingSubMeshCandidates(tt, et))
      }
      register() {
        this.Fw.onMeshRemovedObservable.add((tt => {
          const et = this.Fw.selectionOctree;
          if (void 0 !== et && null !== et) {
            const Vt = et.nOt.indexOf(tt); - 1 !== Vt && et.nOt.splice(Vt, 1)
          }
        })), this.Fw.onMeshImportedObservable.add((tt => {
          const et = this.Fw.selectionOctree;
          void 0 !== et && null !== et && et.oOt(tt)
        }))
      }
      getActiveMeshCandidates() {
        return this.Fw.mqt?.select(this.Fw.frustumPlanes) || this.Fw._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(tt) {
        if (tt._submeshesOctree && tt.useOctreeForRenderingSelection) {
          return tt._submeshesOctree.select(this.Fw.frustumPlanes)
        }
        return this.Fw._getDefaultSubMeshCandidates(tt)
      }
      getIntersectingSubMeshCandidates(tt, et) {
        if (tt._submeshesOctree && tt.useOctreeForPicking) {
          mt.C.TransformToRef(et, tt.getWorldMatrix(), this._tempRay);
          return tt._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Fw._getDefaultSubMeshCandidates(tt)
      }
      getCollidingSubMeshCandidates(tt, et) {
        if (tt._submeshesOctree && tt.useOctreeForCollisions) {
          const Vt = et._velocityWorldLength + Math.max(et._radius.x, et._radius.y, et._radius.z);
          return tt._submeshesOctree.intersects(et._basePointWorld, Vt)
        }
        return this.Fw._getDefaultSubMeshCandidates(tt)
      }
      rebuild() {}
      dispose() {}
    }
    let Qt = !1;
    Qt || (Qt = !0, Ot.d.prototype.createOrUpdateSelectionOctree = function() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        Vt = this._getComponent(dt.e.NAME_OCTREE);
      Vt || (Vt = new Xt(this), this.KOt(Vt)), this.mqt || (this.mqt = new Ht.e(Ht.e.CreationFuncForMeshes, tt, et));
      const Ot = this.getWorldExtends();
      return this.mqt.update(Ot.min, Ot.max, this.meshes), this.mqt
    }, Object.defineProperty(Ot.d.prototype, "selectionOctree", {
      get: function() {
        return this.mqt
      },
      enumerable: !0,
      configurable: !0
    }), Dt.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Vt = this.vI();
      let Ot = Vt._getComponent(dt.e.NAME_OCTREE);
      Ot || (Ot = new Xt(Vt), Vt.KOt(Ot)), this._submeshesOctree || (this._submeshesOctree = new Ht.e(Ht.e.CreationFuncForSubMeshes, tt, et)), this.computeWorldMatrix(!0);
      const qt = this.fL().boundingBox;
      return this._submeshesOctree.update(qt.minimumWorld, qt.maximumWorld, this.vJ), this._submeshesOctree
    })
  },
  41813: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => Qt,
      e: () => Rt,
      f: () => wt,
      j: () => ft,
      l: () => Et,
      m: () => St,
      o: () => Wt,
      s: () => Kt,
      w: () => vt,
      z: () => ht
    });
    var Ot = Vt(37342),
      qt = Vt(37336),
      Dt = Vt(37350),
      mt = Vt(40482),
      dt = Vt(40340),
      jt = Vt(37359),
      Ht = Vt(40389);
    const Xt = {
      internalPickerForMesh: void 0
    };
    class Qt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ot.e;
        this.origin = tt, this.direction = et, this.length = Vt, this.epsilon = qt
      }
      clone() {
        return new Qt(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Ot = Qt._TmpVector3[0].W9(tt.x - Vt, tt.y - Vt, tt.z - Vt),
          qt = Qt._TmpVector3[1].W9(et.x + Vt, et.y + Vt, et.z + Vt);
        let Dt, mt, dt, jt, Ht = 0,
          Xt = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Ot.x || this.origin.x > qt.x) return !1
        } else if (Dt = 1 / this.direction.x, mt = (Ot.x - this.origin.x) * Dt, dt = (qt.x - this.origin.x) * Dt, dt === -1 / 0 && (dt = 1 / 0), mt > dt && (jt = mt, mt = dt, dt = jt), Ht = Math.max(mt, Ht), Xt = Math.min(dt, Xt), Ht > Xt) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Ot.y || this.origin.y > qt.y) return !1
        } else if (Dt = 1 / this.direction.y, mt = (Ot.y - this.origin.y) * Dt, dt = (qt.y - this.origin.y) * Dt, dt === -1 / 0 && (dt = 1 / 0), mt > dt && (jt = mt, mt = dt, dt = jt), Ht = Math.max(mt, Ht), Xt = Math.min(dt, Xt), Ht > Xt) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Ot.z || this.origin.z > qt.z) return !1
        } else if (Dt = 1 / this.direction.z, mt = (Ot.z - this.origin.z) * Dt, dt = (qt.z - this.origin.z) * Dt, dt === -1 / 0 && (dt = 1 / 0), mt > dt && (jt = mt, mt = dt, dt = jt), Ht = Math.max(mt, Ht), Xt = Math.min(dt, Xt), Ht > Xt) return !1;
        return !0
      }
      intersectsBox(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(tt.minimum, tt.maximum, et)
      }
      intersectsSphere(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = tt.center.x - this.origin.x,
          Ot = tt.center.y - this.origin.y,
          qt = tt.center.z - this.origin.z,
          Dt = Vt * Vt + Ot * Ot + qt * qt,
          mt = tt.radius + et,
          dt = mt * mt;
        if (Dt <= dt) return !0;
        const jt = Vt * this.direction.x + Ot * this.direction.y + qt * this.direction.z;
        if (jt < 0) return !1;
        return Dt - jt * jt <= dt
      }
      intersectsTriangle(tt, et, Vt) {
        const Ot = Qt._TmpVector3[0],
          Dt = Qt._TmpVector3[1],
          dt = Qt._TmpVector3[2],
          jt = Qt._TmpVector3[3],
          Ht = Qt._TmpVector3[4];
        et.subtractToRef(tt, Ot), Vt.subtractToRef(tt, Dt), qt.n.CrossToRef(this.direction, Dt, dt);
        const Xt = qt.n.Dot(Ot, dt);
        if (0 === Xt) return null;
        const lt = 1 / Xt;
        this.origin.subtractToRef(tt, jt);
        const Et = qt.n.Dot(jt, dt) * lt;
        if (Et < -this.epsilon || Et > 1 + this.epsilon) return null;
        qt.n.CrossToRef(jt, Ot, Ht);
        const ft = qt.n.Dot(this.direction, Ht) * lt;
        if (ft < -this.epsilon || Et + ft > 1 + this.epsilon) return null;
        const wt = qt.n.Dot(Dt, Ht) * lt;
        return wt > this.length || wt < 0 ? null : new mt.d(1 - Et - ft, Et, wt)
      }
      intersectsPlane(tt) {
        let et;
        const Vt = qt.n.Dot(tt.normal, this.direction);
        if (Math.abs(Vt) < 9.99999997475243e-7) return null;
        {
          const Ot = qt.n.Dot(tt.normal, this.origin);
          return et = (-tt.d - Ot) / Vt, et < 0 ? et < -9.99999997475243e-7 ? null : 0 : et
        }
      }
      intersectsAxis(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (tt) {
          case "y": {
            const tt = (this.origin.y - et) / this.direction.y;
            return tt > 0 ? null : new qt.n(this.origin.x + this.direction.x * -tt, et, this.origin.z + this.direction.z * -tt)
          }
          case "x": {
            const tt = (this.origin.x - et) / this.direction.x;
            return tt > 0 ? null : new qt.n(et, this.origin.y + this.direction.y * -tt, this.origin.z + this.direction.z * -tt)
          }
          case "z": {
            const tt = (this.origin.z - et) / this.direction.z;
            return tt > 0 ? null : new qt.n(this.origin.x + this.direction.x * -tt, this.origin.y + this.direction.y * -tt, et)
          }
          default:
            return null
        }
      }
      uqt(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Dt = arguments.length > 4 ? arguments[4] : void 0,
          mt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const dt = qt.k.Matrix[0];
        return tt.getWorldMatrix().invertToRef(dt), this._tmpRay ? Qt.TransformToRef(this, dt, this._tmpRay) : this._tmpRay = Qt.Transform(this, dt), tt.intersects(this._tmpRay, et, Vt, Ot, Dt, mt)
      }
      intersectsMeshes(tt, et, Vt) {
        Vt ? Vt.length = 0 : Vt = [];
        for (let Ot = 0; Ot < tt.length; Ot++) {
          const qt = this.uqt(tt[Ot], et);
          qt.hit && Vt.push(qt)
        }
        return Vt.sort(this._comparePickingInfo), Vt
      }
      _comparePickingInfo(tt, et) {
        return tt.distance < et.distance ? -1 : tt.distance > et.distance ? 1 : 0
      }
      intersectionSegment(tt, et, Vt) {
        const Ot = this.origin,
          Dt = qt.k.uf[0],
          mt = qt.k.uf[1],
          dt = qt.k.uf[2],
          jt = qt.k.uf[3];
        et.subtractToRef(tt, Dt), this.direction.scaleToRef(Qt._Rayl, dt), Ot.addToRef(dt, mt), tt.subtractToRef(Ot, jt);
        const Ht = qt.n.Dot(Dt, Dt),
          Xt = qt.n.Dot(Dt, dt),
          lt = qt.n.Dot(dt, dt),
          Et = qt.n.Dot(Dt, jt),
          ft = qt.n.Dot(dt, jt),
          wt = Ht * lt - Xt * Xt;
        let yt, Nt, Mt = wt,
          bt = wt;
        wt < Qt._Smallnum ? (yt = 0, Mt = 1, Nt = ft, bt = lt) : (yt = Xt * ft - lt * Et, Nt = Ht * ft - Xt * Et, yt < 0 ? (yt = 0, Nt = ft, bt = lt) : yt > Mt && (yt = Mt, Nt = ft + Xt, bt = lt)), Nt < 0 ? (Nt = 0, -Et < 0 ? yt = 0 : -Et > Ht ? yt = Mt : (yt = -Et, Mt = Ht)) : Nt > bt && (Nt = bt, -Et + Xt < 0 ? yt = 0 : -Et + Xt > Ht ? yt = Mt : (yt = -Et + Xt, Mt = Ht));
        const Jt = Math.abs(yt) < Qt._Smallnum ? 0 : yt / Mt,
          Ct = Math.abs(Nt) < Qt._Smallnum ? 0 : Nt / bt,
          ut = qt.k.uf[4];
        dt.scaleToRef(Ct, ut);
        const Kt = qt.k.uf[5];
        Dt.scaleToRef(Jt, Kt), Kt.addInPlace(jt);
        const ht = qt.k.uf[6];
        Kt.subtractToRef(ut, ht);
        return Ct > 0 && Ct <= this.length && ht.lengthSquared() < Vt * Vt ? Kt.length() : -1
      }
      update(tt, et, Vt, Ot, Dt, mt, dt) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Qt._RayDistant || (Qt._RayDistant = Qt.Zero()), Qt._RayDistant.unprojectRayToRef(tt, et, Vt, Ot, qt.c.IdentityReadOnly, mt, dt);
          const jt = qt.k.Matrix[0];
          Dt.invertToRef(jt), Qt.TransformToRef(Qt._RayDistant, jt, this)
        } else this.unprojectRayToRef(tt, et, Vt, Ot, Dt, mt, dt);
        return this
      }
      static Zero() {
        return new Qt(qt.n.Zero(), qt.n.Zero())
      }
      static CreateNew(tt, et, Vt, Ot, qt, Dt, mt) {
        return Qt.Zero().update(tt, et, Vt, Ot, qt, Dt, mt)
      }
      static CreateNewFromTo(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qt.c.IdentityReadOnly;
        const Ot = new Qt(new qt.n(0, 0, 0), new qt.n(0, 0, 0));
        return Qt.CreateFromToToRef(tt, et, Ot, Vt)
      }
      static CreateFromToToRef(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qt.c.IdentityReadOnly;
        Vt.origin.rK(tt);
        const Dt = et.subtractToRef(tt, Vt.direction),
          mt = Math.sqrt(Dt.x * Dt.x + Dt.y * Dt.y + Dt.z * Dt.z);
        return Vt.length = mt, Vt.direction.normalize(), Qt.TransformToRef(Vt, Ot, Vt)
      }
      static Transform(tt, et) {
        const Vt = new Qt(new qt.n(0, 0, 0), new qt.n(0, 0, 0));
        return Qt.TransformToRef(tt, et, Vt), Vt
      }
      static TransformToRef(tt, et, Vt) {
        qt.n.TransformCoordinatesToRef(tt.origin, et, Vt.origin), qt.n.TransformNormalToRef(tt.direction, et, Vt.direction), Vt.length = tt.length, Vt.epsilon = tt.epsilon;
        const Ot = Vt.direction,
          Dt = Ot.length();
        if (0 !== Dt && 1 !== Dt) {
          const tt = 1 / Dt;
          Ot.x *= tt, Ot.y *= tt, Ot.z *= tt, Vt.length *= Dt
        }
        return Vt
      }
      unprojectRayToRef(tt, et, Vt, Ot, Dt, mt, dt) {
        const Ht = qt.k.Matrix[0];
        Dt.multiplyToRef(mt, Ht), Ht.multiplyToRef(dt, Ht), Ht.invert();
        const Xt = jt.d.LastCreatedEngine,
          Qt = qt.k.uf[0];
        Qt.x = tt / Vt * 2 - 1, Qt.y = -(et / Ot * 2 - 1), Qt.z = Xt?.LOt ? 1 : Xt?.isNDCHalfZRange ? 0 : -1;
        const lt = qt.k.uf[1].W9(Qt.x, Qt.y, 1 - 1e-8),
          Et = qt.k.uf[2],
          ft = qt.k.uf[3];
        qt.n.TransformCoordinatesToRef(Qt, Ht, Et), qt.n.TransformCoordinatesToRef(lt, Ht, ft), this.origin.rK(Et), ft.subtractToRef(Et, this.direction), this.direction.normalize()
      }
    }

    function lt(tt, et, Vt, Ot, qt) {
      let Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const mt = Qt.Zero();
      return Et(tt, et, Vt, Ot, mt, qt, Dt), mt
    }

    function Et(tt, et, Vt, Ot, Dt, mt) {
      let dt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        jt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Ht = tt.Jf();
      if (!mt && !(mt = tt.activeCamera) && !(mt = tt.cameraToUseForPointers)) return tt;
      const Xt = mt.viewport,
        Qt = Ht.getRenderHeight(),
        {
          x: lt,
          y: Et,
          width: ft,
          height: wt
        } = Xt.toGlobal(Ht.getRenderWidth(), Qt),
        yt = 1 / Ht.getHardwareScalingLevel();
      return et = et * yt - lt, Vt = Vt * yt - (Qt - Et - wt), Dt.update(et, Vt, ft, wt, Ot || qt.c.IdentityReadOnly, dt ? qt.c.IdentityReadOnly : mt.getViewMatrix(), mt.getProjectionMatrix(), jt), tt
    }

    function ft(tt, et, Vt, Ot) {
      const qt = Qt.Zero();
      return wt(tt, et, Vt, qt, Ot), qt
    }

    function wt(tt, et, Vt, Ot, Dt) {
      if (!dt.b) return tt;
      const mt = tt.Jf();
      if (!Dt && !(Dt = tt.activeCamera) && !(Dt = tt.cameraToUseForPointers)) throw new Error("Active camera not set");
      const jt = Dt.viewport,
        Ht = mt.getRenderHeight(),
        {
          x: Xt,
          y: Qt,
          width: lt,
          height: Et
        } = jt.toGlobal(mt.getRenderWidth(), Ht),
        ft = qt.c.Identity(),
        wt = 1 / mt.getHardwareScalingLevel();
      return et = et * wt - Xt, Vt = Vt * wt - (Ht - Qt - Et), Ot.update(et, Vt, lt, Et, ft, ft, Dt.getProjectionMatrix()), tt
    }

    function yt(tt, et, Vt, Ot, qt, Dt, mt, dt) {
      return Nt(tt, Vt, Ot, et(Ot, Vt.enableDistantPicking), qt, Dt, mt, dt)
    }

    function Nt(tt, et, Vt, Ot, qt, Dt, mt, dt) {
      const jt = et.intersects(Ot, qt, mt, Dt, Vt, dt);
      return jt && jt.hit ? !qt && null != tt && jt.distance >= tt.distance ? null : jt : null
    }

    function Mt(tt, et) {
      return "InstancedLinesMesh" === tt || "LinesMesh" === tt ? et.intersectionThreshold : 0
    }

    function bt(tt) {
      const et = tt.getClassName();
      if ("GreasedLineMesh" === et) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const Vt = tt.rawBoundingInfo;
      return {
        rawBoundingInfo: Vt,
        intersectionThreshold: Vt ? Mt(et, tt) : 0
      }
    }

    function Jt(tt, et, Vt, Ot, qt) {
      const Dt = tt(Vt, et.enableDistantPicking);
      return Dt.intersectsSphere(Ot.jqt, qt) && Dt.intersectsBox(Ot.boundingBox, qt) ? Dt : null
    }

    function Ct(tt, et, Vt, Ot, Dt, mt) {
      let jt = null;
      const Ht = !!(tt.activeCameras && tt.activeCameras.length > 1 && tt.cameraToUseForPointers !== tt.activeCamera),
        Qt = tt.cameraToUseForPointers || tt.activeCamera,
        lt = Xt.internalPickerForMesh || yt,
        Et = lt === yt;
      for (let dt = 0; dt < tt.meshes.length; dt++) {
        const Xt = tt.meshes[dt];
        if (Vt) {
          if (!Vt(Xt, -1)) continue
        } else if (!Xt.isEnabled() || !Xt.isVisible || !Xt.Gw) continue;
        const ft = Ht && Xt.isWorldMatrixCameraDependent(),
          wt = Xt.computeWorldMatrix(ft, Qt);
        if (Xt.hasThinInstances && Xt.DVt) {
          const tt = lt(jt, et, Xt, wt, !0, !0, mt);
          if (tt) {
            if (Dt) return tt;
            const {
              rawBoundingInfo: dt,
              intersectionThreshold: Ht
            } = bt(Xt), Qt = Xt._thinInstanceDataStorage.matrixData;
            if (Qt) {
              const tt = qt.k.Matrix[0],
                ft = qt.k.Matrix[1],
                yt = Math.min(Xt.r_, Qt.length >> 4);
              for (let Mt = 0; Mt < yt; Mt++) {
                if (Vt && !Vt(Xt, Mt)) continue;
                qt.c.FromArrayToRef(Qt, Mt << 4, tt), tt.multiplyToRef(wt, ft);
                const yt = Et && dt ? Jt(et, Xt, ft, dt, Ht) : null;
                if (Et && dt && !yt) continue;
                const bt = Et && yt ? Nt(jt, Xt, ft, yt, Ot, Dt, mt, !0) : lt(jt, et, Xt, ft, Ot, Dt, mt, !0);
                if (bt && (jt = bt, jt.thinInstanceIndex = Mt, Ot)) return jt
              }
            }
          }
        } else {
          const tt = lt(jt, et, Xt, wt, Ot, Dt, mt);
          if (tt && (jt = tt, Ot)) return jt
        }
      }
      return jt || new dt.b
    }

    function ut(tt, et, Vt, Ot) {
      if (!dt.b) return null;
      const Dt = [],
        mt = !!(tt.activeCameras && tt.activeCameras.length > 1 && tt.cameraToUseForPointers !== tt.activeCamera),
        jt = tt.cameraToUseForPointers || tt.activeCamera,
        Ht = Xt.internalPickerForMesh || yt,
        Qt = Ht === yt;
      for (let dt = 0; dt < tt.meshes.length; dt++) {
        const Xt = tt.meshes[dt];
        if (Vt) {
          if (!Vt(Xt, -1)) continue
        } else if (!Xt.isEnabled() || !Xt.isVisible || !Xt.Gw) continue;
        const lt = mt && Xt.isWorldMatrixCameraDependent(),
          Et = Xt.computeWorldMatrix(lt, jt);
        if (Xt.hasThinInstances && Xt.DVt) {
          if (Ht(null, et, Xt, Et, !0, !0, Ot)) {
            const {
              rawBoundingInfo: tt,
              intersectionThreshold: mt
            } = bt(Xt), dt = Xt._thinInstanceDataStorage.matrixData;
            if (dt) {
              const jt = qt.k.Matrix[0],
                lt = qt.k.Matrix[1],
                ft = Math.min(Xt.r_, dt.length >> 4);
              for (let wt = 0; wt < ft; wt++) {
                if (Vt && !Vt(Xt, wt)) continue;
                qt.c.FromArrayToRef(dt, wt << 4, jt), jt.multiplyToRef(Et, lt);
                const ft = Qt && tt ? Jt(et, Xt, lt, tt, mt) : null;
                if (Qt && tt && !ft) continue;
                const yt = Qt && ft ? Nt(null, Xt, lt, ft, !1, !1, Ot, !0) : Ht(null, et, Xt, lt, !1, !1, Ot, !0);
                yt && (yt.thinInstanceIndex = wt, Dt.push(yt))
              }
            }
          }
        } else {
          const tt = Ht(null, et, Xt, Et, !1, !1, Ot);
          tt && Dt.push(tt)
        }
      }
      return Dt
    }

    function Kt(tt, et, Vt, Ot, Dt, mt) {
      if (!dt.b) return null;
      const jt = Ct(tt, (Ot => (tt._tempPickingRay || (tt._tempPickingRay = Qt.Zero()), Et(tt, et, Vt, Ot, tt._tempPickingRay, mt || null), tt._tempPickingRay)), Ot, Dt, !0);
      return jt && (jt.ray = lt(tt, et, Vt, qt.c.Identity(), mt || null)), jt
    }

    function ht(tt, et, Vt, Ot, Dt, mt, dt) {
      const jt = Ct(tt, ((Ot, qt) => (tt._tempPickingRay || (tt._tempPickingRay = Qt.Zero()), Et(tt, et, Vt, Ot, tt._tempPickingRay, mt || null, !1, qt), tt._tempPickingRay)), Ot, Dt, !1, dt);
      return jt && (jt.ray = lt(tt, et, Vt, qt.c.Identity(), mt || null)), jt
    }

    function vt(tt, et, Vt, Ot, Dt) {
      const mt = Ct(tt, (Vt => (tt._pickWithRayInverseMatrix || (tt._pickWithRayInverseMatrix = qt.c.Identity()), Vt.invertToRef(tt._pickWithRayInverseMatrix), tt._cachedRayForTransform || (tt._cachedRayForTransform = Qt.Zero()), Qt.TransformToRef(et, tt._pickWithRayInverseMatrix, tt._cachedRayForTransform), tt._cachedRayForTransform)), Vt, Ot, !1, Dt);
      return mt && (mt.ray = et), mt
    }

    function Wt(tt, et, Vt, Ot, qt, Dt) {
      return ut(tt, (Ot => lt(tt, et, Vt, Ot, qt || null)), Ot, Dt)
    }

    function St(tt, et, Vt, Ot) {
      return ut(tt, (Vt => (tt._pickWithRayInverseMatrix || (tt._pickWithRayInverseMatrix = qt.c.Identity()), Vt.invertToRef(tt._pickWithRayInverseMatrix), tt._cachedRayForTransform || (tt._cachedRayForTransform = Qt.Zero()), Qt.TransformToRef(et, tt._pickWithRayInverseMatrix, tt._cachedRayForTransform), tt._cachedRayForTransform)), Vt, Ot)
    }

    function ct(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Ot = arguments.length > 3 ? arguments[3] : void 0,
        Dt = arguments.length > 4 ? arguments[4] : void 0;
      Ot || (Ot = tt.getWorldMatrix()), et.length = Vt, Dt ? et.origin.rK(Dt) : et.origin.rK(tt.position);
      const mt = qt.k.uf[2];
      mt.set(0, 0, tt._scene.useRightHandedSystem ? -1 : 1);
      const dt = qt.k.uf[3];
      return qt.n.TransformNormalToRef(mt, Ot, dt), qt.n.NormalizeToRef(dt, et.direction), et
    }

    function Rt(tt, et) {
      et && (et.prototype.getForwardRay = function() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        return ct(this, new Qt(qt.n.Zero(), qt.n.Zero(), tt), tt, et, Vt)
      }, et.prototype.getForwardRayToRef = function(tt) {
        return ct(this, tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), tt && (Ht.b._IsPickingAvailable = !0, tt.prototype.createPickingRay = function(tt, et, Vt, Ot) {
        return lt(this, tt, et, Vt, Ot, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Qt._TmpVector3 = (0, Dt.c)(6, qt.n.Zero), Qt._RayDistant = Qt.Zero(), Qt._Smallnum = 1e-8, Qt._Rayl = 1e9
  },
  41805: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt.C
    });
    var Ot = Vt(40296),
      qt = Vt(40409),
      Dt = Vt(41813);
    let mt = !1;
    mt || (mt = !0, (0, Dt.e)(Ot.d, qt.c), Ot.d.prototype.createPickingRayToRef = function(tt, et, Vt, Ot, qt) {
      let mt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        dt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Dt.l)(this, tt, et, Vt, Ot, qt, mt, dt)
    }, Ot.d.prototype.createPickingRayInCameraSpace = function(tt, et, Vt) {
      return (0, Dt.j)(this, tt, et, Vt)
    }, Ot.d.prototype.createPickingRayInCameraSpaceToRef = function(tt, et, Vt, Ot) {
      return (0, Dt.f)(this, tt, et, Vt, Ot)
    }, Ot.d.prototype.pickWithBoundingInfo = function(tt, et, Vt, Ot, qt) {
      return (0, Dt.s)(this, tt, et, Vt, Ot, qt)
    }, Ot.d.prototype.il = function(tt, et, Vt, Ot, qt, mt) {
      let dt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Dt.z)(this, tt, et, Vt, Ot, qt, mt, dt)
    }, Ot.d.prototype.pickWithRay = function(tt, et, Vt, Ot) {
      return (0, Dt.w)(this, tt, et, Vt, Ot)
    }, Ot.d.prototype.multiPick = function(tt, et, Vt, Ot, qt) {
      return (0, Dt.o)(this, tt, et, Vt, Ot, qt)
    }, Ot.d.prototype.multiPickWithRay = function(tt, et, Vt) {
      return (0, Dt.m)(this, tt, et, Vt)
    })
  },
  41816: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37336),
      mt = Vt(40445),
      dt = Vt(41819),
      jt = Vt(40415),
      Ht = Vt(37390);
    let Xt = (() => {
        var tt;
        let et, Vt, jt, Ht, Xt, Qt, lt, Et, ft = dt.b,
          wt = [],
          yt = [],
          Nt = [],
          Mt = [],
          bt = [],
          Jt = [],
          Ct = [],
          ut = [],
          Kt = [],
          ht = [],
          vt = [],
          Wt = [],
          St = [];
        return tt = class extends ft {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(tt) {
            this._shadowFrustumSize = tt, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(tt) {
            this._shadowOrthoScale = tt, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(tt) {
            this._orthoLeft = tt
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(tt) {
            this._orthoRight = tt
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(tt) {
            this._orthoTop = tt
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(tt) {
            this._orthoBottom = tt
          }
          constructor(tt, et, Vt, qt) {
            super(tt, Vt, qt), this._shadowFrustumSize = ((0, Ot.m)(this, wt), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Ot.m)(this, yt, !0), this.autoCalcShadowZBounds = ((0, Ot.m)(this, Nt), (0, Ot.m)(this, Mt, !1)), this._orthoLeft = ((0, Ot.m)(this, bt), (0, Ot.m)(this, Jt, Number.MAX_VALUE)), this._orthoRight = ((0, Ot.m)(this, Ct), (0, Ot.m)(this, ut, Number.MIN_VALUE)), this._orthoTop = ((0, Ot.m)(this, Kt), (0, Ot.m)(this, ht, Number.MIN_VALUE)), this._orthoBottom = ((0, Ot.m)(this, vt), (0, Ot.m)(this, Wt, Number.MAX_VALUE)), (0, Ot.m)(this, St), this.position = et.scale(-1), this.direction = et
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return mt.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(tt, et, Vt) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(tt) : this._setDefaultAutoExtendShadowProjectionMatrix(tt, et, Vt)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(tt) {
            const et = this.vI().activeCamera;
            Dt.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : et ? et.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : et ? et.maxZ : 1e4, tt, this.vI().Jf().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(tt, et, Vt) {
            const Ot = this.vI().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const tt = Dt.n.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Ot = Number.MAX_VALUE,
                qt = -Number.MAX_VALUE;
              for (let mt = 0; mt < Vt.length; mt++) {
                const dt = Vt[mt];
                if (!dt) continue;
                const jt = dt.fL().boundingBox;
                for (let Vt = 0; Vt < jt.vectorsWorld.length; Vt++) Dt.n.TransformCoordinatesToRef(jt.vectorsWorld[Vt], et, tt), tt.x < this._orthoLeft && (this._orthoLeft = tt.x), tt.y < this._orthoBottom && (this._orthoBottom = tt.y), tt.x > this._orthoRight && (this._orthoRight = tt.x), tt.y > this._orthoTop && (this._orthoTop = tt.y), this.autoCalcShadowZBounds && (tt.z < Ot && (Ot = tt.z), tt.z > qt && (qt = tt.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Ot, this._shadowMaxZ = qt)
            }
            const qt = this._orthoRight - this._orthoLeft,
              mt = this._orthoTop - this._orthoBottom,
              dt = void 0 !== this.shadowMinZ ? this.shadowMinZ : Ot?.minZ || 0,
              jt = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Ot?.maxZ || 1e4,
              Ht = this.vI().Jf().LOt;
            Dt.c.OrthoOffCenterLHToRef(this._orthoLeft - qt * this.shadowOrthoScale, this._orthoRight + qt * this.shadowOrthoScale, this._orthoBottom - mt * this.shadowOrthoScale, this._orthoTop + mt * this.shadowOrthoScale, Ht ? jt : dt, Ht ? dt : jt, tt, this.vI().Jf().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(tt, et) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, et), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, et), this)
          }
          transferToNodeMaterialEffect(tt, et) {
            return this.computeTransformedInformation() ? (tt.setFloat3(et, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (tt.setFloat3(et, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(tt) {
            const et = this._scene.Jf();
            return !et.LOt && et.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(tt) {
            const et = this._scene.Jf();
            return et.LOt && et.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(tt, et) {
            tt["DIRLIGHT" + et] = !0
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(ft[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.P)()], Vt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], Xt = [(0, qt.P)("orthoLeft")], Qt = [(0, qt.P)("orthoRight")], lt = [(0, qt.P)("orthoTop")], Et = [(0, qt.P)("orthoBottom")], (0, Ot.l)(tt, null, et, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: tt => "shadowFrustumSize" in tt,
              get: tt => tt.shadowFrustumSize
            },
            metadata: Dt
          }, null, wt), (0, Ot.l)(tt, null, Vt, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: tt => "shadowOrthoScale" in tt,
              get: tt => tt.shadowOrthoScale
            },
            metadata: Dt
          }, null, wt), (0, Ot.l)(null, null, jt, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: tt => "autoUpdateExtends" in tt,
              get: tt => tt.autoUpdateExtends,
              set: (tt, et) => {
                tt.autoUpdateExtends = et
              }
            },
            metadata: Dt
          }, yt, Nt), (0, Ot.l)(null, null, Ht, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: tt => "autoCalcShadowZBounds" in tt,
              get: tt => tt.autoCalcShadowZBounds,
              set: (tt, et) => {
                tt.autoCalcShadowZBounds = et
              }
            },
            metadata: Dt
          }, Mt, bt), (0, Ot.l)(null, null, Xt, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: tt => "_orthoLeft" in tt,
              get: tt => tt._orthoLeft,
              set: (tt, et) => {
                tt._orthoLeft = et
              }
            },
            metadata: Dt
          }, Jt, Ct), (0, Ot.l)(null, null, Qt, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: tt => "_orthoRight" in tt,
              get: tt => tt._orthoRight,
              set: (tt, et) => {
                tt._orthoRight = et
              }
            },
            metadata: Dt
          }, ut, Kt), (0, Ot.l)(null, null, lt, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: tt => "_orthoTop" in tt,
              get: tt => tt._orthoTop,
              set: (tt, et) => {
                tt._orthoTop = et
              }
            },
            metadata: Dt
          }, ht, vt), (0, Ot.l)(null, null, Et, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: tt => "_orthoBottom" in tt,
              get: tt => tt._orthoBottom,
              set: (tt, et) => {
                tt._orthoBottom = et
              }
            },
            metadata: Dt
          }, Wt, St), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt
      })(),
      Qt = !1;
    Qt || (Qt = !0, jt.d.AddNodeConstructor("Light_Type_1", ((tt, et) => () => new Xt(tt, Dt.n.Zero(), et))), (0, Ht.i)("BABYLON.DirectionalLight", Xt))
  },
  41831: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Be
    });
    var Ot = Vt(38927),
      qt = Vt(37367),
      Dt = Vt(37336),
      mt = Vt(40343),
      dt = Vt(41840),
      jt = Vt(37359),
      Ht = Vt(40463),
      Xt = Vt(37513),
      Qt = Vt(38935),
      lt = Vt(38897),
      Et = Vt(37372);
    class ft {
      constructor() {
        this.direction1 = new Dt.n(0, 1, 0), this.direction2 = new Dt.n(0, 1, 0)
      }
      startDirectionFunction(tt, et, Vt, Ot) {
        const qt = (0, Et.RandomRange)(this.direction1.x, this.direction2.x),
          mt = (0, Et.RandomRange)(this.direction1.y, this.direction2.y),
          dt = (0, Et.RandomRange)(this.direction1.z, this.direction2.z);
        Ot ? et.W9(qt, mt, dt) : Dt.n.TransformNormalFromFloatsToRef(qt, mt, dt, tt, et)
      }
      startPositionFunction(tt, et, Vt, Ot) {
        Ot ? et.W9(0, 0, 0) : Dt.n.TransformCoordinatesFromFloatsToRef(0, 0, 0, tt, et)
      }
      clone() {
        const tt = new ft;
        return lt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setVector3("direction1", this.direction1), tt.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(tt) {
        tt.addUniform("direction1", 3), tt.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const tt = {};
        return tt.type = this.getClassName(), tt.direction1 = this.direction1.GOt(), tt.direction2 = this.direction2.GOt(), tt
      }
      parse(tt) {
        Dt.n.FromArrayToRef(tt.direction1, 0, this.direction1), Dt.n.FromArrayToRef(tt.direction2, 0, this.direction2)
      }
    }
    class wt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = tt, this.radiusRange = et, this.directionRandomizer = Vt
      }
      startDirectionFunction(tt, et, Vt, Ot) {
        const qt = Vt.position.subtract(tt.getTranslation()).normalize(),
          mt = (0, Et.RandomRange)(0, this.directionRandomizer),
          dt = (0, Et.RandomRange)(0, this.directionRandomizer),
          jt = (0, Et.RandomRange)(0, this.directionRandomizer);
        qt.x += mt, qt.y += dt, qt.z += jt, qt.normalize(), Ot ? et.rK(qt) : Dt.n.TransformNormalFromFloatsToRef(qt.x, qt.y, qt.z, tt, et)
      }
      startPositionFunction(tt, et, Vt, Ot) {
        const qt = this.radius - (0, Et.RandomRange)(0, this.radius * this.radiusRange),
          mt = (0, Et.RandomRange)(0, 1),
          dt = (0, Et.RandomRange)(0, 2 * Math.PI),
          jt = Math.acos(2 * mt - 1),
          Ht = qt * Math.cos(dt) * Math.sin(jt),
          Xt = qt * Math.cos(jt),
          Qt = qt * Math.sin(dt) * Math.sin(jt);
        Ot ? et.W9(Ht, Math.abs(Xt), Qt) : Dt.n.TransformCoordinatesFromFloatsToRef(Ht, Math.abs(Xt), Qt, tt, et)
      }
      clone() {
        const tt = new wt(this.radius, this.directionRandomizer);
        return lt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setFloat("radius", this.radius), tt.setFloat("radiusRange", this.radiusRange), tt.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(tt) {
        tt.addUniform("radius", 1), tt.addUniform("radiusRange", 1), tt.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const tt = {};
        return tt.type = this.getClassName(), tt.radius = this.radius, tt.radiusRange = this.radiusRange, tt.directionRandomizer = this.directionRandomizer, tt
      }
      parse(tt) {
        this.radius = tt.radius, this.radiusRange = tt.radiusRange, this.directionRandomizer = tt.directionRandomizer
      }
    }
    class yt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = tt, this.radiusRange = et, this.directionRandomizer = Vt
      }
      startDirectionFunction(tt, et, Vt, Ot) {
        const qt = Vt.position.subtract(tt.getTranslation()).normalize(),
          mt = (0, Et.RandomRange)(0, this.directionRandomizer),
          dt = (0, Et.RandomRange)(0, this.directionRandomizer),
          jt = (0, Et.RandomRange)(0, this.directionRandomizer);
        qt.x += mt, qt.y += dt, qt.z += jt, qt.normalize(), Ot ? et.rK(qt) : Dt.n.TransformNormalFromFloatsToRef(qt.x, qt.y, qt.z, tt, et)
      }
      startPositionFunction(tt, et, Vt, Ot) {
        const qt = this.radius - (0, Et.RandomRange)(0, this.radius * this.radiusRange),
          mt = (0, Et.RandomRange)(0, 1),
          dt = (0, Et.RandomRange)(0, 2 * Math.PI),
          jt = Math.acos(2 * mt - 1),
          Ht = qt * Math.cos(dt) * Math.sin(jt),
          Xt = qt * Math.cos(jt),
          Qt = qt * Math.sin(dt) * Math.sin(jt);
        Ot ? et.W9(Ht, Xt, Qt) : Dt.n.TransformCoordinatesFromFloatsToRef(Ht, Xt, Qt, tt, et)
      }
      clone() {
        const tt = new yt(this.radius, this.directionRandomizer);
        return lt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setFloat("radius", this.radius), tt.setFloat("radiusRange", this.radiusRange), tt.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(tt) {
        tt.addUniform("radius", 1), tt.addUniform("radiusRange", 1), tt.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const tt = {};
        return tt.type = this.getClassName(), tt.radius = this.radius, tt.radiusRange = this.radiusRange, tt.directionRandomizer = this.directionRandomizer, tt
      }
      parse(tt) {
        this.radius = tt.radius, this.radiusRange = tt.radiusRange, this.directionRandomizer = tt.directionRandomizer
      }
    }
    class Nt extends yt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Dt.n(0, 1, 0),
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Dt.n(0, 1, 0);
        super(tt), this.direction1 = et, this.direction2 = Vt
      }
      startDirectionFunction(tt, et, Vt, Ot) {
        const qt = (0, Et.RandomRange)(this.direction1.x, this.direction2.x),
          mt = (0, Et.RandomRange)(this.direction1.y, this.direction2.y),
          dt = (0, Et.RandomRange)(this.direction1.z, this.direction2.z);
        Ot ? et.W9(qt, mt, dt) : Dt.n.TransformNormalFromFloatsToRef(qt, mt, dt, tt, et)
      }
      clone() {
        const tt = new Nt(this.radius, this.direction1, this.direction2);
        return lt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setFloat("radius", this.radius), tt.setFloat("radiusRange", this.radiusRange), tt.setVector3("direction1", this.direction1), tt.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(tt) {
        tt.addUniform("radius", 1), tt.addUniform("radiusRange", 1), tt.addUniform("direction1", 3), tt.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const tt = super.serialize();
        return tt.direction1 = this.direction1.GOt(), tt.direction2 = this.direction2.GOt(), tt
      }
      parse(tt) {
        super.parse(tt), Dt.n.FromArrayToRef(tt.direction1, 0, this.direction1), Dt.n.FromArrayToRef(tt.direction2, 0, this.direction2)
      }
    }
    var Mt = Vt(38888);
    class bt {
      get radius() {
        return this._radius
      }
      set radius(tt) {
        this._radius = tt, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(tt) {
        this._angle = tt, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = Vt, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = et, this.radius = tt
      }
      startDirectionFunction(tt, et, Vt, Ot) {
        const qt = Vt.position.subtract(tt.getTranslation()).normalize(),
          mt = (0, Et.RandomRange)(0, this.directionRandomizer),
          dt = (0, Et.RandomRange)(0, this.directionRandomizer),
          jt = (0, Et.RandomRange)(0, this.directionRandomizer);
        qt.x += mt, qt.y += dt, qt.z += jt, qt.normalize(), Ot ? et.rK(qt) : Dt.n.TransformNormalFromFloatsToRef(qt.x, qt.y, qt.z, tt, et)
      }
      startPositionFunction(tt, et, Vt, Ot) {
        const qt = (0, Et.RandomRange)(0, 2 * Math.PI);
        let mt;
        this.emitFromSpawnPointOnly ? mt = 1e-4 : (mt = (0, Et.RandomRange)(0, this.heightRange), mt = 1 - mt * mt);
        let dt = this._radius - (0, Et.RandomRange)(0, this._radius * this.radiusRange);
        dt *= mt;
        const jt = dt * Math.sin(qt),
          Ht = dt * Math.cos(qt),
          Xt = mt * this._height;
        if (Ot) return et.x = jt, et.y = Xt, void(et.z = Ht);
        Dt.n.TransformCoordinatesFromFloatsToRef(jt, Xt, Ht, tt, et)
      }
      clone() {
        const tt = new bt(this._radius, this._angle, this.directionRandomizer);
        return lt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setFloat2("radius", this._radius, this.radiusRange), tt.setFloat("coneAngle", this._angle), tt.setFloat2("height", this._height, this.heightRange), tt.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(tt) {
        tt.addUniform("radius", 2), tt.addUniform("coneAngle", 1), tt.addUniform("height", 2), tt.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let tt = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (tt += "\n#define CONEEMITTERSPAWNPOINT"), tt
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const tt = {};
        return tt.type = this.getClassName(), tt.radius = this._radius, tt.angle = this._angle, tt.directionRandomizer = this.directionRandomizer, tt.radiusRange = this.radiusRange, tt.heightRange = this.heightRange, tt.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, tt
      }
      parse(tt) {
        this.radius = tt.radius, this.angle = tt.angle, this.directionRandomizer = tt.directionRandomizer, this.radiusRange = void 0 !== tt.radiusRange ? tt.radiusRange : 1, this.heightRange = void 0 !== tt.heightRange ? tt.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== tt.emitFromSpawnPointOnly && tt.emitFromSpawnPointOnly
      }
    }
    class Jt extends bt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Dt.n(0, 1, 0),
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Dt.n(0, 1, 0);
        super(tt, et), this.direction1 = Vt, this.direction2 = Ot
      }
      startDirectionFunction(tt, et, Vt, Ot) {
        const qt = (0, Et.RandomRange)(this.direction1.x, this.direction2.x),
          mt = (0, Et.RandomRange)(this.direction1.y, this.direction2.y),
          dt = (0, Et.RandomRange)(this.direction1.z, this.direction2.z);
        Ot ? et.W9(qt, mt, dt) : Dt.n.TransformNormalFromFloatsToRef(qt, mt, dt, tt, et)
      }
      clone() {
        const tt = new Jt(this.radius, this.angle, this.direction1, this.direction2);
        return lt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        super.applyToShader(tt), tt.setVector3("direction1", this.direction1), tt.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(tt) {
        super.buildUniformLayout(tt), tt.addUniform("direction1", 3), tt.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const tt = super.serialize();
        return tt.direction1 = this.direction1.GOt(), tt.direction2 = this.direction2.GOt(), tt
      }
      parse(tt) {
        super.parse(tt), Dt.n.FromArrayToRef(tt.direction1, 0, this.direction1), Dt.n.FromArrayToRef(tt.direction2, 0, this.direction2)
      }
    }
    class Ct {
      get mesh() {
        return this._mesh
      }
      set mesh(tt) {
        this._mesh !== tt && (this._mesh = tt, tt ? (this._indices = tt.zOt(), this._positions = tt.getVerticesData(mt.m.PositionKind), this._normals = tt.getVerticesData(mt.m.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Dt.n.Zero(), this._mesh = null, this.direction1 = new Dt.n(0, 1, 0), this.direction2 = new Dt.n(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = tt
      }
      startDirectionFunction(tt, et, Vt, Ot) {
        if (this.useMeshNormalsForDirection && this._normals) return void Dt.n.TransformNormalToRef(this._storedNormal, tt, et);
        const qt = (0, Et.RandomRange)(this.direction1.x, this.direction2.x),
          mt = (0, Et.RandomRange)(this.direction1.y, this.direction2.y),
          dt = (0, Et.RandomRange)(this.direction1.z, this.direction2.z);
        Ot ? et.W9(qt, mt, dt) : Dt.n.TransformNormalFromFloatsToRef(qt, mt, dt, tt, et)
      }
      startPositionFunction(tt, et, Vt, Ot) {
        if (!this._indices || !this._positions) return;
        const qt = 3 * (Math.random() * (this._indices.length / 3) | 0),
          mt = Math.random(),
          dt = Math.random() * (1 - mt),
          jt = 1 - mt - dt,
          Ht = this._indices[qt],
          Xt = this._indices[qt + 1],
          Qt = this._indices[qt + 2],
          lt = Dt.k.uf[0],
          Et = Dt.k.uf[1],
          ft = Dt.k.uf[2],
          wt = Dt.k.uf[3];
        Dt.n.FromArrayToRef(this._positions, 3 * Ht, lt), Dt.n.FromArrayToRef(this._positions, 3 * Xt, Et), Dt.n.FromArrayToRef(this._positions, 3 * Qt, ft), wt.x = mt * lt.x + dt * Et.x + jt * ft.x, wt.y = mt * lt.y + dt * Et.y + jt * ft.y, wt.z = mt * lt.z + dt * Et.z + jt * ft.z, Ot ? et.W9(wt.x, wt.y, wt.z) : Dt.n.TransformCoordinatesFromFloatsToRef(wt.x, wt.y, wt.z, tt, et), this.useMeshNormalsForDirection && this._normals && (Dt.n.FromArrayToRef(this._normals, 3 * Ht, lt), Dt.n.FromArrayToRef(this._normals, 3 * Xt, Et), Dt.n.FromArrayToRef(this._normals, 3 * Qt, ft), this._storedNormal.x = mt * lt.x + dt * Et.x + jt * ft.x, this._storedNormal.y = mt * lt.y + dt * Et.y + jt * ft.y, this._storedNormal.z = mt * lt.z + dt * Et.z + jt * ft.z)
      }
      clone() {
        const tt = new Ct(this.mesh);
        return lt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setVector3("direction1", this.direction1), tt.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(tt) {
        tt.addUniform("direction1", 3), tt.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const tt = {};
        return tt.type = this.getClassName(), tt.direction1 = this.direction1.GOt(), tt.direction2 = this.direction2.GOt(), tt.meshId = this.mesh?.id, tt.useMeshNormalsForDirection = this.useMeshNormalsForDirection, tt
      }
      parse(tt, et) {
        Dt.n.FromArrayToRef(tt.direction1, 0, this.direction1), Dt.n.FromArrayToRef(tt.direction2, 0, this.direction2), tt.meshId && et && (this.mesh = et.getLastMeshById(tt.meshId)), this.useMeshNormalsForDirection = tt.useMeshNormalsForDirection
      }
    }
    class ut {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(tt) {
        this._targetStopDuration !== tt && (this._targetStopDuration = tt)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(tt) {
        this._noiseTexture !== tt && (this._noiseTexture = tt, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(tt) {
        this._attractors.push(tt)
      }
      removeAttractor(tt) {
        const et = this._attractors.indexOf(tt); - 1 !== et && this._attractors.splice(et, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(tt) {
        this._animationSheetEnabled !== tt && (this._animationSheetEnabled = tt)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(tt) {
        this._isAnimationSheetEnabled != tt && (this._isAnimationSheetEnabled = tt, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(tt) {
        this._useLogarithmicDepth = tt && this.vI().Jf().getCaps().fragmentDepthSupported
      }
      vI() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(tt) {
        switch (tt) {
          case ut.BLENDMODE_MULTIPLYADD:
            return;
          case ut.BLENDMODE_ADD:
            tt = 1;
            break;
          case ut.BLENDMODE_ONEONE:
            tt = 6;
            break;
          case ut.BLENDMODE_STANDARD:
            tt = 2;
            break;
          case ut.BLENDMODE_MULTIPLY:
            tt = 4;
            break;
          case ut.BLENDMODE_SUBTRACT:
            tt = 3
        }
        this._engine.setAlphaMode(tt)
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
      addEmitRateGradient(tt, et, Vt) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, tt, et, Vt), this
      }
      removeEmitRateGradient(tt) {
        return this._removeFactorGradient(this._emitRateGradients, tt), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Dt.n.Zero()
      }
      set direction1(tt) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = tt)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Dt.n.Zero()
      }
      set direction2(tt) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = tt)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Dt.n.Zero()
      }
      set minEmitBox(tt) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = tt)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Dt.n.Zero()
      }
      set maxEmitBox(tt) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = tt)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(tt) {
        this._billboardMode !== tt && (this._billboardMode = tt, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(tt) {
        this._isBillboardBased !== tt && (this._isBillboardBased = tt, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(tt) {
        this._attachImageProcessingConfiguration(tt)
      }
      _attachImageProcessingConfiguration(tt) {
        tt !== this._imageProcessingConfiguration && (!tt && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = tt)
      }
      _reset() {}
      _addFactorGradient(tt, et, Vt, qt) {
        const Dt = new Ot.h(et, Vt, qt);
        tt.push(Dt), tt.sort(((tt, et) => tt.gradient < et.gradient ? -1 : tt.gradient > et.gradient ? 1 : 0))
      }
      _removeFactorGradient(tt, et) {
        if (!tt) return;
        let Vt = 0;
        for (const Ot of tt) {
          if (Ot.gradient === et) {
            tt.splice(Vt, 1);
            break
          }
          Vt++
        }
      }
      _removeGradientAndTexture(tt, et, Vt) {
        if (!et) return this;
        let Ot = 0;
        for (const qt of et) {
          if (qt.gradient === tt) {
            et.splice(Ot, 1);
            break
          }
          Ot++
        }
        return Vt && Vt.dispose(), this
      }
      constructor(tt) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Dt.n.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Dt.n(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = ut.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Dt.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Dt.n(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Dt.n.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Xt.c(1, 1, 1, 1), this.color2 = new Xt.c(1, 1, 1, 1), this.colorDead = new Xt.c(0, 0, 0, 1), this.textureMask = new Xt.c(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Ht.c, this.id = tt, this.name = tt
      }
      createPointEmitter(tt, et) {
        const Vt = function(tt, et) {
          const Vt = new ft;
          return Vt.direction1 = tt, Vt.direction2 = et, Vt
        }(tt, et);
        return this.particleEmitterType = Vt, Vt
      }
      createHemisphericEmitter() {
        const tt = function() {
          return new wt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = tt, tt
      }
      createSphereEmitter() {
        const tt = function() {
          return new yt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = tt, tt
      }
      createDirectedSphereEmitter() {
        const tt = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Dt.n(0, 1, 0),
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Dt.n(0, 1, 0);
          return new Nt(tt, et, Vt)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Dt.n(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Dt.n(0, 1, 0));
        return this.particleEmitterType = tt, tt
      }
      createCylinderEmitter() {
        const tt = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Mt.f(tt, et, Vt, Ot)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = tt, tt
      }
      createDirectedCylinderEmitter() {
        const tt = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Dt.n(0, 1, 0),
            qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Dt.n(0, 1, 0);
          return new Mt.c(tt, et, Vt, Ot, qt)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Dt.n(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Dt.n(0, 1, 0));
        return this.particleEmitterType = tt, tt
      }
      createConeEmitter() {
        const tt = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new bt(tt, et)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = tt, tt
      }
      createDirectedConeEmitter() {
        const tt = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Dt.n(0, 1, 0),
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Dt.n(0, 1, 0);
          return new Jt(tt, et, Vt, Ot)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Dt.n(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Dt.n(0, 1, 0));
        return this.particleEmitterType = tt, tt
      }
      createBoxEmitter(tt, et, Vt, Ot) {
        const qt = new Qt.d;
        return this.particleEmitterType = qt, this.direction1 = tt, this.direction2 = et, this.minEmitBox = Vt, this.maxEmitBox = Ot, qt
      }
      createMeshEmitter() {
        const tt = function() {
          return new Ct(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = tt, tt
      }
    }
    ut.BLENDMODE_ONEONE = 0, ut.BLENDMODE_STANDARD = 1, ut.BLENDMODE_ADD = 2, ut.BLENDMODE_MULTIPLY = 3, ut.BLENDMODE_MULTIPLYADD = 4, ut.BLENDMODE_SUBTRACT = -1;
    class Kt {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Xt.c(0, 0, 0, 0), this.currentColor2 = new Xt.c(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Dt.n.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class ht {
      constructor(tt) {
        this.particleSystem = tt, this.position = Dt.n.Zero(), this.direction = Dt.n.Zero(), this.color = new Xt.c(0, 0, 0, 0), this.colorStep = new Xt.c(0, 0, 0, 0), this.initialColor = new Xt.c(0, 0, 0, 0), this.colorDead = new Xt.c(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Dt.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Kt, this.id = ht._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let tt = this.age,
          et = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === et ? (et = 1, tt = this._properties.randomCellOffset) : tt += this._properties.randomCellOffset);
        const Vt = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Ot;
        Ot = this._properties.initialSpriteCellLoop ? (0, Et.Clamp)(tt * et % this.lifeTime / this.lifeTime) : (0, Et.Clamp)(tt * et / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Ot * Vt | 0
      }
      _inheritParticleInfoToSubEmitter(tt) {
        if (tt.particleSystem.emitter.position) {
          const et = tt.particleSystem.emitter;
          if (et.position.rK(this.position), tt.inheritDirection) {
            const tt = Dt.k.uf[0];
            this.direction.normalizeToRef(tt), et.setDirection(tt, 0, Math.PI / 2)
          }
        } else {
          tt.particleSystem.emitter.rK(this.position)
        }
        this.direction.scaleToRef(tt.inheritedVelocityAmount / 2, Dt.k.uf[0]), tt.particleSystem._inheritedVelocityOffset.rK(Dt.k.uf[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const tt of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(tt)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = ht._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(tt) {
        tt.position.rK(this.position), this._properties.initialDirection ? tt._properties.initialDirection ? tt._properties.initialDirection.rK(this._properties.initialDirection) : tt._properties.initialDirection = this._properties.initialDirection.clone() : tt._properties.initialDirection = null, tt.direction.rK(this.direction), this._properties.localPosition && (tt._properties.localPosition ? tt._properties.localPosition.rK(this._properties.localPosition) : tt._properties.localPosition = this._properties.localPosition.clone()), tt.color.rK(this.color), tt.colorStep.rK(this.colorStep), tt.initialColor.rK(this.initialColor), tt.colorDead.rK(this.colorDead), tt.lifeTime = this.lifeTime, tt.age = this.age, tt._properties.randomCellOffset = this._properties.randomCellOffset, tt.size = this.size, tt.scale.rK(this.scale), tt.angle = this.angle, tt.angularSpeed = this.angularSpeed, tt.particleSystem = this.particleSystem, tt.cellIndex = this.cellIndex, tt.id = this.id, tt._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (tt._properties.currentColorGradient = this._properties.currentColorGradient, tt._properties.currentColor1.rK(this._properties.currentColor1), tt._properties.currentColor2.rK(this._properties.currentColor2)), this._properties.currentSizeGradient && (tt._properties.currentSizeGradient = this._properties.currentSizeGradient, tt._properties.currentSize1 = this._properties.currentSize1, tt._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (tt._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, tt._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, tt._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (tt._properties.currentVelocityGradient = this._properties.currentVelocityGradient, tt._properties.currentVelocity1 = this._properties.currentVelocity1, tt._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (tt._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, tt._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, tt._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (tt._properties.currentDragGradient = this._properties.currentDragGradient, tt._properties.currentDrag1 = this._properties.currentDrag1, tt._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (tt._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, tt._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, tt._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (tt.remapData && this.remapData ? tt.remapData.rK(this.remapData) : tt.remapData = new Dt.r(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (tt._properties.randomNoiseCoordinates1 && tt._properties.randomNoiseCoordinates2 ? (tt._properties.randomNoiseCoordinates1.rK(this._properties.randomNoiseCoordinates1), tt._properties.randomNoiseCoordinates2.rK(this._properties.randomNoiseCoordinates2)) : (tt._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), tt._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), tt.metadata = this.metadata
      }
    }
    ht._Count = 0;
    var vt = Vt(41298);
    class Wt {
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
      constructor(tt, et, Vt, Ot) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = et, this.aT = tt, this._scene = Vt, this._host = Ot, this._activeTargets = [], et._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Vq: this._getCorrectLoopMode()
          }, this._animation.dataType === vt.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Dt.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const tt = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, tt)
        }
        if (this.aT instanceof Array) {
          let tt = 0;
          for (const et of this.aT) this._preparePath(et, tt), this._getOriginalValues(tt), tt++;
          this._targetIsArray = !0
        } else this._preparePath(this.aT), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const qt = et.getEvents();
        if (qt && qt.length > 0)
          for (const Dt of qt) this._events.push(Dt._clone());
        this._enableBlending = tt && tt.animationPropertiesOverride ? tt.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = this._animation.targetPropertyPath;
        if (Vt.length > 1) {
          let Ot = tt;
          for (let tt = 0; tt < Vt.length - 1; tt++) {
            const et = Vt[tt];
            if (Ot = Ot[et], void 0 === Ot) throw new Error(`Invalid property (${et}) in property path (${Vt.join(".")})`)
          }
          this._targetPath = Vt[Vt.length - 1], this._activeTargets[et] = Ot
        } else this._targetPath = Vt[0], this._activeTargets[et] = tt;
        if (void 0 === this._activeTargets[et][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${Vt.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.aT instanceof Array) {
            let tt = 0;
            for (const et of this.aT) void 0 !== this._originalValue[tt] && this._setValue(et, this._activeTargets[tt], this._originalValue[tt], -1, tt), tt++
          } else void 0 !== this._originalValue[0] && this._setValue(this.aT, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let tt = 0; tt < this._events.length; tt++) this._events[tt].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const tt = this._animation.runtimeAnimations.indexOf(this);
        tt > -1 && this._animation.runtimeAnimations.splice(tt, 1)
      }
      setValue(tt, et) {
        if (this._targetIsArray)
          for (let Vt = 0; Vt < this.aT.length; Vt++) {
            const Ot = this.aT[Vt];
            this._setValue(Ot, this._activeTargets[Vt], tt, et, Vt)
          } else this._setValue(this.aT, this._directTarget, tt, et, 0)
      }
      _getOriginalValues() {
        let tt, et = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Vt = this._activeTargets[et];
        if (vt.d.InheritOriginalValueFromActiveAnimations) {
          const tt = this._scene._activeAnimatables;
          for (let Ot = 0; Ot < tt.length; Ot++) {
            const qt = tt[Ot]._runtimeAnimations;
            for (let tt = 0; tt < qt.length; tt++) {
              const Ot = qt[tt];
              if (Ot !== this && Ot._targetPath === this._targetPath)
                for (let tt = 0; tt < Ot._activeTargets.length; tt++)
                  if (Ot._activeTargets[tt] === Vt && void 0 !== Ot._originalValue[tt]) return void(Ot._originalValue[tt] && Ot._originalValue[tt].clone ? this._originalValue[et] = Ot._originalValue[tt].clone() : this._originalValue[et] = Ot._originalValue[tt])
            }
          }
        }
        tt = Vt.getLocalMatrix && "_matrix" === this._targetPath ? Vt.getLocalMatrix() : Vt[this._targetPath], tt && tt.clone ? this._originalValue[et] = tt.clone() : this._originalValue[et] = tt
      }
      _registerTargetForLateAnimationBinding(tt, et) {
        const Vt = tt.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(Vt), Vt._lateAnimationHolders || (Vt._lateAnimationHolders = {}), Vt._lateAnimationHolders[tt.targetPath] || (Vt._lateAnimationHolders[tt.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: et
        }), tt.isAdditive ? (Vt._lateAnimationHolders[tt.targetPath].additiveAnimations.push(tt), Vt._lateAnimationHolders[tt.targetPath].totalAdditiveWeight += tt.weight) : (Vt._lateAnimationHolders[tt.targetPath].animations.push(tt), Vt._lateAnimationHolders[tt.targetPath].totalWeight += tt.weight)
      }
      _setValue(tt, et, Vt, Ot, qt) {
        const mt = this._scene._animationWrites,
          dt = this._scene._animationWriteCount++;
        let jt = mt[dt];
        if (jt || (jt = mt[dt] = {
            runtimeAnimation: this,
            target: tt,
            weight: Ot,
            additive: !1,
            blendingFactor: 1,
            my: !1
          }), jt.runtimeAnimation = this, jt.target = tt, jt.weight = Ot, jt.additive = this.isAdditive, jt.my = !1, this._currentActiveTarget = et, this._weight = Ot, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const tt = et[this._targetPath];
            tt.clone ? this._originalBlendValue = tt.clone() : this._originalBlendValue = tt
          }
          this._originalBlendValue.m ? vt.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Dt.c.DecomposeLerpToRef(this._originalBlendValue, Vt, this._blendingFactor, this._currentValue) : this._currentValue = Dt.c.DecomposeLerp(this._originalBlendValue, Vt, this._blendingFactor) : this._currentValue ? Dt.c.LerpToRef(this._originalBlendValue, Vt, this._blendingFactor, this._currentValue) : this._currentValue = Dt.c.Lerp(this._originalBlendValue, Vt, this._blendingFactor) : this._currentValue = vt.d._UniversalLerp(this._originalBlendValue, Vt, this._blendingFactor);
          const Ot = tt && tt.animationPropertiesOverride ? tt.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          jt.blendingFactor = this._blendingFactor, this._blendingFactor += Ot
        } else jt.blendingFactor = 1, this._currentValue ? this._currentValue.rK ? this._currentValue.rK(Vt) : this._currentValue = Vt : this._currentValue = Vt?.clone ? Vt.clone() : Vt; - 1 !== Ot ? this._registerTargetForLateAnimationBinding(this, this._originalValue[qt]) : this._animationState.Vq === vt.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[qt], et[this._targetPath]) : et[this._targetPath] = this._originalValue[qt] + this._currentValue : et[this._targetPath] = this._currentValue, tt.fVt && tt.fVt(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.aT && this.aT.animationPropertiesOverride) {
          return "MorphTarget" === this.aT.getClassName?.() && null == this.aT._animationPropertiesOverride ? this._animation.Vq : this.aT.animationPropertiesOverride.Vq
        }
        return this._animation.Vq
      }
      goToFrame(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const Vt = this._animation.getKeys();
        tt < Vt[0].frame ? tt = Vt[0].frame : tt > Vt[Vt.length - 1].frame && (tt = Vt[Vt.length - 1].frame);
        const Ot = this._events;
        if (Ot.length)
          for (let Dt = 0; Dt < Ot.length; Dt++) Ot[Dt].onlyOnce || (Ot[Dt].isDone = Ot[Dt].frame < tt);
        this._currentFrame = tt;
        const qt = this._animation._interpolate(tt, this._animationState);
        this.setValue(qt, et)
      }
      _prepareForSpeedRatioChange(tt) {
        const et = this._previousElapsedTime * (this._animation.framePerSecond * tt) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - et
      }
      animate(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const mt = this._animation,
          dt = mt.targetPropertyPath;
        if (!dt || dt.length < 1) return this._stopped = !0, !1;
        let jt, Ht = !0;
        const Xt = this._events;
        let Qt;
        if (this._coreRuntimeAnimation) Qt = Vt - et, jt = this._coreRuntimeAnimation.currentFrame, this._currentFrame = jt, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Dt;
          (et < this._minFrame || et > this._maxFrame) && (et = this._minFrame), (Vt < this._minFrame || Vt > this._maxFrame) && (Vt = this._maxFrame), Qt = Vt - et;
          let dt = tt * (mt.framePerSecond * qt) / 1e3 + this._absoluteFrameOffset,
            lt = 0,
            Et = !1;
          const ft = Ot && this._animationState.Vq === vt.d.ANIMATIONLOOPMODE_YOYO;
          if (ft) {
            const tt = (dt - et) / Qt,
              Vt = Math.sin(tt * Math.PI);
            dt = Math.abs(Vt) * Qt + et;
            const Ot = Vt >= 0 ? 1 : -1;
            this._yoyoDirection !== Ot && (Et = !0), this._yoyoDirection = Ot
          }
          if (this._previousElapsedTime = tt, this._previousAbsoluteFrame = dt, !Ot && Vt >= et && (dt >= Qt && qt > 0 || dt <= 0 && qt < 0)) Ht = !1, lt = mt.evaluate(Vt);
          else if (!Ot && et >= Vt && (dt <= Qt && qt < 0 || dt >= 0 && qt > 0)) Ht = !1, lt = mt.evaluate(et);
          else if (this._animationState.Vq !== vt.d.ANIMATIONLOOPMODE_CYCLE) {
            const tt = Vt.toString() + et.toString();
            if (!this._offsetsCache[tt]) {
              this._animationState.repeatCount = 0, this._animationState.Vq = vt.d.ANIMATIONLOOPMODE_CYCLE;
              const Ot = mt._interpolate(et, this._animationState),
                qt = mt._interpolate(Vt, this._animationState);
              switch (this._animationState.Vq = this._getCorrectLoopMode(), mt.dataType) {
                case vt.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[tt] = qt - Ot;
                  break;
                case vt.d.ANIMATIONTYPE_QUATERNION:
                case vt.d.ANIMATIONTYPE_VECTOR3:
                case vt.d.ANIMATIONTYPE_VECTOR2:
                case vt.d.ANIMATIONTYPE_SIZE:
                case vt.d.ANIMATIONTYPE_COLOR3:
                case vt.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[tt] = qt.subtract(Ot)
              }
              this._highLimitsCache[tt] = qt
            }
            lt = this._highLimitsCache[tt], Dt = this._offsetsCache[tt]
          }
          if (void 0 === Dt) switch (mt.dataType) {
            case vt.d.ANIMATIONTYPE_FLOAT:
              Dt = 0;
              break;
            case vt.d.ANIMATIONTYPE_QUATERNION:
              Dt = vt.l;
              break;
            case vt.d.ANIMATIONTYPE_VECTOR3:
              Dt = vt.s;
              break;
            case vt.d.ANIMATIONTYPE_VECTOR2:
              Dt = vt.q;
              break;
            case vt.d.ANIMATIONTYPE_SIZE:
              Dt = vt.o;
              break;
            case vt.d.ANIMATIONTYPE_COLOR3:
              Dt = vt.i;
              break;
            case vt.d.ANIMATIONTYPE_COLOR4:
              Dt = vt.k
          }
          const wt = this._host ? this._host.syncRoot : null;
          let yt, Nt = this._playbackFrames,
            Mt = !1;
          if (wt) {
            const tt = wt.toFrame - wt.fromFrame,
              Vt = wt.masterFrame,
              Ot = (Vt - wt.fromFrame) / tt;
            jt = et + Qt * Ot;
            const qt = wt.getAnimations()[0];
            if (qt && 0 !== tt) {
              const tt = Qt * Ot,
                et = qt._playbackTo - qt._playbackFrom;
              if (0 !== et && qt._playbackFrom <= wt.fromFrame && qt._playbackTo >= wt.toFrame) {
                Nt = Qt * Math.round((qt._playbackFrames - (qt._currentFrame - qt._playbackFrom)) / et) + tt
              } else Mt = (Vt - this._playbackSyncMasterFrame) * (qt._playbackFrames - this._playbackSyncMasterPlayed) < 0, Nt = tt;
              Mt = Mt || qt._playbackJumped, this._playbackSyncMasterPlayed = qt._playbackFrames, this._playbackSyncMasterFrame = Vt
            }
          } else jt = dt > 0 && et > Vt || dt < 0 && et < Vt ? Ht && 0 !== Qt ? Vt + dt % Qt : et : Ht && 0 !== Qt ? et + dt % Qt : Vt;
          if (!ft && (qt > 0 && this.currentFrame > jt || qt < 0 && this.currentFrame < jt) || ft && Et) {
            this._onLoop();
            for (let tt = 0; tt < Xt.length; tt++) Xt[tt].onlyOnce || (Xt[tt].isDone = !1);
            this._animationState.key = qt > 0 ? 0 : mt.getKeys().length - 1
          }
          if (this._currentFrame = jt, this._animationState.repeatCount = 0 === Qt ? 0 : dt / Qt | 0, this._animationState.highLimitValue = lt, this._animationState.offsetValue = Dt, this._playbackFrom = et, this._playbackTo = Vt, this._playbackJumped = Mt, this._playbackSyncRoot = wt, wt) yt = Nt;
          else if (Ht) yt = ft ? jt === et && dt === Vt ? Qt : jt - et : dt;
          else {
            const tt = 0 !== Qt ? Math.floor(this._playbackFrames / Qt) : 0;
            yt = (jt === Vt ? tt + 1 : tt) * Qt
          }
          this._playbackFrames = yt, this._playbackProgress = this._animationState.Vq === vt.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Qt : yt
        }
        const lt = mt._interpolate(jt, this._animationState);
        if (this.setValue(lt, Dt), Xt.length)
          for (let Et = 0; Et < Xt.length; Et++)
            if (Qt >= 0 && jt >= Xt[Et].frame && Xt[Et].frame >= et || Qt < 0 && jt <= Xt[Et].frame && Xt[Et].frame <= et) {
              const tt = Xt[Et];
              tt.isDone || (tt.onlyOnce && (Xt.splice(Et, 1), Et--), tt.isDone = !0, tt.action(jt))
            } return Ht || (this._stopped = !0), Ht
      }
    }
    var St = Vt(40098);
    class ct {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(tt) {
        this._weight = -1 !== tt ? Math.min(Math.max(tt, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(tt) {
        for (let et = 0; et < this._runtimeAnimations.length; et++) {
          this._runtimeAnimations[et]._prepareForSpeedRatioChange(tt)
        }
        this._speedRatio = tt, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Dt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          dt = arguments.length > 6 ? arguments[6] : void 0,
          jt = arguments.length > 7 ? arguments[7] : void 0,
          Ht = arguments.length > 8 ? arguments[8] : void 0,
          Xt = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Qt = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = et, this.fromFrame = Vt, this.toFrame = Ot, this.loopAnimation = Dt, this.onAnimationEnd = dt, this.onAnimationLoop = Ht, this.isAdditive = Xt, this.playOrder = Qt, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.NJ = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new qt.c, this.onAnimationLoopObservable = new qt.c, this._scene = tt, jt && this.appendAnimations(et, jt), this._speedRatio = mt, tt._activeAnimatables.push(this)
      }
      syncWith(tt) {
        if (this._syncRoot = tt, tt) {
          const tt = this._scene._activeAnimatables.indexOf(this);
          tt > -1 && (this._scene._activeAnimatables.splice(tt, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(tt, et) {
        for (let Vt = 0; Vt < et.length; Vt++) {
          const Ot = et[Vt],
            qt = new Wt(tt, Ot, this._scene, this);
          qt._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(qt)
        }
      }
      getAnimationByTargetProperty(tt) {
        const et = this._runtimeAnimations;
        for (let Vt = 0; Vt < et.length; Vt++)
          if (et[Vt].animation.targetProperty === tt) return et[Vt].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(tt) {
        const et = this._runtimeAnimations;
        for (let Vt = 0; Vt < et.length; Vt++)
          if (et[Vt].animation.targetProperty === tt) return et[Vt];
        return null
      }
      reset() {
        const tt = this._runtimeAnimations;
        for (let et = 0; et < tt.length; et++) tt[et].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(tt) {
        const et = this._runtimeAnimations;
        for (let Vt = 0; Vt < et.length; Vt++) et[Vt].animation.enableBlending = !0, et[Vt].animation.blendingSpeed = tt
      }
      disableBlending() {
        const tt = this._runtimeAnimations;
        for (let et = 0; et < tt.length; et++) tt[et].animation.enableBlending = !1
      }
      goToFrame(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this._runtimeAnimations;
        if (Vt[0]) {
          const et = Vt[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? Vt[0].currentFrame;
          const Ot = 0 === this.speedRatio ? 0 : (tt - this._frameToSyncFromJump) / et * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Ot
        }
        for (let Ot = 0; Ot < Vt.length; Ot++) Vt[Ot].goToFrame(tt, et ? this._weight : -1);
        this._goToFrame = tt
      }
      get paused() {
        return this.NJ
      }
      pause() {
        this.NJ || (this.NJ = !0)
      }
      restart() {
        this.NJ = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (tt || et) {
          const qt = this._scene._activeAnimatables.indexOf(this);
          if (qt > -1) {
            const Dt = this._runtimeAnimations;
            for (let Vt = Dt.length - 1; Vt >= 0; Vt--) {
              const Ot = Dt[Vt];
              tt && Ot.animation.name != tt || (et && !et(Ot.target) || (Ot.dispose(), Dt.splice(Vt, 1)))
            }
            0 == Dt.length && (Vt || this._scene._activeAnimatables.splice(qt, 1), Ot || this._raiseOnAnimationEnd())
          }
        } else {
          const tt = this._scene._activeAnimatables.indexOf(this);
          if (tt > -1) {
            Vt || this._scene._activeAnimatables.splice(tt, 1);
            const et = this._runtimeAnimations;
            for (let tt = 0; tt < et.length; tt++) et[tt].dispose();
            this._runtimeAnimations.length = 0, Ot || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((tt => {
          this.onAnimationEndObservable.add((() => {
            tt(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(tt) {
        if (this.NJ) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = tt), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = tt, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += tt - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !ct.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let et = !1;
        const Vt = this._runtimeAnimations;
        let Ot;
        for (Ot = 0; Ot < Vt.length; Ot++) {
          const qt = Vt[Ot].animate(tt - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          et = et || qt
        }
        if (this.animationStarted = et, !et) {
          if (this.disposeOnEnd)
            for (Ot = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Ot, 1), Ot = 0; Ot < Vt.length; Ot++) Vt[Ot].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return et
      }
    }

    function Rt(tt) {
      if (0 === tt.totalWeight && 0 === tt.totalAdditiveWeight) return tt.originalValue;
      let et = 1;
      const Vt = Dt.k.uf[0],
        Ot = Dt.k.uf[1],
        qt = Dt.k.Quaternion[0];
      let mt = 0;
      const dt = tt.animations[0],
        jt = tt.originalValue;
      let Ht, Xt = !1;
      if (tt.totalWeight < 1) Ht = 1 - tt.totalWeight, jt.decompose(Ot, qt, Vt);
      else {
        if (mt = 1, et = tt.totalWeight, Ht = dt.weight / et, 1 == Ht) {
          if (!tt.totalAdditiveWeight) return dt.currentValue;
          Xt = !0
        }
        dt.currentValue.decompose(Ot, qt, Vt)
      }
      if (!Xt) {
        Ot.scaleInPlace(Ht), Vt.scaleInPlace(Ht), qt.scaleInPlace(Ht);
        for (let dt = mt; dt < tt.animations.length; dt++) {
          const mt = tt.animations[dt];
          if (0 === mt.weight) continue;
          Ht = mt.weight / et;
          const jt = Dt.k.uf[2],
            Xt = Dt.k.uf[3],
            Qt = Dt.k.Quaternion[1];
          mt.currentValue.decompose(Xt, Qt, jt), Xt.scaleAndAddToRef(Ht, Ot), Qt.scaleAndAddToRef(Dt.e.Dot(qt, Qt) > 0 ? Ht : -Ht, qt), jt.scaleAndAddToRef(Ht, Vt)
        }
        qt.normalize()
      }
      for (let lt = 0; lt < tt.additiveAnimations.length; lt++) {
        const et = tt.additiveAnimations[lt];
        if (0 === et.weight) continue;
        const mt = Dt.k.uf[2],
          dt = Dt.k.uf[3],
          jt = Dt.k.Quaternion[1];
        et.currentValue.decompose(dt, jt, mt), dt.multiplyToRef(Ot, dt), Dt.n.LerpToRef(Ot, dt, et.weight, Ot), qt.multiplyToRef(jt, jt), Dt.e.SlerpToRef(qt, jt, et.weight, qt), mt.scaleAndAddToRef(et.weight, Vt)
      }
      const Qt = dt ? dt._animationState.workValue : Dt.k.Matrix[0].clone();
      return Dt.c.ComposeToRef(Ot, qt, Vt, Qt), Qt
    }

    function It(tt, et) {
      if (0 === tt.totalWeight && 0 === tt.totalAdditiveWeight) return et;
      const Vt = tt.animations[0],
        Ot = tt.originalValue;
      let qt = et;
      if (0 === tt.totalWeight && tt.totalAdditiveWeight > 0) qt.rK(Ot);
      else if (1 === tt.animations.length) {
        if (Dt.e.SlerpToRef(Ot, Vt.currentValue, Math.min(1, tt.totalWeight), qt), 0 === tt.totalAdditiveWeight) return qt
      } else if (tt.animations.length > 1) {
        let Vt, mt, dt = 1;
        if (tt.totalWeight < 1) {
          const et = 1 - tt.totalWeight;
          Vt = [], mt = [], Vt.push(Ot), mt.push(et)
        } else {
          if (2 === tt.animations.length && (Dt.e.SlerpToRef(tt.animations[0].currentValue, tt.animations[1].currentValue, tt.animations[1].weight / tt.totalWeight, et), 0 === tt.totalAdditiveWeight)) return et;
          Vt = [], mt = [], dt = tt.totalWeight
        }
        for (let et = 0; et < tt.animations.length; et++) {
          const Ot = tt.animations[et];
          Vt.push(Ot.currentValue), mt.push(Ot.weight / dt)
        }
        let jt = 0;
        for (let tt = 0; tt < Vt.length;) tt ? (jt += mt[tt], Dt.e.SlerpToRef(qt, Vt[tt], mt[tt] / jt, qt), tt++) : (Dt.e.SlerpToRef(Vt[tt], Vt[tt + 1], mt[tt + 1] / (mt[tt] + mt[tt + 1]), et), qt = et, jt = mt[tt] + mt[tt + 1], tt += 2)
      }
      for (let mt = 0; mt < tt.additiveAnimations.length; mt++) {
        const et = tt.additiveAnimations[mt];
        0 !== et.weight && (qt.multiplyToRef(et.currentValue, Dt.k.Quaternion[0]), Dt.e.SlerpToRef(qt, Dt.k.Quaternion[0], et.weight, qt))
      }
      return qt
    }

    function Pt(tt, et) {
      et && (et.prototype.copyAnimationRange = function(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new vt.d(this.name, "_matrix", tt.animations[0].framePerSecond, vt.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Dt = tt.animations[0].getRange(et);
        if (!Dt) return !1;
        const mt = Dt.from,
          dt = Dt.to,
          jt = tt.animations[0].getKeys(),
          Ht = tt.length,
          Xt = tt.getParent(),
          Qt = this.getParent(),
          lt = Ot && Xt && Ht && this.length && Ht !== this.length,
          Et = lt && Qt && Xt ? Qt.length / Xt.length : 1,
          ft = Ot && !Qt && qt && (1 !== qt.x || 1 !== qt.y || 1 !== qt.z),
          wt = this.animations[0].getKeys();
        let yt, Nt, Mt;
        for (let bt = 0, Jt = jt.length; bt < Jt; bt++) yt = jt[bt], yt.frame >= mt && yt.frame <= dt && (Ot ? (Mt = yt.value.clone(), lt ? (Nt = Mt.getTranslation(), Mt.setTranslation(Nt.scaleInPlace(Et))) : ft && qt ? (Nt = Mt.getTranslation(), Mt.setTranslation(Nt.multiplyInPlace(qt))) : Mt = yt.value) : Mt = yt.value, wt.push({
          frame: yt.frame + Vt,
          value: Mt
        }));
        return this.animations[0].createRange(et, mt + Vt, dt + Vt), !0
      }), tt && (tt.prototype._animate = function(tt) {
        const et = this._animationWrites,
          Vt = this._animationWriteCount;
        let Ot = 0;
        for (let Dt = this._animationStepWriteCount; Dt < Vt; Dt++) {
          const tt = et[Dt];
          tt.my && -1 === tt.weight || (tt.my = !0, et[Dt] = et[Ot], et[Ot] = tt, Ot++)
        }
        for (let Dt = Ot; Dt < Vt; Dt++) {
          const tt = et[Dt];
          tt.runtimeAnimation = null, tt.target = null
        }
        if (this._animationWriteCount = Ot, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const qt = St.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = qt
        }
        this.deltaTime = void 0 !== tt ? tt : this.useConstantAnimationDeltaTime ? 16 : (qt - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = qt;
        const mt = this._activeAnimatables;
        if (0 === mt.length) return;
        this._animationTime += this.deltaTime;
        const dt = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Dt = 0; Dt < mt.length; Dt++) {
          const tt = mt[Dt];
          !tt._animate(dt) && tt.disposeOnEnd && Dt--
        }! function(tt) {
          if (tt._registeredForLateAnimationBindings.length) {
            for (let et = 0; et < tt._registeredForLateAnimationBindings.length; et++) {
              const Vt = tt._registeredForLateAnimationBindings.data[et];
              for (const tt in Vt._lateAnimationHolders) {
                const et = Vt._lateAnimationHolders[tt],
                  Ot = et.animations[0],
                  qt = et.originalValue;
                if (void 0 === qt || null === qt) continue;
                const mt = vt.d.AllowMatrixDecomposeForInterpolation && qt.m;
                let dt = Vt[tt];
                if (mt) dt = Rt(et);
                else if (void 0 !== qt.w) dt = It(et, dt || Dt.e.Identity());
                else {
                  let tt = 0,
                    Vt = 1;
                  const Dt = Ot && Ot._animationState.Vq === vt.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (et.totalWeight < 1) dt = Dt ? qt.clone ? qt.clone() : qt : Ot && qt.scale ? qt.scale(1 - et.totalWeight) : Ot ? qt * (1 - et.totalWeight) : qt.clone ? qt.clone() : qt;
                  else if (Ot) {
                    Vt = et.totalWeight;
                    const mt = Ot.weight / Vt;
                    dt = 1 !== mt ? Ot.currentValue.scale ? Ot.currentValue.scale(mt) : Ot.currentValue * mt : (et.animations.length > 1 || et.additiveAnimations.length > 0) && Ot.currentValue.clone ? Ot.currentValue.clone() : Ot.currentValue, Dt && (dt.addToRef ? dt.addToRef(qt, dt) : dt += qt), tt = 1
                  }
                  for (let Ot = tt; Ot < et.animations.length; Ot++) {
                    const tt = et.animations[Ot],
                      qt = tt.weight / Vt;
                    qt && (tt.currentValue.scaleAndAddToRef ? tt.currentValue.scaleAndAddToRef(qt, dt) : dt += tt.currentValue * qt)
                  }
                  for (let Ot = 0; Ot < et.additiveAnimations.length; Ot++) {
                    const tt = et.additiveAnimations[Ot],
                      Vt = tt.weight;
                    Vt && (tt.currentValue.scaleAndAddToRef ? tt.currentValue.scaleAndAddToRef(Vt, dt) : dt += tt.currentValue * Vt)
                  }
                }
                Vt[tt] = dt
              }
              Vt._lateAnimationHolders = {}
            }
            tt._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, tt.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((tt, et) => tt.playOrder - et.playOrder))
      }, tt.prototype.beginWeightedAnimation = function(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          mt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 ? arguments[7] : void 0,
          jt = arguments.length > 8 ? arguments[8] : void 0,
          Ht = arguments.length > 9 ? arguments[9] : void 0,
          Xt = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Qt = this.beginAnimation(tt, et, Vt, qt, Dt, mt, dt, !1, jt, Ht, Xt);
        return Qt.weight = Ot, Qt
      }, tt.prototype.beginAnimation = function(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Dt = arguments.length > 5 ? arguments[5] : void 0,
          mt = arguments.length > 6 ? arguments[6] : void 0,
          dt = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          jt = arguments.length > 8 ? arguments[8] : void 0,
          Ht = arguments.length > 9 ? arguments[9] : void 0,
          Xt = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (qt < 0) {
          const tt = et;
          et = Vt, Vt = tt, qt = -qt
        }
        et > Vt && (qt = -qt), dt && this.stopAnimation(tt, void 0, jt), mt || (mt = new ct(this, tt, et, Vt, Ot, qt, Dt, void 0, Ht, Xt));
        const Qt = !jt || jt(tt);
        if (tt.animations && Qt && mt.appendAnimations(tt, tt.animations), tt.getAnimatables) {
          const Xt = tt.getAnimatables();
          for (let tt = 0; tt < Xt.length; tt++) this.beginAnimation(Xt[tt], et, Vt, Ot, qt, Dt, mt, dt, jt, Ht)
        }
        return mt.reset(), mt
      }, tt.prototype.beginHierarchyAnimation = function(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          mt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 ? arguments[7] : void 0,
          jt = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Ht = arguments.length > 9 ? arguments[9] : void 0,
          Xt = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Qt = tt.getDescendants(et),
          lt = [];
        lt.push(this.beginAnimation(tt, Vt, Ot, qt, Dt, mt, dt, jt, Ht, void 0, Xt));
        for (const Et of Qt) lt.push(this.beginAnimation(Et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, void 0, Xt));
        return lt
      }, tt.prototype.beginDirectAnimation = function(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Dt < 0) {
          const tt = Vt;
          Vt = Ot, Ot = tt, Dt = -Dt
        }
        Vt > Ot && (Dt = -Dt);
        return new ct(this, tt, Vt, Ot, qt, Dt, arguments.length > 6 ? arguments[6] : void 0, et, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, tt.prototype.beginDirectHierarchyAnimation = function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        let Ht = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Xt = tt.getDescendants(et),
          Qt = [];
        Qt.push(this.beginDirectAnimation(tt, Vt, Ot, qt, Dt, mt, dt, jt, Ht));
        for (const lt of Xt) Qt.push(this.beginDirectAnimation(lt, Vt, Ot, qt, Dt, mt, dt, jt, Ht));
        return Qt
      }, tt.prototype.getAnimatableByTarget = function(tt) {
        for (let et = 0; et < this._activeAnimatables.length; et++)
          if (this._activeAnimatables[et].target === tt) return this._activeAnimatables[et];
        return null
      }, tt.prototype.getAllAnimatablesByTarget = function(tt) {
        const et = [];
        for (let Vt = 0; Vt < this._activeAnimatables.length; Vt++) this._activeAnimatables[Vt].target === tt && et.push(this._activeAnimatables[Vt]);
        return et
      }, tt.prototype.stopAnimation = function(tt, et, Vt) {
        const Ot = this.getAllAnimatablesByTarget(tt);
        for (const qt of Ot) qt.stop(et, Vt)
      }, tt.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let tt = 0; tt < this._activeAnimatables.length; tt++) this._activeAnimatables[tt].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const tt of this.animationGroups) tt.stop()
      })
    }
    ct.ProcessPausedAnimatables = !1;
    var Zt, Lt = Vt(37350),
      Ft = Vt(40415),
      kt = Vt(40080);
    class Gt extends Ft.d {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(tt) {
        (tt.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.rK(tt), this._markAsDirtyAndDecompose())
      }
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(tt, et.vI(), !1), this.name = tt, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = et, this._localMatrix = Ot?.clone() ?? Dt.c.Identity(), this._restMatrix = qt ?? this._localMatrix.clone(), this._bindMatrix = mt ?? this._localMatrix.clone(), this._index = dt, this._absoluteMatrix = new Dt.c, this._absoluteBindMatrix = new Dt.c, this._absoluteInverseBindMatrix = new Dt.c, this._finalMatrix = new Dt.c, et.bones.push(this), this.setParent(Vt, !1), this._updateAbsoluteBindMatrices()
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
      set parent(tt) {
        this.setParent(tt)
      }
      setParent(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== tt) {
          if (this.parent) {
            const tt = this.parent.children.indexOf(this); - 1 !== tt && this.parent.children.splice(tt, 1)
          }
          this._parentNode = tt, this.parent && this.parent.children.push(this), et && this._updateAbsoluteBindMatrices(), this.fVt()
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
      setRestMatrix(tt) {
        this._restMatrix.rK(tt)
      }
      setRestPose(tt) {
        this.setRestMatrix(tt)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(tt) {
        this.x_(tt)
      }
      setBindPose(tt) {
        this.setBindMatrix(tt)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const tt = Dt.k.uf[0],
            et = Dt.k.Quaternion[0],
            Vt = Dt.k.uf[1];
          this.getRestMatrix().decompose(tt, et, Vt), this._linkedTransformNode.position.rK(Vt), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Dt.e.Identity(), this._linkedTransformNode.rotationQuaternion.rK(et), this._linkedTransformNode.cj.rK(tt)
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
      linkTransformNode(tt) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = tt, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.Qet
      }
      set position(tt) {
        this._decompose(), this.Qet.rK(tt), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(tt) {
        this.setRotation(tt)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(tt) {
        this.setRotationQuaternion(tt)
      }
      get cj() {
        return this.getScale()
      }
      set cj(tt) {
        this.setScale(tt)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Dt.n.Zero(), this._localRotation = Dt.e.Zero(), this.Qet = Dt.n.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Qet))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Dt.c.ComposeToRef(this._localScaling, this._localRotation, this.Qet, this._localMatrix)) : this._needToCompose = !1)
      }
      x_(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.rK(tt), et && this._updateAbsoluteBindMatrices(), Vt ? this._matrix = tt : this.fVt()
      }
      _updateAbsoluteBindMatrices(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (tt || (tt = this._bindMatrix), this.parent ? tt.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.rK(tt), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), et)
          for (let Vt = 0; Vt < this.children.length; Vt++) this.children[Vt]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      fVt() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.fVt(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.fVt(), this._needToDecompose = !0
      }
      _updatePosition(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qt = this.getLocalMatrix();
        if (0 == et) Ot ? (qt.addAtIndex(12, tt.x), qt.addAtIndex(13, tt.y), qt.addAtIndex(14, tt.z)) : qt.setTranslationFromFloats(tt.x, tt.y, tt.z);
        else {
          const et = Gt._TmpMats[0],
            mt = Gt._TmpVecs[0];
          this.parent ? (et.rK(this.parent.getAbsoluteMatrix()), Vt && et.multiplyToRef(Vt.getWorldMatrix(), et)) : Dt.c.IdentityToRef(et), Ot && et.setTranslationFromFloats(0, 0, 0), et.invert(), Dt.n.TransformCoordinatesToRef(tt, et, mt), Ot ? (qt.addAtIndex(12, mt.x), qt.addAtIndex(13, mt.y), qt.addAtIndex(14, mt.z)) : qt.setTranslationFromFloats(mt.x, mt.y, mt.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(tt, et, Vt, !0)
      }
      setPosition(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(tt, et, Vt, !1)
      }
      setAbsolutePosition(tt, et) {
        this.setPosition(tt, 1, et)
      }
      scale(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qt = this.getLocalMatrix(),
          mt = Gt._TmpMats[0];
        Dt.c.ScalingToRef(tt, et, Vt, mt), mt.multiplyToRef(qt, qt), mt.invert();
        for (const Dt of this.children) {
          const Ot = Dt.getLocalMatrix();
          Ot.multiplyToRef(mt, Ot), Ot.multiplyAtIndex(12, tt), Ot.multiplyAtIndex(13, et), Ot.multiplyAtIndex(14, Vt), Dt._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Ot)
          for (const Dt of this.children) Dt.scale(tt, et, Vt, Ot)
      }
      setScale(tt) {
        this._decompose(), this._localScaling.rK(tt), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(tt) {
        this._decompose(), tt.rK(this._localScaling)
      }
      setYawPitchRoll(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qt = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Ot) {
          const mt = Gt._TmpQuat;
          return Dt.e.RotationYawPitchRollToRef(tt, et, Vt, mt), void this.setRotationQuaternion(mt, Ot, qt)
        }
        const mt = Gt._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(mt, qt)) return;
        const dt = Gt._TmpMats[1];
        Dt.c.RotationYawPitchRollToRef(tt, et, Vt, dt), mt.multiplyToRef(dt, dt), this._rotateWithMatrix(dt, Ot, qt)
      }
      rotate(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        const qt = Gt._TmpMats[0];
        qt.setTranslationFromFloats(0, 0, 0), Dt.c.RotationAxisToRef(tt, et, qt), this._rotateWithMatrix(qt, Vt, Ot)
      }
      setAxisAngle(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === Vt) {
          const qt = Gt._TmpQuat;
          return Dt.e.RotationAxisToRef(tt, et, qt), void this.setRotationQuaternion(qt, Vt, Ot)
        }
        const qt = Gt._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(qt, Ot)) return;
        const mt = Gt._TmpMats[1];
        Dt.c.RotationAxisToRef(tt, et, mt), qt.multiplyToRef(mt, mt), this._rotateWithMatrix(mt, Vt, Ot)
      }
      setRotation(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(tt.y, tt.x, tt.z, et, Vt)
      }
      setRotationQuaternion(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === et) return this._decompose(), this._localRotation.rK(tt), void this._markAsDirtyAndCompose();
        const Ot = Gt._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ot, Vt)) return;
        const qt = Gt._TmpMats[1];
        Dt.c.FromQuaternionToRef(tt, qt), Ot.multiplyToRef(qt, qt), this._rotateWithMatrix(qt, et, Vt)
      }
      setRotationMatrix(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === et) {
          const Ot = Gt._TmpQuat;
          return Dt.e.FromRotationMatrixToRef(tt, Ot), void this.setRotationQuaternion(Ot, et, Vt)
        }
        const Ot = Gt._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ot, Vt)) return;
        const qt = Gt._TmpMats[1];
        qt.rK(tt), Ot.multiplyToRef(tt, qt), this._rotateWithMatrix(qt, et, Vt)
      }
      _rotateWithMatrix(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = this.getLocalMatrix(),
          qt = Ot.m[12],
          Dt = Ot.m[13],
          mt = Ot.m[14],
          dt = this.getParent(),
          jt = Gt._TmpMats[3],
          Ht = Gt._TmpMats[4];
        dt && 1 == et ? (Vt ? (jt.rK(Vt.getWorldMatrix()), dt.getAbsoluteMatrix().multiplyToRef(jt, jt)) : jt.rK(dt.getAbsoluteMatrix()), Ht.rK(jt), Ht.invert(), Ot.multiplyToRef(jt, Ot), Ot.multiplyToRef(tt, Ot), Ot.multiplyToRef(Ht, Ot)) : 1 == et && Vt ? (jt.rK(Vt.getWorldMatrix()), Ht.rK(jt), Ht.invert(), Ot.multiplyToRef(jt, Ot), Ot.multiplyToRef(tt, Ot), Ot.multiplyToRef(Ht, Ot)) : Ot.multiplyToRef(tt, Ot), Ot.setTranslationFromFloats(qt, Dt, mt), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(tt, et) {
        const Vt = Gt._TmpMats[2];
        return tt.rK(this.getAbsoluteMatrix()), et ? (tt.multiplyToRef(et.getWorldMatrix(), tt), Dt.c.ScalingToRef(et.cj.x, et.cj.y, et.cj.z, Vt)) : Dt.c.IdentityToRef(Vt), tt.invert(), !isNaN(tt.m[0]) && (Vt.multiplyAtIndex(0, this._scalingDeterminant), tt.multiplyToRef(Vt, tt), !0)
      }
      YM() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Vt = Dt.n.Zero();
        return this.getPositionToRef(tt, et, Vt), Vt
      }
      getPositionToRef() {
        let tt = arguments.length > 1 ? arguments[1] : void 0,
          et = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const tt = this.getLocalMatrix();
          et.x = tt.m[12], et.y = tt.m[13], et.z = tt.m[14]
        } else {
          const Vt = Gt._TmpMats[0].rK(this.getAbsoluteMatrix());
          tt && Vt.multiplyToRef(tt.getWorldMatrix(), Vt), et.x = Vt.m[12], et.y = Vt.m[13], et.z = Vt.m[14]
        }
      }
      getAbsolutePosition() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const et = Dt.n.Zero();
        return this.getPositionToRef(1, tt, et), et
      }
      getAbsolutePositionToRef(tt, et) {
        this.getPositionToRef(1, tt, et)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.rK(this._localMatrix);
          const tt = this._skeleton.getPoseMatrix();
          tt && this._absoluteMatrix.multiplyToRef(tt, this._absoluteMatrix)
        }
        const tt = this.children,
          et = tt.length;
        for (let Vt = 0; Vt < et; Vt++) tt[Vt].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      zp(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Vt = Dt.n.Zero();
        return this.getDirectionToRef(tt, et, Vt), Vt
      }
      getDirectionToRef(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = Gt._TmpMats[0].rK(this.getAbsoluteMatrix());
        et && Ot.multiplyToRef(et.getWorldMatrix(), Ot), Dt.n.TransformNormalToRef(tt, Ot, Vt), Vt.normalize()
      }
      getRotation() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Vt = Dt.n.Zero();
        return this.getRotationToRef(tt, et, Vt), Vt
      }
      getRotationToRef() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = Gt._TmpQuat;
        this.getRotationQuaternionToRef(tt, et, Ot), Ot.toEulerAnglesToRef(Vt)
      }
      getRotationQuaternion() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Vt = Dt.e.Identity();
        return this.getRotationQuaternionToRef(tt, et, Vt), Vt
      }
      getRotationQuaternionToRef() {
        let tt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          et = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), et.rK(this._localRotation);
        else {
          const Vt = Gt._TmpMats[0],
            Ot = this.getAbsoluteMatrix();
          tt ? Ot.multiplyToRef(tt.getWorldMatrix(), Vt) : Vt.rK(Ot), Vt.multiplyAtIndex(0, this._scalingDeterminant), Vt.multiplyAtIndex(1, this._scalingDeterminant), Vt.multiplyAtIndex(2, this._scalingDeterminant), Vt.decompose(void 0, et, void 0)
        }
      }
      getRotationMatrix() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 ? arguments[1] : void 0;
        const Vt = Dt.c.Identity();
        return this.getRotationMatrixToRef(tt, et, Vt), Vt
      }
      getRotationMatrixToRef() {
        let tt = arguments.length > 1 ? arguments[1] : void 0,
          et = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(et);
        else {
          const Vt = Gt._TmpMats[0],
            Ot = this.getAbsoluteMatrix();
          tt ? Ot.multiplyToRef(tt.getWorldMatrix(), Vt) : Vt.rK(Ot), Vt.multiplyAtIndex(0, this._scalingDeterminant), Vt.multiplyAtIndex(1, this._scalingDeterminant), Vt.multiplyAtIndex(2, this._scalingDeterminant), Vt.getRotationMatrixToRef(et)
        }
      }
      getAbsolutePositionFromLocal(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Vt = Dt.n.Zero();
        return this.getAbsolutePositionFromLocalToRef(tt, et, Vt), Vt
      }
      getAbsolutePositionFromLocalToRef(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = Gt._TmpMats[0].rK(this.getAbsoluteMatrix());
        et && Ot.multiplyToRef(et.getWorldMatrix(), Ot), Dt.n.TransformCoordinatesToRef(tt, Ot, Vt)
      }
      getLocalPositionFromAbsolute(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Vt = Dt.n.Zero();
        return this.getLocalPositionFromAbsoluteToRef(tt, et, Vt), Vt
      }
      getLocalPositionFromAbsoluteToRef(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = Gt._TmpMats[0].rK(this.getAbsoluteMatrix());
        et && Ot.multiplyToRef(et.getWorldMatrix(), Ot), Ot.invert(), Dt.n.TransformCoordinatesToRef(tt, Ot, Vt)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const tt = this._skeleton.bones.indexOf(this);
        if (-1 !== tt && this._skeleton.bones.splice(tt, 1), this._parentNode && this._parentNode.children) {
          const tt = this._parentNode.children,
            et = tt.indexOf(this); - 1 !== et && tt.splice(et, 1)
        }
        super.dispose()
      }
    }
    Gt._TmpVecs = (0, Lt.c)(2, Dt.n.Zero), Gt._TmpQuat = Dt.e.Identity(), Gt._TmpMats = (0, Lt.c)(5, Dt.c.Identity), (Zt = Gt.prototype).copyAnimationRange ?? (Zt.copyAnimationRange = (0, kt.d)("Bone", "copyAnimationRange"));
    var zt = Vt(40296);
    let ot = !1;
    var rt = Vt(40168),
      Ut = Vt(40512),
      At = Vt(40520),
      it = Vt(40514),
      Yt = Vt(40329);

    function Bt(tt, et) {
      const Vt = (0, Et.RandomRange)(0, 1);
      Xt.c.LerpToRef(et.color1, et.color2, Vt, tt.color)
    }

    function pt(tt, et) {
      et.colorDead.subtractToRef(tt.color, et._colorDiff), et._colorDiff.scaleToRef(1 / tt.lifeTime, tt.colorStep)
    }

    function xt(tt, et) {
      tt._properties.currentColorGradient = et._colorGradients[0], tt._properties.currentColorGradient.getColorToRef(tt.color), tt._properties.currentColor1.rK(tt.color), et._colorGradients.length > 1 ? et._colorGradients[1].getColorToRef(tt._properties.currentColor2) : tt._properties.currentColor2.rK(tt.color)
    }

    function Tt(tt, et) {
      const Vt = et._colorGradients;
      Ot.i.GetCurrentGradient(et._ratio, Vt, ((et, Vt, Ot) => {
        et !== tt._properties.currentColorGradient && (tt._properties.currentColor1.rK(tt._properties.currentColor2), Vt.getColorToRef(tt._properties.currentColor2), tt._properties.currentColorGradient = et), Xt.c.LerpToRef(tt._properties.currentColor1, tt._properties.currentColor2, Ot, tt.color), tt.color.a < 0 && (tt.color.a = 0)
      }))
    }

    function gt(tt, et) {
      tt.colorStep.scaleToRef(et._scaledUpdateSpeed, et._scaledColorStep), tt.color.addInPlace(et._scaledColorStep), tt.color.a < 0 && (tt.color.a = 0)
    }

    function st(tt, et) {
      Ot.i.GetCurrentGradient(et._ratio, et._angularSpeedGradients, ((et, Vt, Ot) => {
        et !== tt._properties.currentAngularSpeedGradient && (tt._properties.currentAngularSpeed1 = tt._properties.currentAngularSpeed2, tt._properties.currentAngularSpeed2 = Vt.getFactor(), tt._properties.currentAngularSpeedGradient = et), tt.angularSpeed = (0, Et.Lerp)(tt._properties.currentAngularSpeed1, tt._properties.currentAngularSpeed2, Ot)
      }))
    }

    function nt(tt, et) {
      tt.angle += tt.angularSpeed * et._scaledUpdateSpeed
    }

    function te(tt, et) {
      et.particleEmitterType.startDirectionFunction(et._emitterWorldMatrix, tt.direction, tt, et.isLocal, et._emitterInverseWorldMatrix)
    }

    function ee(tt, et) {
      et.startDirectionFunction(et._emitterWorldMatrix, tt.direction, tt, et.isLocal)
    }

    function Ve(tt, et) {
      tt._properties.currentVelocityGradient = et._velocityGradients[0], tt._properties.currentVelocity1 = tt._properties.currentVelocityGradient.getFactor(), et._velocityGradients.length > 1 ? tt._properties.currentVelocity2 = et._velocityGradients[1].getFactor() : tt._properties.currentVelocity2 = tt._properties.currentVelocity1
    }

    function Oe(tt, et) {
      tt._properties.currentLimitVelocityGradient = et._limitVelocityGradients[0], tt._properties.currentLimitVelocity1 = tt._properties.currentLimitVelocityGradient.getFactor(), et._limitVelocityGradients.length > 1 ? tt._properties.currentLimitVelocity2 = et._limitVelocityGradients[1].getFactor() : tt._properties.currentLimitVelocity2 = tt._properties.currentLimitVelocity1
    }

    function qe(tt, et) {
      Ot.i.GetCurrentGradient(et._ratio, et._velocityGradients, ((et, Vt, Ot) => {
        et !== tt._properties.currentVelocityGradient && (tt._properties.currentVelocity1 = tt._properties.currentVelocity2, tt._properties.currentVelocity2 = Vt.getFactor(), tt._properties.currentVelocityGradient = et), tt._properties.directionScale *= (0, Et.Lerp)(tt._properties.currentVelocity1, tt._properties.currentVelocity2, Ot)
      }))
    }

    function De(tt, et) {
      Ot.i.GetCurrentGradient(et._ratio, et._limitVelocityGradients, ((Vt, Ot, qt) => {
        Vt !== tt._properties.currentLimitVelocityGradient && (tt._properties.currentLimitVelocity1 = tt._properties.currentLimitVelocity2, tt._properties.currentLimitVelocity2 = Ot.getFactor(), tt._properties.currentLimitVelocityGradient = Vt);
        const Dt = (0, Et.Lerp)(tt._properties.currentLimitVelocity1, tt._properties.currentLimitVelocity2, qt);
        tt.direction.length() > Dt && tt.direction.scaleInPlace(et.limitVelocityDamping)
      }))
    }

    function me(tt) {
      tt.direction.scaleToRef(tt._properties.directionScale, tt._properties.scaledDirection)
    }

    function de(tt, et) {
      et.particleEmitterType.startPositionFunction(et._emitterWorldMatrix, tt.position, tt, et.isLocal)
    }

    function je(tt, et) {
      et.startPositionFunction(et._emitterWorldMatrix, tt.position, tt, et.isLocal)
    }

    function He(tt, et) {
      tt._properties.localPosition ? tt._properties.localPosition.rK(tt.position) : tt._properties.localPosition = tt.position.clone(), Dt.n.TransformCoordinatesToRef(tt._properties.localPosition, et._emitterWorldMatrix, tt.position)
    }

    function Xe(tt, et) {
      et.isLocal && tt._properties.localPosition ? (tt._properties.localPosition.addInPlace(tt._properties.scaledDirection), Dt.n.TransformCoordinatesToRef(tt._properties.localPosition, et._emitterWorldMatrix, tt.position)) : tt.position.addInPlace(tt._properties.scaledDirection)
    }

    function Qe(tt, et) {
      tt._properties.currentDragGradient = et._dragGradients[0], tt._properties.currentDrag1 = tt._properties.currentDragGradient.getFactor(), et._dragGradients.length > 1 ? tt._properties.currentDrag2 = et._dragGradients[1].getFactor() : tt._properties.currentDrag2 = tt._properties.currentDrag1
    }

    function le(tt, et) {
      Ot.i.GetCurrentGradient(et._ratio, et._dragGradients, ((et, Vt, Ot) => {
        et !== tt._properties.currentDragGradient && (tt._properties.currentDrag1 = tt._properties.currentDrag2, tt._properties.currentDrag2 = Vt.getFactor(), tt._properties.currentDragGradient = et);
        const qt = (0, Et.Lerp)(tt._properties.currentDrag1, tt._properties.currentDrag2, Ot);
        tt._properties.scaledDirection.scaleInPlace(1 - qt)
      }))
    }

    function Ee(tt, et) {
      tt._properties.randomNoiseCoordinates1 && tt._properties.randomNoiseCoordinates2 ? (tt._properties.randomNoiseCoordinates1.W9(Math.random(), Math.random(), Math.random()), tt._properties.randomNoiseCoordinates2.W9(Math.random(), Math.random(), Math.random())) : (tt._properties.randomNoiseCoordinates1 = new Dt.n(Math.random(), Math.random(), Math.random()), tt._properties.randomNoiseCoordinates2 = new Dt.n(Math.random(), Math.random(), Math.random()))
    }

    function fe(tt, et) {
      const Vt = et._noiseTextureData,
        Ot = et._noiseTextureSize;
      if (Vt && Ot && tt._properties.randomNoiseCoordinates1 && tt._properties.randomNoiseCoordinates2) {
        const qt = et._fetchR(tt._properties.randomNoiseCoordinates1.x, tt._properties.randomNoiseCoordinates1.y, Ot.width, Ot.height, Vt),
          mt = et._fetchR(tt._properties.randomNoiseCoordinates1.z, tt._properties.randomNoiseCoordinates2.x, Ot.width, Ot.height, Vt),
          dt = et._fetchR(tt._properties.randomNoiseCoordinates2.y, tt._properties.randomNoiseCoordinates2.z, Ot.width, Ot.height, Vt),
          jt = Dt.k.uf[0],
          Ht = Dt.k.uf[1];
        jt.W9((2 * qt - 1) * et.noiseStrength.x, (2 * mt - 1) * et.noiseStrength.y, (2 * dt - 1) * et.noiseStrength.z), jt.scaleToRef(et._tempScaledUpdateSpeed, Ht), tt.direction.addInPlace(Ht)
      }
    }

    function we(tt, et) {
      et.gravity.scaleToRef(et._tempScaledUpdateSpeed, et._scaledGravity), tt.direction.addInPlace(et._scaledGravity)
    }

    function ye(tt, et) {
      tt.size = (0, Et.RandomRange)(et.minSize, et.maxSize), tt.scale.W9((0, Et.RandomRange)(et.minScaleX, et.maxScaleX), (0, Et.RandomRange)(et.minScaleY, et.maxScaleY))
    }

    function Ne(tt, et) {
      tt._properties.currentSizeGradient = et._sizeGradients[0], tt._properties.currentSize1 = tt._properties.currentSizeGradient.getFactor(), tt.size = tt._properties.currentSize1, et._sizeGradients.length > 1 ? tt._properties.currentSize2 = et._sizeGradients[1].getFactor() : tt._properties.currentSize2 = tt._properties.currentSize1, tt.scale.W9((0, Et.RandomRange)(et.minScaleX, et.maxScaleX), (0, Et.RandomRange)(et.minScaleY, et.maxScaleY))
    }

    function ae(tt, et) {
      const Vt = et._actualFrame / et.targetStopDuration;
      Ot.i.GetCurrentGradient(Vt, et._startSizeGradients, ((Vt, Ot, qt) => {
        Vt !== et._currentStartSizeGradient && (et._currentStartSize1 = et._currentStartSize2, et._currentStartSize2 = Ot.getFactor(), et._currentStartSizeGradient = Vt);
        const Dt = (0, Et.Lerp)(et._currentStartSize1, et._currentStartSize2, qt);
        tt.scale.scaleInPlace(Dt)
      }))
    }

    function Me(tt, et) {
      Ot.i.GetCurrentGradient(et._ratio, et._sizeGradients, ((et, Vt, Ot) => {
        et !== tt._properties.currentSizeGradient && (tt._properties.currentSize1 = tt._properties.currentSize2, tt._properties.currentSize2 = Vt.getFactor(), tt._properties.currentSizeGradient = et), tt.size = (0, Et.Lerp)(tt._properties.currentSize1, tt._properties.currentSize2, Ot)
      }))
    }

    function be(tt, et) {
      tt.remapData = new Dt.r(0, 1, 0, 1)
    }

    function Je(tt, et) {
      et._colorRemapGradients && et._colorRemapGradients.length > 0 && Ot.i.GetCurrentGradient(et._ratio, et._colorRemapGradients, ((et, Vt, Ot) => {
        const qt = (0, Et.Lerp)(et.factor1, Vt.factor1, Ot),
          Dt = (0, Et.Lerp)(et.factor2, Vt.factor2, Ot);
        tt.remapData.x = qt, tt.remapData.y = Dt - qt
      })), et._alphaRemapGradients && et._alphaRemapGradients.length > 0 && Ot.i.GetCurrentGradient(et._ratio, et._alphaRemapGradients, ((et, Vt, Ot) => {
        const qt = (0, Et.Lerp)(et.factor1, Vt.factor1, Ot),
          Dt = (0, Et.Lerp)(et.factor2, Vt.factor2, Ot);
        tt.remapData.z = qt, tt.remapData.w = Dt - qt
      }))
    }

    function Ce(tt, et) {
      const Vt = (0, Et.Clamp)(et._actualFrame / et.targetStopDuration);
      Ot.i.GetCurrentGradient(Vt, et._lifeTimeGradients, ((et, Ot) => {
        const qt = et,
          Dt = Ot,
          mt = qt.getFactor(),
          dt = Dt.getFactor(),
          jt = (Vt - qt.gradient) / (Dt.gradient - qt.gradient);
        tt.lifeTime = (0, Et.Lerp)(mt, dt, jt)
      })), et._emitPower = (0, Et.RandomRange)(et.minEmitPower, et.maxEmitPower)
    }

    function ue(tt, et) {
      tt.lifeTime = (0, Et.RandomRange)(et.minLifeTime, et.maxLifeTime), et._emitPower = (0, Et.RandomRange)(et.minEmitPower, et.maxEmitPower)
    }

    function Ke(tt, et) {
      0 === et._emitPower ? (tt._properties.initialDirection ? tt._properties.initialDirection.rK(tt.direction) : tt._properties.initialDirection = tt.direction.clone(), tt.direction.set(0, 0, 0)) : (tt._properties.initialDirection = null, tt.direction.scaleInPlace(et._emitPower)), tt.direction.addInPlace(et._inheritedVelocityOffset)
    }

    function he(tt, et) {
      tt.angularSpeed = (0, Et.RandomRange)(et.minAngularSpeed, et.maxAngularSpeed), tt.angle = (0, Et.RandomRange)(et.minInitialRotation, et.maxInitialRotation)
    }

    function ve(tt, et) {
      tt._properties.currentAngularSpeedGradient = et._angularSpeedGradients[0], tt.angularSpeed = tt._properties.currentAngularSpeedGradient.getFactor(), tt._properties.currentAngularSpeed1 = tt.angularSpeed, et._angularSpeedGradients.length > 1 ? tt._properties.currentAngularSpeed2 = et._angularSpeedGradients[1].getFactor() : tt._properties.currentAngularSpeed2 = tt._properties.currentAngularSpeed1, tt.angle = (0, Et.RandomRange)(et.minInitialRotation, et.maxInitialRotation)
    }

    function We(tt, et) {
      tt._properties.initialStartSpriteCellId = et.startSpriteCellID, tt._properties.initialEndSpriteCellId = et.endSpriteCellID, tt._properties.initialSpriteCellLoop = et.spriteCellLoop
    }

    function Se(tt, et) {
      tt.previousItem = et.previousItem, tt.nextItem = et, et.previousItem && (et.previousItem.nextItem = tt), et.previousItem = tt
    }

    function ce(tt, et) {
      tt.previousItem = et, tt.nextItem = et.nextItem, et.nextItem && (et.nextItem.previousItem = tt), et.nextItem = tt
    }

    function Re(tt) {
      tt.previousItem && (tt.previousItem.nextItem = tt.nextItem), tt.nextItem && (tt.nextItem.previousItem = tt.previousItem)
    }
    var Ie = Vt(40575);
    class Pe extends ut {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(tt) {
        this._startDirectionFunction !== tt && (this._startDirectionFunction = tt, this._directionCreation.process = tt ? ee : te)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(tt) {
        this._startPositionFunction !== tt && (this._startPositionFunction = tt, this._positionCreation.process = tt ? je : de)
      }
      set onDispose(tt) {
        this._onDisposeObserver && this.ZI.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZI.add(tt)
      }
      get bC() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(tt) {
        this._useRampGradients !== tt && (this._useRampGradients = tt, this._resetEffect(), tt ? (this._rampCreation = {
          process: be,
          previousItem: null,
          nextItem: null
        }, ce(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Je,
          previousItem: null,
          nextItem: null
        }, ce(this._remapGradientProcessing, this._gravityProcessing))) : (Re(this._rampCreation), Re(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(tt) {
        this._isLocal !== tt && (this._isLocal = tt, tt ? (this._isLocalCreation = {
          process: He,
          previousItem: null,
          nextItem: null
        }, ce(this._isLocalCreation, this._positionCreation)) : Re(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(tt) {
        this._animationSheetEnabled !== tt && (this._animationSheetEnabled = tt, tt ? (this._sheetCreation = {
          process: We,
          previousItem: null,
          nextItem: null
        }, ce(this._sheetCreation, this._colorDeadCreation)) : Re(this._sheetCreation), this._reset())
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
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[tt]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[tt] ?? this._customWrappers[0]
      }
      setCustomEffect(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[et] = new Ut.c(this._engine), this._customWrappers[et].effect = tt, this._customWrappers[et].drawContext && (this._customWrappers[et].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new qt.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(tt) {
        if (this.noiseTexture !== tt) {
          if (this._noiseTexture = tt, !tt) return Re(this._noiseCreation), void Re(this._noiseProcessing);
          this._noiseCreation = {
            process: Ee,
            previousItem: null,
            nextItem: null
          }, ce(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: fe,
            previousItem: null,
            nextItem: null
          }, ce(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          mt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Ht = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        ot || (ot = !0, Pt(zt.d, Gt)), (0, rt.c)(), super(tt), this._emitterInverseWorldMatrix = Dt.c.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Dt.n, this.ZI = new qt.c, this.onStoppedObservable = new qt.c, this.onStartedObservable = new qt.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Xt.c(0, 0, 0, 0), this._colorDiff = new Xt.c(0, 0, 0, 0), this._scaledGravity = Dt.n.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = tt => {}, this.recycleParticle = tt => {
          const et = this._particles.pop();
          et !== tt && et.copyTo(tt), et.metadata = null, this._stockParticles.push(et)
        }, this._createParticle = () => {
          let tt;
          return 0 !== this._stockParticles.length ? (tt = this._stockParticles.pop(), tt._reset()) : tt = new ht(this), this._prepareParticle(tt), tt
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = et, this._epsilon = dt, Vt && "Scene" !== Vt.getClassName() ? (this._engine = Vt, this.defaultProjectionMatrix = Dt.c.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = Vt || jt.d.LastCreatedScene, this._engine = this._scene.Jf(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.PJ.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: ue,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: de,
          previousItem: null,
          nextItem: null
        }, ce(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: te,
          previousItem: null,
          nextItem: null
        }, ce(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Ke,
          previousItem: null,
          nextItem: null
        }, ce(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: ye,
          previousItem: null,
          nextItem: null
        }, ce(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: he,
          previousItem: null,
          nextItem: null
        }, ce(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Bt,
          previousItem: null,
          nextItem: null
        }, ce(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: pt,
          previousItem: null,
          nextItem: null
        }, ce(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Ht || (this._colorProcessing = {
          process: gt,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: nt,
          previousItem: null,
          nextItem: null
        }, ce(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: me,
          previousItem: null,
          nextItem: null
        }, ce(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Xe,
          previousItem: null,
          nextItem: null
        }, ce(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: we,
          previousItem: null,
          nextItem: null
        }, ce(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = mt, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Ut.c(this._engine)
        }, this._customWrappers[0].effect = Ot, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Qt.d, this.updateFunction = tt => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((tt => {
            this._noiseTextureData = tt
          })));
          const et = tt === this._particles;
          for (let Vt = 0; Vt < tt.length; Vt++) {
            const Ot = tt[Vt];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const qt = Ot.age;
            if (Ot.age += this._tempScaledUpdateSpeed, Ot.age > Ot.lifeTime) {
              const tt = Ot.age - qt,
                et = Ot.lifeTime - qt;
              this._tempScaledUpdateSpeed = et * this._tempScaledUpdateSpeed / tt, Ot.age = Ot.lifeTime
            }
            this._ratio = Ot.age / Ot.lifeTime, Ot._properties.directionScale = this._tempScaledUpdateSpeed;
            let Dt = this._updateQueueStart;
            for (; Dt;) Dt.process(Ot, this), Dt = Dt.nextItem;
            if (this._isAnimationSheetEnabled && !Ht && Ot.updateCellIndex(), Ot._inheritParticleInfoToSubEmitters(), Ot.age >= Ot.lifeTime) {
              if (this._emitFromParticle(Ot), Ot._properties.attachedSubEmitters) {
                for (const tt of Ot._properties.attachedSubEmitters) tt.particleSystem.disposeOnStop = !0, tt.particleSystem.stop();
                Ot._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Ot), et && Vt--
            } else;
          }
        }
      }
      serialize(tt) {
        throw new Error("Method not implemented.")
      }
      clone(tt, et) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Ce : this._lifeTimeCreation.process = ue
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: ae,
          previousItem: null,
          nextItem: null
        }, ce(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Re(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(tt) {
        this.targetStopDuration !== tt && (this._targetStopDuration = tt, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(tt, et, Vt) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, tt, et, Vt), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(tt) {
        return this._removeFactorGradient(this._lifeTimeGradients, tt), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(tt, et, Vt) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Ne, this._sizeGradientProcessing = {
          process: Me,
          previousItem: null,
          nextItem: null
        }, Se(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, tt, et, Vt), this
      }
      removeSizeGradient(tt) {
        return this._removeFactorGradient(this._sizeGradients, tt), 0 === this._sizeGradients?.length && (Re(this._sizeGradientProcessing), this._sizeCreation.process = ye), this
      }
      addColorRemapGradient(tt, et, Vt) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, tt, et, Vt), this
      }
      removeColorRemapGradient(tt) {
        return this._removeFactorGradient(this._colorRemapGradients, tt), this
      }
      addAlphaRemapGradient(tt, et, Vt) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, tt, et, Vt), this
      }
      removeAlphaRemapGradient(tt) {
        return this._removeFactorGradient(this._alphaRemapGradients, tt), this
      }
      addAngularSpeedGradient(tt, et, Vt) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = ve, this._angularSpeedGradientProcessing = {
          process: st,
          previousItem: null,
          nextItem: null
        }, Se(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, tt, et, Vt), this
      }
      removeAngularSpeedGradient(tt) {
        return this._removeFactorGradient(this._angularSpeedGradients, tt), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = he, Re(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(tt, et, Vt) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: Ve,
          previousItem: null,
          nextItem: null
        }, ce(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: qe,
          previousItem: null,
          nextItem: null
        }, Se(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, tt, et, Vt), this
      }
      removeVelocityGradient(tt) {
        return this._removeFactorGradient(this._velocityGradients, tt), 0 === this._velocityGradients?.length && (Re(this._velocityCreation), Re(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(tt, et, Vt) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Oe,
          previousItem: null,
          nextItem: null
        }, ce(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: De,
          previousItem: null,
          nextItem: null
        }, ce(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, tt, et, Vt), this
      }
      removeLimitVelocityGradient(tt) {
        return this._removeFactorGradient(this._limitVelocityGradients, tt), 0 === this._limitVelocityGradients?.length && (Re(this._limitVelocityCreation), Re(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(tt, et, Vt) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Qe,
          previousItem: null,
          nextItem: null
        }, Se(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: le,
          previousItem: null,
          nextItem: null
        }, Se(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, tt, et, Vt), this
      }
      removeDragGradient(tt) {
        return this._removeFactorGradient(this._dragGradients, tt), 0 === this._dragGradients?.length && (Re(this._dragCreation), Re(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(tt, et, Vt) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, tt, et, Vt), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(tt) {
        return this._removeFactorGradient(this._startSizeGradients, tt), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const tt = new Uint8Array(4 * this._rawTextureWidth),
          et = Xt.f.Color3[0];
        for (let Vt = 0; Vt < this._rawTextureWidth; Vt++) {
          const qt = Vt / this._rawTextureWidth;
          Ot.i.GetCurrentGradient(qt, this._rampGradients, ((Ot, qt, Dt) => {
            Xt.b.LerpToRef(Ot.color, qt.color, Dt, et), tt[4 * Vt] = 255 * et.r, tt[4 * Vt + 1] = 255 * et.g, tt[4 * Vt + 2] = 255 * et.b, tt[4 * Vt + 3] = 255
          }))
        }
        this._rampGradientsTexture = dt.d.CreateRGBATexture(tt, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((tt, et) => tt.gradient < et.gradient ? -1 : tt.gradient > et.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(tt, et) {
        this._rampGradients || (this._rampGradients = []);
        const Vt = new Ot.f(tt, et);
        return this._rampGradients.push(Vt), this._syncRampGradientTexture(), this
      }
      removeRampGradient(tt) {
        return this._removeGradientAndTexture(tt, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(tt, et, Vt) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = xt, this._colorProcessing.process = Tt);
        const qt = new Ot.b(tt, et, Vt);
        return this._colorGradients.push(qt), this._colorGradients.sort(((tt, et) => tt.gradient < et.gradient ? -1 : tt.gradient > et.gradient ? 1 : 0)), this
      }
      removeColorGradient(tt) {
        if (!this._colorGradients) return this;
        let et = 0;
        for (const Vt of this._colorGradients) {
          if (Vt.gradient === tt) {
            this._colorGradients.splice(et, 1);
            break
          }
          et++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Bt, this._colorProcessing.process = gt), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const tt of this._drawWrappers)
            if (tt)
              for (const et of tt) et?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(tt, et, Vt, Ot, qt) {
        return qt[4 * (((tt = .5 * Math.abs(tt) + .5) * Vt % Vt | 0) + ((et = .5 * Math.abs(et) + .5) * Ot % Ot | 0) * Vt)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const tt = this._engine,
          et = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * et), this._vertexBuffer = new mt.b(tt, this._vertexData, !0, et);
        let Vt = 0;
        const Ot = this._vertexBuffer.createVertexBuffer(mt.m.PositionKind, Vt, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[mt.m.PositionKind] = Ot, Vt += 3;
        const qt = this._vertexBuffer.createVertexBuffer(mt.m.ColorKind, Vt, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[mt.m.ColorKind] = qt, Vt += 4;
        const Dt = this._vertexBuffer.createVertexBuffer("angle", Vt, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Dt, Vt += 1;
        const dt = this._vertexBuffer.createVertexBuffer("size", Vt, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = dt, Vt += 2, this._isAnimationSheetEnabled) {
          const tt = this._vertexBuffer.createVertexBuffer("cellIndex", Vt, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = tt, Vt += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const tt = this._vertexBuffer.createVertexBuffer("direction", Vt, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = tt, Vt += 3
        }
        if (this._useRampGradients) {
          const tt = this._vertexBuffer.createVertexBuffer("remapData", Vt, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = tt, Vt += 4
        }
        let jt;
        if (this._useInstancing) {
          const et = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new mt.b(tt, et, !1, 2), jt = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else jt = this._vertexBuffer.createVertexBuffer("offset", Vt, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = jt, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const tt = [],
          et = [];
        let Vt = 0;
        for (let Ot = 0; Ot < this._capacity; Ot++) tt.push(Vt), tt.push(Vt + 1), tt.push(Vt + 2), tt.push(Vt), tt.push(Vt + 2), tt.push(Vt + 3), et.push(Vt, Vt + 1, Vt + 1, Vt + 2, Vt + 2, Vt + 3, Vt + 3, Vt, Vt, Vt + 3), Vt += 4;
        this._indexBuffer = this._engine.createIndexBuffer(tt), this._linesIndexBuffer = this._engine.createIndexBuffer(et)
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
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (tt) return this.startDelay = tt, void setTimeout((() => {
          this.start(0)
        }), tt);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const tt = this.noiseTexture;
          if (tt && tt.onGeneratedObservable) tt.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let et = 0; et < this.preWarmCycles; et++) this.animate(!0), tt.render()
            }))
          }));
          else
            for (let et = 0; et < this.preWarmCycles; et++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(tt))
      }
      _postStop(tt) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(tt, et, Vt, Ot) {
        let qt = tt * this._vertexBufferSize;
        const mt = Dt.k.uf[0].rK(this._scene?.floatingOriginOffset || Dt.n.ZeroReadOnly);
        if (this._vertexData[qt++] = et.position.x + this.worldOffset.x - mt.x, this._vertexData[qt++] = et.position.y + this.worldOffset.y - mt.y, this._vertexData[qt++] = et.position.z + this.worldOffset.z - mt.z, this._vertexData[qt++] = et.color.r, this._vertexData[qt++] = et.color.g, this._vertexData[qt++] = et.color.b, this._vertexData[qt++] = et.color.a, this._vertexData[qt++] = et.angle, this._vertexData[qt++] = et.scale.x * et.size, this._vertexData[qt++] = et.scale.y * et.size, this._isAnimationSheetEnabled && (this._vertexData[qt++] = et.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[qt++] = et.direction.x, this._vertexData[qt++] = et.direction.y, this._vertexData[qt++] = et.direction.z);
        else if (et._properties.initialDirection) {
          let tt = et._properties.initialDirection;
          this.isLocal && (Dt.n.TransformNormalToRef(tt, this._emitterWorldMatrix, Dt.k.uf[0]), tt = Dt.k.uf[0]), 0 === tt.x && 0 === tt.z && (tt.x = .001), this._vertexData[qt++] = tt.x, this._vertexData[qt++] = tt.y, this._vertexData[qt++] = tt.z
        } else {
          let tt = et.direction;
          this.isLocal && (Dt.n.TransformNormalToRef(tt, this._emitterWorldMatrix, Dt.k.uf[0]), tt = Dt.k.uf[0]), 0 === tt.x && 0 === tt.z && (tt.x = .001), this._vertexData[qt++] = tt.x, this._vertexData[qt++] = tt.y, this._vertexData[qt++] = tt.z
        }
        this._useRampGradients && et.remapData && (this._vertexData[qt++] = et.remapData.x, this._vertexData[qt++] = et.remapData.y, this._vertexData[qt++] = et.remapData.z, this._vertexData[qt++] = et.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === Vt ? Vt = this._epsilon : 1 === Vt && (Vt = 1 - this._epsilon), 0 === Ot ? Ot = this._epsilon : 1 === Ot && (Ot = 1 - this._epsilon)), this._vertexData[qt++] = Vt, this._vertexData[qt] = Ot)
      }
      _prepareParticle(tt) {}
      _createNewOnes(tt) {
        let et;
        for (let Vt = 0; Vt < tt && this._particles.length !== this._capacity; Vt++) {
          et = this._createParticle(), this._particles.push(et);
          let tt = this._createQueueStart;
          for (; tt;) tt.process(et, this), tt = tt.nextItem;
          et._inheritParticleInfoToSubEmitters()
        }
      }
      _update(tt) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const tt = this.emitter;
          this._emitterWorldMatrix = tt.getWorldMatrix()
        } else {
          const tt = this.emitter;
          this._emitterWorldMatrix = Dt.c.Translation(tt.x, tt.y, tt.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(tt)
      }
      static _GetAttributeNamesOrOptions() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = [mt.m.PositionKind, mt.m.ColorKind, "angle", "offset", "size"];
        return tt && Ot.push("cellIndex"), et || Ot.push("direction"), Vt && Ot.push("remapData"), Ot
      }
      static _GetEffectCreationOptions() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, At.e)(Ot), tt && Ot.push("particlesInfos"), et && Ot.push("logarithmicDepthConstant"), Vt && (Ot.push("vFogInfos"), Ot.push("vFogColor")), Ot
      }
      fillDefines(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, At.j)(this, this._scene, tt), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && tt.push("#define FOG")), this._isAnimationSheetEnabled && tt.push("#define ANIMATESHEET"), this.useLogarithmicDepth && tt.push("#define LOGARITHMICDEPTH"), et === ut.BLENDMODE_MULTIPLY && tt.push("#define BLENDMULTIPLYMODE"), this.isLocal && tt.push("#define LOCAL"), this._useRampGradients && tt.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (tt.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            tt.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            tt.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && tt.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            tt.push("#define BILLBOARDMODE_ALL")
        }
        Vt && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), tt.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(tt, et, Vt) {
        et.push(...Pe._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), tt.push(...Pe._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), Vt.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Yt.d)(tt, this._imageProcessingConfigurationDefines), (0, Yt.b)(Vt, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(tt) {
        var et;
        const Vt = this._getCustomDrawWrapper(tt);
        if (Vt?.effect) return Vt;
        const Ot = [];
        this.fillDefines(Ot, tt);
        const Dt = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          mt = Ie.c._PrepareStringDefines(Dt, Ot),
          dt = mt ? Ie.c.GetConfiguration(Dt) : void 0;
        let jt = this._drawWrappers[Dt];
        jt || (jt = this._drawWrappers[Dt] = [], 0 === Dt || this._renderPassObserver || (this._renderPassObserver = ((et = this._engine)._onReleaseRenderPassObservable ?? (et._onReleaseRenderPassObservable = new qt.c)).add((tt => {
          const et = this._drawWrappers[tt];
          if (et) {
            for (const tt of et) tt?.dispose();
            delete this._drawWrappers[tt]
          }
        }))));
        let Ht = jt[tt];
        Ht || (Ht = new Ut.c(this._engine), Ht.drawContext && (Ht.drawContext.useInstancing = this._useInstancing), jt[tt] = Ht);
        const Xt = Ot.join("\n");
        if (Ht.defines !== Xt) {
          const tt = [],
            et = [],
            Vt = [];
          this.fillUniformsAttributesAndSamplerNames(et, tt, Vt), mt && (et.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== dt?.defines.PREPASS_LOCAL_POSITION_INDEX && et.push("inverseEmitterWM", "geometryWorldOffset")), Ht.setEffect(this._engine.createEffect("particles", {
            attributes: tt,
            uniformsNames: et,
            samplers: Vt,
            defines: Xt,
            shaderLanguage: this._shaderLanguage,
            multiTarget: mt,
            indexParameters: mt ? {
              buffersCount: dt?._mrtCount ?? 0
            } : void 0
          }, this._engine), Xt)
        }
        return Ht
      }
      _bindGeometryRendering(tt) {
        const et = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Vt = Ie.c.GetConfiguration(et);
        if (!Vt?._defines) return;
        tt.setFloat("objectId", 0), tt.setInt("meshBlendTag", 0);
        const Ot = this._scene?.activeCamera;
        if (tt.setFloat2("cameraInfo", Ot?.minZ ?? 0, Ot?.maxZ ?? 1), this.isLocal && void 0 !== Vt.defines.PREPASS_LOCAL_POSITION_INDEX) {
          tt.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const et = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Dt.n.ZeroReadOnly, Dt.k.uf[0]);
          tt.setVector3("geometryWorldOffset", et)
        }
      }
      animate() {
        let tt, et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!et && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (et ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) tt = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const et = this._calculateEmitRate();
            tt = et * this._scaledUpdateSpeed | 0, this._newPartsExcess += et * this._scaledUpdateSpeed - tt
          }
          if (this._newPartsExcess > 1 && (tt += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? tt = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(tt), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !et) {
            let tt = 0;
            for (let et = 0; et < this._particles.length; et++) {
              const Vt = this._particles[et];
              this._appendParticleVertices(tt, Vt), tt += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const tt = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  et = this._particles.length;
                et < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, et * tt, this._fixedCapacityHighWaterMark * tt), this._fixedCapacityHighWaterMark = et, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const tt = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * tt), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let tt = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const et = this._actualFrame / this.targetStopDuration;
          Ot.i.GetCurrentGradient(et, this._emitRateGradients, ((et, Vt, Ot) => {
            et !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = Vt.getFactor(), this._currentEmitRateGradient = et), tt = (0, Et.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Ot)
          }))
        }
        return tt
      }
      _appendParticleVertices(tt, et) {
        this._appendParticleVertex(tt++, et, 0, 0), this._useInstancing || (this._appendParticleVertex(tt++, et, 1, 0), this._appendParticleVertex(tt++, et, 1, 1), this._appendParticleVertex(tt, et, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Pe.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Vt.e(351).then((() => Vt(61555))), Vt.e(345).then((() => Vt(61561)))])) : await Promise.all([Vt.e(334).then((() => Vt(61565))), Promise.all([Vt.e(327), Vt.e(360)]).then((() => Vt(61573)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== ut.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(ut.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(ut.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(tt) {
        const et = this._getWrapper(tt),
          Vt = et.effect,
          Ot = this._engine;
        Ot.enableEffect(et);
        const qt = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        Vt.setTexture("diffuseSampler", this.particleTexture), Vt.setMatrix("view", qt);
        const mt = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (Vt.setMatrix("projection", mt), this._isAnimationSheetEnabled && this.particleTexture) {
          const tt = this.particleTexture.getBaseSize();
          Vt.setFloat3("particlesInfos", this.spriteCellWidth / tt.width, this.spriteCellHeight / tt.height, this.spriteCellWidth / tt.width)
        }
        if (Vt.setVector2("translationPivot", this.translationPivot), Vt.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const tt = this._scene.activeCamera;
          Vt.setVector3("eyePosition", tt.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), Vt.setTexture("rampSampler", this._rampGradientsTexture));
        const dt = Vt.defines;
        this._scene && ((0, At.f)(Vt, this, this._scene), this.applyFog && (0, it.i)(this._scene, void 0, Vt)), dt.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (qt.invertToRef(Dt.k.Matrix[0]), Vt.setMatrix("invView", Dt.k.Matrix[0])), Vt._multiTarget && this._bindGeometryRendering(Vt), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Ot.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, Vt) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, Vt)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Ot.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, Vt) : Ot.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, Vt), this.useLogarithmicDepth && this._scene && (0, it.q)(dt, Vt, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(Vt), this._setEngineBasedOnBlendMode(tt), Vt._multiTarget && Ie.c._BindZeroAlphaDiscard(Ot, Vt);
        let jt = !1;
        try {
          Ie.c._BindAttachmentsForEffect(Ot, Vt) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(Vt), this._useInstancing ? this._scene?.forceWireframe ? Ot.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Ot.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Ot.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Ot.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), jt = !0)
        } finally {
          Ie.c._RestoreAttachments(Ot)
        }
        return jt ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const tt = this._engine;
        let et;
        return tt.setState && (tt.setState(!1), this.forceDepthWrite && tt.setDepthWrite(!0)), et = this.blendMode === ut.BLENDMODE_MULTIPLYADD ? this._render(ut.BLENDMODE_MULTIPLY) + this._render(ut.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), et
      }
      _onDispose() {}
      dispose() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), tt && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), tt && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(et, Vt), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const tt = this._scene.PJ.indexOf(this);
          tt > -1 && this._scene.PJ.splice(tt, 1), this._scene._activeParticleSystems.dispose()
        }
        this.ZI.notifyObservers(this), this.ZI.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Pe.ForceGLSL = !1;
    var Ze, Le = Vt(37390);
    ! function(tt) {
      tt[tt.ATTACHED = 0] = "ATTACHED", tt[tt.END = 1] = "END"
    }(Ze || (Ze = {}));
    class Fe {
      constructor(tt) {
        if (this.particleSystem = tt, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !tt.emitter || !tt.emitter.dispose) {
          const et = (0, Le.e)("BABYLON.AbstractMesh");
          tt.emitter = new et("SubemitterSystemEmitter", tt.vI()), tt._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let tt = this.particleSystem.emitter;
        if (tt) {
          if (tt instanceof Dt.n) tt = tt.clone();
          else if (-1 !== tt.getClassName().indexOf("Mesh")) {
            tt = new((0, Le.e)("BABYLON.Mesh"))("", tt.vI()), tt.isVisible = !1
          }
        } else tt = new Dt.n;
        const et = new Fe(this.particleSystem.clone(this.particleSystem.name, tt));
        return et.particleSystem.name += "Clone", et.type = this.type, et.inheritDirection = this.inheritDirection, et.inheritedVelocityAmount = this.inheritedVelocityAmount, et.particleSystem._disposeEmitterOnDispose = !0, et.particleSystem.disposeOnStop = !0, et
      }
      serialize() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = {};
        return et.type = this.type, et.inheritDirection = this.inheritDirection, et.inheritedVelocityAmount = this.inheritedVelocityAmount, et.particleSystem = this.particleSystem.serialize(tt), et
      }
      static _ParseParticleSystem(tt, et, Vt) {
        throw (0, kt.e)("ParseParticle")
      }
      static Parse(tt, et, Vt) {
        const Ot = tt.particleSystem,
          qt = new Fe(Fe._ParseParticleSystem(Ot, et, Vt, !0));
        return qt.type = tt.type, qt.inheritDirection = tt.inheritDirection, qt.inheritedVelocityAmount = tt.inheritedVelocityAmount, qt.particleSystem._isSubEmitter = !0, qt
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var ke = Vt(40092),
      Ge = Vt(40230);
    const ze = () => {};
    class oe {
      constructor() {
        this.particlePositionGenerator = ze, this.particleDestinationGenerator = ze, this.particleDirectionGenerator = ze
      }
      startDirectionFunction(tt, et, Vt, Ot) {
        const qt = Dt.k.uf[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== ze) this.particleDirectionGenerator(-1, Vt, qt);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== ze) {
          this.particleDestinationGenerator(-1, Vt, qt);
          const tt = Dt.k.uf[1];
          qt.subtractToRef(Vt.position, tt), tt.scaleToRef(1 / Vt.lifeTime, qt)
        } else qt.set(0, 0, 0);
        Ot ? et.rK(qt) : Dt.n.TransformNormalToRef(qt, tt, et)
      }
      startPositionFunction(tt, et, Vt, Ot) {
        const qt = Dt.k.uf[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== ze ? this.particlePositionGenerator(-1, Vt, qt) : qt.set(0, 0, 0), Ot ? et.rK(qt) : Dt.n.TransformCoordinatesToRef(qt, tt, et)
      }
      clone() {
        const tt = new oe;
        return lt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {}
      buildUniformLayout(tt) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const tt = {};
        return tt.type = this.getClassName(), tt.particlePositionGenerator = this.particlePositionGenerator, tt.particleDestinationGenerator = this.particleDestinationGenerator, tt
      }
      parse(tt) {
        tt.particlePositionGenerator && (this.particlePositionGenerator = tt.particlePositionGenerator), tt.particleDestinationGenerator && (this.particleDestinationGenerator = tt.particleDestinationGenerator)
      }
    }
    const re = Dt.n.Zero(),
      Ue = Dt.n.Zero(),
      Ae = Dt.n.Zero();
    class ie {
      constructor() {
        this.strength = 0, this.position = Dt.n.Zero()
      }
      _processParticle(tt, et) {
        this.position.subtractToRef(tt.position, re);
        const Vt = re.lengthSquared() + 1;
        re.normalize().scaleToRef(this.strength / Vt, Ue), Ue.scaleToRef(et._tempScaledUpdateSpeed, Ae), tt.direction.addInPlace(Ae)
      }
      serialize() {
        return {
          position: this.position.GOt(),
          strength: this.strength
        }
      }
    }
    const Ye = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Be extends Pe {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = tt => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const et = Math.floor(Math.random() * this._subEmitters.length);
          for (const Vt of this._subEmitters[et])
            if (1 === Vt.type) {
              const et = Vt.clone();
              tt._inheritParticleInfoToSubEmitter(et), et.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(et.particleSystem), et.particleSystem.start()
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
      set flowMap(tt) {
        this._flowMap !== tt && (this._flowMap = tt, this._flowMapUpdate && (Re(this._flowMapUpdate), this._flowMapUpdate = null), tt && (this._flowMapUpdate = {
          process: tt => {
            const et = this.vI()?.getTransformMatrix();
            this._flowMap._processParticle(tt, this.flowMapStrength * this._tempScaledUpdateSpeed, et)
          },
          previousItem: null,
          nextItem: null
        }, ce(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(tt) {
        super.addAttractor(tt), 1 === this._attractors.length && (this._attractorUpdate = {
          process: tt => {
            for (const et of this._attractors) et._processParticle(tt, this)
          },
          previousItem: null,
          nextItem: null
        }, ce(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(tt) {
        super.removeAttractor(tt), 0 === this._attractors.length && this._attractorUpdate && Re(this._attractorUpdate)
      }
      start() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(tt)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const tt of this.subEmitters) tt instanceof Be ? this._subEmitters.push([new Fe(tt)]) : tt instanceof Fe ? this._subEmitters.push([tt]) : tt instanceof Array && this._subEmitters.push(tt)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const tt of this.activeSubSystems) tt.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const tt = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== tt && this._rootParticleSystem.activeSubSystems.splice(tt, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(tt) {
        tt && this._stopSubEmitters()
      }
      _prepareParticle(tt) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const et = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          tt._properties.attachedSubEmitters = [];
          for (const Vt of et)
            if (0 === Vt.type) {
              const et = Vt.clone();
              tt._properties.attachedSubEmitters.push(et), et.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), tt && this.particles)
          for (const Vt of this.particles)
            if (Vt._properties.attachedSubEmitters)
              for (let tt = Vt._properties.attachedSubEmitters.length - 1; tt >= 0; tt -= 1) Vt._properties.attachedSubEmitters[tt].dispose();
        if (et && this.activeSubSystems)
          for (let Vt = this.activeSubSystems.length - 1; Vt >= 0; Vt -= 1) this.activeSubSystems[Vt].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let tt = 0; tt < this._subEmitters.length; tt++)
            for (const et of this._subEmitters[tt]) et.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(tt, et, Vt, Ot) {
        let qt;
        qt = Vt instanceof ke.d ? null : Vt;
        const mt = (0, Le.e)("BABYLON.Texture");
        if (mt && qt)
          if (tt.texture) et.particleTexture = mt.Parse(tt.texture, qt, Ot);
          else if (tt.textureName) {
          const Vt = tt.textureSettings;
          if (et.particleTexture = new mt(Ot + tt.textureName, qt, !1, void 0 === tt.invertY || tt.invertY, Vt ? Vt.samplingMode : void 0), et.particleTexture.name = tt.textureName, Vt) {
            const tt = et.particleTexture;
            for (const et of Ye) void 0 !== Vt[et] && (tt[et] = Vt[et])
          }
        }
        if (tt.emitterId || 0 === tt.emitterId || void 0 !== tt.emitter ? (tt.emitterId || 0 === tt.emitterId) && qt ? (et.emitter = qt.getLastMeshById(tt.emitterId), et.emitter || (et.emitter = Dt.n.Zero())) : et.emitter = Dt.n.FromArray(tt.emitter) : et.emitter = Dt.n.Zero(), et.isLocal = !!tt.isLocal, void 0 !== tt.renderingGroupId && (et.renderingGroupId = tt.renderingGroupId), void 0 !== tt.isBillboardBased && (et.isBillboardBased = tt.isBillboardBased), void 0 !== tt.billboardMode && (et.billboardMode = tt.billboardMode), void 0 !== tt.useLogarithmicDepth && (et.useLogarithmicDepth = tt.useLogarithmicDepth), tt.animations) {
          for (let Vt = 0; Vt < tt.animations.length; Vt++) {
            const Ot = tt.animations[Vt],
              qt = (0, Le.e)("BABYLON.Animation");
            qt && et.animations.push(qt.Parse(Ot))
          }
          et.beginAnimationOnStart = tt.beginAnimationOnStart, et.beginAnimationFrom = tt.beginAnimationFrom, et.beginAnimationTo = tt.beginAnimationTo, et.beginAnimationLoop = tt.beginAnimationLoop
        }
        if (tt.autoAnimate && qt && qt.beginAnimation(et, tt.autoAnimateFrom, tt.autoAnimateTo, tt.autoAnimateLoop, tt.autoAnimateSpeed || 1), et.startDelay = 0 | tt.startDelay, et.minAngularSpeed = tt.minAngularSpeed, et.maxAngularSpeed = tt.maxAngularSpeed, et.minSize = tt.minSize, et.maxSize = tt.maxSize, tt.minScaleX && (et.minScaleX = tt.minScaleX, et.maxScaleX = tt.maxScaleX, et.minScaleY = tt.minScaleY, et.maxScaleY = tt.maxScaleY), void 0 !== tt.preWarmCycles && (et.preWarmCycles = tt.preWarmCycles, et.preWarmStepOffset = tt.preWarmStepOffset), void 0 !== tt.minInitialRotation && (et.minInitialRotation = tt.minInitialRotation, et.maxInitialRotation = tt.maxInitialRotation), et.minLifeTime = tt.minLifeTime, et.maxLifeTime = tt.maxLifeTime, et.minEmitPower = tt.minEmitPower, et.maxEmitPower = tt.maxEmitPower, et.emitRate = tt.emitRate, et.gravity = Dt.n.FromArray(tt.gravity), tt.noiseStrength && (et.noiseStrength = Dt.n.FromArray(tt.noiseStrength)), et.color1 = Xt.c.FromArray(tt.color1), et.color2 = Xt.c.FromArray(tt.color2), et.colorDead = Xt.c.FromArray(tt.colorDead), et.updateSpeed = tt.updateSpeed, et.targetStopDuration = tt.targetStopDuration, et.blendMode = tt.blendMode, tt.colorGradients)
          for (const Dt of tt.colorGradients) et.addColorGradient(Dt.gradient, Xt.c.FromArray(Dt.color1), Dt.color2 ? Xt.c.FromArray(Dt.color2) : void 0);
        if (tt.rampGradients) {
          for (const Vt of tt.rampGradients) et.addRampGradient(Vt.gradient, Xt.b.FromArray(Vt.color));
          et.useRampGradients = tt.useRampGradients
        }
        if (tt.colorRemapGradients)
          for (const Dt of tt.colorRemapGradients) et.addColorRemapGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.alphaRemapGradients)
          for (const Dt of tt.alphaRemapGradients) et.addAlphaRemapGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.sizeGradients)
          for (const Dt of tt.sizeGradients) et.addSizeGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.angularSpeedGradients)
          for (const Dt of tt.angularSpeedGradients) et.addAngularSpeedGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.velocityGradients)
          for (const Dt of tt.velocityGradients) et.addVelocityGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.dragGradients)
          for (const Dt of tt.dragGradients) et.addDragGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.emitRateGradients)
          for (const Dt of tt.emitRateGradients) et.addEmitRateGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.startSizeGradients)
          for (const Dt of tt.startSizeGradients) et.addStartSizeGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.lifeTimeGradients)
          for (const Dt of tt.lifeTimeGradients) et.addLifeTimeGradient(Dt.gradient, void 0 !== Dt.factor1 ? Dt.factor1 : Dt.factor, Dt.factor2);
        if (tt.limitVelocityGradients) {
          for (const Vt of tt.limitVelocityGradients) et.addLimitVelocityGradient(Vt.gradient, void 0 !== Vt.factor1 ? Vt.factor1 : Vt.factor, Vt.factor2);
          et.limitVelocityDamping = tt.limitVelocityDamping
        }
        if (tt.noiseTexture && qt) {
          const Vt = (0, Le.e)("BABYLON.ProceduralTexture");
          et.noiseTexture = Vt.Parse(tt.noiseTexture, qt, Ot)
        }
        let dt;
        if (tt.particleEmitterType) {
          switch (tt.particleEmitterType.type) {
            case "SphereParticleEmitter":
              dt = new yt;
              break;
            case "SphereDirectedParticleEmitter":
              dt = new Nt;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              dt = new bt;
              break;
            case "ConeDirectedParticleEmitter":
              dt = new Jt;
              break;
            case "CylinderParticleEmitter":
              dt = new Mt.f;
              break;
            case "CylinderDirectedParticleEmitter":
              dt = new Mt.c;
              break;
            case "HemisphericParticleEmitter":
              dt = new wt;
              break;
            case "PointParticleEmitter":
              dt = new ft;
              break;
            case "MeshParticleEmitter":
              dt = new Ct;
              break;
            case "CustomParticleEmitter":
              dt = new oe;
              break;
            default:
              dt = new Qt.d
          }
          dt.parse(tt.particleEmitterType, qt)
        } else dt = new Qt.d, dt.parse(tt, qt);
        et.particleEmitterType = dt, et.startSpriteCellID = tt.startSpriteCellID, et.endSpriteCellID = tt.endSpriteCellID, et.spriteCellLoop = tt.spriteCellLoop ?? !0, et.spriteCellWidth = tt.spriteCellWidth, et.spriteCellHeight = tt.spriteCellHeight, et.spriteCellChangeSpeed = tt.spriteCellChangeSpeed, et.spriteRandomStartCell = tt.spriteRandomStartCell, et.disposeOnStop = tt.disposeOnStop ?? !1, et.manualEmitCount = tt.manualEmitCount ?? -1
      }
      static Parse(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qt = arguments.length > 4 ? arguments[4] : void 0;
        const mt = tt.name;
        let dt, jt, Ht = null,
          Qt = null;
        if (et instanceof ke.d ? dt = et : (jt = et, dt = jt.Jf()), tt.customShader && (0, kt.b)(dt.createEffectForParticles)) {
          Qt = tt.customShader;
          const et = Qt.shaderOptions.defines.length > 0 ? Qt.shaderOptions.defines.join("\n") : "";
          Ht = dt.createEffectForParticles(Qt.shaderPath.fragmentElement, Qt.shaderOptions.uniforms, Qt.shaderOptions.samplers, et)
        }
        const lt = new Be(mt, qt || tt.uQ, et, Ht, tt.isAnimationSheetEnabled);
        if (lt.customShader = Qt, lt._rootUrl = Vt, tt.id && (lt.id = tt.id), tt.subEmitters) {
          lt.subEmitters = [];
          for (const Ot of tt.subEmitters) {
            const tt = [];
            for (const qt of Ot) tt.push(Fe.Parse(qt, et, Vt));
            lt.subEmitters.push(tt)
          }
        }
        if (tt.attractors)
          for (const Xt of tt.attractors) {
            const tt = new ie;
            tt.position = Dt.n.FromArray(Xt.position), tt.strength = Xt.strength, lt.addAttractor(tt)
          }
        return Be._Parse(tt, lt, et, Vt), tt.textureMask && (lt.textureMask = Xt.c.FromArray(tt.textureMask)), tt.worldOffset && (lt.worldOffset = Dt.n.FromArray(tt.worldOffset)), tt.preventAutoStart && (lt.preventAutoStart = tt.preventAutoStart), tt.metadata && (lt.metadata = tt.metadata), Ot || lt.preventAutoStart || lt.start(), lt
      }
      serialize() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = {};
        if (Be._Serialize(et, this, tt), et.textureMask = this.textureMask.GOt(), et.customShader = this.customShader, et.preventAutoStart = this.preventAutoStart, et.worldOffset = this.worldOffset.GOt(), this.metadata && (et.metadata = this.metadata), this.subEmitters) {
          et.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const Vt of this._subEmitters) {
            const Ot = [];
            for (const et of Vt) et.particleSystem.doNotSerialize || Ot.push(et.serialize(tt));
            et.subEmitters.push(Ot)
          }
        }
        if (this._attractors && this._attractors.length) {
          et.attractors = [];
          for (const tt of this._attractors) et.attractors.push(tt.serialize())
        }
        return et
      }
      static _Serialize(tt, et, Vt) {
        if (tt.name = et.name, tt.id = et.id, tt.uQ = et.getCapacity(), tt.disposeOnStop = et.disposeOnStop, tt.manualEmitCount = et.manualEmitCount, et.emitter.position) {
          const Vt = et.emitter;
          tt.emitterId = Vt.id
        } else {
          const Vt = et.emitter;
          tt.emitter = Vt.GOt()
        }
        if (et.particleEmitterType && (tt.particleEmitterType = et.particleEmitterType.serialize()), et.particleTexture)
          if (Vt) tt.texture = et.particleTexture.serialize();
          else {
            const Vt = et.particleTexture;
            tt.textureName = et.particleTexture.name, tt.invertY = !!Vt._invertY;
            const Ot = {};
            for (const tt of Ye) Ot[tt] = Vt[tt];
            Ot.samplingMode = Vt.samplingMode, tt.textureSettings = Ot
          } tt.isLocal = et.isLocal, Ge.d.AppendSerializedAnimations(et, tt), tt.beginAnimationOnStart = et.beginAnimationOnStart, tt.beginAnimationFrom = et.beginAnimationFrom, tt.beginAnimationTo = et.beginAnimationTo, tt.beginAnimationLoop = et.beginAnimationLoop, tt.startDelay = et.startDelay, tt.renderingGroupId = et.renderingGroupId, tt.isBillboardBased = et.isBillboardBased, tt.billboardMode = et.billboardMode, tt.minAngularSpeed = et.minAngularSpeed, tt.maxAngularSpeed = et.maxAngularSpeed, tt.minSize = et.minSize, tt.maxSize = et.maxSize, tt.minScaleX = et.minScaleX, tt.maxScaleX = et.maxScaleX, tt.minScaleY = et.minScaleY, tt.maxScaleY = et.maxScaleY, tt.minEmitPower = et.minEmitPower, tt.maxEmitPower = et.maxEmitPower, tt.minLifeTime = et.minLifeTime, tt.maxLifeTime = et.maxLifeTime, tt.emitRate = et.emitRate, tt.gravity = et.gravity.GOt(), tt.noiseStrength = et.noiseStrength.GOt(), tt.color1 = et.color1.GOt(), tt.color2 = et.color2.GOt(), tt.colorDead = et.colorDead.GOt(), tt.updateSpeed = et.updateSpeed, tt.targetStopDuration = et.targetStopDuration, tt.blendMode = et.blendMode, tt.preWarmCycles = et.preWarmCycles, tt.preWarmStepOffset = et.preWarmStepOffset, tt.minInitialRotation = et.minInitialRotation, tt.maxInitialRotation = et.maxInitialRotation, tt.startSpriteCellID = et.startSpriteCellID, tt.spriteCellLoop = et.spriteCellLoop, tt.endSpriteCellID = et.endSpriteCellID, tt.spriteCellChangeSpeed = et.spriteCellChangeSpeed, tt.spriteCellWidth = et.spriteCellWidth, tt.spriteCellHeight = et.spriteCellHeight, tt.spriteRandomStartCell = et.spriteRandomStartCell, tt.isAnimationSheetEnabled = et.isAnimationSheetEnabled, tt.useLogarithmicDepth = et.useLogarithmicDepth;
        const Ot = et.getColorGradients();
        if (Ot) {
          tt.colorGradients = [];
          for (const et of Ot) {
            const Vt = {
              gradient: et.gradient,
              color1: et.color1.GOt()
            };
            et.color2 ? Vt.color2 = et.color2.GOt() : Vt.color2 = et.color1.GOt(), tt.colorGradients.push(Vt)
          }
        }
        const qt = et.getRampGradients();
        if (qt) {
          tt.rampGradients = [];
          for (const et of qt) {
            const Vt = {
              gradient: et.gradient,
              color: et.color.GOt()
            };
            tt.rampGradients.push(Vt)
          }
          tt.useRampGradients = et.useRampGradients
        }
        const Dt = et.getColorRemapGradients();
        if (Dt) {
          tt.colorRemapGradients = [];
          for (const et of Dt) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.colorRemapGradients.push(Vt)
          }
        }
        const mt = et.getAlphaRemapGradients();
        if (mt) {
          tt.alphaRemapGradients = [];
          for (const et of mt) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.alphaRemapGradients.push(Vt)
          }
        }
        const dt = et.getSizeGradients();
        if (dt) {
          tt.sizeGradients = [];
          for (const et of dt) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.sizeGradients.push(Vt)
          }
        }
        const jt = et.getAngularSpeedGradients();
        if (jt) {
          tt.angularSpeedGradients = [];
          for (const et of jt) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.angularSpeedGradients.push(Vt)
          }
        }
        const Ht = et.getVelocityGradients();
        if (Ht) {
          tt.velocityGradients = [];
          for (const et of Ht) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.velocityGradients.push(Vt)
          }
        }
        const Xt = et.getDragGradients();
        if (Xt) {
          tt.dragGradients = [];
          for (const et of Xt) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.dragGradients.push(Vt)
          }
        }
        const Qt = et.getEmitRateGradients();
        if (Qt) {
          tt.emitRateGradients = [];
          for (const et of Qt) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.emitRateGradients.push(Vt)
          }
        }
        const lt = et.getStartSizeGradients();
        if (lt) {
          tt.startSizeGradients = [];
          for (const et of lt) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.startSizeGradients.push(Vt)
          }
        }
        const Et = et.getLifeTimeGradients();
        if (Et) {
          tt.lifeTimeGradients = [];
          for (const et of Et) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.lifeTimeGradients.push(Vt)
          }
        }
        const ft = et.getLimitVelocityGradients();
        if (ft) {
          tt.limitVelocityGradients = [];
          for (const et of ft) {
            const Vt = {
              gradient: et.gradient,
              factor1: et.factor1
            };
            void 0 !== et.factor2 ? Vt.factor2 = et.factor2 : Vt.factor2 = et.factor1, tt.limitVelocityGradients.push(Vt)
          }
          tt.limitVelocityDamping = et.limitVelocityDamping
        }
        et.noiseTexture && (tt.noiseTexture = et.noiseTexture.serialize())
      }
      clone(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = {
          ...this._customWrappers
        };
        let qt = null;
        const Dt = this._engine;
        if ((0, kt.b)(Dt.createEffectForParticles) && null != this.customShader) {
          qt = this.customShader;
          const tt = qt.shaderOptions.defines.length > 0 ? qt.shaderOptions.defines.join("\n") : "",
            et = Dt.createEffectForParticles(qt.shaderPath.fragmentElement, qt.shaderOptions.uniforms, qt.shaderOptions.samplers, tt);
          Ot[0] ? Ot[0].effect = et : this.setCustomEffect(et, 0)
        }
        const mt = this.serialize(Vt),
          dt = !1 === Vt && this.particleTexture ? this.particleTexture.clone() : null;
        dt && (mt.textureName = void 0);
        const jt = Be.Parse(mt, this._scene || this._engine, this._rootUrl);
        return jt.name = tt, jt.customShader = qt, jt._customWrappers = Ot, dt && (jt.particleTexture = dt), void 0 === et && (et = this.emitter), this.noiseTexture && (jt.noiseTexture = this.noiseTexture.clone()), jt.emitter = et, this.preventAutoStart || jt.start(), jt
      }
    }
    Be.BILLBOARDMODE_Y = 2, Be.BILLBOARDMODE_ALL = 7, Be.BILLBOARDMODE_STRETCHED = 8, Be.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let pe = !1;
    pe || (pe = !0, Fe._ParseParticleSystem = Be.Parse)
  },
  41882: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      SkyMaterial: () => bt,
      _MaxColorValueForRenderTarget: () => Mt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(40230),
      mt = Vt(37331),
      dt = Vt(40466),
      jt = Vt(40531),
      Ht = Vt(41842),
      Xt = Vt(41374),
      Qt = Vt(40289),
      lt = Vt(37390),
      Et = Vt(40566),
      ft = Vt(40540),
      wt = Vt(40520),
      yt = Vt(40514);
    class Nt extends dt.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Mt(tt) {
      switch (tt) {
        case Ht.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Ht.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let bt = (() => {
      var tt;
      let et, dt, Ht, lt, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt, It = jt.e,
        Pt = [],
        Zt = [],
        Lt = [],
        Ft = [],
        kt = [],
        Gt = [],
        zt = [],
        ot = [],
        rt = [],
        Ut = [],
        At = [],
        it = [],
        Yt = [],
        Bt = [],
        pt = [],
        xt = [],
        Tt = [],
        gt = [],
        st = [],
        nt = [],
        te = [],
        ee = [],
        Ve = [],
        Oe = [],
        qe = [],
        De = [],
        me = [],
        de = [],
        je = [],
        He = [];
      return tt = class extends It {
        constructor(tt, et) {
          super(tt, et, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Ot.m)(this, Pt, 1), this.turbidity = ((0, Ot.m)(this, Zt), (0, Ot.m)(this, Lt, 10)), this.rayleigh = ((0, Ot.m)(this, Ft), (0, Ot.m)(this, kt, 2)), this.mieCoefficient = ((0, Ot.m)(this, Gt), (0, Ot.m)(this, zt, .005)), this.mieDirectionalG = ((0, Ot.m)(this, ot), (0, Ot.m)(this, rt, .8)), this.distance = ((0, Ot.m)(this, Ut), (0, Ot.m)(this, At, 500)), this.inclination = ((0, Ot.m)(this, it), (0, Ot.m)(this, Yt, .49)), this.azimuth = ((0, Ot.m)(this, Bt), (0, Ot.m)(this, pt, .25)), this.sunPosition = ((0, Ot.m)(this, xt), (0, Ot.m)(this, Tt, new mt.uf(0, 100, 0))), this.useSunPosition = ((0, Ot.m)(this, gt), (0, Ot.m)(this, st, !1)), this.cameraOffset = ((0, Ot.m)(this, nt), (0, Ot.m)(this, te, mt.uf.Zero())), this.up = ((0, Ot.m)(this, ee), (0, Ot.m)(this, Ve, mt.uf.Up())), this.dithering = ((0, Ot.m)(this, Oe), (0, Ot.m)(this, qe, !1)), this.rawHdrOutput = ((0, Ot.m)(this, De), (0, Ot.m)(this, me, !1)), this.cloudiness = ((0, Ot.m)(this, de), (0, Ot.m)(this, je, 0)), this._cameraPosition = ((0, Ot.m)(this, He), mt.uf.Zero()), this._skyOrientation = new mt.Quaternion
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
        isReadyForSubMesh(et, Vt) {
          const Ot = Vt._drawWrapper;
          if (this.isFrozen && Ot.effect && Ot._wasPreviouslyReady) return !0;
          Vt.materialDefines || (Vt.materialDefines = new Nt);
          const qt = Vt.materialDefines,
            Dt = this.vI();
          if (this._isReadyForSubMesh(Vt)) return !0;
          if ((0, yt.eb)(et, Dt, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, qt, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, yt.R)(et, qt, !0, !1), qt.IMAGEPROCESSINGPOSTPROCESS !== Dt.imageProcessingConfiguration.applyByPostProcess && qt.markAsMiscDirty(), qt.DITHER !== this.dithering && qt.markAsMiscDirty(), qt.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && qt.markAsMiscDirty(), qt.isDirty) {
            qt.markAsProcessed(), Dt.resetCachedMaterial();
            const et = new ft.b;
            qt.FOG && et.addFallback(1, "FOG"), qt.IMAGEPROCESSINGPOSTPROCESS = Dt.imageProcessingConfiguration.applyByPostProcess, qt.DITHER = this.dithering, qt.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Ot = [Xt.e.PositionKind];
            qt.VERTEXCOLOR && Ot.push(Xt.e.ColorKind);
            const mt = "sky",
              dt = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, wt.e)(dt);
            const jt = qt.toString();
            Vt.setEffect(Dt.Jf().createEffect(mt, {
              attributes: Ot,
              uniformsNames: dt,
              uniformBuffersNames: [],
              samplers: [],
              defines: jt,
              fallbacks: et,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: tt._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Dt.Jf()), qt, this._materialContext)
          }
          return !(!Vt.effect || !Vt.effect.isReady()) && (qt._renderId = Dt.getRenderId(), Ot._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(tt, et, Vt) {
          const Ot = this.vI(),
            qt = Vt.materialDefines;
          if (!qt) return;
          const Dt = Vt.effect;
          if (!Dt) return;
          this._activeEffect = Dt, this.bindOnlyWorldMatrix(tt), this._activeEffect.setMatrix("viewProjection", Ot.getTransformMatrix()), this._mustRebind(Ot, Dt, Vt) && ((0, wt.f)(Dt, this, Ot), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, yt.q)(qt, Dt, Ot)), Ot.fogEnabled && et.applyFog && Ot.fogMode !== Qt.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", Ot.getViewMatrix()), (0, yt.i)(Ot, et, this._activeEffect, this.rawHdrOutput);
          const dt = Ot.activeCamera;
          if (dt) {
            const tt = dt.getWorldMatrix();
            this._cameraPosition.x = tt.m[12], this._cameraPosition.y = tt.m[13], this._cameraPosition.z = tt.m[14], this._activeEffect.setVector3("cameraPosition", mt.TmpVectors.uf[0].rK(this._cameraPosition).qqt(Ot.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const tt = Ot.Jf()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Mt(tt?.texture?.type))
          }
          if (!this.useSunPosition) {
            const tt = Math.PI * (this.inclination - .5),
              et = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(et) * Math.cos(tt), this.sunPosition.y = this.distance * Math.sin(-tt), this.sunPosition.z = this.distance * Math.sin(et) * Math.cos(tt), mt.Quaternion.FromUnitVectorsToRef(mt.uf.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(et, this._activeEffect, Vt)
        }
        getAnimatables() {
          return []
        }
        dispose(tt) {
          super.dispose(tt)
        }
        clone(et) {
          return Dt.d.Clone((() => new tt(et, this.vI())), this)
        }
        serialize() {
          const tt = super.serialize();
          return tt.customType = "BABYLON.SkyMaterial", tt
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(et, Vt, Ot) {
          return Dt.d.Parse((() => new tt(et.name, Vt)), et, Vt, Ot)
        }
      }, (() => {
        const Vt = "function" === typeof Symbol && Symbol.metadata ? Object.create(It[Symbol.metadata] ?? null) : void 0;
        et = [(0, qt.P)()], dt = [(0, qt.P)()], Ht = [(0, qt.P)()], lt = [(0, qt.P)()], bt = [(0, qt.P)()], Jt = [(0, qt.P)()], Ct = [(0, qt.P)()], ut = [(0, qt.P)()], Kt = [(0, qt.M)()], ht = [(0, qt.P)()], vt = [(0, qt.M)()], Wt = [(0, qt.M)()], St = [(0, qt.P)()], ct = [(0, qt.P)()], Rt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: tt => "luminance" in tt,
            get: tt => tt.luminance,
            set: (tt, et) => {
              tt.luminance = et
            }
          },
          metadata: Vt
        }, Pt, Zt), (0, Ot.l)(null, null, dt, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: tt => "turbidity" in tt,
            get: tt => tt.turbidity,
            set: (tt, et) => {
              tt.turbidity = et
            }
          },
          metadata: Vt
        }, Lt, Ft), (0, Ot.l)(null, null, Ht, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: tt => "rayleigh" in tt,
            get: tt => tt.rayleigh,
            set: (tt, et) => {
              tt.rayleigh = et
            }
          },
          metadata: Vt
        }, kt, Gt), (0, Ot.l)(null, null, lt, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: tt => "mieCoefficient" in tt,
            get: tt => tt.mieCoefficient,
            set: (tt, et) => {
              tt.mieCoefficient = et
            }
          },
          metadata: Vt
        }, zt, ot), (0, Ot.l)(null, null, bt, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: tt => "mieDirectionalG" in tt,
            get: tt => tt.mieDirectionalG,
            set: (tt, et) => {
              tt.mieDirectionalG = et
            }
          },
          metadata: Vt
        }, rt, Ut), (0, Ot.l)(null, null, Jt, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: tt => "distance" in tt,
            get: tt => tt.distance,
            set: (tt, et) => {
              tt.distance = et
            }
          },
          metadata: Vt
        }, At, it), (0, Ot.l)(null, null, Ct, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: tt => "inclination" in tt,
            get: tt => tt.inclination,
            set: (tt, et) => {
              tt.inclination = et
            }
          },
          metadata: Vt
        }, Yt, Bt), (0, Ot.l)(null, null, ut, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: tt => "azimuth" in tt,
            get: tt => tt.azimuth,
            set: (tt, et) => {
              tt.azimuth = et
            }
          },
          metadata: Vt
        }, pt, xt), (0, Ot.l)(null, null, Kt, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: tt => "sunPosition" in tt,
            get: tt => tt.sunPosition,
            set: (tt, et) => {
              tt.sunPosition = et
            }
          },
          metadata: Vt
        }, Tt, gt), (0, Ot.l)(null, null, ht, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: tt => "useSunPosition" in tt,
            get: tt => tt.useSunPosition,
            set: (tt, et) => {
              tt.useSunPosition = et
            }
          },
          metadata: Vt
        }, st, nt), (0, Ot.l)(null, null, vt, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: tt => "cameraOffset" in tt,
            get: tt => tt.cameraOffset,
            set: (tt, et) => {
              tt.cameraOffset = et
            }
          },
          metadata: Vt
        }, te, ee), (0, Ot.l)(null, null, Wt, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: tt => "up" in tt,
            get: tt => tt.up,
            set: (tt, et) => {
              tt.up = et
            }
          },
          metadata: Vt
        }, Ve, Oe), (0, Ot.l)(null, null, St, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: tt => "dithering" in tt,
            get: tt => tt.dithering,
            set: (tt, et) => {
              tt.dithering = et
            }
          },
          metadata: Vt
        }, qe, De), (0, Ot.l)(null, null, ct, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: tt => "rawHdrOutput" in tt,
            get: tt => tt.rawHdrOutput,
            set: (tt, et) => {
              tt.rawHdrOutput = et
            }
          },
          metadata: Vt
        }, me, de), (0, Ot.l)(null, null, Rt, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: tt => "cloudiness" in tt,
            get: tt => tt.cloudiness,
            set: (tt, et) => {
              tt.cloudiness = et
            }
          },
          metadata: Vt
        }, je, He), Vt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Vt
        })
      })(), tt._ShaderLoader = new Et.b((() => [Vt.e(335).then((() => Vt(61581))), Vt.e(328).then((() => Vt(61590)))]), (() => [Vt.e(352).then((() => Vt(61592))), Vt.e(346).then((() => Vt(61595)))])), tt
    })();
    (0, lt.i)("BABYLON.SkyMaterial", bt)
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);