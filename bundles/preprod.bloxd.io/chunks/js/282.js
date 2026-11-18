export const id = 282;
export const ids = [282];
export const modules = {
  40083: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(38587),
      hy = Wy(40088);
    class fy {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = Wy, this.sBy = [], this._maxBlockCapacity = bb || 64, this._selectionContent = new Uy.d(1024), this._creationFunc = yb
      }
      update(yb, bb, Wy) {
        hy.d._CreateBlocks(yb, bb, Wy, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      yKy(yb) {
        for (let bb = 0; bb < this.blocks.length; bb++) {
          this.blocks[bb].addEntry(yb)
        }
      }
      yUy(yb) {
        for (let bb = 0; bb < this.blocks.length; bb++) {
          this.blocks[bb].removeEntry(yb)
        }
      }
      select(yb, bb) {
        this._selectionContent.reset();
        for (let Wy = 0; Wy < this.blocks.length; Wy++) {
          this.blocks[Wy].select(yb, this._selectionContent, bb)
        }
        return bb ? this._selectionContent.concat(this.sBy) : this._selectionContent.concatWithNoDuplicate(this.sBy), this._selectionContent
      }
      intersects(yb, bb, Wy) {
        this._selectionContent.reset();
        for (let Uy = 0; Uy < this.blocks.length; Uy++) {
          this.blocks[Uy].intersects(yb, bb, this._selectionContent, Wy)
        }
        return Wy ? this._selectionContent.concat(this.sBy) : this._selectionContent.concatWithNoDuplicate(this.sBy), this._selectionContent
      }
      intersectsRay(yb) {
        this._selectionContent.reset();
        for (let bb = 0; bb < this.blocks.length; bb++) {
          this.blocks[bb].intersectsRay(yb, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.sBy), this._selectionContent
      }
    }
    fy.CreationFuncForMeshes = (yb, bb) => {
      const Wy = yb.qUy();
      !yb.isBlocked && Wy.boundingBox.intersectsMinMax(bb.ZBy, bb.fBy) && bb.entries.push(yb)
    }, fy.CreationFuncForSubMeshes = (yb, bb) => {
      yb.qUy().boundingBox.intersectsMinMax(bb.ZBy, bb.fBy) && bb.entries.push(yb)
    }
  },
  40088: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(35861),
      hy = Wy(38805);
    class fy {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.entries = [], this.SBy = new Array, this._capacity = Wy, this._depth = Uy, this._maxDepth = hy, this._creationFunc = fy, this._minPoint = yb, this._maxPoint = bb, this.SBy.push(yb.clone()), this.SBy.push(bb.clone()), this.SBy.push(yb.clone()), this.SBy[2].x = bb.x, this.SBy.push(yb.clone()), this.SBy[3].y = bb.y, this.SBy.push(yb.clone()), this.SBy[4].z = bb.z, this.SBy.push(bb.clone()), this.SBy[5].z = yb.z, this.SBy.push(bb.clone()), this.SBy[6].x = yb.x, this.SBy.push(bb.clone()), this.SBy[7].y = yb.y
      }
      get Hy() {
        return this._capacity
      }
      get ZBy() {
        return this._minPoint
      }
      get fBy() {
        return this._maxPoint
      }
      addEntry(yb) {
        if (this.blocks)
          for (let bb = 0; bb < this.blocks.length; bb++) {
            this.blocks[bb].addEntry(yb)
          } else this._creationFunc(yb, this), this.entries.length > this.Hy && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(yb) {
        if (this.blocks) {
          for (let bb = 0; bb < this.blocks.length; bb++) {
            this.blocks[bb].removeEntry(yb)
          }
          return
        }
        const bb = this.entries.indexOf(yb);
        bb > -1 && this.entries.splice(bb, 1)
      }
      addEntries(yb) {
        for (let bb = 0; bb < yb.length; bb++) {
          const Wy = yb[bb];
          this.addEntry(Wy)
        }
      }
      select(yb, bb, Wy) {
        if (hy.e.IsInFrustum(this.SBy, yb)) {
          if (this.blocks) {
            for (let Uy = 0; Uy < this.blocks.length; Uy++) {
              this.blocks[Uy].select(yb, bb, Wy)
            }
            return
          }
          Wy ? bb.concat(this.entries) : bb.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(yb, bb, Wy, Uy) {
        if (hy.e.IntersectsSphere(this._minPoint, this._maxPoint, yb, bb)) {
          if (this.blocks) {
            for (let hy = 0; hy < this.blocks.length; hy++) {
              this.blocks[hy].intersects(yb, bb, Wy, Uy)
            }
            return
          }
          Uy ? Wy.concat(this.entries) : Wy.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(yb, bb) {
        if (yb.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let Wy = 0; Wy < this.blocks.length; Wy++) {
              this.blocks[Wy].intersectsRay(yb, bb)
            }
            return
          }
          bb.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        fy._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(yb, bb, Wy, hy, Zy, cb, Py, oy) {
        Py.blocks = new Array;
        const By = new Uy.n((bb.x - yb.x) / 2, (bb.y - yb.y) / 2, (bb.z - yb.z) / 2);
        for (let Uy = 0; Uy < 2; Uy++)
          for (let bb = 0; bb < 2; bb++)
            for (let Ky = 0; Ky < 2; Ky++) {
              const ey = yb.add(By.multiplyByFloats(Uy, bb, Ky)),
                qb = yb.add(By.multiplyByFloats(Uy + 1, bb + 1, Ky + 1)),
                sy = new fy(ey, qb, hy, Zy + 1, cb, oy);
              sy.addEntries(Wy), Py.blocks.push(sy)
            }
      }
    }
  },
  40090: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => By
    });
    var Uy = Wy(38569),
      hy = Wy(35861),
      fy = Wy(38944),
      Zy = Wy(40015),
      cb = Wy(38649),
      Py = Wy(35886),
      oy = Wy(40083);
    class By {
      constructor(yb) {
        this.name = cb.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Zy.E(hy.n.Zero(), new hy.n(1, 1, 1)), (yb = yb || Py.c.LastCreatedScene) && (this.Pf = yb, this.Pf.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Pf.getActiveSubMeshCandidates = yb => this.getActiveSubMeshCandidates(yb), this.Pf.getCollidingSubMeshCandidates = (yb, bb) => this.getCollidingSubMeshCandidates(yb, bb), this.Pf.getIntersectingSubMeshCandidates = (yb, bb) => this.getIntersectingSubMeshCandidates(yb, bb))
      }
      register() {
        this.Pf.onMeshRemovedObservable.add((yb => {
          const bb = this.Pf.selectionOctree;
          if (void 0 !== bb && null !== bb) {
            const Wy = bb.sBy.indexOf(yb); - 1 !== Wy && bb.sBy.splice(Wy, 1)
          }
        })), this.Pf.onMeshImportedObservable.add((yb => {
          const bb = this.Pf.selectionOctree;
          void 0 !== bb && null !== bb && bb.yKy(yb)
        }))
      }
      getActiveMeshCandidates() {
        return this.Pf.JBy?.select(this.Pf.frustumPlanes) || this.Pf._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(yb) {
        if (yb._submeshesOctree && yb.useOctreeForRenderingSelection) {
          return yb._submeshesOctree.select(this.Pf.frustumPlanes)
        }
        return this.Pf._getDefaultSubMeshCandidates(yb)
      }
      getIntersectingSubMeshCandidates(yb, bb) {
        if (yb._submeshesOctree && yb.useOctreeForPicking) {
          Zy.E.TransformToRef(bb, yb.getWorldMatrix(), this._tempRay);
          return yb._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Pf._getDefaultSubMeshCandidates(yb)
      }
      getCollidingSubMeshCandidates(yb, bb) {
        if (yb._submeshesOctree && yb.useOctreeForCollisions) {
          const Wy = bb._velocityWorldLength + Math.max(bb._radius.x, bb._radius.y, bb._radius.z);
          return yb._submeshesOctree.intersects(bb._basePointWorld, Wy)
        }
        return this.Pf._getDefaultSubMeshCandidates(yb)
      }
      rebuild() {}
      dispose() {}
    }
    let Ky = !1;
    Ky || (Ky = !0, Uy.g.prototype.createOrUpdateSelectionOctree = function() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        Wy = this._getComponent(cb.b.NAME_OCTREE);
      Wy || (Wy = new By(this), this.Foy(Wy)), this.JBy || (this.JBy = new oy.b(oy.b.CreationFuncForMeshes, yb, bb));
      const Uy = this.getWorldExtends();
      return this.JBy.update(Uy.min, Uy.max, this.meshes), this.JBy
    }, Object.defineProperty(Uy.g.prototype, "selectionOctree", {
      get: function() {
        return this.JBy
      },
      enumerable: !0,
      configurable: !0
    }), fy.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Wy = this.kWy();
      let Uy = Wy._getComponent(cb.b.NAME_OCTREE);
      Uy || (Uy = new By(Wy), Wy.Foy(Uy)), this._submeshesOctree || (this._submeshesOctree = new oy.b(oy.b.CreationFuncForSubMeshes, yb, bb)), this.computeWorldMatrix(!0);
      const hy = this.qUy().boundingBox;
      return this._submeshesOctree.update(hy.minimumWorld, hy.maximumWorld, this.vJ), this._submeshesOctree
    })
  },
  40015: (yb, bb, Wy) => {
    Wy.d(bb, {
      C: () => Gy,
      E: () => Ky,
      e: () => My,
      h: () => Sy,
      l: () => sy,
      o: () => qb,
      q: () => vb,
      u: () => Ry,
      x: () => gb,
      y: () => Oy
    });
    var Uy = Wy(35864),
      hy = Wy(35861),
      fy = Wy(35869),
      Zy = Wy(38789),
      cb = Wy(38611),
      Py = Wy(35886),
      oy = Wy(38670);
    const By = {
      internalPickerForMesh: void 0
    };
    class Ky {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Uy.e;
        this.origin = yb, this.direction = bb, this.length = Wy, this.epsilon = hy
      }
      clone() {
        return new Ky(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Uy = Ky._TmpVector3[0].vcy(yb.x - Wy, yb.y - Wy, yb.z - Wy),
          hy = Ky._TmpVector3[1].vcy(bb.x + Wy, bb.y + Wy, bb.z + Wy);
        let fy, Zy, cb, Py, oy = 0,
          By = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Uy.x || this.origin.x > hy.x) return !1
        } else if (fy = 1 / this.direction.x, Zy = (Uy.x - this.origin.x) * fy, cb = (hy.x - this.origin.x) * fy, cb === -1 / 0 && (cb = 1 / 0), Zy > cb && (Py = Zy, Zy = cb, cb = Py), oy = Math.max(Zy, oy), By = Math.min(cb, By), oy > By) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Uy.y || this.origin.y > hy.y) return !1
        } else if (fy = 1 / this.direction.y, Zy = (Uy.y - this.origin.y) * fy, cb = (hy.y - this.origin.y) * fy, cb === -1 / 0 && (cb = 1 / 0), Zy > cb && (Py = Zy, Zy = cb, cb = Py), oy = Math.max(Zy, oy), By = Math.min(cb, By), oy > By) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Uy.z || this.origin.z > hy.z) return !1
        } else if (fy = 1 / this.direction.z, Zy = (Uy.z - this.origin.z) * fy, cb = (hy.z - this.origin.z) * fy, cb === -1 / 0 && (cb = 1 / 0), Zy > cb && (Py = Zy, Zy = cb, cb = Py), oy = Math.max(Zy, oy), By = Math.min(cb, By), oy > By) return !1;
        return !0
      }
      intersectsBox(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(yb.minimum, yb.maximum, bb)
      }
      intersectsSphere(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = yb.center.x - this.origin.x,
          Uy = yb.center.y - this.origin.y,
          hy = yb.center.z - this.origin.z,
          fy = Wy * Wy + Uy * Uy + hy * hy,
          Zy = yb.radius + bb,
          cb = Zy * Zy;
        if (fy <= cb) return !0;
        const Py = Wy * this.direction.x + Uy * this.direction.y + hy * this.direction.z;
        if (Py < 0) return !1;
        return fy - Py * Py <= cb
      }
      intersectsTriangle(yb, bb, Wy) {
        const Uy = Ky._TmpVector3[0],
          fy = Ky._TmpVector3[1],
          cb = Ky._TmpVector3[2],
          Py = Ky._TmpVector3[3],
          oy = Ky._TmpVector3[4];
        bb.subtractToRef(yb, Uy), Wy.subtractToRef(yb, fy), hy.n.CrossToRef(this.direction, fy, cb);
        const By = hy.n.Dot(Uy, cb);
        if (0 === By) return null;
        const ey = 1 / By;
        this.origin.subtractToRef(yb, Py);
        const qb = hy.n.Dot(Py, cb) * ey;
        if (qb < -this.epsilon || qb > 1 + this.epsilon) return null;
        hy.n.CrossToRef(Py, Uy, oy);
        const sy = hy.n.Dot(this.direction, oy) * ey;
        if (sy < -this.epsilon || qb + sy > 1 + this.epsilon) return null;
        const Sy = hy.n.Dot(fy, oy) * ey;
        return Sy > this.length || Sy < 0 ? null : new Zy.d(1 - qb - sy, qb, Sy)
      }
      intersectsPlane(yb) {
        let bb;
        const Wy = hy.n.Dot(yb.normal, this.direction);
        if (Math.abs(Wy) < 9.99999997475243e-7) return null;
        {
          const Uy = hy.n.Dot(yb.normal, this.origin);
          return bb = (-yb.d - Uy) / Wy, bb < 0 ? bb < -9.99999997475243e-7 ? null : 0 : bb
        }
      }
      intersectsAxis(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (yb) {
          case "y": {
            const yb = (this.origin.y - bb) / this.direction.y;
            return yb > 0 ? null : new hy.n(this.origin.x + this.direction.x * -yb, bb, this.origin.z + this.direction.z * -yb)
          }
          case "x": {
            const yb = (this.origin.x - bb) / this.direction.x;
            return yb > 0 ? null : new hy.n(bb, this.origin.y + this.direction.y * -yb, this.origin.z + this.direction.z * -yb)
          }
          case "z": {
            const yb = (this.origin.z - bb) / this.direction.z;
            return yb > 0 ? null : new hy.n(this.origin.x + this.direction.x * -yb, this.origin.y + this.direction.y * -yb, bb)
          }
          default:
            return null
        }
      }
      QBy(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fy = arguments.length > 4 ? arguments[4] : void 0,
          Zy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const cb = hy.j.Matrix[0];
        return yb.getWorldMatrix().invertToRef(cb), this._tmpRay ? Ky.TransformToRef(this, cb, this._tmpRay) : this._tmpRay = Ky.Transform(this, cb), yb.intersects(this._tmpRay, bb, Wy, Uy, fy, Zy)
      }
      intersectsMeshes(yb, bb, Wy) {
        Wy ? Wy.length = 0 : Wy = [];
        for (let Uy = 0; Uy < yb.length; Uy++) {
          const hy = this.QBy(yb[Uy], bb);
          hy.hit && Wy.push(hy)
        }
        return Wy.sort(this._comparePickingInfo), Wy
      }
      _comparePickingInfo(yb, bb) {
        return yb.distance < bb.distance ? -1 : yb.distance > bb.distance ? 1 : 0
      }
      intersectionSegment(yb, bb, Wy) {
        const Uy = this.origin,
          fy = hy.j.dU[0],
          Zy = hy.j.dU[1],
          cb = hy.j.dU[2],
          Py = hy.j.dU[3];
        bb.subtractToRef(yb, fy), this.direction.scaleToRef(Ky._Rayl, cb), Uy.addToRef(cb, Zy), yb.subtractToRef(Uy, Py);
        const oy = hy.n.Dot(fy, fy),
          By = hy.n.Dot(fy, cb),
          ey = hy.n.Dot(cb, cb),
          qb = hy.n.Dot(fy, Py),
          sy = hy.n.Dot(cb, Py),
          Sy = oy * ey - By * By;
        let Ey, ly, mb = Sy,
          Cy = Sy;
        Sy < Ky._Smallnum ? (Ey = 0, mb = 1, ly = sy, Cy = ey) : (Ey = By * sy - ey * qb, ly = oy * sy - By * qb, Ey < 0 ? (Ey = 0, ly = sy, Cy = ey) : Ey > mb && (Ey = mb, ly = sy + By, Cy = ey)), ly < 0 ? (ly = 0, -qb < 0 ? Ey = 0 : -qb > oy ? Ey = mb : (Ey = -qb, mb = oy)) : ly > Cy && (ly = Cy, -qb + By < 0 ? Ey = 0 : -qb + By > oy ? Ey = mb : (Ey = -qb + By, mb = oy));
        const Ty = Math.abs(Ey) < Ky._Smallnum ? 0 : Ey / mb,
          Vy = Math.abs(ly) < Ky._Smallnum ? 0 : ly / Cy,
          Jy = hy.j.dU[4];
        cb.scaleToRef(Vy, Jy);
        const gb = hy.j.dU[5];
        fy.scaleToRef(Ty, gb), gb.addInPlace(Py);
        const Gy = hy.j.dU[6];
        gb.subtractToRef(Jy, Gy);
        return Vy > 0 && Vy <= this.length && Gy.lengthSquared() < Wy * Wy ? gb.length() : -1
      }
      update(yb, bb, Wy, Uy, fy, Zy, cb) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Ky._RayDistant || (Ky._RayDistant = Ky.Zero()), Ky._RayDistant.unprojectRayToRef(yb, bb, Wy, Uy, hy.c.IdentityReadOnly, Zy, cb);
          const Py = hy.j.Matrix[0];
          fy.invertToRef(Py), Ky.TransformToRef(Ky._RayDistant, Py, this)
        } else this.unprojectRayToRef(yb, bb, Wy, Uy, fy, Zy, cb);
        return this
      }
      static Zero() {
        return new Ky(hy.n.Zero(), hy.n.Zero())
      }
      static CreateNew(yb, bb, Wy, Uy, hy, fy, Zy) {
        return Ky.Zero().update(yb, bb, Wy, Uy, hy, fy, Zy)
      }
      static CreateNewFromTo(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hy.c.IdentityReadOnly;
        const Uy = new Ky(new hy.n(0, 0, 0), new hy.n(0, 0, 0));
        return Ky.CreateFromToToRef(yb, bb, Uy, Wy)
      }
      static CreateFromToToRef(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hy.c.IdentityReadOnly;
        Wy.origin.Coy(yb);
        const fy = bb.subtractToRef(yb, Wy.direction),
          Zy = Math.sqrt(fy.x * fy.x + fy.y * fy.y + fy.z * fy.z);
        return Wy.length = Zy, Wy.direction.normalize(), Ky.TransformToRef(Wy, Uy, Wy)
      }
      static Transform(yb, bb) {
        const Wy = new Ky(new hy.n(0, 0, 0), new hy.n(0, 0, 0));
        return Ky.TransformToRef(yb, bb, Wy), Wy
      }
      static TransformToRef(yb, bb, Wy) {
        hy.n.TransformCoordinatesToRef(yb.origin, bb, Wy.origin), hy.n.TransformNormalToRef(yb.direction, bb, Wy.direction), Wy.length = yb.length, Wy.epsilon = yb.epsilon;
        const Uy = Wy.direction,
          fy = Uy.length();
        if (0 !== fy && 1 !== fy) {
          const yb = 1 / fy;
          Uy.x *= yb, Uy.y *= yb, Uy.z *= yb, Wy.length *= fy
        }
        return Wy
      }
      unprojectRayToRef(yb, bb, Wy, Uy, fy, Zy, cb) {
        const oy = hy.j.Matrix[0];
        fy.multiplyToRef(Zy, oy), oy.multiplyToRef(cb, oy), oy.invert();
        const By = Py.c.LastCreatedEngine,
          Ky = hy.j.dU[0];
        Ky.x = yb / Wy * 2 - 1, Ky.y = -(bb / Uy * 2 - 1), Ky.z = By?.Aoy ? 1 : By?.isNDCHalfZRange ? 0 : -1;
        const ey = hy.j.dU[1].vcy(Ky.x, Ky.y, 1 - 1e-8),
          qb = hy.j.dU[2],
          sy = hy.j.dU[3];
        hy.n.TransformCoordinatesToRef(Ky, oy, qb), hy.n.TransformCoordinatesToRef(ey, oy, sy), this.origin.Coy(qb), sy.subtractToRef(qb, this.direction), this.direction.normalize()
      }
    }

    function ey(yb, bb, Wy, Uy, hy) {
      let fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Zy = Ky.Zero();
      return qb(yb, bb, Wy, Uy, Zy, hy, fy), Zy
    }

    function qb(yb, bb, Wy, Uy, fy, Zy) {
      let cb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Py = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const oy = yb.xh();
      if (!Zy && !(Zy = yb.activeCamera) && !(Zy = yb.cameraToUseForPointers)) return yb;
      const By = Zy.viewport,
        Ky = oy.getRenderHeight(),
        {
          x: ey,
          y: qb,
          width: sy,
          height: Sy
        } = By.toGlobal(oy.getRenderWidth(), Ky),
        Ey = 1 / oy.getHardwareScalingLevel();
      return bb = bb * Ey - ey, Wy = Wy * Ey - (Ky - qb - Sy), fy.update(bb, Wy, sy, Sy, Uy || hy.c.IdentityReadOnly, cb ? hy.c.IdentityReadOnly : Zy.getViewMatrix(), Zy.getProjectionMatrix(), Py), yb
    }

    function sy(yb, bb, Wy, Uy) {
      const hy = Ky.Zero();
      return Sy(yb, bb, Wy, hy, Uy), hy
    }

    function Sy(yb, bb, Wy, Uy, fy) {
      if (!cb.b) return yb;
      const Zy = yb.xh();
      if (!fy && !(fy = yb.activeCamera) && !(fy = yb.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Py = fy.viewport,
        oy = Zy.getRenderHeight(),
        {
          x: By,
          y: Ky,
          width: ey,
          height: qb
        } = Py.toGlobal(Zy.getRenderWidth(), oy),
        sy = hy.c.Identity(),
        Sy = 1 / Zy.getHardwareScalingLevel();
      return bb = bb * Sy - By, Wy = Wy * Sy - (oy - Ky - qb), Uy.update(bb, Wy, ey, qb, sy, sy, fy.getProjectionMatrix()), yb
    }

    function Ey(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
      return ly(yb, Wy, Uy, bb(Uy, Wy.enableDistantPicking), hy, fy, Zy, cb)
    }

    function ly(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
      const Py = bb.intersects(Uy, hy, Zy, fy, Wy, cb);
      return Py && Py.hit ? !hy && null != yb && Py.distance >= yb.distance ? null : Py : null
    }

    function mb(yb, bb) {
      return "InstancedLinesMesh" === yb || "LinesMesh" === yb ? bb.intersectionThreshold : 0
    }

    function Cy(yb) {
      const bb = yb.getClassName();
      if ("GreasedLineMesh" === bb) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const Wy = yb.rawBoundingInfo;
      return {
        rawBoundingInfo: Wy,
        intersectionThreshold: Wy ? mb(bb, yb) : 0
      }
    }

    function Ty(yb, bb, Wy, Uy, hy) {
      const fy = yb(Wy, bb.enableDistantPicking);
      return fy.intersectsSphere(Uy.GBy, hy) && fy.intersectsBox(Uy.boundingBox, hy) ? fy : null
    }

    function Vy(yb, bb, Wy, Uy, fy, Zy) {
      let Py = null;
      const oy = !!(yb.activeCameras && yb.activeCameras.length > 1 && yb.cameraToUseForPointers !== yb.activeCamera),
        Ky = yb.cameraToUseForPointers || yb.activeCamera,
        ey = By.internalPickerForMesh || Ey,
        qb = ey === Ey;
      for (let cb = 0; cb < yb.meshes.length; cb++) {
        const By = yb.meshes[cb];
        if (Wy) {
          if (!Wy(By, -1)) continue
        } else if (!By.isEnabled() || !By.isVisible || !By.Kf) continue;
        const sy = oy && By.isWorldMatrixCameraDependent(),
          Sy = By.computeWorldMatrix(sy, Ky);
        if (By.hasThinInstances && By.sPy) {
          const yb = ey(Py, bb, By, Sy, !0, !0, Zy);
          if (yb) {
            if (fy) return yb;
            const {
              rawBoundingInfo: cb,
              intersectionThreshold: oy
            } = Cy(By), Ky = By._thinInstanceDataStorage.matrixData;
            if (Ky) {
              const yb = hy.j.Matrix[0],
                sy = hy.j.Matrix[1],
                Ey = Math.min(By.ZZy, Ky.length >> 4);
              for (let mb = 0; mb < Ey; mb++) {
                if (Wy && !Wy(By, mb)) continue;
                hy.c.FromArrayToRef(Ky, mb << 4, yb), yb.multiplyToRef(Sy, sy);
                const Ey = qb && cb ? Ty(bb, By, sy, cb, oy) : null;
                if (qb && cb && !Ey) continue;
                const Cy = qb && Ey ? ly(Py, By, sy, Ey, Uy, fy, Zy, !0) : ey(Py, bb, By, sy, Uy, fy, Zy, !0);
                if (Cy && (Py = Cy, Py.thinInstanceIndex = mb, Uy)) return Py
              }
            }
          }
        } else {
          const yb = ey(Py, bb, By, Sy, Uy, fy, Zy);
          if (yb && (Py = yb, Uy)) return Py
        }
      }
      return Py || new cb.b
    }

    function Jy(yb, bb, Wy, Uy) {
      if (!cb.b) return null;
      const fy = [],
        Zy = !!(yb.activeCameras && yb.activeCameras.length > 1 && yb.cameraToUseForPointers !== yb.activeCamera),
        Py = yb.cameraToUseForPointers || yb.activeCamera,
        oy = By.internalPickerForMesh || Ey,
        Ky = oy === Ey;
      for (let cb = 0; cb < yb.meshes.length; cb++) {
        const By = yb.meshes[cb];
        if (Wy) {
          if (!Wy(By, -1)) continue
        } else if (!By.isEnabled() || !By.isVisible || !By.Kf) continue;
        const ey = Zy && By.isWorldMatrixCameraDependent(),
          qb = By.computeWorldMatrix(ey, Py);
        if (By.hasThinInstances && By.sPy) {
          if (oy(null, bb, By, qb, !0, !0, Uy)) {
            const {
              rawBoundingInfo: yb,
              intersectionThreshold: Zy
            } = Cy(By), cb = By._thinInstanceDataStorage.matrixData;
            if (cb) {
              const Py = hy.j.Matrix[0],
                ey = hy.j.Matrix[1],
                sy = Math.min(By.ZZy, cb.length >> 4);
              for (let Sy = 0; Sy < sy; Sy++) {
                if (Wy && !Wy(By, Sy)) continue;
                hy.c.FromArrayToRef(cb, Sy << 4, Py), Py.multiplyToRef(qb, ey);
                const sy = Ky && yb ? Ty(bb, By, ey, yb, Zy) : null;
                if (Ky && yb && !sy) continue;
                const Ey = Ky && sy ? ly(null, By, ey, sy, !1, !1, Uy, !0) : oy(null, bb, By, ey, !1, !1, Uy, !0);
                Ey && (Ey.thinInstanceIndex = Sy, fy.push(Ey))
              }
            }
          }
        } else {
          const yb = oy(null, bb, By, qb, !1, !1, Uy);
          yb && fy.push(yb)
        }
      }
      return fy
    }

    function gb(yb, bb, Wy, Uy, fy, Zy) {
      if (!cb.b) return null;
      const Py = Vy(yb, (Uy => (yb._tempPickingRay || (yb._tempPickingRay = Ky.Zero()), qb(yb, bb, Wy, Uy, yb._tempPickingRay, Zy || null), yb._tempPickingRay)), Uy, fy, !0);
      return Py && (Py.ray = ey(yb, bb, Wy, hy.c.Identity(), Zy || null)), Py
    }

    function Gy(yb, bb, Wy, Uy, fy, Zy, cb) {
      const Py = Vy(yb, ((Uy, hy) => (yb._tempPickingRay || (yb._tempPickingRay = Ky.Zero()), qb(yb, bb, Wy, Uy, yb._tempPickingRay, Zy || null, !1, hy), yb._tempPickingRay)), Uy, fy, !1, cb);
      return Py && (Py.ray = ey(yb, bb, Wy, hy.c.Identity(), Zy || null)), Py
    }

    function Oy(yb, bb, Wy, Uy, fy) {
      const Zy = Vy(yb, (Wy => (yb._pickWithRayInverseMatrix || (yb._pickWithRayInverseMatrix = hy.c.Identity()), Wy.invertToRef(yb._pickWithRayInverseMatrix), yb._cachedRayForTransform || (yb._cachedRayForTransform = Ky.Zero()), Ky.TransformToRef(bb, yb._pickWithRayInverseMatrix, yb._cachedRayForTransform), yb._cachedRayForTransform)), Wy, Uy, !1, fy);
      return Zy && (Zy.ray = bb), Zy
    }

    function Ry(yb, bb, Wy, Uy, hy, fy) {
      return Jy(yb, (Uy => ey(yb, bb, Wy, Uy, hy || null)), Uy, fy)
    }

    function vb(yb, bb, Wy, Uy) {
      return Jy(yb, (Wy => (yb._pickWithRayInverseMatrix || (yb._pickWithRayInverseMatrix = hy.c.Identity()), Wy.invertToRef(yb._pickWithRayInverseMatrix), yb._cachedRayForTransform || (yb._cachedRayForTransform = Ky.Zero()), Ky.TransformToRef(bb, yb._pickWithRayInverseMatrix, yb._cachedRayForTransform), yb._cachedRayForTransform)), Wy, Uy)
    }

    function ib(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Uy = arguments.length > 3 ? arguments[3] : void 0,
        fy = arguments.length > 4 ? arguments[4] : void 0;
      Uy || (Uy = yb.getWorldMatrix()), bb.length = Wy, fy ? bb.origin.Coy(fy) : bb.origin.Coy(yb.position);
      const Zy = hy.j.dU[2];
      Zy.set(0, 0, yb._scene.useRightHandedSystem ? -1 : 1);
      const cb = hy.j.dU[3];
      return hy.n.TransformNormalToRef(Zy, Uy, cb), hy.n.NormalizeToRef(cb, bb.direction), bb
    }

    function My(yb, bb) {
      bb && (bb.prototype.getForwardRay = function() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        return ib(this, new Ky(hy.n.Zero(), hy.n.Zero(), yb), yb, bb, Wy)
      }, bb.prototype.getForwardRayToRef = function(yb) {
        return ib(this, yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), yb && (oy.d._IsPickingAvailable = !0, yb.prototype.createPickingRay = function(yb, bb, Wy, Uy) {
        return ey(this, yb, bb, Wy, Uy, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Ky._TmpVector3 = (0, fy.c)(6, hy.n.Zero), Ky._RayDistant = Ky.Zero(), Ky._Smallnum = 1e-8, Ky._Rayl = 1e9
  },
  40010: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy.E
    });
    var Uy = Wy(38569),
      hy = Wy(38694),
      fy = Wy(40015);
    let Zy = !1;
    Zy || (Zy = !0, (0, fy.e)(Uy.g, hy.b), Uy.g.prototype.createPickingRayToRef = function(yb, bb, Wy, Uy, hy) {
      let Zy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        cb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, fy.o)(this, yb, bb, Wy, Uy, hy, Zy, cb)
    }, Uy.g.prototype.createPickingRayInCameraSpace = function(yb, bb, Wy) {
      return (0, fy.l)(this, yb, bb, Wy)
    }, Uy.g.prototype.createPickingRayInCameraSpaceToRef = function(yb, bb, Wy, Uy) {
      return (0, fy.h)(this, yb, bb, Wy, Uy)
    }, Uy.g.prototype.pickWithBoundingInfo = function(yb, bb, Wy, Uy, hy) {
      return (0, fy.x)(this, yb, bb, Wy, Uy, hy)
    }, Uy.g.prototype.cU = function(yb, bb, Wy, Uy, hy, Zy) {
      let cb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, fy.C)(this, yb, bb, Wy, Uy, hy, Zy, cb)
    }, Uy.g.prototype.pickWithRay = function(yb, bb, Wy, Uy) {
      return (0, fy.y)(this, yb, bb, Wy, Uy)
    }, Uy.g.prototype.multiPick = function(yb, bb, Wy, Uy, hy) {
      return (0, fy.u)(this, yb, bb, Wy, Uy, hy)
    }, Uy.g.prototype.multiPickWithRay = function(yb, bb, Wy) {
      return (0, fy.q)(this, yb, bb, Wy)
    })
  },
  40020: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => By
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35861),
      Zy = Wy(38742),
      cb = Wy(40028),
      Py = Wy(38697),
      oy = Wy(35909);
    let By = (() => {
        var yb;
        let bb, Wy, Py, oy, By, Ky, ey, qb, sy = cb.b,
          Sy = [],
          Ey = [],
          ly = [],
          mb = [],
          Cy = [],
          Ty = [],
          Vy = [],
          Jy = [],
          gb = [],
          Gy = [],
          Oy = [],
          Ry = [],
          vb = [];
        return yb = class extends sy {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(yb) {
            this._shadowFrustumSize = yb, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(yb) {
            this._shadowOrthoScale = yb, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(yb) {
            this._orthoLeft = yb
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(yb) {
            this._orthoRight = yb
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(yb) {
            this._orthoTop = yb
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(yb) {
            this._orthoBottom = yb
          }
          constructor(yb, bb, Wy, hy) {
            super(yb, Wy, hy), this._shadowFrustumSize = ((0, Uy.l)(this, Sy), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Uy.l)(this, Ey, !0), this.autoCalcShadowZBounds = ((0, Uy.l)(this, ly), (0, Uy.l)(this, mb, !1)), this._orthoLeft = ((0, Uy.l)(this, Cy), (0, Uy.l)(this, Ty, Number.MAX_VALUE)), this._orthoRight = ((0, Uy.l)(this, Vy), (0, Uy.l)(this, Jy, Number.MIN_VALUE)), this._orthoTop = ((0, Uy.l)(this, gb), (0, Uy.l)(this, Gy, Number.MIN_VALUE)), this._orthoBottom = ((0, Uy.l)(this, Oy), (0, Uy.l)(this, Ry, Number.MAX_VALUE)), (0, Uy.l)(this, vb), this.position = bb.scale(-1), this.direction = bb
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Zy.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(yb, bb, Wy) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(yb) : this._setDefaultAutoExtendShadowProjectionMatrix(yb, bb, Wy)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(yb) {
            const bb = this.kWy().activeCamera;
            fy.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : bb ? bb.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : bb ? bb.maxZ : 1e4, yb, this.kWy().xh().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(yb, bb, Wy) {
            const Uy = this.kWy().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const yb = fy.n.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Uy = Number.MAX_VALUE,
                hy = -Number.MAX_VALUE;
              for (let Zy = 0; Zy < Wy.length; Zy++) {
                const cb = Wy[Zy];
                if (!cb) continue;
                const Py = cb.qUy().boundingBox;
                for (let Wy = 0; Wy < Py.vectorsWorld.length; Wy++) fy.n.TransformCoordinatesToRef(Py.vectorsWorld[Wy], bb, yb), yb.x < this._orthoLeft && (this._orthoLeft = yb.x), yb.y < this._orthoBottom && (this._orthoBottom = yb.y), yb.x > this._orthoRight && (this._orthoRight = yb.x), yb.y > this._orthoTop && (this._orthoTop = yb.y), this.autoCalcShadowZBounds && (yb.z < Uy && (Uy = yb.z), yb.z > hy && (hy = yb.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Uy, this._shadowMaxZ = hy)
            }
            const hy = this._orthoRight - this._orthoLeft,
              Zy = this._orthoTop - this._orthoBottom,
              cb = void 0 !== this.shadowMinZ ? this.shadowMinZ : Uy?.minZ || 0,
              Py = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Uy?.maxZ || 1e4,
              oy = this.kWy().xh().Aoy;
            fy.c.OrthoOffCenterLHToRef(this._orthoLeft - hy * this.shadowOrthoScale, this._orthoRight + hy * this.shadowOrthoScale, this._orthoBottom - Zy * this.shadowOrthoScale, this._orthoTop + Zy * this.shadowOrthoScale, oy ? Py : cb, oy ? cb : Py, yb, this.kWy().xh().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(yb, bb) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, bb), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, bb), this)
          }
          transferToNodeMaterialEffect(yb, bb) {
            return this.computeTransformedInformation() ? (yb.setFloat3(bb, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (yb.setFloat3(bb, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(yb) {
            const bb = this._scene.xh();
            return !bb.Aoy && bb.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(yb) {
            const bb = this._scene.xh();
            return bb.Aoy && bb.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(yb, bb) {
            yb["DIRLIGHT" + bb] = !0
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(sy[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.T)()], Wy = [(0, hy.T)()], Py = [(0, hy.T)()], oy = [(0, hy.T)()], By = [(0, hy.T)("orthoLeft")], Ky = [(0, hy.T)("orthoRight")], ey = [(0, hy.T)("orthoTop")], qb = [(0, hy.T)("orthoBottom")], (0, Uy.j)(yb, null, bb, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: yb => "shadowFrustumSize" in yb,
              get: yb => yb.shadowFrustumSize
            },
            metadata: fy
          }, null, Sy), (0, Uy.j)(yb, null, Wy, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: yb => "shadowOrthoScale" in yb,
              get: yb => yb.shadowOrthoScale
            },
            metadata: fy
          }, null, Sy), (0, Uy.j)(null, null, Py, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: yb => "autoUpdateExtends" in yb,
              get: yb => yb.autoUpdateExtends,
              set: (yb, bb) => {
                yb.autoUpdateExtends = bb
              }
            },
            metadata: fy
          }, Ey, ly), (0, Uy.j)(null, null, oy, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: yb => "autoCalcShadowZBounds" in yb,
              get: yb => yb.autoCalcShadowZBounds,
              set: (yb, bb) => {
                yb.autoCalcShadowZBounds = bb
              }
            },
            metadata: fy
          }, mb, Cy), (0, Uy.j)(null, null, By, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: yb => "_orthoLeft" in yb,
              get: yb => yb._orthoLeft,
              set: (yb, bb) => {
                yb._orthoLeft = bb
              }
            },
            metadata: fy
          }, Ty, Vy), (0, Uy.j)(null, null, Ky, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: yb => "_orthoRight" in yb,
              get: yb => yb._orthoRight,
              set: (yb, bb) => {
                yb._orthoRight = bb
              }
            },
            metadata: fy
          }, Jy, gb), (0, Uy.j)(null, null, ey, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: yb => "_orthoTop" in yb,
              get: yb => yb._orthoTop,
              set: (yb, bb) => {
                yb._orthoTop = bb
              }
            },
            metadata: fy
          }, Gy, Oy), (0, Uy.j)(null, null, qb, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: yb => "_orthoBottom" in yb,
              get: yb => yb._orthoBottom,
              set: (yb, bb) => {
                yb._orthoBottom = bb
              }
            },
            metadata: fy
          }, Ry, vb), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb
      })(),
      Ky = !1;
    Ky || (Ky = !0, Py.b.AddNodeConstructor("Light_Type_1", ((yb, bb) => () => new By(yb, fy.n.Zero(), bb))), (0, oy.e)("BABYLON.DirectionalLight", By))
  },
  40043: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => wb
    });
    var Uy = Wy(37380),
      hy = Wy(35893),
      fy = Wy(35861),
      Zy = Wy(38620),
      cb = Wy(40051),
      Py = Wy(35886),
      oy = Wy(38770),
      By = Wy(35919),
      Ky = Wy(37384),
      ey = Wy(37346),
      qb = Wy(35902);
    class sy {
      constructor() {
        this.direction1 = new fy.n(0, 1, 0), this.direction2 = new fy.n(0, 1, 0)
      }
      startDirectionFunction(yb, bb, Wy, Uy) {
        const hy = (0, qb.RandomRange)(this.direction1.x, this.direction2.x),
          Zy = (0, qb.RandomRange)(this.direction1.y, this.direction2.y),
          cb = (0, qb.RandomRange)(this.direction1.z, this.direction2.z);
        Uy ? bb.vcy(hy, Zy, cb) : fy.n.TransformNormalFromFloatsToRef(hy, Zy, cb, yb, bb)
      }
      startPositionFunction(yb, bb, Wy, Uy) {
        Uy ? bb.vcy(0, 0, 0) : fy.n.TransformCoordinatesFromFloatsToRef(0, 0, 0, yb, bb)
      }
      clone() {
        const yb = new sy;
        return ey.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setVector3("direction1", this.direction1), yb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(yb) {
        yb.addUniform("direction1", 3), yb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const yb = {};
        return yb.type = this.getClassName(), yb.direction1 = this.direction1.hBy(), yb.direction2 = this.direction2.hBy(), yb
      }
      parse(yb) {
        fy.n.FromArrayToRef(yb.direction1, 0, this.direction1), fy.n.FromArrayToRef(yb.direction2, 0, this.direction2)
      }
    }
    class Sy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = yb, this.radiusRange = bb, this.directionRandomizer = Wy
      }
      startDirectionFunction(yb, bb, Wy, Uy) {
        const hy = Wy.position.subtract(yb.getTranslation()).normalize(),
          Zy = (0, qb.RandomRange)(0, this.directionRandomizer),
          cb = (0, qb.RandomRange)(0, this.directionRandomizer),
          Py = (0, qb.RandomRange)(0, this.directionRandomizer);
        hy.x += Zy, hy.y += cb, hy.z += Py, hy.normalize(), Uy ? bb.Coy(hy) : fy.n.TransformNormalFromFloatsToRef(hy.x, hy.y, hy.z, yb, bb)
      }
      startPositionFunction(yb, bb, Wy, Uy) {
        const hy = this.radius - (0, qb.RandomRange)(0, this.radius * this.radiusRange),
          Zy = (0, qb.RandomRange)(0, 1),
          cb = (0, qb.RandomRange)(0, 2 * Math.PI),
          Py = Math.acos(2 * Zy - 1),
          oy = hy * Math.cos(cb) * Math.sin(Py),
          By = hy * Math.cos(Py),
          Ky = hy * Math.sin(cb) * Math.sin(Py);
        Uy ? bb.vcy(oy, Math.abs(By), Ky) : fy.n.TransformCoordinatesFromFloatsToRef(oy, Math.abs(By), Ky, yb, bb)
      }
      clone() {
        const yb = new Sy(this.radius, this.directionRandomizer);
        return ey.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setFloat("radius", this.radius), yb.setFloat("radiusRange", this.radiusRange), yb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(yb) {
        yb.addUniform("radius", 1), yb.addUniform("radiusRange", 1), yb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const yb = {};
        return yb.type = this.getClassName(), yb.radius = this.radius, yb.radiusRange = this.radiusRange, yb.directionRandomizer = this.directionRandomizer, yb
      }
      parse(yb) {
        this.radius = yb.radius, this.radiusRange = yb.radiusRange, this.directionRandomizer = yb.directionRandomizer
      }
    }
    class Ey {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = yb, this.radiusRange = bb, this.directionRandomizer = Wy
      }
      startDirectionFunction(yb, bb, Wy, Uy) {
        const hy = Wy.position.subtract(yb.getTranslation()).normalize(),
          Zy = (0, qb.RandomRange)(0, this.directionRandomizer),
          cb = (0, qb.RandomRange)(0, this.directionRandomizer),
          Py = (0, qb.RandomRange)(0, this.directionRandomizer);
        hy.x += Zy, hy.y += cb, hy.z += Py, hy.normalize(), Uy ? bb.Coy(hy) : fy.n.TransformNormalFromFloatsToRef(hy.x, hy.y, hy.z, yb, bb)
      }
      startPositionFunction(yb, bb, Wy, Uy) {
        const hy = this.radius - (0, qb.RandomRange)(0, this.radius * this.radiusRange),
          Zy = (0, qb.RandomRange)(0, 1),
          cb = (0, qb.RandomRange)(0, 2 * Math.PI),
          Py = Math.acos(2 * Zy - 1),
          oy = hy * Math.cos(cb) * Math.sin(Py),
          By = hy * Math.cos(Py),
          Ky = hy * Math.sin(cb) * Math.sin(Py);
        Uy ? bb.vcy(oy, By, Ky) : fy.n.TransformCoordinatesFromFloatsToRef(oy, By, Ky, yb, bb)
      }
      clone() {
        const yb = new Ey(this.radius, this.directionRandomizer);
        return ey.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setFloat("radius", this.radius), yb.setFloat("radiusRange", this.radiusRange), yb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(yb) {
        yb.addUniform("radius", 1), yb.addUniform("radiusRange", 1), yb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const yb = {};
        return yb.type = this.getClassName(), yb.radius = this.radius, yb.radiusRange = this.radiusRange, yb.directionRandomizer = this.directionRandomizer, yb
      }
      parse(yb) {
        this.radius = yb.radius, this.radiusRange = yb.radiusRange, this.directionRandomizer = yb.directionRandomizer
      }
    }
    class ly extends Ey {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new fy.n(0, 1, 0),
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fy.n(0, 1, 0);
        super(yb), this.direction1 = bb, this.direction2 = Wy
      }
      startDirectionFunction(yb, bb, Wy, Uy) {
        const hy = (0, qb.RandomRange)(this.direction1.x, this.direction2.x),
          Zy = (0, qb.RandomRange)(this.direction1.y, this.direction2.y),
          cb = (0, qb.RandomRange)(this.direction1.z, this.direction2.z);
        Uy ? bb.vcy(hy, Zy, cb) : fy.n.TransformNormalFromFloatsToRef(hy, Zy, cb, yb, bb)
      }
      clone() {
        const yb = new ly(this.radius, this.direction1, this.direction2);
        return ey.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setFloat("radius", this.radius), yb.setFloat("radiusRange", this.radiusRange), yb.setVector3("direction1", this.direction1), yb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(yb) {
        yb.addUniform("radius", 1), yb.addUniform("radiusRange", 1), yb.addUniform("direction1", 3), yb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const yb = super.serialize();
        return yb.direction1 = this.direction1.hBy(), yb.direction2 = this.direction2.hBy(), yb
      }
      parse(yb) {
        super.parse(yb), fy.n.FromArrayToRef(yb.direction1, 0, this.direction1), fy.n.FromArrayToRef(yb.direction2, 0, this.direction2)
      }
    }
    var mb = Wy(37337);
    class Cy {
      get radius() {
        return this._radius
      }
      set radius(yb) {
        this._radius = yb, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(yb) {
        this._angle = yb, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = Wy, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = bb, this.radius = yb
      }
      startDirectionFunction(yb, bb, Wy, Uy) {
        const hy = Wy.position.subtract(yb.getTranslation()).normalize(),
          Zy = (0, qb.RandomRange)(0, this.directionRandomizer),
          cb = (0, qb.RandomRange)(0, this.directionRandomizer),
          Py = (0, qb.RandomRange)(0, this.directionRandomizer);
        hy.x += Zy, hy.y += cb, hy.z += Py, hy.normalize(), Uy ? bb.Coy(hy) : fy.n.TransformNormalFromFloatsToRef(hy.x, hy.y, hy.z, yb, bb)
      }
      startPositionFunction(yb, bb, Wy, Uy) {
        const hy = (0, qb.RandomRange)(0, 2 * Math.PI);
        let Zy;
        this.emitFromSpawnPointOnly ? Zy = 1e-4 : (Zy = (0, qb.RandomRange)(0, this.heightRange), Zy = 1 - Zy * Zy);
        let cb = this._radius - (0, qb.RandomRange)(0, this._radius * this.radiusRange);
        cb *= Zy;
        const Py = cb * Math.sin(hy),
          oy = cb * Math.cos(hy),
          By = Zy * this._height;
        if (Uy) return bb.x = Py, bb.y = By, void(bb.z = oy);
        fy.n.TransformCoordinatesFromFloatsToRef(Py, By, oy, yb, bb)
      }
      clone() {
        const yb = new Cy(this._radius, this._angle, this.directionRandomizer);
        return ey.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setFloat2("radius", this._radius, this.radiusRange), yb.setFloat("coneAngle", this._angle), yb.setFloat2("height", this._height, this.heightRange), yb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(yb) {
        yb.addUniform("radius", 2), yb.addUniform("coneAngle", 1), yb.addUniform("height", 2), yb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let yb = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (yb += "\n#define CONEEMITTERSPAWNPOINT"), yb
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const yb = {};
        return yb.type = this.getClassName(), yb.radius = this._radius, yb.angle = this._angle, yb.directionRandomizer = this.directionRandomizer, yb.radiusRange = this.radiusRange, yb.heightRange = this.heightRange, yb.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, yb
      }
      parse(yb) {
        this.radius = yb.radius, this.angle = yb.angle, this.directionRandomizer = yb.directionRandomizer, this.radiusRange = void 0 !== yb.radiusRange ? yb.radiusRange : 1, this.heightRange = void 0 !== yb.heightRange ? yb.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== yb.emitFromSpawnPointOnly && yb.emitFromSpawnPointOnly
      }
    }
    class Ty extends Cy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fy.n(0, 1, 0),
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fy.n(0, 1, 0);
        super(yb, bb), this.direction1 = Wy, this.direction2 = Uy
      }
      startDirectionFunction(yb, bb, Wy, Uy) {
        const hy = (0, qb.RandomRange)(this.direction1.x, this.direction2.x),
          Zy = (0, qb.RandomRange)(this.direction1.y, this.direction2.y),
          cb = (0, qb.RandomRange)(this.direction1.z, this.direction2.z);
        Uy ? bb.vcy(hy, Zy, cb) : fy.n.TransformNormalFromFloatsToRef(hy, Zy, cb, yb, bb)
      }
      clone() {
        const yb = new Ty(this.radius, this.angle, this.direction1, this.direction2);
        return ey.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        super.applyToShader(yb), yb.setVector3("direction1", this.direction1), yb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(yb) {
        super.buildUniformLayout(yb), yb.addUniform("direction1", 3), yb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const yb = super.serialize();
        return yb.direction1 = this.direction1.hBy(), yb.direction2 = this.direction2.hBy(), yb
      }
      parse(yb) {
        super.parse(yb), fy.n.FromArrayToRef(yb.direction1, 0, this.direction1), fy.n.FromArrayToRef(yb.direction2, 0, this.direction2)
      }
    }
    class Vy {
      get mesh() {
        return this._mesh
      }
      set mesh(yb) {
        this._mesh !== yb && (this._mesh = yb, yb ? (this._indices = yb.Mqy(), this._positions = yb.getVerticesData(Zy.k.PositionKind), this._normals = yb.getVerticesData(Zy.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = fy.n.Zero(), this._mesh = null, this.direction1 = new fy.n(0, 1, 0), this.direction2 = new fy.n(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = yb
      }
      startDirectionFunction(yb, bb, Wy, Uy) {
        if (this.useMeshNormalsForDirection && this._normals) return void fy.n.TransformNormalToRef(this._storedNormal, yb, bb);
        const hy = (0, qb.RandomRange)(this.direction1.x, this.direction2.x),
          Zy = (0, qb.RandomRange)(this.direction1.y, this.direction2.y),
          cb = (0, qb.RandomRange)(this.direction1.z, this.direction2.z);
        Uy ? bb.vcy(hy, Zy, cb) : fy.n.TransformNormalFromFloatsToRef(hy, Zy, cb, yb, bb)
      }
      startPositionFunction(yb, bb, Wy, Uy) {
        if (!this._indices || !this._positions) return;
        const hy = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Zy = Math.random(),
          cb = Math.random() * (1 - Zy),
          Py = 1 - Zy - cb,
          oy = this._indices[hy],
          By = this._indices[hy + 1],
          Ky = this._indices[hy + 2],
          ey = fy.j.dU[0],
          qb = fy.j.dU[1],
          sy = fy.j.dU[2],
          Sy = fy.j.dU[3];
        fy.n.FromArrayToRef(this._positions, 3 * oy, ey), fy.n.FromArrayToRef(this._positions, 3 * By, qb), fy.n.FromArrayToRef(this._positions, 3 * Ky, sy), Sy.x = Zy * ey.x + cb * qb.x + Py * sy.x, Sy.y = Zy * ey.y + cb * qb.y + Py * sy.y, Sy.z = Zy * ey.z + cb * qb.z + Py * sy.z, Uy ? bb.vcy(Sy.x, Sy.y, Sy.z) : fy.n.TransformCoordinatesFromFloatsToRef(Sy.x, Sy.y, Sy.z, yb, bb), this.useMeshNormalsForDirection && this._normals && (fy.n.FromArrayToRef(this._normals, 3 * oy, ey), fy.n.FromArrayToRef(this._normals, 3 * By, qb), fy.n.FromArrayToRef(this._normals, 3 * Ky, sy), this._storedNormal.x = Zy * ey.x + cb * qb.x + Py * sy.x, this._storedNormal.y = Zy * ey.y + cb * qb.y + Py * sy.y, this._storedNormal.z = Zy * ey.z + cb * qb.z + Py * sy.z)
      }
      clone() {
        const yb = new Vy(this.mesh);
        return ey.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setVector3("direction1", this.direction1), yb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(yb) {
        yb.addUniform("direction1", 3), yb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const yb = {};
        return yb.type = this.getClassName(), yb.direction1 = this.direction1.hBy(), yb.direction2 = this.direction2.hBy(), yb.meshId = this.mesh?.id, yb.useMeshNormalsForDirection = this.useMeshNormalsForDirection, yb
      }
      parse(yb, bb) {
        fy.n.FromArrayToRef(yb.direction1, 0, this.direction1), fy.n.FromArrayToRef(yb.direction2, 0, this.direction2), yb.meshId && bb && (this.mesh = bb.getLastMeshById(yb.meshId)), this.useMeshNormalsForDirection = yb.useMeshNormalsForDirection
      }
    }
    class Jy {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(yb) {
        this._targetStopDuration !== yb && (this._targetStopDuration = yb)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(yb) {
        this._noiseTexture !== yb && (this._noiseTexture = yb, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(yb) {
        this._attractors.push(yb)
      }
      removeAttractor(yb) {
        const bb = this._attractors.indexOf(yb); - 1 !== bb && this._attractors.splice(bb, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(yb) {
        this._animationSheetEnabled !== yb && (this._animationSheetEnabled = yb)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(yb) {
        this._isAnimationSheetEnabled != yb && (this._isAnimationSheetEnabled = yb, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(yb) {
        this._useLogarithmicDepth = yb && this.kWy().xh().getCaps().fragmentDepthSupported
      }
      kWy() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(yb) {
        switch (yb) {
          case Jy.BLENDMODE_MULTIPLYADD:
            return;
          case Jy.BLENDMODE_ADD:
            yb = 1;
            break;
          case Jy.BLENDMODE_ONEONE:
            yb = 6;
            break;
          case Jy.BLENDMODE_STANDARD:
            yb = 2;
            break;
          case Jy.BLENDMODE_MULTIPLY:
            yb = 4;
            break;
          case Jy.BLENDMODE_SUBTRACT:
            yb = 3
        }
        this._engine.setAlphaMode(yb)
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
      addEmitRateGradient(yb, bb, Wy) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, yb, bb, Wy), this
      }
      removeEmitRateGradient(yb) {
        return this._removeFactorGradient(this._emitRateGradients, yb), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : fy.n.Zero()
      }
      set direction1(yb) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = yb)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : fy.n.Zero()
      }
      set direction2(yb) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = yb)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : fy.n.Zero()
      }
      set minEmitBox(yb) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = yb)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : fy.n.Zero()
      }
      set maxEmitBox(yb) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = yb)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(yb) {
        this._billboardMode !== yb && (this._billboardMode = yb, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(yb) {
        this._isBillboardBased !== yb && (this._isBillboardBased = yb, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(yb) {
        this._attachImageProcessingConfiguration(yb)
      }
      _attachImageProcessingConfiguration(yb) {
        yb !== this._imageProcessingConfiguration && (!yb && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = yb)
      }
      _reset() {}
      _addFactorGradient(yb, bb, Wy, hy) {
        const fy = new Uy.g(bb, Wy, hy);
        yb.push(fy), yb.sort(((yb, bb) => yb.gradient < bb.gradient ? -1 : yb.gradient > bb.gradient ? 1 : 0))
      }
      _removeFactorGradient(yb, bb) {
        if (!yb) return;
        let Wy = 0;
        for (const Uy of yb) {
          if (Uy.gradient === bb) {
            yb.splice(Wy, 1);
            break
          }
          Wy++
        }
      }
      _removeGradientAndTexture(yb, bb, Wy) {
        if (!bb) return this;
        let Uy = 0;
        for (const hy of bb) {
          if (hy.gradient === yb) {
            bb.splice(Uy, 1);
            break
          }
          Uy++
        }
        return Wy && Wy.dispose(), this
      }
      constructor(yb) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = fy.n.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new fy.n(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = Jy.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new fy.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new fy.n(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = fy.n.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new By.e(1, 1, 1, 1), this.color2 = new By.e(1, 1, 1, 1), this.colorDead = new By.e(0, 0, 0, 1), this.textureMask = new By.e(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new oy.e, this.id = yb, this.name = yb
      }
      createPointEmitter(yb, bb) {
        const Wy = function(yb, bb) {
          const Wy = new sy;
          return Wy.direction1 = yb, Wy.direction2 = bb, Wy
        }(yb, bb);
        return this.particleEmitterType = Wy, Wy
      }
      createHemisphericEmitter() {
        const yb = function() {
          return new Sy(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = yb, yb
      }
      createSphereEmitter() {
        const yb = function() {
          return new Ey(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = yb, yb
      }
      createDirectedSphereEmitter() {
        const yb = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new fy.n(0, 1, 0),
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fy.n(0, 1, 0);
          return new ly(yb, bb, Wy)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new fy.n(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fy.n(0, 1, 0));
        return this.particleEmitterType = yb, yb
      }
      createCylinderEmitter() {
        const yb = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new mb.g(yb, bb, Wy, Uy)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = yb, yb
      }
      createDirectedCylinderEmitter() {
        const yb = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fy.n(0, 1, 0),
            hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new fy.n(0, 1, 0);
          return new mb.e(yb, bb, Wy, Uy, hy)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fy.n(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new fy.n(0, 1, 0));
        return this.particleEmitterType = yb, yb
      }
      createConeEmitter() {
        const yb = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Cy(yb, bb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = yb, yb
      }
      createDirectedConeEmitter() {
        const yb = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fy.n(0, 1, 0),
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fy.n(0, 1, 0);
          return new Ty(yb, bb, Wy, Uy)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fy.n(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fy.n(0, 1, 0));
        return this.particleEmitterType = yb, yb
      }
      createBoxEmitter(yb, bb, Wy, Uy) {
        const hy = new Ky.d;
        return this.particleEmitterType = hy, this.direction1 = yb, this.direction2 = bb, this.minEmitBox = Wy, this.maxEmitBox = Uy, hy
      }
      createMeshEmitter() {
        const yb = function() {
          return new Vy(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = yb, yb
      }
    }
    Jy.BLENDMODE_ONEONE = 0, Jy.BLENDMODE_STANDARD = 1, Jy.BLENDMODE_ADD = 2, Jy.BLENDMODE_MULTIPLY = 3, Jy.BLENDMODE_MULTIPLYADD = 4, Jy.BLENDMODE_SUBTRACT = -1;
    class gb {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new By.e(0, 0, 0, 0), this.currentColor2 = new By.e(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = fy.n.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class Gy {
      constructor(yb) {
        this.particleSystem = yb, this.position = fy.n.Zero(), this.direction = fy.n.Zero(), this.color = new By.e(0, 0, 0, 0), this.colorStep = new By.e(0, 0, 0, 0), this.initialColor = new By.e(0, 0, 0, 0), this.colorDead = new By.e(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new fy.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new gb, this.id = Gy._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let yb = this.age,
          bb = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === bb ? (bb = 1, yb = this._properties.randomCellOffset) : yb += this._properties.randomCellOffset);
        const Wy = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Uy;
        Uy = this._properties.initialSpriteCellLoop ? (0, qb.Clamp)(yb * bb % this.lifeTime / this.lifeTime) : (0, qb.Clamp)(yb * bb / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Uy * Wy | 0
      }
      _inheritParticleInfoToSubEmitter(yb) {
        if (yb.particleSystem.emitter.position) {
          const bb = yb.particleSystem.emitter;
          if (bb.position.Coy(this.position), yb.inheritDirection) {
            const yb = fy.j.dU[0];
            this.direction.normalizeToRef(yb), bb.setDirection(yb, 0, Math.PI / 2)
          }
        } else {
          yb.particleSystem.emitter.Coy(this.position)
        }
        this.direction.scaleToRef(yb.inheritedVelocityAmount / 2, fy.j.dU[0]), yb.particleSystem._inheritedVelocityOffset.Coy(fy.j.dU[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const yb of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(yb)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = Gy._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(yb) {
        yb.position.Coy(this.position), this._properties.initialDirection ? yb._properties.initialDirection ? yb._properties.initialDirection.Coy(this._properties.initialDirection) : yb._properties.initialDirection = this._properties.initialDirection.clone() : yb._properties.initialDirection = null, yb.direction.Coy(this.direction), this._properties.localPosition && (yb._properties.localPosition ? yb._properties.localPosition.Coy(this._properties.localPosition) : yb._properties.localPosition = this._properties.localPosition.clone()), yb.color.Coy(this.color), yb.colorStep.Coy(this.colorStep), yb.initialColor.Coy(this.initialColor), yb.colorDead.Coy(this.colorDead), yb.lifeTime = this.lifeTime, yb.age = this.age, yb._properties.randomCellOffset = this._properties.randomCellOffset, yb.size = this.size, yb.scale.Coy(this.scale), yb.angle = this.angle, yb.angularSpeed = this.angularSpeed, yb.particleSystem = this.particleSystem, yb.cellIndex = this.cellIndex, yb.id = this.id, yb._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (yb._properties.currentColorGradient = this._properties.currentColorGradient, yb._properties.currentColor1.Coy(this._properties.currentColor1), yb._properties.currentColor2.Coy(this._properties.currentColor2)), this._properties.currentSizeGradient && (yb._properties.currentSizeGradient = this._properties.currentSizeGradient, yb._properties.currentSize1 = this._properties.currentSize1, yb._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (yb._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, yb._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, yb._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (yb._properties.currentVelocityGradient = this._properties.currentVelocityGradient, yb._properties.currentVelocity1 = this._properties.currentVelocity1, yb._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (yb._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, yb._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, yb._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (yb._properties.currentDragGradient = this._properties.currentDragGradient, yb._properties.currentDrag1 = this._properties.currentDrag1, yb._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (yb._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, yb._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, yb._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (yb.remapData && this.remapData ? yb.remapData.Coy(this.remapData) : yb.remapData = new fy.p(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (yb._properties.randomNoiseCoordinates1 && yb._properties.randomNoiseCoordinates2 ? (yb._properties.randomNoiseCoordinates1.Coy(this._properties.randomNoiseCoordinates1), yb._properties.randomNoiseCoordinates2.Coy(this._properties.randomNoiseCoordinates2)) : (yb._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), yb._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), yb.metadata = this.metadata
      }
    }
    Gy._Count = 0;
    var Oy = Wy(39680);
    class Ry {
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
      constructor(yb, bb, Wy, Uy) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = bb, this.jfy = yb, this._scene = Wy, this._host = Uy, this._activeTargets = [], bb._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Pyy: this._getCorrectLoopMode()
          }, this._animation.dataType === Oy.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = fy.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const yb = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, yb)
        }
        if (this.jfy instanceof Array) {
          let yb = 0;
          for (const bb of this.jfy) this._preparePath(bb, yb), this._getOriginalValues(yb), yb++;
          this._targetIsArray = !0
        } else this._preparePath(this.jfy), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const hy = bb.getEvents();
        if (hy && hy.length > 0)
          for (const fy of hy) this._events.push(fy._clone());
        this._enableBlending = yb && yb.animationPropertiesOverride ? yb.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = this._animation.targetPropertyPath;
        if (Wy.length > 1) {
          let Uy = yb;
          for (let yb = 0; yb < Wy.length - 1; yb++) {
            const bb = Wy[yb];
            if (Uy = Uy[bb], void 0 === Uy) throw new Error(`Invalid property (${bb}) in property path (${Wy.join(".")})`)
          }
          this._targetPath = Wy[Wy.length - 1], this._activeTargets[bb] = Uy
        } else this._targetPath = Wy[0], this._activeTargets[bb] = yb;
        if (void 0 === this._activeTargets[bb][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${Wy.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.jfy instanceof Array) {
            let yb = 0;
            for (const bb of this.jfy) void 0 !== this._originalValue[yb] && this._setValue(bb, this._activeTargets[yb], this._originalValue[yb], -1, yb), yb++
          } else void 0 !== this._originalValue[0] && this._setValue(this.jfy, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let yb = 0; yb < this._events.length; yb++) this._events[yb].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const yb = this._animation.runtimeAnimations.indexOf(this);
        yb > -1 && this._animation.runtimeAnimations.splice(yb, 1)
      }
      setValue(yb, bb) {
        if (this._targetIsArray)
          for (let Wy = 0; Wy < this.jfy.length; Wy++) {
            const Uy = this.jfy[Wy];
            this._setValue(Uy, this._activeTargets[Wy], yb, bb, Wy)
          } else this._setValue(this.jfy, this._directTarget, yb, bb, 0)
      }
      _getOriginalValues() {
        let yb, bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Wy = this._activeTargets[bb];
        if (Oy.d.InheritOriginalValueFromActiveAnimations) {
          const yb = this._scene._activeAnimatables;
          for (let Uy = 0; Uy < yb.length; Uy++) {
            const hy = yb[Uy]._runtimeAnimations;
            for (let yb = 0; yb < hy.length; yb++) {
              const Uy = hy[yb];
              if (Uy !== this && Uy._targetPath === this._targetPath)
                for (let yb = 0; yb < Uy._activeTargets.length; yb++)
                  if (Uy._activeTargets[yb] === Wy && void 0 !== Uy._originalValue[yb]) return void(Uy._originalValue[yb] && Uy._originalValue[yb].clone ? this._originalValue[bb] = Uy._originalValue[yb].clone() : this._originalValue[bb] = Uy._originalValue[yb])
            }
          }
        }
        yb = Wy.getLocalMatrix && "_matrix" === this._targetPath ? Wy.getLocalMatrix() : Wy[this._targetPath], yb && yb.clone ? this._originalValue[bb] = yb.clone() : this._originalValue[bb] = yb
      }
      _registerTargetForLateAnimationBinding(yb, bb) {
        const Wy = yb.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(Wy), Wy._lateAnimationHolders || (Wy._lateAnimationHolders = {}), Wy._lateAnimationHolders[yb.targetPath] || (Wy._lateAnimationHolders[yb.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: bb
        }), yb.isAdditive ? (Wy._lateAnimationHolders[yb.targetPath].additiveAnimations.push(yb), Wy._lateAnimationHolders[yb.targetPath].totalAdditiveWeight += yb.weight) : (Wy._lateAnimationHolders[yb.targetPath].animations.push(yb), Wy._lateAnimationHolders[yb.targetPath].totalWeight += yb.weight)
      }
      _setValue(yb, bb, Wy, Uy, hy) {
        const Zy = this._scene._animationWrites,
          cb = this._scene._animationWriteCount++;
        let Py = Zy[cb];
        if (Py || (Py = Zy[cb] = {
            runtimeAnimation: this,
            target: yb,
            weight: Uy,
            additive: !1,
            blendingFactor: 1,
            uZ: !1
          }), Py.runtimeAnimation = this, Py.target = yb, Py.weight = Uy, Py.additive = this.isAdditive, Py.uZ = !1, this._currentActiveTarget = bb, this._weight = Uy, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const yb = bb[this._targetPath];
            yb.clone ? this._originalBlendValue = yb.clone() : this._originalBlendValue = yb
          }
          this._originalBlendValue.m ? Oy.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? fy.c.DecomposeLerpToRef(this._originalBlendValue, Wy, this._blendingFactor, this._currentValue) : this._currentValue = fy.c.DecomposeLerp(this._originalBlendValue, Wy, this._blendingFactor) : this._currentValue ? fy.c.LerpToRef(this._originalBlendValue, Wy, this._blendingFactor, this._currentValue) : this._currentValue = fy.c.Lerp(this._originalBlendValue, Wy, this._blendingFactor) : this._currentValue = Oy.d._UniversalLerp(this._originalBlendValue, Wy, this._blendingFactor);
          const Uy = yb && yb.animationPropertiesOverride ? yb.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Py.blendingFactor = this._blendingFactor, this._blendingFactor += Uy
        } else Py.blendingFactor = 1, this._currentValue ? this._currentValue.Coy ? this._currentValue.Coy(Wy) : this._currentValue = Wy : this._currentValue = Wy?.clone ? Wy.clone() : Wy; - 1 !== Uy ? this._registerTargetForLateAnimationBinding(this, this._originalValue[hy]) : this._animationState.Pyy === Oy.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[hy], bb[this._targetPath]) : bb[this._targetPath] = this._originalValue[hy] + this._currentValue : bb[this._targetPath] = this._currentValue, yb.goy && yb.goy(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.jfy && this.jfy.animationPropertiesOverride) {
          return "MorphTarget" === this.jfy.getClassName?.() && null == this.jfy._animationPropertiesOverride ? this._animation.Pyy : this.jfy.animationPropertiesOverride.Pyy
        }
        return this._animation.Pyy
      }
      goToFrame(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const Wy = this._animation.getKeys();
        yb < Wy[0].frame ? yb = Wy[0].frame : yb > Wy[Wy.length - 1].frame && (yb = Wy[Wy.length - 1].frame);
        const Uy = this._events;
        if (Uy.length)
          for (let fy = 0; fy < Uy.length; fy++) Uy[fy].onlyOnce || (Uy[fy].isDone = Uy[fy].frame < yb);
        this._currentFrame = yb;
        const hy = this._animation._interpolate(yb, this._animationState);
        this.setValue(hy, bb)
      }
      _prepareForSpeedRatioChange(yb) {
        const bb = this._previousElapsedTime * (this._animation.framePerSecond * yb) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - bb
      }
      animate(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Zy = this._animation,
          cb = Zy.targetPropertyPath;
        if (!cb || cb.length < 1) return this._stopped = !0, !1;
        let Py, oy = !0;
        const By = this._events;
        let Ky;
        if (this._coreRuntimeAnimation) Ky = Wy - bb, Py = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Py, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let fy;
          (bb < this._minFrame || bb > this._maxFrame) && (bb = this._minFrame), (Wy < this._minFrame || Wy > this._maxFrame) && (Wy = this._maxFrame), Ky = Wy - bb;
          let cb = yb * (Zy.framePerSecond * hy) / 1e3 + this._absoluteFrameOffset,
            ey = 0,
            qb = !1;
          const sy = Uy && this._animationState.Pyy === Oy.d.ANIMATIONLOOPMODE_YOYO;
          if (sy) {
            const yb = (cb - bb) / Ky,
              Wy = Math.sin(yb * Math.PI);
            cb = Math.abs(Wy) * Ky + bb;
            const Uy = Wy >= 0 ? 1 : -1;
            this._yoyoDirection !== Uy && (qb = !0), this._yoyoDirection = Uy
          }
          if (this._previousElapsedTime = yb, this._previousAbsoluteFrame = cb, !Uy && Wy >= bb && (cb >= Ky && hy > 0 || cb <= 0 && hy < 0)) oy = !1, ey = Zy.evaluate(Wy);
          else if (!Uy && bb >= Wy && (cb <= Ky && hy < 0 || cb >= 0 && hy > 0)) oy = !1, ey = Zy.evaluate(bb);
          else if (this._animationState.Pyy !== Oy.d.ANIMATIONLOOPMODE_CYCLE) {
            const yb = Wy.toString() + bb.toString();
            if (!this._offsetsCache[yb]) {
              this._animationState.repeatCount = 0, this._animationState.Pyy = Oy.d.ANIMATIONLOOPMODE_CYCLE;
              const Uy = Zy._interpolate(bb, this._animationState),
                hy = Zy._interpolate(Wy, this._animationState);
              switch (this._animationState.Pyy = this._getCorrectLoopMode(), Zy.dataType) {
                case Oy.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[yb] = hy - Uy;
                  break;
                case Oy.d.ANIMATIONTYPE_QUATERNION:
                case Oy.d.ANIMATIONTYPE_VECTOR3:
                case Oy.d.ANIMATIONTYPE_VECTOR2:
                case Oy.d.ANIMATIONTYPE_SIZE:
                case Oy.d.ANIMATIONTYPE_COLOR3:
                case Oy.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[yb] = hy.subtract(Uy)
              }
              this._highLimitsCache[yb] = hy
            }
            ey = this._highLimitsCache[yb], fy = this._offsetsCache[yb]
          }
          if (void 0 === fy) switch (Zy.dataType) {
            case Oy.d.ANIMATIONTYPE_FLOAT:
              fy = 0;
              break;
            case Oy.d.ANIMATIONTYPE_QUATERNION:
              fy = Oy.l;
              break;
            case Oy.d.ANIMATIONTYPE_VECTOR3:
              fy = Oy.r;
              break;
            case Oy.d.ANIMATIONTYPE_VECTOR2:
              fy = Oy.p;
              break;
            case Oy.d.ANIMATIONTYPE_SIZE:
              fy = Oy.n;
              break;
            case Oy.d.ANIMATIONTYPE_COLOR3:
              fy = Oy.i;
              break;
            case Oy.d.ANIMATIONTYPE_COLOR4:
              fy = Oy.k
          }
          const Sy = this._host ? this._host.syncRoot : null;
          let Ey, ly = this._playbackFrames,
            mb = !1;
          if (Sy) {
            const yb = Sy.toFrame - Sy.fromFrame,
              Wy = Sy.masterFrame,
              Uy = (Wy - Sy.fromFrame) / yb;
            Py = bb + Ky * Uy;
            const hy = Sy.getAnimations()[0];
            if (hy && 0 !== yb) {
              const yb = Ky * Uy,
                bb = hy._playbackTo - hy._playbackFrom;
              if (0 !== bb && hy._playbackFrom <= Sy.fromFrame && hy._playbackTo >= Sy.toFrame) {
                ly = Ky * Math.round((hy._playbackFrames - (hy._currentFrame - hy._playbackFrom)) / bb) + yb
              } else mb = (Wy - this._playbackSyncMasterFrame) * (hy._playbackFrames - this._playbackSyncMasterPlayed) < 0, ly = yb;
              mb = mb || hy._playbackJumped, this._playbackSyncMasterPlayed = hy._playbackFrames, this._playbackSyncMasterFrame = Wy
            }
          } else Py = cb > 0 && bb > Wy || cb < 0 && bb < Wy ? oy && 0 !== Ky ? Wy + cb % Ky : bb : oy && 0 !== Ky ? bb + cb % Ky : Wy;
          if (!sy && (hy > 0 && this.currentFrame > Py || hy < 0 && this.currentFrame < Py) || sy && qb) {
            this._onLoop();
            for (let yb = 0; yb < By.length; yb++) By[yb].onlyOnce || (By[yb].isDone = !1);
            this._animationState.key = hy > 0 ? 0 : Zy.getKeys().length - 1
          }
          if (this._currentFrame = Py, this._animationState.repeatCount = 0 === Ky ? 0 : cb / Ky | 0, this._animationState.highLimitValue = ey, this._animationState.offsetValue = fy, this._playbackFrom = bb, this._playbackTo = Wy, this._playbackJumped = mb, this._playbackSyncRoot = Sy, Sy) Ey = ly;
          else if (oy) Ey = sy ? Py === bb && cb === Wy ? Ky : Py - bb : cb;
          else {
            const yb = 0 !== Ky ? Math.floor(this._playbackFrames / Ky) : 0;
            Ey = (Py === Wy ? yb + 1 : yb) * Ky
          }
          this._playbackFrames = Ey, this._playbackProgress = this._animationState.Pyy === Oy.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Ky : Ey
        }
        const ey = Zy._interpolate(Py, this._animationState);
        if (this.setValue(ey, fy), By.length)
          for (let qb = 0; qb < By.length; qb++)
            if (Ky >= 0 && Py >= By[qb].frame && By[qb].frame >= bb || Ky < 0 && Py <= By[qb].frame && By[qb].frame <= bb) {
              const yb = By[qb];
              yb.isDone || (yb.onlyOnce && (By.splice(qb, 1), qb--), yb.isDone = !0, yb.action(Py))
            } return oy || (this._stopped = !0), oy
      }
    }
    var vb = Wy(38371);
    class ib {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(yb) {
        this._weight = -1 !== yb ? Math.min(Math.max(yb, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(yb) {
        for (let bb = 0; bb < this._runtimeAnimations.length; bb++) {
          this._runtimeAnimations[bb]._prepareForSpeedRatioChange(yb)
        }
        this._speedRatio = yb, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          fy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          cb = arguments.length > 6 ? arguments[6] : void 0,
          Py = arguments.length > 7 ? arguments[7] : void 0,
          oy = arguments.length > 8 ? arguments[8] : void 0,
          By = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Ky = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = bb, this.fromFrame = Wy, this.toFrame = Uy, this.loopAnimation = fy, this.onAnimationEnd = cb, this.onAnimationLoop = oy, this.isAdditive = By, this.playOrder = Ky, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.Om = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new hy.c, this.onAnimationLoopObservable = new hy.c, this._scene = yb, Py && this.appendAnimations(bb, Py), this._speedRatio = Zy, yb._activeAnimatables.push(this)
      }
      syncWith(yb) {
        if (this._syncRoot = yb, yb) {
          const yb = this._scene._activeAnimatables.indexOf(this);
          yb > -1 && (this._scene._activeAnimatables.splice(yb, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(yb, bb) {
        for (let Wy = 0; Wy < bb.length; Wy++) {
          const Uy = bb[Wy],
            hy = new Ry(yb, Uy, this._scene, this);
          hy._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(hy)
        }
      }
      getAnimationByTargetProperty(yb) {
        const bb = this._runtimeAnimations;
        for (let Wy = 0; Wy < bb.length; Wy++)
          if (bb[Wy].animation.targetProperty === yb) return bb[Wy].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(yb) {
        const bb = this._runtimeAnimations;
        for (let Wy = 0; Wy < bb.length; Wy++)
          if (bb[Wy].animation.targetProperty === yb) return bb[Wy];
        return null
      }
      reset() {
        const yb = this._runtimeAnimations;
        for (let bb = 0; bb < yb.length; bb++) yb[bb].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(yb) {
        const bb = this._runtimeAnimations;
        for (let Wy = 0; Wy < bb.length; Wy++) bb[Wy].animation.enableBlending = !0, bb[Wy].animation.blendingSpeed = yb
      }
      disableBlending() {
        const yb = this._runtimeAnimations;
        for (let bb = 0; bb < yb.length; bb++) yb[bb].animation.enableBlending = !1
      }
      goToFrame(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = this._runtimeAnimations;
        if (Wy[0]) {
          const bb = Wy[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? Wy[0].currentFrame;
          const Uy = 0 === this.speedRatio ? 0 : (yb - this._frameToSyncFromJump) / bb * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Uy
        }
        for (let Uy = 0; Uy < Wy.length; Uy++) Wy[Uy].goToFrame(yb, bb ? this._weight : -1);
        this._goToFrame = yb
      }
      get paused() {
        return this.Om
      }
      pause() {
        this.Om || (this.Om = !0)
      }
      restart() {
        this.Om = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (yb || bb) {
          const hy = this._scene._activeAnimatables.indexOf(this);
          if (hy > -1) {
            const fy = this._runtimeAnimations;
            for (let Wy = fy.length - 1; Wy >= 0; Wy--) {
              const Uy = fy[Wy];
              yb && Uy.animation.name != yb || (bb && !bb(Uy.target) || (Uy.dispose(), fy.splice(Wy, 1)))
            }
            0 == fy.length && (Wy || this._scene._activeAnimatables.splice(hy, 1), Uy || this._raiseOnAnimationEnd())
          }
        } else {
          const yb = this._scene._activeAnimatables.indexOf(this);
          if (yb > -1) {
            Wy || this._scene._activeAnimatables.splice(yb, 1);
            const bb = this._runtimeAnimations;
            for (let yb = 0; yb < bb.length; yb++) bb[yb].dispose();
            this._runtimeAnimations.length = 0, Uy || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((yb => {
          this.onAnimationEndObservable.add((() => {
            yb(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(yb) {
        if (this.Om) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = yb), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = yb, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += yb - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !ib.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let bb = !1;
        const Wy = this._runtimeAnimations;
        let Uy;
        for (Uy = 0; Uy < Wy.length; Uy++) {
          const hy = Wy[Uy].animate(yb - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          bb = bb || hy
        }
        if (this.animationStarted = bb, !bb) {
          if (this.disposeOnEnd)
            for (Uy = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Uy, 1), Uy = 0; Uy < Wy.length; Uy++) Wy[Uy].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return bb
      }
    }

    function My(yb) {
      if (0 === yb.totalWeight && 0 === yb.totalAdditiveWeight) return yb.originalValue;
      let bb = 1;
      const Wy = fy.j.dU[0],
        Uy = fy.j.dU[1],
        hy = fy.j.Quaternion[0];
      let Zy = 0;
      const cb = yb.animations[0],
        Py = yb.originalValue;
      let oy, By = !1;
      if (yb.totalWeight < 1) oy = 1 - yb.totalWeight, Py.decompose(Uy, hy, Wy);
      else {
        if (Zy = 1, bb = yb.totalWeight, oy = cb.weight / bb, 1 == oy) {
          if (!yb.totalAdditiveWeight) return cb.currentValue;
          By = !0
        }
        cb.currentValue.decompose(Uy, hy, Wy)
      }
      if (!By) {
        Uy.scaleInPlace(oy), Wy.scaleInPlace(oy), hy.scaleInPlace(oy);
        for (let cb = Zy; cb < yb.animations.length; cb++) {
          const Zy = yb.animations[cb];
          if (0 === Zy.weight) continue;
          oy = Zy.weight / bb;
          const Py = fy.j.dU[2],
            By = fy.j.dU[3],
            Ky = fy.j.Quaternion[1];
          Zy.currentValue.decompose(By, Ky, Py), By.scaleAndAddToRef(oy, Uy), Ky.scaleAndAddToRef(fy.e.Dot(hy, Ky) > 0 ? oy : -oy, hy), Py.scaleAndAddToRef(oy, Wy)
        }
        hy.normalize()
      }
      for (let ey = 0; ey < yb.additiveAnimations.length; ey++) {
        const bb = yb.additiveAnimations[ey];
        if (0 === bb.weight) continue;
        const Zy = fy.j.dU[2],
          cb = fy.j.dU[3],
          Py = fy.j.Quaternion[1];
        bb.currentValue.decompose(cb, Py, Zy), cb.multiplyToRef(Uy, cb), fy.n.LerpToRef(Uy, cb, bb.weight, Uy), hy.multiplyToRef(Py, Py), fy.e.SlerpToRef(hy, Py, bb.weight, hy), Zy.scaleAndAddToRef(bb.weight, Wy)
      }
      const Ky = cb ? cb._animationState.workValue : fy.j.Matrix[0].clone();
      return fy.c.ComposeToRef(Uy, hy, Wy, Ky), Ky
    }

    function Yy(yb, bb) {
      if (0 === yb.totalWeight && 0 === yb.totalAdditiveWeight) return bb;
      const Wy = yb.animations[0],
        Uy = yb.originalValue;
      let hy = bb;
      if (0 === yb.totalWeight && yb.totalAdditiveWeight > 0) hy.Coy(Uy);
      else if (1 === yb.animations.length) {
        if (fy.e.SlerpToRef(Uy, Wy.currentValue, Math.min(1, yb.totalWeight), hy), 0 === yb.totalAdditiveWeight) return hy
      } else if (yb.animations.length > 1) {
        let Wy, Zy, cb = 1;
        if (yb.totalWeight < 1) {
          const bb = 1 - yb.totalWeight;
          Wy = [], Zy = [], Wy.push(Uy), Zy.push(bb)
        } else {
          if (2 === yb.animations.length && (fy.e.SlerpToRef(yb.animations[0].currentValue, yb.animations[1].currentValue, yb.animations[1].weight / yb.totalWeight, bb), 0 === yb.totalAdditiveWeight)) return bb;
          Wy = [], Zy = [], cb = yb.totalWeight
        }
        for (let bb = 0; bb < yb.animations.length; bb++) {
          const Uy = yb.animations[bb];
          Wy.push(Uy.currentValue), Zy.push(Uy.weight / cb)
        }
        let Py = 0;
        for (let yb = 0; yb < Wy.length;) yb ? (Py += Zy[yb], fy.e.SlerpToRef(hy, Wy[yb], Zy[yb] / Py, hy), yb++) : (fy.e.SlerpToRef(Wy[yb], Wy[yb + 1], Zy[yb + 1] / (Zy[yb] + Zy[yb + 1]), bb), hy = bb, Py = Zy[yb] + Zy[yb + 1], yb += 2)
      }
      for (let Zy = 0; Zy < yb.additiveAnimations.length; Zy++) {
        const bb = yb.additiveAnimations[Zy];
        0 !== bb.weight && (hy.multiplyToRef(bb.currentValue, fy.j.Quaternion[0]), fy.e.SlerpToRef(hy, fy.j.Quaternion[0], bb.weight, hy))
      }
      return hy
    }

    function Xy(yb, bb) {
      bb && (bb.prototype.copyAnimationRange = function(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Oy.d(this.name, "_matrix", yb.animations[0].framePerSecond, Oy.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const fy = yb.animations[0].getRange(bb);
        if (!fy) return !1;
        const Zy = fy.from,
          cb = fy.to,
          Py = yb.animations[0].getKeys(),
          oy = yb.length,
          By = yb.getParent(),
          Ky = this.getParent(),
          ey = Uy && By && oy && this.length && oy !== this.length,
          qb = ey && Ky && By ? Ky.length / By.length : 1,
          sy = Uy && !Ky && hy && (1 !== hy.x || 1 !== hy.y || 1 !== hy.z),
          Sy = this.animations[0].getKeys();
        let Ey, ly, mb;
        for (let Cy = 0, Ty = Py.length; Cy < Ty; Cy++) Ey = Py[Cy], Ey.frame >= Zy && Ey.frame <= cb && (Uy ? (mb = Ey.value.clone(), ey ? (ly = mb.getTranslation(), mb.setTranslation(ly.scaleInPlace(qb))) : sy && hy ? (ly = mb.getTranslation(), mb.setTranslation(ly.multiplyInPlace(hy))) : mb = Ey.value) : mb = Ey.value, Sy.push({
          frame: Ey.frame + Wy,
          value: mb
        }));
        return this.animations[0].createRange(bb, Zy + Wy, cb + Wy), !0
      }), yb && (yb.prototype._animate = function(yb) {
        const bb = this._animationWrites,
          Wy = this._animationWriteCount;
        let Uy = 0;
        for (let fy = this._animationStepWriteCount; fy < Wy; fy++) {
          const yb = bb[fy];
          yb.uZ && -1 === yb.weight || (yb.uZ = !0, bb[fy] = bb[Uy], bb[Uy] = yb, Uy++)
        }
        for (let fy = Uy; fy < Wy; fy++) {
          const yb = bb[fy];
          yb.runtimeAnimation = null, yb.target = null
        }
        if (this._animationWriteCount = Uy, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const hy = vb.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = hy
        }
        this.deltaTime = void 0 !== yb ? yb : this.useConstantAnimationDeltaTime ? 16 : (hy - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = hy;
        const Zy = this._activeAnimatables;
        if (0 === Zy.length) return;
        this._animationTime += this.deltaTime;
        const cb = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let fy = 0; fy < Zy.length; fy++) {
          const yb = Zy[fy];
          !yb._animate(cb) && yb.disposeOnEnd && fy--
        }! function(yb) {
          if (yb._registeredForLateAnimationBindings.length) {
            for (let bb = 0; bb < yb._registeredForLateAnimationBindings.length; bb++) {
              const Wy = yb._registeredForLateAnimationBindings.data[bb];
              for (const yb in Wy._lateAnimationHolders) {
                const bb = Wy._lateAnimationHolders[yb],
                  Uy = bb.animations[0],
                  hy = bb.originalValue;
                if (void 0 === hy || null === hy) continue;
                const Zy = Oy.d.AllowMatrixDecomposeForInterpolation && hy.m;
                let cb = Wy[yb];
                if (Zy) cb = My(bb);
                else if (void 0 !== hy.w) cb = Yy(bb, cb || fy.e.Identity());
                else {
                  let yb = 0,
                    Wy = 1;
                  const fy = Uy && Uy._animationState.Pyy === Oy.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (bb.totalWeight < 1) cb = fy ? hy.clone ? hy.clone() : hy : Uy && hy.scale ? hy.scale(1 - bb.totalWeight) : Uy ? hy * (1 - bb.totalWeight) : hy.clone ? hy.clone() : hy;
                  else if (Uy) {
                    Wy = bb.totalWeight;
                    const Zy = Uy.weight / Wy;
                    cb = 1 !== Zy ? Uy.currentValue.scale ? Uy.currentValue.scale(Zy) : Uy.currentValue * Zy : (bb.animations.length > 1 || bb.additiveAnimations.length > 0) && Uy.currentValue.clone ? Uy.currentValue.clone() : Uy.currentValue, fy && (cb.addToRef ? cb.addToRef(hy, cb) : cb += hy), yb = 1
                  }
                  for (let Uy = yb; Uy < bb.animations.length; Uy++) {
                    const yb = bb.animations[Uy],
                      hy = yb.weight / Wy;
                    hy && (yb.currentValue.scaleAndAddToRef ? yb.currentValue.scaleAndAddToRef(hy, cb) : cb += yb.currentValue * hy)
                  }
                  for (let Uy = 0; Uy < bb.additiveAnimations.length; Uy++) {
                    const yb = bb.additiveAnimations[Uy],
                      Wy = yb.weight;
                    Wy && (yb.currentValue.scaleAndAddToRef ? yb.currentValue.scaleAndAddToRef(Wy, cb) : cb += yb.currentValue * Wy)
                  }
                }
                Wy[yb] = cb
              }
              Wy._lateAnimationHolders = {}
            }
            yb._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, yb.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((yb, bb) => yb.playOrder - bb.playOrder))
      }, yb.prototype.beginWeightedAnimation = function(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Zy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 ? arguments[7] : void 0,
          Py = arguments.length > 8 ? arguments[8] : void 0,
          oy = arguments.length > 9 ? arguments[9] : void 0,
          By = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Ky = this.beginAnimation(yb, bb, Wy, hy, fy, Zy, cb, !1, Py, oy, By);
        return Ky.weight = Uy, Ky
      }, yb.prototype.beginAnimation = function(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          fy = arguments.length > 5 ? arguments[5] : void 0,
          Zy = arguments.length > 6 ? arguments[6] : void 0,
          cb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Py = arguments.length > 8 ? arguments[8] : void 0,
          oy = arguments.length > 9 ? arguments[9] : void 0,
          By = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (hy < 0) {
          const yb = bb;
          bb = Wy, Wy = yb, hy = -hy
        }
        bb > Wy && (hy = -hy), cb && this.stopAnimation(yb, void 0, Py), Zy || (Zy = new ib(this, yb, bb, Wy, Uy, hy, fy, void 0, oy, By));
        const Ky = !Py || Py(yb);
        if (yb.animations && Ky && Zy.appendAnimations(yb, yb.animations), yb.getAnimatables) {
          const By = yb.getAnimatables();
          for (let yb = 0; yb < By.length; yb++) this.beginAnimation(By[yb], bb, Wy, Uy, hy, fy, Zy, cb, Py, oy)
        }
        return Zy.reset(), Zy
      }, yb.prototype.beginHierarchyAnimation = function(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Zy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 ? arguments[7] : void 0,
          Py = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          oy = arguments.length > 9 ? arguments[9] : void 0,
          By = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Ky = yb.getDescendants(bb),
          ey = [];
        ey.push(this.beginAnimation(yb, Wy, Uy, hy, fy, Zy, cb, Py, oy, void 0, By));
        for (const qb of Ky) ey.push(this.beginAnimation(qb, Wy, Uy, hy, fy, Zy, cb, Py, oy, void 0, By));
        return ey
      }, yb.prototype.beginDirectAnimation = function(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (fy < 0) {
          const yb = Wy;
          Wy = Uy, Uy = yb, fy = -fy
        }
        Wy > Uy && (fy = -fy);
        return new ib(this, yb, Wy, Uy, hy, fy, arguments.length > 6 ? arguments[6] : void 0, bb, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, yb.prototype.beginDirectHierarchyAnimation = function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        let oy = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const By = yb.getDescendants(bb),
          Ky = [];
        Ky.push(this.beginDirectAnimation(yb, Wy, Uy, hy, fy, Zy, cb, Py, oy));
        for (const ey of By) Ky.push(this.beginDirectAnimation(ey, Wy, Uy, hy, fy, Zy, cb, Py, oy));
        return Ky
      }, yb.prototype.getAnimatableByTarget = function(yb) {
        for (let bb = 0; bb < this._activeAnimatables.length; bb++)
          if (this._activeAnimatables[bb].target === yb) return this._activeAnimatables[bb];
        return null
      }, yb.prototype.getAllAnimatablesByTarget = function(yb) {
        const bb = [];
        for (let Wy = 0; Wy < this._activeAnimatables.length; Wy++) this._activeAnimatables[Wy].target === yb && bb.push(this._activeAnimatables[Wy]);
        return bb
      }, yb.prototype.stopAnimation = function(yb, bb, Wy) {
        const Uy = this.getAllAnimatablesByTarget(yb);
        for (const hy of Uy) hy.stop(bb, Wy)
      }, yb.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let yb = 0; yb < this._activeAnimatables.length; yb++) this._activeAnimatables[yb].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const yb of this.animationGroups) yb.stop()
      })
    }
    ib.ProcessPausedAnimatables = !1;
    var ny, uy = Wy(35869),
      rb = Wy(38697),
      Hy = Wy(38347);
    class ab extends rb.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(yb) {
        (yb.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Coy(yb), this._markAsDirtyAndDecompose())
      }
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          cb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(yb, bb.kWy(), !1), this.name = yb, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = bb, this._localMatrix = Uy?.clone() ?? fy.c.Identity(), this._restMatrix = hy ?? this._localMatrix.clone(), this._bindMatrix = Zy ?? this._localMatrix.clone(), this._index = cb, this._absoluteMatrix = new fy.c, this._absoluteBindMatrix = new fy.c, this._absoluteInverseBindMatrix = new fy.c, this._finalMatrix = new fy.c, bb.bones.push(this), this.setParent(Wy, !1), this._updateAbsoluteBindMatrices()
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
      set parent(yb) {
        this.setParent(yb)
      }
      setParent(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== yb) {
          if (this.parent) {
            const yb = this.parent.children.indexOf(this); - 1 !== yb && this.parent.children.splice(yb, 1)
          }
          this._parentNode = yb, this.parent && this.parent.children.push(this), bb && this._updateAbsoluteBindMatrices(), this.goy()
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
      setRestMatrix(yb) {
        this._restMatrix.Coy(yb)
      }
      setRestPose(yb) {
        this.setRestMatrix(yb)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(yb) {
        this.qcy(yb)
      }
      setBindPose(yb) {
        this.setBindMatrix(yb)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const yb = fy.j.dU[0],
            bb = fy.j.Quaternion[0],
            Wy = fy.j.dU[1];
          this.getRestMatrix().decompose(yb, bb, Wy), this._linkedTransformNode.position.Coy(Wy), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? fy.e.Identity(), this._linkedTransformNode.rotationQuaternion.Coy(bb), this._linkedTransformNode.vZ.Coy(yb)
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
      linkTransformNode(yb) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = yb, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.rPy
      }
      set position(yb) {
        this._decompose(), this.rPy.Coy(yb), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(yb) {
        this.setRotation(yb)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(yb) {
        this.setRotationQuaternion(yb)
      }
      get vZ() {
        return this.getScale()
      }
      set vZ(yb) {
        this.setScale(yb)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = fy.n.Zero(), this._localRotation = fy.e.Zero(), this.rPy = fy.n.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.rPy))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, fy.c.ComposeToRef(this._localScaling, this._localRotation, this.rPy, this._localMatrix)) : this._needToCompose = !1)
      }
      qcy(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Coy(yb), bb && this._updateAbsoluteBindMatrices(), Wy ? this._matrix = yb : this.goy()
      }
      _updateAbsoluteBindMatrices(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (yb || (yb = this._bindMatrix), this.parent ? yb.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Coy(yb), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), bb)
          for (let Wy = 0; Wy < this.children.length; Wy++) this.children[Wy]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      goy() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.goy(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.goy(), this._needToDecompose = !0
      }
      _updatePosition(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const hy = this.getLocalMatrix();
        if (0 == bb) Uy ? (hy.addAtIndex(12, yb.x), hy.addAtIndex(13, yb.y), hy.addAtIndex(14, yb.z)) : hy.setTranslationFromFloats(yb.x, yb.y, yb.z);
        else {
          const bb = ab._TmpMats[0],
            Zy = ab._TmpVecs[0];
          this.parent ? (bb.Coy(this.parent.getAbsoluteMatrix()), Wy && bb.multiplyToRef(Wy.getWorldMatrix(), bb)) : fy.c.IdentityToRef(bb), Uy && bb.setTranslationFromFloats(0, 0, 0), bb.invert(), fy.n.TransformCoordinatesToRef(yb, bb, Zy), Uy ? (hy.addAtIndex(12, Zy.x), hy.addAtIndex(13, Zy.y), hy.addAtIndex(14, Zy.z)) : hy.setTranslationFromFloats(Zy.x, Zy.y, Zy.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(yb, bb, Wy, !0)
      }
      setPosition(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(yb, bb, Wy, !1)
      }
      setAbsolutePosition(yb, bb) {
        this.setPosition(yb, 1, bb)
      }
      scale(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hy = this.getLocalMatrix(),
          Zy = ab._TmpMats[0];
        fy.c.ScalingToRef(yb, bb, Wy, Zy), Zy.multiplyToRef(hy, hy), Zy.invert();
        for (const fy of this.children) {
          const Uy = fy.getLocalMatrix();
          Uy.multiplyToRef(Zy, Uy), Uy.multiplyAtIndex(12, yb), Uy.multiplyAtIndex(13, bb), Uy.multiplyAtIndex(14, Wy), fy._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Uy)
          for (const fy of this.children) fy.scale(yb, bb, Wy, Uy)
      }
      setScale(yb) {
        this._decompose(), this._localScaling.Coy(yb), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(yb) {
        this._decompose(), yb.Coy(this._localScaling)
      }
      setYawPitchRoll(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hy = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Uy) {
          const Zy = ab._TmpQuat;
          return fy.e.RotationYawPitchRollToRef(yb, bb, Wy, Zy), void this.setRotationQuaternion(Zy, Uy, hy)
        }
        const Zy = ab._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Zy, hy)) return;
        const cb = ab._TmpMats[1];
        fy.c.RotationYawPitchRollToRef(yb, bb, Wy, cb), Zy.multiplyToRef(cb, cb), this._rotateWithMatrix(cb, Uy, hy)
      }
      rotate(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        const hy = ab._TmpMats[0];
        hy.setTranslationFromFloats(0, 0, 0), fy.c.RotationAxisToRef(yb, bb, hy), this._rotateWithMatrix(hy, Wy, Uy)
      }
      setAxisAngle(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === Wy) {
          const hy = ab._TmpQuat;
          return fy.e.RotationAxisToRef(yb, bb, hy), void this.setRotationQuaternion(hy, Wy, Uy)
        }
        const hy = ab._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(hy, Uy)) return;
        const Zy = ab._TmpMats[1];
        fy.c.RotationAxisToRef(yb, bb, Zy), hy.multiplyToRef(Zy, Zy), this._rotateWithMatrix(Zy, Wy, Uy)
      }
      setRotation(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(yb.y, yb.x, yb.z, bb, Wy)
      }
      setRotationQuaternion(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === bb) return this._decompose(), this._localRotation.Coy(yb), void this._markAsDirtyAndCompose();
        const Uy = ab._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Uy, Wy)) return;
        const hy = ab._TmpMats[1];
        fy.c.FromQuaternionToRef(yb, hy), Uy.multiplyToRef(hy, hy), this._rotateWithMatrix(hy, bb, Wy)
      }
      setRotationMatrix(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === bb) {
          const Uy = ab._TmpQuat;
          return fy.e.FromRotationMatrixToRef(yb, Uy), void this.setRotationQuaternion(Uy, bb, Wy)
        }
        const Uy = ab._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Uy, Wy)) return;
        const hy = ab._TmpMats[1];
        hy.Coy(yb), Uy.multiplyToRef(yb, hy), this._rotateWithMatrix(hy, bb, Wy)
      }
      _rotateWithMatrix(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = this.getLocalMatrix(),
          hy = Uy.m[12],
          fy = Uy.m[13],
          Zy = Uy.m[14],
          cb = this.getParent(),
          Py = ab._TmpMats[3],
          oy = ab._TmpMats[4];
        cb && 1 == bb ? (Wy ? (Py.Coy(Wy.getWorldMatrix()), cb.getAbsoluteMatrix().multiplyToRef(Py, Py)) : Py.Coy(cb.getAbsoluteMatrix()), oy.Coy(Py), oy.invert(), Uy.multiplyToRef(Py, Uy), Uy.multiplyToRef(yb, Uy), Uy.multiplyToRef(oy, Uy)) : 1 == bb && Wy ? (Py.Coy(Wy.getWorldMatrix()), oy.Coy(Py), oy.invert(), Uy.multiplyToRef(Py, Uy), Uy.multiplyToRef(yb, Uy), Uy.multiplyToRef(oy, Uy)) : Uy.multiplyToRef(yb, Uy), Uy.setTranslationFromFloats(hy, fy, Zy), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(yb, bb) {
        const Wy = ab._TmpMats[2];
        return yb.Coy(this.getAbsoluteMatrix()), bb ? (yb.multiplyToRef(bb.getWorldMatrix(), yb), fy.c.ScalingToRef(bb.vZ.x, bb.vZ.y, bb.vZ.z, Wy)) : fy.c.IdentityToRef(Wy), yb.invert(), !isNaN(yb.m[0]) && (Wy.multiplyAtIndex(0, this._scalingDeterminant), yb.multiplyToRef(Wy, yb), !0)
      }
      Tl() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Wy = fy.n.Zero();
        return this.getPositionToRef(yb, bb, Wy), Wy
      }
      getPositionToRef() {
        let yb = arguments.length > 1 ? arguments[1] : void 0,
          bb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const yb = this.getLocalMatrix();
          bb.x = yb.m[12], bb.y = yb.m[13], bb.z = yb.m[14]
        } else {
          const Wy = ab._TmpMats[0].Coy(this.getAbsoluteMatrix());
          yb && Wy.multiplyToRef(yb.getWorldMatrix(), Wy), bb.x = Wy.m[12], bb.y = Wy.m[13], bb.z = Wy.m[14]
        }
      }
      getAbsolutePosition() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const bb = fy.n.Zero();
        return this.getPositionToRef(1, yb, bb), bb
      }
      getAbsolutePositionToRef(yb, bb) {
        this.getPositionToRef(1, yb, bb)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Coy(this._localMatrix);
          const yb = this._skeleton.getPoseMatrix();
          yb && this._absoluteMatrix.multiplyToRef(yb, this._absoluteMatrix)
        }
        const yb = this.children,
          bb = yb.length;
        for (let Wy = 0; Wy < bb; Wy++) yb[Wy].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      ify(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Wy = fy.n.Zero();
        return this.getDirectionToRef(yb, bb, Wy), Wy
      }
      getDirectionToRef(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = ab._TmpMats[0].Coy(this.getAbsoluteMatrix());
        bb && Uy.multiplyToRef(bb.getWorldMatrix(), Uy), fy.n.TransformNormalToRef(yb, Uy, Wy), Wy.normalize()
      }
      getRotation() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Wy = fy.n.Zero();
        return this.getRotationToRef(yb, bb, Wy), Wy
      }
      getRotationToRef() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = ab._TmpQuat;
        this.getRotationQuaternionToRef(yb, bb, Uy), Uy.toEulerAnglesToRef(Wy)
      }
      getRotationQuaternion() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Wy = fy.e.Identity();
        return this.getRotationQuaternionToRef(yb, bb, Wy), Wy
      }
      getRotationQuaternionToRef() {
        let yb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), bb.Coy(this._localRotation);
        else {
          const Wy = ab._TmpMats[0],
            Uy = this.getAbsoluteMatrix();
          yb ? Uy.multiplyToRef(yb.getWorldMatrix(), Wy) : Wy.Coy(Uy), Wy.multiplyAtIndex(0, this._scalingDeterminant), Wy.multiplyAtIndex(1, this._scalingDeterminant), Wy.multiplyAtIndex(2, this._scalingDeterminant), Wy.decompose(void 0, bb, void 0)
        }
      }
      getRotationMatrix() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 ? arguments[1] : void 0;
        const Wy = fy.c.Identity();
        return this.getRotationMatrixToRef(yb, bb, Wy), Wy
      }
      getRotationMatrixToRef() {
        let yb = arguments.length > 1 ? arguments[1] : void 0,
          bb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(bb);
        else {
          const Wy = ab._TmpMats[0],
            Uy = this.getAbsoluteMatrix();
          yb ? Uy.multiplyToRef(yb.getWorldMatrix(), Wy) : Wy.Coy(Uy), Wy.multiplyAtIndex(0, this._scalingDeterminant), Wy.multiplyAtIndex(1, this._scalingDeterminant), Wy.multiplyAtIndex(2, this._scalingDeterminant), Wy.getRotationMatrixToRef(bb)
        }
      }
      getAbsolutePositionFromLocal(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Wy = fy.n.Zero();
        return this.getAbsolutePositionFromLocalToRef(yb, bb, Wy), Wy
      }
      getAbsolutePositionFromLocalToRef(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = ab._TmpMats[0].Coy(this.getAbsoluteMatrix());
        bb && Uy.multiplyToRef(bb.getWorldMatrix(), Uy), fy.n.TransformCoordinatesToRef(yb, Uy, Wy)
      }
      getLocalPositionFromAbsolute(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Wy = fy.n.Zero();
        return this.getLocalPositionFromAbsoluteToRef(yb, bb, Wy), Wy
      }
      getLocalPositionFromAbsoluteToRef(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = ab._TmpMats[0].Coy(this.getAbsoluteMatrix());
        bb && Uy.multiplyToRef(bb.getWorldMatrix(), Uy), Uy.invert(), fy.n.TransformCoordinatesToRef(yb, Uy, Wy)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const yb = this._skeleton.bones.indexOf(this);
        if (-1 !== yb && this._skeleton.bones.splice(yb, 1), this._parentNode && this._parentNode.children) {
          const yb = this._parentNode.children,
            bb = yb.indexOf(this); - 1 !== bb && yb.splice(bb, 1)
        }
        super.dispose()
      }
    }
    ab._TmpVecs = (0, uy.c)(2, fy.n.Zero), ab._TmpQuat = fy.e.Identity(), ab._TmpMats = (0, uy.c)(5, fy.c.Identity), (ny = ab.prototype).copyAnimationRange ?? (ny.copyAnimationRange = (0, Hy.f)("Bone", "copyAnimationRange"));
    var Fy = Wy(38569);
    let py = !1;
    var Ly = Wy(38439),
      Qy = Wy(38822),
      jb = Wy(38830),
      Dy = Wy(38824),
      tb = Wy(38599);

    function wy(yb, bb) {
      const Wy = (0, qb.RandomRange)(0, 1);
      By.e.LerpToRef(bb.color1, bb.color2, Wy, yb.color)
    }

    function kb(yb, bb) {
      bb.colorDead.subtractToRef(yb.color, bb._colorDiff), bb._colorDiff.scaleToRef(1 / yb.lifeTime, yb.colorStep)
    }

    function Ny(yb, bb) {
      yb._properties.currentColorGradient = bb._colorGradients[0], yb._properties.currentColorGradient.getColorToRef(yb.color), yb._properties.currentColor1.Coy(yb.color), bb._colorGradients.length > 1 ? bb._colorGradients[1].getColorToRef(yb._properties.currentColor2) : yb._properties.currentColor2.Coy(yb.color)
    }

    function zb(yb, bb) {
      const Wy = bb._colorGradients;
      Uy.i.GetCurrentGradient(bb._ratio, Wy, ((bb, Wy, Uy) => {
        bb !== yb._properties.currentColorGradient && (yb._properties.currentColor1.Coy(yb._properties.currentColor2), Wy.getColorToRef(yb._properties.currentColor2), yb._properties.currentColorGradient = bb), By.e.LerpToRef(yb._properties.currentColor1, yb._properties.currentColor2, Uy, yb.color), yb.color.a < 0 && (yb.color.a = 0)
      }))
    }

    function Iy(yb, bb) {
      yb.colorStep.scaleToRef(bb._scaledUpdateSpeed, bb._scaledColorStep), yb.color.addInPlace(bb._scaledColorStep), yb.color.a < 0 && (yb.color.a = 0)
    }

    function xb(yb, bb) {
      Uy.i.GetCurrentGradient(bb._ratio, bb._angularSpeedGradients, ((bb, Wy, Uy) => {
        bb !== yb._properties.currentAngularSpeedGradient && (yb._properties.currentAngularSpeed1 = yb._properties.currentAngularSpeed2, yb._properties.currentAngularSpeed2 = Wy.getFactor(), yb._properties.currentAngularSpeedGradient = bb), yb.angularSpeed = (0, qb.Lerp)(yb._properties.currentAngularSpeed1, yb._properties.currentAngularSpeed2, Uy)
      }))
    }

    function Ay(yb, bb) {
      yb.angle += yb.angularSpeed * bb._scaledUpdateSpeed
    }

    function dy(yb, bb) {
      bb.particleEmitterType.startDirectionFunction(bb._emitterWorldMatrix, yb.direction, yb, bb.isLocal, bb._emitterInverseWorldMatrix)
    }

    function yW(yb, bb) {
      bb.startDirectionFunction(bb._emitterWorldMatrix, yb.direction, yb, bb.isLocal)
    }

    function bW(yb, bb) {
      yb._properties.currentVelocityGradient = bb._velocityGradients[0], yb._properties.currentVelocity1 = yb._properties.currentVelocityGradient.getFactor(), bb._velocityGradients.length > 1 ? yb._properties.currentVelocity2 = bb._velocityGradients[1].getFactor() : yb._properties.currentVelocity2 = yb._properties.currentVelocity1
    }

    function Wb(yb, bb) {
      yb._properties.currentLimitVelocityGradient = bb._limitVelocityGradients[0], yb._properties.currentLimitVelocity1 = yb._properties.currentLimitVelocityGradient.getFactor(), bb._limitVelocityGradients.length > 1 ? yb._properties.currentLimitVelocity2 = bb._limitVelocityGradients[1].getFactor() : yb._properties.currentLimitVelocity2 = yb._properties.currentLimitVelocity1
    }

    function Ub(yb, bb) {
      Uy.i.GetCurrentGradient(bb._ratio, bb._velocityGradients, ((bb, Wy, Uy) => {
        bb !== yb._properties.currentVelocityGradient && (yb._properties.currentVelocity1 = yb._properties.currentVelocity2, yb._properties.currentVelocity2 = Wy.getFactor(), yb._properties.currentVelocityGradient = bb), yb._properties.directionScale *= (0, qb.Lerp)(yb._properties.currentVelocity1, yb._properties.currentVelocity2, Uy)
      }))
    }

    function hb(yb, bb) {
      Uy.i.GetCurrentGradient(bb._ratio, bb._limitVelocityGradients, ((Wy, Uy, hy) => {
        Wy !== yb._properties.currentLimitVelocityGradient && (yb._properties.currentLimitVelocity1 = yb._properties.currentLimitVelocity2, yb._properties.currentLimitVelocity2 = Uy.getFactor(), yb._properties.currentLimitVelocityGradient = Wy);
        const fy = (0, qb.Lerp)(yb._properties.currentLimitVelocity1, yb._properties.currentLimitVelocity2, hy);
        yb.direction.length() > fy && yb.direction.scaleInPlace(bb.limitVelocityDamping)
      }))
    }

    function fb(yb) {
      yb.direction.scaleToRef(yb._properties.directionScale, yb._properties.scaledDirection)
    }

    function Zb(yb, bb) {
      bb.particleEmitterType.startPositionFunction(bb._emitterWorldMatrix, yb.position, yb, bb.isLocal)
    }

    function cW(yb, bb) {
      bb.startPositionFunction(bb._emitterWorldMatrix, yb.position, yb, bb.isLocal)
    }

    function Pb(yb, bb) {
      yb._properties.localPosition ? yb._properties.localPosition.Coy(yb.position) : yb._properties.localPosition = yb.position.clone(), fy.n.TransformCoordinatesToRef(yb._properties.localPosition, bb._emitterWorldMatrix, yb.position)
    }

    function ob(yb, bb) {
      bb.isLocal && yb._properties.localPosition ? (yb._properties.localPosition.addInPlace(yb._properties.scaledDirection), fy.n.TransformCoordinatesToRef(yb._properties.localPosition, bb._emitterWorldMatrix, yb.position)) : yb.position.addInPlace(yb._properties.scaledDirection)
    }

    function Bb(yb, bb) {
      yb._properties.currentDragGradient = bb._dragGradients[0], yb._properties.currentDrag1 = yb._properties.currentDragGradient.getFactor(), bb._dragGradients.length > 1 ? yb._properties.currentDrag2 = bb._dragGradients[1].getFactor() : yb._properties.currentDrag2 = yb._properties.currentDrag1
    }

    function Kb(yb, bb) {
      Uy.i.GetCurrentGradient(bb._ratio, bb._dragGradients, ((bb, Wy, Uy) => {
        bb !== yb._properties.currentDragGradient && (yb._properties.currentDrag1 = yb._properties.currentDrag2, yb._properties.currentDrag2 = Wy.getFactor(), yb._properties.currentDragGradient = bb);
        const hy = (0, qb.Lerp)(yb._properties.currentDrag1, yb._properties.currentDrag2, Uy);
        yb._properties.scaledDirection.scaleInPlace(1 - hy)
      }))
    }

    function eb(yb, bb) {
      yb._properties.randomNoiseCoordinates1 && yb._properties.randomNoiseCoordinates2 ? (yb._properties.randomNoiseCoordinates1.vcy(Math.random(), Math.random(), Math.random()), yb._properties.randomNoiseCoordinates2.vcy(Math.random(), Math.random(), Math.random())) : (yb._properties.randomNoiseCoordinates1 = new fy.n(Math.random(), Math.random(), Math.random()), yb._properties.randomNoiseCoordinates2 = new fy.n(Math.random(), Math.random(), Math.random()))
    }

    function qW(yb, bb) {
      const Wy = bb._noiseTextureData,
        Uy = bb._noiseTextureSize;
      if (Wy && Uy && yb._properties.randomNoiseCoordinates1 && yb._properties.randomNoiseCoordinates2) {
        const hy = bb._fetchR(yb._properties.randomNoiseCoordinates1.x, yb._properties.randomNoiseCoordinates1.y, Uy.width, Uy.height, Wy),
          Zy = bb._fetchR(yb._properties.randomNoiseCoordinates1.z, yb._properties.randomNoiseCoordinates2.x, Uy.width, Uy.height, Wy),
          cb = bb._fetchR(yb._properties.randomNoiseCoordinates2.y, yb._properties.randomNoiseCoordinates2.z, Uy.width, Uy.height, Wy),
          Py = fy.j.dU[0],
          oy = fy.j.dU[1];
        Py.vcy((2 * hy - 1) * bb.noiseStrength.x, (2 * Zy - 1) * bb.noiseStrength.y, (2 * cb - 1) * bb.noiseStrength.z), Py.scaleToRef(bb._tempScaledUpdateSpeed, oy), yb.direction.addInPlace(oy)
      }
    }

    function sb(yb, bb) {
      bb.gravity.scaleToRef(bb._tempScaledUpdateSpeed, bb._scaledGravity), yb.direction.addInPlace(bb._scaledGravity)
    }

    function Sb(yb, bb) {
      yb.size = (0, qb.RandomRange)(bb.minSize, bb.maxSize), yb.scale.vcy((0, qb.RandomRange)(bb.minScaleX, bb.maxScaleX), (0, qb.RandomRange)(bb.minScaleY, bb.maxScaleY))
    }

    function Eb(yb, bb) {
      yb._properties.currentSizeGradient = bb._sizeGradients[0], yb._properties.currentSize1 = yb._properties.currentSizeGradient.getFactor(), yb.size = yb._properties.currentSize1, bb._sizeGradients.length > 1 ? yb._properties.currentSize2 = bb._sizeGradients[1].getFactor() : yb._properties.currentSize2 = yb._properties.currentSize1, yb.scale.vcy((0, qb.RandomRange)(bb.minScaleX, bb.maxScaleX), (0, qb.RandomRange)(bb.minScaleY, bb.maxScaleY))
    }

    function lb(yb, bb) {
      const Wy = bb._actualFrame / bb.targetStopDuration;
      Uy.i.GetCurrentGradient(Wy, bb._startSizeGradients, ((Wy, Uy, hy) => {
        Wy !== bb._currentStartSizeGradient && (bb._currentStartSize1 = bb._currentStartSize2, bb._currentStartSize2 = Uy.getFactor(), bb._currentStartSizeGradient = Wy);
        const fy = (0, qb.Lerp)(bb._currentStartSize1, bb._currentStartSize2, hy);
        yb.scale.scaleInPlace(fy)
      }))
    }

    function mW(yb, bb) {
      Uy.i.GetCurrentGradient(bb._ratio, bb._sizeGradients, ((bb, Wy, Uy) => {
        bb !== yb._properties.currentSizeGradient && (yb._properties.currentSize1 = yb._properties.currentSize2, yb._properties.currentSize2 = Wy.getFactor(), yb._properties.currentSizeGradient = bb), yb.size = (0, qb.Lerp)(yb._properties.currentSize1, yb._properties.currentSize2, Uy)
      }))
    }

    function Cb(yb, bb) {
      yb.remapData = new fy.p(0, 1, 0, 1)
    }

    function Tb(yb, bb) {
      bb._colorRemapGradients && bb._colorRemapGradients.length > 0 && Uy.i.GetCurrentGradient(bb._ratio, bb._colorRemapGradients, ((bb, Wy, Uy) => {
        const hy = (0, qb.Lerp)(bb.factor1, Wy.factor1, Uy),
          fy = (0, qb.Lerp)(bb.factor2, Wy.factor2, Uy);
        yb.remapData.x = hy, yb.remapData.y = fy - hy
      })), bb._alphaRemapGradients && bb._alphaRemapGradients.length > 0 && Uy.i.GetCurrentGradient(bb._ratio, bb._alphaRemapGradients, ((bb, Wy, Uy) => {
        const hy = (0, qb.Lerp)(bb.factor1, Wy.factor1, Uy),
          fy = (0, qb.Lerp)(bb.factor2, Wy.factor2, Uy);
        yb.remapData.z = hy, yb.remapData.w = fy - hy
      }))
    }

    function Vb(yb, bb) {
      const Wy = (0, qb.Clamp)(bb._actualFrame / bb.targetStopDuration);
      Uy.i.GetCurrentGradient(Wy, bb._lifeTimeGradients, ((bb, Uy) => {
        const hy = bb,
          fy = Uy,
          Zy = hy.getFactor(),
          cb = fy.getFactor(),
          Py = (Wy - hy.gradient) / (fy.gradient - hy.gradient);
        yb.lifeTime = (0, qb.Lerp)(Zy, cb, Py)
      })), bb._emitPower = (0, qb.RandomRange)(bb.minEmitPower, bb.maxEmitPower)
    }

    function Jb(yb, bb) {
      yb.lifeTime = (0, qb.RandomRange)(bb.minLifeTime, bb.maxLifeTime), bb._emitPower = (0, qb.RandomRange)(bb.minEmitPower, bb.maxEmitPower)
    }

    function gW(yb, bb) {
      0 === bb._emitPower ? (yb._properties.initialDirection ? yb._properties.initialDirection.Coy(yb.direction) : yb._properties.initialDirection = yb.direction.clone(), yb.direction.set(0, 0, 0)) : (yb._properties.initialDirection = null, yb.direction.scaleInPlace(bb._emitPower)), yb.direction.addInPlace(bb._inheritedVelocityOffset)
    }

    function Gb(yb, bb) {
      yb.angularSpeed = (0, qb.RandomRange)(bb.minAngularSpeed, bb.maxAngularSpeed), yb.angle = (0, qb.RandomRange)(bb.minInitialRotation, bb.maxInitialRotation)
    }

    function Ob(yb, bb) {
      yb._properties.currentAngularSpeedGradient = bb._angularSpeedGradients[0], yb.angularSpeed = yb._properties.currentAngularSpeedGradient.getFactor(), yb._properties.currentAngularSpeed1 = yb.angularSpeed, bb._angularSpeedGradients.length > 1 ? yb._properties.currentAngularSpeed2 = bb._angularSpeedGradients[1].getFactor() : yb._properties.currentAngularSpeed2 = yb._properties.currentAngularSpeed1, yb.angle = (0, qb.RandomRange)(bb.minInitialRotation, bb.maxInitialRotation)
    }

    function Rb(yb, bb) {
      yb._properties.initialStartSpriteCellId = bb.startSpriteCellID, yb._properties.initialEndSpriteCellId = bb.endSpriteCellID, yb._properties.initialSpriteCellLoop = bb.spriteCellLoop
    }

    function vW(yb, bb) {
      yb.previousItem = bb.previousItem, yb.nextItem = bb, bb.previousItem && (bb.previousItem.nextItem = yb), bb.previousItem = yb
    }

    function iW(yb, bb) {
      yb.previousItem = bb, yb.nextItem = bb.nextItem, bb.nextItem && (bb.nextItem.previousItem = yb), bb.nextItem = yb
    }

    function Mb(yb) {
      yb.previousItem && (yb.previousItem.nextItem = yb.nextItem), yb.nextItem && (yb.nextItem.previousItem = yb.previousItem)
    }
    var Yb = Wy(38877);
    class Xb extends Jy {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(yb) {
        this._startDirectionFunction !== yb && (this._startDirectionFunction = yb, this._directionCreation.process = yb ? yW : dy)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(yb) {
        this._startPositionFunction !== yb && (this._startPositionFunction = yb, this._positionCreation.process = yb ? cW : Zb)
      }
      set onDispose(yb) {
        this._onDisposeObserver && this.Nby.remove(this._onDisposeObserver), this._onDisposeObserver = this.Nby.add(yb)
      }
      get Koy() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(yb) {
        this._useRampGradients !== yb && (this._useRampGradients = yb, this._resetEffect(), yb ? (this._rampCreation = {
          process: Cb,
          previousItem: null,
          nextItem: null
        }, iW(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Tb,
          previousItem: null,
          nextItem: null
        }, iW(this._remapGradientProcessing, this._gravityProcessing))) : (Mb(this._rampCreation), Mb(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(yb) {
        this._isLocal !== yb && (this._isLocal = yb, yb ? (this._isLocalCreation = {
          process: Pb,
          previousItem: null,
          nextItem: null
        }, iW(this._isLocalCreation, this._positionCreation)) : Mb(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(yb) {
        this._animationSheetEnabled !== yb && (this._animationSheetEnabled = yb, yb ? (this._sheetCreation = {
          process: Rb,
          previousItem: null,
          nextItem: null
        }, iW(this._sheetCreation, this._colorDeadCreation)) : Mb(this._sheetCreation), this._reset())
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
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[yb]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[yb] ?? this._customWrappers[0]
      }
      setCustomEffect(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[bb] = new Qy.c(this._engine), this._customWrappers[bb].effect = yb, this._customWrappers[bb].drawContext && (this._customWrappers[bb].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new hy.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(yb) {
        if (this.noiseTexture !== yb) {
          if (this._noiseTexture = yb, !yb) return Mb(this._noiseCreation), void Mb(this._noiseProcessing);
          this._noiseCreation = {
            process: eb,
            previousItem: null,
            nextItem: null
          }, iW(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: qW,
            previousItem: null,
            nextItem: null
          }, iW(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Zy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          cb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          oy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        py || (py = !0, Xy(Fy.g, ab)), (0, Ly.e)(), super(yb), this._emitterInverseWorldMatrix = fy.c.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new fy.n, this.Nby = new hy.c, this.onStoppedObservable = new hy.c, this.onStartedObservable = new hy.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new By.e(0, 0, 0, 0), this._colorDiff = new By.e(0, 0, 0, 0), this._scaledGravity = fy.n.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = yb => {}, this.recycleParticle = yb => {
          const bb = this._particles.pop();
          bb !== yb && bb.copyTo(yb), bb.metadata = null, this._stockParticles.push(bb)
        }, this._createParticle = () => {
          let yb;
          return 0 !== this._stockParticles.length ? (yb = this._stockParticles.pop(), yb._reset()) : yb = new Gy(this), this._prepareParticle(yb), yb
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = bb, this._epsilon = cb, Wy && "Scene" !== Wy.getClassName() ? (this._engine = Wy, this.defaultProjectionMatrix = fy.c.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = Wy || Py.c.LastCreatedScene, this._engine = this._scene.xh(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.YV.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Jb,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Zb,
          previousItem: null,
          nextItem: null
        }, iW(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: dy,
          previousItem: null,
          nextItem: null
        }, iW(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: gW,
          previousItem: null,
          nextItem: null
        }, iW(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Sb,
          previousItem: null,
          nextItem: null
        }, iW(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Gb,
          previousItem: null,
          nextItem: null
        }, iW(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: wy,
          previousItem: null,
          nextItem: null
        }, iW(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: kb,
          previousItem: null,
          nextItem: null
        }, iW(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, oy || (this._colorProcessing = {
          process: Iy,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Ay,
          previousItem: null,
          nextItem: null
        }, iW(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: fb,
          previousItem: null,
          nextItem: null
        }, iW(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: ob,
          previousItem: null,
          nextItem: null
        }, iW(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: sb,
          previousItem: null,
          nextItem: null
        }, iW(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Zy, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Qy.c(this._engine)
        }, this._customWrappers[0].effect = Uy, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Ky.d, this.updateFunction = yb => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((yb => {
            this._noiseTextureData = yb
          })));
          const bb = yb === this._particles;
          for (let Wy = 0; Wy < yb.length; Wy++) {
            const Uy = yb[Wy];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const hy = Uy.age;
            if (Uy.age += this._tempScaledUpdateSpeed, Uy.age > Uy.lifeTime) {
              const yb = Uy.age - hy,
                bb = Uy.lifeTime - hy;
              this._tempScaledUpdateSpeed = bb * this._tempScaledUpdateSpeed / yb, Uy.age = Uy.lifeTime
            }
            this._ratio = Uy.age / Uy.lifeTime, Uy._properties.directionScale = this._tempScaledUpdateSpeed;
            let fy = this._updateQueueStart;
            for (; fy;) fy.process(Uy, this), fy = fy.nextItem;
            if (this._isAnimationSheetEnabled && !oy && Uy.updateCellIndex(), Uy._inheritParticleInfoToSubEmitters(), Uy.age >= Uy.lifeTime) {
              if (this._emitFromParticle(Uy), Uy._properties.attachedSubEmitters) {
                for (const yb of Uy._properties.attachedSubEmitters) yb.particleSystem.disposeOnStop = !0, yb.particleSystem.stop();
                Uy._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Uy), bb && Wy--
            } else;
          }
        }
      }
      serialize(yb) {
        throw new Error("Method not implemented.")
      }
      clone(yb, bb) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Vb : this._lifeTimeCreation.process = Jb
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: lb,
          previousItem: null,
          nextItem: null
        }, iW(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Mb(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(yb) {
        this.targetStopDuration !== yb && (this._targetStopDuration = yb, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(yb, bb, Wy) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, yb, bb, Wy), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(yb) {
        return this._removeFactorGradient(this._lifeTimeGradients, yb), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(yb, bb, Wy) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Eb, this._sizeGradientProcessing = {
          process: mW,
          previousItem: null,
          nextItem: null
        }, vW(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, yb, bb, Wy), this
      }
      removeSizeGradient(yb) {
        return this._removeFactorGradient(this._sizeGradients, yb), 0 === this._sizeGradients?.length && (Mb(this._sizeGradientProcessing), this._sizeCreation.process = Sb), this
      }
      addColorRemapGradient(yb, bb, Wy) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, yb, bb, Wy), this
      }
      removeColorRemapGradient(yb) {
        return this._removeFactorGradient(this._colorRemapGradients, yb), this
      }
      addAlphaRemapGradient(yb, bb, Wy) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, yb, bb, Wy), this
      }
      removeAlphaRemapGradient(yb) {
        return this._removeFactorGradient(this._alphaRemapGradients, yb), this
      }
      addAngularSpeedGradient(yb, bb, Wy) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Ob, this._angularSpeedGradientProcessing = {
          process: xb,
          previousItem: null,
          nextItem: null
        }, vW(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, yb, bb, Wy), this
      }
      removeAngularSpeedGradient(yb) {
        return this._removeFactorGradient(this._angularSpeedGradients, yb), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Gb, Mb(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(yb, bb, Wy) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: bW,
          previousItem: null,
          nextItem: null
        }, iW(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Ub,
          previousItem: null,
          nextItem: null
        }, vW(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, yb, bb, Wy), this
      }
      removeVelocityGradient(yb) {
        return this._removeFactorGradient(this._velocityGradients, yb), 0 === this._velocityGradients?.length && (Mb(this._velocityCreation), Mb(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(yb, bb, Wy) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Wb,
          previousItem: null,
          nextItem: null
        }, iW(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: hb,
          previousItem: null,
          nextItem: null
        }, iW(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, yb, bb, Wy), this
      }
      removeLimitVelocityGradient(yb) {
        return this._removeFactorGradient(this._limitVelocityGradients, yb), 0 === this._limitVelocityGradients?.length && (Mb(this._limitVelocityCreation), Mb(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(yb, bb, Wy) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Bb,
          previousItem: null,
          nextItem: null
        }, vW(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Kb,
          previousItem: null,
          nextItem: null
        }, vW(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, yb, bb, Wy), this
      }
      removeDragGradient(yb) {
        return this._removeFactorGradient(this._dragGradients, yb), 0 === this._dragGradients?.length && (Mb(this._dragCreation), Mb(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(yb, bb, Wy) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, yb, bb, Wy), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(yb) {
        return this._removeFactorGradient(this._startSizeGradients, yb), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const yb = new Uint8Array(4 * this._rawTextureWidth),
          bb = By.m.Color3[0];
        for (let Wy = 0; Wy < this._rawTextureWidth; Wy++) {
          const hy = Wy / this._rawTextureWidth;
          Uy.i.GetCurrentGradient(hy, this._rampGradients, ((Uy, hy, fy) => {
            By.d.LerpToRef(Uy.color, hy.color, fy, bb), yb[4 * Wy] = 255 * bb.r, yb[4 * Wy + 1] = 255 * bb.g, yb[4 * Wy + 2] = 255 * bb.b, yb[4 * Wy + 3] = 255
          }))
        }
        this._rampGradientsTexture = cb.d.CreateRGBATexture(yb, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((yb, bb) => yb.gradient < bb.gradient ? -1 : yb.gradient > bb.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(yb, bb) {
        this._rampGradients || (this._rampGradients = []);
        const Wy = new Uy.f(yb, bb);
        return this._rampGradients.push(Wy), this._syncRampGradientTexture(), this
      }
      removeRampGradient(yb) {
        return this._removeGradientAndTexture(yb, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(yb, bb, Wy) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Ny, this._colorProcessing.process = zb);
        const hy = new Uy.b(yb, bb, Wy);
        return this._colorGradients.push(hy), this._colorGradients.sort(((yb, bb) => yb.gradient < bb.gradient ? -1 : yb.gradient > bb.gradient ? 1 : 0)), this
      }
      removeColorGradient(yb) {
        if (!this._colorGradients) return this;
        let bb = 0;
        for (const Wy of this._colorGradients) {
          if (Wy.gradient === yb) {
            this._colorGradients.splice(bb, 1);
            break
          }
          bb++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = wy, this._colorProcessing.process = Iy), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const yb of this._drawWrappers)
            if (yb)
              for (const bb of yb) bb?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(yb, bb, Wy, Uy, hy) {
        return hy[4 * (((yb = .5 * Math.abs(yb) + .5) * Wy % Wy | 0) + ((bb = .5 * Math.abs(bb) + .5) * Uy % Uy | 0) * Wy)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const yb = this._engine,
          bb = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * bb), this._vertexBuffer = new Zy.b(yb, this._vertexData, !0, bb);
        let Wy = 0;
        const Uy = this._vertexBuffer.createVertexBuffer(Zy.k.PositionKind, Wy, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Zy.k.PositionKind] = Uy, Wy += 3;
        const hy = this._vertexBuffer.createVertexBuffer(Zy.k.ColorKind, Wy, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Zy.k.ColorKind] = hy, Wy += 4;
        const fy = this._vertexBuffer.createVertexBuffer("angle", Wy, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = fy, Wy += 1;
        const cb = this._vertexBuffer.createVertexBuffer("size", Wy, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = cb, Wy += 2, this._isAnimationSheetEnabled) {
          const yb = this._vertexBuffer.createVertexBuffer("cellIndex", Wy, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = yb, Wy += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const yb = this._vertexBuffer.createVertexBuffer("direction", Wy, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = yb, Wy += 3
        }
        if (this._useRampGradients) {
          const yb = this._vertexBuffer.createVertexBuffer("remapData", Wy, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = yb, Wy += 4
        }
        let Py;
        if (this._useInstancing) {
          const bb = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Zy.b(yb, bb, !1, 2), Py = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Py = this._vertexBuffer.createVertexBuffer("offset", Wy, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Py, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const yb = [],
          bb = [];
        let Wy = 0;
        for (let Uy = 0; Uy < this._capacity; Uy++) yb.push(Wy), yb.push(Wy + 1), yb.push(Wy + 2), yb.push(Wy), yb.push(Wy + 2), yb.push(Wy + 3), bb.push(Wy, Wy + 1, Wy + 1, Wy + 2, Wy + 2, Wy + 3, Wy + 3, Wy, Wy, Wy + 3), Wy += 4;
        this._indexBuffer = this._engine.createIndexBuffer(yb), this._linesIndexBuffer = this._engine.createIndexBuffer(bb)
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
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (yb) return this.startDelay = yb, void setTimeout((() => {
          this.start(0)
        }), yb);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const yb = this.noiseTexture;
          if (yb && yb.onGeneratedObservable) yb.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let bb = 0; bb < this.preWarmCycles; bb++) this.animate(!0), yb.render()
            }))
          }));
          else
            for (let bb = 0; bb < this.preWarmCycles; bb++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(yb))
      }
      _postStop(yb) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(yb, bb, Wy, Uy) {
        let hy = yb * this._vertexBufferSize;
        const Zy = fy.j.dU[0].Coy(this._scene?.floatingOriginOffset || fy.n.ZeroReadOnly);
        if (this._vertexData[hy++] = bb.position.x + this.worldOffset.x - Zy.x, this._vertexData[hy++] = bb.position.y + this.worldOffset.y - Zy.y, this._vertexData[hy++] = bb.position.z + this.worldOffset.z - Zy.z, this._vertexData[hy++] = bb.color.r, this._vertexData[hy++] = bb.color.g, this._vertexData[hy++] = bb.color.b, this._vertexData[hy++] = bb.color.a, this._vertexData[hy++] = bb.angle, this._vertexData[hy++] = bb.scale.x * bb.size, this._vertexData[hy++] = bb.scale.y * bb.size, this._isAnimationSheetEnabled && (this._vertexData[hy++] = bb.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[hy++] = bb.direction.x, this._vertexData[hy++] = bb.direction.y, this._vertexData[hy++] = bb.direction.z);
        else if (bb._properties.initialDirection) {
          let yb = bb._properties.initialDirection;
          this.isLocal && (fy.n.TransformNormalToRef(yb, this._emitterWorldMatrix, fy.j.dU[0]), yb = fy.j.dU[0]), 0 === yb.x && 0 === yb.z && (yb.x = .001), this._vertexData[hy++] = yb.x, this._vertexData[hy++] = yb.y, this._vertexData[hy++] = yb.z
        } else {
          let yb = bb.direction;
          this.isLocal && (fy.n.TransformNormalToRef(yb, this._emitterWorldMatrix, fy.j.dU[0]), yb = fy.j.dU[0]), 0 === yb.x && 0 === yb.z && (yb.x = .001), this._vertexData[hy++] = yb.x, this._vertexData[hy++] = yb.y, this._vertexData[hy++] = yb.z
        }
        this._useRampGradients && bb.remapData && (this._vertexData[hy++] = bb.remapData.x, this._vertexData[hy++] = bb.remapData.y, this._vertexData[hy++] = bb.remapData.z, this._vertexData[hy++] = bb.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === Wy ? Wy = this._epsilon : 1 === Wy && (Wy = 1 - this._epsilon), 0 === Uy ? Uy = this._epsilon : 1 === Uy && (Uy = 1 - this._epsilon)), this._vertexData[hy++] = Wy, this._vertexData[hy] = Uy)
      }
      _prepareParticle(yb) {}
      _createNewOnes(yb) {
        let bb;
        for (let Wy = 0; Wy < yb && this._particles.length !== this._capacity; Wy++) {
          bb = this._createParticle(), this._particles.push(bb);
          let yb = this._createQueueStart;
          for (; yb;) yb.process(bb, this), yb = yb.nextItem;
          bb._inheritParticleInfoToSubEmitters()
        }
      }
      _update(yb) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const yb = this.emitter;
          this._emitterWorldMatrix = yb.getWorldMatrix()
        } else {
          const yb = this.emitter;
          this._emitterWorldMatrix = fy.c.Translation(yb.x, yb.y, yb.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(yb)
      }
      static _GetAttributeNamesOrOptions() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = [Zy.k.PositionKind, Zy.k.ColorKind, "angle", "offset", "size"];
        return yb && Uy.push("cellIndex"), bb || Uy.push("direction"), Wy && Uy.push("remapData"), Uy
      }
      static _GetEffectCreationOptions() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, jb.d)(Uy), yb && Uy.push("particlesInfos"), bb && Uy.push("logarithmicDepthConstant"), Wy && (Uy.push("vFogInfos"), Uy.push("vFogColor")), Uy
      }
      fillDefines(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, jb.k)(this, this._scene, yb), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && yb.push("#define FOG")), this._isAnimationSheetEnabled && yb.push("#define ANIMATESHEET"), this.useLogarithmicDepth && yb.push("#define LOGARITHMICDEPTH"), bb === Jy.BLENDMODE_MULTIPLY && yb.push("#define BLENDMULTIPLYMODE"), this.isLocal && yb.push("#define LOCAL"), this._useRampGradients && yb.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (yb.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            yb.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            yb.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && yb.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            yb.push("#define BILLBOARDMODE_ALL")
        }
        Wy && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), yb.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(yb, bb, Wy) {
        bb.push(...Xb._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), yb.push(...Xb._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), Wy.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, tb.h)(yb, this._imageProcessingConfigurationDefines), (0, tb.d)(Wy, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(yb) {
        var bb;
        const Wy = this._getCustomDrawWrapper(yb);
        if (Wy?.effect) return Wy;
        const Uy = [];
        this.fillDefines(Uy, yb);
        const fy = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Zy = Yb.c._PrepareStringDefines(fy, Uy),
          cb = Zy ? Yb.c.GetConfiguration(fy) : void 0;
        let Py = this._drawWrappers[fy];
        Py || (Py = this._drawWrappers[fy] = [], 0 === fy || this._renderPassObserver || (this._renderPassObserver = ((bb = this._engine)._onReleaseRenderPassObservable ?? (bb._onReleaseRenderPassObservable = new hy.c)).add((yb => {
          const bb = this._drawWrappers[yb];
          if (bb) {
            for (const yb of bb) yb?.dispose();
            delete this._drawWrappers[yb]
          }
        }))));
        let oy = Py[yb];
        oy || (oy = new Qy.c(this._engine), oy.drawContext && (oy.drawContext.useInstancing = this._useInstancing), Py[yb] = oy);
        const By = Uy.join("\n");
        if (oy.defines !== By) {
          const yb = [],
            bb = [],
            Wy = [];
          this.fillUniformsAttributesAndSamplerNames(bb, yb, Wy), Zy && (bb.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== cb?.defines.PREPASS_LOCAL_POSITION_INDEX && bb.push("inverseEmitterWM", "geometryWorldOffset")), oy.setEffect(this._engine.createEffect("particles", {
            attributes: yb,
            uniformsNames: bb,
            samplers: Wy,
            defines: By,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Zy,
            indexParameters: Zy ? {
              buffersCount: cb?._mrtCount ?? 0
            } : void 0
          }, this._engine), By)
        }
        return oy
      }
      _bindGeometryRendering(yb) {
        const bb = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Wy = Yb.c.GetConfiguration(bb);
        if (!Wy?._defines) return;
        yb.setFloat("objectId", 0), yb.setInt("meshBlendTag", 0);
        const Uy = this._scene?.activeCamera;
        if (yb.setFloat2("cameraInfo", Uy?.minZ ?? 0, Uy?.maxZ ?? 1), this.isLocal && void 0 !== Wy.defines.PREPASS_LOCAL_POSITION_INDEX) {
          yb.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const bb = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || fy.n.ZeroReadOnly, fy.j.dU[0]);
          yb.setVector3("geometryWorldOffset", bb)
        }
      }
      animate() {
        let yb, bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!bb && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (bb ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) yb = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const bb = this._calculateEmitRate();
            yb = bb * this._scaledUpdateSpeed | 0, this._newPartsExcess += bb * this._scaledUpdateSpeed - yb
          }
          if (this._newPartsExcess > 1 && (yb += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? yb = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(yb), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !bb) {
            let yb = 0;
            for (let bb = 0; bb < this._particles.length; bb++) {
              const Wy = this._particles[bb];
              this._appendParticleVertices(yb, Wy), yb += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const yb = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  bb = this._particles.length;
                bb < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, bb * yb, this._fixedCapacityHighWaterMark * yb), this._fixedCapacityHighWaterMark = bb, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const yb = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * yb), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let yb = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const bb = this._actualFrame / this.targetStopDuration;
          Uy.i.GetCurrentGradient(bb, this._emitRateGradients, ((bb, Wy, Uy) => {
            bb !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = Wy.getFactor(), this._currentEmitRateGradient = bb), yb = (0, qb.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Uy)
          }))
        }
        return yb
      }
      _appendParticleVertices(yb, bb) {
        this._appendParticleVertex(yb++, bb, 0, 0), this._useInstancing || (this._appendParticleVertex(yb++, bb, 1, 0), this._appendParticleVertex(yb++, bb, 1, 1), this._appendParticleVertex(yb, bb, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Xb.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Wy.e(324).then((() => Wy(59732))), Wy.e(318).then((() => Wy(59741)))])) : await Promise.all([Wy.e(307).then((() => Wy(59744))), Promise.all([Wy.e(300), Wy.e(336)]).then((() => Wy(59746)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== Jy.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(Jy.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(Jy.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(yb) {
        const bb = this._getWrapper(yb),
          Wy = bb.effect,
          Uy = this._engine;
        Uy.enableEffect(bb);
        const hy = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        Wy.setTexture("diffuseSampler", this.particleTexture), Wy.setMatrix("view", hy);
        const Zy = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (Wy.setMatrix("projection", Zy), this._isAnimationSheetEnabled && this.particleTexture) {
          const yb = this.particleTexture.getBaseSize();
          Wy.setFloat3("particlesInfos", this.spriteCellWidth / yb.width, this.spriteCellHeight / yb.height, this.spriteCellWidth / yb.width)
        }
        if (Wy.setVector2("translationPivot", this.translationPivot), Wy.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const yb = this._scene.activeCamera;
          Wy.setVector3("eyePosition", yb.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), Wy.setTexture("rampSampler", this._rampGradientsTexture));
        const cb = Wy.defines;
        this._scene && ((0, jb.g)(Wy, this, this._scene), this.applyFog && (0, Dy.d)(this._scene, void 0, Wy)), cb.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (hy.invertToRef(fy.j.Matrix[0]), Wy.setMatrix("invView", fy.j.Matrix[0])), Wy._multiTarget && this._bindGeometryRendering(Wy), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Uy.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, Wy) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, Wy)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Uy.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, Wy) : Uy.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, Wy), this.useLogarithmicDepth && this._scene && (0, Dy.q)(cb, Wy, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(Wy), this._setEngineBasedOnBlendMode(yb), Wy._multiTarget && Yb.c._BindZeroAlphaDiscard(Uy, Wy);
        let Py = !1;
        try {
          Yb.c._BindAttachmentsForEffect(Uy, Wy) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(Wy), this._useInstancing ? this._scene?.forceWireframe ? Uy.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Uy.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Uy.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Uy.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Py = !0)
        } finally {
          Yb.c._RestoreAttachments(Uy)
        }
        return Py ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const yb = this._engine;
        let bb;
        return yb.setState && (yb.setState(!1), this.forceDepthWrite && yb.setDepthWrite(!0)), bb = this.blendMode === Jy.BLENDMODE_MULTIPLYADD ? this._render(Jy.BLENDMODE_MULTIPLY) + this._render(Jy.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), bb
      }
      _onDispose() {}
      dispose() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), yb && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), yb && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(bb, Wy), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const yb = this._scene.YV.indexOf(this);
          yb > -1 && this._scene.YV.splice(yb, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Nby.notifyObservers(this), this.Nby.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Xb.ForceGLSL = !1;
    var nb, ub = Wy(35909);
    ! function(yb) {
      yb[yb.ATTACHED = 0] = "ATTACHED", yb[yb.END = 1] = "END"
    }(nb || (nb = {}));
    class rW {
      constructor(yb) {
        if (this.particleSystem = yb, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !yb.emitter || !yb.emitter.dispose) {
          const bb = (0, ub.b)("BABYLON.AbstractMesh");
          yb.emitter = new bb("SubemitterSystemEmitter", yb.kWy()), yb._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let yb = this.particleSystem.emitter;
        if (yb) {
          if (yb instanceof fy.n) yb = yb.clone();
          else if (-1 !== yb.getClassName().indexOf("Mesh")) {
            yb = new((0, ub.b)("BABYLON.Mesh"))("", yb.kWy()), yb.isVisible = !1
          }
        } else yb = new fy.n;
        const bb = new rW(this.particleSystem.clone(this.particleSystem.name, yb));
        return bb.particleSystem.name += "Clone", bb.type = this.type, bb.inheritDirection = this.inheritDirection, bb.inheritedVelocityAmount = this.inheritedVelocityAmount, bb.particleSystem._disposeEmitterOnDispose = !0, bb.particleSystem.disposeOnStop = !0, bb
      }
      serialize() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = {};
        return bb.type = this.type, bb.inheritDirection = this.inheritDirection, bb.inheritedVelocityAmount = this.inheritedVelocityAmount, bb.particleSystem = this.particleSystem.serialize(yb), bb
      }
      static _ParseParticleSystem(yb, bb, Wy) {
        throw (0, Hy.g)("ParseParticle")
      }
      static Parse(yb, bb, Wy) {
        const Uy = yb.particleSystem,
          hy = new rW(rW._ParseParticleSystem(Uy, bb, Wy, !0));
        return hy.type = yb.type, hy.inheritDirection = yb.inheritDirection, hy.inheritedVelocityAmount = yb.inheritedVelocityAmount, hy.particleSystem._isSubEmitter = !0, hy
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Hb = Wy(38362),
      aW = Wy(38485);
    const Fb = () => {};
    class pb {
      constructor() {
        this.particlePositionGenerator = Fb, this.particleDestinationGenerator = Fb, this.particleDirectionGenerator = Fb
      }
      startDirectionFunction(yb, bb, Wy, Uy) {
        const hy = fy.j.dU[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Fb) this.particleDirectionGenerator(-1, Wy, hy);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Fb) {
          this.particleDestinationGenerator(-1, Wy, hy);
          const yb = fy.j.dU[1];
          hy.subtractToRef(Wy.position, yb), yb.scaleToRef(1 / Wy.lifeTime, hy)
        } else hy.set(0, 0, 0);
        Uy ? bb.Coy(hy) : fy.n.TransformNormalToRef(hy, yb, bb)
      }
      startPositionFunction(yb, bb, Wy, Uy) {
        const hy = fy.j.dU[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Fb ? this.particlePositionGenerator(-1, Wy, hy) : hy.set(0, 0, 0), Uy ? bb.Coy(hy) : fy.n.TransformCoordinatesToRef(hy, yb, bb)
      }
      clone() {
        const yb = new pb;
        return ey.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {}
      buildUniformLayout(yb) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const yb = {};
        return yb.type = this.getClassName(), yb.particlePositionGenerator = this.particlePositionGenerator, yb.particleDestinationGenerator = this.particleDestinationGenerator, yb
      }
      parse(yb) {
        yb.particlePositionGenerator && (this.particlePositionGenerator = yb.particlePositionGenerator), yb.particleDestinationGenerator && (this.particleDestinationGenerator = yb.particleDestinationGenerator)
      }
    }
    const Lb = fy.n.Zero(),
      Qb = fy.n.Zero(),
      jW = fy.n.Zero();
    class Db {
      constructor() {
        this.strength = 0, this.position = fy.n.Zero()
      }
      _processParticle(yb, bb) {
        this.position.subtractToRef(yb.position, Lb);
        const Wy = Lb.lengthSquared() + 1;
        Lb.normalize().scaleToRef(this.strength / Wy, Qb), Qb.scaleToRef(bb._tempScaledUpdateSpeed, jW), yb.direction.addInPlace(jW)
      }
      serialize() {
        return {
          position: this.position.hBy(),
          strength: this.strength
        }
      }
    }
    const tW = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class wb extends Xb {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = yb => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const bb = Math.floor(Math.random() * this._subEmitters.length);
          for (const Wy of this._subEmitters[bb])
            if (1 === Wy.type) {
              const bb = Wy.clone();
              yb._inheritParticleInfoToSubEmitter(bb), bb.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(bb.particleSystem), bb.particleSystem.start()
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
      set flowMap(yb) {
        this._flowMap !== yb && (this._flowMap = yb, this._flowMapUpdate && (Mb(this._flowMapUpdate), this._flowMapUpdate = null), yb && (this._flowMapUpdate = {
          process: yb => {
            const bb = this.kWy()?.getTransformMatrix();
            this._flowMap._processParticle(yb, this.flowMapStrength * this._tempScaledUpdateSpeed, bb)
          },
          previousItem: null,
          nextItem: null
        }, iW(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(yb) {
        super.addAttractor(yb), 1 === this._attractors.length && (this._attractorUpdate = {
          process: yb => {
            for (const bb of this._attractors) bb._processParticle(yb, this)
          },
          previousItem: null,
          nextItem: null
        }, iW(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(yb) {
        super.removeAttractor(yb), 0 === this._attractors.length && this._attractorUpdate && Mb(this._attractorUpdate)
      }
      start() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(yb)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const yb of this.subEmitters) yb instanceof wb ? this._subEmitters.push([new rW(yb)]) : yb instanceof rW ? this._subEmitters.push([yb]) : yb instanceof Array && this._subEmitters.push(yb)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const yb of this.activeSubSystems) yb.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const yb = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== yb && this._rootParticleSystem.activeSubSystems.splice(yb, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(yb) {
        yb && this._stopSubEmitters()
      }
      _prepareParticle(yb) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const bb = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          yb._properties.attachedSubEmitters = [];
          for (const Wy of bb)
            if (0 === Wy.type) {
              const bb = Wy.clone();
              yb._properties.attachedSubEmitters.push(bb), bb.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), yb && this.particles)
          for (const Wy of this.particles)
            if (Wy._properties.attachedSubEmitters)
              for (let yb = Wy._properties.attachedSubEmitters.length - 1; yb >= 0; yb -= 1) Wy._properties.attachedSubEmitters[yb].dispose();
        if (bb && this.activeSubSystems)
          for (let Wy = this.activeSubSystems.length - 1; Wy >= 0; Wy -= 1) this.activeSubSystems[Wy].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let yb = 0; yb < this._subEmitters.length; yb++)
            for (const bb of this._subEmitters[yb]) bb.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(yb, bb, Wy, Uy) {
        let hy;
        hy = Wy instanceof Hb.d ? null : Wy;
        const Zy = (0, ub.b)("BABYLON.Texture");
        if (Zy && hy)
          if (yb.texture) bb.particleTexture = Zy.Parse(yb.texture, hy, Uy);
          else if (yb.textureName) {
          const Wy = yb.textureSettings;
          if (bb.particleTexture = new Zy(Uy + yb.textureName, hy, !1, void 0 === yb.invertY || yb.invertY, Wy ? Wy.samplingMode : void 0), bb.particleTexture.name = yb.textureName, Wy) {
            const yb = bb.particleTexture;
            for (const bb of tW) void 0 !== Wy[bb] && (yb[bb] = Wy[bb])
          }
        }
        if (yb.emitterId || 0 === yb.emitterId || void 0 !== yb.emitter ? (yb.emitterId || 0 === yb.emitterId) && hy ? (bb.emitter = hy.getLastMeshById(yb.emitterId), bb.emitter || (bb.emitter = fy.n.Zero())) : bb.emitter = fy.n.FromArray(yb.emitter) : bb.emitter = fy.n.Zero(), bb.isLocal = !!yb.isLocal, void 0 !== yb.renderingGroupId && (bb.renderingGroupId = yb.renderingGroupId), void 0 !== yb.isBillboardBased && (bb.isBillboardBased = yb.isBillboardBased), void 0 !== yb.billboardMode && (bb.billboardMode = yb.billboardMode), void 0 !== yb.useLogarithmicDepth && (bb.useLogarithmicDepth = yb.useLogarithmicDepth), yb.animations) {
          for (let Wy = 0; Wy < yb.animations.length; Wy++) {
            const Uy = yb.animations[Wy],
              hy = (0, ub.b)("BABYLON.Animation");
            hy && bb.animations.push(hy.Parse(Uy))
          }
          bb.beginAnimationOnStart = yb.beginAnimationOnStart, bb.beginAnimationFrom = yb.beginAnimationFrom, bb.beginAnimationTo = yb.beginAnimationTo, bb.beginAnimationLoop = yb.beginAnimationLoop
        }
        if (yb.autoAnimate && hy && hy.beginAnimation(bb, yb.autoAnimateFrom, yb.autoAnimateTo, yb.autoAnimateLoop, yb.autoAnimateSpeed || 1), bb.startDelay = 0 | yb.startDelay, bb.minAngularSpeed = yb.minAngularSpeed, bb.maxAngularSpeed = yb.maxAngularSpeed, bb.minSize = yb.minSize, bb.maxSize = yb.maxSize, yb.minScaleX && (bb.minScaleX = yb.minScaleX, bb.maxScaleX = yb.maxScaleX, bb.minScaleY = yb.minScaleY, bb.maxScaleY = yb.maxScaleY), void 0 !== yb.preWarmCycles && (bb.preWarmCycles = yb.preWarmCycles, bb.preWarmStepOffset = yb.preWarmStepOffset), void 0 !== yb.minInitialRotation && (bb.minInitialRotation = yb.minInitialRotation, bb.maxInitialRotation = yb.maxInitialRotation), bb.minLifeTime = yb.minLifeTime, bb.maxLifeTime = yb.maxLifeTime, bb.minEmitPower = yb.minEmitPower, bb.maxEmitPower = yb.maxEmitPower, bb.emitRate = yb.emitRate, bb.gravity = fy.n.FromArray(yb.gravity), yb.noiseStrength && (bb.noiseStrength = fy.n.FromArray(yb.noiseStrength)), bb.color1 = By.e.FromArray(yb.color1), bb.color2 = By.e.FromArray(yb.color2), bb.colorDead = By.e.FromArray(yb.colorDead), bb.updateSpeed = yb.updateSpeed, bb.targetStopDuration = yb.targetStopDuration, bb.blendMode = yb.blendMode, yb.colorGradients)
          for (const fy of yb.colorGradients) bb.addColorGradient(fy.gradient, By.e.FromArray(fy.color1), fy.color2 ? By.e.FromArray(fy.color2) : void 0);
        if (yb.rampGradients) {
          for (const Wy of yb.rampGradients) bb.addRampGradient(Wy.gradient, By.d.FromArray(Wy.color));
          bb.useRampGradients = yb.useRampGradients
        }
        if (yb.colorRemapGradients)
          for (const fy of yb.colorRemapGradients) bb.addColorRemapGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.alphaRemapGradients)
          for (const fy of yb.alphaRemapGradients) bb.addAlphaRemapGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.sizeGradients)
          for (const fy of yb.sizeGradients) bb.addSizeGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.angularSpeedGradients)
          for (const fy of yb.angularSpeedGradients) bb.addAngularSpeedGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.velocityGradients)
          for (const fy of yb.velocityGradients) bb.addVelocityGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.dragGradients)
          for (const fy of yb.dragGradients) bb.addDragGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.emitRateGradients)
          for (const fy of yb.emitRateGradients) bb.addEmitRateGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.startSizeGradients)
          for (const fy of yb.startSizeGradients) bb.addStartSizeGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.lifeTimeGradients)
          for (const fy of yb.lifeTimeGradients) bb.addLifeTimeGradient(fy.gradient, void 0 !== fy.factor1 ? fy.factor1 : fy.factor, fy.factor2);
        if (yb.limitVelocityGradients) {
          for (const Wy of yb.limitVelocityGradients) bb.addLimitVelocityGradient(Wy.gradient, void 0 !== Wy.factor1 ? Wy.factor1 : Wy.factor, Wy.factor2);
          bb.limitVelocityDamping = yb.limitVelocityDamping
        }
        if (yb.noiseTexture && hy) {
          const Wy = (0, ub.b)("BABYLON.ProceduralTexture");
          bb.noiseTexture = Wy.Parse(yb.noiseTexture, hy, Uy)
        }
        let cb;
        if (yb.particleEmitterType) {
          switch (yb.particleEmitterType.type) {
            case "SphereParticleEmitter":
              cb = new Ey;
              break;
            case "SphereDirectedParticleEmitter":
              cb = new ly;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              cb = new Cy;
              break;
            case "ConeDirectedParticleEmitter":
              cb = new Ty;
              break;
            case "CylinderParticleEmitter":
              cb = new mb.g;
              break;
            case "CylinderDirectedParticleEmitter":
              cb = new mb.e;
              break;
            case "HemisphericParticleEmitter":
              cb = new Sy;
              break;
            case "PointParticleEmitter":
              cb = new sy;
              break;
            case "MeshParticleEmitter":
              cb = new Vy;
              break;
            case "CustomParticleEmitter":
              cb = new pb;
              break;
            default:
              cb = new Ky.d
          }
          cb.parse(yb.particleEmitterType, hy)
        } else cb = new Ky.d, cb.parse(yb, hy);
        bb.particleEmitterType = cb, bb.startSpriteCellID = yb.startSpriteCellID, bb.endSpriteCellID = yb.endSpriteCellID, bb.spriteCellLoop = yb.spriteCellLoop ?? !0, bb.spriteCellWidth = yb.spriteCellWidth, bb.spriteCellHeight = yb.spriteCellHeight, bb.spriteCellChangeSpeed = yb.spriteCellChangeSpeed, bb.spriteRandomStartCell = yb.spriteRandomStartCell, bb.disposeOnStop = yb.disposeOnStop ?? !1, bb.manualEmitCount = yb.manualEmitCount ?? -1
      }
      static Parse(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          hy = arguments.length > 4 ? arguments[4] : void 0;
        const Zy = yb.name;
        let cb, Py, oy = null,
          Ky = null;
        if (bb instanceof Hb.d ? cb = bb : (Py = bb, cb = Py.xh()), yb.customShader && (0, Hy.d)(cb.createEffectForParticles)) {
          Ky = yb.customShader;
          const bb = Ky.shaderOptions.defines.length > 0 ? Ky.shaderOptions.defines.join("\n") : "";
          oy = cb.createEffectForParticles(Ky.shaderPath.fragmentElement, Ky.shaderOptions.uniforms, Ky.shaderOptions.samplers, bb)
        }
        const ey = new wb(Zy, hy || yb.Hy, bb, oy, yb.isAnimationSheetEnabled);
        if (ey.customShader = Ky, ey._rootUrl = Wy, yb.id && (ey.id = yb.id), yb.subEmitters) {
          ey.subEmitters = [];
          for (const Uy of yb.subEmitters) {
            const yb = [];
            for (const hy of Uy) yb.push(rW.Parse(hy, bb, Wy));
            ey.subEmitters.push(yb)
          }
        }
        if (yb.attractors)
          for (const By of yb.attractors) {
            const yb = new Db;
            yb.position = fy.n.FromArray(By.position), yb.strength = By.strength, ey.addAttractor(yb)
          }
        return wb._Parse(yb, ey, bb, Wy), yb.textureMask && (ey.textureMask = By.e.FromArray(yb.textureMask)), yb.worldOffset && (ey.worldOffset = fy.n.FromArray(yb.worldOffset)), yb.preventAutoStart && (ey.preventAutoStart = yb.preventAutoStart), yb.metadata && (ey.metadata = yb.metadata), Uy || ey.preventAutoStart || ey.start(), ey
      }
      serialize() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = {};
        if (wb._Serialize(bb, this, yb), bb.textureMask = this.textureMask.hBy(), bb.customShader = this.customShader, bb.preventAutoStart = this.preventAutoStart, bb.worldOffset = this.worldOffset.hBy(), this.metadata && (bb.metadata = this.metadata), this.subEmitters) {
          bb.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const Wy of this._subEmitters) {
            const Uy = [];
            for (const bb of Wy) bb.particleSystem.doNotSerialize || Uy.push(bb.serialize(yb));
            bb.subEmitters.push(Uy)
          }
        }
        if (this._attractors && this._attractors.length) {
          bb.attractors = [];
          for (const yb of this._attractors) bb.attractors.push(yb.serialize())
        }
        return bb
      }
      static _Serialize(yb, bb, Wy) {
        if (yb.name = bb.name, yb.id = bb.id, yb.Hy = bb.getCapacity(), yb.disposeOnStop = bb.disposeOnStop, yb.manualEmitCount = bb.manualEmitCount, bb.emitter.position) {
          const Wy = bb.emitter;
          yb.emitterId = Wy.id
        } else {
          const Wy = bb.emitter;
          yb.emitter = Wy.hBy()
        }
        if (bb.particleEmitterType && (yb.particleEmitterType = bb.particleEmitterType.serialize()), bb.particleTexture)
          if (Wy) yb.texture = bb.particleTexture.serialize();
          else {
            const Wy = bb.particleTexture;
            yb.textureName = bb.particleTexture.name, yb.invertY = !!Wy._invertY;
            const Uy = {};
            for (const yb of tW) Uy[yb] = Wy[yb];
            Uy.samplingMode = Wy.samplingMode, yb.textureSettings = Uy
          } yb.isLocal = bb.isLocal, aW.c.AppendSerializedAnimations(bb, yb), yb.beginAnimationOnStart = bb.beginAnimationOnStart, yb.beginAnimationFrom = bb.beginAnimationFrom, yb.beginAnimationTo = bb.beginAnimationTo, yb.beginAnimationLoop = bb.beginAnimationLoop, yb.startDelay = bb.startDelay, yb.renderingGroupId = bb.renderingGroupId, yb.isBillboardBased = bb.isBillboardBased, yb.billboardMode = bb.billboardMode, yb.minAngularSpeed = bb.minAngularSpeed, yb.maxAngularSpeed = bb.maxAngularSpeed, yb.minSize = bb.minSize, yb.maxSize = bb.maxSize, yb.minScaleX = bb.minScaleX, yb.maxScaleX = bb.maxScaleX, yb.minScaleY = bb.minScaleY, yb.maxScaleY = bb.maxScaleY, yb.minEmitPower = bb.minEmitPower, yb.maxEmitPower = bb.maxEmitPower, yb.minLifeTime = bb.minLifeTime, yb.maxLifeTime = bb.maxLifeTime, yb.emitRate = bb.emitRate, yb.gravity = bb.gravity.hBy(), yb.noiseStrength = bb.noiseStrength.hBy(), yb.color1 = bb.color1.hBy(), yb.color2 = bb.color2.hBy(), yb.colorDead = bb.colorDead.hBy(), yb.updateSpeed = bb.updateSpeed, yb.targetStopDuration = bb.targetStopDuration, yb.blendMode = bb.blendMode, yb.preWarmCycles = bb.preWarmCycles, yb.preWarmStepOffset = bb.preWarmStepOffset, yb.minInitialRotation = bb.minInitialRotation, yb.maxInitialRotation = bb.maxInitialRotation, yb.startSpriteCellID = bb.startSpriteCellID, yb.spriteCellLoop = bb.spriteCellLoop, yb.endSpriteCellID = bb.endSpriteCellID, yb.spriteCellChangeSpeed = bb.spriteCellChangeSpeed, yb.spriteCellWidth = bb.spriteCellWidth, yb.spriteCellHeight = bb.spriteCellHeight, yb.spriteRandomStartCell = bb.spriteRandomStartCell, yb.isAnimationSheetEnabled = bb.isAnimationSheetEnabled, yb.useLogarithmicDepth = bb.useLogarithmicDepth;
        const Uy = bb.getColorGradients();
        if (Uy) {
          yb.colorGradients = [];
          for (const bb of Uy) {
            const Wy = {
              gradient: bb.gradient,
              color1: bb.color1.hBy()
            };
            bb.color2 ? Wy.color2 = bb.color2.hBy() : Wy.color2 = bb.color1.hBy(), yb.colorGradients.push(Wy)
          }
        }
        const hy = bb.getRampGradients();
        if (hy) {
          yb.rampGradients = [];
          for (const bb of hy) {
            const Wy = {
              gradient: bb.gradient,
              color: bb.color.hBy()
            };
            yb.rampGradients.push(Wy)
          }
          yb.useRampGradients = bb.useRampGradients
        }
        const fy = bb.getColorRemapGradients();
        if (fy) {
          yb.colorRemapGradients = [];
          for (const bb of fy) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.colorRemapGradients.push(Wy)
          }
        }
        const Zy = bb.getAlphaRemapGradients();
        if (Zy) {
          yb.alphaRemapGradients = [];
          for (const bb of Zy) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.alphaRemapGradients.push(Wy)
          }
        }
        const cb = bb.getSizeGradients();
        if (cb) {
          yb.sizeGradients = [];
          for (const bb of cb) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.sizeGradients.push(Wy)
          }
        }
        const Py = bb.getAngularSpeedGradients();
        if (Py) {
          yb.angularSpeedGradients = [];
          for (const bb of Py) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.angularSpeedGradients.push(Wy)
          }
        }
        const oy = bb.getVelocityGradients();
        if (oy) {
          yb.velocityGradients = [];
          for (const bb of oy) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.velocityGradients.push(Wy)
          }
        }
        const By = bb.getDragGradients();
        if (By) {
          yb.dragGradients = [];
          for (const bb of By) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.dragGradients.push(Wy)
          }
        }
        const Ky = bb.getEmitRateGradients();
        if (Ky) {
          yb.emitRateGradients = [];
          for (const bb of Ky) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.emitRateGradients.push(Wy)
          }
        }
        const ey = bb.getStartSizeGradients();
        if (ey) {
          yb.startSizeGradients = [];
          for (const bb of ey) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.startSizeGradients.push(Wy)
          }
        }
        const qb = bb.getLifeTimeGradients();
        if (qb) {
          yb.lifeTimeGradients = [];
          for (const bb of qb) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.lifeTimeGradients.push(Wy)
          }
        }
        const sy = bb.getLimitVelocityGradients();
        if (sy) {
          yb.limitVelocityGradients = [];
          for (const bb of sy) {
            const Wy = {
              gradient: bb.gradient,
              factor1: bb.factor1
            };
            void 0 !== bb.factor2 ? Wy.factor2 = bb.factor2 : Wy.factor2 = bb.factor1, yb.limitVelocityGradients.push(Wy)
          }
          yb.limitVelocityDamping = bb.limitVelocityDamping
        }
        bb.noiseTexture && (yb.noiseTexture = bb.noiseTexture.serialize())
      }
      clone(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = {
          ...this._customWrappers
        };
        let hy = null;
        const fy = this._engine;
        if ((0, Hy.d)(fy.createEffectForParticles) && null != this.customShader) {
          hy = this.customShader;
          const yb = hy.shaderOptions.defines.length > 0 ? hy.shaderOptions.defines.join("\n") : "",
            bb = fy.createEffectForParticles(hy.shaderPath.fragmentElement, hy.shaderOptions.uniforms, hy.shaderOptions.samplers, yb);
          Uy[0] ? Uy[0].effect = bb : this.setCustomEffect(bb, 0)
        }
        const Zy = this.serialize(Wy),
          cb = !1 === Wy && this.particleTexture ? this.particleTexture.clone() : null;
        cb && (Zy.textureName = void 0);
        const Py = wb.Parse(Zy, this._scene || this._engine, this._rootUrl);
        return Py.name = yb, Py.customShader = hy, Py._customWrappers = Uy, cb && (Py.particleTexture = cb), void 0 === bb && (bb = this.emitter), this.noiseTexture && (Py.noiseTexture = this.noiseTexture.clone()), Py.emitter = bb, this.preventAutoStart || Py.start(), Py
      }
    }
    wb.BILLBOARDMODE_Y = 2, wb.BILLBOARDMODE_ALL = 7, wb.BILLBOARDMODE_STRETCHED = 8, wb.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let kW = !1;
    kW || (kW = !0, rW._ParseParticleSystem = wb.Parse)
  },
  40102: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      SkyMaterial: () => Cy,
      _MaxColorValueForRenderTarget: () => mb
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(38485),
      Zy = Wy(35856),
      cb = Wy(38777),
      Py = Wy(38841),
      oy = Wy(40059),
      By = Wy(39719),
      Ky = Wy(38564),
      ey = Wy(35909),
      qb = Wy(38870),
      sy = Wy(38846),
      Sy = Wy(38830),
      Ey = Wy(38824);
    class ly extends cb.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function mb(yb) {
      switch (yb) {
        case oy.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case oy.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Cy = (() => {
      var yb;
      let bb, cb, oy, ey, Cy, Ty, Vy, Jy, gb, Gy, Oy, Ry, vb, ib, My, Yy = Py.d,
        Xy = [],
        ny = [],
        uy = [],
        rb = [],
        Hy = [],
        ab = [],
        Fy = [],
        py = [],
        Ly = [],
        Qy = [],
        jb = [],
        Dy = [],
        tb = [],
        wy = [],
        kb = [],
        Ny = [],
        zb = [],
        Iy = [],
        xb = [],
        Ay = [],
        dy = [],
        yW = [],
        bW = [],
        Wb = [],
        Ub = [],
        hb = [],
        fb = [],
        Zb = [],
        cW = [],
        Pb = [];
      return yb = class extends Yy {
        constructor(yb, bb) {
          super(yb, bb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Uy.l)(this, Xy, 1), this.turbidity = ((0, Uy.l)(this, ny), (0, Uy.l)(this, uy, 10)), this.rayleigh = ((0, Uy.l)(this, rb), (0, Uy.l)(this, Hy, 2)), this.mieCoefficient = ((0, Uy.l)(this, ab), (0, Uy.l)(this, Fy, .005)), this.mieDirectionalG = ((0, Uy.l)(this, py), (0, Uy.l)(this, Ly, .8)), this.distance = ((0, Uy.l)(this, Qy), (0, Uy.l)(this, jb, 500)), this.inclination = ((0, Uy.l)(this, Dy), (0, Uy.l)(this, tb, .49)), this.azimuth = ((0, Uy.l)(this, wy), (0, Uy.l)(this, kb, .25)), this.sunPosition = ((0, Uy.l)(this, Ny), (0, Uy.l)(this, zb, new Zy.dU(0, 100, 0))), this.useSunPosition = ((0, Uy.l)(this, Iy), (0, Uy.l)(this, xb, !1)), this.cameraOffset = ((0, Uy.l)(this, Ay), (0, Uy.l)(this, dy, Zy.dU.Zero())), this.up = ((0, Uy.l)(this, yW), (0, Uy.l)(this, bW, Zy.dU.Up())), this.dithering = ((0, Uy.l)(this, Wb), (0, Uy.l)(this, Ub, !1)), this.rawHdrOutput = ((0, Uy.l)(this, hb), (0, Uy.l)(this, fb, !1)), this.cloudiness = ((0, Uy.l)(this, Zb), (0, Uy.l)(this, cW, 0)), this._cameraPosition = ((0, Uy.l)(this, Pb), Zy.dU.Zero()), this._skyOrientation = new Zy.Quaternion
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
        isReadyForSubMesh(bb, Wy) {
          const Uy = Wy._drawWrapper;
          if (this.isFrozen && Uy.effect && Uy._wasPreviouslyReady) return !0;
          Wy.materialDefines || (Wy.materialDefines = new ly);
          const hy = Wy.materialDefines,
            fy = this.kWy();
          if (this._isReadyForSubMesh(Wy)) return !0;
          if ((0, Ey.cb)(bb, fy, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, hy, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, Ey.R)(bb, hy, !0, !1), hy.IMAGEPROCESSINGPOSTPROCESS !== fy.imageProcessingConfiguration.applyByPostProcess && hy.markAsMiscDirty(), hy.DITHER !== this.dithering && hy.markAsMiscDirty(), hy.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && hy.markAsMiscDirty(), hy.isDirty) {
            hy.markAsProcessed(), fy.resetCachedMaterial();
            const bb = new sy.c;
            hy.FOG && bb.addFallback(1, "FOG"), hy.IMAGEPROCESSINGPOSTPROCESS = fy.imageProcessingConfiguration.applyByPostProcess, hy.DITHER = this.dithering, hy.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Uy = [By.g.PositionKind];
            hy.VERTEXCOLOR && Uy.push(By.g.ColorKind);
            const Zy = "sky",
              cb = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Sy.d)(cb);
            const Py = hy.toString();
            Wy.setEffect(fy.xh().createEffect(Zy, {
              attributes: Uy,
              uniformsNames: cb,
              uniformBuffersNames: [],
              samplers: [],
              defines: Py,
              fallbacks: bb,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: yb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, fy.xh()), hy, this._materialContext)
          }
          return !(!Wy.effect || !Wy.effect.isReady()) && (hy._renderId = fy.getRenderId(), Uy._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(yb, bb, Wy) {
          const Uy = this.kWy(),
            hy = Wy.materialDefines;
          if (!hy) return;
          const fy = Wy.effect;
          if (!fy) return;
          this._activeEffect = fy, this.bindOnlyWorldMatrix(yb), this._activeEffect.setMatrix("viewProjection", Uy.getTransformMatrix()), this._mustRebind(Uy, fy, Wy) && ((0, Sy.g)(fy, this, Uy), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, Ey.q)(hy, fy, Uy)), Uy.fogEnabled && bb.applyFog && Uy.fogMode !== Ky.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", Uy.getViewMatrix()), (0, Ey.d)(Uy, bb, this._activeEffect, this.rawHdrOutput);
          const cb = Uy.activeCamera;
          if (cb) {
            const yb = cb.getWorldMatrix();
            this._cameraPosition.x = yb.m[12], this._cameraPosition.y = yb.m[13], this._cameraPosition.z = yb.m[14], this._activeEffect.setVector3("cameraPosition", Zy.TmpVectors.dU[0].Coy(this._cameraPosition).TBy(Uy.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const yb = Uy.xh()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", mb(yb?.texture?.type))
          }
          if (!this.useSunPosition) {
            const yb = Math.PI * (this.inclination - .5),
              bb = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(bb) * Math.cos(yb), this.sunPosition.y = this.distance * Math.sin(-yb), this.sunPosition.z = this.distance * Math.sin(bb) * Math.cos(yb), Zy.Quaternion.FromUnitVectorsToRef(Zy.dU.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(bb, this._activeEffect, Wy)
        }
        getAnimatables() {
          return []
        }
        dispose(yb) {
          super.dispose(yb)
        }
        clone(bb) {
          return fy.c.Clone((() => new yb(bb, this.kWy())), this)
        }
        serialize() {
          const yb = super.serialize();
          return yb.customType = "BABYLON.SkyMaterial", yb
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(bb, Wy, Uy) {
          return fy.c.Parse((() => new yb(bb.name, Wy)), bb, Wy, Uy)
        }
      }, (() => {
        const Wy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yy[Symbol.metadata] ?? null) : void 0;
        bb = [(0, hy.T)()], cb = [(0, hy.T)()], oy = [(0, hy.T)()], ey = [(0, hy.T)()], Cy = [(0, hy.T)()], Ty = [(0, hy.T)()], Vy = [(0, hy.T)()], Jy = [(0, hy.T)()], gb = [(0, hy.P)()], Gy = [(0, hy.T)()], Oy = [(0, hy.P)()], Ry = [(0, hy.P)()], vb = [(0, hy.T)()], ib = [(0, hy.T)()], My = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: yb => "luminance" in yb,
            get: yb => yb.luminance,
            set: (yb, bb) => {
              yb.luminance = bb
            }
          },
          metadata: Wy
        }, Xy, ny), (0, Uy.j)(null, null, cb, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: yb => "turbidity" in yb,
            get: yb => yb.turbidity,
            set: (yb, bb) => {
              yb.turbidity = bb
            }
          },
          metadata: Wy
        }, uy, rb), (0, Uy.j)(null, null, oy, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: yb => "rayleigh" in yb,
            get: yb => yb.rayleigh,
            set: (yb, bb) => {
              yb.rayleigh = bb
            }
          },
          metadata: Wy
        }, Hy, ab), (0, Uy.j)(null, null, ey, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: yb => "mieCoefficient" in yb,
            get: yb => yb.mieCoefficient,
            set: (yb, bb) => {
              yb.mieCoefficient = bb
            }
          },
          metadata: Wy
        }, Fy, py), (0, Uy.j)(null, null, Cy, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: yb => "mieDirectionalG" in yb,
            get: yb => yb.mieDirectionalG,
            set: (yb, bb) => {
              yb.mieDirectionalG = bb
            }
          },
          metadata: Wy
        }, Ly, Qy), (0, Uy.j)(null, null, Ty, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: yb => "distance" in yb,
            get: yb => yb.distance,
            set: (yb, bb) => {
              yb.distance = bb
            }
          },
          metadata: Wy
        }, jb, Dy), (0, Uy.j)(null, null, Vy, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: yb => "inclination" in yb,
            get: yb => yb.inclination,
            set: (yb, bb) => {
              yb.inclination = bb
            }
          },
          metadata: Wy
        }, tb, wy), (0, Uy.j)(null, null, Jy, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: yb => "azimuth" in yb,
            get: yb => yb.azimuth,
            set: (yb, bb) => {
              yb.azimuth = bb
            }
          },
          metadata: Wy
        }, kb, Ny), (0, Uy.j)(null, null, gb, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: yb => "sunPosition" in yb,
            get: yb => yb.sunPosition,
            set: (yb, bb) => {
              yb.sunPosition = bb
            }
          },
          metadata: Wy
        }, zb, Iy), (0, Uy.j)(null, null, Gy, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: yb => "useSunPosition" in yb,
            get: yb => yb.useSunPosition,
            set: (yb, bb) => {
              yb.useSunPosition = bb
            }
          },
          metadata: Wy
        }, xb, Ay), (0, Uy.j)(null, null, Oy, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: yb => "cameraOffset" in yb,
            get: yb => yb.cameraOffset,
            set: (yb, bb) => {
              yb.cameraOffset = bb
            }
          },
          metadata: Wy
        }, dy, yW), (0, Uy.j)(null, null, Ry, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: yb => "up" in yb,
            get: yb => yb.up,
            set: (yb, bb) => {
              yb.up = bb
            }
          },
          metadata: Wy
        }, bW, Wb), (0, Uy.j)(null, null, vb, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: yb => "dithering" in yb,
            get: yb => yb.dithering,
            set: (yb, bb) => {
              yb.dithering = bb
            }
          },
          metadata: Wy
        }, Ub, hb), (0, Uy.j)(null, null, ib, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: yb => "rawHdrOutput" in yb,
            get: yb => yb.rawHdrOutput,
            set: (yb, bb) => {
              yb.rawHdrOutput = bb
            }
          },
          metadata: Wy
        }, fb, Zb), (0, Uy.j)(null, null, My, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: yb => "cloudiness" in yb,
            get: yb => yb.cloudiness,
            set: (yb, bb) => {
              yb.cloudiness = bb
            }
          },
          metadata: Wy
        }, cW, Pb), Wy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wy
        })
      })(), yb._ShaderLoader = new qb.d((() => [Wy.e(308).then((() => Wy(59748))), Wy.e(301).then((() => Wy(59757)))]), (() => [Wy.e(325).then((() => Wy(59763))), Wy.e(319).then((() => Wy(59770)))])), yb
    })();
    (0, ey.e)("BABYLON.SkyMaterial", Cy)
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);